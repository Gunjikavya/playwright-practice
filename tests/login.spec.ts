 
import { test, expect } from '../fixtures/baseFixture';
import * as allure from 'allure-js-commons';

test('Login and add Sauce Labs Backpack to cart', async ({ loggedInPage }) => {
  await allure.step('Open product details for Sauce Labs Backpack', async () => {
    await loggedInPage.getByText('Sauce Labs Backpack').click();
    await expect(loggedInPage).toHaveURL(/inventory-item.html/);

    const shot = await loggedInPage.screenshot();
    await allure.attachment('Product details page', shot, {
      contentType: 'image/png'
    });
  });

  await allure.step('Add product to cart', async () => {
    await loggedInPage.getByRole('button', { name: 'Add to cart' }).click();
    await expect(loggedInPage.getByRole('button', { name: 'Remove' })).toBeVisible();

    const shot = await loggedInPage.screenshot();
    await allure.attachment('After add to cart', shot, {
      contentType: 'image/png'
    });
  });

  await allure.step('Verify cart contains the selected product', async () => {
    await loggedInPage.locator('.shopping_cart_link').click();
    await expect(loggedInPage.locator('.cart_item')).toHaveCount(1);
    await expect(loggedInPage.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

    const shot = await loggedInPage.screenshot();
    await allure.attachment('Cart page', shot, {
      contentType: 'image/png'
    });
  });
});
