
# VA Notify Things to Know

## Random Musings and Useful Stuff from the current PO
Please excuse any typos.  Trying to clean this up on my last day was NOT the best idea 
### Useful Stuff

**Quick Links**
- [Roadmap - 2024](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699298034766/785e43fca1230ba217651aff759f161c7315c1b5?sender=u3bc5e86ddc154e1c4ba82066)
- [Goals - 2024](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/Goals%20and%20Roadmap.md)
- [Business Intake board](https://app.zenhub.com/workspaces/vanotify-business-intake-board-606cc5c49392c900162c3971/board)
- [Domo Dashboard](https://va-gov.domo.com/page/2040841289)
- [Find a Privacy Officer](https://dvagov.sharepoint.com/sites/OITPrivacyHub/SitePages/Privacy-Officer-Locator-Resources.aspx)
- [Notification Preference Metrics](https://app.powerbigov.us/groups/me/apps/15c73e0e-e434-43b7-8efa-3b46dcd859a2/reports/c857d952-e8af-457a-82bc-95b62340e8cf/ReportSection) Hosted by VA Profile, so you may need to request access.
  

**Compensation and Pension Notifications**
- We are soooo close to launcing.  Track our status [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/Comp%20&%20Pen/README.md)
- The team is solely focused on this until launch

  
**Forms on VA.gov**
- [List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/in-progress-reminders.md) of forms  on VA.gov the team has completed.  Other teams have and are creating form confirmations that are not included in this list.
- Once a form has been digitized, the  Digitize Form team passes the baton to the Notify Strike team to trigger an email confirmation after form submission.  Handoff [doc](https://github.com/department-of-veterans-affairs/vanotify-team/blob/master/Strike/Forms_Notify%20Form%20Handoff.pdf)
- In-progress [reminders](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/form%20confirmations/in-progress-reminders.md).  We should analyze the effectiveness of these reminders before creating more
- In addition to the forms listed above, the team is working on the 1990 MEB form with the Education team.  Some work needs to be completed by the MEB team before we  proceed.  This work is currently slated for August 2024.

**Decision Letter Notification**
- Benefits team has agreed to integrate with the event bus to produce an event when a decision letter is available 
- UTM track link in the email that points to download letters in VA.gov
- Who is going to write the trigger to VA Notify API?
- If callbacks are needed will they go to a webhook or will an event be produced on the bus?
- Slack channel #decision-letter-notification-taskforce
- Start with email, then sms or push?

**DORA**
The teams have assessed what level we are for each DORA metric, and how we can to get to "elite" level for each metric.  If there is no benefit to being elite level for a particular metric, we will call that out specifically and state our justiciations.  [Link to our DORA metrics here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-notify/Goals%20and%20Roadmap.md#dora)

**Updates to Domo**
We plan to request updates to our Domo dashboard to make it more user friendly and accurate.  

**Funding/Billing**
Our plan is to keep email notification free of cost.  The [cost](https://aws.amazon.com/ses/pricing/) is relatively low.  For SMS, the plan was to have business lines reimburse us for messaging costs.  At the moment, all SMS notifications sent by VA Notify (except for those funded by VHA) are being paid for by VA Notify. We DO NOT HAVE FAT POCKETS!!!
* How we got here
  - At first we had business lines that wanted to use VA Notify purchase AWS credits.
  - They would fill out the Cloud Credit Purchase form, go through the 2237, FITARA process and funds would be allocate to the VA Notify Cloud Key ID
  - VAEC/ESCO no longer allows the purchase of Cloud Credits
  - We tried to use the Franchise Fund, but ran into a problem with OIT billing OIT
 * The path we are one
   - I get a lot of questions around the kind of funding we accept, or might accept, to send notifications.  IT vs Non-IT, and others I can't recall at the moment.  This shows that business line want to pay for notifications cost, but we don't have a way to receive funds from any business line.
   - Mark Junda is working on ways for us to accept funding, but that's mostly for VHA.
   - It's my hope that whatever ways are chosen, VHA, VBA and other business lines can fully onboard.
 * Billing Reports
   - We did implement billing report in the form of a spreadsheet. I have sent a copy to Mark Junda, Shane Elliot, Chris Johnston, and Jeff Barnes.
   - Since we didn't onboard with the Franchise Fund, billing in our Portal never made it out of the backlog.
    
**MHV on VA.gov**
* Appointment Reminders - **OCTO POC for Appointments Kay Lawyer** (on slack)
  - Once MHV preference and email contant information is stored in VA Profile, VEText can begin sending email appointment reminders in addition to SMS.
  - The MHV preference selection will still live on MHV, but once the preference selection is moved to VA.gov (notification settings), a Veterans can choose between email and SMS appointment reminders in one location. (VA.gov)
  - VA Profile will have pre-populated preferences from MHV
  - Email appointment reminder content [ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/58378)
  - Link to [MHV intake for VA Profile Preferences](https://jira.devops.va.gov/browse/VAPROPARTC-618)
  - MHV sends email confirmations that contain PHI/PII.  VA Notify meet with VHA Privacy Officers and the OGC to allow Veterans to choose the include PHI/PII in unsecured notifications.  
    + A separate ticket with VA.gov authenticated experience will be needed to display the PHI permission in the notifications settings page.
    + In support of the PHI permission work, VA Notify plans to work on personalization redaction to remove any PHI/PII form our DB.  More about that [here](https://app.zenhub.com/workspaces/va-notify-620d21369d810a00146ed9c8/issues/gh/department-of-veterans-affairs/vanotify-team/1107)
* Secure Message Notifications - **OCTO POC for SM is Janie Tankard-Carnock** (on slack)
  - VA Notify currently sends push notifications for secure messaging through the flagship mobile app
  - Once the secure message preference lives in VA Profile, the SM team can onboard to VA Notify to send email notifications.
      + Ensure the email content for the notification points to secure messaging on va.gov
      + Ensure the content is reviewed by by someone on the CAIA team
      + Ask the SM team if they are interested in utm tracking and callbacks
      + If I recall correctly, Jenny was working on feedback about MHV on va.gov.  Maybe there should be a custom no-reply inbox for this and appointment reminders to gather unsolicited feedback?
  - VA Profile will have pre-populated preferences from MHV
  - Sync with VA Profile and Authenticated Experience to launch notifications when the preference is available on VA.gov
  - **Note:** The preference for push notification lives on the app in the mobile device.  The preference for email will live on VA.gov.  Right now we send a push notification for every secure message and most "fall on the floor" as they don't have the app installed.  Is there a smoother way to do this?  
* Medical Records and Images Notifications  - **OCTP POC is Kay Lawyer or Marci McGuire**
  - Once this preference lives in VA Profile, the MR team can onboard to VA Notify to send email notifications.
      + Ensure the email content for the notification points to medical records/images on va.gov
      + Ensure the content is reviewed by by someone on the CAIA team
      + Ask the MR team if they are interested in utm tracking and callbacks
  - VA Profile will have pre-populated preferences from MHV
 * PHI/PII Permission
   - OGC, the VA.gov system steward, a few VHA Privacy Officers and MHV agreed to have Veterans give their permission to send notifications including their PHI/PII over unsecure channels.
   - MOU was signed in July 2023
   - This allows us to include more information in notifications like, appointment reminders.
   - VA Profile has agreed to store this permission, but at the moment, they are awaiting ISSO approval.  [Link to VA Profile ticket](https://jira.devops.va.gov/servicedesk/customer/portal/12/CMDMRP-4905)

**BVA**
* Hearing Reminders
  - Currently hearing reminders are triggered by VEText.  The Caseflow team has plans to integrate directly with VA Notify to send hearing reminder SMS notifications
  - A preference for this exists in VA.gov
* Troubleshooting Quarterly Notifications
  - Currently BVA sends quarterly notifications to Veterans that have an appeal in process.  These notifications inform the Veteran that their appeal is still in process and no further action is needed.
  - There is an issue in one of their systems that is causing the quarterly notification to be sent to mutiple times to Veterans.
  - The next quarterly notification will go out on July 1, 2024 and the team will be helping Caseflow with testing in our staging environment before then.

**Notifications Portal**
* IAM Provisioning - Notify Portal uses IAM SSOi for access control.  We are working with extending our integration with IAM such that when user credentials are removed from IAM, we automatically remove the user from our system.

* Dashboard - We are working on a dashboard in our portal to display metrics that are important to our users.  This is not meant to replace Domo, but augment it.

* Roles - At the moment we have 4 roles:  Viewer, Editor, Service Admin, and Platform Admin. Before we rollout any new functionality/features with roles, the team will need to take review and enhance our Information Architecture.

* Push Notification Templates - We will working on adding push notifications templates to our portal

**Push Notifications**
* Phase 1
  - VA Notify is passing push notification requests from business lines to VEText.
  - Templates for push notifications live in VEText's Portal
  - We want to migrate the mobile app push notification channel fully to VA Notify (digital notification delivery) and VA Profile (Veteran profile and notification preference management).

* Next Phase
  - The push notification plan will depend on when work can be done by VA Profile, VEText, VA Notify, and the Mobile App Team. We will be submitting an intake to VA Profile for them to add the push notification channel, which will include preferences and device registration data (this is comparable to recipient contact data for other channels). VA Notify may implement feature-flagged functionality that can be independently worked in preparation for full integration, e.g. push notification templates, push notification delivery, status tracking, etc. Once we know what VA Profile can schedule storage work, then we can schedule integration work, whether that happens all at once or in phases.
 
* Push Notifications to all users.
  - VA Notify and VEText are working on a new way to implement this using SNS topics

  
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

 
* CC for Emails
  - Like any email platform we need to have the ability to cc another email address on an email notifications.  We will need to ensure we come up with guidance so this feature is not misused.  I see this being useful for Veterans who want to cc their representatives or vice versa.

* Notification Portal Updates
  - It would be helpful for leadership and businesses to be able to see/search on what notifications are already sending through VA Notify in case there's overlap or lessons to be learned for a similar notification. A way to solve for this would be to have the portal, in production, be searchable for key words in content that may bring up a notification you wouldn't have connected to a particular service name/notification title. This may not be the right solution as it may cause the team to maintain two code bases (staging and prod), but I would like to see team address this problem.
  - Assigning Service Admins in Portal.  In the coming months we plan to assign Service Admins to Services where it makes sense.  A Service Admin will act as the "admin" (sorry, I had to) for the Service.  They will be able add users to their services, add custom no-reply email addresses, etc.  This will give users greater power to self serve.
 
**Sunsetted Features**
* Onsite Notifications
  This was taken down in October 2023, but [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications) is writeup on it

 ### Not so Random Musings and Strong Opinions held Loosely

 **VA Notify is meant to be provider agnostic**
 Although VA Notify is heavily integrated with AWS, it's meant to play with multiple providers.  At the moment, Cisco (IMI) is getting FedRamp'd and the provide SMS and voice notifications.


 **VA Notify should stay as pass through system**
 The business logic that leads to a notification, should stay with the business.  If VA Notify starts dipping their hand in others code, it will cause problems in the future and it's not a good engineering practice.

 **Notification Portal**
* It would be great to have Privacy Officers login the portal to review content.  The technical portion of this seems fairly straightforward, but getting Privacy Officers onboard with this idea might be a little tricky

**Notification Funding**
* In an ideal world, notifications to Veterans would be free, or VA would absorb the cost.  But alas, that is not where we are.  
