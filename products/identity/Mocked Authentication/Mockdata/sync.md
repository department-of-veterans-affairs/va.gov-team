# Mockdata Sync
Mockdata sync is a GitHub action in the [vets-api-mockdata](https://github.com/department-of-veterans-affairs/vets-api-mockdata) repo that makes requests to the `mpi_mockdata` endpoint on staging. The action uses the YML from the response to create a pull requests that creates or updates the users mockdata.

## GitHub Action

TODO: Complete once GitHub Action is done

## MPI Mockdata Endpoint

The `mpi_mockdata` endpoint is used to retrieve user attributes from MPI by `icn` and returns a JSON response containing the mockdata in YAML format. The API key is stored in parameter store and checked on each request for authorization.

### API key
The key is stored in parameter store -  `/dsva-vagov/vets-api/staging/mockdata_sync_api_key`

#### Inject the api_key into the workflow:
```yml
- uses: department-of-veterans-affairs/action-inject-ssm-secrets@d8e6de3bde4dd728c9d732baef58b3c854b8c4bb # latest
  with:
    ssm_parameter: /dsva-vagov/vets-api/staging/mockdata_sync_api_key
    env_variable_name: MOCKDATA_API_KEY
```

### Request
`mpi/mockdata`

```
GET https://staging-api.va.gov/mocked_authentication/mpi/mockdata/:icn
```

#### Parameters
| **Parameter**      | **Description**    | **Example** | **Required**|
| -------------- | ---------------| ------- |---------|
| `icn`            | The user's unique `icn` | `/mocked_authentication/mpi/mockdata/1234567` | ✅       |


#### Headers

| **Header**      | **Description**    | **Example**           | **Required**|
| ----------- | ---------------| ----------------- |---------|
| `Authorize`    | Bearer token authentication with the API key stored in parameter store. | `Bearer {api_key}` | ✅       |

#### Response
The `mpi mockdata` endpoint returns a JSON response with a data object containing the user's attributes and the mockdata in YAML format.

```json
{
    "data": {
        "attributes": {
            "icn": "1234567",
            "yml": "---\n:method: :post\n:body: |-\n  <env:Envelope>\n   <env:Body>\n  .....  </env:Body>\n  </env:Envelope>\n:headers:\n  :connection: close\n  :date: Mon, 10 Apr 2023 15:46:10 UTC\n  content-type: text/xml\n:status: 200\n"
        }
    }
}
```


If the `icn` parameter is invalid or the API key is not authorized, an error response will be returned with an appropriate HTTP status code.
```json
{
    "errors": "Not authorized"
{
```
