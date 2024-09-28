# My VA LOA1 Use Case: User has no saved application(s)
**Last updated: February 15, 2024**

For users who sign in and have not yet verified their identity, they will see a prompt on My VA to verify their identity at the top of the page. They will also see sections for "Claims and appeals", "Health care", and "Education and training" that have introductory links for more info about each. When a LOA1 user does not have any saved application(s) in their account, they will see text stating this in the "Benefit application drafts" section at the bottom of My VA.

## UX
- An LOA1 user who signs into VA.gov will see:
  - a prompt to verify their identity at the top of My VA
  - a section for "Claims and appeals" with a link to [Learn how to file a claim](https://www.va.gov/disability/how-to-file-claim/)
  - a section for "Health care" with a link to [Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction)
  - a section for "Education and training" with a link to [Learn how to apply for VA education benefits](https://va.gov/education/how-to-apply/)
  - A section for "Benefit application drafts" where any saved in progress forms will appear as cards.
- When a user has no benefit application drafts saved in progress, they will see text in the "Benefit application drafts" section that says "You have no benefit application drafts to show."
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A246&mode=design&t=e03hBvHWqrqNPQJj-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A911&mode=design&t=e03hBvHWqrqNPQJj-1)

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that acct's email and password.
2. Sign in with LOA1 credientials. 
3. See the prompt on My VA to verify your identity and four other sections as outlined above.
