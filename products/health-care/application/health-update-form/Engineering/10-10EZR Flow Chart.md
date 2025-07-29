```mermaid
---
config:
  theme: forest
---
flowchart TD
    A("User identifier fetched during login (auth-only form)")
    A --> B(Check for enrollment status via the enrollment eligibility API by passing user identifiers)
    B --> C(Submit to enrollment system API asynchronously via background job)
    C --> D("Background job fails with no retries left(14 total retries that span 1d 1h 0m 6s)")
    D -->|In the case of external service outages, the job will continue to retry until all retries have been exhausted. Logging will inform us as to which service is causing the failures. We would then reach out to the POC of said service to identify and attempt to rectify the issue.| E(Manually send email to HEC administrators that includes the Veteran's provided contact information, so they can follow up with them)
```
