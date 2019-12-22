# Manual QA Strategy

## General
* All teams working on the Veteran-facing Services Platform should compile the following materials for projects being tested:
     - Product Name
     - Product Outline link
     - Staging link
     - Staging user(s)
     - Test Plan
     - Product Manager
     - Engineering Lead

## Request Manual QA
1. File an issue in ```va.gov-team repo``` using the [manual-qa-request template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=peterhill-oddball&labels=product+support&template=manual-qa-request.md&title=Request+manual+QA+services+for+ENTER_PRODUCT_NAME).
    * Assign the issue to: ```pjhill Peter Hill```
    * Follow the instructions within the template to produce a high quality request.
2. **Within 4 business days**, VSP will conduct manual QA using information provided in the [Checklist below](#Manual-qa-checklist).
    * If you don't hear anything after 4 business days, reach out to your VSP Product Support in #vsp-product-support.
3. VSP Product Support QA will update the Github issue with relevant [QA artifacts](../qa-artifacts.md).
4. If your QA review results in test incidents, you will need to work with VSP Product Support QA to triage each incident.
   * Determine whether the incident is a defect, enhancement, or misinterpretation of acceptance criteria.
   * Determine a severity for each legitimate issue.
5. Once you have resolved a defect, be sure to mark the corresponding GitHub issue as resolved.
6. After all defects have been resolved, tag your VSP QA reviewer in the request ticket and indicate that all defets have been resolved.
7. VSP QA will verify all defects have been resolved and provide final approval that Manual QA activities have been successfully completed.


<hr>

## Manual QA Checklist
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
