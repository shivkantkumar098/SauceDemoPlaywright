import { test as base } from 'playwright-bdd';
import { LoginPage } from '../pages/login.page';

type LoginFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
