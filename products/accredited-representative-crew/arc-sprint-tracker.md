# Accredited Representative Crew Sprint Tracker

_Overview: This tracker is designed to track sprint goals with completed work, providing a comprehensive view of goals achieved._

# Sprint 9 (Jan 27-Feb 09, 2026)

## Sprint 9 Goals
- [ ] Sprint Goals Approved by Enablement   

**Team Accreditation**: 


**Team Benefits**:


**Team Appoint**:
1. **ARC Team Onboarding and Setup**: General onboarding to VA and ARC onboarding (continued)
2. **[21-22a] Research: Understand the 21-22a representation relationship and supporting VA processes**: Wrap up desk research review of past findings and provide synthesis
3. DataDog Audit of monitors/alerts for rep-management APM
4. Address outstanding medium priority bugs

**Engagement**: 


## Sprint 9 Demos

TBD

## Sprint 9 Delivery

TBD

## Sprint 9 Tickets

**Team Accreditation**

**Team Benefits**

**Team Appoint**

**Engagement**

**Leadership**

# Sprint 8 (Jan 13-26, 2026)

## Sprint 8 Goals
- [x] Sprint Goals Approved by Enablement - Jen Bertsch on January 14, 2026 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1768429272660239?thread_ts=1768410008.688459&cid=C06GE5N7QJ0)) 

**Team Accreditation**: 
1. **[ARP MVP clean up] Enable individual acceptance of representation requests**: Develop data models and research all features in ARP that may need updating, design review to understand if any frontend changes will be needed
2. **[Rep Data] Stability and Maintenance**: Job to popoulate new Accredited Entities tables (beginning migration from Veteran Service tables, address approximation (when full rep address is invalid), programmatically get Trexler file from SQL server
3. **[Rep Data] GCLAWS SQL Server API Integration**: Write the service to connect to the SQL API and handle the response
4. **[21a] v4 - Development**: Determine how applicants can follow up with OGC, when documents fail to upload to GCLAWS

**Team Benefits**:
1. **[ITF] MVP - Development**: Launch-blocking QA findings, Datadog setup, release
2. **[ITF] MVP - Design**: Update designs and URLs to match development
11. **[Claimant Details] MVP - Design**: Claimant Details URLs
12. **[Discovery Research] Understanding how Reps manage the claims cycle across all clients**: Wrap up interviews, analyze and draft a report.
13. **[526ez submission v2] v2 form 526 submission - UX**: Desk review of past UX research related to claims submission.
14. **[ARP Post-MVP] Cleanup Tasks**: Finish creating the SavedClaims deletion job

**Team Appoint**:
1. **ARC Team Onboarding and Setup**: General onboarding to VA and ARC onboarding
2. **[Filter and Details] Find a Rep v3 Epic - Design**: Update v3 designs, reducing scope to only adding the organization filter
3. **[21-22a] Research: Understand the 21-22a representation relationship and supporting VA processes**: Initial (desk) research to review past findings
4. Address outstanding bugs

**Engagement**: 
1. **[Rep Onboarding] National Association of County Veterans Service Officers (NACVSO)**: Generate spreadsheet with missing emails (single accredited reps)
2. **[Rep Onboarding] Colorado Division of Veteran Affairs**: Schedule meeting and generate spreadsheet with missing emails
3. **[Rep Onboarding] Batch Outreach Strategy for SEP VSOs**: Identify unaccredited certifying officials
4. **[Rep Communication] Set up shared support mailbox**: Investigate sending emails from shared support mailbox
5. **[Rep Onboarding] Coordinate with LEAF team to produce feature demo videos**: Provide video feedback

## Sprint 8 Demos

TBD

## Sprint 8 Delivery

TBD

## Sprint 8 Tickets

**Team Accreditation**

|Title|URL|Status|Estimate|
|---|---|---|---|
|Research: what OGC wants to do when documents fail to upload to GCLAWS|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126281|In Progress|SPIKE|
|Write the service to connect to the SQL API and handle the response|https://github.com/department-of-veterans-affairs/va.gov-team/issues/127918|Sprint Backlog|5|
|Include representatives with an invalid full address, but valid zip code or city/state combo in Find a Rep search results	|https://github.com/department-of-veterans-affairs/va.gov-team/issues/120822|Sprint Backlog|5|
|Write a job to populate the 'new' accredited entities using data from Trexler file|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129161|Sprint Backlog|5|
|Architecture: develop data models for Individual Acceptance of Rep Reqs|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129163|Sprint Backlog|SPIKE|
|Research: all features touching Individual Acceptance of Rep Reqs|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129164|Sprint Backlog|SPIKE|
|Design review - Individual Acceptance of Rep Reqs|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129165	|Sprint Backlog|3|
|Implementing frontend changes associated with Address Approximation|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129436|Sprint Backlog|5|

**Team Benefits**

|Title                                                                                  |URL                                                                        |Status         |Estimate|
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------|--------|
|QA Finding: Inaccurate ITF type reference, on "We can't confirm..." status page for non-Veterans|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129621|Done           |2       |
|QA Finding: ITF Card referencing incorrect/incomplete benefit type                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129823|Done           |3       |
|QA Finding: Veteran is referenced instead of non-Veteran claimant                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129827|Done           |2       |
|Create ARC SavedClaims Deletion Job                                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125798|QA             |5       |
|QA Finding: Reps can submit ITF for claimants not in the database (no POA check)       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129533|External Review|2       |
|QA Finding: Confirmation Page should reference benefit in "What to expect"             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129825|PR Review      |2       |
|Bug: Representatives are unable to accept a Representation Requests                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125608|In Progress    |SPIKE   |
|QA Finding: Review "Edit" buttons should link to the form page (no edit on Review page)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129528|In Progress    |8       |
|Claimant Lifecycle - Conduct Interviews                                                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127483|In Progress    |8       |
|Claimant Lifecycle - Scrub transcripts                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127948|In Progress    |5       |
|Datadog: Monitor ITF attempts, successes, errors                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127481|Sprint Backlog |3       |
|Stakeholder Artifacts for Intent to File MVP                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127466|Sprint Backlog |3       |
|QA Finding: non-Veteran flow should check POA and ITF for the non-Veteran              |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129915|Sprint Backlog |3       |
|Datadog: Surface latency for ITF                                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128918|Sprint Backlog |3       |
|Datadog: Track error rates for ITF                                                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128927|Sprint Backlog |3       |
|Go/ No-Go Release Review                                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128648|Sprint Backlog |2       |
|Contact Center Review for ITF release                                                  |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127479|Sprint Backlog |2       |
|Release ITF                                                                            |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127467|Sprint Backlog |1       |
|Communicate ITF release to ARP pilot users via Teams/Email                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127468|Sprint Backlog |1       |
|Update Help page with ITF content                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127475|Sprint Backlog |2       |
|Update error message on Review page                                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129325|Sprint Backlog |1       |
|Claimant Details URLs                                                                  |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127482|Sprint Backlog |2       |
|Claimant Lifecycle - Review transcripts and analyze + Draft Report and Summary         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127484|Sprint Backlog |8       |
|QA Finding: Heading updates for Claimant Information pages                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129838|Sprint Backlog |SPIKE   |
|QA Finding: Heading updates for Review page (non-Veteran flow)                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129840|Sprint Backlog |SPIKE   |
|desk review of past claims-submission related user research                            |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128149|Sprint Backlog |5       |
|Update ITF designs to match development                                                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129277|Sprint Backlog |2       |
|Update URL flow to reflect ITF error state on the Review page                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129279|Sprint Backlog |1       |
|Explore potential uses of shared web component library                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129883|Sprint Backlog |SPIKE   |

**Team Appoint**

|Title                                                                      |URL                                                                        |Status        |Estimate|
|---------------------------------------------------------------------------|---------------------------------------------------------------------------|--------------|--------|
|Engineering Onboarding to ARC [Nick]                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129124|Sprint Backlog|3       |
|Engineering Onboarding to ARC [Kristen]                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129126|Sprint Backlog|3       |
|UX Onboarding to ARC [David]                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129125|Sprint Backlog|3       |
|Find a Rep: Invalid page request                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/105464|Sprint Backlog|SPIKE   |
|Find a Rep: Fix missing longitude parameter in API Requests                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/105462|Sprint Backlog|SPIKE   |
|21-22a PDF generation error -- rep was missing zip code                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/113487|Sprint Backlog|SPIKE   |
|Design a Find a Rep iteration that only adds the org filter update         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129133|Sprint Backlog|5       |
|General Onboarding to VA [Tyler]                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129773|Sprint Backlog|5       |
|Engineering Onboarding to ARC [Tyler]                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129774|Sprint Backlog|3       |
|21-22a desk research:  understand the 21-22a representation request process|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129779|Sprint Backlog|        |



**Engagement**

|Title                                                                            |URL                                                                        |Status        |Estimate|
|---------------------------------------------------------------------------------|---------------------------------------------------------------------------|--------------|--------|
|Provide video feedback                                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/121183|Blocked       |2       |
|Coordinate with VSO Liaison for Batch 1 outreach                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126514|Sprint Backlog|1       |
|[ NACVSO ] Generate spreadsheet with single accredited reps with missing emails  |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128282|Sprint Backlog|2       |
|Identify unaccredited certifying officials                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129082|Sprint Backlog|2       |
|[ Colorado Division of Veteran Affairs ] Schedule meeting                        |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129143|Sprint Backlog|1       |
|[ Colorado Division of Veteran Affairs ] Generate spreadsheet with missing emails|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129148|Sprint Backlog|1       |
|Investigate shared support mailbox                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129595|Sprint Backlog|2       |



# Sprint 7 (Dec 30, 2025 - Jan 12, 2026)

## Sprint 7 Goals
- [x] Sprint Goals Approved by Enablement - Jen Bertsch on December 30, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1767117172790029?thread_ts=1767054358.624309&cid=C06GE5N7QJ0))

**Team Accreditation**: 
1. **[Rep Data] GCLAWS SQL Server API Integration**: Update existing Accreditation API job to include fallback (SQL API)
5. **[21a] v4 - Development**: Finish Chapter 6 document upload endpoint and S3 bucket, confirm fallback procedure if upload fails

**Team Benefits**:
1. **[ITF] MVP - Development**: Team QA, Prepare for release
2. **[ITF] MVP Epic - Design**: Content center guide updates
11. **[ARP Post-MVP] Cleanup Tasks**: Continue accessibility audit (686c), Create ARC SavedClaims Deletion Job, Cont. Representation Requests - Update POA endpoints to send POA data to CorpDb
13. **[Rep Communication] Research Panel Epic**: Determine how to utilize the representative research panel, with recruitment in mind 

## Sprint 6+7 Demos ([Recording Link](https://dvagov-my.sharepoint.com/:v:/g/personal/lindsay_li-smith_va_gov/IQBA40Aq755tSJ9EtJKG1U3lAQsVov1D2sXk_gqtHXnOkOY?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=QZOSQ0))

**Team Accreditation**:
1. Design work on Address Approximation
2. Document upload endpoint for Form 21a

**Team Benefits**:
1. Review Page
2. ITF Status page: No POA
3. ITF Status page: Existing ITF
4. ITF Status Page: Cannot Confirm ITF status
5. Confirmation page - ITF submission: Failed
6. Display ITF activity in the "Recent Submissions" section of the Submissions page

**December Metrics Review**

## Sprint 7 Delivery

- [x] Sprint Delivery Approved by Enablement - Jen Bertsch on January 14, 2026 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1768417478049189?thread_ts=1768410008.688459&cid=C06GE5N7QJ0)) 

Total Completed in Sprint 7: 31 tickets, 88 points + 3 spikes\
Planned Tickets Completed: 19 tickets, 61 points + 2 spikes\
Stretch Goal Tickets Completed: 12 tickets, 27 points + 1 spike

Crew Count in Sprint 7: 13 active teammates (not including Principal Leads)\
Average Teammate Velocity in Sprint 7: 88 points / 13 teammates = 6.8 points / teammate (not including Principal Leads)

Carrying into Sprint 8: 6 tickets, 22 points

## Sprint 7 Tickets

**Team Accreditation**

Moving forward, Team Accreditation will be dropping to the backlog tickets that have blockers with an uncertain / externally-dependent timetable for resolution -- so many of the non-Done tickets in the table will not immediately appear in Sprint 8 planning. This work will be pulled in as it becomes unblocked.

|Title|URL|Status|Estimate|Stretch Goal|Reason for carry over|
|---|---|---|---|---|---|
|Chapter 6: Document Upload - Create a new endpoint to handle document uploads for 21a|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765|Done|8|||		
|Design / Discovery Suppressing Invalid Rep Addresses|https://github.com/department-of-veterans-affairs/va.gov-team/issues/128101	|Done|3|Yes||	
|Update deprecated AddressPOU values|https://github.com/department-of-veterans-affairs/va.gov-team/issues/128643|Done|1|||		
|Investigate data discrepancies between sources and prod database|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129399|Done|SPIKE|Yes||	
|Discovery for SQL API fallback|https://github.com/department-of-veterans-affairs/va.gov-team/issues/127915|Done|2	|||	
|Testing the Accreditation API in Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126323|QA|3|	|Blocked|
|Chapter 6: Document Upload - Enable s3 bucket in Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125901|QA|1|		|Blocked|
|Chapter 6: Document Upload - Create a background job that's called after the form has been posted to GCLAWS to post the file uploads|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114767|Blocked|5|		|Blocked|
|Research: what OGC wants to do when documents fail to upload to GCLAWS|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126281|Blocked|SPIKE|		|Work still in progress|
|Chapter 6: Ensure fields align, use schema for validation, unit tests|https://github.com/department-of-veterans-affairs/va.gov-team/issues/112535|Sprint Backlog|3|	|Blocked|
|Confirm Form 21a 'currently' schema booleans are added to GCLAWS API|https://github.com/department-of-veterans-affairs/va.gov-team/issues/91776|Sprint Backlog|2|	|Blocked|
|Write the service to connect to the SQL API and handle the response|https://github.com/department-of-veterans-affairs/va.gov-team/issues/127918|Sprint Backlog|5|	|Work still in progress|
|Update existing Accreditation API job to include fallback (SQL API)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126324|Sprint Backlog|3|	|Blocked|

**Team Benefits**

|Title                                                                                  |URL                                                                        |Status         |Estimate|Stretch goal?                        |Reason for carry over|
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------|---------------|--------|-------------------------------------|---------------------|
|QA Finding: Require Veteran Date of Birth, for non-Veteran pathway                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129616|Done           |2       |Yes                                  |                     |
|Representation Requests - Update POA endpoints to send POA data to CorpDb              |https://github.com/department-of-veterans-affairs/va.gov-team/issues/117218|Done           |5       |                                     |                     |
|ARP Accessibility Testing: 686c                                                        |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126269|Done           |8       |                                     |                     |
|Display ITF activity in the "Recent Submissions" section of the Submissions page       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126380|Done           |3       |                                     |                     |
|Bug: Unable to submit ITF in staging                                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129531|Done           |5       |Yes                                  |                     |
|ITF Status page: Existing ITF                                                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126388|Done           |3       |                                     |                     |
|~Confirmation page~ ITF Submission: Failed                                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126392|Done           |2       |                                     |                     |
|ITF content updates for Help page - First Pass                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127474|Done           |3       |                                     |                     |
|E2E Tests for ITF                                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127463|Done           |8       |                                     |                     |
|Add documentation for current forks and reasoning                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127846|Done           |SPIKE   |                                     |                     |
|Prepare for ITF Team QA                                                                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127478|Done           |5       |                                     |                     |
|QA for Intent to File (Zears)                                                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128645|Done           |2       |Yes                                  |                     |
|QA for Intent to File (Michael)                                                        |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128646|Done           |2       |Yes                                  |                     |
|QA for Intent to File (Darby)                                                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128647|Done           |3       |Yes                                  |                     |
|QA for Intent to File (Alex)                                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128651|Done           |2       |Yes                                  |                     |
|Defining a plan around shared code usage                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127849|Done           |SPIKE   |                                     |                     |
|ITF content updates for Help page - Revise & Finalize                                  |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127476|Done           |2       |Yes                                  |                     |
|Update Contact Center Guide with ITF mentions                                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127477|Done           |5       |                                     |                     |
|QA updates: Claimant Information page                                                  |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127812|Done           |2       |Yes                                  |                     |
|Bug: Confirmation page for 526EZ does not load                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127885|Done           |3       |                                     |                     |
|QA updates: ITF Review page                                                            |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128627|Done           |1       |Yes                                  |                     |
|Create feature flag for ITF check                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/128981|Done           |3       |Yes                                  |                     |
|Create ARC SavedClaims Deletion Job                                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125798|QA             |5       |                                     |Pending Team review  |
|QA Finding: Reps can submit ITF for claimants not in the database (no POA check)       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129533|External Review|2       |Yes                                  |Pending Platform/External Team review|
|Bug: Representatives are unable to accept a Representation Requests                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125608|In Progress    |SPIKE   |                                     |Work still in progress|
|QA Finding: Review "Edit" buttons should link to the form page (no edit on Review page)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/129528|In Progress    |8       |Yes                                  |Work still in progress|
|Claimant Lifecycle - Conduct Interviews                                                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127483|In Progress    |8       |                                     |Work still in progress|
|Claimant Lifecycle - Scrub transcripts                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127948|In Progress    |5       |                                     |Work still in progress|
|Datadog: Monitor ITF attempts, successes, errors                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127481|Sprint Backlog |3       |                                     |Over-planned / capacity reached|
|Stakeholder Artifacts for Intent to File MVP                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127466|Sprint Backlog |3       |                                     |Over-planned / capacity reached|

**Engagement**

|Title                                                                               |URL                                                                        |Status        |Estimate|Reason for carry over          |
|------------------------------------------------------------------------------------|---------------------------------------------------------------------------|--------------|--------|-------------------------------|
|[ Arizona Department of Veterans' Services ] Coordinate bulk contact info update    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/124871|Done          |1       |                               |
|Update onboarding presentation with diagrams                                        |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126170|Done          |2       |                               |
|[ Paralyzed Veterans of America ] Resolve issues from bulk contact update           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127527|Done          |1       |                               |
|[ Veterans of Foreign Wars ] Run the Trexler file                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/129488|Done          |1       |                               |
|Determine how to utilize the representative research panel, with recruitment in mind|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122143|Sprint Backlog|5       |Over-planned / capacity reached|



# Sprint 6 (Dec 16-29, 2025)

## Sprint 6 Goals
- [x] Sprint Goals Approved by Enablement - Jen Bertsch on December 17, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1765993055977109?thread_ts=1765927459.310269&cid=C06GE5N7QJ0)) 

**Team Accreditation**: 
1. **[Rep Data] GCLAWS Accreditation API Integration**: Continue testing the Accreditation API in Production
2. **[Rep Data] GCLAWS SQL Server API Integration**: Architecture Intent, discovery for the SQL API fallback, write the service to connect to the SQL API
3. **[Rep Data] Stability and Maintenance**: Finalize product outlines and architecture intent for invalid-address aproximation API and SQL API daily job, add existing edge-case-handling code from VSOs to address validation for Reps
5. **[21a] v4 - Development**: Continuing with new endpoint to handle document uploads and background job to retrieve the application ID after posting the file uploads, enable s3 bucket in production, research what OGC wants to do when documents fail to upload to GCLAWS
6. **[Contact Info] Profile Information MVP - Design**: Assess state of existing designs

**Team Benefits**:
1. **[ITF] MVP - Development**: MVP development, team QA, prepare for release
2. **[ITF] MVP Epic - Design**: Draft content updates for the Help page
3. **[Claimant Details] MVP - Design**: Design adjustments
4. **[Claimant Details] ARC Discovery Research: Understanding how Reps manage the claims cycle across all clients**: Ongoign recruitment and interviews
11. **[ARP Post-MVP] Cleanup Tasks**: Accessibility audit (submissions page, 526EZ, 686c), Representation Requests - Update POA endpoints to send POA data to CorpDb
12. **[Rep Onboarding] Paralyzed Veterans of America**: Resolve issues from bulk contact update
13. **[Rep Onboarding] Coordinate with LEAF team to produce feature demo videos**: Provide video feedback
14. **ARC Team Onboarding and Setup**: Product Manager onboarding
15. Update onboarding presentation with diagrams

## Sprint 6 Demos

Due to limited holiday availability, Sprint 6 demos will be held on 1/13 alongside those from Sprint 7.

## Sprint 6 Delivery
- [x] Sprint Delivery Approved by Enablement - Jen Bertsch on December 30, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1767117172790029?thread_ts=1767054358.624309&cid=C06GE5N7QJ0))

 Planned for Sprint 6: 35 tickets, 115 points + 3 spikes \
 Added as a Sprint 6 stretch goal: 2 tickets, 2 points

Completed in Sprint 6: 15 tickets, 51 points\
Crew Velocity: 51 points / 10 days = 5.1 points / day

Crew Count in Sprint 6: 15 active teammates\
Average Teammate Velocity: 51 points / 15 teammates = 3.4 points / teammate

Carrying into Sprint 7: 20 tickets, 75 points + 3 spikes
1. 2 tickets (11 points) are pending Team QA
2. 1 ticket (3 points) is pending Platform/External Review
3. 2 tickets (4 points) are pending PR Review
4. 3 tickets (14 points) are Blocked
5. 10 tickets (31) points) are still In Progress


## Sprint 6 Tickets

**Team Accreditation**
|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|Add existing edge-case-handling code from VSOs to address validation for Reps|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126952|Done|3|||	
|Create Product Outline for invalid-address approximation API|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126527|Done|2|||
|Prepare for Architecture Intent for invalid-address approximation|API	https://github.com/department-of-veterans-affairs/va.gov-team/issues/126258|Done|2|||
|Prepare for Architecture Intent for SQL API Daily Job|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126544|Done|2|||
|Assess state of existing design work and research for Contact Info Updates|https://github.com/department-of-veterans-affairs/va.gov-team/issues/127209|Done|3|||
|Testing the Accreditation API in Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126323|QA|3||Pending Platform/External Team review|
|Update deprecated AddressPOU values|https://github.com/department-of-veterans-affairs/va.gov-team/issues/128643|PR Review|1|Yes|Pending Platform/External Team review|
|Chapter 6: Document Upload - Create a new endpoint to handle document uploads for 21a|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765|Blocked|8||Blocked|
|Chapter 6: Document Upload - Create a background job that's called after the form has been posted to GCLAWS to post the file uploads|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114767|Blocked|5||Blocked|
|Chapter 6: Document Upload - Enable s3 bucket in Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125901|Blocked|1||Blocked|
|Research: what OGC wants to do when documents fail to upload to GCLAWS|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126281|In Progress|SPIKE||Work still in progress|
|Discovery for SQL API fallback|https://github.com/department-of-veterans-affairs/va.gov-team/issues/127915|In Progress|2||Work still in progress|
|Write the service to connect to the SQL API and handle the response|https://github.com/department-of-veterans-affairs/va.gov-team/issues/127918|In Progress|5||Work still in progress|

**Team Benefits**
|Title                                                                                                                               |URL                                                                        |Status             |Estimate|Stretch goal?|Reason for carry over           |
|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|-------------------|--------|-------------|--------------------------------|
|Research / Disco Claimant Lifecycle - Recruitment                                                                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126162|Done               |5       |             |                                |
|ARP Accessibility Testing: Submissions page + 526EZ                                                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126268|Done               |8       |             |                                |
|ITF Status page: No POA                                                                                                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126386|Done               |8       |             |                                |
|ITF Status page: Cannot confirm ITF status                                                                                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126387|Done               |3       |             |                                |
|Review page                                                                                                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126389|Done               |2       |             |                                |
|General Onboarding to ARC [Zears]                                                                                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127242|Done               |5       |             |                                |
|Product Onboarding to ARC [Zears]                                                                                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127243|Done               |3       |             |                                |
|Release Plan for ITF                                                                                                                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127465|Done               |2       |             |                                |
|QA updates: Claimant Background page and Global Internal Form Page Font Issue                                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127921|Done               |1       |Yes          |                                |
|Adjust Claimant Details MVP designs                                                                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127981|Done               |2       |             |                                |
|E2E Tests for ITF                                                                                                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127463|QA                 |8       |             |Pending Team review             |
|Display ITF activity in the "Recent Submissions" section of the Submissions page                                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126380|PR Review          |3       |             |Pending Platform/External Review|
|Representation Requests - Update POA endpoints to send POA data to CorpDb                                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/117218|In Progress        |5       |             |Work still in progress          |
|Bug: Representatives are unable to accept a Representation Requests                                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125608|In Progress        |SPIKE   |             |Work still in progress          |
|ITF content updates for Help page - First Pass                                                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127474|In Progress        |3       |             |Work still in progress          |
|Add documentation for current forks and reasoning                                                                                   |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127846|In Progress        |SPIKE   |             |Work still in progress          |
|Prepare for Team QA                                                                                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127478|In Progress        |5       |             |Pending Team review             |
|Claimant Lifecycle - Conduct Interviews                                                                                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127483|In Progress        |8       |             |Work still in progress          |
|Bug: Confirmation page for 526EZ does not load                                                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127885|In Progress        |3       |             |Work still in progress          |
|ARP Accessibility Testing: 686c                                                                                                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126269|Sprint Backlog     |8       |             |Work still in progress          |
|Confirmation page: Failed                                                                                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126392|Sprint Backlog     |2       |             |Pending Team review             |
|Claimant Lifecycle - Scrub transcripts                                                                                              |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127948|Sprint Backlog     |5       |             |Work still in progress          |


# Sprint 5 (Dec 2-15, 2025)

## Sprint 5 Goals
- [x] Sprint Goals Approved by Enablement - Jen Bertsch on December 3, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1764797730747719?thread_ts=1764777609.876169&cid=C06GE5N7QJ0)) 

**Team Accreditation**: 
1. **[Rep Data] GCLAWS Accreditation API Integration**: Test the Accreditation API in Production, enable the integration and retest
4. **[Rep Data] Stability and Maintenance**: Kick off and Architecture Intent for both the invalid-address approximation API and the SQL API daily job 
5. **[21a] v4 - Development**: New endpoint to handle document uploads, background job to retrieve the application ID after posting the file uploads
6. **ARC Team Onboarding and Setup**: Completing General onboarding for the team Product Manager

**Team Benefits**:
1. **[Auth] ID.me in ARP**: Remove the feature flag
6. **[ITF] MVP - Development**: MVP development continuing the first pass of work in Sprint 4, Architecture Intent
9. **[Claimant Details] ARC Discovery Research: Understanding how Reps manage the claims cycle across all clients**: Revisions to the research plan and conversation guide, recruitment for user interviews
10. **[Claimant Details] MVP Design**: Design revisions, content and IA review
11. **[ARP Post-MVP] Cleanup Tasks**: Confirm the access token has been updated, accessibility audit (Dashboard, submissions page, 526EZ), URL updates and bug fixes
12. **[Measure Impact] ARP MVP in Datadog**: Update the ARP dashboard to report on claims submissions by POA code
13. **[Rep Communication] Relationship Management**: Document SOP for bulk contact update, draft VSO outreach email template for VSO Liaison, identify organizations for Batch 1 outreach
14. **VSO Outreach Strategy**: Coordinate with VSO Liaison for Batch 1 and 2 outreach
15. **[Rep Communication] Set up shared support mailbox**: Data analysis for insights, draft email address suggestions
16. **[Rep Onboarding] Cooridnate with LEAF team to produce feature demo videos**: Provide script feedback
17. **[Rep Onboarding] NACVSO**: Conduct demo meeting
19. **ARC Team Onboarding and Setup**: Review instances

## Sprint 5 Demo ([Recording link](https://dvagov-my.sharepoint.com/:v:/r/personal/lindsay_li-smith_va_gov/Documents/Recordings/ARC%20Sprint%20Demo-20251216_130716-Meeting%20Recording.mp4?csf=1&web=1&e=xpBk7T&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D))

**Team Benefits**
 
1. Update ARP Datadog Dashboard to Use New Form Submission Counter Metrics ([demo recording](https://www.loom.com/share/e35f0efdead4414a8f9e6b0815763f13))
2. ITF ([demo recording](https://www.loom.com/share/325ba5c182e24de5b76c1d4f099946f0))
   1. Introduction page
   4. Claimant Background page
   5. Claimant Information page (for Veterans)
   6. Claimant Information page (for non-Veterans)


## Sprint 5 Delivery
- [x] Sprint Delivery Approved by Enablement - Jen Bertsch on December 17, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1765993055977109?thread_ts=1765927459.310269&cid=C06GE5N7QJ0)) 

**Planned for Sprint 5**: 38 tickets, 115 points + 2 spikes \
**Added as a Sprint 5 stretch goal**: 11 tickets, 40 points

**Completed in Sprint 5**: 31 tickets, 90 points + 1 spike \
**Crew Velocity**: 90 points / 10 days =  9 points / day

**Crew Count in Sprint 5**: 15 active teammates \
**Average Teammate Velocity**: 90 points / 15 teammates = 6 points / teammate

**Carrying into Sprint 6**: 18 tickets, 65 points + 1 spikes
1. 2 tickets (4 points) are pending Team QA
2. 1 ticket (3 points) is pending External Review
3. 2 tickets (6 points) are pending PR Review
4. 1 tickets (3 points) is Blocked
5. 12 tickets (49 points) are still In Progress

## Sprint 5 Tickets

**Team Accreditation**
|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|General Onboarding to ARC [Sam]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125504|Done|5|||
|Kick off Collab Cycle for invalid-address approximation API|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126534|Done|1|||		
|Create Product Outline for SQL API Daily Job|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126542|Done|2|||
|Kick off Collab Cycle for SQL API Daily Job|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126543|Done|1|||
|Create Product Outline for invalid-address approximation API|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126527|QA|2||Work still in progress|
|Add existing edge-case-handling code from VSOs to address validation for Reps|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126952|External Review|3|Yes|Pending Platform/External Team review|
|Testing the Accreditation API in Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126323|PR Review|3||Work still in progress|
|Enable the Accreditation API Integration in Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/106367|Blocked|3||Blocked|
|Chapter 6: Document Upload - Create a new endpoint to handle document uploads for 21a|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765|In Progress|8||Work still in progress|
|Chapter 6: Document Upload - Create a background job that's called after the form has been posted to GCLAWS to post the file uploads|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114767|In Progress|5||Work still in progress|
|Prepare for Architecture Intent for invalid-address approximation API|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126258|In Progress|2||Work still in progress|
|Prepare for Architecture Intent for SQL API Daily Job|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126544|In Progress|2||Work still in progress|


**Team Benefits**
|Title                                                                           |URL                                                                        |Status     |Estimate|Stretch goal?|Reason for carry over                |
|--------------------------------------------------------------------------------|---------------------------------------------------------------------------|-----------|--------|-------------|----------------------|
|General Onboarding to ARC [Sam]                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125504|Done       |5       |             |                      |
|Kick off Collab Cycle for invalid-address approximation API                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126534|Done       |1       |             |                      |
|Create Product Outline for SQL API Daily Job                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126542|Done       |2       |             |                      |
|Kick off Collab Cycle for SQL API Daily Job                                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126543|Done       |1       |             |                      |
|Draft VSO outreach email template for VSO Liaison                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126453|Done       |1       |             |                      |
|Provide script feedback                                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/121182|Done       |1       |             |                      |
|Create ITF endpoints in ARP behind feature flag                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/101321|Done       |8       |             |                      |
|Design / Claimant Details Revisions                                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125710|Done       |5       |             |                      |
|Research / Disco Claimant Lifecycle - Revisions                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126161|Done       |5       |             |                      |
|Content / Claimant Details - IA Review                                          |https://github.com/department-of-veterans-affairs/va.gov-team/issues/124067|Done       |5       |             |                      |
|Content / Review Claimant Details Designs                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/122015|Done       |5       |             |                      |
|[ NACVSO ] Conduct demo meeting                                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126457|Done       |1       |             |                      |
|Update the access token to align with NIST                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/115102|Done       |2       |             |                      |
|URL Update: Sign In                                                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125373|Done       |3       |             |                      |
|URL Update: Upload pages                                                        |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125529|Done       |1       |             |                      |
|Bug: Not seeing active state on navigation links                                |https://github.com/department-of-veterans-affairs/va.gov-team/issues/115088|Done       |2       |             |                      |
|Implement review instances                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/123489|Done       |SPIKE   |             |                      |
|Initial pass at ITF frontend work                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126486|Done       |5       |             |                      |
|General Onboarding to ARC [Patrick A]                                           |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125757|Done       |5       |Yes          |                      |
|Engineering Onboarding to ARC [Patrick A]                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125758|Done       |2       |Yes          |                      |
|ARP Accessibility Testing: Dashboard                                            |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126267|Done       |3       |             |                      |
|Feature Flag Cleanup: ID.me                                                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125836|Done       |2       |             |                      |
|Schedule Architecture Intent for ITF                                            |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126276|Done       |2       |             |                      |
|Add New Counter Metrics to Submit Action for Accurate Volume                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126296|Done       |3       |             |                      |
|Update ARP Datadog Dashboard to Use New Form Submission Counter Metrics         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126297|Done       |2       |             |                      |
|Document SOP for bulk contact update                                            |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126312|Done       |2       |             |                      |
|Kick off with Collab Cycle for Claimant Details                                 |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126373|Done       |1       |Yes          |                      |
|Add ITF entry point to Submissions page                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126379|Done       |3       |             |                      |
|Introduction page                                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126381|Done       |2       |             |                      |
|UX Onboarding to ARC [Ian]                                                      |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127244|Done       |5       |Yes          |                      |
|Review page                                                                     |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126389|QA         |2       |             |Work still in progress|
|Display ITF activity in the "Recent Submissions" section of the Submissions page|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126380|PR Review  |3       |             |Work still in progress|
|Research / Disco Claimant Lifecycle - Recruitment                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126162|In Progress|5       |             |Work still in progress|
|Bug: Representatives are unable to accept a Representation Requests             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/125608|In Progress|SPIKE   |             |Work still in progress|
|ARP Accessibility Testing: Submissions page + 526EZ                             |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126268|In Progress|8       |             |Work still in progress|
|Update onboarding presentation with diagrams                                    |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126170|In Progress|2       |Yes          |Work still in progress|
|ITF Status page: No POA                                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126386|In Progress|2       |Yes          |Work still in progress|
|Confirmation page: Failed                                                       |https://github.com/department-of-veterans-affairs/va.gov-team/issues/126392|In Progress|2       |Yes          |Work still in progress|
|General Onboarding to ARC [Zears]                                               |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127242|In Progress|5       |Yes          |Work still in progress|
|Claimant Lifecycle - Conduct Interviews                                         |https://github.com/department-of-veterans-affairs/va.gov-team/issues/127483|In Progress|8       |Yes          |Work still in progress|




# Sprint 4 (Nov 18 - Dec 1, 2025)

## Sprint 4 Goals
- [x] Sprint Goals Approved by Enablement - Jen Bertsch on November 18, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1763506689984539)) 

**Team Accreditation**: 
1. **[Rep Data] Accreditation API Integration**: Finish implementing fail-safes for the Accreditation API integration
4. **[Rep Data] Stability and Maintenance**: Finish bug fixes and stability improvements, Include representatives with an invalid full address, but valid zip code or city/state combo in Find a Rep search results, and Refactor Address Validation for agents/attorneys/VSO reps
5. **[21a] v4 - Development**: Update the confirmation page, work to unblock Chapter 6 after which we can configure an s3 bucket and create a new endpoint to handle document uploads
6. **ARC Team Onboarding and Setup**: General and Product onboarding for our team Product Managers

**Team Benefits**:
1. **[Auth] ID.me in ARP**: Staging Review and release, communicate release to ARP users
6. **[ITF] MVP - Development**: Create a product outline and kick off with Collaboration Cycle, finish creating ITF endpoints in ARP behind feature flag
7. **[ITF] MVP - Design**: Finish MVP designs, final content review, define the IA/URLs 
9. **[Claimant Details] ARC Discovery Research: Understanding how Reps manage the claims cycle across all clients**: Create a research plan
10. **[ARP Post-MVP] Cleanup Tasks**: Update URLs, add Accredited Representative service to PagerDuty for downtime notifications, update POA endpoints to send POA data to CorpDB, udpate the access token to align with NIST, discuss "delete_saved_claim_records_job" usage with Benefits Decision Review team
11. **[ARF] Accessibility for ARP MVP features**: Internal Accessibility Audit
12. **[Measure Impact] ARP MVP in Datadog**: Claims submission data in Datadog isn't consistent
13. **[Rep Communication] Relationship Management**: ARP Support Inbox - Data Analysis for Insights, think about strategy for VSO initial adoption
14. **ARC Team Onboarding and Setup**: Engineering onboarding for our Sr. Accessibility Engineer, Implement review instances

## Sprint 4 Demo ([Recording link](https://dvagov-my.sharepoint.com/:v:/g/personal/lindsay_li-smith_va_gov/EctAWHJi7cpOj6recJYZtUIBPbf4MblkiQWWWmUYYcljIA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=4torB8))

**Team Accreditation**

1. [21a Confirmation Page update](https://www.loom.com/share/9ba6b74f46424a30a939c2d3de6823b5)

**Team Benefits**

1. ID.me authentication method in ARP
2. Bug fix: Nav home link broken on form 526/686 app


## Sprint 4 Delivery
- [x] Sprint Delivery Approved by Enablement - Jen Bertsch on December 3, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1764797841956309?thread_ts=1764777609.876169&cid=C06GE5N7QJ0)) 

**Planned for Sprint 4**: 37 tickets, 113 points + 2 spikes \
**Added as a Sprint 4 stretch goal**: 9 tickets, 17 points + 2 spikes 

**Completed in Sprint 4**: 33 tickets, 80 points + 2 spikes \
**Crew Velocity**: 80 points / 9 days =  8.9 points / day

**Crew Count in Sprint 4**: 16 active teammates \
**Average Teammate Velocity**: 80 points / 16 teammates = 5 points / teammate

**Carrying into Sprint 5**: 13 tickets, 50 points + 2 spikes
1. 2 tickets (11 points) are pending Team QA
2. 5 tickets (16 points) are Blocked
3. 5 tickets (18 points + 2 spikes) are still In Progress
6. 1 ticket (5 points) is in Sprint Backlog due to capacity being reached (deprioritized to investigate a bug)

**Notes**:
1. Thanksgiving was the second Thursday of Sprint 4, and 10 active teammates had reduced capacity in the second half of the sprint. 




## Sprint 4 Tickets

**Team Accreditation**

|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|Chapter 6: Document Upload - Configure s3 bucket|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114764|Done|2| | |
|Update Confirmation Page|https://github.com/department-of-veterans-affairs/va.gov-team/issues/111529|Done|3| | |
|Representative data bug fixes and stability improvements (post shutdown)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122690|Done|3| | |
|Research: API providers for address validation|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126249|Done|SPIKE|Yes| |
|Refactor Address Validation for agents/attorneys/VSO reps|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123120|Done|5| | |
|Implement fail-safes for the Accreditation API integration|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123584|Done|5| | |
|Product Onboarding to ARC [Sam]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125592|Done|2| | |
|Document issues from Sprint 3 product support shift|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125949|Done|2| | |
|Include representatives with an invalid full address, but valid zip code or city/state combo in Find a Rep search results|https://github.com/department-of-veterans-affairs/va.gov-team/issues/120822|Blocked|5| |Blocked|
|Chapter 6: Document Upload - Create a new endpoint to handle document uploads for 21a|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765|In Progress|8| |Work still in progress|
|General Onboarding to ARC [Sam]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125504|In Progress|5| |Work still in progress|


**Team Benefits**

|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|Think about strategy for VSO initial adoption|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123530|Done|5| | |
|Design / ITF Submission Design (MVP-level)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122013|Done|5| | |
|Content / ITF Design Revisions|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125579|Done|2| | |
|Research / Discovery of Claimant Lifecycle [Claimant Details]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125588|Done|5| | |
|Define ITF IA/URLs|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125528|Done|3| | |
|Research / Disco Claimant Lifecycle - Convo Guide|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125593|Done|5|Yes| |
|ARP Accessibility Testing: Homepage, Sign In, and Help|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125813|Done|5| | |
|Add Accredited Representative service to PagerDuty for downtime notifications|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123980|Done|3| | |
|URL Update: Unauthorized Dashboard|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125374|Done|2| | |
|URL Update: Help|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125376|Done|2| | |
|Meet with Kym from LEAF to discuss|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121181|Done|1| | |
|Claims submission data in Datadog isn't consistent|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125174|Done|SPIKE| | |
|Discuss "delete_saved_claim_records_job" usage with Benefits Decision Review team|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125547|Done|1| | |
|Release ID.me|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123713|Done|1| | |
|Schedule Go/No Go Meeting for ID.me release|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123583|Done|1| | |
|Create an ITF product outline|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123587|Done|3| | |
|Kick off with Collab Cycle for Intent to File (ITF)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123361|Done|1| | |
|Communicate ID.me release to ARP pilot users via Teams/Email|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123719|Done|2| | |
|[ Veterans of Foreign Wars ] Coordinate bulk contact info update|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121216|Done|1| | |
|Confirm our CRM approach meets Platform Security requirements|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124036|Done|1| | |
|Engineering Onboarding [Darby]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122088|Done|3| | |
|Add Accredited Representative Portal service to downtime notification|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125492|Done|2|Yes| |
|[ Rep Onboarding ] Break out DAV emails into individual sheets|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125617|Done|2| | |
|Bug: Nav home link broken on form 526/686 app|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125647|Done|1|Yes| |
|Schedule PO Sync for ITF|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126277|Done|1|Yes| |
|Create ITF endpoints in ARP behind feature flag|https://github.com/department-of-veterans-affairs/va.gov-team/issues/101321|QA|8| |Pending Team review|
|Update the access token to align with NIST|https://github.com/department-of-veterans-affairs/va.gov-team/issues/115102|QA|3| |Work still in progress|
|URL Update: Sign In|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125373|Blocked|3| |Blocked|
|URL Update: Upload pages|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125529|Blocked|1|Yes|Blocked|
|Bug: Not seeing active state on navigation links|https://github.com/department-of-veterans-affairs/va.gov-team/issues/115088|Blocked|2|Yes|Blocked|
|Initial pass at ITF frontend work|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126486|Blocked|5|Yes|Work still in progress|
|ARP Support Inbox - Data Analysis for Insights|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122124|In Progress|5| |Work still in progress|
|URL Update: Redirect `/representative-form-upload` to `/submissions`|https://github.com/department-of-veterans-affairs/va.gov-team/issues/126266|In Progress| |Yes|Work still in progress|
|Implement review instances|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123489|In Progress|SPIKE| |Work still in progress|
|Bug: Representatives are unable to accept a Representation Requests|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125608|In Progress|SPIKE|Yes|Work still in progress|
|Representation Requests - Update POA endpoints to send POA data to CorpDb|https://github.com/department-of-veterans-affairs/va.gov-team/issues/117218|Sprint Backlog|5| |Over-planned / capacity reached|





# Sprint 3 (Nov 4 - Nov 17, 2025)

## Sprint 3 Goals
- [x] Sprint Goals Approved by Enablement - Jen Bertsch on November 3, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1762200765604449)) 

**Team Accreditation**: 
1. **[21a] v4 - Development**: Implement the multi-file component, address Review page bugs and remove 21a from Save In Progress tables after submission
2. **[21a] v5 - Development**: Identify any work that is development ready
3. **[Rep Data] Accreditation API Integration**: Implement fail-safes for the Accreditation API integration

**Team Benefits**:
1. **[Auth] ID.me in ARP**: Staging Review, Contact Center Review
6. **[ITF] MVP - Development**: Development spike, create a product outline and kick off with Collaboration Cycle
7. **[ITF] MVP - Design**: Content review for MVP designs
8. **[Claimant Details] MVP - Design**: Begin addressing open design work with the goal of finalizing MVP designs
9. **[ARP Post-MVP] Cleanup Tasks**: Update URLs, reintroduce form validation, research redact form submissions older than 60 days, add sitewide alerts, investigate a file upload error, feature flag cleanup, investigate test user issues
10. **[Rep Onboarding] NACVSO**: Check in with NACVSO leadership to introduce POA acceptance and understand willingness to turn on POA acceptance
11. **[Rep Onboarding] Veterans of Foreign Wars**: Coordinate bulk contact info update
12. **[Rep Onboarding] Marine Corps**: Send second follow-up email
13. **[Rep Communication] Set up shared support mailbox**: Data analysis for insights, create templates and signatures

**General**: 
1. **ARC Team Onboarding and Setup**: Onboard UX Researcher, Accessibility Engineer, Full Stack Engineer, 2 Product Managers
2. **November 6th Production Deployment**: Monitor the Production release and connect with a friendly ARP user to confirm Production experiences are functioning as expected.


## Sprint 3 Demo ([Recording link](https://dvagov-my.sharepoint.com/:v:/r/personal/lindsay_li-smith_va_gov/Documents/Recordings/ARC%20Sprint%20Demo-20251118_130652-Meeting%20Recording.mp4?csf=1&web=1&e=E951eF&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D))

**Team Accreditation**

1. Chapter 6: Implement multi-file upload component 
2. Chapter 7: Enforce 3-4 character reference requirement 

**Team Benefits**

1. Staging Review finding: File input error triggered while file is uploading 
2. Claims Submission - Reintroduce PDF to text converter for form number validation 
3. Bug: Deleting files breaks the upload component 
4. Address responsiveness issues on homepage  
5. Bug: Navigating to Help page requires log in
6. Claimant Details Discovery
7. Fix ID.me content on Help page
8. Site Alerts: integrating relevant alerts from VA.gov
9. Update CRM with missing emails, tools, and other org data
10. Update URL to match Representation requests content changes
11. Update URLs for 686c and 526ez (Staging review feedback)
12. Update URL for Find Claimant
13. Update Contact Center Guide with ID.me mentions
14. Content / Error Alerts Revised


## Sprint 3 Delivery
- [x] Sprint Delivery Approved by Enablement - Jen Bertsch on November 18, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1763506689984539)) 

**Planned for Sprint 3**: 47 tickets, 128 points + 6 spikes \
**Added as a Sprint 3 stretch goal**: 8 tickets, 10 points + 2 spikes 

**Completed in Sprint 3**: 47 tickets, 112 points + 8 spikes \
**Crew Velocity**: 112 points / 9 days =  12.4 points / day

**Crew Count in Sprint 3**: 13 active teammates \
**Average Teammate Velocity**: 112 points / 13 teammates = 8.6 points / teammate

**Carrying into Sprint 4**: 9 tickets, 26 points 
1. 1 ticket (3 points) are pending Platform/External Team review 
2. 1 ticket (5 points) are pending Team review
3. 3 tickets (6 points) are Blocked
4. 2 tickets (8 points) are still in progress
5. 2 tickets (4 points) were over-planned and unable to start due to capacity being reached

**Notes**:
1. In addition to the pointed crew velocity, 8 spikes were completed in Sprint 3.




## Sprint 3 Tickets

**Team Accreditation**

|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|Chapter 6: Implement multi-file upload component|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123400|Done|5| | |
|Representative data bug fixes and stability improvements (during shutdown)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122689|Done|3| | |
|Chapter 7: Enforce 3-4 character reference requirement|https://github.com/department-of-veterans-affairs/va.gov-team/issues/116777|Done|3| | |
|Review page: Improve Military Service History and Professional Affiliations accordions|https://github.com/department-of-veterans-affairs/va.gov-team/issues/116778|Done|3| | |
|Only allow LOA3 users on the backend, so it can't be accessed directly via API|https://github.com/department-of-veterans-affairs/va.gov-team/issues/112253|Done|1|Yes| |
|Identify any 21a v5 work that is ready for development|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124190|Done|3| | |
|NOV 6 PRODUCTION PUSH|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124046|Done|SPIKE| | |
|Document On-Call Process|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125130|Done|2|Yes| |
|Fix E2E tests|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125172|Done|2|Yes| |
|Representative data bug fixes and stability improvements (post shutdown)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122690|External Review|3| |Pending Platform/External Team review|
|Implement fail-safes for the Accreditation API integration|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123584|PR Review|5| |Pending Team review|



**Team Benefits**

|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|Investigate errors with Claimant Search|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124535|Done|SPIKE|Yes| |
|Define URL structure for ARP pages|https://github.com/department-of-veterans-affairs/va.gov-team/issues/119728|Done|5| | |
|Audit ARC Research for Q1 - part one|https://github.com/department-of-veterans-affairs/va.gov-team/issues/120955|Done|5| | |
|Content / ITF MVP Review for Production|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123777|Done|3| | |
|UX Onboarding to ARC [Heather]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122617|Done|5| | |
|Design / Claimant Search to Claimant Details Design (MVP-level)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123480|Done|8| | |
|Update Contact Center Guide with ID.me mentions|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123507|Done|3| | |
|NOV 6 PRODUCTION PUSH|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124045|Done|SPIKE| | |
|Bug: Navigating to Help page requires log in|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123838|Done|3| | |
|ITF Discovery|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123981|Done|SPIKE| | |
|Determine if `/representative-form-upload` can be renamed to `submissions`|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123998|Done|SPIKE| | |
|Site Alerts: integrating relevant alerts from VA.gov|https://github.com/department-of-veterans-affairs/va.gov-team/issues/113997|Done|5| | |
|Templates and signatures have been created|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121174|Done|5| | |
|Check in with NACVSO leadership|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123514|Done|2| | |
|Redaction for forms submission to meet platform level security requirements|https://github.com/department-of-veterans-affairs/va.gov-team/issues/118880|Done|SPIKE| | |
|Claims Submission - Reintroduce PDF to text converter for form number validation|https://github.com/department-of-veterans-affairs/va.gov-team/issues/117128|Done|2| | |
|Content / Error Alerts Revised|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122378|Done|5| | |
|Staging Review finding: File input error triggered while file is uploading|https://github.com/department-of-veterans-affairs/va.gov-team/issues/114648|Done|2| | |
|Feature Flag Cleanup: accredited_representative_portal_api|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121881|Done|1| | |
|Feature Flag Cleanup: accredited_representative_portal_self_service_auth|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121880|Done|1| | |
|Feature Flag Cleanup: accredited_representative_portal_pilot|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121879|Done|3| | |
|Investigate TUD user issues affecting local + Staging QA|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123235|Done|SPIKE| | |
|Address responsiveness issues on homepage|https://github.com/department-of-veterans-affairs/va.gov-team/issues/119449|Done|2| | |
|Update URL to match `Representation requests` content changes|https://github.com/department-of-veterans-affairs/va.gov-team/issues/112789|Done|2| | |
|Update URLs for 686c and 526ez (Staging review feedback)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/117886|Done|2| | |
|Update URL for Find Claimant|https://github.com/department-of-veterans-affairs/va.gov-team/issues/118007|Done|2| | |
|General Onboarding to ARC [Heather]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122484|Done|3| | |
|General Onboarding to ARC [Darby]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123475|Done|3| | |
|Contact Center Review for ID.me release|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123406|Done|2| | |
|Update Self Service Auth product outline to include ID.me mentions|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123586|Done|3| | |
|[ Marine Corps ] Send second follow-up email|https://github.com/department-of-veterans-affairs/va.gov-team/issues/121098|Done|1| | |
|Bug: Deleting files breaks the upload component|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124582|Done|2|Yes| |
|Add feature flag back in|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124749|Done|2| | |
|Claimant Details Discovery|https://github.com/department-of-veterans-affairs/va.gov-team/issues/124892|Done|SPIKE|Yes| |
|Fix ID.me content on Help page|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125433|Done|1|Yes| |
|Update CRM with missing emails, tools, and other org data|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125446|Done|2|Yes| |
|Request Contact Center Review for ID.me release to Accredited Representative Portal|https://github.com/department-of-veterans-affairs/va.gov-team/issues/125460|Done| | |Pending Platform/External Team review|
|Design / ITF Submission Design (MVP-level)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122013|Blocked|5| |Blocked|
|Prepare ID.me Staging Review artifacts|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123588|Blocked| | |Blocked|
|Schedule ID.me Staging Review|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123405|Blocked|1| |Blocked|
|ARP Support Inbox - Data Analysis for Insights|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122124|In Progress|5| |Work still in progress|
|Add Accredited Representative service to PagerDuty for downtime notifications|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123980|In Progress|3| |Work still in progress|
|Create an ITF product outline|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123587|Sprint Backlog|3| |Over-planned / capacity reached|
|Kick off with Collab Cycle for Intent to File (ITF)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123361|Sprint Backlog|1| |Over-planned / capacity reached|



**Leadership**

|Title|URL|Status|Estimate|Stretch goal?|Reason for carry over|
|---|---|---|---|---|---|
|General Onboarding to ARC [Jeff]|https://github.com/department-of-veterans-affairs/va.gov-team/issues/122483|Done|3| | |
|New team setup (including Atlas presence)|https://github.com/department-of-veterans-affairs/va.gov-team/issues/123096|Done|2| | |


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

## Sprint 2 Demo ([Recording link](https://dvagov-my.sharepoint.com/:v:/r/personal/lindsay_li-smith_va_gov/Documents/Recordings/ARC%20Sprint%20Demo-20251104_130812-Meeting%20Recording.mp4?csf=1&web=1&e=oTvMxD&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D))

1. Post-MVP content cleanup
   1. Title tags match the H1 page titles
   2. Dashboard content updated from `Would you like to get accredited?` to `Would you like to become accredited?`
   3. Representation request null state and details pages updated to refer to "representation requests" instead of "POA" or "power of attorney"
   4. Request list/search page updated from `You don't have access to this feature` to `You currently can't receive requests in the portal`
2. Script for maintaining Staging test users for ARP
3. Implementing the multi-file component for Claims Submission
4. Fixing the horizontal scrollbar in the right Contact Us column
5. CRM for VSO onboarding and management
6. Representation requests enabled for Veterans of Foreign Wars
7. Monitoring VA Notify callbacks in Datadog
9. Review October metrics

## Sprint 2 Delivery
- [X] Sprint Delivery Approved by Enablement - Jen Bertsch on November 6, 2025 ([Slack conversation](https://dsva.slack.com/archives/C06GE5N7QJ0/p1762460348741159?thread_ts=1762457127.570759&cid=C06GE5N7QJ0))

**Planned for Sprint 2**: 42 tickets, 130 points + 1 spike \
**Added as a Sprint 2 stretch goal**: 8 tickets, 14 points 

**Completed in Sprint 2**: 34 tickets, 80 points \
**Crew Velocity**: 80 points / 10 days = 8 points / day

**Crew Count in Sprint 2**: 12 active teammates + 2 onboarding \
**Average Teammate Velocity**: 80 points / 14 teammates = 5.7 points / teammate

**Carrying into Sprint 3**: 14 tickets, 51 points 
1. 5 tickets (21 points) are blocked, due to the government shutdown.
2. 2 tickets (10 points) have significant progress, but are pending Engineering discovery to finalize
3. 3 tickets (8 points) are pending external/Platform review
4. 1 tickets (5 points) are awaiting feedback from Enablement
5. 2 tickets (5 points) are pending team review

**Notes**:
1. 2 new teammates onboarding this sprint -- Principal Engineering Lead and a UX Researcher
 

## Sprint 2 Tickets

**Accreditation Team**

Title | URL | Status | Estimate | Reason for sprint carry over
-- | -- | -- | -- | --
Fix address validation | https://github.com/department-of-veterans-affairs/va.gov-team/issues/116119 | Done | 3 |  
Create rake task for enabling online   submission of 21-22 | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122077 | Done | 3 |
Submit Request for Production Access | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122078 | Done | 1 |  
Consider fail-safes for the Accreditation   API integration | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121954 | Done | 3 |  
Consider alternative ways to validate   locations, for reps who fail Platform's Address Validator | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122133 | Done | 2 |  
Test the Accreditation API in Staging +   Adjust Appoint Org Search | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114588 | Blocked | 5 | Shutdown prevents ability to troubleshoot with GCLAWS
Chapter 6: Document Upload - Configure s3   bucket | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114764 | Blocked | 2 | Shutdown prevents Production updates
Chapter 6: Document Upload - Create a new   endpoint to handle document uploads for 21a | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114765 | Blocked | 8 | Shutdown prevents Production updates
Chapter 6: Document Upload - Create a new   uploader | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114766 | Blocked | 3 | Shutdown prevents Production updates
Representative data bug fixes and   stability improvements (during shutdown) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122689 | External Review | 3 | Pending Platform review

Added as a stretch goal:

Title | URL | Status | Estimate | Reason for sprint carry over
-- | -- | -- | -- | --
Accreditation API - Disable stale data   deletion for any errors | https://github.com/department-of-veterans-affairs/va.gov-team/issues/123115 | Done | 3 |  
Chapter 7: Enforce 3-4 character   reference requirement | https://github.com/department-of-veterans-affairs/va.gov-team/issues/116777 | PR Review | 3 | Pending team review
Implement fail-safes for the   Accreditation API integration | https://github.com/department-of-veterans-affairs/va.gov-team/issues/123584 | In Progress |   | Work still in progress


**Benefits Team**

Title | URL | Status | Estimate | Reason for sprint carry over
-- | -- | -- | -- | --
Design / Claimant Details UX Review | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122039 | Done | 3 |  
Script for maintaining Staging test users   for ARP | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121624 | Done | 5 |  
Feature Flag Cleanup:   accredited_representative_portal_form_526ez | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121875 | Done | 2 |  
Define details for implementing site   maintenance alerts | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122623 | Done | SPIKE |  
Claims submission - Update multi-file   component to the latest version | https://github.com/department-of-veterans-affairs/va.gov-team/issues/114702 | Done | 5 |  
Update title tag for all pages in the   portal to match content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118559 | Done | 1 | 
Unauthorized Dashboard: update "Get   accredited" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119215 | Done | 1 | 
Update null state for representation   requests | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117892 | Done | 1 | 
Request list/search page: update   "you don't have access" content | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119342 | Done | 1 | 
Request details page: update   "POA" language | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119189 | Done | 1 | 
Self-Service Authentication - Implement   ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/111033 | Done | 5 | 
Content / Audit Error Alerts | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119677 | Done | 5 | 
Update the ARP help page content, to   include ID.me mentions | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119954 | Done | 2 | 
Datadog - Monitor VA Notify Callbacks and   Surface Failures | https://github.com/department-of-veterans-affairs/va.gov-team/issues/116917 | Done | 5 |  
Enable Representation Requests for VFW | https://github.com/department-of-veterans-affairs/va.gov-team/issues/118786 | Done | 1 |  
Security Review (Rebase lining) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/115948 | Done | 2 |  
Schedule Architecture Intent for ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121885 | Done | 2 |  
Design / ITF Submission Design   (MVP-level) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122013 | Blocked | 5 | Pending Engineering discovery #123981
Define URL structure for ARP pages | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119728 | Blocked | 5 | Pending Engineering discovery #123998
ARP Support Inbox - Data Analysis for   Insights | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122124 | QA | 5 | Awaiting Enablement feedback
Content / Error Alerts Revised | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122378 | In Progress | 5 | Work still in progress
General Onboarding to ARC [Heather] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122484 | In Progress | 3 | Work still in progress

Added as a stretch goal:

Title | URL | Status | Estimate | Reason for sprint carry over
-- | -- | -- | -- | -- 
[ Paralyzed Veterans of America ]   Coordinate bulk contact info update | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121673 | Done | 1 | 
Bug: Horizontal scrollbar appears in   right column Contact Us at a breakpoint of about 960 screen width | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119744 | Done | 1 | 
Address responsiveness issues on homepage | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119449 | PR Review | 2 | Pending team review |



**Leadership**


Title | URL | Status | Estimate | Reason for sprint carry over
-- | -- | -- | -- | --
Create email templates to respond to ARP   interest | https://github.com/department-of-veterans-affairs/va.gov-team/issues/119726 | Done | 2 | 
Build CRM for VSO Onboarding and   Management | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122647 | Done | 3 |  
Kick off with Collab Cycle for ID.me   release | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121996 | Done | 1 |  
Release Plan for ID.me | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122685 | Done | 2 |  
Epic organization | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122111 | Done | 5 |  
OOB Deploy Request - Allow ARP   Authentication for Reps with Invalid Addresses | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122449 | Done |   
Engineering Onboarding to ARC [Jeff] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122615 | Done | 3 |  
Representative research panel   documentation | https://github.com/department-of-veterans-affairs/va.gov-team/issues/117647 | Done | 3 | 
Standards of Practices (SOPs) have been   created to define access and management of the mailbox | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121171 | Done | 2 |
General Onboarding to ARC [Jeff] | https://github.com/department-of-veterans-affairs/va.gov-team/issues/122483 | Blocked | 3 | Blocked by shutdown, pending VBMS access
Templates and signatures have been   created | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121174 | In Progress | 5 | Work still in progress
Audit ARC Research for Q1 | https://github.com/department-of-veterans-affairs/va.gov-team/issues/120955 | Sprint Backlog | 3 | Carrying to Sprint 3 as an early UX Research task



Added as a stretch goal:

Title | URL | Status | Estimate | Reason for sprint carry over
-- | -- | -- | -- | --
[ Veterans of Foreign Wars ] Confirm   access | https://github.com/department-of-veterans-affairs/va.gov-team/issues/121218 | Done | 1 |
Post-Mortem for Out of Band deployment | https://github.com/department-of-veterans-affairs/va.gov-team/issues/123038 | Done | 1 |
New team setup (including Atlas presence) | https://github.com/department-of-veterans-affairs/va.gov-team/issues/123096 | External Review | 2 | Awaiting Platform review | 



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


## Sprint 1 Demo ([Recording link](https://dvagov-my.sharepoint.com/:v:/r/personal/lindsay_li-smith_va_gov/Documents/Recordings/ARC%20Sprint%20Demo-20251021_100609-Meeting%20Recording.mp4?csf=1&web=1&e=sGMFNv&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D))

1. Demo video added to ARP homepage
2. ID.me added as a login/authentication option (in addition to Login.gov)
2. Updating the Help page content, including ID.me mentions
3. ARP sitewide alerts 
4. 21a form upload



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
