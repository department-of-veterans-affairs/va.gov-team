## Login.gov test account creation guide

Follow these step-by-step instructions to create a Login.gov account for development and testing in lower environments on VA.gov. For more details on Login.gov user account creation and the Login.gov sandbox environment see the [Login.gov sandbox environment documentation](https://developers.login.gov/testing/#testing-identity-proofing).

### Standard Login.gov account creation flow
1. Navigate to https://dev.va.gov or https://staging.va.gov and click the **Sign in button** to open the sign-in modal and select **Login.gov**.
2. On the Login.gov sign-in page click the **Create an Account** tab. Enter in the [test email address](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/testing/How%20to%20create%20test%20user%20accounts.md)  you wish to use. Login.gov will send an email to that address with a link to confirm your account.
	<img width="841" height="871" alt="new_logingov" src="https://github.com/user-attachments/assets/64ce5669-e76e-4311-b66f-6e17d7ae6462" />
3. Click the link in the email to return to Login.gov. First create your password, then add your multifactor authentication (MFA) method(s). 

> [!NOTE]  
> Login.gov lower environments enforce real multifactor authentication (MFA) usage (unlike ID.me, which spoofs it). So choose methods that you actually plan to use. It's also a good idea to capture the MFA enrollment QR image/text code in order to share out authenticators for the account with other team members.

 <img width="779" height="858" alt="add_mfa" src="https://github.com/user-attachments/assets/6c4c21f0-415d-41a9-9bd5-5826f1e2e102" />

4.  You will be directed back to VA.gov with an unverified account. Click the **Verify with Login.gov button** to return back to Login.gov to complete your account verification.

    <img width="1063" height="755" alt="verify_identity" src="https://github.com/user-attachments/assets/65cda3f4-de4a-449c-b1e7-a179adff5ab3" />
	
5. Agree to the Login.gov terms of use for verification, then select if you want to use a mobile device or your current computer to submit verification photos. Either method will work and not require actual identity documentation.

<img width="1063" height="755" alt="phone_or_computer" src="https://github.com/user-attachments/assets/af51035e-0fe1-4ef3-9739-7fdee8e845b1" />

6. Login.gov will request front and rear photos of an accepted photo ID, but in the lower environments it will accept anything that is card-shaped and not perform actual validations on the information in the photo.

> [!NOTE]  
> If you want to upload custom account attributes for your test account, [upload a YAML file](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity/Products/Test%20User%20Account%20Creation%20-%20Lowers/logingov_test_user_creation.md#custom-logingov-account-attributes) during this step instead of image files.

<img width="706" height="1088" alt="photo_ids" src="https://github.com/user-attachments/assets/4cd7988f-5370-4a9a-8546-a2ff012ed6a6" />

7. After you submit your identity card photos Login.gov will accept them and request your Social Security Number (SSN). 

> [!IMPORTANT]  
> To create a SSN for testing purposes only, the number should start with either `900-` or `666-`. Do not enter real PII in this field.

<img width="828" height="822" alt="fake_ssn" src="https://github.com/user-attachments/assets/ccb2d30b-b51b-438f-87d4-a331474c2474" />
	
8. Next you will have to verify the personal information for your test user account. First name, last name, DOB, and your submitted photo ID number are all preset and cannot be changed (in the standard flow), while address and SSN are also preset but updatable if you wish.

    <img width="828" height="822" alt="personal_information" src="https://github.com/user-attachments/assets/74246a75-2f14-4d66-8928-a950a7d121b9" />
9. After accepting or updating your personal information Login.gov will ask to verify your contact information with either a **phone number** or a **mailing address**. 
  - If you chose to use your phone, Login.gov will send you a one-time code to enter for the verification step. This is a real verification.
    > <img width="828" height="822" alt="verify_phone_or_mail" src="https://github.com/user-attachments/assets/b858bd65-d89e-4ea8-84b5-111f419d4cd7" />
  - To avoid using your phone you can select **Verify your address by mail instead**. Login.gov will present the mailing address you confirmed or updated in the personal information step and allow you to request a letter in the mail.
    > <img width="828" height="822" alt="request_letter" src="https://github.com/user-attachments/assets/95478441-3247-4575-a11b-4d4bd9199669" />
  - After requesting the letter you will be sent back to VA.gov & will have to sign in with Login.gov, then begin the verification with Login.gov again. Upon returning to Login.gov for the verification you will immediately land on a verification code page with the code from your "letter" pre-filled and ready to submit.
    > <img width="828" height="822" alt="verification_code" src="https://github.com/user-attachments/assets/9dd64102-bd9a-4744-9461-e920c1a95589" />
10. After verifying with Login.gov via phone or faked letter, you'll get a personal key that allows you to recover the account if the password is lost. Save this key along with the rest of the credential information. You'll be redirected back to VA.gov and signed into your new IAL2-verified account.

  <img width="828" height="822" alt="personal_key" src="https://github.com/user-attachments/assets/674cd57d-483d-4609-9654-d82454a82f9e" />

### Custom Login.gov account attributes
In order to bypass the standard `Fakey McFakerson` test user attributes, a YAML (`.yml`) file can be uploaded during the document verification portion of the Login.gov account verification process in place of document photos. In the lower environments the attributes in the YAML file will be processed and set as user attributes in place of the standard ones.

The YAML file is only required in the upload field for the back of your identity document. Regardless, it’s good practice to upload the same YAML file in both upload fields to avoid confusion when testing.

```yaml
# proofing.yml
document:
  first_name: Jane
  last_name: Doe
  middle_name: Test
  address1: 1600 Pennsylvania Ave
  address2: Suite 202
  city: Washington
  state: DC
  zipcode: '20012'
  dob: '1945-11-11'
  phone: +1 111-222-3333
  state_id_number: '123456789'
  state_id_type: drivers_license
  state_id_jurisdiction: 'DC'
  state_id_expiration: '2030-01-01'
  state_id_issued: '2020-01-01'
  issuing_country_code: 'US'
```
 
<img width="1093" height="793" alt="proofing_yaml" src="https://github.com/user-attachments/assets/ba6e3ca1-4905-49e7-ac0e-58f3b16b544f" />

After submitting your YAML file you'll see the relevant user attributes populated correctly throughout the rest of the Login.gov verification process and when you return to VA.gov as an IAL2 verified user.

<img width="809" height="788" alt="proofing_yaml_personal_info" src="https://github.com/user-attachments/assets/b763f75f-2670-4e63-a194-c0930767f6ff" />
<img width="809" height="788" alt="proofing_yaml_return_vagov" src="https://github.com/user-attachments/assets/fc96056c-ca97-4bc6-bb6f-5c42a6580ad4" />

