# Process

\[Based on [template process](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Practice%20Areas/QA/QA_Testing_Matrix_Template.xlsx) by VSP Product Support team Sr. QA Specialist Peter Hill]

This VSA-QA Process is currently a subset of the base-process as defined by VSP Product Support, and will grow over time to include more from this base as staffing expands.

![VSA-QA Process][qaprocess]
---

1. Understand product/feature updates: discover how to test the changes being tackled in your sprint. \[As stated above, VSA-QA currently handles only manual UI testing on Staging.]
    - What kind of testing is relevant given the changes?
        - Unit tests (by Front-End Developer)
        - Automated E2E tests (by Front-End/Full-Stack Developer)
        - Manual testing (by VSA-QA)
        - 508 (by Accessibility (A11y) Specialist)
        - UAT (by real Users)
        - Beta testing (by real Users)
2. Create a test plan that ensures coverage of the targeted changes as well as any possible regressions caused by your team's changes.
    - [Sample Test Plan](https://docs.google.com/document/d/10dYOWyHSTGB_gKiPZSdcdq6fwjrlRhBsK3yUIyS3Gc0/edit) for reference
3. Create test cases as you build.  VSA Designers/Developers (especially UX-Design member) & VSA-QA should start collaboration early, so as to ensure all testable scenarios have matching test cases. 
    - [Sample Test Case Template](https://drive.google.com/open?id=1Tkim8srrMdDMztG0Du_yZ60DYgVOJPLk)
    - We recommend that you create and execute manual test cases for core user journeys in your product.
    - Optionally, you may use any test case tracking tool / method that works for your team.  Please keep in mind that you will be expected to export test cases and test case execution logs.
    - A single user story may require several test cases in order to provide full coverage.
        - Example 1:
            - Story: As a VA.gov user, I need to be able to check for existing appointments at a VA facility.
            - Test Scenario 1:
                1. VA landing page
                2. Login as user with existing appt
                3. Navigate to the appointment page
                4. Verify existing appointment
            - Test Scenario 2:
                1. VA landing page
                2. Login as user with no appts
                3. Navigate to appointment page
                4. Verify no existing appointments
                5. Create new appointment
4. Execute tests
    1. Build stage - Front-End (and/or Full-Stack) Developers should create & run local unit-/e2e-tests during development.
    2. Validate phase (once changes are deployed to Staging):
        1. A11y Specialist performs accessibility tests.
        2. VSA-QA performs manual tests\*.
    3. Log defects.
    4. Iterate until bugfixes are validated, and product/feature is deemed deployable to Production.
5. Report results at the end of development:
    - Submit results to the VSP Product Support Team by sharing them in #vsp-product-support Slack channel. You may either attach the documents to the channel, or provide shareable links to documents stored in the cloud.
    - Expected QA deliverables include:
        1. [Test plan](https://drive.google.com/open?id=1wIopTHMqKmRhhl92H5CogKQP4iYmjZjR)
        2. [QA Manual Testing Matrix](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/qa/QA_Testing_Matrix_Template.xlsx?raw=true)
        5. List of Issues [Example](https://github.com/department-of-veterans-affairs/vets-website/labels/bug)
            - If applicable provide resolved issues
            - If applicable provide unresolved issues


\* Re. manual UI testing on Staging by VSA-QA, a change's test-readiness depends upon Staging test-accounts and relevant test-data availability behind Staging API-endpoints.
