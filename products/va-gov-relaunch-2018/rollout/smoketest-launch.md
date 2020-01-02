# Smoke Testing for VA.gov Launch Nov 7
## What is a smoke test?
A non-exhaustive set of tests that ensure that most important functionality works
- the term originally comes from hardware testing, in which the product passes if it does not catch fire the first time it is turned on

## Why are we doing this?
**Our goal is** to run quick, high-level functional tests post-launch to determine that users are receiving a highly functional experience.
- things to test:
  1. Anything with an external integration
  2. All applications
  3. End-to-end site functionality

**Our goal IS NOT** to hunt bugs or test fine grained levels of functionality.
- this is **sanity testing** and should be completed in the days/weeks following launch

## When?
6:30-7:30pm ET Wednesday, 11.7.18

## Who?
- Entire PM group + Josh Vargas
- Additional folks who are veterans and can test some of the login stuff

# Critical Functionality to Test
## Login
- Do all credential logins work?
   1. DS logon
   2. MHV 
   3. ID.me
- Does SSO work when outlinking to MHV?
- Does sign-out completely sign the use out of va.gov, vets.gov, My HealthVet in the following scenarios:
   - When signing out on VA.gov?
   - When signing out on My HealtheVet?

## Teamsite
- Do headers show on:
   1. www.va.gov pages?
   2. cem. pages?
   3. benefits. pages?
   4. choose.va pages?

## Search
- Can users enter a search query and successfully receive results from:
   1. Search bar
   2. Search page
   3. 404 page

## Profile
- Does information show for:
   1. Contact info
   2. Personal Info
   3. Military History
- Do contact information updates work?

## Dashboard
- Do widgets show?
- Do widget view all links function correctly (no 404s, no issues outlinking to MHV tools)?
- Can a form / application be started elsewhere and resumed from the dashboard?

## Account 
- Does identity verification work?
- Does 2FA work first time, and hold on second time?
- Do terms and conditions work?
   
## Facility Locator
- Can a search be performed successfully?
- **link**: va.gov/facilities/

## Veteran ID Card Page
- this is a high-traffic page, so just a spot check to make sure nothing looks really off
- **link**: va.gov/records/get-veteran-id-cards/

## eBenefits Payment History
- Test the link out to eBenefits takes the user to eBenefits
- va.gov/va-payment-history/

## Production items that need testing plan (prod user who can access, description of functionality)
### Claim or Appeal Status 
- Confirm claim / appeal data shows correctly
- **link**: va.gov/claim-or-appeal-status/
- **link**: va.gov/track-claims/your-claims/
- **link**: va.gov/track-claims/

[Claim and Appeals Status - Smoke Test Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/claims-status/track-claim-status/claims-and-appeals-status-internal-smoke-test.pdf)

### VIC Application
- Confirm user can authenticate and link out to vic service (DO NOT NEED TO SUBMIT APPLICATION)
- **link**: va.gov/records/get-veteran-id-cards/vic/

### Post-9/11 GI Bill Statement of Benefits
- Confirm GI Bill data shows correctly
- **link**: va.gov/education/gi-bill/post-9-11/ch-33-benefit/

### Download VA Letters
- Confirm letters data shows correctly
- **link**: va.gov/records/download-va-letters/

[VA Letters - Smoke Test Guide]()
 
### Testers
- Aubrey Arcangel (DS Logon, MHV, ID.me)
- Rian Fowler (DS Logon, ID.me)
- Ben Barone, Dawn Munoz, Ryan Luu, Rachael Roueche
