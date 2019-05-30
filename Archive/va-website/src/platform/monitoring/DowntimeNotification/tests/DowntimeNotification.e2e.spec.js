const moment = require('moment');
const E2eHelpers = require('../../../testing/e2e/helpers');
const Timeouts = require('../../../testing/e2e/timeouts');

const createMockEndpoint = require('../../../../platform/testing/e2e/mock-helpers');
const FacilityHelpers = require('../../../../applications/facility-locator/tests/facility-helpers');

const token = null;
const beforeNow = moment().subtract(1, 'minute').toISOString();
const withinHour = moment().add(1, 'hour').subtract(1, 'minute').toISOString();
const endTime = moment().add(6, 'hour').toISOString();

const selectors = {
  app: '.facility-locator',
  statusDown: '[data-status="down"]',
  statusDownApproachingModal: '[data-status="downtimeApproaching"] #downtime-approaching-modal'
};

function mock(data, _token = token) {
  return createMockEndpoint(_token, { path: '/v0/maintenance_windows', verb: 'get', value: { data }  });
}

function mockNoDowntime() {
  return mock([]);
}

function mockDowntimeApproaching() {
  return mock([{
    id: '139',
    type: 'maintenance_windows',
    attributes: {
      externalService: 'arcgis',
      description: 'My description',
      startTime: withinHour,
      endTime
    }
  }]);
}

function mockDowntime() {
  return mock([{
    id: '139',
    type: 'maintenance_windows',
    attributes: {
      externalService: 'arcgis',
      description: 'My description',
      startTime: beforeNow,
      endTime
    }
  }]);
}

function refresh(browser) {
  return () => {
    return new Promise(resolve => browser.refresh().waitForElementVisible('body', Timeouts.normal, resolve));
  };
}

function runTests(browser, callbacks) {
  return mockNoDowntime()
    .then(refresh(browser))
    .then(callbacks.ok)
    .then(mockDowntimeApproaching)
    .then(refresh(browser))
    .then(callbacks.downtimeApproaching)
    .then(mockDowntime)
    .then(refresh(browser))
    .then(callbacks.down);
}

function getStatusHandlers(browser) {
  return {
    ok() {
      return new Promise(resolve => browser.waitForElementVisible(selectors.app, Timeouts.slow, resolve));
    },
    downtimeApproaching() {
      return new Promise(resolve => browser.waitForElementVisible(selectors.statusDownApproachingModal, Timeouts.slow, resolve));
    },
    down() {
      return new Promise(resolve => browser.waitForElementVisible(selectors.statusDown, Timeouts.slow, resolve));
    }
  };
}

// At the end of the tests, erase the downtime notification values from the API so that future e2e tests aren't affected.
function cleanUp() {
  return mock([]).then(() => mock([], null));
}

function begin(browser) {
  browser.url(`${E2eHelpers.baseUrl}/facilities/`);
  E2eHelpers.overrideSmoothScrolling(browser);
  FacilityHelpers.initApplicationMock();

  browser.perform(done => {
    runTests(browser, getStatusHandlers(browser))
      .then(cleanUp)
      .then(() => browser.closeWindow())
      .then(done, (err) => {
        browser.verify.ok(false, err);
        done();
      });
  });
}

module.exports = E2eHelpers.createE2eTest(begin);

