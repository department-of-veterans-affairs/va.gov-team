# My VA Benefit Application Draft Use Case: User has no benefit application drafts saved

**Last updated:** April 13, 2023

For LOA3 users who sign in and have no benefit application drafts saved, they will see an expandable dropdown about VA benefits and text stating that they have no benefit application drafts to show.

## UX
- Any logged in LOA3 user can see the Benefit application drafts section on My VA.
- Below the Benefit application drafts header, the user will see an expandable dropdown that says “What benefits does VA offer?” 
	- If the user expands this dropdown, they will see a list of links for all VA benefits which link to the same landing pages as the main navigation: Health care, Education and training, Disability compensation, Careers and employment, Pension, Housing assistance, Burials and memorials, Life insurance, Service member benefits, and Family member benefits.
- When a user does not have any saved benefit application drafts, they will see text below the dropdown that says “You have no benefit application drafts to show.”
- [Desktop mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/10A09E21-70D7-4606-9E8A-1EBB31AE8EC9)
- [Mobile mockup](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/C7F1D33D-5400-41CE-8F6D-78F43105AE91)

## How to reproduce
- Find a staging user who does not have any benefit application drafts in the [benefit application drafts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#saved-applications-section).
- Log into staging.va.gov with a test user who has no benefit application drafts saved.
- Once logged in, you will be redirected to My VA.
- Verify that you see the dropdown for VA benefits below the section header.
- Verify that you see text stating that there are no benefit application drafts to show.
