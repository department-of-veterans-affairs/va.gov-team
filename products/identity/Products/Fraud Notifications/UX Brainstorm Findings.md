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

