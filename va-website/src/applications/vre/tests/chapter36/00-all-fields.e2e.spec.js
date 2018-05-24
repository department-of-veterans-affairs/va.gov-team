const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./vre-ch36-helpers');
const testData = require('../chapter36/schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initApplicationSubmitMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/employment/vocational-rehab-and-employment/application/chapter36`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for vocational counseling: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.schemaform-start-button');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Applicant information page
    client.waitForElementPresent('input[name="root_view:isVeteran"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeApplicantInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant-information');

    // Dependent information page
    client.waitForElementPresent('input[name="root_applicantSocialSecurityNumber"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeDependentInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/dependent-information');

    // Applicant information page
    client.waitForElementPresent('input[name="root_veteranFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');
    PageHelpers.completeVeteranInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information');

    // Additonal information page
    client.waitForElementPresent('input[name="root_divorceOrAnnulmentPending"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');
    PageHelpers.completeAdditionalInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/additional-information');

    // Military information page
    client.waitForElementPresent('input[name="root_view:hasMilitaryHistory"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(4)', 'progress-segment-complete');
    PageHelpers.completeMilitaryHistoryInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history-applicant');

    // Address information page
    client.waitForElementPresent('select[name="root_applicantAddress_country"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
    PageHelpers.completeAddressInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/applicant-address');

    // Contact information page
    client.waitForElementPresent('input[name="root_applicantPrimaryPhone"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
    PageHelpers.completeContactInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/contact-information');

    // Accept privacy agreement
    client.click('input[type="checkbox"]');
    client.click('.form-progress-buttons .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Submit message
    client.waitForElementVisible('.confirmation-page-title', Timeouts.normal);

    client.axeCheck('.main');
    client.end();
  }
);

module.exports = runTest;
module.exports['@disabled'] = true;
