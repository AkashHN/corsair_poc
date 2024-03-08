const reporter = require('cucumber-html-reporter');
 
(async () => {
  try {
    const openModule = await import('open');
    const open = openModule.default;
 
    const options = {
      jsonFile: 'reports/json/',
      launchReport: false,
      noInlineScreenshots: false,
      screenshotsDirectory:"reports/screenshots/",
      output: 'reports/cucumber-report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      storeScreenshots: true,
      theme: 'bootstrap',
    };
 
    // Generate HTML report
    reporter.generate(options);
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
