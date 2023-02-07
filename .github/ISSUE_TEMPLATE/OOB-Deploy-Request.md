   ---
name: OOB Deploy Request
about: To request Out of Band deployment
title: OOB Deploy Request
labels: frontend, operations, platform-tech-team-support
assignees: ''

---

# Instructions
Fill out Details of need and the PRs related to OOB sections below.

## PRs Related to OOB
- Please provide the list of PRs related to the need for this OOB Deploy below:
   > PR?????

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
 - [ ] The OOB Deploy Request is after the 2pm EST cutoff for regular deploy.[^1] 
 - [ ] The OOB Deploy Request is critial and must be resolved before the next automated deploy.
 - [ ] You are prepared to create an Incident Post Mortem[^2] within two business days.

[^1]: (See [Deployment Policy](https://vfs.atlassian.net/wiki/spaces/SUP/pages/1279787009/Deployment+Policies) and [Deployment Schedules](https://depo-platform-documentation.scrollhelp.site/developer-docs/Deployments.1844641889.html))
[^2]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems


*Performed by Platform Support Team*
 - [ ] PagerDuty OOB Deploy Incident Opened
 - [ ] OCTO-DE staff acknowledgment of Request, via `/pd trigger`
 - [ ] Notification is posted in the appropriate Slack support and team Channels
 - [ ] Infrastructure/Operations has acknowledge the Requests
 - [ ] Security Team has Reviewed the requests

 CC: @department-of-veterans-affairs/vsp-operations ,  @department-of-veterans-affairs/vsp-product-support
