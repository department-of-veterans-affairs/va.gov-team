# Technical Discovery

In this directory are a set of PDFs that explain in great detail 3 separate claims-status API endpoints that vets-api currently uses as of the time of this writing.

Below, is a brief summarization of each endpoint, a table that shows the endpoint and HTTP method to access the endpoint, and expected request and response objects. Additional information is available within the PDF documents.

## Get Claims

Gets list of all Compensation and Pension claims filed by the veteran including open and close claims.

|     | Method | Claims Service API                                                 | API Description                                                                              |
|-----|--------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| 1   | GET    | /wss-claims-services-web-3.0/rest/vbaClaimStatusService/getClaims | Gets list of all C&P claims, Intent To File, and Historical Claims submitted by the veteran. |

**Request**
```
GET http://vaausessapp600.aac.va.gov:8001/wss-claims-services-web-3.0/rest/vbaClaimStatusService/getClaims 
HTTP/1.1Accept-Encoding: gzip,deflate
va_eauth_pnid:
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1075306616
va_eauth_lastName: WATSON
va_eauth_csid: DSLogon
va_eauth_firstName: JEFF
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
va_eauth_pid: 600048309
va_eauth_pnidtype: SSN
va_eauth_authorization: {
  "authorizationResponse": {
    "id":796246757,
    "idType":"SSN",
    "edi":1075306616,
    "firstName":"JEFF",
    "middleName":"Terrel",
    "lastName":"WATSON",
    "gender":"MALE",
    "birthDate":"1968-01-05T00:00:00-08:00",
    "deceased":false,
    "status":"VETERAN",
    "headOfFamily":""
  }
}
Host: vaausessapp600.aac.va.gov:8001
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

**Response**
```
HTTP/1.1 200 OK
Date: Wed, 20 Feb 2019 21:30:42 GMT
Transfer-Encoding: chunked
Content-Type: application/json
x-wily-servlet: Encrypt1 hR/KG2GOR16aRfvv3/q1AW0eXDaeERIVopFkOCXDj8aBMFJ3Yx6n3JU460kEeiDI+f7tx96uM7rd6Q66kG1F301pdCrOJfMsJBfCUXtpBBUC10v84zvjZZhZrTuMJwibXwrFyA6VYWhxQ0aj5bSLXKVvNWBYquJXTZ8L8ia/vdk=
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=6s4M0WEqVrR0pPDz9Hr-oSrjGZ2xNBxLYjzkQCRvleIHh7xciehn!378658115; path=/; HttpOnly
x-wily-info: Clear guid=0CD1612C0AE153E0126786181A30F22E

{
  "allIntentToFiles": [
    {
      "associatedBenefitClaimId": 600066386,   
      "corpParticpantId": 600048309,   
      "expirationDate": 1465414769000,   
      "intentToFileID": 5004,   
      "receivedDate": 1433792369000,   
      "source": "EBN",   
      "status": "CLAIM_RECEIVED",   
      "type": "COMPENSATION",   
      "vetParticipantId" : 0 
    },
    {
      "associatedBenefitClaimId": 0,
      "corpParticpantId": 600048309,
      "expirationDate": 1582234108000,
      "intentToFileID": 173518,
      "receivedDate": 1550698108000,
      "source": "EBN",
      "status": "ACTIVE",
      "type": "COMPENSATION",
      "vetParticipantId": 0
    }
  ],
  "anyHistoricalClaimsConsolidatable": true,
  "historicalClaims": [
    {
      "appealPossible": "Yes",
      "attentionNeeded": "No",   
      "baseEndProductCode": "400",
      "benefitClaimTypeCode": "400PREDSCHRG",
      "claimCompleteDate": "11/08/2018",
      "claimConsolidatable": true,
      "claimPhaseDates": 
        {
          "currentPhaseBack": false,
          "everPhaseBack": false,
          "phaseChangeDate": "11/08/2018"        
        },        
      "claimStatus": "CAN",
      "claimTrackedItems": {},
      "closeDate": "11/08/2018",
      "consolidatedTrackedItemsList": [],
      "date": "05/06/2019",
      "dbqList": [],
      "decisionNotificationSent": "No",
      "developmentLetterSent": "No",
      "endProductCode": "408",
      "id": "600142567",
      "newEvidenceReceived": false,
      "pastEstClaimDate": false,
      "pastEvidenceDueDate": false,
      "pastPhaseEstDate": false,
      "programType": "CPL",
      "status": "COMPLETE",
      "statusChanged": false,
      "statusType": "Compensation",
      "submitterApplicationCode": "VBMS",
      "submitterRoleCode": "VBA",
      "vbaDocumentList": [],
      "waiver5103Submitted": false,
      "wwd": [],
      "wwr": [],
      "wwsnfy": []
    },
  ],
  "openClaims": [
    {
      "appealPossible": "No",
      "attentionNeeded": "No",
      "baseEndProductCode": "020",
      "benefitClaimTypeCode": "020SUPP",
      "claimConsolidatable": false,
      "claimPhaseDates":
        {
          "currentPhaseBack": false,
          "everPhaseBack": false,
          "phaseChangeDate": "02/20/2019"
        },
      "claimStatus": "PEND",
      "claimTrackedItems": {},
      "consolidatedTrackedItemsList": [],
      "date": "02/20/2019",
      "dbqList": [],
      "decisionNotificationSent": "No",
      "developmentLetterSent": "No",
      "endProductCode": "020",
      "id": "600150095",
      "maxEstClaimDate": "09/03/2019",
      "minEstClaimDate": "05/30/2019",
      "newEvidenceReceived": false,
      "pastEstClaimDate": false,
      "pastEvidenceDueDate": false,
      "pastPhaseEstDate": false,
      "programType": "CPL",
      "status": "UNDER REVIEW",
      "statusChanged": true,
      "statusType": "Compensation",
      "submitterApplicationCode": "VBMS",
      "submitterRoleCode": "VBA",
      "vbaDocumentList": [],
      "waiver5103Submitted": false,
      "wwd": [],
      "wwr": [],
      "wwsnfy": []
    }
  ]
}
```

## Get Claim Detail

Gets the complete detail for particular claim including related docs and tracked items.

|     | Method | Claims Service API                                                         | API Description                       |
|-----|--------|----------------------------------------------------------------------------|---------------------------------------|
| 1   | GET    | /wss-claims-services-web-3.0/rest/vbaClaimStatusService/getClaimDetailById | Gets detail of a particular C&P claim |


**Request**
```
GET http://vaausessapp800.aac.va.gov:8001/wss-claims-services-web-3.6/rest/vbaClaimStatusService/getClaimDetailById HTTP/1.1
Connection: close
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1019787741
va_eauth_lastName: BROOKS
va_eauth_csid: DSLogon
va_eauth_firstName: JAMIE
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
va_eauth_authenticationauthority: eauth
va_eauth_authorization: {
  "authorizationResponse": {
    "id":796186272,
    "idType":"SSN",
    "edi":1019787741,
    "firstName":"JAIME",
    "middleName":"Lee",
    "lastName":"BROOKS",
    "gender":"MALE",
    "birthDate":"1975-11-26T00:00:00-08:00",
    "deceased":false,
    "status":"SPONSOR",
    "personnel": {
      "category":"ACTIVE_DUTY",
      "entitlementCondition":"00",
      "organization":13,
      "rank":"CPO",
      "serviceBranchClassification":"N"
    },
    "benefit":13,
    "headOfFamily":""
  }
}
Content-Length: 23
Host: vaausessapp800.aac.va.gov:8001
User-Agent: Apache-HttpClient/4.5.2 (Java/1.8.0_131)

{
  "id" : "600150232"
}
```

**Response**
```
{
  "claim": {   
    "appealPossible": "No",
    "attentionNeeded": "No",
    "baseEndProductCode": "336",
    "benefitClaimTypeCode": "336BDD",
    "claimConsolidatable": false,
    "claimPhaseDates": {
      "currentPhaseBack": false,
      "everPhaseBack": false,
      "latestPhaseType": "Under Review",
      "phase1CompleteDate": "02/22/2019",
      "phaseChangeDate": "02/22/2019",
      "phaseMaxEstDate": "05/09/2019",
      "phaseMinEstDate": "03/25/2019",
      "phaseTypeChangeInd": "12"
    },
    "claimTrackedItems": {},
    "consolidatedTrackedItemsList": [],
    "contentionList": [
      "Hepatitis (related to: Hepatitis C) (New)",
      " sinusitis (Secondary)"
    ],
    "date": "06/06/2019",
    "dbqList": [],
    "decisionNotificationSent": "No",
    "developmentLetterSent": "No",
    "endProductCode": "336",
    "id": "600150232",
    "jurisdiction": "National Work Queue",
    "mailingAddress": {
      "addressLine1": "National Work Queue",
      "addressLine2": "810 Vermont Avenue NW",
      "addressLine3": "",
      "city": "Washington",
      "state": "DC",
      "zip": "20420"
    },   
    "maxEstClaimDate": "08/04/2019",
    "minEstClaimDate": "05/06/2019",
    "newEvidenceReceived": false,
    "pastEstClaimDate": false,
    "pastEvidenceDueDate": false,
    "pastPhaseEstDate": false,
    "poa": "DISABLED AMERICAN VETERANS",
    "programType": "CPL",
    "status": "PEND",
    "statusChanged": false,
    "statusType": "Compensation",
    "submitterApplicationCode": "VBMS",
    "submitterRoleCode": "VBA",
    "tempJurisdiction": "",
    "vbaDocumentList": [],
    "waiver5103Submitted": false,
    "wwd": [],
    "wwr": [],
    "wwsnfy": []
  }
}
```

## Set 5103 Waiver

Sets 5103 waiver for already established claim and uploads ?corresponding 5103 PDF to VBMS eFolder.

|     | Method | Claims Service API                                                         | API Description                       |
|-----|--------|----------------------------------------------------------------------------|---------------------------------------|
| 1   | POST   | /wss-claims-services-web-3.0/rest/vbaClaimStatusService/set5103Waiver      | Appeal Substitution Review/FORM 5103  |

**Request**
```
POST https://vaausessapp600.aac.va.gov:8002/wss-claims-services-web-3.0/rest/vbaClaimStatusService/set5103Waiver HTTP/1.1
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_pnidtype: SSN
va_eauth_lastName: DOE
va_eauth_lastName: FULLER
va_eauth_gender: MALE
va_eauth_pid: 600043224
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1006448425
va_eauth_authenticationmethod: DSLogon
va_eauth_firstName: OLGA
va_eauth_csid: DSLogon
va_eauth_birthdate: 1984-05-18
va_eauth_authorization: {
  "authorizationResponse": {
    "id": 796140261,
    "idType": "SSN",
    "edi": 1006448425,
    "firstName": "OLGA",
    "middleName": "Lee",
    "lastName": "FULLER",
    "gender": "FEMALE",
    "birthDate": "1984-05-18T00:00:00-07:00",
    "deceased": false,
    "status": "SPONSOR",
    "personnel": {
      "category": "ACTIVE_DUTY",
      "entitlementCondition": "00",
      "organization": 11,
      "rank": "1LT",
      "serviceBranchClassification": "A"
    },
    "benefit": 11,
    "headOfFamily": ""
  }
}
va_eauth_pnid: 796140261
va_eauth_birlsfilenumber: 796140261
Accept: application/json
va_eauth_assurancelevel: 2
Content-Length: 53
Host: vaausessapp600.aac.va.gov:8002
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)


{
  "claimId": "600150731",
  "systemName": "vets.gov"
}
```

**Response**
```
{  
  "success" : true 
}
```