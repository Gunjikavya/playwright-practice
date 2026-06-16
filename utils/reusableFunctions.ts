import { Page } from '@playwright/test';

export async function loginCommon(page: Page, username: string, password: string) {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}