# My VA Health Care section - Dot Indicator on Unread Health Care Messages Security Playbook


## Product Description
**Product Overview:** [My VA product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#product-outline-my-va)

**Iterations**
- [Dot indicator project overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/dot-indicator/create-dot-indicator/README.md)

## Routes to code
[Notification Indicator: Dot indicator implementation on unread messages - #63788](https://github.com/department-of-veterans-affairs/va.gov-team/issues/63788)

## Contacts
- _All team members may also be reached via team slack channel: `#accountexp-authexp`_

### Team Members
- DSVA Product Lead: Samara Strauss, samara.strauss@va.gov
- Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team)

### Outage Contacts:
- Authenticated Experience My VA team Frontend engineer: Allison Lu, allison@cityfriends.tech
- Authenticated Experience My VA team Backend engineer : Tom Harrison, tom.harrison@adhocteam.us


## Troubleshooting

### Errors and Metrics
Errors may occur due to issues connecting to various upstream APIs, such as claims, debts or payments API. Users will see an error message letting them know there is a problem. If there is an error specifically with the dot indicator and we are unable to determine if a user has unread messages, the dot will not display. The user will not see an error message.

### Issue investigation steps
Depending on the errors encountered our team would reach out to contacts with the corresponding upstream connections. A full list of datapoints/features on My VA and corresponding owners and means of contact can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md#my-va-features).


### Flipper Features and Rollback
- The feature flag for this feature is: `my_va_notification_dot_indicator`

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
