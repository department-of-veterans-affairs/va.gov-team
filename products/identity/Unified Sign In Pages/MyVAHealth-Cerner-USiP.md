# MyVAHealth - Cerner Unified Sign In Design Document

## Summary
Vets-api utilizes a sign-in modal that can be used by other service providers, such as MyVAHealth (Cerner), with little additional configuration for their own sign-in functionality. Within the frontend, vets-website offers the use of the sign-in modal by appending the application name of the service provider to the url. For example `https://www.va.gov/sign-in/?application=myvahealth&to=home` points to a preconfigured mhv application signin modal to only be used by myvahealth users. Each of these applications  come with some exceptions to the standard Vets-API login flow today in terms of the user attributes returned by eauth. This document will outline the exceptions for the application specified.

## Standard User Expectations
[This document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Design%20Documents/UserAttribute_Rules.md) explains the standard business rules for user attributes upon login through the va.gov unified sign in page modal.

## MyVAHealth Unified Sign In Exceptions
MyVAHealth Unified Sign In inherits the rules from the standard user attribute processing in vets-api. The attributes are bypassed by passing in the url param `?skip_dupe=true`. Below is an exhaustive list of the exceptions made only to the application=myvahealth.

[Vets-API inspects](https://github.com/department-of-veterans-affairs/vets-api/blob/master/lib/saml/user_attributes/ssoe.rb) each of the user attributes and makes business logic decisions regarding if a user should be permitted to login to `application=myvahealth` (Cerner):

- IEN: 
    - If a user has more than one IEN attribute the user `IS` permitted to login
    - If a user has one or less IEN attributes the user `IS` permitted to login
- MHV_ICN: parsed from eauth headers
    - If the MHV ICN does not equal the ICN inside the eauth headers returned after authentication, the user `IS` permitted to login.
- Corp ID: 
    - If a user has more than one Corp ID attribute the user `IS` permitted to login
    - If a user has one or less Corp ID attributes the user `IS` permitted to login

## Requirements
Starting a list of requirements, for now this is not exhaustive.

1. Redirect URLs from va.gov to Cerner/MVH/MyVAHealth/Oracle Health (OH) should not contain the clear session param. This used to be a requirement which is why its added here.
2. authenticated=true is a required param for all successfully authenticated users to OH. This allows OH to properly process the user as authenticated before attempting to send them through the authentication flow again. This is more of a quality of life feature from OH, which if not in place now causes a loop in authentication.


EOF
