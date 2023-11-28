# Retrieve Inquiry

## Request

**Method**: GET

**Path**: /inquiries?:inquiryNumber:

**Parameters**:
| Name | Type | Description |
|---|---|---|
|inquiryNumber|string|the inquiry number|

**Headers**:

**optional:** these headers will only be included for users that are logged in

| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|The logged in user's ICN|

## Response

<table>
<tr>
<td> Status </td> <td> Response </td>
</tr>
<tr>
<td> 200 </td>
<td>

```json
{ 
    "status": { 
        "code": 200, 
        "message": "OK", 
        "data": {
          "id": "a6c3af1b-ec8c-ee11-8178-001dd804e106",
          "inquiryNumber": "A-123456",
          "inquiryStatus": "In Progress",
          "submitterQuestion": "My question is...",
          "lastUpdate": "1/1/1900",
          "inquiryHasAttachments": true,
          "inquiryHasBeenSplit": true,
          "veteranRelationship": "self",
          "schoolFacilityCode": "0123",
          "inquiryTopic": "topic",
          "inquiryLevelOfAuthentication": "Pseronal",
          "attachmentNames": [
            {
              "id": "a123af1b-ec8c-ee11-8178-001dd804e106",
              "name": "File A.pdf"
            }
          ]
        }
    }
}
```

</td>
</tr>
<tr>
<td> 404 </td>
<td>

```json
{ 
    "status": { 
        "code": 404, 
        "message": "Inquiry Not Found"
    }
}
```

</td>
</tr>
</table>

## Notes


