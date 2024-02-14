# Profile: LOA1 user attempts to access any section of profile

Last updated February 14, 2024

A user is considered "LOA1" when they log in to VA.gov and they have not verified their identity with any of the credentials we support. LOA1 users who sign into VA.gov and go to the profile can't see any page in profile other than Account Security. 

## UX
- When an LOA1 user navigates to profile, they'll only see the Account Security page; no other pages in profile are available from the profile navigation menu.
- If they click a URL that leads directly to any specific page under `/profile/` they're redirected to `/profile/account-security`.
- [Desktop mock-up](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-313&mode=design&t=EjU8iLKh728VGBef-11)
- [Mobile mock-up](https://www.figma.com/file/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?type=design&node-id=0-147&mode=design&t=EjU8iLKh728VGBef-11)

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that acct's email and password.
2. Navigate to profile or update the URL in your browser to point to `/profile/direct-deposit` or any other section of profile aside from `/profile/account-security`
