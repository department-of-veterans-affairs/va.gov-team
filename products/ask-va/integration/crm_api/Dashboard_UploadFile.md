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

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
## Tasks / Comments

* CC: Success should return the Inquiry Number and the Queue SLA (queue.iris_sla) for inclusion on the Confirmation page
