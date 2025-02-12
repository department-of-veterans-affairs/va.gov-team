# Sign-in and verification alerts
DRAFT IN PROGRESS, COORDINATE WITH CAIA TEAM BEFORE IMPLEMENTING

## Sections

- [Notes on implementation](#notes-on-implementation)
- [Sign-in alerts](#sign-in-alerts)
- [Verification alerts](#verification-alerts)
- [Additional variations not ready to implement](#additional-variations-not-ready-to-implement)

## Notes on implementation
- All product teams who are creating or updating sign-in and verification alerts for their products must work with the Office of the Chief Technology Officer's content/information architecture/accessibility team (CAIA) for a content review and identity team for a technical review to confirm the alerts work correctly for the specific product. 
- If your form or tool has /my-health in its URL, work with the identity and cartography teams to set up the correct sign-in flow. You may need an additional registration step on the MHV national portal, and you may need to place your form or tool behind a /my-health route guard.
- **Follow these rules for sign-in alert placement:**
     - For most online tools, the sign-in alert goes on the static unauthenticated page that the CAIA team manages in Drupal. Here's an example of a [static page with a sign-in alert](https://www.va.gov/health-care/secure-messaging/). Work with CAIA to add the alert to this page. 
     - For most online forms, the sign-in alert goes on the form intro page that the product team creates and manages. Here's example of a [form intro page with a sign-in alert](https://www.va.gov/health-care/apply-for-health-care-form-10-10ez/introduction).
       - **Exception:** If your form or tool is only accessible after signing in (meaning there is no unauthenticated state of the intro page), the sign-in alert must appear on the static unauthenticated page that serves as the entry point. Currently, this only applies to 2 forms in the /my-health section: the 1010EZR and the order form for CPAP and hearing aid supplies.
- **Follow these rules for the [CTA] variable in these alerts:**
     - Forms should use [to fill out this form] as the [CTA]. Don't vary the CTA for forms.
     - Tools should use a brief plain language phrase as the [CTA]. For example, [to refill prescriptions] or [to check your claim status]. Work with the CAIA team to decide on a CTA for your tool.

## Sign-in alerts
**Design note:** For all sign-in alerts, use the blue info alert style with a lock icon.

### Standard sign-in alert (for all tools and forms that require sign-in with a verified account)

#### Sign in with a verified account
You’ll need to sign in with an identity-verified account through one of our account providers. Identity verification helps us protect all Veterans’ information and prevent scammers from stealing your benefits.

**Don't yet have a verified account?** Create a **Login.gov** or **ID.me** account now. Then come back here and sign in. We’ll help you verify your identity for your account.

**Not sure if your account is verified?** Sign in here. We’ll tell you if you need to verify. 

{Button} Sign in or create an account

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)

### Variation for forms with optional sign-in that support prefill

#### Sign in with a verified account

Here’s how signing in with an identity-verified account helps you:
- We can fill in some of your information for you to save you time.
- You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.

After you sign in, we’ll tell you if you need to verify your identity for your account. 

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in

## Verification alerts
**Design note:** For all verification alerts, use the yellow warning alert style with a lock icon.

### Verify alert for LOA1/IAL1 Login.gov and ID.me accounts

#### Verify your identity
We need you to verify your identity for your **{Account type}** account. This step helps us protect all Veterans’ information and prevent scammers from stealing your benefits. 

This one-time process often takes about 10 minutes. You'll need to provide certain personal information and identification.

[action link] Verify your identity with {Account provider}

[text link] [Learn more about verifying your identity](https://www.va.gov/resources/verifying-your-identity-on-vagov/)

### Verify alert for LOA1/IAL1 My HealtheVet accounts 

#### You need to sign in with a different account 

We need you to sign in with an identity-verified account. This step helps us protect all Veterans’ information and prevent scammers from stealing your benefits. You have 2 options: a verified **Login.gov** or a verified **ID.me** account.

**Follow these steps:**
1. Sign out of VA.gov.
2. If you already have a **Login.gov** or **ID.me** account, sign back in with that account. If you don't have one of these accounts, select **Create an account** on the VA.gov homepage and create one now. Then sign back in with that account.
3. If you still need to verify your identity for your account, we'll help you verify.
  
[button] Sign out

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)


## Additional variations NOT ready to implement

### DRAFT Variation for forms with optional sign-in that support prefill and create an intent to file (ITF) DRAFT

#### Sign in with a verified account to save a potential start date for your benefits

Here’s how signing in with an identity-verified account helps you:
- We can save today's date as a potential start date for your benefits. 
- We can fill in some of your information for you to save you time.
- You can save your work in progress. You’ll have {time limit} from when you start or make changes to submit your form.

After you sign in, we’ll tell you if you need to verify your identity for your account. If you don't have an account, you can create a free **Login.gov** or **ID.me** account now.

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in

### Variation for forms and tools that require sign-in and accept unverified accounts (need to confirm this scenario)

#### Sign in to [CTA]
You’ll need to sign in with an account through one of our account providers to [CTA]. If you don't have an account, you can create a free **Login.gov** or **ID.me** account now.

{Button} Sign in or create an account 

[text link] [Learn about creating an account](https://www.va.gov/resources/creating-an-account-for-vagov/)

### Variation for forms with optional sign-in that accept unverified accounts and don't support prefill (need to confirm this scenario)

#### Sign in to save your work in progress

You can sign in with an account through one of our account providers. You’ll then have {time limit} from when you start or make changes to submit your form. If you don't have an account, you can create a free **Login.gov** or **ID.me** account now.

**Note:** You can sign in after you start filling out your form. But you'll lose any information you already filled in.

{ Button } Sign in or create an account

[text link] Start your form without signing in
