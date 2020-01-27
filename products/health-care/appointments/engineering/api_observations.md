This document details various challenges encountered during the redesign.

## Data structures are not optimized semantically:

1. Appointment Service Request

- OptionDate and OptionTime objects could be a complex object, or better abstracted.
- Date inconsistencies

```json
{ 
   "phoneNumber":"(111) 111-1111",
   "optionDate1":"11/29/2019",
   "optionTime1":"AM",
   "optionDate2":"No Date Selected",
   "optionTime2":"No Time Selected",
   "optionDate3":"No Date Selected",
   "optionTime3":"No Time Selected",
   "status":"Requested",
   "appointmentType":"Primary Care",
   "visitType":"Office Visit",
   "textMessagingAllowed":false,
   "purposeOfVisit":"Routine Follow up",
   "providerId":"0",
   "secondRequest":false,
   "secondRequestSubmitted":false,
   "requestedPhoneCall":false,
   "typeOfCareId":"323",
   "hasVeteranNewMessage":false,
   "hasProviderNewMessage":true,
   "providerSeenAppointmentRequest":false,
   "date":"2019-11-22 10:53:05 +0000",
   "assigningAuthority":"ICN",
   "systemId":"var",
   "objectType":"VARAppointmentRequest",
   "surrogateIdentifier":{ 

   },
   "facility":{ 
      "name":"DAYTSHR-Lima VA Clinic",
      "facilityCode":"984GB",
      "state":"OH",
      "city":"Lima",
      "parentSiteCode":"984",
      "objectType":"Facility"
   },
   "patient":{ 
      "displayName":"Morrison, Judy",
      "firstName":"Judy",
      "lastName":"Morrison",
      "dateOfBirth":"Apr 01, 1953",
      "patientIdentifier":{ 
         "uniqueId":"1259897978"
      },
      "ssn":"796061976",
      "inpatient":false,
      "textMessagingAllowed":false,
      "id":"1259897978",
      "objectType":"Patient"
   },
   "bestTimetoCall":[ 
      "Morning"
   ],
   "appointmentRequestDetailCode":[ 

   ]
}
```

2. other examples...

## Data structures not optimized in terms of the total number of requests needed to build common UIs.

Appointment list
- CC appointment
- VA appointments
- Requests

Follow up requests
- Clinic list
- Facility data

## Data types / Payloads inconsistent

1. I'll add a few different examples here.

## Error object inconsistencies

1. I'll add a few different examples here.

## Validation rules should be defined by shared services comprehensively; lots of examples where validation happens in Legacy but doesn't necessarily return an error from the API / shared service.

1. I'll add a few different examples here.

## Violations of common expectations.

1. When doing a POST request where a new resource is created, the HTTP response should be 201, and the payload should include a newly created ID and ideally a created_at datetime.

2. Validation errors (Unprocessable Entiry 422) are somewhat distinct from Bad Request (400), ideally they would be delineated as such.

3. When doing a PUT request, one should only need to include the id and the attributes they wish to change. For cancelling an appointment, there is no id, therefore we send the entire object?


