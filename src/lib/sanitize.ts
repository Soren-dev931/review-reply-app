/**
 * Input sanitization for Typani — prevents prompt injection in review text.
 */

/**
 * Strip prompt injection patterns from user input.
 */
export function stripInjectionPatterns(input: string): string {
  if (typeof input !== 'string') return ''

  return input
    .replace(/\b(system|assistant)\s*:/gi, '')
    .replace(/ignore\s+(all\s+)?(previous|above|prior)\s+(instructions?|prompts?|rules?)/gi, '')
    .replace(/disregard\s+(all\s+)?(previous|above|prior)\s+(instructions?|prompts?|rules?)/gi, '')
    .replace(/forget\s+(all\s+)?(previous|above|prior)\s+(instructions?|prompts?|rules?)/gi, '')
    .replace(/<\/?(?:system|assistant|user|prompt|instruction)[^>]*>/gi, '')
    .trim()
}

/**
 * Sanitize review text: trim, enforce max length, strip injection patterns.
 */
export function sanitizeReviewText(input: unknown, maxLength: number = 5000): string {
  if (typeof input !== 'string') return ''
  return stripInjectionPatterns(input.trim().slice(0, maxLength))
}
