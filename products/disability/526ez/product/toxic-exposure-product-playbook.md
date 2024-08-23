# Toxic Exposure Product Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
To make it easy for Veterans to file disability compensation claims resulting from the PACT Act via va.gov, we are adding a toxic exposure (TE) section to the 21-526ez Veterans Disability Compensation and Related Compensation Benefits form on VA.gov.
## Routes to code
> links here issue tickets (if they add value when describing known errors for your product)

## Contacts

### Team Members:
- DSVA Product Lead: _Emily Theis_ _emily.theis@va.gov_
- Team Product Manager: _Jared Pace_ _Jared.pace@agile6.com_
- _Team Tech Lead_: _Aurora Hampton_ _aurora.hampton@agile6.com_

### Outage Contacts:
- _Team Tech Lead_: _Aurora Hampton_ _aurora.hampton@agile6.com_
- _Senior Software Engineer_: _Seth Darr_ _seth.darr@agile6.com_
- pagerduty email/activation call (if available) - N/A

## Troubleshooting

### Errors and Metrics
[Form 526 EVSS to Lighthouse Dashboard](https://vagov.ddog-gov.com/dashboard/mqg-msb-htb/benefits---dbex---evss-to-lh-submit?fromUser=false&view=spans&from_ts=1720024853816&to_ts=1722616853816&live=true)
A top-level dashboard containing the metrics we use to understand application health.

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

[Troubleshooting SOP](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/benefits/scripts/526/TREX/DEBUG/SOP-Toxic-Exposure-Lighthouse-Form526-Submission-Troubleshooting.md)

### Flipper Features and Rollback
- We use Flipper to control availabity of TE for each use case (New form or IPF). In the 2019 form version, the toxic exposure section is not available to the Veteran. In 2022 form version, the toxic exposure section is available to the Veteran.

| Toggle name | Feature | Description |
| ----------- | ----------- | ----------- |
| disability_526_toxic_exposure | 1.0 | Enable the 2022 form when form is created |
| disability_526_toxic_exposure_ipf | 1.1 | Enable the 2022 form when in progress form is retrieved |


DBEX teams T-REX and Carbs and OCTO PO will monitor analytics. If something goes wrong, the engineering teams will be on standby to disable the flippers which would prevent any Veterans starting a new form from receiving the 2022 version of the form. In the event catasrophically wrong with the user filling out the form, our failsafe rollback would be to take them off the 2022 path by removing the startedFormVersion key from the Veteran's formData. This would require manipulating form data in the database. This would also drop completed TE form data from the Veteran's 2022 form, but the TE form data would still exist in the database.

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
