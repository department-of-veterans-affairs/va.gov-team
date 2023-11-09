# Find a Representative Playbook/Incident Response Plan

## Product Description

**Product Overview:** [Product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/accredited-representation-management/product-documentation/find-a-representative/product-outline-find-a-representative.md)

## Contacts

- _All team members can also be reached via the Accredited Representation Management team DSVA Slack channel: [`#benefits-representation-management`](https://dsva.slack.com/archives/C05L6HSJLHM)_

### Team Members

- DSVA Product Lead: Zach Goldfine, zachary.goldfine@va.gov
- Team Product Manager: Lindsay Li-Smith, lindsay.li-smith@oddball.io
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/accredited-representation-management#team)

### Outage Contacts:

- Accredited Representation Management team Lead Engineer: Holden Hinkle, holden.hinkle@oddball.io
- Accredited Representation Management team Frontend Engineer: Colin O'Sullivan, colin.osullivan@adhocteam.us
- Accredited Representation Management team Backend Engineer : Jonathan VanCourt, jonathan.vancourt@adhocteam.us

## Troubleshooting

### Errors and Metrics

Errors may occur due to issues connecting to various upstream APIs, such as claims, debts or payments API. Users will see an error message letting them know there is a problem. If there is an error specifically with the dot indicator and we are unable to determine if a user has unread messages, the dot will not display. The user will not see an error message.

### Issue investigation steps

Depending on the errors encountered our team would reach out to contacts with the corresponding upstream connections. A full list of datapoints/features on My VA and corresponding owners and means of contact can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md#my-va-features).

### Flipper Features and Rollback

- The vets-website feature flag for this feature is: `findARepresentativeShowApplication`
- The vets-api feature flag for this feature is: `find_a_representative_show_application`

## Security

No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
