const {Given, When, Then } = require('@cucumber/cucumber')
const LogInPage=require('../pageObjects/loginPage')
const HomePage=require('../pageObjects/homePage')
const OrderPage =require('../pageObjects/orderPage')
const OrderDetailsPage =require('../pageObjects/orderDetailsPage')
require('dotenv').config();
const runAccessibilityTests = require('../utility/a11y');

const loginPage = LogInPage;
const homePage = HomePage;
const orderPage = OrderPage;
const orderDetailsPage = OrderDetailsPage;

Given(/^I am on the Corsair Login page for a11y_test$/,async () => {
    await loginPage.openApplication();
});

When(/^I am Logging into Corsair application with the for a11y_test$/,async () => {
	await loginPage.loginUser(process.env.user_name,process.env.pass_word);
});

Then(/^I am Selecting the Domain for a11y_test$/, async() => {
	await homePage.selectDomain();
});

Then(/^I am Clicking the Order Button for a11y_test$/,async () => {
	await homePage.clickOrder();
});

Then(/^I am Creating the New Order for a11y_test$/,async () => {
	await orderPage.createOrder();
});

Then(/^I am Adding the Quote Details for a11y_test$/,async () => {
	await orderDetailsPage.addQuoteDetails();
    await runAccessibilityTests("order-details_page");
});
