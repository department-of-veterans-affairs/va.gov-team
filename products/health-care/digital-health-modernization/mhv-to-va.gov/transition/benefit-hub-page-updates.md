# Transition updates to health care benefit hub pages 
Date: November 14, 2024
Updated: February 17, 2025

## Overview
We need to update sign-in, ID-verification, and Cerner-OH routing alerts on all `/health-care` static benefit hub pages representing the "big four" tools. The over-arching goal is broken up into two phases: 1.) to update recently launched global sign-in & ID-verification alerts ([see VADS here](https://design.va.gov/components/alert/alert-sign-in/)) on static health-care pages representing the My HealtheVet health portal tools; and 2.) to update static pages for health-care tools to reflect language that is consistent with My HealtheVet and update URLs to point to the new version of the tools on VA.gov. 

### Why does this matter? 
* Current alerts reference four sign-in credentials, but we are sunsetting the My HealtheVet credential by this timeline, so we can no longer reference it. This language must be updated by January 31, 2025.
* The transition of My HealtheVet on VA.gov will reach Milestone 1 by March 15, 2025, which could increase the number of users. The biggest changes within this milestone include:
  * Removing cross-links on VA.gov to the Classic portal. By the Milestone 1 date, VA.gov will prioritize and point to the new My HealtheVet
  * We will completely sunset appointments on MHV Classic

## Timeline:
* **Phase 1**: updates that need to be made by mid-December 2024
* **Phase 2**: updates that need to be made by My HealtheVet's "Milestone 1" deadline of March 15, 2025

## Affected pages: 
* **Net new page**: Manage your health on My HealtheVet (va.gov/health-care/manage-health)
* Medications | [Refill and track VA prescriptions](https://staging.va.gov/health-care/refill-track-prescriptions/)
* Secure messages | [Use secure messaging](https://www.va.gov/health-care/secure-messaging/)
* Appointments | [Schedule and manage health appointments](https://www.va.gov/health-care/schedule-view-va-appointments/)
* Medical records - _these pages will be combined during Phase 2_
  * [View your VA lab and test results](https://www.va.gov/health-care/view-test-and-lab-results/)
  * [Get your VA medical records online](https://www.va.gov/health-care/get-medical-records/)
* Facility page templates (e.g. https://www.va.gov/kansas-city-health-care/make-an-appointment/)

## Phase 1 updates - DONE
Timeline: updates must be shipped by mid-December 2024.

Tasks
- [x] Update initial sign-in widgets on the pages listed above (under "affected pages") to match [new VADS versions](https://design.va.gov/components/alert/alert-sign-in/)
- [x] Update ID-verification alerts on those same pages to match [new VADS versions](https://design.va.gov/components/alert/alert-sign-in/)
- [x] Remove OH/Cerner routing alerts for appointments unauth page
- [x] Ensure OH/Cerner routing alerts are in place on unauth pages for Secure messages, Medications, and Medical Records - _these alerts will not be updated or standardized at this time since they are slated to be removed completely by the Phase 2 timeline._


**Note:** _These updates should align with updates to health care URLs on the My VA page. But updates to URLs on benefit hub pages will not take place until Phase 2 (below)._

## Phase 2 updates - IN PROGRESS
Timeline: updates should be made behind feature flags and ready for launch by March 15, 2025. 

**Cartography**:
- [ ] Coordinate with auth experience team to update My VA
  - Modify list of links under the "Health care" section link to send users directly to the MHV on VA.gov portal tools
  - Remove existing OH/Cerner alert widget to "Choose the right health portal"
- [ ] Update sign-in & ID-verification widgets in facilities template for health tool sections. There are three sections in the template to update:
  - Facility appointment pages - example page: https://www.va.gov/minneapolis-health-care/make-an-appointment/
  - Facility medical records pages - example page: https://www.va.gov/minneapolis-health-care/medical-records-office/
  - Facility pharmacy pages - example page: https://www.va.gov/minneapolis-health-care/pharmacy/
- [ ] Static health tool pages:
  - Remove Cerner/OH routing alerts from pages for medications, secure messages, and medical records
  - Ensure React widgets for sign-in and ID-verification alerts are present on all 5 pages. 
  - Update primary action links on each page to route users to the new VA.gov version of the tools:
    - Manage your health with My HealtheVet on VA.gov (NEW PAGE) - `va.gov/my-health/`
    - Appointments - _already done_
    - Medications - needs to point to: `va.gov/my-health/medications/`
    - Secure messages - needs to point to: `va.gov/my-health/secure-messages/`
    - Medical records - needs to point to: `va.gov/my-health/medical-records/`

**CAIA:** 
- [ ] Update content on static `/health-care` pages to match names of tools as they are used in My HealtheVet on VA.gov & better speak to the new experience
  * Secure messaging --> secure messages
  * Health records --> medical records
  * Pharmacy --> medications
- [ ] Consolidate the two medical records pages into one
- [ ] Create new Manage your health with My HealtheVet on VA.gov page (which will link to va.gov/my-health)
- [ ] Update URLs & H1s of all "big 4" static pages
- [ ] Update Drupal secondary/sidenav links to these pages
- [ ] Update best bets (in progress from Sara's report)
- [ ] Move medications & SM landing page content to R&S pages
- [ ] Redirect old URLs for those static pages to the new ones:

Current URL | Redirect to | Notes
--- | --- | ---
www.va.gov/health-care/get-medical-records/ | www.va.gov/health-care/review-medical-records/ | Revising H1 and URL
www.va.gov/health-care/view-test-and-lab-results/ | www.va.gov/health-care/review-medical-records/ | Merging pages
www.va.gov/health-care/schedule-view-va-appointments/ | www.va.gov/health-care/manage-appointments/ | Revising H1 and URL
www.va.gov/health-care/refill-track-prescriptions/ | www.va.gov/health-care/manage-prescriptions-medications/ | Revising H1 and URL
www.va.gov/health-care/secure-messaging/ | www.va.gov/health-care/send-receive-messages/ | Revising H1 and URL
www.va.gov/health-care/get-reimbursed-for-travel-pay/ | www.va.gov/health-care/file-travel-pay-reimbursement/ | Revising H1 and URL
www.va.gov/health-care/covid-19-vaccine/ | TBD R&S page | This may not be done with this work effort

**CAIA - post-launch items:**
- [ ] Post-launch: Update mega menu
- [ ] Post-launch: Update top links on VA.gov home page
 

## Notes
* 11/14/2024 - We initially wanted to remove OH/Cerner routing alerts for all of the "big four" tools during Phase 1, but realized that since 3/4 of them still link back to the national portal (all except for appointments), this would mean routing many users of the My VA Health portal back to the MHV Classic portal first before they see the correct routing links. Instead, we have decided to remove OH/Cerner routing alerts from the appointments page only in Phase 1 - since that page already prioritizes the MHV on VA.gov version. The rest will be addressed in Phase 2. 
