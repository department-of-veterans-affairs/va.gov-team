# Cypress Best Practices on VSP

## Table of Contents
- [Introduction](#introduction)
- [Cypress Form Tester](#cypress-form-tester)
- [Cypress Custom Commands](#cypress-custom-commands)
  - [Mock User -- `cy.login(userData)`](#mock-user----cyloginuserdata)
  - [Test Data -- `cy.syncFixtures(fixtures)`](#test-data----cysyncfixturesfixtures)
  - [File uploads -- `cy.upload(fileName, fileType)`](#file-uploads----cyuploadfilename-filetype)
  - [Accessibility - `cy.axeCheck(context)`](#accessibility----cyaxecheckcontext)
  - [Expand Accordions -- `cy.expandAccordians()`](#expand-accordions----cy.expandaccordians())
- [Viewports](#viewports)
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
## Cypress Custom Commands
Custom Cypress commands abstract away common behaviors that are required across VA.gov applications. The following custom commands are available:

- Mock User -- `cy.login(userData)`
- Test Data -- `cy.syncFixtures(fixtures)`
- File uploads -- `cy.upload(fileName, fileType)`
- Accessibility - `cy.axeCheck(context)`
- Expand Accordions -- `cy.expandAccordians()`
### Mock User -- cy.login(userData)
**Source file:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/login.js 

**Description:**
Allows us to simulate a signed-in session. 

**Arguments:**
`cy.login()` takes an optional argument which is assigned to the `userData` parameter which defaults to the following `mockUser` object if no argument is given:

``` javascript
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

To sign in as a custom-defined user, copy the `mockUser` object, modify it as needed, and pass it as an argument to `cy.login()`.  The custom-defined user object should have the same shape as the response body for the /v0/user API endpoint.
### Test Data -- cy.syncFixtures(fixtures)
**Source file:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/syncFixtures.js

**Description:**
Allows us to access fixtures stored in different directories within your application, something that Cypress doesn’t support.

**Arguments:**
`cy.syncFixtures()` takes an argument that is assigned to the fixtures parameter. The argument should be an object that contains one or more key/value pairs that represent the name of the fixture and the path to it.

**Usage:**
`src/applications/hca/tests/schema` contains test data for the hca application. You can load the file as a fixture like so:

``` javascript
cy.syncFixtures({
  data: 'src/applications/hca/tests/schema',
  'minimal-test.json': 'src/applications/hca/tests/schema/minimal-test.json', 
  'maximal-test': 'src/applications/hca/tests/schema/maximal-test.json',
});

cy.fixture('maximal-test').as('testData');
```

To access the contents of the file, call `.then()` on `cy.get()` like so:

``` javascript
cy.get('@testData').then(testData => {
  cy.findByLabelText(/first name/i).type(testData.veteranFullName.first);
});
```

Once you've synced your fixtures, you can also use the fixture shorthand form of `cy.route()`.

``` javascript
cy.syncFixtures({
  foo: path.join(__dirname, 'fixtures', 'foo'),
  bar: path.join(__dirname, 'fixtures', 'bar'),
});

cy.route('/v0/foo', 'fixture:data/foo');
cy.route('/v0/bar', 'fixture:data/bar');
```
### File uploads -- cy.upload(fileName, fileType)
**Source file:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/upload.js

**Description:**
Allows us to upload files, which Cypress does not natively support. This implementation is based on this [workaround](https://github.com/cypress-io/cypress/issues/170#issuecomment-619758213). 

**Arguments:**
fileName -- a string
file Type -- a string

This function must be chained from a command that retrieves an upload input element.

``` javascript
cy.findByText('Upload', { selector: 'button' })
  .upload('src/platform/testing/example-upload.png', 'image/jpg');
```
### Accessibility -- cy.axeCheck(context)
**Source file:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/axeCheck.js

**Description:**
Checks the current page for aXe violations.

**Arguments:**
`cy.axeCheck()` takes an optional argument which is assigned to the context parameter which defaults to ‘main’ if no argument is given.

To add aXe checks to your tests use the custom `cy.axeCheck()` command based off the `cy.checkA11y()` [command](https://github.com/component-driven/cypress-axe#cychecka11y).

As documented by the plugin, be sure to call `cy.injectAxe()` after each `cy.visit()`, after which `cy.axeCheck()` can be invoked any number of times.

``` javascript
cy.visit(PAGE_URL);
cy.injectAxe();
cy.axeCheck();
```

Depending on the content of a page, it may be more thorough to test accessibility after expanding all accordions (and expandable content in general) on the page. Use the `cy.expandAccordians()` command for that purpose:

``` javascript
cy.expandAccordions();
cy.axeCheck(); // Run the aXe check after expanding everything.
```

Please note: Tests written with the form tester automatically check for accessibility, so this command does not need to be used explicitly in such tests.
### Expand Accordions -- cy.expandAccordians()
**Source file:** https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/platform/testing/e2e/cypress/support/commands/expandAccordions.js 

**Description:**
The custom command -- cy.expandAccordians() -- expands all accordions and `AdditionalInfo` components.

**Arguments:**
None
## Viewports
Cypress’ default viewport size is 1000px by 660px.

To ensure that an application behaves correctly across a wide variety of devices we recommend testing it using a number of popular mobile and desktop viewport sizes.

To make it easy to test the applicable viewports, we have included the following key/value pairs in the `config/cypress.json` file:

``` javascript
"mobileViewports": [
  "ipad-2", 
  "ipad-mini", 
  "iphone-3", 
  "iphone-5", 
  "i-phone-5", 
  "i-phone-6", 
  "iphone-6", 
  "iphone-6+", 
  "iphone-7",
  "iphone-8",
  "iphone-x",
  "iphone-xr",
  "iphone-xr",
  "iphone-se2"
],
"desktopViewports": [
  [1024, 768],
  "macbook-11",
  "macbook-13",
  "macbook-15",
  "macbook-16"
]
```

These values are updated regularly as necessary and are accessible using the `Cypress.env["mobileViewports"]` and  `Cypress.env["desktopViewports"]` environment variables. 

In your tests, simply iterate through each viewport in the array and make the required assertions. Here’s a modified example from the [Cypress documentation](https://docs.cypress.io/api/commands/viewport.html#Width-Height):

``` javascript
describe('Logo', () => {
  Cypress.env["mobileViewports"].forEach((size) => {
    // make assertions on the logo using
    // an array of different viewports
    it(`Should display logo on ${size} screen`, () => {
      if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
      } else {
        cy.viewport(size)
      }

      cy.visit('https://www.cypress.io')
      cy.get('#logo').should('be.visible')
    })
  })
})
```
## Cypress Testing Library Selectors
In addition to Cypress’ [comprehensive API](https://docs.cypress.io/api/api/table-of-contents.html) for interacting with elements, the VSP platform utilizes the [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) which allows us to test UI components in a user-centric way. This library gives us access to all of [DOM Testing Library's](https://testing-library.com/docs/dom-testing-library/api-queries/) `findBy*`, `findAllBy*`, `queryBy` and `queryAllBy` commands off the global `cy` object.

Please note: The Cypress Testing Library queries should be preferred over Cypress’ `cy.get()` or `cy.contains()` for selecting elements.

The following is a list of queries provided by the Cypress Testing Library, [in the order in which we recommend them](https://testing-library.com/docs/guide-which-query/)<sup>*</sup> (e.g., prefer `findByLabelText` over `findByRole` over `findByTestId`).

find | findAll
---- | -------
findByLabelText | findByPlaceholderText
findByText | findByAltText
findByTitle | findByDisplayValue
findByRole | findByTestId
findAllByLabelText | findAllByPlaceholderText
findAllByText | findAllByAltText
findAllByTitle | findAllByDisplayValue
findAllByRole | findAllByTestId

<sup>*</sup>Note: the `get*` queries are not supported because for reasonable Cypress tests you need retryability and `find*` queries already support that.

The `TestId` queries look at the `data-testid` attributes of DOM elements (see the next section). 
## data-testid Attribute
While the official Cypress documentation [recommends the `data-cy` attribute](https://docs.cypress.io/guides/references/configuration.html#Options), we recommend that you use the `data-testid` attribute because it is test-framework agnostic.

Add the `data-testid` attribute to your markup when your test would otherwise need to reference elements by CSS attributes as a last resort. As much as possible, prefer writing selectors for `data-testid` attributes over CSS selectors (ids and classes).

The goal is to write tests that [resemble how your users use your app](https://kentcdodds.com/blog/making-your-ui-tests-resilient-to-change), hence the order of precedence for selecting elements.