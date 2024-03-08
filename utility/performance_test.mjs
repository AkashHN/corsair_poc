const http = require('k6/http');
const { htmlReport } = require("https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js");
const { check, sleep }= require('k6');
export let options = {
  vus: 10, // Virtual Users
  duration: '30s',
  thresholds: {
    http_req_duration: ["p(95)<250"],
  },
};
 
export default async function performanceTest() {
  // GET request
  const response = http.get('https://qa.rygen.com/corsair/');
  // Check status code and response time
  check(response, { 'status is 200': (r) => r.status === 200 });
   // Check content type
  check(response, { 'content type is text/html': (r) => r.headers['Content-Type'] === 'text/html' });
 
  // Check response time
  check(response, { 'response time is less than 500ms': (r) => r.timings.duration < 500
 });
//  console.log(response)
  // Sleep for a short duration to simulate user behavior
  sleep(1);
}
export function handleSummary(data) {
  return {
    "reports/summary.html": htmlReport(data),
  };
}