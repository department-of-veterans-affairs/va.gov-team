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
datadog_api_client:
  api_key: <api_key>
  application_key: <application_key>
```

### vets-api environment targeted

<!-- - fix this so it's part of the settings documentation? -->

### Authentication

Datadog querying routes are protected by standard Identity Dashboard user authentication via Sign-in Service - a valid SiS access token is required to proceed. The necessary token can be obtained either by starting a parallel `vets-api` instance and authenticating with it or by using the [IDD mock cookie route](https://github.com/department-of-veterans-affairs/va-identity-dashboard#mock-authentication-cookie) to create a mocked authentication token for your preferred IDD user.

### Postman Collection

The Identity team maintains a [Postman collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Identity%20Dashboard/Identity%20Dashboard.postman_collection.json) to enable developers to more easily test against Identity Dashboard routes.

## Datadog Querying Routes

<!-- - Explain shared params, vanilla logs query vs. structured FWA dashboard replication queries, shared response format -->

## GET - Logs Query

- `<identity_dashboard_env>/logs/query`
- params: `query`, `from`, `to`
- optional params: `limit`, `cursor`

<!-- - individual querying instructions & response format -->


## GET - Overseas Direct Deposits Query

- `<identity_dashboard_env>/logs/overseas_direct_deposits`
- params: `from`, `to`
- optional params: `limit`, `cursor`

<!-- - individual querying instructions & response format -->

## Parameters

| Name | Description | Value Type | Example Values |
| --- | --- | --- | --- |
| query | The query that passed to [Datadog to search logs by](https://docs.datadoghq.com/logs/explorer/search_syntax/). | String | `*`, `[SignInService] [V0::SignInController] token` |
| from | The beginning of the time range you are querying. Datadog supports ISO 8601 timestamps as well as math-based times such as `now-1d` for "one day before now". | String | `now-1m`, `2020-09-17T11:48:36+01:00`, `1672038000000` |
| to | The end of the time range you are querying. Formatting is the same as `from`. | String | `now`, `2023-09-06T11:48:36+01:00`, `1672038000000` |
| limit (optional) | Limits how many individual log results are returned from the query. If no option is set the limit is defaulted to 50 results; maximum limit is 1000. If the number of results is greater than the limit a `cursor` parameter will be returned with the response to point to the next page. | Integer | `25` |
| cursor (optional) | Indicates which page in a paginated request should be returned, requests without this param will return the first page. | String | `eyJhZnRlciI6IkFnQUFBWVZOT3lkT1hTSGxVZ0FBQUFBQUFBQVlBQUFB...` |
