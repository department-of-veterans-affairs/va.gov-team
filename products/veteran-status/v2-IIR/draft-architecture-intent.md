# Architecture Intent meeting template

## Instructions

Your document should be brief and high-level.  Please keep it to a single page.  Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay.  You may not be able to fill in some items that _do_ apply to your work--that's also okay.  If you don't have answers, please come ready to ask questions.

## Checklist

- Product description
  - [x] Brief overview of motivation for the change from an engineering & security point of view [ASAIK, this is not applicable]
  - [x] Link to Collaboration Cycle Request issue
- UX design description
  - [x] For user-facing changes, link to UX prototype or wireframes if available
  - [x] Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
- Frontend changes
  - [x] Identify any significant code changes
  - [x] Identify any new design system components needed or changes to current components
  - [x] Describe any product analytics being gathered
- Backend changes
  - [x] Does the project introduce any new or unusual infrastructure dependencies?
  - [x] Do you need to poll any APIs for status?
  - [ ] Are you handling all failure and error cases while in custody of your users's data?
- Internal API changes
  - [x] List new or modified APIs in `vets-api`
  - [x] Are you deprecating or removing any APIs?
  - [ ] Do you have API documentation?
  - [ ] Describe expected call patterns
- External API changes
  - [x] List new or modified APIs for upstream or external systems
  - [x] Describe expected call patterns
  - [x] What PII or PHI will be transmitted to/from the external systems?
- Background jobs
  - [x] List any required background processing
  - [ ] Describe error and dead letter handling
- Data storage
  - [x] Describe new or modified databases, tables or columns
  - [x] Describe indexes and constraints
  - [x] Identify PII and PHI and where and how it will be stored, processed, expired and deleted
- Libraries and dependencies
  - [x] List new or updated dependencies
- Metrics, logging, observability, alerting
  - [x] Identify key areas to monitor
- Infrastructure and network changes
  - [x] List any changes or additions
- Test strategy
  - [ ] Describe automated, manual and user acceptance test strategy (Todo: what can we say about UAT?)
  - [x] Describe required test data and test user accounts
- Rollout plan
  - [x] List scope of any feature flags
  - [x] Identify other teams to coordinate with
  - [x] Describe rollback plan
- Internal administration tasks
  - [x] What maintenance or administration tasks do you anticipate will need to be performed periodically?
  - [x] Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
- Security
  - [x] What questions do you have regarding items on the [security checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/collab-cycle/architecture-intent-meeting.md#security-checklist)?
  - [x] Are there any other security concerns about your project that you want to discuss?
  - [x] What [threat modeling](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html) have you done, and how did the results influence your planned architecture?

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete: 

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]

Team and application should match your Collab Cycle kick-off ticket (so we know who you are). Date should be supplied in the format MMDDYYYY.

Once you've dropped this checklist into this folder, please update your Collab Cycle ticket with the location as well as a link to your user data flow document. 

---

# Architecture Intent

## Product description

The veteran status card currently lives on the [military information page](https://staging.va.gov/profile/military-information) of My VA. We intend to move it to its own page and iterate on its content.

Please see our [Collaboration Cycle Request issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/93231).

## UX design description

Please see the green section of our [UX designs](https://www.figma.com/design/AobGKkBvIiDuYXR2QqkytC/IIR-Veteran-Status?node-id=2812-32352). These changes are not expected to introduce engineering challenges. NOTE: IIR is only implementing the va.gov designs. We will be working with the mobile app team to have them implement the mobile app designs.

- The veteran status card is moved to its own page.
- A card is added to [Profile Hub](https://www.va.gov/profile) linking to the new page.
- The name tag banner at the top of the Profile page will have a new link to the veteran status card page.
- Text is refined and a FAQ section with an accordion is added.
- Changes to the card including replacing service dates with 'veteran since', reordering the items on the card, and updating the design of the card.
- Addition on an email address link for issue resolution

## Frontend changes
- Code changes are not significant, and no new design system components are required. A link will be added to the custom NameTag component.
- We would like to add analytics to the "print" link. We would also like to know who/how many users see the card versus an error message.

## Backend changes

This project does not introduce any new or unusual infrastructure dependencies. We do not need to poll any APIs for status. We have error monitoring and logging in Datadog for the API we are hitting (Veteran Service History & Eligibility API).

## Internal API changes

There will be no new or modified APIs in `vets-api`, however, this effort is dependent on API changes that are currently being developed. We have an upcoming ticket to write API documentation. `vets-website` makes a call to our `vets-api` endpoint which makes a request to the [LH API](https://developer.va.gov/explore/api/veteran-service-history-and-eligibility/docs?version=current) and returns that data to the frontend.

## External API changes

There will be no new or modified APIs for upstream or external systems. The ICN is passed between `vets-api` and the LH API to identify the Veteran. ICN is scrubbed when it's returned to the FE.

## Background jobs

There is no required background processing.

## Data storage

There will be no new or modified databases, tables or columns. No changes will be made to how PII and PHI is be stored, processed, expired or deleted.

## Libraries and dependencies

We do not expect to rely on any new or updated dependencies.

## Metrics, logging, observability, alerting

We do not have plans to add additional monitoring.

## Infrastructure and network changes

There will be no changes or additions.

## Test strategy

Our feature is covered by [unit tests](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/profile/components/proof-of-veteran-status) which use mock data. Currently there are no end-to-end tests. We use [staging users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv) for manual testing. We also test with a small number of real users in production before doing a mass slow rollout.

## Rollout plan

We plan to use one feature flag to cover the new page as well as the new card and link on the profile page. It will also be used on the military information page where our feature currently lives.

We will be coordinating with the Profile/AuthEx team to review code changes to the name tag banner and Profile hub cards. The [Military information](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/profile/components/military-information/MilitaryInformation.jsx) page has these codeowners: @department-of-veterans-affairs/vsa-authd-exp-frontend @department-of-veterans-affairs/va-platform-cop-frontend

Since we are only using feature flags for this work we will be ready to disable the feature flags if we encounter any errors or bugs. If a rollback is required we can revert our changes and request an out-of-band deployment.

## Internal administration tasks

We do not expect this work to introduce maintenance or administration tasks to be performed periodically.

## Security

We don't have any questions regarding the items on the security checklist. We have not done threat modeling. This product doesn't make technilogical or security changes to merit such analysis.
