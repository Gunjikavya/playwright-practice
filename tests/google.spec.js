const { test, expect } = require('@playwright/test');

test('Google Test', async ({ page }) => {

  // Open website
  await page.goto('https://google.com');

  // Verify page title
  await expect(page).toHaveTitle(/Google/);

});