import { expect, Page } from '@playwright/test';

export class ProductsPage {
  constructor(private readonly page: Page) {}

  async addBackpackToCart(): Promise<void> {
    const backpack = this.page
      .locator('.inventory_item')
      .filter({ hasText: 'Sauce Labs Backpack' });

    await backpack.getByRole('button', { name: 'Add to cart' }).click();
  }

  async expectCartItemCount(count: number): Promise<void> {
    await expect(this.page.locator('.shopping_cart_badge')).toHaveText(
      String(count)
    );
  }

  async openCart(): Promise<void> {
    await this.page.locator('.shopping_cart_link').click();
  }

  async expectBackpackInCart(): Promise<void> {
    await expect(
      this.page.locator('.cart_item').getByText('Sauce Labs Backpack', {
        exact: true,
      })
    ).toBeVisible();
  }
}
