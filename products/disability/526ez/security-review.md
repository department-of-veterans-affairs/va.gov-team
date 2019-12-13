# Security Review

## Participants

- James Kassemi
- Alastair Dawson
- Chris Valarida

## Overview

* All functionality gated by sign-in
* LOA3 sign-in
* User must pass EVSS policy
   * EDIPI
   * SSN
   * Participant ID (CorpDB ID)
* If intent to file exists, it looks it up. If you don't have one, it will create one.
* Prefill from EMIS, PPIU
* All payment information is masked on the backend before sent to the client.
* For the all-claims form, the user will be able to edit it.
* Standard save in progress form functionality
* On submit, requests to the API, background job created, returns an identifier to the client
* UUID for the background job, which is the job from sidekiq.
* SIP saved for up to a year, may contain personal information. Received an extension outside of the default.
* Could be a job in the dead queue with auth headers, so we need to be careful about monitoring these processes for the foreseeable future. Will be updating to use a record identifier.

## Interfaces Documented

* Swagger documentation in place

## Data Sensitivity Overview

* Medical record information stored in SIP
* Medical record information stored in Redis for claims submission
* Masking at server for payment information to the client
* FUTURE: payment information updates

## User Authentication

* LOA3 requirement for all endpoints

## User Authorization

* `EVSSPolicy`

## Data Scoping

* All data requests scoped to either user or the background job UUID

## Logging

* Reverse proxy logs requests
* Rails logs for each request, and for job tracking
* Breakers-based instrumentation
* ITF events captured in Google - just the event string

## Breakers

* Common client integration, breakers by default

## Alerts

* Metrics configured for submissions, grafana dashboard configured, no alerts yet.

## Rate Limits

- [ ] Minor (Security) - suggested rate limits for the submission status endpoint. Status endpoint is gated by `EVSSPolicy` check, so this is suitably mitigated for production.
- [ ] Minor (Performance) - Exponential Backoff for claims submission status check

## ATO Review
