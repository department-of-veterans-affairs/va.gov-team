# Transition updates to health care benefit hub pages 
Date: November 14, 2024

## Overview
We need to update sign-in, ID-verification, and Cerner-OH routing alerts on all /health-care benefit hub pages representing the "big four" tools prior to EOY 2024. The over-arching goal is to update recently launched global sign-in & ID-verification alerts ([see VADS here](https://design.va.gov/components/alert/alert-sign-in/)) in high-touch unauth pages on VA.gov that will be impacted by two major transitions: 1.) sunsetting the MHV sign-in credential and 2.) transition of My HealtheVet on VA.gov - as all tools will be fully in Phase 1, and appointments will soon be be sunset on Classic.

## Affected pages: 
* Medications | [Refill and track VA prescriptions](https://staging.va.gov/health-care/refill-track-prescriptions/)
* Secure messages | [Use secure messaging](https://www.va.gov/health-care/secure-messaging/)
* Appointments | [Schedule and manage health appointments](https://www.va.gov/health-care/schedule-view-va-appointments/)
* Medical records
  * [View your VA lab and test results](https://www.va.gov/health-care/view-test-and-lab-results/)
  * [Get your VA medical records online](https://www.va.gov/health-care/get-medical-records/)

## Phase 1 updates
Timeline: updates must be shipped by mid-December 2024

Tasks
- [ ] Update initial sign-in widgets on the pages listed above (under "affected pages") to match new VADS versions
- [ ] Update ID-verification alerts on those same pages to match new VADS versions
- [ ] Remove OH/Cerner routing alerts for appointments unauth page
- [ ] Ensure OH/Cerner routing alerts are in place on unauth pages for Secure messages, Medications, and Medical Records 

**Note:** _These updates should align with updates to health care URLs on the My VA page. But updates to URLs on benefit hub pages will not take place until the second quarter of 2025. See Phase 2 plan below._

## Phase 2 updates: 
Timeline: updates should be made between Feb-Mar 2025

- [ ] Update content on pages to match names of tools as they are used in My HealtheVet on VA.gov & better speak to the new experience 
- [ ] Consolidate the two medical records pages into one
- [ ] Remove Cerner/OH routing alerts from medications, secure messages, and Medical records unauth pages
- [ ] Update the links to My HealtheVet (that are revealed behind Sign-in and ID-verification widgets) to point to the new My HealtheVet on VA.gov tools.
  * Appointments - _already done_
  * Medications - needs to point to: `va.gov/my-health/medications/`
  * Secure messages - needs to point to: `va.gov/my-health/secure-messages/`
  * Medical records - needs to point to: `va.gov/my-health/medical-records/`
 

## Notes
* 11/14/2024 - We initially wanted to remove OH/Cerner routing alerts for all of the "big four" tools during Phase 1, but realized that since 3/4 of them still link back to the national portal (all except for appointments), this would mean routing many users of the My VA Health portal back to the MHV Classic portal first before they see the correct routing links. Instead, we have decided to remove OH/Cerner routing alerts from the appointments page only in Phase 1 - since that page already prioritizes the MHV on VA.gov version. The rest will be addressed in Phase 2. 
