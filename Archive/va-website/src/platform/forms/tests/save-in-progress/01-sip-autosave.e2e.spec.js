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

    // load an in progress form
    client
      .click('.usa-button-primary');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');
    client.assert.urlContains('/veteran-information/birth-information');

    client
      .waitForElementVisible('.schemaform-sip-save-link', Timeouts.normal)
      .expect.element('#root_veteranSocialSecurityNumber').to.have.value.that.equals('123445544');

    // auto save a form
    client
      .fill('input[name="root_view:placeOfBirth_cityOfBirth"]', 'Northampton, MA')
      .waitForElementVisible('.saved-success-container', Timeouts.normal);

    // fail to save a form because of 500
    client
      .click('.usa-button-primary')
      .waitForElementVisible('.schemaform-sip-save-link', Timeouts.normal)
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'put',
        value: {},
        status: 500
      }, token)
      .fill('input[name="root_view:placeOfBirth_cityOfBirth"]', 'Amherst, MA')
      .waitForElementVisible('.usa-alert-error', Timeouts.normal);

    client.assert.urlContains('birth-information');
    client
      .expect.element('.usa-alert-error').text.to.contain('We’re sorry, but we’re having some issues and are working to fix them');

    // Recover and save after errors
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
      .fill('input[name="root_view:placeOfBirth_cityOfBirth"]', 'Florence, MA')
      .waitForElementVisible('.saved-success-container', Timeouts.normal);
    /* eslint-enable camelcase */

    client.assert.urlContains('/veteran-information/birth-information');

    // fail to save a form because signed out
    // Can't recover from this because it logs you out and we'd have to log in again
    client
      .click('.usa-button-primary')
      .waitForElementVisible('.schemaform-sip-save-link', Timeouts.normal)
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'put',
        value: {},
        status: 401
      }, token)
      .fill('input[name="root_view:placeOfBirth_cityOfBirth"]', 'Amherst, MA')
      .waitForElementVisible('.usa-alert-error', Timeouts.normal);

    client.assert.urlContains('birth-information');
    client.expect.element('.usa-alert-error').text.to.contain('Sorry, you’re no longer signed in');

    client.end();
  });
