# Security Review

## Mar 13, 2018

### Participants

* Alastair Dawson
* James Kassemi
* Ed Paget
* Bill Ryan
* Chris Valarida

- [ ] Interfaces Documented

* https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/swagger/requests/appeals.rb
* External service interface documentation: https://app.swaggerhub.com/apis/dsva-appeals/appeals-status/2.0.0

- [ ] Data Sensitivity Overview

* Appeals provides an endpoint that return appeals information which can includes PII/PHI. Cached in the appeals service.
* specific details tbd...
* *Full data field documentation pending*

- [ ] User Authentication

* The controller action requires user authentication.

- [ ] User Authorization

* The controller action requires that the user is authorized under the [the Appeals policy](https://github.com/department-of-veterans-affairs/vets-api/blob/master/app/policies/appeals_policy.rb).

- [ ] Data Scoping

* All requests for sensitive information are scoped to the currently authenticated user. 
* Appeals header (SSN) are utilized for each request to the appeals service.
* TODO maybe override perform to scope to user (make it fail safe)

- [ ] Logging

* Requests to Appeals are made through the common client.
* Total success/failure are instrumented with `Common::Client::Monitoring`
* Errors are logged to Sentry. No PII or any user-specific information is captured in Sentry
* TODO: Globally tag requests to user

- [ ] Breakers

* Breakers is utilized for external service requests
* Uses default timeout (15s)

- [ ] Alerts

* Appeals v2 alerts carry over from V1 and are given a `component` label in prometheus, and are subject to the `ApplicationErrorRateCritical` and `ComponentLatencyCritical` alerts triggered by revproxy measurements
* Breakers-based alerts may be desirable 

- [ ] Rate Limits

* General rate limiting was discussed, but is not currently implemented. Not considered a launch blocker at this point, since no requirements were made prior to feature development
* Load testing has been performed; we should use those values to guide future rate limiting discussions for this feature (https://github.com/department-of-veterans-affairs/devops/pull/2543)

- [ ] ATO Review

### Notes

Revoke token?
How do agree on a token?
Rollover?
Always parse and reserialize
Double check on client caching
WASA scan
