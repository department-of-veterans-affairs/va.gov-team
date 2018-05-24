const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const RxHelpers = require('./rx-helpers');
const Auth = require('../../../platform/testing/e2e/auth');
const AccountCreationHelpers = require('../../../platform/testing/e2e/account-creation-helpers');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const token = Auth.getUserToken();

    RxHelpers.initApplicationSubmitMock(token);
    AccountCreationHelpers.initMHVTermsMocks(token);

    // Ensure active page renders
    Auth.logIn(token, client, '/health-care/prescriptions', 3)
      .assert.title('Refill Prescriptions: Vets.gov')
      .waitForElementVisible('#rx-active', Timeouts.normal)
      .axeCheck('.main');

    // Ensure that list view renders
    client
      .expect.element('.rx-table-list').to.be.visible;

    // Ensure that card view renders
    client
      .click('.rx-view-toggle li:first-child')
      .expect.element('.rx-prescription-card').to.be.visible;

    // Ensure glossary modal triggers correctly
    client
      .click('button.rx-trigger')
      .waitForElementVisible('#rx-glossary-modal', Timeouts.slow)
      .axeCheck('.main');

    // Ensure glossary modal can be dismissed
    client
      .click('.va-modal-close')
      .expect.element('#rx-glossary-modal').to.not.be.present;
    client
      .click('button.rx-prescription-button')
      .expect.element('#rx-confirm-refill').to.be.visible;
    client
      .click('.rx-modal-refillinfo button[type=submit]')
      .expect.element('#rx-confirm-refill').to.not.be.present.after(Timeouts.normal);

    // Ensure refill request is submitted
    client.expect.element('.rx-prescription-card:nth-of-type(2) button.rx-trigger').text.to.equal('Submitted');

    // Ensure prescription detail page renders
    client
      .click('.rx-prescription-info .rx-prescription-title a')
      .waitForElementVisible('#rx-details', Timeouts.slow)
      .axeCheck('.main')
      .expect.element('#rx-prescription h1').text.to.equal('ACETAMINOPHEN 325MG TAB');

    // Assert existence of correct message provider link
    client.expect.element('a.rx-message-provider-link').to.have.attribute('href').which.contains('/health-care/messaging/compose');

    // Ensure track package page renders
    client
      .click('.va-tabs li:last-child a')
      .waitForElementVisible('#rx-track-package', Timeouts.slow)
      .axeCheck('.main');

    // Expect tracking information to be accurate
    client.expect.element('.rx-detail-history tr:nth-of-type(1) a.rx-track-package-link').text.to.equal('657068347564');
    client.expect.element('.rx-detail-history tr:nth-of-type(2) a.rx-track-package-link').text.to.equal('345787647659');
    client.expect.element('.rx-detail-history tr:nth-of-type(3) a.rx-track-package-link').text.to.equal('345787647654');
    client.expect.element('.rx-detail-history tr:nth-of-type(2) div:nth-of-type(1)').text.to.equal('ACETAMINOPHEN 325MG TAB');
    client.expect.element('.rx-detail-history tr:nth-of-type(2) div:nth-of-type(2)').text.to.equal('ETHAMBUTOL HCL 100MG TAB');
    client.expect.element('.rx-detail-history tr:nth-of-type(2) div:nth-of-type(3)').text.to.equal('PROBUCOL 250MG TAB');

    // Ensure history card renders
    client
      .click('.va-nav-breadcrumbs a[href="/health-care/prescriptions/"]')
      .waitForElementVisible('#rx-active', Timeouts.slow)
      .click('.va-tabs li:last-child a')
      .waitForElementVisible('#rx-history', Timeouts.normal)
      .waitForElementVisible('.rx-table', Timeouts.slow)
      .axeCheck('.main')
      .expect.element('.rx-tab-explainer').to.be.visible;

    // Ensure settings page renders
    client
      .click('.rx-settings-button')
      .waitForElementVisible('#rx-settings', Timeouts.slow)
      .axeCheck('.main');

    // Update preferences successfully.
    client.click('.form-radio-buttons:first-of-type input')
      .clearValue('input[name="email"]')
      .setValue('input[name="email"]', 'user@vets.gov')
      .click('.rx-notifications-save button:first-child')
      .waitForElementVisible('.usa-alert-success', Timeouts.slow);

    client.end();
  }
);
