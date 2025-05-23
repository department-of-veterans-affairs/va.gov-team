# Service gap support guide
This document outlines support needs in the event of a service gap for the Ask VA product on VA.gov. 

5/23: There will likely be a service gap of 3 to 4 weeks after the VA.gov contract ends on Thursday May 29. 

**On this page:**
- [Support tasks](#support-tasks)
- [Monitoring](#monitoring)
- [Incident response](#incident-response)

## Support tasks
To sustain Ask VA, we primarily need system reliability and availability support. This support ensures **submitters can continue to use Ask VA on VA.gov.**

|Support tasks|Primary responsible person|
|:--|:--|
|Monitor #ask-va-notifications channel and Datadog|Watchtower|
|Investigate error|Watchtower|
|Assess issue severity|Watchtower|
|Approve issue severity|Becky|
|Remediate issue if needed|Watchtower (IIR support if needed)|
|Monitor Medallia feedback|Becky|
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
Follow these steps when someone discovers an issue or when an error comes through Datadog.

### Summarized steps
1.  Assess severity and priority
2.  Document issue
3.  Determine next steps ([1] Remediate issue, [2] Move issue to backlog, or [3] Rollback to the classic Ask VA experience)

### Detailed steps
1. **Assess severity and priority**: Use the tables below to assess severity and priority.
   
|Severity|Description|
|:--|:--|
|Severity 1*|Significantly impacts a user’s ability to submit an inquiry and get their question answered|
|Severity 2|Fast follow, post launch items E.g. Missing content|
|Severity 3|Backlog E.g. Spacing issues, names not allowing apostrophes or hyphens|

*Always prioritize Severity 1 issues with Priority 1

|Priority - Denotes urgency within a severity category|Description|
|:--|:--|
|Priority 1|Top priority|
|Priority 2|Less urgent but needed|
|Priority 3|Low urgency|

We've been tracking issues after launching on VA.gov [in this Excel file](https://dvagov.sharepoint.com/:x:/s/AskVA/EWNfTVN1y_lGuewV4hmQGZ8BpWLewORLJNhiNil8X4cZ_Q?e=YekMCw).

4. **Document issue**: Check the [Ask VA repo](https://github.com/department-of-veterans-affairs/ask-va) to check if it's documented. If not, create a GitHub issue for it. 
5. **Determine next steps**: There are a few options for next steps:
   
|Next step options|Description|
|:--|:--|
|**Remediate issue**, if Severity 1 Priority 1 OR Severity 2 Priority 2|We prioritize these issues for immediate remediation. Review [the Excel file](https://dvagov.sharepoint.com/:x:/s/AskVA/EWNfTVN1y_lGuewV4hmQGZ8BpWLewORLJNhiNil8X4cZ_Q?e=YekMCw) for previous examples.|
|**Move issue to backlog**, if a lower severity/priority|These are issues we can remediate later. Review [the Excel file](https://dvagov.sharepoint.com/:x:/s/AskVA/EWNfTVN1y_lGuewV4hmQGZ8BpWLewORLJNhiNil8X4cZ_Q?e=YekMCw) for previous examples.|
|**Rollback to the classic Ask VA experience**, if a Severity 1 Priority 1 OR Severity 2 Priority 2 cannot be remediated in a timely fashion|Since we're new on VA.gov, we can rollback to the previous Ask VA experience. We should make all attempts to fix the issue on VA.gov first though. For example, we rolled back when we discovered a security issue. You can view our postmortem [in this GitHub doc](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Postmortems/2025/2025-04-11%20-%20AskVA%20OOB%20vulnerability%20patch.md).|
