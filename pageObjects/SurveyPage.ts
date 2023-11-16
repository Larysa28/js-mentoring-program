import { expect, type Locator, type Page } from '@playwright/test';

export class SurveyPage {
  readonly page: Page;
  readonly firma: Locator;
  readonly surveyName: Locator;
  readonly surveySurname: Locator;
  readonly surveyEmail: Locator;
  readonly surveyPhone: Locator;
  readonly surveySubmit1: Locator;
  readonly surveyFirmenname: Locator;
  readonly surveyStreet: Locator;
  readonly surveyStreetNumber: Locator;
  readonly surveyPLZ: Locator;
  readonly surveyCity: Locator;
  readonly surveyUID: Locator;
  readonly surveySubmit2: Locator;
  readonly surveyBetriebname: Locator;
  readonly surveySubmit3: Locator;
  readonly surveyAddresssame: Locator;
  readonly surveyKorespondenzaddress: Locator;
  readonly surveyBankaccount: Locator;
  readonly surveyGastrounfallKraft: Locator;
  readonly surveyUnfallFirma: Locator;
  readonly surveyCheckbox: Locator;
  readonly surveySubmit4: Locator;
  readonly surveyConsult: Locator;
  readonly surveySubmit5: Locator;
  readonly surveyCockpitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firma = page.locator('[data-test="option_yes"]');
    this.surveyName = page.locator('[data-test="first_name_0_input"] input');
    this.surveySurname = page.locator('[data-test="last_name_0_input"] input');
    this.surveyEmail = page.locator('[data-test="email_0_input"] input');
    this.surveyPhone = page.locator('[data-test="phone_number_0_input"] input');
    this.surveySubmit1 = page.locator( '[data-test="auth-info-group_0_container"] [data-test="go-forward-button"]:first-child');
    this.surveyFirmenname = page.locator('[data-test="companies-autocomplete-input"] input');
    this.surveyStreet = page.locator('[data-test="street_name_0_input"] input');
    this.surveyStreetNumber = page.locator('[data-test="street_number_0"] input');
    this.surveyPLZ = page.locator('[data-test="postal_code_0_input"] input');
    this.surveyCity  = page.locator('[data-test="city_0_input"] input');
    this.surveyUID = page.locator('[data-test="uid_0_input"] input');
    this.surveySubmit2 = page.locator('[data-test="company-info-group_0_container"] [data-test="go-forward-button"]');
    this.surveyBetriebname = page.locator('[data-test="business_name_0_input"] input');
    this.surveySubmit3 = page.locator('[data-test="business_name_0"] [data-test="go-forward-button"]');
    this.surveyAddresssame = page.locator('[data-test="insured_location_address_same_as_company_address_0_container"] [data-test="option_yes"]');
    this.surveyKorespondenzaddress = page.locator('[data-test="correspondence_location_address_same_as_company_address_0"] [data-test="option_yes"]');
    this.surveyBankaccount = page.locator('[data-test="company_has_bank_account_0"] [data-test="option_no"]');
    this.surveyGastrounfallKraft = page.locator('[data-test="start_product_immediately_0"] [data-test="option_yes"]');
    this.surveyUnfallFirma = page.locator('[data-test="was_the_risk_already_insured_0_container"] [data-test="option_no"]');
    this.surveyCheckbox = page.locator('[data-test="pay_premiums_0_input"] input');
    this.surveySubmit4 = page.locator('[data-test="go-forward-button"]');
    this.surveyConsult = page.locator('[data-test="option_no"]');
    this.surveySubmit5 = page.locator('[data-test="go-forward-button"]');
    this.surveyCockpitButton  =page.locator('#js-funnel--basket-modal_submit-button');
  }


  async ckickCompany(){
    await this.firma.click();
  }

  async fillName(surveyName: string){
    await this.surveyName.fill(surveyName);
  }

  async fillSurname(surveySurname: string){
    await this.surveySurname.fill(surveySurname);
  }

  async fillEmail(surveyEmail: string){
    await this.surveyEmail.fill(surveyEmail);
  }

  async fillPhone(surveyPhone: string){
    await this.surveyPhone.fill(surveyPhone);
  }

  async selectSubmitButton(){
    await this.surveySubmit1.click();
  }

  async fillComanyname(surveyFirmenname: string){
    await this.surveyFirmenname.pressSequentially(surveyFirmenname, {delay: 100});
  }

  async fillStreet(surveyStreet: string){
    await this.surveyStreet.pressSequentially(surveyStreet,{delay: 100});
  }

  async fillStreetNumber(surveyStreetNumber: string){
    await this.surveyStreetNumber.pressSequentially(surveyStreetNumber, {delay: 100});
  }

  async fillPLZ(surveyPLZ: string){
    await this.surveyPLZ.pressSequentially(surveyPLZ, {delay: 100});
  }

  async fillCity(surveyCity: string){
    await this.surveyCity.pressSequentially(surveyCity, {delay: 100});
  }

  async fillUID(surveyUID: string){
    await this.surveyUID.pressSequentially(surveyUID, {delay: 100});
  }

  async selectSubmitButton2(){
    await this.surveySubmit2.click();
  }

  async fillBetriebname(surveyBetriebname: string){
    await this.surveyBetriebname.pressSequentially(surveyBetriebname,{delay: 100});
  }

  async selectSubmitButton3(){
    await this.surveySubmit3.click();
  }

  async ckickAddresssame(){
    await this.surveyAddresssame.click();
  }

  async ckickKorespondenzaddress(){
    await this.surveyKorespondenzaddress.click();
  }

  async clickBankaccount(){
    await this.surveyBankaccount.click();
  }

  async clickGastroKraft(){
    await this.surveyGastrounfallKraft.click();
  }

  async clickUnfallFirma(){
    await this.surveyUnfallFirma.click();
  }

  async clickCheckbox(){
    await this.surveyCheckbox.click();
  }

  async selectSubmitButton4(){
    await this.surveySubmit4.click();
  }

  async selectConsult(){
    await this.surveyConsult.click();
  }

  async selectSubmitButton5(){
    await this.surveySubmit5.click();
  }

  async checkCockpitButton(){
   await expect(this.surveyCockpitButton).toBeVisible()

}
}