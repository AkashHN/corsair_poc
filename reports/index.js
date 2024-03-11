const reporter = require('cucumber-html-reporter');
 
(async () => {
  try {
    const options = {
      jsonFile: 'reports/json/',
      launchReport: false,
      noInlineScreenshots: false,
      screenshotsDirectory:"reports/screenshots/",
      output: 'reports/ui/index.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      storeScreenshots: true,
      theme: 'bootstrap',
    };
    reporter.generate(options);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
