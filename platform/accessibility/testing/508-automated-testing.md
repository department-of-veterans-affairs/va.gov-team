# Automated Accessibility/508 Compliance Testing

The intent of this script is to create a common language, extensible functions, and predictable test runs for automated keyboard testing. The blocks below show an actual test in production, and the helper methods available in the API.

```javascript
/*
 * https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/gi/tests/01-keyboard.e2e.spec.js
 */

const E2eHelpers = require('../../../platform/testing/e2e/helpers');
const Timeouts = require('../../../platform/testing/e2e/timeouts');
const GiHelpers = require('./gibct-helpers');

module.exports = E2eHelpers.createE2eTest(client => {
  const {
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
    ARROW_UP,
    ENTER,
    TAB,
  } = client.Keys;

  GiHelpers.initApplicationMock();

  client.openUrl(`${E2eHelpers.baseUrl}/gi-bill-comparison-tool/`);

  E2eHelpers.overrideSmoothScrolling(client);
  client.timeoutsAsyncScript(2000);

  // Assert the correct number of focusable elements in the form
  client.assert.hasFocusableCount('div.usa-width-two-thirds form', 15);

  // Assert the correct number of tabbable elements in the form
  client.assert.hasTabbableCount('div.usa-width-two-thirds form', 11);

  // Assert skip navigation link works correctly
  client
    .waitForElementVisible('.landing-page', Timeouts.verySlow)
    .keys(TAB)
    .assert.isActiveElement('a.show-on-focus')
    .keys(ENTER)
    .keys(TAB)
    .assert.isActiveElement('.va-nav-breadcrumbs-list > li > a');

  // Move on to the form
  client.repeatKeypress(TAB, 3).assert.isActiveElement('#militaryStatus');

  // Evaluate the military status select menu
  client.allyEvaluateSelectMenu('#militaryStatus', 'child', 'child');

  // Open and close the GI Bill Benefit modal
  client
    .keys(TAB)
    .allyEvaluateModalWindow(
      'button[aria-label="Learn more about VA education and training programs"]',
      'div[role="alertdialog"]',
      'button[aria-label="Close this modal"]',
    );

  // Evaluate the GI Bill Benefit select
  client
    .keys(TAB)
    .assert.isActiveElement('#giBillChapter')
    .allyEvaluateSelectMenu('#giBillChapter', 'montgomery', '30');

  // Open and close the enlistment modal
  client
    .keys(TAB)
    .allyEvaluateModalWindow(
      'button[aria-label="Learn more about how the length of Montgomery GI Bill active-duty service affects your benefits"]',
      'div[role="alertdialog"]',
      'button[aria-label="Close this modal"]',
    );

  // Evaluate the enlistment select
  client
    .keys(TAB)
    .assert.isActiveElement('#enlistmentService')
    .allyEvaluateSelectMenu('#enlistmentService', '2', '2');

  // Evaluate the type of institution radio group with ARROW_DOWN and ARROW_RIGHT
  client
    .keys(TAB)
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-1"]',
      ],
      ARROW_DOWN,
    )
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-1"]',
      ],
      ARROW_RIGHT,
    );

  // Evaluate the type of institution radio group with ARROW_UP and ARROW_LEFT in reverse order
  client
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-1"]',
      ],
      ARROW_UP,
      true,
    )
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="category"][id^="radio-buttons-"][id$="-1"]',
      ],
      ARROW_LEFT,
      true,
    );

  // Skip the modal and evaluate the type of class radio group with ARROW_DOWN and ARROW_RIGHT.
  // This one is a bit unique because the second radio is pre-checked.
  client
    .repeatKeypress(TAB, 2)
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-1"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-2"]',
      ],
      ARROW_DOWN,
    )
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-1"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-2"]',
      ],
      ARROW_RIGHT,
    );

  // Evaluate the type of class radio group with ARROW_UP and ARROW_LEFT in reverse order
  client
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-1"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-2"]',
      ],
      ARROW_UP,
      true,
    )
    .allyEvaluateRadioButtons(
      [
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-0"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-1"]',
        '.form-radio-buttons  input[name="onlineClasses"][id^="radio-buttons-"][id$="-2"]',
      ],
      ARROW_LEFT,
      true,
    );

  // Let's try to submit an incomplete form by skipping over the city typeahead
  client
    .repeatKeypress(TAB, 2)
    .assert.isDisabledElement('#search-button', false)
    .assert.isActiveElement('#search-button')
    .keys(ENTER);

  // An error should appear on the enter a city, school or name typeahead label
  client.assert.elementPresent('#search-error-message');

  client.end();
});
```

## Keyboard e2e helper api

#### allyEvaluateCheckboxes

Evaluate checkboxes for basic keyboard functionality. Each checkbox can receive keyboard focus by pressing TAB. Each checkbox can be toggled by pressing SPACE

``` javascript 
this.demoTest = function (client) {
  client.allyEvaluateCheckboxes([
    "input[type="checkbox"]#1",
    "input[type="checkbox"]#2",
    "input[type="checkbox"]#3"
  ]);
};
```

| param | type | description | 
|----------|:-------------:|:-------------:|
| selectorArray | string | The array of checkboxes by (CSS / Xpath) to be evaluated. | 
| timeoutNum | number | Value in milliseconds to wait for a selector. Default is 2000. |



#### allyEvaluateInput

Evaluate inputs and textareas for basic keyboard functionality. We will ensure the input or textarea has focus, can take key entry, and returns the value we expect.

``` javascript 
this.demoTest = function (client) {
  client.allyEvaluateInput('selector', 'input text');
};
```

| param | type | description | 
|----------|:-------------:|:-------------:|
| input | string | The selector (CSS / Xpath) used to locate the element. | 
| inputText | string | The text string that should be keyed into the input. |



#### allyEvaluateModalWindow

Evaluate modal windows for basic keyboard open and close functionality.

``` javascript 
this.demoTest = function (client) {
  client
  .allyEvaluateModalWindow(
    'button[aria-label="Learn more about VA education and training programs"]',
    'div[role="alertdialog"]',
    'button[aria-label="Close this modal"]',
    ENTER,
  );
};
```

| param | type | description | 
|----------|:-------------:|:-------------:|
| modalTrigger | string | The selector (CSS / Xpath) used to open the modal window. | 
| modalElement | string | The selector (CSS / Xpath) of the modal container. |
| modalCloseElement | string | The selector (CSS / Xpath) used to close the modal window. | 
| triggerKey | object | The client.Keys.KEY being pressed to open and close the modal window. Default key is ENTER. |
| timeoutNum | number | Value in milliseconds to wait for a selector. Default is 2000. |


#### allyEvaluateRadioButtons

Evaluate radio buttons for basic forward keyboard functionality. Radio groups can receive keyboard focus by pressing TAB. Each radio button can be checked by pressing the DOWN or RIGHT arrow keys. Pass the optional boolean true to reverse the direction and evaluate radio buttons from bottom to top.

``` javascript 
this.demoTest = function (client) {
  client.allyEvaluateRadioButtons([
    "input[type="radio"]#1",
    "input[type="radio"]#2",
    "input[type="radio"]#3"
  ], client.Keys.ARROW_DOWN);
};
```


| param | type | description | 
|----------|:-------------:|:-------------:|
| selectorArray | string | The array of radio buttons by (CSS / Xpath) to be evaluated. | 
| arrowPressed | object | Nightwatch Keys object. Expects ARROW_DOWN || ARROW_RIGHT. |
| reversed | boolean | Will reverse the array order to work with ARROW_UP and ARROW_LEFT. | 
| timeoutNum | number | Value in milliseconds to wait for a selector. Default is 2000. |


#### allyEvaluateSelectMenu

Evaluate select menus for basic keyboard functionality. Each select can receive keyboard focus by pressing TAB. Select menus should open with SPACE press, and user should be able to enter keys. This is an imperfect  approximation, but Nightwatch doesn't support arrow keys for traversing options in the open select.

``` javascript 
this.demoTest = function (client) {
  client.allyEvaluateSelectMenu('selector', 'option text', 'option value');
};
```


| param | type | description | 
|----------|:-------------:|:-------------:|
| selectMenu | string | The selector (CSS / Xpath) used to locate the element. | 
| optionText | string | The text of the <option> that should be selected. |
| selectedOption | string | Value attribute of the <option> that should be selected. | 
| timeoutNum | number | Value in milliseconds to wait for a selector. Default is 2000. |
