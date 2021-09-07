# VA Mobile Comparative Analysis: Login and Authentication
Aug 3, 2021

## Background and goals
The VA Mobile app launched using the VA IAM team’s SSOe OAuth to authenticate users. However, this solution is not optimized to mobile, and lacks a native UX for authentication. We conducted a comparative analysis to better understand the mobile identity landscape, and glean best practices for how to improve or evaluate an alternative mobile authentication service. The following analysis includes only the most salient iOS apps that we examined, across the health, finance, and e-commerce spaces.

Related documentation:

## Biggest Takeaways
* Do better with accessibility. Many apps failed even the most basic accessibility criteria.
* Make it easy for users to create or enter credentials. This includes things like dynamic form validation, showing passwords, and allowing for either email or username (or phone number).
* Offer as much content as possible without authentication.
* Offer biometrics login options.
* Give multiple options for authentication assurance methods. Examples include: security key, authentication applications, phone (SMS or voicemail) or backup codes.
* To set up a new account and identity proof, give users an expectation of the steps involved, what information is needed and why, and how long it typically takes to complete the process.

## Analysis Summary
### Two-factor authentication (2FA)
#### My Chart
My Chart is a medical app that lets patients access their medical records and providers. 

<img src="https://user-images.githubusercontent.com/1401704/132398320-7eaddfab-852c-40b8-afc1-a1b13b1bbc65.png" alt="Screenshot of home screen of My Chart app" width="250"> 

#### Starbucks
The Starbucks app lets users place orders at their retail stores and track rewards.

<img src="https://user-images.githubusercontent.com/1401704/132398468-1b72cc6d-e2f6-43da-b761-d8cefb427033.jpg" alt="Screenshot of home screen of Starbucks app" width="250">

#### What we learned
* 2FA worked similarly in both apps.
* Both apps offered biometrics login as well as the ability to set a passcode lock as another method to access the app.
* My Chart had a fair number of accessibility concerns and UX issues with form fields. 
* My Chart sent 2FA codes to email which required leaving the app and opening email as the code was not visible in the email notification. 
* Starbucks sent codes via SMS text message and it was accessible in the notification, and using native prompts (iOS offers to paste code directly into form fields) without having to leave the Starbucks app.
* Both apps used contextual numeric keyboards for code inputs.
* Starbucks gave the ability to log in with either username or email. 
* Starbucks gave haptic feedback on form errors. 
* There was no content available in My Chart without logging into the app. Starbucks had a lot of the app available without logging in.
* Neither app allowed single sign-on options such as using Google or Facebook credentials.
* Starbucks supported dynamic type text resizing. My Chart did not.

#### Takeaways
* Allow biometrics and offer passcode locks as an alternative to accessing the app.
* Make sure to have good accessibility for form fields.
* Use SMS text messaging instead of email to send 2FA codes.
* Use contextual mobile keyboards for specific inputs (e.g. numeric keyboard for codes).
* Give users multiple options for usernames (email, telephone number).
* If content isn’t necessary for login, allow users to access it.

### Native Login
#### Merrill Edge
The Merrill Edge app gives users access to their investment accounts.

<img src="https://user-images.githubusercontent.com/1401704/132398667-74f4caa7-39be-4009-a92a-296d7f0dc473.png" alt="Screenshot of home screen of Merrill Edge app" width="250">

#### Aetna
The Aetna app allows users to access their health insurance benefits.

<img src="https://user-images.githubusercontent.com/1401704/132398755-a79e772d-457b-4d08-a986-0393d98f1bb0.jpg" alt="Screenshot of home screen of Aetna app" width="250">

#### What we learned
* Neither app allowed for login via email instead of username.
* Merril Edge did not let us show our password. The Aetna app did allow us to show our password.
* Aetna form errors took us to another screen instead of validating inline.
* Aetna had a fair number of accessibility concerns and UX issues with its form. 
* Merrill Edge gave the choice of getting code from either SMS text or voice call. The SMS text message code was accessible in the notification, and also using native prompts (iOS offers to paste code directly into form fields) without having to leave the Merrill Edge app.
* Merrill Edge indicated in both the SMS text message notification and in the form how long the code would be valid for.
* After logging in to Merrill Edge it was necessary to update our profile which was a lengthy form and process. We were barred from using the app until it was completed.
* We were unable to complete login to the Aetna app and were giving a non-helpful error code message and no indication on how to get further help other than trying again.
* Neither app allowed single sign-on options such as using Google or Facebook credentials.
* Neither app supported dynamic type text resizing.

#### Takeaways
* Give users multiple options for usernames (email, telephone number)
* Allow users to get authentication codes from SMS text or voice calls.
* Give helpful feedback, such as how long authentication codes are good for.
* Give user friendly error messages and other paths to get help other than trying again later.
* Form validation should be done inline on the form.
* Reduce barriers from using the app once logged in, like forcing users to update profiles.

### Web Login

#### Target
The Target app lets users shop at Target's online or retail stores.

<img src="https://user-images.githubusercontent.com/1401704/132398948-432bcb97-ee06-404e-b21e-c6a62fbaddfd.png" alt="Screenshot of home screen of Target app" width="250">

#### Google Drive
Google Drive gives users access to their file storage account.

<img src="https://user-images.githubusercontent.com/1401704/132398969-a6471f3d-dd61-474b-a7ad-b7887d8c930e.jpg" alt="Screenshot of home screen of Google Drive app" width="250">

#### What we learned
* Target app had a significant portion of the app available without logging in.
* Both apps gave an alert that the app was going to use a website to broker sign in.
* Both apps had the ability to show passwords and paste the password into the form field.
* Both apps allowed login with email or phone number.
* Target gave dynamic inline error codes specific to formatting (eg. non-valid email address or phone number).
* Target gave both success and error validation for form fields.
* Target specifically told us that our password was incorrect instead of just saying our username and password didn’t match.
* When accessing web pages from Target.com from inside the app we were not also logged into the Target.com website (e.g. no warm handoff).
* Google Drive used captcha which was hard to use.
* Google Drive allowed several methods to verify login - Gmail app, SMS text message, or customer support.
* Google Drive sent codes via SMS text message and it was accessible in the notification, and using native prompts (iOS offers to paste code directly into form fields) without having to leave the Google Drive app. There was no indication on how long the code would be good for.
* Both apps supported dynamic type text resizing.

#### Takeaways
* Alert users if you are using another party (such as a website) to broker login.
* Avoid using captchas.
* Allow users to show password and paste from another application.
* Use dynamic validation for form fields with specifics about why validation failed.
* Give both success and error validation inline for form fields.
* Give users more than one option for 2FA validation.
* If content isn’t necessary for login, allow users to access it.

### Single Sign On
#### DoorDash
The DoorDash app allows users to browse and order items for local delivery.

<img src="https://user-images.githubusercontent.com/1401704/132399014-fab5b0df-58e8-49ed-9cf5-b118e057cc61.png" alt="Screenshot of home screen of Door Dash app" width="250">

#### Airbnb
The Airbnb app lets users browse, book, and manage vacation room or home rentals.

<img src="https://user-images.githubusercontent.com/1401704/132399043-c03b6d35-80da-4abd-9712-bdf628da5ea1.png" alt="Screenshot of home screen of Airbnb app" width="250">

#### What we learned
* DoorDash allowed for single sign on using Facebook, Google, and Apple. It seemed preferred as it was at the top of the screen above the sign in form.
* DoorDash allowed email for sign in but not phone number.
* DoorDash had a toggle between “Sign In” and “Sign Up”. They should use different wording as they read very similarly (e.g. Create an account and Log in).
* When first opening the app Airbnb immediately showed login/sign up options.
* Airbnb allowed for sign in with an email or phone number. Phone number was presented first and so it seems to be the preferred method. 
* Airbnb allowed for single sign in with Apple, Google, and Facebook. It was presented below the regular sign in.
* Airbnb combined log in and sign up in one form. If you entered a valid user email address you would get prompted to enter your password. If not, it would prompt you to create an account. 
* Airbnb dynamically validated email format and gave inline error messages.
* Both apps allowed pasting passwords into the password field.
* Airbnb had the ability to show passwords. DoorDash did not have the ability to show the password.
* Airbnb “Continue” button had a loading animation upon form submission.
* DoorDash had a “Skip” action for Sign in/up we assume to access the app without logging in but we got an unhelpful JSON error when tapping. 
* Airbnb had a significant portion of the app available without logging in. It also preserved dot notifications on areas, where if logged in, we would have notifications. (E.g. red dot on Inbox and when tapping asking us to log in to see messages).
* Airbnb supported dynamic type text resizing. DoorDash did not.

#### Takeaway
* Offer single sign on as an alternative to creating an account.
* Use different terms for “sign in” and “sign up” (e.g. Create account and Log in)
* Allow users to show password and paste from another application.
* Use dynamic validation for form fields with specifics about why validation failed.
* Give user friendly error messages.
* Consider giving some persistent states that would keep indications of notifications for logged out users.

### Identity Proofing
#### USPS
The USPS app lets users access tools and services from the United States Post Office.

<img src="https://user-images.githubusercontent.com/1401704/132399095-42716f9b-42e7-4289-8763-3181f74accf1.jpg" alt="Screenshot of home screen of USPS app" width="250">

#### Login.gov (developer sandbox website)
Login.gov aims to provide simple and secure login and identity verification for participating government websites.

<img src="https://user-images.githubusercontent.com/1401704/132399155-3233752a-cd66-4948-a38e-050bdd58794a.jpg" alt="Screenshot of home screen of Login.gov mobile website" width="250">

#### What we learned
* Could not finish identity verification on USPS due to eligibility issues with the mailing address. Did go through the entire process before the app indicated that the mailing address was ineligible to use the service.
* USPS seemed to just be an embed of their website so there were some issues with layout and content that could have been better optimized for mobile viewing (e.g. a lot of scrolling).
* Login.gov supported multiple languages (English, Spanish and French).
* Both used multi-step forms to sign up.
* Login.gov gave an overview of the process and what we would need before starting. 
* USPS required username and did not allow logging in via email address. Login.gov used email as username. 
* USPS used contextual numeric keyboards on some numeric form fields but not others.
* Login.gov consistently used contextual numeric keyboards when applicable. 
* Login.gov had steppers or a process list (aka subway map) to show the user where they were in the process. It overflowed horizontally off the screen and it wasn’t obvious you could horizontally scroll through it.
* Login.gov did not validate form fields inline and validated most fields only on form submit. When promoted for SSN it validated inline and gave hints on the format. Form validation errors were specific to the input and not generalized.
* Login.gov gave info on password requirements, password safety tips, and a password strength meter when creating a password.
* USPS used SMS text to verify login. 
* Login.gov allowed code sent via text or phone call. For multi-factor they allowed multiple authentication methods (security key, authentication applications, phone or backup codes)
* For submitting photos of identification login.gov allowed taking photos or selecting files. Camera gave overlaid hints about how to take a better photo (e.g. prompts to move the camera closer).
* Login.gov allowed a physical letter option to be mailed to confirm verified address, gave information on how that would be delivered, and how long it might take. 
* Login.gov had us save a personal key at the end and explained why this might be needed, but it could be confusing to users on why it's different from a password?
* Login.gov gave options on every screen to choose to cancel or start over.
* USPS did not support dynamic type text resizing. Login.gov was web-based so this did not apply.

#### Takeaway
* Allow for multiple languages.
* Give users an expectation of how long it typically takes to complete the process, and what they will need to complete it.
* Do any eligibility tests at the start of the process so users don’t go through the process to find out they are not eligible.
* Give users the option to cancel or start over.
* Use dynamic validation for form fields with specifics about why validation failed.
* Give both success and error validation inline for form fields.
* Explain password requirements, password safety tips, and a password strength meter when creating a password.
* Allow for multiple authentication methods beyond email or SMS text.
* Multi-step forms:
    * Split long forms into steps to reduce cognitive load and keep the user focused. This can also help users process, understand and remember information. 
    * When designing multi-step forms, inform users of their progress.
    * Give options on every screen to choose to cancel or start over.
