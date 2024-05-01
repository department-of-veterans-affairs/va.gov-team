# Technical Discovery: Forms Submission Status 
**Last updated: Published April 24, 2024**

This document outlines the work needed to be done on My VA for the forms status work in coordination with the Veteran Facing Forms team. This initiative will involve changes to My VA (handled by our team), the updates to the confirmation page once a form is submitted (handled by VFF), and potentially changes to notifications (handled by VA Notify & VFF).

For the MVP our goal is to provide a space on My VA to elevate form status during the window of time between when the Veteran clicks "submit" on their digital form/application and when it is actually received (i.e. being processed/reviewed by VA). During this time it's possible for an error occurred and we need a mechanism to let the user know that an error has occurred and how to proceed. This is in alignment with the OCTO initiative of "no silent failures."

## Frontend
### Current State on My VA - Benefit application drafts section 

- [Frontend documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/2022-audit/documentation/applications-FE-documentation.md#my-va-benefit-application-drafts-frontend-documentation)
- [Backend documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/saved_applications/backend_documentation.md)

To determine if a user has any saved froms and which ones, we check [if the user profile has any `savedForms` in their Redux state](https://github.com/department-of-veterans-affairs/vets-website/blob/c9ce33748c7bdd99f3b196f7a248225c84f178cc/src/applications/personalization/dashboard/components/benefit-application-drafts/ApplicationsInProgress.jsx#L90-L94) 

where 

```
const selectProfile = state => selectUser(state)?.profile || {};

const selectUser = state => state.user;
```

---

### Changes and effort needed
#### Feature flag - 2 points total
  - open PR on `vets-api`
  - set up feature flag on `vets-website`

#### ApplicationInProgress component (card) - 11 points total
- add a [Tag web component](https://design.va.gov/storybook/?path=/docs/components-tag--default-story) for each of the statuses: Pending, Received, Error. Default tag content will say "Draft".
  - pull in web component and tweak to match design - 2 pts
  - determine how to pull in statuses from API response - 3 pts

(more in-depth info about statuses on [Benefit intake API documentation](https://developer.va.gov/explore/api/benefits-intake/docs?version=current))

For the following tasks, we need to determine if it is feasible to grab the dates and next steps from the API response.
1. **Pending** - 3 pts
   - add "Submtitted on" date - when user submitted it
   - add "Received on" date - when application arrives at Central mail/VBMS?
   - add "Next step" 
   - add additional info web component with a process list
     - steps may be different for all forms and each status
2. **Received**
- no mockup available right now
3. **Error** - 3 pts
   - create error alert if status === `Error`, which means "form submissions did not make it"
   - may or may not make this dismissible 

#### BenefitApplicationDrafts component (section) - 2 points total
- change section heading to "Benefit applications"
- change layout to two-columns (one column for card, one column for secondary CTA links)
- secondary CTA link for resources and support link w definitions of statuses
- maybe: organize cards by statuses under their own headings. ([Figma conversation](https://www.figma.com/file/GeBhUvcQAbbGYdmDIS7bRN?type=design&node-id=149-2062&mode=design#775409022))
- may need to update [BE documentation](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/products/identity-personalization/my-va/saved_applications/backend_documentation.md) because in addition to health care applicatiosn, we also include disability and non-disability forms

## Backend

# Technical Discovery: Form Status - API Integration and Backend Implementation

## Background
On BE, we need to ensure that FE can reliably fetch up-to-date form status for each form associated with the vet's user account.

Prior slack conversation: https://dsva.slack.com/archives/C044AGZFG2W/p1712765758519989

## Design Notes

Looks like we may be able to leverage existing endpoints and redux cache for the "status" values that we can use to display the new Status Tags on MyVA UI.

<img width="304" alt="Screenshot 2024-04-23 at 11 26 42 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/54035677/35d91592-7156-49b1-90f7-bf29d329fe20">

However, doesn't look like matching statuses exist in redux at the moment (at least in the metadata object shown above), and we may need to fetch or poll form statuses separately from the initialization of the `profile.user` data in redux upon login.

It might be confusing to require that FE Components stitch together this metadata themselves from separate remote sources (especially if we need to paginate in future), so we could reuse this `savedForms` array as the source of truth for the list of benefit forms and associated statuses we display in our UI.  The `/v0/user` endpoint appears to fetch the array of saved forms currently, so we may be able to update this endpoint to also include statuses for each item in savedForms array. 

If we don't want to overload the main `user` endpoint, we could also handle it in the FE by issuing separate fetch requests (i.e. request user w/ saved forms array, then fetch statuses for all returned forms) and merging state with our redux reducers.

Another way to go about this could be to fetch these statuses separately in the FE, and maintain a map of form statuses (`[FORM_ID, FORM_STATUS]`) in Redux or React Context, so that React Components can reference a form's status by ID to display the appropriate Tag for a form.

We should also ensure FE can refresh form statuses appropriately when navigating away from and back to MyVA page... will this require refetching full `/v0/user` data, or can we just refresh the list of forms and statuses?

I can work with Allison to help build whatever works best for DX and UI.

## Relevant Docs

- https://developer.va.gov/explore/api/benefits-intake/docs?version=current
- https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/user
- https://github.com/department-of-veterans-affairs/vets-api/blob/52066e25660bf4a7c10d9e72fff973125a16c3ec/app/sidekiq/benefits_intake_status_job.rb
- https://github.com/department-of-veterans-affairs/vets-api/blob/52066e25660bf4a7c10d9e72fff973125a16c3ec/app/models/form_submission_attempt.rb

## Relevant Endpoints

GET /v0/user

GET /uploads/{id}
POST /uploads/report


## Concerns

I'm still not clear on all of the "Error" cases we need to watch out for.  We should at least be prepared to cover the known cases:
- Network Request fails; no status is available
- API request for statuses fails with documented error code
- API request returns with a Status of "Error"

Will any of these endpoints be changing after we begin UI integration (aside from non-breaking bug fixes)? Sounded like there were still questions in the air after our last meeting about this.

## Tasks

- [ ] Align on data requirements and FE design with team. (~3 pts)
- [ ] Align with Benefit Forms team on purpose of "Error" status and finalized list of statuses we should expect (we can grow list over time if necessary) (~? pts)
- [ ] Verify intended purpose of existing `metadata.submission.status` value in redux store w/ devs and benefit forms team.(~1 pt)
- [ ] BE/FE dev & support for API integration tasks and coding (~5+ pts)
- [ ] Cypress test plan and test creation for expected statuses and test cases (including expected errors) (~5 pts)
