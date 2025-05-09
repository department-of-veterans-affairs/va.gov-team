# SSO Test Log - Health Pages (Desktop + Mobile)

**Tester:** Athena Bozak  
**Date:** May 9, 2025  
**Environment:** Production  
**Sign-in Method:** ID.me  
**Account Type:** Personal MHV-linked account  
**Goal:** Validate whether users are being incorrectly prompted to sign in again after already logging in (per March Medallia feedback), across both desktop and mobile.  
**GitHub Ticket:** [Identify SSO bug(s) if they exist on MHV on VA.gov and the health care hub](https://github.com/department-of-veterans-affairs/va.gov-team/issues/106809)

## Testing Steps

- Sign in on [VA.gov homepage](https://www.va.gov) using ID.me  
- Verify logged-in state 
- Navigate to each target page while staying logged in
  - Log in then visit every page possible that starts with va.gov/my-health
  - Log in then visit every page possible that starts with va.gov/health-care
  - Identify if visiting any of these urls seems to trigger a "sign in" modal
- Record whether SSO was maintained or if a sign-in modal was triggered  

## Test Results by Device

| URL                                                         | Desktop | Mobile | Notes |
|-------------------------------------------------------------|---------|--------|-------|
| `/my-health`                                                | ❌ No   |    | Loads as expected on both |
| `my-health/appointments`                                    | ❌ No        |  Yes  |   | Modal appeared unexpectedly on both |
| `/my-health/secure-messages/inbox/`                         | ❌ No   |    | Loads as expected |
| `/my-health/medications/?page=1`                            | ❌ No   |    | No modal triggered |
| `/my-health/medical-records`                                | ❌ No
| `/my-health/appointments/schedule/type-of-care`             | ❌ No   |    | Works as expected |
| `/my-health/secure-messages/new-message/`                   | ❌ No
| `/my-health/medications/refill`                             | ❌ No
| `/my-health/medications/?page=1`                            | ❌ No
| `/my-health/travel-pay/claims`                              | ❌ No
| `health-care/order-hearing-aid-or-CPAP-supplies`            | ✅ Yes | Supplies page not available yet. Redirected to VA.gov homepage.
| `health-care/order-medical-supplies/`                       | ❌ No
| `/health-care/health-needs-conditions/mental-health/`       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No
| `health-care/order-medical-supplies/`                       | ❌ No










## Observations

- SSO fails intermittently on some subpages under /health-care and /my-health, even after valid sign-in.
- The issue does **not** affect all users or pages, suggesting a possible code-level inconsistency.
