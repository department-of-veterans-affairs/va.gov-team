Given:
Your application token is: 3Olp2DAjWDaI8B4vV4cHzHRJTYZO+XfMWEiVSGzFDYg
The mhv correlation id is: 12210827
The API base URL is:  https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/




______

Get Session
______

$ curl -v -X GET -H 'Accept: application/json' -H 'Content-Type: application/json' -H 'User-Agent: Vets.gov Agent' -H 'appToken: 3Olp2DAjWDaI8B4vV4cHzHRJTYZO+XfMWEiVSGzFDYg' -H 'mhvCorrelationId: 12210827' "https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/session"
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/session HTTP/1.1
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Content-Type: application/json
> User-Agent: Vets.gov Agent
> appToken: 3Olp2DAjWDaI8B4vV4cHzHRJTYZO+XfMWEiVSGzFDYg
> mhvCorrelationId: 12210827
>
< HTTP/1.1 200 OK
< Date: Wed, 28 Dec 2016 22:24:21 GMT
< Server: Apache/2.2.15 (Red Hat)
< X-Frame-Options: SAMEORIGIN
< Content-Length: 0
< Expires: Wed, 28 Dec 2016 22:34:22 GMT
< Token: OTc4NjU0MjE=LTrYkEyXC6MG0DtGjGFkRcFNamMcm2f00tpWb7XeGi0=
< Connection: close
< Content-Type: text/html; charset=UTF-8
<
* Closing connection 0

______

Get Extract Status List
______

curl -v -X GET -H 'Accept: application/json' -H 'Content-Type: application/json' -H 'User-Agent: Vets.gov Agent' -H 'Token: OTc4NjU0MjE=LTrYkEyXC6MG0DtGjGFkRcFNamMcm2f00tpWb7XeGi0=' "https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/bluebutton/extractstatus"
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/bluebutton/extractstatus HTTP/1.1
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Content-Type: application/json
> User-Agent: Vets.gov Agent
> Token: OTc4NjU0MjE=LTrYkEyXC6MG0DtGjGFkRcFNamMcm2f00tpWb7XeGi0=
>
< HTTP/1.1 200 OK
< Date: Wed, 28 Dec 2016 22:28:30 GMT
< Server: Apache/2.2.15 (Red Hat)
< X-Frame-Options: SAMEORIGIN
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
<
* Closing connection 0
{
  "facilityExtractStatusList": [
    {
      "extractType": "ImagingStudy",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    },
    {
      "extractType": "ChemistryHematology",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    },
    {
      "extractType": "WellnessReminders",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    },
    {
      "extractType": "Appointments",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    },
    {
      "extractType": "DodMilitaryService",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    },
    {
      "extractType": "VPR",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    },
    {
      "extractType": "Allergy",
      "lastUpdated": "",
      "status": null,
      "createdOn": "",
      "stationNumber": ""
    }
  ]
}


_____________

GET Eligible Data Classes
_____________

$ curl -v -X GET -H 'Accept: application/json' -H 'Content-Type: application/json' -H 'User-Agent: Vets.gov Agent' -H 'Token: OTc4NjU0MjE=LTrYkEyXC6MG0DtGjGFkRcFNamMcm2f00tpWb7XeGi0=' "https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/bluebutton/geteligibledataclass"
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/bluebutton/geteligibledataclass HTTP/1.1
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Content-Type: application/json
> User-Agent: Vets.gov Agent
> Token: OTc4NjU0MjE=LTrYkEyXC6MG0DtGjGFkRcFNamMcm2f00tpWb7XeGi0=
>
< HTTP/1.1 200 OK
< Date: Wed, 28 Dec 2016 22:31:45 GMT
< Server: Apache/2.2.15 (Red Hat)
< X-Frame-Options: SAMEORIGIN
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
<
* Closing connection 0
{
  "dataClasses": [
    "seiactivityjournal",
    "seiallergies",
    "seidemographics",
    "familyhealthhistory",
    "seifoodjournal",
    "healthcareproviders",
    "healthinsurance",
    "seiimmunizations",
    "labsandtests",
    "medicalevents",
    "medications",
    "militaryhealthhistory",
    "seimygoalscurrent",
    "seimygoalscompleted",
    "treatmentfacilities",
    "vitalsandreadings",
    "prescriptions",
    "medications",
    "vaallergies",
    "vaadmissionsanddischarges",
    "futureappointments",
    "pastappointments",
    "vademographics",
    "vaekg",
    "vaimmunizations",
    "vachemlabs",
    "vaprogressnotes",
    "vapathology",
    "vaproblemlist",
    "varadiology",
    "vahth",
    "wellness",
    "dodmilitaryservice"
  ]
}

_________________

POST generate
_________________

curl -v -X POST -H 'Accept: application/json' -H 'Content-Type: application/json' -H 'User-Agent: Vets.gov Agent' -H 'Token: <SESSION_TOKEN>' -d '{"fromDate":"Wed, 17 Jan 2007 11:13:00 GMT","toDate":"Tue, 17 Jan 2017 11:13:00 GMT","dataClasses":["seiactivityjournal","seiallergies","seidemographics","familyhealthhistory","seifoodjournal","healthcareproviders","healthinsurance","seiimmunizations","labsandtests","medicalevents","medications","militaryhealthhistory","seimygoalscurrent","seimygoalscompleted","treatmentfacilities","vitalsandreadings","prescriptions","medications","vaallergies","vaadmissionsanddischarges","futureappointments","pastappointments","vademographics","vaekg","vaimmunizations","vachemlabs","vaprogressnotes","vapathology","vaproblemlist","varadiology","vahth","wellness","dodmilitaryservice"]}' "https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/bluebutton/generate"
I, [2017-01-17T06:13:00.158738 #70151]  INFO -- : post https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/bluebutton/generate
D, [2017-01-17T06:13:00.158785 #70151] DEBUG -- request: Accept: "application/json"
Content-Type: "application/json"
User-Agent: "Vets.gov Agent"
Token: "<SESSION_TOKEN>"
D, [2017-01-17T06:13:00.158808 #70151] DEBUG -- request: {"fromDate":"Wed, 17 Jan 2007 11:13:00 GMT","toDate":"Tue, 17 Jan 2017 11:13:00 GMT","dataClasses":["seiactivityjournal","seiallergies","seidemographics","familyhealthhistory","seifoodjournal","healthcareproviders","healthinsurance","seiimmunizations","labsandtests","medicalevents","medications","militaryhealthhistory","seimygoalscurrent","seimygoalscompleted","treatmentfacilities","vitalsandreadings","prescriptions","medications","vaallergies","vaadmissionsanddischarges","futureappointments","pastappointments","vademographics","vaekg","vaimmunizations","vachemlabs","vaprogressnotes","vapathology","vaproblemlist","varadiology","vahth","wellness","dodmilitaryservice"]}
I, [2017-01-17T06:13:00.172930 #70151]  INFO -- Status: 200
D, [2017-01-17T06:13:00.173003 #70151] DEBUG -- response: date: "Thu, 29 Dec 2016 05:57:45 GMT"
server: "Apache/2.2.15 (Red Hat)"
x-frame-options: "SAMEORIGIN"
connection: "close"
transfer-encoding: "chunked"
content-type: "application/json"
D, [2017-01-17T06:13:00.173203 #70151] DEBUG -- response: {:status=>"OK", :description=>nil, :next_date=>{}}


_________________

GET download_report (requires doctype)
_________________

curl -v -X GET -H 'Accept: application/json' -H 'Content-Type: application/json' -H 'User-Agent: Vets.gov Agent' -H 'Token: <SESSION_TOKEN>' "https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/bluebutton/bbreport/txt"
I, [2017-01-17T06:13:00.175850 #70151]  INFO -- : get https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/bluebutton/bbreport/txt
D, [2017-01-17T06:13:00.175874 #70151] DEBUG -- request: Accept: "application/json"
Content-Type: "application/json"
User-Agent: "Vets.gov Agent"
Token: "<SESSION_TOKEN>"
I, [2017-01-17T06:13:00.191136 #70151]  INFO -- Status: 200
D, [2017-01-17T06:13:00.191191 #70151] DEBUG -- response: date: "Thu, 29 Dec 2016 05:57:47 GMT"
server: "Apache/2.2.15 (Red Hat)"
x-frame-options: "SAMEORIGIN"
cache-control: "no-cache"
content-length: "16217"
content-disposition: "inline; filename=mhv_GPTESTKFIVE_20161229_0057.txt"
connection: "close"
content-type: "text/plain; charset=UTF-8"
D, [2017-01-17T06:13:00.191227 #70151] DEBUG -- response: --------------- MY HEALTHEVET PERSONAL INFORMATION REPORT ---------------
                    *************CONFIDENTIAL*************
                    Produced by the VA Blue Button (v12.10)
                               29 Dec 2016 @ 0057

This summary is a copy of information from your My HealtheVet Personal
Health Record. Your summary may include:

... TRUNCATED

