# My VA LOA1 Use Case: User has saved application(s)
**Last updated: October 25, 2023**

For users who sign in and have not yet verified their identity, they will see a prompt on My VA to verify their identity at the top of the page. They will also see sections for "Claims and appeals", "Health care", and "Education and training" that have introductory links for more info about each. When a LOA1 user has saved application(s) in their account, they will also see a card to continue their application in a section for "Benefit application drafts" at the bottom of the page.

## UX
- An LOA1 user who signs into VA.gov will see:
  - a prompt to verify their identity at the top of My VA
  - a section for "Claims and appeals" with a link to [Learn how to file a claim](https://www.va.gov/disability/how-to-file-claim/)
  - a section for "Health care" with a link to [Apply for VA health care](https://www.va.gov/health-care/apply/application/introduction)
  - a section for "Education and training" with a link to [Learn how to apply for VA education benefits](https://va.gov/education/how-to-apply/)
  - A section for "Benefit application drafts" where any saved in progress forms will appear as cards.
- When a user has a benefit application draft saved in progress, they will see a card in the "Benefit application drafts" section that tells them the form code, application type, an expiration date for the application, the date that they last opened it, and a link to continue the application.
	- Conditions in [Platform documentation](https://depo-platform-documentation.scrollhelp.site/developer-docs/va-forms-library-how-to-set-up-save-in-progress-si#VAFormsLibrary-HowtosetupSaveInProgress(SiP)-MyVAPage) for saving forms in progress and changes in User Profile code must be met in order for a form that is saved to show up in this section of My VA.
- This card is always displayed on the left hand side of the page on desktop when there is only one card to show.
- If a user has multiple benefit application drafts saved, they will see a card for each of them in this section and they are displayed side by side on desktop with two max per row.
- Uses the [card component](https://design.va.gov/components/card) from the VA design system.
- [Desktop mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A239&mode=design&t=WghpiwwCzYuhYyHN-1)
- [Mobile mockup](https://www.figma.com/file/15yOY4VEzitxm5tRMDiAzz/My-VA?type=design&node-id=0%3A905&mode=design&t=WghpiwwCzYuhYyHN-1)

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that acct's email and password.
2. Sign in with LOA1 credientials. 
3. See the prompt on My VA to verify your identity and four other sections as outlined above.

