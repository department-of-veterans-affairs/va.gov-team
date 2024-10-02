### Checklist

#### Start

* [x] Do you know when your application shipped to production?
  * Yes, the application as it currently stands was shipped in 2020. 
* [x] Did your application use the same APIs when it shipped as it does today?
  * Yes
#### Monitoring

* [x] Do you monitor the API that you submit to via Datadog? 
  * Yes, on the [Medical Device Supply Reordering dashboard](https://vagov.ddog-gov.com/dashboard/nfr-cy2-8vq/medical-supply-reordering?fromUser=false&refresh_mode=sliding&from_ts=1727373384899&to_ts=1727376984899&live=true)
  *   * see also these [additional monitors](https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%22service%3Amedical-supply-reordering%22%20tag%3Awatchtower&order=desc) 
* [x] Does your Datadog monitoring use the appropriate tagging?
 * yes: https://vagov.ddog-gov.com/monitors/manage?q=tag%3A%22service%3Amedical-supply-reordering%22%20tag%3Awatchtower&order=desc
* [x] Do errors detected by Datadog go into a Slack notifications channel?
  * Yes, all errors detected by Datadog go to the #va-cto-supply-reordering-alerts channel. 
* [ ] Does more than one person look at the Slack notifications channel containing errors on a daily basis? 
  * At the moment, we do not have a consistent monitoring schedule. Action Item : create a monitoring schedule/playbook.
* [ ] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? 
  * see above for playbook

⚠️ **Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24.** If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

#### Reporting errors

* [ ] Have you filed issues for errors that are appearing in Datadog / Slack?
  * If not, then start filing Github issues for new categories of errors following [this guidance](#file-silent-errors-issues-in-github)
* [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email?
  * Yes, all transactions are synchronous and display error messages. 

#### Documentation

* [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? 
   * [User Data Flow Diagram](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1727717727395/0aa30378aa18ef2c552e49f576771dbbaf51c46d?sender=u60de8ad852bae74490032629)
* [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down?
  * Yes – errors are shown to the user, with an indication of the reason if we’re able to determine it from the backend error code.
* [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody?
  * Yes, DLC has confirmed that the veterans' orders would be shipped out, or the veteran would receive a call if there is an issue processing the request.
  * Please document the outcome of this conversation in your product's documentation in Github.

#### User experience

* [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
  *  There are no asynchronous submission paths, we either get a success response back with an order id and show a confirmation, or show an error message. 
