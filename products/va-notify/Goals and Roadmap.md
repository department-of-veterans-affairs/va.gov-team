# VA Notify goals & roadmap
# 2024
## 1,000 foot view: Support the 2024 OCTO objectives

In our November 2023 offsite, Charles shared 3 objectives for OCTO for the year: Better experiences, stronger platforms, and empowered people. The VA Notify team will primarily focus on the stronger platforms objective.

Key Results:
1. Our platforms hit the “elite” level as defined by DORA: Deployment 
Frequency, Lead Time for Changes, Change Failure Rate, and Time to 
Restore Service.
2. Our platforms measure and improve the satisfaction of their internal users.
3. Our platforms power twice as many interactions compared to last year. 
4. Access reviews of all systems administered by OCTO are completed every 
90 days

### Metrics
Please note, this is for the calendar year 2024.
**Work in Progress**

#### DORA
![image](https://github.com/department-of-veterans-affairs/va.gov-team/assets/99204969/ab6f5714-9876-46ba-a2e5-ccc95896c5dd)

Notify
| Quarter | Deployment Frequency Rating | Lead Time for Changes Rating | Change Failure Rate Rating | Time to Restore Service Rating |
|---------|----------------------|-----------------------|---------------------|-------------------------|
| Q1      | Medium               | Medium                | High                | High                    |
| Q2      |                      |                       |                     |                         |
| Q3      |                      |                       |                     |                         |
| Q4      |                      |                       |                     |                         |

Strike
|Quarter | Deployment Frequency Rating | Lead Time for Changes Rating | Change Failure Rate Rating | Time to Restore Service Rating |
|---------|----------------------|-----------------------|---------------------|-------------------------|
| Q1      |                      |                       |                     |                         |
| Q2      |                      |                       |                     |                         |
| Q3      |                      |                       |                     |                         |
| Q4      |                      |                       |                     |                         |

#### Platform Satisfaction
We send out a survey to our portal and API users quarterly to measure satisfaction

| Quarter | Score |
|---------|-------|
| Q1      |       |
| Q2      |       |
| Q3      |       |
| Q4      |       |

#### API Throughput
Proof of concept performance comparison of v2 and v3 endpoints

|               | Average Response Time | P95 Response Time | Minimum Response Time | Maximum Response Time |
|---------------|-----------------------|-------------------|-----------------------|-----------------------|
| V2 email 3750 | 496ms                 | 813ms             | 496ms                 | 2 seconds             |
| V3 email 3750 | 195ms                 | 417ms             | 180ms                 | 2 seconds             |


## 500 foot view: VA Notify themes
- Self Service Portal Capabilities
- Quality Veteran Experience
- Platform Capabilities
- Performance, Monitoring, Maintainability, and Security

See the [2024 Roadmap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1699298034766/785e43fca1230ba217651aff759f161c7315c1b5?sender=6be1fca1-3e61-4149-969f-f64b2e0db5be) for delivery estimates.

See [Strike Managed Form Notifications](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/form%20confirmations#launched-form-notifications) for launch dates and notifications on the horizon.

### Notify Team Initiatives

#### Comp and Pen Recurring Payment Notifications
##### OCTO OKR: Our platforms power twice as many interactions compared to last year
##### Theme: Quality Veteran Experience

7 million Veterans receive monthly recurring disability/pension payments. VA Notify is building an application to consume payment events from BIP event bus and send SMS notifications to consenting recipients during courtesy daytime hours. The goal is to lower the volume of calls to the call center each month by proactively informing recipients of the status of their payment.

#### Push Broadcast Endpoint
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Platform Capabilities

The Mobile App team wants the ability to send a notification to all subscribed app users for important updates like new features and critical bug fixes.

#### Performance: Caching
##### OCTO OKR: Our platforms power twice as many interactions compared to last year
##### Theme: Performance, Monitoring, Maintainability, and Security

Reducing redundant database calls for API authentication.

#### Tech Debt: SQLAlchemy Upgrade
##### OCTO OKR: N/A
##### Theme: Performance, Monitoring, Maintainability, and Security

Keeping the platform easy to maintain and secure. We’re upgrading SQLAlchemy from v1.4.x to the latest 2.x version.

#### Monitoring: Anomaly Detection
##### OCTO OKR: Our platforms hit the “elite” level as defined by DORA
##### Theme: Performance, Monitoring, Maintainability, and Security

Investigate and implement automated anomaly detection so we can quickly identify issues at scale that could impact our internal users and/or Veterans.

#### Poetry Dependency Management
##### Theme: Performance, Monitoring, Maintainability, and Security

This will reduce manual effort required to maintain package versions and dependencies for the API and make upgrades more consistent and efficient.

#### Scalability: V3 Email and SMS Endpoints
##### OCTO OKR: Our platforms power twice as many interactions compared to last year
##### Theme: Performance, Monitoring, Maintainability, and Security

Our current email and SMS endpoints (v2) rely on many database validation checks, which slows down client requests and limits our ability to scale effectively. We want to decrease the request time and increase our throughput capacity for requests per second. This will increase performance for individual clients, and allow us to have more parallel requests coming through from multiple clients.

#### VA Profile Phone Validation
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Platform Capabilities

VA Notify wants to utilize VA Profile’s latest phone validation functionality, so the notification platform does not attempt to text phone numbers that are not valid, e.g. a landline. This will eliminate costs for text messages we know will never succeed. It will also provide more visibility into the volume and impact of invalid contact information on notification attempts.

#### MHV: PII/PHI Permission
##### Theme: Quality Veteran Experience

MyHealtheVet is migrating features to VA.gov and will also be migrating email notifications to VA Notify, like appointment reminders. This use case is authorized to send critical appointment details that indicate what appointment the reminder is for, and location details so they are able to make travel arrangements to get there. However, we must collect Veteran consent to send PII/PHI through unencrypted email to the email on file. VA Profile plans to store this information and VA Notify will need to check this in addition to the communication item (preference) prior to sending the notification.

#### VA Profile Email Bounce Tracking
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Platform Capabilities

VA Profile is interested in receiving bounce data (hard/permanent and soft/temporary) from notification send attempts so they can store Email Validation metadata, similar to the Phone Validation work, which indicates to partners if contact information is likely to be deliverable. However, unlike with phones, there’s not an existing service to look up emails and provide bounce data. VA Notify will need to send information to VA Profile for analysis and storage and VA Profile will need a new endpoint to provide this additional information for those retrieving contact information.

#### Push Notifications
##### OCTO OKR: N/A
##### Theme: Platform Capabilities

VA Notify currently partners with VEText to deliver push notifications. We will be migrating push functionality to the Self Service Portal for template management, VA Notify API for delivery, and VA Profile for device registration and push preferences. This will enhance the enterprise systems for notification delivery and profile data, while also freeing up VEText functionality and capacity for critical health projects.


### Strike Team Initiatives

#### Email Notifications for Forms
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Quality Veteran Experience

As we look to improve the customer experience, we want to support business lines in sending notifications, whether it be in-progress notifications, submission confirmations or denials, in order to provide clear information and direction to our Veterans and their family and caregivers. In addition to working with business lines to create notifications for their forms, we are also working with the Forms team, in order to support notifications for newly digitized forms. Completed notifications can be found [here for submission confirmations](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/form%20confirmations) and  [here for in-progress notifications](va.gov-team/products/form confirmations/in-progress-reminders.md at master · department-of-veterans-affairs/va.gov-team · GitHub)

#### Promote to Production Wrap-up
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Self Service Portal Capabilities

Since we have moved toward a Viewer only experience in Production, users can now enter content and/or make changes to content in Staging and then promote that template to Production. This initiative provides more governance and safety measures, in order to limit erroneous changes from becoming live.

#### Contact Us Slack Alert
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Self Service Portal Capabilities

Because our Portal sits behind the network, we cannot always review Contact Us requests in real-time. In order to rectify that, we have implemented a Slack Alert to be sent to our internal team, so that Portal users can receive a faster response to their Contact Us submissions.

#### Roles
##### OCTO OKR: N/A
##### Theme: Quality Veteran Experience

As we have implemented Promote to Production and have made Production a Viewer only experience, we need to review and clearly define roles and permissions for both Staging and Production. To that end, we will be refining our current Editor and Viewer roles. We also want to expand upon our self-service capabilities for our users and will be working to define a Service Admin role.

#### Dashboard
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users. 
##### Theme: Performance, Monitoring, Maintainability, and Security

Currently, in order to gain analytical insight into their notifications, business lines have to log into Datadog, Google Analytics, and/or Domo, which is not an optimal user experience. While users can still utilize those for specific use cases, we want to bring custom reports containing useful analytics front and center within the Self-Service Portal so business lines can view notification performance metrics and use them to optimize notifications over time.  Additionally, we want to add configurable business logic that can proactively alert the corresponding business line and/or VA Notify when notifications are not being triggered (based on historical performance of the notification template). These alerts can be sent to business line technical leads and/or product owners.

#### Compliance: Portal V3 Updates
##### OCTO OKR: N/A
##### Theme: Performance, Monitoring, Maintainability, and Security

In order to align with the industry standard V3 style changes, our team will be updating all of our buttons, breadcrumbs, modals, pagination, alerts and accordions to the updated styles.

#### Ruby Conversion for Template Edit Page
##### OCTO OKR: N/A
##### Theme: Performance, Monitoring, Maintainability, and Security

In an effort to better align with app architecture and stay up-to-date with current code standards, our team will be moving from TypeScript to Ruby for our Template Edit Pages for both email and SMS. There will not be a change in functionality or front-end appearance.

#### Action Links
##### OCTO OKR: Our platforms measure and improve the satisfaction of their internal users.
##### Theme: Quality Veteran Experience

In order to enhance the user experience in emails, we want to introduce a link indicator (button) style. To support this, we will be updating the formatting key with the markdown symbol that would put the indicator in a notification. 

# 2023
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

See the [2023 Roadmap]([url](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1674760064516/2683531ab541eb0c0d3a191d6af6c2e1429395dd?sender=u50d72e327dd4d1e5143b5882))

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

#### Email Notifications for Forms
##### Theme(s): Quality Veteran Experience

As we look to improve the customer experience, we want to support business lines in sending notifications to users that have completed their online forms. In addition to working with business lines to create notifications for their forms, we are also working with the Forms team, in order to support notifications for newly digitized forms. Completed notifications can be found [here](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/form%20confirmations).


#### Promote Templates from Staging to Prod
##### Theme(s): Self Service / Governance

We know from our users that copying template content from our staging environment to our prod environment is a pain point.  Our goal is have users enter content and/or make changes to content in staging then promote that template to production.  This feature will eliminate the pain point and give our team more governance over what gets launched into production and when. 


#### Whitelist
##### Theme(s): Self Service / Governance, Performance, Monitoring, & Security

We want to provide clients the ability to manage their own Whitelists in order to safely test notifications. It will allow business lines to limit notification recipients to only approved, trusted email addresses and phone numbers during testing. This not only results in improved notification quality but enhanced security as well by reducing client testing delays, which varied from hours to days previously and eliminating all manual effort for internal staff - saving 30 minutes per requested change.


#### Personalized Dashboard 
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

#### Performance, Monitoring, Maintainability and Security 
To keep our platform performing at its best, we plan to execute the following:
* Platform Upgrades (Flask, Celery, etc.)
* Adding enhanced Datadog Monitoring

**This is ongoing work throughout the year.**

### Strike Team

#### Developer Resources (MVP) - SSUI
To reduce the development time needed to integrate with VA Notify, we want to make sure developers can easily access all the information they need from within the Self-Service Portal.  A ‘Developer’ tab will include three sections: Technical Documentation, API Documentation, and Technical Contacts. ‘Technical Documentation’ informs developers about VA Notify architecture and the services we offer.  ‘API Documentation’ using Swagger helps developers understand the endpoints, methods, parameters, and responses of our API more effectively with interactive documentation. Additionally, ‘Technical Contacts’ lists VA Notify team member names and emails so developers can reach out if they have any questions.

**Launched**: Febuary 2023

#### Service Management  - SSUI 
As VA Notify continues to onboard business lines and notification suites are expanded, it is crucial business lines are able and empowered to manage their own notification services, lest VA Notify end up a support team. Functionality such as copying service details to a clipboard, modifying permitted notification types, inviting and managing users, and managing notifications not only reduces onboarding time, it facilitates the continued evaluation and maintenance of notifications.

**Launched**: January/February 2023

## The rest of the year

### Q2 CY2023 (April - June)
### Notify Team

#### Explicit Opt-in Functionality
Some business lines like Comp & Pen and QuickSubmit require an explicit opt-in as opposed to a default opt-in strategy. Default opt-in means that we can notify the Veteran as long as they have not explictly asked to be opted-out of the applicable notification. Explicit opt-in means that we only want to notify Veterans if they have explicitly made a selection on VA.gov to receive the applicable notification.

**Launched**: June 2023

#### Restart Compensation and Pension Payment Notification Work
As we wrap up the Twilio status integration work, we have some room to re-engage with the BIA team ingest payment events and trigger disability and pension payment SMS notifications to Veterans.

**Not launched in 2023**

#### Performance, Monitoring, Maintainability and Security
To keep our platform performing at its best, we plan to execute the following:
* Scalability and disaster recovery improvements

**This is ongoing work throughout the year.**

### Strike Team

#### Promote to Production (MVP)  - SSUI 
Streamlining the currently cumbersome process of launching notifications from staging to production will greatly reduce manual effort from VA Notify and business lines resulting in significant cost savings over time. It also enables VA Notify and business lines to concentrate more on identifying opportunities to enhance the Veteran online experience and less on teaching and learning how to use tools.

**Launched**: June 2023

#### Whitelist (MVP) - SSUI
Whitelisting functionality allows business lines to limit notification recipients to only approved, trusted email addresses and phone numbers during testing. This not only results in improved notification quality, but enhanced security as well.

**Launched**: June 2023

### Q3 - Q4 CY2023 (July - December)
### Notify Team

#### Expand Veteran Identifier Support: EDIPI
We are working with eBenefits, VADIR, and EVSS to migrate their early comm notifications to VA Notify as they move to VA.gov. We will add support for the EDIPI identifier, so that VA Notify can look up communication preferences and contact information on eBenefit recipients.

**Launched**: Aug 2023

#### V3 Email and SMS Endpoints
As notification volume rapidly increases through new notifications, notification growth, and notification migrations, VA Notify is enhancing endpoint performance.

**Not launched in 2023**

#### Continued work on Compensation and Pension Payment Notifications
We are working to integrate with BIA's event bus to receive payment events and trigger notifications.

**Not launched in 2023**

#### Performance, Monitoring, Maintainability and Security
To keep our platform performing at its best, we plan to execute the following:
* Scalability and disaster recovery improvements
* Database upgrades
* Regression test suite automation

**This is ongoing work throughout the year.**

### Strike Team

#### Promote to Production (Phase 1) - SSUI - Email for Admins
Streamlining the currently cumbersome process of launching notifications from staging to production will greatly reduce manual effort from VA Notify and business lines resulting in significant cost savings over time. It also enables VA Notify and business lines to concentrate more on identifying opportunities to enhance the Veteran online experience and less on teaching and learning how to use tools.

**Launched**: July 2023

#### Promote to Production (Phase 1) - SSUI - Email for Editors
Streamlining the currently cumbersome process of launching notifications from staging to production will greatly reduce manual effort from VA Notify and business lines resulting in significant cost savings over time. It also enables VA Notify and business lines to concentrate more on identifying opportunities to enhance the Veteran online experience and less on teaching and learning how to use tools.

**Launched**: September 2023

#### Whitelist (Post-MVP) - SSUI
Whitelisting functionality allows business lines to limit notification recipients to only approved, trusted email addresses and phone numbers during testing. This not only results in improved notification quality, but enhanced security as well.

**Launched**: October 2023

#### Promote to Production (Phase 3) - SSUI - SMS for Admins
Streamlining the currently cumbersome process of launching notifications from staging to production will greatly reduce manual effort from VA Notify and business lines resulting in significant cost savings over time. It also enables VA Notify and business lines to concentrate more on identifying opportunities to enhance the Veteran online experience and less on teaching and learning how to use tools.

**Launched**: October 2023

#### Promote to Production (Phase 4) - SSUI - SMS for Editors
Streamlining the currently cumbersome process of launching notifications from staging to production will greatly reduce manual effort from VA Notify and business lines resulting in significant cost savings over time. It also enables VA Notify and business lines to concentrate more on identifying opportunities to enhance the Veteran online experience and less on teaching and learning how to use tools.

**Launched**: November 2023

## Deprioritized for 2023

### Notify Team

#### VA Profile Phone Validation
After VA Profile adds this new feature, VA Notify will enhance the existing contact info lookup integration to ensure we are only sending to valid Veteran phone numbers.

#### Onsite Notification Enhancements
As we introduce new onsite notification use cases in partnership with VA.gov, we will enhance the integration to provide valuable, timely information to Veterans.

#### Support for Mass/Bulk Notifications

VA Notify currently supports automated, individualized notification events. However, other use cases may be ad-hoc or one-time and should send to a defined list of recipients. VA Notify will  research these opportunities within the VA and build functionality to support these one-off notifications.

#### Email Encryption

Some notification use cases include sensitive information like PII or PHI. We cannot send this through non-encrypted or non-authenticated channels like email or SMS. We will investigate options to address this problem so Veterans can get the information they need through a secure, digital solution. 

#### Support for Cisco Webex Connect (IMImobile)

The Veterans Experience Office (VEO) is furthering its partnership with Cisco to address AudioCARE needs for Veteran prescription and appointment use cases. As the enterprise notification solution for VA, VA Notify will continue to be provider agnostic. VA Notify currently supports Amazon services and Twilio and will add support for Cisco to ensure we can meet notification needs for all VA business lines, regardless of the provider.

#### Support for CC/BCC on Email Notifications

The need for CC/BCC functionality frequently surfaces when discussing potential use cases with business lines. For example, this functionality is essential when considering the PACT Act, as copied VSO’s, VSR’s, and/or caregivers can receive the exact same information the Veteran receives and immediately provide guidance, support, and advocacy throughout the review process. Another potential benefit of CC/BCC is the collection of feedback from copied parties to improve notifications as processes change.


#### SMTP/Internal Notification Support
We want the notification experience to be the same regardless of the recipient having an external email address or an internal VA.gov address. Currently VA Notify emails are labelled as "EXTERNAL" when sent to va.gov recipients.

#### Multi-Account Support for Providers
As VA business lines acquire their own provider account(s), VA Notify must add support to send notifications through the appropriate provider and account (Amazon Pinpoint, Twilio, Cisco, etc.).

#### Push Notification Phase 2
VA Notify currently partners with VEText to send push notifications for the Flagship Mobile App, which we released in 2022. VA Notify has multiple phases planned to enhance this integration and send these notifications directly with Amazon.

### Strike Team

#### Secondary User Roles - SSUI
Defining permission-based roles within the Self-Service Portal helps business lines maintain higher security practices in line with VA standards when establishing and maintaining teams, especially when team members can turn over frequently.  Business lines will be able to define who within their team can create and edit notifications, customize service details, and publish notifications from staging to production. 

#### Email Editor Enhancements
Our user research suggests that using markdown to write emails within the Self-Service Portal is a major barrier to entry. Not only do users have to learn markdown to customize notifications, they have to save their notification drafts to preview them. In our mission to create a one-stop shop for business lines to create and maintain notifications, replacing the markdown editor with a free text editor and adding a preview pane is crucial to facilitate the creation of notifications.  

#### Collecting Notification Use Case Details Asynchronously
During onboarding, VA Notify meets with business lines to learn about their processes and identify opportunities to provide useful notifications to Veterans. However, as more business lines express interest, onboarding itself has the potential to become a bottleneck. To further streamline the onboarding process, adding a form to the Self-Service Portal would enable business lines to ask questions and define use cases. This would allow VA Notify to identify potential quick wins, keep track of unsupported use cases, identify common themes, and assess overall platform capability.

#### Service Configurations
When it comes to SMS notifications, not only does text content have to be informative and concise, but Veterans have to trust the sender. Enabling service level administrators to assign 10-DLC/Short codes at a service level for SMS notifications ensures they can send consistent notifications from numbers that Veterans trust.
