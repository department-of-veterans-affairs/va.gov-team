# Regression test plan

> A Regression Test Plan is a document that maps user stories to tests and which includes the results of executing those tests, thereby providing a strategy for verifying the functionality of your product prior to the work moving through the Collaboration Cycle.

In order to make sure our changes did not affect the overall 526 flow, we performed intially the existing [526 Minimal Regression test in TestRail](https://dsvavsp.testrail.io/index.php?/cases/view/37806)

We [initally](https://dsvavsp.testrail.io/index.php?/runs/view/6695&group_by=cases:section_id&group_order=asc) had a failure, due to a bug with not handling `nils` in certain submit states. 

A [PR](https://github.com/department-of-veterans-affairs/vets-api/pull/21727/files) has been put in for that, and the test had been confirmed passing now.


In addition to the existing 526 overall regression test, we made many (24) NEW test cases specifically for this effort, in TestRail, that map to our user stories and functionality described by our testing plan. 

![Screenshot 2025-04-15 at 7 50 50 PM](https://github.com/user-attachments/assets/8c1c7ea2-21ff-4a2e-b9b0-f76c5311b7db)


These additions ensure that each high-level user story has a test case ensuring functionality. 

The results/report can be seen below: 

https://dsvavsp.testrail.io/index.php?/runs/view/6696&group_by=tests:status_id&group_order=asc&group_id=1

Current level of tests executed at time of writing is pictured below (71%), with additional testing continuing through remaining testing cycles. Release not scheduled for a couple weeks, and intend to do another (complete) round of TestRail test runs, after current/known deficiencies are addressed, prior to release. 

![image](https://github.com/user-attachments/assets/da8aa0fb-03f4-46a2-b819-d529ebbd1ffe)



In additon to these TestRail tests, we have also introduced multiple end-to-end cypress tests, and many unit tests in both the frontend and backend.


# Traceability Statement

According to our testing, 100% of the high-level, critical use-cases are represented in our test plan. In addition to the high-level requirement, many more detailed specifics are covered by unit tests and cypress tests. In addition to TestRail, Unit test, and Cypress tests, manual end-to-end testing has taken place ensuring document flows through all systems as expected. 
