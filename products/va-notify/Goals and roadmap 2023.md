# VA Notify: 2023 goals & roadmap

## 1,000 foot view: Support the 2023 OCTO objectives

In our October 2022 offsite, Charles shared 10 objectives for OCTO for the year. The VA Notify team will primarily support the following objectives:

- Enhance Veterans' personalized online experience
- Integrate the health portal features into VA.gov


## 500 foot view: VA Notify team goals 
Our goals are tied to one or more of our themes:
* Self Service / Governance
* Quality / Personal Experience
* Platform Capabilites
* Performance, Monitoring & Security

### VEText SMS Migration - Twilio Provider Support
#### Theme: Performance, Monitoring & Security, Platform Capabilities
#### OCTO Objective(s): Enhance Veterans' personalized online experience; Integrate the health portal features into VA.gov

VEText reaches millions of Veterans with pertinent health-related SMS notifications like appointment reminders, open appointment slot management, I am here, etc. VA Notify is working to support these existing notifications and will support multiple notification providers.

In 2022, we moved all United States VEText use cases to send through VA Notify! In early 2023, we will add support for Twilio notification status callbacks, so business lines like VEText can receive updated statuses on their notifications. This work paves the way for integrating with providers like CISCO Webex Connect!

### Launch Comp & Pen Payment notifications
#### Theme(s): Quality / Personal Experience, Platform Capabilities
#### OCTO Objective(s): Enhance Veterans' personalized online experience

Around 7 million Veterans receive recurring Compensation and Pension Payments monthly and want to confirm when they will receive payments. VBA cannot send VA Notify notification requests related to this, so we are working with the BIA group to receive payment data and trigger notifications to Veterans who wish to receive them. This will reduce calls to the call center and give Veterans the timely information they want.

In 2022, we created a new notification preference with VA Profile and VA.gov teams. We also built a new integration with VA Profile to support the potential reach of this notification (7 million per month). In 2023, we will integrate with BIA’s event bus to receive payment data and build a reusable notification generator to send these notifications before payments are received. 

### Expand Onsite Notifications with VA.gov
#### Theme(s): Quality / Personal Experience, Self-Service / Governance
#### OCTO Objective(s): Enhance veterans' personalized online experience

As we partner with the Authenticated Experience team, we can scale onsite notifications into a robust and highly-valuable VA.gov feature. We will investigate new notification opportunities to surface in Veterans’ online accounts and opportunities to make this feature more repeatable and self-serviceable as it scales.

### MyHealtheVet Migration to the VA.gov Portal
#### Theme(s): Quality / Personal Experience, Self Service / Governance
#### OCTO Objective(s): Integrate the health protal features into VA.gov

As MyHealtheVet (MHV) moves its health portal and notification preferences into VA.gov, VA Notify will work with MHV to send those notifications to Veterans. This work may also include other features as needed to support the new portal.

### Improving Veteran Contact Info: Phone Numbers
#### Theme(s): Platform Capabilities
#### OCTO Objective(s): Enhance Veterans' personalized online experience

VEText, VA Notify, and VA Profile completed joint discovery work in 2022 to unravel the problem of invalid phone numbers and their contribution to undeliverable notifications.

In early 2023, VA Profile is adding functionality to validate all existing phone numbers on file for Veterans and plans to validate them when the Veteran provides them on VA.gov.

Once VA Profile has added this functionality, VA Notify will enhance our contact lookup process to proactively check phone numbers and make updates if we discover a phone number is invalid. This will increase visibility into which phone numbers are invalid and allow other features to be built within VA.gov and VA Profile around flagging invalid contact information and sending notifications to request updates.

### Enhancing the Claim Experience - VES Event Bus
#### Theme(s): Platform Capabilities, Quality / Personal Experience
#### OCTO Objective(s): Enhance Veterans' personalized online experience

Uncertainty around the claims review process is a significant pain point for Veterans. VA Notify intends to resolve this by working with VBMS, VA.gov, and the claims status tool to evaluate the end to end Veteran experience and ensure informative notifications are sent to Veterans when a claim is in review, supplemental materials are needed, documents are available to review, claim status has changed, and a decision has been made.  There are also opportunities to notify Veterans should they appeal a decision on a claim.  VA Notify collaborates with Claim stakeholders and partners to add and enhance notification opportunities for Veterans. 

### Support for Mass/Bulk Notifications
#### Theme(s): Platform Capabilities
#### OCTO Objective(s): Enhance Veterans' personalized online experience

VA Notify currently supports automated, individualized notification events. However, other use cases may be ad-hoc or one-time and should send to a defined list of recipients. VA Notify will  research these opportunities within the VA and build functionality to support these one-off notifications.

### Secure Messaging
#### Theme(s): Platform Capabilities, Quality / Personal Experience, Performance, Monitoring, & Security
#### OCTO Objective(s): Enhance Veterans' personalized online experience

Some notification use cases include sensitive information like PII or PHI. We cannot send this through non-encrypted or non-authenticated channels like email or SMS. We will investigate options to address this problem so Veterans can get the information they need through a secure, digital solution. 

### Support for Cisco Webex Connect (IMImobile)
#### Theme(s): Quality / Personal Experience, Platform Capabilities
#### OCTO Objective(s): Enhance Veterans' personalized online experience

The Veterans Experience Office (VEO) is furthering its partnership with Cisco to address AudioCARE needs for Veteran prescription and appointment use cases. As the enterprise notification solution for VA, VA Notify will continue to be provider agnostic. VA Notify currently supports Amazon services and Twilio and will add support for Cisco to ensure we can meet notification needs for all VA business lines, regardless of the provider.

### Promote templates from Staging to Prod
#### Theme(s): Self Service / Governance

We know from our users that copying template content from our staging environment to our prod environment is a pain point.  Our goal is have users enter content and/or make changes to content in staging then promote that template to production.  This feature will eliminate the pain point and give our team more governance over what gets launched into production and when.  

## 100 foot view: Q1 CY2023 (January - March) roadmap

### Notify Team

#### Twilio Status Integration 
VA Notify is designed to be provider agnostic. We added support for a new provider, Twilio, to aid in migrating VEText over the VA Notify with the intention to move them to Amazon as the final state. VEText is no longer planning to move from Twilio to Amazon to send SMS notifications, which means VA Notify must complete the integration with Twilio by integrating notification statuses into VA Notify for analytics and tracking purposes.

This work is carrying over from Q3/Q4 CY2022 because the notification provider decision changed from Amazon to Twilio.
 
**Expected launch date**: March 2023

#### Franchise Fund Billing Reports
We will be using the Franchise Fund to bill our business lines for SMS charges and we are working on a format/template for the Franchise Fund to receive a billing statement from us for each business line.

**Expected launch date**: March 2023

#### Explicit Opt-in Functionality
Some business lines like Comp & Pen and QuickSubmit require an explicit opt-in as opposed to a default opt-in strategy. Default opt-in means that we can notify the Veteran as long as they have not explictly asked to be opted-out of the applicable notification. Explicit opt-in means that we only want to notify Veterans if they have explicitly made a selection on VA.gov to receive the applicable notification.

#### Restart Compensation and Pension Payment Notification Work
As we wrap up the Twilio status integration work, we have some room to re-engage with the BIA team ingest payment events and trigger disability and pension payment SMS notifications to Veterans.

**Expected launch date**: July 2023

#### Performance, Monitoring and Security 
To keep our platform performing at its best, we plan to execute the following:
* Platform Upgrades (Flask, Celery, etc.)
* Adding enhanced Datadog Monitoring
* Implement Notification Microservices, starting with Push Notifications to improve performance

**Expected launch date**: March 2023

### Strike Team

#### Promote to Production (MVP) - SSUI
Currently our business line users create content in staging, then copy the content, login to production, create a template and paste the content there.  To make this process seamless, we will implement a promote to prod like experience for our users.  

**Expected launch date**:

#### Service Management  - SSUI 
words go here

**Expected launch date**:

#### User Roles - SSUI
words go here

**Expected launch date**:

#### White Listing - SSUI
words go here

**Expected launch date**:

#### VA.gov Forms
* 22-5490 Education Benefit Application

## The rest of the year

### Q2 CY2023 (April - June)
### Notify Team

#### Onsite Notification Enhancements
As we introduce new onsite notification use cases in partnership with VA.gov, we will enhance the integration to provide valuable, timely information to Veterans.

**Expected launch date**: April 2023

#### Continued work on Compensation and Pension Payment Notifications
We are working to integrate with BIA's event bus to receive payment events and trigger notifications.

**Expected launch date**: July 2023

#### VA Profile Phone Validation
After VA Profile adds this new feature, VA Notify will enhance the existing contact info lookup integration to ensure we are only sending to valid Veteran phone numbers.

**Expected launch date**: June 2023

#### Expand Veteran Identifier Support: EDIPI
We are working with eBenefits, VADIR, and EVSS to migrate their early comm notifications to VA Notify as they move to VA.gov. We will add support for the EDIPI identifier, so that VA Notify can look up communication preferences and contact information on eBenefit recipients.

**Expected launch date**: May 2023

#### Performance, Monitoring and Security
To keep our platform performing at its best, we plan to execute the following:
* Performance Testing
* Continued implementation of Notification Microservices
* Platform Upgrades

**Expected launch date**: June 2023

### Q3 - Q4 CY2023 (July - December)
### Notify Team
#### CISCO webex connect integration
We are expanding our notification provider integrations to include Cisco, so we can support more VA notification use cases like VEO AudioCARE.

#### Secure Messaging
We will implement a secure solution to deliver sensitive information to Veterans digitally.

#### SMTP/Internal Notification Support
We want the notification experience to be the same regardless of the recipient having an external email address or an internal VA.gov address. Currently VA Notify emails are labelled as "EXTERNAL" when sent to va.gov recipients.

#### Multi-Account Support for Providers
As VA business lines acquire their own provider account(s), VA Notify must add support to send notifications through the appropriate provider and account (Amazon Pinpoint, Twilio, Cisco, etc.).

#### Push Notification Phase 2
VA Notify currently partners with VEText to send push notifications for the Flagship Mobile App, which we released in 2022. VA Notify has multiple phases planned to enhance this integration and send these notifications directly with Amazon.
