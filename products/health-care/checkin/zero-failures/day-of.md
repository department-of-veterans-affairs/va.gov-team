# How to discover if your application has a silent failure

This document details how your Veteran-facing team can perform discovery tasks to determine if your application (product, service, et al.) has a silent failure.

Thank you for helping us find and fix slient failures. It is our collectively responsibility as stewards of the Veteran's data to track these problems down and fix them. We appreciate your support and dedication in helping us reach the goal of zero silent errors. This is a blameless process. We want to thoroughly investigate this problem so that we know the depth and breadth of the problem and can take the necessary steps to addres it.

## What is a silent failure?

Silent failures are any errors that occur within your application on any public facing VA platform (VA.gov, mobile application, VA Notify, et. al.) whereby the user (Veteran, claimant, 3rd party, etc.) interacting with your application is NOT made aware that an error has occurred.

### What is NOT a silent failure?

* If an application returns an error to the user immediately upon detection of the error, then the error is not silent. 
* If an application sends an email to the user notifying them that an error with their transaction has occured, then the error is not silent (so long as sending the email is also monitored and confirmed to have been sent).

### Synchronous versus asynchronous errors

Synchronous and asynchronous are used throughout this document to explain errors that are returned to the user.

* Synchronous: An error that is immediately returned to the user following an interaction. For example, an error alert that appears on a form when we detect that a required field has not been filled out. This type of error appears immediately following a user interaction and thus the user is made aware and can respond to that error.
* Asynchronous: An error that is detected after the user has already moved on to another interaction or has left VA.gov or the mobile application entirely. For example, an error that is detected in a background job process in the hours or days following a user submission of data.

## How do silent failures occur?

There are, unfortunately, a number of categories of silent failures. Most often silent errors occur in asynchronous handling of user submitted data. This presents challenges in returning that error to the user.

### Examples of silent failures

* User submits data via VA.gov or the mobile application that uses an API which utilizes Sidekiq, a background job framework, for scheduling and running asynchronous jobs on the vets-api platform. Failures in those asynchornous jobs can fail without that error being made known to the user.
* User submits data via VA.gov that uses the Lighthouse Benefits Intake API which hands off to the Central Mail portal which handles the form submission asynchronously and an error occurs after the user has completed their interaction.
* User submits data via VA.gov that uses the Lighthouse Benefits Intake API which hands off to the Central Mail portal which moves the user's submission into VBMS but then there is a problem when a processor tries to work on the form.
* User performs an action, but is not given a clear indication of a failure in the UI.

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

* [ ] Do you know when your application shipped to production?
  * If not, use Github to determine, roughly, when your application shipped to users.
* [ ] Did your application use the same APIs when it shipped as it does today?
  * If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.

#### Monitoring

* [ ] Do you monitor the API that you submit to via Datadog? 
  * If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).
* [ ] Does your Datadog monitoring use the appropriate tagging?
  * If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!
* [ ] Do errors detected by Datadog go into a Slack notifications channel?
  * If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.
* [ ] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
* [ ] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
* [ ] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)

#### Documentation

* [ ] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
* [ ] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
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

### How to create a user data flow diagram 

Creating a user data flow diagram is a requirement of the Zero silent errors initiative and will be a required asset at the Architecture Intent touchpoint of the Engineering and Security track of Collaboration Cycle.

[Learn how to create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md)
