## VetsAPI Sprint 1 Planning
NEW Sprint 1: 2/19/25 - 3/05/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * Devin M. 2/24-3/3
  * Drew C. 2/28
    
## 📣 Announcements
* A6 has changed the cadence of sprint plannings. We are now back to Sprint 1!

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
* #### Direct Scheduling
  *  Determine EHR on appointment creation request Clinical Encounter Service was updated so that appointment creation requests are forwarded to the correct Electronic Health Record (EHR) system based on site location, ensuring accurate processing.
  *  VetsAPI Patient Gateway updated CodeSystems.java to modify the VA_SYSTEM_LOCATION value, aligning it with the correct system value for each facility as defined in ces-ig.
* #### Community Care
  * VetsAPI enhanced request specifications for AppointmentsController#create_draftmethod, adding more tests to cover different scenarios and edge cases.
  * VetsAPI implemented a new GET /appointments/{appointment_id} endpoint, which calls EPS::AppointmentService#get_appointment to retrieve details of a specific appointment from EPS.
* #### Testing/Admin/Operational Support
  * VetsAPI Patient Gateway updated various Kubernetes and client dependencies to the latest versions, ensuring improved stability and performance.

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started; ⚠️ Removed from sprint 

* 🟤 VetsAPI Logic Integration Support
   * 🚧 [VPG-306 VPG: Move any existing logic for when to show join video link to vets-api](https://issues.mobilehealth.va.gov/browse/VPG-306)
* 🔵 Direct Scheduling
   * [CES-1299 CES: Determine EHR on appointment creation request](https://issues.mobilehealth.va.gov/browse/CES-1299)
* ⚫️ Community Care - this work is being done by Devin working with the CIE team
   * [VPG-332 CC: Use cached provider_id, appointment_type_id, and end_date for creating](https://issues.mobilehealth.va.gov/browse/VPG-332) 
* 🟣 Testing/Admin/Operational Support
   * 🚧 [CES-1509 CES: SQA: Continued CES testing](https://issues.mobilehealth.va.gov/browse/CES-1509)
   * [VPG-331 Update unit test logic to not depend on time of day](https://issues.mobilehealth.va.gov/browse/VPG-331)


## ✈️ Planned Releases
