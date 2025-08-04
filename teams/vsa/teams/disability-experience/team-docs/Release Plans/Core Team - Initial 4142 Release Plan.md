# Release Plan: 4142 Paper Sync - MVP 


## Purpose
The purpose of this release plan is to document and align the delivery teams and stakeholders on what will be delivered and when. This release plan is specifically for the 4142 Paper Sync MVP (first release). 
It is not intended to include the next generation of enhancements to the 4142 product.

## Feature description
The required changes to support sending the new 4142 form include the following 2 changes. 

- User must be presented with a new set of verbiage and ackowledge they agree to the terms before continuing
- User must provide the disabilites being claimed in their disability claim, that they were treated for at each Private Medical Facility they want the VA to get their records from (that goes on the 4142 paper form)

For users filling out for the first time, this additional verbiage is just shown in-place of the old, on a new page.
For returning users who have an in-progress form in which they have already filled out the 4142, these users will be redirrected back to the begining of the 4142 flow, and also shown an alert informing them of the change, why they were brought back to this location in the flow, and giving them the option to re-authorize with the additional verbiage, and add the required treatments recived data to their previously provided private medical facilites entries. 

## Project goals
Create a new 4142 online form that will match the newest paper version of the PDF form. 
The data in the online form will be used in the generation of the new (2024) 4142 PDF that will be sent to Central Mail (and eventually the eFolder further downstream) after a successful submit.

## Success criteria
- Support 100% of 526 users in the ability to submit a 4142 that is the new 2024 version
  - This includes all new users completing the form for the first time
  - This also includes users who had in-progress forms and who are returning to complete their application AFTER having already filled out the form 4142 sections previously 


## Resource materials
- [4142 Paper Sync Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/114741)
- [Story Mapping Board] ???
- [Figma 4142 redesigns] ??? 
- [Final - 4142 PS Field Mapping.md] ???
- [Final - 4142 PS New SubURL.md] ???
- [Architecture] TBD - Kyle
- Datadog log TBD - Kyle
- Follow [best practices for QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) (pre-production) 
- Product Guide ??? 
- [4142 Paper Sync Staging Test Plan] TBD - Kyle
- [Release calendar] TBD - Kyle


## New capabilities and changes
### Changes to the 4142 include:


### Additions to the 4142 include:



### Additional functionality:


## Production release plan


## Risks

  
**Risk:** In trying to release the new version of the form, we inadvertently negatively affect the existing version.

**Mitigation:** By having monitors that count the old version of the form submitted, and new, we will catch any dip or anomaly in old submissions. Additionally our unit testing, and end to end testing both test not only the new flow, but also that the old flow is unaffected.


 
**Risk:** Form is not being filled out correctly, or not getting where it needs to.

**Mitigation:** Post release monitoring and validation/tracing is designed to mitigate this risk.



**Risk:** Users are confused by the UI/UX form or flow.

**Mitigation:**



**Risk:** A bug in new code prevents the overall submission of the 526ez submission.

**Mitigation:** End to end testing covers most of this risk. Our dashboards also cover overall submissions numbers, and evaluation will be done with each roll-out increment to ensure error-rate and submission numbers are not anomalous. 


## Production issues recovery plan


## Rollback
### Rollback Strategy

