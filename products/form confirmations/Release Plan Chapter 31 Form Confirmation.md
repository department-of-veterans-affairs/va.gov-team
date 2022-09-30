# Release Plan Chapter 31 Form Confirmation

---

## Phase I: Staged Rollout (also known as unmoderated production testing)

We will utilize feature toggles to manage a staged rollout.

| Phase | Population |  Timing |
| --- | --- |---|
| Stage A | 25% | 2 days
| Stage B | 50% | 2 days
| Final Stage | 100% | Complete Rollout |


### Planning

- Desired date range: _\[07/06/22 - 07/13/22\]_
- How will you make the product available in production while limiting the number of users who can find/access it: \[_We will employ a phased rollout (utilizing percentage based feature flags - ie start with 25% of relevant users), to limit our initial audience._\]
- What metrics-based criteria will you look at before advancing rollout to the next stage ("success criteria")?: \[_We will focus on delivery rates to show the emails are triggering correctly. We will also look at open rates to get a guage on roughly how many users are opening these reminders._\]
- Links to dashboard(s) showing "success criteria" metrics: _\[[DOMO Dashboard](https://va-gov.domo.com/page/447193050). [Open rates for Happy Path](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_r.drilldown=analytics.eventCategory:email,analytics.eventAction:open,analytics.eventLabel:Chapter%2031%20(form%2028-1900)%20Confirmation) [Open Rates for Central Mail](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/_r.drilldown=analytics.eventCategory:email,analytics.eventAction:open,analytics.eventLabel:Chapter%2031%20(form%2028-1900)%20Confirmation%20(CMP))


### Stage A: small population

_Test the first population of users to make sure there are no issues exposed._

#### Planning

- Length of time: 2 Days
- Percentage of Users (and roughly how many users do you expect this to be): 25% (75 users per day)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

### Stage B: larger population

_Test a larger population of users to make sure there are no issues exposed by larger usage patterns._

#### Planning

- Length of time: 2 Days
- Percentage of Users (and roughly how many users do you expect this to be): 50% (150 users per day)

#### Results:
- Number of unique users: x
- Metrics at this stage (per your "success criteria"): x
- Was the data submitted (if any) easy for VA to process?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- What UX changes (if any) are necessary based on the logs, or feedback on user challenges, or VA challenges?

## Go Live!

### Planning:
- Desired date: 07/06/22
- Post-launch KPI 1: Emails Delivered
- Post-launch KPI 2: Open Rates

### 1-week results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

### 1-month results:
- Number of unique users: x
- Post-launch KPI 1 actual: xx lorem ipsum
- Post-launch KPI 2 actual: xx lorem ipsum
- Post-launch KPI 3 actual: xx lorem ipsum
- Any issues with VA handling/processing?: yes/no, lorem ipsum
- Types of errors logged: lorem ipsum
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
- If yes, what: lorem ipsum

## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?
1. What qualitative feedback have you gathered from users or other stakeholders, if any?
1. Which of the assumptions you listed in your product outline were/were not validated? 
1. How might your product evolve now or in the future based on these results?

