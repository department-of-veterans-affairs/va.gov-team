
# Care Summaries and Notes Phase 0 Rollout and Exit Criteria
Each application moving to VA.gov (e.g., Secure Messaging, Medical Records, Medications Appointments) will follow the same process defined below. 

Delineation of phases: [https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch](https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch)

Integrations needed are delinated on [Phase Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?sender=ude85bb253763b7bbdaf46656)

### Phase 0 Overview 

Application exists on VA.gov in a published, authenticated state, but can only be found if users know the URL.  
## To enter Phase 0 (Trusted Users)
- [X]  Collab cycle successfully completed and all critical and major defects addressed
- [X]  Minor and cosmetic defects have been prioritized and added to backlog
- [X] Product documentation is up to date
	- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/requirements/requirements.md#vaccines)
	- [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research)
	- [System Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Architecture%20Diagram.png)
	- [Data Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Sequence%20Diagram.png)
	- [UI/UX](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/requirements/requirements.md)
	- [User documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/MR%20on%20VA.gov_Product%20Guide_Draft.docx)
- [X] Monitoring has been set up (Analytics/Datadog)
     - [Google Analytics](https://analytics.google.com/analytics/web/#/dashboard/P-tPztN1RWeImHsoMJ63Jw/a50123418w177519031p176188361/_.useg=builtin1/)
     - [DataDog](https://vagov.ddog-gov.com/dashboard/8tk-8fe-cin/mhv-medical-records?refresh_mode=sliding&from_ts=1699377357310&to_ts=1701969357310&live=true)
- [X] Product guide created and shared with support personnel 
- [X] Support/issue reporting process and R&R has been defined
	- [X] Key team members have access to the feedback mailbox
 		- [X] Marci McGuire		
  		- [X] Bryan Riley
   		- [X] Lichelle Bain
      - [X] Roles and Responsibilities
		- We will follow the strategy documented in [MHV on VA.gov Veteran Feedback: Triaging feedback and strategizing response](https://github.com/department-of-veterans-affairs/va.gov-team/blob/93b59fbf6afdbeb85bcedb92a4945e8c30dad478/products/health-care/digital-health-modernization/mhv-to-va.gov/metrics-performance-monitoring/Triaging-Veteran-feedback-guidance.md)
  - The mailbox rotation (TBD) will also be documented in the DSVA [#mhv-medical-records](https://dsva.slack.com/archives/C03Q2UQL1AS) Slack channel.
  - Phase 0 issues and feedback will be recorded in [a log on SharePoint](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Medical%20Records/rollout/Phase%200/MR%20to%20VA.gov%20Feedback%20for%20Phase%200.xlsx?d=w2342617057e54407991f447e3315c1ae&csf=1&web=1&e=g7YRAE).
- [X] Goals and exit criteria have been established for phase 0 and agreed upon with product owner
	- Goals:
		- Real users have had an opportunity to use the application in a Production environment
  		- Users have provided feedback on any challenges or issues they encounter
    		- The delivery team has had the opportunity to monitor logs and identify any issues that were not detected during early testing
      		- The delivery team has had the opportunity to remediate show-stopper issues before we make the application available to a wider audience
  	- Exit criteria:
		- At least 25 trusted users have logged in Medical Records from the email-provided link
		- At least 10 trusted users have viewed their list of care summaries and notes
  		- At least 10 trusted users have viewed a care summary/note detail page
    		- At least 10 users have requestd a PDF of their care summary/notes.
  	     	- Any issues identified in the logs (timeouts, errors, etc) have been researched and documented
        	- Errors related to primary events are caught, have user-friendly error message in the UI, and generate Slack alerts in the appropriate channel
    			-  Server availability
         		-  Application availability
         		-  Service availability
           		-  Data refresh
             		-  Request for vaccines list, vaccine details, or PDF
      		- Any show-stopper issues have been remediated
        	- All non-show-stopper issues have been prioritized and added to the backlog
		- All other Medical Records domains have met their own Phase 0 criteria
- [X] Communications working group has prepared (and had approved)
	- [X] all necessary communication materials have been drafted & reviewed by OCC and OCTO leadership 
- [X] Change management and comms have been notified
- [X] Mobile app team has been notified / coordinated with to try to sync changes. 
- [X] Schedule and complete user acceptance testing with development team, OCTO team, Product Owner, and other necessary technical personnel
	- All use cases tested and validated in production, starting from sign-in at all entry points.
           - No defects identified.
           - Fast follow improvements noted and documented. 
	- Any risks are captured for go-no-go
           - No risks identified 
- [X] Has been reviewed by product owners and they have acknowledged that requirements have been met
	- Product owners includes the OCC product owner, OCTO product/design/engineering leads 
- [X] Has been reviewed by clinical or other SMEs and they have acknowledged that it adheres to legal and/or policy requirements, governance standards
- [X] Go/no go team has been established & go-no-go meeting scheduled. (Please work with Lauren's EA and OCC's exec team to schedule to ensure that all folks can make it). 
	- [X] Go no go agenda prepared ([see example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/Secure%20Messaging%20Go-No-Go%20Updated%20Live%2071723.docx) )
- [X] Trusted users have been identified
- [X] Go/No Go meeting conducted
	- [X] Outcomes of go-no-go documented 
- [ ] Communication has gone out to trusted users
- [ ] Communication goes out to other key audiences

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
     
- [X] Review established definition of done for MVP 

- [X] Go-no-go meeting(s) scheduled 
     - [X] After readiness & staging review 
     - [X] Accessibility is included  

- [X] Team members and go/no-go decisions are added to the product decision log  

- [X] Exit criteria for Phase 0 and entrance criteria for phase 1 agreed to by leadership 
 

### Communication  

- [X] “Try this feature” email to “trusted users” is written, approved by leadership, and set up in Gov delivery 

- [ ] Email to trusted users is shared with contact center teams and coordinators  

- [X] MHV SharePoint page announcing this shift is updated with information about phase 0 

 

### Change management  

-  Product guides developed and shared with: 

      - [X] Contact Centers 

      - [X] MHV Coordinators  

      - [X] Facility POCs
 
      - *Product guide has no changes planned until ready for Phase 1*

- [X] Demo of new tool for audiences who will be affected by Phase 0 completed  

- [X] Support staff trained

- [X] Process for handling technical / customer support issues exists 

 

### Product 

- [X] Intended product outcomes are documented and broadly communicated 

- [X] Technical instrumentation is in place to track GA 

- [X] All steps of the collaboration cycle are complete; *Per agreement with Platform team, collab cycle willl be reengaged as all domains are ready for Phase 1*

- [X] All the MUST feedback complete; *Replicating the feedback from Allergies staging review for all domains, MHV-51155*

- [X] Product documentation is reviewed by OCTO/OCC product managers & leads and determined to be complete and up-to-date 

- [X] Establish email box for the feedback loop 
 
   
# Confirm with the following teams that they are ready for rollout: 

### User feedback / research  

- [X] QA / user acceptance testing completed  

- [X] Research documented in Github 


### Accessibility 

- [X] Testing with complex cases (assistive tech users, cognitive disabilities, etc.) completed; *Confirming with Bobby that outcomes will be documented in GitHub*


### UX/UI  

- [X] Key design decisions added to decision log; *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/decision-log.md*

- [X] Design documentation & briefs are up-to-date and linked in product Github; *Bryan will check our product outline and guide in GitHub to ensure it's updated*

- [X] Breadcrumb suppressed during this phase, excluding the "Back" links when in sub-tasks; *Breadcrumbs currently contain one higher page in the hierarchy*

- [X] Feedback link is in place in design and engaged, clicking it will open a link to send a feedback email. 

- [X] Product content approved and QAd/copy edited

- [X] FAQ content reviewed and approved by OCC, business owner, and where appropriate, subject matter experts.
     - Note: This was reviewed for Allergies.

 

### Engineering  

- [X] Sign-in loads over the home page and pass next page parameter to send visitor directly to the tool after completing a successful sign on; *Happens automatically as part of platform code*

- [X] All pages/components have latest content; *All Care Summaries & Notes pages have been updated to match latest designs and content*

- [X] Unit test coverage is sufficient; *88.93% Statements, 76.8% Branches, 91.43%, 88.6% Lines*

- [X] Accessibility test coverage is sufficient (Yes - given we have tested each necessary story upon completion)


- [X] End-to-end test coverage is sufficient (Yes - given we have setep tests on each necessary story upon completion)

- [X] Functional issues resolved

- [X] Engineering information documented and stored in GitHub;

     - *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Architecture%20Diagram.png*
     - *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Sequence%20Diagram.png*
     - *https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/process/phr-refresh.md*

- [ ] A temporary redirect is available at va.gov/my-health/ back to the tool until the My health landing page
 

### Performance and Monitoring  

- [ ] Application performance SLOs exist; *MHV-52177, SLOs in preparation for Phase 1*

- [ ] Downstream services tested at 2x average load for prior 12 months; *MHV-52176, load testing in preparation for Phase 1* 

- [X] DataDog monitors exist; *MHV-51521*

- [X] Alerts exist; *MHV-51521* 

   - PagerDuty (BR-Styling in progress), will launch for all MHV products in coming weeks (2/22/24)

    - Slack 

- [ ] On-call rotation exists; *Set up notifications for that channel*

- [ ] Technical support escalation policy exists; *Marci will investigate, possibly for Phase 1*

 
### Analytics & Metrics  

- [X] Google Analytics 

    - Event tags exist 

    - Access 

    - Dashboard exists; - most reliable analytics being handled in DataDog

- [X] Domo 
    - Access 

    - Dashboard exists; *Mike will investigate*
- [X] Datadog 
     - Access 

     - Dashboard exists; *MHV-51520*

     - RUM code implemented


### Legal & Policy  

*Marci will follow up on these items*

- [ ] Application reviewed for potential legal implications 

- [ ] Application reviewed for adherence to policies 

- [ ] Application reviewed for information accuracy and patient safety 
