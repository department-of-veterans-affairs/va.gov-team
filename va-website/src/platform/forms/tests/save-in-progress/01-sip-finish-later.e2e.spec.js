const moment = require('moment');
const E2eHelpers = require('../../../testing/e2e/helpers');
const Timeouts = require('../../../testing/e2e/timeouts.js');
const HcaHelpers = require('../../../../applications/hca/tests/hca-helpers.js');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const url = `${E2eHelpers.baseUrl}/health-care/apply/application`;
    const token = HcaHelpers.initSaveInProgressMock(url, client);

    // Ensure introduction page renders.
    client
      .url(url)
      .waitForElementVisible('body', Timeouts.normal)
      .assert.title('Apply for Health Care: Vets.gov')
      .waitForElementVisible('.usa-button-primary', Timeouts.slow);  // First render of React may be slow.

    client.axeCheck('.main');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);

    // load an in progress form
    client
      .click('.usa-button-primary');

    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');
    client.assert.urlContains('/veteran-information/birth-information');

    client
      .waitForElementVisible('.schemaform-sip-save-link', Timeouts.normal)
      .expect.element('#root_veteranSocialSecurityNumber').to.have.value.that.equals('123445544');

    // save and finish a form later
    client
      .fill('input[name="root_view:placeOfBirth_cityOfBirth"]', 'Northampton, MA')
      .click('.schemaform-sip-save-link');

    E2eHelpers.expectNavigateAwayFrom(client, '/veteran-information/birth-information');
    client.assert.urlContains('form-saved');

    client.axeCheck('.main');

    // fail to save a form
    client
      .click('.usa-button-primary')
      .waitForElementVisible('.schemaform-sip-save-link', Timeouts.normal)
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'put',
        value: {},
        status: 500
      }, token)
      .click('.schemaform-sip-save-link');

    client.waitForElementVisible('.usa-alert-error', Timeouts.slow);

    client.assert.urlContains('birth-information');

    client
      .expect.element('.usa-alert-error').text.to.contain('Something went wrong when saving your form');

    /* eslint-disable camelcase */
    client
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'put',
        value: {
          data: {
            attributes: {
              metadata: {
                version: 0,
                returnUrl: '/veteran-information/birth-information',
                savedAt: 1498588443698,
                expires_at: moment().add(1, 'day').unix(),
                last_updated: 1498588443
              }
            }
          }
        }
      }, token)
      .click('.schemaform-sip-save-link');
    /* eslint-enable camelcase */

    client.waitForElementVisible('.saved-form-metadata-container', Timeouts.slow);
    client.assert.urlContains('form-saved');

    // test start over, but all it really does is fetch the form again
    client
      .click('.usa-button-secondary')
      .waitForElementVisible('.va-modal', Timeouts.normal)
      .click('.va-modal .usa-button-primary')
      .waitForElementVisible('.schemaform-chapter-progress', Timeouts.normal);

    E2eHelpers.expectNavigateAwayFrom(client, 'form-saved');
    client.assert.urlContains('/veteran-information/birth-information');

    // test 401 error when saving
    client
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'put',
        value: {},
        status: 401
      }, token)
      .click('.schemaform-sip-save-link');

    client
      .expect.element('.usa-alert-error').text.to.contain('Sorry, you’re signed out.');

    client.end();
  });

module.exports['@disabled'] = true;
