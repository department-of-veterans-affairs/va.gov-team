# My VA Redirect Security Playbook

NOTE: 
- links to complete data for each of the sections below is welcome and encouraged.
- This document serves the requirement of an incident response procedure for your product. This document should be iterated upon as changes are made to the product.

## Product Description
[My VA Redirect Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-redirect#my-va-redirect-initiative-brief)

## Routes to code
[My VA Redirect Epic](https://github.com/department-of-veterans-affairs/va.gov-team/issues/41223)

## Contacts

### Team Members:
- DSVA Product Lead: Samara Strauss, samara.strauss@va.gov
- Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us


### Outage Contacts:
- Authenticated Experience My VA team Frontend engineer: Taylor Mitchell, tmitchell@governmentcio.com 
- Authenticated Experience My VA team Backend engineer : Tom Harrison, tom.harrison@adhocteam.us
- VSP Identity team lead: Joe Niquette, joe.niquette@oddball.io
- VSP Identity team, Frontend engineer: Alex Garcia, agarcia@clarityinnovates.com


## Troubleshooting

### Errors and Metrics
Errors with the redirect will result in the user not being redirected to My VA. They will simply land on the VA.gov homepage.

### Issue investigation steps
If errors occur with the sign in service, the Identity team can be reached via slack channel #vsp-identity. The redirect itself is not controlled by My VA.

### Flipper Features and Rollback
Contact the Idenitity team to turn off the feature or to roll back the redirect

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
