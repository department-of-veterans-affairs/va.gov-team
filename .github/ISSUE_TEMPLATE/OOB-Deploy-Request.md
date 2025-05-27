---
name: OOB Deploy Request
about: To request Out of band deployment
title: OOB Deploy Request
labels: platform-tech-team-support
assignees: ''

---

# Instructions
Please fill out the necessary details and list the PRs related to the OOB deployment in the sections below.

## PRs Related to OOB
Please provide the list of PRs related to the need for this OOB Deploy below:
- PR link

## Active Daily Users Impacted
- How many active users are impacted at this time and day.
   >

## Has fix been confirmed in Staging?
- [ ] Yes
- [ ] No

## Description
- Please provide the details/reason for the OOB Deploy
   > Add Details Here ... 
   
## Verify The following
 - [ ] The OOB Deploy Request is after the cutoff time for the regular deploy.[^1] 
 - [ ] The OOB Deploy Request is critical and must be resolved before the next automated deploy.
 - [ ] You are prepared to create an Incident Post Mortem[^2] within two business days.

[^1]: (See [Deployment Policy](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies) and [Deployment Schedules](https://depo-platform-documentation.scrollhelp.site/developer-docs/Deployments.1844641889.html)
[^2]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems


*Performed by Platform Support Team*
 - [ ] PagerDuty OOB Deploy Incident Opened
 - [ ] OCTO-DE staff acknowledgment of Request, via `/pd trigger`
 - [ ] Notification is posted in the appropriate Slack support and team Channels
 - [ ] Infrastructure/Operations has acknowledge the Requests (This applies to revproxy and fwdproxy, but is not required for Frontend and Backend requests)
 - [ ] Security Team has Reviewed the requests (This is not necessary for requests that are not related to security)
