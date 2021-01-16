# VSA-QA Cypress-TestRail integration
**[Work In Progress]**

## Who should read this?

- VSA F/E Engineers

## What is this?

A simple set of custom configuration and script files for reporting vets-website's **[Cypress E2E][vsp-e2e-testing]** test results to our **[TestRail][vsp-testrail]** test case management system (TCMS).

This integration leverages Vivify Ideas' **[cypress-testrail-reporter][cy-tr-reporter]** Node-package to post a Cypress spec-file's test-results to an automatically-created TestRail test-run.

The cypress-testrail-reporter makes some assumptions about your E2E files and TestRail test-cases:
- **One TestRail test-case Section for each Cypress spec-file**: If you have 3 E2E spec-files, you should have 3 TestRail test-case Sections (aka Groups).
- **One TestRail test-run for each Cypress spec-file**: If you run 3 Cypress spec-files, you'll end up with 3 separate TestRail test-runs.

This might not be a perfect fit with our existing spec-files organization or reporting needs, and your feedback is strongly encouraged - use #vsp-platform-support Slack-channel.

## How do I do this?

### Start with VSP-QA basic process

First, read **[VSP-QA's basic process][vsp-cy-tr-reporter]** to get a general idea.  Then, read the VSA-QA help/tips below for more details.

### Continue with VSA-QA help/tips

Additional help info is provided below, to flesh-out the basic process.
#### TestRail API Key

- To log in to our [TestRail](https://dsvavsp.testrail.io/) TCMS, first obtain your Team's credentials from your Product Manager.
- To quickly to to your Team's TestRail Project, check the table in the next section.
- Then just follow [VSP-QA procedure](/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#testrail-api-key) to generate your API Key.

#### Corresponding TestRail Objects

##### projectID & suiteID

Instead of checking TestRail URLs to obtain your team's Project & Suite IDs, just refer to the table below:
  
| VSA Product Team  | TestRail Project Name/Link | TestRail Project ID | TestRail Suite ID |
| ------------- | ------------- | ------------- | ------------- |
| Authenticated Experience | [VSA-Authd-Exp][authd-exp-tr-proj]  | 4  | 5 |
| Claims & Appeals | [VSA-Claims-Appeals][claims-tr-proj]  | 5  | 6 |
| Debt Resolution | [VSA-Debt-Resolution][debt-tr-proj]  | 7  | 8 |
| Caregiver | [VSA-Caregiver][caregiver-tr-proj] | 10  | 11 |
| Content & Localization | [VSA-Content-Localization][content-loc-tr-proj] | 34  | 183 |
| Decision Tools  | [VSA-Decision-Tools][dcsn-tools-tr-proj] | 30 | 136 |
| eBenefits | [VSA-eBenefits][eben-tr-proj] | 3 | 3 |
| Facilities | [VSA-Facilities][fac-tr-proj] | 6 | 7 |
| Healthcare Experience | [VSA-Healthcare][healthcare-tr-proj] | 24 | 35 |
| Public Websites | [VSA-Public-Websites][pubweb-tr-proj] | 8 | 9 |
| Search & Discovery | [VSA-Search-Discovery][search-tr-proj] | 31 | 150 |
| VAMC | [VSA-VAMC][vamc-tr-proj] | 9 | 10 |


##### Scaffold your TestRail Test Cases

1. Go to your **TestRail Project**, then click **TEST CASES** tab.  The Test Cases screen has 3 panels:
    - **Test Cases** [left]: Test-cases list.
    - **Selected Test Case** [middle]: Details of a selected test-case (highlighted in the Test Cases panel).
    - **Sections** [right]: Test-cases sections (aka Groups) for organizing test-cases.
1. In **Sections** panel, Add a **Section** for each Cypress spec-file:
    - If you don't see an existing root-level Section for your Product (application), create a root-level Section for it.
    - If you don't see an existing Sub-section for Automated tests, create one [Add a Section, then drag to Move it into the Product Section].
    - Under your Product > Automated section, Add a Section for your Cypress spec-file.
    - In the **Test Cases** panel, under your Cypress-spec-file Section, Add a Test Case for each test (`it('...', () => {...})`) in your Cypress spec-file.

#### TestRail Group IDs

Other values you'd need are your TestRail test cases' Section or Group IDs, which will be explained below in the procedure.  Because of how our TestRail test cases are organized, there's a "trick" to finding the relevant ID(s) for your planned Cypress test runs.

1. Go to your Team's TestRail Project [get project-name or direct project link from your PM].
1. In the **Sections** panel:
    - Click the **View Mode** dropdown-menu and choose **Selected group only**.
    
    ![testrail-test-cases-view-mode][testrail-test-cases-view-mode]
    
    - Click to select the desired **Group/Section**.  On the **Test Cases** panel, you'll see only this selected Group/Section's Test Cases.
1. Click **TEST CASES** tab to go to your Project's test-cases screen.
1. Within **Automated** Sub-section, create Test Cases corresponding to your product's E2E tests, one Case for each test (`it('...', () => {...})`) within each .cypress.spec.js file, setting it's Type to **Automated**. No need to create any Steps inside the Case -- these Cases are merely TestRail "stubs" for associating your E2E test results.
</details>

#### 4. Prepend Case IDs to E2E test titles

For each .cypress.spec.js file, add the TestRail Test Case's IDs to the start of your E2E test titles.

<details><summary>[click to expand/collapse]</summary>

1. In your code-editor, open your .cypress.spec.js file.
2. At the beginning of each test-title (`it('my-test-title', () => {})`), type **C**, and then the **ID** of the corresponding TestRail Test Case you scaffolded.  E.g., your Cypress test title `it('renders Learn More link', () => {...})` has a corresponding TestRail test case with ID 1059, so prepend "C1059 " to your Cypress test title -- `it('C0159 renders Learn More link'), () => {...})` 

</details>

#### 5. Set Environment Variables & invoke Cypress

Now, just follow VSP's instructions to [set environment variables][vsp-cy-tr-env-vars] & [invoke Cypress with custom reporter options][vsp-cy-tr-optns].

The end result is a new TestRail Test Run in your Team's TestRail project, with pass/fail results of the linked Test Cases corresponding to your Cypress test results.

## See also
[End-to-end testing](vsa-qa-e2e-testing.md)

[vsp-e2e-testing]: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end
[vsp-testrail]: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail
[cy-tr-reporter]: https://www.npmjs.com/package/cypress-testrail-reporter
[vsp-cy-tr-reporter]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md
[authd-exp-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/4
[claims-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/5
[debt-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/7
[caregiver-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/10
[content-loc-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/34
[dcsn-tools-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/30
[eben-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/3
[fac-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/6
[healthcare-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/24
[pubweb-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/8
[search-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/31
[vamc-tr-proj]: https://dsvavsp.testrail.io/index.php?/projects/overview/9
[testrail-test-cases-view-mode]: images/tr-test-cases-view-mode.png
[vsp-cy-tr-env-vars]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#environment-variables-set
[vsp-cy-tr-optns]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#invoke-cypress-with-custom-reporter-options
