# RFC: Upgrade to Sentry 10 on-premise
- Date: 2020-03-24
- Related Issue: [VSP Epic #6769](https://github.com/department-of-veterans-affairs/va.gov-team/issues/6769_)

## Background

Sentry released a major upgrade of on-premise offering in January 2020. Our installation can be upgraded but this will require some methodical discovery and planning.

## Motivation

Major motivations for upgrading to Sentry 10 include:

- [cross-project issues](https://blog.sentry.io/2019/03/06/new-features-greater-visibility#cross-project-issues)
- [improved searching interface](https://blog.sentry.io/2019/03/06/new-features-greater-visibility)
- [integration platform](https://blog.sentry.io/2019/08/21/sentrys-internal-integrations-build-internal-tools-that-fit-your-workflow) for improving custom workflows
- general bugfixes and performance increases

## Design
_Explain the proposed changes in enough detail so that a team member with working knowledge 
of the project could implement the change themselves. Bonus points if this is easily mappable
to user stories or specs._

See [architecture design diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/tools/backend/sentry-design.md) for current design approach

## Risks
_What are the risks of the proposed changes?_

- risk of experiencing errors in the upgrade procedure ([check here](https://github.com/getsentry/onpremise/issues/387) and [here](https://github.com/getsentry/onpremise/issues/))
- risk of challenges upgrading to a newer (`vagov`) VPC as VA certs will have to be trusted for each container
- risk of excessive "babysitting" of a complex architecture

## Alternatives
_What other alternatives solutions were considered, why weren't they chosen?_

#### Migrating to Sentry SaaS Managed Service

- Sentry SaaS is not FedRAMP certified
- Complications with sending data through the TIC
- Risk of leaking PII to external provider
