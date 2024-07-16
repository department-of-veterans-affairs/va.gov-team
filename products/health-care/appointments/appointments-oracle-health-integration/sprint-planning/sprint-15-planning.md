## VetsAPI Sprint 15 Planning
Sprint 14: 7/16/24 - 7/29/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Clayton 7/16
* Devin 7/16-7/17
* Drew PTO 7/17 - 7/19; 7/22-7/24
* Clayton 7/26; 7/29 - 7/30
* Brittany at PGHD meeting 7/23-7/24

## 📣 Announcements
* Cerner-Location-Service will be being deployed to prod. This is a dependency for VetsAPI Patient Gateway

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟣 Testing/Admin/Operational Support
 
## 📋 Previous Sprint Summary:
In Sprint 14, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health routing appointment requests to VetsAPI Patient Gateway for appointment requests
  * check this 
  * [#87483 CES-610: VPG: Return last seen date for each patient relationship](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87483) 


* #### Backend support to build VetsAPI Patient Gateway to extend VAOS with Oracle Health write-back capabilities: 
   *  * check these
   * [#87491 CES-627 CES: Replace SAS vista appointment types with VFA vista appointment types](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87491)
  * [#87314 CES-621: VPG: Update dependency deployment artifacts to latest available versions](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87314)
  * [#87332 CES-485: VPG: migrate scheduling config calls from MFS to clinic-scheduling-config-service](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87332)
  * [#84516 CES-564: VPG: Replace VAOS proxy calls with dedicated client](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/84516)
  * [#87372 CES-611: VPG: Update to pull Location data from Identifier](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87372)

   
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * [#88355 CES-636 VPG: Return the Appointment.patientInstruction field from Oracle Health](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88355)
  * [#87492 CES-372 CES: Reenable and support rule for Vista Appointment Type validation](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/87492)
  * [#88474 CES-628 CES: Implement caching for config-service calls](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88474)
* 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * [#88427 CES-563 VPG: add configuration property for relationship search cache TTL](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88427)
* 🔵 Direct Scheduling
  * [#88472 CES-384: VPG: Support creation of booked Appointments in OH](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88473)
  * [#82552 VetsAPI: Expose location, practitioner, and clinic info on Slot search responses](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82552)
* 🟣 Testing/Admin/Operational Support
  * [#88480 VPG: Test proposed appointment creations](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88480)
  * [CES-643 CES: Start creating implementation guide](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/zh/463)
   


## ✈️ Planned Releases
None
