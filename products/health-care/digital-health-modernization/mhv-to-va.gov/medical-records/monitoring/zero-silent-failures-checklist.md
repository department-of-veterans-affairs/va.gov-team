# MHV on VA.gov Medical Records - Zero Silent Failures checklist
- Last updated: 09/30/2024
---

* Does your application have a user-facing transaction that is submitted to a back-end system?

  _For Medical Records, we do NOT have any user entered data submitted to a backend system, with one exception: users are able to change their "VHIE Sharing" opt in/out out setting via our settings page. That change is submitted to the backend and the user is provided a success or error message. For various domains (below) we do call various backend systems to RETRIEVE data, therefore we are marking those as 'Yes'._

  - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [X] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [X] Yes     
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

    - [ ] Yes     
    - [X] No - not used for any domains


* Does your application submit to an API that relies on Sidekiq (or another background job processor)?

  _We do have a Sidekiq process to run 'PHR Refresh' that is run when we create the backend session to MHV APIs. This session is created whenever a user interacts with any MR API and persists for one hour._

  - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [X] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [X] Yes     
    - [ ] No

If you answered yes to any of these questions then go through the following [checklist](#checklist) as a team exercise to determine if your application has silent failures.

### Checklist

#### Start

* [X] Do you know when your applications shipped to production?
  * If not, use Github to determine, roughly, when your application shipped to users.

##### Ship Dates:
  - Allergies: Sep 2023
  - Vaccines: Nov 2023
  - Vitals: Feb 2024
  - Health Conditions: May 2024
  - Care Notes and Summaries: May 2024
  - Lab and Test Results: Sep 2024
  - Blue Button: Developed, but currently behind feature flag (not shipped)
  - Continuity of Care Document: Not yet completed

* [X] Do your applications use the same APIs when it shipped as it does today?
  - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [X] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [X] Yes     
    - [ ] No

If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.

#### Monitoring
* [X] Do you monitor the APIs that you submit to via Datadog?

  _Currently, all our domains are combined into just a few monitors, e.g. error, anomaly, but we plan to research whether they should be split out into individual monitors: [MHV-62593](https://jira.devops.va.gov/browse/MHV-62593) (research), [MHV-62594](https://jira.devops.va.gov/browse/MHV-62594) (implementation)_

  - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
    - [X] N/A - this isn't a specific API but rather a combination of all other APIs so yes it is covered
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A (MHV-62491, 2, 3)
  - Settings Page:
    - [ ] Yes     
    - [X] No - Not yet deployed, will add monitor before it goes live (MHV-62490)

  * If not, [set up monitoring in Datadog](#set-up-monitoring-in-datadog).

* [X] Does your Datadog monitoring use the appropriate tagging?

  _All of our Datadog monitors have the tags `team`, `service`, `env`, and `itportfolio`. We will look into adding the `dependency` tag ([MHV-62580](https://jira.devops.va.gov/browse/MHV-62580))._

  - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [ ] Yes     
    - [ ] No
    - [X] N/A - this isn't a specific API but rather a combination of all other APIs so yes it is covered
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [ ] Yes     
    - [X] No - Not yet deployed, will add monitor when it goes Live

  * If not, [implement tagging standards](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards). Adding the [dependency tag](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-tagging-standards#MonitorTaggingStandards-Recommended:dependency) is highly recommended!

* [X] Do errors detected by Datadog go into a Slack notifications channel?

  _All monitors referenced in the above section do send notifications to Slack._

  * If not, start directing errors in Datadog to a dedicated Slack channel. See [#veteran-facing-forms-notifications](https://dsva.slack.com/archives/C063SM22J3H) for an example.
    
  * Link to channel where alerts are populated: _#mhv-on-vagov-alerts_
     
    _Note that we are planning to create a new Slack channel for alerts that is specific to Medical Records, making it easier for our team to identify and address relevant alerts ([MHV-62596](https://jira.devops.va.gov/browse/MHV-62596))._

* [X] Does more than one person look at the Slack notifications channel containing errors on a daily basis?

  _We are planning to have a team review to familiarize with the process of monitoring and addressing alerts ([MHV-62494](https://jira.devops.va.gov/browse/MHV-62494))._

    - [X] Yes     
    - [ ] No

  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

* [X] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there?

  _We have a ticket to create a playbook ([MHV-62597](https://jira.devops.va.gov/browse/MHV-62597))_

     - [ ] Yes     
     - [X] No

  * If not, then follow this [guide on managing errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md)

-   Link to Playbook: **TBD create playbook from this template https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/endpoint-monitoring-playbook-template.md**

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors
* [X] Have you filed issues for errors that are appearing in Datadog / Slack?

  _Errors that appear in Datadog/Slack are triaged and addressed accordingly.  Sometimes the errors are resolved or explained with simple Slack communication.  If errors result in the need for further development, a JIRA ticket is filed and prioritized with the appopriate Product Owners._

  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)


* [X] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?

  _We are answering 'No' for various domains below as there is two scnearios that can impact all of the domains where we have identified a silent error.  This issue will be created and prioritized for development._

  _**Scenario 1** - If a user has not visited MHV since our FHIR server was deployed, they will have no records in the FHIR database. Then, if they visit VA.gov MR and PHR refresh fails, the user may falsely get a message saying they have no records.  https://jira.devops.va.gov/browse/MHV-62496_

  _**Scenario 2** - We are not currently handling API errors from the PHR Refresh Status Check. https://jira.devops.va.gov/browse/MHV-62497_

  - Allergies:
    - [ ] Yes     
    - [X] No
  - Vaccines:
    - [ ] Yes     
    - [X] No
  - Vitals:
    - [ ] Yes     
    - [X] No
  - Health Conditions:
    - [ ] Yes     
    - [X] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [X] No
  - Lab and Test Results:
    - [ ] Yes     
    - [X] No
  - Blue Button:
    - [ ] Yes     
    - [X] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [ ] Yes     
    - [X] No - Not yet deployed, will add monitor when it goes Live

  * If not, then file Github issues to capture error categories following [this guidance](#file-silent-errors-issues-in-github)


#### Documentation

* [X] Do you have a diagram of the submission path that user data your application takes to reach a system of record?
      
_Yes, for all domains with the exception of CCD (in development) and Settings._

 - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [X] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [ ] Yes     
    - [X] No - Not yet deployed, will add monitor when it goes Live
 
  * If not, then [create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md) that captures this information. 
  * Link to data flow diagram:

    _[Here is our data flow diagram in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727453503231/6cfa8ad65d1b4190d6e86baed21f62fad2259f11?sender=75eccca8-883a-4a4e-958c-15360cfe990b). The diagrams are are broken out by flow path, meaning some domains retreive data in the same manner and therefore share a path (for example, all FHIR-ized data are retrieved via the same path and handled the same way, even if the specific endpoints are different)._

* [X] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down? This should be captured in the data flow diagram or a separate document.

    _When backend systems or domains are down for maintenance, we utilize PagerDuty to setup appropriate outage messaging and notifications.  The following answers refer to when the submission path fails._

 - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [X] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [X] Yes     
    - [ ] No

  * If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.

* [X] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  - Allergies:
    - [ ] Yes     
    - [X] No
  - Vaccines:
    - [ ] Yes     
    - [X] No
  - Vitals:
    - [ ] Yes     
    - [X] No
  - Health Conditions:
    - [ ] Yes     
    - [X] No
  - Care Notes and Summaries:
    - [ ] Yes     
    - [X] No
  - Lab and Test Results:
    - [ ] Yes     
    - [X] No
  - Blue Button:
    - [ ] Yes     
    - [X] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [ ] Yes     
    - [X] No

  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github and link here:

#### User experience

* [X] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
      
  _Aside from the two scenarios we have identified above, the answers are 'Yes' as noted below._

  - Allergies:
    - [X] Yes     
    - [ ] No
  - Vaccines:
    - [X] Yes     
    - [ ] No
  - Vitals:
    - [X] Yes     
    - [ ] No
  - Health Conditions:
    - [X] Yes     
    - [ ] No
  - Care Notes and Summaries:
    - [X] Yes     
    - [ ] No
  - Lab and Test Results:
    - [X] Yes     
    - [ ] No
  - Blue Button:
    - [X] Yes     
    - [ ] No
  - Continuity of Care Document:
    - [ ] Yes     
    - [ ] No
    - [X] Still Being Developed, so N/A
  - Settings Page:
    - [ ] Yes     
    - [X] No

  * If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to [create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md). That diagram will help us to help you and your team to create this user experience.

