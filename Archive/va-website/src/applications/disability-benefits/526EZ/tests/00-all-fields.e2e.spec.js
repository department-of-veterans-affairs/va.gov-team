const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./disability-benefits-helpers');
const testData = require('./schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(client => {
  PageHelpers.initDocumentUploadMock();
  PageHelpers.initApplicationSubmitMock();

  if (process.env.BUILDTYPE !== 'production') {
    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/disability-benefits/526/apply-for-increase`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for education benefits: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow) // First render of React may be slow.
      .click('.schemaform-intro .usa-button-primary');

    // Gets hung up at the login screen

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Review Veteran Information
    client.axeCheck('.main');
    client.click('.edit-btn');
    PageHelpers.completeApplicantInformation(client, testData.data);
    client.click('button[id="5-continueButton"]');
    client.click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/review-veteran-information');

    // Rated disability selection
    client.axeCheck('.main');
    PageHelpers.selectDisabilities(client); // Just selects the first one in the list
    client.click('.form-panel .usa-button-primary');

    // Supporting evidence
    // Orientation
    client.axeCheck('.main').click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(
      client,
      '/supporting-evidence/orientation'
    );

    // Evidence Type -- first condition
    client.axeCheck('.main');
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/0/evidence-type'
    );
    PageHelpers.completeEvidenceTypeInformation(client, testData.data);
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(
      client,
      '/supporting-evidence/0/evidence-type'
    );

    // VA Medical Records Intro
    client.axeCheck('.main').click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(
      client,
      '/supporting-evidence/0/va-medical-records'
    );

    // VA Facilities
    client.axeCheck('.main');
    PageHelpers.completeVAFacilitiesInformation(client, testData.data);
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(
      client,
      '/supporting-evidence/0/va-facilities'
    );

    // Private Medical Records Intro
    client.axeCheck('.main').click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFromExact(
      client,
      '/supporting-evidence/0/private-medical-records'
    );

    // Records Release
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/0/private-medical-records-release'
    );
    client.axeCheck('.main');
    PageHelpers.completeRecordReleaseInformation(client, testData.data);
    client.click('.usa-button-primary');
    E2eHelpers.expectLocation(client, '/supporting-evidence/0/documents');

    // Record upload
    E2eHelpers.expectLocation(client, '/supporting-evidence/0/documents');
    client.axeCheck('.main');
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/0/additionalDocuments'
    );

    // Additional document upload
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/0/additionalDocuments'
    );
    client.axeCheck('.main');
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/0/evidence-summary'
    );

    // Evidence Summary
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/0/evidence-summary'
    );
    client.axeCheck('.main');
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectLocation(client, '/supporting-evidence/1/evidence-type');

    // Second Disability Evidence Type
    E2eHelpers.expectLocation(client, '/supporting-evidence/1/evidence-type');
    client.axeCheck('.main');
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/1/evidence-summary'
    );

    // Second Evidence Summary
    E2eHelpers.expectLocation(
      client,
      '/supporting-evidence/1/evidence-summary'
    );
    client.axeCheck('.main');
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectLocation(client, '/chapter-five/page-one');

    // chapter 5 page 1
    E2eHelpers.expectLocation(client, '/chapter-five/page-one');
    client.axeCheck('.main');
    client.click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/chapter-five/page-one');

    // Review and Submit Page.
    client.waitForElementVisible(
      'label[name="privacyAgreement-label"]',
      Timeouts.slow
    );
    client.assert.cssClassPresent(
      '.progress-bar-segmented div.progress-segment:nth-child(4)',
      'progress-segment-complete'
    );
    client.axeCheck('.main');

    // Accept privacy agreement
    client.click('input[type="checkbox"]');
    client.click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Submit message
    client.waitForElementVisible('.schemaform-confirmation-section-header', Timeouts.normal);

    client.axeCheck('.main');
    client.end();
  }
});

module.exports = runTest;
