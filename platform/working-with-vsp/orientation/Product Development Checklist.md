# Product development checklist

### Ask yourself the questions below weekly, starting from Day 1.

This checklist is for you to gut check that you've taken all of the steps necessary for your feature to be successful for users. You won't have answers to all of these questions right away, and some you'll want to take action on multiple times, but you should check in to make sure these things are happening iteratively over the lifetime of your product.

This resource is meant to be used in parallel with the [VSP Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle). The items below that correspond with one or more VSP collaboration points are starred `*`. The VSP collaboration cycle is designed to guide your team through successful development but it is still your responsibility to ensure that all the points below are sufficiently met.

_Note: as always, use the **#vfs-platform-support** Slack channel whenever you have a question on how to proceed!_

---

## Is my product / feature...

### ...usable (for ALL users)?

- [ ] Usability testing indicates new changes improve / don't worsen back-of-house VA employee experience
- [ ] [Usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/lead-researcher-checklist.md) indicates new changes enable users to do what they need to do `*`
- [ ] Everything is [508 Accessible](https://github.com/department-of-veterans-affairs/va.gov-team/blob/de1d32ebfc17d4b887133e33d946ece5a12913d8/platform/accessibility/README.md) and there are no Sev 1 accessibility bugs `*`
- [ ] Everything is written in [plain language](https://design.va.gov/content-style-guide/) `*`
- [ ] Everything is consistent with VA's [Design System](https://design.va.gov/) `*`
- [ ] [Downtime notifications and error messages](https://design.va.gov/patterns/messaging-error-messages) are documented 
- [ ] [End-to-end manual QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/README.md) is complete and no Sev1 bugs `*`
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
- [ ] [Google Analytics / Google Tag Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/analytics-communication-guide.md#requesting-google-analytics-implementation-or-qa) setup is complete `*`
- [ ] Phased, data-informed [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/97759a81a47c73da8bf03e35f3a13bb3c689d18b/platform/product-management/release-plan-template.md) is complete `*`
- [ ] Monitoring is setup correctly and working `*`

### ...secure and reliable?
- [ ] Users' private data is safe, including not logging PII `*`
- [ ] Feature doesn't introduce new vulnerabilities `*`
- [ ] Playbook exists on most likely failure modes and how to respond quickly to issues `*`
- [ ] The feature has 90% [unit test coverage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/unit-testing/README.md), running in CI/CD
- [ ] Feature can handle anticipated load and traffic spikes, with [a completed load test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/load-testing/README.md)
- [ ] Rate limits are set

### ... supportable?
- [ ] Dashboards and alerts are set up for finding and investigating issues
- [ ] Point of contact are documented for the app itself and any new backend dependencies `*`
- [ ] There's a [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/34add7c7b3d558158ccf3f599e79c2380076481c/platform/product-management/product-outline-template.md)
- [ ] [Contact centers know how to help users who call in about the feature](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/call-center/request-contact-center-review.md) `*`

### ...marketable?
- [ ] Product brief (with visuals), outlining the value and functionality of your product is in github
- [ ] You've done a [Go/No Go meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md)
