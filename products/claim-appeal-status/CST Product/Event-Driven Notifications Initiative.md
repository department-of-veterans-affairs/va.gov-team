# Event-Driven Notification Initiative

## Executive Summary
The Event-Driven Notification Initiative aims to introduce an event-driven architecture into the VA notification ecosystem. This initiative will enable different teams to communicate with a unified voice, leveraging the same events. The infrastructure will be managed by the CST team, which owns the claim status problem space. The initiative is about addressing communication gaps and will also pave the way for a future where VA's interaction with veterans is more integrated and proactive. By setting up an event-driven architecture, we're laying the foundation for various teams to seamlessly send push notifications, text alerts, provide on-site notifications, and other digital experiences all from a unified platform. This forward-thinking approach ensures that as veterans' needs and technologies evolve, our communication methods can adapt swiftly, maintaining consistency and reliability in how we inform and engage with veterans.

## Problem Statements
- As a veteran with a pending compensation claim I currently do not receive proactive notifications for major claim status changes, leading to missed updates and a sense of uncertaintly about what is happening with my claim behind the scenes.
- As a veteran with a pending compensation claim, I am not aware when there's an opportunity for me to do something to support my claim or take actions related to decision reviews.
- As a VSR processing claims, I often am missing important evidence submissions that allow me to process the claim in a timely manner.

## Desired Outcomes
- Veterans receive timely updates related to their claims, improving their sense of satisfaction with claims communications.
- Veterans take key actions supporting claims processing such as submitting evidence.
- Veterans take key actions supporting their decision review journey such as downloading their claims decisions

## Audiences Served
- Veterans with in-process claims.
- Claim processors B
- Broader VA business aiming for transparency with veterans.

## KPIs
- Text/Email Open rates
- Push notification conversions
- MyVA Opt-in/out rates
- CST CSAT scores
- Task completion rates
- Number of sessions per user per week/month
- Number of call center inquiries
- Medallia qualitiative feedback
- Qualitative feedback from social listening
- Event Bus adoption success for Mobile, MyVA Dashboard, Authenticated services, Chatbot, and others.

## Assumptions
- The BMT team will be able to co-create a claim notification platform in collaboration with Event Bus and VA Notify.
- The BMT team is the correct team to take on notifications infrastructure technical debt to maintain on-going and expanding claims notifications initiatives.
- We will roll out notification use cases gradually in coordination with VA comms stakeholders, Mobile, and other stakehodlers.
- Notifications content (language) will be approved by VA comms stakeholders, but implemented by the BMT team


## Discovery Outcomes

## MVP
### Core Bet
If veterans are notified when a decision letter is available, they will access CST or the Mobile App to download the letter.

### How will we know if we were right? We'll set benchmarks for and measure the following:
- Email click-through rates.
- Open rates.
- Download conversion rates.
- Qualitative feedback from surveys.
- Qualitative feedback from social monitoring.

### In-Scope Requirements
- Build out basic notification infrastructure in coordination with Event Bus and VA Notify.
- Decision letter availability will be the sole use case enabled
- Infrastructure will be built out sufficiently such that future use cases can rely on the same technical foundation.

### Out-of-Scope
- Text and mobile push notifications.
- Notifications for other claim events.
