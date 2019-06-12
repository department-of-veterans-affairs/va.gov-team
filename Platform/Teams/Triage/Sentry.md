The triage team is responsible for the contents of Sentry. 

[Sentry configuration and deployment](https://github.com/department-of-veterans-affairs/devops/blob/master/ansible/deployment/config/sentry/README.md) is documented in the devops repo. The credentials for the administrative user are in credstash.  
 
Sentry users are called "[Members](http://sentry.vetsgov-internal/settings/vets-gov/members/)" and can be a member of many "[teams](http://sentry.vetsgov-internal/settings/vets-gov/teams/)" and a team can be a part of one or more projects. Triage team members should be given the "Manager"
role. An issue in Sentry can be assigned to an individual member or a team. As part of a [project's configuration](http://sentry.vetsgov-internal/settings/vets-gov/projects/platform-api-production/ownership/)it is possible to assign issues to individuals or teams based upon the code path or url.

As part of the MVP triage process, the triage team will create new teams in Sentry and move users to the proper reflect the current team structure.  Then the triage team will set up ownership rules to assign issues to the team responsible for a code path or url.  

The triage team should strongly consider configuring email for sentry, as sentry sends alerts/reports on issues assigned to you or your team.  There is a slack integration that posts to #vetsgov-sentry-alerts, but there's no apparent way to customize alerts per team. 

Additionally, the triage team should review the most frequently occurring errors each business day, especially in the hour after a deploy and either create a github issue to address the issue and link the issue to sentry (currently this can be done as a sentry comment, ideally the sentry github app can be configured to make this connection).  There are cases where there is no bug but we expect issues to keep receiving events such as [this](http://sentry.vetsgov-internal/vets-gov/website-production/issues/12579/activity/).  In that case, a member of the triage team should make a comment, explaining the rationale and mark the issue as "ignore".

The triage team is responsible for setting the alert rules for the sentry-slack webhook [configured under each project's settings](http://sentry.vetsgov-internal/settings/vets-gov/projects/website-production/alerts/rules/)
