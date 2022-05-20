# Design considerations based on past research 

The design considerations below are based on various research studies dating from 2014 to 2021 and on feedback gathered from My HealtheVet users via ForeSee in April 2022. Here are the highlights from ForeSee and those studies: 
- [MHV Secure Messaging - User Feedback Highlights](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/SecureMessaging_PriorResearch/MHV_Secure_Messaging_-_User_Feedback_Highlights.pdf)
- [Haun et al Secure Messaging Lit review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/digital-health-modernization/research/SecureMessaging_PriorResearch/Haun%20et%20al%20Secure%20Messaging%20Lit%20review.pdf)

## Based on the research, here are some things to address and consider in Messages designs:

**General:** <br>
### 45-day limit on messages: 
  - Show an info alert that 00 messages have been archived? 
The alert could display on Messages landing page whenever message(s) are archived between the user’s SM sessions. “Since you were last here, 00 of your messages were archived. This means… XYZ.”
  - If we had an alert like this, should it show on other pages besides Messages landing? 
  <br>
  
### Notifications: 
  - Make it clear in the UI where and how to manage SM notification options. (When we move to VANotify, Veterans will manage these options in VA.gov profile.)
  - Consider where besides the Messages landing page to link to manage notification options. Messages left navigation? 
<br>

**Compose message:**<br>
### Timeout and auto save: 
  - The alert that MHV is timing out is not prominent now. Should we change the way the alert displays? 
  - Auto save message in Compose state, using a short time period. 
  - Can we code the site so that typing a message counts as an activity to keep the session active? 
    <br>
    
### Contacts list:<br>
  - Simplify it and show all providers the Veteran can send messages to
    <br>
    
### Save draft and Send buttons:<br>
Ensure that they can’t be confused and that Veterans can easily select Save draft or Send. Some options: 
  - Put them farther from each other or otherwise change placement
  - Consider using secondary button style for Save draft
  - Show confirmation that a message was sent (This also relates to site timeouts.)
    <br>
    
### Provider phone and email: 
    - Consider having this info available to let Veterans know what to call if they don’t get a response fast enough. This info is in [Facility Locator](https://www.va.gov/find-locations), so one possibility is to link there.
    <br>
    
### Templates: 
     Veterans want templates for common messages and questions

### These are from 2014 research, so they may have been resolved:
- Veterans want SM to work like email: spell check, print, formatting options, read receipts
- Veterans want larger font, clear icons
- Veterans want to be able to attach pieces of their medical records to messages 
<br>
  
**Message detail page:** 
### For archived messages: 
On MHV, after the user hits Reply on an archived message, they’re taken to a message detail page with an error message at the top that says, “You cannot reply to a message that is older than 45 days…” 
- Should there be a Reply button on messages you can’t reply to? 
<br> 

**Considerations for when MHV notifications move to VANotify:** 
- Default to emailing notifications instead of requiring the Veteran to turn on SM notifications? 
- Currently the email MHV sends SM notifications to is different from both the the email in MHV profile and the email in VA.gov profile. Discuss and decide how to simplify and clarify the UX.  
<br>

## Past design work on secure messaging 
### Health APT prototypes for Messages: 
- [Desktop prototype](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/a/m1vqVGL/play)
- [Mobile prototype](https://www.sketch.com/s/908b453b-ef8b-4193-b955-ea00f9fd14aa/a/1Kp7O8w/play?hotspots=false)


### For 2019 SM designs by Martha Wilkes, see the “ComparisonSecureMessaging” Word doc linked at the top of the comments in the Github issue below.
- [ComparisonSecureMessaging.docx](https://github.com/department-of-veterans-affairs/digitalservice/files/3975714/ComparisonSecureMessaging.docx)
- [Github issue](https://github.com/department-of-veterans-affairs/digitalservice/issues/1059)

### Original Vets.gov design work (2018 or earlier):
- [These designs are from 2018 or earlier.](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Health%20care/Secure%20Messaging/Design) 
