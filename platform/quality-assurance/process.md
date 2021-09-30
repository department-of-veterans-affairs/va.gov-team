----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Process.1903427728.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Process

![QA Process Flow Diagram][qaprocess]
---

>Note: The LucidChart link for this process is [here](https://www.lucidchart.com/invitations/accept/64972f0e-ec18-4567-bb62-a9b02390e0c4).  Anyone can edit, export as an image, and upload a new version here.

1. Understand product updates -- discover how to test the changes being tackled in your sprint.
    - What kind of testing is relevant given the changes?
        - Unit
        - Automated end-to-end
        - Manual
        - 508 / Accessibility
        - User
        - Beta
1. Use [TestRail](https://dsvavsp.testrail.io) to create a test plan that ensures coverage of the targeted changes as well as any possible regressions caused by your team's changes.  Use the description field for your test plan to describe the changes and reference the relevant product outline and user stories.
    - [Example TestRail Test Plan](https://dsvavsp.testrail.io/index.php?/plans/view/30) for reference
1. Use [TestRail](https://dsvavsp.testrail.io) to create test cases as you build.
    - [Sample Test Case Collection](https://dsvavsp.testrail.io/index.php?/suites/view/2&group_by=cases:section_id&group_order=asc)
    - Be sure to link to the relevant user story in the **Reference** field of the test case.
    - A single user story may require several test cases in order to provide full coverage.
        - For example:
            - **Story**: As a VA.gov user, I need to be able to check for existing appointments at a VA facility.
            - **Scenario 1** (Auth on Appt Page w/appt):
                1. VA landing page
                2. Navigate to the appointment page
                3. Login as user with existing appt
                4. Verify existing appointment
            - **Scenario 2** (Auth on Landing Page w/appt):
                1. VA landing page
                2. Login as user with existing appt
                3. Navigate to the appointment page
                4. Verify existing appointment
            - **Scenario 3** (Auth on Landing Page w/o appt):
                1. VA landing page
                2. Login as user with no appts
                3. Navigate to appointment page
                4. Verify no existing appointments
                5. Create new appointment
1. Execute tests
    1. Execute tests on your feature branch or staging
    2. Record test results
    3. [Record test incidents](record-test-incident.md)
    4. Iterate on the story
    5. Goto i
1. Report results at the end of development
    - Submit results to the VSP Product Support Team by creating a review ticket
    - For a detailed explanation of expected deliverables see the [QA artifacts](qa-artifacts.md) documentation.  An overview with examples is listed below --
        1. [Test plan](https://dsvavsp.testrail.io/index.php?/plans/view/30)
        2. [Test cases](https://dsvavsp.testrail.io/index.php?/suites/view/2&group_by=cases:section_id&group_order=asc)
        3. [Test case execution logs](https://dsvavsp.testrail.io/index.php?/runs/view/7&group_by=cases:section_id&group_order=asc)
        4. [Reference test coverage report](https://dsvavsp.testrail.io/index.php?/reports/view/12)
        5. [Summary of defects report](https://dsvavsp.testrail.io/index.php?/reports/view/14)
            - If applicable delineate between resolved and unresolved issues

[qaprocess]: images/qa-process-flow.png
