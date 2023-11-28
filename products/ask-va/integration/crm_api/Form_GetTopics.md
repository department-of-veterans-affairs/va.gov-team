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
                "AllowAttachments": true,
                "RequiresAuthentication": true,
                "Id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
                "Name": "topic 1",
                "DisplayName": "topic 1",
                "ParentId": "a6c3af1b-ec8c-ee11-8178-001dd804e106"
            },
            {
                "AllowAttachments": false,
                "RequiresAuthentication": true,
                "Id": "c8c3af1b-ec8c-ee11-8178-001dd804e106",
                "Name": "topic 2",
                "DisplayName": "topic 2",
                "ParentId": "d9c3af1b-ec8c-ee11-8178-001dd804e106"
            },
        ] 
    }
}
```

</td>
</tr>
</table>

## Notes
