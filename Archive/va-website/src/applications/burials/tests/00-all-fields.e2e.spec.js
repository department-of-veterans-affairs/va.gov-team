const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./burial-helpers');
const testData = require('./schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initApplicationSubmitMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/burials-and-memorials/application/530`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for burial benefits: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.usa-button-primary');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Claimant Information page
    client.waitForElementVisible('input[name="root_claimantFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeClaimantInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/claimant-information');

    // Veteran Information page
    client.waitForElementVisible('input[name="root_veteranFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');
    PageHelpers.completeVeteranInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    // This expects the url to not contain 'veteran-information', but when we
    //  navigate away properly, the new url is 'veteran-information/burial', so
    //  it fails when it shouldn't.
    // E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information');

    // Burial Information page
    client.waitForElementVisible('input[name="root_deathDateYear"]', Timeouts.normal);
    PageHelpers.completeBurialInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/burial');

    // Service Periods page
    client.waitForElementVisible('input[name="root_toursOfDuty_0_dateRange_fromYear"]', Timeouts.normal);
    PageHelpers.completeServicePeriods(client, testData.data);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history/service-periods');

    // Previous Names page
    client.waitForElementVisible('label[for$="serveUnderOtherNamesYes"]', Timeouts.normal);
    PageHelpers.completePreviousNames(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history/previous-names');

    // Benefit Selection page
    client.waitForElementVisible('label[for="root_view:claimedBenefits_burialAllowance"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(4)', 'progress-segment-complete');
    PageHelpers.completeBenefitSelection(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/benefits/selection');

    // Burial Allowance page -- conditional
    if (testData.data['view:claimedBenefits'].burialAllowance) {
      client.waitForElementVisible('label[for="root_burialAllowanceRequested_0"]', Timeouts.normal);
      PageHelpers.completeBurialAllowance(client, testData.data);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/benefits/burial-allowance');
    }

    // Plot Allowance page -- conditional
    if (testData.data['view:claimedBenefits'].plotAllowance) {
      client.waitForElementVisible('input[name="root_placeOfRemains"]', Timeouts.normal);
      PageHelpers.completePlotAllowance(client, testData.data);
      client.axeCheck('.main')
        .click('.form-panel .usa-button-primary');
      E2eHelpers.expectNavigateAwayFrom(client, '/benefits/plot-allowance');
    }


    // Additional Information page
    client.waitForElementVisible('select[name="root_claimantAddress_country"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
    PageHelpers.completeClaimantContactInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/claimant-contact-information');

    // TODO: Test file upload
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/documents');

    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(6)', 'progress-segment-complete');

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

    client.end();
  }
);

module.exports = runTest;
