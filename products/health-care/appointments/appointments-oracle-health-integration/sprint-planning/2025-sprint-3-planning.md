## VetsAPI Sprint 3 Planning
NEW Sprint 1: 3/19/25 - 4/02/25

## 📅 Upcoming Dates  & 🏖️ PTO
  * Clayton 3/17-3/21
    
## 📣 Announcements


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
In Sprint 2 the team provided support for multiple features and initiatives, outlined as follows:  
* #### Direct Scheduling
  * Remove system requirement for clinic slot searches
     * Clinical Encounter Service removed the system requirement for clinic slot searches, simplifying the search format to <facility>:<clinic>.
  * Require JWT to be provided
     * Clinical Encounter Service introduced a FHIR Interceptor that provides a 401 Unauthorized error if a JWT is not provided, ensuring compliance with access control rules.
  * Set total on returned bundles
     * Clinical Encounter Service set the total flag for search requests across various resources to improve testing efficiency. An interceptor was added to check the request type on return and set the total based on the number of resources in the bundle.
* #### VetsAPI Logic Integration Support
  * VPG: Move any existing logic for when to show join video link to vets-api
     * VetsAPI migrated the existing logic for determining when to display the “Join Video” link from the web application to the VetsAPI layer, ensuring consistency and centralized logic management.
* #### Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
  * Implement Spring caching for CLS and CTPS client calls
     * VetsAPI Patient Gateway implemented Spring caching for Cerner-Location-Service and Cerner-Terminology-Policy-Service client calls, utilizing the caching mechanisms provided by mobile-framework version 2.2 and higher.
* #### Testing/Admin/Operational Support
  * Expose $appointment-types operation
     * Clinical Encounter Service added the $appointment-types FHIR operation to the appointment resource provider. This allows calls to the $appointment-types operation and passes the results back.
  * CES: SQA: Continued CES testing
     * Clinical Encounter Service continued testing in SQA to prepare for the production deployment of Clinical Encounter Service, ensuring functionality and stability.
  * Address MviClient technical debt
     * VetsAPI Patient Gateway addressed multiple technical debt issues in MviClient.java, including:
          •Updating the log.warn statement to replace log guards with a lambda expression.
          •Adding tests to ensure AssigningAuthority comparisons are case-insensitive.
          •Correcting the Javadoc for getApiClient, which previously referenced VAOS packages instead of the correct MVI source.


   
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint;🐞bug; 🚫 blocked;🧗‍♀️ pulled in after sprint started; ⚠️ Removed from sprint 

* 🔵 Direct Scheduling
   * [VPG-338 Filter inactive Providers out of relationship results(https://issues.mobilehealth.va.gov/browse/VPG-3380)]
   * [CES-1615 CFA: Filter relationships where Practitioner is inactivehttps://issues.mobilehealth.va.gov/browse/CES-1615)]
* 🟣 Testing/Admin/Operational Support
   * [CES-1605 CES: Spike: Explore migration away from the drools engine(https://issues.mobilehealth.va.gov/browse/CES-1605)]
   * [VPG-343 vetsapi-patient-gateway: address log injection issue(https://issues.mobilehealth.va.gov/browse/VPG-343)]
   * [VPG-342 vetsapi-patient-gateway: update clients to use AbstractHealthIndicator(https://issues.mobilehealth.va.gov/browse/VPG-342)] 
   * [CES-1538 Cerner-Mock: Update to Mobile-Framework v2.3(https://issues.mobilehealth.va.gov/browse/CES-1538)]
   * [CES-1535 CLS: Update to Mobile-Framework v2.3(https://issues.mobilehealth.va.gov/browse/CES-1535)]
   * [CES-1539 hapi-fhir-commons: Update to Mobile-Framework v2.3(https://issues.mobilehealth.va.gov/browse/CES-1539)]
   * [VPG-341 Developer testing for VPG OH workflows - SQA(https://issues.mobilehealth.va.gov/browse/VPG-341)]
   * [CES-1607 cerner-mock: update deployment to support local debugging(https://issues.mobilehealth.va.gov/browse/CES-1607)]



## ✈️ Planned Releases
