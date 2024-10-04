# My VA Forms Status MVP Security Playbook
**Last updated: September 27, 2024 - first published**

## Product Description
**Product Overview:** [My VA product outline](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va#product-outline-my-va)

**Iterations**
- [Forms Status on My VA MVP](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/my-va/forms-status-on-My-VA#project-outline-forms-status-on-my-va-mvp)

## Routes to code
[Forms Status on My VA MVP - #81849](https://github.com/department-of-veterans-affairs/va.gov-team/issues/81849)

## Contacts
- _All team members may also be reached via team slack channel: `#accountexp-authexp`_

### Team Members
- DSVA Product Lead: Chante Lantos-Swett, chante.lantosswett@va.gov
- Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us
- [Full team roster](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization#team)

### Outage Contacts:
- Authenticated Experience My VA team Frontend engineer: Allison Lu, allison@cityfriends.tech & Daniel Miller, daniel.miller@agile6.com
- Authenticated Experience My VA team Backend engineer : Tom Harrison, tom.harrison@adhocteam.us


## Troubleshooting

### Errors and Metrics
[Playbook: Error and Traffic Monitor Alerts](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md#playbook-error-and-traffic-monitor-alerts)
[Playbook: Scheduled Maintenance](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/auth-experience/playbooks/monitoring.md#playbook-scheduled-maintenance)


### Issue investigation steps
Depending on the errors encountered our team would reach out to contacts with the corresponding upstream connections. A full list of datapoints/features on My VA and corresponding owners and means of contact can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/README.md#my-va-features).


### Flipper Features and Rollback
- The feature flag for this feature is: `my_va_form_submission_statuses`

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
