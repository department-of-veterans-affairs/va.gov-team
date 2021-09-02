## Overview

### Working Style

In a nutshell: we strive to adhere closely to Agile principles so that we can consistently deliver value for the government, while respecting our
team members' needs for autonomy and wholeness. Within that framework, we aim to give the maximum latitude possible to working styles
and individual preferences. We highly value self-organization and aim to put our team members in a position to succeed while doing work
they are intrinsically motivated to do.

This is a long-winded way of saying that you can trust the team to take clear acceptance criteria and statements of value and turn them into
well-implemented solutions.

You can always lean on your delivery manager or anyone at A6 for guidance - if they don't know how to
help, they will help you find who can. Never be afraid to ask questions! Here are some great people for specific areas:

- **Agile process/training:** Dotti Cummings
- **HR / personnel:** Emily Levenson
- **Delivery:** Jeff Brauer

### What does success look like?

Above all, success for this project is embodied in communicating with the government PO and working towards their stated preferences. As
of September 2021, the main points of emphasis are:

- Monitoring & alerting for all services the CMS provides to other teams
- System stability & scalability
- Discovery & prototyping for the Public Content API

We are fortunate that we have a great deal of trust from the Government side and no interest in finger-pointing after downtime incidents. What
is important to them is that a post-mortem document (and meeting if necessary) is created shortly after the incident, and remediation work is
specified and prioritized.

Finally, use the forums available such as the #victories Slack channel, Team of Teams and Platform Demo time to spread the good word about
the great work the team is doing. Over the top cheerleading is not required, but embrace the role of being an advocate for the product,
its needs and its successes.

## Tools

| **Name** | **Background** | **Link** |
|----------|----------------|----------|
| Github | Github is our code repository, issue tracker and documentation store. You may already know that our repository is fully public, following the USDS [Default to open](https://playbook.cio.gov/#play13) play. So, while we don't enforce a rigid or boring communication style, it's a good thing to remember. :-) | [CMS repository](https://github.com/department-of-veterans-affairs/va.gov-cms) |
| Zenhub | [ZenHub](https://help.zenhub.com/support/home) is our project management tool, built on top of Github. It adds capabilities to those Github provides, including estimations, planning poker, epics, issue linking, reporting, boards with swimlanes, and more.This is where you will go to manage the backlog, plan sprints and check in on work in progress. We currently share our board with other CMS teams, and use the "Core Application Team" Github label to separate out our issues. | [ZenHub board](https://github.com/department-of-veterans-affairs/va.gov-cms#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=core%20application%20team&repos=154174777) |
| Slack | You'll use two Slack workspaces in your day to day work - the DSVA slack, and the Agile6 slack. While the DSVA slack is not open day to day, all communications in it are subject to FOIA requests. So, sensitive or internal program communications should go in the appropriate channel or DM in the Agile 6 slack. However, communications should default to open discussions in the DSVA slack as much as possible. | |
| Confluence | Sprint reports, demo docs and other team documents are kept in the Agile6 va-govconfluence workspace. Additionally, documentation intended for a Platform-wide audience is kept in the VFS Confluence workspace. | [VAGOV confluence](https://va-gov.atlassian.net/wiki/spaces/VAGOV/overview)[VFS confluence](https://vfs.atlassian.net/wiki/spaces/AP/overview) |
| Mural | Useful tool for whiteboarding and collaborative brainstorming work. Use the Spoke app on Agile6 Slack to request a license. | [mural](https://www.mural.co/) |
| Grafana | Monitoring for the CMS application and services it provides. You can sign in with your Github account. | [CMS dashboard](http://grafana.vfs.va.gov/d/dxf8a-6Zz/cms-dashboard?orgId=1) |
| Tugboat | Demo & Testing environments for the CMS. When engineers create pull requests, an environment is automatically created with that pull request's code. It is also used heavily by the VA Medical Center upgrade team to test new medical center content as they move it from the old CMS (Teamsites) to Drupal. | [Tugboat](https://tugboat.vfs.va.gov/projects) |
| Zoom | It's zoom - we use it a whole lot. Use the Spoke app on Agile6 Slack to request a license. | |
| Google Calendar | We use google calendar for scheduling. You'll want to add the other people in your team to your calendar to make it easier to schedule meetings. For gov't side people, look for a link to their calendar on their Slack profile. | |
| Platform Support | When there is an issue or you need to request help with another platform service, use the /support command in the #vfs-platform-support slack channel. | [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) |

## Meetings

| **Meeting** | **Background** | **Time/Place (ET)** | **Relevant People** | **Relevant Links** | **Relevant Slack****Channel(s)** |
|-------------|----------------|---------------------|---------------------|--------------------|----------------------------------|
| **Team of Teams prep** | Meet with other A6/CA delivery & product managers to fill out slides and sync on any updates or news of interest to all teams. | Tuesdays @ 1000 | Clarence Maeng, Kevin Walsh, Jeff Brauer | [CMS slides](https://docs.google.com/presentation/d/1SiJE0j_zLotsYvAmjwLXVw_BlSJrUvoF/edit#slide=id.gd925be7dcf_0_22) | |
| **Team of Teams (Tot)** | Weekly meeting for all VFS teams to share information & updates of interest to all teams | Tuesdays @ 1200 | Rachael Rouche | | [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK) |
| **Platform Demo** | Bi-weekly meeting for all Platform teams to demo new work of interest to other Platform teams. Call for content is made on alternating Mondays in #platform-team. | Alternating Wednesdays @ 1500 | Platform team leads | [Demo Summaries](https://vfs.atlassian.net/wiki/spaces/AP/pages/1657995446/End+of+Sprint+Demos) | [#platform-team](https://dsva.slack.com/archives/CJRQ85PQB) |
| **Platform Huddle** | Weekly meeting for Platform teams to update status on current workstreams and share news, propose new solutions, etc. CMS Workstreams should be updated with the linked app before the start of the meeting. | Mondays @ 1230 | Platform team leads | [Workstreams](https://dsva-workstreams.herokuapp.com/workstreams) | [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK) |
| **Scrum** | Agile ceremonies - scrum | M-Th @ 1130 | CMS Team | [Zenhub board](https://github.com/department-of-veterans-affairs/va.gov-cms#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=core%20application%20team&repos=154174777) | [#cms-team](https://dsva.slack.com/archives/CT4GZBM8F) |
| **Sprint Demo** | Agile ceremonies - demo | Alternating Fridays @ 1100 | Dave Conlon, Mike Chelen | [Sprint demos](https://va-gov.atlassian.net/wiki/spaces/VAGOV/pages/213024818/Sprint+demos) | [#cms-team](https://dsva.slack.com/archives/CT4GZBM8F) |
| **Sprint Retro** | Agile ceremonies - retro | Alternating Fridays @ 1300 | Clarence Maeng,Jeff Brauer | | [#cms-team](https://dsva.slack.com/archives/CT4GZBM8F) |
| **Sprint Planning** | Agile ceremonies - sprint planning. Come prepared with your priorities, but be willing to be flexible to hear from the gov't PO. | Alternating Mondays @ 1130 | CMS Team | [Zenhub board](https://github.com/department-of-veterans-affairs/va.gov-cms#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=core%20application%20team&repos=154174777) | [#cms-team](https://dsva.slack.com/archives/CT4GZBM8F) |
| **Backlog Refinement** | Agile ceremonies - backlog refinement - you'll run this meeting. | Alternating Thursdays @ 1430 | CMS Team | [Zenhub board](https://github.com/department-of-veterans-affairs/va.gov-cms#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=core%20application%20team&repos=154174777) | [#cms-team](https://dsva.slack.com/archives/CT4GZBM8F) |
| **Developer Storytime** | Opportunity for team engineers to discuss implementation strategies for current and upcoming issues. | Alternating Mondays @ 1300 | CMS Engineers | [Zenhub board](https://github.com/department-of-veterans-affairs/va.gov-cms#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=core%20application%20team&repos=154174777) | [#cms-team](https://dsva.slack.com/archives/CT4GZBM8F) |
| **Mid-sprint checkin** | Check-in on sprint goals with delivery manager and gov't PO, this is also opportunity to talk about upcoming work and any other things to get on the same page about. | Alternating Mondays @ 1600 | Mike Chelen | [Zenhub board](https://github.com/department-of-veterans-affairs/va.gov-cms#workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/board?labels=core%20application%20team&repos=154174777) | |
| **Program Team** | This is the standing team meeting for all CMS teams. Good place to bring up higher level concerns and make sure teams are on the same page about overlapping workstreams. | Alternating Wednesdays @ 1530 | Clarence Maeng, Jeff Brauer | [Agenda](https://docs.google.com/document/d/1l8f0FnzYo2LxxHw1h0ZdgKhX1fpe6ILBaYfpnhrVERo/edit#) | [#proj-vagov-program](https://agilesix.slack.com/archives/C017X7MTUGZ)[#proj-vagov-team](https://agilesix.slack.com/archives/CD6CPAGCU) |
| **Content Release****Engineering Sync** | Standing meeting for teams working with the CMS Content API to meet and discuss open questions, upcoming changes, etc. This is mostly a technically focused meeting, but is a good place to do information gathering and socialize upcoming changes. | Tuesdays @ 1230 | Neil Hastings, Chris Alexander, Tim Wright, Michael Pelz-Sherman | | [#content-release-engineering](https://dsva.slack.com/archives/C01512KN35G) |
| **Rachael Rouche's office hours** | Open office hours for anyone who wants to hop in and ask a question, share a concern, or share an idea | Mondays @ 1300 | | | [#platform-team](https://dsva.slack.com/archives/CJRQ85PQB) |
| **Ops office hours** | Open office hours for technical questions for Operations staff. This is a good place to get guidance on deployment/monitoring/etc. practices | M/W/F @ 1300 | Jesse House, Demian Ginther | | [#vsp-operations](https://dsva.slack.com/archives/CJYRZK2HH) |
