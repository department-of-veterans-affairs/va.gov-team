## Phase 1 UAT Overview
- Objective of this phase of UAT was to review appointment / requests list and confirm that displayed data was correct and complete
- 15 veterans participated in this phase
- Individual performance agaisnt user stories is viewable [here](./vaos-uat-results-tracker.xlsx)

## Devices, systems, and tools
- None of the participants used accessibility aids
- Participants used a range of devices and browsers, all of which functioned as expected
  - Windows + IE
  - Windows + Chrome
  - Windows + Firefox
  - Windows + Edge
  - Mac + Chrome
  - Mac + Safari
  - Mac + Firefox
  - Android tablet + Samsung web browser
  - Android + Chrome

## Findings
### Login
- All participants were able to log in successfully
- All participants were able to access the VAOS 'dashboard'

### Did the list of appointments and requests show?
- All participants were able to see a unified list of their appointments and requests
- Two participants did not have any upcoming requests of appointments, and correctly saw the corresponding message indicating this in the UI

### Was the list sorted correctly?
- All participants saw appointments listed in the correct chronological order
- Only a couple of participants had any requests, but these were correctly sorted alphabetically, under the appointments

### Was the displayed data accurate?
- One veteran mentioned that 'VA Facility' is misleading as a card header for VA-type appointments because not all VA appointments take place at a VA facility (ex: YMCA)
- Several veterans mentioned that the displayed VA facility and address for confirmed VA appointments were incorrect ([ticket #3601](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3601))
  - We found that this was due to the VAMC name / address showing instead of the appointment's CBOC, which was happening because that is the facility ID that is returned from VAMF
  - In the long-run, we will find the correct facility ID by integrating with CDW, and then using the actual facility / CBOC ID to fetch information for the correct facility from the existing facility service integration
  - In the short-run, we stripped name and address information from confirmed appointments
- Several veterans noted that their Community Care requests were missing ([ticket #3722](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3722))

### Was the displayed data complete?
- After removing incorrect facility information, all participants noted that they wanted to see more facility details (CBOC name & address, what room in the CBOC, etc)
- As noted, Community Care requests were missing entirely

### Was the displayed data logical and easy-to-understand?
- All participants were able to review and comprehend their list of appointments and requests
- One participant noted 'VA Facility' header for confirmed VA appointments was confusing because her VA appointment happened at a YMCA. Other types of partner clinics also exist so not necessarily a complete edge-case.
- Several participants noted that clinic names were confusing.
- Two participants had to undergo 'account upgrades' in order to use their preferred authentication method on VA.gov, which was cumbersome. This is an identity issue and outside the scope of what VAOS can control.

### Issues
- [Resolved] Community Care requests were missing from the appointments list ([ticket #3722](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3722))
- [Partially resolved] VA Facility addresses were incorrectly showing parent VAMC name & address instead of CBOC
  - ([ticket #3601](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3601)) resolves the issue by removing the misleading information
  - ([ticket #3721](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3721)) will restore the correct information
