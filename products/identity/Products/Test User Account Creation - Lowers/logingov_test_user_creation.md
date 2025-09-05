## Login.gov Test Account Creation Guide

This document is a guide for creating a Login.gov lower environment test account for usage on the development and staging VA.gov instances. For more details on how Login.gov user account creation functions and the Login.gov sandbox environment see the [Login.gov sandbox environment documentation](https://developers.login.gov/testing/#testing-identity-proofing).

### Standard Login.gov Account Creation Flow
1. Navigate to dev or staging VA.gov & use the sign in modal to initiate a request with Login.gov.
2. On the Login.gov sign in page click the "Create an Account" tab and enter in the email address you wish to use - Login.gov will email that address with a link to confirm your access to it if it doesn't already have an account on record for that email.
3. Follow the link in the email to return to Login.gov and begin the proofing flow, first creating your password, then by adding your 2FA method(s).
4.  You will be directed back to VA.gov with an unverified account. Click the link to return back to Login.gov to complete your account verification.
5. Agree to the Login.gov terms of use for verification, then select if you want to use a mobile device or your current computer to submit verification photos. Either method works.
6. Login.gov will request front and rear photos of an accepted photo ID, but in the lower environments it will accept anything that is card-shaped and not perform actual validations on the information in the photo.
7. After you submit your identity card photos Login.gov will accept them and request your social security number. Start your fake SSN with either `900-` or `666-` and then make up the next 6 digits.
8. Next you will have to verify your user's personal information. First & last names, DOB, and your submitted photo ID number are all preset and cannot be changed, while address and SSN are also preset but updatable if you wish.
9. After accepting or updating your personal information Login.gov will ask to verify a phone number. If you chose to use your phone for the identity document photo submissions earlier it will be set to the same number, if not you can enter in a number. If you choose this method Login.gov will send you a one-time code and have you enter it - real verification.
	  - In order to avoid using your phone you can also choose `Verify your address by mail instead`. Login.gov will present the mailing address you confirmed or updated in the personal information step and allow you to request a letter in the mail.
	  - After requesting the letter you will be sent back to VA.gov & will have to first sign-in (automatically) with Login.gov, then begin the verification with Login.gov again. Upon returning to Login.gov for the verification you will immediately land on a verification code page with the code from your "letter" pre-filled and ready to submit.
10. After verifying with Login.gov via phone or faked letter you will be given a personal key that allows you to recover the account if the password is lost; save this key along with the rest of the credential information. You will then be sent back to VA.gov signed into your new IAL2-verified account.

### Custom Login.gov Account Attributes
In order to bypass the standard `Fakey McFakerson` test user attributes a YAML file can be updloaded during the document verification portion of the Login.gov account verification process in place of photos. In the lower environments the attributes in the YAML file will be processed and set as user attributes in place of the standard ones.

Only the YAML file in the back upload box is used on submission. For that reason, it’s good practice to upload the same yaml file in all of the upload boxes o avoid confusion when testing.

```yml
# sample proofing YAML file
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

After submitting your YAML file you should see the relevant user attributes populated correctly throughout the rest of the Login.gov verification process and when you return to VA.gov as an IAL2 verified user.
