# VA.gov Fraud Prevention Plan: Reducing Attackers' Ability to Make Fraudulent Changes

The VA.gov Fraud Prevention Plan includes several recommendations to enhance security for user accounts and prevent fraud. These recommendations aim to reduce the risk of fraud and protect the sensitive information of Veterans by reducing an attacker's ability to successfully make fraudulent changes on VA.gov. The plan includes implementing multi-factor authentication (MFA), disallowing MFA resets via email, allowing longer confirmed sessions without requiring MFA, adopting passkeys, implementing activity validation via email codes, requiring liveness checks for suspicious activities, actively blocking changes from high risk countries, allowing BDPR to selectively block authentication for compromised credentials, and sending notifications to all forms of communication when a sensitive action is taken.

## Problem

VA.gov has seen an increase in the number of fraudulent direct deposit changes and account takeovers for the past 6 months.
- DSLogon and MHV do not have forced MFA when logging in from sites outside of VA.gov
  - This allows an attacker to see full personal data on MHV, which can then be used to social engineer their way into account takeovers of IDme and Logingov accounts
- IDme accounts are being mostly compromised through social engineering techniques
- IDme allows MFA reset to occur via email
  - Login.gov forces a user to reverify if they lose their MFA
- We cannot determine if an account that is attempting to view or modify sensitive data on va.gov is actually them after the initial verification process is completed (once per user account)
- The verification process is robust, and does not seem to be a consistent enough vector of attack. Bad actors rely on getting a valid user to perform an action which allows them to get access to their verified account
  - We have reports that victims are sharing copies of driver license photos and all PII which is allowing bad actors to create verified accounts. This still requires a phone number to be matched with the victim, this also seems to be part of the social engineering process.
- High risk countries
  - We received a report from IDme that stated there was an increase in compromised accounts from individuals in Nigeria. We can monitor these types of trends and take appropriate action
- Scams are becoming more sophisticated because of new AI solutions.

## Scope of problem

We successfully logged in 6,390,000 users in June 2023. 22 users were victims of direct deposit fraudulent changes on VA.gov in June of 2032. .000003% of users.

## Timeline 

Each of the recommendations based on the estimated number of sprints not including work required by external dependencies (concurrency of sprints may occur):

1. Force MFA for all logins: 2 sprints
2. Disallow MFA resets via email: 1 sprint
3. Allow longer confirmed sessions without requiring MFA: 1 sprint
4. Adopt passkeys: 6 months
5. Implement activity validation via email codes: 3 sprints
6. Require liveness checks for suspicious activities: 3 sprints
7. Actively block changes from high-risk countries: 2 sprints
8. Allow BDPR to selectively block authentication for compromised credentials: 4 sprints
9. Send notifications to all forms of communication when a sensitive action is taken: 13 sprints

It's important to note that these are estimates and the actual timeline may vary depending on various factors, including resource availability and unforeseen challenges.

## Recommendations

### 1. Force all authentications to use MFA, drop SMS as an option
   - Detail
     - Sign in service authentications can ensure that all logins have used MFA. Eauth likely can as well. This solution would prevent a user from logging into any VA application unless they have successfully entered in MFA with a CSP. A secondary recommendation which makes MFA more secure is not allowing the use of SMS as an MFA option. SMS has been proven to be the most easily socially engineer-able MFA method. Microsoft reported that MFA can prevent 99.9% of automated attacks against users.
  - Problem being solved
    - Attackers are able to compromise DSLogon and MHV accounts which do not have MFA setup or not being forced to enter it. They then use the PII from these accounts to socially engineer help desk individuals into resetting accounts and socially engineering Veterans into giving up copies of their drivers license by pretending to be someone of authority by restating their PII back to them.
    - VA.gov already enforces MFA for all login.gov and ID.me users who login through va.gov. DSLogon and MHV users who have previously established MFA are forced to enter it upon login; we do not force users to create MFA for these two account types. If a user were to login from another VA website then auto login through SSO to va.gov then the user would not be forced to use MFA for their DSlogon or MHV account.
  - Pros
    - Fraud and account takeovers will be reduced by making account compromise more difficult.
  - Cons
    - Lack of SMS option may make MFA adoption more difficult for users, causing frustration.
    - Requiring MFA is becoming more accepted however some individuals will still have a difficult time setting up one of the factors for MFA compliance.
    - Users may lose their MFA source and have to reverify their account for login.gov.
  - Impact to Veterans
    - Veterans will need to enter in their MFA every time they login.
    - Veterans data will be better protected as it's much more difficult to compromise an account that enforces MFA.
  - Effort
    - IAM would need to force MFA compliance for all logins. Unknown amount of time.
    - Sign in Service can force MFA for MHV and DSLogon accounts for the VA mobile app and any new apps that are added to Sign in Service in the future. One sprint.
    - IDme may need to create a policy which forces MFA for MHV and DSLogon brokered credentials. Unknown amount of time.
    - Comms will need to be sent out regarding the enforcement of MFA for access to sensitive content and activities on VA applications. Two sprints.

### 2. Request IDme stop allowing the resetting of MFA via email
   - Detail
     - Currently IDme allows a user who has “lost their MFA method” to reset/add an MFA method by having a link sent to the users email address. This practice alone isn’t uncommon, however we see 5 times as many IDme accounts performing fraud than we do for login.gov accounts. Login.gov does not allow the adding or resetting of MFA methods via an email link alone. Users of Login.gov must complete the entire account verification process all over again. This solution would request IDme to stop allowing MFA to be reset or added via a link to the user's email.
  - Problem being solved
    - Resetting of a users MFA method through a feasible email message by IDme is becoming more of a concern as fraud appears to be increasing.
  - Pros
    - The resetting of MFA would be in alignment with the other main VA credential, login.gov.
    - A reduction in the number of fraudulent changes would occur after this change is made.
    - Performing legitimate identity verification is less impactful than attempting to recover from a fraudulent change to benefit information.
  - Cons
    - Losing the MFA method for a credential that isn't used very often is more common than credentials that are used on a more active timeline. Forcing a Veteran to go through the entire verification process can be difficult.
  - Impact to Veterans
    - Veterans would need to perform identity verification each time they lost all MFA methods for a given credential.
  - Effort
    - IDme would need to provide estimates as to how long it would take to provide this level of restriction for VA credentials.
    - Comms would need to be sent stating how and why MFA recovery is occurring. One sprint.

### 3. Allow for longer confirmed sessions which don't require MFA to be entered
  - Detail
    - Requiring a user to enter MFA each time they login isn’t always more safe when the application can generally prove the user is the same person as the previous time they opened the web page or app. This solution would request policy acceptance to allow a web based user to have sessions for 30 days. If a user accesses VA.gov from the same browser and device, they will not have to relogin or enter MFA for 30 days. If a user goes to a new browser or device they will need to login again. Each session would persist for no more than 30 days. The number of days we allow for the session to be alive should be discussed, 30 days is a starting recommendation.
    - This solution would require that a user indicate that the device they are using is a private or public device. If they select public, then this extended session would not be applied.
    - Depending if IAM were to be involved, this likely would not allow SSO between applications that do not also use sign in service. Adopting Sign in Service across other applications would ensure SSO is maintained for the agreed upon extended session timing.
    - VA mobile app sessions are already maintained for 45 days. Other applications across the tech industry also follow a similar extended session length on established devices.
  - Problem being solved
    - User satisfaction and security of these accounts is impacted by forcing a user to authenticate after 30 minutes of inactivity. Users who are asked to enter in credentials more often are more likely to use weaker passwords, weaker MFA methods, and re-use passwords across multiple accounts. All of this causes the user to be more susceptible to account compromise and victim of fraud.
  - Pros
    - Users will enter credentials less often.
    - Users are more likely to be more willing to use a more secure MFA method, when forced to, if they don't have to enter it in as often.
 - Cons
    - If a user enters credentials and MFA less often, there is also a possibility the user could forget the credentials or lose their MFA method. This may result in an increase in password and MFA reset requests.
    - There is a chance that a user may not understand the concept of a public vs private device and select the private device setting on a public device. If this were to occur and another user were to go to VA.gov on the same device the user was on, they would see the previous user's va.gov information.
      1. As sensitive as this can be, we do not show the full SSN of a person anywhere on va.gov currently.
      2. This would be a user error, not less concerning because of this, but user errors can result in loss of data in many other ways as well.
  - Impact to Veterans
    - Veterans would enter their credentials on a given device less often.
  - Effort
    - IAM would need to allow extended session refreshes. Unknown amount of time.
    - If IAM cannot allow for extended sessions, other apps that want to have SSO extended sessions would need to implement SiS. 6 months.
    - Sign in Service already has the ability to adopt extended sessions and performs this with the VA Mobile App. One sprint.
    - A public/private device selection frontend component would need to be developed. One sprint.

### 4. Adopt the use of passkeys to prevent password sharing social engineering attacks
  - Detail
    - A passkey is a unique identifier used to authenticate a user's identity. It’s created for each user and stored securely on their device or in a cloud-based service. When the user wants to access an application or service, they are asked to provide a password or PIN to unlock access to the passkey. The passkey is then used to authenticate their identity and grant them access. Passkeys can simplify the authentication process and improve security, as they are harder to guess or steal than traditional passwords.
    - The implementation of passkeys initially would be within VA.gov only. We would like to work with IDme and Login.gov to establish passkey solutions with them. Ultimately the accounts with IDme and login.gov are still susceptible to account takeover if there exists the ability to still enter in a basic username and password.
  - Problem being solved
    - Fraud has seen an increase over the last six months at VA due to more people falling victim to social engineering attacks. Part of the scams gets a user to click a link or enter their credentials into a fake website. These credentials are stolen by the attacker and used to make fraudulent changes on VA.gov. The bad actors target a victim's direct deposit information so they can redirect disability funds to the attacker.
  - Pros
    - A more secure and user friendly experience after the passkeys are established.
    - Less account takeovers will occur due to the use of passkeys by preventing the ability of a user obtaining a user's password.
    - Passkeys are a form of MFA and would prove to be a significantly easier method to maintain than other current MFA methods.
  - Cons
    - The recovery and establishment of passkeys is still new to the industry which may cause confusion amongst the user base.
  - Impact to Veterans
    - Veterans would be able to opt into the use of passkeys to simplify the login experience.
    - The most seamless experience is if they establish the passkeys with a cloud based service so they would not have to register each of their devices. The Veteran can grant access to all of the devices that the cloud based service already has access to.
  - Effort
    - IDme and login.gov ideally would implement passkeys for our users. This likely will take 6 months or longer.
    - VA.gov can establish their own implementation of passkeys which would allow for session maintenance to be handled outside of the initial registration of a verified account from IDme or login.gov. A pilot could be completed within 2 sprints.
    - Research and user comms, 3 sprints.

### 5. Implement activity validation via a code sent to the users email
  - Detail
    - A user would be prompted to enter in a code which they receive via email when performing a sensitive action on VA.gov.
    - The following activities would be in the pilot:
      - Direct deposit change for education and disability benefit payments.
      - Mailing address, email address, and phone number changes on the va.gov profile.
  - Problem being solved
    - Accounts are being compromised and used to change direct deposit of victims resulting in funds being sent to attackers. We currently do not perform additional validation the current user is who they say they are after they complete authentication with IDme or Login.gov.
  - Pros
    - There will be a reduction in sensitive actions being conducted by compromised accounts.
  - Cons
    - Valid users will be prompted to enter in a code from their email to make sensitive changes whereas they currently do not have to do this today.
  - Impact to Veterans
    - Veterans would need to enter in a code from the email registered to the currently logged in account (sourced from the CSP) each time they changed something VA felt was a sensitive activity.
  - Effort
    - The Identity team would need to establish a connection with VA Notify, or some similar notification service, in order to send an email on demand when a user wants to perform the sensitive action. One sprint.
   - The Identity team would implement an interrupt in the sensitive activity call. This service we provide would be an opt-in by the application maintainers. Two sprints.
   - Research and comms will need to be provided. Two sprints.
   - Determination of which activities this restriction would be applied to, outside the scope of the Identity Team, two sprints.

### 6. Require some form of liveness check for users performing actions that appear suspicious
  - Detail
    - ID.me has a service in which we can call on VA.gov that performs a liveness check on a person who is currently logged in. This service asks a user to turn on a camera and show that they are the person that originally created the verified account based on the ID that was provided at the time.
    - Similar to the proposed “Implement activity validation via a code sent to the users email” solution, the liveness check would be applied to sensitive activity changes.
  - Problem being solved
    - Accounts are being compromised and used to change direct deposit of victims resulting in funds being sent to attackers. We currently do not perform additional validation the current user is who they say they are after they complete authentication with IDme or Login.gov.
  - Pros
    - There will be a reduction in sensitive actions being conducted by compromised accounts.
  - Cons
    - Facial recognition software has been known to be inequitable towards minorities. The implementation of this requirement, however sensitive, may result in a disparity of undue stress towards minorities.
    - Not all users have a video camera to perform the liveness check, which would result in a prevention of the user being able to perform a legitimate sensitive account change.
  - Impact to Veterans
    - Users would need to connect to a service which allows IDme to see a live view of them. If the service is successful, the Veteran would be granted the ability to make the requested changes. If the service fails to verify the Veteran, they would be prevented from making the sensitive account change.
  - Effort
    - IDme would need to release the feature to VA.gov. Unknown amount of time, however IDme has stated the feature is available for us to adopt now.
    - Identity team to implement interrupt function which allows for liveness call to work. Two sprints.
    - Research and comms regarding the new feature would need to occur. Three sprints.
   
### 7. Actively block changes from high risk countries
  - Detail
    - There is a list of countries which tend to be more successful in compromising Veteran accounts than other countries. IDme and other services are continuously analyzing the data of confirmed scammers and fraudsters to maintain a list of high risk countries. This solution would actively block a sensitive account change if the IP address of the user at the time was from one of these high risk countries. The remediation path if the change was legitimate is to contact the help desk.
    - We could provide an exception system which allows the help desk to whitelist the user's high risk country. This would only apply to the given user, but it could allow for someone who is legitimately living in a high risk country to make changes to their account.
  - Problem being solved
    - Accounts are being compromised and used to change direct deposit of victims resulting in funds being sent to attackers. We currently do not perform additional validation the current user is who they say they are after they complete authentication with IDme or Login.gov.
  - Pros
    - The location of a user based on IP address is easy to obtain and apply during decisions regarding sensitive account changes.
    - This will result in a reduction of fraudulent changes before they occur.
  - Cons
    - VPNs can both mask an attacker but also make a legitimate person appear to be in a high risk country. This solution would be part of many which when combined provide a reduction in the ability for an attacker to make fraudulent changes.
  - Impact to Veterans
    - Veterans who are making legitimate changes from a high risk country would need to contact the help desk in order to obtain an exception for all future changes for their account.
  - Effort
    - Identity team will need to establish a solution which provides the IP address and location lookup. One sprint.
    - The Identity team will need to create the reusable service which allows app maintainers with the ability to block an action based on the value of the high risk country lookup. Likely have the method return a true false based on the lookup. One sprint.
    - Research and comms around implementation of the increased security feature. Two sprints.

### 8. Provide BDPR with the ability to selectively block authentication for any set of criteria is necessary
  - Detail
    - Within the Identity Dashboard we would allow authorized BDPR team members with the ability to block the login of a particular user credential. For example if the BDPR team member detected that an attacker took over a Veterans login.gov account but knew the IDme and other accounts were not compromised, they could check a box to lock the login.gov account, preventing login on va.gov, but still allow the other credentials the ability to login to va.gov.
  - Problem being solved
    - When a Veteran reports that their account has been compromised to fallen victim to fraud, we currently can only block all accounts associated with the Veteran and not just one of the accounts. This can be problematic to the Veteran if they still need to access services such as prescription refill on VA.gov with a non-compromised account.
  - Pros
    - Simple interface which allows professionals with the ability to assist a Veteran with further account remediation.
  - Cons
    - Maintenance will need to be conducted for locked accounts by both Identity and BDPR.
  - Impact to Veterans
    - Veterans will not be able to login from accounts that the BDPR team confirms have been compromised and fraud was conducted. The Veteran will have to use another account to access VA.gov.
  - Effort
    - Identity team implement feature which allows BDPR to search for users credentials based on ICN. One sprint.
    - Identity team to implement frontend view and selection of CSP to lock. One sprint.
    - Identity team to implement account locking on the backend for a given CSP. One sprint.
    - Identity team to create a view which shows all locked accounts, making management of accounts easier for Identity and BDPR. One sprint.

### 9. Send notifications to all forms of comms when a sensitive action is taken, allow unconfirmed changes to be reversed by victims.
  - Detail
    - When a sensitive action such as changing direct deposit information occurs on VA.gov, we send a notification to the user at their email, phone number, and call them to leave a voicemail to ensure they are aware of the change. Within this notification we provide the person with the ability to state they did not make the changes and reverse them.
    - Within VA.gov we would create a hook which allows for certain actions to be canceled/revoked by placing them in a queue.
  - Problem being solved
    - Changes are being made to victims accounts without them finding out because bad actors start by removing the contact preferences of victims before they make more serious changes such as direct deposit bank account information.
    - We currently send victims emails that their bank account information changed, unfortunately sometimes an attacker has already changed the contact email of the user so the alerts aren't actually getting to them.
    - Victims aren't finding out until after they dont get paid that an attacker has changed their information.
  - Pros
    - Earlier notification should reduce the time a bad actor's change is reversed.
    - This should reduce the amount of funds lost to bad actors.
  - Cons
    - Users who make legitimate changes may feel they have been sent too many methods of comms and ignore future comms about potentially bad changes.
  - Impact to Veterans
    - Veterans who are making legitimate changes will be alerted but not have to take any action. The only action they would want to take is if they didn't make the change that the notification is informing them of.
  - Effort
    - Research and comms would need to be conducted to ensure the notifications and information around revoking the actions is properly understood. 4 sprints.
     - This includes the creation of prototypes.
    - Identity team would need to create the queuing and reverse methods for vets-api. 3 sprints.
    - Identity team would work with the proper teams to implement the notification methods. 3 sprints.
    - Changes made to applications would need to be coordinated and communicated to users. 3 sprints.
      - An example would be that we would queue sensitive action changes for 24 hours. If someone were to change their last name, it would not apply to the change in the user's profile until it has cleared the holding period of 24 hours. This would allow any reversal action to be seamless by removing the action from the queue and prevent us from having to store different versions of data in terms of reversing the changes made.

## Types of Recommendations 

<img width="659" alt="Screenshot 2024-04-03 at 2 31 37 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/145713877/9c624194-942f-4f93-b637-e71d875ac32a">

## Current State

- Force the use of verified accounts and MFA for direct deposit changes
- Send notifications to users email upon direct deposit change
- Share confirmed fraud activity with IDme and Login.gov
- Log all sensitive activity changes including IP address, CSP ID, and ICN

## Additional Considerations
- Incorporate login.gov security events into our logs to enrich the data we have for user activity
  - Combine this with suspicious activity data
- Provide the ability for Veterans to lock access to make changes on VA similar to credit locking. In order to unlock it, the user would have to perform extra validation steps its them.
- User compromise remediation tracking solution.
  - Create something better than making a Veteran call into the help desk to have their direct deposit changed for 2 years.
  - Consider offering fido keys
  - Consider offering credit monitoring, but partner with credit companies to offer it as a trial rather than VA paying for it because we do not want it to be inferred that these account compromises are our fault
  - Essentially create information and processes that allow us to assist victims of fraud and compromised accounts. We need to have something that allows us to ensure every person has recovered their account and understands how to try and prevent it in the future.
  - A KPI for this may be how many repeat compromises of the same person are reduced. However I would focus more on the comfort level of the person after they have recovered their account. The target of this solution isn't to reduce repeat victims, it's to build more confidence in VA that we will protect and help our own.
  - Study all the methods our users have been victimized and build knowledge bases around this. Work with comms folks to talk about the common patterns and how to defeat them.
- Attempt to get “threat intel” attributes added to logs within datadog
request sent to to DOTS team to enable this, but if they dont we may want to pursue an official request of the solution through OCTO
- Create user activity risk engine
  - this will require a lot more work, but essentially we will create a list of events that if they occur create a log. After analyzing the logs that are generated for this activity we will then improve the detections. Finally, once we start to become more confident in the detection, we will enforce step up and/or blocking solutions. We cannot forget about reporting of these activities when they are confirmed.
- research needs to be conducted around what types of activity are suspicious, create a score for events, and find a way to continuously report elevated numbers per user and across sessions.
    - Things like:
      - logging in from different IP addresses
      - drastically different locations within a short period of time
      - deleting of contact information before making direct deposit changes
      - adding email addresses with known bad actor domains
      - actions taken faster than a human normally would be able to take them (changing direct deposit within seconds of logging in)
      - user agent strings changing in the middle of the same session
      - user performing activity from two different devices at the same time
    - Step up ideas:
      - text message
      - fido key usage
      - idme liveness check
      - phone call
      - email code
      - enter in special phrase, like a safe word
      - Passkeys
      - ask Veteran to upload a photo of their drivers license where we perform character recognition to attempt to validate its them
- Create automated confirmed fraud reporting from VA BDPR to login.gov RISC api
  - This api is the same one that allows us to subscribe to user account security events but instead of receiving events we can send events. This will help to protect the account from further compromise
- When a RISC event from login.gov states their was an account compromise we need to automatically report this to the BDPR team for further follow up
  - we may need to develop a policy around access to the account if these events come in. Login.gov will force a new verification of the login.gov account but other accounts may also be compromised and will not automatically be reset or frozen unless we take action.
- Get IDme to start sending and receiving RISC events similar to how login.gov does, incorporate all the same solutions we are planning to do with login.gov RISC data




