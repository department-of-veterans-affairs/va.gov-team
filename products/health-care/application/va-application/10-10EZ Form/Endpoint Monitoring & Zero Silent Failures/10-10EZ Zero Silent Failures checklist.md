# 10-10EZ - Zero Silent Failures checklist
- Last updated: 09/24/2024
---

* Does your application have a user-facing transaction that is submitted to a back-end system? 
  * NOTE: This is not limited to online forms! Other examples can include:
    * Uploads of documents and/or attachments
    * Performing an action (Such as refilling a prescription or ordering supplies)
>* Yes
>   * Vets-API
>   * Veteran Enrollment System - submit validated form data and uploaded documents
>   * S3 - Temporarily store all user-uploaded hca attachment files before submitting them to Veteran Enrollment System
>   * VaNotify - Used to send submission failure email

* Are you using any of the following APIs:
    * [Lighthouse Appeals Status](https://developer.va.gov/explore/api/appeals-status/docs?version=current)
    * [Lighthouse Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs)
    * [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs) / Central Mail
    * [Lighthouse Decision Reviews](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)
    * [EVSS Document Upload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/evss.md)
>* No, we are not using any of the listed APIs

* Does your application submit to an API that relies on Sidekiq (or another background job processor)?
>* Yes

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [x] Do you know when your application shipped to production? 
  * If not, use Github to determine, roughly, when your application shipped to users.
>  * Yes, May 2016 on vets.gov

* [x] Did your application use the same APIs when it shipped as it does today?
  * If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.
>* No - After some research was done into the old archived documentation, we have found that the endpoint APIs we are using today have not changed since the form was launched.
>    >* As far as we know, the wsdl file is used to describe the available endpoints and services for an api. In our case, we have this voa.wsdl file , which was originally added 8 years ago when the 10-10EZ form was first created online. It has only had one edit (which was related to updating the gem we use to make the request 3 weeks ago), but which did not change any of the endpoint descriptions. It looks like the only endpoints we use with the enrollment system are the saveSubmitForm (used to submit the completed form) and the getFormSubmissionStatus (which is used by our healthcheck endpoint).
>    >* So in conclusion, our usage in regards to which endpoints we are using have not changed since the app was first created.

#### Monitoring

* [x] Do you monitor the API that you submit to via Datadog? 
  * If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).
>   * Yes, we do have a [Datadog dashboard](https://vagov.ddog-gov.com/dashboard/8yz-qzc-bng/1010ez-vagov-performance?fromUser=false&refresh_mode=sliding&from_ts=1726253931381&to_ts=1726858731381&live=true) that monitors vets-API, Veteran Enrollment system, [FILE UPLOAD SERVICE???] via Datadog.
>   * **ACTION ITEM**: We are not set up for Delivery Status callbacks with VA Notify, ticket created [#93247](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93247) to remediate
>        * Confirmed that there have not been any delivery failures since onboarding Submission Failures emails to VA Notify on 7/9/2024
>        * Prior to this, we had a Datadog monitor on the govDelivery email delivery status set up since September 2023 (which was removed when we switched over to VA Notify).
>   * We have added the required [Silent Failure Avoided tracking logging](https://vagov.ddog-gov.com/dashboard/n6c-twn-swr/silent-failure-tracker?fromUser=false&refresh_mode=sliding&tpl_var_env%5B0%5D=eks-prod&from_ts=1729187697952&to_ts=1729792497952&live=true) to our 10-10EZ form, test results (10/24/2024) appeared in the tracker as expected

* [x] Does your Datadog monitoring use the appropriate tagging?
  * If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!
>   * Yes, all [10-10EZ Datadog monitors](https://vagov.ddog-gov.com/monitors/manage?q=1010&order=desc) have been updated with the appropriate tagging

* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.
>  * Yes, all alerts populate the [#health-tools-1010-apm](https://dsva.slack.com/archives/C0310PNS7TQ) channel that all 10-10 Health Apps teammembers are a member of and monitor regularly

* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
>  * Yes, the 10-10 Health Apps team is very involved with any alerts that come up and ensure they are addressed timely

* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)
>  * Yes, we currently have the [Endpoint Monitoring Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/10-10EZ%20Form/Endpoint%20Monitoring%20%26%20Zero%20Silent%20Failures/10-10EZ%20Monitor%20Playbook.md) that includes the list of monitors and steps to take to address and notify the appropriate audience.  

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
>   * Team tickets are created for investigation and subsequent resolutions.  The 10-10 Health Apps team is notified on all application and Enrollment system failures, and we have a process to ensure the Veteran is being contacted timely by the Health Enrollment Center staff to assist with their application.
>   * We have two tickets that we have tagged as part of the Zero Silent Failure remediation:
>      * [#93247](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93247) - This is to address the gap of not being alerted when a submission failure email fails to send to the Veteran.  (There have not been any failures since onboarding to VA Notify, no failure remediation is needed)
>      * [#93166](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93166) - This is to update our submission flow documentation with the additional error handling indicated, including the VA Notify Delivery Status callbacks being implemented in the ticket above (#93247)

* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)
>   * Yes, The Veteran is sent an auto-generated email upon submission failure, if an email address is present in the form.
>        * If no email address is not present in the form, there is an on-screen error message upon submission failure.
>   * VA Notify email failure - ticket created [#93247](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93247) to remediate
>        * This is logged in Sentry but we are not notified.
>        * Veteran data is available to send to Health Enrollment Center upon failure, as per our usual submission failure process.



#### Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
>  * Yes, [10-10EZ Flow Chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/10-10EZ%20Flow%20Chart.md)
>  * ACTION ITEM [#93247](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93247): Update Flow chart to include:
>       * VES error handling (aka direct to manual workflow)
>       * VA Notify email sends error handling (NEW)
>       * Specify APIs/SORs we call within what steps
>       * Detail which system retries a submission and what happens after all retries are exhausted (aka our submission failures process)

* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
>   * Yes - ACTION ITEM [#93247](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93247): Update Flow chart
> 
* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.
>   * Yes, we confirmed with Joshua Faulkner (Technical Director of the Veteran Enrollment System (VES) via email that:
>   >*  any errors considered "fatal" or "unrecoverable" once they reach the VES are moved into a manual workflow for the staff to take action on the application submission.
>   >*  Most of the scenarios that result in this manual workflow are expected and intentional, especially in the anonymous submission route; but unexpected errors also follow that same flow.
>   *  This will be documented in our [10-10EZ Flow Chart](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/10-10EZ%20Flow%20Chart.md) 

#### User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.
>   * Not yet. We must remediate the Delivery Status callback setup from VA Notify to ensure our team is being notified of any failed email sends - [#93166](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93166)
>   * All other points of failure are made known to the user on-screen within the 10-10EZ online form or via email.

