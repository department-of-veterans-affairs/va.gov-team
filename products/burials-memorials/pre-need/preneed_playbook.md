# Preneed Integration Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
[Preneed product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/pre-need/README-2023.md#user-problem-statement)

## Routes to code
links here
issue tickets (if they add value when describing known errors for your product)

## Contacts

### Team Members:
- DSVA Product Lead: Rhonda Jones rhonda.jones1@va.gov
- Team Product Manager: Catherine Huges catherine.hughes2@va.gov
- Tech Lead: Kenneth Santiago kenneth.santiago@va.gov

### Outage Contacts:
- _Additional Team Role_: _person’s name_ _persons's email_
- _Additional Team Role_: _person’s name_ _persons's email_
- pagerduty email/activation call (if available)

## Troubleshooting

### Errors and Metrics
[Datadog Dasboard](http://vagov.ddog-gov.com/dashboard/vvx-8pb-yq3/40-10007?fromUser=false&refresh_mode=sliding&from_ts=1738509743584&to_ts=1738682543584&live=true)

### Issue investigation steps
- Errors that may arise are investigated and would be documented into a story to find fixes for the cause of the error.

### Flipper Features and Rollback
There is no flipper feature, we will use the vagovprod flag in the registry file in the content build repo to handle any rollbacks.

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.

Product uses PII and that PII is scrubbed in cases of errors as not to display PII.
