import { test, expect } from '@playwright/test';
import { LandingPage } from '../pageObjects/LandingPage';
import { ProductPage } from '../pageObjects/ProductPage';
import { ConfigPage } from '../pageObjects/ConfigPage';
import { BasketPage } from '../pageObjects/BasketPage';
import {LoginPage } from '../pageObjects/LoginPage';
import {SurveyPage } from '../pageObjects/SurveyPage';
import { ok } from 'assert';

test('has title', async ({ page }) => {
const landingPage = new LandingPage(page);
const productPage = new ProductPage(page);
const configPage = new ConfigPage(page);
const basketPage = new BasketPage(page);
const loginPage = new LoginPage(page);
const surveyPage = new SurveyPage(page);
const name = "Larysa";
const surname = "Stupina";
const email = "ls+321@esurance.ch";
const phone = "+380985177110";
const organisation = "esurance";
const city = "Bern";
const zipcode = "4444";
const streetNumber = "55";
const street = "Hauptstreet";
const username = "ls@esurance.ch"
const password = "sLG$J6*Kgh;swj4kj";
const code = "136613";
const surveyName = "Lara";
const surveySurname = "Stupina";
const surveyEmail = `ls+${Date.now()}@esurance.ch`
const surveyPhone = "+380985177110";
const surveyFirmenname = "esurance AG";
const surveyStreet = "Hauptstrasse";
const surveyStreetNumber = "44";
const surveyPLZ = "4444";
const surveyCity = "Bern";
const surveyUID = "33";
const surveyBetriebname = "esurance";

console.log(surveyEmail);

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

await basketPage.selectCheckboxTC();

await basketPage.selectSubmitButton();

await loginPage.fillUsername(username);

await loginPage.fillPassword(password);

await loginPage.clickLogin();

await loginPage.fillCode(code);

await surveyPage.ckickCompany();

await surveyPage.fillName(surveyName);

await surveyPage.fillSurname(surveySurname);

await surveyPage.fillEmail(surveyEmail);

await surveyPage.fillPhone(surveyPhone);

await surveyPage.selectSubmitButton();

await surveyPage.fillComanyname(surveyFirmenname);

await surveyPage.fillStreet(surveyStreet);

await surveyPage.fillStreetNumber(surveyStreetNumber);

await surveyPage.fillPLZ(surveyPLZ);

await surveyPage.fillCity(surveyCity);

await surveyPage.fillUID(surveyUID);

await surveyPage.selectSubmitButton2();

await surveyPage.fillBetriebname(surveyBetriebname);

await surveyPage.selectSubmitButton3();

await surveyPage.ckickAddresssame();

await surveyPage.ckickKorespondenzaddress();

await surveyPage.clickBankaccount();

await surveyPage.clickGastroKraft();

await surveyPage.clickUnfallFirma();

await surveyPage.clickCheckbox();

await surveyPage.selectSubmitButton4();

await surveyPage.selectConsult();

await surveyPage.selectSubmitButton5();

await surveyPage.checkCockpitButton();

const analyzeResponce = await page.waitForResponse("**/api/v1/checkout/Gastro/analyze");
const submitResponse = await page.waitForResponse("**/api/v1/checkout/Gastro/submit");


expect(submitResponse.status()).toBe(200);

expect(submitResponse.ok()).toBeTruthy();

expect (await analyzeResponce.json()).toStrictEqual({data: {1063: "active"}});

});

