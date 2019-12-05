# Executing tests in TestRail

*Preconditions: You are currently viewing the "Overview" page for your project.  And, you have created a test run that contains the test cases you wish to execute.*

1. Navigate to the "Test Runs & Results" tab . 
1. Select the test run that you previously created . 
![TestRail execute test from test run][testrails-execute-tests-from-test-run] . 
1. Although there is more than one way to execute a test, I recommend that you click the greater than button at the right-most point of the row for each test case.  This button will expand the test steps into a pane on the right side of the browser . 
![TestRail execute test from test run][testrails-execute-tests-expand-steps] . 
1. Now that the steps are visible in the right pane, you can scroll through the steps as you execute them.  Once you have completed all the steps, you can select either the "Add Result" button to add a detailed result or "Pass & Next" to mark the test case as passed and proceed to the next one . 
![TestRail execute test add result][testrails-execute-tests-add-result]
1. If the test case does not pass then you should mark the test case as "Failed" and use the "Defect" box to add a test incident to GitHub with the relevant information.  In the future, there will be a test incident template available to help guide you in presenting relevant information.
![TestRail execute test failed defect][testrails-execute-tests-failed-defect]
1. Once you have marked each test case as Passed or Failed, you can review the results for your test run.  If you have any failures then the test run should be consider Failed, and you should work with developers to resolve all issues before you execute a new test run.

[testrails-execute-tests-from-test-run]: ../images/testrail-tutorials/execute-tests-from-test-run.png
[testrails-execute-tests-expand-steps]: ../images/testrail-tutorials/execute-tests-expand-steps.png
[testrails-execute-tests-add-result]: ../images/testrail-tutorials/execute-tests-add-result.png
[testrails-execute-tests-failed-defect]: ../images/testrail-tutorials/execute-tests-failed-defect.png
