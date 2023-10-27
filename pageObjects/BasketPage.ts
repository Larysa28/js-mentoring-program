import { expect, type Locator, type Page } from '@playwright/test';

export class BasketPage {
  readonly page: Page;
  readonly productCard: Locator;
  readonly basketPrice: Locator;
  readonly physicalOfferButton: Locator;
  readonly radioButton: Locator;
  readonly name: Locator;
  readonly surname: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly organisation: Locator;
  readonly street: Locator;
  readonly streetNumber: Locator;
  readonly zipcode: Locator;
  readonly city: Locator;
  readonly checkbox: Locator;
  readonly buttonOfferteHerunterladen: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCard = page.locator('[data-test="1063-basket-product-card-item"]');
    this.basketPrice = page.locator('.css-5ffpvl');
    this.physicalOfferButton = page.locator('[data-test="download-physical-offer-button"]');
    this.radioButton = page.locator('[type="radio"][value="mrs"]');
    this.name = page.locator('[data-test="lead-modal-form_first-name-container"] input');
    this.surname = page.locator('[data-test="lead-modal-form_surname-container"] input');
    this.email = page.locator('[data-test="lead-modal-form_email-container"] input');
    this.phone = page.locator('[data-test="lead-modal-form_phone-container"] input');
    this.organisation = page.locator('[data-test="companies-autocomplete-input"] input');
    this.street = page.locator('[data-test="lead-modal-form_company-street-container"] input');
    this.streetNumber = page.locator('[data-test="lead-modal-form_company-building-number-container"] input');
    this.zipcode = page.locator('[data-test="lead-modal-form_company-zip-code-container"] input');
    this.city = page.locator('[data-test="lead-modal-form_company-town-container"] input');
    this.checkbox = page.locator('.css-1e40npd input');
    this.buttonOfferteHerunterladen = page.locator('[data-test="lead-modal-submit-form-button"]');
  }

  async goto() {
    await this.page.goto('https://app.dev-esurance.ch/gastrosuisse/basket');
  }

  async selectProductCard() {
    await this.productCard;
  }

  async selectBasketPrice(){
    return this.basketPrice.innerText();
  }

  async selectPhysicalOfferButton(){
    await this.physicalOfferButton.click();
  }

  async selectRadioButton(){
    await this.radioButton.click();
  }

  async fillName(name: string){
    return this.name.fill(name);
  }

  async fillSurname(surname: string){
    await this.surname.fill(surname);
  }

  async fillEmail(email: string){
    await this.email.fill(email);
  }

  async fillPhone(phone: string){
    await this.phone.fill(phone);
  }

  async selectOrganisation(organisation: string){
    await this.organisation.fill(organisation);
  }

  async fillStreet(street: string){
    await this.street.fill(street);
  }

  async fillStreetNumber(streetNumber: string){
    await this.streetNumber.fill(streetNumber);
  }

  async fillZipcode(zipcode: string){
    await this.zipcode.fill(zipcode);
  }

  async fillCity(city: string){
    await this.city.fill(city);
  }

  async selectCheckbox(){
    await this.checkbox.click();
  }

  async selectButtonOfferteHerunterladen(){
    await this.buttonOfferteHerunterladen.click();
  }
}