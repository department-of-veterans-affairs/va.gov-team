# Lab and Test Results Phase 0 Readiness

### Phase 0 Overview 

Application exists on VA.gov in a published, authenticated state, but can only be found if users know the URL.  

### Phase 0 User Access:

- User links directly to new VA.gov tool via link provided in email. 

- MHV, My VA Health, or VA.gov will not link to the tool. 

- New tool will include “return to MHV” or “return to My VA Health” links.  

- Public websites, My VA continue to point users to the MHV application. 



## Phase 0: Pre-Rollout Readiness Checklist 

For an application to enter rollout Phase 0, the following must be true: 

 

### Go/No-Go Team 

- [X] Go-no-go team established 
     
- [X] Review established definition of done for MVP 

- [X] Go-no-go meeting(s) scheduled 
     - [X] After readiness & staging review 
     - [X] Accessibility is included  

- [X] Team members and go/no-go decisions are added to the product decision log  

- [X] Exit criteria for Phase 0 and entrance criteria for phase 1 agreed to by leadership 
 

### Communication  

- [X] “Try this feature” email to “trusted users” is written, approved by leadership, and set up in Gov delivery 

- [X] Email to trusted users is shared with contact center teams and coordinators  

- [X] MHV SharePoint page announcing this shift is updated with information about phase 0 

 

### Change management  

-  Product guides developed and shared with: 

      - [X] Contact Centers 

      - [X] MHV Coordinators  

      - [X] Facility POCs 

- [X] Demo of new tool for audiences who will be affected by Phase 0 completed  

- [X] Support staff trained

- [X] Process for handling technical / customer support issues exists 

*This was all covered as part of Phase 0 launch - recommended to revisit this when going to 1% traffic*
 
### Product 

- [X] Intended product outcomes are documented and broadly communicated 

- [X] Technical instrumentation is in place to track GA
      Required DD analytics in place, will convert to GA4 as its ready

- [X] All steps of the collaboration cycle are complete
      Required Collab Cycle Phase 0 complete - as all domains are done we will go to final Collab Cycle 

- [X] All the MUST feedback complete
      See above, all MUST feedback was completed for first domain, remaining domains go prior to Phase 1 launch

- [X] Product documentation is reviewed by OCTO/OCC product managers & leads and determined to be complete and up-to-date 

- [X] Establish email box for the feedback loop
      Email box set up for all Phase 0 domains and products
 
   
# Confirm with the following teams that they are ready for rollout: 

### User feedback / research  

- [X] QA / user acceptance testing completed  

- [X] Research documented in Github 



### Accessibility 

- [X] Testing with complex cases (assistive tech users, cognitive disabilities, etc.) completed
      Ongoing accessibility testing is completed (domain by domain) - as mentioned above final staging review will happen as all domains are in Phase 0.
 

### UX/UI  

- [X] Key design decisions added to decision log 

- [X] Design documentation & briefs are up-to-date and linked in product Github 

- [X] Breadcrumb suppressed during this phase, excluding the "Back" links when in sub-tasks

- [X] Feedback link is in place in design and engaged, clicking it will open a link to send a feedback email. 

- [X] Product content approved and QAd/copy edited

- [X] FAQ content reviewed and approved by OCC, business owner, and where appropriate, subject matter experts.

 

### Engineering  

- [X] Sign-in loads over the home page and pass next page parameter to send visitor directly to the tool after completing a successful sign on  

- [X] All pages/components have latest content: _- All content is up-to-date with current designs. As new changes are made to the designs, development is implementing those as well_

- [X] Unit test coverage is sufficient _-91.41%,	92.35%,	91.65%, 80.58%_

- [X] Accessibility test coverage is sufficient _- All features requiring accessibility checks have been tested accordingly_

- [X] End-to-end test coverage is sufficient _- e2e tests have been written for all functionality that requires it_

- [X] Functional issues resolved 

- [X] Engineering information documented and stored in GitHub 

- [X] A temporary redirect is available at va.gov/my-health/ back to the tool until the My health landing page _- all links and redirects consistent with designs and other domains in Phase 0_
 

### Performance and Monitoring  

- [X] Application performance SLOs exist 

- [X] Downstream services tested at 2x average load for prior 12 months 

- [X] DataDog monitors exist 

- [X] Alerts exist 

   - PagerDuty - 

    - Slack - 

- [X] On-call rotation exists - 

- [X] Technical support escalation policy exists - 

*Same with other Phase 0 domains - should revisit when going to 1% traffic*
 
### Analytics & Metrics  

- [X] Google Analytics 

    - Event tags exist 

    - Access 

    - Dashboard exists
     

- [ ] Domo 
    - Access

    - Dashboard exists 
- [X] Datadog 
     - Access 

     - Dashboard exists 

     - RUM code implemented


### Legal & Policy  

- [X] Application reviewed for potential legal implications 

- [X] Application reviewed for adherence to policies 

- [X] Application reviewed for information accuracy and patient safety

*Completed as part of intitial collab cycle ticket*
