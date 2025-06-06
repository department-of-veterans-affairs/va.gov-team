# Decision Letter Email Notifications Product Outline

## Overview
Introduce an event-driven architecture to the VA notification ecosystem to proactively inform Veterans when their Decision Letter is available for download. This ensures Veterans have timely updates, can take key actions sooner, and improves their overall sense of trust and satisfaction.


## Problem Statement
As a Veteran with a pending compensation claim, I currently do not receive proactive notifications for major claim status changes, leading to missed updates and uncertainty about the progress of my claim.

As a Veteran, I am unaware when I can take actions to support my claim, such as submitting evidence or starting decision reviews.

As a VSR processing claims, I often miss evidence submissions needed to process the claim in a timely manner.

**How might we...**  
…provide Veterans and VA staff with timely notifications about Decision Letter availability to improve engagement, reduce uncertainty, and drive faster decision review processes?


## Desired User Outcomes
- Veterans receive timely updates about claims decisions, improving satisfaction.
- Veterans take key actions to support claims processing and decision reviews.
- Reduced uncertainty and improved communication for Veterans and staff.

**Undesired User Outcomes**  
- Veterans receiving duplicate or irrelevant notifications.  
- Notifications that do not clearly direct Veterans to useful next steps.


## Desired Business Outcomes
- Enable a unified, proactive communication experience across the VA’s digital channels.
- Reduce call center inquiries and manual support needs.
- Support the VA’s mission of transparency and improved Veteran satisfaction.

**Undesired Business Outcomes**  
- Increased confusion or frustration due to inaccurate notifications.  
- Resource strain if notifications infrastructure is not scalable.


## Measuring Success

**Key Performance Indicators (KPIs)**  
- Text/Email open rates  
- Push notification conversions  
- MyVA Opt-in/out rates  
- CST CSAT scores  
- Task completion rates  
- Number of sessions per user per week/month  
- Number of call center inquiries  
- Medallia qualitative feedback  
- Qualitative feedback from social listening  
- Event Bus adoption success across Mobile, MyVA Dashboard, Authenticated services, Chatbot, etc.

**Baseline KPI Values**  
Baseline data from MyVA, CST, and call center analytics.


## Objectives and Key Results (OKRs)

**Objective:**  
Empower Veterans with faster, clearer access to their Decision Letters.

**Key Results:**  

> [!NOTE]
> Exact baseline values and targets for KPIs such as call center inquiries will be determined in collaboration
> with the product manager and analytics team, based on the most current and reliable data available.

- Achieve XX% email open rates within XX days of launch.  
- Achieve XX% download conversion rates for notified Veterans.  
- Reduce call center inquiries about Decision Letters by XX% within three months.  
- Achieve “Satisfied” or higher Medallia scores for Veterans interacting with these notifications.

## Assumptions
- BMT can co-create and maintain the notifications platform in collaboration with Event Bus and VA Notify.
- BMT is the right team to maintain this infrastructure.
- Notifications content will be approved by VA comms stakeholders.
- Notifications will roll out gradually in coordination with other stakeholders.

**Most Risky Assumption:**  
That the notifications infrastructure can scale and that BMT can maintain it while coordinating with multiple stakeholders.


## Solution Approach

**What will we build?**  
A dedicated notification infrastructure, leveraging Event Bus and VA Notify, to deliver Decision Letter Availability events.

**Why this approach?**  
It builds on existing BIP data events, reduces redundancy, and creates a scalable, reusable infrastructure.

**Explicitly not included in MVP:**  
- Text and mobile push notifications.  
- Notifications for other claim events beyond Decision Letters.

**How will it evolve?**  
Future iterations will expand the types of notifications (other claim events, additional EP codes) and channels (text/push notifications).


## Initiatives

| Initiative                                   | Link to Initiative Brief                      |
|----------------------------------------------|-----------------------------------------------|
| Event-Driven Notification MVP                | [Event-Driven Notification Initiative](https://github.com/department-of-veterans-affairs/va.gov-team/blob/fa4386986f628e08c1a744354de492b07a72e7c9/products/claim-appeal-status/CST%20Product/Event-Driven%20Notifications%20Initiative.md)  |
| Mobile and Push Notification Expansion       | To be determined                              |
| Additional Claims Event Notifications        | To be determined                              |


## Launch Strategy

**How will Veterans know it exists?**  
- Notifications via VA Notify to Veterans’ preferred channels.  
- Integration with VA.gov, MyVA Dashboard, and VA Health & Benefits app.  
- Coordination with VA Comms team for user education.

**Link to Release Plan:**  
[Decision Letter Email Notification Release Plan](./Release%20Plan.md)


## Launch Dates

- **Target Launch Date:** June 16, 2025  
- **Actual Launch Date:** To be set after evaluation on June 16, 2025
- **Impact Review / Evaluation Date:** Approx. 2-4 weeks after launch date


## Solution Narrative

**Current Status:**  
Event Bus decision_letter_availability topic is live, MVP development in final phases, testing with BMT as the first consumer.

**Key Decisions:**  
- Filtered to three EP Codes for MVP.  
- Deduplication of events to avoid duplicate Veteran notifications.  
- Rely on ClaimantParticipantId matching VeteranParticipantId to ensure Veteran-facing notifications only.

**Screenshots:**  
- **Before:** No proactive notifications; Veterans wait for mail.  
- **After:** Veterans receive proactive email updates when Decision Letter is available.
  ![image](https://github.com/user-attachments/assets/b0a440c9-f704-4511-94f4-1b7480b0a588)


**Communications:**  
- Stakeholder demos planned.  
- Updates via Slack ([#decision-letter-notification-taskforce](https://dsva.slack.com/archives/C06Q9H7FTSR)), VA.gov team updates, and ongoing discovery sessions.


## Incident Response

**Points of Contact:**  
- **BMT Team:**
  - [#benefits-management-tools](https://dsva.slack.com/archives/C04KHCT3ZMY) in Slack
  - Saliha Ghaffar (Product Manager)  
  - Stacy Wise (Tech Lead)  
  - Ian Donovan (Engineer)  
- **Event Bus Team:**
  - [#event-bus-support](https://dsva.slack.com/archives/C074VK55M9P) in Slack
  - Rick Golden (Product Manager)
  - Emily Wilson (Tech Lead)
  - Darius Dzien (Engineer)
- **VA Notify Team:**  
  - Melanie Jones (Product Manager)  
  - Kyle MacMillan (Tech Lead) 
- **VA OCTO Benefits Portfolio:**  
  - Amy Lai (Product Owner)  
  - Julie Strothman (Designer)  
  - Cory Sohrakoff (Engineering)

**Links to Dashboards:**  
- [BMT Eventbus Gateway Monitoring Dashboard (DataDog)](https://vagov.ddog-gov.com/dashboard/diy-2n4-4my)
- [Event Bus Monitoring Dashboard (DataDog)](https://lighthousedi.ddog-gov.com/dashboard/w2p-h33-46v/event-bus-dashboard)  
  - Note: this uses a separate DataDog instance than va.gov/eventbus gateway
- [VA Notify Delivery Dashboard](https://vagov.ddog-gov.com/dashboard/2wv-kht-d5v/va-notify-monitoring?fromUser=false&refresh_mode=sliding&from_ts=1749224712377&to_ts=1749228312377&live=true)  

**Technical Diagrams:**  

![image](https://github.com/user-attachments/assets/677abc5e-ec9d-4c3e-945b-3dcfc3b033f1)


**New Publicly-Exposed Endpoints:**  
- `https://api.va.gov/v0/event_bus_gateway/send_email`
  - Authenticated endpoint requiring a service account token.
  - `eventbus-gateway` application retrieves the token from the Sign-In Service utilizing the received Participant ID as the Veteran identifier
  - Called by `eventbus-gateway` application; initiates the email job within `vets-api`.
- Uses existing VA Notify functionality for notification delivery.

**New Interactions with Dependent VA Backends:**  
- Consumes BIP ClaimLifecycleStatusUpdated events via Kafka
  - Uses IAM roles within LHDI and DSVA to create secure connection between Kafka and Eventbus Gateway
- Uses Sign-In Service to authenticate with a service access token
- Leverages Event Bus and VA Notify infrastructure.  

**Security Hotspots to Watch:**  
- Data deduplication: ensure no duplicate notifications sent.  
- Proper handling of Veteran PII in event payloads and downstream usage.  
- Secure handling of Kafka topics (deduplication and filter apps).  
- Minimize race conditions that could cause multiple notifications for a single event.


## Privacy, Security, Infrastructure Readiness Review

**Link to Release Plan with “Planning” sections completed:**  
- [Decision Letter Email Notification Release Plan](./Release%20Plan.md)


## Outcome and Next Steps
- Platform will create a GitHub ticket listing concrete action items for readiness review.  
- BMT team will address action items and assign back to the Platform Security team and OCTO-DE Platform Security Lead for approval.  
- If no issues are raised, product will be approved for launch.


**Team Members:**  
- **BMT2:** Stacy Wise (Tech Lead), Ian Donovan (Engineer), Saliha Ghaffar (Product Manager).  
- **OCTO Benefits Portfolio:** Amy Lai (Product Owner), Julie Strothman (Designer), Cory Sohrakoff (Engineering).  
- **Event Bus Team:** Anthony Nguyen (PO), Emily Wilson (Tech Lead), Darius Dzien (Engineer), Rick Golden (Product Manager).
**Stakeholders:**  
- BMT, Event Bus team, BIP team, VA Notify team, VA Communications team, Veterans.
