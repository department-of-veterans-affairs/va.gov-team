Please refer to the [staging user information in the sensitive repo](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-direct-deposit.md).

-----

### Historical notes -- please do not delete

#### Latest update

- The only staging user we have for direct deposit for edu is vets.gov.user+378@gmail.com. 
  - This actually started out as user vets.gov.user+3@gmail.com, but this user has a different SSN in eBenefits and VA.gov, which meant the identities weren't synced on the backend and we couldn't view dd for edu info for this user in VA.gov even though we could on eBenefits. So, we set up a new user – vets.gov.user+378@gmail.com — that has almost all the same info as vets.gov.user+3@gmail.com (first/middle/last name; gender; DOB), but the SSN matches eBenefits, so we can view DD for edu info on VA.gov.

#### Nov 2020

**Old — don't use**

- [These users should have access to GI Bill benefit info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-gibill.md), which means, in theory, they should also be set up to see direct deposit info for edu.
- However, I only saw direct deposit info for edu for the following staging users when I double-checked in eBenefits:
  - Kenneth Andrews: vets.gov.user+3@gmail.com
  - Mark Webb: vets.gov.user+228@gmail.com (229 might be the same person)
- Once we start building on VA.gov, we'll need to validate we can actually access the feature with these users. If not, we may need to pull in eBenefits + ID.me folks to help us get things set up properly.
- Also, when the feature is set up, we should try to access direct deposit for edu for the other GI Bill staging users mentioned above just in case any of them actually are found to be eligible for edu payments.
