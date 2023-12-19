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

## Response [NEEDS CRM REVIEW]

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
                "id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "orange",
                "displayName": null,
                "rankOrder": null
            },
            {
                "id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "grape",
                "displayName": null,
                "rankOrder": null
            },
            {
                "id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "apple",
                "displayName": "granny smith",
                "rankOrder": null
            },
            {
                "id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "other",
                "displayName": "other",
                "rankOrder": 999
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
