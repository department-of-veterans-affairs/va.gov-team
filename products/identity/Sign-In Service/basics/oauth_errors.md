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
| 400 | **Client id is not valid** | The `client_id` parameter is not present or not valid | `client_id` must be either `web` or `mobile` |
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
| 400 | **Access token body does not match signature** | - | - |
| 400 | **Access token has expired** | - | - |
| 400 | **Access token JWT is malformed** | - | - |
  
### ACR Translator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Invalid ACR for `<csp>`** | - | - |
| 400 | **InvalidType value** | - | - |

### Credential Info Creator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Cannot save information for malformed credential** | - | - |

### Credential Level Creator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Unsupported credential authorization levels** | - | - |
  
### Code Validator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Code is not valid** | The `code` provided is not valid | - |
| 400 | **Code verifier is malformed** | - | - |
| 400 | **Code verifier is not valid** | - | - |
| 400 | **Grant Type is not valid** | - | - |

### Refresh Token JWT Encryptor
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Refresh token is malformed** | - | - |

### Refresh Token JWT Decryptor
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Refresh token cannot be decrypted** | - | - |
| 400 | **Refresh nonce is invalid** | - | - |
| 400 | **Refresh token version is invalid** | - | - |
  
### Session Refresh
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Anti CSRF token is not valid** | - | - |
| 400 | **No valid Session found** | - | - |
| 400 | **Token theft detected** | - | - |

### State Payload JWT Encoder
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Attributes are not valid** | - | - |
| 400 | **Code Challenge is not valid** | - | - |
| 400 | **Code Challenge Method is not valid** | - | - |

### State Payload JWT Decoder
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **State JWT body does not match signature** | - | - |
| 400 | **State JWT is malformed** | - | - |

### Token Serializer
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Client id is not valid** | - | - |

### User Creator
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Death Flag Detected** | - | - |
| 400 | **Theft Flag Detected** | - | - |
| 400 | **User Attributes are Malformed** | - | - |
| 400 | **User MPI record cannot be created** | - | - |

### User Loader
| Status Code | Error | Description | Fix |
| --- | --- | --- | --- |
| 400 | **Invalid Session Handle** | - | - |
| 400 | **Invalid User UUID** | - | - |



</details>
