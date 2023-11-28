# Retrieve Banner Message

## Request

**Method**: GET

**Path**: /announcements

**Parameters**:
None

**Headers**:

**optional:** these headers will only be included for users that are logged in

| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|ICN|string|Logged in user's ICN|

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
            { "text": "Issue 1 that is Impacting Submitters",
              "startDate": "2023-10-31T01:30:00.000-05:00",
              "endDate":   "2023-11-28T01:30:00.000-05:00",
              "isPortal":  true
            },
            { "text": "Issue 2 that is Impacting Submitters",
              "startDate": "2023-10-31T01:30:00.000-05:00",
              "endDate":   "2023-11-28T01:30:00.000-05:00",
              "isPortal":  false
            }
         ] 
    }
}
```

</td>
</tr>
</table>

## Notes

* ~CC: This endpoint is necessary to retrieve any known issues on the portal that impact submitters or if we have planned maintenance an SA in CRM is able to create messages that display on the portal~
