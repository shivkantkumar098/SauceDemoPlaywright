import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';
import { ProductsPage } from '../pages/products.page';

type LoginFixtures = {
  loginPage: LoginPage;
  productsPage: ProductsPage;
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});
