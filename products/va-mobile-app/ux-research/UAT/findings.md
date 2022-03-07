


# VA: Health and Benefits and Login.gov UAT

Office of the CTO - Digital Experience (OCTO-DE), VA: Health and Benefits (Mobile App)

Date: 03/07/22

Melissa Lefevre


### OCTO-DE Objectives

The following are the [OCTO-DE objectives](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme) that this research supports.



1. Increase the usage and throughput of VA services
2. Decrease the time Veterans spend waiting for an outcome
3. Increase the quality and reliability of VA services


### OCTO-DE Goals

The following are the [OCTO-DE ](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/strategy#readme)goals that this research supports.



1. Veterans can manage their health services online
2. Logged-in users can easily track applications, claims, or appeals online
3. Logged-in users have a personalized experience, with relevant and time-saving features


### Veteran Journey



* Primary point in the Veteran journey: “Taking care of myself”
* Secondary points: “Reinventing myself, “Putting down roots,” and “Retiring”


## Objective


**We need to verify, in pre-prod and prod, that:**
The introspect service is creating sessions and user data end points are sending the correct data, and that the IAM SAML requests to login.gov are working correctly. We will test this using the following scenarios:


1. Users with an existing LOA3 login.gov account should be able to successfully log in to our app and see their data using the login.gov credential
2. Users who do not have an existing login.gov account and who are asked to register a new account for login.gov via the app should be:
    1. Directed to the verify stage (like id.me already does). 
    2. Able to successfully log in via login.gov on the app after being verified and see their data
3. Users that created an LOA1/IAL1 login.gov account on the web and then try to log in on the app should be:
    3. Sent through the verify step (again, like id.me) 
    4. Able to successfully log in via login.gov on the app after being verified and see their data

**Who can do this testing and how?**



* In pre-prod, the mobile app team will be conducting testing internally
    * Dev Unit Testing
    * QA Validation
    * QA Regression (testing basic functionality of features)
* In total we will recruit 8 participants (between known contacts and VA Veteran recruits.



### Method

* We conducted moderated sessions where participants joined on their phones and shared their screens.

### Hypothesis

Veterans will be able to create an account using login.gov and confirm that their data is populating as expected using the new login. 

## Results

1. We ran 9 sessions with Veterans who work at the VA or Ad Hoc. 
2. Four Participants never made it into the app via login.gov due to a variety of barriers when creating a login.gov account. 
3. Once participants logged in, we had them navigate to each of the screens listed below. Once there, all 5 participantas who were able to login saw their data as expected. 

- Secure Messaging
- Appointments
- Profile
- Claims and Appeals
- Letters
- Disability rating
- Vaccine
- Direct Deposit (can edit)

### Next Steps

No further steps are needed from the VA Mobile App team since all participants who logged in were able to see their data as they expected. However, since participants faced wide ranging issues when signing up for login.gov, we are sending a detailed list to hand over to login.gov. 

### Appendix
[Notetaking sheet](https://docs.google.com/spreadsheets/d/1h-Y1KKhPS1Yguu_tAizmkWEPU2vX1K44m0xUII7L2Og/edit?usp=sharing)
