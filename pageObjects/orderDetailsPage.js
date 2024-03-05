const {expect} = require('@playwright/test');
require('dotenv').config();
const{quoteDetails, pickUp}=require("../data/data.json")

class OrderDetailsPage{

    get addQuote(){
        return global.page.locator("//span[text()='Add Quote']/parent::button");
    }
    get lineHaulInput(){
        return global.page.locator("//span[@id='spot-quote-modal-form-linehaul']/child::input")
    }

    get fuelInput(){
        return global.page.locator("//span[@id='spot-quote-modal-form-fuel']/child::input")
    }

    get inputquoteId(){
        return global.page.locator("//input[@id='spot-quote-modal-form-quote-id']");
    }

    get inputTransitDays(){
        return global.page.locator("//span[@id='spot-quote-modal-form-transit-days']/child::input")
    }

    get selectRateBtn(){
        return global.page.locator("(//span[text()='Select Rate']/parent::button)[1]");
    }

    get saveQuoteBtn(){
        return global.page.locator("//button[@aria-label='Save Quote']")
    }

    get tendertoCarrirBtn(){
        return global.page.locator("(//span[@class='p-button-label'][normalize-space()='Tender to Carrier (Manual)'])[2]//parent::button");
    }

    get tenderConfPopBtn(){
        return global.page.locator("//button[@aria-label='Confirm']");
    }

    get tenderCnfBtn(){
        return global.page.locator("(//button[@aria-label='Confirm Tender'])[2]");
    }

    get addPickBtn(){
        return global.page.locator("//button[@aria-label='Add Pickup']")
    }

    get actualDate(){
        return global.page.locator("//span[@id='actual-date']")
    }

    get selectDate(){
        return global.page.locator("//td[@aria-label='24']")
    }

    get inputComment(){
        return global.page.locator("//textarea[@id='event-comment']")
    }

    get  addDeliveryBtn(){
        return global.page.locator("//button[@aria-label='Add Delivery']")
    }

    get saveDeliverPopBtn(){
        return global.page.locator("//button[@aria-label='Save Event']")
    }

    get chooseDeleveredDate(){
        return global.page.locator("//span[@id='actual-date']/child::input")
    }

    get printBOLBtn(){
        return global.page.locator("//button[@aria-label='Print BOL']")
    }

    async addQuoteDetails(){
        await global.page.waitForTimeout(10000);
        await this.addQuote.click();
        await this.lineHaulInput.fill(quoteDetails["linehaul"]);
        await this.fuelInput.fill(quoteDetails["fuel"]);
        await this.inputquoteId.fill(quoteDetails["quoteId"]);
        await global.page.waitForTimeout(1000);
        await this.inputTransitDays.fill(quoteDetails["days"]);
        await expect(this.saveQuoteBtn).toBeEnabled()
        await this.saveQuoteBtn.click();
    }

    async selectRate(){
        await this.selectRateBtn.click();
        await this.tendertoCarrirBtn.click();
        await this.tenderConfPopBtn.click()
        await this.tenderCnfBtn.click()
        await global.page.waitForTimeout(5000);
    }

    async addPickUp(){
        await this.addPickBtn.click();
        await this.actualDate.click();
        await global.page.waitForTimeout(1000);
        await this.selectDate.click();
        await this.inputComment.fill(pickUp["comment"]);
        await this.saveDeliverPopBtn.click();
    }
    async addDelivery(){
        await this.addDeliveryBtn.click();
        await this.chooseDeleveredDate.click();
        await global.page.waitForTimeout(1000);
        await this.selectDate.click();
        await this.saveDeliverPopBtn.click();
        await this.printBOLBtn.click();
    }

}

module.exports= new OrderDetailsPage();