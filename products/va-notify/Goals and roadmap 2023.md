# VA Notify: 2023 goals & roadmap

## 1,000 foot view: Support the 2023 OCTO objectives

In our October 2022 offsite, Charles shared 10 objectives for OCTO for the year. The VA Notify team will primarily support the following objectives:

- Enhance veterans' personalized online experience
- Integrate the health protal features into VA.gov


## 500 foot view: VA Notify team goals 
Our goals are tied to one or more of our themes:
* Self Service / Governance
* Quality / Personal Experience
* Platform capabilites
* Performance, Monitoring & Security

### VEText Migration Wrap-up
#### Theme: 

As we close out our VEText migration, we need a way to get status updates and callbacks from Twilio.

### Launch Comp & Pen Payment notifications
#### Theme(s): Quality / Personal Experiance, Platform Capabilities

As we wrap up Phase 1 of the VEText migration, we have some room to re-engage with the BIA team to resume work.  

### Expand onsite notifications
#### Theme(s): Quality / Personal Experiance, Self Service / Governance

As we partner with the authenticated experience team, we have the opportunity to scale onsite notifications into a robust and highly-valuable VA.gov feature. We'll be investigating the best way to display this feature in SSUI and how best to support the authenticated experience team in adding new notifications.

### Promote templates from Staging to Prod
#### Theme(s): Self Service / Governance

We know from our customers that copy template content from our staging environment to our prod environment is a pain point.  Our goal is have users enter content and/or make changes to content in staging then promote that template to production.  This feature will eliminate the pain point and give our team more governance over what gets launched into production and when.

### Support MHV on VA.gov Portal
#### Theme(s): Quality / Personal Experiance, Self Service / Governance

As MHV moves it's notification preferences into VA.gov we will start sending those notifications for MHV.  This work  may also include other notifications as needed to support the new portal

### Phone Number Lookup/Validation
#### Theme(s): Platform Capabilities

VA Profile is in the process of adding a flag to the Veteran contact info to determine if the mobile number in the profile is an actual mobile number.  Our goal for this MVP is to integrate with this feature to check the flag before sending a text message.  This will allow us to avoid sending text messages to phone numbers that are not mobile numbers and save us and our business lines time and money.  

## 100 foot view: Q1 CY2023 (January - March) roadmap

### Notify Team

#### Twilio Status Integration 

**OCTO objective**: Not tied to an OCTO objective

This work is carrying over from Q3/Q4 CY2022.
 
**Expected launch date**: 

#### Franchise Fund Billing Reports

**OCTO objective**: Not tied to an OCTO objective



**Expected launch date**: 

#### Restart Compensation and Pension Payment Notification Work


**OCTO objective**: Not tied to an OCTO objective

#### Performance, Monitoring and Security 
To keep our platform performing at it's best, we plan to execute the following:
* Datadog Application Performance Monitoring (APM)
* Other monitoring Enhancements
* Platform Upgrades (Flask, Celery, etc.)
* Microservices for Push Notifications

**OCTO objective**: Not tied to an OCTO objective

**Expected launch date**:

### Strike team

#### Frontend: [Finish accessibility updates](https://app.zenhub.com/workspaces/vft-59c95ae5fda7577a9b3184f8/issues/gh/department-of-veterans-affairs/va.gov-team/46756)

There are quite a few design updates that are complete and need to be implemented. We should wrap up frontend implementation on these tickets ahead of moving on to other work.

#### Backend: [Update direct deposit for comp & pen section so it points to Lighthouse integration](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/identity-personalization/direct-deposit/evss-lighthouse-migration/README.md)

Direct deposit for comp & pen information on VA.gov is currently supported by EVSS. However, EVSS is going away in 2023 (need to confirm date), and EVSS integrations are in the process of moving over to the Lighthouse platform. According to [Nichole Harris](https://dsva.slack.com/archives/C8R3JS8BU/p1670604479375849?thread_ts=1670603198.743219&cid=C8R3JS8BU), the direct deposit information is almost in their Sandbox and will hopefully be ready for their production environment in January 2023. At this point, we can start moving over our integration from EVSS to Lighthouse. We'll work closely with Lighthouse to get this funtionality updated, tested, and launched.

**Expected launch date**: Assuming this is just a backend effort, this can likely launch before the end of Q1 CY2023.

#### Research/Design: [Adding email as a channel to notification preferences](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/profile/notification-preferences/discovery-and-research/add-email-channel)

We'll eventually need to add email as a channel for notification preferences, we're just not sure when. Liz has created some preliminary mockups that need to be refined and tested in order to to determine whether this approach is usable and scalable long-term. 

#### Low lift: Add QuickSubmit notification preference

Quick Submit is a platform that supports the claims application process and allows users to upload documents. With regards to notifications, they need a preference that allows them to opt-in and out of notifications as to whether there is a new letter to view in the Quick Submit app. This is a text notification, so this should be easy for us to support with our existing VA Profile integration. We'll work with them to support this preferernce on VA.gov. 

**Expected launch date**: Before the end of Q1 CY2023.

### Cross-portfolio

#### [Support generative logged-in IA/navigation research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ia-and-navigation/2023-wayfinding-research/README.md)

**OCTO objectives**: Refresh the VA.gov homepage and information architecture

We're aware of some high-level problems people have navigating the logged in experience on VA.gov -- eg. if a link isn't on the homepage or My VA, people tend to have trouble finding what they need. However, we've never conducted more holistic research that evaluates navigating the logged in experience. This research effort aims to dive deeper into users' problems with and expectations around navigating VA.gov once they're signed in. We'll be partnering with Mikki to conduct a research review, analytics review, and user research that will be used to inform work throughout this calendar year.

## The rest of the year

### Q2 CY2023 (April - June)



### Q3 - Q4 CY2023 (July - December)

