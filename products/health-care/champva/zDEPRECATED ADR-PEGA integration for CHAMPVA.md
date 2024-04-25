
# Decision record - PEGA Integration for IVC Forms

## Status

DEPRECATED

This ADR is superceded by https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/champva/ADR-callback-api-to-receive-status-from-pega.md

## Context

Currently, the IVC forms team does not have an integration point for our pending forms. Our understanding is that PEGA will serve as a document management system for IVC indefinitely, and that some forms will be transmitted to VES (Veterans Enrollment System) in addition to PEGA. PEGA workflows in support of forms 10-10d and form 10-7959c were completed in January of 2024. VES is not expected to be available to our team until workflows are built in 2025.

We're working to gather more details about how specifically we will submit forms and supporting documents to PEGA. This could involve a few different approaches:
1. Sending documents to an s3 bucket managed by the IVC Forms team. Risks include a large effort around document management that the team may not be equipped to bear, and an inability to provide a high confidence response back to applicants to give assurance that their documents have been received and are moving forward in the application process. 
2. Sending documents to an s3 bucket managed by IVC/PEGA. This would remove the IVC Forms team from ongoing document management (storage, retention, etc.) and provide higher confidence handoffs for confirmation of application receipt.
3. Sending documents directly to PEGA via an API. This would provide the highest confidence for successful submission, without addition effort to build tools in support of monitoring form submissions to PEGA. This option would also require additional effort from the PEGA team.

### What options were considered?

The benefits API was considered and has been ruled out due to a lack of business process integration between VBA (Veterans Benefits Administration) and VHA (Veterans Health Administration), along with the time, effort, and expense in building these integrations. The VHA currently doesn't use CMP (Central Mail Portal), which the VBA uses, and the estimate from the VBA to build an integration to handle forms like 10-10d was 3 months and would require funding. That integration has not been pursued, and if it were it would not account for ongoing document management in PEGA for the IVC forms team.

We also explored using an API to submit directly to VES, similar to the pattern used for forms like 10-10EZ that are also within VHA. If this were technically feasible, it would bypass multiple business processes (eligibility, claims, etc.) that need to remain intact to successfully serve CHAMPVA customers. Notably, some forms will never get sent to VES (even if the workflow went to VES, the documents would stay in PEGA). Business processes would not be fully supported with this option until workflows are developed in VES to support IVC programs and their associated forms.

Box.com was mentioned early in the project but ruled out due to security concerns.

## Decision

- Strongly prefer to submit forms and supporting docuements to PEGA via a RESTful API once available
- Prior to availability of an API for direct submission to PEGA, we anticipate submitting documents to an AWS s3 bucket to begin testing back end processes. This may be viable as a temporary production option, but would require effort to manage additional risks to ensure quality and viability of the solution.

While s3 is not the preferred production solution, it's important to note that our team is pursuing this path as a near term option for testing our back end processes and front end functionality as it relates to those processes.

## Consequences

### What are the risks of this decision?

The risk of depending on an API integration with PEGA is an unknown delay in production until the API is available to us.

The risk of the alternate (s3) option, if it were to become the production solution, would be additional effort to build monitoring tools to ensure the quality and reliability of our integration with PEGA. If the API option then became available, these monitoring tools specific to monitoring successful submission to PEGA would no longer be needed.

As of the week of 2/26/24, we're unsure whether the PEGA implementation team will be able to return a confirmation of whether PEGA has received a form we've submitted. This had not been our previous understanding, and it increases risk and lowers quality for users, potentially tu unacceptable levels.

### How do we reverse this decision?

If neither PEGA integration is feasible, this would prevent the launch in production. Rather than reversing a deploy to production, we would not be pushing that deploy to production.  Discovery to date has not shed light on an alternative to PEGA, so alternative options would still need to be pursued if PEGA integration is not feasible.

### References
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/1290901/598a5560-594d-4ede-bf96-e269dee63d5a)


Diagram from meeting with VA IVC team.
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/1290901/25e19a40-6367-49bf-8461-8311e3870062)
