# Submit Inquiry

Submit the completed form as an actionable inquiry.

**URL:** `/ask_va_api/v0/inquiries/new`

**Method:** `POST`

**Auth Req'd:** NO

## Success Response

**Condition:** Inquiry successfully submitted.

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

* None

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
