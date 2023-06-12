# BRD migration discovery

## Background:
- The Benefits Reference Data API used to live in EVSS.
- `vets-api` relied on EVSS BRD in a few places, but the only one that 526 relies on and that we are responsible for migrating is `DisabilityCompensationFormsController#separation_locations`

## Observations:
get separation_locations
- Lighthouse has a Benefits Reference Data API with the data needed to replace separation_locations
	- https://developer.va.gov/explore/benefits/docs/benefits_reference_data?version=current ?
- what is sent to EVSS?
	- Not much. Just the GET to url. 
		- wss-referencedata-services-web/rest/referencedata/v1/intakesites
	- Headers/body doesn't need anything like in other EVSS calls where ssn was passed? 
	- Note `get_separation_locations` method that speaks to EVSS:
```ruby
def get_separation_locations
	with_monitoring_and_error_handling do
		raw_response = perform(:get, 'intakesites')
		EVSS::ReferenceData::IntakeSitesResponse.new(raw_response.status, raw_response)
	end
end
```
- What does vets-api get from EVSS?
	- id: separationLocation.code,
	- label: separationLocation.description,

- What needs to be sent to Lighthouse?
	- Nothing included in the body.

```
# GET 'https://sandbox-api.va.gov/services/benefits-reference-data/v1/intake-sites'
```
	
 - Kyle's service
	- no need to change to `vets-api`?
	- Change to `vets-website`?
		- Example from [Service Branches](https://github.com/department-of-veterans-affairs/vets-website/blob/5e2ce2b52be3c9b5800ac72290af2edc729783d1/src/applications/disability-benefits/all-claims/utils/serviceBranches.js#LL38C7-L38C7) on how to leverage Kyle's service in `vets-website`.
	- The exception handling doesn't log the path?
- What does Lighthouse send back
```json
{
2  "totalItems": 0,
3  "totalPages": 0,
4  "links": [
5    {
6      "href": "p{ASCII}}}}}}}}}}}}}}}",
7      "rel": "p{ASC"
8    }
9  ],
10  "items": [
11    {
12      "id": 5674661,
13      "description": "AF Academy"
14    }
15  ]
16}
```

- In light of all the back and forth around Client Ids
	- If we simply leverage Kyle Sosskin's Service and the underlying Client Ids, minimal to no code change in vets-api
	- If we want/need a different Client Id, we'll need to make drastic changes to his service and configuration
- `DisabilityCompensationFormsController#separation_locations` also relies on Redis?

## Outstanding Questions
- Didn't Aurora say that Redis is a sort of misnomer and the code isn't actually engaging Redis? It looks real to me.
- Any concerns about sharing credentials?
	- In light of ITF debacle with shared credentials.
	- Kyle's code uses a Settings.lighthouse.api_key. But seems that's all it needs.
- Are we using the existing service or not?
