---
name: Ops Onboarding checklist
about: Onboarding Checklist for members of the VSP Operations team.
title: VSP Operations Onboarding
labels: ''
assignees: ''

---

# Ops Onboarding
## Overview
Welcome to the platform and more particularly the VSP Infrastructure team (formerly called Operations).  This ticket is a checklist and guide to help you onboard and get up to speed.

If you have any questions/need access please reach out to Jesse House (@jhouse-solvd) or Demian Ginther (@dginther).

##  Checklist

### Admin work
- [ ] If new to VA, will need background check. Fill out forms from Amber, get fingerprinted, and fill out eQIP investigation request in order to get a PIV card
- [ ] Set up [TMS](https://www.tms.va.gov/secureauth35/SecureAuth.aspx) account and take required trainings
- [ ] Login to [Citrix Access Gateway](https://citrixaccess.va.gov/vpn/index_citrix_splash.html) (Once PIV card has been obtained)

### Access to what you need
- [ ] [Getting setup](https://depo-platform-documentation.scrollhelp.site/getting-started/Request-access-to-tools.969605215.html)
- [ ] Share your calendar with VSP: va-vsp-team@oddball.io and  vsp-team.group@adhocteam.us
- [ ] Ensure you're in Google Groups [va-vsp-team](https://groups.google.com/a/oddball.io/g/va-vsp-team) and [va-vsp-engineering](https://groups.google.com/a/oddball.io/g/va-vsp-engineering). Use `/support` in #vfs-platform-support to request access.
- [ ] Ensure you have access to Google Drive folder ["VSP team"](https://drive.google.com/drive/u/0/folders/0AJ6yVhfytxhFUk9PVA)

**Tools**
- [ ] DSVA Slack Workspace
  - [ ] #vsp-operations
  - [ ] #vsp-operations-internal
  - [ ] #platform-team (vetsgov-devops is archived)
  - [ ] #vfs-all-teams
- [ ] Github: join 'department-of-veterans-affairs' org
- [ ] [Zenhub](https://app.zenhub.com/workspaces/platform-operations-team-6112bc325f570300140f7852/board?repos=133843125)
- [ ] [Setup SOCKS](https://depo-platform-documentation.scrollhelp.site/getting-started/Internal-tools-access-via-SOCKS-proxy.1821081710.html) to access below apps:
  - [ ] [Jenkins](http://jenkins.vfs.va.gov/)
  - [ ] [Sentry](http://sentry.vfs.va.gov/)
  - [ ] [Grafana](http://grafana.vfs.va.gov/)
  - [ ] [Argo CD](http://argocd.vfs.va.gov/)
- [ ] [Pagerduty](https://dsva.pagerduty.com/) (ask a team member for access)
- [ ] [Confluence](https://vfs.atlassian.net/wiki/home)
  - [ ] [Operations Team space](https://vfs.atlassian.net/wiki/spaces/OT/overview)
  - [ ] [Venafi](https://vfs.atlassian.net/wiki/spaces/OT/pages/1719009302/Venafi+Gain+access+to+manage+internal+TLS+certificates) (Once PIV card has been obtained)
- [ ] Keybase
- [ ] Prometheus (not used directly, but check to make sure you have access by going [here](http://prometheus-prod.vfs.va.gov:9090/prometheus/graph?g0.range_input=1h&g0.expr=&g0.tab=0))
- [ ] [Datadog](https://app.datadoghq.com/) (ask for invite from whoever is on call, or someone else on your team.)
- [ ]  AWS ([access request ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=external-request%2Coperations%2Cops-access-request&template=aws-access-request.yml&title=Access+for+%5Bindividual%5D))

### Understanding VSP and where we sit
- [ ] [Overview of VSP](https://depo-platform-documentation.scrollhelp.site/getting-started/Welcome.1255276574.html)
- [ ] [Getting to know VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/vsp-team-member-onboarding.md)
- [ ] [Overview Presentation of VSP](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/VSP%20Mission%2C%20Objectives%2C%20Roadmap%2C%20and%20OKRs%20-%207-23-19.pdf)

### VSP Operations
High level:
- [ ] [High level info of the team](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsp/teams/operations#operations)
- [ ] [Team charter](https://vfs.atlassian.net/wiki/spaces/OT/pages/1817084282)
- [ ] [Delivery Infrastructure Overview demo presentation](https://docs.google.com/presentation/d/1dXE3kkG56fXu7QvqH7qu5mGE3gfalD0FRf-gbnnjnHc/edit?usp=sharing)
- Meet the members of the team
  - [ ] Jesse
  - [ ] Jeremy
  - [ ] Matt
  - [ ] John
  - [ ] Oseas
  - [ ] Rebecca
  - [ ] Kyle



More details on our work:
- [ ] [Infra recommit work](https://docs.google.com/document/d/1cVFlFXuwjg_dbapwiCZ-iT01mywcZdHBhfzPjAq-7TI/edit)
- [ ] [VSP Onboarding](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/operations/onboarding.md)
- [ ] [Oncall role](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/operations/daytime-oncall-support-role.md)
- [ ] [DevOps repo](https://github.com/department-of-veterans-affairs/devops)
- [ ] Talk with Jesse about Sprint Objectives & Quarterly Initiatives
- When creating an issue in GH, make sure to use the “ops issue template”
