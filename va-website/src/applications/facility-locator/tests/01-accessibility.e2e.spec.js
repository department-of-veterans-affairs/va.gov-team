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

    // Traverse form controls via keyboard input
    client
      .sendKeys('input[name="streetCityStateZip"]', client.Keys.TAB)
      .assert.isActiveElement('div[class="facility-dropdown-wrapper"]');

    client
      .sendKeys('div[class="facility-dropdown-wrapper"]', client.Keys.TAB)
      .assert.isActiveElement('div[class="facility-dropdown-wrapper disabled"]');

    client
      .sendKeys('div[class="facility-dropdown-wrapper disabled"]', client.Keys.TAB)
      .assert.isActiveElement('input[type="submit"]');

    // Enter and navigate custom select via keyboard input
    client
      .sendKeys('div[class="facility-dropdown-wrapper"]', client.Keys.DOWN_ARROW)
      .assert.isActiveElement('#AllFacilities');

    client
      .assert.visible('ul[class="dropdown"]');

    client
      .sendKeys('#AllFacilities', client.Keys.DOWN_ARROW)
      .assert.isActiveElement('#health');

    client
      .sendKeys('#health', client.Keys.ENTER)
      .assert.isActiveElement('div[class="facility-dropdown-wrapper"]');

    client
      .assert.hidden('ul[class="dropdown"]');

    client
      .assert.attributeContains('#health', 'aria-selected', true);

    client.end();
  });
