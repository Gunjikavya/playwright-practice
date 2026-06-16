import { test } from '@playwright/test';

test('Auto Login', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  await page.locator('#user-name').fill('standard_user');

  await page.locator('#password').fill('secret_sauce');

  await page.locator('#login-button').click();

  await page.waitForTimeout(5000);

});