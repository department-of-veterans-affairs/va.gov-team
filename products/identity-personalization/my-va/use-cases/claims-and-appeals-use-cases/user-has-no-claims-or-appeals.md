# My VA Claims and Appeals Use Case: User does not have an open claim or appeal, or one that has been closed in the last 60 days

**Last updated:** April 13, 2023

For LOA3 users who sign in and do not have an open claim or appeal or one that has been closed within the last 60 days, we will show text stating as such in the Claims and Appeals section on My VA as well as links to the claims tool and info about how to file a claim.

## UX
- Any logged in LOA3 user can see the Claims and Appeals section on My VA.
- If a logged in LOA3 user does not have an open claim or appeal or one that has been closed in the last 60 days, they will see text that reads “You have no claims or appeals to show.” under the “Claims and appeals” header.
- When a user has no claims or appeals information to show, they will also see links to “Learn how to file a claim” which links to [a page about how to file a disability claim](https://www.va.gov/disability/how-to-file-claim/), as well as "Manage all claims and appeals" which links to the [claims tool](https://www.va.gov/claim-or-appeal-status/) where they can view a list of all past claims.
- This text is always displayed on the lefthand side of the page on desktop and at the top of the list directly under the Claims and appeals header on mobile, and the secondary links always display directly underneath this text.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A318&mode=design&t=ZhUs1Oeae2EQjVFh-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A763&mode=design&t=ZhUs1Oeae2EQjVFh-1)

## How to reproduce
- Find a staging user who does not have an open claim or appeal or one that has closed in the last 60 days in the [claims and appeals staging user test cases](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/staging-test-accounts-myvaaudit.md#claims-and-appeals-section).
- Log into staging.va.gov with a test user who has no claims or appeals to show.
- Once logged in, you will be redirected to My VA.
- Verify that you see text stating you have no claims or appeals to show.
- Verify that you see secondary links to “Learn how to file a claim” and “Manage all claims and appeals” and that they appear on the lefthand side on desktop below the text.
