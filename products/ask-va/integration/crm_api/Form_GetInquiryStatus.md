# Retrieve Inquiry Status

## Request

**Method**: GET

**Path**: /inquirystatus?:inquiryNumber:

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
    "Status": "InProgress",
    "Message": null,
    "ExceptionOccurred": false,
    "ExceptionMessage": null,
    "MessageId": "a6be0cd1-e9c6-4b0e-805c-66e8181f8c06"
}
```

</td>
</tr>
<tr>
<td> 404 </td>
<td>

```json
{
    "Status": null,
    "Message": "Data Validation: No Inquiries found",
    "ExceptionOccurred": true,
    "ExceptionMessage": "Data Validation: No Inquiries found",
    "MessageId": "3c8944df-2871-42e2-a882-f0568f18f7e2"
}
```

</td>
</tr>
</table>

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.

## Example Postman Call

https://dev.integration.d365.va.gov/vagov.lob.ava/api/InquiryStatus?OrganizationName=iris-dev&InquiryNumber=A-20240124-306903

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/c271d6ba-dc8c-4ae8-89cc-2368830525ca)
