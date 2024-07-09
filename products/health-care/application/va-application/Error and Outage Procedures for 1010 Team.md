**Title: VA Health Enrollment Incident Response Standard Operating Procedure (SOP)

Purpose**
The purpose of this Standard Operating Procedure (SOP) is to provide guidelines for effectively responding to and managing errors and outages within the VA Health Enrollment (HE) Team’s products. These products include the 10-10EZ,  10-10EZR and 10-10CG, but could include other products in the future. This SOP aims to ensure a swift, organized, and coordinated response to incidents to minimize the impact to Veterans.


**Definitions & Roles
Definitions**

- **Incident** - any event, error, or outage that disrupts normal operations, threatens information security, or compromises the integrity, confidentiality, or availability of the following forms that Veterans use: 10-10EZ,  10-10EZR or 10-10CG
- **Severity Level** - categories used to classify the severity and impact of incidents, ranging from low to critical
- **Roles and Responsibilities** – Roles can be plural
- **First Responder** - the first person to notice the error/outage. This could be anyone on the team
- **Investigator** - the team member who will conduct an initial assessment to determine the severity, impact, and scope of the incident
- **Fixer** - the team member who will be implementing the appropriate ‘fix’ and/or coordinating with stakeholders to ensure the issue is addressed if the event is outside of the team’s control

*The First Responder, Investigator, and Fixer may be the same person, but not likely for critical issues, as more staff will be on deck for these more severe situations
Use Platform Support to support!

- **Incident Commander** - Responsible for coordinating incident response efforts within and outside of the team, and ensuring proper procedures are followed

*This is like the “Quarterback” role, It may not be in the weeds, but will know enough of what is going on to facilitate communication within the team, and between team and stakeholders.

*Usually, but not always, Delivery Manager or Product Manager

- **Subject Matter Experts (SMEs)** - Individuals with expertise in relevant areas who provide technical assistance and guidance during incident response




**Incident Classification**

Incidents should be classified based on severity levels and potential impact. The following severity levels are used:

**- Low:** Incidents with minimal impact on operations and information security.

**Example**: An error has presented itself for 1 - 2 hours that has led to a handful of submission failures or blocked users from hitting submit on an application
Medium: Incidents with moderate impact requiring immediate attention.

**Example:** An error has presented itself for 3 - 4 hours that has led to multiple submission failures or an outage has occurred that blocks users from submitting an application for a brief period of time, a Maintenance Window should be considered for this situation

**High:** Incidents with significant impact on operations, functionality, and/or forms.

**Example:** An error has presented itself for 5 - 6 hours that has led to a staggering amount of submission failures (error rate above 15%) or an outage has occurred that blocks users from submitting an application for an extended period of time, a Maintenance Window should be implemented in this situation
Critical: Incidents causing severe disruption, compromising sensitive information, or posing a significant risk to Veterans and their information.

**Example:** An error has presented itself that has led to all submissions failing or an outage has occurred that blocks all users from submitting an application for any period of time, a Maintenance Window will be implemented in this situation


**Incident Response Procedures**  

**4.1 Detection and Reporting**

The VA HE should be vigilant in detecting and reporting any errors or outages through the established monitors and dashboards.

Upon detection, the First Responder tags and notifies the team and Product Owner in the #health-tools-1010-apm slack channel that there is an error or outage present

If needed, the Incident Commander will notify stakeholders of incidents of Medium or higher severity.

Have a meeting, assign/volunteer for roles
All hop on a call, when the application is down stop everything (War Room Call)
- Identify a team member for each role, ensuring all roles are accounted for before closing the call
- Identify next steps/action items 
- Determine a check in time (as needed)

For Medium or higher incidents, First Responder will create a Post-Mortem template and start to fill out the detailed timeline of when the issue was discovered and steps taken.


**4.2 Assessment and Triage**

Upon notification, the First Responder shares any initial data or findings with the team and if further investigation is needed, an Investigator is appointed.

The Investigator will conduct an assessment to determine the severity, impact, and scope of the incident. Based on the assessment, the incident will be triaged, documented in the Post-Mortem if the incident is Medium or higher, and Fixer.

It is at this stage that the team and product owner would consider putting up a maintenance window if the issue is severe enough to warrant downtime.

It is at this stage that the team and product owner would consider submitting an out of bound deployment (OOB) if it is determined that it needs to be removed from production or immediately modified/cannot wait until the next daily deploy. Example: If something went into production that was not fully tested and/or could negatively impact Veterans and their experience

If after assessment it is determined that the incident is not a result of changes by the VA HE team, but is a result of another change or update from platform/other team, a platform ticket is to be submitted as soon as possible outlining the issue and resulting errors. This ticket should include a summary of the issue and our hypothesis that X led to the errors we experienced and why. The goal of this is to notify the platform team and confirm that is the root cause of the issue.

If/Once this is confirmed, request that they participate in the post mortem exercise with the team

**4.3 Resolution and Recovery**

Recovery efforts will be coordinated with stakeholders and SMEs to minimize downtime and restore normal operations as quickly as possible

The Fixer will implement any necessary changes to remediate the issue, continually update the team, and update the Post-Mortem as needed

**4.4 Documentation and Reporting**

Once the incident is contained, a detailed investigation will be conducted to identify the root cause of the incident, extent of impact, and any vulnerabilities exploited that can be remedied at a later date

A comprehensive Post-Mortem that includes a timeline of events: response, activities, and outcomes, will be submitted to relevant stakeholders for Medium or higher events


**Review and Continuous Improvement**

This SOP will be periodically reviewed and updated to reflect changes in technology, regulations, or organizational requirements
Lessons learned from past incidents will be analyzed to identify areas for improvement and enhance incident response capabilities


**Distribution**

This SOP will be distributed to all employees and stakeholders involved in incident response within the VA HE team
It will also be made available through GitHub for reference



**Revision History**
Any updates or revisions to this SOP will be documented in the revision history section, including the date of revision and a brief description of changes made


Date
Updates
Made By
4/8/2024
Created
Emily Brown
6/6/2024
Added bullet under section 4.2 to outline process and procedure for when errors are caused by changes outside of the VA HE team
Emily Brown
7/3/2024
Update roles and “to dos” as part of team discussion and response to 6/3-4 EZR outage and 6/10 Attach Docs early release
Alex Seelig




