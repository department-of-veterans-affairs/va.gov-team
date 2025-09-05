# ID.me Test Account Creation Guide
This document is a guide for creating a ID.me lower environment test account for usage on the development and staging VA.gov instances. For more details on how ID.me user account creation functions and the ID.me sandbox environment see the [ID.me test credentials documentation](https://developers.id.me/documentation/deploy-and-monitor/quality-assurance-testing/best-practice).

## Standard ID.me Account Creation Flow
1. Navigate to dev or staging VA.gov & use the sign in modal to initiate a request with ID.me.
2. On the ID.me sign in page click the ["Create an ID.me account"](https://api.idmelabs.com/en/registration/new) link to be taken to the ID.me account registration page, then enter in the email address you wish to use - ID.me will email that address with a link to confirm your access to it if it doesn't already have an account on record for that email.

   <img width="709" height="916" alt="enter_email" src="https://github.com/user-attachments/assets/46c98769-44fd-42f3-bff8-cb624685d7b4" />
4. Click the link in the email ID.me sends or copy over the code contained in it to your original ID.me window to complete the email proofing process, then proceed to setting up your 2FA. You also have the option of forgoing adding a 2FA method at this point.

   <img width="709" height="916" alt="add_2fa" src="https://github.com/user-attachments/assets/09c0f856-782b-4b3b-a431-72cc2b5a2a0f" />
6. After adding or skipping a 2FA method you will be returned to VA.gov with an unverified account. Click the link to return back to ID.me to complete your account verification. You will need to re-enter your email and password, and if you have not already set up a 2FA method you will be forced to create one now.

   <img width="1080" height="651" alt="verify_identity" src="https://github.com/user-attachments/assets/42c314b9-9f3b-43b8-9661-b161b08b5845" />
  - Unlike Login.gov ID.me mocks its 2FA during authentication, meaning you won't need to actually use your 2FA method. Therefore the easiest 2FA method to add is a phone number; ID.me runs a basic validation to ensure it appears as a valid US-based phone number but beyond that does not validate or attempt to contact it for lower environment 2FA purposes.

    <img width="1086" height="811" alt="fake_phone_2fa" src="https://github.com/user-attachments/assets/5b1d20b0-7eb9-45f3-9a66-47823f8dd956" />
    <img width="1086" height="811" alt="confirm_2fa" src="https://github.com/user-attachments/assets/41d959af-7818-4302-a1e5-3edf74a50a40" />
5. ID.me will then ask to verify your identity via identity documents. Choose option #2 `"Upload photos of your license of state ID`". 

    <img width="1077" height="894" alt="verify_identity_documents" src="https://github.com/user-attachments/assets/0bfd826f-ff44-4173-8a94-177d86810957" />
6. ID.me will request to send a link to your phone to upload the documents from; accept this request then click on the `"Upload form (testing only)"` link at the bottom of the followup page to be taken to the ID.me lowers identify verification page.

    <img width="666" height="871" alt="identity_verification_confirmation" src="https://github.com/user-attachments/assets/754f78cf-ebdf-4dc4-8e4b-7a983cfd72bc" />
7. ID.me will request you submit images of the front and back of your photo ID - it will accept any uploads and not attempt to validate them.

    <img width="666" height="871" alt="fake_id_documents" src="https://github.com/user-attachments/assets/a0ee5a14-794e-4a98-b6cc-6019d86f8d28" />
8. After accepting your document photos you will be asked to enter in a SSN, and then presented with the `"Veronic Persinger"` test account information to verify.

    <img width="666" height="871" alt="veronica_persinger" src="https://github.com/user-attachments/assets/3fa3122a-d14f-4290-a5a8-56c1c0b697b2" />
9. After accepting the personal information ID.me will again try to confirm your phone - click the `"Verify phone (testing only)"` link to open a new tab that will complete the phone verification for you. The original tab will then verify your identity.

    <img width="666" height="871" alt="final_phone_verification" src="https://github.com/user-attachments/assets/3a44616e-3c3f-4363-bf5c-556b26ac06c7" />
    <img width="655" height="906" alt="successful_verification" src="https://github.com/user-attachments/assets/593a9ccd-be99-4bd8-b489-a91e8e553950" />
10. You should then be returned to VA.gov to complete the VA Terms of Use and be logged in as a verified LoA3 ID.me user.
