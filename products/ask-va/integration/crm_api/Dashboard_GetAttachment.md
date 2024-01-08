# Get Attachment

## Request

**Method**: GET

**Path**: /attachment?:id:

**Parameters**:
| Name | Type | Description |
|---|---|---|
|id|string|the id of the attachment|

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization (optional)|JWT?|Token for access to the CRM API|
|secid (optional)|string|User security identifier|
|message_id|string|an optional guid for correlating events to aid troubleshooting|


**Body**:
```json
   
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
        "data":  {
          "fileContent": "base64_encoded_string",
          "fileName": "this is the filename.pdf"
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
        "message": "Attachment Not Found"
    }
}
```

</td>
</tr>
</table>

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
