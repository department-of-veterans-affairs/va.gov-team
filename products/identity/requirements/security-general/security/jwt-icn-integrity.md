# Requirement: JWT Must Contain Accurate ICN

## Description
When calling the MHV account creation API, Vets-api must ensure the ICN embedded in the signed JWT matches the ICN used to authenticate and authorize the user.

---

## Requirement Details
- The ICN used in the JWT MUST match the authenticated user's ICN as verified by MPI.
- JWTs MUST NOT be generated with deprecated or inactive ICNs.
- JWTs MUST be signed using Vets-api’s internal STS key for secure identity propagation.

---

## Related Areas
- MHV account provisioning
- Identity service token generation

## Type
Security

## Status
Completed

## Created
2025-04-28

## Last Updated
2025-04-28
