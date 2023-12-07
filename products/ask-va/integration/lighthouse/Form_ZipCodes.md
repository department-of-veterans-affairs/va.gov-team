# Get ZipCodes

## Request

**Method**: GET

**Path**: /lookup/zip/:prefix:

**Parameters**:
| Name | Type | Description |
|---|---|---|
|prefix|string|The first few characters of a zip code|

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
        "data": ["20234", "20235", ...]
    }
}
```

</td>
</tr>
</table>

## Notes

* CC: 1000s of these, we do not currently have a process to update the list
