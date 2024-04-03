# UX Brainstorm Findings

A transcription of the Mural that UX used to capture discussion about Fraud Notifications

## What is the problem?
- Suspicious login activity that the Vet is unaware of
- Bad actors takeover an account
- Personal info changes that a veteran is unaware of
- Prevent further actions by bad actors
- Additional control over account events

## How can we help?
Notify veterans about actions in their account
- Notify via email
- notify via SMS text
- notify via in-profile message
- notify via popup or banner
- notify via in app notification

## What existing systems or tools can we tap into?
What considerations are there for each solution? What do we need to know? Do we have experience with it?

- VA Notify
  - Charter is to set up notifications to veterans
  - Set up a template, trigger through backend code that would send email
  - Can send out, but not might be appropriate for 2-way comms
    - E.G., can say "we noticed you signed in from a new device" but can't also include a "if this wasn't you press button"
    - Boiler plate on CTA
   
- VE Text
  - Specifically for appointments reminders
 
- Customer Support System
  - Better tracking of issues if veterans start with Ask VA
    - Can set up a "shadow call" if we need to 1:1 with the veteran
    - It's helpful if we have a playbook for the call center, ie calls like this go to BDPR
  - Only way ID team uses to contact veterans to date
  - Customer Support Sys usually contacts us about an issue, our team forwards info
    - Normally message to Tom, or maybe Joe via VA email, who'll triage.
  - Kimberley Monroe-Daniels is the normal point person form that team
    - Follow up with Kimberly
      - Kimberly suggests using VA Notify
     
- GovDelivery (used by BDPR team)
  - Sends out a physical mail for DD changes
    - What can we learn more about this?

## What triggers can we easily utilize?
What more do we need to know? What pre-work?

- New credential and time to change direct deposit
  - [SignIn][Authentication] fingerprint mismatch
  - Mobile authentication - "fingerprint mismatch” auth with IP and device, using auth features and your devices or IP changes (2,000 logs per 15 min, so a good starting point, would need to drill down)
- Direct Deposit changed
  - Auth Exp team already does this
  - Logs occur around this
  - This already exists in VA Notify
  - Prior team member on ID set this up
  - Joe ringleading the accountability
- Beneficary change
  - BDPR team already does this
  - Logs occur around this
  - This already exists in GovDelivery
- Email, Address, Phone Number changes
  - Can see when change is made in Vets API
  - Address isn't stored on Vets API 
  - Do we care if address changes elsewhere?
  - Need to define what we are looking at in the whole VA ecosystem
- Account signed is from a different country than usual
- Account signed in from a specific high risk country
- User sign in with a unusual device
- Too many bad auth attempts
  - Maybe - would have to work with CSPs
  - LIG may have a mechanism
- Unusual VA account activity
- Change to VA account security settings

Things we can measure
- Can fingerprint base on various user technical info
- We can track if user clicked on a button
- Did same IP sign into different accounts?

## What are other technical considerations or limitations?
- How do we get from trigger to notification?
  - VA Notify capabilities and limitation
  - Do users need to opt in?
    - Product standpoint - we don't want them to opt out much less req opt in
  - Would need to check in with VA Notify
- How might we think about Identity Team's response versus an action a Vereran can take?
  - Consider veteran response or action
  - We can lock account - ie if veteran says "yes this is fraud"
  - Sign out all action
- Need a way to capture info
  - How much fraud have we reduced? money saved? etc etc?
  - Can we start capturing metrics now around the DD email?
 
## What other questions do we have?
- Technical Questions
  - Can user take action from within notification?
    - VA Notify, probably a no 
  - Will baselines need to be considered for some triggers?
    - Considering the fingerprint mismatch - how often do anomalies occur?
  - what is the "trigger" for a suspicious, new, different actitivy?
  - Can users have access to notification settings?
    - Product standpoint - don't want
- Product Questions
  - Will users have access to notification settings? What will they include? Where will they be? How will they be securely adjusted? Notification about changes?
    - If we have a ton of notification options, then there needs to be an ability to make changes
  - When does notification happen: before action is completed /after event completes?
    - After event completes
  - Will notifications require acknowledgment? Effect on legitimate tasks? If proxy attempts to sign-in to vets account but vet cannot respond to notification. Does it let their proxy sign in? Does it kick out proxy?
  - What outcome do we want them to take? What is our objective? CTA? invoke feeling in the user? etc?
    - We do want to notify
    - We do want to give a CTA in case there is something actually wrong
  - How do we actually add value for the veteran and not just throw extra stuff at them they don't need?
    - Peace of mind
  - How many notifications would be overload?
    - If we have some amount more than 1, then we have to offer ability to manage
  - Fraud SME
    - Not our role
      - But we do have the data
      - Ideally, other teams give us triggers
- Taking over DD Notification Questions - from Auth Exp team
    - Who on our team owns it?
      - Designate a person or position?
    - Who should we include on meeting with Auth Exp?
      - PM and DM
    - When would we want to take ownership?
      - Before we set up any new notifications?
    - What's the LOE to manage a notification in VA Notify?
      - Is there any regular upkeep?
      - How often does Auth Exp team look in on it?
     
## Unauthorized access (potentially fraud related)calls to VA Call Center (6/23 - 3/24)
- Unauth attempt may have been made, caller had PoA but unable to access
- Caller got emails about signing up for VA services they didn't, and aren't a veteran
- Veteran getting an MFA code when not signing in
- IDme account was hacked - has different email associated with it now
- Reporting hacked account - now locked out after direct dep info was changed the night before
- Direct Dep info was changed
- Calling about unauth direct deposit change made, he's not able to change it back
- Caller wants to close all online acount after being hacked
- Veteran thinks his exwife has been changing info on account wants a way to lock her out
- Wanted to freeze account after getting a fraud notification
- Caller said account was hacked, not able to get in
- Caller reporting compromised account with fraud activity
- Caregiver reported online account opened in veteran's name was unauth
- Veteran needs access to his account that was still locked after reporting fraudulent activity months ago
- Bank account info was changed on account then password was changed
- Suspicious email address on account
- "Alleged security breach"
- Reporting ID theft that also led to unauth VA account access
- Caller reporting hacked account and wants it locked, unable to sign in
- Call about account being suspended, believes he was hacked
- Caller got sms from LIG that someone was using his phone number to cancel his account
- Direct deposit info was changed. They changed it back
- Veteran notified of direct dep change they didn't make, the bank account # is not his
- Former caregiver set up account in veteran's name and not auth to do so
- Wlder veteran being exploited and locked out of his account
- Caller had ID theft and reporting it
- Veteran is locked out of account after unath direct dep info was changed
- Veteran wife called about veteran exwife unauth accessing account
- Caller (wife) locked account trying to access unsuccessfully, needed help to get in
- Non-veteran called in that his info is being used on a VA account - it sounds like caller thought it was innocent mistake, but still noting it here
- Caller reported an email to their .mil (sounds like it was a phishing email)
- Caller says her veteran has an account they didn't make - fraud
- Had placed a fraud lock on their account months ago and they were trying to remove
- Veterans info changed that was on file with their local VA
- Calling about email notification that their profile info was changed, this is be an anauth change
- Wanted to delete online account after being compormised
- Wants all signin accounts (CSPs?) reset due to a hacking incident
- Ceterans name in system doesn't match with actual ID info
- Xalling in a issue with identity theft
- Ceteran got notification of intent to file for disability claim she didn't make
- Was a change in direct deposit on file and now wants account locked
- Privacy Officer called on behalf of veteran who's info was changed in the system
- Ceteran believes they were hacked after getting an email about direct dep change
- Vank account info was changed - unauth
     
## Next Steps
- Device Fingerprinting
- Who owns the notification piece?
- Meet with engineers on trigger
  - Anything else that could be a simple trigger?
- Convo with Tom, Samara, PMs, Joe
- Where does BDPR step in and we step out?
  - Monica is already sending mail and email notifications
  - Keep notifications managed by the same team
  - We own up to the trigger creation?
- GovDelivery
  - BDPR already using this to send out notifications
  - trigger - when beneficiary or bank account changes
 
# Next Next Steps
- Content creation and approval for emails and process to "publish"
- Pull in Megan for content
- Plan our approach to messaging
- VA Notify
- Kickoff meeting
