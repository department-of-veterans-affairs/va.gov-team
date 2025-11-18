# Contact email alert for MHV migration use cases
Last updated: November 2025
- User flow
- Figma files

## Quick links
- Interstitial after authentication
- Alert on MHV and My VA landing pages
- Alert on contact information page of profile

## Logic for displaying all interstitial and alerts 
- User must be ID-verified;
- User is registered at at least 1 facility (VA profile);
- User has not updated their contact email address since March 1, 2025 

<br>
**There is more logic for whether we show alerts on profile;** see section below "Alert on contact information page of profile"

## Interstitial after authentication
- Staging user: 
- Behavior: When the user logs in, instead of immediately sending the user to the My VA landing page OR returning them to whatever page they were on on VA.gov, they first are taken to this interstitial page.
Link to designs: Missing Contact Information Alert
- url: va.gov/sign-in-confirm-contact-email
Content: Header: We need your contact information Body: We're missing some contact information for you. Add your full contact information so that we can contact you about your VA benefits Action Link: Add your contact information

<details>
  <summary>For users **without** a contact email address</summary>
  <img width="1048" height="703" alt="image" src="https://github.com/user-attachments/assets/0209192f-41b4-4c41-98cc-ef6a4d6ba3c7" />
</details>

<details>
  <summary>For users **with** a contact email address</summary>
  <img width="1048" height="703" alt="image" src="https://github.com/user-attachments/assets/0209192f-41b4-4c41-98cc-ef6a4d6ba3c7" />
</details>


## Alert on MHV and My VA landing pages


## Alert on contact information page of profile
- 
