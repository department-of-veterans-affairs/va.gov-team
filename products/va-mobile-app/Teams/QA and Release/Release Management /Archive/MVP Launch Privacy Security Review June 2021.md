# VA Mobile: Privacy, Security, & Infrastructure Readiness Review


### Based on the VSP model


# Technical Diagrams

![image](https://user-images.githubusercontent.com/7320097/117897720-5fab5c80-b291-11eb-9eee-281f178f0165.png)


# Release Plan


**Phase I: Internal Release Through Test Flight**
*   Dates: Early February
*   Users: 15 users who tested through TestFlight and Android test app files
*   Types of errors logged: access issues in claims status pages, and small UX bugs
*   Key UX changes needed: moving the “Letters” section to the homepage due to its popularity.

**Phase II: Pre - App Store Release Testing (Rollout, Phase I)**
*   Dates: Late April and early May, for about 2 weeks
*   Users: 15-20 users through TestFlight for iPhone and .apk files for Android.
    *   Recruited through VA professional networks and Perigean
*   Full test plan: [https://docs.google.com/document/d/1Xi1Aq2rw7iVruitlEcjzxe13FOGku_2lJzdv-iD1zwA/edit](https://docs.google.com/document/d/1Xi1Aq2rw7iVruitlEcjzxe13FOGku_2lJzdv-iD1zwA/edit)

**Phase III: App Store Releases (Rollout, Phase II)**
*   Date: Late May, Roughly 5/26
*   Users: Unknown, estimated for 100-500 users
*   Infrastructure planning: Per conversations with Dror Matalon, vets-api has sufficient bandwidth to support our mobile app for up to 100,000 users/day.
*   Launch planning: [https://docs.google.com/spreadsheets/d/1s1sRgTUL_lZeGmuVmUYPVlC_BiFnVlRsU3Nww4FJyIg/edit#gid=0](https://docs.google.com/spreadsheets/d/1s1sRgTUL_lZeGmuVmUYPVlC_BiFnVlRsU3Nww4FJyIg/edit#gid=0)


# Questionnaire


## Logging & Data Retention

_Are there any new logging statements or data being stored? This includes data sent to Sentry, Cloudwatch, Google Analytics, PDFs sent to S3, etc...? Consider the front-end, back-end, and infrastructure._

**Yes. No logging from the front-end, but additional logging has been added to vets-api.**

_If yes, what kinds of data are being logged or stored? Is there any of the following?_

_PHI: [Personal Health Information](https://www.hhs.gov/hipaa/index.html) is defined by HIPAA. PHI should *never* be logged, *anywhere*. We should avoid even *storing* PHI if possible, but if we must store it, it **must** be strongly encrypted._

**No**

_PII: [Personal Identifiable Information](https://www.dol.gov/general/ppii) is defined by the DoL. PII *usually* should not be logged, and if logged the logging **must** be scrubbable. We should avoid storing PII if possible, but if we must, it **must** be encrypted_

**No**

_PI: [Personal Information](https://www.oag.ca.gov/privacy/ccpa) is defined by the CCPA. PI may be logged, but the logs **must** be scrubbable upon consumer demand (with caveats). We should avoid storing PI if possible, but if we must, the database **must** also be scrubbable upon consumer demand (again with caveats)._

**No**


## User tracking, identity, authentication

**Authentication**



*   **OAuth**

The mobile app uses a standard OAuth PKCE flow to present the login screens and retrieve a refresh token. Refresh tokens are exchanged for access tokens as-needed.



*   **SSOe (IAM)**

The OAuth server is implemented by SSOe, which is run by the IAM team. Integration points include the mobile app browser-based OAuth flow, and the backend “introspection” endpoint check, which vets-api uses to confirm validity of the passed access token.



*   **Biometrics**

VA Mobile app uses biometrics to allow for fast and easy login. A successful biometric challenge on the device allows the app to access the stored refresh token, which remains valid for a long period of time (up to 45 days). 



*   **PIN**

Authentication using a custom PIN has been considered, but it is lower on our roadmap as biometric authentication is deemed more secure.

The refresh token is stored in app-specific storage on the device and is not accessible outside of the application’s scope and can only be unencrypted through the biometric process. This is an OS-level security feature.

Use of biometrics on the device is optional; if the user decides to opt-out, they will need to re-login via the OAuth flow whenever they open the app. In this case, the refresh token is stored in volatile memory and will be destroyed when the app is closed.

NOTE: Devices don't necessarily clear that memory immediately when you close an app. When a user closes an app, the device takes a snapshot of the state and then stops the app’s running processes. Depending on the device and OS, that state could sit around for a bit and still be available when the app starts up again. All of this depends on the OS, the device and other apps are running/were saved in this way.

**User tracking**

We are planning to track mobile users’ activities within the app, but we are not storing or logging any identifying information. No cookies or session ID is stored or logged. We will follow the policies laid out for VA.gov for [privacy of user data](https://www.va.gov/privacy-policy/).


## Back-end

- **Are there any new publicly-exposed endpoints (`vets-api` or otherwise), or behavioral changes to existing endpoints?**
- [x] Yes

- [ ] No

* If YES, please describe the changes:

  - Many endpoints added under /mobile

* If YES, think like a malicious actor and answer "How could this endpoint be abused?":

- **Is there any new risky data being sent to `vets-api` (XML, file uploads, etc.)?**
 - [x] Yes

- [ ] No

* If YES, please describe the changes:_

  * Secure Messaging to MHV
  * Direct Deposit info**

* If YES, think like a malicious actor and answer "How could this information be abused?":

- **Are there new integrations with other VA endpoints?**
- [X] Yes

 - [ ] No

* If YES, please describe the changes:
  *   We have added SSOe introspection to support our login
  *   VETtext has been added to support our notifications

* If YES, think like a malicious actor and answer "How could this integration be abused?":


## Infrastructure



*   How much new traffic are you expecting to send to `vets-api`? Consider both average (typical weekday traffic) and burst (e.g. an email blast to Veterans).
    *   Small to start: 100-500 users per day for the app store phase
    *   Upon launch, the app makes two network calls to the api. Most features (screens) require one or occasionally two network calls to the api.
*   What's your rollout plan? Specifically:
    *   Anyone will be able to download the app from the app store. However, based on the release phases (see above), we don’t expect a large volume of users at the start, though we are prepared for higher-than-anticipated traffic.
*   Is there a playbook included in your product outline, for investigating and handling likely failure modes?
    *   Yes, please see the incident management section
*   New integrations or endpoints:
    *   SSOe
        *   What is the latency/availability profile?
            *   24/7, low latency
        *   Are those expectations configured for monitoring?
            *   No, SSOe is an external system
    *   VEText
        *   What is the latency/availability profile?
            *   24/7, low latency
        *   Are those expectations configured for monitoring?
            *   Yes, via vets-api and VSP
