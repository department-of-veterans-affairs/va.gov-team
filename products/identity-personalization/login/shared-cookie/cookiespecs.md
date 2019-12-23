# Cookie Specs - DRAFT - 7/30/2018

The purpose of this cookie is to facilitate the sharing of a session between VA.gov and MHV. This file will outline the specifications agreed upon between MHV and VA.gov to date. Please note that this specification is still a draft and aspects of this specification are subject to changes agreed upon by MHV and VA.gov.

## Attributes

The cookie will contain all of the following attributes. New attributes maybe added in the future.

1. MHV Correlation ID - a unique identifier corresponding to an account on the MHV side.
2. ICN - a unique identifier used to query MVI. (See "Cases where ICN might not be available")

### Cases where ICN might not be available

If a user signs in with MHV credentials, that user might not exist in MVI. An example of such a user would be an MHV basic user.

## Cookie Encoding

The cookie will be encoded using JSON formatted string.

## Cookie TTL / Expiration
The cookie will have a TTL of 30 minutes. After 30 minutes has passed the cookie will be automatically destroyed unless it is refreshed / renewed.

## Cookie Creation / Sign-in

When a user signs in, VA.gov will create a cookie that contains the above attributes when available. The expiration will be set for 30 minutes into the future.

## Cookie Refresh

When a user performs any actions on VA.gov or MHV, the cookie's expiration will be renewed for a fresh 30 minutes. No other changes will be made to the cookie attributes.

## Cookie Destruction / Sign-out

When a user performs the logout function, the cookie is immedietely destroyed. It is not dependent on the logout callback returning.

## Encryption

The cookie will be encrypted with an AES-256 symmetric key that only VA.gov and MHV can read / access.

### Encryption Exchange

The symmetric key used to decrypt / encrypt the cookie will be shared between VA.gov and MHV using VA encrypted email as the means of transfer.

There will be a unique cookie used for Dev / Staging / Prod environments for a total of 3 symmetric keys.

TODO: We need to come up with a formalized process for handling expiration and revocation prior to rolling out to production.

## Matrix of Sign-in Types

| Sign In Type | FICAM ID Proofed? | ICN Available?                 | MHV Known?
|:------------:|:-----------------:|:------------------------------:|:-------------:|
| MHV Basic    | N                 | N (by definition not in MVI)   | Y             |
| MHV Basic    | Y                 | N (by definition not in MVI)   | Y             |
| MHV Advanced | N                 | Y (from MHV)                   | Y             |
| MHV Advanced | Y                 | Y (from MHV)                   | Y             |
| MHV Premium  | N/A               | Y (from MHV)                   | Y             |
| MHV Premium  | N/A               | Y (from MHV)                   | Y             |
| ID.me        | N                 | N                              | N             |
| ID.me        | Y                 | Maybe (from MVI lookup)        | Maybe if MVI  |
| DS Logon 1   | N                 | N                              | N             |
| DS Logon 1   | Y                 | Maybe (from MVI lookup)        | Maybe if MVI  |
| DS Logon 2   | N/A               | Maybe (from MVI lookup)        | Maybe if MVI  |
| DS Logon 3   | N/A               | Maybe (from MVI lookup)        | Maybe if MVI  |
