# Architecture Intent meeting template

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

## Checklist

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view
    + [Link to Collaboration Cycle Request issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51980)
- UX design description
    + For user-facing changes, link to UX prototype or wireframes if available
         + [Figma designs](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=2478-18708&node-type=SECTION&t=LIbnyXIFEnPa5jZz-0)
    + Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
- Frontend changes
    + Identify any significant code changes
    + Identify any new design system components needed or changes to current components
    + Describe any product analytics being gathered
- Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies?
    + Do you need to poll any APIs for status?
    + Are you handling all failure and error cases while in custody of your users's data?
- Internal API changes
    + List new or modified APIs in `vets-api`
    + Are you deprecating or removing any APIs?
    + Do you have API documentation?
    + Describe expected call patterns
- External API changes
    + List new or modified APIs for upstream or external systems
    + Describe expected call patterns
    + What PII or PHI will be transmitted to/from the external systems?
- Background jobs
    + List any required background processing
    + Describe error and dead letter handling
- Data storage
    + Describe new or modified databases, tables or columns
    + Describe indexes and constraints
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
- Libraries and dependencies
    + List new or updated dependencies
- Metrics, logging, observability, alerting
    + Identify key areas to monitor
- Infrastructure and network changes
    + List any changes or additions
- Test strategy
    + Describe automated, manual and user acceptance test strategy
    + Describe required test data and test user accounts
         + This is an aunauthenticated form, meaning that a user does not need to be signed in to complete and submit it.  We do not use any data from an authenticated user to pre-fill this form or provide any statuses.
- Rollout plan
    + List scope of any feature flags
         + Feature flag: caregiver_use_facilities_API
         + Feture flag description: Allow list of caregiver facilites to be fetched by way of the Facilities API
    + Identify other teams to coordinate with
    + Describe rollback plan
         + The PM and Data Analyst will monitor analytics. If there is a spike in errors or unexpected behavior, the feature toggle will be used to disable the feature in production and issue triage will begin.
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically?
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
- Security
    + What questions do you have regarding items on the security checklist?
    + Are there any other security concerns about your project that you want to discuss?
    + What [threat modeling][threats] have you done, and how did the results influence your planned architecture?

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete: 

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]
