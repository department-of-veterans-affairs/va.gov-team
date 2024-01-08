# ⚠️ Sign in Service Errors

This document serves as an reference for Sign in Service (SiS) related errors.

<details>
  <summary>
    <h2>⛑️ Frontend (User-facing)</h2>
    <p>This represents a table of possible error codes that the Front-end might see</p>
  </summary>

### Authorize (`/sign_in/authorize`)
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Client id is not valid** | The `client_id` parameter is not present or not valid | `client_id` must be `web`, `vaweb`, `mobile`, or `vamobile` |
| 400 | **Type is not valid** | The `type` parameter is not present or not valid | `type` must be either `logingov`, `idme`, `dslogon`, or `mhv` |
| 400 | **ACR is not valid** | The `acr` parameter is not present or not valid | `acr` must be either `min`, `ial2`, `loa3` |
| 400 | **Code Challenge is not defined** | The `code_challenge` parameter is not present or not valid | `code_challenge` must be present and not empty or malformed |
| 400 | **Code Challenge Method is not defined** | The `code_challenge_method` parameter is not present or not valid | `code_challenge_method` must be present and not empty or malformed |


### Callback (API: `/sign_in/callback`, Website: `/auth/login/callback`)

| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Code is not valid** | The `code` parameter is not valid | `code` must not be empty or malformed |
| 400 | **Code is not defined** | The `code` parameter is not present | `code` parameter is missing |
| 400 | **State is not defined** | The `state` parameter is not present or not valid | `state` must be present and not empty or malformed |
| n/a | **State mismatch (client-side)** | The `state` parameter did not match from the original request | Clear cookies & cache, try again |
| 001 | **ID.me authorization denied by user** | User canceled ID.me verification | User must complete verification |
| 007 | **Unknown credential provider issue** | Default code for an unknown error with the credential provider | Clear cookies & cache, try again |
| 009 | **Login.gov authorization denied by user** | User canceled Login.gov verification | User must complete verification |
| 101 | **Multiple MHV IDs** | The user's account contains multiple MHV IENs | Contact helpdesk to resolve data issue |
| 102 | **Multiple EDIPIs** | The user's account contains multiple EDIPIs | Contact helpdesk to resolve data issue |
| 106 | **Multiple Corp IDs** | The user's account contains multiple Corp IDs | Contact helpdesk to resolve data issue |
| 107 | **Locked Account** | The user's account has been locked | Contact helpdesk to resolve account status |
  
### Token Exchange (`/sign_in/token`)

| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Code is not valid** | The `code` parameter is not valid | `code` must not be empty or malformed |
| 400 | **Code Verifier is not defined** | The `code_verifier` parameter is not present | `code_verifier` must be present and not empty or malformed |
| 400 | **Grant Type is not defined** | The `grant_type` parameter is not presentd | `grant_type` must be present and not empty or malformed |

### Refresh (`/sign_in/refresh`)

| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Refresh token is not defined** | This occurs if the Refresh Token is not found in the cookies or passed via parameters | Clear cookies & cache, try again |
</details>

<details>
  <summary>
    <h2>💢 General errors</h2>
    <p>This represents a table of possible error codes that occur behind the scenes</p>
  </summary>

### Access Token JWT Decoder
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Access token body does not match signature** | The access token could not be verified | Clear cookies & cache, try again |
| 400 | **Access token has expired** | The access token is no longer valid | Obtain a new access token through `/sign_in/refresh` or logging out and back in |
| 400 | **Access token JWT is malformed** | The access token could not be parsed properly | Clear cookies & cache, try again |
  
### ACR Translator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Invalid ACR for `<csp>`** | The `acr` param is invalid for the CSP type  | Make sure `acr` param is [properly formatted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/11159e3a0730f5fbbb9603ad54126554e1ca8a26/products/identity/Sign-In%20Service/auth_flows/web_oauth.md#parameters), try again |
| 400 | **InvalidType value** | The `type` param is invalid | Make sure `type` param is [properly formatted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/11159e3a0730f5fbbb9603ad54126554e1ca8a26/products/identity/Sign-In%20Service/auth_flows/web_oauth.md#parameters), try again |

### Credential Info Creator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Cannot save information for malformed credential** | The CSP token is malformed and cannot be saved by `vets-api` | Clear cookies & cache, try again |

### Credential Level Creator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Unsupported credential authorization levels** | The CSP returned an invalid authorization level | Clear cookies & cache, try again |
  
### Code Validator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Code is not valid** | The `code` param is not valid | Clear cookies & cache, try again - make sure the `code` param returned by vets-api at the end of the authentication is what is used to the `/token` call |
| 400 | **Code verifier is malformed** | The `code_verifier` param is malformed | Clear cookies & cache, try again - make sure `code_verifier` is the same that was used to generate the `code_challenge` param for the [`/authorize`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md#authorize) call |
| 400 | **Code verifier is not valid** | The `code_verifier` param is not valid | Clear cookies & cache, try again - make sure `code_verifier` is the same that was used to generate the `code_challenge` param for the [`/authorize`](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md#authorize) call |
| 400 | **Grant Type is not valid** | The `grant_type` param is not valid | Make sure `grant_type` is `authorization_code` - no other value is accepted |

### Refresh Token JWT Encryptor
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Refresh token is malformed** | The `refresh_token` is missing necessary attributes | Clear cookies & cache, try again |

### Refresh Token JWT Decryptor
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Refresh token cannot be decrypted** | The `refresh_token` is unable to be decrypted | Clear cookies & cache, try again |
| 400 | **Refresh nonce is invalid** | The `refresh_token`'s encrypted and unencrypted nonce values do not match | Clear cookies & cache, try again - token's `nonce` value must be unchanged |
| 400 | **Refresh token version is invalid** | The `refresh_token`'s encrypted and unencrypted token version values do not match | Clear cookies & cache, try again - token's `version` value must be unchanged |
  
### Session Refresh
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Anti CSRF token is not valid** | The `anti_csrf_token` does not match the stored value in the `refresh_token` | Clear cookies & cache, try again |
| 400 | **No valid Session found** | No valid session was found with the information in the provided `refresh_token` | Clear cookies & cache, try again |
| 400 | **Token theft detected** | The `refresh_token` does not match the values stored in the session | Clear cookies & cache, try again - ensure the `refresh_token` cookie is not manipulated |

### State Payload JWT Encoder
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Attributes are not valid** | One or more attributes for the `/authorize` call are invalid | Review the [/authorize](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Sign-In%20Service/endpoints/authorize.md) endpoint parameters, try again |
| 400 | **Code Challenge is not valid** | `code_challenge` param is invalid | Make sure `code_challenge` param is [properly formatted](https://github.com/department-of-veterans-affairs/va.gov-team/blob/11159e3a0730f5fbbb9603ad54126554e1ca8a26/products/identity/Sign-In%20Service/auth_flows/web_oauth.md#parameters), try again |
| 400 | **Code Challenge Method is not valid** | `code_challenge_method` is invalid | `code_challenge_method` must be `S256` |

### State Payload JWT Decoder
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **State JWT body does not match signature** | The `state` JWT passed back by the CSP has a signature mismatch | Clear cache & cookies, try again |
| 400 | **State JWT is malformed** | The `state` JWT passed back by the CSP is unable to be decoded | Clear cache & cookies, try again |

### Token Serializer
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Client id is not valid** | The session's `client_id` is not parsable by the token serializer | Clear cache & cookies, try again |

### User Creator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Death Flag Detected** | User's MPI account has a death flag | Contact helpdesk to resolve account status |
| 400 | **Theft Flag Detected** | User's MPI account has a theft flag | Contact helpdesk to resolve account status |
| 400 | **User Attributes are Malformed** | A `UserVerification` for the user cannot be created or found due to malformed user attributes | Clear cache & cookies, try again, contact helpdesk to resolve user attribute issues if error persists |
| 400 | **User MPI record cannot be created** | The MPI service call to create a new record for the user failed | Wait for potential MPI issues to be resolved, try again later |
| 400 | **User MPI record cannot be updated** | The MPI service call to update the user's record failed | Wait for potential MPI issues to be resolved, try again later |

### User Loader
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Invalid Session Handle** | An active session with the `access_token`'s `sesion_handle` could not be found | Clear cache & cookies, try again |
| 400 | **Invalid User UUID** | - | - |

</details>
