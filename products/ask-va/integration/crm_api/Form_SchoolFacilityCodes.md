# Get School Facility Codes

## Request

**Method**: GET

**Path**: /schools?{facilityId}

**Parameters**:
| Name | Type | Description |
|---|---|---|
|facilityId|string|The facility id for the school facility|

**Headers**:

**optional:** these headers will only be included for users that are logged in

| Name | Type | Description |
|---|---|---|
|Authorization|JWT?|Token for access to the CRM API|
|secid|string|User security identifier|
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
        "data": {
            "id": "a6c3af1b-ec8c-ee11-8178-001dd804e106",
            "city": "Somewhere"
            "state": "Somestate",
            "name": "10000013 - US Department of Justice Bureau",
            "code": "10000013",
            "institutionName": "US Department of Justice Bureau",
            "regionalOffice": "307 - Buffalo"
        }
    }
}
```

</td>
</tr>
<tr>
<td> 404 </td>
<td>

```json
{ 
    "status": { 
        "code": 404, 
        "message": "Facility Not Found"
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

* CC: There are at least 50k of these.  We do not currently update the list from the SoR, but an Agent could add/update one at any time.
* SoR (System of Record) is [WEAMS](https://www.va.gov/education/gi-bill-comparison-tool/)
