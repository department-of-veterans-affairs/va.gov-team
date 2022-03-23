# My VA Sprint Objectives: Sprints 61 – 70

- [Sprint 61](#sprint-61-1117---1130)
- [Sprint 62](#sprint-62-121---1214)
- [Sprint 63](#sprint-63-1215---1228)
- [Sprint 64](#sprint-64-1229---111)
- [Sprint 65](#sprint-65-112---125)
- [Sprint 66](#sprint-66-126---28)
- [Sprint 67](#sprint-67-29---222)
- [Sprint 68](#sprint-68-223---38)
- [Sprint 69](#sprint-69-39---322)
- [Sprint 70](#sprint-70-323---45)

## Sprint 61 (11/17 - 11/30) 
[Sprint 61 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30187)

### PTO

- **Tressa**: Nov 25 - 26
- **Liz**: Nov 24 - 26
- **Heather**: Nov 25
- **Samara**: Nov 24 - 26

### My VA updates: Adding payment information

**PM**

- Collab cycle kickoff #32291

**Design**

- Payment info discovery (if not done last sprint) #32558
- Debt tool discovery #32559
- Work with AJ/Heather/Samara to finalize scope for MVP #32730
- Start on design, if time #32289

### On-site alerts

Note: This assumes we are pivoting this work, which we still need to discuss as a team and I need to discuss with leadership.

**PM**

- Work with Tressa/Samara to determine next steps #32836
- Let team know about pivot #32836

**Design**

- Work with AJ/Heather/Samara to determine next steps #32836

### User roles research

**Design**

- Finish research, if needed
- Synthesis

## Sprint 62 (12/1 - 12/14)
[Sprint 62 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30188)

Anything unfinished from last sprint, plus...

### PTO

- **Lihan**: December 10 - 23
- **Liz**: December 8 - 13

### My VA updates: Adding payment information

**PM**

- Schedule design intent (work with Tressa to figure out timing)

**Design**

- Design
- Design intent

**FE**

- Technical discovery, if needed

### On-site alerts

Resume project

**PM**

-  Work with team to define needs for VANotify
-  By the end of the sprint, it should be clear what VANotify needs to do, if anything, and on what timeline they can implement any potential changes 

**Design**

- Work with team to define needs for VANotify
- Figure out what design needs to be updated; Update design
- Determine if we need additional user testing or not based on updates
- Follow-up with collab cycle design intent issues/tickets and let them know about our pivot.

**FE**

-  Work with team to define needs for VANotify

**BE**

- Work with team to define needs for VANotify
- Determine next steps for backend build; work on build if possible

## Sprint 63 (12/15 - 12/28)
[Sprint 63 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30189)

### PTO

- Samara: 12/23-24; 12/29-31
- Heather: 12/23-24; 12/31
- Marci: 12/23-27; 12/30-31
- Tressa: 12/24; 12/29-31
- Liz: 12/24-31
- Christina: 12/23-31
- Taylor: 12/24; 12/31
- Lihan: 12/10-24
- Tom: 12/27-31

### General My VA improvement

**FE**

- Update how we handle the education block in the "Benefits you might be interested in" section [#33976](https://github.com/department-of-veterans-affairs/va.gov-team/issues/33976)

**Design**

- Rethink the "Benefits you might be interested in" section
  - The endpoint we are using to determine whether we show education benefits or not has been acting unreliably and affecting loading of this whole section.
  - I also think some people who could apply for health care aren't seeing the prompt.
  - How can we update this section? Show all three blocks? Remove this section altogether and add prompts to healthcare/disability/education elsewhere?

### My VA updates: Adding payment information

Research planning/midpoint review planning

**PM**

- Schedule midpoint review for next sprint
- Put together list of test cases

**Design**

- Finish design if not already done
- Research planning/convo guide
- Recruit if possible (nice to have, not a requirement)
- Work with PM on list of test cases

**FE**

- Technical discovery. Based on this, Taylor should be able to define how the following will work:
  - Whether Tressa's proposal for when this section will show (or not) works
  - How he will retrieve the payment information we tend to show
  - How he will show the debt information we need to show
  - Any other technical details that we should define before moving into implementation 

### On-site alerts MVP

Resume project!!

**PM**

-  Work with team to define needs for VANotify, determine what they need to do, and determine timeline for any work they need to do.

**Design**

- Now that this project is back on, do we want to update how where/how we plan to show alerts on My VA?
  - If not, that's fine. If so, we'll need to update designs accordingly. 

**BE**

- Determine next steps for backend build; If possible, Lihan can start to implement build if possible

## Sprint 64 (12/29 - 1/11)
[Sprint 64 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30269)

Any work that's outstanding from sprint 63, plus...

### General

**FE**

- Build for "Benefits you might be interested in" updates

### Payment information

Midpoint review; Research planning

**PM**

- Hold midpoint review

**Design**

- Research convo guide
- Research recruiting
- If FE can not build a prototype by the end of this sprint, then we need a UXPin prototype so that research sessions can happen in sprint 65

**FE**

- Prototype build on payment info
  - **Note**: Research needs to happen *in sprint 65*. If this prototype can not be done by then, then we need to do something in UXPin or figure out another strategy. 

### On-site notifications

**PM** 

- Regroup with VANotify to determine what their LOE and timeline is for this work
  - This can likely happen in the same convo where BE discusses/determines how they'd like to receive data from VANotify 
- Determine QA/testing strategy -- talk to Leah/Denise/Maria about this
- Midpoint review prep (note: testing for this is going to happen as part of payment info testing

**Design**

- All the same research tasks for payment info

**FE**

- Same tasks as payment info

**BE**

- Regroup with VANotify to discuss how we want to receive data (notification type; user)
- Start build, if possible

## Sprint 65 (1/12 - 1/25)
[Sprint 65 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30270)




- Update documentation if time
- Updates from user research (may go into the following sprint depending on updates)
- Determine what, if anything, still needs to happen with FE build, and complete build


### Payment history

**PM**

- Request QA for sprint 67 (starts 2/9). We should be ready for QA by then unless there are serious issues with user testing or getting error states implemented.

**Design**

- Conduct user research
- Summarize user research
- If time, update payment history frontend documentation #33993
- Stretch goal: Error state design

**FE**

- Implement blank state updates (I think that is still outstanding per convo with Taylor in Slack)
- Determine necessary error states
  - https://github.com/department-of-veterans-affairs/va.gov-team/issues/34704

**BE**

- Determine necessary error states
  - https://github.com/department-of-veterans-affairs/va.gov-team/issues/34704

### On-site notifications

**PM**

**Is VANotify going away again? If so, we might remain on hold with the backend build :(.**

- Make sure we have clear definition on what is needed from VANotify and their timelines

**FE/BE**

- Determine necessary error states
  - https://github.com/department-of-veterans-affairs/va.gov-team/issues/34708

**BE**

**Is VANotify going away again? If so, we might remain on hold with the backend build :(.**

- Start build
  - Also, I would love an estimate on how long build will take. Is it one sprint? Two? More? This likely depends on VANotify's timelines.
- Determine necessary error states
  - https://github.com/department-of-veterans-affairs/va.gov-team/issues/34708

## Sprint 66 (1/26 - 2/8)
[Sprint 66 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30271)

### General

- Onboard Angela #35751

### Payment history

**PM**

- Determine when we will be ready for QA & request QA for that sprint #35140, 35254 (QA Ticket #35149)

**Design**

- Design for error states #34809
- Any design updates that came out of testing 

**FE***

- Implement error states if design tickets are available with enough time before the end of the sprint #34806
- Implement changes from user testing if design tickets are available with enough time before the end of the sprint 35483, 35484, #34432 

### On-site notifications

Are we on hold for this besides backend build?

**BE**

- Is there backend work to do? If so, continue BE build

## Sprint 67 (2/9 - 2/22)
[Sprint 67 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30272)

A note on stuff from last sprint:

- Always move over any unfinished project work to keep us on time with projects.
- If there were general tickets we added to last sprint because we thought we had time but then ended up not having time, only move those over *if* (1) they are high priority, or (2) we clearly will have time this sprint. Otherwise, it's OK to deprioritize. Always feel free to ask if you have questions.

### Payment history

**Main goal for this sprint**: Be ready for QA. Prioritize tickets & work accordingly so that anything that is a QA dependency gets top priority.

**PM**

- Review QA test cases and make sure they are accurate given any updates from user testing
- Informal click through of the feature to make sure it is ready for QA
- Meet to discuss approach for adding medical copay information
  -  Are we adding this to Benefit payments & debts, or health care?
  -  Does this need separate user research?
  -  Is this more of an enhancement or small, separate project? 
  -  [Link to medical copay content page](https://staging.va.gov/health-care/pay-copay-bill/your-current-balances/)

**Design**

*Liz*

- Update My VA contact center guide with Benefit payments & debts info
  - May also need to update content on "Benefits you might be interested in" since that has also changed
- Informal click through of the feature to make sure it is ready for QA
- Support Angela: Meet to discuss approach for adding medical copay information

*Angela*

- Meet to discuss approach for adding medical copay information
  -  Are we adding this to Benefit payments & debts, or health care?
  -  Does this need separate user research?
  -  Is this more of an enhancement or small, separate project? 
  -  [Link to medical copay content page](https://staging.va.gov/health-care/pay-copay-bill/your-current-balances/)
- My VA sketch file clean up

**FE**

- Build error states
- Build for updates from user testing
- Informal click through of the feature to make sure it is ready for QA

**BE**

- Ask Jeff for work for Lihan

## Sprint 68 (2/23 - 3/8)
[Sprint 68 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30273)

### PTO

- Angela: 2/24 - 2/28

### Payment information

Sprint goal: Complete QA

**PM**

- Make sure QA is ready to go. All features/updates should be finished, and each team member should have reviewed the feature on staging to make sure it's good to go. (#35254)
- Submit Analytics request. (#37376)
  - We need tracking for all the new links -- View payment history, direct deposit, clicks into the debt tool, and clicks for the new travel reimbursement link we added to health care. Otherwise, we should be good to go, as we already track searches initiated from this page on [the My VA 2.0 GA dashboard](https://analytics.google.com/analytics/web/#/dashboard/XOEdSZeVT9qyxQU5T29PNw/a50123418w177519031p176188361/).
  - [OKRs & KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/payment-history#measuring-success) 

**Design**

- If not already done, complete UAT planning (#36678, #36690)
- Depending on when QA is done and if any issues are found, we can start on fixes

**FE**

- Depending on when QA is done and if any issues are found, we can start on fixes

**QA**

- Complete QA (#35149)

### Medical copays

**PM**

- Fill out collab kickoff ticket (#37373)
  - You might want to clarify that this is a pretty small effort, but we'll likely want support for design and research, since this has a research component. Otherwise, we're happy to do whatever reviews they recommend, but they should all be brief and super easy. 

**Design**

- Discovery (#36899)
- Design exploration (#36902)
- Design intent, if we're ready for it. This can be moved to the following sprint if need be. (#37387)

## Sprint 69 (3/9 - 3/22)
[Sprint 69 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30274)

### PTO

- Samara: 3/15

### Payment info

We are officially in pre-launch! So, we need to make sure anything outstanding from last sprint is completed, plus:

**PM**

- Make sure analytics updates get implemented (#37876)
- Put together launch plan; Prep for staging review (#37877, #37878, #37879)
- Hold staging review if we don't need to do any significant updates from QA (can be towards the end of the sprint if necessary) (#37880)
- Prep for privacy & security review (#37881)

**Design**
- Updates from QA, if applicable

**FE**

- Updates from QA if applicable
- Prep for privacy and security review (#37881)

**BE**

- Prepare any technical diagrams or other documentation needed for the privacy and security review (#37881)

### On-site notifications

**PM**

- 3/15: Regroup with VANotify on this work and determine what next steps are for them (#37909)
- Determine timelines for VANotify and FE work (#37909)

**FE**

- Connect FE to backend API Lihan created (#36034)
- Update notification style (not sure if this was already done w/ payment info work or not) - Done in Sp 68

### Medical co-pays

**Design**

- Finish design explorations
- Hold design intent if we did not already hold it (#37910-closed)
- Research planning -- What do we need to do, if anything, in addition to getting feedback during payment UAT?

## Sprint 70 (3/23 - 4/5)
[Sprint 70 Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30275)

### Payment info

This may need to adjust based on what we were able to get done in sprint 69 due to the QA delays, so if there were important things we didn't get done in sprint 69, we should move them over and adjust this list as necessary:

- Submit privacy and security review (this is async) #37881
- UAT go/no-go (this can not be held until we have cleared all launch blocking issues from the staging review) #38148
- Stretch goal: Start recruiting for UAT if we are able to hold UAT go/no-go #38194

### On-site notifications

- Taylor to continue connecting FE to backend #36034
- Towards the end of March, regroup with VANotify to determine their next steps/timelines #38801

### Medical co-pays/debts

- Exploration around showing debt/co-pay amount
  - This would replace our current notification style alert 

### My VA Audit

Goal of this work: To understand all the conditionals we have for each section in hopes of simplifying logic across (and therefore, management of) My VA. This does not yet have to be on GitHub -- if a Mural board or something more visual like that is an easier way to analyze and see states, let's start there.

- Audit all states of the nametag
- Audit all states of Claims & appeals section

### General

- Implement consistent pattern for aligning links when gray boxes are absent #38658 
- Payment info post-launch: Add loading animation for the payment section (this will match how we handle loading for claims and health care info) #38803
- Adding new Cerner facility to My VA Cerner alert #38508
