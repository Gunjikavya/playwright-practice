import { Page, expect } from '@playwright/test';

//  Function to open app
export async function openApplication(page: Page) {
  await page.goto('https://www.saucedemo.com/');
}

// Function for login (Locators inside function)
export async function login(page: Page, username: string, password: string) {
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

//  Assertion
export async function verifyLogin(page: Page) {
  await expect(page).toHaveURL(/inventory/);
}
