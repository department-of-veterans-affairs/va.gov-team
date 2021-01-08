# 2. Contact Management

Date: 2020-12-02

## Status
Proposed


## Context

The issue motivating this decision, and any context that influences or constrains the decision.

Contact Management
- Flow when logged in user is the primary contact on the case
- Flow when logged in user is not the primary contact on the case 
- Flow when duplicate matches are found
- Associating the inquiries to contacts in the backend
- Migration strategy for GI Bill accounts from OSvC to VA.gov

Current actors on the FE: Requestor/Inquirer, Veteran, Dependant. The Inquirer can be the veteran themselves or anyone on behalf of the veteran or the dependant of the veteran including the general public, a Funeral director, a School official and any number of other non-Veteran roles. 
It is the current understanding that for any VA employee such as a Contact Center agent who is creating an inquiry on behalf of the veteran/contact, the interface used would be the backend interface that is presently used for resolving cases, and the CC agent is not expected to raise an inquiry from the FE interface.

- Who is the inquirer?
- What is the subject of the inquiry?

- Looking for existing relationships based on data VA already knows should happen in the backend, for the responder. If existing services (for e.g., PoA service or BGS service for dependents) we should try to reuse rather than create new relationships that are unverified. 
- 4 unique identifiers for MPI: Email, Claim Number. SSN, Service Number (per Nick)
Do we want to do MPI lookup on the FE? 

Identify the veteran
Identify the subject of the inquiry 

- Prioritizing the user experience
Optimizing for the ease of Veteran experience: 
- minimize the number of required fields, and make them as optional fields to reduce the form filling burden
- with the login option of ID proofed, VA.gov authentication, pre-filling would ease the burden of form filling, and additional benefits of saving drafts

- Optimizing for the ease of the Contact Center agents: 
- collect additional fields up front to reduce feedback cycle loop of going back and forth nature of verifying user (ID Proofing) for specific inquiries, with PII, PHI data

Current business domain modeling of PAST-R Contact Entity: 
- in MPI look up with SSN / DOB
- Anonymous records
TODO: 
- Need a third option of establishing an organization (or many individual contacts for the organization) in the case of a Funeral Home/Cemetary/GI Bill School officials that require an ongoing threads/inquiries, not tied to a single Veteran

## Decision

The change that we're proposing or have agreed to implement: 

## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated: 
