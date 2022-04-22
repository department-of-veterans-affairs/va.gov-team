# Platform Product & Service Directory & Changelog
[View Changelog](#Changelog)

## VSP Products & Services

|Product |Latest Version |Last Updated |
|----|----|----|
|[Automated Code Quality](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/automated_code_quality)|v1.2 |04-02-2020 |
|[Best-in-Class App](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/best-in-class-app)|||
|[Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/vsp-collaboration-cycle)|||
|[Documentation Site](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/documentation-site)|||
|[Downtime Notifications]()|||
|[Endpoint Mapping](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/frontend-product-mapping)|||
|[External Service Monitoring](./external-service-monitoring)|v0.1|04-28-2020|
|[Feature Toggles](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/feature-toggles)|v0.3|04-01-2020|
|[New App Generator](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/new-app-generator)|v1.0|04-02-2020|
|[Product Success Tool](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/product-success-tool)|||
|[Review Instances](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/review-instances)|||
|[Scorecard](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/scorecard)|||
|[User Management](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/vsp_user_management_approach)|||
|[Website Performance Monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/web-perf-monitoring)|v0.1|04-10-2020|

---

## Changelog
### Sprint 24 (04-06-2020 - 04-28-2020)
[Error Monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/error-monitoring)
- Sentry was upgraded to version 9.1.2 and the BE Tools team is assisting setting up each team wanting to work in Sentry in order to setup the filtering and triaging of alerts.  Instructions on configuring Sentry can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/d0ee4cc50068f41083732455a7df86b6b5d59b67/platform/engineering/sentry-configuration.md)

### Sprint 23 (04-02-2020 - 4-14-2020)
- [Automated Code Quality](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/automated_code_quality) - v1.2
  - ESLint - Publish and setup the second set of standard linting rules for [trial](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md) for the next 4 weeks. Feedback from VFS teams will be collected during this period. Please use the tag `@platform-release-tools` or message any of the release tools team members in Slack and provide us with your feedback.

### Sprint 22 (04-01-2020)
- [Feature Toggles](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/feature-toggles) - v0.3
  - Added sticky behavior so unauthenticated users can be locked into a particular variant by a unique ID
  - [Documentation](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/) updated to correct errors reported in the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) channel

### Sprint 21 (03-17-2020)
- [Automated Code Quality](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/automated_code_quality) - v1.1 
  - ESLint: First set of standard linting rules are [enforced](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md#SonarJS-deployed-rules)
- [Website Performance Monitoring](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/web-perf-monitoring) - v0.1
  - Establish VSP performance standards
  - Rollout Speedcurve to Facility Locator Team for feedback around setup and usage
 
### Sprint 20 (03-03-2020)
- [Automated Code Quality](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/platform/automated_code_quality) - v1.0
  - ESLint- Publish and setup the first set of standard linting rules for [trial](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/frontend/eslint/new-rule-release-notes.md#SonarJS-release-rules)
  - Manual Review Triggers - Publish a [list of platform standards around code changes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/manual-review-triggers.md) that will force a manual review by the FE developers
