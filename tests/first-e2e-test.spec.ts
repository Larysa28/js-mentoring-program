import { test, expect } from '@playwright/test';
import { LandingPage } from '../pageObjects/LandingPage';
import { ProductPage } from '../pageObjects/ProductPage';
import { ConfigPage } from '../pageObjects/ConfigPage';
import { BasketPage } from '../pageObjects/BasketPage';
import { ok } from 'assert';

test('has title', async ({ page }) => {
const landingPage = new LandingPage(page);
const productPage = new ProductPage(page);
const configPage = new ConfigPage(page);
const basketPage = new BasketPage(page);
const name = "Larysa";
const surname = "Stupina";
const email = "ls+321@esurance.ch";
const phone = "+380985177110";
const organisation = "esurance";
const city = "Bern";
const zipcode = "4444";
const streetNumber = "55";
const strret = "Hauptstreet";

await landingPage.goto();

  await expect(page).toHaveTitle(/GastroVersicherungen/);

  await landingPage.selectUnfallProduct();

const productName = await productPage.getProductName();

await productPage.checkProductName(productName);

await productPage.selectCompanyActivityParameter();

await productPage.selectPriceParameterOption();

await productPage.selectWeiter();

await configPage.selectCoveregeButton();

const price = await configPage.getTotalPrice();

await configPage.selectButtonWeiter();

await basketPage.selectProductCard();

const priceBasket = await basketPage.selectBasketPrice();

  expect(price).toEqual(priceBasket);

await basketPage.selectPhysicalOfferButton();

await basketPage.selectRadioButton();

await basketPage.fillName(name);

await basketPage.fillSurname(surname);

await basketPage.fillEmail(email);

await basketPage.fillPhone(phone);

await basketPage.selectOrganisation(organisation);

await basketPage.fillStreet(street);

await basketPage.fillStreetNumber(streetNumber);

await basketPage.fillZipcode(zipcode);

await basketPage.fillCity(city);

await basketPage.selectCheckbox();

await basketPage.selectButtonOfferteHerunterladen();

const physicalOfferResponse = await page.waitForResponse("**/api/v1/lead/physical-offer");

expect(physicalOfferResponse.status()).toBe(200)
const statusText = physicalOfferResponse.statusText();

expect(physicalOfferResponse.ok()).toBeTruthy();
});

