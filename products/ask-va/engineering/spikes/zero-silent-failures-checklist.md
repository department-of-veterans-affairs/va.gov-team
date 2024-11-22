# Ask VA zero silent failures checklist
Last updated on November 22, 2024 by: @beckyphung

I copied this checklist from [this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md#checklist). 

**Jump to:**
- [Start](#start)
- [Monitoring](#monitoring)
- [Reporting errors](#reporting-errors)
- [Documentation](#documentation)
- [User experience](#user-experience)
- [Next steps](#next-steps)

## Start

* [x] Do you know when your application shipped to production?
  * If not, use Github to determine, roughly, when your application shipped to users.
  * 💬 Our application isn't currently shipped to production yet. We're expecting to ship April 9 ([see Mural timeline](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715100136735/fdff4d9758a1e62c69c5962faa45c587b83c9e12)).
* [x] Did your application use the same APIs when it shipped as it does today?
  * If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.
  * 💬 See message above. Here's a [list of the APIs](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/integration) we'll be using.
## Monitoring

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

## Reporting errors

* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
* [ ] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)

## Documentation

* [ ] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
* [ ] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.

## User experience

* [ ] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.

## Next steps

### We don't have any silent errors!

Great! Please let us know that you went through the checklist above as a team and did not find any silent failures in our Slack channel: [#zero-silent-failures](https://dsva.slack.com/archives/C07KTTFP308) and send us a link of a copy of [this](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md#checklist) completed checklist. If you don't connect to a backend system, you don't need to fillout the checklist but let us know in your message.   You don't have to hang out in there once you have notified us. Just pop in, tell us who you are (which team and in which portfolio) and that no failures were found. Thanks!

### Additional details

#### Set up monitoring in Datadog

Follow this [guidance on endpoint monitoring](https://depo-platform-documentation.scrollhelp.site/developer-docs/endpoint-monitoring) to get going. Then following the guidance on [monitoring performance](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-applications-and-infrastructure-with-datad) to get up to speed with Datadog.

##### Examples

* [Benefits Intake API Form Submission Tracking](https://vagov.ddog-gov.com/dashboard/4d8-3fn-dbp/benefits-intake-form-submission-tracking?fromUser=false&refresh_mode=sliding&from_ts=1725259648303&to_ts=1725864448303&live=true)
* [Banana Peels (Lighthouse Appeals/Forms/Benefits Intake APIs)](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=true&refresh_mode=sliding&from_ts=1725259764640&to_ts=1725864564640&live=true)
* [Benefits Sidekiq Death Queue view](https://vagov.ddog-gov.com/dashboard/ftx-zzd-v9j/benefits-sidekiq-job-death-queue-view) - shows recently exhausted Sidekiq jobs.

[Additional examples](https://depo-platform-documentation.scrollhelp.site/developer-docs/platform-dashboards-in-datadog)

#### File silent errors issues in Github

We want to know about your silent errors so that we can help you to fix them. To do this, follow the process in the [Managing Errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md) document.

#### How to create a user data flow diagram 

Creating a user data flow diagram is a requirement of the Zero silent errors initiative and will be a required asset at the Architecture Intent touchpoint of the Engineering and Security track of Collaboration Cycle.

[Learn how to create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md)
