# Sign-in-Service (SiS)

## Overview
The VA.gov Sign-in Service was created to solve several shortcomings identified with the existing solutions.  Our new service should reduce the number of redirects users experience, reduce login latency, and provide a more cost-effective solution to th VA while increasing transparency for login issues.


## Basics
- [General Overview](Sign-in-service_PKCE-OAuth.md)
- [High-level OAuth workflow ](basics/oauth_workflow.md)
- [OAuth errors](basics/oauth_errors.md)

## Postman Collection
- [Postman Collection](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/teams/vsp/teams/Identity/Sign%20In%20Service/sis_postman_v1.json)

## Endpoints
- [`/authorize` Authorize](endpoints/authorize.md)
- [`/token` Token](endpoints/token.md)
- [`/introspect` Introspect](endpoints/introspect.md)
- [`/signout` Signout/Logout](endpoints/signout.md)
- [`/revoke` Revoke Tokens](endpoints/revocation.md)
- [`/revoke_all` Revoke all sessions](endpoints/revoke_all.md)
