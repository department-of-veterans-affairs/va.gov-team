*Last updated 2021-2-22*

# Deployment Policies

## Deployment Strategy

We intend to keep our repositories **always deployable from master branches**. The deployment schedule below describes when deployments typically happen, but deployments from master branches may occur at any time. VA.gov does not use release branches; instead, we maintain a focus on keeping the master branches healthy.

For finer control over when your checked-in feature is released, see [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/).

# Automated Deploys

There are automated deploys of `vets-api` and `vets-website` Monday through Friday. The release is created from `master` at 2 pm Eastern and deployed at 3 pm Eastern. Code merged to `master` after 2 pm Eastern will not be added to a release and deployed until the next business day.

## Exceptions to automated deploys

If there are days or periods of time when many people will be out of the office (i.e. holidays) the automated deploys will be suspended. If people aren’t in the office to support the code going out, it’s not responsible to release.

**Note**: This only applies to _automated_ deploys. Engineer-initiated deploys (e.g. to address a critical bug) will be allowed to proceed as usual.

### Holiday release freeze schedule

During holiday release freezes:

* Automated deploys will not occur
* All code deploys require approval via the "Requesting out-of-band-deploys" process below
* Content-only deploys may continue without explicit approval, but need to be manually triggered
* Limited support will be available from VSP team.

*There may be a change in this policy as VA dictates.*

The holiday release freeze is in effect during the following dates:

#### 2020

* 05/25 - **Memorial Day**
* 07/03 - **Independence Day** (observed)
* 09/07 - **Labor Day**
* 11/11 - **Veteran's Day**
* 11/25 - 11/27 - **Thanksgiving**
* 12/23 - 1/1/2021 - **Winter holiday freeze** (note: *eight business days*)

# Requesting out-of-band deploys

Until better isolation is in place within the codebase and infrastructure, the platform will not entertain requests for deployments outside of the automated deployment schedule. Thus, VFS teams need to make sure they have thoroughly QA'd and otherwise tested the code they're checking in, as updates will not be possible until the following day.

However, if there is an _outage_ or a _security issue_ that requires immediate resolution and cannot wait for the daily deploy, it is appropriate to escalate to the Platform Crew Leads for a decision on whether to pursue an out-of-band deploy. 

The VFS team whose code triggered the outage or security issue will need to publish a follow-up [postmortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) in the oncall channel, with the aid of the others involved in resolution.

See [Resolving critical issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/resolving-critical-issues.md) for recommended approaches to issue resolution (i.e. when to revert, when to fix forward).

## Step-by-step process for out-of-band deployment approval

1. @ mention Dror Matalon and Rachael Roueche in the #oncall channel with a 1-3 sentence write-up of the outage or security issue users are experiencing, and how you found out.
1. Text Dror Matalon and Rachael Roueche (find phone numbers in their Slack profiles) "out of band deploy request in the oncall channel" for immediate escalation
1. _Dror or Rachael will respond in the #oncall Slack channel with their denial or approval, and will @ mention the [VSP DevOps oncall](https://dsva.pagerduty.com/schedules#PGIEA8Q) team member to trigger action _
1. Continue collaborating with Platform on-call personnel to investigate, resolve, and re-deploy
1. Within 2 business days of the incident, the VFS team involved in the outage or security issue will need to publish a follow-up [postmortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) in the #oncall Slack channel, with the aid of the others involved in resolution.

# See also

* [Resolving critical issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/resolving-critical-issues.md)
* [Postmortems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems)
* [PagerDuty DevOps oncall](https://dsva.pagerduty.com/schedules#PGIEA8Q)
* [#oncall channel](https://dsva.slack.com/channels/oncall)
