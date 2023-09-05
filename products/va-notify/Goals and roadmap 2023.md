# VA Notify: 2023 goals & roadmap

## 1,000 foot view: Support the 2023 OCTO objectives

In our October 2022 offsite, Charles shared 10 objectives for OCTO for the year. The VA Notify team will support any objective that requires a notification, our primary focus is on the following objectives:

- Enhance Veterans' personalized online experience
- Integrate the health portal features into VA.gov

![image](https://github.com/department-of-veterans-affairs/va.gov-team/blob/6372446cc08d209e625a399cfc945537d588cd78/products/va-notify/images/objectives%202023.png)

## 500 foot view: VA Notify team goals 
Our goals are tied to one or more of our themes:
* Self Service / Governance
* Quality / Personal Experience
* Platform Capabilites
* Performance, Monitoring, Maintainability & Security

### Notify Team

#### VEText SMS Migration - Twilio Provider Support
##### Theme: Performance, Monitoring, Maintainability & Security, Platform Capabilities
##### OCTO Objective(s): Enhance Veterans' personalized online experience; Integrate the health portal features into VA.gov

VEText reaches millions of Veterans with pertinent health-related SMS notifications like appointment reminders, open appointment slot management, I am here, etc. VA Notify is working to support these existing notifications and will support multiple notification providers.

In 2022, we moved all United States VEText use cases to send through VA Notify! In early 2023, we will add support for Twilio notification status callbacks, so business lines like VEText can receive updated statuses on their notifications. This work paves the way for integrating with providers like CISCO Webex Connect!

#### Launch Comp & Pen Payment notifications
##### Theme(s): Quality / Personal Experience, Platform Capabilities
##### OCTO Objective(s): Enhance Veterans' personalized online experience

Around 7 million Veterans receive recurring Compensation and Pension Payments monthly and want to confirm when they will receive payments. VBA cannot send VA Notify notification requests related to this, so we are working with the BIA group to receive payment data and trigger notifications to Veterans who wish to receive them. This will reduce calls to the call center and give Veterans the timely information they want.

In 2022, we created a new notification preference with VA Profile and VA.gov teams. We also built a new integration with VA Profile to support the potential reach of this notification (7 million per month). In 2023, we will integrate with BIA’s event bus to receive payment data and build a reusable notification generator to send these notifications before payments are received. 

#### Expand Onsite Notifications with VA.gov
##### Theme(s): Quality / Personal Experience, Self-Service / Governance
##### OCTO Objective(s): Enhance veterans' personalized online experience

As we partner with the Authenticated Experience team, we can scale onsite notifications into a robust and highly-valuable VA.gov feature. We will investigate new notification opportunities to surface in Veterans’ online accounts and opportunities to make this feature more repeatable and self-serviceable as it scales.

#### MyHealtheVet Migration to the VA.gov Portal
##### Theme(s): Quality / Personal Experience, Self Service / Governance
##### OCTO Objective(s): Integrate the health protal features into VA.gov

As MyHealtheVet (MHV) moves its health portal and notification preferences into VA.gov, VA Notify will work with MHV to send those notifications to Veterans. This work may also include other features as needed to support the new portal.

#### Improving Veteran Contact Info: Phone Numbers
##### Theme(s): Platform Capabilities
##### OCTO Objective(s): Enhance Veterans' personalized online experience

VEText, VA Notify, and VA Profile completed joint discovery work in 2022 to unravel the problem of invalid phone numbers and their contribution to undeliverable notifications.

In early 2023, VA Profile is adding functionality to validate all existing phone numbers on file for Veterans and plans to validate them when the Veteran provides them on VA.gov.

Once VA Profile has added this functionality, VA Notify will enhance our contact lookup process to proactively check phone numbers and make updates if we discover a phone number is invalid. This will increase visibility into which phone numbers are invalid and allow other features to be built within VA.gov and VA Profile around flagging invalid contact information and sending notifications to request updates.

#### Enhancing Platform Capabilities
##### Theme(s): Platform Capabilities, Quality / Personal Experience
##### OCTO Objective(s): Enhance Veterans' personalized online experience

To support more types of notifications and expand VA onboarding, we are adding functionality like: EDIPI identifier support, personalisation redaction, explicit consent logic, and more.

### Strike Team

#### Promote templates from Staging to Prod
##### Theme(s): Self Service / Governance

We know from our users that copying template content from our staging environment to our prod environment is a pain point.  Our goal is have users enter content and/or make changes to content in staging then promote that template to production.  This feature will eliminate the pain point and give our team more governance over what gets launched into production and when. 


#### Personilized Dashboard 
##### Theme(s): Self Service / Governance

Currently, in order to gain analytical insight into their notifications, business lines have to log into Datadog, Google Analytics, and/or Domo, which is not an optimal user experience. We want to bring custom reports containing useful analytics front and center within the Self-Service Portal so business lines can view notification performance metrics and use them to optimize notifications over time.  Additionally, we want to add configurable business logic that can proactively alert the corresponding business line and/or VA Notify when notifications are not being triggered (based on historical performance of the notification template). These alerts can be sent to business line technical leads and/or product owners.

## 100 foot view: Q1 CY2023 (January - March) roadmap

### Notify Team

#### Twilio Status Integration 
VA Notify is designed to be provider agnostic. We added support for a new provider, Twilio, to aid in migrating VEText over the VA Notify with the intention to move them to Amazon as the final state. VEText is no longer planning to move from Twilio to Amazon to send SMS notifications, which means VA Notify must complete the integration with Twilio by integrating notification statuses into VA Notify for analytics and tracking purposes.

This work is carrying over from Q3/Q4 CY2022 because the notification provider decision changed from Amazon to Twilio.
 
**Launched**: April 2023

#### Franchise Fund Billing Reports
We will be using the Franchise Fund to bill our business lines for SMS charges and we are working on a format/template for the Franchise Fund to receive a billing statement from us for each business line.

**Launched**: April 2023

#### Explicit Opt-in Functionality
Some business lines like Comp & Pen and QuickSubmit require an explicit opt-in as opposed to a default opt-in strategy. Default opt-in means that we can notify the Veteran as long as they have not explictly asked to be opted-out of the applicable notification. Explicit opt-in means that we only want to notify Veterans if they have explicitly made a selection on VA.gov to receive the applicable notification.

**Launched**: June 2023

#### Restart Compensation and Pension Payment Notification Work
As we wrap up the Twilio status integration work, we have some room to re-engage with the BIA team ingest payment events and trigger disability and pension payment SMS notifications to Veterans.

#### Performance, Monitoring, Maintainability and Security 
To keep our platform performing at its best, we plan to execute the following:
* Platform Upgrades (Flask, Celery, etc.)
* Adding enhanced Datadog Monitoring
* Scalability and disaster recovery improvements
* Automated regression test suite

**This is ongoing work throughout the year.**

### Strike Team

#### Promote to Production (MVP)  - SSUI 
Streamlining the currently cumbersome process of launching notifications from staging to production will greatly reduce manual effort from VA Notify and business lines resulting in significant cost savings over time. It also enables VA Notify and business lines to concentrate more on identifying opportunities to enhance the Veteran online experience and less on teaching and learning how to use tools.

**Expected launch date**: March/April 2023

#### Developer Resources (MVP) - SSUI
To reduce the development time needed to integrate with VA Notify, we want to make sure developers can easily access all the information they need from within the Self-Service Portal.  A ‘Developer’ tab will include three sections: Technical Documentation, API Documentation, and Technical Contacts. ‘Technical Documentation’ informs developers about VA Notify architecture and the services we offer.  ‘API Documentation’ using Swagger helps developers understand the endpoints, methods, parameters, and responses of our API more effectively with interactive documentation. Additionally, ‘Technical Contacts’ lists VA Notify team member names and emails so developers can reach out if they have any questions.

**Expected launch date**: Febuary 2023

#### Service Management  - SSUI 
As VA Notify continues to onboard business lines and notification suites are expanded, it is crucial business lines are able and empowered to manage their own notification services, lest VA Notify end up a support team. Functionality such as copying service details to a clipboard, modifying permitted notification types, inviting and managing users, and managing notifications not only reduces onboarding time, it facilitates the continued evaluation and maintenance of notifications.

**Expected launch date**: February 2023

#### VA.gov Forms
* 22-5490 Education Benefit Application

**Expected launch date**: February 2023

* 22-1990 (Application for VA Education Benefits)

**Expected launch date**: March 2023




## The rest of the year

### Q2 CY2023 (April - June)
### Notify Team

#### Onsite Notification Enhancements
As we introduce new onsite notification use cases in partnership with VA.gov, we will enhance the integration to provide valuable, timely information to Veterans.

**Expected launch date**: Nov 2023

#### Continued work on Compensation and Pension Payment Notifications
We are working to integrate with BIA's event bus to receive payment events and trigger notifications.

**Expected launch date**: Dec 2023

#### VA Profile Phone Validation
After VA Profile adds this new feature, VA Notify will enhance the existing contact info lookup integration to ensure we are only sending to valid Veteran phone numbers.

**Expected launch date**: Dec 2023

#### Expand Veteran Identifier Support: EDIPI
We are working with eBenefits, VADIR, and EVSS to migrate their early comm notifications to VA Notify as they move to VA.gov. We will add support for the EDIPI identifier, so that VA Notify can look up communication preferences and contact information on eBenefit recipients.

**Launched**: Aug 2023

#### Performance, Monitoring, Maintainability and Security
To keep our platform performing at its best, we plan to execute the following:
* Performance Testing
* Continued implementation of Notification Microservices
* Platform Upgrades

**Expected launch date**: June 2023

### Strike Team

#### VA.gov Forms
* 22-5495 (Dependents’ Request for Change of Program or Place of Training)

**Expected launch date**: April 2023

* 22-1995 (Request for Change of Program or Place of Training)

**Expected launch date**: April 2023

* 22-0994 (Application for Veteran Employment Through Technology Education Courses (VET TEC).

**Expected launch date**: May 2023

* 22-10203 (Application for Edith Nourse Rogers STEM Scholarship)

**Expected launch date**: March 2023 (This one may be more complicated because it already has a notification)

#### User Roles - SSUI
Defining permission-based roles within the Self-Service Portal helps business lines maintain higher security practices in line with VA standards when establishing and maintaining teams, especially when team members can turn over frequently.  Business lines will be able to define who within their team can create and edit notifications, customize service details, and publish notifications from staging to production. 

**Expected launch date**: April/May 2023

#### White Listing - SSUI
Whitelisting functionality allows business lines to limit notification recipients to only approved, trusted email addresses and phone numbers during testing. This not only results in improved notification quality, but enhanced security as well.

**Expected launch date**: May/June 2023

### Q3 - Q4 CY2023 (July - December)
### Notify Team


### Strike Team

#### Email Editor Enhancements
Our user research suggests that using markdown to write emails within the Self-Service Portal is a major barrier to entry. Not only do users have to learn markdown to customize notifications, they have to save their notification drafts to preview them. In our mission to create a one-stop shop for business lines to create and maintain notifications, replacing the markdown editor with a free text editor and adding a preview pane is crucial to facilitate the creation of notifications.  

#### Collecting Notification Use Case Details Asynchronously
During onboarding, VA Notify meets with business lines to learn about their processes and identify opportunities to provide useful notifications to Veterans. However, as more business lines express interest, onboarding itself has the potential to become a bottleneck. To further streamline the onboarding process, adding a form to the Self-Service Portal would enable business lines to ask questions and define use cases. This would allow VA Notify to identify potential quick wins, keep track of unsupported use cases, identify common themes, and assess overall platform capability.

#### Service Configurations
When it comes to SMS notifications, not only does text content have to be informative and concise, but Veterans have to trust the sender. Enabling service level administrators to assign 10-DLC/Short codes at a service level for SMS notifications ensures they can send consistent notifications from numbers that Veterans trust.

#### Consolidating Notifications Across VA
Currently, Veterans receive notifications from multiple channels. Messaging across these channels is not consistent or well-balanced, which leads to a fragmented online experience for Veterans. Moving form confirmation notifications from Govdelivery to VA Notify is a step in the right direction because it allows VA Notify to better identify and optimize the overall Veteran online notification experience.
