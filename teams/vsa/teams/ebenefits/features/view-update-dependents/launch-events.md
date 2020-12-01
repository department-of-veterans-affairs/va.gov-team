_Quick reference to other features' launch events:_ [686](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/features/view-update-dependents/launch-events.md), [POA](https://#), [Payment History](https://#), [PCPG](https://#), [LGY](https://#)  
# Launch Events
For **View dependents** and **Add or remove dependents** using the VA Form 21-686c/674    
`eBenefits | April-May-June 2020`  
## Considerations  
Set a date and walk back the various steps.  This achieves a few things:  
1. Allows for more accurate estimation of the actual launch date, from various segments (sprint/ days)
2. Sets the steps clearly and informs the team if there are any gaps that need to be addressed for either the current feature or the next
3. A tangible reference for the team to synchronize on where we are and where we are headed
4. Should assist in ticket creation  

## Unknowns
- BGS interactions
- Outcome of QA review
- Outcome of 508 review
- Stakeholder feedback

## Assumptions  
**Launch to prod:** 
**Number of work days:**  T from today   
**Number of sprints:**    

Most of View Dependents is finished, but with this timeline, the remaining steps (Including Collab Cycle) will need to be merged together.

Collaboration Cycle = 🌀  
May be more time intensive than anticipated = ⏳   
Clarification needed = 🤷‍♂️  
In progress, or about to be = 👈  

## Events  
### Sprint 19 (T-28)  
_April 8 - April 21_  
- DE: Refine form content (labels, titles, buttons, etc) ([#6965](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6965))
- FE: e2e tests ([#6049](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6049) ✔, (see Sprint 21: 2 of 6))  ✔  
- FE: refactor workflows ([#7736](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7736))
- BE/FE: connections made ([#7771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7771)✔, [#7724](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7724)) ✔
- FE: get a `200` response from BE ✔
- FE: complete JSON transport tasks ([#6043](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6043)) ✔

 - [Request 508 Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit) 🌀 ✔
 - [Request QA Review & GA Event names](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#analytics-request) 🌀 ✔
- PD: contact center docs ([#8218](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8218)) ✔
- DE: landing pages sent to Public Websites ([#8012](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8012)) ✔

### Sprint 20 (T-14)  
_April 22 - May 5_
- FE & BE: address issues from QA review ([#7771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7771)) ✔
- FE: set up and test Flipper component on Drupal landing page ([#8057](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8057), [#8068](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8068)) ✔
- BE: unit tests, error handling ([#6967](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6967) ✔, [#8537](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8537) ✔) 
- BE: submit PR to merge BGS endpoints into `vets-api` ([#8260](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8260), [#8259](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8259)) ✔
- DE: Fit/finish review/implementation ([#6760](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6760)) ✔
- DE: Research Plan and Conversation Guide for usability Sessions ([#8015](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8015). [#8014](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8014)) ✔

### Sprint 21
_May 6 - May 19_

- BE: Required BGS Field Mapping for 686 Submission ([#8349](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8349))  ✔
- Implement Critical Content Changes for the 686 [#8016](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8016) ✔
- FE: pre-QA "smoke test" ([#7201](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7201)) ✔

### Sprint 22 
_May 20 - June 2_
-  BE: PDF Send to VBMS (1 Sprint) ⏳ ✔
- FE (new): Veteran Info Review Page ([#8838](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8838), [#8829](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8829)) ✔
- FE: e2e tests ([#7224](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7224), [#7486](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7486), [#7487](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7487), [#7488](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7488), [#7489](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7489)) ✔  

## Sprint 23
_June 3 - June 16_  
- DE: 686 usability Sessions  ([#8569](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8569)) ✔
- FE: e2e tests ([#7224](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7224), [#7486](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7486), [#7487](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7487), [#7488](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7488), [#7489](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7489)) ✔
- [Contact Center Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#contact-center-review) 🌀  
- BE/FE: e2e and load testing with partner systems
- FE: Confirm Sentry access, enter utility code [#10535](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10535) ✔

## Sprint 24
_June 17 - June 30_  
- FE/BE: Test and implement file upload from the form
- BE: error handling ([#6968](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6968)) ⏳ ✔  
- BE: PDF Fill (multi Sprint) ([#6469](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6469)) ⏳ ✔


## Sprint 25
_July 1 - July 14_ 
- FE: Confirm Sentry access, enter utility code [#10535](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10535) ✔
- BE: implement Sidekiq job ([#8762](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8762)) ✔
- BE: submission tested ([#3765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3765)) 👈
- BE: Payload PR defragmentation [#10371](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10371) 👈
- BE: refactor submission process ([#7726](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7726)) ✔
- BE/FE: v1 code complete
- [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review) 🌀  
- [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review) 🌀  

## Sprint 26
_July 15 - July 28_ 
- BE: Payload PR defragmentation [#10371](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10371) ✔
- [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review) 🌀  


## Sprint 27
_July 29 - Aug 11_ 
- Deprecate feature
- Optimization/ongoing bug fixes
- [Post Launch Check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in) 🌀  

## Sprint 28
_Aug 12 - Aug 25_ 

## Sprint 29
_Aug 26 - Sept 8_ 
- BE: submission tested ([#3765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3765)) ✔
- BE: Adding BGS required fields ([#4767](https://github.com/department-of-veterans-affairs/vets-api/4767)) ✔
- BE: Add changes for vnp_benefit_claim call ([#30](https://github.com/department-of-veterans-affairs/bgs-ext/30)) ✔
- BE: Adding/Updating BGS Required Fields ([#4771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4771)) ✔
- BE: Update model to accept guardian information and 'Half' ([#4791](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4791)) ✔
- BE: Adjust relationship for stepchildren ([4785](https://github.com/department-of-veterans-affairs/vets-api/pull/4785)) ✔
- [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9529) 🌀 ✔

## Sprint 30
_Sept 9 - Sept 22_ 
- BE: Add ssn and birthdate for dependents ([4877](https://github.com/department-of-veterans-affairs/vets-api/pull/4877)) ✔
- BE: Bump gem version ([4883](https://github.com/department-of-veterans-affairs/vets-api/pull/4883)) ✔

## Sprint 31
_Sept 23 - Oct 6_ 

## Sprint 32
_Oct 7 - Oct 20_ 

## Sprint 33
_Oct 21 - Nov 3_

## Sprint 34
_Nov 4 - Nov 17_

## Sprint 35
_Sept 18 - Dec 1_

## Sprint 36
_Dec 2 - Dec 15_

## Sprint 37
_Dec 16 - Dec 29_
- PD: Stakeholder review/ demo
- PD: Coordinate with VA comms
- FE: Adjust the robots.txt file to include the direct link to the 686 for no_follow
- Implement eBenefits user redirect messaging 
- UAT/ UAT outcome PRs, email whitelist 
- Launch to n% of users 🚀
- Launch to 100% of users
- Remove url from robots.txt file to allow for search to crawl the new form
- Create eBenefits user redirect messaging  
- Coordinate page redirects
- Code hardening/bug fixes

## Other Tools and Resources
- [Table of contents for 686 mockups](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design)
