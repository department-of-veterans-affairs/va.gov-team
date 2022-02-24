# Demographics Authentication/Authorization Engineering Architecture
## Table of Contents
- [Related Documents](#related-documents)
- [Problem Statement](#problem-statement)
- [Measuring Success](#measuring-success)
- [Questions](#questions)
  - [UX Questions](#ux-questions)
  - [FE Questions](#fe-questions)
  - [BE Questions](#be-questions)
- [Solutions](#solutions)
  - [UX Solutions](#ux-solutions)
  - [FE Solutions](#fe-solutions)
  - [BE Solutions](#be-solutions)
- [Testing](#testing)

## Related Documents
* [Demographics Edititing Main Eng Arch Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/pre-check-in/edit_demographics.md)
* [Sketch - Editing wireframes](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/p/56D56797-C485-4B53-95E7-36EBF66B6698/canvas)
* [Sketch - Overall pre-check-in MVP wireframes](https://www.sketch.com/s/e79a827e-42cf-4a82-b554-874c75b5c70e)
* [Interactive Sketch prototype](https://www.sketch.com/s/5331b114-280d-4ff5-8d36-ec49b1696b9e/a/PGzGPJr/play)
* [Check-In Test Data Setup](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/qa/test-data-setup.md)
* [Check-In Architecture](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/README.md)
* [Research Documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/research)
* [Engineering Documents](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/engineering)
* [VA.gov Profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/profile/README.md)  

## Problem Statement
Currently our minimal authorization session gets overwritten by the session created when doing a full authorization. When getting routed back to the check-in application after doing a full authentication, the veteran is required to complete the minimal authorization again. We need to be able to preserve the read.full permission state from the minimal authentication session after doing a full authentication to allow the veteran to continue with check-in/pre-check-in from where they left off.

The full authorization session also times out in under an hour which can cause a veteran to loose access to the check-in application that should have a persistant session for 12 hours.
## Measuring Success
## Questions
### UX Questions
### FE Questions
* Can we have two seperate sessions, one for full authorization and one for check-in experience?
* What should happen in the flow if the full authorization session expires before the check-in session?
### BE Questions
## Solutions
### UX Solutions
### FE Solutions
### BE Solutions
## Testing
## Meeting notes - Next steps
- 02/23/2022 Engineering Sync
  - Brian to take a stab at Problem Statement
  - Interface with product and or UX regarding business flow -> Bring it up in standup parking lot.
  - Dillo/Kanchana to look at login sessions on the backend related to minimal and full blown auth
  - Brian to fill out FE questions
  - Kanchana/Gaurav/Dillo to fill out BE questions
