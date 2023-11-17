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
                "id": "1",
                "topic": "topic 1"
            },
            {
                "id": "2",
                "topic": "topic 2"
            }
        ] 
    }
}
```

</td>
</tr>
</table>

## Notes
