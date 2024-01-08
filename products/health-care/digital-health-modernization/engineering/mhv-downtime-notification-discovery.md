# Discovery: MHV on VA.gov downtime notifications

Created: 2023-12-21

This document is intended to answer questions around "How might MHV on VA.gov alert users about EHR system downtime?", per [va.gov-team/issues/70798](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70798). There is a platform-recommended approach for downtime notifications which can guide "single service" or "overall" downtime. For a "list of applications/services that are down" notification, relevant to a landing page that points to many different applications, there is some prior art.

## In Brief

- In late 2023, teams working on MHV on VA.gov began implementing downtime notifications using the Platform's [Downtime Notification](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications) tools and recommendations.
- The initial work is to add notifications when "all" of MHV is down. Using PagerDuty, a person can manually set a maintenance window or mark that an `mhv` service as down. **Decision needed on what should count as general/all for MHV**
- It was proposed that `mhv-` services be defined in PagerDuty, e.g. `mhv-medications`, so individual apps could have individual downtime downtime notifications
- Apps have some control over what the `DowntimeNotification` would hide during downtime. An app like the MHV Landing Page could show a notification without hiding any links if desired.
- "Automated" downtime notifications do not appear to be covered by the existing Downtime Notification implementation.
- If multiple `mhv-` services are defined, the Landing Page could indicate to the user what parts of MHV on VA.gov are unavailable

## Recommendations

### Appliations should use the existing Downtime notification

MHV application teams should use the Platform's [Downtime Notification](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications) tools and recommendations. MHV applications should create application-specific "external service" entries and use that in addition to an MHV-wide entry.

| MHV application | External service key | Notes |
| - | - | - |
| MHV auth | `mhv` | [Already exists](https://github.com/department-of-veterans-affairs/vets-website/blob/3d41a1ee7dc50997887951ec7af4cd52653a5a47/src/platform/monitoring/DowntimeNotification/config/externalServices.js#L32). Ideally the service key could be renamed to something more specific like `mhv-auth`, since it is was [set up for identity/auth concerns](https://dsva.slack.com/archives/C04DRS3L9NV/p1704471144967659?thread_ts=1702663719.861489&cid=C04DRS3L9NV) | 
| All MHV down | `mhv-apps` | Something hyphenated needed due to plain `mhv` being used for auth downtime |
| Appointments | `mhv-appointments` | They already have `vaos`, unsure if change is really needed |
| Medical Records | `mhv-medical-records` |  |
| Medications | `mhv-medications` |  |
| Secure Messaging | `mhv-secure-messaging` |  |

### MHV Landing page should implement a `MultiDowntimeNotification`

Tthe MHV Landing does not represent one particular service, so it should show MHV-wide downtime or a list of services that are down or will go down. To this end, the MHV Landing page should create a `MultiDowntimeNotification` component that can be used in conjunction with the existing `DowntimeNotification` component and supporting code.

## Current priorities

1. Have all MHV on VA.gov applications present a downtime notification based on the "general"/"all" service defined in PagerDuty. The MHV application teams have already created this: [MHV-52770 downtime notifications](https://github.com/department-of-veterans-affairs/vets-website/pull/27233)
1. Get additional PagerDuty "services" created for individual MHV applications, so we can set a downtime notification around particular MHV applications. The `DowntimeNotification` supports checking multiple "external services," so once the PagerDuty services are created, and are defined in [devops code](https://github.com/department-of-veterans-affairs/devops/blob/67c1711a18486e0425bfb4795bb375bbe9fea31a/ansible/deployment/config/vets-api/prod-settings.local.yml.j2#L320) and [externalServices.js](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/monitoring/DowntimeNotification/config/externalServices.js), teams can update their applications to also respect application-specific downtime.

## Potential enhancements

### Refactor Downtime notification component

A [draft PR to refactor the DowntimeNotification component](https://github.com/department-of-veterans-affairs/vets-website/pull/27215) was started while investigating the functionality of the current component.

### Add optional header to `DowntimeNotification` component

Currently, the `DowntimeNotification` doesn't offer the option to display an h1 header, and this causes accessibility issues for apps that don't provide an `<h1>` outside of the downtime component hierarchy. Many apps wrap their entire app in the `DowntimeNotification` component, and that results in the app's internal headers not rendering during downtime.

We should add a prop to the  `DowntimeNotification` that can render a header as part of the [`Down` component](https://github.com/department-of-veterans-affairs/vets-website/blob/6c7a067d9961513ce5dc99423b80c5a8bf982f40/src/platform/monitoring/DowntimeNotification/components/Down.jsx) that renders during downtime by default.

### Landing page lists which services are down

The MHV on VA.gov landing page leads to multiple MHV services, so it might make sense to show information about what services are unavailable when the downtime/outage is for some, but not all MHV services.

The existing Downtime Notification implementation can be made aware of multiple services. Some applications also use custom components to render notifications rather than use the default `DowntimeApproaching` and `Down` components, as supported by the `DowntimeNotification` component via a `render prop`. The tradeoff is that the app would need to handle the `downtimeApproaching` vs `down` states itself; This is a minor detail.

### Automated notifications

_Discuss "automated" downtime notifications_

PagerDuty has "incident" service integrations, which theoretically could be set up to trigger "an incident"

## Notes

### PagerDuty, downtime, maintenance windows

What the Platform refers to as downtime is tied to what PagerDuty calls [maintenance windows](https://support.pagerduty.com/docs/maintenance-windows). A PagerDuty user can schedule a maintenance window or immediately put a service in maintenance mode. How this affects a website or service depends on how PagerDuty has been integrated with the website or service. For VA.gov Frontend applications, the `DowntimeNotification` component was created to show one of two types alerts and optionally hide content.

### Maintenance banner

The Design system documents a `MaintenanceBanner` component that looks similar to the `va-alert` component, but is [used only for site-wide messages](https://design.va.gov/components/banner/maintenance#usage):

> This component is ONLY for site-wide system status messages. There is no other appropriate use.

### Customization Example: Appointments

VAOS, aka Appointments, customizes what the `DowntimeNotification` renders. In [numerous places](https://github.com/search?q=repo%3Adepartment-of-veterans-affairs%2Fvets-website+DowntimeNotification+path%3A%2F%5Esrc%5C%2Fapplications%5C%2Fvaos%5C%2F%2F&type=code) the VAOS app imports the platform component and uses the component's `render` prop to render a [custom DowntimeMessage component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/vaos/components/VAOSApp/DowntimeMessage.jsx).

#### `DowntimeMessage` example

 The following is a screenshot of the `DowntimeMessage` component that would appear due to a PagerDuty maintenance window: 
 
![VA Appointments showing DowntimeMessage](https://github.com/department-of-veterans-affairs/va.gov-team/assets/279327/ac0d5e49-9b30-4e5d-a2ef-551662447aeb)

#### `AppUnavailable` example

The following shows an alert that the Appointments app displays based on the value of a feature toggle:

![VA Appointments showing AppUnavailable](https://github.com/department-of-veterans-affairs/va.gov-team/assets/279327/bf5b2bd1-8ac8-42a7-9d86-f8a41dc16f53)


## Related links

- [MHV-52770 downtime notifications](https://github.com/department-of-veterans-affairs/vets-website/pull/27233)
- [Platform docs on "downtime notifications"](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications)
- [Removal of end time from `Down` messaging](https://github.com/department-of-veterans-affairs/vets-website/pull/10416)

