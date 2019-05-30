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

    // fail to load an in progress form
    client
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'get',
        value: {},
        status: 500
      }, token)
      .click('.usa-button-primary');

    E2eHelpers.overrideVetsGovApi(client);
    E2eHelpers.overrideSmoothScrolling(client);
    E2eHelpers.expectNavigateAwayFrom(client, '/introduction');
    client.assert.urlContains('error');

    client.axeCheck('.main');

    client.expect.element('.usa-alert-error').text.to.contain('We’re sorry. We’re having some server issues');

    // fail to find in progress form
    client
      .url(url)
      .waitForElementVisible('body', Timeouts.normal);

    E2eHelpers.overrideScrolling(client);

    client
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'get',
        value: {},
        status: 404
      }, token)
      .waitForElementPresent('.usa-button-primary', Timeouts.normal)
      .click('.usa-button-primary');

    client.waitForElementPresent('.usa-alert-error', Timeouts.slow);
    client.assert.urlContains('error');
    client.expect.element('.usa-alert-error').text.to.contain('Something went wrong when we tried to find your application');

    // Signed out when loading form
    E2eHelpers.overrideVetsGovApi(client);
    client
      .url(url)
      .waitForElementVisible('body', Timeouts.normal);

    E2eHelpers.overrideScrolling(client);

    client
      .mockData({
        path: '/v0/in_progress_forms/1010ez',
        verb: 'get',
        value: {},
        status: 401
      }, token)
      .waitForElementPresent('.usa-button-primary', Timeouts.normal)
      .click('.usa-button-primary');

    client.waitForElementPresent('.usa-alert-error', Timeouts.slow);

    client.expect.element('.usa-alert-error').text.to.contain('You’re signed out of your account');

    client.end();
  });
