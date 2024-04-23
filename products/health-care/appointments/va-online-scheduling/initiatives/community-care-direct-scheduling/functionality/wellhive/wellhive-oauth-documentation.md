# WellHive OAuth documentation 

_Provided by WellHive on April 23, 2024._

- **We intend to support the "JSON Web Token (JWT) Profile" ([RFC 7523](https://www.rfc-editor.org/rfc/rfc7523)) with the client credentials flow. This profile ensures that WellHive never needs to see the private/secret value of the authenticator. The private key stays in the hands of the VA.gov administrators, and BAH and WellHive only ever see the public key. Setting up the authenticator will look like this (with all steps performed by appropriate VA or BAH personnel):**
     1. generate a public/private key pair (we will provide more details on the type of key pair needed)
     1. upload the public key to WellHive (new pages in the "Admin" area of the WellHive UI will be created for this)
     1. configure the relevant VA.gov component(s) to use the new private key when authenticating with WellHive's API
 
- **Rotating the authenticator (as/when needed, based on VA / BAH policy and procedures) will look similar:**
     1. generate a new public/private key pair
     1. upload the new public key to WellHive
     1. reconfigure the relevant VA.gov component(s) to use the new private key when authenticating with WellHive's API
     1. delete the old public key from WellHive

- **Authenticating against WellHive's API will look like this:**
     1. produce a JWT signed by the current private key (we will provide more details on how to populate the fields in the JWT)
     1. perform a request against WellHive's appropriate token endpoint, with the JWT included - this request returns a WellHive access token, and the time at which it will expire (we will provide more details on exact URL and parameters for this request)
     1. use the returned access token for WellHive API calls until it's about to expire, then perform steps 1 and 2 again to get a fresh access token

- **Some general reference material for this profile:**
     1. RFC for this profile: [https://www.rfc-editor.org/rfc/rfc7523](https://www.rfc-editor.org/rfc/rfc7523)
     2. Authlete's overview: [https://www.authlete.com/developers/jwt_authorization_grant/](https://www.authlete.com/developers/jwt_authorization_grant/)

