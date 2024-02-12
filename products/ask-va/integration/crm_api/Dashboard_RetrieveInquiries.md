# Retrieve Inquiries

## Request

**Method**: GET

**Path**: /inquiries

**Parameters**:
inquiryNumber (optional)

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|User ICN|
|message_id|string|an optional guid for correlating events to aid troubleshooting|

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
        "data": [
            {
                "id": "a6c3af1b-ec8c-ee11-8178-001dd804e106",
                "inquiryNumber": "A-123456",
                "inquiryStatus": "In Progress",
                "submitterQuestion": "My question is... ",
                "lastUpdate": "1/1/1900",
                "inquiryHasAttachments": true,
                "inquiryHasBeenSplit": true,
                "veteranRelationship": "self",
                "schoolFacilityCode": "0123",
                "inquiryTopic": "topic",
                "inquiryLevelOfAuthentication": "Personal",
                "attachmentNames": [
                    {
                        "id": "012345", 
                        "name": "File A.pdf"
                    }
                ]
            }
        ] 
    }
}
```

</td>
</tr>
<tr>
<td> 403 </td>
<td>

```json
{
    "status": {
        "code": 403,
        "message": "Unauthorized."
    }
}
```

</td>
</tr>
</table>

## Notes

* UPDATE: When provided, the ICN will be used to filter the full list of inquiry elements. If the ICN is not provided, the `inquiryNumber` is required and a single inquiry entity will be returned. In either scenario, the results will be displayed in the Dashboard. The user will have to drill down to see any details, attachments, or replies.
* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
## Tasks / Comments

* ~CC: No Pagination - all inquiries for a submitter would be returned in the call~
* ~CC: Inactive inquiries and Status not (New, InProgress, ReOpened, Solved) will be filtered out by default~
* ~CC: Handling of Attachments -- Include an array of Attachment IDs for the inquiry.  Access is part of view inquiry process.~

