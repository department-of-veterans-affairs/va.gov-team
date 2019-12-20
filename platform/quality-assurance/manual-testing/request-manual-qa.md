# Manual QA Strategy

### General
* All teams working on the Veteran-facing Services Platform should ask for the following materials for projects being tested:
     - Product Name
     - Product Outline link
     - Staging link
     - Staging user(s)
     - Scenarios Matrix (customized for product): (raw version: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/QA/QA_Testing_Matrix_Template.xlsx)
     - Product Manager
     - Engineering Lead

### Request Manual QA
1. File an issue in ```va.gov-team repo```.
    * Title: ```Request Manual QA```
    * Labels:
      * ```qa```
      * ```external-request```
      * ```[your team's Github label]```, e.g., "BAH-526"
    * Assign the issue to: ```[your DSVA contact]```
    * Comment:
      * **Context:** Provide a high-level description of the functionality for which you're requesting this review,
        * e.g., ```Functionality adds a new dataset to the Facility Locator so users can search for and view non-VA health providers on the map, as well as in list and detail views.```
      * **URL:** ```link to your project on staging```
      * TODO - provide an example here.
1. **Within 4 business days**, DSVA will conduct manual QA using information provided in the [Checklist below](#Manual-qa-checklist).
    * If you don't hear anything after 4 business days, reach out to your DSVA Contact.
1. DSVA will update the Github issue with requirements expected to be met before release and should include a testing matrix for this specific project.
1. Complete all test cases in the testing matrix, logging each defect in Github, referencing the epic.
    * If your team has questions about application requirements, use the Github issue to discuss that with DSVA.
1. When each defect is verified, mark it as such in its Github ticket and close it.


<hr>

### Manual QA Checklist
* As stated in the General section above, all teams working on the Veteran-facing Services Platform should ask for the following materials for projects being tested:
     - Product Name
     - Product Outline link
     - Staging link
     - Staging user(s)
     - Scenarios Matrix: (raw version: https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/QA/QA_Testing_Matrix_Template.xlsx)
     - Product Manager
     - Engineering Lead
* Complete customized scenarios Matrix (likely submitted by product team), testing all browsers with pass/fail entries and links to Github issues discovered during testing added to the document.
* Please enter [bugs](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Personalization/bug-reporting-template.md) as you go and assign to product manager and engineering lead, labeled with with your estimation of launch-blocking, high priority, or low priority.
* To be updated and communicated to implementation team by QA Lead
     - Estimated completion date:
* Definition of done
     - product has been tested in all applicable browsers
     - product has been tested across all applicable devices
     - all bugs per testing have been entered, labeled, and assigned
