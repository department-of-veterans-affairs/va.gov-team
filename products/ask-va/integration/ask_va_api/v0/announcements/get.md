# Get System Announcements

Retrieve a list of active system announcements.

**URL:** `/ask_va_api/v0/announcements`

**Method:** `GET`

**Auth Req'd:** NO

## Success Response

**Condition:** Announcements were found, or there were no announcements.

**Code:** `200 OK`

**Content:**

```json
{
  "data": [
    {
      "id": null,
      "type": "announcements",
      "attributes": {
        "text": "Test",
        "start_date": "8/18/2024 1:00:00 PM",
        "end_date": "8/18/2024 1:00:00 PM",
        "is_portal": false
      }
    },
    {
      "id": null,
      "type": "announcements",
      "attributes": {
        "text": "Test announcement",
        "start_date": "9/12/2024 12:00:00 PM",
        "end_date": "9/12/2024 3:00:00 PM",
        "is_portal": false
      }
    },
    {
      "id": null,
      "type": "announcements",
      "attributes": {
        "text": "Here is my team announcement. And this addition to the announcement.",
        "start_date": "11/14/2024 2:00:00 PM",
        "end_date": "11/14/2024 10:00:00 PM",
        "is_portal": false
      },
      ...
    }
  ]
}
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
* Passing `user_mock_mock=true` as a parameter will return static data, useful for user testing and mocking CRM service replies.