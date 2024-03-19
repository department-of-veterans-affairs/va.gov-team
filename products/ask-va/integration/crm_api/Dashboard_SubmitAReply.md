# Submit Reply 

## Request

**Method**: PUT

**Path**: /inquiries/:id:/reply/new

**Parameters**:
| Name | Type | Description |
|---|---|---|
|id|string|Inquiry Number that is being replied to|

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|User ICN|
|message_id|string|an optional guid for correlating events to aid troubleshooting|


**Body**:
```json
{
  "reply": "this is my reply"
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
            "correspondenceId": "123456"
        }
    }
}
```

</td>
</tr>
<tr>
<td> 400 </td>
<td>

```json
{ 
    "status": { 
        "code": 400, 
        "message": "Reply window for inquiry has expired"
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
        "message": "Inquiry Number Not Found"
    }
}
```

</td>
</tr>
</table>

## UPDATES FROM CRM HANDOFF

Example (DEV) API endpoint URL:

https://dev.integration.d365.va.gov/eis/vagov.lob.ava/api/Inquiries/A-20230305-306178/reply/new

### Example Response

```
{
    "Data": {
        "Id": "329fd2d1-01e2-ee11-904d-001dd8306a72"
    },
    "Message": "",
    "ExceptionOccurred": false,
    "ExceptionMessage": "",
    "MessageId": "a30baf4b-72ec-41ef-9150-e334ed102939"
}
```

### Example Body

```
{
    "Reply": "Test123"
}
```

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
