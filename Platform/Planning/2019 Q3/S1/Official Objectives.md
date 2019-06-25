# Q3 2019 Sprint 1 Dates
6/27/2019 - 7/9/2019

## Leadership
- Fully update VSP Product Model
- Propose system diagram for connecting objectives, to themes, to epics, to issues
- Collect baseline KRs
- (Problem statement) Difficulty knowing about longer-term tasks and how to plan them out

## Product Development Support
- Moving `vets.gov-team` repo content (Product/Design?) to `va.gov-team`
- Building out decks/agendas for practice-area-specific kickoffs
- ?

## Insights & Analytics Support
- Support VFS team analytics needs
- Deploy iteration of MVP Product Scorecard per user research findings
- Start regular/proceduralized collection of available contact center data

## Content & IA Support
- Support VFS team content & IA needs
- Answer the question: what documentation should I store where? (vets.gov-team, va.gov-team, vfs-teams, etc)
- Roadmap

## Tools & Improvements (1-2 too many objectives currently)
- (Code isolation / best practices) Finish MVP starter app (with generator) for VFS teams
- (Code isolation / best practices) Evaluating feature flag frameworks
- Start implementation on automated banner for DS Logon outage
- SLOs MVP: move into GitHub as formal advice
- (Discovery) Vet360 identity API changes and any potential needs on our end
- *(Stretch)* MVP of Status page for VA.gov stakeholders ([epic](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/16757), [issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/341))

## Triage
- Improved application-error metrics
    - Getting FE & BE application errors more integrated with our existing on-call infrastructure & procedures
    - Specifically: integrating Sentry with GitHub, defining triage procedure for Sentry, cleaning up Sentry items
- (Discovery) What are our communication channels with dependencies? How do we find out about issues, dependency upgrades, planned downtime?

## Operations
- (Continuation) Determine LOE and timing of CMS infra/ops transition
- Port remaining epics to `va.gov-team`
- CMS infrastructure move support (i.e. access models)
- VAEC continuation. Moving Jenkins, tearing down old infrastructure.
- Defining permission model for AWS and Terraform
    - Currently it's mostly "admin or nothing". Want to look into IAM groups.
