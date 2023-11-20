# Retrieve Inquiries

## Request

**Method**: GET

**Path**: /inquiries

**Parameters**:
None

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|User ICN|

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

* ~CC: No Pagination - all inquiries for a submitter would be returned in the call~
* ~CC: Inactive inquiries and Status not (New, InProgress, ReOpened, Solved) will be filtered out by default~
* ~CC: Handling of Attachments -- Include an array of Attachment IDs for the inquiry.  Access is part of view inquiry process.~

