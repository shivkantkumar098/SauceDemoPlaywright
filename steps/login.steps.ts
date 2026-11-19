
import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/login.fixture';

const { Given, When, Then } = createBdd(test);

Given(
  'user is on the SauceDemo login page',
  async ({ loginPage }) => {
    await loginPage.open();
  }
);

When(
  'user enters valid credentials',
  async ({ loginPage }) => {
    await loginPage.enterCredentials(
      'standard_user',
      'secret_sauce'
    );
  }
);

When(
  'user clicks on the login button',
  async ({ loginPage }) => {
    await loginPage.clickLogin();
  }
);

Then(
  'user should be redirected to the products page',
  async ({ loginPage }) => {
    await loginPage.expectProductsPage();
  }
);

Then(
  'user should see the products heading',
  async ({ loginPage }) => {
    await loginPage.expectProductsHeading();
  }
);