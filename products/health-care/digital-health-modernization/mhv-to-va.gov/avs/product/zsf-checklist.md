# Zero Silent Failures checklist for AVS on va.gov

## Start

* [x] Do you know when your application shipped to production?
  * August-September 2024
* [x] Did your application use the same APIs when it shipped as it does today?
  * Yes
  
## Monitoring

* [x] Do you monitor the API that you use via Datadog?
  * [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%28service%3Aafter-visit-summary%29&order=desc)
* [x] Does your Datadog monitoring use the appropriate tagging?
  * [Monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%28service%3Aafter-visit-summary%29&order=desc)
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * [#avs-alerts](https://dsva.slack.com/archives/C07GWRWAED9)
* [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
* [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
  * Created [playbook](../incident-response/playbook.md)
  
## Reporting errors

* [x] Have you filed issues for errors that are appearing in Datadog / Slack?
  * There are no current errors specific to the AVS application. An issue with 502 responses from the AVS backend was identified and resolved in concert with the AVS backend and VAOS teams during the initial rollout.
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * Any non-successful responses from the backend result in an error being shown to the user.

## Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
  *  Data flows are documented [here](../engineering#architecture).
* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * The AVS application is read-only and does not accept user submissions.
* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * The AVS application is read-only and does not accept user submissions.

## User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * All non-success responses from the backend are handled. Error paths are documented on the [designs in Figma](https://www.figma.com/design/31l8PTsu3E80aQiJvSpZJK/AVS-MVP-12_27?node-id=0-29&node-type=canvas&t=1gLnjBbQymlCDI3X-0).
