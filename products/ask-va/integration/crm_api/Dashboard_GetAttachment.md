# Get Attachment

## Request

**Method**: GET

**Path**: /attachment?:attachmentId:

**Parameters**:
| Name | Type | Description |
|---|---|---|
|attachmentId|string|the id of the attachment|

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization (optional)|JWT?|Token for access to the CRM API|
|secid (optional)|string|User security identifier|


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
