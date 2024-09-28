# Onboarding to Facilities API for dynamic search

## Build v1 API
- shouldn't be much if any change vs the existing v0
- no problem hardcoding requests to the maximum amount (1000 per-page)
- confusingly, our API v1 hits VA's API v0. maybe worth aligning? or make the new one v1.1 so if VA v2 releases we can make a v2?
- test in Sandbox
- relevant info on this [past ticket #46243](https://github.com/department-of-veterans-affairs/va.gov-team/issues/46243)

## Update site to consume API:
- wrap in a flag
     - should this be a release flag for ease of rollout, that would then go away?
     - or should this be a feature flag so we can fall back to the JSON if the API fails?
- remember to set the flag indicating that the data came from the API so validation isn’t limited to the facilities in vets-json-schema

## Response structure:
- body json:
     - data: array of facilities
     - links: pagination links (not useful for us since we always show all)
     - meta: pagination info (includes totalEntries if we ever need that)
- body > data relevant fields:
     - id
     - attributes > name

## Production access [link](https://developer.va.gov/onboarding/request-prod-access)
- turnaround should be quick since we've had this access before and it's open data
- Section 508 compliance: I'm told we answer "No" for an API. Is it safe to assume the existing site was built compliant?
- rate limit is 60 requests / minute - should be plenty; according to the funnel in DataDog I'm seeing ~100 requests / *hour* => average 1.7 reqs/min during peak times (weekday 11am)
- Marmoset team (api@va.gov) will contact us after we apply to help onboard and get our API Key to production
- due to Facilities being open data, demo might not be needed

## Contacts:
- Joseph Justice
- Adam Stilton (Tech Lead)
- [#api-facilities](https://dsva.slack.com/archives/CJ162GDDJ)

