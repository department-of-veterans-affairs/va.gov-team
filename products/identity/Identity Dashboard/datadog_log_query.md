# Datadog Querying

## Version History

| Version Number | Author | Revision Date | Description of Change |
| --- | --- | --- | --- |
| 0.1 | John Bramley | 9/06/2023 | Initial creation |

## Description & Prerequisites

The `VA Identity Dashboard` leverages Datadog's Ruby client to query the VA.gov Datadog instance for logs from VA.gov. This document details how to connect your Identity Dashboard API to Datadog and the routes available to perform queries against that data.

### Local Config - Datadog API & Application keys

In order to request information from the VA.gov Datadog instance you will need to have both an `api_key` & `application_key` set. These keys can be obtained through Datadog by mousing over your profile in the bottom left corner, navigating to `Organization Settings`, and looking up the following keys:
  
* `api_key` is the `team:identity` key in `Organization Settings` => `Access` => `API Keys`
* `application_key` is the `FWA Dashboard` key in `Organization Settings` => `Access` => `Application Keys`

Once you have obtained these keys, update your `settings.local.yml` to include the keys:

```yml
# config/settings.local.yml
datadog_api_client:
  api_key: <api_key>
  application_key: <application_key>
```

### Selecting the Appropriate vets-api Environment

The Datadog integration will query for logs from a specific `vets-api`, controllable by a configuration setting. This setting will default to `staging` in the `settings.yml` file; users wishing to query production logs will have to update their `settings.local.yml` file to point to "prod".

```yml
# config/settings.local.yml
datadog_api_client:
  vets_api_environment: prod
```

### Authentication

Datadog querying routes are protected by standard Identity Dashboard user authentication via Sign in Service - a valid SiS access token is required to proceed. The necessary token can be obtained either by starting a parallel `vets-api` instance and authenticating with it or by using the [IDD mock cookie route](https://github.com/department-of-veterans-affairs/va-identity-dashboard#mock-authentication-cookie) to create a mocked authentication token for your preferred IDD user.

### Postman Collection

The Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Identity%20Dashboard/Identity%20Dashboard.postman_collection.json) to enable developers to more easily test against Identity Dashboard routes.

## Datadog Querying Routes

The Datadog querying integration consists of both unstructured querying for users to perform their own searches of vets-api log data, as well as pre-structured queries that feature more complex data parsing & formatting. Both the unstructured "Logs Query" and the pre-structured queries share the same parameters & top-level response formats.

### Query Parameters

The following query parameters are used by all Datadog querying routes, with the exception of the `query` parameter, which is used only in unstructured queries; pre-structured queries populated a hard-coded query to be submitted to Datadog.

| Name | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| query | The query that passed to [Datadog to search logs by](https://docs.datadoghq.com/logs/explorer/search_syntax/). | String | `*`, `[SignInService] [V0::SignInController] token` |
| from | The beginning of the time range you are querying. Datadog supports ISO 8601 timestamps as well as math-based times such as `now-1d` for "one day before now". | String | `now-1m`, `2020-09-17T11:48:36+01:00`, `1672038000000` |
| to | The end of the time range you are querying. Formatting is the same as `from`. | String | `now`, `2023-09-06T11:48:36+01:00`, `1672038000000` |
| limit (optional) | Limits how many individual log results are returned from the query. If no option is set the limit is defaulted to 50 results; maximum limit is 1000. If the number of results is greater than the limit a `cursor` parameter will be returned with the response to point to the next page. | Integer | `25` |
| cursor (optional) | Indicates which page in a paginated request should be returned, requests without this param will return the first page. | String | `eyJhZnRlciI6IkFnQUFBWVZOT3lkT1hTSGxVZ0FBQUFBQUFBQVlBQUFB...` |

### Response Format

Responses are formatted as a JSON object with three primary keys: `logs`, `meta`, and `cursor`.

* `logs`: The log data returned from Datadog. Unstructured queries will return an array of raw log data, structured queries will return a hash of parsed information relevant to the query.
* `meta`: The metadata of the Datadog response, including a request_id & `cursor` for requesting the subsequent page in paginated requests.
* `cursor`: The `cursor` information parsed from the `meta` attribute, this has been placed in a top-level attribute for ease of consumption by Datadog querying clients.

## GET - Logs Query

The logs query route is a direct, unstructured query of all Datadog logs for the specified `vets-api` environment. Refer to the `query` parameter information above and link to Datadog documentation for querying syntax information.

The `logs` response is an array of objects, one for each log. The log object contains a `message` attribute, this is the only parsing done for this query; the `log` attribute contains the unaltered log as saved to Datadog.

* `<identity_dashboard_env>/logs/query`
* params: `query`, `from`, `to`
* optional params: `limit`, `cursor`
* response format:

  ```json
  {
    "logs": [
        {
            "message": "Rendered Mobile::V0::FolderSerializer with ActiveModelSerializers::Adapter::JsonApi (0.67ms)",
            "log": <unparsed_log>
        },
        {
            "message": "Completed #show",
            "log": <unparsed_log>
        },
        {
            "message": "Rendered PaymentHistorySerializer with ActiveModelSerializers::Adapter::JsonApi (0.97ms)",
            "log": <unparsed_log>
        }
    ],
    "meta": {
        "elapsed": 394,
        "page": {
            "after": "eyJhZnRlciI6IkFnQUFBWX..."
        },
        "request_id": "pddv1ChZWX3FfdExMUlFBeTBF...",
        "status": "done"
    },
    "cursor": "eyJhZnRlciI6IkFnQUFBWX..."
  }
  ```

## GET - Overseas Direct Deposits Query

A structured query of all changes made to users' direct deposits from non-US or unknown geolocations.

The `logs` response is a hash keyed to the ICN of each user. Each log value is also a hash, including a `latest_transaction` attribute of the most recent direct deposit change returned in the log response, and one or more location keys with groups of parsed log information.

* `<identity_dashboard_env>/logs/overseas_direct_deposits`
* params: `from`, `to`
* optional params: `limit`, `cursor`
* response format:

  ```json
  {
    "logs": {
      "1123514789V233479": {
        "latest_transaction": "2023-07-25T22:20:30.901Z",
        "Niger": [
          {
            "vagov_uuid": "b796afd3b1ad42dabbd75267da0f1451",
            "message": "PPIUController#update request completed",
            "csp": "idme",
            "ip_address": "127.46.163.53",
            "country": "Niger",
            "city": "Maradi",
            "timestamp": "2023-07-25T22:19:32.727Z"
          },
          {
            "vagov_uuid": "b796afd3b1ad42dabbd75267da0f1451",
            "message": "Ch33BankAccountsController#update request completed",
            "csp": "idme",
            "ip_address": "127.46.163.53",
            "country": "Niger",
            "city": "Maradi",
            "timestamp": "2023-07-25T22:20:30.901Z"
          }
        ],
        "Chad": [
          { ... }
        ]
      },
      "1345624726V263873": { ... }
    },
    "meta": {
      "elapsed": 796,
      "page": {
        "after": "eyJhZnRlciI6IkFnQUFBWW1T..."
      },
      "request_id": "pddv1ChZKTTFDeGNpa1FRaW9TYU9JUmQ...",
      "status": "done"
    },
    "cursor": "eyJhZnRlciI6IkFnQUFBWW1T..."
  }
  ```
