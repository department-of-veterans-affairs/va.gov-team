const fs = require('fs');
const resemble = require('node-resemble-js');
const { getFileNames, createDirectoryIfNotExist } = require('./get-file-names');

const DIFF_THRESHOLD = 0.01;

// A wrapper around fs.readFile to return a promise
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

// A wrapper around Nightwatch's screenshot function to return a promise
// Note - Nightwatch's screenshot stores the screenshot only in memory as opposed to saveScreenshot
function takeScreenshot(browser) {
  const logScreenshotData = false;
  return new Promise(resolve => browser.screenshot(logScreenshotData, resolve));
}

// Compares the values for the baseline image with the screenshot of the browser's current page.
function executeComparison(baselineImageBuffer, screenshotResult) {
  const baselineImage = new Buffer(baselineImageBuffer, 'base64');
  const screenshot = new Buffer(screenshotResult.value, 'base64');

  // Execute ResembleJS to compare the images
  return new Promise(resolve => {
    resemble(baselineImage)
      .compareTo(screenshot)
      .onComplete(resolve);
  });
}

// Writes the diff image file used in the event the baseline doesn't match the screenshot of the browser's current page.
function createDiffImage(diffFileName, comparisonResult) {
  const diffImageStream = comparisonResult.getDiffImage();
  const writer = fs.createWriteStream(diffFileName);

  // A wrapper around the stream to return a promise
  return new Promise(resolve => {
    diffImageStream
      .pack()
      .pipe(writer)
      .once('finish', resolve);
  });
}

// After executing the comparison operation, inspect the result object to create a diff image and run the test.
function computeComparisonResult(browser, route, diffFileName, comparisonResult) {
  const misMatchPercentage = parseFloat(comparisonResult.misMatchPercentage);
  const changesExceedThreshold = misMatchPercentage > DIFF_THRESHOLD;

  // Execution the test assertion
  browser.verify.ok(!changesExceedThreshold, route);

  // When the images differ, chain additional operations to create the diff image file
  if (changesExceedThreshold) {

    // Create the directory first to prevent errors
    return createDirectoryIfNotExist(diffFileName)

      // Then actually write the diff file
      .then(() => createDiffImage(diffFileName, comparisonResult));
  }

  // For consistency, return a resolved promise.
  return Promise.resolve();
}

// The entry point for this module as a route handler
function calculateDiff(browser, route) {
  return new Promise((resolve, reject) => {
    const timeout = 5000;
    const [baselineFileName, diffFileName] = getFileNames(route);
    const operations = [
      readFile(baselineFileName),
      takeScreenshot(browser)
    ];

    let isFinished = false;

    // Set a timer just in case something weird happens and causes it to get stuck.
    /* eslint-disable no-console */
    setTimeout(() => {
      if (!isFinished) {
        console.log(`Operation timed out for the following route: ${route}`);
        reject();
      }
    }, timeout);

    Promise.all(operations)

      // After reading both images into memory, run the operation used to compare their contents
      .then(results => executeComparison(...results))

      // Process the results from the comparison
      .then(comparisonResult => computeComparisonResult(browser, route, diffFileName, comparisonResult))

      // Calls to the wrapping function used for handling timeouts
      .then(val => {
        isFinished = true;
        resolve(val);
      })

      .catch(err => {
        isFinished = true;
        reject(err);
      });
  });
}

module.exports = calculateDiff;
