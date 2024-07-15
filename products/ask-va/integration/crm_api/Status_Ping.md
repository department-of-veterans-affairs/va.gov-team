# Get Ping Response

## Request

**Method**: GET

**Path**: /ask_va_api/v0/ping

**Parameters**:
* ?organizationName=[env]
    * Environments:  
        * dvagov-iris-dev
        * dvagov-iris-int
        * dvagov-veft-qa
        * dvagov-veft-preprod
        * dvagov-veft

**Headers**:

**optional:** these headers will only be included for users that are logged in

| Name | Type | Description | Required |
|---|---|---|---|
|Authorization|2 parts|Tokens for access to the CRM API| Yes |
|ICN|string|User security identifier| Only for Authenticated Users |

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
        "data": "OK"
    }
}
```

</td>
</tr>
</table>

## Notes

The `/ping` endpoint takes no parameters, and returns the static message, "pong". This is the simplest endpoint for the Dymanics APIs. It will allow us to make sure that our AWS services can call out to the Azure services and get a response across the cloud boundaries.

* [Wide Open Ping](dev.integration.d365.va.gov/veis/vagov.lob.ava/api/ping)
* [Secured Ping](dev.integration.d365.va.gov/veis/vagov.lob.ava.avtest/api/ping)

