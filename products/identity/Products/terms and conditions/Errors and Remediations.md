# Errors and Remediations

Several errors can be encountered as users interact with the terms of use functionality. This document describes possible errors and remediation procedures.

The HTTP status codes for each endpoint described below correspond to different success or error states. Status codes in the 200 range indicate the request was successful, status codes in the 400 range indicate the request was unable to be processed, and status codes in the 500 range indicate the server experienced an error while processing the request.

## Accept

Requests to the `/accept` endpoint indicate a user has accepted the terms of use by clicking the “Accept” button while viewing the Terms of Use.

### Responses

**200 - OK (Success)**

Returned when the request was processed successfully.

**201 - Created (Success)**

Returned when the request was processed successfully.

**422 - Bad Request (Error)**

Returned when the request failed validation, typically due to a verification issue due to the MPI record missing ICN or common name. Reach out to MPI to update data for repeated 422s.

**500 - Server Error (Error)**

Returned when the server had trouble processing the request. All server errors are logged and investigated by the Identity team.

## Decline

Requests to the `/decline` endpoint indicate a user has declined the terms of use by clicking the “Decline” button while viewing the Terms of Use.

### Responses

**200 - OK (Success)**

Returned when the request was processed successfully.

**201 - Created (Success)**

Returned when the request was processed successfully.

**500 - Server Error (Error)**

Returned when the server had trouble processing the request. All server errors are logged and investigated by the Identity team.

## Update Provisioning

Requests to the `/update_provisioning` endpoint indicate the system has attempted to provision a user record in Sign up Service.

This occurs when authentication begins at MyVAHealth (Cerner). The application creates a cookie used for determining whether a user
should be redirected to the terms of use page or redirected back to MyVAHealth.

### Responses

**200 - OK (Success)**

User has agreed to the latest document and is provisioned to Cerner, if eligible

**201 - Created (Success)**

User has agreed to the latest document and is provisioned to Cerner, if eligible

**406 - Not Acceptable (Success)**

User has no Cerner association.

**412 - Precondition Failed (Success)**

Returned when the user has not agreed to or has opted out of the latest document version.

**422 - Unprocessable Entity (Error)**

Invalid Request. E.g., Invalid ICN, missing required provisioning request data in request body, or provisionUser set to false

This error code is returned when provisioning has failed, likely as a result of a malformed request or an integration issue between the backend and the Sign Up Service. Such errors are logged and investigated by the Identity team.

**500 - Server Error (Error)**

Returned when the server had trouble processing the request. All server errors are logged and investigated by the Identity team.

## Latest

Requests to this endpoint indicate the system is attempting to retrieve the most recent record of a user’s terms of use agreement. This occurs when the page is loaded and the user information is retrieved from the back-end.

### Responses

**200 - OK (Success)**

Returned when the request was processed successfully.

**401 - Unauthorized (Error)**

Returned when the user’s authorization has expired. Error is remediated by reauthorizing the user.

**500 - Server Error (Error)**

Returned when the server had trouble processing the request. All server errors are logged and investigated by the Identity team.
