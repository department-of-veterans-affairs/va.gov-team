# Benefits API

Note: This is a draft. Official spec will be done using apipie or other tool that generates documentation from code based on DSVA recommendation.

## List claims

### Request
`GET /claims`

### Response
```
HTTP 200
{
  claims: [
    {
      id: 123,
      maxEstClaimDate: '10/01/2016',
      minEstClaimDate: '01/03/2017',
      status: 'PEND',
      dateFiled: '08/29/2016'
    },
    ...
  ]
}
```

## Get claim

### Request
`GET /claim/:id`

### Response
```
HTTP 200
{
  claim:
    {
      status: 'PEND',
      dateFiled: '08/29/2016',
      maxEstClaimDate: '10/01/2016',
      minEstClaimDate: '01/03/2017',
      claimTrackedItems: {
        stillNeedFromYouList: [
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
          stillNeedFromOthersList: [],
          receivedFromYouList: [],
          receivedFromOthersList: [
            {
               "description": "21-4142",
               "displayedName": "Request 9",
               "overdue": false,
               "receivedDate": "02/17/2010",
               "trackedItemId": 1,
               "trackedItemStatus": "ACCEPTED",
               "uploaded": false,
               "uploadsAllowed": false
            }
          ]
        ]
      }
    }
}
```


## List claim documents

### Request
`GET /claims/:claim_id/documents`

### Response
```
HTTP 200
{
  documents: [
    {
      ...
    },
    ...
  ]
}
```

## Upload a document

### Request
`POST /claims/:claim_id/documents`

### Response
```
HTTP 200
{
  document: {
    ...
  }
}
```

## Delete a document

### Request
`DELETE /claims/:claim_id/documents/:id`

### Response
```
HTTP 200
{
  document: {
    ...
  }
}
```
