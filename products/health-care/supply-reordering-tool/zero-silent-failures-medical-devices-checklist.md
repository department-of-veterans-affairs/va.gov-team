### Checklist

#### Start

* [x] Do you know when your application shipped to production?
  * Yes
* [x] Did your application use the same APIs when it shipped as it does today?
  * Yes
#### Monitoring

* [x] Do you monitor the API that you submit to via Datadog? 
  * Yes, on the [Medical Device Supply Reordering dashboard](https://vagov.ddog-gov.com/dashboard/nfr-cy2-8vq/medical-supply-reordering?fromUser=false&refresh_mode=sliding&from_ts=1727373384899&to_ts=1727376984899&live=true)
* [ ] Does your Datadog monitoring use the appropriate tagging?
 * @Adrian Rollett can you confirm? 
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * Yes, all errors detected by Datadog go to the #va-cto-supply-reordering-alerts channel. 
* [ ] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * At the moment, we do not have a consistent monitoring schedule. Action Item : create a monitoring schedule for those on the team and get everybody access to the Datadog Dashboard.
* [ ] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
* [ ] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)

#### Documentation

* [ ] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * If not, then [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram) that captures this information. 
* [ ] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.

#### User experience

* [ ] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](#how-to-create-a-user-data-flow-diagram). That diagram will help us to help you and your team to create this user experience.
