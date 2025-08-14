# API Authentication

## Basic Idea

- VASS API and va.gov API are both configured with the Sign in Service (SiS)
- Veteran logs into va.gov
- va.gov asks for a JWT Token from SiS
  - that token includes the information we need to pass around
- va.gov uses that token to make calls to the VASS API and obtain a VASS API token
- va.gov uses the VASS API token to make calls
  - the token should contain the information we need

## Documentation

- [SiS documentation in GH](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Sign-In%20Service/readme.md)
- [We will most likely be doing Service Account Auth (STS)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity/Products/Sign-In%20Service/Engineering%20Docs/Authentication%20Types/Service%20Account%20Auth%20(STS))

## Examples

### Travel Pay on va.gov

This is an application sits on va.gov and uses MS Dynamics as a back end API

[High level idea:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/authentication-paths.md#use-vagov-sign-in-service)

[Sequence Diagram of the Authorization process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/beneficiary-travel/engineering/auth-seq-diagram.md)
