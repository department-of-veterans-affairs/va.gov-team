# SSO Test Log - Health Pages (Desktop + Mobile)

**Tester:** Athena Bozak  
**Date:** May 9, 2025  
**Environment:** Production  
**Sign-in Method:** ID.me  
**Account Type:** Personal MHV-linked account  
**Goal:** Validate whether users are being incorrectly prompted to sign in again after already logging in (per March Medallia feedback), across both desktop and mobile.  
**GitHub Ticket:** [Identify SSO bug(s) if they exist on MHV on VA.gov and the health care hub](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106809)

## Testing Steps

- Signed in on the [VA.gov homepage](https://www.va.gov) using ID.me  
- Confirmed I was successfully logged in  
- While staying signed in, I manually visited every page I could that starts with:
  - `va.gov/my-health`
  - `va.gov/health-care`
- For each page, I checked to see if a "sign in" modal appeared even though I was already logged in  
- Logged whether SSO was maintained or if I was unexpectedly prompted to sign in again

## Test Results by Device

| URL                                                                  | Desktop  | Mobile | Notes |
|---------------------------------------------------------------------------------|--------|-------|-------|
| `/my-health`                                                         | ❌ No    | ❌ No | works as expected   
| `my-health/appointments`                                             | ❌ No    | ❌ No | works as expected         
| `/my-health/secure-messages/inbox/`                                  | ❌ No    | ❌ No | works as expected  
| `/my-health/medications/?page=1`                                     | ❌ No    | ❌ No | works as expected  
| `/my-health/medical-records`                                         | ❌ No    | ❌ No | works as expected 
| `/my-health/appointments/schedule/type-of-care`                      | ❌ No    | ❌ No | works as expected     
| `/my-health/secure-messages/new-message/`                            | ❌ No    | ❌ No | works as expected 
| `/my-health/medications/refill`                                      | ❌ No    | ❌ No | works as expected 
| `/my-health/medications/?page=1`                                     | ❌ No    | ❌ No | works as expected 
| `/my-health/travel-pay/claims`                                       | ❌ No    | ❌ No | works as expected 
| `health-care/order-hearing-aid-or-CPAP-supplies`                     | ⚠️ na    | ⚠️ na | not available yet/directed to VA.gov.
| `health-care/order-medical-supplies/`                                | ❌ No    | ❌ No | works as expected 
| `health-care/copay-rates/`                                           | ❌ No    | ❌ No | works as expected 
| `health-care/health-needs-conditions/mental-health/`                 | ❌ No    | ❌ No | works as expected 
| `health-care/about-va-health-benefits/dental-care/`                  | ❌ No    | ❌ No | works as expected 
| `my-health/update-benefits-information-form-10-10ezr/introduction`   | ❌ No    | ❌ No | works as expected 
| `health-care/get-health-id-card/`                                    | ❌ No    | ❌ No | works as expected 

## Observations

- Manual validation on an active Production MHV-linked account was completed across both desktop and mobile.
- SSO behavior appeared normal and functioned as expected — no unexpected sign-in prompts were triggered during testing.
- However, we will continue monitoring user feedback through Medallia to identify any patterns in user behavior or page flows where SSO issues may still be occurring.
