# Process

![QA Process Flow Diagram][qaprocess]
---
>Note: The LucidChart link for this process is [here](https://www.lucidchart.com/invitations/accept/64972f0e-ec18-4567-bb62-a9b02390e0c4).  Anyone can edit, export as an image, and upload a new version here.

1. Understand product updates: discover how to test the changes being tackled in your sprint.
    - What kind of testing is relevant given the changes?
        - Unit tests
        - Automated E2E tests
        - Manual testing
        - 508
        - UAT
        - Beta testing
2. Create a test plan that ensures coverage of the targeted changes as well as any possible regressions caused by your team's changes.
    - [Sample Test Plan](https://drive.google.com/open?id=1wIopTHMqKmRhhl92H5CogKQP4iYmjZjR) for reference
3. Create test cases as you build.
    - [Sample Test Case Template](https://drive.google.com/open?id=1Tkim8srrMdDMztG0Du_yZ60DYgVOJPLk)
    - You may use the sample test case template linked above to create manual test cases.
    - We recommend that you create and execute manual test cases for core user journeys in your product.
    - Optionally, you may use any test case tracking tool / method that works for your team.  Please keep in mind that you will be expected to export test cases and test case execution logs.
    - A single user story may require several test cases in order to provide full coverage.
        - Example 1:
            - Story: As a VA.gov user, I need to be able to check for existing appointments at a VA facility.
            - Test Scenario 1:
                1. VA landing page
                2. Navigate to the appointment page
                3. Login as user with existing appt
                4. Verify existing appointment
            - Test Scenario 2:
                1. VA landing page
                2. Login as user with existing appt
                3. Navigate to the appointment page
                4. Verify existing appointment
            - Test Scenario 3:
                1. VA landing page
                2. Login as user with no appts
                3. Navigate to appointment page
                4. Verify no existing appointments
                5. Create new appointment
4. Execute tests
    1. Execute tests as you build a story locally
    2. Record test results
    3. [Track issues](create-an-issue.md)
    4. Iterate on the story
    5. Goto i.
5. Report results at the end of development
    - Submit results to the VSP Product Support Team by sharing them in #vsp-product-support Slack channel. You may either attach the documents to the channel, or provide shareable links to documents stored in the cloud.
    - For a detailed explanation of expected deliverables see the [deliverables](https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/deliverables.md) documentation.  An overview is listed below --
        1. [Test plan](https://drive.google.com/open?id=1wIopTHMqKmRhhl92H5CogKQP4iYmjZjR)
        2. [Test cases](https://drive.google.com/open?id=1Tkim8srrMdDMztG0Du_yZ60DYgVOJPLk)
        3. [Test case execution logs](https://drive.google.com/open?id=1HXW2b__NByMugChsDlOYkedFIUUoJSFh)
        4. [Requirements traceability matrix](https://drive.google.com/open?id=1afaLagcGBha1lC9at6IUA7j0Ut9fhF-g)
        5. [List of issues](https://github.com/department-of-veterans-affairs/vets-website/labels/bug)
            - If applicable provide resolved issues
            - If applicable provide unresolved issues


[qaprocess]: images/qa-process-flow.png
