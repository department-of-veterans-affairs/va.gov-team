const E2eHelpers = require('../../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../../platform/testing/e2e/timeouts');
const PageHelpers = require('./vre-ch31-helpers');
const testData = require('../chapter31/schema/maximal-test.json');

const runTest = E2eHelpers.createE2eTest(
  (client) => {
    PageHelpers.initApplicationSubmitMock();
    PageHelpers.initDocumentUploadMock();

    // renders introduction page
    client
      .url(`${E2eHelpers.baseUrl}/employment/vocational-rehab-and-employment/application/chapter31`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for vocational rehabilitation: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)
      .click('.schemaform-start-button');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Veteran information page
    client.waitForElementPresent('input[name="root_veteranFullName_first"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(1)', 'progress-segment-complete');
    PageHelpers.completeVeteranInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information');

    // Military history
    client.waitForElementPresent('input[name="root_serviceHistory_0_serviceBranch"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(2)', 'progress-segment-complete');
    PageHelpers.completeMilitaryHistory(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-information');

    // Military history
    client.waitForElementPresent('input[name="root_view:isWorking"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(3)', 'progress-segment-complete');
    PageHelpers.completeEmployerInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/military-history');

    // Education information
    client.waitForElementPresent('input[name="root_yearsOfEducation"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(4)', 'progress-segment-complete');
    PageHelpers.completeEducationInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/education-information');

    // Disability information
    client.waitForElementPresent('select[name="root_disabilityRating"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(5)', 'progress-segment-complete');
    PageHelpers.completeDisabilityInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/disability-information');

    // Veteran address
    client.waitForElementPresent('select[name="root_veteranAddress_country"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(6)', 'progress-segment-complete');
    PageHelpers.completeVeteranAddress(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-address');

    // Contact information
    client.waitForElementPresent('input[name="root_daytimePhone"]', Timeouts.normal);
    client.assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(6)', 'progress-segment-complete');
    PageHelpers.completeContactInformation(client, testData.data);
    client.axeCheck('.main')
      .click('.form-panel .usa-button-primary');

    // Discharge Documents page
    client
      .waitForElementVisible('label[for="root_dischargeDocuments"]', Timeouts.normal);
    client
      .assert.cssClassPresent('.progress-bar-segmented div.progress-segment:nth-child(7)', 'progress-segment-complete');
    client.axeCheck('.main');

    // Disable upload button style to reveal input for test
    // #<{(| HACK: style overridden so client driver can find/interact with hidden inputs
    //  (see https://github.com/nightwatchjs/nightwatch/issues/505) |)}>#
    client
      .execute("document.getElementById('root_dischargeDocuments').style.display = 'block';")
      .waitForElementVisible('#root_dischargeDocuments', Timeouts.normal);

    PageHelpers.completeDischargeDocumentUpload(client, testData.data);

    client
      .waitForElementVisible('label#root_dischargeDocuments_add_label', Timeouts.slow)
      .click('.form-panel .usa-button-primary');
    E2eHelpers.expectNavigateAwayFrom(client, '/documents/discharge');

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
