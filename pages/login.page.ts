import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async open(): Promise<void> {
    await this.page.goto('/');
  }

  async enterCredentials(username: string, password: string): Promise<void> {
    await this.page.locator('#user-name').fill(username);
    await this.page.locator('#password').fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.page.locator('#login-button').click();
  }

  async expectProductsPage(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async expectProductsHeading(): Promise<void> {
    await expect(
      this.page.getByText('Products', { exact: true })
    ).toBeVisible();
  }
}
