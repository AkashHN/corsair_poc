const {expect} = require('@playwright/test');
require('dotenv').config();
const{originLocation, destination, lineItems, basicInformation}=require("../data/data.json")
const runAccessibilityTests = require('../utility/a11y');

class OrderPage{

    get newOrderBtn(){
        return global.page.locator("//button[@aria-label='New Order']");
    }

    get originLocName(){
        return global.page.locator("//input[@id='origin-location-name']");
    }

    get originAddLine1(){
        return global.page.locator("//input[@id='origin-location-line1']")
    }

    get destLocName(){
        return global.page.locator("//input[@id='destination-location-name']")
    }

    get destAddLine1(){
        return global.page.locator("//input[@id='destination-location-line1']")
    }

    get AddLine1Drop(){
        return global.page.locator("(//li[@role='option'])[2]")
    }

    get billAddressBook(){
        return global.page.locator("//div[@class='bill-to-header-address flex flex-gap-1 justify-content-between align-items-center w-full']//span[@class='p-button-label'][normalize-space()='Address Book']")
    }

    get billAddressModel(){
        return global.page.locator("//div[@class='address-book-modal-body']//button[1]")
    }

    get discreptionDropdown(){
        return global.page.getByLabel('Test Description')
    }

    get discreptionDropBtn(){
        return global.page.locator("//input[@id='description-0']/following-sibling::div")
    }

    get handlingInput(){
        return global.page.locator("//input[@placeholder='Handling']")
    }

    get lengthInput(){
        return global.page.locator("//input[@placeholder='Length']")
    }

    get widthInput(){
        return global.page.locator("//input[@placeholder='Width']")
    }

    get heightInput(){
        return global.page.locator("//input[@placeholder='Height']")
    }

    get weightInput(){
        return global.page.locator("//input[@placeholder='Weight']")
    }

    get densityInput(){
        return global.page.locator("//input[@placeholder='Density']")
    }

    get freightClassDrop(){
        return global.page.locator("//span[@id='freight-class-0']")
    }

    get selectClass(){
        return global.page.getByLabel('65');
    }

    get hazardousRadio(){
        return global.page.locator("//div[@id='hazmat-0']");
    }

    get getSelectDirection(){
        return global.page.locator("//span[@id='direction']");
    }

    get selectDirection(){
        return global.page.getByLabel('Inbound');
    }

    get getBillingTerms(){
        return global.page.locator("//span[@id='billing-terms']");
    }

    get selectBillingTerms(){
        return global.page.getByLabel('Prepaid');
    }

    get getRefNumType(){
        return global.page.locator("//span[@id='reference-number_0-type']");
    }

    get selectRefNumType(){
        return global.page.getByLabel('Order Number');
    }
   
    get inputRefNumVal(){
        return global.page.locator("//input[@id='reference-number_0-value']");
    }

    get inputInternalNotes(){
        return global.page.locator("//textarea[@id='internal-notes']");
    }

    get inputCarrierNotes(){
        return global.page.locator("//textarea[@id='carrier-notes']");
    }

    get createOrderBtn(){
        return global.page.locator("//button[@aria-label='Create Order']");
    }
    
    get pickupDate(){
        return global.page.locator("//span[@id='origin-earliest-PICKUP']")
    }
    get selectDate(){
        return global.page.locator("//td[@aria-label='24']")
    }
    async createOrder(){
        await this.newOrderBtn.click();
        await this.originLocName.fill(originLocation["locName"]);
        await global.page.waitForTimeout( parseInt(process.env.small_wait));
        await this.originAddLine1.fill(originLocation["addressLine1"]);
        await global.page.keyboard.press('Enter');
        await this.AddLine1Drop.click();
        await this.destLocName.fill(destination["locName"]);
        await global.page.waitForTimeout(parseInt(process.env.small_wait));
        await this.destAddLine1.fill(destination["addressLine1"])
        await global.page.keyboard.press('Enter');
        await this.AddLine1Drop.click();
        await expect(this.pickupDate).toBeVisible()
        await this.pickupDate.click();
        await global.page.waitForTimeout(parseInt(process.env.small_wait));
        await expect(this.selectDate).toBeVisible();
        await this.selectDate.click();
        await this.billAddressBook.click();
        await this.billAddressModel.click();
        await this.discreptionDropBtn.click();
        await this.discreptionDropdown.click();
        await this.handlingInput.fill(lineItems["handlingNo"]);
        await this.densityInput.fill(lineItems["density"]);
        await this.freightClassDrop.click();
        await this.selectClass.click();
        await this.getSelectDirection.click();
        await global.page.waitForTimeout(parseInt(process.env.small_wait));
        await expect(this.selectDirection).toBeVisible();
        await this.selectDirection.click();
        await this.getBillingTerms.click();
        await global.page.waitForTimeout(parseInt(process.env.small_wait));
        await expect(this.selectBillingTerms).toBeVisible()
        await this.selectBillingTerms.click();
        await this.getRefNumType.click();
        await global.page.waitForTimeout(parseInt(process.env.small_wait));
        await expect(this.selectRefNumType).toBeVisible()
        await this.selectRefNumType.click();
        await this.inputRefNumVal.fill(basicInformation["referenceNumValue"]);
        await this.inputInternalNotes.fill(basicInformation["interalNotes"]);
        await this.inputCarrierNotes.fill(basicInformation["carrerNotes"]);
        await expect(this.createOrderBtn).toBeEnabled()
        await this.createOrderBtn.click({force:true});
    }

}
module.exports= new OrderPage();