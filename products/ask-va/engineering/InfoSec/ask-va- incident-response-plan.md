## Ask VA Integration-  Incident Response Plan

The purpose of this plan is to outline what to do in the event there is an incident reported or identified that pertains to Ask VA (AVA). 


### Points of Contact

| Title            | Name             | Phone        | Slack              | Email                     |
| ---------------- | ---------------- | ------------ | ------------------ | ------------------------- |
| VA Product Owner | Becky Phung      |              | DSVA               | becky.phung@va.gov        |
| VA Product Owner | Andrea Schneider | 301-537-4450 | DSVA               | andrea.schneider3@va.gov  |
| Program Manager  | Megan Siddle     | 661-236-7464 | DSVA, Oddball      | megan.siddle@oddball.io   |
| Product Manager  | Ariel Martinez   |              | DSVA, Thoughtworks | ariel.martinez3@va.gov    |
| Tech Lead        | Joe Hall         | 334-546-9843 | DSVA, Thoughtworks | Joe.Hall@Thoughtworks.com |

  


### Regular Working Hours Coverage

Team fields messages in the following channels 9am-6pm ET 

#ask-va-public


### Slack Channels

| Workspace | Channel Name                                                       | Audience                           |
| --------- | ------------------------------------------------------------------ | ---------------------------------- |
| DSVA      | #ask-va-public                                                     | Public Facing                      |
| DSVA      | #ask-va-design                                                     | Private Design Channel             |
| DSVA      | #ask-va-tech                                                       | Private Tech Channel               |
| DSVA      | #ask-va-integration                                                | Private team channel with CRM team |
| DSVA      | #ask-va-notifications                                              | Datadog/monitoring notifications   |
| DSVA      | [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1) | Platform Support                   |
| DSVA      | [#vfs-all-teams](https://dsva.slack.com/archives/CE4304QPK)        | All Veteran Facing Teams           |
| Oddball   | #askva_integration_team                                            | Private Program Channel            |

  

### Difference Between Errors, Bugs, and Incidents (classification)

| Type     | Definition                                                                                                                                                                                                                                                                                          |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Error    | An action performed by a human that results in unexpected system behavior. E.g. incorrect syntax, improper calculation of values, misunderstanding of software  requirements, etc.                                                                                                                  |
| Bug      | Bug is the developer’s terminology. Once a defect found by a tester is accepted by the developer, it is called a bug. The process of rectifying all bugs in the system is called Bug-Fixing.                                                                                                        |
| Incident | An incident is an unplanned interruption. When the operational status of any activity turns from working to failing and causes the system to behave in an unplanned manner, it is an incident. A problem can cause more than one incident, which is to be resolved, preferably as soon as possible. |

### Incident Management Process

#### 1. Incident Identification and Logging 
Incident Identification is either done via testing (using tools or otherwise), user feedback, infrastructure monitoring, etc.
- Details to request (use this template so we do not skip steps)
- Description of the issue
- Steps to reproduce the issue
- The impact this bug has on the system, clients, and/or team
-  Expected behavior
- Actual behavior

#### 2. Classification and Prioritization
    

Severity: The potential impact of the incident will decide its severity. To determine the severity of an issue, visit the Categorization Table and definitions below and use them as a guide. 

Priority: Set according to severity and influence on the working status of the system. Values can be High, Medium, Low, Very High, or Urgent/Immediate.

Incident Status: The current state when handling the incident can be New, In Progress, Resolved, and Closed.
  

| Severity   | Definition                                                                                                                                                                                                                                                                                                                                                                                                                                      | Examples                                                                                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Severity 1 | High impact, high urgency<br> Incident affects a large number of users.<br>- Effect is widespread and affects multiple components.<br>- Site operation may be entirely affected.<br>- Issue is not well understood or isolated.<br>- State may require subsequent repair.<br>- Incident involves or may involve the exposure of PII for multiple users.<br>- Impactt of the issue may be unclear.<br>- Urgency of the issue may be unclear.     | Examples:<br>- Veteran PII is leaked                                                                                                                                                 |
| Severity 2 | High impact, moderate urgency<br>Incident affects a large number of users.<br>- Effect may be widespread and affect multiple components.<br>- Site operation may be entirely affected.<br>- Issue is generally understood, but may affect unknown components.<br>- State may require subsequent repair.<br>- Issue involves or may involve the exposure of PII for a single user or a small subset of users.<br>- Impact of the issue is known. | Examples:<br>- Reverse proxy upgrade causes service interruption<br>- Data migration causes service interruption                                                                     |
| Severity 3 | Moderate impact, moderate urgency<br>- Incident affects multiple users.<br>- Effect is limited to a subset of functionality.<br>- Issue is generally understood but may affect unknown components.<br>- State may require subsequent repair.<br>- PII is not exposed.                                                                                                                                                                           | Examples:<br>- Partial outage at reverse proxy<br>- Metrics outage prevents insight into operation                                                                                   |
| Severity 4 | Low impact, moderate urgency<br>- Incident affects a single user or a small subset of traffic.<br>- Effect limited to a subset of functionality.<br>- Issue is well understood and well isolated.<br>- PII is not exposed.                                                                                                                                                                                                                      | - A user cannot complete a form submission due to field validation that will likely affect a subset of other users.                                                                  |
| Severity 5 | Low impact, low urgency<br>- incident affects a single user or a small subset of traffic.<br>- Effect is limited to a subset of functionality.<br>- Site operation is not otherwise negatively affected.<br>- Issue is well-understood and well-isolated.<br>- PII is not exposed.                                                                                                                                                              | - Higher than expected latency on a component due to an external service issue.<br>- A user cannot complete a form submission due to field validation for their particular use case. |


  
Investigation and Analysis - 
This step is to understand the problem better so we are not only able to resolve it but gather information to prevent a recurrence.
 How many Veterans were affected
 If there is a potential exposure of PII or PHI (category Severe or Critical), immediate action must be taken to understand 1) what data was exposed and 2) how/to whom the data was exposed.
Once the above information is known, immediately contact the COR for evaluation. From there, an ISSO may be consulted and could ask for additional details.

Steps to investigate/analyze
 Check error logs (if you cannot reproduce the error(s), you don’t know if you’re fixing it (in most cases))
    
Sentry - Run a test to see if you get the expected results
Try to reproduce the error

Resolution and Recovery - Steps are taken to remove the incident and bring the system back to its previous working condition.
    

Steps to resolution
1. Once you determine what is broken, you can use `git-blame` to determine which PR introduced the bug. Please see git-blame [documentation](https://git-scm.com/docs/git-blame).

1. Depending on the severity of the issue, AND if we can safely roll back the PR, you can click `REVERT` on the merged PR
2. If it is not as high priority, you can create a normal PR with automated specs to fix the issue.
3. Out-of-cycle (out of band) deployment process
1. [Documentation from platform](https://depo-platform-documentation.scrollhelp.site/developer-docs/deployment-policies#DeploymentPolicies-Step-by-stepprocessforout-of-banddeploymentapproval)


5. Incident Closure - The resolution is retested, and in case the system is working as intended, the incident is closed, final report ((incident report and/or post-mortem (links below) is submitted))
    

### Communication Plan

- Thread incident topics in Slack and post them where your main stakeholders/collaborators can see and follow along.

- Internal troubleshooting and/or discussion around possible solutions should occur in internal threads; however, progress updates and indications of clear next steps must be posted in the main incident threads. This informs our stakeholders of the actions we are taking while we execute and problem-solve.

- Provide clear expectations of timing. Applying estimates when troubleshooting is involved does not have to be precise. Use your best judgment to come up with a rough estimation for your next milestone(s) and provide updates early and often if plans change or new roadblocks appear.

- Always close the loop! If you are managing communication across multiple channels and threads, be sure to post major updates in all. Know your audience to provide the most pertinent information.

- When working with external partners and stakeholders, it can be difficult to know to whom questions and/or action items are being directed. When in doubt, ask and clarify rather than waiting, especially if you do not believe it’s something within your team’s purview.
    

  

Slack Channels to communicate 

- #ask-va-public, #ask-va-tech,  #askva_integration_team (oddball)
    
- You may want to send a Private Message first as a starting point
- Initial notification of an incident
- Recap provided by the reporter
- Recap of steps taken to investigate
- Action items to take to resolve the issue
- Follow up when we expect the incident to be resolved
- Follow up once the incident is resolved
- Incident report shared with the parties listed above

  

External (VA Business Owners, Platform, etc.)

Slack channels to communicate

- #ask-va-public, channel where the incident was reported (this could vary); see Slack channels listed at the top of this document for scenarios. Ask if you are unsure. 


- Initial notification of an incident
- Recap provided by the reporter
- Recap of steps taken to investigate
- Action items to take to resolve the issue
- Follow up when we expect the incident to be resolved
- Follow up once the incident is resolved
- Post-Mortem IF requested by VA Stakeholder

### Post-Incident Action Items

  Internal Incident Report

- Incidents will be tracked as separate GitHub issues using our [template](https://github.com/department-of-veterans-affairs/ask-va/blob/main/.github/ISSUE_TEMPLATE/incident-report.md) 
- [Click here](https://github.com/department-of-veterans-affairs/ask-va/issues/new?assignees=&labels=incident&projects=&template=incident-report.md&title=%5BINCIDENT%5D+Describe+your+Incident) to open a new incident

External Report
- IF a Post Mortem is requested by a VA stakeholder, you must ask for a link to their Incident/Post-Mortem template.  Seeing as we work with multiple VA business lines and platforms, it is imperative we close any loops which include THEIR report. 

[Platform Post-Mortem Template](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems#instructions-for-creating-a-new-postmortem)

  
Lessons Learned
- As part of the reporting processes above, we reflect on the root cause and lessons learned to ensure issues like these do not recur. Implement changes in a timely manner and communicate them to the whole internal team.
