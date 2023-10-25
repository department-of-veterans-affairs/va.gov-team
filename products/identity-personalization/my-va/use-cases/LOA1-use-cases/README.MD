# My VA: LOA1 User
**Last updated: October 25, 2023**

A user is considered "LOA1" when they log in to VA.gov and they have not verified their identity with any of the credentials we support. LOA1 users who sign into VA.gov are immediately prompted to verify their identity on My VA. 

## UX
- When an LOA1 user signs in from the homepage, they are automatically redirected to My VA. Until they have verified their identity, they will see a prompt on My VA to verify their identity at the top of the page. They will also see sections for "Claims and appeals", "Health care", and "Education and training" that have introductory links for more info about each. They will also see a section for "Benefit application drafts" where any benefit applications that are started and saved but not submitted will show as a card.
- [Desktop mock-up](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/529RArL)
- [Mobile mock-up](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/zxLrdol)

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that acct's email and password.
2. Sign in with LOA1 credientials. 
3. See the prompt on My VA to verify your identity and four other sections as outlined above.
