## VetsAPI Sprint 7 Planning
Sprint 7: 3/26/24 - 4/8/24

## 📅 Upcoming Dates
Brittany will be OOO 4/1/24 - 4/12/24 and again 4/17/24

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
* 🆕 🟩 🟦 Implement Patient Eligibility verification at Oracle Health sites - To support the scheduling of appointments at Oracle Health sites, the ability to assess a specific patient's eligibility must be implemented for these locations.  Add the necessary infrastructure and code to VPG and VetsAPI to determine whether a given patient is eligible to request or direct schedule an appointment. This will support both direct scheduling and appointment requests.
* ✅🟡 Onboarding and Integration
  * This is now complete 
## 📋 Previous Sprint Summary:
In Sprint 6 we completed our goal to onboard all new team members, and we began documenting our local development and debugging setup to make it easier for any new team members to get their environment set up locally.   Additionally, we were able to start the VAMFAT review process for VetsAPI Patient Gateway (VPG) and Cerner Fhir Adapter. These reviews require OCC approvals before they can be deployed to production, and it typically takes about two months to secure approvals, so we are on schedule. We made good progress on our goal to support appointment scheduling at Oracle Health sites by creating an Oracle Health appointment slot search feature flag that toggles VetsAPI routing of slot requests to VPG, which was updated with the ability to find appointment slots at Oracle Health sites.  VPG also was updated to have a cancellable value on Oracle Health appointments retrieved from VAOS, and a facility configuration endpoint was created for retrieving available clinical services for a list of VistA or Oracle Health site Ids.
## 🏆 Sprint Goals and Stories
🚧 rolled from previous sprint 
* 🟦  GOAL: Support Oracle Health Slot Search
  * 🚧[#76083 Search for open appt slot at OH facility](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/76083) - in review
  * 🚧 [CES-220 VPG: Find Cerner appointmet slots](https://issues.mobilehealth.va.gov/browse/CES-220) - in review
* 🟠 GOAL: Build vetsapi-patient-gateway to extend VAOS with Oracle Health write-back capabilities
   * [CES-315 CES: support appointment search date param](https://issues.mobilehealth.va.gov/browse/CES-315)
   * [CES-341 Update cerner serviceType code mappings](https://issues.mobilehealth.va.gov/browse/CES-341)
   * [CES-317 CES: Migrate to hapi-plain-servier](https://issues.mobilehealth.va.gov/browse/CES-317)
* 🟩 🟦 Eligibility
     * [CES-353 VPG: Implement OH patient eligibility checks](https://issues.mobilehealth.va.gov/browse/CES-353)
     * [#79217 Create Oracle Health patient eligibility feature flag](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/79217)
     * [#79218 Implement eligibility request routing to VPG](https://app.zenhub.com/workspaces/appointments-oracle-health-integration-65a6e99ea522640e4d09393b/issues/gh/department-of-veterans-affairs/va.gov-team/79218) 
## ✈️ Planned Releases
None
