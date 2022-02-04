# My Education Benefits Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/my-education-benefits/education-benefits-form/product-outline.md)

## Routes to code
https://staging.va.gov/education/apply-for-benefits-form-22-1990

## Contacts

### Team Members:
- DSVA Product Lead: Cesar Santiago, Cesar.Santiago@va.gov
- Team Product Manager: Shamik Desai, Shamik.Desai@va.gov <Shamik.Desai@va.gov>
- DevOps Lead: Won Choi,  Won.Choi@va.gov

### Outage Contacts:
- Tech Lead: Cesar Santiago, Cesar.Santiago@va.gov
- DevOps Lead: Won Choi,  Won.Choi@va.gov
- pagerduty email/activation call (if available)

## Troubleshooting

### Errors and Metrics
The UI for My Education Benefits will live on VA.gov, while the services it uses will live on the DGIB Managed Service.

The DGIB Managed Service: A series of services hosted externally that drive the functionality of the MEB application, including
Loading veteran personal information
Loading demographics data
Loading contact information
Loading service history
Receiving and education benefits submission and automatically process the claim.
Generating letters approval or denial of clam.

All error logs and metrics live on the DGIB Managed Environment and is managed by the DGIB team.

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- The application is brand new so there's no features flipper at this time.

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
