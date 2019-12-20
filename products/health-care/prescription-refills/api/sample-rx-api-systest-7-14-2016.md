Given:
Your application token is: 3Olp2DAjWDaI8B4vV4cHzHRJTYZO+XfMWEiVSGzFDYg
The mhv correlation id is: 12210827
The API base URL is:  https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/




______

Get Session
______


$ curl -H "appToken:3Olp2DAjWDaI8B4vV4cHzHRJTYZO+XfMWEiVSGzFDYg" -H "mhvCorrelationId:12210827" -v https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/session
* Adding handle: conn: 0x7f890a80aa00
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x7f890a80aa00) send_pipe: 1, recv_pipe: 0
* About to connect() to admin-syst.myhealth.va.gov port 443 (#0)
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/session HTTP/1.1
> User-Agent: curl/7.30.0
> Host: admin-syst.myhealth.va.gov
> Accept: */*
> appToken:3Olp2DAjWDaI8B4vV4cHzHRJTYZO+XfMWEiVSGzFDYg
> mhvCorrelationId:12210827
> 
< HTTP/1.1 200 OK
< Date: Fri, 15 Jul 2016 02:08:23 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< Content-Length: 0
< Expires: Fri, 15 Jul 2016 02:18:23 GMT
< Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Content-Type: text/html; charset=UTF-8
< 
* Closing connection 0





______

Get Active Prescriptions
______


$ curl -H "Accept: application/json" -H "Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=" -v https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/prescription/getactiverx
* Adding handle: conn: 0x7ff482804000
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x7ff482804000) send_pipe: 1, recv_pipe: 0
* About to connect() to admin-syst.myhealth.va.gov port 443 (#0)
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/prescription/getactiverx HTTP/1.1
> User-Agent: curl/7.30.0
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=
> 
< HTTP/1.1 200 OK
< Date: Fri, 15 Jul 2016 02:09:15 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
< 
* Closing connection 0
{
  "failedStationList": "",
  "lastUpdatedTime": "Thu, 14 Jul 2016 22:12:10 EDT",
  "prescriptionList": [
    {
      "refillStatus": "refillinprocess",
      "refillSubmitDate": "Fri, 08 Jul 2016 00:00:00 EDT",
      "refillDate": "Fri, 08 Jul 2016 00:00:00 EDT",
      "refillRemaining": 10,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13568788,
      "orderedDate": "Mon, 30 May 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 31 May 2017 00:00:00 EDT",
      "prescriptionNumber": "2719539",
      "prescriptionName": "VERAPAMIL HCL 120MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": null,
      "refillDate": "Fri, 17 Jun 2016 00:00:00 EDT",
      "refillRemaining": 11,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 13651309,
      "orderedDate": "Fri, 17 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Sun, 18 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719560",
      "prescriptionName": "PHENAZOPYRIDINE HCL 100MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 13650547,
      "orderedDate": "Sun, 19 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 20 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719557",
      "prescriptionName": "IBERSARTAN 300MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 13650546,
      "orderedDate": "Sun, 19 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 20 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719556",
      "prescriptionName": "IBUPROFEN 400MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 13650545,
      "orderedDate": "Mon, 20 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 21 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719555",
      "prescriptionName": "PROBUCOL 250MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 13650544,
      "orderedDate": "Mon, 20 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 21 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719554",
      "prescriptionName": "TERAZOSIN HCL 10MG CAP",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 13650543,
      "orderedDate": "Mon, 20 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 21 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719553",
      "prescriptionName": "ETHAMBUTOL HCL 100MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 13650542,
      "orderedDate": "Wed, 22 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Fri, 23 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719552",
      "prescriptionName": "CARBAMAZEPINE (TEGRETOL) 200MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 13650541,
      "orderedDate": "Tue, 21 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 22 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719551",
      "prescriptionName": "PAROXETINE HCL 30MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 13568747,
      "orderedDate": "Tue, 24 May 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 25 May 2017 00:00:00 EDT",
      "prescriptionNumber": "2719536",
      "prescriptionName": "SIROLIMUS 1MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    }
  ]
}
















______

Get All Prescriptions
______



$ curl -H "Accept: application/json" -H "Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=" -v https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/prescription/gethistoryrx
* Adding handle: conn: 0x7fc971804000
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x7fc971804000) send_pipe: 1, recv_pipe: 0
* About to connect() to admin-syst.myhealth.va.gov port 443 (#0)
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/prescription/gethistoryrx HTTP/1.1
> User-Agent: curl/7.30.0
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=
> 
< HTTP/1.1 200 OK
< Date: Fri, 15 Jul 2016 02:09:27 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
< 
* Closing connection 0
{
  "failedStationList": "",
  "lastUpdatedTime": "Thu, 14 Jul 2016 22:09:27 EDT",
  "prescriptionList": [
    {
      "refillStatus": "active",
      "refillSubmitDate": null,
      "refillDate": "Fri, 17 Jun 2016 00:00:00 EDT",
      "refillRemaining": 11,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13651309,
      "orderedDate": "Fri, 17 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Sun, 18 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719560",
      "prescriptionName": "PHENAZOPYRIDINE HCL 100MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13568747,
      "orderedDate": "Tue, 24 May 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 25 May 2017 00:00:00 EDT",
      "prescriptionNumber": "2719536",
      "prescriptionName": "SIROLIMUS 1MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13650541,
      "orderedDate": "Tue, 21 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 22 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719551",
      "prescriptionName": "PAROXETINE HCL 30MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 13650542,
      "orderedDate": "Wed, 22 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Fri, 23 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719552",
      "prescriptionName": "CARBAMAZEPINE (TEGRETOL) 200MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 13650543,
      "orderedDate": "Mon, 20 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 21 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719553",
      "prescriptionName": "ETHAMBUTOL HCL 100MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 13650544,
      "orderedDate": "Mon, 20 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 21 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719554",
      "prescriptionName": "TERAZOSIN HCL 10MG CAP",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 13650545,
      "orderedDate": "Mon, 20 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 21 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719555",
      "prescriptionName": "PROBUCOL 250MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 13650546,
      "orderedDate": "Sun, 19 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 20 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719556",
      "prescriptionName": "IBUPROFEN 400MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Mon, 11 Jul 2016 00:00:00 EDT",
      "refillDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13650547,
      "orderedDate": "Sun, 19 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 20 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719557",
      "prescriptionName": "IBERSARTAN 300MG TAB",
      "dispensedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "stationNumber": "989"
    },
    {
      "refillStatus": "discontinued",
      "refillSubmitDate": null,
      "refillDate": "Sun, 26 Jun 2016 00:00:00 EDT",
      "refillRemaining": 11,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13651310,
      "orderedDate": "Sun, 26 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 27 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719558",
      "prescriptionName": "ASPIRIN 325MG EC TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "discontinued",
      "refillSubmitDate": null,
      "refillDate": "Sun, 24 Jan 2016 00:00:00 EST",
      "refillRemaining": 11,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13357874,
      "orderedDate": "Sun, 24 Jan 2016 00:00:00 EST",
      "quantity": 15,
      "expirationDate": "Tue, 24 Jan 2017 00:00:00 EST",
      "prescriptionNumber": "2719472",
      "prescriptionName": "MIRTAZAPINE 15MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "expired",
      "refillSubmitDate": null,
      "refillDate": "Thu, 19 May 2016 00:00:00 EDT",
      "refillRemaining": 11,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13568746,
      "orderedDate": "Thu, 19 May 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Sat, 20 May 2017 00:00:00 EDT",
      "prescriptionNumber": "2719535",
      "prescriptionName": "TORSEMIDE 100MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "hold",
      "refillSubmitDate": null,
      "refillDate": "Sun, 26 Jun 2016 00:00:00 EDT",
      "refillRemaining": 11,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13651311,
      "orderedDate": "Sun, 26 Jun 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 27 Jun 2017 00:00:00 EDT",
      "prescriptionNumber": "2719559",
      "prescriptionName": "DIGOXIN (LANOXIN) 0.25MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "hold",
      "refillSubmitDate": null,
      "refillDate": "Fri, 29 Jan 2016 00:00:00 EST",
      "refillRemaining": 8,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13357873,
      "orderedDate": "Fri, 29 Jan 2016 00:00:00 EST",
      "quantity": 10,
      "expirationDate": "Sun, 29 Jan 2017 00:00:00 EST",
      "prescriptionNumber": "2719471",
      "prescriptionName": "ADEFOVIR DIPIVOXIL 10MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    },
    {
      "refillStatus": "refillinprocess",
      "refillSubmitDate": "Fri, 08 Jul 2016 00:00:00 EDT",
      "refillDate": "Fri, 08 Jul 2016 00:00:00 EDT",
      "refillRemaining": 10,
      "facilityName": "DAYT29",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 13568788,
      "orderedDate": "Mon, 30 May 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Wed, 31 May 2017 00:00:00 EDT",
      "prescriptionNumber": "2719539",
      "prescriptionName": "VERAPAMIL HCL 120MG TAB",
      "dispensedDate": null,
      "stationNumber": "989"
    }
  ]
}












______

Track Prescription ID 13650546
______




$ curl -H "Accept: application/json" -H "Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=" -v https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/prescription/rxtracking/13650546
* Adding handle: conn: 0x7fb90c004000
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x7fb90c004000) send_pipe: 1, recv_pipe: 0
* About to connect() to admin-syst.myhealth.va.gov port 443 (#0)
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> GET /mhv-api/patient/v1/prescription/rxtracking/13650546 HTTP/1.1
> User-Agent: curl/7.30.0
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=
> 
< HTTP/1.1 200 OK
< Date: Fri, 15 Jul 2016 02:11:19 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
< 
* Closing connection 0
{
  "prescriptionName": "IBUPROFEN 400MG TAB",
  "prescriptionNumber": "2719556",
  "facilityName": "DAYT29",
  "rxInfoPhoneNumber": "(555)772-0956",
  "ndcNumber": "00078042034",
  "lastUpdatedtime": "Mon, 11 Jul 2016 04:30:15 EDT",
  "trackingInfo": [
    {
      "shippedDate": "Wed, 06 Jul 2016 00:00:00 EDT",
      "deliveryService": "UPS",
      "trackingNumber": "345787647663",
      "otherPrescriptionListIncluded": [
        {
          "prescriptionName": "IBERSARTAN 300MG TAB",
          "prescriptionNumber": "2719557",
          "ndcNumber": "07985440050",
          "stationNumber": "989"
        }
      ]
    },
    {
      "shippedDate": "Sun, 26 Jun 2016 00:00:00 EDT",
      "deliveryService": "UPS",
      "trackingNumber": "345787647656",
      "otherPrescriptionListIncluded": [
        {
          "prescriptionName": "PROBUCOL 250MG TAB",
          "prescriptionNumber": "2719555",
          "ndcNumber": "00781168131",
          "stationNumber": "989"
        }
      ]
    }
  ]
}






______

Refill Prescription ID 13650546
______



$ curl -X POST -H "Accept: application/json" -H "Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=" -v https://admin-syst.myhealth.va.gov/mhv-api/patient/v1/prescription/rxrefill/13650546
* Adding handle: conn: 0x7fc91c004000
* Adding handle: send: 0
* Adding handle: recv: 0
* Curl_addHandleToPipeline: length: 1
* - Conn 0 (0x7fc91c004000) send_pipe: 1, recv_pipe: 0
* About to connect() to admin-syst.myhealth.va.gov port 443 (#0)
*   Trying 10.244.21.15...
* Connected to admin-syst.myhealth.va.gov (10.244.21.15) port 443 (#0)
* TLS 1.2 connection using TLS_RSA_WITH_AES_256_CBC_SHA256
* Server certificate: syst.myhealth.va.gov
* Server certificate: Veterans Affairs Device CA B2
* Server certificate: Betrusted Production SSP CA A1
* Server certificate: Federal Common Policy CA
> POST /mhv-api/patient/v1/prescription/rxrefill/13650546 HTTP/1.1
> User-Agent: curl/7.30.0
> Host: admin-syst.myhealth.va.gov
> Accept: application/json
> Token: NrHjKSR7mtM=AhgYhRq25VEMiA8E9e2m0wkAuenhcKHlAWUB6UB/JHQ=
> 
< HTTP/1.1 200 OK
< Date: Fri, 15 Jul 2016 02:15:01 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
< 
* Closing connection 0
Successfully submitted to: DAYT29
