## VetsAPI Sprint 18 Planning
Sprint 18: 8/27/24 - 9/9/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Labor Day 9/2/24 
* Brittany PTO 9/5 & 9/6

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
 * [#88455 CES-633 VPG: Return patient clinic relationships](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88455)
  * [#90368 CES-790 VPG: Remove Identifier payload from converted FHIR appointment](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90368)
  * [#90596 CES-839 VPG: Update filters for cerner relationships search](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90596)
  * [#90591 CES-843 VPG: Add missing slot search test cases](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90591)
  * [#90580 CES-849 VPG: Remove sources array from relationships endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90580)
   * Clinical Encounter Service (CES) was updated to determine where an incoming appointment search should be sent. Looking at the passed search parameters determines whether to send to either Cerner, Vista, or both. 
   * CES added support for EHR specific search parameters and properly shows an error when a request has conflicting search parameters. 
   * VetsAPI Patient Gateway was updated to create a vista fhir adapter client and relationship retrieval method. Now developers can retrieve Vista relationships for a patient. 
* #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities 
   *  [#90378 CES-818 CES: Add support for _id search parameter](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90378)
   * [#90578 CES-669 VPG: Replace mockserver with wiremock](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90578)
   * [#90607 CES-620 Prevent double read call to EHRs for appointment reads](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90607)

 
## 🏆 Sprint Goals and Stories
 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   *
* 🔵 Direct Scheduling
  * 🚧[#90599 CES-559 VPG: Enforce CTPS policy relationships restrictions during self-scheduling](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90599)
  * 🚧 [#90606 VetsAPI: Add relationships endpoint](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90606)
* 🟦 Support Oracle Health slot search
  * 🚧 [#91355 CES-841 CES 841: Support Slot search parameters specific to EHR](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/91355)
 
   
## ✈️ Planned Releases
