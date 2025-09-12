# ID.me test account creation guide
Follow these step-by-step instructions to create an ID.me account for development and testing in lower environments on VA.gov. For more details on ID.me user account creation functions and the ID.me sandbox environment see the [ID.me test credentials documentation](https://developers.id.me/documentation/deploy-and-monitor/quality-assurance-testing/best-practice).

## Standard ID.me account creation flow
1. Navigate to https://dev.va.gov or https://staging.va.gov and click the **Sign in button** to open the sign-in modal and select **ID.me**.
2. On the ID.me sign in page click Create an ID.me account to be taken to the ID.me account registration page. Enter a [test email address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/testing/How%20to%20create%20test%20user%20accounts.md) you wish to use. ID.me will email that address with a link to confirm your account.

   <img width="709" height="916" alt="enter_email" src="https://github.com/user-attachments/assets/46c98769-44fd-42f3-bff8-cb624685d7b4" />
3. Click the link in the email ID.me sends or copy over the code contained in it to your original ID.me window to complete the email proofing process, then proceed to setting up your multifactor authentication (MFA). You also have the option of forgoing adding a MFA method at this point, but will be forced to add it if you wish to verify your account later.

> [!NOTE]  
> Unlike Login.gov, ID.me mocks its MFA during authentication, meaning you won't need to actually use your MFA method. Therefore the easiest MFA method to add is a phone number. ID.me runs a basic validation to ensure it appears as a valid US-based phone number, but beyond that does not validate or attempt to contact it for lower environment MFA purposes.

   <img width="1086" height="811" alt="fake_phone_2fa" src="https://github.com/user-attachments/assets/5b1d20b0-7eb9-45f3-9a66-47823f8dd956" />
    
   <img width="1086" height="811" alt="confirm_2fa" src="https://github.com/user-attachments/assets/41d959af-7818-4302-a1e5-3edf74a50a40" />

4. You will be directed back to VA.gov with an unverified account. Click the **Verify with ID.me button** to return back to ID.me to complete your account verification. You'll re-enter your email and password. If you have not already set up a MFA method, you'll create one now to continue.

   <img width="1080" height="651" alt="verify_identity" src="https://github.com/user-attachments/assets/42c314b9-9f3b-43b8-9661-b161b08b5845" />
    
5. ID.me will then ask to verify your identity via identity documents - no analysis will be performed and you do not need to submit actual identification. Select option #2 **Upload photos of your license of state ID**. 

    <img width="1077" height="894" alt="verify_identity_documents" src="https://github.com/user-attachments/assets/0bfd826f-ff44-4173-8a94-177d86810957" />
6. ID.me will request to send a link to your phone to upload the documents from; accept this request then click on the **Upload form (testing only)** link at the bottom of the followup page to be taken to the ID.me lowers identify verification page.

    <img width="666" height="871" alt="identity_verification_confirmation" src="https://github.com/user-attachments/assets/754f78cf-ebdf-4dc4-8e4b-7a983cfd72bc" />
7. ID.me will request you submit images of the front and back of your photo ID. It will accept any uploads, and it will not attempt to validate them.

   <img width="740" height="1138" alt="photo_ids" src="https://github.com/user-attachments/assets/2914dac4-c3c0-4fca-96ed-ea6e5b5bba68" />
8. After accepting your document photos you will be asked to enter in a SSN for testing purposes only. 

> [!IMPORTANT]  
> Create a fake SSN; do not enter real PII in this field. ID.me will present `"Veronica Persinger"` test account information to verify.

   <img width="666" height="871" alt="veronica_persinger" src="https://github.com/user-attachments/assets/3fa3122a-d14f-4290-a5a8-56c1c0b697b2" />
   
9. After accepting the personal information ID.me will again try to confirm your phone - click the **Verify phone (testing only)** link to open a new tab that will complete the phone verification for you. The original tab will then verify your identity.

    <img width="666" height="871" alt="final_phone_verification" src="https://github.com/user-attachments/assets/3a44616e-3c3f-4363-bf5c-556b26ac06c7" />
    
    <img width="655" height="906" alt="successful_verification" src="https://github.com/user-attachments/assets/593a9ccd-be99-4bd8-b489-a91e8e553950" />
    
10. You should then be returned to VA.gov to accept the **VA Terms of Use** and be logged in as a verified LoA3 ID.me user.
