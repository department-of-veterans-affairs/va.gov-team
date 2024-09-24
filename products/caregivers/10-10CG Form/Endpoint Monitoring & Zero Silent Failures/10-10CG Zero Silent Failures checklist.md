# 10-10CG - Zero Silent Failures checklist
- Last updated: 09/23/2024
---

* Does your application have a user-facing transaction that is submitted to a back-end system? 
  * NOTE: This is not limited to online forms! Other examples can include:
    * Uploads of documents and/or attachments
    * Performing an action (Such as refilling a prescription or ordering supplies)
>* Yes - APIs currently in use
>    * MuleSoft - form data and documents are submitted here upon being validated
>    * S3 - Temporarily store POA files before submitting them to MuleSoft.
>    * MPI - Validate veteran status during form validation flow
>* Previously used
>    * CARMA - Initially the 10-10CG data was submitted to CARMA directly, but it was updated to submit to MuleSoft which handles sending the data to CARMA now.
>* Future APIs
>    * Okta - Not yet live but all work in vets-api has been completed. Planning to update the auth flow with MuleSoft to use Okta to generate an auth token this fall once the CARMA team finishes some updates.

* Are you using any of the following APIs:
    * [Lighthouse Appeals Status](https://developer.va.gov/explore/api/appeals-status/docs?version=current)
    * [Lighthouse Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs)
    * [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs) / Central Mail
    * [Lighthouse Decision Reviews](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)
    * [EVSS Document Upload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/evss.md)
>* No, we are not using the APIs listed above

* Does your application submit to an API that relies on Sidekiq (or another background job processor)?
>* Yes

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [x] Do you know when your application shipped to production? 
  * If not, use Github to determine, roughly, when your application shipped to users.
>  * Yes, October 2020

* [x] Did your application use the same APIs when it shipped as it does today?
  * If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.
>* No, MuleSoft was introduced in September 2022, which is now a middleware between VA.gov and CARMA.  We no longer connect directly to CARMA.
>     * The team had Datadog monitoring for the CARMA system while connected, and has since been updated to monitor MuleSoft when the change was made.
>     * Sentry logs and alerts were also in place for the data flow to CARMA, which have since been removed after the change to MuleSoft was made.

#### Monitoring

* [x] Do you monitor the API that you submit to via Datadog? 
  * If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).
>   * Yes, we do monitor MuleSoft and file upload in the [10-10CG Datadog Dashboard](https://vagov.ddog-gov.com/dashboard/zcn-whk-r5h/1010-cg-vagov-performance?fromUser=false&refresh_mode=sliding&from_ts=1726692573245&to_ts=1726865373245&live=true)

* [x] Does your Datadog monitoring use the appropriate tagging?
  * If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!
>   * Yes, all [10-10CG Datadog monitors](https://vagov.ddog-gov.com/monitors/manage?q=1010&order=desc) have been updated with the appropriate tagging

* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.
>  * Yes, all alerts populate the [#health-tools-1010-apm](https://dsva.slack.com/archives/C0310PNS7TQ) channel

* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
>  * Yes, the team is very involved with any alerts that come up and ensure they are addressed timely

* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
>  * Yes, we currently have the [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10CG%20Monitor%20Playbook.md) that includes the list of monitors and steps to take to address and notify the appropriate audience.  

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
>   * Team tickets have been created for investigation and subsequent resolutions.
>   * At this time, the 10-10CG does not have any silent failures.
>   * The 10-10 Health Apps team or the CG tech team is notified on any failures and processes are in place to ensure the Veteran and Caregiver(s) are notified by phone or email that there was an issue and requesting they resubmit the application.

* [X] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)
>   * Only onscreen errors are present for CG including immediate submissions failures
>   * Retry failures - When the MuleSoft system is not available at submission, the submission is retried for up to 24 hours.  If MuleSoft continues to be unavailable and the submission exhausts retries, the 10-10 Health Apps team would follow the formal [Ultimate Failure process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Vets-api%20retries%20for%20MuleSoft%20-%20Ultimate%20Failures%20process.md) (written with the Caregiver business stakeholders) to gather user data, notify CG team who will then notify the Veteran/Caregiver directly, and assist them with their application.
>        * This is also accounted for within the [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10CG%20Monitor%20Playbook.md)

#### Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
>  * Yes, [Architectural Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf) and [End-to-End Data Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10cg%20End-to-End%20data%20flow.png)

* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
>    * If the MuleSoft system is unavailable at the time of application submission, vets-api will retry the submission for up to 25 hours.
>        * If the application cannot be successfully retried in that time, we follow the [Ultimate Failure process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/10-10CG%20Form/Vets-api%20retries%20for%20MuleSoft%20-%20Ultimate%20Failures%20process.md) (written with the Caregiver business stakeholders) to gather user data, notify CG team who will then notify the Veteran/Caregiver
>   * If the CARMA system is unavailable at the time of application submission, MuleSoft queues the application until the CARMA system is available to receive the data for up to 24 hours.
>        * If the application cannot be successfully retried in that time, the contact information within the application data is used to send an email to the Veteran and Caregiver, informing them of the issue and requesting they resubmit the application.
>        * This is documented in the [End-to-End Data Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10cg%20End-to-End%20data%20flow.png)

* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.
>   * Yes, Ranganathan Balasubramanian (Senior Technical Architect with Salesforce/CARMA) confirmed via email of the steps below and documented in the [End-to-End Data Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10cg%20End-to-End%20data%20flow.png)
>        >* When Mule receives an application from Va.gov , one of the following outcomes is possible.
>        >    * Successfully generate application records with attachments in Salesforce and send success email to submitter.
>        >    * Create a shell case with pdf attachments and generate a DTC case that has a monitored queue and workflow to generate case records manually using pdf details, which will also send a success email to the submitter.
>        >    * If the retries are all exhausted and Mule could send any information about the case to salesforce , then send an email to the submitter notifying failure and requesting to resubmit.

#### User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.
>   * Yes, these are captured within the [Architectural Overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10%20Architectural%20Overview.pdf) and [End-to-End Data Flow](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/caregivers/eng-docs/10-10cg%20End-to-End%20data%20flow.png)
