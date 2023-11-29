# Get Topics

## Request

**Method**: GET

**Path**: /topics?[parentId]

**Parameters**:
| Name | Type | Description |
|---|---|---|
|parentId|string|the parent category or topic from which to retrieve a list of topics or subtopics|

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
                "parentId": "a6c3af1b-ec8c-ee11-8178-001dd804e106"
            },
            {
                "allowAttachments": false,
                "requiresAuthentication": true,
                "id": "c8c3af1b-ec8c-ee11-8178-001dd804e106",
                "name": "topic 2",
                "displayName": "topic 2",
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
