
# VA Notify Things to Know

## Random Musings and Useful Stuff from the current PO

### Useful Stuff

**Quick Links**
- [Roadmap - 2024](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699298034766/785e43fca1230ba217651aff759f161c7315c1b5?sender=u3bc5e86ddc154e1c4ba82066)
- [Business Intake board](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/board)
- [Domo Dashboard](https://va-gov.domo.com/page/2040841289)
- [On-call support](https://docs.google.com/spreadsheets/d/1xWzSqRzYpQmQzQGeTud2HCOICHK_EiQc0lGvnHznsZI/edit?usp=sharing)
- [Find a Privacy Officer](https://dvagov.sharepoint.com/sites/OITPrivacyHub/SitePages/Privacy-Officer-Locator-Resources.aspx) 
  

**Compensation and Pension Notifications**
- We are soooo close to launcing.  Track our status [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/Comp%20&%20Pen/README.md)

  
**Forms on VA.gov**
- [List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/in-progress-reminders.md) of forms  on VA.gov the team has completed.  Other teams are creating form confirmations that are not included in this list.
- Once a form has been digitized, the  Digitize Form team passes the baton to the Notify Strike team to trigger an email confirmation after form submission.  Handoff [doc](https://docs.google.com/document/d/1w6p_wvQdWL5llf6LCjv1cbPjn_eZySupmVIGdiMzT-o/edit)
- In-progress [reminders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/in-progress-reminders.md).  We should analyze the effectiveness of these reminders before creating more
- In addition to the forms listed above, the team is working on the 1990 MEB form with the Education team.  Some work needs to be completed by the MEB team before we  proceed.  This work is currently slated for August 2024.

**Decision Letter Notification**
- Benefits team has agreed to integrate with the event bus to produce an event when a decision letter is available 
- UTM track link in the email that points to download letters in VA.gov
- Who is going to write the trigger to VA Notify  API?
- If callbacks are needed will they go to a webhook or will an event be produced on the bus?
- Slack channel #decision-letter-notification-taskforce
- Start with email, then sms or push?


**MHV on VA.gov**
* Appointment Reminders
  - Once MHV preference and email contant information is stored in VA Profile, VEText can begin sending email appointment reminders in addition to SMS.
  - The MHV preference selection will still live on MHV, but once the preference selection is moved to VA.gov (notification settings), a Veterans can choose between email and SMS appointment reminders in one location. (VA.gov)
  - VA Profile will have pre-populated preferences from MHV
  - Email appointment reminder content [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58378)
  - Link to [MHV intake for VA Profile Preferences](https://jira.devops.va.gov/browse/VAPROPARTC-618)
  - MHV sends email confirmations that contain PHI/PII.  VA Notify meet with VHA Privacy Officers and the OGC to allow Veterans to choose the include PHI/PII in unsecured notifications.  
    + Link to signed MOU for PHI/PVAII permissions
    + VA Profile ticket to store  PHI/PII permission
    + A separate ticket with VA.gov authenticated experience will be needed to display the PHI permission in the notifications settings page.
    + In support of the PHI permission work, VA Notify plans to work on personalization redaction...**explain what this is**
* Secure Message Notifications
  - VA Notify currently sends push notifications for secure messaging through the flagship mobile app
  - Once the secure message preference lives in VA Profile, the SM team can onboard to VA Notify to send email notifications.
      + Ensure the email content for the notification points to secure messaging on va.gov
      + Ensure the content is reviewed by by someone on the CAIA team
      + Ask the SM team if they are interested in utm tracking and callbacks
      + If I recall correctly, Jenny was working on feedback about MHV on va.gov.  Maybe there should be a custom no-reply inbox for this and appointment reminders to gather unsolicited feedback?
  - VA Profile will have pre-populated preferences from MHV
  - Sync with VA Profile and Authenticated Experience to launch notifications when the preference is available on VA.gov
  - * Note: * The preference for push notification lives on the app in the mobile device.  The preference for email will live on VA.gov.  Right now we send a push notification for every secure message and most "fall on the floor" as they don't have the app installed.  Is there a smoother way to do this?  
* Medical Records and Images Notifications
  - Once this preference lives in VA Profile, the MR team can onboard to VA Notify to send email notifications.
      + Ensure the email content for the notification points to medical records/images on va.gov
      + Ensure the content is reviewed by by someone on the CAIA team
      + Ask the MR team if they are interested in utm tracking and callbacks
  - VA Profile will have pre-populated preferences from MHV

**BVA**
* Hearing Reminders
  - Currently hearing reminders are triggered by VEText.  The Caseflow team has plans to integrate directly with VA Notify to send hearing reminder SMS notifications
  - A preference for this exists in VA.gov

**AWS**
* Key Rotation
  - IAM key rotation every 60 days. Calendar reminder scheduled every 6 weeks on Tuesdays @ 10:30 ET.  Next reminder is May 7th, 2024
  - [AWS Keys](https://github.com/department-of-veterans-affairs/vanotify-team/blob/master/Process/aws_keys.md)
 
* Pinpoint/SES
  - Email quota - 10M in a 24hour period
  - SMS - $500K/month spending limit

**ICS calendar attachements**
This is supported by the platform, but hasn't been used.  The team would need to a spike to recollect how this works and possibly add this to our Portal.  

**Future Work**
* SMTP - Internal email sending
  - At the moment VA Notify emails, received at a va.gov email address, show as "External".  To avoid this we can send emails to va.gov addresses to smtp.va.gov, instead of using AWS.
  - Chatted with Andew Nesler and he suggested pointing to "partnersmtp.va.gov to test connectivity first.
  - Latest note 7/7/22
    > Being in VAEC would allow for you to send straight to our relays for email delivery (smtp.va.gov). No EXTERNAL tag is appended to emails. All messages are properly signed as VA.gov and fall in compliance with BOD-1801. The only caveat, is that I don’t believe you can use Amazon’s SES (Simple Email Service) as they don’t allow you to modify their SMTP settings to send to us (smtp.va.gov). We have had other system owners experience similar issues. 
    > 
    > Another option would be to change the sender address to a non-VA owned domain and registering the required DNS records through Amazon. Continue using Amazon SES (Simple Email Service) from AWS w/ a dedicated IP. TIC Gateway Engineering can explore options on removing the EXTERNAL tag by the sender IP and the “Friendly-From” address.

 
* CC 




 ### Random Musings and Strong Opinions held Loosely

 **VA Notify is meant to be provider agnostic**


 **VA Notify should stay as pass through system**

 

