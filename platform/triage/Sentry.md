# Sentry overview

Sentry [Members](http://sentry.vetsgov-internal/settings/vets-gov/members/) (users) can be members of many [teams](http://sentry.vetsgov-internal/settings/vets-gov/teams/) and a team can be a part of one or more projects.   An issue in Sentry can be assigned to an individual member or a team. 

[Sentry configuration and deployment](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md) is documented in the devops repo.

## Triage team structure/responsibilities
Triage team members have the [manager role](https://docs.sentry.io/accounts/membership/) in Sentry, allowing them to make nearly all configuration and user changes.

### The triage team will configure/maintain for each entry project:
*  **Issue ownership rules** - assign issues to individuals or Sentry teams based upon the code path or url. Updates will be necessary as new features and apps are added. [example](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/ownership/)

* **Sentry Teams** [example](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/teams/) 
* **Alerting rules** - Currently, alerts go only to [#vetsgov-sentry-alerts](https://dsva.slack.com/messages/CJTDG22NM), but email should be configured for Sentry to allow for personalized alerts when an issue is assigned to a Sentry team/individual (not yet possible on slack). [example](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/alerts/rules/)

### Each business day the triage team should:
* Review the most frequently occurring errors, especially following a release and 
    * **Create a GitHub issue** to address the error seen in Sentry and link the issue to Sentry as an comment in Sentry, assigning to the proper VFS team and labeling for severity
    
    -or-
    *  Mark a Sentry issue to **ignore**.  [For example](http://sentry.vetsgov-internal/vets-gov/website-production/issues/12579/activity/), properly blocked CORS violations.  When ignoring, make a comment explaining why the issue is ignorable.


## Sentry Enhancements
* Configure email to allow for personalized notification, especially upon issue assignment. 
* Sentry GitHub app - Some work has been done to configure and is [documented](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md#github-integration) in the devops repo
