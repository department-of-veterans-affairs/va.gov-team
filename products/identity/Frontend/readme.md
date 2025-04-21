# Identity Frontend

## Getting up and running
Follow the VA Platform Developer Docs to get up and running. Do not skip steps as this may delay access.

1. [Frontend](https://depo-platform-documentation.scrollhelp.site/developer-docs/setting-up-your-local-frontend-environment) - `vets-website`
    - Uses JavaScript, React, Redux, Sass, and VA Design System
    - Until Node is upgraded use Node `14.16.x` using a Node version manager like `nvm`
2. [Backend](https://depo-platform-documentation.scrollhelp.site/developer-docs/base-setup-vets-api) - `vets-api`
    - Uses Ruby on Rails, Redix, and Postgres
    - Use a Ruby version manager like `chruby` or `rvm`. (Do not use System Ruby if using a Mac)
    - Prefer native-build over docker-build. Easier to troubleshoot and grab logs

With both `vets-website` and `vets-api` running in parallel, localhost will be ready for most of your daily needs. Depending on context some additional needs

## General Information
### [Feature Flags](feature-flags.md)
### [Google Analytics](analytics.md)
### [Error Codes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/login/error-messages/sign-in-error-handling.md)
### [Testing](testing.md)

## Useful Links
- [Google analytics](https://analytics.google.com/analytics/web/#/report-home/a50123418w177519031p176188361) ([Access Request](https://vfs.atlassian.net/wiki/spaces/VI/pages/1992556609/Frontend+Onboarding#Requesting-Access-to-Google-Analytics)) - Frontend Event Tracking
- [Sentry](http://sentry.vfs.va.gov/organizations/vsp/issues/) **(Requires SOCKS)** - Frontend Error and Performance Monitoring
- [Jenkins](http://jenkins.vfs.va.gov/) **(Requires SOCKS)** - Code Build/Deploy Monitoring and Logs
- [Datadog](https://app.datadoghq.com/dashboard/lists) (See Info Panel Below) - Backend Monitoring and Performance

