import { test } from '../fixtures/baseFixture';
import * as allure from 'allure-js-commons';

test('Perform actions after login', async ({ loggedInPage }) => {

  //  STEP 1: Click specific product
  await allure.step('Click Sauce Labs Backpack', async () => {
    await loggedInPage.getByText('Sauce Labs Backpack').click();

    const shot = await loggedInPage.screenshot();
    await allure.attachment('After product click', shot, {
      contentType: 'image/png'
    });
  });

  //  STEP 2: Add to cart (NOW ONLY ONE BUTTON EXISTS)
  await allure.step('Add to cart', async () => {
    await loggedInPage.getByRole('button', { name: 'Add to cart' }).click();

    const shot = await loggedInPage.screenshot();
    await allure.attachment('After add to cart', shot, {
      contentType: 'image/png'
    });
  });

  //  STEP 3: Open cart
  await allure.step('Open cart', async () => {
    await loggedInPage.locator('.shopping_cart_link').click();

    const shot = await loggedInPage.screenshot();
    await allure.attachment('Cart page', shot, {
      contentType: 'image/png'
    });
  });

});