# SSOe Release Plan

---

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
We have two users ready to perform UAT in production on our release date that will help to determine if it is ok to move forward with the roll-out.



## Phase II: unmoderated production testing

Numbers based on usage analytics for 4/29/20.

### Planning - Outbound (SSOe is live for users logging in on VA.gov and then navigating elsewhere):
- Desired date range: 6/3/20 - 6/9/20
- Desired number of unique users: We released outbound to 0.5% of users on 6/3 and increased to 1% on 6/4. Based on back-end analytics and positive findings during UAT we would increase in 5% increments until we are at 100% of users
- How you'll make the product available in production while limiting the # of users who can find/access it: Sticky feature flagging
- "Success" criteria (by the numbers):  Login success rates per method (id.me, MHV and DS logon) should remain stable. This will be monitored via the back-end using grafana to start after released to 100% of users we can monitor via Google Analytics.

Authentication Success Rates to track:
ID.Me = 85.86%
MHV = 77.03%
DS Logon = 83.82%

### Planning - Inbound (SSOe is live for users logging in on [eauth](https://eauth.va.gov/accessva/) properties and then navigating to VA.gov):
- Desired date range: tbd
- Desired number of unique users: We will release outbound to 0.5% of users on 6/3 and increased to 1% on 6/4. Based on back-end analytics and positive findings during UAT we would increase in 5% increments until we are at 100% of users
- How you'll make the product available in production while limiting the # of users who can find/access it: Sticky feature flagging
- "Success" criteria (by the numbers): Currently GA tracking is not availalbe on un-modernized sites. We'll be be monitoring via the back-end using grafana.

## Go Live!

### Planning - Inbound and Outbound both at 100%:
- Desired date: tbd
- NOTE: The main business goal of creating a seamless authenticated experience can not be measured at this time. There is no data for how many times a user logs in in one session. Thus our primary objective is to have little to no impact on users and their ability to authenticate. We will measure this with the following KPIs. (outbound only)

- Post-launch KPI 1: Number of successful logins via MHV on VA.gov remains consistent
- Post-launch KPI 2: Number of successful logins via DSlogon on VA.gov remains consistent
- Post-launch KPI 3: Number of successful logins via id.me on VA.gov remains consistent
- [Metrics Dashboard](https://analytics.google.com/analytics/web/#/analysis/a50123418w177519031p176188361/edit/t0bC95-FRGCmCJJlES2edA)
- [Go / No Go: (ready / not ready)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/sso/staging-review/go_nogo_plan.md)

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
