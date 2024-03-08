const {Given, When, Then } = require('@cucumber/cucumber')
const LogInPage=require('../pageObjects/loginPage')
const HomePage=require('../pageObjects/homePage')
const OrderPage =require('../pageObjects/orderPage')
const OrderDetailsPage =require('../pageObjects/orderDetailsPage')
require('dotenv').config();

const loginPage = LogInPage;
const homePage = HomePage;
const orderPage = OrderPage;
const orderDetailsPage = OrderDetailsPage;

Given(/^I am on the Corsair Login page$/, { timeout: 60000 }, async() => {
  await loginPage.openApplication();
});

When(/^I am Logging into Corsair application with (.*) and (.*)$/, { timeout: 60000 }, async(user_name,pass_word) => {
  await loginPage.loginUser(process.env.user_name,process.env.pass_word);
});

Then(/^I am Selecting the Domain$/, { timeout: 60000 },async () => {
	await homePage.selectDomain();
});

Then(/^I am Clicking the Order Button$/, { timeout: 60000 },async() => {
	await homePage.clickOrder();
});

Then(/^I am Creating the New Order$/, { timeout: 60000 }, async() => {
	await orderPage.createOrder();
});

Then(/^I am Adding the Quote Details$/, { timeout: 60000 },async () => {
	await orderDetailsPage.addQuoteDetails();
});


Then(/^I am Clicking Select Rate Button$/, { timeout: 60000 },async () => {
	await orderDetailsPage.selectRate();
});

Then(/^I am Clicking Add Pick Up Button$/, { timeout: 60000 },async () => {
	await orderDetailsPage.addPickUp();
});

Then(/^I am Clicking Add Delivery Button$/,{ timeout: 60000 }, async() => {
	await orderDetailsPage.addDelivery();
});


