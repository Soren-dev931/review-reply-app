import { chromium } from 'playwright';

const BASE = 'https://thereviewly.io';
const EMAIL = 'support@rizemarket.co';
const PASS = 'Pass123@';
const OUT = '/root/.openclaw/workspace/reviewly/public/images/screenshots';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  // ── Login ──
  console.log('Logging in...');
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${OUT}/login-page.webp`, type: 'png' });

  // Fill login form
  const emailInput = page.locator('input[type="email"]');
  const passInput = page.locator('input[type="password"]');
  
  if (await emailInput.count() > 0) {
    await emailInput.fill(EMAIL);
    await passInput.fill(PASS);
    await page.screenshot({ path: `${OUT}/login-filled.webp`, type: 'png' });
    
    // Click submit
    const submitBtn = page.locator('button[type="submit"], button:has-text("Log in"), button:has-text("Sign in")');
    if (await submitBtn.count() > 0) {
      await submitBtn.first().click();
      await page.waitForTimeout(5000);
      console.log('Login submitted, current URL:', page.url());
    }
  }

  // ── Landing Page Screenshots ──
  console.log('Taking landing page screenshots...');
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  
  // Hero section
  await page.screenshot({ path: `${OUT}/landing-hero.webp`, type: 'png' });
  
  // How it works section
  await page.evaluate(() => {
    const el = document.querySelector('#demo');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/landing-demo-section.webp`, type: 'png' });

  // Pricing section
  await page.evaluate(() => {
    const el = document.querySelector('#pricing');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/landing-pricing.webp`, type: 'png' });

  // ── Demo: Generate a response ──
  console.log('Generating demo response...');
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // Scroll to demo
  await page.evaluate(() => {
    const el = document.querySelector('#demo');
    if (el) el.scrollIntoView({ behavior: 'instant' });
  });
  await page.waitForTimeout(500);

  // Fill demo form
  const demoTextarea = page.locator('#demo textarea, section:has(h2:has-text("Try it")) textarea').first();
  if (await demoTextarea.count() > 0) {
    await demoTextarea.fill('Food was amazing, especially the garlic butter shrimp. Only reason I\'m not giving 5 stars is we waited about 40 minutes for a table on a Saturday night. Our server Marcus was fantastic though — really attentive and made great recommendations.');
    
    // Click 4 stars
    const stars = page.locator('#demo button:has-text("★"), section:has(h2:has-text("Try it")) button:has-text("★")');
    if (await stars.count() >= 4) {
      await stars.nth(3).click();
    }
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/demo-review-pasted.webp`, type: 'png' });

    // Click generate
    const genBtn = page.locator('#demo button:has-text("Generate"), section:has(h2:has-text("Try it")) button:has-text("Generate")').first();
    if (await genBtn.count() > 0) {
      await genBtn.click();
      await page.waitForTimeout(8000); // Wait for AI response
      await page.screenshot({ path: `${OUT}/demo-response-generated.webp`, type: 'png' });
    }
  }

  // ── Dashboard Screenshots ──
  console.log('Taking dashboard screenshots...');
  await page.goto(`${BASE}/app`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);
  console.log('Dashboard URL:', page.url());

  if (page.url().includes('/app')) {
    // Dashboard main
    await page.screenshot({ path: `${OUT}/dashboard-main.webp`, type: 'png' });

    // Generate a response from dashboard
    const dashTextarea = page.locator('textarea').first();
    if (await dashTextarea.count() > 0) {
      await dashTextarea.fill('Had an appointment at 2pm, didn\'t get seen until 3:15. The hygienist was rough and the front desk staff seemed annoyed when I asked about my insurance. Won\'t be back.');
      
      const dashStars = page.locator('button:has-text("★")');
      if (await dashStars.count() >= 1) {
        await dashStars.nth(0).click(); // 1 star
      }
      await page.waitForTimeout(500);
      await page.screenshot({ path: `${OUT}/dashboard-review-input.webp`, type: 'png' });

      const dashGenBtn = page.locator('button:has-text("Generate")').first();
      if (await dashGenBtn.count() > 0) {
        await dashGenBtn.click();
        await page.waitForTimeout(8000);
        await page.screenshot({ path: `${OUT}/dashboard-response-generated.webp`, type: 'png' });
      }
    }

    // Generate another response (5 star)
    const dashTextarea2 = page.locator('textarea').first();
    if (await dashTextarea2.count() > 0) {
      await dashTextarea2.fill('');
      await dashTextarea2.fill('Lisa did an incredible job on my balayage. I showed her a Pinterest photo and she nailed it. The salon is clean, everyone\'s friendly, and she finished right on time. Already booked my next appointment!');
      
      const dashStars2 = page.locator('button:has-text("★")');
      if (await dashStars2.count() >= 5) {
        await dashStars2.nth(4).click(); // 5 stars
      }
      await page.waitForTimeout(500);

      const dashGenBtn2 = page.locator('button:has-text("Generate")').first();
      if (await dashGenBtn2.count() > 0) {
        await dashGenBtn2.click();
        await page.waitForTimeout(8000);
        await page.screenshot({ path: `${OUT}/dashboard-5star-response.webp`, type: 'png' });
      }
    }

    // Scroll to see recent responses
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000);
    await page.screenshot({ path: `${OUT}/dashboard-recent-responses.webp`, type: 'png' });

    // ── Reviews Page ──
    console.log('Reviews page...');
    await page.goto(`${BASE}/app/reviews`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${OUT}/reviews-dashboard.webp`, type: 'png' });

    // ── Locations Page ──
    console.log('Locations page...');
    await page.goto(`${BASE}/app/locations`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${OUT}/locations-page.webp`, type: 'png' });

    // ── Analytics Page ──
    console.log('Analytics page...');
    await page.goto(`${BASE}/app/analytics`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${OUT}/analytics-page.webp`, type: 'png' });

    // ── Settings Page ──
    console.log('Settings page...');
    await page.goto(`${BASE}/app/settings`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: `${OUT}/settings-page.webp`, type: 'png' });
    
    // Scroll to tone settings
    await page.evaluate(() => {
      const toneEl = document.querySelector('h2:has-text("Response"), label:has-text("Tone")');
      if (toneEl) toneEl.scrollIntoView({ behavior: 'instant' });
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/settings-tone.webp`, type: 'png' });

    // Scroll to pricing section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/settings-pricing.webp`, type: 'png' });
  } else {
    console.log('Login failed — could not access dashboard. Taking public pages only.');
  }

  // ── Use Cases Hub ──
  console.log('Use cases hub...');
  await page.goto(`${BASE}/uses`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/uses-hub.webp`, type: 'png' });

  // ── Blog ──
  console.log('Blog page...');
  await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/blog-page.webp`, type: 'png' });

  await browser.close();
  console.log('Done! Screenshots saved to', OUT);
}

main().catch(console.error);
