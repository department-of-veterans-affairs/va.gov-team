# Downtime Notifications Technical Overview

This service gives front-ends the ability to lookup whether or not there's a current or upcoming known downtime for a given backend. PagerDuty is the source of truth for this data, but we cache this data inside the vets-api database. There's a Sidekiq job which polls for PagerDuty maintenance windows for a list of services in the environment, which polls every 3 minutes.

![Downtime Notifications Technical Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/downtime-notifications/DowntimeNotifications.png)

## Setting up a new service

To establish maintenance (downtime) windows for a new service, you need 3 components:

- A PagerDuty service
- A configuration update to tell the Sidekiq job to start polling this new service for maintenance windows
- Front-end implementation to show a message to users

### PagerDuty Service

The list of external services in PagerDuty is maintained by Terraform. A new item should be added in the [external_services.tf](https://github.com/department-of-veterans-affairs/devops/blob/master/terraform/environments/dsva-pagerduty/external_services.tf) file. The description should contain a link to the documentation for this backend service to aid with incident response.

### Configuration update in vets-api

Once this is setup, the ID should be added to the Settings.maintenance.services key in the [vets-api config Jinja template](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/vets-api/prod-settings.local.yml.j2). In the future this may be automated.

### Front-end implementation

You can find examples throughout the vets-website repo. A good simple example to start with it in the [search feature](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/search/containers/SearchApp.jsx), look for "Downtime".
