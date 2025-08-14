# Architecture Intent meeting template

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

## Checklist

- [x] Product description
    + Establish an online process for Veterans to dispute VBA Benefit Overpayment debts.
    + [Collaboration Cycle for Debt Resolution - Digital Debt Dispute #95575](https://app.zenhub.com/workspaces/vsa---debt-607736a6c8b7e2001084e3ab/issues/gh/department-of-veterans-affairs/va.gov-team/95575)
- [x] UX design description
    + [High level user flow](https://www.figma.com/design/D8tfoPhUZlqBUomMTxzkQb/Dispute-Form-(VHA-VBA)?node-id=1-339&node-type=section&t=goKw5ro0hQI1r0kX-0)
    + [Figma initial page designs](https://www.figma.com/design/D8tfoPhUZlqBUomMTxzkQb/Dispute-Form-(VHA-VBA)?node-id=19-220&node-type=canvas&t=SBl5HnEgdHTYujeY-0)
    + Design intent scheduled for Nov 7, 2024@1:30pm EST
- [x] Frontend changes
    + Creating new form application with VA Forms Library
    + All of the pages leverage existing components/functionality that we can generate with the Forms Library or source from the existing FSR 
    + It's a petty short form, so we're not expecting any significant coding challenges (knock on wood)
- [x] Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies?
      + No, we will be using an existing VBA integration. There will be a new API endpoint we submit to.
    + Do you need to poll any APIs for status?
      + No, we plan to use retries and an exhaustion block in the event of an error. 
    + Are you handling all failure and error cases while in custody of your user's data?
      + Yes, we plan to handle errors gracefully.
- [x] Internal API changes
    + List new or modified APIs in `vets-api`
      + It will use an existing VBA integration. We do not have an endpoint or data contract yet.
    + Are you deprecating or removing any APIs?
      + No
    + Do you have API documentation?
      + No, not yet. The API is in development and they do not have docs currently.
    + Describe expected call patterns
      + Vet submits form to new vets-api endpoint, form data routes through controller to VBA service, persist form in Redis for retries or debugging, submit form to VBA.
- [x] External API changes
    + List new or modified APIs for upstream or external systems
      + We will be utilizing an existing VBA integration to submit this data, we do not have the endpoint just yet. 
    + Describe expected call patterns
      + After the request comes into the controller, Data goes to a new VBA service, persist form in Redis for retries, submit form to VBA.
    + What PII or PHI will be transmitted to/from the external systems?
      + Veteran name, address, SSN, selected debt information
- [x] Background jobs
    + List any required background processing
      + We plan to use a Sidekiq job to submit and retry the form in the event of an error.
    + Describe error and dead letter handling
      + We will use Redis to store the form data in the event of an error and job exhaustion.
- [x] Data storage
    + Describe new or modified databases, tables or columns
      + No database storage will be used. We plan to use Redis to store form data though.
    + Describe indexes and constraints
      + N/A
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
      + We plan to store PII in redis and then delete after successful submission.
- [x] Libraries and dependencies
    + [VA Forms Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)
- [x] Metrics, logging, observability, alerting
    + Monitoring submissions is key, with alerts if there's an issue with submitting to `vets-api`
      + We will log to datadog successful and unsuccessful submissions. We will add a Datadog widgets for success ratio. We will also add an alert for submission errors. 
- [x] Infrastructure and network changes
    + List any changes or additions
      + N/A
- [x] Test strategy
    + We will utilize Cypress for e2e testing and include unit tests for helpers & custom components. 
    + We can leverage our existing test users for this new application
- [x] Rollout plan
    + List scope of any feature flags
      + Feature flag will enable and disable form availability in the event of an issue.
    + Identify other teams to coordinate with
      + We will coordinate with the VBA/DMC team to see how submission data looks.
    + Describe rollback plan
      + We will disable the feature flag removing the form from the site if necessary.
- [x] Internal administration tasks
    + Likely no regular maintenance or admin tasks that need to be completed regularly.
- [x] Security
    + What questions do you have regarding items on the security checklist?
    + Are there any other security concerns about your project that you want to discuss?
    + What [threat modeling][threats] have you done, and how did the results influence your planned architecture?

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete: 

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle kick-off ticket (so we know who you are). Date should be supplied in the format MMDDYYYY.

Once you've dropped this checklist into this folder, please update your Collab Cycle ticket with the location as well as a link to your user data flow document.

