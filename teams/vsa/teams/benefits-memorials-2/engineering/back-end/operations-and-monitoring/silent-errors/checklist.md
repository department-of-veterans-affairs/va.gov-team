# FSR silent error checklist
Copied from [How to discover if your application has a silent failure](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md) so we can check things off as needed.


## How to determine if your application may have silent failures

There are some easily identifiable uses of Platform infrastructure that, if not monitored or used correctly, can result in silent errors. Start with these questions:

* Does your application have a user-facing transaction that is submitted to a back-end system? 
  * NOTE: This is not limited to online forms! Other examples can include:
    * Uploads of documents and/or attachments
    * Performing an action (Such as refilling a prescription or ordering supplies)
* Are you using any of the following APIs:
    * [Lighthouse Appeals Status](https://developer.va.gov/explore/api/appeals-status/docs?version=current)
    * [Lighthouse Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs)
    * [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs) / Central Mail
    * [Lighthouse Decision Reviews](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)
    * [EVSS Document Upload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/evss.md)
* Does your application submit to an API that relies on Sidekiq (or another background job processor)?

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [x] Do you know when your application shipped to production?
  * **Nov 16, 2021** VBA submissions only
* [x] Did your application use the same APIs when it shipped as it does today?
  * **September 19, 2022** VHA submissions included

#### Monitoring

* [x] Do you monitor the API that you submit to via Datadog? 
  * ~~If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).~~
* [x] Does your Datadog monitoring use the appropriate tagging? 
  * ~~If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!~~
  * Yes we have 13 monitors and they are all tagged.
  <details><summary>See details below:</summary>
   
  ```
  Debts controller errors, FSR Controller errors, MCP VBS Errors, Medical Copay Controller#index Errors, Medical Copay Controller#show Errors, VHA FSR SharePoint Errors, VHA FSR Sharepoint completion rate is low, VHA FSR VBS Errors, VHA FSR VBS completion rate is low:
   - env:prod
   - team:vfs-debt
   - itportfolio:digital-experience
   - service:debt-resolution

  NewStatementNotificationJob is experiencing elevated failure rate, Medical Copay Controller#send_statement_notifications Errors, Medical Copay Controller#get_pdf_statement_by_id Errors:
   - env:eks-prod
   - team:vfs-debt
   - itportfolio:digital-experience
   - service:debt-resolution

  Debts controller#index response time elevated:
   - env:production
   - team:vfs-debt
   - itportfolio:digital-experience
   - service:debt-resolution

  ```
   
  </details>
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * **DSVA [#debt-alerts](https://dsva.slack.com/archives/C02EYV9NJFJ)**
  * ~~If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications]~~(https://dsva.slack.com/archives/C063SM22J3H) for an example.
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
  * **All devs (FE & BE) are included in channel and monitor regularly**
  * ~~If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)~~
* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
  * **FE engineers are mostly backup, but have a general knowledge of who to raise flags to if specific errors occur**
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)

#### Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
  * We may need more detail, but we have a few docs:
    * [High level submission flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/back-end/kevin-exit-docs/high-level-fsr-submission-graph.png)
    * More granular view of [Roles and responsibilities of the related Financial Status Report services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/benefits-memorials-2/engineering/back-end/kevin-exit-docs/fsr-submission-dependency-graph.png)
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * [Link to data flow](https://github.com/user-attachments/files/17372719/FSR.Submission.Flow.pdf)

* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.
  * This seems not applicable. If the system errors fatally, the submission wasn’t saved by them

#### User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.
  * [Ticket](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/gh/department-of-veterans-affairs/va.gov-team/94946)

## We don't have any silent errors!

Great! Please let us know that you went through the checklist above as a team and did not find any silent failures in our Slack channel: [#zero-silent-failures](https://dsva.slack.com/archives/C07KTTFP308). You don't have to hang out in there once you have notified us. Just pop in, tell us who you are (which team and in which portfolio) and that no failures were found. Thanks!

## Additional details

### Set up monitoring in Datadog

Follow this [guidance on endpoint monitoring](https://depo-platform-documentation.scrollhelp.site/developer-docs/endpoint-monitoring) to get going. Then following the guidance on [monitoring performance](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-applications-and-infrastructure-with-datad) to get up to speed with Datadog.

#### Examples

* [Benefits Intake API Form Submission Tracking](https://vagov.ddog-gov.com/dashboard/4d8-3fn-dbp/benefits-intake-form-submission-tracking?fromUser=false&refresh_mode=sliding&from_ts=1725259648303&to_ts=1725864448303&live=true)
* [Banana Peels (Lighthouse Appeals/Forms/Benefits Intake APIs)](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=true&refresh_mode=sliding&from_ts=1725259764640&to_ts=1725864564640&live=true)
* [Benefits Sidekiq Death Queue view](https://vagov.ddog-gov.com/dashboard/ftx-zzd-v9j/benefits-sidekiq-job-death-queue-view) - shows recently exhausted Sidekiq jobs.

[Additional examples](https://depo-platform-documentation.scrollhelp.site/developer-docs/platform-dashboards-in-datadog)

### File silent errors issues in Github

We want to know about your silent errors so that we can help you to fix them. To do this, follow the process in the [Managing Errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md) document.

### How to create a user data flow diagram 

Creating a user data flow diagram is a requirement of the Zero silent errors initiative and will be a required asset at the Architecture Intent touchpoint of the Engineering and Security track of Collaboration Cycle.

[Learn how to create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md)
