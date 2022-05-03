----

# We're moving our docs! 
### Find [the latest version of this page](https://depo-platform-documentation.scrollhelp.site/support/Deployment-Policies.1279787009.html) on the Platform website.

### Still can't find what you're looking for? Reach out to [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) on Slack.

----

# Deployment Policies

## Deployment Strategy

We intend to keep our repositories **always deployable from main branches**. The deployment schedule below describes when deployments typically happen, but deployments from main branches may occur at any time. VA.gov does not use release branches; instead, we maintain a focus on keeping the main branches healthy.

For finer control over when your checked-in feature is released, see [feature toggles](https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/feature-toggles/).

# Automated Deploys

There are automated deploys of `vets-api` and `vets-website` Monday through Friday. The release is created from `main` at 2 pm Eastern and deployed at 3 pm Eastern. Code merged to `main` after 2 pm Eastern will not be added to a release and deployed until the next business day.

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

#### 2022

* 05/30 - **Memorial Day**
* 6/20 - **Juneteenth** (observed)
* 07/04 - **Independence Day** (observed)
* 09/05 - **Labor Day**
* 11/11 - **Veteran's Day**
* 11/24 - 11/27 - **Thanksgiving** (note: weekend included for clarity)
* 12/24 - 1/2/2022 - **Winter holiday freeze** (note: weekends included for clarity)

# Requesting out-of-band deploys

If there is a _critical issue_ that needs to be resolved outside the automated deployment schedule, explicit permission must be granted for an out-of-band deploy.

See [Resolving critical issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/resolving-critical-issues.md) for recommended approaches to issue resolution (i.e. when to revert, when to fix forward).

For every out-of-band deploy requested, VSP team will expect a follow-up [postmortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) from the requesting team, explaining the context that led to the problem and proposing follow-up actions to prevent similar future problems.

## Is my issue critical?

Examples of _critical issues_ include:
* A bug that’s preventing a significant number of Veterans from accessing a feature
* A bug creating a non-trivial deviation from expected functionality
* A 508/accessibility failure of severity level **0** (_Showstopper_) or **1** (_Critical_) ([severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md))

Examples of _non-critical issues_ include:
* Incorrect text or visual formatting that does not impede the feature from working
* Any code for features not yet released to Veterans
* Just wanting to get code out sooner

When in doubt on whether an issue is _critical_ enough for out-of-band deployment, DEPO leadership for VSP will make the deciding call.

## Step-by-step process for out-of-band deployment approval

1. You must reach out to VSP DEPO leadership (currently, Kevin Hoffman, Dror Matalon, or Rachael Roueche) who will escalate this request to Chris Johnston for approval.
1. Once approved, contact the [VSP DevOps oncall](https://dsva.pagerduty.com/schedules#PGIEA8Q) through the [#oncall channel](https://dsva.slack.com/archives/C30LCU8S3) to coordinate the release.
1. Within two business days of this incident, send a PR with a [postmortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems), including any relevant stakeholders, VSP DEPO leadership, and any VSP team members involved in resolving the incident as reviewers.

# See also

* [Resolving critical issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/resolving-critical-issues.md)
* [Postmortems](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems)
* [PagerDuty DevOps oncall](https://dsva.pagerduty.com/schedules#PGIEA8Q)
* [#oncall channel](https://dsva.slack.com/channels/oncall)
