# Get Ping Response

## Request

**Method**: GET

**Path**: /ping

**Parameters**:
None

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
        "message": "pong"
    }
}
```

</td>
</tr>
</table>

## Notes

The `/ping` endpoint takes no parameters, and returns the static message, "pong". This is the simplest endpoint for the Dymanics APIs. It will allow us to make sure that our AWS services can call out to the Azure services and get a response across the cloud boundaries.

If there's a concept of a version number for the Dynamics deploys, a good stretch goal would be to return that version and the hosting environment as the data value. For example:

```json
{ 
    "status": { 
        "code": 200, 
        "message": "pong", 
        "data": { "version": "v1.2.3", "environment": "STAGING" }
    }
}
```
