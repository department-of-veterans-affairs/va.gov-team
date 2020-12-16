# VSA-QA Cypress-TestRail integration

**[Work In Progress]**

## Who, what, when, where, why?

- **Who?**
  - **Audience**: VSA Engineers
  - **Author**: Tze-chiu Lei (VSA-QA)
- **What?**
  A set of custom configuration and script files for reporting vets-website's [Cypress E2E](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end) test results to our [TestRail](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail) test case management system.
- **when?**
  [TBA]
- **Where?**
  Configuration and script files are in the vets-website repo:
  - Custom configuration files: /config/vsa-qa/
  - Script files: /script/vsa-qa/
- **Why?**
  VSP is recommending better and more accessible test-results/-reports for automated regression testing, having implemented TestRail as our test case management system of record for va.gov products/features.  TestRail's API supports integration with automated test-runners like Cypress, enabling posting of automated test-results into TestRail.

## How?

### 1. Get your TestRail API Key

First obtain your VSA Product Team's TestRail credentials from your Product Manager, then just follow [VSP's procedure](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#testrail-api-key).

### 2. Determine your VSA Product Team's TestRail Project/Suite IDs

TestRail Project and Suite IDs are two of the values you'd need to support TestRail API calls.  Instead of checking your browser URLs to obtain your team's IDs, just refer to the table below:
<details><summary>[click to expand/collapse]</summary>
  
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


### 3. Scaffold your TestRail Test Cases

1. Go to your TestRail Project > Test Cases tab.  In the right panel, you'll see all existing test-case Sections and Sub-sections, which are "folders" or "groups" of related test cases.
1. If you don't see an existing root-level Section for your Product, create a root-level Section for it.
1. Under your **<Product>** Section, create a Sub-section named **Automated**.
1. Under your **Automated** Sub-section, create further Sub-sections if your Product's complex and your have many Cypress tests for it.  For an online form, maybe create a Sub-section each for the landing page, form-intro page, each form-chapter/-page, and the confirmation page.
1. Under each of your Sub-sections, add a test case for each Cypress test (`it('...', () => {...})`), selecting **Automated** for the case Type.

#### TestRail Group IDs

Other values you'd need are your TestRail test cases' Section or Group IDs, which will be explained below in the procedure.  Because of how our TestRail test cases are organized, there's a "trick" to finding the relevant ID(s) for your planned Cypress test runs.

1. Go to your Team's TestRail Project [get project-name or direct project link from your PM].
1. If you haven't yet, Add a root-level Section named **Automated**.  Then, under this new Section, create a Sub-section named after your product (e.g., **Debt Letters**). [See TestRail docs on Sections.]
1. Within **Automated** sectionCreate Test Cases corresponding to your product's E2E tests, one Case for each test (`it('...', () => {...})`) within each .cypress.spec.js file, setting it's Type to **Automated**. No need to create any Steps inside the Case -- these Cases are merely TestRail "stubs" for associating your E2E test results.
</details>

### 2. Prepend Case IDs to E2E test titles

For each .cypress.spec.js file, add the TestRail Test Case's IDs to the start of your E2E test titles.

<details><summary>[click to expand/collapse]</summary>

1. In your code-editor, open your .cypress.spec.js file.
2. At the beginning of each test-title (`it('my-test-title', () => {})`), type **C**, and then the **ID** of the corresponding TestRail Test Case you scaffolded.  E.g., your Cypress test title `it('renders Learn More link', () => {...})` has a corresponding TestRail test case with ID 1059, so prepend "C1059 " to your Cypress test title -- `it('C0159 renders Learn More link'), () => {...})` 

</details>

## See also
[End-to-end testing](vsa-qa-e2e-testing.md)

