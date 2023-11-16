import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly login: Locator;
  readonly code: Locator;


  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.login = page.locator('[type="submit"]');
    this.code = page.locator('#otp');
  }

  async fillUsername(username: string) {
    await this.username.fill(username);
  }

  async fillPassword(password: string){
    return this.password.fill(password);
  }

  async clickLogin(){
    return this.login.click();
  }

  async fillCode(code: string){
    return this.code.fill("136613");
  }
}