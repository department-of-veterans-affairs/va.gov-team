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
- [ ] Backend changes
    + Does the project introduce any new or unusual infrastructure dependencies?
    + Do you need to poll any APIs for status?
    + Are you handling all failure and error cases while in custody of your users's data?
- [ ] Internal API changes
    + List new or modified APIs in `vets-api`
    + Are you deprecating or removing any APIs?
    + Do you have API documentation?
    + Describe expected call patterns
- [ ] External API changes
    + List new or modified APIs for upstream or external systems
      + We will be utilizing existing VBA endpoints to submit this new data. 
    + Describe expected call patterns
    + What PII or PHI will be transmitted to/from the external systems?
      + Veteran name, address, SSN, selected debt information
- [ ] Background jobs
    + List any required background processing
    + Describe error and dead letter handling
- [ ] Data storage
    + Describe new or modified databases, tables or columns
    + Describe indexes and constraints
    + Identify PII and PHI and where and how it will be stored, processed, expired and deleted
- [x] Libraries and dependencies
    + [VA Forms Library](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-overview)
- [ ] Metrics, logging, observability, alerting
    + Monitoring submissions is key, with alerts if there's an issue with submitting to `vets-api`
- [ ] Infrastructure and network changes
    + List any changes or additions
- [ ] Test strategy
    + We will utilize Cypess for e2e testing and include unit tests for helpers & custom components. 
    + We can leverage our existing test users for this new application
- [ ] Rollout plan
    + List scope of any feature flags
    + Identify other teams to coordinate with
    + Describe rollback plan
- [x] Internal administration tasks
    + Likely no regular maintenance or admin tasks that need to be  completed regularly.
- [ ] Security
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

