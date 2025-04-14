# Dashboards

## The problem

The VA: Health and Benefits mobile app's analytics dashboard has been non-functional since the new contract started (2025). Mobile platform users frequently utilize the dashboard for metrics gathering and reporting and have since not been able to gather those metrics or have had a much more difficult time doing so. Compounding the issue is the fact that the previous dashboard was contractor-own and is now unable to be fixed. 

OCTO would like to take this opportunity to recreate the dashboard in the VA-controlled systems: CXI and PowerBI.

## Decisions

- The mobile team will start by creating an MVP version of a new dashboard, focusing on the app's homescreen metrics.
- Other standard analytics from the previous dashboard will be collected manually on a monthly basis.
- Data warehouse will be moved from BigQuery into CXI (access has already been requested)

## Proposed plan of action

1. Decide what we want to measure on the homescreen
2. Make sure that data is in the app, if it isn't, put it in the app
3. Assign an engineer currently on the team to build the MVP dashboard in PowerBI

## Assumptions

- Some of this data will need to come from DataDog, which requires a third party connector. I assume that isn't a problem, but something to note.
- Post-MVP work might require staffing

