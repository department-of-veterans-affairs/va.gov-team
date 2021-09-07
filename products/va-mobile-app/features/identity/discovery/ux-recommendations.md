# Mobile Auth and Identity - UX Recommendations
## Part I: Authentication Recommendations
### Logged out view
* Make any features that don’t require logging in available to users.

### Logging in
* Allow biometrics (fingerprint, voice, or facial recognition).
* Remember users when they log back in so they don't have to retype in all their credentials (e.g. username).

### Creating an account
* Briefly explain the benefits of registration.
* Explain why you are asking for information, especially sensitive information.
* Ask only for the minimum amount of information. Additional information could be added by editing a user’s profile.
* If location info is needed, offer to use native location services.
* Order sign up steps in a logical way.
* Consider splitting a form into a few steps to reduce cognitive load and keep the user focused. This can also help users process, understand and remember information. 
* When designing multi-step forms, always inform users of their progress.
* Eliminate any pop up modals that would distract screen readers.

### Text
* Use differentiated terms for “sign in” and “sign up” (e.g. Create account and Log in).
* 16px/pt minimum font size.
* Allow font resizing.
* Use plain language, typically at a 6th to 8th grade literacy level, and avoid technical jargon. 
* Use active voice and conversational style.
* Use bullets, numbers, and formatting where appropriate to aid readability. Accordions can be used for optional content users may want to skip.

### Labels
* Use sentence case for labels. Avoid all caps.
* Use tops aligned labels and not placeholders for form fields.
* Make labels tappable to increase the chance users can select the correct field.

### Form Fields
* Autofocus on the first field.
* Size fields according to the data size.
* Use specialized or contextual mobile keyboards.
* Use placeholders and masked input (e.g. auto format phone numbers).
* Give help text inline for any field formatting requirements.
* Group related fields together.
* Clearly distinguish optional fields.
* Do not repeat fields (e.g., two password fields, two email fields). Instead, allow people to see passwords (and emails) to check for errors. 
* Design for all field states - default, idle filled in, error, focused, disabled.
* Do not rely on color alone to communicate status.
* Provide voice input as an alternative method of data input.
* Avoid fonts that do not clearly distinguish between easily confusable characters (such as the letter “O” and the number “0”). Especially for passwords and numeric code fields.

### Buttons
* Button text should explain what happens (e.g. Create account vs. Submit).
* Do not rely on color alone to communicate status.
* Disable button after tap to avoid multiple submissions.

### Errors and Validation
* Clearly defined error messages.
* Display errors inline.
* Give validation messages for successful entries.
* Use dynamic validation. Don’t wait until users finish the form; provide feedback as data is being entered. When doing this:
    * Avoid showing inline validation on focus.
    * Don’t validate after each character is typed.
* Don’t make data validation rules too strict.
* Consider using haptic feedback to assist with form validation.

### Usernames
* Allow users to log in with email or phone number. Usernames can be harder to remember.

### Passwords
* Show password requirements when users are choosing a password.
* Display success validation if the created password meets all rules.
* Consider displaying a strength meter that gives feedback on password strength and prompts to create stronger passwords.
* Let users show and hide their passwords.
* Allow paste from other applications for passwords and codes.
* If the user has an invalid password, give inline feedback why it’s invalid (e.g. all passwords must be at least 8 characters).
* Include the ability for users to reset forgotten passwords.
* Reset password form should remember the email/username that was already entered.

### Security
* Give security warnings before locking accounts.
* Avoid using captcha as it can be inaccessible and difficult to use. If necessary make sure to use voice captcha.

### Multi-Factor Log In
* To confirm credentials send users a code in a SMS text message instead of email. It will be easier to type without switching contexts, by reading the notification or using native prompts (iOS offers to paste code directly into form fields).
* Consider using multiple options to confirm credentials for authentication besides only text or email, such as phone call, security key, authentication applications, and backup codes.
* Allow users to re-request sending a security code.

### Terms of Service
* Save a step by notifying users they agree to the terms of service (not requiring their explicit permission).

### Single Sign On
* Consider allowing for single sign on. Stick to 2-3 options to avoid confusion and reduce decision-making. 

### Misc
* Allow easy switching between creating an account or logging in.

## Part II: Enrollment and Identity Proofing Considerations

_Edited from: [https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf)_

Streamline the process required for enrollment to make each step as clear and as easy as possible.

* Sufficient information should be provided to enable users to answer their own enrollment preparation questions without outside assistance.
* Clearly communicate how to get assistance if needed. 
* Clearly explain who is collecting their data and why.

### Pre-Enrollment Preparation 
Give users necessary information about required/necessary information and documentation required and appropriate timeframe. Provide users: 

* Information about the entire process, such as what to expect in each step.
    * Clear explanations of the expected timeframes to allow users to plan accordingly.
* Explanation of the need and benefits for identity proofing to allow users to understand the value proposition. 
* Give information on the allowed and required identity evidence and attributes.

### Enrollment and Identity Proofing Session 

Usability considerations specific to the enrollment session include: 

* Clearly remind users of the typical timeframe to complete the proofing and enrollment phase. 
* Provide a checklist with the allowed and required identity evidence to ensure users have the requisite identity evidence to proceed with the enrollment session. 
* During the enrollment session, there are several requirements to provide users with explicit notice at the time of identity proofing, such as what data will be retained on record by the credential service provider. 
* Avoid using knowledge-based verification (KBV) since it is extremely problematic from a usability perspective. KBV tends to be error-prone and frustrating for users given the limitations of human memory. If KBV is used, address the following usability considerations. 
    * KBV questions should have relevance and context to users for them to be able to answer correctly.
    * Phrase KBV questions clearly, as ambiguity can lead to user errors. 
    * Prior to being asked KBV questions, users must be informed of:  
        * The number of allowed attempts and remaining attempt(s).  
        * The fact that KBV questions will change on subsequent attempts.  
        * During the KBV session, provide timeout inactivity warnings prior to timeout. 
* If an enrollment code is issued: 
    * Notify users in advance that they will receive an enrollment code, when to expect it, the length of time for which the code is valid, and how it will arrive (e.g., physical mail, SMS, landline telephone, email, or physical mailing address). 
    * When an enrollment code is delivered to a user, include instructions on how to use the code, and the length of time for which the code is valid. This is especially important given short validity timeframes. 
    * If issuing a machine-readable optical label, such as a QR Code, provide users with information on how to obtain QR code scanning capabilities (e.g., acceptable QR code applications). 
    * Inform users that they will be required to repeat the enrollment process if enrollment codes expire or are lost before use. 
    * Provide users with alternative options as not all users are able to use this level of technology. 
* If enrollment is successful send users confirmation regarding the successful enrollment and information on next steps. 
* If enrollment is partially complete (due to users not having the complete set of identity evidence, users choosing to stop the process, or session timeouts), communicate to users:  
        * what information will be destroyed;  
        * what, if any, information will be retained for future follow-up sessions; 
        * how long the information will be retained; and 
        * what identity evidence they will need to bring to a future session.  
* If enrollment is unsuccessful, provide users with clear instructions for alternative enrollment session types, for example, offering in-person proofing for users that can not complete remote proofing. 
* Follow general web usability principles. Examples include:
    * Design the user interface to walk users through the enrollment process.
    * Reduce users’ memory load.
    * Make the interface consistent.
    * Clearly label sequential steps.
    * Make the starting point clear.
    * Design to support multiple platforms and device sizes.
    * Make the navigation consistent, easy to find, and easy to follow

### Post-Enrollment 

Post-enrollment refers to the step immediately after enrollment but prior to typical usage of an authenticator. 

Usability considerations for post-enrollment include:

* Minimize the amount of time that users wait for their authenticator to arrive. Shorter wait times will allow users to access information systems and services more quickly.
* Along with the authenticator, give users information relevant to the use and maintenance of the authenticator; this may include instructions for use, especially if there are different requirements for first-time use or initialization, information on authenticator expiration, and what to do if the authenticator is lost or stolen.

## Resources

[VA Mobile Comparative Analysis: Login and Authentication](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/features/identity/discovery/comparative-analysis.md)

[https://uxdesign.cc/designing-a-user-friendly-login-25855ae0cc88](https://uxdesign.cc/designing-a-user-friendly-login-25855ae0cc88)

[https://learnui.design/blog/tips-signup-login-ux.html](https://learnui.design/blog/tips-signup-login-ux.html)

[https://www.nngroup.com/articles/checklist-registration-login/](https://www.nngroup.com/articles/checklist-registration-login/)

[https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/](https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/)

[https://dl.acm.org/doi/10.1145/2639189.2639218](https://dl.acm.org/doi/10.1145/2639189.2639218)

[https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63a.pdf)

[https://www.ux.danielspagnolo.com/casestudy-id-verification.html](https://www.ux.danielspagnolo.com/casestudy-id-verification.html)

[https://www.w3.org/TR/turingtest/](https://www.w3.org/TR/turingtest/)

[https://sheribyrnehaber.com/improving-native-app-accessibility-via-haptics/](https://sheribyrnehaber.com/improving-native-app-accessibility-via-haptics/)

[https://kantarainitiative.org/trust-registry/trust-status-list/](https://kantarainitiative.org/trust-registry/trust-status-list/)

[https://www.gov.uk/government/collections/identity-proofing-and-authentication](https://www.gov.uk/government/collections/identity-proofing-and-authentication)
