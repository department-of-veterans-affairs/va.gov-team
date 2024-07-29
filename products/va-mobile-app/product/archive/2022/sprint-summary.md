# [Archive] VA Mobile team - Sprint accomplishments

Sprint planning and goals are tracked in [here](https://docs.google.com/presentation/d/1MhoKC0TvIDm2EduL2rjlkwIfSZo9XrbUTnNi5CNYdPY/edit#slide=id.gf176c31818_0_0)


## Sprint: 2/16/22 - 3/1/22

- Identity - Login.gov
  - Backend: Versioned mobile user endpoint to account for login.gov & ID.Me when considering MFA
  - Conducted Login.gov UAT

- Payment History 
  - Backend:  
    - Addressed missing date bug (captures payments with nil date and logs their occurrences)
    - Logging added to track success & failures
 - Frontend:  View Payment history development complete

- Redesign - IA and Navigation
  - Prepped and submitted research plan for closed card sort (unmoderated testing improvements)
  - Conducted comparative of analysis of navigation models and draft report
  - Appointments
  - Completed backend for pending appointments list and details

- TLC and Maintenance
  - Fixed bug causing Appeals Details page to crash
  - Addressed sentry error related to appt pre-caching for at home video appt’s
  - Completed Redux state mutation audit
  - UX: 
    - Audit, style guide rule, and button casing fix
    - Begin use of CTA interaction patterns 
    - Draft of haptic feedback recommendations
    - Enabled Firebase analytics & performance in staging
    - Claims refinement - file upload complete


## Sprint: 2/2/22 - 2/15/22

- Identity
   - Login.gov user testing kicked off this week

- Vaccine Records 
  - Manufacturer name is now retrieved from LH
  - Fix duplicate vaccine records

- Payment History 
  - Completed endpoint to return payment history (wired up route & controller)

- Appointments
  - Backend completed add pending appointments to list view 
  - Finalized definition for cancel flow & designs

- Bug(s)
  -Backend: Fixed blank lines above signature on draft messages 

- TLC and Maintenance
  - Fix chrome debugger on Android
  - Spike Analysis on level of effort to remove fax & gender fields from profile (front-end)
  - Front-end refactoring
  - Completed Claims refinement UX/engineering hand-off
  - Created common component in claims for photo buttons 
  - Started ticketing TLC UX tasks 
  - TLC tasks: Screen Round up
  - Documented UI Design & Sketch Management process



## Sprint: 1/19/22 - 2/1/22

- Dark Mode
  - Testing phase complete and ready for prod release 2/15

- Appointment Scheduling
  - Pending appointment flow finalized, designs reviewed by FE team, FE tickets written, BE discovery completed

- Payment History
  - Completed Payments designs, designs reviewed by FE team, BE implementation started

- TLC & Maintenance
  - Completed Redux Toolkit refactor & validation
  - Defined an improved directory structure for the app (find files, stay organized, etc)
  - Version dependency updates (patch, minor, major)
  - Fixed update/time format for messages

- Vaccine Records 2.0
  - Implemented Metrics to track missing Date/CVX Code
  - Dev complete in setting group name from Lighthouse 


## Sprint: 1/5/22 - 1/18/22

- Dark Mode
  - Design sign-off received for Dark Mode build 
  - Completed regression testing on Dark Mode build, going to begin regression testing on full build next 

- Identity
  - Completed IAM beta integration testing in INT & SQA environments 

- Redesign
  - Designated a replacement for PM, started onboarding new folks on the project, and will have a second round of wireframes based on feedback.

- RX Refill
  - Wrapped up research report 

- Appointments 
  - Held feature overview & initial feasibility discussions for Pending Appointments with the team
  - Completed BE investigation on VAOS v.2 endpoints, began BE discovery on appointment requests
  - Continuing BE missing facility + error investigation

- Payment History
  - Held feature overview  & completed feasibility discussions for Payments with the team, moving forward with PO review and finalizing back-end infrastructure

- Vaccine 2.0
  - Implemented pagination (1/18 release)

- Demo Mode Updates
  - Updated user name, show unread message indicator for unread messages, and fixed log out issue
  - Disability Ratings feature added

- TLC & Maintenance (Keeping the app going)
  - Fixed ‘Can’t find variable: snackbar’ issue
  - Fixed accessibility bug in edit draft flow to announce save and delete buttons

- Fixed biometrics analytics
  - Migrated alerts to DataDog 
  - Fixed appointment & push notification errors in Sentry reporting 
  - Fixed incorrect display of mailing address in letters flow (Sev 2 bug) 
  - Wireless keyboard known issues documentation

## Sprint: 12/22/21 - 1/4/22

- Vaccine Records 2.0 
  - Implemented metrics to track missing date/CVX codes  and CDC job success and failures
  - Swagger documentation created for V1 immunization enpoint

- Identity
  - Completed IAM certification refresh
  - Completed testing of IAMSessionManager
  - Test Plan completed

- Dark Mode
  - Changes made for Secure Messages 
  - Modified red error state text, field borders, action background buttons to be accessible

- Tech/Design Debt Maintenance
  - Fixed automation bug ‘Couldn’t find key P8 file at path ‘AppStoreConnectKey.P8’
  - Fixed sort issue for vaccine records to sort by recency/chronologically
  - Radio button removed on address confirm flow when a suggestion is not avail 



## Sprint: 12/8/21 - 12/21/21

- View Vaccine Records
  - Vaccine manufacturer work complete and added Vaccine Records to Demo Mode

- Redesign
  - Held UX personalization wireframe meeting
  - Synthesized round one feedback for picking back up in Jan
  - UX team started EOY design exploration exercise
  - Overflow menu a11y investigation 
  - Dark Mode changes 

- Design & Tech Debt/Maint
  - Updated research in VA Platform repo 
  - Started updating all symbols in Sketch for dark mode system

- Documentation site
  - UX: finished first draft of site pages
  - Backend:  Documentation added for Grafna, Alerts, & Datadog dashboards

- Bugs
  - Addressed screen reader accessibility issues 



## Sprint: 11/24/21 - 12/7/21

- View Vaccine Records
  - Vaccine manufacturer design, BE development complete
  - Completed another round of vaccine incomplete state design work (implementation to be deprioritized and put in the backlog)

- Identity
  - Validated Login.gov implementation, attributes are returning as expected
  - Direct Deposit:  Backend dev complete added direct deposit mfa flags

- Enhanced Demo Mode
  - Completed Enhanced Demo Mode by adding data for Vaccine & Community Care appts, and Legacy Appeal

- Tech/Design Debt & Maintenance
  - Fixed date time zone issue display for benefits & summary letter (Sev 2)
  - Documentation site - continuing to build our pages and draft content

- Dark Mode
  - Completed v.1 implementation, reviewed and listed styling changes, began implementing changes 

- Redesign 
  - Personalization wireframes ready for UX meeting and tree-testing materials drafted for future

- Secure Messaging Refinements

  - Added ability to Move messages into folders, updated “Trash” with folder capabilities to match VA.gov functionality 

- RX Refill
   - Alex held user research sessions for RX Refill


## Sprint: 11/10/21 - 11/23/21

- View Vaccine Records
  - Vaccine Records MVP released to production on 11/23 
  - Began work on vaccine 2.0

- Co-Design & Redesign
  - Implemented v.1 of Dark Mode 
  - IA readout session held on 11/18
  - Draft of IA structure for user testing
  - Team held brainstorming session for personalization
  - Started personalization wireframes

- Secure Messaging Refinements
  - Completed designs for delete single secure message draft and hand off to engineering
  
- Push Notifications - Appointments
  - Released to production on 11/23 

- Analytics
  - Claims file upload utilization event created to track ….
  - Implemented tracking of accessibility features large text and screen reader

- Tech/Design Debt & Maintenance
  - Implemented ability to log into Demo Mode on Android, revise login on iOS 
  - Completed Demo Mode P1 tickets (secure messaging inbox, claims stage 4)
  - Fixed immunization prod nile note field bug
  - Progress made towards documenting on-call procedures 
  - Fixed crashing issues when adding appointments to a calendar & uploading or adding photos in claims 

- Documentation Sites
  - Initial setup completed
  - Back-end - Identified and created site map for information that will be included in the initial structure

- Rx Refill
  - Met with Kathy & Nancy to review the research plan
  - Usability testing plan submitted



## Sprint: 10/27/21 - 11/9/21
- View Vaccine Records
  - Development for MVP complete (scheduled for 11/23 release!)
  - Covid IA homepage changes complete 
    - Updates made to the homescreen making it easier to distinguish between passive Covid content and personal COVID vaccine details

- Co-Design & Redesign
  - IA research synthesis completed 
  - HIG & Material components for confirmation added to the design system
  - Completed initial personalization discovery (comparative analysis, research roundup) 
  - Dark mode handed off to engineering

- Push Notifications - Appointments
  - On target for 11/23 release
  - Completed Appt Push Notifications development (minor updates needed in order to merge) 
  - Extended survey from Appt 

- Tech/Design Debt & Maintenance
   - Completed DataDog Migration for alerts



## Sprint: 10/13/21 - 10/26/21

- Vaccine Records
  - Error state designs complete
  - Received green light on the path forward for MVP data structure display
  - Backend development started
  - Screenshots submitted for content review
- Redesign, Co-Design & Research
  - Conducted 9 user research sessions
  - Added new and modified action sheets (delete phone & remove address)
- Tech/Design Debt
  - Dashboards were recreated in staging for DataDog migration
  - Display of Cerner messaging complete 
  - Fixed Sev 2 bugs related to receiver name display within secure messaging flow (save & remove attachments)
  - Documentation/Component Library discovery complete and setup started
- Secure Messaging Refinements
  - Designs completed for move messages
- RX Refill
  - Research plan created and documented in Github



## Sprint: 9/29/21 - 10/12/21
- Vaccine Records
  - Created wireframe(s) for displaying immunization data
  - Conducted technical prototyping (test Lighthouse API)
  - Started mocking up flow in front end 
- Appointments
  - Display reason for an appointment (user entered)
  - Showing appointment type with icons (camera & phone) 
- Mobile Refinements
  - Secure messaging action sheet confirmation
  - Draft message no longer persistent 
Co-Design & Research
  - Preparation for upcoming research sessions 

## Sprint: 9/15/21 - 9/28/21

- Discovery on immunization records
- Wrapping up dark mode
- Created Codesign/IA research plan
- IAM bug fix deployed
- New iOS and Android dependency work
- Coordination with VEText on Appointment Push Notifications
- Immunization Records technical discovery
- Immunization record comparative analysis
- Beginning Google Analytics dashboards
