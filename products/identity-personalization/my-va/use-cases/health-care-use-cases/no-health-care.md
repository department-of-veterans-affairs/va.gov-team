# My VA Health Care Use Case: User does not have VA health care

**Last updated:** January 5, 2024 _(removal of reference to MyHealtheVet link on My VA, added Figma links)_

For LOA3 users who sign in but do not have VA health care, they will see text stating that they do not have any health care information to show as well as a link to apply for VA health care.

## UX

- Any logged in LOA3 user can see the Health care section on My VA.
- When a LOA3 user does not have VA health care, they will see text in the Health care section that says “You do not have any health care information to show.”
- Below this text, the user will see a link to [“Apply for VA health care”](https://www.va.gov/health-care/apply/application/introduction).
- No other secondary links show in the Health care section in this scenario.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A350&mode=design&t=8ja2eQhXuACIWdMO-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A763&mode=design&t=8ja2eQhXuACIWdMO-1)

## How to reproduce
- Find a staging user who does not have VA health care in the [health care staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#health-care-section).
- Log into staging.va.gov with a test user who does not have VA health care.
- Once logged in, you will be redirected to My VA.
- Verify that you see text stating the user does not have any health care information to show in the Health care section.
- Verify that you see a link to “Apply for VA health care” below that text.
- Verify that you do not see anything else in the Health care section.
