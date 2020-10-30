# Staging users

### Test cases

- For test cases, we can probably use most of the same test cases we used for direct deposit for comp & pen testing. We'll need to review

### Users

- [These users should have access to GI Bill benefit info](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-gibill.md), which means, in theory, they should also be set up to see direct deposit info for edu.
- However, I only saw direct deposit info for edu for the following staging users when I double-checked in eBenefits:
  - Kenneth Andrews: vets.gov.user+3@gmail.com
  - Mark Webb: vets.gov.user+228@gmail.com (229 might be the same person)
- Once we start building on VA.gov, we'll need to validate we can actually access the feature with these users. If not, we may need to pull in eBenefits + ID.me folks to help us get things set up properly.
- Also, when the feature is set up, we should try to access direct deposit for edu for the other GI Bill staging users mentioned above just in case any of them actually are found to be eligible for edu payments.
