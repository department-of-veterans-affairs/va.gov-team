# VANotify Platform

## Our Mission
Improve the overall experience and quality of communications with veterans using modern digital technology, by building a centralized and self-service platform through which business lines and development teams can send communications to veterans.


## Services We Offer
 
- [What We Currently Offer](#current-offering)
- [FAQs](#faqs)
- [How VANotify Works](#how-vanotify-works)
-  [Tech Stack](#tech-stack)

## Onboarding Information
- [Business Onboarding Guide](#business-onboarding-guide)
- [Email Frame & Template](#email-frame-and-template)
- [Pricing](#pricing)
- [Technical Onboarding Guide](#technical-onboarding-guide)


## Things to Know
- [Upcoming Capabilities](#upcoming-capabilities)
- [See Who We Are Working With](#See-Who-We-Are-Working-With)
- [Recent Successes](#recent-successes)
- [Find Out More &amp; Get In Touch With Us](#find-out-more--get-in-touch-with-us)
- [Incident Response](#incident-response)
_____________________________________________________________________________________________________________________________________________________________

## What We Currently Offer
![](images/currentoffering.png)


## FAQs
* Do you have any guidelines on when to send a notification and/or what kind to send? We do!  Look [here](notification-guide.md#vanotify-notification-guide)
* Does VANotify support variables in emails?  Yes - There is an an example [below](#successes)
* What about hyperlinks? Yes, VANotify supports hyperlinks.  See an example [below](#successes)
* What's not supported? Currently VANotify does not support: cc, bcc, images or attachments for email
* Should I run my email content by a Privacy Officer? Yes.  This will avoid sending Personally Identifiable Information inadvertantly


## How VANotify Works
![](images/vanotifydiagram.png)

## Tech Stack

| Application          | Infrastructure  | Monitoring & Security |
|:---------------------|:----------------|:----------------------|
| Python               | Terraform       | Datadog               |
| Flask                | GitHub Actions  | PagerDuty             |
| Celery               | AWS Fargate     | Twistlock             |
|                      | Bandit          |                       |



## Business Onboarding Guide
![](images/business.png)

## Email Frame and Template
![](images/email-frame-template.png)


## Pricing

* The **Office of the VA Chief Technology Officer (OCTO)** will pay for the development and maintenance of VA Digital Notifications Ecosystem products (VANotify + VEText).  Also, **OCTO** will pay for AWS infrastructure and operational costs.
* **VA business lines (outside of OCTO)** will be responsible for funding of digital notifications (email, SMS, or mobile push notifications).  Currently, **VA business lines** can procure AWS credits to fund their digital notifications.  The current cost is **$0.97 per AWS credit**. 

| Communication Channel      | Unit Price    | Messages per AWS credit |
|:---------------------------|:--------------|:------------------------|
| Email                      | $0.0001/email |9700 emails per credit   |
| SMS [inbound and outbound] | $0.0075/SMS   |129.33 SMSs per credit   |

<br>

 To assign credits to VANotify, please follow these steps:
  - Follow this link -  https://wfm.vaec.va.gov/servicedesk/customer/portal/5
  - Select - Sustainment/Operation Credit link
  - Choose VANotify under System/Application Name
  - Enter your VA Business Line ex. “VBA Comp & Pen” under Program/Project Name
  - Enter 812 as the Cloudkey ID
  - Enter SPI/Strip# - For VA business lines/product teams using non-IT funding, populate the “SPI/Strip#” field with “Non-IT/Business Line” ex. Non-IT/VHA
  - Enter AWS as the Cloud Provider
  - Enter the dollar amount
  - Enter your Project Manager and Business Owner

*Forms FITARA and 2237 will need to be completed to approve the request.*


## Technical Onboarding Guide
* [VANotify API Documentation](https://github.com/department-of-veterans-affairs/notification-api#api-documentation)
* Staging URL: https://staging.api.notifications.va.gov
* Postman Collection: https://github.com/department-of-veterans-affairs/notification-api/tree/master/scripts/postman
* Templating guides: 
  * https://design.va.gov/patterns/email_template
  * https://github.com/department-of-veterans-affairs/notification-utils/tree/master/docs
  * https://notification.canada.ca/templates

![](images/technical.png)


## Upcoming Capabilities
 * Feb 2021 - Multiple Provider Integration & Delivery Statuses
 * Feb-March 2021 - Self Service Portal
 * Work Starting April 2021 - VA Profile / VA.Gov Integrated Preferences


## See Who We Are Working With
This is how we track the business lines that are reaching out to us, their particular use cases, where they are at in our process and key next steps: [Business_Line Tracker Zenhub Board](https://app.zenhub.com/workspaces/vanotify-business-implementation-5fb529d6d7154c000e027f32/board?repos=257953872,259991010,259989505,289179208,261511794)


## Recent Successes
![](images/Launched.png)
![](images/vaccine_info.png)
![](images/vaccine_confirmation.png)

## Find Out More & Get In Touch With Us
* Fill out this form [here](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=bevnobev%2C+miabecker&labels=vanotify-intake&template=VANotify-Business-Intake.md&title=Business+intake+form+for+%5BBusiness+or+team%5D)
* Slack - #va-notify


## Incident Response ##
Points of contact:
* Tech Lead: [Filip Fafara](mailto://filip.fafara@va.gov)
* Project Manager: [Tim Radle](mailto://tim.radle@thoughtworks.com)
* Product Manager: [Maria Becker](mailto://maria.becker@va.gov)
