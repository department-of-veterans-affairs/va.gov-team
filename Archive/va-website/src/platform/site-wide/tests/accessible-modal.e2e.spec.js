const E2eHelpers = require('../../testing/e2e/helpers');
const Timeouts = require('../../testing/e2e/timeouts.js');

const overlay = '#modal-crisisline';
const firstModalItem = 'a[href="tel:18002738255"]';
const closeControl = '.va-crisis-panel.va-modal-inner button';
const firstOpenControl = 'button.va-crisis-line-button.va-overlay-trigger';
const secondOpenControl = 'button.va-overlay-trigger.usa-button.usa-button-secondary';
const thirdOpenControl = 'button.va-overlay-trigger.usa-button-unstyled.va-footer-vcl-trigger';
const lastModalItem = 'a[href="https://www.veteranscrisisline.net/"]';

module.exports = E2eHelpers.createE2eTest(
  (client) => {
    const { ENTER, ESCAPE, TAB, SHIFT } = client.Keys;

    client
      .url(`${E2eHelpers.baseUrl}/`);

    E2eHelpers.overrideSmoothScrolling(client);

    client
      .waitForElementVisible('body', Timeouts.normal)
      .waitForElementVisible(firstOpenControl, Timeouts.slow)
      .axeCheck('.main');


    // --------------------- //
    // --- Modal tests --- //
    // --------------------- //

    // Open modal
    client
      .focusOn(firstOpenControl)
      .keys(ENTER)
      .assert.isActiveElement(firstModalItem);

    // Trap backward traversal
    client
      .keys([SHIFT, TAB, TAB, SHIFT]) // Second SHIFT releases modifier key
      .assert.isActiveElement(lastModalItem);

    // Trap forward traversal
    client
      .keys(TAB)
      .assert.isActiveElement(closeControl);

    // Escape modal
    client
      .keys(ESCAPE)
      .assert.cssClassNotPresent(overlay, 'va-overlay--open')
      .assert.cssClassNotPresent('body', 'va-pos-fixed');

    // Return focus to appropriate open controls
    client
      .assert.isActiveElement(firstOpenControl);

    client
      .focusOn(secondOpenControl)
      .keys(ENTER)
      .assert.isActiveElement(firstModalItem);

    client
      .keys(ESCAPE)
      .assert.isActiveElement(secondOpenControl);

    client
      .focusOn(thirdOpenControl)
      .keys(ENTER)
      .assert.isActiveElement(firstModalItem);

    client
      .keys(ESCAPE)
      .assert.isActiveElement(thirdOpenControl);

    client.end();
  });

