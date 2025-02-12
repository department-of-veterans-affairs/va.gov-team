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
[Team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/checkin/team)

## Troubleshooting

### Errors and Metrics
- [DataDog](https://vagov.ddog-gov.com/dashboard/njk-mi6-mxy/travel-claims-oracle-health?fromUser=false&refresh_mode=sliding&from_ts=1727961956507&to_ts=1727965556507&live=true)
- [Sentry](https://sentry.vfs.va.gov/organizations/vsp/issues/?environment=production&project=3&query=team%3Acheck-in+transaction%3A%22Sidekiq%2FCheckIn%3A%3ATravelClaimSubmissionWorker%22&statsPeriod=14d)

### Issue investigation steps
- For issues and investigations follow the [Incident Response Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/production-support.md)

### Flipper Features and Rollback
Since this is a stand-alone application within the check-in namespace we can use PagerDuty to put the applicaiton into maintenance mode
 - [Production Service](https://dsva.pagerduty.com/service-directory/PPS19LL)
 - [Staging Service](https://dsva.pagerduty.com/service-directory/PHVXQUE)

## Security
descibe any security concerns the responders should be aware, for example: Does your product have PII? Do you log senstive information that needs to be handled in a particular manner? Does your product have a known security vulnerability that has been accepted by leadership? etc.
