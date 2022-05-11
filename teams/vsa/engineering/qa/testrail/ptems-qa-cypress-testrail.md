# PTEMS-QA Cypress-TestRail integration

## Who should read this?

- PTEMS Front-End Engineers

## What is this?

A custom Cypress reporter and process for reporting vets-website's **[Cypress E2E][platform-e2e-testing]** test results to our **[TestRail][vsp-testrail]** (TR) test case management system (TCMS) -- currently using tlei123's **[cy-tr-reporter][cy-tr-reporter]**.

The cypress-testrail-reporter makes some assumptions about your E2E files and TestRail test-cases:
- **One TestRail test-case Section for each Cypress spec-file**: If you have 3 E2E spec-files, you should have 3 TestRail test-case Sections (aka Groups).
- **One TestRail test-run for each Cypress spec-file**: If you run 3 Cypress spec-files, you'll end up with 3 separate TestRail test-runs.

This might not be a perfect fit with our existing spec-files organization or reporting needs, and your feedback is strongly encouraged - use #vsp-platform-support Slack-channel.

## How do I do this?

### Start with VSP-QA basic process

First, read **[Platform-QA's basic process][vsp-cy-tr-reporter]** to get a general idea.  Then, read the PTEMS-QA help/tips below for more details.

### Continue with PTEMS-QA help/tips

Additional help info is provided below, to flesh-out the basic process.

#### TestRail Username & API Key

- To log in to our [TestRail](https://dsvavsp.testrail.io/) TCMS (TR) -- obtain your Team's TR credentials from your Product Manager.
- To quickly go to your Team's TestRail Project, check the table in the next section for you directly TR-Project link.
- **TR_USER**: Your Team's username would typically be your PM's email address.
- **TR_API_KEY**: Follow [VSP-QA procedure](/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#testrail-api-key) to generate your API Key.
- Save you TR_USER & TR_API_KEY in you **Terminal or default-shell profile** (.zshrc, .bashrc, .profile, etc), so that you won't have to manually re-export them every time you run the custom-reporter.  E.g.:
  ```shell
  export TR_USER=example@example.com TR_API_KEY=abcdefghijklmnopqrstuvwxyz1234567890ABCDE
  ```

#### TestRail Project & Suite IDs

- Instead of checking TestRail URLs to obtain your team's Project & Suite IDs (2 key environment variables you'd need to set), just refer to the table below [info will be updated over the next few days as Testrail Admin updates projects there.]
  
  | VSA Product Team  | TestRail Project Name/Link | TestRail Project ID | TestRail Suite ID |
  | ------------- | ------------- | ------------- | ------------- |
  | 10-10 | [PTEMS-1010][caregiver-tr-proj] | 10  | 11 |
  | Authenticated Experience | [PTEMS-Authd-Exp][authd-exp-tr-proj]  | 4  | 5 |
  | Debt Resolution | [PTEMS-Debt-Resolution][debt-tr-proj]  | 7  | 8 |
  

- Since you're unlikely to switch TR projects, you can also save TR_PROJECTID & TR_SUITEID in your **Terminal or default-shell profile**. E.g:
  ```shell
  export TR_PROJECTID=0 TR_SUITEID=0
  ```

#### TestRail Test-Case Groups/Sections

You'll need to organize your Product's TR test-cases in a hierarchy of TR groups/sections &mdash; TR uses 'group' & 'section' interchangibly. You'd only need to do this once for each Product:

1. Go to your **TestRail Project**, then click **TEST CASES** tab.  The Test Cases screen has 3 panels:
    - **Test Cases** [left]: Test-cases list.
    - **Selected Test Case** [middle]: Details of a selected test-case (highlighted in the Test Cases panel).
    - **Sections** [right]: Test-cases sections (aka Groups) for organizing test-cases.
1. In **Sections** panel, Add a **Section** for each Cypress spec-file:
    - If you don't see an existing Sub-section for your Product/Feature, create one for it.
    - If you don't see an existing Sub-section for Automated tests, create one [Add a Section, then drag to Move it into the Product Section].
    - Under your Product > Automated section, Add a Section for your Cypress spec-file.
    
An example sections-hierarchy for a product should look lik this:
      
![testrail-example-sections][testrail-example-sections]

#### TestRail Group ID

The TR Group ID corresponds to your Cypress spec-file.  Because of how our TestRail test cases are organized/displayed, there's a "trick" to finding the relevant ID(s) for your planned Cypress test runs.

1. Go to your Team's TR Project, [click a project-link in **[Project & Suite IDs](#project--suite-ids)** section's table above].
1. Click to bring up the **Test Cases** tab.
1. In the Test Cases > **Sections** (right) panel:
    - Click the **View Mode** dropdown-menu and choose **Selected group only**.
    
    ![testrail-test-cases-view-mode][testrail-test-cases-view-mode]
    
    - Click to select the desired **Group/Section**.  On the **Test Cases** (left) panel, you'll see only test-cases in your selected Group/Section.
    - Save your Cypress spec-file path \[starting with `src/applications/<your-app>/`\] and TR Group ID in your selected Group/Section's **Description**.  This'll make it much easier when exporting TR variables in your shell.
1. Create Test Cases to correspond to the tests in your Cypress spec-file, one Case for each test (`it('...', () => {...})`), setting it's Type to **Automated**. No need to create any Steps inside the Case -- these Cases are merely TestRail "stubs" for associating with your Cypress test results.
</details>

#### TestRail Case IDs

##### Specs with `it(...)` tests

Each TR Test Case will correspond to a test (`it('...', () => { ... })` block) within your spec.  Disregard any nested `describe`s or `context`s.

**In TestRail, add test-cases &mdash; one for each test in your spec**:

1. In the left panel (test-cases list), under the Section you selected, click **Add Case**.
1. Enter a case-title that identifies your Cypress test (make it the same as or similar to your Cypress test-description).  Once created, TR displays a Case ID (Cxxxx) next to it.

**In your Cypress spec-file, append the TR Case IDs to test descriptions**:

1. In your code-editor, open your spec-file.
2. At the end of each test-title (`it('my-test-title', () => {})`), type ** - Cxxx**.  E.g., your Cypress test title `it('renders Learn More link', () => {...})` has a corresponding TestRail test case with ID C1059, so append " - C1059 " to your Cypress test title -- `it('renders Learn More link - C1059'), () => {...})`

Once you have TR test-cases created, and TR Case IDs appended to your Cypress spec-file's tests, you're ready to set TR variables in your shell and run your Cypress spec with the custom-reporter.

##### Specs with `testForm(...)` tests

Each TR Case will correspond to a `dataSet` in your form-tester spec.

**In TestRail, add test-cases &mdash; one for each dataSet in your spec**:

1. In the left panel (test-cases list), under the Section you selected, click **Add Case**.
1. Enter a case-title that identifies your dataSet.  Once created, TR displays a Case ID (Cxxxx) next to its title.

**In your Cypress spec-file, append the TR Case IDs to dataSet identifiers**:

1. In your code-editor, open your spec-file.
2. In your **dataSets** array, at the end of each dataseet-string, append the corresponding TR Case IDs, separated with a dash.  For example:
`['maximal-test-C12345', 'minimal-test-C12346']`
3. Rename your data files to reflect your dataSet-changes above.  For example, `maximal-test.json` should now be `maximal-test-C1234.json`.

Once you have TR test-cases created, TR Case IDs appended to your Cypress spec-file's datasets, and your data-files renamed, you're ready to set TR variables in your shell and run your Cypress spec with the custom-reporter.

#### TR Environment Variables & Custom-Reporter Script-call

##### TestRail Run Name

The TR Run Name identifies your Cypress test-run in TR.  Be sure to set your name-string as follows when setting it in your shell:

- No quotes - do not use quotes to enclose the string
- No spaces - use hyphens or underscores instead to separate words.

A good example TR Run Name is `EX-e2e-LandingPage`, where EX is the acronym for an Example product and LandingPage is the Cyrpess spec-filename.  Use product-acronyms to shorten the run-name -- the test-case-list (left) panel has limited width.

##### Filter cases

Be sure to filter your test-cases (set TR_INCLUDE_ALL to false).  Your TestRail project/suite also includes manual test-cases that need to be excluded from your test-runs.

##### Follow Plagform's prodecure to complete test-run calls

Now, just follow Platform's instructions to [set environment variables][vsp-cy-tr-env-vars] & [invoke Cypress with custom reporter options][vsp-cy-tr-optns].

The end result is a new TestRail Test Run in your Team's TestRail project, with pass/fail results of the linked Test Cases corresponding to your Cypress test results.

## See also
[End-to-end testing](vsa-qa-e2e-testing.md)

[platform-e2e-testing]: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/testing/end-to-end
[vsp-testrail]: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/testrail
[cy-tr-reporter]: https://github.com/tlei123/cy-tr-reporter
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
[testrail-example-sections]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/images/tr-example-sections.png
[testrail-test-cases-view-mode]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/engineering/qa/images/tr-test-cases-view-mode.png
[vsp-cy-tr-env-vars]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#environment-variables-set
[vsp-cy-tr-optns]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/e2e-testing/cypress-testrail-reporter-config.md#invoke-cypress-with-custom-reporter-options
