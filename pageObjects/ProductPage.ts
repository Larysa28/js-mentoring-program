import { expect, type Locator, type Page } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  readonly priceParameter: Locator;
  readonly button: Locator;
  readonly product: Locator;
  readonly selectCompanyActivity: Locator;
  readonly selectPriceParameter: Locator;
  readonly selectButtonWeiter: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="product-headline"]');
    this.priceParameter = page.locator('.css-13q5mil');
    this.button = page.locator('[data-test="price-calculator-next-button"]');
    this.product = page.locator('[data-test="product-headline"]');
    this.selectCompanyActivity = page.locator('[data-test="price-parameter-activity_of_company_0"]');
    this.selectPriceParameter = page.locator('[data-test="price-parameter-option"]', { hasText:'Privatpension' });
    this.selectButtonWeiter = page.locator('[data-test="price-calculator-next-button"]', { hasText:'Weiter' });
  }

  async goto() {
    await this.page.goto('https://app.dev-esurance.ch/gastrosuisse/product/1063');
  }

async checkProductName(productName){
  expect(productName).toEqual('GastroUnfall');
}

async getProductName(){
    return this.product.innerText();
}

async selectCompanyActivityParameter(){
  await this.selectCompanyActivity.click();
}

async selectPriceParameterOption(){
  await this.selectPriceParameter.click();
}

async selectWeiter(){
  await this.selectButtonWeiter.click();
}
}