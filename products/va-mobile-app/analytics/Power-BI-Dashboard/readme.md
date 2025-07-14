# Dashboards

## Links
[VAHB Mobile App Dashbard](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/dashboards/9c861a5f-4f7f-45f5-bd1b-85a6e6f07305)

### Reports
- [Active and New Users](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/16071763-661e-4b1c-a679-1bfa2bd33b23/93f7b619053f829cb030)
- [Homescreen Scroll Depth](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/16071763-661e-4b1c-a679-1bfa2bd33b23/9ae011eca1e412feb8d7)
- [Views by Screen](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/16071763-661e-4b1c-a679-1bfa2bd33b23/ba942e069de3a5abf523)
- [Veteran Crisis Line Engagement](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/16071763-661e-4b1c-a679-1bfa2bd33b23/b17118119a34f847128a)
- [Appointment Details Views](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/9caf3100-a048-4e0c-a900-5312564e4d44/a236ad74ec4972057dd0)
- [Rx Refills](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/9caf3100-a048-4e0c-a900-5312564e4d44/897730900d81d67e8513)
- [Letter Downloads](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/9caf3100-a048-4e0c-a900-5312564e4d44/afc6d1b5043f5abd9c3a)
- [Secure Messages Sent](https://app.powerbigov.us/groups/702cbc91-0b62-458c-b807-0e41743ecd89/reports/9caf3100-a048-4e0c-a900-5312564e4d44/6235785bf117d25899b7)

## The problem

The VA: Health and Benefits mobile app's analytics dashboard has been non-functional since the new contract started (2025). Mobile platform users frequently utilize the dashboard for metrics gathering and reporting and have since not been able to gather those metrics or have had a much more difficult time doing so. Compounding the issue is the fact that the previous dashboard was contractor-own and is now unable to be fixed. 

OCTO would like to take this opportunity to recreate the dashboard in the VA-controlled systems: CXI and PowerBI.

## Decisions

- The mobile team will start by creating an MVP version of a new dashboard, focusing on the app's homescreen metrics.
- Other standard analytics from the previous dashboard will be collected manually on a monthly basis.
- Data warehouse will be moved from BigQuery into CXI (access has already been requested)

## Proposed plan of action

The mobile team took a few days to get access lined up for CXI and to investigate a rough level of effort for setting up a dashboard in PowerBI. While the process isn't wonderfully straightforward we believe we can get an MVP dashboard state up and running with the current engineering team.

1. Decide what we want to measure on the homescreen, likely including data from Google Analytics - recommending avoiding DataDog for MVP due to cost (1 sprint)
2. Make sure that data is in the app, if it isn't, put it in the app (probably less than 1 sprint - maybe the same sprint as step 1)
3. After data is beign actively collected in the app (released to production), assign an engineer currently on the team to build the MVP dashboard in PowerBI (1-2 sprints)

## Questions

1. Will the cost of integrating DataDog into PowerBI be supported or should we try to avoid it?

## Assumptions

- Since PowerBI is windows-only and the team is mac-only all this work will have to be done on a virtual machine
- Some of this data will need to come from DataDog, which requires a third party connector. I assume that isn't a problem, but something to note.
- DataDog can be connected with [Windsor.ai](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/windsorgroupgmbh1585043281642.datadog-power_bi?tab=overview) it is free for 30 days, but does have a cost after that
- Post-MVP work might require a person dedicated to data analytics/engineering
- CXI is out of scope for MVP

## Post MVP
- Bringing the rest of the [mobile monthly metrics](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/va-mobile-app/analytics#monthly-mobile-metrics) into a dashboard.
- Data migration from BigQuery into CXI for historical data and custom queries

## New Report Guide
- [Walkthrough for creating a new report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/analytics/New%20Report%20Template/Creating%20a%20New%20PowerBI%20Report.md) in PowerBI desktop for a specific Google Analytics event over time.
