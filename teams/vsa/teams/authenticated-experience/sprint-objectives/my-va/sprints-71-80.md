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

### FE Priorities

1. Payment info launch
2. Cerner update
3. Updating Next Appointment to VAOS V2
4. On-site notifictions

### Payment history

LAUNCH!!!

**PM**

- Monitor launch to 25%
- Monitor launch to 50%
- *For V2 updates*: Collab cycle kickoff
- *For V2 updates*: Collab cycle design intent

**FE**

- Flip feature flag for launch to 25%
- Flip feature flag for launch to 50%
- Don't show an error message if people have no payment history at the VA ([Slack convo](https://dsva.slack.com/archives/C909ZG2BB/p1649873367021449))

**Design**

- *For V2 updates*: Collab cycle design intent
- *For V2 updates*: Updates coming out of design intent

### On-site notifications

VANotify to complete their work in the next two sprints

**PM**

- Determine QA plan (4/20 meeting)
- Determine if there is any way to do UAT on this feature

**FE**

- Connect frontend to backend (if it didn't happen in sprint 71)

### My VA health care seciton: Cerner launch

- Add Columbus to list of facilities that see Cerner alert. #38551

### My VA health care section: Update "Next Appointment" connection

**FE**

- Discovery: Update Next Appointment feature to connect to V2 of VAOS
  - [V0 docs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vaos/app/docs/vaos/v0/vaos.yaml)
  - [V2 docs](https://github.com/department-of-veterans-affairs/vets-api/blob/master/modules/vaos/app/docs/vaos/v2/vaos_v2.yaml)
 - If possible, make this update
 - Note: V2 has not launched to prod yet, but is on staging. This will need to be gated to not go to prod before VAOS V2 goes to prod.

## Sprint 73 (5/4 - 5/17)

[#39608](https://github.com/department-of-veterans-affairs/va.gov-team/issues/39608)

### PTO

- Angela: 5/3 - 5/10

### My VA audit

**Design**

- Review audit with team to make sure nothing is missing
- Start streamlining states for each section
  - Start with nametag and payment info (since we are working on it anyway)
  - Each section should always appear on the page
  - Each section should have the following: loading state; blank state(s); content state(s); error state(s). Note: the nametag might be a little different, as there's never a totally blank state, and we don't show big error alerts for content we can't load.

## Sprint 74 (5/18 - 5/31)

## Sprint 75 (6/1 - 6/14)

## Sprint 76 (6/15 - 6/28)

## Sprint 77 (6/29 - 7/12)

## Sprint 78 (7/13 - 7/26)

## Sprint 79 (7/27 - 8/9)

## Sprint 80 (8/10 - 8/23)
