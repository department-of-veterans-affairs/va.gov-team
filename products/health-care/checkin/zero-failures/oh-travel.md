# Checklist for Oracle Health Travel

## Start

* [x] Do you know when your application shipped to production?
  * Application not yet released to production; Ready to be released in Fall 2024.
* [x] Did your application use the same APIs when it shipped as it does today?
  * We are not anticipating any changes in the APIs used.

## Monitoring

* [x] Do you monitor the API that you submit to via Datadog?
  * Not applicable as of now; But we have the metrics logging in place to have the monitors set when the application gets launched in production.
* [x] Does your Datadog monitoring use the appropriate tagging?
  * Not applicable as of now; 
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * Not applicable as of now;
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
  * Not applicable as of now;
* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
  * Not applicable as of now; 
  
## Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * Not applicable as of now;
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * Yes; For all the fatal errors thrown from the application and dependency system, user gets notified with an appropriate message via SMS

## Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
  * [Claim Submission Initiation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_checkInExp.md#claim-submission---initiation)
  * [Claim Submission to BTSSS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_checkInExp.md#claim-submission-to-btsss)
  * [Timeout Handling for BTSSS Claim Submission](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/checkin/engineering/architecture-diagrams/sequenceDiagram_checkInExp.md#timeout-handling-for-btsss-claim-submission)
* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * Yes; All errors from the dependency system were handled in the application & user notified with an appropriate message.
* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * Yet to receive the checklist from VANotify and BTSSS; But we have the error logged in [dashboard](https://vagov.ddog-gov.com/dashboard/5pd-req-u6d/check-in-travel-claims?fromUser=false&refresh_mode=sliding&from_ts=1726837576797&to_ts=1726841176797&live=true) & monitors set to alert us to notify them.

## User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
Yes; [User data flow diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726499798057/8fbff152d0e4701a87ec74b48f8aac0558734ba9?sender=u6005c56459167a3d13814142) for reference

## Action Item
- [ ] Handling the silent failure if there is failure in both Claim Submission API + VANotify API
