# Check-In Experience Production Support Playbook

### Table of Contents
1. [Communicating Production Incidents](#communication)
2. [Post-Mortem Process ](#post)


## Communicating Production Incidents <a name="communication"></a>
In the event of a production incident related to any check-in applications, acknowledge the issue by creating a thread/acknowledging an existing incident thread in #check-in-production-support and PagerDuty within 15-minutes during business hours or 60 minutes after business hours. 
Business Hours: 7:00am ET - 8:00pm ET, Non-Business Hours: 8:00pm ET - 7:00am ET, Weekends, and Holidays. 
Note: we cannot get a timestamp from a reaction, so the acknowledgement needs to be a message post. The on-call engineer will outline the behavior seen and tag partners needed to help discover, brainstorm, or resolve the problems noted. If the incident triggered an incident in PagerDuty, the on-call engineer will acknowledge the incident in PagerDuty within 15-minutes during business hours or 60 minutes after business hours.

Identify a point-of-contact who will own communicating alerts to all relevant stakeholders for awareness of the incident and the impacted users. Point-of-contact will use the following email template to alert all relevant stakeholders as soon as possible. 

**Subject Line:** < Application Name > Production Outage MM-DD-YYYY

**Email Body:**

Incident Summary: _Provide a short 2-3 sentence summary of the outage and impacted user groups._ 

Incident Details: 
| | |
|---|---|
|**Applications Impacted**|_List all effected applications._|
|**Business Impact**|_Provide a brief plain-language description of what users are experiencing._|
|**Incident Start Date/Time**|_Approximately when did this issue begin?_|
|**Incident End Date/Time**|_Default to 'Ongoing' while troubleshooting. Update once issue is resolved._|
|**Current Status**|_Provide a timestamp and a brief description with the latest update. If possible, provide expected timeline for next update. Point-of-contact will update this status as troubleshooting occurs to keep stakeholders informed._|
|**Resolution**|_Default to 'Ongoing' while troubleshooting. Update with a brief summary to the changes implemented to resolve the issue. Link to post-mortem ticket for additional details if appropriate._|



## Post-mortem Report and Process <a name="post"></a>
A post-mortem should be performed when a critical outage occurs within any application we have production support responsibility for, whether or not we instigated the outage. Check with your product manager 

When an outage occurs, a post-mortem report should be started. Follow the [Readme.md](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/tree/master/Postmortems) on Postmortems.

Once the post-mortem report has been filled out, a post-mortem session should be scheduled by a member of the team, most commonly the Delivery Manager, Product Manager, or Incident Commander. Meeting attendees should include the Tier 3 Production support team, at least one representative from whichever service encountered the issue, and the client. It’s ideal to schedule this meeting for soon after the outage for the sake of relevancy.

Post-mortem sessions should be concise and walk through items outlined in the post-mortem document. Team members should discuss each section of the document and add on as needed.

Once the meeting is complete, post-mortem documentation should be shared out through the VA Slack.


