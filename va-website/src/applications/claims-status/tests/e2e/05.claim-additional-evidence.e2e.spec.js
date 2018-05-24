const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const DisabilityHelpers = require('./claims-status-helpers');
const Auth = require('../../../../platform/testing/e2e/auth');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    DisabilityHelpers.initClaimsListMock(token);

    DisabilityHelpers.initClaimDetailMocks(token, false, true, false, 8);

    Auth.logIn(token, client, '/track-claims', 3)
      .waitForElementVisible('.claim-list-item-container', Timeouts.slow);
    client
      .click('.claim-list-item-container:first-child a.usa-button-primary')
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible('.claim-title', Timeouts.normal);

    // go to files tab
    client
      .click('.va-tabs li:nth-child(2) > a')
      .waitForElementVisible('.file-request-list-item', Timeouts.normal);

    // go to additional evidence page
    client
      .click('.additional-evidence-alert .usa-button')
      .waitForElementVisible('.file-requirements', Timeouts.normal)
      .axeCheck('.main');

    client.assert.urlContains('additional-evidence');

    client
      .expect.element('button.usa-button').text.to.equal('Submit Files for Review');

    client
      .click('button.usa-button')
      .waitForElementPresent('.usa-input-error', Timeouts.normal);

    client
      .expect.element('.usa-input-error-message').text.to.equal('Please select a file first');

    // File uploads don't appear to work in Nightwatch/PhantomJS
    // TODO: switch to something that does support uploads or figure out the problem

    client.end();
  }
);
