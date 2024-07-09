# Get Inquiry Status

Retrieve a list of name/value pairs from CRM's OptionSets.

**URL:** `/ask_va_api/v0/optionset?name=:name`

**Method:** `GET`

**Auth Req'd:** NO

## Success Response

**Condition:** OptionSet hash is found.

**Code:** `200 OK`

**Content:**

```json
{
  "data": [
    {
      "id": "722310003",
      "type": "optionsets",
      "attributes": {
        "name": "A general question"
      }
    },
    {
      "id": "722310000",
      "type": "optionsets",
      "attributes": {
        "name": "About Me, the Veteran"
      }
    },
    {
      "id": "722310002",
      "type": "optionsets",
      "attributes": {
        "name": "For the dependent of a Veteran"
      }
    },
    {
      "id": "722310001",
      "type": "optionsets",
      "attributes": {
        "name": "On behalf of a Veteran"
      }
    }
  ]
}
```

## Error Response

**Condition:** OptionSet hash is not found.

**Code:** `404 NOT FOUND`

**Content:**

```json
{
  "error": "ErrorHandler::ServiceError: StandardError: Data Validation: Invalid OptionSet Name iris_xxxx, valid values are iris_inquiryabout, iris_inquirysource, iris_inquirytype, iris_levelofauthentication, iris_suffix, iris_veteranrelationship, iris_branchofservice, iris_country, iris_province, iris_responsetype, iris_dependentrelationship, statuscode, iris_messagetype"
}
```

**OR**

**Condition:** Something unexpected occurs.

**Code:** `500 INTERNAL SERVER ERROR`

**Content:**

```json
{
  "error": "ErrorHandler::ServiceError: ArgumentError: an error occurred"
}
```

## Notes

* Allowed values for the `name` parameter are:
  * inquiryabout
  * inquirysource
  * inquirytype
  * levelofauthentication
  * suffix
  * veteranrelationship
  * branchofservice
  * country
  * dependentrelationship
  * responsetype
  * province

## Behind the Scenes

* The user's `ICN` is used to tie the logged-in user to their data in the CRM APIs. This value is passed automatically by the `ask_va_api` APIs when the user is authenticated.
* A `message_id` is generated for each session and passed with every call to the CRM APIs. This value is passed automatically by the `ask_va_api` APIs. The value can be used to trace the flow of API calls for a given session, which can aid debugging and troubleshooting.
* Passing `user_mock_mock=true` as a parameter will return static data, useful for user testing and mocking CRM service replies.