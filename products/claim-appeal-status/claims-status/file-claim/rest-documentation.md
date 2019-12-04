# Notes on the existing eBenefits REST service


## Base URLs

- CI (AWS) - http://csraciapp8.evss.srarad.com:7003/wss-common-services-web-${#Project#version}/rest
- INT (VA) - http://vaebnapp1.aac.va.gov:8001/wss-common-services-web-${#Project#version}/rest
- QA (VA) - http://vaebnapp2.aac.va.gov:8001/wss-common-services-web-${#Project#version}/rest
- PINT (VA) - http://vaebnapp7.aac.va.gov:8001/wss-common-services-web-${#Project#version}/rest

The project version is currently 2.2, but some files have not been updated with this.

Connecting to the VA hosts requires VA network access.

Connecting to the CI environment requires a VPN into SRA RAD. The VPN client for SRA RAD can be downloaded at https://vpn.evss.srarad.com/?src=connect . Contact Josh Lindsey jlindsey@veracityconsulting.com to request a VPN account.

## Endpoints

```
"http://HOSTNAME/wss-claims-services-web-2.2/rest/"
    "/vbaClaimStatusService"
        "/getClaims"
        "/getHistoricalClaims"
        "/getOpenClaims"
        "/getClaimsBySsn"
        "/getClaimDetailById"
        "/set5103Waiver"
        "/getOpenClaimsBySsn"
        "/getHistoricalClaimsBySsn"
    "/dbqService"
        "/findDbqByBenefitClaimId"
        "/findDbqByRatingId"
    "/trackedItemService"
        "/getTrackedItemsByIDService"
        "/getUnsolicitedEvidenceByIDService"
    "/trackedItemsService"
        "/getTrackedItemsByIDService"
        "/getUnsolicitedEvidenceByIDService"
    "/claimServicesExternalService"
        "/createCompensationIntentToFile"
        "/listAllIntentToFile"
        "/readActiveCompensationIntentToFile"
```

```
"http://HOSTNAME/wss-document-services-web-2.2/rest/"
    "/queuedDocumentUploadService"
        "/addToQueue"
        "/uploadDocument"
        "/ajaxUploadFile"
    "/documents"
        "/getClaimDocuments"
        "/getAllDocuments"
        "/getClaimDocuments/{claimId}"
```

## Sample requests/responses
Use of GET and POST for these endpoints is inconsistent. HTTP status code usage is also inconsistent. Some operations will fail but return a 200 status code, and other operations will properly return a 415 (Unsupported Media Type) or 403 (Forbidden).


**Note**: Header names are (in conflict with the HTTP spec) case sensistive and must be in lowercase!

### createCompensationIntentToFile

#### Request
```
POST http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/claimServicesExternalService/createCompensationIntentToFile HTTP/1.1
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_pnidtype: SSN
va_eauth_firstName: GREG
va_eauth_csid: DSLogon
va_eauth_lastName: ANDERSON
va_eauth_authenticationauthority: eauth
iv-user: dslogoneauthuser
va_eauth_emailAddress: greg.anderson@va.gov
va_eauth_birthdate: 1933-04-05T00:00:00-08:00
va_eauth_authorization: {"authorizationResponse":{"id":796121200,"idType":"SSN","edi":1005079124,"firstName":"GREG","middleName":"A","lastName":"ANDERSON","gender":"MALE","birthDate":"1933-04-05T00:00:00-08:00","deceased":false,"status":"SPONSOR","personnel":{"category":"RETIRED_MILITARY","entitlementCondition":"00","organization":21,"rank":"SSG","serviceBranchClassification":"A"},"benefit":21,"headOfFamily":""}}
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1005079124
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Content-Length: 3
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

##### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:42:48 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=TcJNXXZYcJQPWHWmCFJv1Y251J9gvLLQZCZDS1LzVxm511Mqyf0w!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "intentToFile" : {
    "associatedBenefitClaimId" : 0,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791545601,
    "intentToFileID" : 1,
    "receivedDate" : 1440791545602,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  }
}
```

### listAllIntentToFile
#### Request
```
POST http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/claimServicesExternalService/listAllIntentToFile HTTP/1.1
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_pnidtype: SSN
va_eauth_csid: DSLogon
va_eauth_firstName: GREG
va_eauth_lastName: ANDERSON
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: greg.anderson@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1933-04-05T00:00:00-08:00
va_eauth_authorization: {"authorizationResponse":{"id":796121200,"idType":"SSN","edi":1005079124,"firstName":"GREG","middleName":"A","lastName":"ANDERSON","gender":"MALE","birthDate":"1933-04-05T00:00:00-08:00","deceased":false,"status":"SPONSOR","personnel":{"category":"RETIRED_MILITARY","entitlementCondition":"00","organization":21,"rank":"SSG","serviceBranchClassification":"A"},"benefit":21,"headOfFamily":""}}
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1005079124
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Content-Length: 5
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:42:49 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=2TGQXXZZnZnkwbkQQ8LhGqh7hGnr01LcJ7PFyLzQ1KyVrSsDpjhv!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "allIntentToFiles" : [ {
    "associatedBenefitClaimId" : 123,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791272786,
    "intentToFileID" : 1,
    "receivedDate" : 1440791272787,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  }, {
    "associatedBenefitClaimId" : 123,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791272788,
    "intentToFileID" : 1,
    "receivedDate" : 1440791272788,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  }, {
    "associatedBenefitClaimId" : 123,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791272789,
    "intentToFileID" : 1,
    "receivedDate" : 1440791272789,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  }, {
    "associatedBenefitClaimId" : 123,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791272789,
    "intentToFileID" : 1,
    "receivedDate" : 1440791272790,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  }, {
    "associatedBenefitClaimId" : 123,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791272790,
    "intentToFileID" : 1,
    "receivedDate" : 1440791272790,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  } ]
}
```

### readActiveCompensationIntentToFile
#### Request
```
POST http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/claimServicesExternalService/readActiveCompensationIntentToFile HTTP/1.1
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_pnidtype: SSN
va_eauth_csid: DSLogon
va_eauth_firstName: GREG
va_eauth_lastName: ANDERSON
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: greg.anderson@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1933-04-05T00:00:00-08:00
va_eauth_authorization: {"authorizationResponse":{"id":796121200,"idType":"SSN","edi":1005079124,"firstName":"GREG","middleName":"A","lastName":"ANDERSON","gender":"MALE","birthDate":"1933-04-05T00:00:00-08:00","deceased":false,"status":"SPONSOR","personnel":{"category":"RETIRED_MILITARY","entitlementCondition":"00","organization":21,"rank":"SSG","serviceBranchClassification":"A"},"benefit":21,"headOfFamily":""}}
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1005079124
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Content-Length: 5
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:42:49 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=T2p8XXZZz5YN1LNxzmqPnDQ2Qwv29jcPNPd57T3tRMcJv9Q1L1MP!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "activeCompensationIntentToFile" : {
    "associatedBenefitClaimId" : 123,
    "corpParticpantId" : 1,
    "expirationDate" : 1440791625810,
    "intentToFileID" : 1,
    "receivedDate" : 1440791625811,
    "source" : "VDC",
    "status" : "ACTIVE",
    "type" : "COMPENSATION",
    "vetParticipantId" : 0
  }
}
```


### getClaimDetailById
#### Request
```
POST http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/vbaClaimStatusService/getClaimDetailById HTTP/1.1
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_pnidtype: SSN
va_eauth_csid: DSLogon
va_eauth_firstName: GREG
va_eauth_lastName: ANDERSON
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: greg.anderson@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1933-04-05T00:00:00-08:00
va_eauth_authorization: {"authorizationResponse":{"id":796121200,"idType":"SSN","edi":1005079124,"firstName":"GREG","middleName":"A","lastName":"ANDERSON","gender":"MALE","birthDate":"1933-04-05T00:00:00-08:00","deceased":false,"status":"SPONSOR","personnel":{"category":"RETIRED_MILITARY","entitlementCondition":"00","organization":21,"rank":"SSG","serviceBranchClassification":"A"},"benefit":21,"headOfFamily":""}}
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1005079124
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Content-Length: 20
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:42:49 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=QF9TXXZZ9G1qGndX9LC9RpwhdXTHvBL9Y7myBLT2pPH9PQP4GW2V!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
   "claim":    {
      "appealPossible": "No",
      "attentionNeeded": "Yes",
      "baseEndProductCode": "400",
      "benefitClaimTypeCode": "400CORRC",
      "claimCompleteDate": "08/10/2012",
      "claimConsolidatable": true,
      "claimPhaseDates":       {
         "currentPhaseBack": false,
         "everPhaseBack": false,
         "latestPhaseType": "Complete",
         "phase1CompleteDate": "10/25/2012",
         "phase2CompleteDate": "10/26/2012",
         "phase3CompleteDate": "10/27/2012",
         "phase4CompleteDate": "10/28/2012",
         "phase5CompleteDate": "10/29/2012",
         "phase6CompleteDate": "10/30/2012",
         "phase7CompleteDate": "10/31/2012",
         "phaseChangeDate": "10/31/2012",
         "phaseMaxEstDate": "08/28/2012",
         "phaseMinEstDate": "07/17/2012",
         "phaseTypeChangeInd": "78"
      },
      "claimTrackedItems":       {
         "neverReceivedFromOthersList": [],
         "neverReceivedFromYouList": [],
         "receivedFromOthersList":          [
                        {
               "description": "21-4142",
               "displayedName": "Request 9",
               "overdue": false,
               "receivedDate": "02/17/2010",
               "trackedItemId": 1,
               "trackedItemStatus": "ACCEPTED",
               "uploaded": false,
               "uploadsAllowed": false
            },
                        {
               "description": "What was received item one.",
               "displayedName": "Request 10",
               "overdue": false,
               "receivedDate": "08/29/2012",
               "trackedItemId": 2,
               "trackedItemStatus": "ACCEPTED",
               "uploaded": false,
               "uploadsAllowed": false
            },
                        {
               "description": "What was received item two.",
               "displayedName": "Request 11",
               "overdue": false,
               "receivedDate": "09/24/2012",
               "trackedItemId": 4,
               "trackedItemStatus": "ACCEPTED",
               "uploaded": true,
               "uploadsAllowed": false,
               "vbaDocuments": [               {
                  "corporateDocumentId": 4,
                  "documentId": "{uuid4}",
                  "documentSize": 0,
                  "documentTypeCode": "L102",
                  "documentTypeId": "111",
                  "documentTypeLabel": "pdf",
                  "fileName": "SEP_41ba9424-e507-4e2c-80b4-01899826cab3.pdf",
                  "mimeType": "application/pdf",
                  "originalFileName": "name4",
                  "receiptDate": 1427342400000,
                  "source": "SEP",
                  "submitter":                   {
                     "firstName": "Andrew",
                     "lastName": "Luck",
                     "personId": "222"
                  },
                  "trackedItemId": 4,
                  "uploadDate": 1411474974000,
                  "veteran":                   {
                     "fileNumber": "796104437",
                     "firstName": "MARK",
                     "lastName": "WEBB"
                  }
               }]
            },
                        {
               "description": "What was received item three.",
               "displayedName": "Request 12",
               "overdue": false,
               "receivedDate": "11/29/2012",
               "trackedItemId": 41,
               "trackedItemStatus": "ACCEPTED",
               "uploaded": false,
               "uploadsAllowed": false
            }
         ],
         "receivedFromYouList": [],
         "stillNeedFromOthersList":          [
                        {
               "description": "Requested verification of date of birth or age at time of entrance on active duty.",
               "displayedName": "Request 3",
               "openedDate": "03/21/2010",
               "overdue": false,
               "suspenseDate": "05/22/2010",
               "trackedItemId": 31,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            },
                        {
               "description": "Requested personal history information.",
               "displayedName": "Request 4",
               "openedDate": "03/22/2010",
               "overdue": false,
               "suspenseDate": "05/24/2010",
               "trackedItemId": 3,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            },
                        {
               "description": "Requested verification of type and amount of net separation pay.",
               "displayedName": "Request 5",
               "openedDate": "03/23/2010",
               "overdue": false,
               "suspenseDate": "05/21/2010",
               "trackedItemId": 33,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            },
                        {
               "description": "Requested service record changes and corrections.",
               "displayedName": "Request 6",
               "openedDate": "03/23/2010",
               "overdue": false,
               "suspenseDate": "05/27/2010",
               "trackedItemId": 35,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            },
                        {
               "description": "Requested inpatient clinical records from &lt;clinic/hospital name>.",
               "displayedName": "Request 7",
               "openedDate": "03/23/2010",
               "overdue": false,
               "suspenseDate": "05/26/2010",
               "trackedItemId": 36,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            },
                        {
               "description": "Requested verification of military benefit type and amount.",
               "displayedName": "Request 8",
               "openedDate": "03/24/2010",
               "overdue": false,
               "suspenseDate": "05/25/2010",
               "trackedItemId": 32,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            }
         ],
         "stillNeedFromYouList":          [
                        {
               "description": "What we still need from you item one.",
               "displayedName": "Request 1",
               "openedDate": "03/15/2010",
               "overdue": true,
               "suspenseDate": "03/25/2010",
               "trackedItemId": 50,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            },
                        {
               "description": "What we still need from you item two.",
               "displayedName": "Request 2",
               "openedDate": "03/16/2010",
               "overdue": true,
               "suspenseDate": "03/26/2010",
               "trackedItemId": 51,
               "trackedItemStatus": "NEEDED",
               "uploaded": false,
               "uploadsAllowed": true
            }
         ]
      },
      "consolidatedTrackedItemsList":       [
                  {
            "description": "What we still need from you item one.",
            "displayedName": "Request 1",
            "openedDate": "03/15/2010",
            "overdue": true,
            "suspenseDate": "03/25/2010",
            "trackedItemId": 50,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "What we still need from you item two.",
            "displayedName": "Request 2",
            "openedDate": "03/16/2010",
            "overdue": true,
            "suspenseDate": "03/26/2010",
            "trackedItemId": 51,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "Requested verification of date of birth or age at time of entrance on active duty.",
            "displayedName": "Request 3",
            "openedDate": "03/21/2010",
            "overdue": false,
            "suspenseDate": "05/22/2010",
            "trackedItemId": 31,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "Requested personal history information.",
            "displayedName": "Request 4",
            "openedDate": "03/22/2010",
            "overdue": false,
            "suspenseDate": "05/24/2010",
            "trackedItemId": 3,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "Requested verification of type and amount of net separation pay.",
            "displayedName": "Request 5",
            "openedDate": "03/23/2010",
            "overdue": false,
            "suspenseDate": "05/21/2010",
            "trackedItemId": 33,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "Requested service record changes and corrections.",
            "displayedName": "Request 6",
            "openedDate": "03/23/2010",
            "overdue": false,
            "suspenseDate": "05/27/2010",
            "trackedItemId": 35,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "Requested inpatient clinical records from &lt;clinic/hospital name>.",
            "displayedName": "Request 7",
            "openedDate": "03/23/2010",
            "overdue": false,
            "suspenseDate": "05/26/2010",
            "trackedItemId": 36,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         },
                  {
            "description": "Requested verification of military benefit type and amount.",
            "displayedName": "Request 8",
            "openedDate": "03/24/2010",
            "overdue": false,
            "suspenseDate": "05/25/2010",
            "trackedItemId": 32,
            "trackedItemStatus": "NEEDED",
            "uploaded": false,
            "uploadsAllowed": true
         }
      ],
      "contentionList":       [
         "Hearing Loss (New)",
         " skin condition (New)",
         " jungle rot (New)"
      ],
      "date": "09/23/2008",
      "dbqList": [],
      "decisionNotificationSent": "Yes",
      "developmentLetterSent": "Yes",
      "endProductCode": "401",
      "id": "189625",
      "jurisdiction": "St. Petersburg",
      "mailingAddress":       {
         "addressLine1": "Regional Office",
         "addressLine2": "PO Box 1437",
         "addressLine3": "",
         "city": "St. Petersburg",
         "state": "FL",
         "zip": "33731"
      },
      "maxEstClaimDate": "01/02/2014",
      "minEstClaimDate": "05/02/2013",
      "newEvidenceReceived": false,
      "pastEstClaimDate": true,
      "pastEvidenceDueDate": false,
      "pastPhaseEstDate": false,
      "poa": "AMERICAN LEGION",
      "programType": "CPL",
      "status": "CLR",
      "statusChanged": false,
      "statusType": "Compensation and Pension",
      "submitterApplicationCode": "EBN",
      "submitterRoleCode": "VET",
      "tempJurisdiction": "Nashville",
      "vbaDocumentList":       [
                  {
            "corporateDocumentId": 6,
            "documentId": "{uuid6}",
            "documentSize": 0,
            "documentTypeLabel": "pdf",
            "originalFileName": "name6",
            "source": "eBenefits",
            "submitter":             {
               "firstName": "Robert",
               "lastName": "Griffin III",
               "personId": "222"
            },
            "trackedItemId": 6,
            "uploadDate": 1411647774000
         },
                  {
            "corporateDocumentId": 4,
            "documentId": "{uuid4}",
            "documentSize": 0,
            "documentTypeCode": "L102",
            "documentTypeId": "111",
            "documentTypeLabel": "pdf",
            "fileName": "SEP_41ba9424-e507-4e2c-80b4-01899826cab3.pdf",
            "mimeType": "application/pdf",
            "originalFileName": "name4",
            "receiptDate": 1427342400000,
            "source": "SEP",
            "submitter":             {
               "firstName": "Andrew",
               "lastName": "Luck",
               "personId": "222"
            },
            "trackedItemId": 4,
            "uploadDate": 1411474974000,
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         },
                  {
            "corporateDocumentId": 222,
            "documentId": "{uuid222}",
            "documentSize": 0,
            "documentTypeLabel": "pdf",
            "originalFileName": "name222",
            "source": "SEP",
            "submitter":             {
               "firstName": "ALEXIS",
               "lastName": "COLLINS",
               "personId": "222"
            },
            "trackedItemId": 188802,
            "uploadDate": 1411388574000
         },
                  {
            "corporateDocumentId": 22,
            "documentId": "{uuid22}",
            "documentSize": 0,
            "documentTypeLabel": "pdf",
            "originalFileName": "name22",
            "source": "eBenefits",
            "submitter":             {
               "firstName": "Aaron",
               "lastName": "Rogers",
               "personId": "222"
            },
            "trackedItemId": 188802,
            "uploadDate": 1411302174000
         },
                  {
            "corporateDocumentId": 2,
            "documentId": "{uuid2}",
            "documentSize": 0,
            "documentTypeLabel": "pdf",
            "originalFileName": "name2",
            "source": "eBenefits",
            "submitter":             {
               "firstName": "Tom",
               "lastName": "Brady",
               "personId": "222"
            },
            "trackedItemId": 188802,
            "uploadDate": 1411215774000
         },
                  {
            "corporateDocumentId": 3,
            "documentId": "{uuid3}",
            "documentSize": 0,
            "documentTypeLabel": "pdf",
            "originalFileName": "name3",
            "source": "eBenefits",
            "submitter":             {
               "firstName": "Drew",
               "lastName": "Bree",
               "personId": "222"
            },
            "trackedItemId": 188803,
            "uploadDate": 1411129374000
         },
                  {
            "corporateDocumentId": 1,
            "documentId": "{uuid1}",
            "documentSize": 0,
            "documentTypeLabel": "jpg",
            "originalFileName": "name1",
            "source": "eBenefits",
            "submitter":             {
               "firstName": "ALEXIS",
               "lastName": "COLLINS",
               "personId": "222"
            },
            "trackedItemId": 188801,
            "uploadDate": 1411042974000
         },
                  {
            "documentId": "{508B2B01-F0A1-43A6-A50A-015CF6B1D756}",
            "documentSize": 0,
            "documentTypeCode": "L029",
            "documentTypeId": "40",
            "documentTypeLabel": "Certificate of Release or Discharge From Active Duty (e.g. DD 214, NOAA 56-16, PHS 1867)",
            "fileName": "DD124_b9fc2c7b-60ec-4d63-86c7-abe5f866d923.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1359608400000,
            "receiptDateFormatted": "01/31/2013",
            "source": "eBenefits",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         },
                  {
            "documentId": "{98B7E701-28AA-43DA-A243-892B0909590B}",
            "documentSize": 0,
            "documentTypeCode": "L029",
            "documentTypeId": "40",
            "documentTypeLabel": "Certificate of Release or Discharge From Active Duty (e.g. DD 214, NOAA 56-16, PHS 1867)",
            "fileName": "eBenefits_84944472-95c2-4d13-a684-99a1c8e8f225.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1379304000000,
            "receiptDateFormatted": "09/16/2013",
            "source": "eBenefits",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         },
                  {
            "documentId": "{2EA4E801-25D9-4ADC-9082-42765F0AFF3F}",
            "documentSize": 0,
            "documentTypeCode": "L159",
            "documentTypeId": "168",
            "documentTypeLabel": "VA 26-4555 Veterans Application in Acquiring Specially Adapted Housing or Special Home Adaptation Grant Under Title 38 U.S.C. 2101(a) or (b)",
            "fileName": "eBenefits_81322585-dea5-47c0-9d8a-7ecc0ec633dd.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1359694800000,
            "receiptDateFormatted": "02/01/2013",
            "source": "eBenefits",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         },
                  {
            "documentId": "{5E796302-289B-421A-91BD-0D1CBFEBD7C0}",
            "documentSize": 0,
            "documentTypeCode": "L222",
            "documentTypeId": "375",
            "documentTypeLabel": "VA 21-0779 Request for Nursing Home Info In Connection with Claim for Aid and Attendance",
            "fileName": "ebn_106bb33a-65e5-41f5-b42d-689f7c7a9706.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1378785600000,
            "receiptDateFormatted": "09/10/2013",
            "source": "ebn",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "JANE",
               "lastName": "DOE",
               "middleName": "A"
            }
         },
                  {
            "documentId": "{87591E05-E9E6-4702-A5CE-90229B7D1563}",
            "documentSize": 0,
            "documentTypeCode": "L102",
            "documentTypeId": "111",
            "documentTypeLabel": "VA 21-2680 Examination for Housebound Status or Permanent Need for Regular Aid and Attendance",
            "fileName": "ebn_2949e346-03b2-424f-a088-d5dae1da8a8b.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1378785600000,
            "receiptDateFormatted": "09/10/2013",
            "source": "ebn",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "JANE",
               "lastName": "DOE",
               "middleName": "A"
            }
         },
                  {
            "documentId": "{7EFF2306-1884-40ED-8E3A-80E300ECF771}",
            "documentSize": 0,
            "documentTypeCode": "L533",
            "documentTypeId": "533",
            "documentTypeLabel": "VA 21-526EZ, Fully Developed Claim (Compensation)",
            "fileName": "VDC_600032782_0003.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1438747200000,
            "receiptDateFormatted": "08/05/2015",
            "source": "VDC",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         },
                  {
            "documentId": "{05333808-4C3B-46B9-BE38-318D6012D4FC}",
            "documentSize": 0,
            "documentTypeCode": "L533",
            "documentTypeId": "533",
            "documentTypeLabel": "VA 21-526EZ, Fully Developed Claim (Compensation)",
            "fileName": "VDC_600021515_0001.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1424062800000,
            "receiptDateFormatted": "02/16/2015",
            "source": "VDC",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         },
                  {
            "documentId": "{F25D3D08-D5F1-4C81-B29A-58B065C4B18B}",
            "documentSize": 0,
            "documentTypeCode": "UNKNOWN",
            "documentTypeId": "10",
            "documentTypeLabel": "UNKNOWN",
            "fileName": "ebn_c42c104d-46b3-4013-888d-12fc6af8f724.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1378785600000,
            "receiptDateFormatted": "09/10/2013",
            "source": "ebn",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "JANE",
               "lastName": "DOE",
               "middleName": "A"
            }
         },
                  {
            "documentId": "{B452250B-C50A-4BC7-8FE9-8F1C435ECA7F}",
            "documentSize": 0,
            "documentTypeCode": "L149",
            "documentTypeId": "158",
            "documentTypeLabel": "VA 21-8940 Veterans Application for Increased Compensation Based on Unemployability",
            "fileName": "7100_null_MARK_WEBB_8940.pdf",
            "mimeType": "application/pdf",
            "receiptDate": 1367985600000,
            "receiptDateFormatted": "05/08/2013",
            "source": "VDC",
            "veteran":             {
               "fileNumber": "796104437",
               "firstName": "MARK",
               "lastName": "WEBB"
            }
         }
      ],
      "waiver5103Submitted": false
   },
   "messages": []
}
```

### set5103Waiver
#### Request
```
POST http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/vbaClaimStatusService/set5103Waiver HTTP/1.1
Accept-Encoding: gzip,deflate
Content-Type: application/json
va_eauth_pnidtype: SSN
va_eauth_csid: DSLogon
va_eauth_firstName: Jane
va_eauth_lastName: Doe
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: jane.doe@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1999-10-09T08:06:12-04:00
va_eauth_authorization: {"authorizationResponse":{"id":"123456789","idType":"SSN","edi":"1026070453","firstName":"JANE","middleName":"A","lastName":"DOE","gender":"FEMALE","birthDate":939465704000,"status":"VETERAN"}}
va_eauth_pid: 1
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1105051936
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Content-Length: 48
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:42:51 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=JGnrXXZbhwVLp8mMQty1RyR89zdHLnkBGynlFLzRGJnpn87TjhD3!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "success" : true
}
```


### getClaims
#### Request
```
GET http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/vbaClaimStatusService/getClaims HTTP/1.1
Accept-Encoding: gzip,deflate
va_eauth_pnidtype: SSN
va_eauth_firstName: Jane
va_eauth_csid: DSLogon
va_eauth_lastName: Doe
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: jane.doe@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1999-10-09T08:06:12-04:00
va_eauth_authorization: {"authorizationResponse":{"id":"123456789","idType":"SSN","edi":"1105051936","firstName":"JANE","middleName":"A","lastName":"DOE","gender":"FEMALE","birthDate":939465704000,"status":"VETERAN"}}
va_eauth_pid: 1
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1105051936
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:57:14 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=1SFqXXch3FxsPmY6cTSsdD3g0KRLhqRpvQqJ1rRJrGw4rmWZwLjC!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "allIntentToFiles" : [ ],
  "anyHistoricalClaimsConsolidatable" : true,
  "historicalClaims" : [ {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "claimCompleteDate" : "08/13/2012",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "08/10/2012"
    },
    "claimStatus" : "CLR",
    "claimTrackedItems" : { },
    "closeDate" : "08/10/2012",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "09/25/2012",
    "dbqList" : [ ],
    "decisionNotificationSent" : "Yes",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "06/21/2012",
    "id" : "183654",
    "latestEvidenceRecdDate" : "11/29/2012",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "claimCompleteDate" : "08/10/2012",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "08/10/2012"
    },
    "claimStatus" : "CLR",
    "claimTrackedItems" : { },
    "closeDate" : "08/11/2012",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "09/25/2011",
    "dbqList" : [ ],
    "decisionNotificationSent" : "Yes",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "06/21/2012",
    "id" : "189655",
    "latestEvidenceRecdDate" : "11/29/2012",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "benefitClaimTypeCode" : "400CORRC",
    "claimCompleteDate" : "08/10/2012",
    "claimConsolidatable" : true,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "08/10/2012"
    },
    "claimStatus" : "CLR",
    "claimTrackedItems" : { },
    "closeDate" : "08/12/2012",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "09/02/2010",
    "dbqList" : [ ],
    "decisionNotificationSent" : "Yes",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "06/21/2012",
    "id" : "189625",
    "latestEvidenceRecdDate" : "11/29/2012",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  } ],
  "openClaims" : [ {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "400",
    "benefitClaimTypeCode" : "400CORRC",
    "claimConsolidatable" : true,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "12/28/2012"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "12/01/2011",
    "dbqList" : [ {
      "dbqAdditionalDocumentationNeeded" : "N",
      "dbqFormNumber" : "21-0960P-3",
      "dbqFormTitle" : "Review Post Traumatic Stress Disorder (PTSD)",
      "dbqUrl" : "http://www.vba.va.gov/pubs/forms/VBA-21-0960P-3-ARE.pdf",
      "diagnosticCode" : "9411",
      "disabilityName" : "Post traumatic stress disorder",
      "id" : 189675
    } ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "401",
    "id" : "189675",
    "latestEvidenceRecdDate" : "11/29/2012",
    "maxEstClaimDate" : "10/22/2013",
    "minEstClaimDate" : "04/11/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : true,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "UNDER REVIEW",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "submitterApplicationCode" : "EBN",
    "submitterRoleCode" : "VET",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "Yes",
    "baseEndProductCode" : "400",
    "benefitClaimTypeCode" : "400CORRC",
    "claimConsolidatable" : true,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "12/14/2012"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "11/10/2011",
    "dbqList" : [ {
      "dbqAdditionalDocumentationNeeded" : "N",
      "dbqFormNumber" : "21-0960C-8",
      "dbqFormTitle" : "Headaches (Including Migraine Headaches)",
      "dbqUrl" : "http://www.vba.va.gov/pubs/forms/VBA-21-0960C-8-ARE.pdf",
      "diagnosticCode" : "8100",
      "disabilityName" : "Migraine",
      "id" : 189685
    } ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "02/12/2013",
    "endProductCode" : "402",
    "id" : "189685",
    "latestEvidenceRecdDate" : "11/29/2012",
    "maxEstClaimDate" : "05/22/2014",
    "minEstClaimDate" : "07/29/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : true,
    "pastEvidenceDueDate" : true,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "GATHERING OF EVIDENCE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "submitterApplicationCode" : "EBN",
    "submitterRoleCode" : "VSOREP",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "10/19/2011"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "10/19/2011",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "id" : "189645",
    "latestEvidenceRecdDate" : "11/29/2012",
    "maxEstClaimDate" : "05/30/2012",
    "minEstClaimDate" : "12/09/2011",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : true,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "CLAIM RECEIVED",
    "statusChanged" : false,
    "statusType" : "Dependency",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "Yes",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "10/16/2012"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "11/18/2008",
    "dbqList" : [ ],
    "decisionNotificationSent" : "Yes",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "12/30/2012",
    "id" : "189665",
    "latestEvidenceRecdDate" : "11/29/2012",
    "maxEstClaimDate" : "08/05/2014",
    "minEstClaimDate" : "09/30/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : true,
    "pastEvidenceDueDate" : true,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "GATHERING OF EVIDENCE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  } ]
}
```


### getHistoricalClaims
#### Request
```
GET http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/vbaClaimStatusService/getHistoricalClaims HTTP/1.1
Accept-Encoding: gzip,deflate
va_eauth_pnidtype: SSN
va_eauth_firstName: Jane
va_eauth_csid: DSLogon
va_eauth_lastName: Doe
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: jane.doe@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1999-10-09T08:06:12-04:00
va_eauth_authorization: {"authorizationResponse":{"id":"123456789","idType":"SSN","edi":"1105051936","firstName":"JANE","middleName":"A","lastName":"DOE","gender":"FEMALE","birthDate":939465704000,"status":"VETERAN"}}
va_eauth_pid: 123456786
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1105051936
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:56:23 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=zCN5XXcH2QcpBJcsvf2DzMDRgynkYYn0wyT3P2G4LGP721P9J32L!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "anyHistoricalClaimsConsolidatable" : true,
  "historicalClaims" : [ {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "400",
    "benefitClaimTypeCode" : "400SUPP",
    "claimCompleteDate" : "02/24/2015",
    "claimConsolidatable" : true,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/24/2015"
    },
    "claimStatus" : "CAN",
    "claimTrackedItems" : { },
    "closeDate" : "02/24/2015",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "12/13/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "402",
    "id" : "600019055",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "submitterApplicationCode" : "EBN",
    "submitterRoleCode" : "VET",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "400",
    "benefitClaimTypeCode" : "400SUPP",
    "claimCompleteDate" : "02/24/2015",
    "claimConsolidatable" : true,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/24/2015"
    },
    "claimStatus" : "CAN",
    "claimTrackedItems" : { },
    "closeDate" : "02/24/2015",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "12/08/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "401",
    "id" : "600018531",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "submitterApplicationCode" : "EBN",
    "submitterRoleCode" : "VET",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEWBDD",
    "claimCompleteDate" : "02/24/2015",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/24/2015"
    },
    "claimStatus" : "CLR",
    "claimTrackedItems" : { },
    "closeDate" : "02/24/2015",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "10/24/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "Yes",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "03/15/2015",
    "endProductCode" : "020",
    "id" : "600019932",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "Yes",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "400",
    "benefitClaimTypeCode" : "400SUPP",
    "claimCompleteDate" : "02/24/2015",
    "claimConsolidatable" : true,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/24/2015"
    },
    "claimStatus" : "CAN",
    "claimTrackedItems" : { },
    "closeDate" : "02/24/2015",
    "consolidatedTrackedItemsList" : [ ],
    "date" : "10/23/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "400",
    "id" : "600015530",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "COMPLETE",
    "statusChanged" : false,
    "submitterApplicationCode" : "EBN",
    "submitterRoleCode" : "VET",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  } ]
}
```


### getOpenClaims
#### Request
```
GET http://csraciapp6.evss.srarad.com:7003/wss-claims-services-web-2.2/rest/vbaClaimStatusService/getOpenClaims HTTP/1.1
Accept-Encoding: gzip,deflate
va_eauth_pnidtype: SSN
va_eauth_firstName: Jane
va_eauth_csid: DSLogon
va_eauth_lastName: Doe
va_eauth_authenticationauthority: eauth
va_eauth_emailAddress: jane.doe@va.gov
iv-user: dslogoneauthuser
va_eauth_birthdate: 1999-10-09T08:06:12-04:00
va_eauth_authorization: {"authorizationResponse":{"id":"123456789","idType":"SSN","edi":"1105051936","firstName":"JANE","middleName":"A","lastName":"DOE","gender":"FEMALE","birthDate":939465704000,"status":"VETERAN"}}
va_eauth_pid: 123456789
va_eauth_issueinstant: 2015-04-17T14:52:48Z
va_eauth_dodedipnid: 1105051936
va_eauth_middleName: A
va_eauth_authenticationmethod: DSLogon
va_eauth_assurancelevel: 2
Host: csraciapp6.evss.srarad.com:7003
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```
#### Response
```
HTTP/1.1 200 OK
Date: Tue, 26 Jul 2016 21:55:33 GMT
Transfer-Encoding: chunked
Content-Type: application/json
Set-Cookie: WSS-CLAIMS-SERVICES_JSESSIONID=PFSzXXcV9G0fSLsqPxg1M5H57m1xnWyCLr7CVjv4Pnp02bTTbBpW!1298178233; path=/; HttpOnly
X-Powered-By: Servlet/2.5 JSP/2.1

{
  "allIntentToFiles" : [ ],
  "openClaims" : [ {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "02/01/2015",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "025",
    "id" : "600022001",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "UNDER REVIEW",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "02/01/2015",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "Yes",
    "endProductCode" : "024",
    "id" : "600022000",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "REVIEW OF EVIDENCE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "Yes",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "02/01/2015",
    "dbqList" : [ {
      "dbqAdditionalDocumentationNeeded" : "N",
      "dbqFormNumber" : "21-0960C-8",
      "dbqFormTitle" : "Headaches (Including Migraine Headaches)",
      "dbqUrl" : "http://www.vba.va.gov/pubs/forms/VBA-21-0960C-8-ARE.pdf",
      "diagnosticCode" : "8100",
      "disabilityName" : "Migraine",
      "id" : 600022002
    } ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "Yes",
    "earliestEvidenceDueDate" : "03/29/2015",
    "endProductCode" : "026",
    "id" : "600022002",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : true,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "GATHERING OF EVIDENCE",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "01/01/2015",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "023",
    "id" : "600021999",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "CLAIM RECEIVED",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "RDC",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "12/01/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "Yes",
    "endProductCode" : "022",
    "id" : "600021998",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "PENDING DECISION APPROVAL",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "11/01/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "021",
    "id" : "600021997",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "PENDING DECISION APPROVAL",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  }, {
    "appealPossible" : "No",
    "attentionNeeded" : "No",
    "baseEndProductCode" : "020",
    "benefitClaimTypeCode" : "020NEW",
    "claimConsolidatable" : false,
    "claimPhaseDates" : {
      "currentPhaseBack" : false,
      "everPhaseBack" : false,
      "phaseChangeDate" : "02/27/2015"
    },
    "claimStatus" : "PEND",
    "claimTrackedItems" : { },
    "consolidatedTrackedItemsList" : [ ],
    "date" : "10/01/2014",
    "dbqList" : [ ],
    "decisionNotificationSent" : "No",
    "developmentLetterSent" : "No",
    "endProductCode" : "020",
    "id" : "600021996",
    "latestEvidenceRecdDate" : "12/31/2013",
    "newEvidenceReceived" : false,
    "pastEstClaimDate" : false,
    "pastEvidenceDueDate" : false,
    "pastPhaseEstDate" : false,
    "programType" : "CPL",
    "status" : "PREPARATION FOR NOTIFICATION",
    "statusChanged" : false,
    "statusType" : "Compensation",
    "vbaDocumentList" : [ ],
    "waiver5103Submitted" : false
  } ]
}
```
