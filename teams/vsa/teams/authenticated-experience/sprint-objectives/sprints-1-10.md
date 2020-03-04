# Authenticated Experience Sprint Objectives: Sprints 1 – 10
A high-level summary of the goal the DSVA Product Lead would like to accomplish during a sprint which helps 

- Team deliver value every Sprint
- Development Team stay focused
- Product Owner determine priority

## Sprint 1 (7/31/19 - 8/13/19)
1. Onboarding and education

## Sprint 2 (8/14/19 - 8/27/19)
1. Onboarding and education

## Sprint 3 (8/28 – 9/10)
1.	Direct Deposit (QA, bug fixes, launch plan, communication, documentation, eBenefits work)
2.	Address Validation & Override (update and finalize design, define and schedule out all development work, start checklist planning)

## Sprint 4 (9/11 – 9/24) 
1.	Launch Direct Deposit to % traffic, monitor via GA and toggle as needed 
     - Need to complete tasks identified as part of security review #19647, which is being broken into individual actionable tickets.  Cannot launch until we’ve completed 5 actions.
     - Team meeting with Platform 9/12 to discuss steps needed to launch the % traffic.  New tickets will be created for sprint 4 action.
2.	Address Validation & Override (Target October)
     - Design: Update & Finalize (Arthur has the designs ready and will be sharing in #1688)
     - Engineering: Development Plan (Need designs.  Justin has started ticket #1700 to track the requirements, input to development plan)
     - PM: Launch Plan Checklist, Breakdown Development Plan to sprints (Outcomes of #1700 but also the epic at #1287 where the “definition of done” will be and includes the launch checklist)
3.	Repo Migration
     - Develop a strategy for full transition to va.gov-team repo for content and issues

## Sprint 5 (9/25 - 10/8)
* Continue working on Direct Deposit
* Continue working towards launch of Address Validation & Override
* Start Bad Address Indicator discovery, target December launch.
* Start Combine Profile & Account
* Monitoring, bug fixes, hardening, 508, etc.

## Sprint 6 (10/9 - 10/22)
* Continue working on Direct Deposit
* Continue working towards launch of Address Validation & Override
* Continue Bad Address Indicator
* Continue Combine Profile & Account
* Monitoring, maintenance, bug fixes, hardening, 508, etc.

## Sprint 7 (10/23 - 11/5)
* Launch Direct Deposit (10/30) 
* Continue Address Validation & Override work
* Continue Bad Address Indicator work 
* Continue Combine Profile & Account
* Monitoring, maintenance, bug fixes, hardening, 508, etc.

## Sprint 8 (11/6 - 11/19)
* Direct Deposit
     * Remove "Add" functionality (#2883) if not already done
     * There is some dependency to creating the designs for ID.me &  DS Logon (#2884) whatever that dependency is let's do it this sprint.
     * Finalize contact center guide updates (#2901)
* Continue Address Validation & Override work
     * Complete user testing (#2551 needs to be updated) & document outcomes.  Requires completion of conversation guide (#2327)
     * Complete FE work, using current designs and recently completed BE work
     * Define analytics requirements and review with all necessary stakeholders for approval 
* Continue Bad Address Indicator work 
     * Complete design recommendations for APO/AFO (#1135 and/or #3023)
     * Difine an achievable element from #2198 for the sprint
* Monitoring, maintenance, bug fixes, hardening, 508, etc.
     * Clear the "Validate" swimlane by the end of the sprint

## Sprint 9 (11/20 - 12/3)
* Direct Deposit
   * Add "add direct deposit" functionality and and new associated analytics.  Track/measure error rates as input to next steps and actions. (#3504)
   * Finalize approach for ID.me & DS Logon and determine what design work for sprint 10 work will need to be (#2884 and #1798)
   * **If needed**, re-open contact center guide and apply additional updates (#2901)
   * Improve DD error analytics (#3573)
   * Monitor "Add" funtionality for errors and determine next steps (either taking it down or ramping DD up to 75%)
* Address Validation & Override
   * Identify and communication a new target launch date
   * Complete user testing, summarize outcomes, determine next steps if any (#3280)
   * Complete Error Code Matrix (#3116)
   * Review and updates product outline
   * Identify what work remains for #1129 and get it over the finish line
* Continue Bad Address Indicator work (focus on APO/AFO/ work only)
   * Complete design recommendations for APO/AFO and develop tickets for sprint 10 FE/BE work (#1135 and/or #3023 and/or #2198)
   * Build out FE/BE work for sprint 10, based on the approved designs.  Results in a lot of tickets and a target launch date.
* Monitoring, maintenance, bug fixes, hardening, 508, etc.
   
## (CURRENT) Sprint 10 (12/4 - 12/17)
- Direct deposit
  - Ramp up direct deposit
    - Launch direct deposit to 75% and monitor for problems [#3964](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3964)
    - Design and copy for the content page [#2903](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2903)
    - Investigate why "flagged for fraud" error rate is so high [#3966](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3966) [#3981](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3981) [#3982](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3982)
    - Get on eBenefits schedule to remove direct deposit from the site in 1/29 release [#3967](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3967)
    - Stretch goal: Launch to 100% if we have no concerns in doing so. **Note: It is OK if this does not happen in Sprint 10  due to legitimate concerns that push things into Sprint 11 instead. We will still consider sprint goals met with ramp up to 75% if the reason we are not ramping up to 100% is because of problems that arise from ramp up to 75%.** [#3969](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3969)
    - Contact center guide updates [#4002](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4002)
  - ~DS logon gate:~ 
    - ~Design and copy for the profile [#3763](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3763)~
    - ~Start frontend setup for profile (final design implementation set for sprint 11) [#3900](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3900)~
  - Analytics: Answer follow-up questions [#3877](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3877)
- Address validation
  - User testing updates 
    - Copy [#3741](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3741)
    - Frontend implementation [#3890](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3890)
  - Bad Unit number
    - Finish design/copy [#3660](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3660)
    - Frontend implementation [#3891](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3891)
  - QA - [#3948](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3948)
    - Fill out Tze's QA intake form
    - Have Tze complete the test plan
  - Error Matrix [#3892](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3892)
    - Updates
    - Follow up with VA Profile (Vet360) team
    - Create a GitHub version of the spreadsheet
* APO/FPO/DPO
  - Finalize copy for the profile [#3023](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3023)
  - Create a list of all benefit applications and where they get address data from — note which are VA Profile (Vet360) and which are not.[#3893](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3893)
  - Propose solution for how to handle military addresses in benefit applications that use VA Profile data.[3895](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/3895) 
* Monitoring, maintenance, bug fixes, hardening, 508, etc.
* Additional to-dos post-sprint planning that may or may not get done in Sprint 10
  - Track Successful saves by "enroll" (new users) and "update" (existing users) [#4056]((https://github.com/department-of-veterans-affairs/va.gov-team/issues/4056))
