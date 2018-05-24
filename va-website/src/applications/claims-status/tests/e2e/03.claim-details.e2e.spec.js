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
      .waitForElementVisible('.claim-title', Timeouts.slow)
      .axeCheck('.main');

    // go to details tab
    client
      .click('.va-tabs li:nth-child(3) > a')
      .waitForElementVisible('.claim-details', Timeouts.normal);
    client.assert.urlContains('/your-claims/11/details');

    client
      .expect.element('a.va-tab-trigger.va-tab-trigger--current').text.to.equal('Details');

    client
      .expect.element('.claim-detail-label:nth-of-type(1)').text.to.equal('Claim Type');
    client
      .expect.element('.claim-detail-label:nth-of-type(2)').text.to.equal('What you’ve claimed');
    client
      .expect.element('.claim-detail-label:nth-of-type(3)').text.to.equal('Date Received');
    client
      .expect.element('.claim-detail-label:nth-of-type(4)').text.to.equal('Your Representative for VA Claims');
    client.end();
  }
);
