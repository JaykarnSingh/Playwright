const { test, expect } = require('@playwright/test');

test('Search on Google', async ({ page }) => {
  // Google open
  await page.goto('https://www.google.com');

  // Search box me text type
  await page.fill('textarea[name="q"]', 'Playwright automation');

  // Enter press
  await page.keyboard.press('Enter');

  // Result load hone ka wait
  await page.waitForTimeout(3000);

  // Check page title
  await expect(page).toHaveTitle(/Playwright/);
});
