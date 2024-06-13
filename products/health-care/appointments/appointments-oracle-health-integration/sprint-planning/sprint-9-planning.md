## VetsAPI Sprint 9 Planning
Sprint 9: 4/23/24 - 5/6/24

## 📅 Upcoming Dates

## 📣 Announcements
CTO slack channel: appointments-oracle-health-integrations
Post any DSU updates if you are unable to attend

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟣 Testing/Admin
 
## 📋 Previous Sprint Summary:
This sprint, we implemented VetsAPI support for creating new appointment requests at Oracle Health sites, including modifying the CES infrastructure to include business rules specific to Appointment creation.  Additionally, we upgraded the VetsAPI Patient Gateway (VPG) to refresh Oracle Health site configuration information at configurable intervals, which will serve to improve the reliability of our data.  The CES component was modified with a new endpoint that returns valid appointment cancellation reasons by site, and the documentation needed for production deployment was completed and submitted for review.  Lastly, a document detailing the business rules governing the cancellation of Appointments was created and uploaded to the `appointments-oracle-health-integration` github team area.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * 🚧 🐞 [#81231 CES-404: Investigate Cerner search occasional test failure](https://issues.mobilehealth.va.gov/browse/CES-404) - in progress
  * [#81339 CES-427: VPG: Migrate to Mobile Framework V2](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81339)
  * [#81432 CES-318 CES: migrate to mobile-framework v2](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81432) 
* 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * [#81348 Research options for adding mock appointment data to CES](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81348) 
* 🟢 Appointment Requests
  * [#81032 CES-415 VPG: add facility classification check to appointment creation ](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81032)
  * [#81349 CES-428 VPG: Update mapping to not set ID for VAOS appointments](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81346)
* 🟩 🟦 SUB-GOAL Eligibility
  * [#81431 CES-423 CES: determine patient appointment eligibility at OH facility](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81431)
  * [#81345 CES-390 VPG: Implement Cerner patient validation for eligibility checks](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81345) 
* 🔴 Appointment Cancellation
  * [#81438 ces-312: VPG: Allow cancellation of non-VAOS care types](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/81438) 
  
## ✈️ Planned Releases
None
