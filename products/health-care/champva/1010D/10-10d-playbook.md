# Form 10-10d Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
[Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/1010D/10-10d-product-outline.md)

## Routes to code


issue tickets 
- None, not yet in production

## Contacts

### Team Members:
- DSVA Product Lead: Premal Shah
- Team Product Manager: Bo Altes, Mary Wang
- Software engineers: Don Shin (FS), Bryan Alexander (FS), Michael Clement (FE)
- Delivery manager: Devi Hill

### Outage Contacts:
- DSVA Slack channel: [#ivc-forms](https://dsva.slack.com/archives/C05UDS77ZPH)


| Name            |         | VA email                | Employer email               |
|-----------------|---------|-------------------------|------------------------------|
| Premal Shah     | DSVA PO | premal.shah@va.gov      |                              |
| Bo Altes        | PM      | robert.altes@va.gov     | bo.altes@agile6.com          |
| Mary Wang       | PM      | mary.wang3@va.gov       | mary.wang@adhocteam.us       |
| Bryan Alexander | Eng     | bryan.alexander@va.gov  | bryan.alexander@adhocteam.us |
| Don Shin        | Eng     | don.shin@va.gov         | don.shin@agile6.com          |
| Michael Clement | Eng     | michael.clement1@va.gov | michael.clement@adhocteam.us |
| Devi Hill       | DM      | devi.hill@va.gov        | devi.hill@agile6.com         |


## Troubleshooting

### Errors and Metrics
link to errors and logs your product produces
- DSVA Slack monitoring: [#ivc-forms-datadog](https://dsva.slack.com/archives/C06RQR7V9CM)
brief explanation of errors/metrics (or link to them here)

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
  - React widget feature toggle is `form1010d`
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
