
### Q1: How does VAOS determine which facilities to display?

VAOS displays facilities based on data returned from the following endpoints:

`/v0/user` – Returns array of facilities that the veteran is registered at

```json 
      "vaProfile": {
        "status": "OK",
        "birthDate": "19620101",
        "familyName": "Mhvpsim",
        "gender": "F",
        "givenNames": ["Psim"],
        "isCernerPatient": false,
        "facilities": [
          { "facilityId": "984", "isCerner": false },
          { "facilityId": "983", "isCerner": false }
        ],
        "vaPatient": true,
        "mhvAccountState": "MULTIPLE"
      },
```

Once the veteran has started the scheduling flow and selected a *Type of Care* and presses *Continue* VAOS will make requests to the following endpoints:

- `/vaos/v2/appointments?_include=facilities,clinics&start=2023-03-28T07:00:00Z&end=2024-03-28T07:00:00Z&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled` (a variation of this is requested three times in order to get the last three years of appointment history)
- `/vaos/v2/facilities?children=true&ids[]=984&ids[]=983` (returns a list of facilities and child facilities)
- `/vaos/v2/scheduling/configurations?facility_ids[]=983&facility_ids[]=984&cc_enabled=true` (returns a list of scheduling configurations for facilities and child facilities)
- `/vaos/v2/community_care/eligibility/PrimaryCare` (returns CC eligibility status for type of care)
- `/vaos/v2/eligibility?facility_id=983&clinical_service_id=primaryCare&type=direct` (after facility is selected, checks direct scheduling eligibility)
- `/vaos/v2/eligibility?facility_id=983&clinical_service_id=primaryCare&type=request` (after facility is selected, checks request scheduling eligibility)

### Q2: How are the facilities sorted when landing on the `Choose your VA location` page?

- Facilities are initially sorted by distance from veteran residential address, starting with the closest.
- The distance is calculated as a straight line between the lat/lng coordinates of the `residentialAddress.latitude`/`residentialAddress.longitude` provided in `vet360ContactInformation` returned from the `/v0/user` endpoint.
- VAOS does not do any distance calculation based on routing (i.e. driving directions)

### Q3: What are the alerts that are triggered for the page?

#### Generic data fetching error ([`hasDataFetchingError`](https://github.com/department-of-veterans-affairs/vets-website/blob/4390884cde4979d93c8dc39fa7fb55159dc54ec4/src/applications/vaos/new-appointment/components/VAFacilityPage/VAFacilityPageV2.jsx#L140))

![generic-data-fetching-error](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/2c5abd03-dc50-4584-a253-c98d28d17e15)


**Eligibility reasons that are logged to browser console in local development environment**

```js
  const reasonMapping = {
    [ELIGIBILITY_REASONS.notEnabled]:
      'The FE has disabled direct scheduling via feature toggle',
    [ELIGIBILITY_REASONS.notSupported]:
      'Disabled in VATS for this location and type of care',
    [ELIGIBILITY_REASONS.noRecentVisit]:
      'The var-resources visited in past months service indicated that there has not been a recent visit',
    [ELIGIBILITY_REASONS.overRequestLimit]:
      'The var-resources request limit service indicated that there are too many outstanding requests',
    [ELIGIBILITY_REASONS.noClinics]:
      'The var-resources clinics service did not return any clinics',
    [ELIGIBILITY_REASONS.noMatchingClinics]:
      'The FE could not find any of the clinics returned by var-resources in the past 24 months of appointments',
    [ELIGIBILITY_REASONS.error]:
      'There were errors trying to determine eligibility',
  };
```

___

#### No valid VA facilities ([`noValidVAFacilities`](https://github.com/department-of-veterans-affairs/vets-website/blob/4390884cde4979d93c8dc39fa7fb55159dc54ec4/src/applications/vaos/new-appointment/components/VAFacilityPage/VAFacilityPageV2.jsx#L155))

- Shows `<NoValidVAFacilities>` component
- Shows two closest facilities if there is an address to sort by, otherwise shows the first 5 facilities in alphabetical order
- Messaging: *None of the facilities where you receive care accepts online appointments for `typeOfCare`*… *What you can do…*

![va-facility-not-found](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/fb410564-4537-463e-9de2-4174ca27fbdf)

___

#### Single facility eligibility check but cannot schedule at facility ([`singleValidVALocation && !canScheduleAtChosenFacility && !!eligibility`](https://github.com/department-of-veterans-affairs/vets-website/blob/4390884cde4979d93c8dc39fa7fb55159dc54ec4/src/applications/vaos/new-appointment/components/VAFacilityPage/VAFacilityPageV2.jsx#L179))

- Shows `<SingleFacilityEligibilityCheckMessage>` component
- Messaging: *We found one facility that accepts online scheduling for this care…*

Displays the following eligibility messages:

Does not have a recent appointment (with variable month requirement), so not eligible (*We couldn’t find a recent appointment at this location*)

![no-recent-appointment](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/aaeebb22-5001-4df3-b1e7-78cbe9822ac1)


Facility does not accept online scheduling for type of care (*This facility doesn’t accept online scheduling for this care*)

![no-online-scheduling-for-facility](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/2e6b69d8-96c2-4575-9795-4eb7bbc758a4)


Facility does not have any available clinics that support online scheduling for particular type of care (*We couldn’t find a clinic for this type of care*)

![clinic-not-found-type-of-care](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/1f10f2a5-e46d-4926-b4e0-d5d3fac2b0c8)


Something went wrong with eligibility check (*We’re sorry. We’ve run into a problem. Something went wrong on our end. Please try again later.*)

***(Still trying to get a screenshot for this one - RS)***

Over request limit for facility (*Our records show that you have an open appointment request at this location. You can’t request another appointment until you schedule or cancel your open requests.*)

![request-limit-reached](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/ca42aad4-8b2a-42bc-b9d4-39a191e7812f)


___

#### Single valid VA facility ([`singleValidVALocation`](https://github.com/department-of-veterans-affairs/vets-website/blob/4390884cde4979d93c8dc39fa7fb55159dc54ec4/src/applications/vaos/new-appointment/components/VAFacilityPage/VAFacilityPageV2.jsx#L203-L204))

- Displays `<SingleFacilityAvailable>` component
- Messaging: (*We found one VA facility for your `typeOfCare` appointment.*)

![single-va-facility-found](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/d702764e-68f5-4dce-97b9-95243016961a)


### Q4: How does the sorting of facilities work by your current location?

- This uses the `navigator.geolocation` [property](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation) – the geolocation object provided by the user’s browser/OS.
- The distance calculation is the straight line distance between the the lat/lng provided by the browser and the lat/lng of the given facility.
- If the programatic request for the user’s current location fails (e.g. no location available, user denied permission, user system settings denied permission) an alert dialog is displayed:

![location-blocked](https://github.com/department-of-veterans-affairs/va.gov-team/assets/587812/82799dce-b8e9-493d-954f-dc091e9da8fe)


### Q5: What is the max number of facilities that is shown by default (before hitting the link to see more facilities)?

Five facilities are shown by default. The number is set by a constant:

[`const INITIAL_FACILITY_DISPLAY_COUNT = 5;`](https://github.com/department-of-veterans-affairs/vets-website/blob/c15e0b6d4e45739e61723ed77d3dab49a5136900/src/applications/vaos/new-appointment/components/VAFacilityPage/FacilitiesRadioWidget.jsx#L18)

### Q6: What are the checks once user clicks `Continue` (To determine the user's path for direct scheduling or request)?

#### Direct Scheduling Scenario

User selects *Primary Care* and *Cheyenne VA Medical Center*

Eligibility check is performed for direct scheduling and returns `true`

`GET /vaos/v2/eligibility?facility_id=983&clinical_service_id=primaryCare&type=direct HTTP/1.1`

```json
{
	"data": {
		"attributes": {
			"type": "direct",
			"clinicalServiceId": "primaryCare",
			"eligible": true
		}
	}
}
```

Eligibility check is performed for requests, and returns `true`

`GET /vaos/v2/eligibility?facility_id=983&clinical_service_id=primaryCare&type=request HTTP/1.1`

```json 
{
	"data": {
		"attributes": {
			"type": "request",
			"clinicalServiceId": "primaryCare",
			"eligible": true
		}
	}
}
```

Clinics are requested and clinics are returned. User can direct schedule.

`GET /vaos/v2/locations/983/clinics?clinical_service=primaryCare HTTP/1.1`

```json
{
	"data": [
		{
			"id": "308",
			"type": "clinics",
			"attributes": {
				"vistaSite": 983,
				"id": "308",
				"serviceName": "Green Team Clinic1",
				"physicalLocation": "Green Tower, 1st Floor",
				"phoneNumber": null,
				"stationId": "983",
				"stationName": "CHYSHR-Cheyenne VA Medical Center",
				"primaryStopCode": 323,
				"primaryStopCodeName": "PRIMARY CARE/MEDICINE",
				"secondaryStopCode": null,
				"secondaryStopCodeName": "*Missing*",
				"patientDirectScheduling": true,
				"patientDisplay": null,
				"char4": null
			}
		},
		{
			"id": "455",
			"type": "clinics",
			"attributes": {
				"vistaSite": 983,
				"id": "455",
				"serviceName": "CHY PC CASSIDY",
				"physicalLocation": "CASSIDY PAVILION",
				"phoneNumber": null,
				"stationId": "983",
				"stationName": "CHYSHR-Cheyenne VA Medical Center",
				"primaryStopCode": 323,
				"primaryStopCodeName": "PRIMARY CARE/MEDICINE",
				"secondaryStopCode": null,
				"secondaryStopCodeName": "*Missing*",
				"patientDirectScheduling": true,
				"patientDisplay": null,
				"char4": null
			}
		},
		{
			"id": "457",
			"type": "clinics",
			"attributes": {
				"vistaSite": 983,
				"id": "457",
				"serviceName": "Green Team Clinic2",
				"physicalLocation": "Green Tower, 2nd Floor",
				"phoneNumber": null,
				"stationId": "983",
				"stationName": "CHYSHR-Cheyenne VA Medical Center",
				"primaryStopCode": 323,
				"primaryStopCodeName": "PRIMARY CARE/MEDICINE",
				"secondaryStopCode": 117,
				"secondaryStopCodeName": "NURSING (2ND ONLY)",
				"patientDirectScheduling": true,
				"patientDisplay": null,
				"char4": null
			}
		},
		{
			"id": "848",
			"type": "clinics",
			"attributes": {
				"vistaSite": 983,
				"id": "848",
				"serviceName": "CHY PC VAR2",
				"physicalLocation": "ARROWHEAD WING, Suite A",
				"phoneNumber": null,
				"stationId": "983",
				"stationName": "CHYSHR-Cheyenne VA Medical Center",
				"primaryStopCode": 323,
				"primaryStopCodeName": "PRIMARY CARE/MEDICINE",
				"secondaryStopCode": null,
				"secondaryStopCodeName": "*Missing*",
				"patientDirectScheduling": true,
				"patientDisplay": null,
				"char4": null
			}
		}
	]
}

```

#### Request Scheduling Scenario

User selects *Primary Care* and *Fort Collins VA Medical Center*

Eligibility check is performed for direct scheduling and returns `true`

`GET /vaos/v2/eligibility?facility_id=983GC&clinical_service_id=primaryCare&type=direct HTTP/1.1`

```json 
{
	"data": {
		"attributes": {
			"type": "direct",
			"clinicalServiceId": "primaryCare",
			"eligible": true
		}
	}
}
```

Eligibility check is performed for requests, and returns `true`

`GET /vaos/v2/eligibility?facility_id=983GC&clinical_service_id=primaryCare&type=request HTTP/1.1`

```json 
{
	"data": {
		"attributes": {
			"type": "request",
			"clinicalServiceId": "primaryCare",
			"eligible": true
		}
	}
}
```

No clinics are returned, user can make a request

`GET /vaos/v2/locations/983GC/clinics?clinical_service=primaryCare HTTP/1.1`

```json 
{
	"data": []
}
```

### Q7: Is there any logic to prioritize the display of facilities where a veteran has been seen in the past?

No, not currently.
