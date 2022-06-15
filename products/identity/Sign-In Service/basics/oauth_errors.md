# Sign in Service Errors

<details>
  <summary><h2>Requesting an Authorization via <code>/authorize</code></h2></summary>
This is a table of possible errors when trying to use OAuth on the `/authorize` endpoint

| Status Code | Error | Description |
| --- | --- | --- |
| 400 | `invalid_request` | Request is malformed. (Missing, repeated, or unsupported parameter) |
| 401 | `unauthorized_client` | Client authentication failed, such as if the request contains an invalid client_id. |
| 401 | `access_denied` | The resource owner denied the request for authorization (User canceled or denied to sign in) |
| 400 | `invalid_scope` | The requested scope is malformed or invalid |
| 400 | `unsupported_response_type` | The requested response type is not supported |
| 500 | `server_error` | Unexpected error |
| 503 | `server_unavailable` | The authorization server is not able to handle the request |
</details>

<details>
  <summary><h2>Requesting an Access Token via <code>/token</code></h2></summary>
This is a table of possible errors when trying to use OAuth on the `/token` endpoint

| Status Code | Error | Description |
| --- | --- | --- |
| 400 | `invalid_request` | Request is malformed. (Missing, repeated, or unsupported parameter) |
| 401 | `invalid_client` | Client authentication failed. |
| 400 | `invalid_grant` | Invalid authorization grant, grant invalid/expired/revoked |
| 400 | `invalid_scope` | The requested scope is malformed or invalid |
| 401 | `unauthorized_client` | This client is not authorized to use the requested grant type. |
| 400 | `unsupported_grant_type` | The authorization grant is not supported by Authz Server |
</details>

<details>
  <summary><h2>Requesting a Refresh via <code>/refresh</code></h2></summary>
This is a table of possible errors when trying to use OAuth on the `/refresh` endpoint

| Status Code | Error | Description |
| --- | --- | --- |
| 400 | `invalid_request` | Request is malformed. (Missing, repeated, or unsupported parameter) |

</details>
  
  <details>
  <summary><h2>Requesting a Revoke via <code>/revoke</code></h2></summary>
This is a table of possible errors when trying to use OAuth on the `/revoke` endpoint

| Status Code | Error | Description |
| --- | --- | --- |
| 400 | `invalid_request` | Request is malformed. (Missing, repeated, or unsupported parameter) |

</details>
