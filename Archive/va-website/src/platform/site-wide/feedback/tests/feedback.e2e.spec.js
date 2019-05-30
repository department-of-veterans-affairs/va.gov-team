const mock = require('../../../../platform/testing/e2e/mock-helpers');
const E2eHelpers = require('../../../testing/e2e/helpers');
const Timeouts = require('../../../testing/e2e/timeouts');

const selectors = {
  root: '#feedback-root',
  revealFormButton: '.feedback-button',
  form: '.feedback-form',
  formDescription: '.feedback-form textarea',
  formShouldSendResponse: 'input[name=should-send-response]',
  formEmail: '.feedback-form input[name=email]',
  formSubmit: '.feedback-form button[type=submit]',
  formSubmitted: '#feedback-submitted'
};

function begin(browser) {
  browser.url(E2eHelpers.baseUrl)
    .waitForElementVisible(selectors.root, Timeouts.slow)
    .axeCheck('document');

  // Click the feedback button to reveal the form
  browser.click(selectors.revealFormButton);
  browser.waitForElementVisible(selectors.form, Timeouts.normal);

  // Set actual feedback value
  browser.setValue(selectors.formDescription, 'This is my feedback');

  // Set the email value
  browser.click(selectors.formShouldSendResponse);
  browser.waitForElementPresent(selectors.formEmail, Timeouts.normal);
  browser.setValue(selectors.formEmail, 'test@adhocteam.us');

  // Click the submit button
  browser.click(selectors.formSubmit);
  browser.waitForElementPresent(selectors.formSubmitted, Timeouts.normal);

  browser.end();
}

function setup(browser) {
  mock(null, { path: '/v0/feedback', verb: 'post', value: { data: {} } })
    .then(() => begin(browser));
}

module.exports = E2eHelpers.createE2eTest(setup);
module.exports['@disabled'] = true;
