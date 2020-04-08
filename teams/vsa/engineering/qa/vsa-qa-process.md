# VSA-QA Process

\[Based on [template process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/44fb872c0a945ca8ffa85c360d7e09956b979b3f/platform/quality-assurance/process.md) by VSP Product Support team Sr. QA Specialist Peter Hill]

This VSA-QA Process is currently a subset of the base-process as defined by VSP Product Support.

## Process Flow

The required steps of the VSA-QA Process are as follows:

1. At start of Design phase, **Engineering Team creates VSA-QA Test Plan ticket** \[use the VSA QA Test Plan Issue Template]:
    - Assign ticket to your **Engineering Team Product/Project Manager**
    - Add **vsa-qa** label
    - Add link to Epic ticket
    - Add link to Pre-Launch Checklist \(or ensure Epic ticket has this link) \[See [Product Development Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md) for checklist guidelines]
    - Ensure that Test Plan includes documentation of (or links to):
        - UX Design comps
        - User scenarios/stories

1. With help from Engineering Team Subject Matter Experts (SMEs), **VSA-QA establishes understanding of new product/feature**: discover how to test the changes being tackled in your sprint. \[As stated above, VSA-QA currently handles only manual UI testing on Staging.]
    - What kind of testing is relevant given the changes?
        - Unit tests (by Front-End Developer)
        - Automated E2E tests (by Front-End/Full-Stack Developer)
        - Manual testing (by VSA-QA)
        - 508 (by Accessibility (A11y) Specialist)
        - UAT (by real Users)
        - Beta testing (by real Users)

1. **VSA-Engineering & VSA-QA collaborate to create a test plan** that ensures coverage of the targeted changes as well as any possible regressions caused by your team's changes.
    - Build the plan directly inside the Test Plan ticket created in Step 1, or link ticket to separate plan document.
    - [Sample Test Plan](https://docs.google.com/document/d/10dYOWyHSTGB_gKiPZSdcdq6fwjrlRhBsK3yUIyS3Gc0) for reference

1. **VSA-QA create manual UI-test cases** as you build.  VSA Designers/Developers (especially UX-Design member) & VSA-QA should start collaboration early, so as to ensure all testable scenarios have matching test cases. 
    - [Sample Test Case Template](https://drive.google.com/open?id=1Tkim8srrMdDMztG0Du_yZ60DYgVOJPLk)
    - We recommend that you create and execute manual test cases for core user journeys in your product.
    - Optionally, you may use any test case tracking tool / method that works for your team.  Please keep in mind that you will be expected to export test cases and test case execution logs.
    - A single user story may require several test cases in order to provide full coverage.

1. **Engineers & VSA-QA executes tests**:
    1. Build phase - Front-End (and/or Full-Stack) Developers will have created & run local unit-/e2e-tests during development.  These tests are also automatically run upon Pull-Request creation, and merging is disabled until all pass.
    2. Validate phase (once changes are deployed to Staging):
        1. A11y Specialist performs accessibility tests.
        2. VSA-QA performs manual tests\*.
    3. Log defects.
    4. Iterate until bugfixes are validated, and product/feature is deemed deployable to Production.

1. **Engineers & VSA-QA report test-results** at the end of development:
    - Submit results to the VSP Product Support Team by sharing them in #vsp-product-support Slack channel. You may either attach the documents to the channel, or provide shareable links to documents stored in the cloud.
    - Expected deliverables include:
        1. Test plan with test-results added/linked \[[see sample](https://docs.google.com/document/d/10dYOWyHSTGB_gKiPZSdcdq6fwjrlRhBsK3yUIyS3Gc0)]
        1. QA Manual Testing Matrix \[[see sample](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/qa/QA_Testing_Matrix_Template.xlsx)], to be attached to both Issues & PR.




\* Re. manual UI testing on Staging by VSA-QA, a change's test-readiness depends upon Staging test-accounts and relevant test-data availability behind Staging API-endpoints.
