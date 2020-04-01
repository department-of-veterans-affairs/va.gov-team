# SSOe Release Plan

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
N/A for this feature release.



## Phase II: unmoderated production testing

### Planning - Outbound (SSOe is live for users logging in on VA.gov and then navigating elsewhere):
- Desired date range: 4/8/20 - 4/10/20
- Desired number of unique users: We plan to start with 1% of users and gradually increase to 100% of users over two days.
- How you'll make the product available in production while limiting the # of users who can find/access it: Sticky feature flagging
- "Success" criteria (by the numbers):  No changes to login success rates.

### Planning - Inbound (SSOe is live for users logging in on [eauth](https://eauth.va.gov/accessva/) properties and then navigating to VA.gov):
- Desired date range: 5/4/20 - 5/8/20
- Desired number of unique users: We plan to start with 1% of users and gradually increase users over two days.
- How you'll make the product available in production while limiting the # of users who can find/access it: Sticky feature flagging
- "Success" criteria (by the numbers): No changes to login success rates.

## Go Live!

### Planning - Inbound and Outbound both at 100%:
- Desired date: 5/11/20
- Post-launch KPI 1: Number of successful logins via MHV on VA.gov remains consistent
- Post-launch KPI 2: Number of successful logins via DSlogon on VA.gov remains consistent
- Post-launch KPI 3: Number of successful logins via id.me on VA.gov remains consistent
- [Metrics](https://analytics.google.com/analytics/web/#/report/content-event-events/a50123418w177519031p176188361/explorer-segmentExplorer.segmentId=analytics.eventLabel&_r.drilldown=analytics.eventCategory:Sign-on&explorer-graphOptions.primaryConcept=analytics.uniqueEventsTrue&explorer-table.plotKeys=%5B%5D&explorer-table.rowStart=0&explorer-table.rowCount=10/)
- Go / No Go: (ready / not ready)[https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md]

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
