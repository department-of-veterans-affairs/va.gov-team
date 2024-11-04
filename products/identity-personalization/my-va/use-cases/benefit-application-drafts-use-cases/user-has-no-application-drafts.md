# My VA Benefit Applications and Forms Use Case: User has no benefit application drafts saved

**Last updated:** Nov 3, 2024 - updated text

For LOA3 users who sign in and have no benefit application drafts saved, they will see text stating that they have no benefit application drafts to show.

## UX
- Any logged in LOA1 or LOA3 user can see the Benefit applications and forms section on My VA.
- When a user does not have any saved benefit application drafts, they will see text below the dropdown that says “You have no benefit application drafts to show.”
- A user will also see an accordion component that is titled "If you can't find your application or form", with explanation as to why a user may not see their form appear in this section.
- [Desktop mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1231-49126&t=TWmq9bh0GmkgDdwH-1)
- [Mobile mockup](https://www.figma.com/design/15yOY4VEzitxm5tRMDiAzz/My-VA?node-id=1260-37414&t=TWmq9bh0GmkgDdwH-1)

## How to reproduce
- Find a staging user who does not have any benefit application drafts in the [benefit application drafts staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#saved-applications-section).
- Log into staging.va.gov with a test user who has no benefit application drafts saved.
- Once logged in, you will be redirected to My VA.
- Verify that you see text stating that there are no benefit applications or forms to show.
