# RFC: Handling /user endpoint upstream failures

- Date: 2018-12-18
- Related Issue: [15821](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/department-of-veterans-affairs/vets.gov-team/15821)

## Background
The `/user` endpoint hits upstream services such as Vets360 and MVI to retrieve some of its data. When those services fail the `/user` endpoint should not return a `50x` error as it breaks login, and the app can still function without associated user data for some tasks. Currently Vets360 and MVI errors are handled differently in the User Serializer. MVI (`vaProfile`) includes a status with values of `SERVER_ERROR` or `NOT_FOUND`. When the Vets360 service receives an error it sets `vet360ContactInformation` to a blank object `{}`.

## Motivation
There should be a consistent method for reporting why an upstream service failed to retrieve associated user data.

## Design
Catch all upstream errors and return a `200` response. Return `null` in the data object for the failing service and include a meta `outages` object listing the service and the error(s) it received:

```json
{
  "data": { 
    "account": {
      "accountUuid": "851a0113-6211-49e0-937b-c27df22e5c4f"
    },
    "vaProfile": null,
    "vet360ContactInformation": null,
  },
  "meta": {
    "outages": [
      { 
        "serviceName": "MVI",
        "errors": [
          {
            "title": "Gateway Timeout",
            "code": "MVI504",
            "detail": "Did not receive a timely response from an upstream server",
            "status": 504
          }
        ]
      },
      { 
        "serviceName": "Vets360",
        "errors": [
          {
            "title": "Service Unavailable",
            "code": "VET360_503",
            "detail": "The server is currently unavailable",
            "status": 503
          }
        ]
      }
    ]
  }
}
```

## Risks
APIs don't often have alternate schemas for a single response code. Developers may not realize that a `200` response's schema can include null or blank objects.

## Alternatives
1. Return another `20x` level HTTP status code, e.g. `206` or `207`. A `20x` response could have a different schema where meta data is expected rather than optional. In these scenarios we'd be bending the status codes a bit. `206` is meant to be used when data is chunked and follow up calls will retrieve the rest. `207` is only defined in WebDAV as an extension of the HTTP spec. 
2. Split the `/user` associated calls out into their own endpoints. Each endpoint can then return a single HTTP status. Resources could still be grouped under `/user` e.g. `/user/vets360`, `/user/mvi`, and `/user/services`. The downside is that you're now making three calls instead of one. As it stands now the `/user` endpoint makes sequential, rather than concurrent, sub-requests so it may actually be faster to make the calls concurrently on the FE at the cost of increased FE complexity. Vets360 calls currently require the vets360_id to be retrieved from MVI first. Unless that id can be stored or fetched from elsewhere then we'll always need chained requests.
3. Implement GraphQL version of the API. Clients could then query for the data they want. This would obviously take a huge effort as we'd have to maintain two APIs or have the REST API sit on top of the GraphQL one.

Alternative #2 may be the best long term solution as it allows each endpoint to have a single responsibilty. It would be quite a bit of work to implement as the `User` model on the backend is intertwined with `MVI` and `Vets360`. The benefit being that loosening their coupling would make the specs for each much simpler to maintain. 
