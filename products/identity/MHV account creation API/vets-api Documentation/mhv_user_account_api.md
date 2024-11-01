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
  "data": {
    "id": "12345678",
    "type": "mhv_user_account",
    "attributes": {
      "user_profile_id": "12345678",
      "premium": true,
      "champ_va": true,
      "patient": true,
      "sm_account_created": true,
      "message": "some-message"
    }
  }
}
```

## Response Fields

| Field             | Type      | Description                                                |
| ----------------- | --------- | ---------------------------------------------------------- |
| `user_profile_id` | `string`  | Unique identifier for the MHV user account.                |
| `premium`         | `boolean` | User is premium                                            |
| `champ_va`        | `boolean` | User is champ_va                                          |
| `patient`         | `boolean` | User is a patient                                          |
| `message`         | `string`  | Message indicating the current state of MHV account and/or if any changes were made |


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
      "title": "The server responded with status 400",
      "detail": "ICN provided is not the Primary ICN",
      "code": "802"
      "status": "422"
    }
  ]
}
```

