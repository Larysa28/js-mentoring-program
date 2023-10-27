import { expect, type Locator, type Page } from '@playwright/test';

export class LandingPage {
  readonly page: Page;
  readonly title: Locator;
  readonly product: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.css-4fmydw');
    this.product = page.locator('[data-test=product-tile_Unfall]');
    
  }

  async goto() {
    await this.page.goto('https://app.dev-esurance.ch/gastrosuisse');
  }

  async selectUnfallProduct() {
    await this.product.click();
  }
}