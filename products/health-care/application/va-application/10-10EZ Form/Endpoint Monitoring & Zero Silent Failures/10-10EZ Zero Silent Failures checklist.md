# 10-10EZ - Zero Silent Failures checklist
- Last updated: 09/18/2024
---

* Does your application have a user-facing transaction that is submitted to a back-end system? 
  * NOTE: This is not limited to online forms! Other examples can include:
    * Uploads of documents and/or attachments
    * Performing an action (Such as refilling a prescription or ordering supplies)
>* Yes 

* Are you using any of the following APIs:
    * [Lighthouse Appeals Status](https://developer.va.gov/explore/api/appeals-status/docs?version=current)
    * [Lighthouse Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs)
    * [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs) / Central Mail
    * [Lighthouse Decision Reviews](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)
    * [EVSS Document Upload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/evss.md)
>* ANSWER NEEDED - maybe BGS?  Need to find out for sure

* Does your application submit to an API that relies on Sidekiq (or another background job processor)?
>* Yes

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [x] Do you know when your application shipped to production? 
  * If not, use Github to determine, roughly, when your application shipped to users.
>  * Yes, May 2016 on vets.gov

* [ ] Did your application use the same APIs when it shipped as it does today?
  * If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.
>* ANSWER NEEDED - research is needed

#### Monitoring

* [ ] Do you monitor the API that you submit to via Datadog? 
  * If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).
>   * Yes, we do monitor vets-api

* [ ] Does your Datadog monitoring use the appropriate tagging?
  * If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!
>   * ANSWER NEEDED - There are some tagging, may need some for where we are missing
“Healthcare-application” tag

* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.
>  * Yes, all alerts populate the [#health-tools-1010-apm](https://dsva.slack.com/archives/C0310PNS7TQ) channel

* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
>  * Yes, the team is very involved with any alerts that come up and ensure they are addressed timely

* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
>  * Yes, we currently have a runbook as well as a list of monitors and steps to take to address and notify the appropriate audience.  We are in the process of taking that information and creating the Playbook, as the QA standard.
We use emojis to indicate a review is occurring and add comments on any findings, tagging other teammembers as needed.

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
>   * ANSWER NEEDED - Team tickets are created.  Heather to get clarification on this question.

* [ ] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)
>   * ANSWER NEEDED - user is sent an email upon submission failure, if an email is present in the form.  If no email address is not present in the form, there is an onscreen error message upon submission failure.
>VA Notify email failure - need remediation (and any other VA notify failures) - this is logged in Sentry but we are not notified.  Is data available to send to HEC after this failure? Yes, in PI log and Sentry.
>Disability rating - returns “error” but is not really a fatal error stopping the user from completing & submitting
>Profile/Enrollment, as well as previously filled data
>onscreen field errors are not fatal errors



#### Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
>  * Yes, [Submission flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/10-10EZ%20Flow%20Chart.md) 

* [ ] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
>   * Yes, playbook in progress.  Diagram needed

* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.
>   * ANSWER NEEDED - VES - we dont have anything in writing, need process of system notifications and resolutions of fatal errors from VES.

#### User experience

* [ ] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.
>   * Yes, for the known errors.  - need to check out VA Notify and VES
