# VA Notify: 2023 goals & roadmap

## 1,000 foot view: Support the 2023 OCTO objectives

In our October 2022 offsite, Charles shared 10 objectives for OCTO for the year. The VA Notify team will primarily support the following objectives:

- Enhance veterans' personalized online experience
- Integrate the health protal features into VA.gov


## 500 foot view: VA Notify team goals 
Our goals are tied to one or more of our themes:
* Self Service / Governance
* Quality / Personal Experience
* Platform Capabilites
* Performance, Monitoring & Security

### VEText Migration Wrap-up
#### Theme: Performance, Monitoring & Security, Platform Capabilities

As we close out our VEText migration, we need a way to get status updates and callbacks from Twilio.

### Launch Comp & Pen Payment notifications
#### Theme(s): Quality / Personal Experiance, Platform Capabilities

Last year we began working with the BIA team, to integrate with their Kafka event stream in order, to send SMSs to Veterans regarding their monthly compensation and pension payments.  We will continue and complete the remaining work this year.  

### Expand onsite notifications
#### Theme(s): Quality / Personal Experiance, Self Service / Governance
#### OCTO Objective(s): Enhance veterans' personalized online experience

As we partner with the authenticated experience team, we have the opportunity to scale onsite notifications into a robust and highly-valuable VA.gov feature. We'll be investigating the best way to display this feature in SSUI and how best to support the authenticated experience team in adding new notifications.

### Promote templates from Staging to Prod
#### Theme(s): Self Service / Governance

We know from our users that copying template content from our staging environment to our prod environment is a pain point.  Our goal is have users enter content and/or make changes to content in staging then promote that template to production.  This feature will eliminate the pain point and give our team more governance over what gets launched into production and when.

### Support MHV on VA.gov Portal
#### Theme(s): Quality / Personal Experiance, Self Service / Governance
#### OCTO Objective(s): Integrate the health protal features into VA.gov

As MHV moves it's notification preferences into VA.gov we will start sending those notifications for MHV.  This work  may also include other notifications as needed to support the new portal

### Phone Number Lookup/Validation
#### Theme(s): Platform Capabilities

VA Profile is in the process of adding a flag to the Veteran contact info to determine if the mobile number in the profile is an actual mobile number.  Our goal for this MVP is to integrate with this feature to check the flag before sending a text message.  This will allow us to avoid sending text messages to phone numbers that are not mobile numbers and save us and our business lines time and money.  

## 100 foot view: Q1 CY2023 (January - March) roadmap

### Notify Team

#### Twilio Status Integration 
VA Notify is designed to be provider agnostic. We added support for a new provider, Twilio, to aid in migrating VEText over the VA Notify with the intention to move them to Amazon as the final state. VEText is no longer planning to move from Twilio to Amazon to send SMS notifications, which means VA Notify must complete the integration with Twilio by integrating notification statuses into VA Notify for analytics and tracking purposes.

This work is carrying over from Q3/Q4 CY2022.
 
**Expected launch date**: March 22, 2023

#### Franchise Fund Billing Reports
We will be using the Franchise Fund to bill our business lines for SMS charges and we are working on a format/template for the Franchise Fund to receive a billing statement from us for each business line.

**Expected launch date**: March 6, 2023

#### Restart Compensation and Pension Payment Notification Work
As we wrap up the Twilio status integration work, we have some room to re-engage with the BIA team ingest payment events and trigger disability and pension payment SMS notifications to Veterans.

**Expected launch date**: July 31, 2023

#### Performance, Monitoring and Security 
To keep our platform performing at it's best, we plan to execute the following:
* Platform Upgrades (Flask, Celery, etc.)

**Expected launch date**: April 26, 2023

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

#### Performance, Monitoring and Security 
To keep our platform performing at it's best, we plan to execute the following:
* Datadog Application Performance Monitoring (APM)
* Other monitoring Enhancements
* Microservices for Push Notifications


### Q3 - Q4 CY2023 (July - December)

