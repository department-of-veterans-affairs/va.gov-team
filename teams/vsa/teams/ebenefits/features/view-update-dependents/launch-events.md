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
- BE: submission tested ([#3765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3765)) ✔
- BE: Payload PR defragmentation [#10371](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10371) ✔
- BE: refactor submission process ([#7726](https://github.com/department-of-veterans-affairs/va.gov-team/issues/7726)) ✔
- BE/FE: v1 code complete
- [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#staging-review) 🌀  
- [Privacy and Security Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#privacy-and-security-review) 🌀  

## Sprint 26
_July 15 - July 28_ 
- DE: Update Dependency Claims Per Usability Sessions ([#10383](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10383)) ✔
- DE: Draft Proposal for Display of Bio Data in Forms ([#10814](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10814)) ✔
- DE: 686 Silent Failures: User Journey Maps ([#11340](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11340)) ✔
- DE: 686 State Field Validation Mockups ([#11357](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11357)) ✔
- FE: Form workflows should appear in the same order as the options selection screen ([#11212](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11212)) ✔
- FE: Update Form ID for 686: Frontend ([#11337](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11337)) ✔
- FE: Adjust Generic Location UI Pattern ([#11455](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11455)) ✔
- FE: Adjust View Payments URL ([#11509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11509)) ✔
- FE: Adjust Flipper CTA Buttons on Unauth Dependency Claims Page ([#11652](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11652)) ✔
- BE: Payload PR defragmentation ([#10371](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10371)) ✔
- BE: Identify and Support all BGS Unsupported Workflows ([#10742](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10742)) ✔
- BE: Determine Form ID for Dependency Claims ([#11178](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11178)) ✔
- BE: [BUG] Deselected Option Does Not Get Removed From Flow with SIP Data ([#11200](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11200)) ✔
- BE: 686 Silent Failures: Establish Email Procedures ([#11339](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11339)) ✔


## Sprint 27
_July 29 - Aug 11_ 
- DE: Finalize UAT Session Research Plan and Conversation Guide ([#11789](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11789)) ✔
- DE: Conduct Content Review with Peggy ([#11795](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11795)) ✔
- FE: Test 686 Flipper Component ([#11265](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11265)) ✔
- FE: Breadcrumb Adjustment on 686 Introduction Page ([#11872](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11872)) ✔
- BE: Compile Resources for Privacy and Security Review ([#10673](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10673)) ✔
- BE: 686 Submission PR's (lib code) ([#11260](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11260)) ✔
- BE: Adjust Dependency Claims with New Location Pattern ([#11822](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11822)) ✔
- [Privacy and Security Review] ([#162](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/issues/162)) 🌀 ✔


## Sprint 28
_Aug 12 - Aug 25_ 
- PD: Establish Release Plan for 686 ([#10825](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10825)) ✔
- FE: Wrap View Dependents and Form 686c-674 in Downtime Notification for BGS ([#12005](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12005)) ✔
- FE: Update E2E Tests for New Location Schema ([#12082](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12082)) ✔
- FE: Pre-Launch Content Punch List for 686 ([#12106](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12106)) ✔
- BE: Update Silent Failure Email Copy ([#12265](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12265)) ✔
- BE: 686 Submission PR's (app code) ([#11282](https://github.com/department-of-veterans-affairs/va.gov-team/issues/11282)) ✔
- BE: Add BGS Required Fields ([#12692](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12692)) ✔

## Sprint 29
_Aug 26 - Sept 8_ 
- FE: e2e Test Dependent Workflow ([#12059](https://github.com/department-of-veterans-affairs/va.gov-team/issues/12059)) ✔
- BE: submission tested ([#3765](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3765)) ✔
- BE: Adding BGS required fields ([#4767](https://github.com/department-of-veterans-affairs/vets-api/4767)) ✔
- BE: Add changes for vnp_benefit_claim call ([#30](https://github.com/department-of-veterans-affairs/bgs-ext/30)) ✔
- BE: Adding/Updating BGS Required Fields ([#4771](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4771)) ✔
- BE: Update model to accept guardian information and 'Half' ([#4791](https://github.com/department-of-veterans-affairs/va.gov-team/issues/4791)) ✔
- BE: Adjust relationship for stepchildren ([4785](https://github.com/department-of-veterans-affairs/vets-api/pull/4785)) ✔
- [Staging Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/9529) 🌀 ✔
- BE: Begin partner testing with BGS/RBPS

## Sprint 30
_Sept 9 - Sept 22_ 
- BE: Add ssn and birthdate for dependents ([#4877](https://github.com/department-of-veterans-affairs/vets-api/pull/4877)) ✔
- BE: Bump gem version ([#4883](https://github.com/department-of-veterans-affairs/vets-api/pull/4883)) ✔
- BE: Add Regional Office Routing Service ([#36](https://github.com/department-of-veterans-affairs/bgs-ext/pull/36)) ✔  
- BE: Add BGS Regional Office Lookup by Zip Code ([#4948](https://github.com/department-of-veterans-affairs/vets-api/pull/4948)) ✔  
- Move to prod, keep behind flipper component ([#13749](https://github.com/department-of-veterans-affairs/va.gov-team/issues/13749)) ✔ 📈 

## Sprint 31
_Sept 23 - Oct 6_ 
- FE: Update Breadcrumb on the 686 Application ([#14080](https://github.com/department-of-veterans-affairs/va.gov-team/issues/14080)) ✔
- Debug statements are being installed in Linktest so that we can see waht errors are occuring
- BE: Submit full tests to RBPS
- External Linktest logs not configured properly, WebLogic Team assistance requested by BGS
- BGS asked us to change to a slightly different service (Teams: 9/25)
- Since `DEPCHG` is also now in place, full submissions could be submitted - but DEPCHG not being passed on updates, only creates - fixed
- Discovered apostrophe's are not allowed

## Sprint 32
_Oct 7 - Oct 20_ 
- BE: Add vet_participant_id to [686] form submission ([#5085](https://github.com/department-of-veterans-affairs/vets-api/pull/5085)) ✔ 
- Ongoing partner testing: 
  - Several back and forth discussions regarding procIDs and SSNs - fixed
  - vnp_prcpnt_id not passing info into `vnp_bnft_claim` - BGS + WebLogic to discuss
  - Found `endProductTypeCd` to be missing in `vnp_bnft_claim`
  - Discovered that we needed to locate the closest Regional Office (RO) to the Veteran using a zip code lookup service that then translates to a jurisdiction code; in testing, zip codes must be real, but the issue of no new regional office code found still persists
  - Correct sequence must be use Veterans zip code to get the regional office number,  which is then used to look up the location ID - added that, got picked up finally

## Sprint 33
_Oct 21 - Nov 3_
- BE: [686/674 split] DependencyClaim model ([#5139](https://github.com/department-of-veterans-affairs/vets-api/pull/5139)) ✔ 
- BE: Add [686/674 split] higher ed service and specs ([#5141](https://github.com/department-of-veterans-affairs/vets-api/pull/5141)) ✔ 
- BE: Add Find Regional Offices ([#41](https://github.com/department-of-veterans-affairs/bgs-ext/pull/41)) ✔ 
- BE: Form [674/686 split] job and lib ([#5186](https://github.com/department-of-veterans-affairs/vets-api/pull/5186)) ✔ 
- BE: BGS Find Regional Offices ([#5166](https://github.com/department-of-veterans-affairs/vets-api/pull/5166)) ✔
- Ongoing partner testing: 
  - RBPS processing is turned off in Linktest due to prod issue; test submissions are manually processed
  - Test users had invalidating data (overlap) need to create new ones

## Sprint 34
_Nov 4 - Nov 17_
- Ongoing partner testing: 
  - Claims updating unavailable due to mountpoint issue according to WebLogic - fixed
  - BGS trying to ascertain why the `claim_jrsdtn_lctn_id` is differing in the `vnp_bnft_claim` and `bnft_claim` (latter not updating to anything other than 322 whicih is a number we have never used)
  - National Work Queue brought up as a potential for editing claims ahead of RBPS
  
## Sprint 35
_Nov 18 - Dec 1_ 
- Ongoing partner testing: 
  - NWQ found not to be the issue, BGS investigating
  - Testing moved into EBN environment to see what discrepancies in how info is being passed - submissions work fine for some submissions (NWQ does not process old EBN claims (?))
- BE: Add SOJ to 686 Submission ([#16696](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16696)) 👈
  
## Sprint 36
_Dec 2 - Dec 15_  
`If the above is succesful`
- Complete larger testing with other workflows
- Test using Sidekiq jobs on FE
- Double check for confirmation within VBMS
  - Checking the Timezone issue (this might not be our issue but in the interest of speed, we will resolve it)
  - Reviewing results from Shane and building a PR to be submitted for resolving the issue
 


## Sprint 37+
_Dec 16 - Dec 29_  
`Mind the holiday freeze`
- UAT/ UAT outcome PRs, email whitelist
- PD: Stakeholder review/ demo
- PD: Coordinate with VA comms
- FE: Adjust the robots.txt file to include the direct link to the 686 for no_follow
- Implement eBenefits user redirect messaging 
- Launch to n% of users 🚀
- Launch to 100% of users
- Remove url from robots.txt file to allow for search to crawl the new form
- Create eBenefits user redirect messaging  
- Coordinate page redirects
- [Post Launch Check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#post-launch-check-in) 🌀 
- Code hardening/bug fixes
- Deprecate feature
- Optimization/ongoing bug fixes

## Other Tools and Resources
- [Table of contents for 686 mockups](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/teams/ebenefits/features/view-update-dependents/research-design)
