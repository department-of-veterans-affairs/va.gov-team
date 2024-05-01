## This document outlines the process for intake and handling of tickets that require engineering analysis and assistance.

1. **Ticket Creation:** When a ticket requiring engineering analysis or assistance is created, it is assigned to the Engineering Lead for triage. If the Engineering Lead is unavailable, the ticket is assigned to the next person in line for that role.
2. **Analysis:** The Engineering Lead conducts an analysis to determine the work needed, the expected timeframe, and any concerns regarding the request. Typically, this analysis occurs within hours of the request submission, although the timeframe may vary depending on the nature of the request. Requests impacting Veterans on production servers are analyzed within one hour, while all other requests are analyzed within one business day.

   **Personal Identifiable Information Review:** As part of their analysis, the Engineering Lead will detect and redact any personal identifiable information (PII). Examples of PII may include production credential emails, test credential passwords, or veteran-identifying attributes such as a veteran's SSN or date of birth. Should PII be discovered in a request, the Engineering Lead shall:
    * Edit the identity-slackbot's Github post to remove the PII and replace it with `[redacted]`.
    * Post a message in the Github ticket thread describing the context of the redaction - "You included a veteran's social security number, which is PII, so I edited the post to remove it.".
    * Post a message in the linked Slack thread tagging the requestor & alerting them to the PII inclusion and subsequent redaction.
4. **Delegation:** The tickets are delegated to the appropriate crew lead within the Identity team for work completion.
5. **Tracking:** The Engineering Lead will track all requests on Zenhub by filtering for the label identity-engineering-support.
6. **Monitoring:** The Engineering Lead also monitors the #vsp-identity Slack channel, where these requests are normally initiated, to ensure no requests are missed.
7. **Escalation:** If a request is not responded to within the agreed-upon time, the request must be escalated to the Identity Product Leadership Team.
