# FIDO & FIDO2 and Passkeys

- Date: 11/29/2023
- Joshua Matulonis - josh.matulonis@oddball.io
- [Associated Mural Board](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697651927978/cca6de94390654cb099d0d394d2863317f9ad1a2?sender=u4dc1c26b5a09e4d460e45806)
- [Associated Demo Slideshow](https://github.com/department-of-veterans-affairs/va.gov-team/files/15012588/Sprint.Demo.-.FIDO.for.Authentication.1-8-2024.pdf)

**Jump to:**


- [Introduction](#Introduction)
- [Passkeys](#Passkeys)
- [FIDO](#FIDO)
- [Government Use of FIDO](#Government_Use_of_FIDO)
- [Barriers to Adoption & Research Recommendations](#Barriers_to_FIDO/Passkey_Adoption)
- [Appendix](#appendix)



# Introduction
The adoption of passwordless methods for authentication is growing.

Gartner projects that multiprotocol “mobile MFA” apps will become mainstream by the end of 2024, facilitating the transition to FIDO2 as the preferred approach and enabling passwordless MFA.

Text-based passwords have long been the dominant method for authenticating users to online services. However, passwords are inherently weak and vulnerable to a variety of attacks, such as phishing, credential stuffing, and social engineering. As a result, there is a growing need for more secure and user-friendly authentication methods. Also, the number of accounts that users have to manage is frustrating as passwords are frequently forgotten and account access is lost.

The FIDO (Fast Identity Online) Alliance has created solutions for overcoming the limitations of passwords. FIDO can be used in 1FA and/or MFA to replace passwords with stronger and more convenient authentication methods, such as biometric authentication (e.g., fingerprint or facial recognition) or security keys. This can help to reduce the risk of account takeovers, as biometrics and security keys are more difficult to phish or steal than passwords. FIDO2 is a new open web standard that offers a unique approach to passwordless authentication. It provides a standardized way for websites to make use of hardware authentication devices. FIDO2 security keys are small, portable devices that can be used to authenticate users to websites and online services. They are more secure than passwords because they cannot be phished, replayed, or stolen.

 FIDO2 also offers a number of other benefits over passwords, including: 
 
  - Improved usability: Security keys are easy to use and do not require users to remember or type complex passwords.
  - Consistent user experience: FIDO2 is supported by virtually all browsers and has native implementations on Android and Windows.
  - Support for various authenticator devices: FIDO2 supports a wide range of authenticator devices, including security keys, Trusted Platform Modules, Android keystore, and Apple TouchID.


# Passkeys
- Passkeys refer only to WebAuthn/FIDO credentials, and not to the many other keys and protocols, such as PIV, OTP, or OpenPGP Card, in the YubiKey 5 Series.
- Any passwordless FIDO credential is a passkey. 
- Passkeys are a password replacement that provide faster, easier, and more secure sign-ins to websites and apps across a user’s devices. 
- Passkeys are resistant to phishing and are designed to not share secrets.
- Simplify account registration for apps and websites, are easy to use, work across all of a user’s devices, and other devices within physical proximity.
- From a technical standpoint, passkeys are FIDO credentials that are discoverable by browsers or housed within native applications or security keys for passwordless authentication. 
- Passkeys replace passwords with cryptographic key pairs for phishing-resistant sign-in security and an improved user experience. The cryptographic keys are used from end-user devices (computers, phones, or security keys) for user authentication.
- Passkeys that are managed by phone or OS's are automatically synced between the user’s devices via a cloud service, which also stores an encrypted copy of the FIDO credential. 
  - Single-device passkeys- Designed to be available only from a single device from which they cannot be copied. For example, a physical security key could contain multiple single-device passkeys.
  - Synced passkeys- Passkeys that are synced between user’s devices via a cloud service.
  - Device-bound passkeys- Never leave a single device (including those on UAF apps).

## Passkey Info
1. Discoverable - The credential contains information about the user (e.g. a user id) and, therefore, enables an authentication flow that does not require entering a username (or any other information). The user can just click on the “Sign in with a passkey” button and present a passkey to sign in.

2. WebAuthn - Enables websites to create and use WebAuthn credentials. The WebAuthn API gives websites access to built-in client authenticator technology of the browsers and / or operating systems (e.g. Windows Hello) as well as physical security keys.

3. Credentials - Cryptographic private keys (i.e. the actual secrets that make passkeys so secure). Each private key has a matching public key that resides on the server and will be used to check signatures created with the private key.    
    - Both keys together are called a key pair. Each passkey is unique and bound to a username and a website or app, meaning a user will have at least as many passkeys as they have accounts, likely even more because there can be multiple passkeys per account (e.g. one passkey on an iPhone and one on a Windows PC, both for the same website and user).




### Creating a Passkey
Passkey creation can happen when a new user registers for an account, or when an authenticated user desires to create one for their existing account. 

Passkey creation is triggered on the client (e.g. ”Create a passkey” button), initiating a three-step sequence:

1. The client (a web app running in the browser or a native app) requests a random challenge from the server.
2. The client then calls the WebAuthn API with credentials.create(challenge), handing over the challenge, which results in a key pair – a private & a public key – being created on the device (usually a phone or computer, called “Authenticator” in the WebAuthn context). 
    - The private key (i.e. the passkey) is used to sign the challenge and stored on the user’s device inside secure hardware (TPM or secure enclave). 
    - The matching public key, a credential ID, and the signed challenge are returned by the function. 
    - The user may get prompted for verification with a biometric or a PIN during this step.
3. To finalize passkey registration, the client now sends the public key, the credential ID, and the signed challenge back to the server. 
    - The server associates the public key and the credential ID with the user for future authentication flows and checks the validity of the operation by verifying the signed challenge with the public key.

### Authenticating with a Passkey
 - A passkey does not leave the user’s device to sign in. 

 - The passkey is used locally to create a unique cryptographic signature that proves to the server that it has been created with the passkey. 

The user on the client (”Sign in with a passkey” button) sequence for passkey authentication:

1. The client requests a random challenge from the server.
2. The client calls the WebAuthn API with credentials.get(challenge).
   - User prompted for verification with a biometric or a PIN and using a stored passkey to sign the challenge. 
   - The signed challenge as well as the username and the credential ID of the used passkey are returned by the function.
3. Finalize passkey authentication : Client sends signed challenge, username, and credential ID back to the server. 
   - The server checks if the username and credential ID are known.
   - If known, server uses public key to check the validity of the signed challenge. 
   - If the signed challenge can be successfully verified by the public key, the server can safely assume that the user was in possession of the passkey and create a session or hand out an authorization token.



# FIDO
The FIDO Alliance (founded in 2011) is a consortium of hundreds of organizations worldwide with the goal to improve online security. 
    - Members include Google, Facebook, Microsoft, Amazon, VISA, and the World Wide Web Consortium (W3C).

Billions of users have reviewed their FIDO U2F specs, a protocol for a phishing-proof second factor (mostly physical security keys)(also uses passwords for first authentication factor) being widely supported and rolled out at nearly all major identity providers.

The FIDO Alliance then developed a system combining the proof-of-possession factor of U2F with the device’s unlock mechanisms and biometrics, which is how WebAuthn was born.

## FIDO Registration
1. Registration Starts
    - User is prompted to choose an available FIDO authenticator that matches the online service’s acceptance policy.
2. User Approval
   - User unlocks the FIDO authenticator using a fingerprint reader, a button on a second–factor device, securely–entered PIN or other method.
3. New Key Created
    - User’s device creates a new public/private key pair unique for the local device, online service and user’s account.
4. Registration Complete
    - Public key is sent to the online service and associated with the user’s account. 
    - The private key and any information about the local authentication method (such as biometric measurements or templates) never leave the local device.

## FIDO Sign in
1. Sign in
    - Online service challenges user to sign in with a previously registered device that matches the service’s acceptance policy.
2. User Approval
    - User unlocks the FIDO authenticator using the same method as at Registration time.
3. Key Selection
    - Device uses the user’s account identifier provided by the service to select the correct key and sign the service’s challenge.
4. Sign in Completes
    - Client device sends the signed challenge back to the service, which verifies it with the stored public key.
    - User is signed in.

## FIDO Authentication Features
FIDO Authenticators categorized by user interactions (link to [Likelihood to Cause Accessibility Challenges Matrix](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1697651927978/cca6de94390654cb099d0d394d2863317f9ad1a2?wid=0-1699281032419):
- Touch
  - Touch security key for user presence check
- Type
  - Type client PIN or screen-unlocking PIN
- Scan
  - Fingerprint scan
  - Vein scan
  - Iris scan (look into camera)
  - Face scan
- Speak
  - Voice recognition
- Move
  - Insert a security key in a USB port
  - Scan security keys via NFC with smart phones
  - Draw a pattern on screen to unlock smart phones
  - Activate buttons for actions
  - Touch screen for selecting actions
  - Use mouse or alternative input devices for selecting actions
  - QR code scan for pairing a device
- Read
  - Instructions on screen
- Timer
  - Complete authentication within limited time


## Government Use of FIDO
### GSA & Login. gov

In response to a rising number of phishing attacks, the government required a user-friendly, efficient, and cost-effective “phish-proof” multi-factor authentication (MFA) technology. 

Among options, security, usability, cost, and compliance requirements matched with FIDO2 through the use of FIDO security keys and built-in FIDO authenticators like Windows Hello biometrics.

FIDO standards provided a secure alternative that is compliant with NIST authentication assurance guidelines (Authentication and Lifecycle Management (Special Publication 800-63B).

- Reclassified SMS OTPs as a “restricted” authentication technology. 
  - Agencies need to offer users at least one alternate authenticator that is not restricted. 
  - Must provide users with information on the security risks of the restricted authenticator (SMS OTP) and availability of alternatives. 

September 2018, GSA permitted authentication with FIDO2. 
  - Initial adoption ~2,000 (0.2% of new users).

GSA required registration of a second MFA option
  - Newly registered FIDO2 security keys increased to 17,000 per month. 

June 2019, ~27,000 FIDO2 keys registered (Adoption rate ~3% of all new users) 
 - A significant increase from initial rollout.

## Deployment and UX
Login.gov supports FIDO2 through the use of FIDO security keys and built-in FIDO authenticators like Windows Hello biometrics.  

For users, these are all referred to as “security keys” during user onboarding. 

The process for setting up FIDO2 at login.gov:
1. Creating a new login.gov account 
  - User enters their email address and creates a password. Login.gov will first send an auto-generated email for the new user to confirm their email address. 
2. Select method of MFA
  - They are instructed to select and set up MFA from a menu of options, including SMS OTP, FIDO2 security keys, and backup codes. 
  - To set up FIDO2, the user selects the “Security Key” option. 
  - The user can create a nickname for their security key. 
3. Set up Security Key
  - User is prompted to either insert a hardware security key into their computer and touch it or, if their device has a supported built-in authenticator, be prompted to use it by either looking into the camera or touching a biometric sensor. 
- The user is presented with a “success screen” and they can then access their login.gov account.
- Selecting “Remember Device” prevents MFA need on that device for 30 days.


# Barriers to FIDO/Passkey Adoption
1. Users are lacking mental models and knowledge about the security of passwordless authentication including:
   - FIDO protocols are designed from the ground up to protect user privacy. 
   - The protocols do not provide information that can be used by different online sites to collaborate data and track users. 
   - Biometric information, if used, never leaves the user’s device.
2. Token-based authentication problems such as expiration timing, lack of cross domain support, and risk of mixed content rails in websites.
3. In case of 1FA, users may associate possession of the authenticator with a belief that no one else can access the account and that losing the device may lead to an unauthorized account access.
4. It may not be suitable for use in all situations where there is a need to use a security key (such as public computers without connectivity or when giving account access to a trusted person (how can it be shared?))
   - Note: CTAP2 (Client-to-Authenticator Protocol 2), a hardware-based protocol that allows a security key to communicate directly with the computer, without the need for a browser, can be used for offline authentication. It is not supported by all FIDO2 security keys.

## Opportunities to Increase Adoption 
1. User Education - Specifically, informing users that they have the option to enroll with FIDO2 and educating them about what FIDO is and how to set it up.
   - It can be a challenge to accomplish this without confusing the set of users who are not able to set up FIDO, due to not having a FIDO2 security key or a built-in authenticator. 

2. The onboarding process and use of “security key” term for all FIDO authenticators 
   - Extra clarity around using the device's name instead of the security key language to keep the security key option for users who have the physical security key and adding additional options for users with built-in authenticators (i.e. “use your Android phone,” or “use your Windows Hello device,” etc).  

3. “MFA Checkup” Feature - Addresses real-world problem when users change their smartphone and lose their backup codes. 
   - Login.gov could notify (such as within a modal) the user of the methods available or provide the user with the option to replace a method.
  
## Research Recommendations
Research studies are demonstrating a growing positive affective reaction of participants toward passwordless authentication after application of recommendations including: 
  - To understand users thinking systematically abour passkeys, designers should draw from existing models about physical keys (such as possessing a key means another can't access the account; spare keys can & should be used; advising them to not store with personally identifying information; associate account with the correct physical key).
  - FIDO2 doesn't define the the authenticator's form, just its capabilities and protocols. This is an opportunity for designers!
     - Determine user preferences of authenticator form and features (such as using currently owned devices or designing for personalized authentication).
 - Inform users of situations where they may not be able to use passwordless authentication, as they may be unable to predict the consequences of combining client devices with authenticators.
 - Permit users to securely revoke access to their account without having to complete account recovery for themselves before being able to possibly freeze accounts.
 - Reusing an authenticator across websites amplifies the risk of losing access to multiple accounts at once.
 - Explain how security keys work and distinguish them from USB drives in a “Learn more” text.
    - The security key is unlike a USB drive in that they won't contain malware, viruses, or hacks that infect their device when a security key is inserted.



# Research Questions
1. "Do end-users accept FIDO2-based authentication as a single factor? If not, which factors could inhibit an adoption by end-users and which potential paths exist to address the end-user concerns?
2. How do users perceive FIDO2 passwordless authentication in terms of usability?
3. Are users accepting of FIDO2 passwordless authentication for everyday use?
4. What thoughts and concerns arise in the users’ minds when using FIDO2 passwordless authentication?


# Appendix
1. Apple. “Latest News.” Apple Developer, 27 September 2023, https://developer.apple.com/news/?id=mgdnfp8w. Accessed 16 October 2023.
2. Arora, Sunpreet. “Avoiding Lock Outs: Proactive FIDO Account Recovery using Managerless Group Signatures.” Cryptology ePrint Archive, 11 November 2022, https://eprint.iacr.org/2022/1555. Accessed 16 October 2023.
3. Beyond Identity. “What is FIDO2?” Beyond Identity, 2023, https://www.beyondidentity.com/glossary/fido2. Accessed 20 October 2023.
4. Brinkmann, Martin. “The downsides to using passkeys.” BetaNews, 30 May 2023, https://betanews.com/2023/05/30/the-downsides-to-using-passkeys/. Accessed 23 October 2023.
5. Covert, Tammy. “What is FIDO vs FIDO2? – Super Computing Frontiers.” Super Computing Frontiers, 5 October 2022, https://www.supercomputingfrontiers.com/what-is-fido-vs-fido2/. Accessed 20 October 2023.
6. Das, Sanchari. “Why Johnny Doesn't Use Two Factor A Two-Phase Usability Study of the FIDO U2F Security Key.” Financial Cryptography, https://www.ifca.ai/fc18/preproceedings/111.pdf. Accessed 29 November 2023.
7. Farke, Florian. ““You still use the password after all” – Exploring FIDO2 Security Keys in a Small Company.” USENIX, 11 August 2020, https://www.usenix.org/system/files/soups2020-farke.pdf. Accessed 29 November 2023.
8. Gosschalk, Kevin. “Arkose Labs Named 2020 Gartner Cool Vendor for IAM & Fraud Detection.” Arkose Labs, 2 June 2020, https://www.arkoselabs.com/blog/gartner-cool-vendor/. Accessed 13 October 2023.
9. Hata, Max. “FIDO White Paper Multiple Authenticators.” FIDO Alliance, June 2020, https://media.fidoalliance.org/wp-content/uploads/2020/06/FIDO_White_Paper_Multiple_Authenticators_CDWG.pdf. Accessed 26 October 2023.
10. Huber, Lesa. “Towards Implementing Inclusive Authentication Technologies for Older Adults.” Who Are You?! Adventures in Authentication Workshop (WAY), 11 August 2019, https://wayworkshop.org/2019/papers/way2019-das.pdf. Accessed 29 November 2023.
11. Imbault, Fabien. “Managing authorization grants beyond OAuth 2.” GI Digital Library, 2021, https://dl.gi.de/server/api/core/bitstreams/9050b09b-c162-4d1c-b294-2ae5efea2c6b/content. Accessed 29 November 2023.
12. Lyastani, Sanam. “Is FIDO2 the Kingslayer of User Authentication? A Comparative Usability Study of FIDO2 Passwordless Authentication.” IEEE, vol. 2020, no. 1, 2020, pp. 268-285. ieee, https://ieeexplore.ieee.org/abstract/document/9152694.
13. Microsoft. “Authentication methods and features - Microsoft Entra.” Microsoft Learn, 19 September 2023, https://learn.microsoft.com/en-us/azure/active-directory/authentication/concept-authentication-methods. Accessed 16 October 2023.
14. passkeys.io. “How do passkeys work?” Passkeys.io, https://www.passkeys.io/technical-details. Accessed 29 November 2023.
15. Stewart's, Geordie. “Why Do They Do What They Do?: A Study of What Motivates Users to (Not) Follow Computer Security Advice.” USENIX, 24 June 2016, https://www.usenix.org/system/files/conference/soups2016/soups2016-paper-fagan.pdf. Accessed 29 November 2023.
16. Wolf, Flynn. ““Pretty Close to a Must-Have:” Balancing Usability Desire and Security Concern in Biometric Adoption.” CHI 2019 Paper, CHI, 4 May 2019, https://dl.acm.org/doi/pdf/10.1145/3290605.3300381. Accessed 20 Nov 2023.
