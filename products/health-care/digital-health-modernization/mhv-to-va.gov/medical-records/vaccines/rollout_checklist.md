# Vaccines Phase 0 Rollout and Exit Criteria
Each application moving to VA.gov (e.g., Secure Messaging, Medical Records, Medications Appointments) will follow the same process defined below. 

Delineation of phases: [https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch](https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch)

Integrations needed are delinated on [Phase Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?sender=ude85bb253763b7bbdaf46656)

### Phase 0 Overview 

Application exists on VA.gov in a published, authenticated state, but can only be found if users know the URL.  

### Phase 0 User Access:

- User links directly to new VA.gov tool via link provided in email. 

- MHV, My VA Health, or VA.gov will not link to the tool. 

- New tool will include “return to MHV” or “return to My VA Health” links.  

- Public websites, My VA continue to point users to the MHV application. 

*Currently, all pages are available in production (with mock data) if a user knows the URL, however we have a fix for this that will be implemented soon.*


## Phase 0: Pre-Rollout Readiness Checklist 

For an application to enter rollout Phase 0, the following must be true: 

### Go/No-Go Team 

- [X] Go-no-go team established 
     
- [ ] Review established definition of done for MVP 

- [ ] Go-no-go meeting(s) scheduled 
     - [ ] After readiness & staging review 
     - [ ] Accessibility is included  

- [ ] Team members and go/no-go decisions are added to the product decision log  

- [ ] Exit criteria for Phase 0 and entrance criteria for phase 1 agreed to by leadership 
 

### Communication  

- [ ] “Try this feature” email to “trusted users” is written, approved by leadership, and set up in Gov delivery 

- [ ] Email to trusted users is shared with contact center teams and coordinators  

- [ ] MHV SharePoint page announcing this shift is updated with information about phase 0 

 

### Change management  

-  Product guides developed and shared with: 

      - [ ] Contact Centers 

      - [ ] MHV Coordinators  

      - [ ] Facility POCs
 
      - *Product guide has no changes planned until ready for Phase 1*

- [ ] Demo of new tool for audiences who will be affected by Phase 0 completed  

- [ ] Support staff trained

- [X] Process for handling technical / customer support issues exists 

 

### Product 

- [ ] Intended product outcomes are documented and broadly communicated 

- [ ] Technical instrumentation is in place to track GA 

- [X] All steps of the collaboration cycle are complete; *Per agreement with Platform team, collab cycle willl be reengaged as all domains are ready for Phase 1*

- [X] All the MUST feedback complete; *Replicating the feedback from Allergies staging review for all domains, MHV-51155*

- [ ] Product documentation is reviewed by OCTO/OCC product managers & leads and determined to be complete and up-to-date 

- [X] Establish email box for the feedback loop 
 
   
# Confirm with the following teams that they are ready for rollout: 

### User feedback / research  

- [ ] QA / user acceptance testing completed  

- [ ] Research documented in Github 


### Accessibility 

- [ ] Testing with complex cases (assistive tech users, cognitive disabilities, etc.) completed; *Confirming with Bobby that outcomes will be documented in GitHub*


### UX/UI  

- [X] Key design decisions added to decision log; *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/decision-log.md*

- [ ] Design documentation & briefs are up-to-date and linked in product Github; *Bryan will check our product outline and guide in GitHub to ensure it's updated*

- [X] Breadcrumb suppressed during this phase, excluding the "Back" links when in sub-tasks; *Breadcrumbs currently contain one higher page in the hierarchy*

- [X] Feedback link is in place in design and engaged, clicking it will open a link to send a feedback email. 

- [X] Product content approved and QAd/copy edited

- [X] FAQ content reviewed and approved by OCC, business owner, and where appropriate, subject matter experts.
     - Note: This was reviewed for Allergies.

 

### Engineering  

- [X] Sign-in loads over the home page and pass next page parameter to send visitor directly to the tool after completing a successful sign on  

- [X] All pages/components have latest content; *MHV-52038, waiting on https://github.com/department-of-veterans-affairs/vets-website/pull/26859*

- [X] Unit test coverage is sufficient 

- [ ] Accessibility test coverage is sufficient; *PR to update tests: https://github.com/department-of-veterans-affairs/vets-website/pull/26895*


- [ ] End-to-end test coverage is sufficient; *Needs additional attention* 

- [ ] Functional issues resolved; *Confirm that vaccines MHV/FHIR work has been deployed to prod* 

- [X] Engineering information documented and stored in GitHub;

     - *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Architecture%20Diagram.png*
     - *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Sequence%20Diagram.png*
     - *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/process/phr-refresh.md*

- [ ] A temporary redirect is available at va.gov/my-health/ back to the tool until the My health landing page; *Marci is investigating this item*
 

### Performance and Monitoring  

- [ ] Application performance SLOs exist; *MHV-52177, SLOs in preparation for Phase 1*

- [ ] Downstream services tested at 2x average load for prior 12 months; *MHV-52176, load testing in preparation for Phase 1* 

- [X] DataDog monitors exist; *MHV-51521*

- [ ] Alerts exist; *MHV-51521* 

   - PagerDuty 

    - Slack 

- [ ] On-call rotation exists; *Set up notifications for that channel*

- [ ] Technical support escalation policy exists; *Marci will investigate, possibly for Phase 1*

 
### Analytics & Metrics  

- [ ] Google Analytics 

    - Event tags exist 

    - Access 

    - Dashboard exists; *Bryan will investigate w/ Anne*

- [ ] Domo 
    - Access 

    - Dashboard exists; *Mike will investigate*
- [ ] Datadog 
     - Access 

     - Dashboard exists; *MHV-51520*

     - RUM code implemented


### Legal & Policy  

*Marci will follow up on these items*

- [ ] Application reviewed for potential legal implications 

- [ ] Application reviewed for adherence to policies 

- [ ] Application reviewed for information accuracy and patient safety 
