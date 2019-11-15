# Authentication Flow Between vets-api and VA Mobile Framework Environments

## Overview
This document will describe the proposed approach to allow bidirectional flow of data between VA.gov / vets-api components and VAMF resources. 

This flow is based on the [VA Mobile JWT Exchange guide](https://coderepo.mobilehealth.va.gov/projects/IUMS/repos/user-service/browse/docs/externalJwtExchange.md) 

Additionally, this document will describe how auditing and traceability will work between the two systems. 

## Authentication Flow

Veterans will authenticate on VA.gov using the existing authentication workflow which consists of credentialing by DSLogon, MyHealtheVet or ID.me, with ID.me brokering the SAML authentication flow). Once authenticated, a Veteran will be able to access online appointment scheduling tools which will initiate the following workflow:

### Who has access to scheduling services?

* If a user signs in with DS Logon and is identity proofed, both an EDIPI and ICN are available through the SAML assertion. This user should have access to scheduling services.
* If a user signs in with MHV and is identity proofed, an ICN is available in the SAML assertion. Often when querying MVI with ICN an EDIPI might be available there as well. This user should have access to scheduling services.
* If a user signs in with ID.me and is identity proofed, an attempt is made to query the user in MVI based on the SAML assertion. A successful query will result in an ICN being returned, but possibly also an EDIPI. This user should have access to scheduling services.
* If a user is not identity proofed, not an MHV Premium user, or is an ID.me sign in user and querying MVI does not result in a successful lookup, then this user basically does not have the necessary attributes available to access scheduling services.

These access levels are detailed in the below matrix

| Sign In Type | FICAM ID Proofed? | ICN Available?                 | EDIPI Available? | Has Access to Scheduling? |
|:------------:|:-----------------:|:------------------------------:|:----------------:|:-------------------------:|
| MHV Basic    | N                 | N (by definition not in MVI)   | N                | N                         |
| MHV Basic    | Y                 | N (by definition not in MVI)   | N                | N                         |
| MHV Advanced | N                 | Y (from MHV)                   | N                | N                         |
| MHV Advanced | Y                 | Y (from MHV)                   | N                | N                         |
| MHV Premium  | N/A               | Y (from MHV)                   | Maybe from MVI   | Y                         |
| MHV Premium  | N/A               | Y (from MHV)                   | Maybe from MVI   | Y                         |
| ID.me        | N                 | N                              | N                | N                         |
| ID.me        | Y                 | Maybe from MVI                 | Maybe from MVI   | Maybe if MVI              |
| DS Logon 1   | N                 | N                              | Y                | ?                         |
| DS Logon 1   | Y                 | Maybe from MVI                 | Y                | Y                         |
| DS Logon 2   | N/A               | Maybe from MVI                 | Y                | Y                         |
| DS Logon 3   | N/A               | Maybe from MVI                 | Y                | Y                         |

### How does access to scheduling services take place?

The frontend react application with which the veteran interacts does not have any knowledge of ICN, EDIPI, or other user identifying attributes on VA.gov. Only VA.gov api service has this information. As such, the VA.gov api service makes all VAMF api requests for scheduling related service calls based on attributes it maintains as part of the users sign in session. 

* VA.gov api service will will identify the Veteran by session ID, retrieving the EDIPI or ICN associated with the users sign in session.  
* VA.gov api service will create a request to VA Mobile JWT Exchange (guide linked above) and send that JWT as payload to the ```/session``` user-service endpoint in VAMF
* VAMF user-service will verify the external JWT is valid, re-sign it as a VAMF JWT and return it to the Ruby user-service component.
* VA.gov api service will use the JWT token returned by VAMF in making subsequent api requests for scheduling related service calls to VAMF.

### How will the JWT be stored and associated with a specific Veteran in the Ruby layer?

All users signing in on VA.gov through ID.me have a unique UUID provided by ID.me in the SAML assertion, regardless of which credentialing authority was used to sign in. The JWT token will be cached as a key-value pair in Redis with the UUID acting as the key. This cache will have a very short-lived expiration consistent with the JWT expiration.

## Auditing

VA.gov uses semantic logging. EDIPI, UUID, and ICN are all attributes that are logged for a variety of user api service interactions. These identifiers along with timestamps can be used to correlate log history between API partners. Additional attributes can be added to the semantic logger that are more application specific than the identifiers noted if these are not satisfactory. All logs are collected in AWS cloud front and can be retrieved using the AWS API libraries matching identifiers and timestamps.
