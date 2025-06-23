# Architecture Intent meeting template

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

## General architecture

[Overview](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/health-care/beneficiary-travel/engineering/claims_management)

- [Context diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/Travel%20Pay%20Context%20Diagram.png)
- [Container diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/claims_management/container_vagov_travel_pay_claims_mgmt.png)
- [Component diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/claims_management/component_vagov_travel_pay_claims_mgmt.png)
- [Sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/claims_management/sequence_diagrams.md)
- [Dataflow diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/claims_management/ClaimsManagement-DataFlow.png)

## Checklist

- Product description
    + Brief overview of motivation for the change from an engineering & security point of view: This iteration of the travel claim details page includes the ability for Veterans to draw more insights about the status of their claim, including viewing submitted evidence and downloading their decision letter. It also allows them to appeal a denied claim.
    + [Link to Collaboration Cycle Request issue](https://github.com/orgs/department-of-veterans-affairs/projects/998/views/1?filterQuery=travel&pane=issue&itemId=102533671&issue=department-of-veterans-affairs%7Cva.gov-team%7C105484)
- UX design description
    + For user-facing changes, [link to UX prototype or wireframes](https://www.figma.com/design/RJ6OVm0MWD2WprVfO7E3lp/Travel-reimbursement-status-page?node-id=4494-4280&p=f) if available
    + Call out any engineering challenges:
      * Document download: how best to download the Veteran- and clerk-submitted documents? Pre-fetch or on-demand? Latency issues with either approach?
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
      * `GET /claims/{claimId}` Returns document summary information now
      * `GET /claims/{claimId}/documents/{docId}` Returns file binary data
    + Are you deprecating or removing any APIs? No
    + Do you have API documentation? [Yes](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/travel_pay)
    + Describe expected call patterns: [Defined in sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/claims_management/sequence_diagrams.md)
- External API changes
    + List new or modified APIs for upstream or external systems
      * `GET /claims/{claimId}/documents` Returns document summaries for a claim
      * `GET /claims/{claimId}/documents/{docId}` Returns file binary data
    + Describe expected call patterns: [Defined in sequence diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/claims_management/sequence_diagrams.md)
    + What PII or PHI will be transmitted to/from the external systems?
      + None
- Background jobs
    + List any required background processing: None
- Data storage
    + Describe new or modified databases, tables or columns: None
    + Describe indexes and constraints: None
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted: No PII or PHI stored
- Libraries and dependencies
    + List new or updated dependencies: None
- Metrics, logging, observability, alerting
    + Identify key areas to monitor: Latency, Error Rates, # Downloads, Payload size for file downloads
- Infrastructure and network changes
    + List any changes or additions: None
- Test strategy
    + Describe automated, manual and user acceptance test strategy: Mock dependencies for unit tests, test happy paths, known error paths. VCR cassettes in place for controller tests. Thorough manual testing along the lines of [pre-existing testrail cases](https://dsvavsp.testrail.io/index.php?/suites/view/3182&group_by=cases:section_id&group_order=asc&display_deleted_cases=0)
    + Describe required test data and test user accounts: [Nolle Barakat](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-travel-pay.md)
- Rollout plan
    + List scope of any feature flags
      * [travel_pay_claims_management](https://staging-api.va.gov/flipper/features/travel_pay_claims_management) - toggles features related to this work
      * [travel_pay_view_claim_details](https://staging-api.va.gov/flipper/features/travel_pay_view_claim_details) - toggles the entire claim details page within which this work is contained
    + Identify other teams to coordinate with
      * Travel Pay API team 
    + Describe rollback plan: Similar to our [SMOC rollback plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/product/mvp_rollout_plan.md#step-3-production-rollout)
- Internal administration tasks
    + What maintenance or administration tasks do you anticipate will need to be performed periodically?
      * As the Travel Pay API team improves their versioning strategy, we expect to tweak version numbers until they settle on a strategy (in progress)
      * EIS credentials rotate every so often. We are monitoring [this link](https://confluence.devops.va.gov/pages/viewpage.action?pageId=209786496) to know when credentials expire. We will make the changes in the AWS param store when credentials are rotated.  
    + Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.). See above
- Security
    + What questions do you have regarding items on the [security checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#security-checklist)? None right now
    + Are there any other security concerns about your project that you want to discuss? Not at this time
    + What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture? No threat modeling done for this feature yet.

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete: 

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle kick-off ticket (so we know who you are). Date should be supplied in the format MMDDYYYY.

Once you've dropped this checklist into this folder, please update your Collab Cycle ticket with the location as well as a link to your user data flow document.
