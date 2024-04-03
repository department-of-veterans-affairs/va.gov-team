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

1. Force all authentications to use MFA, drop SMS as an option
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

2. Request IDme stop allowing the resetting of MFA via email
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
