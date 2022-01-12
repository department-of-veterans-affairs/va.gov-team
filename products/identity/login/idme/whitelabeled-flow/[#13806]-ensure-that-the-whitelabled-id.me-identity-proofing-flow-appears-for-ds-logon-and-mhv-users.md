# Overview

Currently on staging.va.gov, the non-whitelabeled ID.me identity proofing flow appears for all logged in users. Instead, the whitelabeled flow should appear for any user who has logged in using DS Logon of MHV.

From Tanel, the full set of context values are as follows:

* dslogon - Logged in with DS Logon (LOA1 or LOA3)
* dslogon_loa3 - Logged in with DS Logon and added identity verfication with id.me
* dslogon_multifactor - Logged in with DS Logon and added 2-factor authentication with id.me

* myhealthevet - Logged in with MyHealtheVet (LOA1 or LOA3)
* myhealthevet_loa3 - Logged in with MyHealtheVet basic and added verfication with id.me
* myhealthevet_multifactor  Logged in with DS Logon and added 2-factor authentication with id.me

* http://idmanagement.gov/ns/assurance/loa/1/vets - Logged in with an LOA1 id.me account
* http://idmanagement.gov/ns/assurance/loa/3/vets -  Logged in with an LOA3 id.me account
* multifactor - Logged in with id.me accountand added 2-factor authentication with id.me


# General Expected Behavior
Essentially, if any user has logged in to VA.gov with a DS Logon or MHV credential, attempting to identity proof should show the whitelabeled flow that includes the whitelabeled VA header image (which does not include the ID.me logo).

The following are the expected screens for the differnet scenarios:

## Non-Whitelabeled 2FA Setup Flow
![2fa](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/whitelabeled-flow/non-whitelabeled-2fa-setup-flow.png)

## Non-Whitelabeled Email Confirmation Flow
![email](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/whitelabeled-flow/non-whitelabeled-email-confirmation-flow.png)

## Non-Whitelabeled Identity Proofing Flow
![idproofing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/login/idme/whitelabeled-flow/non-whitelabeled-identity-proofing-flow.png)

## Whitelabeled 2FA Setup Flow
TBD

## Whitelabeled Email Confirmation Flow
TBD

## Whitelabeled Identity Proofing Flow
TBD

# User Stories

The following details user stories for various user types, the action taken by the user, and the expected behavior.

Note: staging.va.gov is currently pointing to MHV's INTB instance; this will be updated when it points to MHV's SYST instance.

| User Type | 2FA Status | Email Confirmation Status | User Name | Password | User Story | Current Behavior | Expected Behavior |
|-----------|---------|------|----------|------------|------------------|-------------------|-----------|
| MHV Basic | Enabled | Not Confirmed | INTBBASIC | Tester1& | User attempts to access a health tool that requires identity proofing (example: https://staging.va.gov/health-care/secure-messaging/) | User sees non-whitelabeled email confirmation flow | User sees whitelabeled email confirmation flow |
| MHV Basic | Enabled | Not Confirmed | INTBBASIC | Tester1& | User attempts to identity proof their account from their account page: https://staging.va.gov/account/ | User sees non-whitelabeled email confirmation flow | User sees whitelabeled email confirmation flow |
| MHV Advanced | Not Enabled | Confirmed | INTBADVANCE | Tester1& | User attempts to access a health tool that requires identity proofing (example: https://staging.va.gov/health-care/secure-messaging/) | User sees non-whitelabeled 2fa setup flow | User sees whitelabeled 2fa setup flow |
| MHV Advanced | Not Enabled | Confirmed | INTBADVANCE | Tester1& | User attempts to identity proof their account from their account page: https://staging.va.gov/account/ | User sees non-whitelabeled 2fa setup flow | User sees whitelabeled 2fa setup flow |
| DS Logon Level 1 | Enabled | Confirmed | bragan.b.christesen | aaAA123!@# | User attempts to access a health tool that requires identity proofing (example: https://staging.va.gov/health-care/secure-messaging/) | User sees non-whitelabeled identity proofing flow | User sees whitelabeled identity proofing flow |
| DS Logon Level 1 | Enabled | Confirmed | bragan.b.christesen | aaAA123!@# | User attempts to identity proof their account from their account page: https://staging.va.gov/account/ | User sees non-whitelabeled identity proofing flow | User sees whitelabeled identity proofing flow |
| ID.me | Enabled | Confirmed | david.bao@va.gov | Tester1@ | User attempts to access a health tool that requires identity proofing (example: https://staging.va.gov/health-care/secure-messaging/) | User sees non-whitelabeled identity proofing flow | No change - User sees whitelabeled identity proofing flow |
| ID.me | Enabled | Confirmed | david.bao@va.gov | Tester1@ | User attempts to identity proof their account from their account page: https://staging.va.gov/account/ | User sees non-whitelabeled identity proofing flow | No change - User sees non-whitelabeled identity proofing flow |

