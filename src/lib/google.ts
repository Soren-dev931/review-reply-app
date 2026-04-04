import { google } from 'googleapis'
import { createClient as createServiceClient } from '@supabase/supabase-js'

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!
const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI || 'https://typani.com/api/auth/google/callback'

const SCOPES = [
  'https://www.googleapis.com/auth/business.manage',
  'openid',
  'email',
]

// Admin Supabase client for token operations (bypasses RLS)
function getAdminClient() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export function createOAuth2Client() {
  return new google.auth.OAuth2(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT_URI
  )
}

export function getGoogleAuthUrl(state?: string): string {
  const oauth2Client = createOAuth2Client()
  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent', // Force refresh token every time
    state: state || '',
  })
}

export async function exchangeCodeForTokens(code: string) {
  const oauth2Client = createOAuth2Client()
  const { tokens } = await oauth2Client.getToken(code)
  return tokens
}

export async function refreshAccessToken(refreshToken: string) {
  const oauth2Client = createOAuth2Client()
  oauth2Client.setCredentials({ refresh_token: refreshToken })
  const { credentials } = await oauth2Client.refreshAccessToken()
  return credentials
}

/**
 * Get a valid OAuth2 client for a user. Handles token refresh automatically.
 * Returns null if user has no Google connection or refresh fails.
 */
export async function getGoogleClient(userId: string) {
  const admin = getAdminClient()

  const { data: connection, error } = await admin
    .from('google_connections')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (error || !connection) return null

  const oauth2Client = createOAuth2Client()

  // Check if token is expired (with 5-min buffer)
  const isExpired = new Date(connection.token_expires_at).getTime() < Date.now() + 5 * 60 * 1000

  if (isExpired) {
    try {
      const newCreds = await refreshAccessToken(connection.refresh_token)

      const expiresAt = newCreds.expiry_date
        ? new Date(newCreds.expiry_date).toISOString()
        : new Date(Date.now() + 3600 * 1000).toISOString()

      // Update tokens in DB
      await admin
        .from('google_connections')
        .update({
          access_token: newCreds.access_token,
          token_expires_at: expiresAt,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId)

      oauth2Client.setCredentials({
        access_token: newCreds.access_token,
        refresh_token: connection.refresh_token,
      })
    } catch (err) {
      console.error('Google token refresh failed for user', userId, err)
      // Mark connection as broken by clearing tokens
      await admin
        .from('google_connections')
        .delete()
        .eq('user_id', userId)
      return null
    }
  } else {
    oauth2Client.setCredentials({
      access_token: connection.access_token,
      refresh_token: connection.refresh_token,
    })
  }

  return oauth2Client
}

/**
 * Get the Google Business Account ID for a user.
 * Most users have exactly 1 account.
 */
export async function getBusinessAccountId(oauth2Client: ReturnType<typeof createOAuth2Client>) {
  const res = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
    headers: {
      Authorization: `Bearer ${oauth2Client.credentials.access_token}`,
    },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Failed to list Google Business accounts: ${res.status} ${text}`)
  }

  const data = await res.json()
  return data.accounts || []
}
