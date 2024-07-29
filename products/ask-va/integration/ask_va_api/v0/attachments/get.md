# Get Attachment

Retrieve an attachment given an attachment ID.

**URL:** `/ask_va_api/v0/attachments?:id`

**Method:** `GET`

**Auth Req'd:** YES

## Success Response

**Condition:** Attachment was found.

**Code:** `200 OK`

**Content:**

```json
{
  "Data": {
    "FileContent": "VUVzFBBQUFBQUFBQUl5b0FBR1J2WTFCeWIzQnpMMkZ3Y0M1NGJXeFFTd1VHQUFBQUFBc0FDd0RCQWdBQWJpMEFBQUFB",
    "FileName": "AttachmenttoVA1.docx"
  },
  "Message": "OK",
  "ExceptionOccurred": false,
  "ExceptionMessage": null,
  "MessageId": "9470b566-2afe-4599-a0ba-16dad2b98cf1"
}
```

## Error Response

**Condition:** Attachment was not found.

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "Data": null,
  "Message": "Attachment Not Found",
  "ExceptionOccurred": true,
  "ExceptionMessage": "File Not Found",
  "MessageId": 404
}
```

**OR**

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json
{
  "Data": null,
  "Message": "An Exception Occurred",
  "ExceptionOccurred": true,
  "ExceptionMessage": "An Exception Occurred",
  "MessageId": 500
}
```

## Notes

* None

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
* Passing `user_mock_mock=true` as a parameter will return static data, useful for user testing and mocking CRM service replies.