import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';

const { When, Then } = createBdd(test);

When(
  'user adds the Sauce Labs Backpack to the cart',
  async ({ productsPage }) => {
    await productsPage.addBackpackToCart();
  }
);

Then('cart should show 1 item', async ({ productsPage }) => {
  await productsPage.expectCartItemCount(1);
});

When('user opens the cart', async ({ productsPage }) => {
  await productsPage.openCart();
});

Then('cart should contain the Sauce Labs Backpack', async ({ productsPage }) => {
  await productsPage.expectBackpackInCart();
});
