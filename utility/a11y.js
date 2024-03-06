const { AxeBuilder } = require("@axe-core/playwright");
const { createHtmlReport } = require("axe-html-reporter");
const { test, expect } = require('@playwright/test');

async function runAccessibilityTests(pageName) {
    const url = await global.page.url();
    let page = await global.context.newPage();
    console.log(url, "<<<<<<<<<<<<<<<<<<<<<<<");
    await page.goto(url);
    const accessibilityScanResults = await new AxeBuilder( {page} ).analyze();

    // const timestamp = Date.now();
    const reportPath = `${pageName}.html`;

    createHtmlReport({
      results: 
        accessibilityScanResults
      ,
      options: {
        projectKey: "Corsair", // Replace with your project name
        reportFileName:reportPath
      },
    });
    let page1 =page
    page1.close();
};

module.exports = runAccessibilityTests;
