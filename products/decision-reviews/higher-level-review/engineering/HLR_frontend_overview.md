# Higher-Level Review Overview

[Higher-Level Review Form 20-0996](https://www.vba.va.gov/pubs/forms/VBA-20-0996-ARE.pdf)

## Source code

- [vets-website appeals](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/appeals)
- HLR code in `996` and `shared` folder

## DataDog dashboards

- [Benefits - Higher Level Reviews](https://vagov.ddog-gov.com/dashboard/kiy-k3e-5ta/benefits-higher-level-reviews?cols=host%2Cservice&fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711640775263&to_ts=1711727175263&live=true)
- [Lighthouse appeals/forms/benefits intake APIs](https://vagov.ddog-gov.com/dashboard/aea-kge-ekt/banana-peels-lighthouse-appealsformsbenefits-intake-apis?fromUser=false&refresh_mode=sliding&view=spans&from_ts=1711725864685&to_ts=1711729464685&live=true)

## Entry points:

- local: http://localhost:3001/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996
- staging: http://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996
- production: https://www.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996

## Mock users

- [Test account users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md)
- [Other test users](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/test_users.csv) - most used are `vets.gov.user+0@gmail.com` and `vets.gov.user+228@gmail.com`

## Mock data

- Local development mock users are stored within the [`vets-api-mockdata` repo](https://github.com/department-of-veterans-affairs/vets-api-mockdata).
- Staging mock data is stored within a VBMS sandbox and you'll need permissions to create or edit mock user data.
- The HLR contested issues need to have a date within the last year, which sadly means that this data needs to be updated periodically - see [pull #164](https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/164) for the effected files. Again, these changes only work locally. To update mock users in staging, you'll need access to VBMS to create or edit mock user data.
- There is an [enhancement ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16262) with a suggestion on how to allow adding dynamic dates. This won't effect e2e tests since the dates are replaced.
- But, if the data is used within the save-in-progress menu, you'll need to modify the data manually (see the next section).

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while testing
- [maximal-test-v2.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/tests/fixtures/data/maximal-test-v2.json)
- [minimal-test-v2.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/tests/fixtures/data/minimal-test-v2.json)
- [maximal-test-v1.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/tests/fixtures/data/maximal-test-v1.json) (Can be removed once v1 code is removed)

## Benefit Types

For phase 1, the online Higher-Level Review form only supported filing for a "compensation" type. In later phases, this may expand to include all benefit types

- Full list of [`benefiTypes` in `vets-json-schema`](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/constants.json)
- [Supported types in HLR constants](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/996/constants.js#L72-L83)
  - Compensation (Phase 1)
  - Pension & Survivor's benefits
  - Fiduciary
  - Education
  - Veterans Health Administration
  - Vocational rehabilitation and employment
  - Loan Guaranty
  - Insurance
  - National Cemetary Administration

- See this [closed proposed design ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/37470) for more details; also see the endpoints section to do.

## Endpoints

- The backend is served from vets-api ([swagger docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/higher_level_reviews))
- Which in turn, passes the data to Lighthouse ([docs](https://dev-developer.va.gov/explore/api/decision-reviews/docs?version=current))
  - Note: Lighthouse provides a `/higher_level_reviews/schema` endpoint which has been copied over to the [`vets-json-schema` repo](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src#hlr-schemas) but isn't used by the form. Validation is done on the backend.
  - The frontend doesn't use this schema directly
- `/v1/higher_level_reviews` "POST" - submits the form
- `/v1/higher_level_reviews/{uuid}` "GET" - not used (may be used by the claim status tool in the future)
- `/v1/higher_level_reviews/contestable_issues/{benefit_type}` "GET" - get current list of contestable issues for "compensation"-only benefit type for the logged in Veteran. As of this writing, issues returned need to be filtered before shown to the Veteran:
  - Issues can not have a decision data > 1 year in the past
  - Issues can not have a blank name (`ratingIssueSubjectText`)
  - Issues can not be "deferred" - text included in either the `ratingIssueSubjectText` or `description`

## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
- DSVA `#benefits-decision-reviews-notifications` (DataDog notifications)
- DSVA `#lighthouse-status` (Lighthouse API status)

