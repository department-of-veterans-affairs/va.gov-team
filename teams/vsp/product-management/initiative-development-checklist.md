# Platform initiative development checklist

### Ask yourself the questions below weekly, starting from Day 1.

This checklist is for you to gut check that you've taken all of the steps necessary for your new platform tool, service, or feature to be successful. You won't have answers to all of these questions right away, and some you'll want to take action on multiple times, but you should check in regularly to make sure these things are happening iteratively over the lifetime of the thing you're creating and maintaining.

---

## Is this service / tool / feature...

### ...usable?

- [ ] [Usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/lead-researcher-checklist.md) indicates that this doesn't worsen the quality of VFS product builds (collaborate w/your team's Designer, or w/the Service Design team)
- [ ] [Usability testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/lead-researcher-checklist.md) indicates new changes enable VFS teams to do what they need to do (collaborate w/your team's Designer, or w/the Service Design team)
- [ ] Everything is [508 Accessible](https://github.com/department-of-veterans-affairs/va.gov-team/blob/de1d32ebfc17d4b887133e33d946ece5a12913d8/platform/accessibility/README.md) and there are no Sev 1 accessibility bugs (collaborate w/Product Support team)
- [ ] Content in and about the service / feature / tool is written pursuant to our content style guide (collaborate w/Content & IA team)
- [ ] *(if applicable)* Everything is consistent with VA's [Design System](https://design.va.gov/) (Collaborate w/Product Support team)
- [ ] [End-to-end manual QA](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/README.md) is complete and there are no Sev1 bugs (collaborate w/Product Support team)
- [ ] [End-to-end UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md)(with real users) is complete and there are no Sev1 bugs (collaborate w/your team's Designer, or w/the Service Design team)
- [ ] *(if applicable)* Availability and latency targets are defined

### ...findable?

- [ ] User guide and other supporting documentation are available in the appropriate locations (collaborate w/Content & IA team)
- [ ] Nav and cross-links within documentation are consistent with VSP's information architecture guidance (collaborate w/Content & IA team)

### ...compliant w/VA official stuff?

- [ ] *(if applicable)* Changes have appropriate ATO (collaborate w/Ops team)

### ...measurable?

- [ ] KPIs are defined and tracked (collaborate w/Analytics team)
- [ ] Service / tool / feature is included in the [VSP Feature Tracker](https://docs.google.com/spreadsheets/d/1Fn2lD419WE3sTZJtN2Ensrjqaz0jH3WvLaBtn812Wjo/edit#gid=0)
- [ ] *(if applicable)* [Google Analytics / Google Tag Manager](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/analytics-communication-guide.md#requesting-google-analytics-implementation-or-qa) setup is complete (collaborate w/Analytics team)
- [ ] Phased, data-informed [release plan](/) is complete
- [ ] *(if applicable)* Monitoring is setup correctly and working

### ...performant, secure, and reliabile?
- [ ] If any user data is handled through this service / tool / feature, the private data is kept safe, including not logging PII
- [ ] Service / tool / feature doesn't introduce new vulnerabilities
- [ ] Service / tool / feature has 90% [unit test coverage](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/unit-testing/README.md), running in CI/CD
- [ ] Service / tool / feature can handle anticipated load and traffic spikes, with [a completed load test](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/load-testing/README.md)
- [ ] Rate limits are set
- [ ] Platform performance SLOs are met

### ... supportable?
- [ ] Usability testing with VSP indicates that this doesn't significantly hinder VSP's ability to scale
- [ ] Dashboards and alerts are set up for finding and investigating issues
- [ ] Points of contact are documented for service / tool / feature and any new backend dependencies
- [ ] There's a [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/34add7c7b3d558158ccf3f599e79c2380076481c/platform/product-management/product-outline-template.md)
- [ ] It has been incorporated into orientation materials

### ...marketable?
- [ ] External comms are ready to go in the Newsletter, Documention homepage, etc (collaborate w/Service Design)
- [ ] You've done a [Go/No Go meeting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/go-no-go-meeting-template.md)
- [ ] Training, outreach, or other adoption-oriented activities are planned
