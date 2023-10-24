# RFC: The new travel pay API will prove delegated authentication

* Comment Deadline: `2023-11-07`
* Authors:
  * [Kevin Duensing](https://github.com/kjduensing)

## Background
The existing travel pay API (claims ingest and status) is a PoC intended to show viability of the mileage-only claims ingest process as an API. Service-to-service communication can
be handled by the client credentials OAuth flow. Many other API or backend systems w/in the VA do not verify the authenticity of an id and a Veteran.

## Motivation
Currently the claims ingest API only requires authorization of a client by an allow-listed identifier that matches with a record in the database. This is insufficient for the longevity of the
travel pay API as it introduces security risks. 

## Design

## Risks

## Alternatives

## References
