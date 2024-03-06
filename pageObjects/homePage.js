const runAccessibilityTests = require('../utility/a11y');
class HomePage{
    get searchDomainInput(){
        return global.page.locator("//input[@placeholder='Search Domains']");
    }
    get selectDropdown(){
        return global.page.locator("(//li[@role='treeitem'])[2]")
    }

    get orderAnchor(){
        return global.page.locator("//span[text()='Order']/parent::a");
    }


    async selectDomain(){
        await runAccessibilityTests("Landing Page");
        await this.searchDomainInput.fill("052");
        await this.selectDropdown.click();
    }

    async clickOrder(){
        await runAccessibilityTests("DashBoard Page");
        await this.orderAnchor.click();
    }
}

module.exports= new HomePage();