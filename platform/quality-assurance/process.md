# Process

![alt text][qaprocess]
* The LucidChart link for this process is [here](https://www.lucidchart.com/invitations/accept/64972f0e-ec18-4567-bb62-a9b02390e0c4).  Anyone can edit, export as an image, and upload a new version here.

1. Discover how to test the changes being tackled in your sprint.
    - What kind of testing is relevant given the changes?
        - Unit tests
        - Automated E2E tests
        - Manual testing
        - 508
        - UAT
        - Beta testing
2. Create a test plan that ensures coverage of the targeted changes as well as any possible regressions caused by your team's changes.
    - [Sample Test Plan](https://docs.google.com/document/d/10dYOWyHSTGB_gKiPZSdcdq6fwjrlRhBsK3yUIyS3Gc0/edit?usp=sharing) for reference
3. Create test cases as you build.
    - You may use any test case tracking tool / method that works for your team.  Please keep in mind that you will be expected to export test cases and test case execution logs.
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
    3. Track issues
    4. Iterate on the story
    5. Goto 1
5. Report results at the end of development
    - For a detailed explanation of expected deliverables see the [deliverables](https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/deliverables.md) documentation.  An overview is listed below --
        1. Test plan
        2. Test cases
        3. Test case execution logs
        4. List of issues
            - If applicable provide resolved issues
            - If applicable provide unresolved issues


[qaprocess]: https://github.com/department-of-veterans-affairs/va.gov-team/blob/peter-qa/platform/quality-assurance/QA-Process-Flow.png "QA Process Flow Diagram"
