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
  * VetsAPI Patient Gateway currently returns HTTP 400 for appointment creations with status of 'BOOKED'. This filter was removed and tests were added to ensure that booked appointments can be created using VPG. 
  * For VetsAPI consuming services, we exposed location, practitioner, and clinic information on slot search responses to make sure it is consistent with the return values from VAOS-service. 
* #### Backend support to build Clinical Encounter Service to extend VAOS with Oracle Health write-back capabilities:
   * Clinical Encounter Service (CES) was updated to determine where an incoming appointment search should be sent. Looking at the passed search parameters determines whether to send to either Cerner, Vista, or both. 
   * CES added support for EHR specific search parameters and properly shows an error when a request has conflicting search parameters. 
   * VetsAPI Patient Gateway was updated to create a vista fhir adapter client and relationship retrieval method. Now developers can retrieve Vista relationships for a patient. 
* #### Backend support for Oracle Health to enable appointment cancellations
   * Additional testing was added to VetsApi Patient Gateway (VPG). Integration test scenarios now include all types of appointment data and brand and line code coverage is now at 100% 
   * VPG implemented additional Cerner Fhir Adapater (CFA) patch exception handling to assist with troubleshooting of unexpected errors that could be returned from CFA. 
* ### Testing/Admin/Operational Support
   * As part of the MAP environment, all services are required to have flexline scans. VetsAPI Patient Gateway was updated to have the flexline configuration built in. This is required before initial prod release.  
   * Investigations were made into why VetsAPI Patient Gateway appointment searches were taking longer than Cerner Fhir Adapater and VAOS component searches. ADD WHAT WE DISCOVERED HERE 
 
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🟡 Build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
   * 🧗‍♀️[#90378 CES-818 CES: Add support for _id search parameter](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/90378)
* 🔴 Appointment Cancellation

* 🔵 Direct Scheduling
  * [#88455 CES-633 VPG: Return patient clinic relationships](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/88455)
* 🟣 Testing/Admin/Operational Support
   
## ✈️ Planned Releases
