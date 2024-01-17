
# Decision record - PEGA Integration for IVC Forms

## Status

Open for comment

## Context

Currently, the IVC forms team does not have an integration point for our pending forms. Our understanding is that PEGA will serve as a document management system for IVC indefinitely, and that some forms will be transmitted to VES in addition to PEGA. PEGA is expected to be prepared to accept form 10-10d and form 10-7959c in January of 2024. VES is not expected to be available to our team until workflows are built in 2025.

### What options were considered?

The benefits API was considered and has been ruled out due to a lack of business process integration between VBA and VHA, along with the time, effort, and expense in building these integrations.

We also explored using an API to submit directly to VES, similar to the pattern used for forms like 10-10EZ that are also within VHA. If this were technically feasible, it would bypass multiple business processes (eligibility, claims, etc.) that need to remain intact to successfully serve CHAMPVA customers.

## Decision

Moving forward, the IVC Forms team will:
- Proceed with the assumption that PDF form submissions will be sent to PEGA once a workflow becomes available for a given form
- Assume that there is a future state where form submissions will be sent to a RESTful API in addition to PEGA
- Remain open to changes in the architectural landscape that may help us and our stakeholders streamline IVC processes

## Consequences

### What are the risks of this decision?

### How do we reverse this decision?
