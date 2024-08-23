# ~~Upload Attachment~~

> # OBSOLETE
> **NOTE:** This is endpoint has been obsoleted. See the notes at the end of this page for more information.

Upload an attachment for an inquiry or reply.

**URL:** `/ask_va_api/v0/attachments/new`

**Method:** `GET`

**Auth Req'd:** NO

## Success Response

**Condition:** Categories were found.

**Code:** `200 OK`

**Content:**

```json

```

## Error Response

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json

```

## Notes

* This functionality is moving to the submit inquiry and submit reply endpoints, where the file(s) are included as a part of the body.

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
