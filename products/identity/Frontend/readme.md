# Frontend Identity General

## Getting up and running
### Setting up
1. [`vets-website`](https://github.com/department-of-veterans-affairs/vets-website) up and running
2. [`vets-api`](https://github.com/department-of-veterans-affairs/vets-api) up and running
3. [`content-build`](https://github.com/department-of-veterans-affairs/content-build)* required for building local static pages, most Identity work can be completed without building this.

With both `vets-website` and `vets-api` running in parallel, localhost will be ready for most of your daily needs.

## General Information
### [Feature Flags](feature-flags.md)
### [Google Analytics](analytics.md)
### [Error Codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/login/error-messages/sign-in-error-handling.md)
### [Testing](testing.md)

## Useful Links
- [Google analytics](https://analytics.google.com/analytics/web/#/report-home/a50123418w177519031p176188361) ([Access Request](https://vfs.atlassian.net/wiki/spaces/VI/pages/1992556609/Frontend+Onboarding#Requesting-Access-to-Google-Analytics)) - Frontend Event Tracking
- [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/) **(Requires SOCKS)** - Frontend Error and Performance Monitoring
- [Jenkins](http://jenkins.vfs.va.gov/) **(Requires SOCKS)** - Code Build/Deploy Monitoring and Logs
> Mostly migrated away from Jenkins and using Github Actions instead
- [Datadog](https://app.datadoghq.com/dashboard/lists) (See Info Panel Below) - Backend Monitoring and Performance
- [Grafana](http://grafana.vfs.va.gov/?orgId=1) **(Requires SOCKS)** - Backend Monitoring and Logs
> Eventually will migrate away from Grafana
