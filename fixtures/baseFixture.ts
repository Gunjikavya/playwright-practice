import { test as base } from '@playwright/test';
import { Page } from '@playwright/test';

type MyFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {

    console.log(" Setting up logged-in state");

    // HARD CODE (for now)
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', { name: 'Login' }).click();

    // check login failure
    const error = page.locator('[data-test="error"]');
    if (await error.isVisible()) {
      throw new Error("❌ Login failed!");
    }

    // wait success
    await page.locator('.inventory_item').first().waitFor();

    console.log(" Login successful");

    await use(page);

  }
});

export const expect = test.expect;