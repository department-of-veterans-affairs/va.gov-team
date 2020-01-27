This document details various challenges encountered during the redesign.

In general, there are some things that VA.gov does differently.

1. The routes are distinctly different. Duh. But there's more to that. We don't include ICN, EDIPI, other data in the route. In fact the ruby middleware doesn't even expose this programatically to the FE.

How does that work?

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

1. When fetching messages we receive a lot of extraneous data; some of this data is useful such as metadata related to the size of the array, but interestingly when the request doesn't have any data, all we get back is an empty payload: {}. This is problematic, because we are parsing for an `"appointmentRequestMessage":` array, but that object doesn't exist at all.

```json
{ 
   "selfUri":"https://var-resources-v4.sqa.svc.cluster.local/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages",
   "selfLink":{ 
      "rel":"self",
      "href":"https://var-resources-v4.sqa.svc.cluster.local/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages",
      "objectType":"AtomLink"
   },
   "empty":false,
   "appointmentRequestMessage":[ 
      { 
         "dataIdentifier":{ 
            "uniqueId":"8a4886886e4c8e22016e5bee49c30007",
            "systemId":"var"
         },
         "patientIdentifier":{ 
            "uniqueId":"1012845331V153043",
            "assigningAuthority":"ICN"
         },
         "surrogateIdentifier":{ 

         },
         "messageText":"Testing",
         "messageDateTime":"11/11/2019 12:26:13",
         "senderId":"1012845331V153043",
         "appointmentRequestId":"8a4886886e4c8e22016e5bee49c30007",
         "date":"2019-11-11T12:26:13.931+0000",
         "patientId":"1012845331V153043",
         "uniqueId":"8a4886886e4c8e22016e5bee49c30007",
         "assigningAuthority":"ICN",
         "systemId":"var",
         "selfUri":"/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages",
         "selfLink":{ 
            "rel":"self",
            "href":"/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages",
            "objectType":"AtomLink"
         },
         "objectType":"VARAppointmentRequestMessage",
         "link":[ 
            { 
               "rel":"self",
               "href":"/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages",
               "objectType":"AtomLink"
            }
         ]
      }
   ],
   "size":1,
   "objectType":"VARAppointmentRequestMessages",
   "link":[ 
      { 
         "rel":"self",
         "href":"https://var-resources-v4.sqa.svc.cluster.local/var/VeteranAppointmentRequestService/v4/rest/appointment-service/patient/ICN/1012845331V153043/appointment-requests/system/var/id/8a4886886e4c8e22016e5bee49c30007/messages",
         "objectType":"AtomLink"
      }
   ]
}
```

## Error object inconsistencies

1. Sometimes we get html.

```
'<html>\r\n<head><title>500 Internal Server Error</title></head>\r\n<body>\r\n<center><h1>500 Internal Server Error/html>\r\n'
```

2. Sometimes we get a validation error.

```json
{
 "requestObject" : {
   "dataIdentifier" : {
     "uniqueId" : "8a4886886e4c8e22016ef6a8b1bf0396",
     "systemId" : "var"
   },
   "patientIdentifier" : {
     "uniqueId" : "1012845331V153043",
     "assigningAuthority" : "ICN"
   },
   "surrogateIdentifier" : { },
   "messageText" : "this is my third message",
   "messageDateTime" : "12/11/2019 15:41:36",
   "senderId" : "1012845331V153043",
   "appointmentRequestId" : "8a4886886e4c8e22016ef6a8b1bf0396",
   "date" : "2019-12-11T15:41:36.534+0000",
   "patientId" : "1012845331V153043",
   "uniqueId" : "8a4886886e4c8e22016ef6a8b1bf0396",
   "assigningAuthority" : "ICN",
   "systemId" : "var",
   "objectType" : "VARAppointmentRequestMessage",
   "link" : [ ]
 },
 "errors" : [ {
   "fieldName" : "error",
   "errorMessage" : "Maximum allowed number of messages for this appointment request reached."
 } ],
 "objectType" : "ValidationErrors",
 "empty" : false
}
```

3. Sometimes we get a string. Neither HTML nor JSON.

```
This appointment cannot be booked using VA Online Scheduling.  Please
        contact the site directly to schedule your appointment and advise them to
        <b>contact the VAOS Support Team for assistance with Clinic configuration.</b>
        <a class="external-link" href="https://www.va.gov/find-locations/">VA Facility
        Locator</a>
```

### Ideally we would get consistent error payloads having:

1. A sensible HTTP status code. 400, 404, 422, 409, 500, 502, etc
2. A consistent data structure having:
   1. A distinct code such as VAR1234 that corresponds to whatever unique message is shown.
   2. A distinct title.
   3. A distinct description / detail message (something human readable).
   4. A distinct source: this can be more developer friendly or just a stacktrace partial.

## Validation rules should be defined by shared services comprehensively; lots of examples where validation happens in Legacy but doesn't necessarily return an error from the API / shared service.

1. Preferences doesn't require email address on the BE, but Legacy VAOS was doing a validation on this field. This ended up breaking something in scheduling manager.

## Violations of common expectations.

1. When doing a POST request where a new resource is created, the HTTP response should be 201, and the payload should include a newly created ID and ideally a created_at datetime.

2. Validation errors (Unprocessable Entiry 422) are somewhat distinct from Bad Request (400), ideally they would be delineated as such.

3. When doing a PUT request, one should only need to include the id and the attributes they wish to change. For cancelling an appointment, there is no id, therefore we send the entire object?


