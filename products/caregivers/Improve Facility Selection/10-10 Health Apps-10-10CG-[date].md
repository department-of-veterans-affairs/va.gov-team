# Architecture Intent meeting template

## Instructions

Your document should be brief and high-level. Please keep it to a single page. Focus on the high level and link to supporting material where appropriate; this is _not_ a detailed engineering spec.

Some of the items below may not apply to your work--that's okay. You may not be able to fill in some items that _do_ apply to your work--that's also okay. If you don't have answers, please come ready to ask questions.

## Checklist

- Product description
  - Brief overview of motivation for the change from an engineering & security point of view
    - Initially, the facility selection page was based on U.S. State dropdown selection, then a facility dropdown selection, derived from a static JSON file. This caused our facilities list to easily be out-of-date and inaccurate. We want to provide applicants with the option to search by city, state or postal code of any given facility, using the latest data from the Facilities API.
  - [Link to Collaboration Cycle Request issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/51980)
- UX design description
  - For user-facing changes, link to UX prototype or wireframes if available
    - [Figma designs](https://www.figma.com/design/TxXD5bGUOhbHHWLb85GPjK/10-10CG?node-id=2478-18708&node-type=SECTION&t=LIbnyXIFEnPa5jZz-0)
  - Call out any engineering challenges; UX is reviewed in the [Design Intent meeting][DI]
    - Overall, it is a fairly simple feature. We added two new api calls and a custom page component since we do not do this design anywhere else. We did have to build the front end component to handle both the selection and review aspects, as we were not able to use the built in forms library functionality for the review page here.
- Frontend changes
  - Identify any significant code changes
    - New `FacilitySearch.jsx` custom component that uses the `VaSearchInput` component and makes a request to the mapbox api with search criteria (zip code, city, state, or full address) and returns lat/long coordinates that are used to make a request to the new caregivers facilities endpoint in `vets-api` that calls the Lighthouse facilities api from `vets-api`.
    - All changes are within the `caregivers` directory
  - Identify any new design system components needed or changes to current components
    - None
  - Describe any product analytics being gathered
    - Total applications being rerouted (source: stakeholder provided)
    - Total Applications being submitted (source: [Datadog](https://vagov.ddog-gov.com/dashboard/p5g-fys-epz/1010-health-apps?fromUser=false&fullscreen_end_ts=1730229097128&fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=overview&fullscreen_start_ts=1730225497128&fullscreen_widget=1652960129845848&refresh_mode=sliding&from_ts=1730224696206&to_ts=1730228296206&live=true))
    - Facility Selection page - avg engagement time (source: [Google Analytics](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/8un9wi5nSN-WZ-KqWHHBPA))
    - New Facility Confirmation page - avg engagement time (source: [Google Analytics)](https://analytics.google.com/analytics/web/#/analysis/p419143770/edit/8un9wi5nSN-WZ-KqWHHBPA)
- Backend changes
  - Does the project introduce any new or unusual infrastructure dependencies?
    - No
  - Do you need to poll any APIs for status?
    - No
  - Are you handling all failure and error cases while in custody of your users's data?
    - Yes
- Internal API changes
  - List new or modified APIs in `vets-api`
    - `/v0/caregivers_assistance_claims/facilities` uses the Lighthouse facilities api endpoint
  - Are you deprecating or removing any APIs?
    - No
  - Do you have API documentation?
    - No, the only change is a new endpoint in the caregivers controller.
  - Describe expected call patterns
    - `vets-website` calls this endpoint to receive a list of paginated facilities
- External API changes
  - List new or modified APIs for upstream or external systems
    - No Changes
  - Describe expected call patterns
    - No Changes
  - What PII or PHI will be transmitted to/from the external systems?
    - No Changes
  - List any required background processing
    - No Changes
  - Describe error and dead letter handling
    - No Changes
- Background jobs
  - List any required background processing
  - Describe error and dead letter handling
- Data storage
  - Describe new or modified databases, tables or columns
    - No Changes. The facility that is ultimately returned is used to pass the facility id as part of the 1010CG Form submission, the same way we do it now.
  - Describe indexes and constraints
    - No Changes
  - Identify PII and PHI and where and how it will be stored, processed, expired and deleted
    - The only potential PII would be the lat/long of the address that is searched for if it is a Veteran's home address. See security question for more detail.
- Libraries and dependencies
  - List new or updated dependencies
    - Lighthouse Facilities API (New to the 10-10CG, but used in VA.gov)
    - Mapbox API (New to the 10-10CG, but used in VA.gov)
- Metrics, logging, observability, alerting
  - Identify key areas to monitor
    - Monitor api status for mapbox api and Lighthouse facilities api
- Infrastructure and network changes
  - List any changes or additions
- Test strategy
  - Describe automated, manual and user acceptance test strategy
    - Automated
      - Unit tests and Cypress E2E tests are implemented
    - Manual
      - We created test cases based on the requirements of the feature and Figma designs
      - We have a regression test suite that will ensure nothing else broke from the new change
      - All test cases are documented in TestRail
    - User acceptance
      - After implementation and testing, we will review with the Product Manager to ensure that all requirements have been met
  - Describe required test data and test user accounts
    - This is an aunauthenticated form, meaning that a user does not need to be signed in to complete and submit it. We do not use any data from an authenticated user to pre-fill this form or provide any statuses.
- Rollout plan
  - List scope of any feature flags
    - Feature flag: caregiver_use_facilities_API
    - Feture flag description: Allow list of caregiver facilites to be fetched by way of the Facilities API
  - Identify other teams to coordinate with
    - None
  - Describe rollback plan
    - The PM and Data Analyst will monitor analytics. If there is a spike in errors or unexpected behavior, the feature toggle will be used to disable the feature in production and issue triage will begin.
- Internal administration tasks
  - What maintenance or administration tasks do you anticipate will need to be performed periodically?
    - The only potential change is if we need to update an api version for mapbox or Lighthouse facilities. Those are not expected, and are used a few other places in `vets-website` and `vets-api` so these changes are not unique. The api's handle updating all relevant address and facility data.
  - Describe how you intend for these tasks to be performed (e.g., through an internal web page, through terminal access, etc.).
    - Those would be code changes, so it would need an engineer to update the api.
- Security
  - What questions do you have regarding items on the security checklist?
    - The new search form has a text field that is used to query the mapbox api. Mapbox returns the lat/long of the text, and we send those values in the query params to `vets-api` which makes the api request to the Lighthouse Facilies api. The lat/long values could potentially be the home address of the Veteran. Is there a security concern there around PII?
  - Are there any other security concerns about your project that you want to discuss?
    - No
  - What [threat modeling][threats] have you done, and how did the results influence your planned architecture?

## Where to put this checklist and what to name it

This document should be in markdown and should be dropped into the following location when complete:

va.gov-team-sensitive/tree/master/platform/engineering/collaboration-cycle/architecture-intent/checklist/

Name the file in the following format:
[team]-[application]-[date]
