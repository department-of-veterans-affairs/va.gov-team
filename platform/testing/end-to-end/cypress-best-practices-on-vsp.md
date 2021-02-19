# Cypress Best Practices on VSP

## Table of Contents

- [Introduction](#introduction)
- [Running Tests](#running-tests)
  - [Headless Mode](#headless-mode)
  - [Test Runner](#test-runner)
- [Things to Note](#things-to-note)
  - [Automatic Waiting](#automatic-waiting)
  - [Third-Party Plugings](#third-party-plugins)
- [Cypress Form Tester](#cypress-form-tester)
- [Cypress Custom Commands](#cypress-custom-commands)
  - [Mock User: `cy.login(userData)`](#mock-user-cyloginuserdata)
  - [Test Data: `cy.syncFixtures(fixtures)`](#test-data-cysyncfixturesfixtures)
  - [Viewport Presets: `cy.viewportPreset(preset, orientation, options)`](#viewport-presets-cyviewportpresetpreset-orientation-options)
  - [File Uploads: `cy.upload(fileName, fileType)`](#file-uploads-cyuploadfilename-filetype)
  - [Expand Accordions: `cy.expandAccordions()`](#expand-accordions-cyexpandaccordions)
  - [Accessibility - `cy.axeCheck(context, tempOptions)`](#accessibility-cyaxecheckcontext-tempoptions)
  - [Accessibility Convience Function: `injectAxeThenAxeCheck(context, tempOptions)`](#accessibility-convience-function-injectaxethenaxecheckcontext-tempoptions)
  - [Count Focusable and Tabbable Elements: `hasCount(elementCategory, selector, count)`](#count-focusable-and-tabbable-elements-hascountelementcategory-selector-count)
- [Iterate Through Top VA.gov Viewports](#iterate-through-top-vagov-viewports)
- [Cypress Testing Library Selectors](#cypress-testing-library-selectors)
- [`data-testid` Attribute](#data-testid-attribute)

## Introduction

End-to-end (e2e) testing on VA.gov is accomplished using a frontend testing framework called Cypress. Cypress tests run in the browser and programmatically simulate a real user using a web application, or product. These tests are used to verify that the product works as expected across different browsers and viewport dimensions.

The following documentation details Cypress best practices on VSP.

## Running tests <a name="running-tests"></a>

Cypress supports Chrome, Edge, Firefox, and a few [others](https://docs.cypress.io/guides/guides/launching-browsers.html#Browsers). You can run tests in headless mode or via the test runner.

### Headless mode <a name="headless-mode"></a>

To run headless tests, run `yarn cy:run`.

By default, `yarn cy:run` runs Cypress tests headlessly in an Electron browser. You may specify another browser, and if you would like to run headless tests in another browser, you will have to explicitly include the `--headless` flag.

```
yarn cy:run --headless --browser firefox
```

You may experience some performance issues where particular long-running tests (such as an exhaustive test of a form) may take an extremely long time (unless your setup is optimized for them, as in the case of our CI, which tests the production build and also has the specs to cancel out the performance burden).

For this reason, for local development, it might be better to run specific specs, even more so in the test runner. The Cypress team is [investigating various issues regarding performance](https://github.com/cypress-io/cypress/issues/6388#issuecomment-648795870) that may likely be related to this.

### Test runner <a name="test-runner"></a>

To run tests in the Cypress [test runner](https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview), run `yarn cy:open`.

There is a dropdown menu in the top right of the test runner that allows you to select a browser in which to run your tests. In our experience, Firefox has yielded the fastest test runs when testing locally, although it is currently a beta feature. The tests in CI will run in the default browser, which is Electron.

The test runner provides the ability to pause tests, and [time travel](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Time-travel), which allows you to see snapshots of your tests.

With the test runner, you are able to use Cypress's "Selector Playground". This allows you to click on elements in the DOM and copy that element's selector to use in your test. However, [as mentioned elsewhere](#data-testid-attribute), selecting elements by CSS attributes is discouraged in favor of selecting by test id, which is in turn considered a fallback if selecting by other attributes (label text, role, etc.) is not feasible. In fact, the Selector Playground follows this best practice and automatically attempts to determine the selector by looking at `data-cy`, `data-test`, and `data-testid` before falling back to a CSS selector.

You may find it useful to append certain [options](https://docs.cypress.io/guides/guides/command-line.html#Commands) to the commands above.

## Things to note <a name="things-to-note"></a>

### Automatic waiting

Cypress automatically waits for commands to execute before moving on to the next one. This eliminates the need to use the timeout constants in `platform/testing/e2e/timeouts.js`.

Cypress queues its commands instead of running them synchronously, so doing something like [this](https://docs.cypress.io/guides/references/best-practices.html#Assigning-Return-Values) will not work.

### Third-party plugins

Cypress has many third party [plugins](https://docs.cypress.io/plugins/) available. If you find yourself needing to do something that isn't natively supported, there may be a plugin for it.

## Cypress Form Tester

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/form-tester

The form tester is a utility that automates Cypress end-to-end (E2E) tests on forms contained within applications on VA.gov. The form tester automatically fills out forms using data from JSON files that represent the body of the API request that's sent upon submitting the form.

Use the form tester to test forms on VA.gov applications.

Please see the [Cypress Form Tester documentation](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform/testing/e2e/cypress/support/form-tester) for more information.

## Cypress Custom Commands

Custom Cypress commands abstract away common behaviors that are required across VA.gov applications. The following custom commands are available:

- Mock User: `cy.login(userData)`
- Test Data: `cy.syncFixtures(fixtures)`
- File uploads: `cy.upload(fileName, fileType)`
- Accessibility - `cy.axeCheck(context)`
- Expand Accordions: `cy.expandAccordions()`

### Mock User: cy.login(userData)

Without providing any arguments, it will use a default user. To be signed in as a custom-defined user, you may pass in a compatible object as the argument. It should have the same shape as the response body for the `/v0/user` API endpoint. See `src/platform/testing/e2e/cypress/support/commands/login.js` for the default user object as an example to copy and modify as needed.

```javascript
cy.login();

const myUser = {
  data: {
    attributes: {
      ...
    },
  },
};

cy.login(myUser);
```

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/login.js

#### Description:

Allows us to simulate a signed-in session.

#### Arguments:

`cy.login()` takes an optional argument which is assigned to the `userData` parameter which defaults to the following `mockUser` object if no argument is given:

```javascript
const mockUser = {
  data: {
    attributes: {
      profile: {
        sign_in: {
          service_name: 'idme',
        },
        email: 'fake@fake.com',
        loa: { current: 3 },
        first_name: 'Jane',
        middle_name: '',
        last_name: 'Doe',
        gender: 'F',
        birth_date: '1985-01-01',
        verified: true,
      },
      veteran_status: {
        status: 'OK',
        is_veteran: true,
        served_in_military: true,
      },
      in_progress_forms: [
        {
          form: VA_FORM_IDS.FORM_10_10EZ,
          metadata: {},
        },
      ],
      prefills_available: [VA_FORM_IDS.FORM_21_526EZ],
      services: [
        'facilities',
        'hca',
        'edu-benefits',
        'evss-claims',
        'form526',
        'user-profile',
        'health-records',
        'rx',
        'messaging',
      ],
      va_profile: {
        status: 'OK',
        birth_date: '19511118',
        family_name: 'Hunter',
        gender: 'M',
        given_names: ['Julio', 'E'],
        active_status: 'active',
        facilities: [
          {
            facility_id: '983',
            isCerner: false,
          },
          {
            facility_id: '984',
            isCerner: false,
          },
        ],
      },
    },
  },
  meta: { errors: null },
};
```

To sign in as a custom-defined user, copy the `mockUser` object, modify it as needed, and pass it as an argument to `cy.login()`. The custom-defined user object should have the same shape as the response body for the /v0/user API endpoint.

### Test Data: cy.syncFixtures(fixtures)

In Cypress, because everything in a test is executed inside of the browser, [fixtures](https://docs.cypress.io/api/commands/fixture.html#Syntax) are used to get access to data in tests.

By default, Cypress doesn't support fixtures in separate directories, so we have a custom command for accessing fixtures stored in your app's directory.

For example, `src/applications/hca/tests/schema` contains test data for the `hca` application. You can load the file as a fixture like so:

```javascript
cy.syncFixtures({
  data: 'src/applications/hca/tests/schema',
  'minimal-test.json': 'src/applications/hca/tests/schema/maximal-test.json',
  'maximal-test': 'src/applications/hca/tests/schema/maximal-test.json',
});

cy.fixture('maximal-test').as('testData');
```

To access the contents of the file, you can use a combination of `cy.get()` and `cy.then()`:

```javascript
cy.get('@testData').then((testData) => {
  cy.findByLabelText(/first name/i).type(testData.veteranFullName.first);
});
```

Once you've synced your fixtures, you can also use the [fixture shorthand form](https://docs.cypress.io/api/commands/route.html#Fixtures) of `cy.route()`.

```javascript
cy.syncFixtures({
  foo: path.join(__dirname, 'fixtures', 'foo'),
  bar: path.join(__dirname, 'fixtures', 'bar'),
});

cy.route('/v0/foo', 'fixture:data/foo');
cy.route('/v0/bar', 'fx:data/bar');
```

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/syncFixtures.js

#### Description:

Allows us to access fixtures stored in different directories within your application, something that Cypress doesn’t support.

#### Arguments:

`cy.syncFixtures()` takes an argument that is assigned to the fixtures parameter. The argument should be an object that contains one or more key/value pairs that represent the name of the fixture and the path to it.

#### Usage:

`src/applications/hca/tests/schema` contains test data for the hca application. You can load the file as a fixture like so:

```javascript
cy.syncFixtures({
  data: 'src/applications/hca/tests/schema',
  'minimal-test.json': 'src/applications/hca/tests/schema/minimal-test.json',
  'maximal-test': 'src/applications/hca/tests/schema/maximal-test.json',
});

cy.fixture('maximal-test').as('testData');
```

To access the contents of the file, call `.then()` on `cy.get()` like so:

```javascript
cy.get('@testData').then((testData) => {
  cy.findByLabelText(/first name/i).type(testData.veteranFullName.first);
});
```

Once you've synced your fixtures, you can also use the fixture shorthand form of `cy.route()`.

```javascript
cy.syncFixtures({
  foo: path.join(__dirname, 'fixtures', 'foo'),
  bar: path.join(__dirname, 'fixtures', 'bar'),
});

cy.route('/v0/foo', 'fixture:data/foo');
cy.route('/v0/bar', 'fixture:data/bar');
```

### Viewport Presets: cy.viewportPreset(preset, orientation, options)

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/viewportPreset.js

#### Description:

Presets are available for the top viewports for mobile, tablet, and desktop, updated monthly from VA.gov's Google Analytics

#### Arguments:

- preset -- a `String`, the preset name
- orientation -- a `String`, `portrait` or `landscape`, defaults to `portrait`
- options -- an `Object`, `log` property is set to a `boolean`, defaults to `true`

#### Preset Names

##### Top Presets by Traffic Percentage, Descending

The viewport values these presets point to is updated monthly. The last number in the preset name represents the traffic rank where 1 is highest. For example, if you want to set the viewport to the logical width and height of the mobile device most used on VA.gov, use preset `va-top-mobile-1`.

Viewport objects that correspond to these presets are also available in the following Cypress environment variable arrays:

- `vaTopMobileViewports`
- `vaTopTabletViewports`
- `vaTopDesktopViewports`

**Please note: Iterating through these Cypress environment variable arrays is preferred over using these presets, if your test allows for it.**

See [Iterate Through Top VA.gov Viewports](#iterate-through-top-vagov-viewports) for more details.

| Mobile            | Tablet            | Desktop            |
| ----------------- | ----------------- | ------------------ |
| `va-top-mobile-1` | `va-top-tablet-1` | `va-top-desktop-1` |
| `va-top-mobile-2` | `va-top-tablet-2` | `va-top-desktop-2` |
| `va-top-mobile-3` | `va-top-tablet-3` | `va-top-desktop-3` |
| `va-top-mobile-4` | `va-top-tablet-4` | `va-top-desktop-4` |
| `va-top-mobile-5` | `va-top-tablet-5` | `va-top-desktop-5` |

#### Usage:

To set the viewport, simply call `cy.viewportPreset()` and pass in one of the above preset names as an argument, like so: `cy.viewportPreset('va-top-mobile-1');`.

To set the orientation to landscape, pass in 'landscape' as a second argument, like so: `cy.viewportPreset('va-top-mobile-1', 'landscape');`.

To prevent the command from being displayed in the command log, pass in `{ log: false }` as a third argument, like so: `cy.viewportPreset('va-top-mobile-1', 'landscape', { log: false });`.

Please note: Microsoft Windows RT Tablet viewports are reported by Google Analytics in landscape mode, the opposite of most other tablets. As mentioned, the `cy.viewportPreset()` `orientation` argument is set to `portrait` by default. If you change the orientation of a preset that is referencing a Microsoft Windows RT Tablet viewport by passing in `landscape` as the `orientation` argument, it will have the opposite effect--it be changed to portrait.

### File uploads: cy.upload(fileName, fileType)

File uploads are not yet natively supported in Cypress. We have a custom command for uploading files that is based off of [this workaround](https://github.com/cypress-io/cypress/issues/170#issuecomment-619758213). It must be chained from a command that retrieves an upload input element.

```javascript
cy.findByText('Upload', { selector: 'button' }).upload(
  'src/platform/testing/example-upload.png',
  'image/jpg'
);
```

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/upload.js

#### Description:

Allows us to upload files, which Cypress does not natively support. This implementation is based on this [workaround](https://github.com/cypress-io/cypress/issues/170#issuecomment-619758213).

#### Arguments:

- fileName -- a `String`
- file Type -- a `String`

This function must be chained from a command that retrieves an upload input element.

```javascript
cy.findByText('Upload', { selector: 'button' }).upload(
  'src/platform/testing/example-upload.png',
  'image/jpg'
);
```

### Expand Accordions: cy.expandAccordions()

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/expandAccordions.js

#### Description:

The custom command -- cy.expandAccordions() -- expands all accordions and `AdditionalInfo` components.

#### Arguments:

None

### Accessibility: cy.axeCheck(context, tempOptions)

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/axeCheck.js

#### Description:

Checks the current page or element and children for aXe violations.

#### Arguments:

- context -- a `String`, defaults to `main`
- tempOptions -- an `Object`, defaults to an empty `Object`

To add aXe checks to your tests use the custom `cy.axeCheck()` command based off the `cy.checkA11y()` [command](https://github.com/component-driven/cypress-axe#cychecka11y).

As documented by the plugin, be sure to call `cy.injectAxe()` after each `cy.visit()`, after which `cy.axeCheck()` can be invoked any number of times.

```javascript
cy.visit(PAGE_URL);
cy.injectAxeThenAxeCheck();
```

Depending on the content of a page, it may be more thorough to test accessibility after expanding all accordions (and expandable content in general) on the page. Use the `cy.expandAccordions()` command for that purpose:

```javascript
cy.expandAccordions();
cy.axeCheck(); // Run the aXe check after expanding everything.
```

Please note: Tests written with the form tester automatically check for accessibility, so this command does not need to be used explicitly in such tests.

#### cy.axeCheck() configuration defaults

The axe-core configuration object looks like this:

```javascript
let axeBuilder = {
  runOnly: {
    type: 'tag',
    values: ['section508', 'wcag2a', 'wcag2aa'],
  },
  rules: {
    'color-contrast': {
      enabled: false,
    },
  },
};
```

The [axeCheck helper method](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/axeCheck.js) scans pages for Section 508, WCAG2.0 A, and WCAG2.0 AA rulesets every time it is called in a Cypress end-to-end test.

The configuration object also disables color-contrast checks. [Disabling the color-contrast rule](https://www.deque.com/axe/core-documentation/api-documentation/#other-strategies) was carefully considered and discussed with the VA 508 office as a way to improve build times and reduce false positive tests.

VSP relies on [foundational accessibility tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#foundational-accessibility-tests-required) and automated unit tests to provide good coverage for color contrast. VSP also strongly encourages teams to **re-enable the color-contrast check on one or two Cypress tests per suite**.

#### Enable full rulesets

To add an entire ruleset to your Cypress test, call `cy.axeCheck()` with two arguments:

1. A CSS selector string 
1. A `runOnly.values` array with a new ruleset entry

Be sure not to remove any rulesets from the `values[]` array. [Learn more about axe-core rulesets](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) in the axe-core documentation.

```javascript
cy.axeCheck(
  'main',
  runOnly: {
    values: ['section508', 'wcag2a', 'wcag2aa', 'best-practice'],
  },
);
```

#### Enable the color-contrast rule, or add another rule

If you want to enable the color-contrast check or add another rule to your tests, call `cy.axeCheck()` with two arguments:

1. A CSS selector string
1. A `rules` object with a dash-separated string and an `{ enabled: true }` boolean object.

```javascript
cy.axeCheck(
  'main',
  rules: {
    'color-contrast': {
      enabled: false,
    },
    'css-orientation-lock': {
      enabled: true,
    },
  },
);
```

#### axe-core documentation
* Learn about the [axe-core configuration parameters](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
* Learn about [axe-core rulesets](https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#axe-core-tags) if you want to add WCAG2.1 or best practice rules to your Cypress test
* Learn about [individual axe-core rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) if you want to add or ignore individual rules in your Cypress test

### Accessibility Convience Function: injectAxeThenAxeCheck(context, tempOptions)

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/injectAxeThenAxeCheck.js

#### Description:

A common pattern in Cypress testing on VA.gov is to call `cy.injectAxe()` followed by `cy.axeCheck()`. This custom command is a convenience function for calling these two functions, one after the other.

#### Arguments:

The following arguments are passed to `cy.axeCheck()` when called inside `cy.injectAxeThenAxeCheck()`.

- context -- a `String`, defaults to `main`
- tempOptions -- an `Object`, defaults to an empty `Object`

### Count Focusable and Tabbable Elements: hasCount(elementCategory, selector, count)

#### Source file:

https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/hasCount.js

#### Description:

Checks if the count of `focusable` or `tabbable` elements is correct.

`focusable` elements are those in the normal tab order (native focusable elements or those with tabIndex 0). The count logic will break on tabindexes > 0 because we do not want to override the browser's base tab order.

`tabbable` elements are those in the normal tab order (native focusable elements or those with tabIndex >= 0).

#### Arguments:

- elementCategory -- a `String`. Must be either `focusable` or `tabbable`.
- selector -- a `String`
- count -- an `Integer`

## Iterate Through Top VA.gov Viewports

To ensure that an application behaves correctly across the viewport sizes most commonly used by va.gov users, we've provided the following Cypress environment variables in the [`config/cypress.json`](https://github.com/department-of-veterans-affairs/vets-website/blob/master/config/cypress.json) file that each contain an array of objects, each describing a viewport:

- `vaTopMobileViewports`
- `vaTopTabletViewports`
- `vaTopDesktopViewports`

The objects in the arrays are updated once a month so we're always testing against the viewports VA.gov users are actually using.

Each viewport object contains a `list`, `rank`, `devicesWithViewport`, `percentTraffic`, `percentTrafficPeriod`, `width` and `height` property. Here is an example of a mobile viewport object from the `vaTopMobileViewports` Cypress environment variable:

```javascript
{
  "list": "VA Top Mobile Viewports",
  "rank": 1,
  "devicesWithViewport": "iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro Max",
  "percentTraffic": 9.75,
  "percentTrafficPeriod": "October, 2020",
  "viewportPreset": "va-top-mobile-1",
  "width": 414,
  "height": 896
}
```

To access Cypress environment variables, simply call `Cypress.env()` followed by the name of the variable. For example, `Cypress.env().vaTopMobileViewports` returns the following array:

```javascript
[
  {
    list: 'VA Top Mobile Viewports',
    rank: 1,
    devicesWithViewport:
      'iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro Max',
    percentTraffic: 9.75,
    percentTrafficPeriod: 'October, 2020',
    viewportPreset: 'va-top-mobile-1',
    width: 414,
    height: 896,
  },
  {
    list: 'VA Top Mobile Viewports',
    rank: 2,
    devicesWithViewport: 'iPhone 6, iPhone 6s, iPhone 7, iPhone 8',
    percentTraffic: 5.52,
    percentTrafficPeriod: 'October, 2020',
    viewportPreset: 'va-top-mobile-2',
    width: 375,
    height: 667,
  },
  {
    list: 'VA Top Mobile Viewports',
    rank: 3,
    devicesWithViewport: 'iPhone X, iPhone XS, iPhone 11 Pro',
    percentTraffic: 5.5,
    percentTrafficPeriod: 'October, 2020',
    viewportPreset: 'va-top-mobile-3',
    width: 375,
    height: 812,
  },
  {
    list: 'VA Top Mobile Viewports',
    rank: 4,
    devicesWithViewport:
      'iPhone 6 Plus, iPhone 6s Plus, iPhone 7 Plus, iPhone 8 Plus',
    percentTraffic: 3.25,
    percentTrafficPeriod: 'October, 2020',
    viewportPreset: 'va-top-mobile-4',
    width: 414,
    height: 736,
  },
  {
    list: 'VA Top Mobile Viewports',
    rank: 5,
    devicesWithViewport: 'iPhone 5, iPhone 5s, iPhone 5c, iPhone SE 1st gen',
    percentTraffic: 1.49,
    percentTrafficPeriod: 'October, 2020',
    viewportPreset: 'va-top-mobile-5',
    width: 360,
    height: 640,
  },
];
```

To test against each of the viewports in the array, simply iterate through it using `.forEach()` in the callback of an `it` function call, like so:

```javascript
it('should render in mobile layouts', () => {
  Cypress.env().vaTopMobileViewports.forEach((viewportData) => {
    const {
      list,
      rank,
      devicesWithViewport,
      percentTraffic,
      percentTrafficPeriod,
      viewportPreset
      width,
      height,
    } = viewportData;

    cy.log(`Viewport list: ${list}`);
    cy.log(`Viewport rank: ${rank}`);
    cy.log(`Viewport width x height: ${width} x ${height}`);
    cy.log(`Devices with viewport: ${devicesWithViewport}`);
    cy.log(
      `% traffic for the month of ${percentTrafficPeriod}: ${percentTraffic}%`
    );

    cy.visit('/page');
    cy.viewportPreset(viewportPreset);
    // Cypress test code follows...
  });
});
```

**Even though the `width` and `height` for each viewport is provided, we recommend that you no longer call `cy.viewport()` to set the viewport, and instead call [`cy.viewportPreset()`](#viewport-presets-cyviewportpresetpreset-orientation-options) by passing in `viewportPreset`. It is preferred that `cy.viewport()` not be used. `width` and `height` can be used for conditional logic during each iteration, or they can be logged for contextual purposes.**

## Cypress Testing Library Selectors

In addition to Cypress’ [comprehensive API](https://docs.cypress.io/api/api/table-of-contents.html) for interacting with elements, the VSP platform utilizes the [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) which allows us to test UI components in a user-centric way. This library gives us access to all of [DOM Testing Library's](https://testing-library.com/docs/dom-testing-library/api-queries/) `findBy*`, `findAllBy*`, `queryBy` and `queryAllBy` commands off the global `cy` object.

Please note: The Cypress Testing Library queries should be preferred over Cypress’ `cy.get()` or `cy.contains()` for selecting elements.

The following is a list of queries provided by the Cypress Testing Library, [in the order in which we recommend them](https://testing-library.com/docs/guide-which-query/)<sup>\*</sup> (e.g., prefer `findByLabelText` over `findByRole` over `findByTestId`).

| find               | findAll                  |
| ------------------ | ------------------------ |
| findByLabelText    | findByPlaceholderText    |
| findByText         | findByAltText            |
| findByTitle        | findByDisplayValue       |
| findByRole         | findByTestId             |
| findAllByLabelText | findAllByPlaceholderText |
| findAllByText      | findAllByAltText         |
| findAllByTitle     | findAllByDisplayValue    |
| findAllByRole      | findAllByTestId          |

<sup>\*</sup>Note: the `get_`queries are not supported because for reasonable Cypress tests you need retryability and`find\*` queries already support that.

The `TestId` queries look at the `data-testid` attributes of DOM elements (see the next section).

## data-testid Attribute

While the official Cypress documentation [recommends the `data-cy` attribute](https://docs.cypress.io/guides/references/configuration.html#Options), we recommend that you use the `data-testid` attribute because it is test-framework agnostic.

Add the `data-testid` attribute to your markup when your test would otherwise need to reference elements by CSS attributes as a last resort. As much as possible, prefer writing selectors for `data-testid` attributes over CSS selectors (ids and classes).

The goal is to write tests that [resemble how your users use your app](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change), hence the order of precedence for selecting elements.
