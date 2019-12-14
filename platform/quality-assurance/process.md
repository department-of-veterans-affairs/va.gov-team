# Process

![QA Process Flow Diagram][qaprocess]
---

>Note: The LucidChart link for this process is [here](https://www.lucidchart.com/invitations/accept/64972f0e-ec18-4567-bb62-a9b02390e0c4).  Anyone can edit, export as an image, and upload a new version here.

1. Understand product updates -- discover how to test the changes being tackled in your sprint.
    - What kind of testing is relevant given the changes?
        - Unit tests
        - Automated E2E tests
        - Manual testing
        - 508
        - UAT
        - Beta testing
1. Use [TestRail](https://dsvavsp.testrail.io) to create a test plan that ensures coverage of the targeted changes as well as any possible regressions caused by your team's changes.
    - [Sample Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/30) for reference
1. Use [TestRail](https://dsvavsp.testrail.io) to create test cases as you build.
    - [Sample Test Case Collection](https://dsvavsp.testrail.io/index.php?/suites/view/2&group_by=cases:section_id&group_order=asc)
    - Be sure to link to the relevant user story in the **Reference** field of the test case.
    - A single user story may require several test cases in order to provide full coverage.
        - For example:
            - **Story**: As a VA.gov user, I need to be able to check for existing appointments at a VA facility.
            - **Scenario 1** (Auth on Appt Page w/appt):
                1. VA landing page
                1. Navigate to the appointment page
                1. Login as user with existing appt
                1. Verify existing appointment
            - **Scenario 2** (Auth on Landing Page w/appt):
                1. VA landing page
                1. Login as user with existing appt
                1. Navigate to the appointment page
                1. Verify existing appointment
            - **Scenario 3** (Auth on Landing Page w/o appt):
                1. VA landing page
                1. Login as user with no appts
                1. Navigate to appointment page
                1. Verify no existing appointments
                1. Create new appointment
1. Execute tests
    1. Execute tests on your feature branch as you build your user story locally
    1. Record test results
    1. [Track issues](create-an-issue.md)
    1. Iterate on the story
    1. Goto 1
1. Report results at the end of development
    - Submit results to the VSP Product Support Team by creating a review ticket
    - For a detailed explanation of expected deliverables see the [deliverables](deliverables.md) documentation.  An overview is listed below --
        1. [Test plan](https://drive.google.com/open?id=1wIopTHMqKmRhhl92H5CogKQP4iYmjZjR)
        1. [Test cases](https://drive.google.com/open?id=1Tkim8srrMdDMztG0Du_yZ60DYgVOJPLk)
        1. [Test case execution logs](https://drive.google.com/open?id=1HXW2b__NByMugChsDlOYkedFIUUoJSFh)
        1. [Requirements traceability matrix](https://drive.google.com/open?id=1afaLagcGBha1lC9at6IUA7j0Ut9fhF-g)
        1. [List of issues](https://github.com/department-of-veterans-affairs/vets-website/labels/bug)
            - If applicable provide resolved issues
            - If applicable provide unresolved issues

[qaprocess]: images/qa-process-flow.png
