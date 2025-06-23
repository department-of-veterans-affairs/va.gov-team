**10-10EZR Zero Silent Failure Checklist**

**Start**
- Do you know when your application shipped to production? **4/11/24**

If not, use Github to determine, roughly, when your application shipped to users.

- Did your application use the same APIs when it shipped as it does today? **Yes**

If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.


**Monitoring**

- Do you monitor the API that you submit to via Datadog? **Yes**

If not, set up monitoring in Datadog.

- Does your Datadog monitoring use the appropriate tagging? **Yes #93151**
**Update tagging: [#95506](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95506)**

If not, implement tagging standards. Adding the dependency tag is highly recommended!

- Do errors detected by Datadog go into a Slack notifications channel? **#health-tools-1010-apm**

If not, start directing errors in Datadog to a dedicated Slack channel. See #veteran-facing-forms-notifications for an example.

- Does more than one person look at the Slack notifications channel containing errors on a daily basis? **The whole team, particularly developers, PM, DM, and Data Analyst--[Error and Outage Procedures Doc](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/Error%20and%20Outage%20Procedures%20for%201010%20Team.md)**

If not, then follow this guide on managing errors 

- Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? **Emoji reactions and comments**

If not, then follow this guide on managing errors

⚠️ Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24. If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.
Reporting errors

- Have you filed issues for errors that are appearing in Datadog / Slack? **Yes, and we have a Sprintly monitoring ticket for any errors that may occur during that Sprint**

If not, then start filing Github issues for new categories of errors following this guidance

- Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email? **Yes!** #[92911](https://app.zenhub.com/workspaces/10-10-health-apps-5fff0cfd1462b6000e320fc7/issues/gh/department-of-veterans-affairs/va.gov-team/92911)

If not, then file Github issues to capture error categories following this guidance
Documentation

- Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? [**EZR Flow Chart**](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/va-application/engineering/10-10EZR%20Flow%20Chart.md)

If not, then create a user data flow diagram that captures this information.


- Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down? **Yes and included in our data flow diagram**

If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.

- Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody? Got this in email–**Yes [Here](https://)** 

If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
Please document the outcome of this conversation in your product's documentation in Github.


**User experience**

 Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application?
If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to create a user data flow diagram. That diagram will help us to help you and your team to create this user experience.**Diagram provided above**

