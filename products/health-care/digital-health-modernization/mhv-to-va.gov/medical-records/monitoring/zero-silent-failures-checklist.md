# MHV on VA.gov Medical Records - Zero Silent Failures checklist
- Last updated: 09/18/2024
---

* Does your application have a user-facing transaction that is submitted to a back-end system?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * NOTE: This is not limited to online forms! Other examples can include:
    * Uploads of documents and/or attachments
    * Performing an action (Such as refilling a prescription or ordering supplies)

* Are you using any of the following APIs:
    * [Lighthouse Appeals Status](https://developer.va.gov/explore/api/appeals-status/docs?version=current)
    * [Lighthouse Benefits Documents API](https://developer.va.gov/explore/api/benefits-documents/docs)
    * [Lighthouse Benefits Intake API](https://developer.va.gov/explore/api/benefits-intake/docs) / Central Mail
    * [Lighthouse Decision Reviews](https://developer.va.gov/explore/api/decision-reviews/docs?version=current)
    * [EVSS Document Upload](https://github.com/department-of-veterans-affairs/vets-api/blob/master/docs/setup/evss.md)
 
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No


* Does your application submit to an API that relies on Sidekiq (or another background job processor)?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [ ] Do you know when your applications shipped to production?
  * If not, use Github to determine, roughly, when your application shipped to users.
    
##### Ship Dates:
  - Allergies:
  - Vaccines:
  - Vitals:
  - Health Conditions:
  - Care Notes and Summaries:
  - Lab and Test Results:
  - Blue Button:
  - Continuity of Care Document:

* [ ] Do your applications use the same APIs when it shipped as it does today?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.

#### Monitoring
* [ ] Do you monitor the APIs that you submit to via Datadog?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).

* [ ] Does your Datadog monitoring use the appropriate tagging?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!

* [ ] Do errors detected by Datadog go into a Slack notifications channel?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.
    
  * Link to channel where alerts are populated:

* [ ] Does more than one person look at the Slack notifications channel containing errors on a daily basis?
    - [ ] Yes     
    - [ ] No

  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

* [ ] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?
     - [ ] Yes     
     - [ ] No

  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

-   Link to Playbook:

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors
* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
  - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)


* [ ] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
   - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)


#### Documentation

* [ ] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record?
 - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
 
  * If not, then [create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md) that captures this information. 
  * Link to data flow diagram:
   - Allergies:
   - Vaccines:
   - Vitals:
   - Health Conditions:
   - Care Notes and Summaries:
   - Lab and Test Results:
   - Blue Button:
   - Continuity of Care Document:

* [ ] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down? This should be captured in the data flow diagram or a separate document. 
 - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.

* [ ] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
 - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github and link here:

#### User experience

* [ ] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
   - Allergies:
    - [ ] Yes     
    - [ ] No
  - Vaccines:
    - [ ] Yes     
    - [ ] No
  - Vitals:
    - [ ] Yes     
    - [ ] No
  - Health Conditions:
    - [ ] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [ ] No
  - Lab and Test Results:
    - [ ] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No

  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md). That diagram will help us to help you and your team to create this user experience.

