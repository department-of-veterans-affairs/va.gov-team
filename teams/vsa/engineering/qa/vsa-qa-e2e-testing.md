# VSA-QA End-to-end testing

**[Work In Progress]**

## What is End-to-end (e2e) testing?

End-to-end (e2e) testing on VA.gov specifically means automated browser testing.  Although not technically integration testing, browser testing does qualify as E2E -- it can reveal faults anywhere along the browser-database integration, not just the front-end.  While front-end issues are the most obvious, symptoms of some backend issues are also detectable in browser testing (e.g., missing data or page not loading).

## Who writes e2e tests?

**Front-end engineers** write e2e tests during development.

## Brand-new to e2e testing?

### VSP basic documentation

If you're brand-new to E2E testing, be sure to read [VSP's basic End-to-end testing docs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end).  This VSA-specific documentation here _supplements_ that information.

#### Cypress-TestRail integration

VSP's recently made it possible to run local Cypress E2E tests and post results into our [TestRail test case management system](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail).  The [VSP process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md) uses [cypress-testrail-reporter](https://github.com/Vivify-Ideas/cypress-testrail-reporter) Node package.

cypress-testrail-reporter's functionality makes assumptions about both how your spec files are organized and how test cases are organized in TestRail.  While VSA-QA's currently researching development of an efficient VSA process for this package, you are encouraged to beta-test it and provide feedback.

First, read VSP's basic [Cypress to TestRail Reporter Plugin Configuration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md) process, then follow the procedure below which fleshes out the steps with more detail and/or VSA-specific info.

##### TestRail API Key

First obtain your VSA Product Team's TestRail credentials from your Product Manager, then just follow [VSP's procedure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#testrail-api-key).

##### Corresponding TestRail objects

###### VSA Product Teams' TestRail Project/Suite IDs

Instead of checking your browser URLs to obtain your team's TestRail Project and Suite IDs, just refer to the table below:

<details><summary>[click to toggle table]</summary>

| VSA Product Team  | TestRail Project Name | TestRail Project ID | TestRail Suite ID |
| ------------- | ------------- | ------------- | ------------- |
| Authenticated Experience | VSA-Authd-Exp  | 4  | 5 |
| Benefits & Memorials 1 | VSA-BaM1  | 5  | 6 |
| Benefits & Memorials 2 | VSA-BaM2  | 7  | 8 |
| Caregiver | VSA-Caregiver | 10  | 11 |
| Decision Tools  | VSA-Decision-Tools | 30 | 136 |
| eBenefits | VSA-eBenefits | 3 | 3 |
| Facilities | VSA-Facilities | 6 | 7 |
| Healthcare Experience | VSA-Healthcare | 24 | 35 |
| Public Websites | VSA-Public-Websites | 8 | 9 |
| Search & Discovery | VSA-S&D | 31 | 150 |
| VAMC | VSA-VAMC | 9 | 10 |

</details>

### Regression testing

Going forward, VSP-QA intends regression testing to become a more formal aspect of QA.  Currently, regression testing is informally included in e2e tests.  VSA- and VSP-QA will be looking to implement a process by which regression and new-feature tests can be separated/organized/managed.  We'll document process developments here as progress is made, and we'll also be reaching out to team engineers for input during our research/planning.


## VSA-specific help

Currently, e2e tests are reviewed by regular code-reviewers during pull-requests.  Going forward, VSA-/VSP-QA will also participate in e2e-test reviews in a more formal way, when capacity allows.

Much of the help offered here is intended to improve e2e test-coverage, and to that end facilitate the future expansion of review-audience.  Test-coverage analyses should become easy and straightforward, even if done by non-Engineers or someone unfamiliar with your product/feature.

### E2E best practices

- **Structure & describe suites/tests to reflect documented Use Cases**:
  - Organize test suites (`describe`s) similar to how the Use Cases are organized.
  - Make your description strings in your `describe`s and `it`s more semantic for reviews by external reviewers.  Reviewers should easily tell which suites/tests map to which Use Cases, without knowing much about your product/feature.
- **Use data-testid attribute selectors**:
  - Replace undescriptive CSS selectors with semantic `data-testid` attribute selectors, especially for elements called-out in Use Cases.  External reviewers should easily tell which assertion maps to which Use Case or sub-requirement.  E.g., for a Facility-Locator requirement of a faciility name-link in all results, instead of asserting `cy.get('.location-result a').should('be.visible')`, add `data-testid="facility-name-link"` to the element and assert `cy.get('[data-testid="facility-name-link"]').should('be.visible')`.
- **Include more negative tests**:
  - Length/format/pattern validations: under-minimum/over-maximum input lengths, letters into number fields, invalid emails.
  - Illogical, edge-case inputs: future dates into birthday, divorce date before marriage date, separation date before end of active service, etc.
  - Double-click submission buttons.
  - Anything else to try harder breaking your product/feature.
  
## See also

[Cypress-TestRail intagration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/vsa-qa-cypress-testrail.md)
