# Get Option Sets

## Request

**Method**: GET

**Path**: /optionset?{name}

**Parameters**:
| Name | Type | Description |
|---|---|---|
|name|string|the key of the  optionset to retrieve|

**Allowed Values:**

1. inquiryabout
2. inquirysource
3. inquirytype
4. levelofauthentication
5. suffix
6. veteranrelationship
7. branchofservice
8. country
9. dependentrelationship
10. getintouch
11. province

**Headers**:

**optional:** these headers will only be included for users that are logged in

| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|The logged in user's ICN|

## Response [NEEDS JOE Updates]

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
                "id": 1,
                "name": "orange"
            },
            {
                "id": 2,
                "name": "grape"
            },
            {
                "id": 3,
                "name": "apple"
            },
            {
                "id": 4,
                "name": "Other"
            }
        ] 
    }
}
```

</td>
</tr>
</table>

## Notes [NEEDS CRM REVIEW]

None.
(JOE: Verify that this matches what JD sent in Teams)
(JOE: Include the "iris_" prefix for names, but not automatically)
JD: Have a message id, to help track specific transactions -- include in all responses from all endpoints? if we include one, it will be used, otherwise it will be generated for us and passed back. 
