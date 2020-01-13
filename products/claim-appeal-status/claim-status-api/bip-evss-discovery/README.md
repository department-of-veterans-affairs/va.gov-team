# BIP / EVSS Claims Status API Gap Analysis

Below is a set of tables comparing and contrasting Claims Status API requests between two service providers: BIP and EVSS.

## Get Claims

|         | BIP            | EVSS                                                              |
|---------|----------------|-------------------------------------------------------------------|
| Method  | Get            | Get                                                               |
| Path    | /api/v1/claims | /wss-claims-services-web-3.0/rest/vbaClaimStatusService/getClaims |

### BIP

#### Parameters

| Parameter              | In    | Type    | Default                                | Required | Description                                                                           |
|------------------------|-------|---------|----------------------------------------|----------|---------------------------------------------------------------------------------------|
| include_closed         | query | boolean | false                                  | false    | Whether or not to list closed claims. Default is false.                               |
| offset                 | query | integer | 0 (minimum 0)                          | false    | The number of items to skip before starting to collect the claims to list.            |
| limit                  | query | integer | 20 (minimum 1 maximum 100)             | false    | The number of items to include in the page of results.                                |
| veteran_participant_id | query | integer | (format int64 maximum 999999999999999) | true     | The veteran's CorpDB Participant ID.                                                  |

#### Response

```javascript
[
  {
    "messages": [
      {
        "key": "",
        "severity": "INFO",
        "status": 200,
        "text": "",
        "timestamp": "2020-01-01 12:00:00.000"
      }
    ]
  },
  {
    "claims": [
      {
        "summaryDateTime": "",
        "claimId": 1234,
        "benefitClaimType": {
          "name": "",
          "code": "",
          "description": "",
          "deactiveDate": "",
          "attribute_one": "",
          "attribute_one_text": "",
          "attribute_two": "",
          "attribute_two_text": "",
          "attribute_three": "",
          "attribute_three_text": ""
        },
        "phase": "Claim Received",
        "phaseLastChangedDate": "",
        "claimLifecycleStatus": "",
        "completedDate": "",
        "claimant": {
          "participantId": 1234
        },
        "veteran": {
          "participantId": 1234,
          "firstName": "",
          "lastName": ""
        },
        "waiverSubmitted": false
      }
    ]
  }
]
```

### EVSS

#### Parameters

```
Accept-Encoding: gzip,deflate
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
va_eauth_authorization: {"authorizationResponse":{"id":796246757,"idType":"SSN","edi":1075306616,"firstName":"
JEFF","middleName":"Terrel","lastName":"WATSON","gender":"MALE","birthDate":"1968-01-05T00:00:00-08:00","
deceased":false,"status":"VETERAN","headOfFamily":""}}
Host: vaausessapp600.aac.va.gov:8001
Connection: Keep-Alive
User-Agent: Apache-HttpClient/4.1.1 (java 1.5)
```

#### Response

```javascript
{
  "allIntentToFiles" : [ 
    {
      "associatedBenefitClaimId" : 600066386,
      "corpParticpantId" : 600048309,
      "expirationDate" : 1465414769000,
      "intentToFileID" : 5004,
      "receivedDate" : 1433792369000,
      "source" : "EBN",
      "status" : "CLAIM_RECEIVED",
      "type" : "COMPENSATION",
      "vetParticipantId" : 0
    },
  ],
  "associatedBenefitClaimId": 0,
  "corpParticpantId": 600048309,
  "expirationDate": 1582234108000,
  "intentToFileID": 173518,
  "receivedDate": 1550698108000,
  "source": "EBN",
  "status": "ACTIVE",
  "type": "COMPENSATION",
  "vetParticipantId": 0,
  "anyHistoricalClaimsConsolidatable": true,
  "historicalClaims": [
    { 
      "appealPossible": "Yes",
      "attentionNeeded": "No",
      "baseEndProductCode": "400",
      "benefitClaimTypeCode": "400PREDSCHRG",
      "claimCompleteDate": "11/08/2018",
      "claimConsolidatable": true,
      "claimPhaseDates":          {
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
      "wwsnfy": [],
    }, 
  ],
 "openClaims": [   {
    "appealPossible": "No",
    "attentionNeeded": "No",
    "baseEndProductCode": "020",
    "benefitClaimTypeCode": "020SUPP",
    "claimConsolidatable": false,
    "claimPhaseDates":       {
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
 }] }
```

## Get Claim Details

|         | BIP                      | EVSS                                                                       |
|---------|--------------------------|----------------------------------------------------------------------------|
| Method  | Get                      | Get                                                                        |
| Path    | /api/v1/claims/{claimId} | /wss-claims-services-web-3.0/rest/vbaClaimStatusService/getClaimDetailById |

### BIP

#### Parameters

| Parameter              | In    | Type    | Default                                | Required | Description                                                                           |
|------------------------|-------|---------|----------------------------------------|----------|---------------------------------------------------------------------------------------|
| claimId                | path  | integer | (format int64)                         | true     | Access claim summary information for a claim, using the claimId                       |

#### Response

```javascript
{
  "summaryDateTime": "",
  "claimId": 1234,
  "benefitClaimType": {
    "name": "",
    "code": "",
    "description": "",
    "deactiveDate": "",
    "attribute_one": "",
    "attribute_one_text": "",
    "attribute_two": "",
    "attribute_two_text": "",
    "attribute_three": "",
    "attribute_three_text": ""
  },
  "phase": "Claim Received",
  "phaseLastChangedDate": "",
  "claimLifecycleStatus": "",
  "completedDate": "",
  "claimant": {
    "participantId": 1234
  },
  "veteran": {
    "participantId": 1234,
    "firstName": "",
    "lastName": ""
  },
  "waiverSubmitted": false
}
```

### EVSS

#### Parameters

```
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
va_eauth_authorization: {"authorizationResponse":{"id":796186272,"idType":"SSN","edi":1019787741,"firstName":"
JAIME","middleName":"Lee","lastName":"BROOKS","gender":"MALE","birthDate":"1975-11-26T00:00:00-08:00","
deceased":false,"status":"SPONSOR","personnel":{"category":"ACTIVE_DUTY","entitlementCondition":"00","
organization":13,"rank":"CPO","serviceBranchClassification":"N"},"benefit":13,"headOfFamily":""}}
Content-Length: 23
Host: vaausessapp800.aac.va.gov:8001
User-Agent: Apache-HttpClient/4.5.2 (Java/1.8.0_131)

{
  "id" : "600150232"
}
```

#### Response

```javascript
{"claim": {
  "appealPossible": "No",
  "attentionNeeded": "No",
  "baseEndProductCode": "336",
  "benefitClaimTypeCode": "336BDD",
  "claimConsolidatable": false,
  "claimPhaseDates":    {
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
  "contentionList":    [
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
  "mailingAddress":    {
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
}}
```


## Create Claim

|         | BIP             | EVSS                                                                  |
|---------|-----------------|-----------------------------------------------------------------------|
| Method  | Post            | Post                                                                  |
| Path    | /api/v1/claims  | /wss-claims-services-web-3.0/rest/vbaClaimStatusService/set5103Waiver |

### BIP

#### Request

```javascript
[
  {
   "messages": [
      {
        "key": "",
        "severity": "INFO",
        "status": 200,
        "text": "",
        "timestamp": "2020-01-01 12:00:00.000"
      }
    ]
  },
  {
    "serviceTypeCode": "",
    "programTypeCode": "",
    "benefitClaimTypeCode": "",
    "claimaint": {
      "participantId": 1234
    },
    "veteran": {
      "participantId": 1234,
      "firstName": "",
      "lastName": ""
    },
    "thirdDigitModifier": "",
    "preDischargeTypeCode": "",
    "dateOfClaim": ""
  }
]
```

#### Response

```javascript
[
  {
   "messages": [
      {
        "key": "",
        "severity": "INFO",
        "status": 200,
        "text": "",
        "timestamp": "2020-01-01 12:00:00.000"
      }
    ]
  },
  {
    "claimId": 1234
  }
]
```

### EVSS

#### Request

```
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
va_eauth_authorization: {"authorizationResponse":{"id":796140261,"idType":"SSN","edi":1006448425,"firstName":"
OLGA","middleName":"Lee","lastName":"FULLER","gender":"FEMALE","birthDate":"1984-05-18T00:00:00-07:00","
deceased":false,"status":"SPONSOR","personnel":{"category":"ACTIVE_DUTY","entitlementCondition":"00","
organization":11,"rank":"1LT","serviceBranchClassification":"A"},"benefit":11,"headOfFamily":""}}
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

#### Response

```javascript
{
  "success" : true
}
```

## Summary of Differences

### Get Claim Details Response Analysis

|Symbol|Description                                          |
|------|-----------------------------------------------------|
| [x]  | present in response                                 |
| [-]  | similar attribute is present but not a 1 to 1 match |
| [ ]  | not present in response                             |

|                                 |Description|EVSS|BIP   |
|---------------------------------|-----------|----|------|
|**appealPossible**               |           | [x] | [ ] |
|**attentionNeeded**              |           | [x] | [ ] |
|**baseEndProductCode**           |           | [x] | [ ] |
|**benefitClaimTypeCode**         |           | [x] | [x] |
|**claimConsolidatable**          |           | [x] | [ ] |
|**claimPhaseDates**              |           | [x] | [-] |
|**currentPhaseBack**             |           | [x] | [ ] |
|**everPhaseBack**                |           | [x] | [ ] |
|**latestPhaseType**              |           | [x] | [x] |
|**phase1CompleteDate**           |           | [x] | [ ] |
|**phaseChangeDate**              |           | [x] | [x] |
|**phaseMaxEstDate**              |           | [x] | [ ] |
|**phaseMinEstDate**              |           | [x] | [ ] |
|**phaseTypeChangeInd**           |           | [x] | [ ] |
|**claimTrackedItems**            |           | [x] | [ ] |
|**consolidatedTrackedItemsList** |           | [x] | [ ] |
|**contentionList**               |           | [x] | [ ] |
|**date**                         |           | [x] | [x] |
|**dbqList**                      |           | [x] | [ ] |
|**decisionNotificaitonSent**     |           | [x] | [ ] |
|**developmentLetterSent**        |           | [x] | [ ] |
|**endProductCode**               |           | [x] | [ ] |
|**id**                           |           | [x] | [x] |
|**jurisdiction**                 |           | [x] | [ ] |
|**mailingAddress**               |           | [x] | [ ] |
|**addressLine1**                 |           | [x] | [ ] |
|**addressLine2**                 |           | [x] | [ ] |
|**city**                         |           | [x] | [ ] |
|**state**                        |           | [x] | [ ] |
|**zip**                          |           | [x] | [ ] |
|**maxEstClaimDate**              |           | [x] | [ ] |
|**minEstClaimDate**              |           | [x] | [ ] |
|**newEvidenceReceived**          |           | [x] | [ ] |
|**pastEstClaimDate**             |           | [x] | [ ] |
|**pastPhaseEstDate**             |           | [x] | [ ] |
|**poa**                          |           | [x] | [ ] |
|**programType**                  |           | [x] | [ ] |
|**status**                       |           | [x] | [x] |
|**statusChanged**                |           | [x] | [ ] |
|**statusType**                   |           | [x] | [-] |
|**submitterApplicationCode**     |           | [x] | [ ] |
|**submitterRoleCode**            |           | [x] | [ ] |
|**tempJurisdiction**             |           | [x] | [ ] |
|**vbaDocumentList**              |           | [x] | [ ] |
|**waiver5103Submitted**          |           | [x] | [x] |
|**wwd**                          |           | [x] | [ ] |
|**wwr**                          |           | [x] | [ ] |
|**wwsnfy**                       |           | [x] | [ ] |

### Get Claims Response Analysis

|                                      |Description|EVSS|BIP   |
|--------------------------------------|-----------|----|------|
|**allIntentToFiles**                  |           | [x] | [ ] |
|**associatedBenefitClaimId**          |           | [x] | [ ] |
|**corpParticipantId**                 |           | [x] | [ ] |
|**expirationDate**                    |           | [x] | [ ] |
|**intentToFileID**                    |           | [x] | [ ] |
|**receivedDate**                      |           | [x] | [ ] |
|**source**                            |           | [x] | [ ] |
|**status**                            |           | [x] | [ ] |
|**type**                              |           | [x] | [ ] |
|**vetParticipantId**                  |           | [x] | [ ] |
|**associatedBenefitClaimId**          |           | [x] | [ ] |
|**corpParticipantId**                 |           | [x] | [ ] |
|**expirationDate**                    |           | [x] | [ ] |
|**intentToFileID**                    |           | [x] | [ ] |
|**receivedDate**                      |           | [x] | [ ] |
|**source**                            |           | [x] | [ ] |
|**status**                            |           | [x] | [ ] |
|**type**                              |           | [x] | [ ] |
|**vetParticipantId**                  |           | [x] | [ ] |
|**anyHistoricalClaimsConsolidatable** |           | [x] | [ ] |
|**historicalClaims**                  |           | [x] | [-] |
|**(Array of Historical Claims)**      |           | [x] | [-] |
|**openClaims**                        |           | [x] | [x] |
|**(Array of Open Claims)**            |           | [x] | [x] |
