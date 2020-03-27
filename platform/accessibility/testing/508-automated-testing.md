# Automated Accessibility/508 Compliance Testing

## Automated Accessibility/508 Compliance Tests

The intent of this script is to create a common language, extensible functions, and predictable test runs for automated keyboard testing. For the initial test script, I used custom `data-` attributes that take cues from Java and BEM naming conventions:

* `data-nwId="`
* `page-name`
* `-blockContainer-N-`
* `-htmlElement-N"`

So a typical data attribute might look like `data-nwID="index-form-1-input-1"`. The naming scheme is verbose, but I believe it offers a way for UX and research to map user workflows with respect to forms and rich widgets.

```javascript
module.exports = {
  'INDEX: Assert 1 TAB to load page Content 1': client => {
    const { ENTER, TAB } = client.Keys;

    client
      .url('http://localhost:8080')
      .waitForElementVisible('[data-nwId="body-index"]')
      .assert.isActiveElement('[data-nwId="body-index"]')
      .keys(TAB)
      .assert.isActiveElement('[data-nwId="link-content-1"]')
      .keys(ENTER);
  },

  'CONTENT-1: Assert text inputs can be tabbed': client => {
    const { TAB } = client.Keys;
    const base = '[data-nwId="content-1';
    const body = `${base}-body"]`;
    const form1 = `${base}-form-1`;
    const inputs = [
      [`${form1}-input-1"]`, 'Josephine Rogers'],
      [`${form1}-input-2"]`, '29'],
      [`${form1}-input-3"]`, 'josephine@test.com'],
      [`${form1}-input-4"]`, '5551234567'],
      [`${form1}-input-5"]`, 'itsjrogers'],
      [`${form1}-input-6"]`, 'jrogers99'],
    ];

    // Assert content-1.html is loaded and that
    // the <body> tag has keyboard focus
    client
      .assert.urlContains('content/content1.html')
      .waitForElementVisible(body)
      .assert.isActiveElement(body);

    // Assert inputs can be reached with TAB,
    // and that proper values can be entered
    // by keyboard entry
    inputs.forEach(i => {
      const [element, input] = i;

      client
        .keys(TAB)
        .assert.isActiveElement(element)
        .sendKeys(element, input)
        .assert.attributeContains(element, 'value', input);
    });
  },

  'CONTENT-1: Assert checkboxes can be toggled with SPACEBAR': client => {
    const { SPACE, TAB } = client.Keys;
    const base = '[data-nwId="content-1';
    const form1 = `${base}-form-1`;
    const checkboxes = [
      [`${form1}-checkbox-1"]`],
      [`${form1}-checkbox-2"]`],
      [`${form1}-checkbox-3"]`],
      [`${form1}-checkbox-4"]`],
    ];

    // Assert that checkobxes can be reached with TAB,
    // and that they can be checked with SPACE (spacebar)
    checkboxes.forEach(i => {
      const [element] = i;

      client
        .keys(TAB)
        .assert.isActiveElement(element)
        .keys(SPACE)
        .assert.attributeContains(element, 'checked', 'true');
    });
  },

  'CONTENT-1: Assert radio buttons can be toggled with arrow keys': client => {
    const {
      ARROW_DOWN,
      ARROW_LEFT,
      ARROW_RIGHT,
      ARROW_UP,
      TAB,
    } = client.Keys;
    const base = '[data-nwId="content-1';
    const form1 = `${base}-form-1`;
    const radioButtons = [
      [`${form1}-radio-1"]`],
      [`${form1}-radio-2"]`],
    ];

    client
      .keys(TAB)
      .assert.isActiveElement(radioButtons[0])
      .keys(ARROW_DOWN)
      .assert.isActiveElement(radioButtons[1])
      .keys(ARROW_UP)
      .assert.isActiveElement(radioButtons[0])
      .keys(ARROW_RIGHT)
      .assert.isActiveElement(radioButtons[1])
      .keys(ARROW_LEFT)
      .assert.isActiveElement(radioButtons[0]);
  },

  'CONTENT-1: Assert button can submit form by pressing SPACEBAR': client => {
    const { SPACE, TAB } = client.Keys;
    const button = 'button[data-nwId="content-1-form-1-button-1"]';

    client
      .keys(TAB)
      .assert.elementPresent(button)
      .assert.isActiveElement(button)
      .keys(SPACE)
      .assert.urlContains('http://localhost:8080/content/content1.html?name=Josephine+Rogers&age=29&email=josephine%40test.com&telephone=5551234567&twitter=itsjrogers&keybase=jrogers99&checkbox-contacts=checkbox-email&checkbox-contacts=checkbox-telephone&checkbox-contacts=checkbox-twitter&checkbox-contacts=checkbox-keybase&radio-subscribe=radio-yes#');
  },


  'CONTENT-1: Assert button can submit form by pressing ENTER': client => {
    const { ENTER, SHIFT, TAB } = client.Keys;
    const button = 'button[data-nwId="content-1-form-1-button-1"]';

    client
      .keys(SHIFT + TAB)
      .assert.elementPresent(button)
      .assert.isActiveElement(button)
      .keys(ENTER)
      .assert.urlContains('http://localhost:8080/content/content1.html?name=Josephine+Rogers&age=29&email=josephine%40test.com&telephone=5551234567&twitter=itsjrogers&keybase=jrogers99&checkbox-contacts=checkbox-email&checkbox-contacts=checkbox-telephone&checkbox-contacts=checkbox-twitter&checkbox-contacts=checkbox-keybase&radio-subscribe=radio-yes#');
  },

  after: client => {
    client.end();
  },
};
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
| reversed | boolean | Will reverse the array order to workw ith ARROW_UP and ARROW_LEFT. | 
| timeoutNum | number | Value in milliseconds to wait for a selector. Default is 2000. |


#### allyevaluateSelectMenu

Evaluate select menus for basic keyboard functionality. Each select can receive keyboard focus by pressing TAB. Select menus should open with SPACE press, and user should be able to enter keys. This is an imperfect  approximation, but Nightwatch doesn't support arrow keys for traversing options in the open select.

``` javascript 
this.demoTest = function (client) {
  client.allyevaluateSelectMenu('selector', 'option text', 'option value');
};
```


| param | type | description | 
|----------|:-------------:|:-------------:|
| selectMenu | string | The selector (CSS / Xpath) used to locate the element. | 
| optionText | string | The text of the <option> that should be selected. |
| selectedOption | string | Value attribute of the <option> that should be selected. | 
| timeoutNum | number | Value in milliseconds to wait for a selector. Default is 2000. |

