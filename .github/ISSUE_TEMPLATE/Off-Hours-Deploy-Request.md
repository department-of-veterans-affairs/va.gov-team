---
name: Off Hours Deploy(OHD) Request
about: Template for requesting Off Hours Deploy
title: Off Hours Deploy(OHD) Request
labels: 'frontend, operations, platform-tech-team-support '
assignees: ''

---
# Instructions
Please fill out the necessary details and list the PRs related to the OHD in the sections below.

## PRs Related to OHD
- Please provide the list of PRs related to the need for this OHD:
>PR?????

## Justification
- Please explain the reason or need for this OHD request:
>Add Details Here ...

## Requestor Information
- Person and Team Making the Request: 
>Add Details Here ...

## Description / Expectations
- Please provide a clear and concise description of the request and what is expected:
>Add Details Here ...

## Date and Time
- Specify the date and time for scheduled OHD:
>Add Details Here ...

## Platform Maintenance Window
- Can this OHD be tied to a Platform Maintenance Window?
>

- Maintenance Window (if applicable):
>

## Verify The following
 - [ ] The OHD Request is after the cutoff time for the regular deploy.[^1] 
 - [ ] You are prepared to create an Incident Post Mortem[^2] within two business days.

[^1]: (See [Deployment Policy](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies) and [Deployment Schedules](https://depo-platform-documentation.scrollhelp.site/developer-docs/Deployments.1844641889.html)
[^2]: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems


*Performed by Platform Support Team*
 - [ ] PagerDuty OHD Deploy Incident Opened
 - [ ] OCTO-DE staff acknowledgment of Request, via `/pd trigger`
 - [ ] Notification is posted in the appropriate Slack support and team Channels
 - [ ] Infrastructure/Operations has acknowledge the Requests (This applies to revproxy and fwdproxy, but is not required for Frontend and Backend requests)
 - [ ] Security Team has Reviewed the requests (This is not necessary for requests that are not related to security)

## Potential Support Needed
- [ ] Backend (BE)
 
- [ ] Frontend (FE)

- [ ] DevOps

- [ ] Other:



 CC: @department-of-veterans-affairs/vsp-operations ,  @department-of-veterans-affairs/vsp-product-support
