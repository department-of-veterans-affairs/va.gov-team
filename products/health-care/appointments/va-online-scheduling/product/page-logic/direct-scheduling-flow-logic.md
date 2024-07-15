### VAOS Direct Schedule Workflow 

This content has been moved to the [VAOS feature reference](../../feature-reference/README.md)

You can delete this page after 02/01/2024.

<!--
### Technical Spec 

- Once the user is authenitcated and logs in, the code makes a call to the user endpoint that returns user `vaProfile` which contains user registered facilities ID. In staging, it is 983 and 984

Sample response: 
```
https://staging-api.va.gov/v0/user

get the data>attribute>vaProfile to see all registered facilities
{
    "status": "OK",
    "birthDate": "19620101",
    "familyName": "Mhvpsim",
    "gender": "F",
    "givenNames": [
        "Psim"
    ],
    "isCernerPatient": false,
    "facilities": [
        {
            "facilityId": "984",
            "isCerner": false
        },
        {
            "facilityId": "983",
            "isCerner": false
        }
    ],
    "vaPatient": true,
    "mhvAccountState": "MULTIPLE"
}
```

- Once the user lands on the VAOS homepage,  the appointment endpoint returns future booked appts (previous month through  1yr from next month) and proposed appt (3 months prior through next month) which contains locationID aka the facilityID (ie  984) along with the facility name (Dayton VA Medical Center). **Getting a tally of future appointment facility name may be a solution of getting the most preferred facility.**  

Sample Response: One appointment being returned

```
https://staging-api.va.gov/vaos/v2/appointments?_include=facilities,clinics&start=2022-10-30&end=2023-12-29&statuses[]=booked&statuses[]=arrived&statuses[]=fulfilled&statuses[]=cancelled

{
    "id": "142100",
    "type": "appointments",
    "attributes": {
        "id": "142100",
        "identifier": [
            {
                "system": "http://med.va.gov/fhir/urn/vaos/vista/984/appointment/id",
                "value": "3294;20221107.080000"
            }
        ],
        "kind": "clinic",
        "status": "booked",
        "serviceType": "optometry",
        "patientIcn": "1013124304V115761",
        "locationId": "984",
        "clinic": "3294",
        "start": "2022-11-07T13:00:00Z",
        "end": "2022-11-07T14:00:00Z",
        "minutesDuration": 60,
        "slot": {
            "id": "3230323231313037313330303A323032323131303731343030",
            "start": "2022-11-07T13:00:00Z",
            "end": "2022-11-07T14:00:00Z"
        },
        "cancellable": true,
        "extension": {
            "ccLocation": {
                "address": {}
            },
            "vistaStatus": [
                "NO ACTION TAKEN"
            ]
        },
        "serviceName": "DAY OPTOM/CONTACT LENS",
        "physicalLocation": "BLDG 330, 6 NORTH",
        "location": {
            "id": "984",
            "type": "appointments",
            "attributes": {
                "id": "984",
                "vistaSite": "984",
                "vastParent": "984",
                "type": "va_health_facility",
                "name": "Dayton VA Medical Center",
                "classification": "VA Medical Center (VAMC)",
                "timezone": {
                    "timeZoneId": "America/New_York"
                },
                "lat": 39.74935,
                "long": -84.2532,
                "website": "https://www.dayton.va.gov/locations/directions.asp",
                "phone": {
                    "main": "937-268-6511"
                },
                "physicalAddress": {
                    "type": "physical",
                    "line": [
                        "4100 West Third Street"
                    ],
                    "city": "Dayton",
                    "state": "OH",
                    "postalCode": "45428-9000"
                },
```

-  User clicks the `START SCHEDULING` button, and select the type of care (ie primary care) will return appointment endpoint call of past appointments up to previous 36 months
-  User clicks `CONTINUE` button on Type of Care page will make the configuration call of user's registered facilities thus returning the direct schedule status (enabled or disabled). AND it makes the call to facility endpoint that returns detailed information of user's registered facilities and its children facilities. 
-  
-  Sample Response: 12 facilities returned. 
```
https://staging-api.va.gov/vaos/v2/facilities?children=true&ids[]=984&ids[]=983

{
    "id": "984",
    "type": "facilities",
    "attributes": {
        "id": "984",
        "vistaSite": "984",
        "vastParent": "984",
        "type": "va_health_facility",
        "name": "Dayton VA Medical Center",
        "classification": "VA Medical Center (VAMC)",
        "timezone": {
            "timeZoneId": "America/New_York"
        },
        "lat": 39.74935,
        "long": -84.2532,
        "website": "https://www.dayton.va.gov/locations/directions.asp",
        "phone": {
            "main": "937-268-6511"
        },
        "hoursOfOperation": null,
        "mailingAddress": null,
        "physicalAddress": {
            "type": "physical",
            "line": [
                "4100 West Third Street"
            ],
            "city": "Dayton",
            "state": "OH",
            "postalCode": "45428-9000"
        },
        "mobile": null,
        "healthService": [
            "Audiology",
            "Cardiology",
            "DentalServices",
            "Dermatology",
            "Gastroenterology",
            "Gynecology",
            "MentalHealthCare",
            "Nutrition",
            "Ophthalmology",
            "Optometry",
            "Orthopedics",
            "Podiatry",
            "PrimaryCare",
            "SpecialtyCare",
            "Urology",
            "WomensHealth"
        ],
        "operatingStatus": null
    }
}
```

-  If the user is Community Care eligible, then the user is given the option to choose VA clinic flow or CC facility flow (may need to add CC eligibility logic) 
-  User selects VA clinic, then the code makes a call to the configuration endpoint to all register facilities and its child facilities. 
-  
-  Sample Response: Returned call showing primary care is enabled at facility 983 (staging) 

```
https://staging-api.va.gov/vaos/v2/scheduling/configurations?facility_ids[]=983QE&facility_ids[]=983QA&facility_ids[]=983GD&facility_ids[]=983GC&facility_ids[]=983GB&facility_ids[]=983&facility_ids[]=984&facility_ids[]=984GF&facility_ids[]=984GC&facility_ids[]=984GB&facility_ids[]=984GD&facility_ids[]=984GA

{
    "id": "primaryCare",
    "name": "Primary Care",
    "stopCodes": [
        {
            "primary": "322",
            "defaultForRequests": false
        },
        {
            "primary": "323",
            "defaultForRequests": false
        },
        {
            "primary": "350",
            "defaultForRequests": false
        }
    ],
    "direct": {
        "patientHistoryRequired": false,
        "canCancel": true,
        "enabled": true
    },
    "request": {
        "patientHistoryRequired": false,
        "patientHistoryDuration": 0,
        "submittedRequestLimit": 1,
        "enterpriseSubmittedRequestLimit": 1,
        "enabled": false
    }
}
```

-  On Choose a VA location page, the application will display facilities that are direct schedule enabled. 
-  User selects the facility (Cheyenne VAMC), then click `CONTINUE` button to get eligibly and clinics endpoints. 
  
Sample Response: Showing two clinics returned for primary care at Cheyenne VAMC. The display names are Green Team Clinic1 and CHY PC VAR2. 
   **Getting the PACT names does not surface until the clinic endpoint which is several clicks after selecting type of care followed by facility location then checking for direct schedule and eligibility**.

```
https://staging-api.va.gov/vaos/v2/locations/983/clinics?clinical_service=primaryCare

[
    {
        "id": "308",
        "type": "clinics",
        "attributes": {
            "vistaSite": 983,
            "id": "308",
            "serviceName": "Green Team Clinic1",
            "physicalLocation": null,
            "phoneNumber": null,
            "stationId": "983",
            "stationName": "CHYSHR-Cheyenne VA Medical Center",
            "primaryStopCode": 323,
            "primaryStopCodeName": "PRIMARY CARE/MEDICINE",
            "secondaryStopCode": null,
            "secondaryStopCodeName": "*Missing*",
            "patientDirectScheduling": null,
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
            "physicalLocation": null,
            "phoneNumber": null,
            "stationId": "983",
            "stationName": "CHYSHR-Cheyenne VA Medical Center",
            "primaryStopCode": 323,
            "primaryStopCodeName": "PRIMARY CARE/MEDICINE",
            "secondaryStopCode": null,
            "secondaryStopCodeName": "*Missing*",
            "patientDirectScheduling": null,
            "patientDisplay": null,
            "char4": null
        }
    }
]
```

-->
