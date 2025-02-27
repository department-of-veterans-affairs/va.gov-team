# Notice of Disagreement (NOD) Overview

[Notice of Disagreement Form 10182 PDF](https://www.va.gov/vaforms/va/pdf/VA10182.pdf)

## Design

[Figma](https://www.figma.com/design/BplQkEDZzD8NPPNmLrhvXv/Request-a-Board-Appeal-%2F-Notice-of-Disagreement-(VA-10182)?node-id=0-1&p=f&t=ApOjFtPTpJhsEL3D-0)

## Source code

- vets-website repo, [`/appeals` folder](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/appeals)
- NOD code in `10182` and `shared` folder
- Note that API-loaded contestable issues are filtered before shown to the Veteran:
  - Issues can not have a blank name (`ratingIssueSubjectText`)
  - Issues can not have the following text in either the `ratingIssueSubjectText` or `description`:
    - "deferred"
    - "apportionment"
    - "attorney fees"

## Run locally

- FE NOD only
  ```bash
  yarn watch --env entry=auth,static-pages,login-page,verify,terms-of-use,10182-board-appeal
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

- local: http://localhost:3001/decision-reviews/board-appeal/request-board-appeal-form-10182/
- staging: http://staging.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/
- production: https://www.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/

## Mock users

- [Mocked authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Product%20Briefs/Mocked%20Authentication.md) (locally)
- [Test account users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md)
- [Other test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) - most used are `vets.gov.user+0@gmail.com` and `vets.gov.user+228@gmail.com`
- [Full list](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

## Requirements:

To start the form, the user must have, the last 3 are required by Lighthouse for submission:
- Level of Assurance (LOA) 3 verified
- SSN on file (to start form)
- VA File Number on file (not required for HLR & SC)
- A last name on file (first name is required, but can potentially be blank)
- A date of birth on file

Note that Redux value in `profile.claims.appeals` indicates that the Veteran can apply for an appeal (is LOA3 verified AND has a SSN). See `vets-api/app/policies/appeals_policy.rb`

## Benefit Types

Contestable issues API include all benefit types for the NOD form. We don't need an option to choose a benefit type. HLR & SC only support a "compensation" benefit type at this time.

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while manually testing
- [maximal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/10182/tests/fixtures/data/maximal-test.json)
- [minimal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/10182/tests/fixtures/data/minimal-test.json)
- [no-api-issues.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/10182/tests/fixtures/data/no-api-issues.json)

## Testing

- Unit tests:
  - NOD app: `yarn test:unit --app-folder appeals/10182 --log-level=error`
  - Specific file: `yarn test:unit src/applications/appeals/10182/{folder & file} --log-level=error`
- End-to-end tests:
  - Visualize: start up the frontend server, then run `yarn cy:open` - can run in Chrome, Firefox or Electron.
  - Terminal: start up the frontend server, then run `yarn cy:run --spec 'src/applications/appeals/10182/tests/*'` - runs in "chrome" by default, but can add a flag to run in `--browser firefox` or `--browser electron`
- Coverage report: `yarn test:coverage-app appeals/10182`

## Mock data

- Local development mock users are stored within the [`vets-api-mockdata` repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata).
- Staging mock data is stored within a VBMS sandbox and you'll need permissions to create or edit mock user data.
- All eligible (not missing a name and not deferred) contested issues for NOD will be visible

## DataDog dashboards

- [Decision Review form status](https://vagov.ddog-gov.com/dashboard/fps-2wj-ceb?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1739810073985&to_ts=1740414873985&live=true)
- [Benefits - Notice of Disagreement](https://vagov.ddog-gov.com/dashboard/tvp-imf-tb7/benefits-notice-of-disagreement?fromUser=false&graphType=flamegraph&historicalData=true&index=&refresh_mode=paused&shouldShowLegend=true&sort=time&spanViewType=errors&view=spans&from_ts=1711083600000&to_ts=1711404420000&live=false)
- [Lighthouse appeals/forms/benefits intake APIs](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711725864685&to_ts=1711729464685&live=true)
- [Real User Monitoring](https://vagov.ddog-gov.com/rum/replay/search?query=%40application.id%3Acabce133-7a68-46ba-ac9b-68c57e8375eb%20%40session.type%3Auser%20%40type%3Asession%20%40session.has_replay%3Atrue&replay_tab=all&from_ts=1739890380508&to_ts=1740495180508&live=true)
- [Lighthouse API - basic appeals](https://vagov.ddog-gov.com/dashboard/4i3-dkf-ar5/banana-peels-basic?fromUser=false&refresh_mode=sliding&from_ts=1740322727196&to_ts=1740495527196&live=true)
- [Lighthouse API - appeals/forms/benefit intake](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=false&refresh_mode=sliding&from_ts=1739891107590&to_ts=1740495907590&live=true)

## Endpoints

- The backend is served from vets-api:
  - For general `vets-api` documentation use [swagger v0 docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/)
  - For NOD specific endpoints, use [swagger v1 docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/?url=https://dev-api.va.gov/v1/apidocs)
  - See [NOD frontend backend interactions](./NOD_frontend_backend_interactions.md) page for more details.
- Which in turn, passes the data to Lighthouse ([docs](https://dev-developer.va.gov/explore/api/decision-reviews/docs?version=current))
  - Lighthouse requires the Veteran's VA file number (not SSN) for submission
  - Note: Lighthouse provides a `/notice_of_disagreements/schema` endpoint which is used in lieu of storing the schema in the [`vets-json-schema` repo](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src/schemas) as every other form does
  - The frontend doesn't use this schema directly

## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
- DSVA `#benefits-decision-reviews-notifications` (DataDog notifications)
- DSVA `#lighthouse-status` (Lighthouse API status)
- DSVA `#vsa-benefits-nod` (shared with Lighthouse; no longer used)
