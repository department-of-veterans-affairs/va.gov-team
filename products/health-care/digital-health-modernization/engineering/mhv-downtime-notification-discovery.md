# MHV on va.gov downtime notifications

Created: 2023-12-21

## In Brief

- In late 2023, teams working on MHV on va.gov began implementing downtime notifications using the Platform's [Downtime Notification](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications) tools and recommendations.
- The initial work is to add notifications when "all" of MHV is down. Using PagerDuty, a person can manually set a maintenance window or mark that an `mhv` service as down. **Decision needed on what should count as general/all for MHV**
- It was proposed that `mhv-` services be defined in PagerDuty, e.g. `mhv-medications`, so individual apps could have individual downtime downtime notifications
- Apps have some control over what the `DowntimeNotification` would hide during downtime. An app like the MHV Landing Page could show a notification without hiding any links if desired.
- "Automated" downtime notifications does not appear to be covered by the existing Downtime Notification implementation.

## Potential enhancements

### Automated notifications

_Discuss "automated" downtime notifications_

PagerDuty has "incident" service integrations, which theoretically could be set up to trigger "an incident"

## Notes

### PagerDuty, downtime, maintenance windows

What the Platform refers to as downtime is tied to what PagerDuty calls [maintenance windows](https://support.pagerduty.com/docs/maintenance-windows). A PagerDuty user can schedule a maintenance window or immediately put a service in maintenance mode. How this affects a website or service depends on how PagerDuty has been integrated with the website or service. For VA.gov Frontend applications, the `DowntimeNotification` component was created to show one of two types alerts and optionally hide content.



## Related links

- [MHV-52770 downtime notifications](https://github.com/department-of-veterans-affairs/vets-website/pull/27233)
- [Platform docs on "downtime notifications"](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications)

