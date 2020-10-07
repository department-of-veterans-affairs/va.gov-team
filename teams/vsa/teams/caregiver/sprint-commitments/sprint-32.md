# Sprint 32

##### 10/7 - 10/20

## Frontend
- Save in progress bug (https://github.com/department-of-veterans-affairs/va.gov-team/issues/12311)
- Statement of truth checkboxes
- Downtime setup discovery/tickets (https://department-of-veterans-affairs.github.io/veteran-facing-services-tools/platform/tools/downtime-notifications/)
- 10-10CG QA Fixes 
- Stretch: front-end/back-end not validating errors (client failures)

## Backend
- Statement of truth checkboxes (backend) (schema)
- Monitoring and looking into form errors
- Daily report of yesterday's: number of submissions, number sent to CARMA, number of "failures" and why if available
- [x] Stretch: Familiarize with Sentry 10
- Stretch: - Unique SSN/validation (https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/va.gov-team/13427)

**Additional Scope**
- [x] Get IP address of applicant who said they didn't apply
- [x] Create AWS Log query to count submissions successful, blocked, and failed for a given day
- [x] Create excel report on submission results since launch day
- [x] Identify the carma cases where attachment was not likely set (where `attachments`: `{}` or `{ has_errors: true }`)
- [x] Implement schema updates to capture attestations of each form participant

## Design
- Talk through designs for Statement of Truth radios
- Talk through the designs for address on 10-10EZ
- Start research plan for 10-10EZ cumulative study

## Product
- Ming: Investigate MPI duplicate errors
- Ming: Investigate form errors as a page overlay
- Alayna: Send daily report on metrics to Program team
- Alayna: Project kickoff for 10-10EZ

## PTO
- Kevin: 10/12 - 10/16
- Alayna: 10/12 - 10/16
- Justin, Ming, Jonathan: 10/12
