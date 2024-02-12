# Onboarding

## 🏄 New application using the Unified Sign in Page questionnaire

1. **What is the name of the application?**

   > Accredited Representative Portal (ARP)

2. **What URL endpoints should redirect to your service?**

   > Localhost: localhost:3000/representative/
   >
   > Dev: dev.va.gov/representative/
   >
   > Staging: staging.va.gov/representative/
   >
   > Production: www.va.gov/representative/
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

   > Only accredited representatives, namely [Veteran Service Representatives (of the officer type)](https://github.com/department-of-veterans-affairs/vets-api/blob/46447adcebbc28b7a0ec5f211c715927a165251b/modules/veteran/app/models/veteran/service/representative.rb#L8) and [Veteran Service Organizations](https://github.com/department-of-veterans-affairs/vets-api/blob/46447adcebbc28b7a0ec5f211c715927a165251b/modules/veteran/app/models/veteran/service/organization.rb)

8. **Is the external application a mobile app?**

  > Web application
