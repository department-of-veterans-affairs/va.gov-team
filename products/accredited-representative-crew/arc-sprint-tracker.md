# Accredited Representative Crew Sprint Tracker

_Overview: This tracker is designed to track sprint goals with completed work, providing a comprehensive view of goals achieved._

# Sprint 3 (Nov 4 - Nov 17, 2025)

## Sprint 3 Goals [WIP]
- [ ] Sprint Goals Approved by Enablement

**Team Accreditation**: 
1. **[Rep Data] Stability and Maintenance**: Refactor address validation for reps
2. **[21a] v4 - Development**: Work with Platform to remove Chapter 6 blockers, and if not, proceed to non-Chapater 6 development

**Team Benefits**:
1. **[Auth] ID.me in ARP**: Internal QA, Staging Review, Contact Center Review, Datadog reporting
5. **Intent to File**: Outline remaining development and begin implementation accordingly
6. **Claimant Details**: Outline remaining UX work and begin research/design accordingly
7. **[ARP Post-MVP] Cleanup Tasks**: Feature flag cleanup, update URLs, update access token





# Sprint 2 (Oct 21 - Nov 4, 2025)

## Sprint 2 Goals

- [x] Sprint Goals Approved by Enablement - Sam Raudabaugh on October 20, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1760542735879459))

1. **Accreditation API**: Proceed to test the integration and prepare for release
2. **VA Form 21a v4**: Continue with implementation of document uploads (Chapter 6)
3. Representative data bug fixes and stability improvements
1. **ID.me**: Architecture Intent, outline a release plan
4. **Post-MVP ARP Launch clean up**: Feature flag cleanup, implement the multi-file v3 component, monitor VA Notify callbacks for ARP in Datadog, define URL structure, maintenance alerts and errors
5. **Intent to File**: MVP designs
6. **Claimant Details**: UX review
7. **Onboard accredited representatives into ARP**: support mailbox setup, onboard Veterans of Foreign Wars VSO, build CRM for VSO Onboarding and Management
8. **ARC Team Onboarding and Setup**: onboard Principal tech lead, UX researcher, epic organization


## Sprint 2 Delivery
- [ ] Sprint Delivery Approved by Enablement

**Planned for Sprint 1**: 35 tickets, 94 points \
**Added as a Sprint 1 stretch goal**: 22 tickets, 39 points 

**Completed in Sprint 1**: 42 tickets, 93 points \
**Team Velocity**: 93 points / 10 days = 9.3 points / day

**Team Count in Sprint 1**: 12 teammates \
**Average Teammate Velocity**: 93 points / 12 teammates = 7.75 points / teammate

**Carrying into Sprint 2**: 11 tickets, 26 points 

**Notes**:
1. 10 tickets (10 relative points) of Team Benefits' stretch goal work was previously left In-Progress in the past ARF contract, and in Sprint 1 the ARC team merged the related PRs into Staging to maintain iterative code quality and progression.

**Sprint 1 Demo ([recording link]())
1. 
2. Review metrics

## Sprint 2 Tickets

**Accreditation Team**


Title | URL | Status | Estimate
-- | -- | -- | --
Create rake task for enabling online   submission of 21-22 | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122077 | PR Review | 3
Chapter 6: Document Upload - Configure s3   bucket | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114764 | Blocked | 2
Chapter 6: Document Upload - Create a new   endpoint to handle document uploads for 21a | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765 | Blocked | 8
Chapter 6: Document Upload - Create a new   uploader | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114766 | Blocked | 3
Test the Accreditation API in Staging +   Adjust Appoint Org Search | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114588 | In Progress | 5
Submit Request for Production Access | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122078 | Sprint Backlog | 1
Consider fail-safes for the Accreditation   API integration | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121954 | Sprint Backlog | SPIKE
Consider alternative ways to validate   locations, for reps who fail Platform's Address Validator | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122133 | Sprint Backlog | SPIKE
Representative data bug fixes and   stability improvements (during shutdown) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122689 | Sprint Backlog | 3



**Benefits Team**

Title | URL | Status | Estimate
-- | -- | -- | --
Unauthorized Dashboard: update "Get   accredited" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119215 | QA | 1
Update null state for representation   requests | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117892 | QA | 1
Request list/search page: update   "you don't have access" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119342 | QA | 1
Request details page: update   "POA" language | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119189 | QA | 1
Update the ARP help page content, to   include ID.me mentions | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119954 | QA | 2
Update title tag for all pages in the   portal to match content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118559 | PR Review | 1
Self-Service Authentication - Implement   ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/111033 | PR Review | 5
21-22 Decision errors | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121385 | Blocked | 1
Content / Audit Error Alerts | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119677 | In Progress | 5
Design / ITF Submission Design   (MVP-level) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122013 | Sprint Backlog | 5
Design / Claimant Details UX Review | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122039 | Sprint Backlog | 3
Define URL structure for ARP pages | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119728 | Sprint Backlog | 3
ARP Support Inbox - Data Analysis for   Insights | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122124 | Sprint Backlog | 3
Content / Error Alerts Revised | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122378 | Sprint Backlog |  
Script for maintaining Staging test users   for ARP | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121624 | Sprint Backlog | 5
Feature Flag Cleanup:   accredited_representative_portal_form_526ez | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121875 | Sprint Backlog | 2
Claims submission - Update multi-file   component to the latest version | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114702 | Sprint Backlog | 5
Enable Representation Requests for VFW   (Run rake task in Prod) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118786 | Sprint Backlog | 1
Datadog - Monitor VA Notify Callbacks and   Surface Failures | https://github.com/department-of-veterans-affairs/va.gov-team/issues/116917 | Sprint Backlog | 5
Security Review (Rebase lining) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/115948 | Sprint Backlog | 2
Schedule Architecture Intent for ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121885 | Sprint Backlog | 2
General Onboarding to ARC [Heather] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122484 | Sprint Backlog | 3
UX Onboarding to ARC [Heather] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122617 | Sprint Backlog | 5
Define details for implementing site   maintenance alerts | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122623 | Sprint Backlog | SPIKE



**Leadership**


Title | URL | Status | Estimate
-- | -- | -- | --
Create email templates to respond to ARP   interest | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119726 | QA | 2
Standards of Practices (SOPs) have been   created to define access and management of the mailbox | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121171 | QA | 2
Audit ARC Research for Q1 | https://github.com/department-of-veterans-affairs/va.gov-team/issues/120955 | Sprint Backlog | 3
Templates and signatures have been   created | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121174 | Sprint Backlog | 5
Representative research panel   documentation | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117647 | Sprint Backlog | 3
Kick off with Collab Cycle for ID.me   release | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121996 | Sprint Backlog | 1
Release Plan for ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122685 | Sprint Backlog | 2
Epic organization | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122111 | Sprint Backlog | 5
General Onboarding to ARC [Jeff] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122483 | Sprint Backlog | 3
Engineering Onboarding to ARC [Jeff] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122615 | Sprint Backlog | 3
Build CRM for VSO Onboarding and   Management | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122647 | Sprint Backlog |  





# Sprint 1 (Oct 7 - 21, 2025)

## Sprint 1 Goals

- [x] Sprint Goals Approved by Enablement - Jen Bertsch on October 6, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1759777864040999))

1. **Accreditation API integration**: Resume testing the API connection in Staging (from the previous contract), create a feature flag to manage the future release
2. **Continue with 21a v4 development**: Resume document upload implementation (from the previous contract) for Chapter 6
2. **ARP post-MVP cleanup and critical updates**: Add a unique Lighthouse API key, add a demo video to the homepage, feature flag cleanup, error handling and maintenance alerts
3. **ID.me implementation**: Add the authentication option, help page updates
3. **Intent to File**: Review existing UX and development work (from the previous contract) and prepare for UX/development ahead
3. **ARP adoption**: VSO follow up, begin shared mailbox setup
4. **Team setup**: Onboarding a developer, refine processes and communication channels, define on call rotation, determine how to update ARP without feature flags, quick fix for test users



## Sprint 1 Delivery

- [x] Sprint Delivery Approved by Enablement - Sam Raudabaugh on October 21, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1761078384414849))

**Planned for Sprint 1**: 35 tickets, 94 points \
**Added as a Sprint 1 stretch goal**: 22 tickets, 39 points 

**Completed in Sprint 1**: 42 tickets, 93 points \
**Team Velocity**: 93 points / 10 days = 9.3 points / day

**Team Count in Sprint 1**: 12 teammates \
**Average Teammate Velocity**: 93 points / 12 teammates = 7.75 points / teammate

**Carrying into Sprint 2**: 11 tickets, 26 points 

**Notes**:
1. 10 tickets (10 relative points) of Team Benefits' stretch goal work was previously left In-Progress in the past ARF contract, and in Sprint 1 the ARC team merged the related PRs into Staging to maintain iterative code quality and progression.

**Sprint 1 Demo ([recording link](https://dvagov-my.sharepoint.com/:v:/r/personal/lindsay_li-smith_va_gov/Documents/Recordings/ARC%20Sprint%20Demo-20251021_100609-Meeting%20Recording.mp4?csf=1&web=1&e=sGMFNv&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D))**:
1. Demo video added to ARP homepage
2. ID.me added as a login/authentication option (in addition to Login.gov)
2. Updating the Help page content, including ID.me mentions
3. ARP sitewide alerts 
4. 21a form upload



## Sprint 1 Tickets

**Accreditation Team**

Title | URL | Status | Estimate
-- | -- | -- | --
Use   `find_a_representative_use_accredited_models` flag to switch endpoints for   Find and Appoint a rep | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117164 | Done | 3
Chapter 6: Document Upload - Update   Schema File for Document Upload | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114760 | Done | 2
[Spike] Determine how to update ARP   without feature flags | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119724 | Done | 3
allow ARP authentication for reps with   physical addresses that fail Find a Rep address validation | https://github.com/department-of-veterans-affairs/va.gov-team/issues/120820 | Done | 1
Chapter 6: Document Upload - Configure s3   bucket | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114764 | Blocked / Shutdown prevents Production updates | 2
Test the Accreditation API in Staging +   Adjust Appoint Org Search | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114588 | In Progress / Recently unblocked | 5



Added as a stretch goal: 


Title | URL | Status | Estimate
-- | -- | -- | --
Misc updates to Accreditation API   notifications and swagger documentation | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114730 | Done | 3
Update Codeowners file with ARC team name | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122233 | Done | 1
Create rake task for enabling online   submission of 21-22 | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122077 | PR Review / Awaiting Platform review | 3
Chapter 6: Document Upload - Create a new   endpoint to handle document uploads for 21a | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765 | Blocked / Shutdown prevents Production updates | 8




**Benefits Team**


Title | URL | Status | Estimate
-- | -- | -- | --
Claims Submission - Implement updated   error handling for 429 errors | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117994 | Done | 3
Add a unique Lighthouse API key for ARP | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118756 | Done | 5
Identify how and why ARP ITF   implementation differs from 526ez and 686c implementation | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119732 | Done | SPIKE
Developer Onboarding to ARC | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119914 | Done | 2
Homepage - Add link to demo video on the   homepage | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118159 | Done | 1
Feature Flag Cleanup:   accreditedRepresentativePortalDashboardLink | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121727 | Done | 5
Feature Flag Cleanup:   accredited_representative_portal_dashboard_link | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121308 | Done | 1
Feature Flag Cleanup:   accredited_representative_portal_declination | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121307 | Done | 1
Update ARP help content with ID.me   support information | https://github.com/department-of-veterans-affairs/va.gov-team/issues/116970 | Done | 3
Design / ID.me sign-in method | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119845 | Done | 2
Set up on-call rotation for production   support | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117741 | Done | 5
Design / ARP sitewide alerts, when VA.gov   is experiencing maintenance or downtime | https://github.com/department-of-veterans-affairs/va.gov-team/issues/120018 | Done | 3
Setup +0 test user to access ARP Staging | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121252 | Done | 1
Feature Flag Cleanup:   accreditedRepresentativePortalSearch,   accreditedRepresentativePortalSubmissions | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121303 | Done | 5
Feature Flag Cleanup:   accredited_representative_portal_search,   accredited_representative_portal_submissions | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121304 | Done | 5
Feature Flag Cleanup:   accreditedRepresentativePortalForm | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121305 | Done | 2
Feature Flag Cleanup:   accredited_representative_portal_form | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121306 | Done | 1
Claim Submission error when there are no   evidence attachments | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121383 | Done | 2
Update the ARP help page content, to   include ID.me mentions | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119954 | QA / Awaiting team review | 2
Self-Service Authentication - Implement   ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/111033 | PR Review / Awaiting Platform review | 5
21-22 Decision errors | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121385 | Blocked / Shutdown prevents Production updates | 1
Content / Audit Error Alerts | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119677 | In Progress / Pending final testing | 5


Added as a stretch goal:


Title | URL | Status | Estimate
-- | -- | -- | --
Feature Flag Cleanup:   accreditedRepresentativePortalHomePage, accreditedRepresentativePortalHelp | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121876 | Done | 2
Feature Flag Cleanup:   accreditedRepresentativePortalCustomLogin | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121997 | Done | 3
Feature Flag Cleanup:   accreditedRepresentativePortalForm526ez | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121874 | Done | 2
Home page: update "VSO manager"   content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119219 | Done | 1
Authorized Dashboard: update "Are   you new to the portal" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119194 | Done | 1
Dashboard: Update card header links to   H2s | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119109 | Done | 1
Request cards: update "POA"   language | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119182 | Done | 1
Submissions intro page: update   "POA" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119510 | Done | 1
Feature Flag Cleanup:   accredited_representative_portal_homepage,   accredited_representative_portal_help | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121877 | Done | 1
Feature Flag Cleanup:   accredited_representative_portal_custom_login | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121882 | Done | 2
Unauthorized Dashboard: update "Get   accredited" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119215 | QA / Awaiting team review | 1
Update null state for representation   requests | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117892 | QA / Awaiting team review | 1
Request list/search page: update   "you don't have access" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119342 | QA / Awaiting team review | 1
Request details page: update   "POA" language | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119189 | QA / Awaiting team review| 1
Update title tag for all pages in the   portal to match content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118559 | PR Review / Awaiting Platform review | 1




**Leadership**

Title | URL | Status | Estimate
-- | -- | -- | --
ARC Team Setup | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119731 | Done | 5
Request support from VA Forms team | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119733 | Done | 2
Processes (SOPs) have been drafted for   managing different types of inquiry | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121172 | Done | 3
[ Marine Corps ] Send follow-up email | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121097 | Done | 1
Explore Intent to File (ITF) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119696 | Done | 3
Create email templates to respond to ARP   interest | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119726 | QA / Awaiting Enablement feedback | 2
Standards of Practices (SOPs) have been   created to define access and management of the mailbox | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121171 | QA / Awaiting Enablement feedback | 2



Added as a stretch goal:


Title | URL | Status | Estimate
-- | -- | -- | --
ARC Design Ops - New Team | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119861 | Done | 2
[ Veterans of Foreign Wars ] Send second   follow-up email | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121215 | Done | 1
[ Paralyzed Veterans of America ] Send   follow-up email | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121671 | Done | 1
