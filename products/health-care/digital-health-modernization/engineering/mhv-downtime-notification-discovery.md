# Discovery: MHV on VA.gov downtime notifications

Created: 2023-12-21

This document is intended to answer questions around "How might MHV on VA.gov alert users about EHR system downtime?", per [va.gov-team/issues/70798](https://github.com/department-of-veterans-affairs/va.gov-team/issues/70798). 

## Executive summary

### Current state of Downtime Alerts on MHV-on-VA.gov

In December 2023, downtime notifications were implemented on the secure messaging, medications, and medical records applications on VAgov, following [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications).

The recommendations below build upon that initial implementation and assume the following:
- The MHV landing page doesn't yet have any downtime notification, leaving users to discover downtime when they reach a tool page.
- The three tool pages besides Appointments all have out-of-the-box downtime alerts set up, triggered by PagerDuty. This implementation includes 1) a modal that displays during the 60 minutes leading up to a maintenance window and 2) a `va-alert component` that replaces the react app during the window.
  - It was discovered later that this particular PD service was set up by the Identity team, and is intended to cover the MHV login service only.
- The initial implementation of downtime alerts on the tool pages has one accessibility issue that needs to be addressed: during the maintenance window there is no H1 on the page, so the user (and especially one using assistive tech) can't easily tell what tool is missing. There are also content improvements recommended by CAIA.
  - Note: also consult IA about whether a breadcrumb should be present during downtime
- (Appointments has a separate API and PagerDuty)

### Iteration recommendation

General UX expectations for downtime alerts:
- Begin messaging in the 60 minutes prior to the maintenance window
- Always include start and end times in alert copy
- Modals and in-page alerts can be used
- When tools are hidden it should be clear what tool is missing


#### PagerDuty services setup

Four new PagerDuty services are needed
- "All MHV APIs" – this would be the replacement trigger for the existing MHV-login PD service. 
  - Note that this service needs to be carefully documented, so that teams know exactly what functionality is and isn't associated
- Secure-messaging
- Medical records
- Medications


#### Landing page 

The MHV Landing Page should implement the following UX for a downtime window scheduled in PagerDuty:
- In the 60 minutes leading up to the window, a warning (orange) `va-alert`
- During window, error (red) `va-alert`
- When individual APIs have a PagerDuty window,the alert on the landing page should be specific about which tool(s) is or will be unavailable.

See [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705509202969/42becb4e1bcb478d93488ced78511a9c6acf9276?sender=u4c72b2ff45e7c2f8e2942500) for visuals and content.

#### Tool pages

- In the 60 minutes leading up to the window, a modal should show on page load, and a warning (orange) `va-alert` should remain on the page.
- During window, error (red) `va-alert` replaces tool application, with page's other components (and especially navigational ones like H1 and breadcrumbs) still present at the top of the page.

See [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705509202969/42becb4e1bcb478d93488ced78511a9c6acf9276?sender=u4c72b2ff45e7c2f8e2942500) for visuals and content.

See below for some recommendations on how to implement changes. Some refactor of either the tool pages or the `DowntimeNotification` component will be necessary to achieve the recommended UX.

## General context

- In Dec 2023, teams working on MHV on VA.gov began implementing downtime notifications using the Platform's [Downtime Notification](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications) tools and recommendations.
- The initial work is to add notifications when "all" of MHV is down. Using PagerDuty, a person can manually set a maintenance window or mark that an `mhv` service as down. **Decision needed on what should count as general/all for MHV**
- It was proposed that tool-specific `mhv-` services be defined in PagerDuty, e.g. `mhv-medications`, so individual apps could have individual downtime downtime notifications
- Apps have some control over what the `DowntimeNotification` would hide during downtime. An app like the MHV Landing Page could show a notification without hiding any links if desired.
- "Automated" downtime notifications do not appear to be covered by the existing Downtime Notification implementation.
- If multiple `mhv-` services are defined, the Landing Page could indicate to the user what parts of MHV on VA.gov are unavailable

## Recommendations

### MHV Appliations should use a custom Downtime notification

The Platform's [Downtime Notification](https://depo-platform-documentation.scrollhelp.site/developer-docs/downtime-notifications) tools and recommendations provide an experience that isn't quite what we want for MHV downtime maintenance. 

In particular, we want:

- An h1 heading identifying the app/page to appear along with the downtime alert. The platform downtime notification component doesn't provide this.
- The alert to follow the UX and content recommended in the [Mural designs](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705509202969/42becb4e1bcb478d93488ced78511a9c6acf9276?sender=u4c72b2ff45e7c2f8e2942500)
  - App/tool name appears inside the alert. The platform component shows generic "this tool" text.
  - Shows times for maintenance window. The platform component does not show start or end times
- consistency across all MHV apps/pages


## Potential enhancements

### Refactor Downtime notification component

A [draft PR to refactor the DowntimeNotification component](https://github.com/department-of-veterans-affairs/vets-website/pull/27215) was started while investigating the functionality of the current component.

### Add optional header to `DowntimeNotification` component

Currently, the `DowntimeNotification` doesn't offer the option to display an h1 header, and this causes accessibility issues for apps that don't provide an `<h1>` outside of the downtime component hierarchy. Many apps wrap their entire app in the `DowntimeNotification` component, and that results in the app's internal headers not rendering during downtime.

We should add a prop to the  `DowntimeNotification` that can render a header as part of the [`Down` component](https://github.com/department-of-veterans-affairs/vets-website/blob/6c7a067d9961513ce5dc99423b80c5a8bf982f40/src/platform/monitoring/DowntimeNotification/components/Down.jsx) that renders during downtime by default.


### Per-MHV-app downtimes

If we are able to set maintenance windows per MHV app, we could provide more granular alerts. This would require each team have an application-specific PagerDuty and the landing page would need logic to list individual service maintenance windows.

| MHV application | External service key | Notes |
| - | - | - |
| MHV auth | `mhv` | [Already exists](https://github.com/department-of-veterans-affairs/vets-website/blob/3d41a1ee7dc50997887951ec7af4cd52653a5a47/src/platform/monitoring/DowntimeNotification/config/externalServices.js#L32). Ideally the service key could be renamed to something more specific like `mhv-auth`, since it is was [set up for identity/auth concerns](https://dsva.slack.com/archives/C04DRS3L9NV/p1704471144967659?thread_ts=1702663719.861489&cid=C04DRS3L9NV) | 
| All MHV down | `mhv-apps` | Something hyphenated needed due to plain `mhv` being used for auth downtime |
| Appointments | `mhv-appointments` | They already have `vaos`, unsure if change is really needed |
| Medical Records | `mhv-medical-records` |  |
| Medications | `mhv-medications` |  |
| Secure Messaging | `mhv-secure-messaging` |  |


#### MHV Landing page should implement a `MultiDowntimeNotification`

Tthe MHV Landing does not represent one particular service, so it could show MHV-wide downtime or a list of services that are down or will go down. To this end, the MHV Landing page should create a `MultiDowntimeNotification` component that can be used in conjunction with the existing `DowntimeNotification` component and supporting code.

The MHV on VA.gov landing page leads to multiple MHV services, so it might make sense to show information about what services are unavailable when the downtime/outage is for some, but not all MHV services.

The existing Downtime Notification implementation can be made aware of multiple services, though does not provide custom messaging around which services/parts are down.


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

