----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/developer-docs/Security-Review.1885733207.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----
# Security Review

All new services developed under Vets-API must undergo an internal security review prior to production launch. The purpose of this review is to dive into the implementation of a new service at the code level, and ensure that the accompanying OpenAPI specification is valid and complete. The following template should be used:

# Security Review Template

## Participants

- {{ participant }}

## Interfaces Documented (OpenAPI)

- [ ] Sufficient background information provided
- [ ] Data shape reflects implementation
- [ ] Authorization information
- [ ] Model documentation includes data element source and destination
- [ ] Model documentation includes data element sensitivity
- [ ] PTA submitted for service changes
- [ ] PIA updated if Privacy Office recommended
- [ ] Rate limits defined
- [ ] Size limits defined
- [ ] Latency expectations and guarantees defined
- [ ] Availability expectations and guarantees defined
- [ ] Maintenance windows documented (discouraged, but when applicable)
- [ ] Service dependencies documented
- [ ] Support escalation information documented (for service, and for service dependencies)


## Data Sensitivity Overview

{{ Notes on data sensitivity }}

## User Authentication

{{ Notes on user authentication }}

## User Authorization

{{ Notes on user authorization }}

## Data Scoping

- [ ] Is data sufficiently scoped to the user?
- [ ] If data is cached, is the cache scoped to the user?
- [ ] Are authorization policies well defined?

## Logging

- [ ] Requests are logged
- [ ] Logs are properly sanitized
- [ ] Exceptions are logged
- [ ] Exceptions are properly sanitized
- [ ] Dependency service requests are logged
- [ ] Requests are traceable

## Dependency Integrations

- [ ] All dependencies are monitored
- [ ] Inline requests are timed out
- [ ] High latency requests are backgrounded

## Alerting

- [ ] Product KPIs exist
- [ ] SLAs defined based on product KPIs
- [ ] SLOs defined in prometheus based on SLA requirements
- [ ] SLOs are tied to proper alert levels
- [ ] Team is on call and capable of addressing pages

## ATO Review

- [ ] All ATO documentation is updated to reflect new requirements
