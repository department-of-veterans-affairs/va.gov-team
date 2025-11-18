# Contact email alert for MHV migration use cases
Last updated: November 2025
- [Figma file designs for interstitial](https://www.figma.com/design/CAChU51fWYMZsgDR5RXeSc/MHV-Landing-Page?node-id=6688-35478)
- [User flow for interstitial](https://www.figma.com/design/fk8WtgZIRuS2UAjEvWHsey/Untitled?node-id=2-12128&t=t7hyaS0B4QABWYzv-1)
- [Figma file designs for alerts](https://www.figma.com/design/fk8WtgZIRuS2UAjEvWHsey/Untitled?node-id=5-61241&t=t7hyaS0B4QABWYzv-1)
- [User flow for alerts](https://www.figma.com/design/fk8WtgZIRuS2UAjEvWHsey/Untitled?node-id=5-76624&t=t7hyaS0B4QABWYzv-1)

## Quick links
- [Interstitial after authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#interstitial-after-authentication)
- [Alert on MHV and My VA landing pages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#alert-on-mhv-and-my-va-landing-pages)
- [Alert on contact information page of profile](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#alert-on-contact-information-page-of-profile)

## Logic for displaying all interstitial and alerts 
- User must be ID-verified (LOA3);
- User is registered at at least 1 facility (VA profile);
- User has not updated their contact email address since March 1, 2025 (we're using email.updatedAt property in VA profile)

Staging user **without** contact email: vets.gov.user+12@gmail.com

Staging user **with** contact email: vets.gov.user+11@gmail.com

**There is more logic for whether we show alerts on My VA;** [see section below "Alert on MHV and My VA landing pages"](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#alert-on-mhv-and-my-va-landing-pages)

## Interstitial after authentication  
- Behavior: When the user logs in, instead of immediately sending the user to the My VA landing page OR returning them to whatever page they were on on VA.gov, they first are taken to this interstitial page. When the Veteran chooses option to either `add email in profile` or `update email in profile`, they will get sent directly to the contact email address area of profile. When the Veteran chooses to `confirm` their contact email, they should get a success alert and never see the interstitial again, and never get the alerts. When the Veteran chooses to `skip adding an email`, they will still get the alerts.
- Note: Built by Identity team

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
- Behavior: For MHV, the alert will appear [using the same logic listed above.](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#logic-for-displaying-all-interstitial-and-alerts) **For My VA, there is different logic**: the alert will appear only for users who have contact email, phone, and address filled out in their VA.gov profile and the `email.updatedAt` property in VA profile is before March 1, 2025. If any of these fields is missing, a different alert will appear instead with heading `We need your contact info`. When the Veteran chooses option to either `go to profile to update your contact email` or `go to profile to add a contact email`, they will get sent directly to the contact email address area of profile. When the Veteran chooses to `confirm` their contact email, they should get a success alert and never see the alerts or the interstitial again. When the Veteran chooses to `skip adding an email`, they'll get a success alert and the alert will go away, but only temporarily. The skip action is saved in browser cookies and will expire.
When the Veteran chooses `confirm` in these alerts, they will receive a success alert and the alerts and interstitial should never get served to them again.

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
- Behavior: [Same logic as above](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/my-va/use-cases/contact-email-alert-for-MHV-migration.md#logic-for-displaying-all-interstitial-and-alerts). When the Veteran chooses option to either `add a contact email` or `edit contact email`, the text field for contact email opens and focus moves to that open field. When the Veteran chooses to `confirm` their contact email, they should get a success alert and never see the alerts or the interstitial again. When the Veteran chooses to `skip adding an email`, they'll get a success alert and the alert will go away, but only temporarily. The skip action is saved in browser cookies and will expire.
- url: va.gov/profile/contact-information#contact-email-address

<details>
  <summary>For users **without** a contact email address</summary>
<img width="633" height="430" alt="image" src="https://github.com/user-attachments/assets/23b2b934-9e1f-4bea-8ed6-b095c0687645" />
</details>

<details>
  <summary>For users **with** a contact email address</summary>
<img width="648" height="452" alt="image" src="https://github.com/user-attachments/assets/40acbe03-edf1-42e1-af75-23252de36b4f" />

</details>
