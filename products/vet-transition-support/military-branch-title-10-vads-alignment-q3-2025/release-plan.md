# Discovery Your Benefits Tool - Military branch/component + title 10, & VADS alignment
**Last updated: August 11, 2025 - published** 

### Table of Contents
- [Phase I: UAT](#Phase-i-uat)
- [Phase II: Rollout](#Phase-ii-rollout)
- [Phase III: Go Live!](#Phase-iii-go-Live)

## Phase I: UAT
Not applicable - team conducted internal testing.

## Phase II: Rollout

### Planning
**Launch Go/No-go:** 
- _Scheduled: 08/12/2025_
- Launch go/no-go ticket: [PTEMSVT-509](https://jira.devops.va.gov/browse/PTEMSVT-509) 
- [Launch readiness checklist]( TK )

Timeline
- Last usability study session is 8/11 at 4pm et
- Target 8/12 post refinement kickoff release sequence 
- Aim to have everything in production by COB Wednesday 8/13

**Desired date range:** _week of 08/11/2025_

**Two-Part Rollout:**
Part 1: Features under the environment variable check will go out first:
- Military branch + title 10 component (active duty, reserve, national guard) handling
- Steps:
[ ] Remove environment flag check so features will go to production with the following day's daily deployment (post 2pm et)
[ ] Smoke test on staging
[ ] Confirm features are on production post-deployment the following day 


Part 2: Results page UI changes
- No feature toggle or environment variable so once merged would go automatically to prod with next cycle
- Steps:
    [ ] Merge feature branch into master post-production cut-off time (2pm et)
    [ ] Smoke test
    [ ] If no issues, allow auto-deployment the following day to prod 


## Phase III: Go Live!
Confirmed in production:
[ ] Military branch + title 10 component handling 
[ ] Results page UI updates

Date: mm/dd/yyyy


