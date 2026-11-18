
import { createBdd } from 'playwright-bdd';
import { test } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd(test);

Given(
  'user is on the SauceDemo login page',
  async ({ page }) => {
    await page.goto('/');
  }
);

When(
  'user enters valid credentials',
  async ({ page }) => {
    await page.locator('#user-name')
      .fill('standard_user');

    await page.locator('#password')
      .fill('secret_sauce');
  }
);

When(
  'user clicks on the login button',
  async ({ page }) => {
    await page.locator('#login-button').click();
  }
);

Then(
  'user should be redirected to the products page',
  async ({ page }) => {
    await expect(page)
      .toHaveURL(/inventory.html/);
  }
);

Then(
  'user should see the products heading',
  async ({ page }) => {
    await expect(
      page.getByText('Products', { exact: true })
    ).toBeVisible();
  }
);