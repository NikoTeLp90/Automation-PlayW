import {expect, Locator, Page} from '@playwright/test';

export class loginDentalLink{
    readonly page: Page;
    readonly user: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.user = page.locator("input[name='rut']");
        this.password = page.locator("input[type='password']");
        this.loginButton = page.locator('#ingresar');
        }

        async loginUser(user, password){
            await this.user.fill(user);
            await this.password.fill(password);
            await this.loginButton.click()
            
        }

        async GoTo(){
            await this.page.goto('https://demoscl-33.qa.dentalink.cl/');
        }
}
