# Retrieve Announcements

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

* The response will include a `message_id` to help track specific transactions. This is __**included in all responses**__ from all endpoints, and is accepted as a header value in requests. If an id is specified in the request, it will be returned in the response. If no id is specified, it will be generated automatically and passed back in the response.
* The `Authorization` and `ICN` header values will only be included for users that are logged in.
 
## Tasks / Comments

* ~CC: This endpoint is necessary to retrieve any known issues on the portal that impact submitters or if we have planned maintenance an SA in CRM is able to create messages that display on the portal~
