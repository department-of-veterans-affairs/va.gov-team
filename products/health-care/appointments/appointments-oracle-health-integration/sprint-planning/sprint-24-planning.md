## VetsAPI Sprint 24 Planning
Sprint 24: 11/19/24 - 12/02/24

## 📅 Upcoming Dates  & 🏖️ PTO
* Drew PTO 11/27-11/29/24
* Devin PTO 11/29/24
* Clayton PTO 11/29/24

## 📣 Announcements
* Lauren Alexanderson gave a prod date of December 2024

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
* 🟤 VetsAPI Front End Support
   
## 📋 Previous Sprint Summary:
In Sprint 23 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Backend support for Oracle Health to enable direct scheduling
     * VetsAPI Patient Gateway was updated to source the Veteran Cerner ID from the mobile-mvi-service during eligibility checks.
     * Clinical Encounter Service was enhanced to determine the Electronic Health Record (EHR) system during appointment creation requests.
     * VetsAPI Patient Gateway was enhanced to filter Oracle Health patient relationships based on the Oracle Health TOC scheduling configuration and relationship age criteria.
 
 * #### Backend support for Oracle Health to build CES infrastructure to extend VAOS module with Oracle Health write-back capabilities
    * Clinical Encounter Service was updated to unify Appointment Search Enhancement parameters to improve appointment search functionality.
    * Vets API migrated VAOS appointment specifications to separate files to improve maintainability and remove LOC violations.
    * VetsAPI Patient Gateway was updated to mobile-framework version 2.2.0 to improve system compatibility and performance.
 
* #### Testing/Admin/Operational Support
    * VetsAPI  was updated to add an alternate global route for the VAOS module to enhance system functionality.
    * Conducted research on the feasibility of moving appointment modality logic from the front-end (FE) to the back-end (BE) to improve system efficiency.
    * Conducted detailed research on telehealth (TH) appointments to support the creation of an executive summary.
    * VetsAPI Patient Gateway was reworked to include same-day eligibility logic, ensuring consistent success in testing scenarios.
    * VetsAPI Patient Gateway worked to remove unused Oracle Health client paging code to streamline and optimize system functionality. 

## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started 
* 🔵 Direct Scheduling
    * 🚧 [VPG-18 VPG: Check future provider ability during get relationships](https://issues.mobilehealth.va.gov/browse/CES-1262)
* 🟤 VetsAPI Front End Support
   * [VPG-273 VetsAPI: implement FE logic for determining appointment type](https://issues.mobilehealth.va.gov/browse/VPG-273)
   * [VPG-13 VetsAPI: implement FE logic for determining appointment modality](https://issues.mobilehealth.va.gov/browse/VPG-13) 
* 🟣 Testing/Admin/Operational Support
   * [VPG-29 Finalize TH appts research](https://issues.mobilehealth.va.gov/browse/VPG-29)
   * [CES-1350 CES: Make appointment creation in integration tests more managed](https://issues.mobilehealth.va.gov/browse/CES-1350)
* 🔴 Appointment Cancellation
   * [VPG-270 Add location and serviceType filters to CFA appointment search](https://issues.mobilehealth.va.gov/browse/VPG-270) 
 

## ✈️ Planned Releases
