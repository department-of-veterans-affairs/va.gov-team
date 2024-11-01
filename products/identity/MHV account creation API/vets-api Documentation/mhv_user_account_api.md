## MHV User Account API

## Endpoint

- **URL**: `/v0/user/mhv_user_account`
- **Method**: `GET`
- **Authentication**: Required 

## Success Response

- **Status Code**: `200 OK`
- **Content-Type**: `application/json`

## Example Request
```js
fetch("https:/api.va.gov/v0/user/mhv_user_account", {
  "headers": {
    "content-type": "application/json",
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
```

### Example Success Response Body

```json
{
  "user_profile_id": "12345678",
  "premium": true,
  "champ_va": true,
  "patient": true,
  "sm_account_created": true,
  "message": "Existing MHV Account Found for ICN"
}
```

## Response Fields

| Field             | Type      | Description                                                |
| ----------------- | --------- | ---------------------------------------------------------- |
| `user_profile_id` | `string`  | Unique identifier for the MHV user account.                |
| `premium`         | `boolean` | User is premium                                            |
| `champ_va`        | `boolean` | User is chanmp_va                                          |
| `patient`         | `boolean` | User is a patient                                          |
| `message`         | `string`  | Timestamp for the last update to the user account details. |


## Error Responses

### 401 Unauthorized

- **Example Response**:

```json
{
 "errors": [
    {
      "title": "Not authorized",
      "detail": "Not authorized",
      "code": "401",
      "status": "401"
    }
  ]
}
```

### 404 Not Found

- **Example Response**:

```json
{
  "errors": [
    {
      "detail": "not_found",
      "status": "401"
    }
  ]
}
  ```

### 422 Unprocessable Content

- **Example Response**:

```json
{
  "errors": [
    {
      "message": "The server responded with status 400",
      "detail": "ICN provided is not the Primary ICN",
      "code": "802"
      "status": "422"
    }
  ]
}
```

