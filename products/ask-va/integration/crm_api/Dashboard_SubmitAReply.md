# Submit Reply 

## Request

**Method**: POST

**Path**: /inquiries/:inquiryNumber:/reply

**Parameters**:
| Name | Type | Description |
|---|---|---|
|inquiryNumber|string|Inquiry Number that is being replied to|

**Headers**:
| Name | Type | Description |
|---|---|---|
|Authorization (optional)|JWT?|Token for access to the CRM API|
|secid (optional)|string|User security identifier|


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

## Notes
