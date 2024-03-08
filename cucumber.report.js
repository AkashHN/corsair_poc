const reporter = require('cucumber-html-reporter');
 
(async () => {
  try {
    const openModule = await import('open');
    const open = openModule.default;
 
    const options = {
      jsonFile: './reports/json/cucumber_report.json',
      launchReport: false,
      noInlineScreenshots: false,
      output: 'reports/cucumber-report.html',
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      storeScreenshots: true,
      theme: 'bootstrap',
    };
 
    // Generate HTML report
    reporter.generate(options);
 
    console.log('HTML report generated successfully: reports/cucumber-report.html');
 
    // Open the generated report in the default browser
    await open('reports/cucumber-report.html');
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
