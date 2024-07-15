# Ping

Retrieve a simple, static message. Useful for ensuring that the API internals are properly configured and working as expected.

**URL:** `/ask_va_api/v0/ping`

**Method:** `GET`

**Auth Req'd:** NO

## Success Response

**Condition:** The service is up and running as expected.

**Code:** `200 OK`

**Content:**

```json
{
  "Data": {
    "Value": "pong"
  },
  "Message": 200,
  "ExceptionOccurred": false,
  "ExceptionMessage": null,
  "MessageId": null
}
```

## Error Response

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json
{
  "Data": null,
  "Message": 500,
  "ExceptionOccurred": true,
  "ExceptionMessage": "An exception occurred.",
  "MessageId": null
}
```

## Notes

* The `/ping` endpoint takes no parameters, and returns the static message, "pong". This is the simplest endpoint for the Dymanics APIs. It will allow us to make sure that our AWS services can call out to the Azure services and get a response across the cloud boundaries.

## Behind the Scenes

* None