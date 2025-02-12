## VetsAPI Sprint 26 Planning
NEW Sprint 26: 2/05/25 - 2/18/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * President's Day 2/17
    
## 📣 Announcements
* A6 has changed the cadence of sprint plannings. We closed sprint 26 on 12/31 and to get in sync with other teams we will be starting sprint 24 on 1/2. New cadence will be:
  * Sprint 25: 1/22/25 to 2/4/25
  * Sprint 26: 2/5/25 to 2/18/25
  * *Please note the numbers of the sprints have changed. This is to align us with other teams so we will start 2025 fresh with sprint 24*

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
* 🟤 VetsAPI Logic Integration Support
* ⚫️ Community Care - this work is being done by Devin working with the CIE team 
   
## 📋 Previous Sprint Summary:
In Sprint 24 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Appointment Requests
  * VetsAPI Patient Gateway updated Cerner appointment source filtering by removing source filters from VaosClient.java and implementing manual filtering of Cerner appointments.
* #### VetsAPI Logic Integration Support
  * Migrated existing logic for past appointments from the web application to the VetsAPI layer, ensuring better maintainability and system consistency.
* #### Community Care
  * VetsAPI Patient Gateway introduced a new route, updating the AppointmentsController#create method to enable appointment creation within EPS.
* #### Testing/Admin/Operational Support
  * VetsAPI Patient Gateway implemented additional tests to cover conditions related to asynchronous appointment searches that were previously untested.
  * Clinical Encounter Service updated the SQA version to reflect enhanced functionality and ensure compatibility with the latest system updates.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started; ⚠️ Removed from sprint 

* 🟤 VetsAPI Logic Integration Support
   * [VPG-306 VPG: Move any existing logic for when to show join video link to vets-api](https://issues.mobilehealth.va.gov/browse/VPG-306)
   * [VPG-307 VPG: Move logic for handling partial api responses and errors to vets-api](https://issues.mobilehealth.va.gov/browse/VPG-307)
* 🔵 Direct Scheduling
   * [CES-1299 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1299)
* ⚫️ Community Care - this work is being done by Devin working with the CIE team
   * 🚧 [VPG-318 CC: Add request specs for AppointmentsController#create_draftmethod #101428](https://issues.mobilehealth.va.gov/browse/VPG-318)
   * [VPG-324 CC: Implement GET /appointments/{appointment_id} for a specific EPS appointment](https://issues.mobilehealth.va.gov/browse/VPG-324)
* 🟣 Testing/Admin/Operational Support
   * [CES-1509 CES: SQA: Continued CES testing](https://issues.mobilehealth.va.gov/browse/CES-1509)
   * [VPG-323 Update VPG to the latest dependency versions](https://issues.mobilehealth.va.gov/browse/VPG-323)


## ✈️ Planned Releases
