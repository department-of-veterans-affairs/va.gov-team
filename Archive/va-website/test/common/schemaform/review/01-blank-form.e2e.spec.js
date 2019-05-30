const E2eHelpers = require('../../../../src/platform/testing/e2e/helpers');
const Timeouts = require('../../../../src/platform/testing/e2e/timeouts.js');
const HcaHelpers = require('../../../../src/applications/hca/tests/hca-helpers.js');
// const testData = require('../../../hca/schema/maximal-test.json');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    HcaHelpers.initApplicationSubmitMock();

    // Ensure introduction page renders.
    client
      .url(`${E2eHelpers.baseUrl}/health-care/apply/application/review-and-submit?skip`)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for Health Care: Vets.gov')
      .waitForElementVisible('.schemaform-title', Timeouts.slow);  // First render of React may be slow.

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);

    // Open first panel
    client
      .waitForElementVisible('.usa-accordion-bordered', Timeouts.normal)
      .click('.usa-accordion-bordered .usa-button-unstyled')
      .waitForElementVisible('.edit-btn', Timeouts.normal);

    // Try to save form with validation errors
    client
      .click('.edit-btn');
    client.expect.element('input[name="root_veteranFullName_first"]').to.be.visible;

    client
      .waitForElementVisible('.form-review-panel-page .usa-button-primary', Timeouts.normal)
      .click('.form-review-panel-page .usa-button-primary');

    client.expect.element('.usa-input-error').to.be.visible;
    client.expect.element('input[name="root_veteranFullName_first"]').to.be.visible;

    // Fix validation errors and save successfully
    client
      .fill('input[name="root_veteranFullName_first"]', 'Jean-Pierre')
      .fill('input[name="root_veteranFullName_last"]', 'Robespierre')
      .click('.form-review-panel-page .usa-button-primary');

    client.expect.element('.review-row span').text.to.equal('Jean-Pierre');

    // Click privacy agreement and trying to submit form with empty fields
    client
      .waitForElementVisible('label[name="privacyAgreement-label"]', Timeouts.slow)
      .click('input[type="checkbox"]')
      // Disabling axeCheck for now, to return to in a separate PR
      // .axeCheck('.main')
      .click('.form-progress-buttons .usa-button-primary');

    client.expect.element('.usa-alert').to.be.visible;

    client.end();
  });
