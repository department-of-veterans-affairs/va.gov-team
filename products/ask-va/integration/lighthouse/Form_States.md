# Get States

## Request

**Method**: GET

**Path**: /states

**Parameters**:
None

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
        "data": ["Alabama", "Alaska", ...]
    }
}
```

</td>
</tr>
</table>

## Notes
* There's 58 states in the CRM system.  50 states + DC, American Samoa (AS), Guam (GU), Phillippines (PH), Puerto Rico (PR), US Virgin Islands (VI).  Then the 2 that dont have abbreviations: "Trust Territories", and "Foreign/Other"* 
* Use the state abbreviations in both directions (when you send us inquiries and when we send you schools).  And the 2 missing abbreviations would be FO and TT (Foreign/Other == FO and Trust Territories == TT)
