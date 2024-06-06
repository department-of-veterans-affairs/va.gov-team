---
name: Platform Onboarding Checklist
about: Onboarding checklist for members of the Platform team
title: Onboarding checklist for <topic>
labels: 
assignees: 
---

## Overview
Welcome to the VA.Gov Platform.  This ticket is a checklist and guide to help you get access to communications, documentation, and tools used by technical project teams. 

##  Checklist

### EQIP / PIV / RA

_EQIP - Electronic Questionnaires for Investigations Processing
PIV - Personal Identity Verification
RA - Remote Access_

**If you're new to the VA, an EQIP submission is needed to obtain VA credentials and a PIV card**
- [ ] Submit EQIP 
- [ ] Obtain PIV card
Note: AWS access can be granted once the EQIP has been submitted _before the PIV card is received_
- [ ] Set up [TMS](https://www.tms.va.gov/secureauth35/SecureAuth.aspx) account and take required trainings
- [ ] Ensure your HR representative submits a request on your behalf for RA to the VA network 

### Communications 

**Platform coordination**
- [ ] Share your calendar with VSP teams: va-vsp-team@oddball.io and  vsp-team.group@adhocteam.us
- [ ] Ensure you're in Google Groups [va-vsp-team](https://groups.google.com/a/oddball.io/g/va-vsp-team) and [va-vsp-engineering](https://groups.google.com/a/oddball.io/g/va-vsp-engineering). Reachout to your Program Manager to get added.
- [ ] Ensure you have access to the Google Drive folder ["VSP team"](https://drive.google.com/drive/u/0/folders/0AJ6yVhfytxhFUk9PVA)
- [ ] Ensure you're in Github Teams 
  - [vets-gov-write](https://github.com/orgs/department-of-veterans-affairs/teams/vets-gov-write) - Grants access to these repos | [vets-website](https://github.com/department-of-veterans-affairs/vets-website), [content-build](https://github.com/department-of-veterans-affairs/content-build/), [devops](https://github.com/department-of-veterans-affairs/devops), [vets-api](https://github.com/department-of-veterans-affairs/vets-api)
  - [vsp-operations](https://github.com/orgs/department-of-veterans-affairs/teams/vsp-operations) _DevOps Only_
  - Check with your PM for any specific GH teams you may need to be added to
- [ ] DSVA Slack Workspace
  - [ ] #platform-cop-(frontend? devops?)
  - [ ] #platform-team
  - [ ] #vfs-all-teams
  - [ ] #vfs-platform-support
  - [ ] #platform-tech-team-support

**Team coordination**
- [ ] [Meet the team](https://vfs.atlassian.net/wiki/spaces/AP/pages/1908834623/Platform+Roster)
- [ ] [How we work](https://vfs.atlassian.net/wiki/spaces/AP/overview)
- [ ] [ZenHub](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/zenhub.md) 

### Documentation
- [ ] [Request access to tools](https://depo-platform-documentation.scrollhelp.site/getting-started/Request-access-to-tools.969605215.html) documentation on the Platform Website
- [ ] [Confluence](https://vfs.atlassian.net/wiki/home)
  - [ ] [VA.Gov Platform Manual](https://vfs.atlassian.net/wiki/spaces/OT/pages/2354315287/Platform+Infrastructure+Manual+WIP)

**Platform overview and design**
- [ ] [Overview of the VA.Gov Platform](https://depo-platform-documentation.scrollhelp.site/getting-started/Welcome.1255276574.html)
- [ ] [VA.Gov Platform system design and architecture](https://vfs.atlassian.net/wiki/spaces/OT/pages/2354315287/VA.Gov+Platform+Manual+WIP#System-design-and-architecture)


### Developer tools 
- [ ] GitHub
  - [ ] Join the ['department-of-veterans-affairs' organization ](https://github.com/department-of-veterans-affairs)
  - [ ] Get access to the [devops repo](https://github.com/department-of-veterans-affairs/devops)
- [ ] [SOCKS](https://depo-platform-documentation.scrollhelp.site/getting-started/Internal-tools-access-via-SOCKS-proxy.1821081710.html) - _for remote access to the following apps:_
  - [ ] [Jenkins](http://jenkins.vfs.va.gov/)
  - [ ] [Sentry](http://sentry.vfs.va.gov/)
  - [ ] [Grafana](http://grafana.vfs.va.gov/)
  - [ ] [Argo CD](http://argocd.vfs.va.gov/)
  - [ ] [Prometheus](http://prometheus-prod.vfs.va.gov:9090/prometheus/graph?g0.range_input=1h&g0.expr=&g0.tab=0) - _not used directly but can be useful to understand legacy metrics gathering_
- [ ] [Pagerduty](https://dsva.pagerduty.com/) - _ask a team member for access_
- [ ] [Keybase](https://keybase.io/)
- [ ] [Datadog](https://vfs.atlassian.net/wiki/spaces/OT/pages/2233598117/Get+access+to+Datadog) - _ask your PM or TL to submit a request on your behalf_
- [ ]  [AWS access request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=Access+for+%5Bindividual%5D) - _can be submitted early, but won't be approved until EQIP submission is verified_

_Once your PIV card has been obtained:_ 
- [ ] [Citrix Access Gateway (CAG)](https://citrixaccess.va.gov/vpn/index_citrix_splash.html) or [Azure Windows Virtual Desktop](https://client.wvd.microsoft.com/arm/webclient/index.html)
- [ ] [Venafi](https://vfs.atlassian.net/wiki/spaces/OT/pages/1719009302/Venafi+Gain+access+to+manage+internal+TLS+certificates) _DevOps Only_
