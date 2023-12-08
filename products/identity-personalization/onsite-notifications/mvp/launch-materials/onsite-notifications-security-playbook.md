# Onsite Notifications Security Playbook
**Last updated: May 31, 2023 - updated epic links**

## Product Description
[Onsite Notifications Product Outine](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/onsite-notifications/README.md)

## Routes to code
- [Onsite Notifications (MVP)](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30611)
- [Notification component build + implementation on My VA](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59398)

## Contacts

### Team Members:
- DSVA Product Lead: Samara Strauss, samara.strauss@va.gov
- My VA Team Product Manager: Anastasia Jakabcin, ana@adhocteam.us
- VA Notify Team Product Manager: Melanie Jones, melanie.jones@oddball.io
- VA Notify Team Product Owner: Beverly Nelson, beverly.nelson@va.gov



### Outage Contacts:
- Authenticated Experience My VA team Frontend engineer: Allison Lu (allison@cityfriends.tech), or Derrick Ellerbie (Derrick.ellerbie@Agile6.com)
- Authenticated Experience My VA team Backend engineer : Tom Harrison (tom.harrison@adhocteam.us)
- VA Notify Team Tech Lead: Kyle MacMillan, kyle.macmillan@oddball.io



## Troubleshooting

### Errors and Metrics
- Backend errors can be found in Sentry [here](http://sentry.vfs.va.gov/organizations/vsp/discover/results/?display=top5&field=url&field=count%28%29&field=count_unique%28issue%29&name=Errors+by+URL&query=event.type%3Aerror+has%3Aurl+controller_name%3Aonsite_notifications&sort=-count&statsPeriod=30d&widths=-1&widths=-1&widths=-1)

### Issue investigation steps
- The My VA team can be reached in the `#accountexp-authexp` Slack channel if there are any errors with Onsite Notifications on My VA.

### Flipper Features and Rollback
- The `show_dashboard_notifications` flipper can be used to turn this feature off and on for users in Staging and Production

## Security
No PII/PHI involved in this feature, or known/accepted security vulnerabitlities
