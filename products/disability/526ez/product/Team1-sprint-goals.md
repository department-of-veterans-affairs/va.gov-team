# Sprint goals for Benefits Disability Experience Team1 (DBEX-TREX)

## Sprint 31
Period - 05/08/2024 - 05/21/2024
### Sprint goals

- **Toxic Exposure**
    - (15b) Veteran can establish a claim inclusive of dates they spent in the Gulf War and/or 9/11. Calendar dates are populated in Overflow (15e).
    - Mockups for how to message Veterans with an in-progress form that new TE fields are available.

- **Paper Form Sync**
    - 5103 link and claim certification - Implement feedback from collab cycle for any launch blocking issues

- **[Submission Experience](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/78179)**
   - Design mockups for submission scenarios on the success path (including successful backup paths)
       - CAIA review of design mockups
   - Map design options for failure submission scenarios in order to reduce or eliminate Veteran burden
       - This solutioning includes resubmission and In Progress Forms
   
## Sprint 30
Period - 04/24/2024 - 05/07/2024
### Sprint goals

- **Toxic Exposure**
  - Veteran can establish a claim and insert a Form526 version 2022 PDF with conditions filled out in column 2 and the checkbox for 15A is checked in their file in VBMS
  - Stretch goal: conditions validation

- **Paper Form Sync**
  - Design mocks for adding 5103 language to form, and mock up signature component for claim certification.

- **Submission  & Post-Submission**
  - Map future state success path within our domain
  - Start discovery of technical feasibility for failure paths - Mike & Evelyn

## Sprint 29
Period - 04/10/2024 - 04/23/2024
### Sprint goals 
- **Expedited**
 - **2023 Prioritized Work**
    - 526ez sync with paper version 
       - Toxic Exposure
         - [ ] Continue build on TE pages - Gulf War 1990 / 2001    
         - [ ] Contract for Toxic Exposure fields between FE and BE 
         - [ ] Start work on data transformation for the new Toxic Exposure fields
         - [ ] generatePdf hook up #80773
      - Audit for 526ez and ancillary forms for all paper to digital form changes
          - [ ] Complete technical discovery and review with stakeholders
          - [ ] Create tickets in the backlog for updates identified
          
- **2024 Prioritized Work**
   - Improvement in Submission and Post Submission Experience
      - Desk Research
        - Existing research and design on va.gov - part 2
        - Current state of submission and post submission experience
        - Present findings from the desk research
          
- **Stretch Goal**
   - [ ] Testing Matrix for all forms within 526 flow - action item from postmortem of recent production issue

## Sprint 28
Period - 03/27/2024 - 04/09/2024
### Sprint goals 
- **Expedited**
  - [ ] single direct deposit content - design and front-end - complete
  - [ ] Front-end - Widgets to Web components upgrade - radio buttons and checkboxes - **The Design System Team is removing all V1 web components that have a V3 upgrade available, completely, EXCEPT: va-file-input  and va-table on May 3rd** 
   - [ ] Front-end - Widgets to Web components upgrade - Test if the Design System switch to V3 will break 526 form if the upgrades are not done - **Pulled in mid sprint**
 - **2023 Prioritized Work**
   - 526ez sync with paper version 
       - **Toxic Exposure**
           - [ ] Engineering - Continue build on TE pages - Create end to end tests   
           - [ ] Tech Discovery - Investigate how release Toxic Exposure with the new pdf version with sticky feature flag
           - [ ] Add Toxic Exposure fields to Form526 vets JSON schema - Spike
           - [ ] Start work on data transformation for the new Toxic Exposure fields
       - Audit for 526ez and ancillary forms for all paper to digital form changes
          - Complete technical discovery and review with stakeholders
- **2024 Prioritized Work**
   - Improvement in Submission and Post Submission Experience
      - Desk Research
        - Existing research and design on va.gov - part 1
        - Current state of submission and post submission experience
        - Present findings from the desk research
          
- **Stretch Goal**
   - [ ] Testing Matrix for all forms within 526 flow - action item from postmortem of recent production issue



## Sprint 27
Period - 03/13/2024 - 03/26/2024
### Sprint goals 
- **Expedited**
  - [ ] single direct deposit content - design and front-end
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
      - PCIU 
        - [ ] Address prefill investigation - check if it blocks claim completion or submission
        - [ ] If the issue is not a blocker for submission, start launch
      - BRD (seperation locations endpoint)
        -  Canary launch, followed by staggered release
   - 526ez sync with paper version 
       - Toxic Exposure 
           - [ ] Engineering - Continue build on pages for Gulf War Hazards(1990 date pages)
           - [ ] Tech Discovery - Investigate if TE can be launched with migration to LH /generatePDF without /submit migration
       - Audit for 526ez for all paper to digital form changes
          - Complete technical discovery to determine next steps for discrepancies for ancillary forms 4142, 4142a 

- **Other**
   - [ ] Create a Testing Matrix for all forms within 526 flow - action item from postmortem of recent production issue
   - [ ] Start breaking down prioritized work to layout the road-map for next two quarters
   - [ ] UX and Design - Start work on the next initiative picked up by Team 1
     
- **Stretch Goals**
   - [ ] Front-end - Widgets to Web components upgrade - radio buttons
   - /generatePDF
        - [ ] Start migration - abstract provider
   - 526 Architecture Diagram


## Sprint 26
Period - 02/28/2024 - 03/12/2024
### Sprint goals 
- **Expedited**
   - [ ] Back-end - Remediate failed 4142 signature submission failures
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
      - PCIU 
        - [ ] Address prefill investigation - contd.
      - BRD (seperation locations endpoint)
        -  Update DD Dashboard for monitoring release - change what we are logging or where we flag it
      - Submit
        - Discovery into special issues being sent from 526 via EVSS
   - 526ez sync with paper version 
       - Toxic Exoposure 
           - [X] Design - Update mock-ups/content for radio buttons 2,3 and 4
           - [ ] Design - [Update content and components on "how is your condition related to your service?" and follow-up question for all radio button options](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/77226)
           - [ ] [Design - Update documentation from mid-point review](https://app.zenhub.com/workspaces/disability-experience-63dbdb0a401c4400119d3a44/issues/gh/department-of-veterans-affairs/va.gov-team/75927)
           - [ ] Engineering - Continue build on pages for Gulf War Hazards(1990 date pages)  
       - Audit for 526ez for all paper to digital form changes
          - Complete technical discovery to determine next steps for discrepancies for ancillary forms 4142, 4142a 

- **Other**
   - [ ] Team goal - Piroritization for what's next
   - [ ] Analytics - continued
   - [ ] Research - Presentation on Shadow Research for Benefits Portfolio design team 
     
- **Stretch Goals**
   - [ ] Front-end - Widgets to Web components upgrade - radio buttons
   - [ ] Front-end - upgrading widgets to web components - checkbox
   - [ ] Architecture Diagram for 526
   - [ ] Design - Delete button removes upload without user confirmation #59263
   - Rated Disabilities
       -  Sanity check with the new LH version
       -  Restart staggered release

## Sprint 25
Period - 02/14/2024 - 02/27/2024
### Sprint goals 
- **Expedited**
   - [ ] Discovery on Flashes not reaching VBMS from va.gov
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
      - PCIU 
        - [ ] Launch for 10% and up depending on monitoring results
      - BRD (seperation locations endpoint)
        -  Update DD Dashboard for monitoring release
        -  Start canary launch if the Dashoboard is ready for monitoring
      - Rated Disabilities
        -  Sanity check with the new LH version
        -  Restart staggered release
   - 526ez sync with paper version 
       - Toxic Exoposure 
           - [ ] Design - Mid-point review and resulting work - complete
           - [ ] Design - Update documentation from mid-point review
           - [ ] Engineering - Start build on first set of pages for Gulf War Hazards  
       - Audit for 526ez for all paper to digital form changes - Determine next steps for discrepancies - Continue
       - Audit for ancillary form - 8940 

- **Other**
   - Team goal - Piroritization for what's next
     
- **Stretch Goals**
 - [ ] Audit for ancillary form - 4192 - Determine next steps for discrepancies
 - [ ] Architecture Diagram for 526
 - [ ] Front-end - upgrading widgets to web components

## Sprint 24
Period - 01/31/2024 - 02/13/2024
### Sprint goals 
- **Expedited**
   -  Front-end - Web components v3 upgrade
   -  Fix broken timestamp spec #74912
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
       - PPIU - Direct Debit 
         - [ ] Launch 50% and next based on the progress 
      - Benefits Claims Service 
        - [ ] Launch 50% and next based on the progress 
      - PCIU 
        - [ ] Release planning and canary launch
      - BRD
        -  Release planning
   - 526ez sync with paper version 
       - Toxic Exoposure 
           - [ ] Mid-point review and resulting work
       - Audit for 526ez for all paper to digital form changes - Determine next steps for discrepancies
       - Audit for ancillary form - 4192

- **Stretch Goals**
  - Shadow Research
    - [ ] Piroritization for what's next
  - Toxic Exoposure 
    - [ ] Front-end - continue build
  - /submit -  
        - [ ] Discovery on submit migration options for sync and async response for established claims if unblocked
  
## Sprint 23
Period - 01/17/2024 - 01/30/2024
### Sprint goals 
- **Expedited**
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
       - PPIU - Direct Debit 
         - [ ] Launch 25% and next based on the progress 
      - Benefits Claims Service 
        - [ ] Launch 25% and next based on the progress 
      - Submit endpoint
        - [ ] Discovery on submit migration options for sync and async response for established claims
      - PCIU 
        - [ ] Start removing EVSS calls from 526 for PCIU
   - 526ez sync with paper version 
       - Toxic Exoposure 
           - [ ] Front-end - continue build
           - [ ] Finalize design for date entries for 15 B, C, and D
       - Audit for 526ez for all paper to digital form changes - Start discovery
- **Research**
  - Shadow Research
    - [ ] Additional shareout with additional stakeholders
- **Misc**
  - Migrate sketch files to Figma 

- **Design Debt**
    - Front-end - Discovery on scope of the change for v3 components
      
- **Stretch Goals**
  - Shadow Research
    - [ ] Look at what's  next from the research findings
  - Migrate sketch files to Figma
    
## Sprint 22
Period - 01/03/2024 - 01/16/2024
### Sprint goals 
- **Expedited**
 - [ ] Add date stamps on form 0781 - Complete testing
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
       - PPIU - Direct Debit 
         - [ ] Launch 1% and next based on the progress 
      - Benefits Claims Service 
        - [ ] Launch 1% and next based on the progress 
      - Submit endpoint
        - [ ] Discovery on IDs in claim submission
        - [ ] Discovery on rerouting submit with async polling
      - PCIU 
        - [ ] Discovery - continued
   - 526ez sync with paper version 
       - Toxic Exoposure 
           - [ ] Front-end - start build
           - [ ] Design
             - [ ] Accessibility updates for MVP
             - [ ] New Toxic Exposure validation/error screen mocks
             - [ ] Complete document clean up
- **Research**
  - Shadow Research
    - [ ] Draft report
- **Misc**
  - Migrate sketch files to Figma - Identify scope and create tickets for migration
    
- **Stretch Goals**
     - Migrate sketch files to Figma - continued
     - Audit for 526ez for all paper to digital form changes - Start discovery

## Sprint 21
Period - 12/20/2023 - 01/02/2024
### Sprint goals 
- **Expedited**
 - [ ] Add date stamps on form 0781 
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
      - Submit endpoint
        - [ ] Integration testing with LH release in sandbox - continued
      - PCIU 
        - [ ] Discovery - continued
   - 526ez sync with paper version 
       - Toxic Exoposure 
           - [ ] Finalize copy edits based on CAIA feedback
           - [ ] Create FE tickets and start build
      - Audit for 526ez for all paper to digital form changes - Start discovery
- **Research**
  - Shadow Research
    - [ ] Synthesis and draft report outline
- **Stretch Goals**
     - Design and Content updates - Service History changes from mid-point, if capacity
     - Migrate sketch files to Figma


## Sprint 20
Period - 12/06/2023 - 12/19/2023
### Sprint goals 
- **Expedited**
   - [ ] #71011 - User Signed at Date for ancillary forms (form4142, form0781, form8940) should be distinguished from programatic submission date
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
       - PPIU - Direct Debit 
         - [ ] Canary launch
         - [ ] Launch 1% and next based on the outcome 
      - Benefits Claims Service 
        - [ ] Canary launch for Benefits Claims
      - Submit endpoint
        - [ ] Integration test with LH release in sandbox - if available
- **Features**
   - 526ez sync with paper version 
       - Toxic Exoposure - unblocked work
           - [ ] New mocks for timeframe location capture
           - [ ] Discovery for mock-ups in progress
      - Service History changes from mid-point, if capacity
- **Research**
  - Shadow Research
    - [ ] Shadow Research sessions
    - [ ] Synthesis

- **Stretch Goals**
  - Engineering
     - [ ] PCIU Discovery
     - [ ] Unit tests coverage to 80% plus buffer for unblocking future code shipment
     - [ ] FE Engineering - Create tickets for build for TE when unblocked
     - [ ] Start work, if unblocked
  - Design
     - [ ]  Audit for 526ez for all paper to digital form changes - Discovery
  - Research
  - Other
     - [ ] 


## Sprint 19
Period - 11/22/2023 - 12/05/2023
### Sprint goals 
- **Expedited**
   - [ ] EMIS Testing - if unblocked
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
       - PPIU - Direct Debit 
         - [ ] Canary launch
      - Benefits Claims Service and Submit
        - [ ] Update Datadog Dashboard
- **Features**
   - 526ez sync with paper version 
       - Complete VAMC optional fields backend investigation
       - Toxic Exoposure - unblocked work
           - [ ] Engineering Discovery - How are fields on the current 526 mapped for conditions on paper form (Section V)  
       -  New military service questions 
          - [ ] Discovery for creating implementation tickets
- **Research**
  - Shadow Research
    - [ ] Shadow Research sessions

- **Stretch Goals**
  - Engineering
     - [ ] PCIU Discovery
     - [ ] Unit tests coverage to 80% for unblocking future code shipment
  - Design
     - [ ]  Audit for 526ez for all paper to digital form changes - Discovery
  - Research
     - [ ] Synthesis for Shadow Research
  - Other
     - [ ] 
           
## Sprint 18
Period - 11/08/2023 - 11/21/2023
### Sprint goals 
- **Expedited**
   - [ ] Unit tests coverage to 80% for unblocking future code shipment
   - [ ] Discovery for EMIS Migration testing
   - [ ] EMIS Migration testing
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
       - PPIU - Direct Debit 
         - [ ] Release plan
      - Benefits Claims Service
        - [ ] Release plan
- **Features**
   - 526ez sync with paper version 
       - [ ]  Discovery - Make VAMC fields optional - Backend investigation
       - Toxic Exoposure - unblocked work
           - [ ] Copy updates from research and CAIA feedback
- **Other**
  - Shadow Research
    - [ ] Discussion Guide
    - [ ] Recruitment 
- **Stretch Goals**
  - Engineering
     - [ ] PCIU Discovery
  - Design
     - [ ]
  - Research
     - [ ]
  - Other
     - [ ] Update 526ez Product Guide  
             

## Sprint 17
Period - 10/25/2023 - 11/07/2023
### Sprint goals 
- **Expedited**
   - [ ] Unit tests coverage to 80% for unblocking future code shipment
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - Submit
          - [ ] Identify and resurface outstanding migration issues
          - [ ] Fix unblocked issues with /submit implementation
          - [ ] Military Service Address Implementation
          - [ ] DD Dashboard for Sidekiq jobs
          - Benefits Claims Service
            - [ ] DD Dashboard
- **Features**
   - 526ez sync with paper version 
       - [ ] New military service questions - kick-off collab cycle
       - [ ] Toxic Exposure - potential design suggestions, copy updates and update to the content document with all post research reccomendations
       - [ ] Toxic Exposure end to end mapping and identifying open questions
         
- **Other**
  - [ ] Shadow Research plan
  - [ ] Teams 1 & 2 research effort - Review medallia survey data - Report   
      
- **Stretch Goals**
  - Engineering
     - Discovery for EMIS Migration testing
     - PPIU - Direct Debit 
       - [ ] Release plan
   - Design
      - Toxic Exposure copy updates
## Sprint 16
Period - 10/11/2023 - 10/24/2023

### Sprint goals 
- **Expedited**
   - Handover from Kyle

- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - Rated Disabilities
            - [ ] Continue staggered release - timeboxed tickets to monitor the release and fix issues as they occur
        - Submit
          - [ ] Identify and resurface outstanding migration issues
          - Benefits Claims Service
            - [ ] DD Dashboard
          - [ ] Tech Discovery - Military Service Address
- **Features**
   - 526ez changes to Intro pages
      - [ ] Intro pages - review flow changes - Design
      - [ ] Start Implementation of Intro pages changes - Frontend Engineering

   - 526ez sync with paper version 
       - [ ] Design for Wireframes for new military service questions

- **Stretch Goals**
  - Engineering
     - PPIU - Direct Debit 
       - [ ] Release plan
  - Research
     - Teams 1 & 2 research effort - Review medallia survey data - still in progress      
   

## Sprint 15
Period - 09/27/2023 - 10/10/2023
### Sprint goals 
- **Expedited**
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - ITF
            - [x] Move to 100% traffic 10/2/23
        - Rated Disabilities
            - [ ] enable 1% traffic            
       - PPIU - Direct Debit 
            - [x] Start migration of PPIU endpoint - started last sprint
- **Features**
   - 526ez current with paper form
      - [x] Toxic Exposure data mapping discovery 
      - [x] Toxic Exposure screens - Discovery for work breakdown - Frontend engineering
      - [x] Intro page changes - Discovery for work breakdown - Frontend engineering
      - [x] Intro pages change revised designs
    
 - **Other**
      - [ ] Teams 1 & 2 research effort - review medallia survey data - still in progress

- **Stretch Goals**
    - [x] Benefits Claims Release planning

  If there is capacity, pick up:
  - [ ] Submit Dashboard - monitor sidekiq jobs
  - [ ] Submit Dashboard - monitor controller activities

## Sprint 14
Period - 09/13/2023 - 9/26/2023
### Sprint goals 
- **Expedited**
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - ITF
            - [x] Continue staggered release - 25%
            - [ ] Continue staggered release - 50%  - holding off closing at 50% until after 9/30 PACT Act deadline
        - Rated Disabilities
            - [x] Start canary launch
            - [ ] Start staggered release for .1% requests - timeboxed tickets to monitor the release and fix issues as they occur - holding until after 9/30 PACT Act deadline
        - Submit 
            - [ ] Monitoring for migration release
               - [x] Identify controller activities and sidekiq jobs for monitoring
        - Benefits Claims Service 
            - [ ] Transform service
               - [x] Implement call to BenefitsClaims service to submit the 526 to Lighthouse
               - [ ] Release plan - did not get to
       - PPIU - Direct Debit 
            - [ ] Start migration of PPIU endpoint -carrying over to next sprint
- **Features**
   - 526ez current with paper form
      - [x] Toxic Exposure screens - Research Synthesis and Report
      - [x] Toxic Exposure screens - updated designs
      - [ ] Intro pages change revised designs - in progress
- **Other**  
 - Ongoing improvements:
      - [x] Sync sort order of Conditions and Disabilities across different pages in 526
      - [x] Update design components to align with design system
      - [x] Additional file upload content update


## Sprint 13
Period - 08/30/2023 - 9/12/2023
### Sprint goals 
- **Expedited**
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - ITF
            - [ ] Continue staggered release - timeboxed tickets to monitor the release and fix issues as they occur
        - Rated Disabilities
            - [ ] Start canary launch
            - [ ] Start staggered release for .1% requests - timeboxed tickets to monitor the release and fix issues as they occur
        - Submit 
            - [ ] Transform service
               - [ ] Create submit526 method to be added to tbe BenefitsClaims service to submit the 526 to Lighthouse
               - [ ] Form526 Backup Submission Process Discovery/Migration 

- **Features**
   - 526ez current with paper form
      - [ ] Toxic Exposure screens - Research Synthesis and Report
      - [ ] Toxic Exposure screens - Feature toggle and Intro pages- Frontend engineering
      - [ ] Toxic Exposure screens - Page migration - Frontend engineering

- **Analytics**
        
- **Stretch**
   - 526ez current with paper form
      - [ ] Design for Wireframes for new military service questions
   - Intro Pages
      - [ ] Revised design
         
- **Added after sprint started**


## Sprint 12
Period - 08/16/2023 - 08/29/2023
### Sprint goals 
- **Expedited**
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - ITF
            - [ ] Enable ITF in production - Canary launch with 3 internal users
            - [ ] Start staggered release for .5% and 5% - timeboxed tickets to monitor the release and fix issues as they occur
        - Rated Disabilities
            - [ ] Complete release planning
        - Submit 
            - [ ] Transform service
               - [ ] Abstract references to EVSS claims service - still in progress
               - [ ] Create submit526 method to be added to tbe BenefitsClaims service to submit the 526 to Lighthouse
               - [ ] Form526 Backup Submission Process Discovery 
   
- **Features**
   - Intro page changes and 526ez current with paper form
      - [ ] Toxic Exposure screens - Start Research
      - [ ] Toxic Exposure screens - Tech Discovery for upcoming changes - Frontend engineering
    
- **Analytics**
        
- **Stretch**
   - [ ] Design Discovery: Placement of new military service questions
   - [ ] Design Discovery: Consistent ordering of conditions and disability names
- **Added after sprint started**

## Sprint 11
Period - 08/2/2023 - 08/15/2023
### Sprint goals 
- **Expedited**

- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - ITF
            - [ ] Enable ITF in production - Canary - started, due to production issues still in progress
            - [ ] Start staggered release - timeboxed tickets to monitor the release and fix issues as they occur - not started due to production issues
        - Submit 
            - [X] Transform service
               - [X] Treatments
               - [X] Service Pay
               - [ ] Abstract references to EVSS claims service - still in progress
               
   
- **Features**
   - Intro page changes and 526ez current with paper form
      - [X] Toxic Exposure screens - Start Research Plan
      - [X] Toxic Exposure screens - Design - Updates based on Midpoint review and VBA stakeholder review
   
    
- **Analytics**
  - [ ] Send data request to VBA - Research 
    - This task has changed recently. Emily has access to Tableau dashboard that may provide us some of the info we are looking for. Will be sending the request to VBA after reviewing the dashboard with Emily. ETA - TBD
        
- **Stretch**
- [ ] Create submit526 method to be added to tbe BenefitsClaims service to submit the 526 to Lighthouse - did not get to

- **Added after sprint started**
- [ ] Enable Rated disabilities production launch - pre-launch tasks - still in progress
- [X] Production launch for first pass 526 sync
- [X] Migrate OMBinfo component on 526 intro page


## Sprint 10
Period - 07/19/2023 - 08/1/2023
### Sprint goals 
- **Expedited**
   - [ ] Bug - Make VAMC fields optional - on hold
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - Rateddisabilities - changed to ITF
            - [X] Complete Release Plan with roll back plan
            - [ ] Start staggered release - timeboxed tickets to monitor the release and fix issues as they occur 
        - Submit 
            - [X] Abstract calls to submit endpoint
            - [ ] Start endpoint migration - Document Service
            - [ ] Start endpoint migration - Claims Service
- **Features**
   - Intro page changes and 526ez current with paper form
      - [X] Intro pages - Research shareout
      - [ ] Toxic Exposure screens - Start Research Plan
      - [X] Toxic Exposure screens - Design - Updates based on Midpoint review and VBA stakeholder review
- **Analytics**
  - [X] Tech dicovery for custom tags in 526ez for Google Analytics - Engineering
  - [ ] Send data request to VBA - Research
        
- **Tech Debt**

## Sprint 9
Period - 07/06/2023 - 07/18/2023
### Sprint goals 
- **Expedited**
   - [x] Bug - Tech Discovery - Error handling for bad CSRF tokens #58396
      - Completed discovery
      - The fix is expected at the Platform level
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - Rateddisabilities
            - [ ] Release plan
              - In progress 
        - Submit 
            - [x] Abstract calls to submit endpoint
            - [x] Start endpoint migration - PPIU Abstraction
            - [ ] Document Service
               -  Picked up mid-sprint
               -  In progress
- **Features**
   - Intro page changes and 526ez current with paper form
      - [x] Intro pages - Research shareout
      - [x] Toxic Exposure screens - Research - Reconciling Midpoint Review Research Musts
      - [x] Complete 4142 tech discovery for FE - Engineering
         - Completed tech discovery
         - Pending discussion with Shannon, Matt and Jen about whether we are ready to pick this up 
- **Analytics**
  - Funnel Update
     - [x] - Updated URLs to create a funnel update ticket for DOMO
     - Collaborated with Team 2 on what requests to create 
 
- **Tech Debt**

 
## Sprint 8
Period - 06/21/2023 - 07/04/2023
### Sprint goals 
- **Expedited**
   - [x] Bug - Eng Fix - Future Date of Claim - apply validation and content updates - Completed
- **Non-negotiable**
   - eVSS to Lighthouse Migration - Engineering
        - Submit endpoint
            - [x] Abstract calls to endpoint - Started
            - [x] Complete Discovery 
        - RatedDisailities
            - [x] Integrate rateddisability ID
- **Features**
   - Intro page changes and 526ez current with paper form
      - [x] Intro pages - Conduct interviews and research report 
      - [ ] Toxic Exposure screens - Content and design
           - Design ready, Content pending CAIA response
      - [x] Complete 4142 tech discovery for BE - Engineering
      - [x] Started 4142 tech discovery for BE - Engineering
- **Collab Cycle Issues**
  - [x] Engineering - Accessibility Link opens in new tab without warning users
- **Issue Management Stretch goal?**
  - [ ] Bug - Eng Discovery - 526 start - Identification error - Issue Management POC? What kind of bandwidth do we see?
    - Moved to Team Carbs
 
## Sprint 7
Period - 06/07/2023 - 06/20/2023
### Sprint goals TBD
- **Expedited**
   - [ ] Self-Assessment Part A to BDD 526 claims - Contact center review and feature launch
   - [ ] Bug - Fix - VAMC location field optional
   - [ ] Bug - Discovery - 526 start - Identification error
- **Non-negotiable**
   - eVSS to Lighthouse Migration 
        - Wrap up discovery for testing environment solution
        - Submit endpoint
            - [ ] Abstract calls to endpoint 
        - BRD
            - [ ] Discovery - Whether EVSS is used in DisabilityCompensationFormsController (BRD)
- **Features**
   - Intro page changes and 526ez current with paper form
      - [ ] Intro pages - Research and interviews
      - [ ] Implementation for return URL as result of 526 flow changes 
      - [ ] 4142 - Tech dicovery for the proposed flow and wireframe designs
      - [ ] 4142 - Design wireframes for revised 4142
      - [ ] Review BDD SHA Staging review feedback for plan around addressing design changes
   
 
 
## Sprint 6
Period - 05/24/2023 - 06/06/2023
### Sprint goals TBD
- **Expedited**
   - [ ] Self-Assessment Part A to BDD 526 claims - staging review and contact center review - update BDD product guide
   - [ ] Bug - Fix - Identification issue - Update phone number on 526-EZ alert 
   - [ ] Bug - Fix - Required validation error not displaying for BDD Supporting Evidence
   - [ ] Bug - Design - Future Date of Claim issue fix
- **Non-negotiable**
   - eVSS to Lighthouse Migration 
        - Intent to File endpoint 
            - [ ] Integration testing with LH in dev, sandbox and staging environments 
        - Submit endpoint
            - [ ] Discovery - What would it take to migrate the endpoint
- **Features**
   - Intro page changes and 526ez current with paper form
      - [ ] Intro pages - Research and interviews
      - [ ] Research plan and screener for intro pages
      - [ ] Design for return URL as result of flow changes
      - [ ] User flow for toxic exposure screens

 

## Sprint 5
Period - 05/10/2023 - 05/23/2023
### Sprint goals TBD
- **Expedited**
   - [ ] Self-Assessment Part A to BDD 526 claims - prep for staging review and contact center review
   - [ ] Bug - Fix - BDD flow asking for past service exit date
   - [ ] Bug - Fix - Identification issue - Update phone number on 526-EZ alert
   - [ ] Bug - Discovery for making VAMC location field optional
- **Non-negotiable**
   - eVSS to Lighthouse Migration 
        - rated disailities endpoint
            - [ ] Retrieve ICN  
            - [ ] Ensure  ensure rated_disability_id is not used anywhere in the application
        - Intent to File endpoint 
            - [ ] Continue migration - Implement calls for GET and POST
            - [ ] Integration testing with LH in dev, sandbox and staging environments 
        - BRD
            - [ ] Discovery - Whether EVSS is used in DisabilityCompensationFormsController (BRD)
- **Features**
   - Intro page changes and 526ez current with paper form
      - [ ] Intro pages - Midpoint review and resulting changes
      - [ ] Research plan and screener for intro pages
      - [ ] User flow for toxic exposure screens
      - [ ] Design for including Form 4142/4142a in 526ez
      - [ ] Implement first pass of 526ez flow changes for syncing it with the paper form
   - [ ] Analytics
      - [ ] Survey Feedback Data Analysis - Part 2
 
## Sprint 4
Period - 04/26/2023 - 05/09/2023
### Sprint goals TBD
- **Expedited**
   - [ ] Implement content and design changes for adding Self-Assessment Part A to BDD 526 claims - pending content review 
   - [ ] Bug - BDD flow asking for past service exit date - Discovery for the scale of the issue and cause/fix proposal
- **Non-negotiable**
   - eVSS to Lighthouse Migration 
        - rated disailities endpoint
            - [ ] Get our Veteran Verification API credentials pushed to the higher environment and test
            - [ ] Integration testing with LH in dev, sandbox and staging environments for rateddisabilities
            - [ ] Swap out evss call at Form526RapidReadyForDecisionConcern#disabilities_not_service_connected
        - Intent to File endpoint 
            - [ ] Continue migration - Implement calls for GET and POST
        - BRD
            - [ ] Continue discovery for PCIU Address Service 
- **Features**
   - Landing page changes and 526ez current with paper form
      - [ ] Design and Content changes - Intro page
      - [ ] Accessible prototype for the Intro page
      - [ ] Research plan and screener for landing pages
   - [ ] Analytics
      - [ ] Understanding calculations behind current DOMO metrics
      - [ ] Survey Feedback Data Analysis - Part 2
 
## Sprint 3
Period - 04/12/2023 - 04/25/2023
### Sprint goals
- **Expedited**
   - [ ] Implement content and design changes for adding Self-Assessment Part A to BDD 526 claims
- **Non-negotiable**
   - eVSS to Lighthouse Migration 
        - rated disailities endpoint
            - Get our Veteran Verification API credentials pushed to the higher environment
        - Intent to File endpoint 
            - [ ] Start migration - Abstract provider calls for GET and POST
        - 526 submit workflow 
            - [ ] Technical discovery for any other endpoint not yet identified
- **Features**
   - Error messaging/validation 
      - [ ] Complete Discovery
   - 526ez current with paper form
      - [ ] Design and Content changes for items not requiring research
   - Landing page changes
      - [ ] Review of existing content research
      - [ ] Design and Content changes - start
      - Content and Design for landing page (Is this the form I need?)
   - [ ] Analytics
      - [ ] Understanding Key metric calculations
         - [ ] Number of sessions to complete
         - [ ] Satisfaction ratings
         - [ ] Others identified as useful metric for our goals

## Sprint 2
Period - 03/29/2023 - 04/11/2023
### Sprint goals
- Expedited
   - [x] Discovery and iterative plan for adding Self-Assessment Part A to BDD 526 claims
- Non-negotiable
   - React component deprecation 
        - [x] Technical Discovery for a migration plan 
   - eVSS to Lighthouse Migration 
        - BRD endpoint -> **pulled back from sprint as Cole is OOO**
            - [ ] Technical Discovery - Relationship between PCIU Address and BRD
            - [ ] Continue migration work 
        - rated disailities endpoint
             - [ ] Continue migration work  
            - Successfully code complete to the best of our knowledge
            - New ticket for testing in sandbox, staging and prod
            - Working on getting credentials for the other environments - dependency on platform team
            - Issues with LH 
        - Intent to File endpoint 
            - [x] Technical Discovery 
            - Discovery complete
            - Identified 2 calls to evss, requires 2 new migration tickets
        - [x] Common API Migration
            - [x] Technical Discovery 
            - No migration work required for 526ez flow
 - Features 
   - [x] Synthesis of call center feedback submitting claims using for 526ez form
      - Over 700 responses
      - Reviewed introduction and start page comments - about 400 responses
      - Identification error - 
         - 68 users when starting the form
         - some users saw it close to ITF expiry team
         - Created a ticket for discovery for this error
   - [ ] Discovery for error messaging/validation
      - Needs to continue into the next sprint
   - [x] Epic-stories breakdown for prioritized ideas
      - Started entering stories in the product backlog
      - Enough epics / tickets created to start a roadmap draft 
      - This will be work in progress 

## Sprint 1
Period - 03/15/2023 - 03/28/2023
### Sprint goals
- [ ] Engineering work
   - [x] Technical discovery on the future date of claim bug
         - Did not find a root cause in 526 flow
         - Identified a validation flow that would prevent future exit dates being sent for veterans
         - Need a write-up for stakeholders
   - [x] Pull a report for recent validation errors
   - [ ] rated disabilities endpoint migration
   - [x] start work on BRD endpoint migration to Lighthouse
 - [ ] Research Discovery
   - [ ] Work with stakeholders/product/team to and 
      - [x] Priortize ideas
      - [ ] Add them as user stories in the product backlog 
          -  Moved to sprint 2 as prioritization was completed by end of sprint    
   - [x] Analyze low ratings on 526 form from Domo dashboard
         -  Captured analytics not relevant to 526ez form
   - [x] Seek written responses to survery on 526ez form
         -  Got Medallia written response data from the contact center in an excel worksheet
   - [x] Start discovery on making 526ez and ancillary forms on va.gov current with paper version of the form
         -  Notes about locations that need changes
         -  Recommendations on which ancillary forms to keep in 526 flow based on discussions with IA and Forms Digitization
- [ ] Work taken on mid-work
   - [x] Front-end bug where an icon was hiding some text - Spacing/css broken on an icon
   
## Sprint 0
Period - 03/01/2023 - 03/14/2023
### Sprint goals
- [x] Complete sprint team norming and draft agreements on
   - [x] Cadence for scrum ceremonies 
   - [x] What to include/exclude for each ceremony
   - [x] Relative sizing estimates
   - [x] Definition of Ready(DoR) and Definition of Done(DoD)
   - [x] Team communication norms
   - [Team norms mural board link](https://app.mural.co/t/agilesixapplications0942/m/agilesixapplications0942/1676581509383/4d94293dcf22719dc7ba6267740466fb2f172c93?sender=u1dc3a1dc47390e0b38d61593)
- [ ] Engineering work
   - [x] Complete spike for common framework for eVSS endpoint migration with the following outcome <br>
         - Working software that can be used to implement a single endpoint migration <br>
    - [x] Identify what else is needed for endpoint migration framework <br>
    - [ ] Starting technical discovery on the date of claim bug <br>
          -  Not started 
          -  EKS migration effort was discovered mid-sprint and took priority over working on this issue
    - [ ] Do we think we have capacity/time to take on the rated disabilities endpoint migration? <br>
          -  Was a stretch goal and not pulled in
    - [x] Work taken on mid-sprint  <br>
          - EKS Migration endpoint testing in staging  <br>
 - [ ] Research Discovery
   - [x] Identify ideas for improvement for core submission as identified by existing research 
   - [x] Research around 526 form validation problem <br>
         - Researched top 5 errors based on # of occurances  <br>
         - Identified potential causes of errors and whether they are in this team's control for remediation <br>
         - Will require current data pull to understand what error types are still an issue <br>
         - Will need tickets for researching/fixing individual error types based on the new report <br>
   - [ ] Work with product/team to priortize these ideas and break them down for future work <br>
         - Not started  <br>
         - Blocker - not able to meet with PO and stakeholders to review  <br>
   - [ ] Get the ideas as user stories in the product backlog  <br>
         - Not started  <br>
         - Dependency - Review ideas from reserach dicsovery with PO and stakeholders  <br>
   - [ ] Do we think we have time/capacity to start looking at what we need from analytics?  <br>
         - Did not pull in this work 
