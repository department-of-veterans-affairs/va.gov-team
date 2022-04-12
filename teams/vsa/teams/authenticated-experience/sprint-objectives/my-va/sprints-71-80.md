# My VA Sprint Objectives: Sprints 71 – 80

- [Sprint 71](#sprint-71-46---419)
- [Sprint 72](#sprint-72-420---53)
- [Sprint 73](#sprint-73-54---517)
- [Sprint 74](#sprint-74-518---531)
- [Sprint 75](#sprint-75-61---614)
- [Sprint 76](#sprint-76-615---628)
- [Sprint 77](#sprint-77-629---712)
- [Sprint 78](#sprint-78-713---726)
- [Sprint 79](#sprint-79-727---89)
- [Sprint 80](#sprint-80-810---823)

## Sprint 71 (4/6 - 4/19) 

[#37608](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37608)

- If applicable: Add Columbus, OH to list of Cerner facilities #38551

### General

- Say goodbye to Heather :(
- Welcome back AJ :) #39292

### Payment info

- Updates from staging review, if necessary #39521
- If all is good to go, recruit and hold UAT #38194
- PM: During UAT, make sure we can see analytics coming in for new links #39280
  - [Use this report](https://analytics.google.com/analytics/web/#/report/content-event-pages/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.pagePath:www.va.gov~2Fmy-va~2F,analytics.eventCategory:Interactions) and make sure you see [all new links for which we've added tracking](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37589).
  - You'll need to filter the report to add between 100 - 250 results, since the new links will only have been clicked a handful of times during UAT.
  - Success: We see data coming in for all new links.
  - Only do this if we hold UAT this sprint

### On-site notifications

**PM**

- VANotify to start work; evaluate what they need to do so we can plan our own timelines
- Do we have a plan for QA? How are we going to trigger a notification for testing? #34543

**Design**

- Explore notification style so we don't have to use the alert/error styling #39090

**Medical co-pays/debts**

- TBD. Need to figure out if we need more explorations or if we have designs ready for testing. (#38984 exploration continues)

### My VA audit

**Design**

- Audit health care #39050
- Audit benefit payments and debts #39051
- Audit applications in progress #39052
- If time, regroup with Samara/AJ (or Heather if she is still here) on existing states #39285

## Sprint 72 (4/20 - 5/3)

[#39274](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39274)

### My VA: Payment history

LAUNCH!!!

**PM**

- Monitor launch to 25%
- Monitor launch to 50%
- *For V2 updates*: Collab cycle kickoff
- *For V2 updates*: Collab cycle design intent

**FE**

- Flip feature flag for launch to 25%
- Flip feature flag for launch to 50%

**Design**

- *For V2 updates*: Collab cycle design intent
- *For V2 updates*: Updates coming out of design intent

### My VA: On-site notifications

VANotify to complete their work in the next two sprints

**PM**

- Determine QA plan (4/20 meeting)

**FE**

- Connect frontend to backend (if it didn't happen in sprint 71)

### My VA: Audit

**Design**

- Review audit with team (to make sure nothing is missing
- Start streamlining states for each section
  - Start with nametag and payment info (since we are working on it anyway)
  - Each section should always appear on the page
  - Each section should have the following: loading state; blank state(s); content state(s); error state(s). Note: the nametag might be a little different, as there's never a totally blank state, and we don't show big error alerts for content we can't load.

## Sprint 73 (5/4 - 5/17)

[#39608](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39608)

## Sprint 74 (5/18 - 5/31)

## Sprint 75 (6/1 - 6/14)

## Sprint 76 (6/15 - 6/28)

## Sprint 77 (6/29 - 7/12)

## Sprint 78 (7/13 - 7/26)

## Sprint 79 (7/27 - 8/9)

## Sprint 80 (8/10 - 8/23)
