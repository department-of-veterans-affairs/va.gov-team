# My VA: LOA1 User
**Last updated: December 16, 2022**

A user is considered "LOA1" when they log in to VA.gov and they have not verified their identity with any of the credentials we support. LOA1 users who sign into VA.gov are immediately prompted to verify their identity on My VA. 

## UX
- When an LOA1 user signs in, they are automatically redirected to My VA. Until they have verified their identity, they will see a prompt on My VA to verify their identity and a section called "Apply for VA Benefits."
- [Desktop mock-up](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/32BCF55D-35A5-4A17-9F37-3DCA903B7A50)
- [Mobile mock-up](https://www.sketch.com/s/9b0e6efc-423a-4354-9db3-ab2083d566c9/a/uuid/1B92AE9B-F7D6-42FE-9CCA-90B99A4747E9)

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that acct's email and password.
2. Sign in with LOA1 credientials. 
3. See the prompt on My VA to verify your identity and a section to apply for VA benefits.
