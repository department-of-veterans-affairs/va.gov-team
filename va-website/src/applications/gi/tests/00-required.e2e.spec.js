const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const GiHelpers = require('./gibct-helpers');

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    GiHelpers.initApplicationMock();

    client
      .url(`${E2eHelpers.baseUrl}/gi-bill-comparison-tool/`);

    E2eHelpers.overrideSmoothScrolling(client);
    client.timeoutsAsyncScript(2000);

    client
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible('.gi-app', Timeouts.slow)
      // do not run 'wcag2a' rules because of open aXe bug https://github.com/dequelabs/axe-core/issues/214
      .axeCheck('.main', { rules: ['section508'] });

    client
      .waitForElementVisible('.keyword-search input[type="text"]', Timeouts.normal)
      .clearValue('.keyword-search input[type="text"]')
      .setValue('.keyword-search input[type="text"]', 'washington dc');

    client
      .click('#search-button')
      .waitForElementVisible('.search-page', Timeouts.normal)
      // do not run 'wcag2a' rules because of open aXe bug https://github.com/dequelabs/axe-core/issues/214
      .axeCheck('.main', { rules: ['section508'] });

    client
      .waitForElementVisible('.search-result a', Timeouts.normal)
      .click('.search-result a')
      .waitForElementVisible('.profile-page', Timeouts.normal)
      .axeCheck('.main');

    client.end();
  }
);
