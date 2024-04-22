# Get Topics

## Request

**Method**: GET

**Path**: /topics?{id}

**Parameters**:
| Name | Type | Description |
|---|---|---|
|id|string|the parent category id or topic id from which to retrieve a list of topics or subtopics|

This parameter is optional. 

1. If no {parenntId} is specified, a list of categories is returned.
2. Passing in a selected category's {parentId} will retrieve a list of topics for that category.
2. Passing in a selected topic's {parentId} will retrieve a list of subtopics for that topic.

**Headers**:

**optional:** these headers will only be included for users that are logged in

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

## Notes

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
## Tasks / Comments

* Topics sorted by rank for categories, as most popular order. New UI will sort by rank, then alpha, where Rank = NULL for alphabetical, then Rank = 999 for Other. Shouldn’t be extra effort. JD: if we start putting the 999 into other, could change the current portal’s roll-out. Avoid sort inconsistencies on the existing portal if the new portal cannot be rolled out. RankOrder. Add that to schema. (JH: Done)
