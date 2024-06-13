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



## Updated Response Notes

You can pass in either a ICN like so:

https://dev.integration.d365.va.gov/vagov.lob.ava/api/inquiries?id=1013694290V263188&organizationName=iris-dev

```
{
    "Data": [
        {
            "Id": "154163f2-8fbb-ed11-9ac4-00155da17a6f",
            "InquiryNumber": "A-20230305-306178",
            "InquiryStatus": "InProgress",
            "SubmitterQuestion": "test",
            "LastUpdate": "2/23/2024 12:00:00 AM",
            "InquiryHasAttachments": false,
            "InquiryHasBeenSplit": false,
            "VeteranRelationship": "GIBillBeneficiary",
            "SchoolFacilityCode": "77a51029-6816-e611-9436-0050568d743d",
            "InquiryTopic": "Medical Care Concerns at a VA Medical Facility",
            "InquiryLevelOfAuthentication": "Unauthenticated",
            "AttachmentNames": [
                {
                    "Id": "367e8d31-6c82-1d3c-81b8-dd2cabed7555",
                    "Name": "Test.txt"
                }
            ]
        },
        {
            "Id": "b24e8113-92d1-ed11-9ac4-00155da17a6f",
            "InquiryNumber": "A-20230402-306218",
            "InquiryStatus": "New",
            "SubmitterQuestion": "test",
            "LastUpdate": "1/1/0001 12:00:00 AM",
            "InquiryHasAttachments": false,
            "InquiryHasBeenSplit": false,
            "VeteranRelationship": null,
            "SchoolFacilityCode": "77a51029-6816-e611-9436-0050568d743d",
            "InquiryTopic": "Medical Care Concerns at a VA Medical Facility",
            "InquiryLevelOfAuthentication": "Personal",
            "AttachmentNames": null
        }
    ],
    "Message": null,
    "ExceptionOccurred": false,
    "ExceptionMessage": null,
    "MessageId": "5a95ae6c-f2e8-49b8-b447-889f5cdb5ade"
}
```

Or you can pass in the inquiry number like so:

https://dev.integration.d365.va.gov/vagov.lob.ava/api/inquiries?id=A-20230305-306178&organizationName=iris-dev

```
{
    "Data": [
        {
            "Id": "154163f2-8fbb-ed11-9ac4-00155da17a6f",
            "InquiryNumber": "A-20230305-306178",
            "InquiryStatus": "InProgress",
            "SubmitterQuestion": "test",
            "LastUpdate": "2/23/2024 12:00:00 AM",
            "InquiryHasAttachments": false,
            "InquiryHasBeenSplit": false,
            "VeteranRelationship": "GIBillBeneficiary",
            "SchoolFacilityCode": "77a51029-6816-e611-9436-0050568d743d",
            "InquiryTopic": "Medical Care Concerns at a VA Medical Facility",
            "InquiryLevelOfAuthentication": "Unauthenticated",
            "AttachmentNames": [
                {
                    "Id": "367e8d31-6c82-1d3c-81b8-dd2cabed7555",
                    "Name": "Test.txt"
                }
            ]
        }
    ],
    "Message": null,
    "ExceptionOccurred": false,
    "ExceptionMessage": null,
    "MessageId": "8c0021b2-b0cd-4880-82c0-7e24d3398f18"
}
```

Both are returning 200.




## Example Postman Call

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/fed199c2-38b1-496e-94ec-6752d27815af)



## Notes

* UPDATE: When provided, the ICN will be used to filter the full list of inquiry elements. If the ICN is not provided, the `inquiryNumber` is required and a single inquiry entity will be returned. In either scenario, the results will be displayed in the Dashboard. The user will have to drill down to see any details, attachments, or replies.
* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
## Tasks / Comments

* ~CC: No Pagination - all inquiries for a submitter would be returned in the call~
* ~CC: Inactive inquiries and Status not (New, InProgress, ReOpened, Solved) will be filtered out by default~
* ~CC: Handling of Attachments -- Include an array of Attachment IDs for the inquiry.  Access is part of view inquiry process.~

