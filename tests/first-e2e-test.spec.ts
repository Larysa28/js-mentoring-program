import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://app.dev-esurance.ch/gastrosuisse');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/GastroVersicherungen/);

  await page.locator('[data-test=product-tile_Unfall]').click();

const productName = await page.locator('[data-test="product-headline"]').innerText();

await expect(productName).toEqual('GastroUnfall');

await page.locator('[data-test="price-parameter-activity_of_company_0"]').click();

await page.locator('[data-test="price-parameter-option"]', { hasText:'Privatpension' }).click();

await page.locator('[data-test="price-calculator-next-button"]', { hasText:'Weiter' }).click();

await page.locator('[data-test="382-control"]').click();

const price = await page.locator('.css-1qm1lh [data-test="total-price-block"] h6:last-child').innerText();

await page.locator('[data-test="price-calculator-next-button"]').first().click();

await page.locator('[data-test="1063-basket-product-card-item"]');

const priceBasket = await page.locator('.css-5ffpvl'). innerText();

await expect(price).toEqual(priceBasket);

});

