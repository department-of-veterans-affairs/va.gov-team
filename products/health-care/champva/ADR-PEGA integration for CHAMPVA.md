
# Decision record - PEGA Integration for IVC Forms

## Status

Draft

## Context

Currently, the IVC forms team does not have an integration point for our pending forms. Our understanding is that PEGA will serve as a document management system for IVC indefinitely, and that some forms will be transmitted to VES (Veterans Enrollment System) in addition to PEGA. PEGA is expected to be prepared to accept form 10-10d and form 10-7959c in January of 2024. VES is not expected to be available to our team until workflows are built in 2025.

We're working to gather more details about how specifically we will submit forms and supporting documents to PEGA. This could involve a few different approaches:
1. Sending documents to an s3 bucket managed by the IVC Forms team. Risks include a large effort around document management that the team may not be equipped to bear, and an inability to provide a high confidence response back to applicants to give assurance that their documents have been received and are moving forward in the application process. 
2. Sending documents to an s3 bucket managed by IVC/PEGA. This would remove the IVC Forms team from ongoing document management (storage, retention, etc.) and provide higher confidence handoffs for confirmation of application receipt.
3. Sending documents directly to PEGA via an API. This would provide the highest confidence for successful submission. This option would also require additional effort from the PEGA team.

### What options were considered?

The benefits API was considered and has been ruled out due to a lack of business process integration between VBA (Veterans Benefits Administration) and VHA (Veterans Health Administration), along with the time, effort, and expense in building these integrations. The VHA currently doesn't use CMP (Central Mail Portal), which the VBA uses, and the estimate from the VBA to build an integration to handle forms like 10-10d was 3 months and would require funding.

We also explored using an API to submit directly to VES, similar to the pattern used for forms like 10-10EZ that are also within VHA. If this were technically feasible, it would bypass multiple business processes (eligibility, claims, etc.) that need to remain intact to successfully serve CHAMPVA customers. Notably, some forms will never get sent to VES (even if the workflow went to VES, the documents would stay in PEGA). 

Box.com was mentioned early in the project but ruled out due to security concerns.

## Decision

- Strongly prefer to submit to PEGA via a RESTful API once available
- Prior to availability of an API, we anticipate submitting documents to an s3 bucket to begin testing



## Consequences

### What are the risks of this decision?

### How do we reverse this decision?

### References
Diagram from meeting with VA IVC team.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/1290901/25e19a40-6367-49bf-8461-8311e3870062)
