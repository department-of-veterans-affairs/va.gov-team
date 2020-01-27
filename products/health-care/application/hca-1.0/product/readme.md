# HealthCareApplication

Health Care Application is a React/RJSF and Rails application which provides a representation of the 1010-EZ Form used to apply for health care benefits.

## Product Key Words
- HCA 
- Health Application
- 10-10 EZ
- 1010-EZ
- Health Care Application

## Problem Statement
Veterans want to receive healthcare benefits that they're entitled to, but currently need to submit a form called the 10-10EZ either by mail, or online on the Veterans Online Application Form - which must be using IE or a browser that defaults to Adobe (Chrome, Safari, and Firefox do not default to Adobe) & must have Adobe 8 or higher; as a result Veterans have a difficult time applying for their healthcare benefits.

## Points of Contact

* Waffle: https://waffle.io/department-of-veterans-affairs/vets.gov-team?search=hca
* Slack: #healthcare-app; #rainbows-team; #dragons-team

|Name|Role|Email|
|----|----|-----|
|Mark Shaughnessy|	CBO Program Manager (Primary)	|
|Ryan Heiman|	Member Svcs SME	|
|Angie Wilt	|NEI/ESM - Vet Point of Svc CBO	|
|Theresa Thorn	|NEI/ESM - Analyst, Proj Mgmt	|
|Angel Lawrence	|HEC	|
|Bill Wigton	|ES OIT PM|
|Ben Williams	|Compliance & Internal Control|
|Jim Weishaar		| | |
|Josh Faulkner	|ES Lead Eng|
|Mehedi Hasan | ES Developer|
|Matt Self | DSVA Lead|

POC for ES failures/downtime are Josh and Mehedi.

## How to Access

**Staging**

- https://staging.va.gov/health-care/apply/application/introduction
- To view from a logged out state, click **Start your application without signing in.**
- To view from a logged in state, click **Sign in to start your application**.
  - You can login with [any staging user](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/mvi-staging-users.csv), or create your own account. However, **you will need to be LOA3 to view the HCA from a logged in state**.

**Production**

- https://www.va.gov/health-care/apply/application/introduction
- To view from a logged out state, click **Start your application without signing in.**
- To view from a logged in state, click **Sign in to start your application**.
  - Currently, you can create your own account to login. However, **you will need to be LOA3 to view the HCA from a logged in state**.

## Narrative
- HCA background: https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-1.0/product/originalreadme.md
## Current Status

As of May 2019, the Dragons/Personalization team is working to implement following updates to the HCA:

*Phase 1 (launched June 13 2019)*

- Prior to a user accessing the HCA, we'll scan the enrollment system redesign (ESR) to see whether there is an existing record for them.
  - People not found in the ESR will get passed through to the application.
  - People found in the ESR will be shown their existing health care status (note: logged out users will have to log in to see this status).
- Signed in users must now be LOA3 to access the HCA and their current status.

*Phase 2*

- Users will see their health care application status on the dashboard.
- Users who have been enrolled in VA health care will see a section to manage their health care benefits on their dashboard.

For more details, please see [the full product outline](hhttps://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/product/181023hcachanges.md).

## Service Level Objectives

| Service&#160;Level&#160;Indicator | Service Level Objective |
| :-------------------------------- | ----------------------- |
| Availability | Should not exceed 5% 5xx error rates (as a percent of all requests) for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L6) |
| Latency | Percent of requests served in under 2 seconds should not drop to or below 95% for more than 5 consecutive minutes<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/55354cd6cc325bb4a9672576006cbda14c0a7488/ansible/deployment/config/prometheus/rules/application.rules#L15) |
| Incident Response | Initial acknowledgement of the issue within 15 minutes of a triggered alert<br/>[Link to rule](https://github.com/department-of-veterans-affairs/devops/blob/2913da3512a65a8cb988ad189235794ed1067299/terraform/modules/pagerduty_team/main.tf#L21) |

## Possible KPIs (HCA Duplicate Submission effort)
### Objective
- Improve visibility into status of a HCA

#### KPI
~0% (assumption - b/c people have no where to see this, and when they call in, those people don’t either)
- Key Result (need to measure)
 1. call center data about complaints
 2. conversions to LOA3 on HCA page while signed in
 3. usage of the signed-out lookup

## Data Flow
Submission is currently an entirely synchronous process:

1. A User hits submit on the React form, and a JSON serialization is sent to the backend.
1. The backend validates the JSON data against a JSON-Schema found in vets-json-schema. If it fails, an error is returned and logged.
1. The JSON is transformed into a ruby hash by the HCA::EnrollmentSystem class
1. The hash is transformed into an XML/SOAP request by the HCA::Service class and a synchronous request is sent to the Enrollment System backend. If successful, we get a confirmation number that's logged.

## Monitoring
* The healthcheck makes a request periodically and will trigger a PagerDuty alert if there are issues.
* Submissions failures surface under Sentry. Validation failures can be found by http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=validation%3A%22health_care_application%22 and ES submission failures with http://sentry.vetsgov-internal/vets-gov/platform-api-production/?query=url%3A%22https%3A%2F%2Fapi.vets.gov%2Fv0%2Fhealth_care_applications%22

## Error Handling 
- Error handling can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/application/hca-2.0/design/error-handling.md)

## On Call Remediation
* Any extended prod downtime is largely out of our control as long as we have basic connectivity with the rest of the VA network.
* Because the form is a straight pass-through at the moment, there is no available remediation for failed submissions. It's possible to reach out to the developers of ES and request logs of the failures, which have tended to be the result of including elements that had blank values, the inverse of not including required elements when they had blank values, or not truncating long values appropriately. Again, there is *no retry* mechanism in place for submissions.

## Cheatsheet

* React code for HCA is at [vets-website/src/applications/hca/*](https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/applications/hca)
* Controller for HCA is [vets-api/app/controllers/v0/health_care_applications_controller](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/controllers/v0/health_care_applications_controller.rb)
* The JSON->XML transformation and submission code is in [vets-api/lib/hca/](https://github.com/department-of-veterans-affairs/vets-api/tree/master/lib/hca)
* Searching for `health_care_application` in Cloudwatch's vets-api.log files will return all the first line of requests. Successful submissions will have a line referencing the ID: `SubmissionID=NNNNNNNNNNN`

## Glossary
|Abbr| Full Term | Description |
|----|-----------|-------------|
| HCA| Health Care Application | Our frontend/backend |
| ES | Enrollment System | The system that we make our SOAP requests to for submissions and healthchecks |
| HEC| Health Eligibility Center |
