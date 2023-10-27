import { expect, type Locator, type Page } from '@playwright/test';

export class ConfigPage {
  readonly page: Page;
  readonly warenkorbButton: Locator;
  readonly coverage: Locator;
  readonly price: Locator;
  readonly selectCovege: Locator;
  readonly totalPrice: Locator;
  readonly buttonWeiter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.coverage = page.locator('[data-test="382-control"]');
    this.price = page.locator('.css-1qm1lh [data-test="total-price-block"] h6:last-child');
    this.warenkorbButton = page.locator('[data-test="price-calculator-next-button"]');
    this.selectCovege = page.locator('[data-test="382-control"]');
    this.totalPrice = page.locator('.css-1qm1lh [data-test="total-price-block"] h6:last-child');
    this.buttonWeiter = page.locator('[data-test="price-calculator-next-button"]');
  }

  async goto() {
    await this.page.goto('https://app.dev-esurance.ch/gastrosuisse/product/1063/config');
  }

  async selectCoveregeButton() {
    await this.selectCovege.click();
  }

  async getTotalPrice(){
    return this.totalPrice.innerText();
}
async selectButtonWeiter(){
  await this.buttonWeiter.first().click();
}
}