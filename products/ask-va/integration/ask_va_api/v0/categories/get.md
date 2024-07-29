# Get Inquiry Categories

Retrieve a list of inquiry categories.

**URL:** `/ask_va_api/v0/categories`

**Method:** `GET`

**Auth Req'd:** NO

## Success Response

**Condition:** Categories were found.

**Code:** `200 OK`

**Content:**

```json
{
  "status": {
    "MessageId": 200,
    "Message": "OK",
    "MessageId": "9470b566-2afe-4599-a0ba-16dad2b98cf1"
    "Data": [
      {
        "allowAttachments": true,
        "requiresAuthentication": true,
        "id": "b7c3af1b-ec8c-ee11-8178-001dd804e106",
        "name": "topic 1",
        "displayName": "topic 1",
        "rankOrder": 999,
        "parentId": "a6c3af1b-ec8c-ee11-8178-001dd804e106"
      },
      {
        "allowAttachments": false,
        "requiresAuthentication": true,
        "id": "c8c3af1b-ec8c-ee11-8178-001dd804e106",
        "name": "topic 2",
        "displayName": "topic 2",
        "rankOrder": 999,
        "parentId": "d9c3af1b-ec8c-ee11-8178-001dd804e106"
      }
    ]
  }
}
```

## Error Response

**Condition:** Categories were not found.

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "Data": null,
  "Message": "Not Found",
  "ExceptionOccurred": true,
  "ExceptionMessage": "Not Found",
  "MessageId": null
}
```

**OR**

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json

```

## Notes

* None

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
* Passing `user_mock_mock=true` as a parameter will return static data, useful for user testing and mocking CRM service replies.