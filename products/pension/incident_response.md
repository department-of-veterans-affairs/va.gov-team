# VA Lifestage Incident Response Checklist
## Confirm
1. Inform the following people of a possible incident: 
- Matt Reilly, AdHoc Product Manager/Lead
- Matt Knight, Coforma Engineering Lead
- Anh Platt, Coforma Delivery Lead

2. One of the following people, in order of preference
- Sanja Bajovic, OCTO Product Owner
- Ben Guhin Delphine, OCTO Design Lead

3. Start the clock. Record the time an opening message in an appropriate incident log.
4. Confirm if you have / do not have an incident. 
a. If this is an incident:
   - Create incident log
   - Determine and record the severity. Severity matrix from VA Platform

From VA Pension Benefits Incident Response (IR) Standard Operating Procedure, report ANY event actually or potentially jeopardizing:
- Confidentiality/integrity/availability of systems
- Information processed, stored, or transmitted
- Constituting a violation / imminent threat of violation of VA security policies, procedures, or acceptable use policies

Here is a simple checklist of potential ways to confirm an incident. If any of these are checked, you have an incident.

- [ ] Is PII somewhere it shouldn’t be?
- [ ] Is there an active or passive violation of an active use policy?
- [ ] Do we have data exposed? This could be an unsecured endpoint, public S3 bucket, or even an error with permissions.
- [ ] Has my system leaked PII, or any information, somewhere outside the system boundary?
- [ ] Is a critical feature of my system not working in production?
- [ ] Do we have an endpoint that is not secure that should be secure?
- [ ] Are any unusual activities or unexpected behaviors occurring within our systems or networks?
- [ ] Have we received any alerts or notifications from our security tools or monitoring systems?
- [ ] Are there any unusual reports from users or employees?
- [ ] Have we observed any unauthorized access attempts or unusual login patterns?
- [ ] Have we noticed any sudden changes in system performance, such as slowdowns or crashes, that could indicate a security incident?
- [ ] Have we discovered a vulnerability that needs immediate remediation?

## Clear
1. Identify the incident team (this will change per incident and should be relatively quick to establish).
  - a. The incident coordinator (primary contact with client) for this incident is: ____________________.
  - b. The response lead (primary person leading the remediation) for this incident is: ____________________.
  - c. The response team for this incident includes: ____________________.
3. Update the incident log to include the team
4. Declare the incident in Datadog if one has not already been created. Rate the incident severity level 1. 

## Call
The incident coordinator should inform our stakeholders in our VA slack channel (#benefits-pension or #benefits-dependents-management), and provide the following communication: 
````
```
At   (insert time)  we discovered   (brief incident description)__ and are currently _(what are we currently doing)_. We have communicated this here and _(any other places)_. @Dene, who else should we include from _(insert agency)_  in this response? An incident log has been started for tracking purposes at (link to document)  and the incident declared in Datadog. (link to Datadog). I will be serving as primary point of contact for communications as we resolve this incident.
```
````
## Contain
_Note: First and foremost, remain calm. Actions taken under “contain” are the immediate step that will remove the exposure to the risk. As each incident is different, there is not a checklist of items. Below are some examples of things that can be considered for a contain step:_
- [ ] Determine root cause
- [ ] Rollback the deployment that caused the issue
- [ ] Change the password/key/other secret if you have permissions
- [ ] Change a firewall rule to make a system inaccessible from outside the network
- [ ] Unplug the server
- [ ] Introduce a tested hotfix to remediate
- [ ] Other possible actions to resolve the issue

## Coordinate
This is a long-term phase that often spans weeks. 
During the coordinate phase (while the contain phase is active):
These items happen during the contain phase. (Primarily lots of communication with the client and the team.)
- Keep the client informed on process and updates
- Keep the team fed with whatever they need and removes potential blockers the team is facing
- Keep the incident log updated throughout the duration
- Take note of long-term impact and follow-up items
  
During the coordinate phase (when the contain phase is finished):
These items happen after the contain phase. They are usually related to how we are going to prevent the same thing from occuring in the future.
The Incident Coordinator role transfers to PdM
- Root cause analysis performed
- Conduct post-mortem
- Long-term items prioritized as needed in the roadmap
- Impact analysis completed

## VA Pension Benefits Key Contact Roster

If people are unresponsive via Slack and email, here are alternate communication channels.
OCTO Enablement Team

| Name | Position | Primary Phone | Email |
|----- | -------- | ------------- | ----- |
| Sanja Bajovic| OCTO Product Owner | 510-520-1195 | Sanja.Bajovic2@va.gov |
| Ben Guhin Delphine | OCTO Design Lead | To Be Added | Benjamin.Delphine@va.gov |

Delivery Team

| Name | Position | Primary Phone | Email |
|----- | -------- | ------------- | ----- |
| Matt Knight| Engineering Lead (Coforma) | 607-216-8683 | matt.knight@coforma.io |
| Matt Reilly | Pension and Burial Product Lead | 518-461-7458 | matt.reilly@adhocteam.us |
| Jacob Worrell | Dependents Maangement Product Lead | To be added | jacob.worrell@adhocteam.us |
| Anh Platt| Delivery Lead (Coforma) | 805-452-8014 | anh.platt@coforma.io |
