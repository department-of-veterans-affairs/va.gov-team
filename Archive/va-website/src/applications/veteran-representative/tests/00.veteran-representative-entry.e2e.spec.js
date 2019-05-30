const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const manifest = require('../manifest.json');
const PageHelpers = require('./veteran-representative-helpers');
const testData = require('./schema/maximal-test.json');
const Timeouts = require('../../../platform/testing/e2e/timeouts');

const runTest = E2eHelpers.createE2eTest(client => {
  PageHelpers.initApplicationSubmitMock();

  client
    .url(`${E2eHelpers.baseUrl}/veteran-representative`)
    .waitForElementVisible('body', Timeouts.normal)
    .assert.title('Appoint VSO as representative: Vets.gov')
    .waitForElementVisible('.schemaform-title', Timeouts.slow)
    .click('.usa-button-primary');

  E2eHelpers.overrideVetsGovApi(client);
  E2eHelpers.overrideSmoothScrolling(client);
  E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

  // Veteran Information
  client.waitForElementVisible(
    'input[name="root_veteranFullName_first"]',
    Timeouts.normal
  );
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:first-child',
    'progress-segment-complete'
  );
  PageHelpers.completeVeteranInformation(client, testData.data);
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information');

  // Claimant Information
  client.waitForElementVisible(
    'input[name="root_claimantFullName_first"]',
    Timeouts.normal
  );
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:nth-child(1)',
    'progress-segment-complete'
  );
  PageHelpers.completeClaimantInformation(client, testData.data);
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/claimant-information');

  // Veteran Service Organization information
  client.waitForElementVisible(
    'input[name="root_organizationName"]',
    Timeouts.normal
  );
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:nth-child(2)',
    'progress-segment-complete'
  );
  PageHelpers.completeVeteranServiceOrganizationInformation(
    client,
    testData.data
  );
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/veteran-service-organization');

  // Authorization for Representative’s Access to Records
  client.assert.containsText(
    'h4',
    'Authorization for Representative’s Access to Records'
  );
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:nth-child(3)',
    'progress-segment-complete'
  );
  PageHelpers.completeAuthorizationForRepresentativeAccessToRecords(
    client,
    testData.data
  );
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(
    client,
    '/authorization-for-representative-access-to-records'
  );

  // Limitation of Consent
  client.assert.containsText('h4', 'Limitation of Consent');
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:nth-child(4)',
    'progress-segment-complete'
  );
  PageHelpers.completeAuthorizationForRepresentativeAccessToRecords(
    client,
    testData.data
  );
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/limitation-of-consent');

  // Authorization to Change Claimant’s Address
  client.assert.containsText(
    'h4',
    'Authorization to Change Claimant’s Address'
  );
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:nth-child(5)',
    'progress-segment-complete'
  );
  PageHelpers.completeAuthorizationForRepresentativeAccessToRecords(
    client,
    testData.data
  );
  client.axeCheck('.main').click('.form-panel .usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(
    client,
    '/authorization-to-change-claimant-address'
  );

  // Review and submit page
  client.waitForElementVisible('.usa-button-primary', Timeouts.normal);
  client.assert.cssClassPresent(
    '.progress-bar-segmented div.progress-segment:nth-child(6)',
    'progress-segment-complete'
  );
  client.click('input[name="privacyAgreement"]');
  client.click('.usa-button-primary');
  E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');

  // Confirmation Page
  client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);

  client.axeCheck('.main');
  client.end();
});

module.exports = runTest;
module.exports['@disabled'] =
  !manifest.production || __BUILDTYPE__ !== 'production';
