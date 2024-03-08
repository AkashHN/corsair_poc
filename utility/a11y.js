const { AxeBuilder } = require("@axe-core/playwright");
const { createHtmlReport } = require("axe-html-reporter");
const { test, expect } = require('@playwright/test');
require('dotenv').config();

async function runAccessibilityTests(pageName) {
    const url = await global.page.url();
    let page = await global.context.newPage();
    console.log(url, "<<<<<<<<<<<<<<<<<<<<<<<");
    await page.goto(url);
    await page.waitForTimeout(parseInt(process.env.medium_wait));
    const accessibilityScanResults = await new AxeBuilder( {page} ).analyze();

    const reportPath = `a11y_${pageName}.html`;

    createHtmlReport({
      results: 
        accessibilityScanResults
      ,
      options: {
        projectKey: "Corsair",
        reportFileName:reportPath,
        outputDir:"reports/a11y/"
      },
    });
    let page1 =page
    page1.close();
};

module.exports = runAccessibilityTests;
