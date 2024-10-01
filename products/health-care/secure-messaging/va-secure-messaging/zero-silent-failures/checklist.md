# Checklist for SM on va.gov

## Start

* [x] Do you know when your application shipped to production?
  * Summer of 2023
* [x] Did your application use the same APIs when it shipped as it does today?
  * Yes
  
## Monitoring

* [x] Do you monitor the API that you submit to via Datadog?
  * [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=MHV%20Secure%20%20status%3Aok&order=asc&sort=status)
* [x] Does your Datadog monitoring use the appropriate tagging?
  * [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=MHV%20Secure%20%20status%3Aok&order=asc&sort=status)
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * #mhv-on-va-gov-alerts
  * #mhv-secure-messaging-alerts
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
  * Created [playbook](../incident-response/playbook.md)
  
## Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If an error is thrown (an exception or a 500 is thrown), we are showing that error
  
  ## Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
  * [Yes](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1726680887750/5d52dc27a66fd60074164175906fd62c34375d51?sender=ucd28b33d31bca59ada3d5719)
* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * we have and use a Pagerduty integration
* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * This has uncovered and action item for the SM API team

## User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  
## Next Steps

> OCTO heading this action items currently

* [ ] Continue diving into production to shore up error handling
* [ ] Handle file errors better
* [ ] Make email failure not a critical error
* [ ] Refine error handling and testing guidelines and implementation
* [ ] Walk through the exchange to determine the silent failures

## Key Findings

* Everything we do is synchronous
* SM API has some tech debt around error handling
  * Somes times might return a 200, when it failed. This is the current inviestigation.
  * false errors (email) (ticket made)
  * Attachment error handling (getting handled currently)
* There are some challenges with the OH integration that we aware of and building into the process to support user notifications
  * queues, databases, monitoring
  * a bunch of async background processing
