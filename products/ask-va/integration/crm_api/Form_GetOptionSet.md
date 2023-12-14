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

## Response [NEEDS UPDATE]

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
                "allowAttachments": true,
                "requiresAuthentication": true,
                "id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "topic 1",
                "displayName": "topic 1",
                "rankOrder": 999,
                "parentId": "a6c3af1b-ec8c-ee11-8178-001dd804e106"
            },
            {
                "allowAttachments": false,
                "requiresAuthentication": true,
                "id": "c8c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "topic 2",
                "displayName": "topic 2",
                "rankOrder": 999,
                "parentId": "d9c3af1b-ec8c-ee11-8178-001dd804e106"
            },
        ] 
    }
}
```

</td>
</tr>
</table>

## Notes [NEEDS UPDATE]

None.
