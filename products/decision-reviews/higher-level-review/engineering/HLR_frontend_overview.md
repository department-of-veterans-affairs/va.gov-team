# Higher-Level Review (HLR) Overview

[Higher-Level Review Form 20-0996 PDF](https://www.vba.va.gov/pubs/forms/VBA-20-0996-ARE.pdf)

## Design

[Figma](https://www.figma.com/design/OxukHeNtSkCDbdmLxD5k9A/Higher-Level-Review-(VA-0996)?node-id=0-1&p=f&t=AcsDCMiqhMMt9WEK-0)

## Source code

- vets-website repo, [`/appeals` folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/appeals)
- HLR code in `996` and `shared` folder
- Note that API-loaded contestable issues are filtered before shown to the Veteran:
  - Issues can not have a decision data > 1 year in the past
  - Issues can not have a blank name (`ratingIssueSubjectText`)
  - Issues can not have the following text in either the `ratingIssueSubjectText` or `description`:
    - "deferred"
    - "apportionment"
    - "attorney fees"

## Run locally

- FE HLR only
  ```bash
  yarn watch --env entry=auth,static-pages,login-page,verify,terms-of-use,0996-higher-level-review
  ```
- Run all locally
  ```bash
  yarn watch --env entry=auth,static-pages,login-page,verify,terms-of-use,10182-board-appeal,0996-higher-level-review,995-supplemental-claim
  ```
- Run mock backend server:

  Start new form, or
  ```bash
  yarn mock-api --responses ./src/applications/appeals/shared/tests/mock-api.js
  ```
  start save-in-progress with max data
  ```bash
  yarn mock-api --responses ./src/applications/appeals/shared/tests/mock-api-full-data.js
  ```
  then to "login", open the browser console and enter
  ```bash
  localStorage.setItem('hasSession', true)
  ```


## Entry points:

- local: http://localhost:3001/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996
- staging: http://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996
- production: https://www.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996

## Mock users

- [Mocked authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Mocked%20Authentication.md) (locally)
- [Test account users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md)
- [Other test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) - most used are `vets.gov.user+0@gmail.com` and `vets.gov.user+228@gmail.com`
- [Full list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

## Requirements:

To start the form, the user must have, the last 3 are required by Lighthouse for submission:
- Level of Assurance (LOA) 3 verified
- SSN on file
- A last name on file (first name is required, but can potentially be blank)
- A date of birth on file

Note that Redux value in `profile.claims.appeals` indicates that the Veteran can apply for an appeal (is LOA3 verified AND has a SSN). See `vets-api/app/policies/appeals_policy.rb`

## Benefit Types

For phase 1, the online HLR form only supports filing for a "compensation" type. In a later phase, this may expand to include all benefit types

- Full list of [`benefitTypes` in `vets-json-schema`](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/constants.json)
- [Supported types in HLR constants](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/constants/index.js#L63-L73)
  - Compensation (Phase 1)
  - Pension & Survivor's benefits
  - Fiduciary
  - Education
  - Veterans Health Administration
  - Vocational rehabilitation and employment
  - Loan Guaranty
  - Insurance
  - National Cemetery Administration

- See this [closed proposed design ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37470) for more details; also see the endpoints section to do.

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while manually testing
- [maximal-test-v2.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/tests/fixtures/data/maximal-test-v2.json)
- [minimal-test-v2.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/tests/fixtures/data/minimal-test-v2.json)

## Testing

- Unit tests:
  - NOD app: `yarn test:unit --app-folder appeals/996 --log-level=error`
  - Specific file: `yarn test:unit src/applications/appeals/996/{folder & file} --log-level=error`
- End-to-end tests:
  - Visualize: start up the frontend server, then run `yarn cy:open` - can run in Chrome, Firefox or Electron.
  - Terminal: start up the frontend server, then run `yarn cy:run --spec 'src/applications/appeals/996/tests/*'` - runs in "chrome" by default, but can add a flag to run in `--browser firefox` or `--browser electron`
- Coverage report: `yarn test:coverage-app appeals/996`

## Mock data

- Local development mock users are stored within the [`vets-api-mockdata` repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata).
- Staging mock data is stored within a VBMS sandbox and you'll need permissions to create or edit mock user data.
- The HLR contested issues need to have a date within the last year, which sadly means that this data needs to be updated periodically - see [pull #164](https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/164) for the effected files. Again, these changes only work locally. To update mock users in staging, you'll need access to VBMS to create or edit mock user data.
- But, if the data is used within the save-in-progress menu, you'll need to modify the data manually (see the next section).

## DataDog dashboards

- [Decision Review form status](https://vagov.ddog-gov.com/dashboard/fps-2wj-ceb?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1739810073985&to_ts=1740414873985&live=true)
- [Benefits - Higher Level Reviews](https://vagov.ddog-gov.com/dashboard/kiy-k3e-5ta/benefits-higher-level-reviews?cols=host%2Cservice&fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711640775263&to_ts=1711727175263&live=true)
- [Lighthouse appeals/forms/benefits intake APIs](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711725864685&to_ts=1711729464685&live=true)
- [Real User Monitoring](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3A321995f8-5fed-4b4f-907b-e3f5ec34c28f%20%40session.type%3Auser%20%40type%3Asession%20%40session.has_replay%3Atrue&replay_tab=all&from_ts=1739890380508&to_ts=1740495180508&live=true)
- [Lighthouse API - basic appeals](https://vagov.ddog-gov.com/dashboard/4i3-dkf-ar5/banana-peels-basic?fromUser=false&refresh_mode=sliding&from_ts=1740322727196&to_ts=1740495527196&live=true)
- [Lighthouse API - appeals/forms/benefit intake](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=false&refresh_mode=sliding&from_ts=1739891107590&to_ts=1740495907590&live=true)

## Endpoints

- The backend is served from vets-api:
  - For general `vets-api` documentation use [swagger v0 docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/)
  - For HLR specific endpoints, use [swagger v1 docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/?url=https://dev-api.va.gov/v1/apidocs)
  - See [HLR_frontend_backend_interactions](./HLR_frontend_backend_interactions.md) page for more details.
- Which in turn, passes the data to Lighthouse ([Lighthouse API docs](https://dev-developer.va.gov/explore/api/decision-reviews/docs?version=current))
  - Lighthouse requires the Veteran's SSN for submission
  - Note: Lighthouse provides a `/higher_level_reviews/schema` endpoint which has been copied over to the [`vets-json-schema` repo](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src#hlr-schemas) but isn't used by the form. Schema validation is done on the backend.
  - The frontend doesn't use this schema directly

## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
- DSVA `#benefits-decision-reviews-notifications` (DataDog notifications & Lighthouse status)
- DSVA `#lighthouse-status` (Global Lighthouse API status)
