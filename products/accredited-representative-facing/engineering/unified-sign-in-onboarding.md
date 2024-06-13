# Onboarding

## 🏄 New application using the Unified Sign in Page questionnaire

1. **What is the name of the application?**

   > Accredited Representative Portal (ARP)

2. **What URL endpoints should redirect to your service?**

   > For all environments, we'll attempt to leverage as much of the existing auth callback.
   >
   > Localhost: TBD
   >
   > Dev: likely not needed
   >
   > Staging: TBD
   >
   > Production: TBD
   >
   > 2a. Requires additional query parameters: Not at the moment, but this may be necessary
   >
   > 2b. Are the URL endpoints dynamic: Not at the moment, but this may be necessary

3. **Which authentication broker are you planning on using?**

   > Sign-in Service (OAuth 2.0)

4. **What type of OAuth integration?** (only applies to OAuth implementation)

   > PKCE

5. **Which service providers are allowed to Sign up?**

   > Login.gov
   >
   > ID.me

6. **Which service providers can be used to Sign in?**

   > Login.gov
   >
   > ID.me

7. **Does your service have user type requirements?**

   > Currently: any user.
   > Eventually: only accredited representatives. Note: this user type does not currently exist in vets-api.

8. **Is the external application a mobile app?**
   > Web application
