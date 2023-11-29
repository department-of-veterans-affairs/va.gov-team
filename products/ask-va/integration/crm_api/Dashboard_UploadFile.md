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

* CC: Success should return the Inquiry Number and the Queue SLA (queue.iris_sla) for inclusion on the Confirmation page
