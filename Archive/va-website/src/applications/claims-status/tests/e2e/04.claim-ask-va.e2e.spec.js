const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts.js');
const DisabilityHelpers = require('./claims-status-helpers');
const Auth = require('../../../../platform/testing/e2e/auth');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    DisabilityHelpers.initClaimsListMock(token);

    DisabilityHelpers.initClaimDetailMocks(token, false, true, false, 3);

    DisabilityHelpers.initAskVAMock(token);

    Auth.logIn(token, client, '/track-claims', 3)
      .waitForElementVisible('.claim-list-item-container', Timeouts.slow);

    client
      .click('.claim-list-item-container:first-child a.usa-button-primary')
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible('.claim-title', Timeouts.slow)
      .axeCheck('.main');

    // go to files tab
    client
      .click('.va-tabs li:nth-child(2) > a')
      .waitForElementVisible('.file-request-list-item', Timeouts.normal);

    // alert is visible
    client
      .expect.element('.claims-alert-status').to.be.visible;

    client
      .expect.element('.claims-alert-status').text.to.contain('Ask for your Claim Decision');

    // click on link to page
    client
      // I have no idea why this pause is required, but it sure is
      .pause(2000)
      .click('.claims-alert-status a')
      .waitForElementPresent('.usa-button-secondary', Timeouts.normal);


    // click on disabled button
    client
      .click('.usa-button-primary')
      .pause(500);

    // should not have changed pages
    client.assert.urlContains('ask-va-to-decide');

    // click on checkbox, then submit, expect success message
    client
      .click('input[type=checkbox]')
      .click('.usa-button-primary')
      .pause(500);

    // should have gone back to status page
    client.assert.urlContains('status');

    client
      .waitForElementVisible('.usa-alert-success', Timeouts.normal);

    client.end();
  }
);
