# Supplemental Claim Overview

[Supplemental Claim Form 20-0995](https://www.va.gov/find-forms/about-form-20-0995/)

## Entry points:

* local: http://localhost:3001/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/
* staging: http://staging.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/
* production: https://www.va.gov/decision-reviews/supplemental-claim/file-supplemental-claim-form-20-0995/

## Mock users

Same users as Higher-Level Review and Notice of Disagreement: https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-HLR.md

## Mock data

- Mock data for the above mock users are stored within the `vets-api-mockdata` repo.
- The Supplemental Claim, NOD & HLR forms share contested issues that need to have a date within the last year, which sadly that this data needs to be updated periodically for HLR & NOD to show these issues - see https://github.com/department-of-veterans-affairs/vets-api-mockdata/pull/164 for the effected files. All contested issues will continue to show in Supplemental Claims because there is no limitation, but the mock data won't ever be more than a year old.

## Test data

- Use with the [save in progress menu](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-use-the-save-in-progress-m) to auto-fill the form while testing
- [maximal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/appeals/995/tests/fixtures/data/maximal-test.json)
- [minimal-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/appeals/995/tests/fixtures/data/minimal-test.json)
- [no-evidence-test.json](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/appeals/995/tests/fixtures/data/no-evidence-test.json)

## Endpoints

- The backend is served from vets-api ([swagger docs](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/supplemental_claims)) - **important** make sure to switch to use "v1" in `https://dev-api.va.gov/v1/apidocs` (the URL at the top of the page)
- Which in turn, passes the data to Lighthouse ([Lighthouse docs](https://developer.va.gov/explore/appeals/docs/decision_reviews))
  - Note: Lighthouse provides a `/supplemental_claims/schema` endpoint which is used in lieu of storing the schema in the [`vets-json-schema` repo](https://github.com/department-of-veterans-affairs/vets-json-schema/tree/master/src/schemas) as every other form does
  - The frontend doesn't use this schema directly
- `/v1/supplemental_claims` "POST" - submits the form
- `/v1/supplemental_claims/{uuid}` "GET" - not used (may be used by the claim status tool in the future)
- `/v1/supplemental_claims/contestable_issues/{benefit_type}` "GET" - get current list of contestable issues for the logged in Veteran. As of this writing, issues returned need to be filtered before shown to the Veteran:
  - Issues can not have a blank name (`ratingIssueSubjectText`)
  - Issues can not be "deferred" - text included in either the `ratingIssueSubjectText` or `description`
- `/v0/upload_supporting_evidence` "POST" - endpoint for uploading files
- `/v0/intent_to_file` "GET" - get Intent to file (ITF) list which we then search for an existing "compensation" type that is active
- `/v0/intent_to_file/compensation` "POST" - create an ITF if no active compensation ITF is found

## Slack channels

- DSVA `#appeals-announcements` (Caseflow & Lighthouse)
- DSVA `#appeals-api` (Lighthouse)
- DSVA `#benefits-decision-reviews` (Team channel)
