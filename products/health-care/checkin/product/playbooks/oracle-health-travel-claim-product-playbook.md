# Oracle Health Travel Claim Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/product/oracle-health-travel-product-outline.md)

## Routes to code
- [Vets-website](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/check-in/travel-claim)
- [vets-api](https://github.com/department-of-veterans-affairs/vets-api/tree/master/modules/check_in)
- [chip](https://github.com/department-of-veterans-affairs/chip/tree/master/src/initiateTravelClaim)
- [LoROTA](https://github.com/department-of-veterans-affairs/lorota)

## Contacts

### Team Members:
- DSVA Product Lead: _person’s name_ _persons's email_
- Team Product Manager: Lori Pusey lori.pusey@agile6.com
- Developers: Brian Seek, Gaurav Gupta, Kanchana, John Woolschlager, 

### Outage Contacts:
- _Additional Team Role_: _person’s name_ _persons's email_
- _Additional Team Role_: _person’s name_ _persons's email_
- pagerduty email/activation call (if available)

## Troubleshooting

### Errors and Metrics
link to errors and logs your product produces
brief explanation of errors/metrics (or link to them here)

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
