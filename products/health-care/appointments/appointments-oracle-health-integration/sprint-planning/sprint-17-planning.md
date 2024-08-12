## VetsAPI Sprint 17 Planning
Sprint 17: 7/30/24 - 8/12/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Brittany at PMR meeting 8/13 - 8/14; PTO 8/15, 8/16, 8/19

## 📣 Announcements
* Cerner-Location-Service was deployed to prod 7/18/24
* stop-codes-service was deployed to prod 8/8/24

## 🏆 Overarching Goals
* 🔴 Appointment Cancellation
* 🟢 Appointment Requests
  * 🟩 Add support for routing appointment requests to VetsAPI Patient Gateway
  * 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites 
* 🔵 Direct Scheduling
  * 🟦 Support Oracle Health slot search
  *  🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites
* 🟠 Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
* 🟣 Testing/Admin/Operational Support
 
## 📋 Previous Sprint Summary:
In Sprint 16, the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
  * 🚧[#88472 CES-384: VPG: Support creation of booked Appointments in OH](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88473)
  * 🚧[#82552 VetsAPI: Expose location, practitioner, and clinic info on Slot search responses](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/82552)
* #### Backend support to build Clinical Encounter Service to extend VAOS with Oracle Health write-back capabilities:
   * [#89362 ces-316 CES: Forward appointment searches to correct EHR based on search parameters](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89632)
   * [#89613 CES-629 CES: Determine EHR for incoming search appointment requests](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89631)
   * [#89958 CES-782 VPG: Create VFA client and relationships retrieval method](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89958)
* #### Backend support for Oracle Health to enable appointment cancellations
   * [#89614 CES-527 VPG: Add vaos and cerner Appointment mixed test cases](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89614)
   * 🧗‍♀️[#89725 CES-788: VPG: implement additional CFA patch exception handling](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89725)
* ### Testing/Admin/Operational Support
   * * [#89613 CES-696 Convert VPG to have flexline configuration built in](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89613) 
  * [#89580 CES- 778 VPG: Investigate appointment search performance issues](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/89580)
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * 🧗‍♀️[#90378 CES-818 CES: Add support for _id search parameter](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90378)
* 🔴 Appointment Cancellation

* 🔵 Direct Scheduling
  * [#88455 CES-633 VPG: Return patient clinic relationships](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88455)
* 🟣 Testing/Admin/Operational Support
   
## ✈️ Planned Releases
