# Get Categories

## Request

**Method**: GET

**Path**: /categories

**Parameters**:
None

**Headers**:
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
        "data": [
            {
                "id": "1",
                "category": "category"
            }
        ] 
    }
}
```

</td>
</tr>
<tr>
<td> 403 </td>
<td>

```json
{
    "status": {
        "code": 403,
        "message": "Unauthorized."
    }
}
```

</td>
</tr>
</table>

## Notes
