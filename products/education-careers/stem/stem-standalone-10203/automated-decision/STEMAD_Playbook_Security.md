# STEM Automated Decision Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
STEM Automated Decision is an automated process that automatically makes a decision about a 10203 application when certain criteria are met.  The applicant is emailed about the status and they can check the status in the VA.gov [Claim Status Tool](https://www.va.gov/claim-or-appeal-status/).

[Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/stem/stem-standalone-10203/automated-decision/automated-decision_product-outline.md)

## Routes to code
links here
issue tickets (if they add value when describing known errors for your product)

## Contacts

### Team Members:
- OCTO-DE product lead: Matt Self (Matthew.Self2@va.gov)
- Team Product Manager: TBD

#### Note: This project is in the process of going through a transition and the above contacts will be changing on or around 09/20/21.

### Outage Contacts:
- _Additional Team Role_: TBD

## Troubleshooting

### Errors and Metrics
link to errors and logs your product produces
brief explanation of errors/metrics (or link to them here)

### Issue investigation steps
- STEM automated decision is heavily dependent on very specific parameters returned from the [EVSS service] (https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/evss/gi_bill_status/gi_bill_status_response.rb). EVSS is only available during certain hours of the day. If the parameters are not met for auto denial, the data is passed on to be processed manually.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
