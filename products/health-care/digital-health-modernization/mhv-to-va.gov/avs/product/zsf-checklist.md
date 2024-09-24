# Zero Silent Failures checklist for AVS on va.gov

## Start

* [x] Do you know when your application shipped to production?
  * August-September 2024
* [x] Did your application use the same APIs when it shipped as it does today?
  * Yes
  
## Monitoring

* [x] Do you monitor the API that you submit to via Datadog?
  * [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%28service%3Aafter-visit-summary%29&order=desc)
* [x] Does your Datadog monitoring use the appropriate tagging?
  * [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%28service%3Aafter-visit-summary%29&order=desc)
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * [#avs-alerts](https://dsva.slack.com/archives/C07GWRWAED9)
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
  * Created [playbook](../incident-response/playbook.md)
  
## Reporting errors

* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
* [ ] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?

## Documentation

* [ ] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
* [ ] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?

## User experience

* [ ] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
[Create Thread](https://github.com/department-of-veterans-affairs/mhv-sm-patient-api/blob/development/src/main/java/gov/va/med/mhv/sm/patient/service/SendMessageService.java#L690)
[Send Patient Message](https://github.com/department-of-veterans-affairs/mhv-sm-patient-api/blob/development/src/main/java/gov/va/med/mhv/sm/patient/service/SendMessageService.java#L584C18-L584C36)
[Send Message](https://github.com/department-of-veterans-affairs/mhv-sm-patient-api/blob/development/src/main/java/gov/va/med/mhv/sm/patient/service/SendMessageService.java#L584C18-L584C36)
