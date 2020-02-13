# Daytime Oncall Support Role

The Operations team can be “interrupted” by unscheduled requests that come in from the VFS or VSP teams, leadership, monitoring, and other teams and stakeholders at the VA. We want to find some ways to reduce the interruptions for individual team members and clarify who is responsible for handling each request by funneling individual tasks through one person. This person will, handle things that can be handled directly and efficiently and delegate things that cannot. Some specific examples of the kind of requests handled by this developer are:

* Normal daytime oncall [responsbilites](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/OnCall) 
* Requests for assistance from the VFS or VSP teams
* Support requests in the support channels
* Monitoring oncall channel
* Supporting and monitoring deployments
* Responding to and reviewing any internal or external DevOps PRs
* Small, non-critical issues that can be easily stopped/started
* Working on Postmortem action items.
* Respond and grant approved access to requests from access in Zenhub.

There is no intention to permanently assign this role to a single person -- this is a shared responsibility assigned to the entire team much like handling oncall responsibilities and implemented by a single person on a rotating basis.

## What’s the time commitment (1 week)

This task is part of two ongoing sprint goals:

* Incident Response https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/1954
* Global Customer Support https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/3675

This rotation can be found in [Pagerduty](https://dsva.pagerduty.com/schedules#PGIEA8Q) labeled layer 2. Each developer will be alerted by pager duty before they start their rotation and will only be responsible for the items outlined above. Since this covers *Two* ongoing SuperEpics, the developer will assign themselves just like any other sprint task during their rotation.

## What do I do?

This developer, just like oncall, DOES NOT HAVE TO DO EVERYTHING but _does_ have to be the first point of contact. They will not have any other critical tasks while they are handling these two super epics.

At the beginning of the rotation, you should make sure you are assigned to each of those two Super Epics. This makes it clear who’s responsible (you!) for the rotation. 

During the sprint, you should monitor the following Slack groups for issues:
* #vfs-platform-support (individual requests)
* #vsp-operations 
* #sre
* #devops-deploys 
* #devops-alerts
* #oncall (general oncall issues and problems)

As issues come in, the main job is to acknowledge the incoming request, decide on the best person to handle it (maybe you), and followup to make sure the request is completed in a timely manner. It is *100%* ok to assign the request, whatever it is, to someone more suited to the task but the first point of contact should be daytime oncall person. 

Unless its an emergency, waiting until standup to discuss assignments for requests will help keep interruptions to a minimum for everyone.

At the end of the rotation, the developer should unassign themselves from the two Super Epics.

### Pull Requests

Your Github team notification and #vsp-operations channel can be used to track PRs that need to be reviewed. We try to have a 24h turnaround, so getting to them quickly is important, especially for small/simple/easy PRs.

### Support requests

Create an issue describing the request in GitHub and link it to one of the two super-epics. Assign it to yourself. Track any work done with comments. Summarize both failed attempts and final solutions so the issue can be referred to again in the future if necessary. If other team members are involved, add them to the ticket.

### Everything else

The oncall developer should handle normal oncall tasks, but may need some support. Helping out or finding the right people to help out can make emergent platform issues easier to deal with.

If there is *literally* nothing else to do, here are a few more ideas:

* Refactor a spec
* Work through a Postmodern action item
* Pair with another developer to help move their issue forward
* Dig into an area of the code you are unfamiliar with

## Ongoing review

At the end of each rotation, we’ll work to generate a report and figure out between the PM, tech lead, and both current and next utility developer how to adjust the process to continue to make things as smooth and easy as possible for the entire team while also providing excellent support to each other and teams working on VA.gov.
