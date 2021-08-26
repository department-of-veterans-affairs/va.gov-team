# Comparison Tool Redesign Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
Use the GI Bill Comparison Tool to see how VA education benefits can pay for your education.

[**Product Outline**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/education-careers/school-comparison-tool/redesign/ct-redesign-discovery_product-outline.md)

## Routes to code
links here
issue tickets (if they add value when describing known errors for your product)

## Contacts

### Team Members:
- OCTO-DE product lead: Matt Self (Matthew.Self2@va.gov)
- Product manager: Darrell Neel (Neel_Darrell@bah.com) / Will McCormack (McCormack_Will@bah.com)
- Lead engineer: Dan Shawkey (Shawkey_Daniel@bah.com)

### Outage Contacts:
- Senior developer: Devin McCurdy McCurdy_Devin@bah.com
- Senior developer: Matt Roth Roth_Matthew@bah.com

## Troubleshooting

### Errors and Metrics
  - **Performance Metrics**
    -  CT Search Autocomplete - [latency](http://grafana.vfs.va.gov/d/000000050/backend-service-report?viewPanel=141&orgId=1&from=now-7d&to=now) should remain stable at well below 500 ms
    -  CT Keyword Search - [latency](http://grafana.vfs.va.gov/d/000000050/backend-service-report?viewPanel=141&orgId=1&from=now-7d&to=now) should remain stable averaging 1 s with peaks below 2 s

### Issue investigation steps
- Describe common issues that may arise and explain the basic troubleshooting steps or code to modify if these issues arise.

### Flipper Features and Rollback
- Is there a flipper feature? If yes, describe here and explain when to modify the flipper and to what exactly.
- At what point, if applicable, should your code be rolled back, to what state? (optional)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.

