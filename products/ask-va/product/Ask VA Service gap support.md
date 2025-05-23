# Ask VA Service gap support 
This document outlines support needs in the event of a service gap for the Ask VA product on VA.gov. 

5/23: There will likely be a service gap of 3 to 4 weeks after the VA.gov contract ends on Thursday May 29. 

**On this page:**
- [Support tasks](#support-tasks)
- [Monitoring](#monitoring)
- [Incident response](#incident-response)

## Support tasks
To sustain Ask VA, we primarily need system reliability and availability support. We want to ensure **submitters can continue to use Ask VA on VA.gov.**

|Support tasks|Primary responsible person|
|:--|:--|
|Monitor #ask-va-notifications channel and Datadog|Watchtower and/or IIR|
|Monitor Medallia feedback|Becky|
|Assess issue severity|Watchtower and/or IIR|
|Approve issue severity|Becky|
|Create tickets in [Ask VA repo](https://github.com/department-of-veterans-affairs/ask-va)|Becky|

## Monitoring
We primarily use Datadog to monitor Ask VA. We espeically monitor the Ask VA CRM endpoints. Our frontend on VA.gov is connected to our backend CRM.

### Ask VA CRM endpoints (InquiriesController)
|Payload action name|Description|URL path|
|:--|:--|:--|
|index|View previous inquiries|/contact-us/ask-va/introduction/|
|show|View inquiry details page|/contact-us/ask-va/user/dashboard/[inquiry number]/|
|create|Submits inquiry, authenticated flow|Authenticated:/contact-us/ask-va/review-then-submit|
|unauth_create|Submits inquiry, unauthenticated flow|Unauthenticated:/contact-us/ask-va/review-then-submit|
|create_reply|Sends reply to CRM|/contact-us/ask-va/user/dashboard/[inquiry number]/|
|status|Look up inquiry status, unauthenticated|/contact-us/ask-va/introduction/|

### Other helpful links
|Link|Description|
|:--|:--|
|Ask VA Datadog Dashboard (Datadog)|Displays metrics based on these performance KPIs|
|Ask VA Monitor Playbook (GitHub)|Outlines required access and high level troubleshooting steps|
|Datadog Status Codes (GitHub)|Describes main status codes in Datadog|
|Ask VA Slack Alert Channel (Slack)|Displays Ask VA Datadog error notifications|
|Ask VA Incident Response Plan|Describes how to handle critical issues|

## Incident response

