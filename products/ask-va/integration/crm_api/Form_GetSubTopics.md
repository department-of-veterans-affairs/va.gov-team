# Get SubTopics

## Request

**Method**: GET

**Path**: /topics/:topicId:/subtopics

**Parameters**:
| Name | Type | Description |
|---|---|---|
|topicId|string|the topic for which to get subtopics for|

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
        "data": [
            {
                "id": "1",
                "subtopic": "subtopic 1"
            },
            {
                "id": "2",
                "subtopic": "subtopic 2"
            }
        ] 
    }
}
```

</td>
</tr>
</table>

## Notes
