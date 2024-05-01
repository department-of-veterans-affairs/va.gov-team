# Notice of Disagreement Overview

[Notice of Disagreement Form 10182](https://www.va.gov/vaforms/va/pdf/VA10182.pdf)

## Source code

- [vets-website appeals](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/appeals)
- NOD code in `10182` and `shared` folder

## DataDog dashboards

- [Benefits - Notice of Disagreement](https://vagov.ddog-gov.com/dashboard/tvp-imf-tb7/benefits-notice-of-disagreement?fromUser=false&graphType=flamegraph&historicalData=true&index=&refresh_mode=paused&shouldShowLegend=true&sort=time&spanViewType=errors&view=spans&from_ts=1711083600000&to_ts=1711404420000&live=false)
- [Lighthouse appeals/forms/benefits intake APIs](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711725864685&to_ts=1711729464685&live=true)

## Entry points:

- local: http://localhost:3001/decision-reviews/board-appeal/request-board-appeal-form-10182/
- staging: http://staging.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/
- production: https://www.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/

## Mock users

- [Test account users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md)
- [Other test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) - most used are `vets.gov.user+0@gmail.com` and `vets.gov.user+228@gmail.com`

## Mock data

- Local development mock users are stored within the [`vets-api-mockdata` repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata).
- Staging mock data is stored within a VBMS sandbox and you'll need permissions to create or edit mock user data.
- NOD v2 form contested issues are no longer filtered to be within the last year. All eligible (not missing a name and not deferred) contested issues for NOD will be visible

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while testing
- [maximal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/appeals/10182/tests/fixtures/data/maximal-test.json)
- [minimal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/appeals/10182/tests/fixtures/data/minimal-test.json)
- [no-api-issues.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/10182/tests/fixtures/data/no-api-issues.json)

## Endpoints

- The backend is served from vets-api ([swagger docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/notice_of_disagreements))
- Which in turn, passes the data to Lighthouse ([docs](https://dev-developer.va.gov/explore/api/decision-reviews/docs?version=current))
  - Note: Lighthouse provides a `/notice_of_disagreements/schema` endpoint which is used in lieu of storing the schema in the [`vets-json-schema` repo](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src/schemas) as every other form does
  - The frontend doesn't use this schema directly
- `/v0/notice_of_disagreements` "POST" - submits the form
- `/v0/notice_of_disagreements/{uuid}` "GET" - not used (may be used by the claim status tool in the future)
- `/v0/notice_of_disagreements/contestable_issues` "GET" - get current list of contestable issues for the logged in Veteran. As of this writing, issues returned need to be filtered before shown to the Veteran:
  - Issues can not have a decision data > 1 year in the past
  - Issues can not have a blank name (`ratingIssueSubjectText`)
  - Issues can not be "deferred" - text included in either the `ratingIssueSubjectText` or `description`
- `/v0/decision_review_evidence` "POST" - endpoint for uploading files

## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
- DSVA `#benefits-decision-reviews-notifications` (DataDog notifications)
- DSVA `#lighthouse-status` (Lighthouse API status)
- DSVA `#vsa-benefits-nod` (shared with Lighthouse; no longer used)
