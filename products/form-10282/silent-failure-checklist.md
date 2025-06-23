### Checklist

#### Start

* [X] Do you know when your application shipped to production?
  * May 2025
* [X] Did your application use the same APIs when it shipped as it does today?
  * N/A. This document describes the 10282 SFTP upload and does not really have an API

#### Monitoring

  * [Datadog Monitor](https://vagov.ddog-gov.com/dashboard/dqp-kjk-hzs/form-10282-dashboard)

* [X] Do you monitor the API that you submit to via Datadog? 
  * The API for submitting the 10282 is the same as other education forms and is covered by those monitors.
* [X] Does your Datadog monitoring use the appropriate tagging?
  * Yes
* [X] Do errors detected by Datadog go into a Slack notifications channel?
  * Yes
* [X] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * Yes, team member(s) check datadog on a daily basis.
* [X] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * Yes

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [X] Have you filed issues for errors that are appearing in Datadog / Slack?
* [X] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * Yes

#### Documentation

* [X] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * [User Flow](./user-flow.md)
* [X] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * Yes
* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * TBD

#### User experience

* [X] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * Yes

## We don't have any silent errors!

Great! Please let us know that you went through the checklist above as a team and did not find any silent failures in our Slack channel: [#zero-silent-failures](https://dsva.slack.com/archives/C07KTTFP308) and send us a link of a copy of [this](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md#checklist) completed checklist. If you don't connect to a backend system, you don't need to fillout the checklist but let us know in your message.   You don't have to hang out in there once you have notified us. Just pop in, tell us who you are (which team and in which portfolio) and that no failures were found. Thanks!
