# Allergies Phase 0 Rollout and Exit Criteria
Each application moving to VA.gov (e.g., Secure Messaging, Medical Records, Medication,s Appointments) will follow the same process defined below. 

Delineation of phases: [https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch](https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch)

Integrations needed are delinated on [Phase Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?sender=ude85bb253763b7bbdaf46656)

## To enter Phase 0 (Trusted Users)
- [X]  Collab cycle successfully completed and all critical and major defects addressed
- [X]  Minor and cosmetic defects have been prioritized and added to backlog
- [X] Product documentation is up to date
	- [Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/requirements/requirements.md#allergies)
	- [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/research)
	- [System Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Architecture%20Diagram.png)
	- [Data Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/Medical%20Records%20Sequence%20Diagram.png)
	- [UI/UX](https://www.sketch.com/s/a7c188da-3716-494d-a11b-8b570ce78e8a)
	- [User documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/medical-records/product/MR%20on%20VA.gov_Product%20Guide_Draft.docx)
- [X] Required account activity logging (AAL) has been set up, tested, and approved by stakeholders.
- [X] Monitoring has been set up (Analytics/Datadog)
    - Basic health checks have been set up for the MHV API and the FHIR API
       - https://mhv-pr-api.myhealth.va.gov/mhvapi/v2/phrmgr/heartbeat/isalive
       - https://mhv-pr-api.myhealth.va.gov/fhir/metadata?_summary=true
- [X] Product guide created and shared with support personnel
- [X] Support/issue reporting process and R&R has been defined
	- [X] Key team members have access to the feedback mailbox
 		- [X] Marci McGuire		
  		- [X] Bryan Riley
   		- [X] Lichelle Bain
       - [X] A monthly rotation will be established for monitoring the mailbox.  Where possible, rotation assignments should align with rotations on other mailboxes; in other words, if someone is monitoring the mailbox for SM in November, and is also part of the Medical Records rotation, they should be assigned on the month to minimize rotation frequency.
       		- [X] October/November: Marci
         	- [ ] December: 
         	- [ ] January:
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
		- At least 25 trusted users have logged into the Allergies page from the email-provided link
		- At least 10 trusted users have viewed their list of allergies
  		- At least 10 trusted users have viewed an allergy detail page
  		- At least 10 users have requested a PDF of their allergies list
    		- At least 10 users have requestd a PDF of their detailed allergies
      		- Any issues identified in the logs (timeouts, errors, etc) have been researched and documented
        	- Errors related to primary events are caught, have user-friendly error message in the UI, and generate Slack alerts in the appropriate channel
    			-  Server availability
         		-  Application availability
         		-  Service availability
           		-  Data refresh
             		-  Request for allergies list, allergy details, or PDF
      		- Any show-stopper issues have been remediated
        	- All non-show-stopper issues have been prioritized and added to the backlog
		- All other Medical Records domains have met their own Phase 0 criteria
- [X] Communications working group has prepared (and had approved)
	- [X] all necessary communication materials have been drafted & reviewed by OCC and OCTO leadership
- [X] Change management and comms have been notified
- [X] Mobile app team has been notified / coordinated with to try to sync changes.
- [X] Schedule and complete user acceptance testing with development team, OCTO team, Product Owner, and other necessary technical personnel
	- All use cases tested and validated in production, starting from sign-in at all entry points.
		- No defects identified 
	- Any risks are captured for go-no-go
		- No risks identified 
 	- Any risks reviewed with OCC Product Owner and OCTO team to determine if they are launch blocking.
- [X] Has been reviewed by product owners and they have acknowledged that requirements have been met
	- Product owners includes the OCC product owner, OCTO product/design/engineering leads 
- [X] Has been reviewed by clinical or other SMEs and they have acknowledged that it adheres to legal and/or policy requirements, governance standards
- [X] Go/no go team has been established & go-no-go meeting scheduled. (Please work with Lauren's EA and OCC's exec team to schedule to ensure that all folks can make it). 
	- [ ] Go no go agenda prepared ([see example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/Secure%20Messaging%20Go-No-Go%20Updated%20Live%2071723.docx) )
- [X] Trusted users have been identified
- [X] Go/No Go meeting conducted - scheduled for 10/23/2023
	- [X] Outcomes of go-no-go documented 
- [X] Communication has gone out to trusted users
- [X] Communication goes out to other key audiences

## While the app is in phase 0: Trusted Users
- Application exists in a published, authenticated state, but can only be found if users know URL.
- Public websites, My VA continue to point users to MHV app or My VA Health app. 
- A select group of trusted users is invited to try the MHV application on VA.gov. (mobile model) 
- Provide dedicated feedback channels and [follow protocol for monitoring, responding, and logging issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/metrics-performance-monitoring/Triaging-Veteran-feedback-guidance.md) 
- Team to address bugs quickly
- Dev team to incorporate suggestions into backlog & future sprints.
- Dev team to address any top-line feature or API improvements needed to move from MVP to Phase 1
- Communication plan and materials are defined and prepared for Phase 1 (including what, how, when, to whom info will be communicated)
- Training materials are defined and prepared for Phase 1
- Dependencies tracked (i.e. terms of use) and addressed
- Prepare any integrations and other information needed to move from 0 - 1 (i.e. content for MHV website, integration with the MHV on va.gov home page and left nav)
- Ongoing work to prepare for Phase 2 integrations 
  
## To move from Phase 0 to Phase 1: "Try Me"
- [X] Verify Phase 0 targets reached
- [ ] Verify that the historical vs. observed field provides value to Veterans via targeted research.
- [ ] Verify Needed feature improvements have been made
	- What is "needed" is agreed upon jointly by OCC Product Owner and OCC owners, with support from OCC leadership
- [ ] Verify - Any major feature improvements have been tested and completed the collaboration cycle
- [ ] Add a URL path from MHV’s app to the new apartment app: “Hi, we’re building a new version of this application. Try it out! Give us feedback.”
- [ ] Review Mural above to ensure all other connections have been made
- [ ] Check with identity and access teams to review pathways into application are not blocked
- [ ] Meet with communications, change management, training groups to give demos and to ensure materials are ready.
- [ ] Meet with mobile app to sync features, APIs, etc. 
- [ ] Schedule and complete user acceptance testing with development team, OCTO team, Product Owner, and other necessary technical personnel
	- All use cases tested and validated in production, starting from sign-in at all entry points.
	- Any risks are captured for go-no-go
 	- Any risks reviewed with OCC Product Owner and OCTO team to determine if they are launch blocking.
- [ ] Review completed w product owners and they have acknowledged that requirements have been met
	- Product owners includes the OCC product owner, OCTO product/design/engineering leads 
- [ ] Review completed w clinical or other SMEs and they have acknowledged that it adheres to legal and/or policy requirements, governance standards
- [ ] Communications working group has prepared (and had approved)
	- [ ] all necessary communication materials have been drafted & reviewed by OCC and OCTO leadership 
- [ ] Change management have been notified
- [ ] Training team have been notified  
- [ ] Go/no go team has been established & go-no-go meeting scheduled
	- [ ] For Phase 1 Go no Go should include Dev, OCC, OCTO, OEHRM, Comms, Chg Mgmt, Training. 
- [ ] Go/No Go meeting conducted
	- [ ] Outcomes of go-no-go documented 
- [ ] Communications team releases approved communication materials to key audiences 
- [ ] Training team sets up training for needed audiences
- [ ] Change management team takes any necessary steps on their change management plan
- [ ] Mobile app makes necessary changes 
- [ ] Switch is flipped
- [ ] Monitoring/tracking issues / bugs / features requests 

