# Ask VA zero silent failures checklist
Last updated on March 13, 2025 by: @arielma-tw


**Jump to:**
- [Start](#start)
- [Monitoring](#monitoring)
- [Reporting errors](#reporting-errors)
- [Documentation](#documentation)
- [User experience](#user-experience)
- [Next steps](#next-steps)

## Start
* [X] Do you know when your application shipped to production?
  *  **Our application hasn't shipped to production yet. The target launch date is March 17, 2025 ([see Mural timeline](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1715100136735/fdff4d9758a1e62c69c5962faa45c587b83c9e12)).**

* [X] Did your application use the same APIs when it shipped as it does today?
  * **See message above. Here's a [list of the APIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/spikes/silent-failures-and-datadog.md) we'll be using.**
## Monitoring

* [X] Do you monitor the API that you submit to via Datadog? 
  * **Yes. We have the [Ask VA Datadog dashboard](https://vagov.ddog-gov.com/dashboard/i7e-qkf-zim/ask-va-dashboard-draft?fromUser=false&refresh_mode=sliding&from_ts=1741271403227&to_ts=1741876203227&live=true)**
    
* [X] Does your Datadog monitoring use the appropriate tagging?
  *  **See previous checklist item. Tagging will be implemented and will follow the VA platform standards.**
    
* [X] Do errors detected by Datadog go into a Slack notifications channel?
  * **Yes. Errors will be sent to the `#ask-va-notifications` channel**
  
* [X] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * **Yes. The development team and Ask VA product manager are members and monitor the Slack channel.**
    
* [X] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  *  **Yes. We have the [Ask VA Monitor Playbook](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/ask-va-monitor-playbook.md), and the [Ask VA Incident Response Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/engineering/InfoSec/ask-va-incident-response-plan.md) for more severe errors.**

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

## Reporting errors
* [X] Have you filed issues for errors that are appearing in Datadog / Slack?
  *  **No issues have been filed since the application has not launched and no silent errors have been discovered based on current definition(s).**
    
* [X] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * **Yes. Errors are surfaced if there is an issue preventing the user from submitting their question. There will also be alerts for downtime/maintenance.**

## Documentation
* [X] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
  * 💬 **Yes. [Ask VA User Data Flow Diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/engineering/collaboration-cycle/architecture-intent/diagrams/ask-va/data-flow-20250106.md)**
     
* [X] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * 💬 **See user data flow diagram linked previously**
    
* [X] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  * Please document the outcome of this conversation in your product's documentation in Github.
  * **We surface errors returned from the CRM system of record to the user. With that said, we will be obtaining written agreement from the CRM team that fatal errors will be resolved once in their custody.**

## User experience
* [X] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  *  **Yes, Please see previous responses regarding the data flow diagram and reporting errors.**

## Next steps

### We don't have any silent errors!
Great! Please let us know that you went through the checklist above as a team and did not find any silent failures in our Slack channel: [#zero-silent-failures](https://dsva.slack.com/archives/C07KTTFP308) and send us a link of a copy of [this](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-discover-if-your-app-has-silent-failures.md#checklist) completed checklist. If you don't connect to a backend system, you don't need to fillout the checklist but let us know in your message. You don't have to hang out in there once you have notified us. Just pop in, tell us who you are (which team and in which portfolio) and that no failures were found. Thanks!

### Additional details

#### Set up monitoring in Datadog

Follow this [guidance on endpoint monitoring](https://depo-platform-documentation.scrollhelp.site/developer-docs/endpoint-monitoring) to get going. Then following the guidance on [monitoring performance](https://depo-platform-documentation.scrollhelp.site/developer-docs/monitor-applications-and-infrastructure-with-datad) to get up to speed with Datadog.

##### Examples

* [Benefits Intake API Form Submission Tracking](https://vagov.ddog-gov.com/dashboard/4d8-3fn-dbp/benefits-intake-form-submission-tracking?fromUser=false&refresh_mode=sliding&from_ts=1725259648303&to_ts=1725864448303&live=true)
* [Banana Peels (Lighthouse Appeals/Forms/Benefits Intake APIs)](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=true&refresh_mode=sliding&from_ts=1725259764640&to_ts=1725864564640&live=true)
* [Benefits Sidekiq Death Queue view](https://vagov.ddog-gov.com/dashboard/ftx-zzd-v9j/benefits-sidekiq-job-death-queue-view) - shows recently exhausted Sidekiq jobs.

[Additional examples](https://depo-platform-documentation.scrollhelp.site/developer-docs/platform-dashboards-in-datadog)

#### File silent errors issues in Github

We want to know about your silent errors so that we can help you to fix them. To do this, follow the process in the [Managing Errors](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/managing-errors.md) document.

#### How to create a user data flow diagram 

Creating a user data flow diagram is a requirement of the Zero silent errors initiative and will be a required asset at the Architecture Intent touchpoint of the Engineering and Security track of Collaboration Cycle.

[Learn how to create a user data flow diagram](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/platform/practices/zero-silent-failures/how-to-create-a-user-data-flow-diagram.md)
