## UX Brainstorm Findings

A transcription of the Mural that UX used to capture discussion about Fraud Notifications

# What is the problem?
- Suspicious login activity that the Vet is unaware of
- Bad actors takeover an account
- Personal info changes that a veteran is unaware of
- Prevent further actions by bad actors
- Additional control over account events

# How can we help?
Notify veterans about actions in their account
- Notify via email
- notify via SMS text
- notify via in-profile message
- notify via popup or banner
- notify via in app notification

# What existing systems or tools can we tap into?
What considerations are there for each solution? What do we need to know? Do we have experience with it?

- VA Notify
  - charter is to set up notifications to veterans
  - set up a template, trigger through backend code that would send email
  - can send out, but not might be appropriate for 2-way comms
    - eg, can say "we noticed you signed in from a new device" but can't also include a "if this wasn't you press button"
    - boiler plate on CTA
   
- VE Text
  - specifically for appointments reminders
 
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
  - sends out a physical mail for DD changes
    - what can we learn more about this?

# What triggers can we easily utilize?
What more do we need to know? What pre-work?

- New credential and time to change direct deposit
  - [SignIn][Authentication] fingerprint mismatch
  - Mobile authentication - "fingerprint mismatch” auth with IP and device, using auth features and your devices or IP changes (2,000 logs per 15 min, so a good starting point, would need to drill down)
- Direct Deposit changed
  - Auth Exp team already does this
  - logs occur around this
  - this already exists in VA Notify
  - prior team member on ID set this up
  - Joe ring leading the accountability
- Beneficary change
  - BDPR team already does this
  - logs occur around this
  - this already exists in GovDelivery
- Email, Address, Phone Number changes
  - can see when change is made in Vets API
  - address isn't stored on Vets API 
  - do we care if address changes elsewhere?
  - need to define what we are looking at in the whole VA ecosystem
- Account signed is from a different country than usual
- Account signed in from a specific high risk country
- User sign in with a unusual device
- Too many bad auth attempts
  - Maybe - would have to work with CSPs
  - LIG may have a mechanism
- Unusual VA account activity
- Change to VA account security settings

Things we can measure
- can fingerprint base on various user technical info
- We can track if user clicked on a button
- Did same IP sign into different accounts?

# What are other technical considerations or limitations?
- How do we get from trigger to notification?
  - VA Notify capabilities and limitation
  - Do users need to opt in?
    - Product standpoint - we don't want them to opt out much less req opt in
  - Would need to check in with VA Notify
- How might we think about Identity Team's response versus an action a Vereran can take?
  - Consider veteran response or action
  - we can lock account - ie if veteran says "yes this is fraud"
  - sign out all action
- Need a way to capture info
  - How much fraud have we reduced? money saved? etc etc?
  - can we start capturing metrics now around the DD email?
 
# What other questions do we have?
- Technical Questions
  - Can user take action from within notification?
    - VA Notify, probably a no 
  - Will baselines need to be considered for some triggers?
    - considering the fingerprint mismatch - how often do anomalies occur?
  - what is the "trigger" for a suspicious, new, different actitivy?
  - Can users have access to notification settings?
    - Product standpoint - don't want
- Product Questions
  - Will users have access to notification settings? What will they include? Where will they be? How will they be securely adjusted? Notification about changes?
    - If we have a ton of notification options, then there needs to be an ability to make changes
  - When does notification happen: before action is completed /after event completes?
    - after event completes
  - Will notifications require acknowledgment? Effect on legitimate tasks? If proxy attempts to sign-in to vets account but vet cannot respond to notification. Does it let their proxy sign in? Does it kick out proxy?
  - What outcome do we want them to take? What is our objective? CTA? invoke feeling in the user? etc?
    - we do want to notify
    - we do want to give a CTA in case there is something actually wrong
  - How do we actually add value for the veteran and not just throw extra stuff at them they don't need?
    - peace of mind
  - How many notifications would be overload?
    - if we have some amount more than 1, then we have to offer ability to manage
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
