# Notice of Disagreement Overview

[Notice of Disagreement Form 10182](https://www.va.gov/vaforms/va/pdf/VA10182.pdf)

## Entry points:

- local: http://localhost:3001/decision-reviews/board-appeal/request-board-appeal-form-10182/
- staging: http://staging.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/
- production: https://www.va.gov/decision-reviews/board-appeal/request-board-appeal-form-10182/

## Mock users

Same users as Higher-Level Review: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md

## Mock data

- Mock data for the above mock users are stored within the `vets-api-mockdata` repo.
- The NOD & HLR forms share contested issues that need to have a date within the last year, which sadly means that this data needs to be updated periodically - see https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/164 for the effected files.
- There is an [enhancement ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/16262) with a suggestion on how to allow adding dynamic dates. This won't effect e2e tests since the dates are replaced.
- But, if the data is used within the save-in-progress menu, you'll need to modify the data manually (see the next section).

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while testing
- [maximal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/appeals/10182/tests/fixtures/data/maximal-test.json)
- [minimal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/appeals/10182/tests/fixtures/data/minimal-test.json)

## Endpoints

- The backend is served from vets-api ([swagger docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/notice_of_disagreements))
- Which in turn, passes the data to Lighthouse ([docs](https://dev-developer.va.gov/explore/appeals/docs/decision_reviews?version=current))
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
- DSVA `#vsa-benefits-nod` (shared with Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
