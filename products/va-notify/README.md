# VANotify Platform

## Our Mission
Improve the overall experience and quality of communications with veterans using modern digital technology, by building a centralized and self-service platform through which business lines and development teams can send communications to veterans.

## Communication
Slack - #va-notify

## Things to Know
 
- [How VANotify Works](#how-vanotify-works)
- [Tech Stack](#tech-stack)
- [What We Currently Offer](#current-offering)
- [Business Onboarding Guide](#business-onboarding-guide)
- [Technical Onboarding Guide](#technical-onboarding-guide)
- [Pricing](#pricing)
- [FAQs](#faqs)
- [Business Line Tracker](#business-line-tracker)
- [Successes](#successes)
- [Upcoming Features](#upcoming-features)
- [Find Out More](#find-out-more)


## How VANotify Works
![](images/VANotify_Diagram.png)

## Tech Stack

| Application          | Infrastructure  | Monitoring & Security |
|:---------------------|:----------------|:----------------------|
| Python               | Terraform       | Datadog               |
| Flask                | GitHub Actions  | Grafana               |
| Celery               | AWS Fargate     | PagerDuty             |
| Granicus GovDelivery |                 | Twistlock             |
| AWS (SES/Pinpoint)   |                 | Bandit                |


## Current Offering
![](images/current_offer.png)

## Business Onboarding Guide
![](images/business.png)

## Technical Onboarding Guide
* [VANotify API Documentation](https://github.com/department-of-veterans-affairs/notification-api#api-documentation)
* Staging URL: https://staging.api.notifications.va.gov
* Postman Collection: https://github.com/department-of-veterans-affairs/notification-api/tree/master/scripts/postman
* Templating guides: 
  * https://github.com/department-of-veterans-affairs/notification-utils/tree/master/docs
  * https://notification.canada.ca/templates

![](images/technical.png)

## Pricing

* The **Office of the VA Chief Technology Officer (OCTO)** will pay for the development and maintenance of VA Digital Notifications Ecosystem products (VANotify + VEText).  Also, **OCTO** will pay for AWS infrastructure and operational costs.
* **VA business lines** will be responsible for funding of digital notifications (email, SMS, or mobile push notifications).  Currently, **VA business lines** can procure AWS credits to fund their digital notifications.  The current cost is **$0.97 per AWS credit**. 

| Communication Channel      | Unit Price    | Messages per AWS credit |
|:---------------------------|:--------------|:------------------------|
| Email                      | $0.0001/email |9700 emails per credit   |
| SMS [inbound and outbound] | $0.0075/SMS   |129.33 SMSs per credit   |

<br>

 To assign credits to VANotify, please follow these steps:
  - Follow this link -  https://wfm.vaec.va.gov/servicedesk/customer/portal/5
  - Select - Sustainment/Operation Credit link
  - Choose VANotify under System/Application Name
  - Enter 812 as the Cloudkey ID
  - Enter AWS as the Cloud Provider
  - Enter the dollar amount
  - Enter your Project Manager and Business Owner

## FAQs
* Do you have any guidelines on sending emails vs text messages? We do!  Look [here](notification-guide.md#is-a-notification-needed)
* Does VANotify support variables in emails?  Yes - There is an an example [below](#successes)
* What about hyperlinks? Yes, VANotify supports hyperlinks.  See an example [below](#successes)
* What's not supported? Currently VANotify does not support: cc, bcc, images or attachments for email
* Should I run my email content by a Privacy Officer? Yes.  This will avoid sending Personally Identifiable Information inadvertantly

## Business Line Tracker
This is how we will track the business lines that are reaching out to us, their particular use cases, where they are at in our process and key next steps: [Business_Line Tracker Zenhub Board](https://app.zenhub.com/workspaces/vanotify-business-implementation-5fb529d6d7154c000e027f32/board?repos=257953872,259991010,259989505,289179208,261511794)

## Successes
![](images/Launched.png)
![](images/vaccine_info.png)
![](images/vaccine_confirmation.png)

## Upcoming Features
Self Service Portal

## Find Out More
Fill out this form [here](https://app.smartsheet.com/b/form/2fe7e01103d44ae58706e72e12647c08)
