const { getFileNames } = require('./get-file-names');

// The entry point for this module as a route handler.
// Uses Nightwatch's native screenshot function to take a screenshot.
function createBaselineImage(browser, route) {
  const [baselineFileName] = getFileNames(route);
  return new Promise(resolve => browser.saveScreenshot(baselineFileName, resolve));
}

module.exports = createBaselineImage;
