# Service Account Auth (STS)

## Overview
The Service Account Auth (STS) mechanism provides secure server-to-server access tokens with scoped routes. The process involves requesting a token using a JWT signed with a private key, which is then verified using a public certificate. Once authenticated, the token allows access to protected routes defined by specific scopes.

## Table of Contents

1. [Auth Flows](auth_flows/service_account.md)
   <br>Details the entire authentication process, from creating the JWT to accessing protected routes with the generated token.

2. [Configuration](configuration/service_account.md)
   <br>Provides step-by-step instructions on configuring your environment, including setting up private and public keys and defining the necessary scopes.

3. [Endpoints](#endpoints)
   <br>Describes the endpoints available for requesting tokens and accessing protected routes.

4. [Flow Diagrams](#flow-diagrams)
   <br>Contains visual representations of the authentication flow.

5. [Postman](#postman)
   <br>Instructions on setting up and using the `VA.gov Identity - Service Account Auth (STS)` Postman Collection to test the authentication flow.
