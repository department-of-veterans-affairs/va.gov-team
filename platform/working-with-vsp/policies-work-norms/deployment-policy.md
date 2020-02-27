*Last updated 2020-01-17*

# Automated Deploys

There are automated deploys of `vets-api` and `vets-website` Monday through Friday. The release is created from `master` at 2 pm Eastern and deployed at 3 pm Eastern. Code merged to `master` after 2 pm Eastern will not be added to a release and deployed until the next business day.

## Exceptions to automated deploys

If there are days or periods of time when many people will be out of the office (i.e. holidays) the automated deploys will be suspended. If people aren’t in the office to support the code going out, it’s not responsible to release.

**Note**: This only applies to _automated_ deploys. Engineer-initiated deploys (e.g. to address a critical bug) will be allowed to proceed as usual.

### Holiday release freeze schedule

Automated deploys will not occur on the following days, due to holidays:

#### 2019

* 9/2 - **Labor Day**
* 11/11 - **Veterans Day**
* 11/27 - 11/29 - **Thanksgiving**
* 12/23 - 1/3/2020 - **Winter holiday freeze** (Note: *two weeks*)

#### 2020

*Holiday release freeze schedule update coming soon*

# Requesting out-of-band deploys

If there is a _critical issue_ that needs to be resolved outside the automated deployment schedule, explicit permission must be granted for an out-of-band deploy.

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

1. You must reach out to VSP DEPO leadership (currently, Kevin Hoffman or Dror Matalon) who will escalate this request to Chris Johnston for approval.
1. Once approved, contact the [VSP DevOps oncall](https://dsva.pagerduty.com/schedules#PGIEA8Q) through the [#oncall channel](https://dsva.slack.com/archives/C30LCU8S3) to coordinate the release.
1. Within two business days of this incident, send a PR with a [postmortem](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems), including any relevant stakeholders, VSP DEPO leadership, and any VSP team members involved in resolving the incident as reviewers.

## Step-by-step process for deployment

1. To deploy this change to production, the release job is run with the git SHA for the commit to deploy.
1. The auto-deploy boolean flag must be set to `FALSE` on the job.
1. The release tag is captured and then used as input for the matching deploy job.
1. There are "special" jobs for `vets-website` and `vets-api` which will run both the release and deploy of `master` in one operation.

# Rails database migrations

If a Rails database migration is needed for your code to work successfully, that is handled through a separate process:

1. Wait for the Jenkins Slack bot to post an `Unapplied database migrations` notification in `#devops-deploys`.
1. Once the notification has posted, log a request to the DevOps team in the `#vetsgov-devops` Slack channel, asking them to inspect the changes and run the post-deploy job.
