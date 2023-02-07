# Higher-Level Review Overview

[Higher-Level Review Form 20-0996](https://www.vba.va.gov/pubs/forms/VBA-20-0996-ARE.pdf)

## Entry points:

- local: http://localhost:3001/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996
- staging: http://staging.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996
- production: https://www.va.gov/decision-reviews/higher-level-review/request-higher-level-review-form-20-0996

## Mock users

Same users as Notice of Disagreement: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md

## Mock data

- Mock data for the above mock users are stored within the `vets-api-mockdata` repo.
- The NOD & HLR forms share contested issues that need to have a date within the last year, which sadly means that this data needs to be updated periodically - see https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/164 for the effected files.
- There is an [enhancement ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16262) with a suggestion on how to allow adding dynamic dates. This won't effect e2e tests since the dates are replaced.
- But, if the data is used within the save-in-progress menu, you'll need to modify the data manually (see the next section).

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while testing
- [maximal-test-v2.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/996/tests/fixtures/data/maximal-test-v2.json)
- [minimal-test-v1.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/996/tests/fixtures/data/minimal-test-v1.json)
- TODO: create a `minimal-test-v2.json` test file.

## Benefit Types

For phase 1, the online Higher-Level Review form only supported filing for a "compensation" type. In later phases, this will expand to include all benefit types

- Full list of [`benefiTypes` in `vets-json-schema`](https://github.com/department-of-veterans-affairs/vets-json-schema/blob/master/dist/constants.json))
- [Supported types in HLR constants](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/disability-benefits/996/constants.js#L72-L83)
  - Compensation (Phase 1)
  - Pension & Survivor's benefits
  - Fiduciary
  - Education
  - Veterans Health Administration
  - Veteran Readiness and Employment
  - Loan Guaranty
  - Insurance
  - National Cemetary Administration

TODO: https://github.com/department-of-veterans-affairs/va.gov-team/issues/37470; also see the endpoints section to do.

## Endpoints

- The backend is served from vets-api ([swagger docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/higher_level_reviews))
- Which in turn, passes the data to Lighthouse ([docs](https://dev-developer.va.gov/explore/appeals/docs/decision_reviews?version=current))
  - Note: Lighthouse provides a `/higher_level_reviews/schema` endpoint which has been copied over to the [`vets-json-schema` repo](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src#hlr-schemas) but isn't used by the form. Validation is done on the backend.
  - The frontend doesn't use this schema directly
- `/v1/higher_level_reviews` "POST" - submits the form
- `/v1/higher_level_reviews/{uuid}` "GET" - not used (may be used by the claim status tool in the future)
- `/v1/higher_level_reviews/contestable_issues/{benefit_type}` "GET" - get current list of contestable issues for "compensation"-only benefit type for the logged in Veteran. As of this writing, issues returned need to be filtered before shown to the Veteran:
  - Issues can not have a decision data > 1 year in the past
  - Issues can not have a blank name (`ratingIssueSubjectText`)
  - Issues can not be "deferred" - text included in either the `ratingIssueSubjectText` or `description`

TODO:

- `/v2/contestable_issues/{benefit_type}` "GET" - Lighthouse's get contestable issues for any benefit type. This endpoint eventually need to replace `/v1/higher_level_reviews/contestable_issues/{benefit_type}`.

## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
