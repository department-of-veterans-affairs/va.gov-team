# Handling Updated Demographics Data - Architecture Document
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
## Measuring Success
## Questions
### UX Questions
* If address validation is down how will the flow change for pre-check-in and day-of check-in?
### FE Questions
* Are we going to submit an update for each field or wait and submit whole set of demographics?
* Currently we are dealing with very specific US based address fields from Vista, with editing we have exposure to more fields relating to international address and off shore military bases. 
    * How does Vista currently deal with non-US addresses?
    * Do we just need to account for different fields on the display side?
* Vista sends back the full state name i.e. "New Mexico" instead of "NM", Profile returns the two character abbrivation and also accepts the format for updating. If we continue to read form Vista and write to Profile, we will need to translate before updating. Maybe have a normalization layer somewhere in the middle on the frontend.
 
### BE Questions
## Solutions
### UX Solutions
### FE Solutions
### BE Solutions
* Integration with Lighthouse address validation API by vets-api. https://developer.va.gov/explore/verification/docs/address_validation?version=current
## Testing
