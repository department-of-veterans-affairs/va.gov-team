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
6:30-7:30pm ET Wednesday, 10.7.18

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

## Personalization Products
### Profile
- Does information show for:
   1. Contact info
   2. Personal Info
   3. Military History
- Do contact information updates work?

### Dashboard
- Do widgets show?
- Do widget view all links function correctly (no 404s, no issues outlinking to MHV tools)?
- Can a form / application be started elsewhere and resumed from the dashboard?

### Account 
- Does identity verification work?
- Does 2FA work first time, and hold on second time?
- Do terms and conditions work?
   
 
# Next Steps
1. Ben secure logins (MHV prod, friends (aubrey, rian, josh)
2. Use analytics (Ben connect with Tony, Nedie) to determine top 15 used pages / tools / things on VA.gov
