# Sentry overview

Sentry [Members](http://sentry.vetsgov-internal/settings/vets-gov/members/) (users) can be members of many [teams](http://sentry.vetsgov-internal/settings/vets-gov/teams/) and a team can be a part of one or more projects.   An issue in Sentry can be assigned to an individual member or a team. 

[Sentry configuration and deployment](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md) is documented in the devops repo. The credentials for the administrative user are in credstash and can be shared on an as-needed basis by a member of the devops team.

## Triage team structure/responsibilities
The triage team will configure/maintain for each entry project:
*  [Issue ownership rules](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/ownership/) assign issues to individuals or teams based upon the code path or url. Updates will be necessary as new features and apps are added.

* [Teams](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/teams/) 
* [Alerting rules](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/alerts/rules/) Currently, alerts go only to [#vetsgov-sentry-alerts](https://dsva.slack.com/messages/CJTDG22NM), but email should be configured for Sentry to allow for personalized alerts when an issue is assigned a team/individual (not yet possible on slack).

Each business day the triage team should:
* Review the most frequently occurring errors, especially following a release and 
    * **Create a GitHub issue** to address the error seen in Sentry and link the issue to Sentry as an comment in Sentry, assigning to the proper team and labeling for severity
    
    -or-
    *  Mark a Sentry issue to **ignore**.  [For example](http://sentry.vetsgov-internal/vets-gov/website-production/issues/12579/activity/), properly blocked CORS violations.  When ignoring, make a comment explaining why the issue is ignorable.


## Sentry Enhancements
* Configure email to allow for personalized notification, especially upon issue assignment. 
* Sentry GitHub app - Some work has been done to configure and is [documented](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#github-integration) in the devops repo
