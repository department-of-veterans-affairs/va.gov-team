# Get Medical Facility Codes

## Request

**Method**: GET

**Path**: /lookup/facilities/medical/:facilityId:

**Parameters**:
| Name | Type | Description |
|---|---|---|
|facilityId|string|The facility id for the medical facility|

**Headers**:

**optional:** these headers will only be included for users that are logged in

| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|secid|string|User security identifier|

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
          "facility": "Facility A",
          "address1": "123 Fake Street",
          "address2": "",
          "city": "Somewhere"
          "state": "Somestate"
          "zip": "12345"
          "phone": "1234567890"
        }
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
        "message": "Facility Not Found"
    }
}
```

</td>
</tr>
</table>

## Notes
