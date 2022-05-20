# Design considerations based on past research 

The design considerations below are based on various research studies dating from 2014 to 2021 and on feedback gathered from My HealtheVet users via ForeSee in April 2022. Here are the highlights from ForeSee and those studies: 
- [MHV Secure Messaging - User Feedback Highlights](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/SecureMessaging_PriorResearch/MHV_Secure_Messaging_-_User_Feedback_Highlights.pdf)
- [Haun et al Secure Messaging Lit review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/SecureMessaging_PriorResearch/Haun%20et%20al%20Secure%20Messaging%20Lit%20review.pdf)

## Based on the research, here are some things to address and consider in Messages designs:

1. **General:** <br>
45-day limit on messages: 
— Show an info alert that 00 messages have been archived? 
The alert could display on Messages landing page whenever message(s) are archived between the user’s SM sessions. “Since you were last here, 00 of your messages were archived. This means… XYZ.” Should an alert like this show on other pages besides Messages landing? 

Notifications: 
— Make it clear in the UI where and how to manage SM notification options. (When we move to VANotify, this will be VA.gov profile.) And consider where besides Messages landing page to link to manage notification options. Left nav? 

2. **Compose message:**
While on Compose screen: 
— Alert the user before site times out. This alert is not prominent now, per ForeSee. Should we change the way the alert displays? 
— Auto save message in Compose state, using a short time period. (This helps with site timeouts.)

Contacts list:
— Simplify it and show all providers the Veteran can send messages to

Save draft and Send buttons: 
Ensure that they can’t be mixed up. Options: 
— Put them farther from each other or otherwise change placement
— Consider using secondary button style for Save draft
— Show confirmation that a message was sent (This also relates to site timeouts.)

Provider phone and email: 
— Consider having this info available to let Veterans know what to call if they don’t get a response fast enough. This info is in Facility Locator, so one possibility is to link there: https://www.va.gov/find-locations

— Site timeouts: 
Can we code the site so that typing a message counts as an activity? This could be one reason users aren’t aware of timeouts now (in addition to the alert banner not being very visible).

— Templates: 
Veterans want templates for common messages and questions

— From 2014 research, so may have been resolved:
— — Veterans want SM to work like email: spell check, print, formatting options, read receipts
— — Veterans want larger font, clear icons.  
— — Veterans want to be able to attach pieces of their medical records to messages. 

3. *Message detail page:* 
For archived messages: 
On MHV, after the user hits Reply on an archived message, they’re taken to a message detail page with an error message at the top that says, “You cannot reply to a message that is older than 45 days…” 
— Should there be a Reply button on messages you can’t reply to? 

4. *Considerations for when MHV notifications move to VANotify:* 
— Default to emailing notifications instead of requiring the Veteran to turn on SM notifications? 
— Currently the email MHV sends SM notifications to is different from both the the email in MHV profile and the email in VA.gov profile. Discuss and decide how to simplify and clarify the UX.  

## Past design work on secure messaging 
*Health APT prototypes for Messages:* 
* Desktop:
https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/a/m1vqVGL/play

* Mobile: https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/a/1Kp7O8w/play?hotspots=false


*For 2019 SM designs by Martha*, see the “ComparisonSecureMessaging” Word doc linked at the top of the comments in the Github issue below.
* Doc: 
https://github.com/department-of-veterans-affairs/digitalservice/files/3975714/ComparisonSecureMessaging.docx 

* Github issue: 
https://github.com/department-of-veterans-affairs/digitalservice/issues/1059

*Original Vets.gov design work (2018 or earlier):* 
https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Health%20care/Secure%20Messaging/Design  
