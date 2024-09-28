# Post 9/11 Enrollment Status Outline
- GitHub Label: GI Bill status
- Slack channel: [#gi-bill-status](https://dsva.slack.com/channels/gi-bill-status)
- URL: /education/gi-bill/post-9-11/ch-33-benefit
- Demo video link: n/a
- Keywords: Post 9/11, GI Bill status, Chapter 33

## Team
- VA
    - Policy Expert(s): Shay Norton-Leonard
- VA.gov
    - Product Owner: Andrea Schneider, DSVA / [Andrea.Schneider@va.gov](mailto:Andrea.Schneider@va.gov)
    - Product Manager: Mark Greenburg, Ad Hoc [mark.greenburg@adhocteam.us](mailto:mark.greenburg@adhocteam.us)
    - Sprint Team: Apps Team 1 "Unicorns" [Slack channel: [#unicorns-team](https://dsva.slack.com/channels/unicorns-team)](https://dsva.slack.com/messages/C5AGLBNRK)
    - Designer(s): Alex Taylor, Katelyn Caillouet
    - Content Writer(s): Peggy Gannon
    - Front-end Engineer(s): Ben Shyong, Chris Valarida, Dan Hinze
- EVSS: Michael Walker (Insignia / EVSS Sustainment) [Michael.Walker10@va.gov](mailto:Michael.Walker10@va.gov)
- LTS: Susan Ramley (BAH) [Susan.Ramaley@va.gov](mailto:Susan.Ramaley@va.gov)

## Keywords
GIBS, GI Bill, Statement of Benefits, GI Bill Status Tool, GIB Status

## Executive Summary

This is an integration with the EVSS CH33 service that provides information currently in eBenefits to Veterans logged into VA.gov at LOA3. This EVSS CH33 service in turns queries LTS (Long Term Solution), which is the VA database for edu benefits information.

Veterans check their Post-9/11 GI Bill Enrollment Status when they experience a disruption in their plan, rather than at the beginning of their educational journey. The primary use of this information is to verify or validate how much of their education benefit is remaining. Veterans take no additional actions from this information nor do they expect to do so; it is purely a status and information validation review.

## How To Test
Log into staging with idme: `staging.va.gov` using test account:
- email: vets.gov.user+229@gmail.com
- pw: [check the va.gov-team-sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

Navigate to `https://staging.va.gov/education/gi-bill/post-9-11/ch-33-benefit`
Click the green 'Check Your Status' button

## User Problem Statement

As a veteran, I need to know my percent eligibility for education benefits and when I need to use them by, so that I can plan for my education.

Please note that *no other actor besides a Veteran* is a consideration at this time.  This restriction will not explicitly change until the overall focus of vets.gov changes to serve the needs of multiple user types.

## Solution Goals


### User Goals
- Successfully and easily find the right tool, and check the status of their education benefits
- Feel confident that the information being provided about my eligibility and time remaining are accurate
- Get and keep copy of my status for my reference and outside use

### Business Goals
- Increase engagement on the online platform
- Build trust with customers (Veterans)

## Assumptions
Veterans want to know how much of their education benefit is remaining.
Veterans want to apply to get this education benefit.
Veterans are looking for this information under education benefits.
Veterans visit this page at the beginning of their education to plan their education path.
Veterans revisit this page when there is a disruption in their plan.
Veterans know they are eligible for this benefit before they search for this information.

## Requirements
* The Post-9/11 Enrollment Status information will be retrieved from the service provided by the EVSS team:
  * Offical Name of Veteran, retrieved by this service
  * Date of Birth of Veteran, retrieved by this service
  * VA File Number, retrieved by this service
  * Regional Processing Office, retrieved by this service
  * Enrollment Information, retrieved by this service
  * Benefit Level, retrieved by this service
  * Enrollment History, retrieved by this service
* For any information expected above but not provided from the service call, users will be presented with informational messages in plain language directing them to possible remedies.
* A logged in user identity proofed at LOA3 and with a correlated identity in MVI can access this information easily:
  * from their user profile
  * while browsing educational benefits information at vets.gov overall
  * while using the GI Bill Comparison Tool
* A logged in user identity proofed at LOA3 but without a correlated identity in MVI will not be provided links or access to this information:
  * from their user profile
  * while browsing educational benefits information at vets.gov overall
  * while using the GI Bill Comparison Tool
* An anonymous user (not logged in) will be prompted to login to view this information:
  * while browsing educational benefits information at vets.gov overall
  * while using the GI Bill Comparison Tool
* Basic click tracking is in place for interactions.
* 508 compliance standards are met.

## Constraints
* Viewing Post-9/11 GI Bill Enrollment Status for a user other than the logged in, identity proofed Veteran
* There are no hard and fast deadlines for completing this work.  The vets.gov implementation team has an aspirational milestone of providing this functionality to Veterans by the end of June 2017.
* The vets.gov implementation team is constrained by the EVSS team for the creation of the backend services.
* A production release is constrained by an updated MOU, PIA, PTA, and ATO documents.

---

## Current Status
Veterans are able to log in and see their GI Bill Statement of Benefits, which basically provides the same information as a Certificate of Eligibility (COE), but is more up-to-date since it includes current data rather than the periodic data in the paper COE.
Dependents are *not* currently able to use this tool to find their benefits status.

There are also issues looking up ~1/3rd of veterans in LTS, because name, SSN, and DOB are all required to match between MVI (VA.gov data) and LTS, but LTS data is manually entered and error-prone. Thus, a significant number of veterans are experiencing issues viewing their Statement of Benefits on VA.gov even though they're eligible to view them. LTS is currently under code freeze until 2020, making this issue difficult to resolve, though workaround involving EVSS and VA.gov are being explored.

The tool also includes a troubleshooting wizard for any veteran who encounters an error (there are many reasons for errors in this tool - some veterans haven't waited 30 days, some have name discrepancies in LTS, some haven't applied, etc.).

## Error Handling
### `vets-website`
#### No EVSS service
If the user doesn't have all the necessary attributes on file, `vets-api` won't return `evss` in the list of services. When this happens, `vets-website` will display a message stating that "We weren't able to find [their] information" and give them a phone number to call if they think they should be able to access it.

#### Backend service error
If there's a backend service error (`503` or `504` response codes from `vets-api`), `vets-website` will show a message stating that "We’re having trouble finding your Post-9/11 GI Bill Statement of Benefits right now" and list some possible reasons why.

#### Backend authentication error
If `vets-website` recieves a `403` response from the API, a message stating only that 'We weren't able to find your records' is shown.

#### No Chapter 33 record available
If the API returns a `404` response, EVSS indicated there is no Chapter 33 record on file for the veteran. When this happens, `vets-website` will display an error message. Work is underway to supplement this error messaging with [a wizard](./design/Reducing%20Errors) that takes veterans through troubleshooting the issue (e.g., have you applied yet? have you waited 60 days? etc.).

##### An important note about 404 errors:
~38% of these errors result from a data mismatch between MVI and LTS - EVSS queries LTS (the data store for GI Bill benefits) using veteran identification data from MVI (which is passed to EVSS from VA.gov in auth headers). LTS presently requires first name, last name, SSN, and DOB to find a record, because SSNs are manually-entered (so often not correct) and the LTS team doesn't wish to risk exposing the wrong user's information. However, due to this query constraint, we receive a lot of `vet-not-found` 404 errors due to names not matching between MVI and LTS (e.g., formatting is different, name change as result of marriage, etc.). Work is underway with LTS and EVSS to change the query logic to use EDIPI as the only primary lookup ID, and fall back to SSN + DOB when EDIPI is not available.


#### Other reasons for failure
The default error handling on the `post911_gi_bill_status` endpoint query will display the same message as the backend service error.

## API Endpoints
### `vets-api`
- [`/v0/post911_gi_bill_status`](https://department-of-veterans-affairs.github.io/va-digital-services-platform-docs/api-reference/#/benefits_status/getPost911GiBillStatus)
### `vets-api` calls
- The EVSS Chapter 33 service which currently sits at [`"#{Settings.evss.url}/wss-education-services-web/rest/education/chapter33/v1"`](https://github.com/department-of-veterans-affairs/vets-api/blob/962de92589c7d5e2f5354a39b64515f4eeda094d/lib/evss/gi_bill_status/configuration.rb#L14)

## Service Level Objectives (SLOs)
[Latency](https://github.com/department-of-veterans-affairs/devops/blob/516ecc7f89e0de00ed626a7663179a738321c000/ansible/deployment/config/prometheus/rules/application.rules#L51): >= 95% of requests should be served in under 20 seconds

[Error Rate](https://github.com/department-of-veterans-affairs/devops/blob/516ecc7f89e0de00ed626a7663179a738321c000/ansible/deployment/config/prometheus/rules/application.rules#L6): 5xx error rate should be <= 5% of total requests. 
