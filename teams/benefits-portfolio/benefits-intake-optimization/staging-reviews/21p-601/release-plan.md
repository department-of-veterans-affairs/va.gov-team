# BIO HEART Form 21P-0601 Release Plan

## Product Description
VA Form 21P-0601 (Application for Accrued Amounts Due a Deceased Beneficiary) is currently not digitized. Digitizing this form will allow Veterans and other users to submit this form electronically, which in turn will reduce claims processing time, eliminate paper scanning costs, improve data accuracy through validation, and enable automation of benefits processing. This form is very similar to Form 21P-537 (Marital Status Questionnaire) and is currently on staging, being prepared to go live.

## Routes to code
- [Frontend](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/simple-forms/21P-601)
- [Backend](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/simple_forms_api)

## Contacts
- **PM** Michael Collier - michael.collier@agile6.com
- **PM** Berni Xiong - berni.xiong@agile6.com

### Team Members:
- DSVA Product Lead: Dennis Peterson - dennis.peterson3@va.gov
- Team Product Manager: Michael Collier - michael.collier@agile6.com
- PM: Berni Xiong - berni.xiong@agile6.com
- UX: Melissa Schaff - Melissa.schaff@agile6.com
- UX: Andrea Chappelear - andrea.chappelear@agile6.com
- Engineering: Aaron Ponce - aaron.ponce@agile6.com
- Engineering: Michael Clement - michael.clement@adhocteam.us
(please add others)

### Outage Contacts:
- Team Product Manager: Michael Collier - michael.collier@agile6.com
- PM: Berni Xiong - berni.xiong@agile6.com
- Engineering: Aaron Ponce - aaron.ponce@agile6.com
- Engineering: Michael Clement - michael.clement@adhocteam.us

## Troubleshooting

### Errors and Metrics
NOT LIVE YET - after release, form 21P-0601 metrics may be visible on these dashboards
- [Simple forms submissions](https://vagov.ddog-gov.com/dashboard/4d8-3fn-dbp/benefits-intake-form-submission-tracking?fromUser=true&refresh_mode=sliding&from_ts=1758054783910&to_ts=1758659583910&live=true)
- [Benefits intake submissions](https://vagov.ddog-gov.com/dashboard/4d8-3fn-dbp/benefits-intake-form-submission-tracking?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1756653642564&to_ts=1759245642564&live=true)

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
  - Yes, there is a feature toggle that will be in use when the form is released: `form21p0601`. This flipper will control access to the frontend form and the backend endpoint. The flipper should be modified when we want to increase or decrease the amount of users who are able to access the form.

## Security
Describe any security concerns the responders should be aware, for example: 
- **Does your product have PII?** Yes, form submissions contain PII, which is stored (encrypted) in the Simple Forms `FormSubmission` DB table. 
- **Do you log sensitive information that needs to be handled in a particular manner?** We do not log sensitive information.
- **Does your product have a known security vulnerability that has been accepted by leadership?** No, we are not aware of any such vulnerability.
