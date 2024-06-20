# Save in Progress (SiP) Configuration Enhancement Security Playbook


## Product Description
**Product Overview:** [My VA product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#product-outline-my-va)

**Project**
- [Save in Progress configuration enhancement](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/my-va-small-initiatives/save-in-progress-configuration-enhancement)

## Routes to code
[Benefit Application Drafts Enhancements - #60509](https://github.com/department-of-veterans-affairs/va.gov-team/issues/60509)

## Contacts
- _All team members may be reached via team slack channel: `#accountexp-authexp`_

### Team Members
- DSVA Product Lead: Chante Lantos-Swett, chante.lantosswett@va.gov
- Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team)

### Outage Contacts:
- Authenticated Experience My VA team Frontend engineer: Allison Lu, allison@cityfriends.tech
- Authenticated Experience My VA team Backend engineer : Tom Harrison, tom.harrison@adhocteam.us

## Troubleshooting

### Errors and Metrics
The section is tied to the main user id call. If the call fails, the entire My VA page will fail and the user will see a standard full page message indicating that the page is down. Other errors may occur on the page due to issues connecting to various upstream APIs, such as claims, debts or payments API. Users will see an error message within the corresponding benefit section letting them know there is a problem. 

### Issue investigation steps
Depending on the errors encountered our team would reach out to contacts with the corresponding upstream connections. A full list of datapoints/features on My VA and corresponding owners and means of contact can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md#my-va-features).

### Flipper Features and Rollback
- The feature flag for this feature is: `my_va_enable_new_sip_config`

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
