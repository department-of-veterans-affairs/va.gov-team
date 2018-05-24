const E2eHelpers = require('../../../../src/platform/testing/e2e/helpers');
const Timeouts = require('../../../../src/platform/testing/e2e/timeouts.js');
const HcaHelpers = require('../../../../src/applications/hca/tests/hca-helpers.js');
const testData = require('../../../../src/applications/hca/tests/schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    HcaHelpers.initApplicationSubmitMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/health-care/apply/application`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for Health Care: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow)  // First render of React may be slow.
      .click('.usa-button-primary');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');

    // Complete entire form
    HcaHelpers.completeEntireForm(client, testData.data);

    // Open first panel
    client
      .waitForElementVisible('.usa-accordion-bordered', Timeouts.normal)
      .click('.usa-accordion-bordered .usa-button-unstyled')
      .waitForElementVisible('.edit-btn', Timeouts.normal);

    // Edit form fields successfully
    client
      .click('.edit-btn');
    client.expect.element('input[name="root_veteranFullName_first"]').to.be.visible;

    client
      .clearValue('input[name="root_veteranFullName_first"]')
      .fill('input[name="root_veteranFullName_first"]', 'Jacques')
      .click('.usa-button-primary');

    client.expect.element('.review-row span').text.to.equal('Jacques');

    // Close panel
    client.expect.element('.edit-btn').to.be.visible;
    client
      .waitForElementVisible('button.usa-button-unstyled', Timeouts.normal)
      .click('button.usa-button-unstyled');

    client.expect.element('.edit-btn').to.not.be.present;

    // Edit form fields unsuccessfully
    client
      .waitForElementVisible('.usa-accordion-bordered', Timeouts.normal);

    client
      .click('.usa-accordion-bordered.form-review-panel:nth-child(2)')
      .click('.edit-btn')
      .pause(1000)
      .clearValue('#root_lastEntryDateYear')
      .setValue('#root_lastEntryDateYear', '98')
      .pause(1000);

    client
      .click('.usa-button-primary.null')
      .waitForElementVisible('.usa-input-error', Timeouts.normal);

    // Fix validation errors and save successfully
    client
      .fill('#root_lastEntryDateYear', '1998')
      .click('.usa-button-primary');

    client.expect.element('.review-row:nth-child(2) span').text.to.equal('01/02/1998');

    // Click privacy agreement
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .click('input[type="checkbox"]')
      // Disabling axeCheck for now, to return to in a separate PR
      // .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');

    E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.expect.element('.js-test-location').attribute('data-location')
      .to.not.contain('/review-and-submit').before(Timeouts.slow);

    // Submit message
    client.expect.element('.confirmation-page-title').to.be.visible;

    client.axeCheck('.main');

    client.end();
  });
