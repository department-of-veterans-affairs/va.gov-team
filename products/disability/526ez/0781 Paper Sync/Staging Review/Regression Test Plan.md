# Regression test plan

> A Regression Test Plan is a document that maps user stories to tests and which includes the results of executing those tests, thereby providing a strategy for verifying the functionality of your product prior to the work moving through the Collaboration Cycle.

In order to make sure our changes did not affect the overall 526 flow, we performed intially the existing [526 Minimal Regression test in TestRail](https://dsvavsp.testrail.io/index.php?/cases/view/37806)

We [initally](https://dsvavsp.testrail.io/index.php?/runs/view/6695&group_by=cases:section_id&group_order=asc) had a failure, due to a bug with not handling `nils` in certain submit states. 

A PR has been put in for that, and the test had been confirmed passing now.


In addition to the existing 526 overall regression test, we made a number of test cases specifically for this effort, in TestRail, that map to our user stories and functionality described by our testing plan. 

![image](https://github.com/user-attachments/assets/29ca7ae8-45f8-4d43-996d-e744b0e8d444)

These additions ensure that each high-level user story has a test case ensuring functionality. 

The results/report can be seen below: 
<TODO add>

In additon to these TestRail tests, we have also introduced multiple end-to-end cypress tests, and many unit tests in both the frontend and backend.
