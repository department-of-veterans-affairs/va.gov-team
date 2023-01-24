# Product development checklist
> 🚩 *For substantial updates, please create a PR and tag a PM for review e.g. Lisa Koenigsberg, Mickin Sahni, Shira Goodman*

### Ask yourself the questions below weekly, starting from Day 1.

This checklist is for you to gut check that you've taken all of the steps necessary for your feature to be successful. You won't have answers to all of these questions right away, and some you'll want to take action on multiple times, but you should check in to make sure these things are happening iteratively over the lifetime of your product.

This resource is meant to be used in parallel with the [Platform Collaboration Cycle](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/index.html). The items below that correspond with one or more Platform collaboration points are starred `*`. The Platform Collaboration Cycle is designed to guide your team through successful development but it is still your responsibility to ensure that all the points below are sufficiently met.

_Note: as always, use the [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) Slack channel whenever you have a question on how to proceed!_

---

## Is my product / feature...

### ...usable (for ALL users)?

- [ ] Usability testing indicates new changes improve / don't worsen back-of-house VA employee experience
- [ ] [Usability testing](https://depo-platform-documentation.scrollhelp.site/research-design/research-checklist) indicates new changes enable users to do what they need to do `*`
- [ ] Everything is [508 Accessible](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/README.md) and there are no Sev 1 accessibility bugs `*`
- [ ] Your content adheres to the [VA.gov content style guide](https://design.va.gov/content-style-guide/) and meets [plain language best practice guidance](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-best-practices.md) `*`
- [ ] Everything is consistent with VA's [Design System](https://design.va.gov/) `*`
- [ ] Downtime notifications and error messages:
  - [ ] [Error message verbiage and style guide](https://design.va.gov/patterns/messaging-error-messages)
  - [ ] [Error message configuration instructions](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/downtime-notifications/)
- [ ] [End-to-end manual QA](https://depo-platform-documentation.scrollhelp.site/developer-docs/qa-and-accessibility-testing) is complete and no Sev1 bugs `*`
- [ ] [End-to-end UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md)(with real users) complete and no Sev1 bugs
- [ ] Availability and latency targets are defined `*`

### ...findable?

- [ ] [URL, nav, bread crumbs, and cross-links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-best-practices.md) are consistent with VA's style guide and map to the user's mental model `*`
- [ ] [SEO](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/seo-best-practices.md) is baked into everything
- [ ] Static entrance/intro content is in place `*`
- [ ] [Redirects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md) (if necessary) from legacy tools/pages are in place

### ...compliant w/VA official stuff?

- [ ] Changes adhere to DEPO's [7 Digital Modernization Principles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-gov-relaunch-2018/va-gov-strategy/digitalmodernizationstrategy.pdf)
- [ ] Changes have appropriate ATO

### ...measurable?

- [ ] [KPIs are defined and tracked](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/kpi-tracking/kpi-process.md)
- [ ] Feature is included in the weekly Product Health Report
- [ ] [Google Analytics / Google Tag Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/analytics-request-guide.md#requesting-google-analytics-implementation-and-qa) setup is complete `*`
- [ ] Phased, data-informed [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md) is complete `*`
- [ ] Monitoring is setup correctly and working `*`

### ...secure and reliable?
- [ ] Users' private data is safe, including not logging PII `*`
- [ ] Feature doesn't introduce new vulnerabilities `*`
- [ ] Playbook exists on most likely failure modes and how to respond quickly to issues `*`
- [ ] The feature has 90% [unit test coverage](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/getting-started/common-tasks/new-unit-test/), running in CI/CD
- [ ] Feature can handle anticipated load and traffic spikes, with [a completed load test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/load-testing/README.md)
- [ ] Rate limits are set

### ... supportable?
- [ ] Dashboards and alerts are set up for finding and investigating issues
- [ ] Point of contact are documented for the app itself and any new backend dependencies `*`
- [ ] There's a [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md) (and [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/product/initiative-brief-template.md))
- [ ] [Contact centers know how to help users who call in about the feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/request-contact-center-review.md) `*`

### ...marketable?
- [ ] You've done a [Go/No Go meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md)
