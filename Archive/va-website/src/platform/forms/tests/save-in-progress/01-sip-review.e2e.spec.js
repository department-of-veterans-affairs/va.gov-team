const E2eHelpers = require('../../../testing/e2e/helpers');
const Timeouts = require('../../../testing/e2e/timeouts.js');
const HcaHelpers = require('../../../../applications/hca/tests/hca-helpers.js');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const url = `${E2eHelpers.baseUrl}/health-care/apply/application`;
    const reviewUrl = `${url}/review-and-submit?skip`;
    const token = HcaHelpers.initSaveInProgressMock(url, client);

    // Ensure introduction page renders.
    client
      .url(reviewUrl)
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible('.usa-button-primary', Timeouts.slow);  // First render of React may be slow.

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideScrolling(client);

    client
      .click('.schemaform-chapter-accordion-header:first-child > .usa-button-unstyled')
      .click('.edit-btn')
      .fill('input[name="root_veteranFullName_first"]', 'Jane')
      .waitForElementVisible('.saved-success-container', Timeouts.normal);

    // save and finish a form later
    client
      .click('.schemaform-sip-save-link');

    E2eHelpers.expectNavigateAwayFrom(client, '/review-and-submit');
    client.assert.urlContains('form-saved');

    // server error when saving in progress form
    client
      .url(reviewUrl)
      .waitForElementVisible('body', Timeouts.normal);

    E2eHelpers.overrideScrolling(client);

    client
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'put',
        value: {},
        status: 500
      }, token)
      .waitForElementVisible('.schemaform-sip-save-link', Timeouts.normal)
      .click('.schemaform-sip-save-link')
      .waitForElementVisible('.usa-alert-error', Timeouts.slow);

    client.assert.urlContains('review-and-submit');
    client.expect.element('.usa-alert-error').text.to.contain('We’re sorry. Something went wrong when saving your form');

    client.end();
  });
