# Checklist

## Start

- [x] Do you know when your application shipped to production? March 2022
- If not, use Github to determine, roughly, when your application shipped to users.
- [x] Did your application use the same APIs when it shipped as it does today? No - Integrations with Lighthouse APIs and MHV are new since then
- If not, then you'll need to consider the path user data took through both the current architecture and the previous architecture. You will need to account for potential failures in all paths since your application shipped.
## Monitoring
- [x] Do you monitor the API that you submit to via Datadog? yes - however we still log to Sentry in some places
- If not, set up monitoring in Datadog.
- [x] Does your Datadog monitoring use the appropriate tagging? yes
- If not, implement tagging standards. Adding the dependency tag is highly recommended!
- [x] Do errors detected by Datadog go into a Slack notifications channel? No
- If not, start directing errors in Datadog to a dedicated Slack channel. See #veteran-facing-forms-notifications for an example.
- [x] Does more than one person look at the Slack notifications channel containing errors on a daily basis? N/A
- If not, then follow this guide on managing errors
- [x] Do the team members monitoring the Slack channel have a system for acknowledging and responding to the errors that appear there? N/A
- If not, then follow this guide on managing errors
⚠️ Failure to have endpoint monitoring in place is a blocking QA standard at Staging review as of 9/10/24. If you answered no to any of the questions above, you will be blocked from shipping at the Staging review touchpoint in Collab Cycle.

## Reporting errors

- [x] Have you filed issues for errors that are appearing in Datadog / Slack? no
- If not, then start filing Github issues for new categories of errors following this guidance
- [x] Do all fatal errors thrown in your application end up visible to the end user either in the user interface or via email? No
- If not, then file Github issues to capture error categories following this guidance
  
## Documentation

- [x] Do you have a diagram of the submission path that user data your application accepts takes to reach a system of record? yes - link here
- If not, then create a user data flow diagram that captures this information.
- [x] Do you understand how the error is handled when each system in the submission path fails, is down for maintenance, or is completely down? yes
- If not, then create documentation that captures how errors in each system are handled. Detail which systems retry a submission and what happens when those retries exhaust. Show this in your diagram.
- [x] Has the owner of the system of record receiving the user's data indicated in writing that their system notifies or resolves 100% of fatal errors once in their custody? Yes
- If not, work with OCTO to meet with the owner of the system and get their agreement in writing.
  
Please document the outcome of this conversation in your product's documentation in Github.

## User experience
- [x] Do you capture all of the potential points of failure and make those errors known to the user via email notification and/or through the application on VA.gov or the mobile application? Yes through the application (Chatbot) in error message to the user
- If not, don't worry. Few teams are doing this and we'll be providing resources to help you do this in your application. Proceed to create a user data flow diagram. That diagram will help us to help you and your team to create this user experience.

## We don't have any silent errors!
Great! Please let us know that you went through the checklist above as a team and did not find any silent failures in our Slack channel: #zero-silent-failures and send us a link of a copy of this completed checklist. If you don't connect to a backend system, you don't need to fillout the checklist but let us know in your message. You don't have to hang out in there once you have notified us. Just pop in, tell us who you are (which team and in which portfolio) and that no failures were found. Thanks!

## Additional details
Set up monitoring in Datadog
Follow this guidance on endpoint monitoring to get going. Then following the guidance on monitoring performance to get up to speed with Datadog.

## Examples
Benefits Intake API Form Submission Tracking
Banana Peels (Lighthouse Appeals/Forms/Benefits Intake APIs)
Benefits Sidekiq Death Queue view - shows recently exhausted Sidekiq jobs.
Additional examples

File silent errors issues in Github
We want to know about your silent errors so that we can help you to fix them. To do this, follow the process in the Managing Errors document.

How to create a user data flow diagram
Creating a user data flow diagram is a requirement of the Zero silent errors initiative and will be a required asset at the Architecture Intent touchpoint of the Engineering and Security track of Collaboration Cycle.

Learn how to create a user data flow diagram

