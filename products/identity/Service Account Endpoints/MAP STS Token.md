# Token

## Description

Used to obtain a token from the STS service for use with MAP services.

## Token endpoint

```
Staging: 'https://staging-api.va.gov/v0/map_services/<application>/token'
Production: 'https://api.va.gov/v0/map_services/<application>/token'
```

## Parameters

This endpoint requires path parameters; the full path to the endpoint (including path parameters) must be configured as a scope for the `ServiceAccountConfig`.

| Parameter | Description |
| --- | --- |
| `application` | Must correspond to an application configured for use with the MAP STS service. |


## Access Token User Attributes Claims

This endpoint requires user information contained within the `user_attributes` claim of the service account access token. The claims must be configured for inclusion in the `user_attributes` for the `ServiceAccountConfig`.

| User Attributes | Description |
| --- | --- |
| `icn` | The ICN identifier for a user on whose behalf the STS token is being requested for. |


## Sample request

```
POST staging-api.va.gov/v0/map_services/chatbot/token
Headers:
  Authorization: Bearer <service account access token>
```

## Sample response

### Success
**Status**: 200 OK

```javascript
{
    "access_token": "<token hash>",
    "expiration": "2023-12-13T17:35:50.282Z"
}
```

### Failure (STS server error)
**Status**: 502 Bad Gateway

```javascript
{
    "error": "server_error",
    "error_description": "STS failed to return a valid token."
}
```

### Failure (Missing ICN)
**Status**: 400 Bad Request

```javascript
{
    "error": "invalid_request",
    "error_description": "Service account access token does not contain an ICN in `user_attributes` claim."
}
```

### Failure (Application not configured for STS)
**Status**: 400 Bad Request

```javascript
{
    "error": "invalid_request",
    "error_description": "Application mismatch detected."
}
```

## Notes

* The `ServiceAccountConfig` must include the endpoint as a scope.
* The `ServiceAccountConfig` must be configured to allow the `icn` claim within the access token user attributes.
* The assertion used to obtain a service account access token must include the `user_attributes` claim with an `icn` property corresponding to the identifier for the specific user.
* The MAP STS service within `vets-api` is configured for use by a limited subset of applications; the application must be configured before tokens are able to be obtained.
