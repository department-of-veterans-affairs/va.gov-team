const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts.js');
const FacilityHelpers = require('./facility-helpers');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    client
      .url(`${E2eHelpers.baseUrl}/facilities/`);

    E2eHelpers.overrideSmoothScrolling(client);
    FacilityHelpers.initApplicationMock();

    client
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible('.facility-locator', Timeouts.slow)
      // do not run 'wcag2a' rules because of open aXe bug https://github.com/dequelabs/axe-core/issues/214
      .axeCheck('.main', { rules: ['section508'] });

    client
      .clearValue('input[name="streetCityStateZip"]')
      .setValue('input[name="streetCityStateZip"]', 'Seattle, WA');

    client
      .click('input[type="submit"]')
      .waitForElementVisible('.facility-result', Timeouts.normal)
      // do not run 'wcag2a' rules because of open aXe bug https://github.com/dequelabs/axe-core/issues/214
      .axeCheck('.main', { rules: ['section508'] });

    // check detail pages
    client
      .waitForElementVisible('.facility-result a h5', Timeouts.normal)
      .click('.facility-result a h5')
      .waitForElementVisible('.facility-detail', Timeouts.slow)
      .axeCheck('.main');

    client.end();
  });
