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
- User has not updated their contact email address since March 1, 2025 (using email.updatedAt property in VA profile)

Staging user **without** contact email:

Staging user **with** contact email: vets.gov.user+11@gmail.com

**There is more logic for whether we show alerts on profile;** see section below "Alert on contact information page of profile"

## Interstitial after authentication
- Staging user:
  
- Behavior: When the user logs in, instead of immediately sending the user to the My VA landing page OR returning them to whatever page they were on on VA.gov, they first are taken to this interstitial page.

- url: va.gov/sign-in-confirm-contact-email

<details>
  <summary>For users **without** a contact email address</summary>
  <img width="1048" height="703" alt="image" src="https://github.com/user-attachments/assets/0209192f-41b4-4c41-98cc-ef6a4d6ba3c7" />
</details>

<details>
  <summary>For users **with** a contact email address</summary>
<img width="684" height="494" alt="image" src="https://github.com/user-attachments/assets/dc3852ce-94f1-4af0-9ac1-1098e5bf6b84" />

</details>


## Alert on MHV and My VA landing pages
- Staging user: vets.gov.user+11@gmail.com
  
- Behavior: For MHV, the alert will appear [using the same logic listed above.]((https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#logic-for-displaying-all-interstitial-and-alerts) **For My VA, there is different logic**: the alert will appear only for users who have email, phone, and address filled out in their VA.gov profile and the `email.updatedAt` property in VA profile is before March 1, 2025. If any of these fields is missing, a different alert will appear instead with heading `We need your contact info`.

- url: va.gov/my-health and va.gov/my-va

<details>
  <summary>For users **without** a contact email address</summary>
  <img width="589" height="537" alt="image" src="https://github.com/user-attachments/assets/60655072-fe7b-4af3-a877-4a6902dbe6e5" />
<img width="493" height="346" alt="image" src="https://github.com/user-attachments/assets/117b4b16-5bd4-46c0-a048-37dd52eaa650" />

</details>

<details>
  <summary>For users **with** a contact email address</summary>
<img width="726" height="579" alt="image" src="https://github.com/user-attachments/assets/b1f667ab-b37a-408e-8726-01c3ab4e2808" />
<img width="721" height="643" alt="image" src="https://github.com/user-attachments/assets/b524603c-8180-4e0a-b082-7a17073cf03d" />
</details>

## Alert on contact information page of profile
- Staging user: vets.gov.user+11@gmail.com
  
- Behavior:

- url: va.gov/profile/contact-information#contact-email-address

<details>
  <summary>For users **without** a contact email address</summary>
<img width="633" height="430" alt="image" src="https://github.com/user-attachments/assets/23b2b934-9e1f-4bea-8ed6-b095c0687645" />
</details>

<details>
  <summary>For users **with** a contact email address</summary>
<img width="648" height="452" alt="image" src="https://github.com/user-attachments/assets/40acbe03-edf1-42e1-af75-23252de36b4f" />

</details>
