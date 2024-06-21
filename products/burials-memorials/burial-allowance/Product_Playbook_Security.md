# 21P-530EZ Burial Benefits Application Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
VA Form 21P-530 (Application for Burial Benefits) enables eligible individuals to apply for compensation to help cover burial, funeral, and transportation costs. [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/burials-memorials/burial-allowance/README.md).

## Routes to code
links here
issue tickets (if they add value when describing known errors for your product)

## Contacts

### Team Members:
- DSVA Product Lead: Ryan Powers, ryan.powers3@va.gov
- Team Product Manager: Laura Steele, laura.steele@coforma.io
- Technical Lead: Thomas Blackwell, thomas.blackwell@coforma.io

### Outage Contacts:
- DSVA Product Lead: Ryan Powers, ryan.powers3@va.gov
- DSVA Engineering Lead: Sanja Bajovic, Sanja.Bajovic2@va.gov
- Team Product Manager: Laura Steele, laura.steele@coforma.io
- Technical Lead: Thomas Blackwell, thomas.blackwell@coforma.io
- pagerduty email/activation call (if available)

## Troubleshooting

### Errors and Metrics
link to errors and logs your product produces
brief explanation of errors/metrics (or link to them here)
  - DataDog Dashboard | [Burial Benefits 530 errors](https://vagov.ddog-gov.com/monitors/184389?view=spans)
  - DataDog Dashboard | [Benefits - Form 530 Burial Claims](https://vagov.ddog-gov.com/dashboard/q5u-4h7-bfh/benefits---form-530-burial-claims?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1716406091146&to_ts=1718998091146&live=true)

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
