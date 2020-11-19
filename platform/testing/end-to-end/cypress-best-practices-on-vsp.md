# Cypress Best Practices on VSP

## Table of Contents

- [Introduction](#introduction)
- [Cypress Form Tester](#cypress-form-tester)
- [Cypress Custom Commands](#cypress-custom-commands)
  - [Mock User: `cy.login(userData)`](#mock-user-cyloginuserdata)
  - [Test Data: `cy.syncFixtures(fixtures)`](#test-data-cysyncfixturesfixtures)
  - [Viewport Presets: `cy.viewportPreset(preset, orientation, options)`](#)
  - [File Uploads: `cy.upload(fileName, fileType)`](#file-uploads-cyuploadfilename-filetype)
  - [Expand Accordions: `cy.expandAccordions()`](#expand-accordions-cyexpandaccordions)
  - [Accessibility - `cy.axeCheck(context, tempOptions)`](#accessibility-cyaxecheckcontext)
  - [Accessibility Convience Function: `injectAxeThenAxeCheck(context, tempOptions)`](#accessibility-convience-function-injectaxethenaxecheckcontext-tempoptions)
- [Iterate Through Top VA.gov Viewports](#viewports)
- [Cypress Testing Library Selectors](#cypress-testing-library-selectors)
- [`data-testid` Attribute](#data-testid-attribute)

## Introduction

End-to-end (e2e) testing on VA.gov is accomplished using a frontend testing framework called Cypress. Cypress tests run in the browser and programmatically simulate a real user using a web application, or product. These tests are used to verify that the product works as expected across different browsers and viewport dimensions.

The following documentation details Cypress best practices on VSP.

## Cypress Form Tester

**Source file:**
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

**Source file:**  
https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/login.js

**Description:**  
Allows us to simulate a signed-in session.

**Arguments:**  
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

**Source file:**  
https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/syncFixtures.js

**Description:**  
Allows us to access fixtures stored in different directories within your application, something that Cypress doesn’t support.

**Arguments:**  
`cy.syncFixtures()` takes an argument that is assigned to the fixtures parameter. The argument should be an object that contains one or more key/value pairs that represent the name of the fixture and the path to it.

**Usage:**  
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

**Source file:**  
The link is not available yet. The PR for this feature has not been approved yet.

**Description:**  
Presets are available for:

- The top 5 viewports for mobile, tablet, and desktop, updated monthly from VA.gov's Google Analytics
- All iPhone and iPad devices

**Arguments:**

- preset -- a `String`, the preset name
- orientation -- a `String`, `portrait` or `landscape`, defaults to `portrait`
- options -- an `Object`, `log` property is set to a `boolean`, defaults to `true`

#### Preset Names

##### Top 5 Presets by Traffic Percentage, Descending

The viewport values these presets point to is updated monthly. The last number in the preset name represents the traffic rank where 1 is highest. For example, if you want to set the viewport to the logical width and height of the mobile device most used on VA.gov, use preset `mobile-top5-1`.

| Mobile          | Tablet          | Desktop          |
| --------------- | --------------- | ---------------- |
| `mobile-top5-1` | `tablet-top5-1` | `desktop-top5-1` |
| `mobile-top5-2` | `tablet-top5-2` | `desktop-top5-2` |
| `mobile-top5-3` | `tablet-top5-3` | `desktop-top5-3` |
| `mobile-top5-4` | `tablet-top5-4` | `desktop-top5-4` |
| `mobile-top5-5` | `tablet-top5-5` | `desktop-top5-5` |

##### iOS Presets

| iPhone              | iPad               |
| ------------------- | ------------------ |
| `iphone-1st-gen`    | `ipad-1`           |
| `iphone-3g`         | `ipad-2`           |
| `iphone-3gs`        | `ipad-3`           |
| `iphone-4`          | `ipad-mini-1`      |
| `iphone-4s`         | `ipad-4`           |
| `iphone-5`          | `ipad-air-1`       |
| `iphone-5c`         | `ipad-mini-2`      |
| `iphone-5s`         | `ipad-air-2`       |
| `iphone-6-plus`     | `ipad-mini-3`      |
| `iphone-6`          | `ipad-mini-4`      |
| `iphone-6s-plus`    | `ipad-pro-1-12.9`  |
| `iphone-6s`         | `ipad-pro-1-9.7`   |
| `iphone-se-1st-gen` | `ipad-5`           |
| `iphone-7-plus`     | `ipad-pro-2-12.9`  |
| `iphone-7`          | `ipad-pro-2--10.5` |
| `iphone-8-plus`     | `ipad-6`           |
| `iphone-8`          | `ipad-pro-3-12.9`  |
| `iphone-x`          | `ipad-pro-3-11`    |
| `iphone-xs-max`     | `ipad-air-3`       |
| `iphone-xs`         | `ipad-mini-5`      |
| `iphone-xr`         | `ipad-7`           |
| `iphone-11-pro-max` | `ipad-pro-4-12.9`  |
| `iphone-11`         | `ipad-pro-4-11`    |
| `iphone-11-pro`     |
| `iphone-se-2nd-gen` |
| `iphone-12-pro-max` |
| `iphone-12`         |
| `iphone-12-pro`     |
| `iphone-12-mini`    |

#### Usage

To set the viewport, simply call `cy.viewportPreset()` and pass in one of the above preset names as an argument, like so: `cy.viewportPreset('iphone-12');`.

To set the orientation to landscape, pass in 'landscape' as a second argument, like so: `cy.viewportPreset('iphone-12', 'landscape');`.

To prevent the command from being displayed in the command log, pass in `{ log: false }` as a third argument, like so: `cy.viewportPreset('iphone-12', 'landscape', { log: false });`.

### File uploads: cy.upload(fileName, fileType)

**Source file:**  
https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/upload.js

**Description:**  
Allows us to upload files, which Cypress does not natively support. This implementation is based on this [workaround](https://github.com/cypress-io/cypress/issues/170#issuecomment-619758213).

**Arguments:**  
fileName -- a `String`  
file Type -- a `String`

This function must be chained from a command that retrieves an upload input element.

```javascript
cy.findByText('Upload', { selector: 'button' }).upload(
  'src/platform/testing/example-upload.png',
  'image/jpg'
);
```

### Expand Accordions: cy.expandAccordions()

**Source file:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/expandAccordions.js

**Description:**  
The custom command -- cy.expandAccordions() -- expands all accordions and `AdditionalInfo` components.

**Arguments:**  
None

### Accessibility: cy.axeCheck(context, tempOptions)

**Source file:**  
https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/axeCheck.js

**Description:**  
Checks the current page for aXe violations.

**Arguments:**  
context -- a `String`, defaults to `main`
tempOptions -- an `Object`, defaults to an empty `Object`

To add aXe checks to your tests use the custom `cy.axeCheck()` command based off the `cy.checkA11y()` [command](https://github.com/component-driven/cypress-axe#cychecka11y).

As documented by the plugin, be sure to call `cy.injectAxe()` after each `cy.visit()`, after which `cy.axeCheck()` can be invoked any number of times.

```javascript
cy.visit(PAGE_URL);
cy.injectAxe();
cy.axeCheck();
```

Depending on the content of a page, it may be more thorough to test accessibility after expanding all accordions (and expandable content in general) on the page. Use the `cy.expandAccordions()` command for that purpose:

```javascript
cy.expandAccordions();
cy.axeCheck(); // Run the aXe check after expanding everything.
```

Please note: Tests written with the form tester automatically check for accessibility, so this command does not need to be used explicitly in such tests.

### Accessibility Convience Function: injectAxeThenAxeCheck(context, tempOptions)

**Source file:**  
The link is not available yet. The PR for this feature has not been approved yet.

**Description:**  
A common pattern in Cypress testing on VA.gov is to call `cy.injectAxe()` followed by `cy.axeCheck()`. This custom command is a convenience function for calling these two sequential function calls.

**Arguments:**  
The following arguments are passed to `cy.axeCheck()` when called inside `cy.injectAxeThenAxeCheck()`.
context -- a `String`, defaults to `main`
tempOptions -- an `Object`, defaults to an empty `Object`

## Iterate Through Top VA.gov Viewports

To ensure that an application behaves correctly across the viewport sizes most commonly used by va.gov users, we've provided the following Cypress environment variables in the `config/cypress.json` file that each contain an array of objects, each describing a viewport:

- `vaTop5MobileViewports`
- `vaTop5TabletViewports`
- `vaTop5DesktopViewports`

The objects in the arrays are updated once a month so we're always testing against the viewports VA.gov users are actually using.

Each viewport object contains a `name`, `percentTraffic`, `percentTrafficPeriod`, `width` and `height` property. Here is an example of a mobile viewport object from the `vaTop5MobileViewports` Cypress environment variable:

```javascript
{
  "name": "iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro Max",
  "percentTraffic": 9.75,
  "percentTrafficPeriod": "October, 2020",
  "width": 414,
  "height": 896
}
```

To access Cypress environment variables, simply call `Cypress.env()` followed by the name of the variable. For example, `Cypress.env().vaTop5MobileViewports` returns the following array:

```javascript
[
  {
    name: 'iPhone XS Max, iPhone XR, iPhone 11, iPhone 11 Pro Max',
    percentTraffic: 9.75,
    percentTrafficPeriod: 'October, 2020',
    width: 414,
    height: 896,
  },
  {
    name: 'iPhone 6, iPhone 6s, iPhone 7, iPhone 8',
    percentTraffic: 5.52,
    percentTrafficPeriod: 'October, 2020',
    width: 375,
    height: 667,
  },
  {
    name: 'iPhone X, iPhone XS, iPhone 11 Pro',
    percentTraffic: 5.5,
    percentTrafficPeriod: 'October, 2020',
    width: 375,
    height: 812,
  },
  {
    name: 'iPhone 6 Plus, iPhone 6s Plus, iPhone 7 Plus, iPhone 8 Plus',
    percentTraffic: 3.25,
    percentTrafficPeriod: 'October, 2020',
    width: 414,
    height: 736,
  },
  {
    name: 'iPhone 5, iPhone 5s, iPhone 5c, iPhone SE 1st gen',
    percentTraffic: 1.49,
    percentTrafficPeriod: 'October, 2020',
    width: 360,
    height: 640,
  },
];
```

To test against each of the viewports in the array, simply iterate through the array using `.forEach()` in the callback of an `it` function call, like so:

```javascript
it.only('should render in mobile layouts and tabs actions work', () => {
  Cypress.env().vaTop5MobileViewports.forEach((viewportData) => {
    const {
      name,
      width,
      height,
      percentTraffic,
      percentTrafficPeriod,
    } = viewportData;

    cy.log(`Device Group: ${name}`);
    cy.log(
      `% traffic for the month of ${percentTrafficPeriod}: ${percentTraffic}%`
    );

    cy.visit('/find-locations');
    cy.injectAxe();
    cy.viewport(width, height);
    cy.checkSearch();
  });
});
```

In addition to the Cypress environment variables already mentioned, there is also a variable called `allIPhoneViewports` which contains an array of viewport objects whose structure is identicle to the objects in the other arrays already mentioned, except they do not contain `percentTraffic` and `percentTrafficPeriod` properties.

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

<sup>_</sup>Note: the `get_`queries are not supported because for reasonable Cypress tests you need retryability and`find\*` queries already support that.

The `TestId` queries look at the `data-testid` attributes of DOM elements (see the next section).

## data-testid Attribute

While the official Cypress documentation [recommends the `data-cy` attribute](https://docs.cypress.io/guides/references/configuration.html#Options), we recommend that you use the `data-testid` attribute because it is test-framework agnostic.

Add the `data-testid` attribute to your markup when your test would otherwise need to reference elements by CSS attributes as a last resort. As much as possible, prefer writing selectors for `data-testid` attributes over CSS selectors (ids and classes).

The goal is to write tests that [resemble how your users use your app](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change), hence the order of precedence for selecting elements.
