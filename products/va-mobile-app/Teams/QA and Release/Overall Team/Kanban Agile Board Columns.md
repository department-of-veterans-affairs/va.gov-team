# What is QA's responsibilities based on the Kanban's Swimlanes  

[VA Mobile Kanban Board](https://app.zenhub.com/workspaces/va-mobile-60f1a34998bc75000f2a489f/board)

<img width="545" alt="QA Kanban Columnds and QA responsibilites" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/116006847/72ba2eba-f000-49a8-aa69-5af522a6944b">


## In Progress / Code Review 
Optimally, QA is reviewing AC and designs, Creating test plans which are subject to peer review by another member of the QA team.



## W / WA Pre Develop
-  QA creates “On Demand” build

- QA Coordinates with Dev and design to ensure features and fixes are as designed

- if issued are uncovered, ticket is sent back to “in progress and dev is notified

- QA Notates ticket with links to test cases* / test results

- QA approves PR and notates ticket

- In Some cases this is when QA will create the test plan when required.


## Ready to Merge to Develop
- Engineering goes through their process, resolve merge conflicts etc
- NO QA ACTION REQUIRED

With QA (Develop)
- Additional testing on feature tickets is performed based on assessed risk

- Spot checking bug fixes to validate fix was merged as expected.

- Comment on Ticket that fix/feature is verified


 - Add the appropriate “Closed” label to relevant ticket and move to closed



## Closed
- Hang out until the RC is cut, no further action required on ticket



## When RC is cut:
- A full regression pass is performed with automated and manual test cases.

- QA updates the team slack with progress of their selected test runs and any new issues discovered


- QA signs off on release ticket and:
	- Provides link to regression test
	- Screenshot of test artifact graph/chart
	- Link any found issues with severity info
