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
      .waitForElementVisible('.claim-title', Timeouts.slow);

    // go to files tab
    client
      .click('.va-tabs li:nth-child(2) > a')
      .waitForElementVisible('.file-request-list-item', Timeouts.normal)
      .axeCheck('.main');

    client.assert.urlContains('/your-claims/11/files');
    client
      .expect.element('a.va-tab-trigger.va-tab-trigger--current').text.to.equal('Files');

    // should show two files requested
    client.elements('class name', 'file-request-list-item', (result) => {
      client.assert.equal(result.value.length, 3);
    });

    // should show four files received
    client.elements('class name', 'submitted-file-list-item', (result) => {
      client.assert.equal(result.value.length, 3);
    });

    // should show additional evidence box
    client
      .expect.element('.submit-additional-evidence .usa-alert').to.be.visible;

    // should show a submitted date message
    client
      .expect.element('.submitted-file-list-item:last-child .submission-status').text.to.equal('Submitted');
    // should show a reviewed date message
    client
      .expect.element('.submitted-file-list-item .submission-status').text.to.equal('Reviewed by VA');

    client.end();
  }
);
