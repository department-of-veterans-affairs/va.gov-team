module.exports = {
  waitForConditionTimeout: 10000,

  afterEach(browser, done) {
    const SauceLabs = require('saucelabs');

    const saucelabs = new SauceLabs({
      username: process.env.SAUCE_USERNAME,
      password: process.env.SAUCE_ACCESS_KEY
    });

    const sessionid = browser.capabilities['webdriver.remote.sessionid'];
    const jobName = browser.currentTest.module;

    function noFailures(item) {
      return item.failed === 0 && item.errors === 0;
    }

    const testCaseData = Object.keys(browser.currentTest.results.testcases).map((key) => {
      return browser.currentTest.results.testcases[key];
    });

    const passed = testCaseData.every(noFailures);

    saucelabs.updateJob(sessionid, {
      passed,
      name: jobName,
    }, done);
  },
};
