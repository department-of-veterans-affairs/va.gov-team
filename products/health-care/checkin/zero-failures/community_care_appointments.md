# Checklist for Community Care Appointments

## Start

* [x] Do you know when your application shipped to production?
    * 6/23/25

* [x] Did your application use the same APIs when it shipped as it does today?
    * yes

## Monitoring

* [x] Do you monitor the API that you submit to via Datadog?
    * We do not monitor the EPS (Wellhive) api, but we do have all our external calls in place tracked with StatsD / Datadog metrics, so failures when submitting to EPS (Wellhive) will trigger monitors.

* [x] Does your Datadog monitoring use the appropriate tagging?
    * yes

* [] Do errors detected by Datadog go into a Slack notifications channel?
    * yes - `#check-in-experience-apm` under `dsva.slack.com`

* [] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
    * currently working out a monitoring schedule

* [] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
    * currently working out a monitoring / response system and schedule

## Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
    * none so far

* [] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * Yes; all fatal errors thrown by EPS (Wellhive) are returned to Vets-API/Vets-Website for presentation to the user or via VaNotify email notification after appointment booking submission.

## Documentation

* [] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
  * Yes:

  https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/architecture/community-care-technical-documentation.md

* [] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * Yes; The error is logged with pertinent user info (uuid) and the appropriate failure metric is incremented. If the finallized appointment fails to be confirmed as "booked" an email is sent to the user via VaNotify. If that email attempt fails the callback class logs the error and increments a failure metric.

* [] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * See Wellhive documentation: https://github.com/wellhive/api-docs

## User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * Yes; throughout the appointment creation workflow all errors (including otherwise uncaught errors from upstream) are caught and delivered to the calling application in an appropriate format for presentation to the user.

  Upon appointment submission an async background process polls the EPS (Wellhive) api to check that the appointment status updates from draft to booked, if that process fails to confirm the expected status a notification of failure is sent in an email to the user via VaNotify.
