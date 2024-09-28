# Checklist for Pre-Check-In

## Start

* [x] Do you know when your application shipped to production?
  * 05/02/2022
* [x] Did your application use the same APIs when it shipped as it does today?
  * Yes, it has been consistent.

## Monitoring

* [x] Do you monitor the API that you submit to via Datadog?
  * LoROTA
    * [Dashboard](https://tevi.ddog-gov.com/dashboard/9ss-nrd-bj9/technical-dashboard---lorota-prod?fromUser=false&refresh_mode=sliding&from_ts=1727100299251&to_ts=1727103899251&live=true)
    * Monitors (see department-of-veterans-affairs/checkin-devops#633).
  * Vista API
    * [Dashboard](https://vetext.ddog-gov.com/dashboard/vu4-t9w-xzs/vista-api?fromUser=false&refresh_mode=sliding&from_ts=1727101512354&to_ts=1727105112354&live=true)
    * Monitors
      * [Prod High Error Rate](https://vetext.ddog-gov.com/monitors/122032)      
  * Clinician Workflow
    * Monitors
      * [High Error Rate](https://tevi.ddog-gov.com/monitors/277782)
* [x] Does your Datadog monitoring use the appropriate tagging?
  * Yes; all monitors use required tags. We have opened a ticket for adding dependency tags.
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * Yes: `#check-in-monitoring`.
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * Yes; we have an AM/Eastern and a PM/Western PagerDuty rotation and we review `#check-in-monitoring` on an ongoing basis.
* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * Yes; we've adopted the standard system for acknowledging and responding to errors, and pinned a pink to the document in the `#check-in-monitoring` Slack channel.

## Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * Yes.
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * Yes; all fatal errors thrown by CHIP or LoROTA are returned to VeTEXT or Vets-API/Vets-Website for presentation to the user.

## Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * Yes;
    * [Initiate Pre-Check-In](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_preCheckInExp.md#initiate-pre-check-in)
    * [Start Pre-Check-In](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_preCheckInExp.md#start-pre-check-in)
    * [Authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_preCheckInExp.md#authentication)
    * [Complete Check-In](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_preCheckInExp.md#complete-pre-check-in)
* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * Yes; all uncaught errors are caught and re-thrown with pertinent information. Errors are returned to the calling system with an appropriate level of detail for the user. Users are instructed to check in at the desk if they encounter a non-actionable error.
* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * VA Notify - Working on it, will get back to us
  * VeTEXT - Working on it, will get back to us
  * MAP Services (i.e. VAOS) - Working on finding a contact
  * VistA - Working on finding a contact

## User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * Yes; all non-travel pay-related functions are blocking, all errors (including otherwise uncaught errors from upstream) are caught and delivered to the calling application in an appropriate format for presentation to the user.
