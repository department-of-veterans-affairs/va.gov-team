# Sign-in and verification alerts
**Notes:** 
- Forms should use [to fill out this form] as the [CTA]. Don't vary the CTA for forms.
- Tools should use a brief plain language phrase as the [CTA]. For example, [to refill prescriptions] or [to check your claim status]. Work with Sitewide CAIA team to decide on a CTA for your tool.
- If your form or tool has /my-health in its URL:
     - It may require a registration step on MHV national portal. Currently, only the secure messaging, medical records, and medications tools require MHV registration.
     - It may need to live behind a /my-health route guard with a centralized sign-in flow.
     - Work with the identity and cartography teams to set up the correct sign-in flow. 
- If a form is only accessible after signing in (meaning there is no unauthenticated state of the form intro page), the sign-in alert must appear on the static unauthenticated page that serves as the entry point into the form. Currently, this only applies to 2 forms in the /my-health section: 1010EZR and order form for CPAP and hearing aid supplies.

## Sign-in flow for all forms and tools that don't require MHV registration

### Sign-in alert

#### Sign in with a verified account to [CTA]
You’ll need to sign in with a verified account through one of our account providers. Identity verification helps us protect your information and prevent fraud and identity theft.

**Don't yet have a verified account?** Create a Login.gov or ID.me account now. Then come back here and sign in. We’ll help you verify. 

**Not sure if your account is verified?** Sign in here. We’ll tell you if you need to verify. 

{Button} Sign in or create an account

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)

### Sign-in alert variation for forms that don't require sign-in and support prefill

#### Sign in with a verified account to save your work in progress

Here’s how signing in with a verified account helps you:
- We can fill in some of your information for you to save you time.
- You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.

After you sign in, we’ll tell you if you need to verify your identity. 

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in

### DRAFT Sign-in alert variation for forms that don't require sign-in and create an intent to file (ITF) DRAFT

#### Sign in with a verified account to save a potential start date for your benefits

Here’s how signing in with a verified account helps you:
- We can save today's date as a potential start date for your benefits. 
- We can fill in some of your information for you to save you time.
- You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.

After you sign in, we’ll tell you if you need to verify your identity. 

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in


### Verify alert for LOA1/IAL1 Login.gov and ID.me accounts

#### Verify your identity to [CTA] 
We need you to verify your identity for your {Account type} account. This step helps us keep your information safe and prevent fraud and identity theft.

This one-time process often takes about 10 minutes. You'll need to provide certain personal information and identification.

[action link] Verify your identity with {Account provider}

### Verify alert for LOA1/IAL1 My HealtheVet accounts

#### Create a verified Login.gov or ID.me account to [CTA] 
We need you to use a verified **Login.gov** or **ID.me** account to [access your personal information through this tool **or** to fill out this form]. A verified account helps us keep your information safe and prevent fraud and identity theft.

**If you want to use ID.me, follow these steps:**
1.	Sign in again with your new **ID.me** account. When you signed in with your **My HealtheVet** basic account, we created an **ID.me** account for you. You can sign in with the email address you provided during this process. You may need to reset your **ID.me** password before you can sign in with your new account.
2.	After you sign in, we'll help you verify your identity for your **ID.me** account.

**If you want to use Login.gov, follow these steps:**
1.	Create a new **Login.gov** account.
2.	Come back and sign in here with your **Login.gov** account. We’ll help you verify your identity for your account.
  
[button] Sign in or create an account

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)

## Sign-in flows for tools that require MHV registration
