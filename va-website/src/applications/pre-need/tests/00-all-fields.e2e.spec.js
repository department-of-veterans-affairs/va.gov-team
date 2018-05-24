const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./preneed-helpers');
const testData = require('./schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initApplicationSubmitMock();
    PageHelpers.initDocumentUploadMock();
    PageHelpers.initGetCemeteriesMock();

    if (process.env.BUILDTYPE !== 'production') {
    // Ensure introduction page renders.
      client
        .url(`${E2eHelpers.baseUrl}/burials-and-memorials/pre-need/form-10007-apply-for-eligibility`)
        .waitForElementVisible('body', Timeouts.normal)
        .assert.title('Apply online for pre-need determination of eligibility in a VA National Cemetery: Vets.gov')
        .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
        .click('.usa-button-primary');

      E2eHelpers.overrideVetsGovApi(client);
      E2eHelpers.overrideSmoothScrolling(client);
      E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

      // Claimant Information page
      client.waitForElementVisible('input[name="root_application_claimant_name_first"]', Timeouts.normal);
      client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
      PageHelpers.completeClaimantInformation(client, testData.data);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/applicant-information');

      // Veteran Information page
      client.waitForElementVisible('input[name="root_application_veteran_currentName_first"]', Timeouts.normal);
      client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');
      PageHelpers.completeVeteranInformation(client, testData.data);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information');

      // Military History page
      client.waitForElementVisible('input[name="root_application_veteran_serviceRecords_0_serviceBranch"]', Timeouts.normal);
      PageHelpers.completeServicePeriods(client, testData.data.application.veteran);
      client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');
      client.axeCheck('.main', { rules: ['section508'] })
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/sponsor-military-history');

      // Previous Names page
      client.waitForElementVisible('label[for$="hasServiceNameYes"]', Timeouts.normal);
      PageHelpers.completeServiceName(client, testData.data.application.veteran);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/sponsor-military-name');

      // Benefit Selection page
      // TODO: Create and invoke autosuggest helper
      client.waitForElementVisible('label[for="root_application_claimant_desiredCemetery"]', Timeouts.normal);
      client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(4)', 'progress-segment-complete');
      PageHelpers.completeBenefitSelection(client, testData.data.application);
      // do not run 'wcag2a' rules because of open aXe bug https://github.com/dequelabs/axe-core/issues/214
      client.axeCheck('.main', { rules: ['section508'] })
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/burial-benefits');

      // Supporting Documents page
      client.waitForElementVisible('label[for="root_application_preneedAttachments"]', Timeouts.normal);
      client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
      // if (!process.env.SAUCE_ACCESS_KEY) {
      // Looks like there are issues with uploads in nightwatch and Selenium
      // https://github.com/nightwatchjs/nightwatch/issues/890
      // client
      // .setValue('input#root_application_preneedAttachments', require('path').resolve(`${__dirname}/VA40-10007.pdf`));
      // client.selectDropdown('root_application_preneedAttachments_0_atachmentId', 1)
      // }
      client.click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/supporting-documents');

      // Applicant/Claimant Contact Information page
      client.waitForElementVisible('select[name="root_application_claimant_address_country"]', Timeouts.normal);
      client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
      PageHelpers.completeClaimantContactInformation(client, testData.data.application.claimant);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/applicant-contact-information');

      // Veteran Contact Information page
      client.waitForElementVisible('select[name="root_application_veteran_address_country"]', Timeouts.normal);    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
      PageHelpers.completeVeteranContactInformation(client, testData.data.application.veteran);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/sponsor-mailing-address');

      // Preparer Contact Information page
      client.waitForElementVisible('label[for="root_application_applicant_applicantRelationshipToClaimant_1"]', Timeouts.normal);    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
      PageHelpers.completeApplicantContactInformation(client, testData.data.application.applicant);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/preparer');

      // Review and Submit Page.
      client
        .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
        .pause(1000)
        .click('input[type="checkbox"]')
        .axeCheck('.main')
        .click('.form-progress-buttons .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
      client.expect.element('.js-test-location').attribute('data-location')
        .to.not.contain('/review-and-submit').before(Timeouts.slow);

      // Submit message
      client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);

      client.axeCheck('.main');
    }
    client.end();
  }
);

module.exports = runTest;
