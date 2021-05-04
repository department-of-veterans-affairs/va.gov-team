# Postmortem for API calls to deprecated V0

Date: April 12, 2021

Authors: Facilities team 

Status: Resolved

## What happened?
On March, Dave Conlon noticed an error in the "other locations" area of the VAMC Locations page. The integration was broken because the "other facilities" widget responsible for this content was still pointed to the deprecated V0 endpoint. The bug is documented in Github [#22107](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22107). 

## Background
_What context is needed to understand this situation?_

Before deprecating V0, we did our due diligence to identify all calls pointing to V0. We updated endpoints for calls made by the Facilities front end. We informed another team of the upcoming deprecation when an unexpected call pointing to V0 was discovered. We made announcements at Team of Teams and other forums to notify any other impacted teams. 

Headers are used to identify the source of API calls and we routinely monitor those under our control. However, the [Grafana dashboard](http://grafana.vfs.va.gov/d/zGS4XzkMk/backend-to-frontend-app-mapping?orgId=1&var-data_source=Prometheus%20(Production)&var-backend_controller=v1%2Ffacilities%2Fva&var-backend_controller=v1%2Ffacilities%2Fccp&var-backend_controller=v1%2Ffacilities%2Fva_ccp&var-frontend_app=All) only represents a 2 week period so we may not catch an infrequent occurrence in our monitoring. 

We ignore unspecified headers (those outside our control). However, it is difficult to know the full area of responsibility since there is not centralized listing for the front end. We continue to stumble across "facilities team owned" (or "facilities team responsible") code scattered across directories. 

The PACT server can be used as Rails server for unit and integration testing but will need to know all the calls and logical expected answers. For PACT to have caught this error, we would have needed a test for the V0 pathway.  There has not been widespread adoption of PACT and comprehensive coverage will require a thorough analysis of code. 

API call impacted: https://api.va.gov/v1/facilities/va?ids=vc_0211V,vc_0233V,vc_0220V,nca_925,vba_311

By reviewing the [header documentation](https://github.com/department-of-veterans-affairs/vets-website/search?p=1&q=Source-App-Name), we learned that the page is specified as a static page and not identified as Facilities page, therefore it was not on our radar. 


Code
https://github.com/department-of-veterans-affairs/vets-website/blob/master/src/applications/letters/utils/helpers.jsx#L10


## Resolution
_What steps were taken to resolve the issue?_
As soon as the issue was identified, it was prioritized in the sprint. Within the hour, the root cause was identified and a fix was merged. The code was sent to production during the next routine deploy. 


## Action Items

| Description                    | Explanation    |  Issue # |
| ------------------------------ | ------- | ------------ | 
| Add comprehensive PACT test coverage  | This does not represent a small lift as all VCR tapes will need to be updated | May not do | 
| Add integration tests to confirm page areas are populated  | Because of the use of mock data, integration tests will not identify broken API integrations | Will not do |
| Change app name  | This is a simple step which will improve identification of calls made by our products | [#23103](https://github.com/department-of-veterans-affairs/va.gov-team/issues/23103) |
