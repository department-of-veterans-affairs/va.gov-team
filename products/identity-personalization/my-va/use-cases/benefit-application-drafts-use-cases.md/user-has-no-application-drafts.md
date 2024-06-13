# My VA Benefit Application Draft Use Case: User has no benefit application drafts saved

**Last updated:** February 16, 2024 - added Figma links

For LOA3 users who sign in and have no benefit application drafts saved, they will see text stating that they have no benefit application drafts to show.

## UX
- Any logged in LOA3 user can see the Benefit application drafts section on My VA.
- When a user does not have any saved benefit application drafts, they will see text below the dropdown that says “You have no benefit application drafts to show.”
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A292&mode=design&t=ACz9YR6bpwDeZvbB-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A891&mode=design&t=ACz9YR6bpwDeZvbB-1)

## How to reproduce
- Find a staging user who does not have any benefit application drafts in the [benefit application drafts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#saved-applications-section).
- Log into staging.va.gov with a test user who has no benefit application drafts saved.
- Once logged in, you will be redirected to My VA.
- Verify that you see text stating that there are no benefit application drafts to show.
