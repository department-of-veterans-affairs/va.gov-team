# Upload File

## Request

**Method**: PUT

**Path**: /attachment/new?:inquiryNumber:

**Parameters**:
| Name | Type | Description |
|---|---|---|
|inquiryNumber|string|the inquiry number|

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization (optional)|JWT?|Token for access to the CRM API|
|secid (optional)|string|User security identifier|
|message_id|string|an optional guid for correlating events to aid troubleshooting|


**Body**:
```json
    {
      "fileContent": "base64_encoded_string",
      "fileName": "",
      "inquiryId": "a6c3af1b-ec8c-ee11-8178-001dd804e106",
      "correspondenceId": "b7c3af1b-ec8c-ee11-8178-001dd804e106"
    }        
```

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
            "inquiryNumber": "123456",
            "queueSLA": "2 days"
        }
    }
}
```

</td>
</tr>
<tr>
<td> 200 </td>
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

## Example Calls / Responses

https://dev.integration.d365.va.gov/eis/vagov.lob.ava/api/attachment/new?organizationName=iris-dev

### Body

```
{
    "fileContent": "PGZldGNoIHZlcnNpb249IjEuMCIgb3V0cHV0LWZvcm1hdD0ieG1sLXBsYXRmb3JtIiBtYXBwaW5nPSJsb2dpY2FsIiBkaXN0aW5jdD0iZmFsc2UiPgogIDxlbnRpdHkgbmFtZT0icXVldWUiPgogICAgPGF0dHJpYnV0ZSBuYW1lPSJpcmlzX2xpbmVvZmJ1c2luZXNzZGlzcGxheW5hbWUiIC8+CiAgICA8ZmlsdGVyIHR5cGU9ImFuZCI+CiAgICAgIDxmaWx0ZXIgdHlwZT0iYW5kIj4KICAgICAgICA8ZmlsdGVyIHR5cGU9Im9yIj4KICAgICAgICAgIDxmaWx0ZXIgdHlwZT0ib3IiPgogICAgICAgICAgICA8ZmlsdGVyIHR5cGU9ImFuZCI+CiAgICAgICAgICAgICAgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9ImlyaXNfYWxsb3dyZXJvdXRlIiBvcGVyYXRvcj0iZXEiIHZhbHVlPSIwIiAvPgogICAgICAgICAgICAgIDxjb25kaXRpb24gYXR0cmlidXRlPSJpcmlzX3F1ZXVlbG9iIiBvcGVyYXRvcj0iY29udGFpbi12YWx1ZXMiPgogICAgICAgICAgICAgICAgPHZhbHVlPjcyMjMxMDAwMTwvdmFsdWU+CiAgICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDwvZmlsdGVyPgogICAgICAgICAgICA8ZmlsdGVyIHR5cGU9ImFuZCI+CiAgICAgICAgICAgICAgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9ImlyaXNfYWxsb3dyZXJvdXRlIiBvcGVyYXRvcj0iZXEiIHZhbHVlPSIwIiAvPgogICAgICAgICAgICAgIDxjb25kaXRpb24gYXR0cmlidXRlPSJpcmlzX3F1ZXVlbG9iIiBvcGVyYXRvcj0iY29udGFpbi12YWx1ZXMiPgogICAgICAgICAgICAgICAgPHZhbHVlPjcyMjMxMDAyMTwvdmFsdWU+CiAgICAgICAgICAgICAgPC9jb25kaXRpb24+CiAgICAgICAgICAgIDwvZmlsdGVyPgogICAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgICA8Y29uZGl0aW9uIGF0dHJpYnV0ZT0iaXJpc19hbGxvd3Jlcm91dGUiIG9wZXJhdG9yPSJlcSIgdmFsdWU9IjEiIC8+CiAgICAgICAgPC9maWx0ZXI+CiAgICAgICAgPGNvbmRpdGlvbiBhdHRyaWJ1dGU9ImlyaXNfaXNhdmEiIG9wZXJhdG9yPSJlcSIgdmFsdWU9IjEiIC8+CiAgICAgIDwvZmlsdGVyPgogICAgICA8Y29uZGl0aW9uIGF0dHJpYnV0ZT0ic3RhdGVjb2RlIiBvcGVyYXRvcj0iZXEiIHZlPSIwIiAvPgogICAgPC9maWx0ZXI+CiAgPC9lbnRpdHk+CjwvZmV0Y2g+",
    "fileName": "TestFileValid.txt",
    "inquiryId": "259b1db2-b62b-ee11-805a-00155da03719",
    "correspondenceId": "cd181a41-b72b-ee11-9965-001dd8305eae"
}
```

### Response

```
{
    "Data": {
        "Id": "1c1f5631-9edf-ee11-904d-001dd8306b36"
    },
    "Message": "",
    "ExceptionOccurred": false,
    "ExceptionMessage": "",
    "MessageId": "4580e1f5-3d52-48e2-93cd-7a81198d0ef2"
}
```

### Postman Screenshot

![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/89649306/71eea084-8f26-4eb6-b9af-5cdc3941ea0a)

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
## Tasks / Comments

* CC: Success should return the Inquiry Number and the Queue SLA (queue.iris_sla) for inclusion on the Confirmation page
