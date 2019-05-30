const commandLineArgs = require('command-line-args');
const Auth = require('../e2e/auth');
const Timeouts = require('../e2e/timeouts');
const { createE2eTest } = require('../e2e/helpers');
const { sitemapURLs } = require('../../site-wide/tests/sitemap/sitemap-helpers');
const createBaselineImage = require('./util/create-baseline-image');
const calculateDiff = require('./util/calculate-diff');

// Converts the array of routes/URL's and returns a super-long promise chain.
function createRouteHandlerChain(browser, routes, routeHandler) {

  // Loops through all of the routes continually chaining promises onto a single original promise.
  // This way the promises will execute in a waterfall effect and is necessary since we can only show one URL at a time.
  return routes.reduce((routeChain, route) => {

    // Return the original promise, along with the next route operation.
    return routeChain

      // Navigate to the next URL.
      .then(() => new Promise(resolve => browser.url(route, resolve)))

      // Hand off the browser and route to the route handler.
      .then(() => routeHandler(browser, route))

      /* eslint-disable no-console */
      .catch(err => {
        browser.verify.ok(false, `An error occurred calculating the following route: ${route}`);
        console.error(err && err.stack);
      });

  }, Promise.resolve());
}

// A wrapper around the login helper to return a promise
function login(browser) {
  const token = Auth.getUserToken();

  return new Promise(resolve => {
    Auth.logIn(token, browser, '/', 1);
    browser.waitForElementVisible('body', Timeouts.normal, resolve);
  });
}

// A wrapper around a helper function for grabbing the sitemap.xml and converting into an array of URL's
function getSiteRoutes() {
  return new Promise(resolve => sitemapURLs(resolve));
}

// Checks command flags to determine the "routeHandler" function that will perform a task after the browser navigates to each route.
function getRouteHandler() {
  const commands = {
    CREATE_BASELINE_IMAGES: 'baseline',
    CALCULATE_DIFFS: 'diff'
  };

  const { command } = commandLineArgs([
    { name: 'command', type: String },
    { name: 'config', type: String, alias: 'c' }
  ]);

  switch (command) {
    case commands.CREATE_BASELINE_IMAGES:
      return createBaselineImage;

    case commands.CALCULATE_DIFFS:
    default:
      return calculateDiff;
  }
}

// Returns a function that will be executed as a Nightwatch test case.
function beginApplication(browser) {
  const routeHandler = getRouteHandler();

  // Tests are async, so "done" is used as a callback to Nightwatch once we're finished.
  browser.perform(done => {

    // Before starting any routes, log the user in to prevent load errors.
    login(browser)

      // Parse the sitemap XML file into an array of URL's
      .then(getSiteRoutes)

      // Create a single long-running promise out of the routes array
      .then(routes => createRouteHandlerChain(browser, routes, routeHandler))

      // Close the browser window so Electron instances don't pile up.
      .then(() => browser.closeWindow())

      // Tell Nighwatch we're finished.
      .then(done);
  });
}

// The entry point for everything.
function setup() {
  return createE2eTest(beginApplication);
}

module.exports = setup();
