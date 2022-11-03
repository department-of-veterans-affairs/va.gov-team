# Onsite Notifications: LOA1 User
Last updated: November 1, 2022

A user is considered "LOA1" when they log in to VA.gov and they have not verified their identity with any of the credentials we support. LOA1 users who sign into VA.gov are immediately prompted to verify their identity on My VA. They will not see any onsite notifications until they have verified their identity.

## UX
- When an LOA1 user signs in, they are automatically redirected to My VA. Until they have verified their identity they will see ...
- [Desktop mock-up]
- [Mobile mock-up]

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that acct's email and password.
2. Sign in with LOA1 credientials 
3. See the prompt on My VA to verify your identity 
