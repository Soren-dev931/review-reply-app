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

  // Login
  console.log('Logging in...');
  await page.goto(`${BASE}/login`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  const emailInput = page.locator('input[type="email"]');
  const passInput = page.locator('input[type="password"]');
  if (await emailInput.count() > 0) {
    await emailInput.fill(EMAIL);
    await passInput.fill(PASS);
    const submitBtn = page.locator('button[type="submit"]').first();
    if (await submitBtn.count() > 0) {
      await submitBtn.click();
      await page.waitForTimeout(5000);
    }
  }

  // Settings - tone section
  console.log('Settings tone...');
  await page.goto(`${BASE}/app/settings`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    const labels = document.querySelectorAll('h2');
    for (const l of labels) {
      if (l.textContent && l.textContent.includes('Response')) {
        l.scrollIntoView({ behavior: 'instant' });
        break;
      }
    }
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/settings-tone.webp`, type: 'png' });

  // Settings - pricing cards
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/settings-pricing.webp`, type: 'png' });

  // Uses hub
  console.log('Uses hub...');
  await page.goto(`${BASE}/uses`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/uses-hub.webp`, type: 'png' });

  // Blog
  console.log('Blog...');
  await page.goto(`${BASE}/blog`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/blog-page.webp`, type: 'png' });

  // Mobile viewport screenshots
  console.log('Mobile screenshots...');
  await page.setViewportSize({ width: 390, height: 844 });
  
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `${OUT}/mobile-landing.webp`, type: 'png' });

  await page.goto(`${BASE}/app`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: `${OUT}/mobile-dashboard.webp`, type: 'png' });

  await browser.close();
  console.log('Done! Remaining screenshots saved.');
}

main().catch(console.error);
