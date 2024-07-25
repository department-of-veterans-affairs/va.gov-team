# Sign-in and verification alerts
DRAFT IN PROGRESS, COORDINATE WITH CAIA TEAM BEFORE IMPLEMENTING

**Notes:** 
- All product teams who are creating or updating sign-in and verification alerts for their products must work with CAIA for content and with the identity team for a technical review to confirm these alerts work correctly.
- If your form or tool has /my-health in its URL, work with the identity and cartography teams to set up the correct sign-in flow. You may need an additional registration step on MHV national portal, and you may need to place your form or tool behind a /my-health route guard.
- **Follow these rules for sign-in alert placement:**
     - For most online tools, the sign-in alert goes on the static unauthenticated page that the CAIA team manages in Drupal. Here's an example of a [static page with a sign-in alert](https://www.va.gov/health-care/secure-messaging/). Work with CAIA to add the alert to this page. 
     - For most online forms, the sign-in alert goes on the form intro page that the product team creates and manages. Here's example of a [form intro page with a sign-in alert](https://www.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction).
       - **Exception:** If your form or tool is only accessible after signing in (meaning there is no unauthenticated state of the intro page), the sign-in alert must appear on the static unauthenticated page that serves as the entry point. Currently, this only applies to 2 forms in the /my-health section: 1010EZR and order form for CPAP and hearing aid supplies.
- **Follow these rules for the [CTA] variable in these alerts:**
     - Forms should use [to fill out this form] as the [CTA]. Don't vary the CTA for forms.
     - Tools should use a brief plain language phrase as the [CTA]. For example, [to refill prescriptions] or [to check your claim status]. Work with Sitewide CAIA team to decide on a CTA for your tool.

## Sign-in alerts — ready to implement

### Standard sign-in alert (for all tools and forms that require sign-in with a verified account)

#### Sign in with a verified account to [CTA]
You’ll need to sign in with a verified account through one of our account providers. Identity verification helps us protect your information and prevent fraud and identity theft.

**Don't yet have a verified account?** Create a Login.gov or ID.me account now. Then come back here and sign in. We’ll help you verify. 

**Not sure if your account is verified?** Sign in here. We’ll tell you if you need to verify. 

{Button} Sign in or create an account

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)

### Variation for forms with optional sign-in that support prefill

#### Sign in with a verified account to save your work in progress

Here’s how signing in with a verified account helps you:
- We can fill in some of your information for you to save you time.
- You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.

After you sign in, we’ll tell you if you need to verify your identity. 

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in

## Verification alerts — ready to implement

### Verify alert for LOA1/IAL1 Login.gov and ID.me accounts

#### Verify your identity to [CTA]
We need you to verify your identity for your {Account type} account. This step helps us keep your information safe and prevent fraud and identity theft.

This one-time process often takes about 10 minutes. You'll need to provide certain personal information and identification.

[action link] Verify your identity with {Account provider}

### Verify alert for LOA1/IAL1 My HealtheVet accounts 

#### You need to sign in with a different account to [CTA] 

To protect your information and prevent fraud and identity theft, we need you to sign in with a verified account. You have 2 options: a verified **Login.gov** or a verified **ID.me** account.

**If you already have a Login.gov or ID.me account,** sign out of VA.gov. Then sign back in using that account. We’ll tell you if you need to verify your identity.

**If you want to create a Login.gov or ID.me account,** follow these steps:
- Sign out of VA.gov.
- On the VA.gov homepage, select **Create an account**. Create a **Login.gov** or **ID.me** account.
- Come back to VA.gov and sign in with your **Login.gov** or **ID.me** account. We’ll help you verify your identity.

**Not sure if you already have a Login.gov or ID.me account?**

You may have one if you’ve ever signed in to a federal website to manage your benefits—like Social Security or disability benefits. Or if you signed in to VA.gov with a **My HealtheVet** or **DS Logon** account, we may have started creating an **ID.me** account for you.

To check, sign out of VA.gov. Then try to create a new account with the email address you think the account is attached to. If you already have one, the sign-in service provider will tell you. You can then try to reset your password.
  
[button] Sign in or create an account

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)


## Additional variations NOT ready to implement

### DRAFT Variation for forms with optional sign-in that support prefill and create an intent to file (ITF) DRAFT

#### Sign in with a verified account to save a potential start date for your benefits

Here’s how signing in with a verified account helps you:
- We can save today's date as a potential start date for your benefits. 
- We can fill in some of your information for you to save you time.
- You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.

After you sign in, we’ll tell you if you need to verify your identity. 

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in
