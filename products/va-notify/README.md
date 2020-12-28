# VANotify Platform

## Our Mission
Improve the overall experience and quality of communications with veterans using modern digital technology, by building a centralized and self-service platform through which business lines and development teams can send communications to veterans.
## Communication
Slack - #va-notify

## Things to Know
 
- [How VANotify Works](#how-vanotify-works)
- [Tech Stack](#tech-stack)
- [API Documentation](#api-documentation)
- [Business Onboarding Guide](#business-onboarding-guide)
- [Technical Onboarding Guide](#technical-onboarding-guide)
- [Successes](#successes)
- [Upcoming Features](#upcoming-features)


## How VANotify Works
![](images/VANotify_Diagram.png)

## Tech Stack

| Application          | Infrastructure  | Monitoring & Security |
|----------------------|-----------------|-----------------------|
| Python               | Terraform       | Datadog               |
| Flask                | GitHub Actions  | Grafana               |
| Celery               | AWS Fargate     | PagerDuty             |
| Granicus GovDelivery |                 | Twistlock             |
|                      |                 | Bandit                |


## API Documentation
https://github.com/department-of-veterans-affairs/notification-api#api-documentation

## Successes
![](images/Launched.png)


## Upcoming Features
* Unsubscribe
* Email CC
* Email Routing
* List Management - Text, Email
* Push Notifications
* Two way communications
