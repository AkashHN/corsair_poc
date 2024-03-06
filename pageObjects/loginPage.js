const {expect} = require('@playwright/test');
require('dotenv').config();
const runAccessibilityTests = require('../utility/a11y');

class LogInPage{
    get userNameInput(){
        return global.page.locator("//input[@id='signInName']");
    }
    get userPassword(){
        return global.page.locator("//input[@id='password']");
    }
    get continueBtn(){
        return global.page.locator("//button[@id='continue']")
    }
    get signinBtn(){
        return global.page.locator("//button[@id='next']");
    }
    get companyLogoImg(){
        return global.page.locator("//img[@alt='Company Logo']");
    }  

    async openApplication() {
        console.log(process.env.BASE_URL, "https://qa.rygen.com/corsair/");
        await global.page.goto(process.env.BASE_URL);
    }
    
    async loginUser(userName, password){
        console.log("1-----------------------------------");
        await expect(this.companyLogoImg).toBeVisible(); 
        await this.userNameInput.fill(userName);
        await this.continueBtn.click();
        await expect(this.companyLogoImg).toBeVisible(); 
        await this.userPassword.fill(password);
        await this.signinBtn.click()
    }
    
}

module.exports= new LogInPage();