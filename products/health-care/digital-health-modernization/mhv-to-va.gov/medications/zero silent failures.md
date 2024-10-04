# MHV on VA.gov Medications - Zero Silent Failures checklist
Last updated: 10/2/2024

* Does your application have a user-facing transaction that is submitted to a back-end system? 
  * NOTE: This is not limited to online forms! Other examples can include:
    * Uploads of documents and/or attachments
    * Performing an action (Such as refilling a prescription or ordering supplies)
    - [X] Yes     
    - [ ] No
* Are you using any of the following APIs:
    * [Lighthouse Appeals Status](https://developer.va.gov/explore/api/appeals-status/docs?version=current)
    * [Lighthouse Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs)
    * [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs) / Central Mail
    * [Lighthouse Decision Reviews](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)
    * [EVSS Document Upload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/evss.md)
    - [ ] Yes     
    - [X] No
* Does your application submit to an API that relies on Sidekiq (or another background job processor)?
    - [ ] Yes     
    - [x] No

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [X] Do you know when your application shipped to production?
  * If not, use Github to determine, roughly, when your application shipped to users.
* [X] Did your application use the same APIs when it shipped as it does today?
  * If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.

#### Monitoring

* [x] Do you monitor the API that you submit to via Datadog? 
  * https://vagov.ddog-gov.com/monitors/manage?q=service%3Amhv-medications&order=asc&sort=status
* [x] Does your Datadog monitoring use the appropriate tagging?
  * https://vagov.ddog-gov.com/monitors/manage?q=service%3Amhv-medications&order=asc&sort=status
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * notifications are posted to #mhv-medications-alerts-issues
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
* [] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)

#### Documentation

* [X] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * [Uuser data flow diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727383607379/9c85b435e20aa15eb4ae6417aebd6891773f241c?wid=0-1727384114267&sender=uffe0b1e17d72421900bf8566)
* [X] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.

#### User experience

* [ ] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.

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
