# Get Option Sets

## Request

**Method**: GET

**Path**: /optionset?{name}

**Parameters**:

| Name | Type | Description |
|---|---|---|
|name|string|the key of the  optionset to retrieve|

**Allowed `name` Values:**

1. iris_inquiryabout
2. iris_inquirysource
3. iris_inquirytype
4. iris_levelofauthentication
5. iris_suffix
6. iris_veteranrelationship
7. iris_branchofservice
8. iris_country
9. iris_dependentrelationship
10. iris_responsetype
11. iris_province

**Headers**:

| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|The logged in user's ICN|
|message_id|string|an optional guid for correlating events to aid troubleshooting|

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
        "message_id": "f3acbf6e-8d55-4d99-895c-86e4c41f8aa2", 
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
                "name": "Other",
                "rank": 999
            }
        ] 
    }
}
```

</td>
</tr>
</table>

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
