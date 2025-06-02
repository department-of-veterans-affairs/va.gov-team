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
| Event-Driven Notification MVP                | [[Event-Driven Notification Initiative]](https://github.com/department-of-veterans-affairs/va.gov-team/blob/fa4386986f628e08c1a744354de492b07a72e7c9/products/claim-appeal-status/CST%20Product/Event-Driven%20Notifications%20Initiative.md)  |
| Mobile and Push Notification Expansion       | tbd                                           |
| Additional Claims Event Notifications        | tbd                                           |


## Launch Strategy

**How will Veterans know it exists?**  
- Notifications via VA Notify to Veterans’ preferred channels.  
- Integration with VA.gov, MyVA Dashboard, and VA Health & Benefits app.  
- Coordination with VA Comms team for user education.

**Link to Release Plan:**  
tbd


## Launch Dates

- **Target Launch Date:** June 2025  
- **Actual Launch Date:** tbd  
- **Impact Review / Evaluation Date:** tbd  


## Solution Narrative

**Current Status:**  
Event Bus decision_letter_availability topic is live, MVP development in final phases, testing with BMT as the first consumer.

**Key Decisions:**  
- Filtered to three EP Codes for MVP.  
- Deduplication of events to avoid duplicate Veteran notifications.  
- Rely on ClaimantParticipantId matching VeteranParticipantId to ensure Veteran-facing notifications only.

**Screenshots:**  
_(to be provided in final release plan; placeholders)_  
- **Before:** No proactive notifications; Veterans wait for mail.  
- **After:** Veterans receive proactive email updates when Decision Letter is available.

**Communications:**  
- Stakeholder demos planned.  
- Updates via Slack, VA.gov team updates, and ongoing discovery sessions.


## Incident Response

**Points of Contact:**  
- **BMT Team:**  
  - Saliha Ghaffar (Product Manager)  
  - Stacy Wise (Tech Lead)  
  - Ian Donovan (Engineer)  
- **Event Bus Team:**  
  - Thomas Sidebottom (BIP Contact)  
  - Stephen Quick (Solution Architect)  
- **VA Notify Team:**  
  - Melanie Jones (Product Manager)  
  - Beverly Nelson (Product Owner)  
- **VA OCTO Benefits Portfolio:**  
  - Amy Lai (Product Owner)  
  - Julie Strothman (Designer)  
  - Cory Sohrakoff (Engineering)

**Links to Dashboards:**  
- [CST Monitoring Dashboard (Domo)](tbd)  
- [Event Bus Monitoring Dashboard (Domo)](tbd)  
- [VA Notify Delivery Dashboard](tbd)  

**Technical Diagrams:**  

![image](https://github.com/user-attachments/assets/677abc5e-ec9d-4c3e-945b-3dcfc3b033f1)


**New Publicly-Exposed Endpoints:**  
- No new publicly-exposed APIs in the MVP.  
- Uses existing VA Notify endpoints for notification delivery.

**New Interactions with Dependent VA Backends:**  
- Consumes BIP ClaimLifecycleStatusUpdated events via Event Bus.  
- Leverages Event Bus and VA Notify infrastructure.  

**Security Hotspots to Watch:**  
- Data deduplication: ensure no duplicate notifications sent.  
- Proper handling of Veteran PII in event payloads and downstream usage.  
- Secure handling of Kafka topics (deduplication and filter apps).  
- Minimize race conditions that could cause multiple notifications for a single event.


## Privacy, Security, Infrastructure Readiness Review

**Link to Release Plan with “Planning” sections completed:**  
tbd
  
- [Release Plan](tbd)


## Outcome and Next Steps
- Platform will create a GitHub ticket listing concrete action items for readiness review.  
- BMT team will address action items and assign back to the Platform Security team and OCTO-DE Platform Security Lead for approval.  
- If no issues are raised, product will be approved for launch.


**Team Members:**  
- **BMT2:** Stacy Wise (Tech Lead), Ian Donovan (Engineer), Saliha Ghaffar (Product Manager).  
- **OCTO Benefits Portfolio:** Amy Lai (Product Owner), Julie Strothman (Designer), Cory Sohrakoff (Engineering).  
- **Event Bus Team:** 
**Stakeholders:**  
- BMT, Event Bus team, BIP team, VA Notify team, VA Communications team, Veterans.
