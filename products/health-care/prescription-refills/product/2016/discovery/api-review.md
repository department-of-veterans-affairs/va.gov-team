Given:
Your application token is: oUDTOa6OohAKxsVtgqRMQ9WvOIRyDl/TAqQEWTkB63I=
The mhv correlation id for Tom123 is:745772
The API base URL is:  https://admin-intb.myhealth.va.gov/mhv-api/patient/v1/


curl -H "appToken:oUDTOa6OohAKxsVtgqRMQ9WvOIRyDl/TAqQEWTkB63I=" -H "mhvCorrelationId:745772" -v https://admin-intb.myhealth.va.gov/mhv-api/patient/v1/session
returns header:
< HTTP/1.1 200 OK
< Date: Tue, 10 May 2016 16:30:17 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< Content-Length: 0
< Expires: Tue, 10 May 2016 16:40:17 GMT
< Token: GkuX2OZ4dCE=48xrH6ObGXZ45ZAg70LBahi7CjswZe8SZGKMUVFIU88=
< Set-Cookie: JSESSIONID=QWMKXyMZmBfnC15xJKTQRMPvpMpsRhPJNwc9PGQMhSR8QQ8gQLL8!1523265843; path=/; HttpOnly
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Content-Type: text/plain; charset=UTF-8

key data we need: Token: GkuX2OZ4dCE=48xrH6ObGXZ45ZAg70LBahi7CjswZe8SZGKMUVFIU88=
*Note: this token expires VERY quickly


curl -H "Accept: application/json" -H "Token: KCtjzqr338g=S2a8dW8pPEwtCS1A4Yc2vyhhE6y/+CxWUz8pYCJhSfM=" -v https://admin-intb.myhealth.va.gov/mhv-api/patient/v1/prescription/getactiverx
returns body:
{
  "failedStationList": "",
  "lastUpdatedTime": "Tue, 10 May 2016 12:54:37 EDT",
  "prescriptionList": [
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT3",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 1435524,
      "orderedDate": "Sun, 27 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 28 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "2719323",
      "prescriptionName": "NORFLOXACIN 400MG TAB",
      "dispensedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT3",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 1435525,
      "orderedDate": "Tue, 29 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 30 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "2719324",
      "prescriptionName": "PROBUCOL 250MG TAB",
      "dispensedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT3",
      "isRefillable": true,
      "isTrackable": false,
      "prescriptionId": 1435526,
      "orderedDate": "Tue, 29 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 30 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "2719325",
      "prescriptionName": "FLUCONAZOLE 100MG TAB",
      "dispensedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "SLC4",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 1435527,
      "orderedDate": "Sun, 27 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 28 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "3636038",
      "prescriptionName": "PHENAZOPYRIDINE HCL 100MG TAB",
      "dispensedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "stationNumber": "991"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "SLC4",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 1435528,
      "orderedDate": "Sun, 27 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 28 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "3636039",
      "prescriptionName": "DIGOXIN (LANOXIN) 0.25MG TAB",
      "dispensedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "stationNumber": "991"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "SLC4",
      "isRefillable": true,
      "isTrackable": true,
      "prescriptionId": 1435530,
      "orderedDate": "Tue, 29 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 30 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "3636040",
      "prescriptionName": "AMINOPHYLLINE 200MG TAB",
      "dispensedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "stationNumber": "991"
    }
  ]
}


curl -H "Accept: application/json" -H "Token: KCtjzqr338g=S2a8dW8pPEwtCS1A4Yc2vyhhE6y/+CxWUz8pYCJhSfM=" -v https://admin-intb.myhealth.va.gov/mhv-api/patient/v1/prescription/gethistoryrx
returns body:
{
  "failedStationList": "",
  "lastUpdatedTime": "Tue, 10 May 2016 13:02:07 EDT",
  "prescriptionList": [
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 1435524,
      "orderedDate": "Sun, 27 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 28 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "2719323",
      "prescriptionName": "NORFLOXACIN 400MG TAB",
      "dispensedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 1435525,
      "orderedDate": "Tue, 29 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 30 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "2719324",
      "prescriptionName": "PROBUCOL 250MG TAB",
      "dispensedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 1435526,
      "orderedDate": "Tue, 29 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 30 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "2719325",
      "prescriptionName": "FLUCONAZOLE 100MG TAB",
      "dispensedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "discontinued",
      "refillSubmitDate": "Wed, 12 Feb 2014 00:00:00 EST",
      "refillDate": "Wed, 12 Feb 2014 00:00:00 EST",
      "refillRemaining": 0,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 750338,
      "orderedDate": "Mon, 13 Jan 2014 00:00:00 EST",
      "quantity": 5,
      "expirationDate": "Wed, 14 Jan 2015 00:00:00 EST",
      "prescriptionNumber": "2719110",
      "prescriptionName": "IBUPROFEN 400MG TAB",
      "dispensedDate": "Wed, 12 Feb 2014 00:00:00 EST",
      "stationNumber": "994"
    },
    {
      "refillStatus": "discontinued",
      "refillSubmitDate": "Wed, 16 Jul 2014 00:00:00 EDT",
      "refillDate": "Wed, 16 Jul 2014 00:00:00 EDT",
      "refillRemaining": 1,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 777736,
      "orderedDate": "Tue, 17 Jun 2014 00:00:00 EDT",
      "quantity": 5,
      "expirationDate": "Thu, 18 Jun 2015 00:00:00 EDT",
      "prescriptionNumber": "2719137",
      "prescriptionName": "ADEFOVIR DIPIVOXIL 10MG TAB",
      "dispensedDate": "Wed, 16 Jul 2014 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "expired",
      "refillSubmitDate": null,
      "refillDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillRemaining": 4,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 779788,
      "orderedDate": "Thu, 19 Jun 2014 00:00:00 EDT",
      "quantity": 5,
      "expirationDate": "Sat, 20 Jun 2015 00:00:00 EDT",
      "prescriptionNumber": "2719123",
      "prescriptionName": "MIRTAZAPINE 15MG TAB",
      "dispensedDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "expired",
      "refillSubmitDate": null,
      "refillDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillRemaining": 5,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 779789,
      "orderedDate": "Thu, 26 Jun 2014 00:00:00 EDT",
      "quantity": 5,
      "expirationDate": "Sat, 27 Jun 2015 00:00:00 EDT",
      "prescriptionNumber": "2719125",
      "prescriptionName": "TORSEMIDE 100MG TAB",
      "dispensedDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "expired",
      "refillSubmitDate": null,
      "refillDate": "Fri, 24 Jan 2014 00:00:00 EST",
      "refillRemaining": 5,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 746575,
      "orderedDate": "Fri, 24 Jan 2014 00:00:00 EST",
      "quantity": 10,
      "expirationDate": "Sun, 25 Jan 2015 00:00:00 EST",
      "prescriptionNumber": "2719083",
      "prescriptionName": "ACETAMINOPHEN 325MG TAB",
      "dispensedDate": null,
      "stationNumber": "994"
    },
    {
      "refillStatus": "expired",
      "refillSubmitDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillDate": "Sat, 19 Jul 2014 00:00:00 EDT",
      "refillRemaining": 4,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 776906,
      "orderedDate": "Sat, 14 Jun 2014 00:00:00 EDT",
      "quantity": 5,
      "expirationDate": "Mon, 15 Jun 2015 00:00:00 EDT",
      "prescriptionNumber": "2719124",
      "prescriptionName": "SIROLIMUS 1MG TAB",
      "dispensedDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "unknown",
      "refillSubmitDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillRemaining": 4,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 776905,
      "orderedDate": "Thu, 19 Jun 2014 00:00:00 EDT",
      "quantity": 5,
      "expirationDate": "Sat, 20 Jun 2015 00:00:00 EDT",
      "prescriptionNumber": "3635911",
      "prescriptionName": "MIRTAZAPINE 15MG TAB",
      "dispensedDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "unknown",
      "refillSubmitDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "refillRemaining": 5,
      "facilityName": "DAYT3",
      "isRefillable": false,
      "isTrackable": false,
      "prescriptionId": 776925,
      "orderedDate": "Thu, 26 Jun 2014 00:00:00 EDT",
      "quantity": 5,
      "expirationDate": "Sat, 27 Jun 2015 00:00:00 EDT",
      "prescriptionNumber": "3635913",
      "prescriptionName": "TORSEMIDE 100MG TAB",
      "dispensedDate": "Mon, 14 Jul 2014 00:00:00 EDT",
      "stationNumber": "994"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "SLC4",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 1435528,
      "orderedDate": "Sun, 27 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 28 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "3636039",
      "prescriptionName": "DIGOXIN (LANOXIN) 0.25MG TAB",
      "dispensedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "stationNumber": "991"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "SLC4",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 1435530,
      "orderedDate": "Tue, 29 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Thu, 30 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "3636040",
      "prescriptionName": "AMINOPHYLLINE 200MG TAB",
      "dispensedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "stationNumber": "991"
    },
    {
      "refillStatus": "active",
      "refillSubmitDate": "Tue, 26 Apr 2016 00:00:00 EDT",
      "refillDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "refillRemaining": 9,
      "facilityName": "SLC4",
      "isRefillable": false,
      "isTrackable": true,
      "prescriptionId": 1435527,
      "orderedDate": "Sun, 27 Mar 2016 00:00:00 EDT",
      "quantity": 10,
      "expirationDate": "Tue, 28 Mar 2017 00:00:00 EDT",
      "prescriptionNumber": "3636038",
      "prescriptionName": "PHENAZOPYRIDINE HCL 100MG TAB",
      "dispensedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "stationNumber": "991"
    }
  ]
}


curl -H "Accept: application/json" -H "Token: KCtjzqr338g=S2a8dW8pPEwtCS1A4Yc2vyhhE6y/+CxWUz8pYCJhSfM=" -v https://admin-intb.myhealth.va.gov/mhv-api/patient/v1/prescription/rxtracking/1435525
*1435525 is the "prescriptionId" of the first active response above
returns body:
{
  "prescriptionName": "PROBUCOL 250MG TAB",
  "prescriptionNumber": "2719324",
  "facilityName": "DAYT3",
  "rxInfoPhoneNumber": "(444)772-0987",
  "ndcNumber": "00078036864",
  "lastUpdatedtime": "Wed, 27 Apr 2016 04:30:15 EDT",
  "trackingInfo": [
    {
      "shippedDate": "Thu, 21 Apr 2016 00:00:00 EDT",
      "deliveryService": "UPS",
      "trackingNumber": "31457644862",
      "otherPrescriptionListIncluded": [
        {
          "prescriptionName": "NORFLOXACIN 400MG TAB",
          "prescriptionNumber": "2719323",
          "ndcNumber": "00078036864",
          "stationNumber": "994"
        }
      ]
    },
    {
      "shippedDate": "Mon, 11 Apr 2016 00:00:00 EDT",
      "deliveryService": "UPS",
      "trackingNumber": "31457644860",
      "otherPrescriptionListIncluded": [
        {
          "prescriptionName": "PHENAZOPYRIDINE HCL 100MG TAB",
          "prescriptionNumber": "3636038",
          "ndcNumber": "00078036864",
          "stationNumber": "991"
        },
        {
          "prescriptionName": "DIGOXIN (LANOXIN) 0.25MG TAB",
          "prescriptionNumber": "3636039",
          "ndcNumber": "00078036864",
          "stationNumber": "991"
        },
        {
          "prescriptionName": "FLUCONAZOLE 100MG TAB",
          "prescriptionNumber": "2719325",
          "ndcNumber": "00078036864",
          "stationNumber": "994"
        }
      ]
    }
  ]
}


curl -X POST -H "Accept: application/json" -H "Token: KCtjzqr338g=S2a8dW8pPEwtCS1A4Yc2vyhhE6y/+CxWUz8pYCJhSfM=" -v https://admin-intb.myhealth.va.gov/mhv-api/patient/v1/prescription/rxrefill/1435525
returns:
< HTTP/1.1 400 Bad Request
< Date: Tue, 10 May 2016 17:10:46 GMT
* Server Apache/2.2.15 (Red Hat) is not blacklisted
< Server: Apache/2.2.15 (Red Hat)
< X-Powered-By: Servlet/2.5 JSP/2.1
< Connection: close
< Transfer-Encoding: chunked
< Content-Type: application/json
< 
* Closing connection 0
{"errorCode":139,"developerMessage":"","message":"Prescription is not Refillable"}

*looking at the data for this prescription, it has refills and should be refillable, so we'll need to figure out if this response is due to weirdness with test data or an error in the API
