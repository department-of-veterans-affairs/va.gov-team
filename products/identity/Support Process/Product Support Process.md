## This document outlines the process for intake and handling of tickets that require Product Support and assistance.

1. **Ticket Creation:** When a ticket requiring product assistance is created, it is assigned to tan Identity Team Product Manager.
2. **Analysis:** The Product Manager conducts an analysis to determine the work needed, the expected timeframe, and any concerns regarding the request. Typically, this analysis occurs within one business day of the request submission, although the timeframe may vary depending on the nature of the request. 

   **Personal Identifiable Information Review:** As part of their analysis, the Product Manager will detect and redact any personal identifiable information (PII). Examples of PII may include production credential emails, test credential passwords, or veteran-identifying attributes such as a veteran's SSN or date of birth. Should PII be discovered in a request, the Product Manager shall:
    * Edit the identity-slackbot's Github post to remove the PII and replace it with `[redacted]`.
    * Post a message in the Github ticket thread describing the context of the redaction - "You included a veteran's social security number, which is PII, so I edited the post to remove it.".
    * Post a message in the linked Slack thread tagging the requestor & alerting them to the PII inclusion and subsequent redaction.
4. **Delegation:** If necessary, tickets are delegated to the appropriate crew lead within the Identity team for work completion.
5. **Tracking:** Product Managers will track all requests on Zenhub by filtering for the label identity-product-support.
6. **Monitoring:** Product Managers will also monitor the #vsp-identity Slack channel, where these requests are normally initiated, to ensure no requests are missed.
7. **Escalation:** If a request is not responded to within the agreed-upon time, the request must be escalated to the Identity Product Leadership Team.
