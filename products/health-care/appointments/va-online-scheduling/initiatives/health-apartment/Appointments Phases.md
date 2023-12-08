
# MHV to VA.gov Rollout Gates (draft)
Each application moving to VA.gov (e.g., Secure Messaging, Medical Records, Medication,s Appointments) will follow the same process defined below. 

Delineation of phases: [https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch](https://dvagov.sharepoint.com/sites/vhaccmhvtovagovcomms/SitePages/timeline.aspx#what-to-expect-in-each-phase-of-a-feature’s-launch)

Integrations needed are delinated on [Phase Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1667322271773/26b9a1c19e3d4f1dbcc1dba4e4218a56f0fbb75a?sender=ude85bb253763b7bbdaf46656)

## To enter Phase 0 (Trusted Users)
- [ ]  Collab cycle successfully completed and all critical and major defects addressed
- [ ]  Minor and cosmetic defects have been prioritized and added to backlog
- [ ] Product documentation is up to date
	- Discovery
	- Research
	- System Architecture
	- Data Architecture
	- UI/UX
	- User documentation
- [ ] Monitoring has been set up (Analytics/Datadog)
- [ ] Product guide created and shared with support personnel 
- [ ] Support/issue reporting process and R&R has been defined
- [ ] Goals and exit criteria have been established for phase 0 and agreed upon with product owner
	- Each application will have a specific target that it is looking to hit (i.e. 250 messages sent, or # interactions or transactions completed)
- [ ] Communications working group has prepared (and had approved)
	- [ ] all necessary communication materials have been drafted & reviewed by OCC and OCTO leadership 
- [ ] Change management and comms have been notified
- [ ] Mobile app team has been notified / coordinated with to try to sync changes. 
- [ ] Schedule and complete user acceptance testing with development team, OCTO team, Product Owner, and other necessary technical personnel
	- All use cases tested and validated in production, starting from sign-in at all entry points.
	- Any risks are captured for go-no-go
 	- Any risks reviewed with OCC Product Owner and OCTO team to determine if they are launch blocking. 
- [ ] Has been reviewed by product owners and they have acknowledged that requirements have been met
	- Product owners includes the OCC product owner, OCTO product/design/engineering leads 
- [ ] Has been reviewed by clinical or other SMEs and they have acknowledged that it adheres to legal and/or policy requirements, governance standards
- [ ] Go/no go team has been established & go-no-go meeting scheduled
	- [ ] Go no go agenda prepared ([see example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/mhv-to-va.gov/secure-messaging/product/Secure%20Messaging%20Go-No-Go%20Updated%20Live%2071723.docx) )
- [ ] Trusted users have been identified
- [ ] Go/No Go meeting conducted
	- [ ] Outcomes of go-no-go documented 
- [ ] Communication has gone out to trusted users
- [ ] Communication goes out to other key audiences

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
- [ ] Verify Phase 0 targets reached
- [ ] Verify Needed feature improvements have been made
	- What is "needed" is agreed upon jointly by OCC Product Owner and OCC owners, with support from OCC leadership
- [ ] Verify - Any major feature improvements have been tested and completed the collaboration cycle
- [ ] Add a URL path from MHV’s app to the new apartment app: “Hi, we’re building a new version of this application. Try it out! Give us feedback.”
- [ ] Connect Phase 1 app to MHV on VA.gov Landing page (on flipper)
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

## While the app is in Phase 1
- MHV users can still use the old app on MHV. 
- Public websites, My VA continue to point users to MHV app.
- MHV on va.gov points to the new app
- App is in left nav of MHV on va.gov  
- **Exit criteria for this phase: Cerner data is integrated into the application, and any user can see and interact with all of their cerner and vista data.**
- Communication plan and materials are defined and prepared for Phase 2 (including what, how, when, to whom info will be communicated)
- Training materials are defined and prepared for Phase 2
- Dependencies tracked (i.e. terms of use) and addressed
- Prepare any integrations and other information needed to move from 1 - 2 (i.e. content for MHV website and My VA Health, changes to va.gov)
- Ongoing work to prepare for Phase 2 integrations 
  
## Moving from Phase 1 to Phase 2
- [ ] **Verify that Cerner data is successfully integrated. Can Veterans go to the application and engage with Cerner and VistA data successfully?**
- [ ] Verify that the application is performant (lag time, data showing properly, accurately)
- [ ] Ensure that the entire architecture and APIs are detailed, documented, in LH Hub
- [ ] Establish downstream monitoring for APIs, systems 
- [ ] Delineate and test escalation pathways for triaging downstream issues.
- [ ] Partner with teams below to ensure they are ready to make any necessary changes:
	- [ ] Sitewide (VA.gov)
 	- [ ] Auth Experience (My VA)
  	- [ ] Notify / VEText
  	- [ ] Flagship mobile
  	- [ ] Platform
  	- [ ] MHV Classic
  	- [ ] EHRMIO (My VA Health)
- [ ] Review all steps in the Mural above and ensure those changes are made.
- [ ] Meet with communications working groups
- [ ] Meet with chg mgmt working group
- [ ] Meet with training teams to prepare
- [ ] Schedule and complete user acceptance testing with development team, OCTO team, EHRM, Product Owner, and other necessary technical personnel
	- All use cases tested and validated in production, starting from sign-in at all entry points.
	- Any risks are captured for go-no-go
 	- Any risks reviewed with OCC Product Owner and OCTO team to determine if they are launch blocking.
- [ ] Review completed product w product owners and they have acknowledged that requirements have been met
	- Product owners includes the OCC product owners, OCTO, EHRM, product/design/engineering leads 
- [ ] Review completed product w clinical or other SMEs and they have acknowledged that it adheres to legal and/or policy requirements, governance standards
- [ ] Go/no go team has been established & go-no-go meeting scheduled
	- [ ] For Phase 2 Go no Go should include Dev, OCC, OCTO, OEHRM, Comms, Chg Mgmt, Training. 
- [ ] Go/No Go meeting conducted
	- [ ] Outcomes of go-no-go documented 
- [ ] Communications team releases approved communication materials to key audiences 
- [ ] Training team sets up training for needed audiences
- [ ] Change management team takes any necessary steps on their change management plan
- [ ] Mobile app makes necessary changes 
- [ ] Switch is flipped
- [ ] Monitoring/tracking issues / bugs / features requests 
- [ ] Update links on public website tools pages, My VA, the MHV on va.gov LP, mobile app, and other cross-links to drive users starting on va.gov to the new version.  
- [ ] MHV on va.gov apps have a link to the OG version on MHV & Cerner for those who need it.
- [ ] My VA, PW, mobile, & apartment teams make updates.
- [ ] Monitor application

## While app is in Phase 2 
-**We can move from 2-3 fairly quickly, assuming everything is working well. Targeting giving 1 month of apps in phase 2**
- Closely monitor usage of the application
- Closely monitor analytics - are more people using MHV on va.gov than the original portals?
- Closely monitor any issues with application
- Work closely with communications, change management, and training to prepare for Phase 3 (notifying users of the MHV / My VA Health app retirement)
- Need to determine: Are we waiting til all apps are in PHase 2 to start to communicate My VA Health retirement? 

## Moving from Phase 2 to Phase 3: "the nudge" 
- [ ] Communication teams have prepared all materials, notices, etc. 
- [ ] Change management teams have prepared materials and notified all key audiences, including:
	- [ ] Senior leadership
 	- [ ] MHV Coordinators & Help Desks
  	- [ ] Councils
  	- [ ] VEO
  	- [ ] OPIA
  	- [ ] VHA / OIT Comms 
  	- [ ] Network Directors and VAMCs
  	- [ ] VSOs
  	- [ ] Congress(?) 
- [ ] Training teams are prepared to work with key audiences to train
- [ ] Add alert on MHV and My VA health: “We'll be moving to the new version on {date}.” 
	- Message may be updated to increase urgency.
- [ ] Review/revise release plan as needed
- [ ] Review product w leadership and they have acknowledged that requirements have been met
	- Product owners includes the OCC product owners, OCTO, EHRM, product/design/engineering leads 
- [ ] Review completed product w clinical or other SMEs and they have acknowledged that it adheres to legal and/or policy requirements, governance standards
- [ ] Go/no go team has been established & go-no-go meeting scheduled
	- [ ] For Phase 3 Go no Go should include Dev, OCC, OCTO, OEHRM, Comms, Chg Mgmt, Training. 
- [ ] Go/No Go meeting conducted
	- [ ] Outcomes of go-no-go documented 
- [ ] Communications team releases approved communication materials to key audiences 
- [ ] Training team sets up training for needed audiences
- [ ] Change management team takes any necessary steps on their change management plan

## During phase 3
- Closely monitor the transfer of adoption - are more users starting to use the MHV on VA.gov tool?
	- Validate with slow adopters what their barriers to adoption are.
- Closely monitor help desk, servicenow tickets, and other pain points to quickly triage
- Users can still use MHV or My VA health

## Moving from 3 -- > 4 Redirect. 
- MHV and My VA Health will redirect to MHV on VA.gov version. 
- MHV no longer points users to Cerner application. 
- VA.gov no longer provides a link to the MHV or Cerner applications.
