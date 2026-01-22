# LOA1 user attempts to access any section of profile

Last updated: November 2025  

# Jump to

[Overview](#overview)

[Experience](#experience)

[How to reproduce](#how-to-reproduce)

# Overview 

A user is considered **LOA1** when they log in to VA.gov and they have not verified their identity with any of the credentials we support. **LOA1** users who sign into VA.gov and go to the profile can't see any page in the profile other than **Sign-in information**. On the **Sign-in information** page they are prompted to verify their account.

# Experience 

* When an **LOA1** user navigates to profile, they'll only see the **Sign-in information** page; no other pages in profile are available from the profile navigation menu.  
* If they click a URL that leads directly to any specific page under **/profile/** they're redirected to **/profile/account-security/sign-in-information**.  
* [Link to design](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-7987&t=vEzOY6Vc44fxJdc2-1)

# How to reproduce 

1. Log into staging with any LOA1 user.  
   * Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own.  
   * You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog.  
   * DO NOT verify your identity on the ID.me side.  
   * Once created, log into Staging with that account's email and password.  
2. Navigate to profile or update the URL in your browser to point to **/profile/contact-information** or any other section of profile aside from /**profile/account-security/sign-in-information**.


---


<details><summary>Archive | Profile shared use cases, July 2025</summary>

# Profile: LOA1 user attempts to access any section of profile

**Last updated September 2025**

A user is considered "LOA1" when they log in to VA.gov and they have not verified their identity with any of the credentials we support. LOA1 users who sign into VA.gov and go to the profile can't see any page in profile other than Account security. 

## UX
- When an LOA1 user navigates to profile, they'll only see the Account security page; no other pages in profile are available from the profile navigation menu.
- If they click a URL that leads directly to any specific page under `/profile/` they're redirected to `/profile/account-security`.
- [Design mock-up](https://www.figma.com/design/05k2PTmuDVgBj2HnzUZayg/Profile---Account-Security?node-id=613-7987&t=vEzOY6Vc44fxJdc2-1)

## How to reproduce
1. Log into staging with any LOA1 user. 
   - Note that the Identity team doesn't maintain LOA1 accounts, so you may need to create your own. 
   - You can do this by selecting "Create an account with ID.me" when you're at Staging's sign-in dialog. 
   - DO NOT verify your identity on the ID.me side.  
   - Once created, log into Staging with that account's email and password.
2. Navigate to profile or update the URL in your browser to point to `/profile/direct-deposit` or any other section of profile aside from `/profile/account-security`.

</details>
