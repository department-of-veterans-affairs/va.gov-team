const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const MessagingHelpers = require('./messaging-helpers');
const Auth = require('../../../platform/testing/e2e/auth');
const AccountCreationHelpers = require('../../../platform/testing/e2e/account-creation-helpers');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    MessagingHelpers.initApplicationSubmitMock(token);
    AccountCreationHelpers.initMHVTermsMocks(token);

    // Ensure main page (inbox) renders.
    Auth.logIn(token, client, '/health-care/messaging', 3)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Message Your Health Care Team: Vets.gov')
      .waitForElementVisible('#messaging-app', Timeouts.slow);

    client
      .waitForElementVisible('#messaging-nav', Timeouts.slow)
      .waitForElementVisible('#messaging-content-header', Timeouts.slow)
      .waitForElementPresent('#messaging-folder-controls', Timeouts.normal)
      // Expect messages to show up.
      .axeCheck('.main')
      .expect.element('.msg-table-list td:nth-of-type(1) a:nth-of-type(1)').text.to.equal('Clinician');

    client.click('.msg-table-list td:nth-of-type(1) a:nth-of-type(1)');

    // Ensure thread view renders.
    client
      .waitForElementVisible('#messaging-nav', Timeouts.slow)
      .waitForElementVisible('#messaging-content', Timeouts.normal)
      .waitForElementVisible('textarea[name="messageText"]', Timeouts.slow)
      .axeCheck('.main')
      .expect.element('.messaging-thread-messages .messaging-thread-message:last-of-type .messaging-message-body').text.to.equal('Reply 3');

    // Expand previous message in thread.
    client
      .click('.messaging-thread-messages .messaging-thread-message:first-of-type')
      .expect.element('.messaging-thread-messages .messaging-thread-message:first-of-type .messaging-message-body').text.to.equal('Message');

    // Navigate out of thread view.
    client.click('.msg-btn-back');

    // Ensure compose message page renders.
    client
      .waitForElementVisible('.messaging-compose-button', Timeouts.slow)
      .click('.messaging-compose-button')
      .waitForElementVisible('textarea[name="messageText"]', Timeouts.slow)
      .axeCheck('.main')
      .selectDropdown('messageRecipient', '0')
      .selectDropdown('messageCategory', 'APPOINTMENTS');

    // Set message body.
    client.setValue('textarea[name="messageText"]', 'Test');

    // Send message successfully.
    client.click('.msg-send-buttons button:nth-of-type(1)')
      .waitForElementPresent('#messaging-folder-controls', Timeouts.slow)
      // Ensure success alert box is shown.
      .waitForElementVisible('.usa-alert-success', Timeouts.slow);

    // Ensure manage folders page renders.
    client.click('.msg-btn-managefolders')
      .waitForElementVisible('.va-tab-content', Timeouts.slow)
      .axeCheck('.main');

    // Ensure email notifications page renders
    client
      .click('.va-tabs li:last-child a')
      .waitForElementVisible('.va-tab-content', Timeouts.slow)
      .axeCheck('.main');

    // Update preferences successfully.
    client.click('#notifications-on')
      .click('.form-radio-buttons:nth-of-type(2) input')
      .clearValue('input[name="emailAddress"]')
      .setValue('input[name="emailAddress"]', 'user@vets.gov')
      .click('.msg-notifications-save button:first-child')
      .waitForElementVisible('.usa-alert-success', Timeouts.slow);

    client.end();
  }
);
