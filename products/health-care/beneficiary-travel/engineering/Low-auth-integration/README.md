# Low Auth Integration 

## Problem Definition 

Currently the PCI integration uses LoROTA for their authentication source. LoROTA is a low-row authentication flow that provides a easy way to for Veterans to do a thing on va.gov. Currently its used in the Patient Check In flow. 

The newly built Travel Pay API only supports fully authenticated users. 

## High level Requirements

- Scope tokens allow system to system auth to only access certain API endpoints and data?
- Leverage system to system authentication flows for PCI 
- Let PCI (and other clients) handle the authentication. This means that Travel Pay API will not integrate with LoROTA

## More details 

- We add scoped permissions to the the API 
    - such as `claims/submit.simple` and `claims/status.read`
    - we should default to none and have the client need to add the scope in the token generation 
- Vets-api would create tokens that just for simple claims and *maybe* claims status depending on use case


## Use Cases

```
As an API, 
I should be able to issue a token to system  
so that a client system can interact with the API on behalf of a User
```

```
As an API
The tokens I issue should be scoped to specific Veterans data
so that those tokens can only be used on behalf of a specific Veteran 
```

```
As an API
The tokens I issue should be scope to specific actions 
so that those tokens can only access certain API endpoints. 
```


```
As an API
The API endpoints that are exposed should follow the scopes defined in the token 
to only allow work that is permitted to happen
```

## Examples

to get a token

```sh
curl -X 'POST' \
  'https://va-veis-dev-apim.veis.va.gov/api/btsss/travelclaim/api/v1/auth/system-access-token' \
  -H 'accept: application/json' \
  -H 'BTSSS-API-Client-Number: 1234' \
  -H "BTSSS-API-scope": "claims/submit.simple,claims/status.read, user/{icn}", 
  -H 'Content-Type: application/json' \
  -d '{
    "secret": "string",
  }'
```

sample response, this was a direct copy from the existing system-to-system auth

``` json
{
  "correlationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "timeStamp": "2024-08-14T18:21:22.933Z",
  "statusCode": 0,
  "message": "string",
  "success": true,
  "data": {
    "accessToken": "string"
  }
}
```


## full flow diagram 

This is simplified flow diagram to show how LoROTA interacts with PCI

``` mermaid
    sequenceDiagram
        actor vet as Veteran
        participant PCI as Patient Check In App (va.gov)
        participant vets-api as vets-api
        participant LoROTA as LoROTA
        participant tpapi as Travel Pay API
        participant btsss as BTSSS Dynamics

        PCI -> LoROTA: before a Veterans appointment, create a LoROTRA entry
        note over LoROTA: This entry has a UUID as a look up key and a JSON data that holds<br/>the Veterans the data needed to check in, such as appointment details and profile information 
        PCI -> vet: Sends a text message with the UUID in the url 
        vet -> PCI: directed to va.gov via text with unique URL (that contains uuid)
        note over PCI: shown a log in screen. Provides last name and date of birth
        PCI -> LoROTA: sends { uuid, last name, DoB } to authenticate
        LoROTA -> PCI: returns a token with the permissions 
        PCI -> LoROTA: Uses token + uuid to query for data
        note over PCI: Veteran goes through the check in process
        alt Veteran opts into submitting a simple claim 
            PCI -> vets-api: sends {ICN, appt details}
            vets-api -> tpapi: request system to system auth token
            note right of vets-api: This should use a limited scoped/permissive credentials 
            vets-api -> tpapi: submits simple claim
            tpapi -> btsss: creates and submits claim 
        else  Veteran opts for complex claim
            note over PCI: displays a message saying to use the claims tool on va.gov/BTSSS portal
            note over PCI: a complex claim should require a fully auth'd user                
        end
```
        
        


## Assumed Risks

- We are not validating that the token or ICN with the Identity system, but this is the known and accepted risk about using a LoROTA based authentication system. This is mitigated by only exposing certain  

## Resources & Links