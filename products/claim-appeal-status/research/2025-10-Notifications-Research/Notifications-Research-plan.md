---
# Research Plan Metadata
title: "Research Plan for Notifications Study – Decision Letters and Evidence Requests"
date: 2025-10-26
last_updated: 2025-10-26
team: "Benefits Management Tools (BMT)"
product: "VA Benefits Management Notifications"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Today, Veterans primarily receive benefits notifications by paper mail, with decision letters also sent via email. Other notifications, such as evidence requests, are still paper-only. While these channels provide official documentation, they offer limited flexibility for timely or interactive communication. As BMT expands to include text messages and in-app notifications, we need to understand how Veterans interpret, trust, and act on messages across these channels. This study focuses on decision letter and evidence request notifications to ensure Veterans receive clear, consistent, and trustworthy communications about their benefits."
  product_location: "The notification system (VA Notify) is integrated across VA.gov’s benefits management ecosystem and the VA Health and Benefits mobile app, primarily supporting the Claim Status Tool and related benefits management features."
  user_familiarity: "Veterans are already familiar with receiving benefit updates by email and paper mail. This study builds on that experience by exploring preferences for text and in-app notifications."
  product_brief_url: "N/A"

# Research Design
methodology: "Semi-structured interviews with scenario-based evaluation of notification examples."
research_format: 
  location: remote
  in_person_details:
    facility: "N/A"
    point_of_contact: "N/A"
    equipment: "Zoom with screen share; Figma prototype for static content review."
  moderated: true
  
# Research Goals & Questions
research_goals:
  - goal_1: "Understand how Veterans perceive, trust, and act on decision letter and evidence request notifications across channels (email, text, in-app)."
  - goal_2: "Identify how tone, clarity, and content structure influence understanding and trust in official VA messages."
  - goal_3: "Determine which channels are most appropriate and effective for informational versus action-required communications."

research_questions:
  - "How do Veterans interpret and respond to decision letter and evidence request notifications across email, text, and in-app channels?"
  - "How much information feels appropriate in each channel for both message types?"
  - "How do tone and message structure affect clarity, trust, and perceived urgency?"
  - "How do Veterans decide which channel to engage with first when receiving updates from VA?"
  - "How can VA ensure both decision letters and evidence requests are clear, actionable, and trustworthy across digital channels?"

hypotheses:
  - "Veterans prefer email for formal, detailed notifications like decision letters, and text or in-app notifications for time-sensitive messages like evidence requests."
  - "Plain, friendly language increases trust and comprehension compared to formal or bureaucratic tones."
  - "Veterans’ channel preferences depend on both the sensitivity of content and their comfort level with digital tools."

expected_outcomes: "Findings will inform VA’s content and interaction guidance within the existing design system, defining message tone, content boundaries, and appropriate channels for different notification types. Insights will also identify accessibility and clarity improvements to strengthen trust in digital benefit communications."

# Recruitment & Participants
recruitment:
  recruiting_partner: "Perigean"
  approach: "Lean maximum variation sampling to ensure a mix of age, device use, and digital comfort levels."
  
  primary_criteria:
    - "U.S. Veteran actively using VA.gov or the VA Health and Benefits mobile app."
    - "Has submitted or tracked a disability compensation claim or appeal in the past year."
    - "Has received a VA notification (email or paper) within the past 6 months."
    
  secondary_criteria:
    - "Mix of device use (mobile-only, desktop, both)."
    - "Include 1–2 paper-first Veterans transitioning to digital tools."
    
  screener_questions:
    - question: "Have you submitted or tracked a disability claim or appeal with VA in the past year?"
      qualifying_response: "Yes"
    - question: "Have you received any notifications or letters from VA (by mail or email) in the past 6 months?"
      qualifying_response: "Yes"
    - question: "Which device do you usually use to check messages or updates from VA?"
      qualifying_response: "Any"

participants:
  veterans: 15
  caregivers: 0
  dependents: 0
  total_recruited: 15
  completed_sessions_goal: 10-12
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-11-10"
  pilot_participant: "TBD"
  research_dates: "2025-11-11 to 2025-12-05"
  research_review_submission: "2025-11-05"
  
session_details:
  duration_minutes: 60
  buffer_minutes: 30
  max_sessions_per_day: 3
  
# Strategic Alignment
octo_priorities:
  - objective: "Objective 1: VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits."
    key_results: 
      - "Improve satisfaction with web and mobile products by 5 points."
      - "Ensure Veterans receive clear, timely notifications when an issue occurs."
  - objective: "Objective 4: OCTO positively influences VA’s ability to deliver software products and services faster, safer, and with higher quality."
    key_results:
      - "Deliver notification design and content guidance that raises consistency and usability across VA products."
      - "Provide actionable research insights to improve clarity and trust in VA digital communications."
      
veteran_journey_phases:
  - "Taking Care of Myself – managing ongoing disability compensation and appeals."
  - "Putting Down Roots – maintaining access to benefits and records for financial stability."
    
# Research Repository Tracking
related_research:
  previous_studies: 
    - "N/A (First-phase study focused on benefits notifications.)"
    
tags:
  - "notifications"
  - "semi-structured-interviews"
  - "veterans"
  - "benefits-management"
  - "decision-letters"
  - "evidence-requests"
---

# UX Research Plan: Benefits Management Notifications Study

## Table of Contents
- [Background](#background)
- [Product Brief](#product-brief)
  - [OCTO-DE Priorities Supported](#octo-de-priorities-supported)
- [Veteran Journey](#veteran-journey)
- [Research Scope](#research-scope)
- [Research Goals](#research-goals)
  - [Goals](#goals)
  - [Outcome](#outcome)
- [Research Questions](#research-questions)
- [Hypotheses](#hypotheses)
- [Methodology](#methodology)
  - [Method](#method)
- [Session Structure](#session-structure)
  - [Location](#location)
- [Research Materials](#research-materials)
- [Recruitment](#recruitment)
  - [Recruitment Approach](#recruitment-approach)
  - [Recruitment Criteria](#recruitment-criteria)
  - [Sample Size](#sample-size)
- [Timeline](#timeline)

---

# UX Research Plan: Benefits Management Notifications Study

## Background

### Briefly Describe the Background of Your Product
The **Benefits Management Tools (BMT)** portfolio supports Veterans in managing their benefits through **VA.gov** and the **VA Health and Benefits (VAHB)** mobile app. The tools include:

- **Claim Status Tool (CST)** – to track disability compensation claims and appeals  
- **VA Letters and Documents** – to access official benefit correspondence  
- **Payment History** – to review compensation payments  
- **Disability Rating** – to understand benefit amounts and eligibility  

BMT aims to provide Veterans with clear, accessible, and timely updates about their benefits, helping them stay informed and act when needed.

### What Problem Is Your Product Trying to Solve?
Today, Veterans primarily receive benefits notifications by **paper mail**. Currently, **decision letter notifications** are the only type sent digitally via email, while all other notifications, including evidence requests, are still delivered by paper.  

As the Benefits Management Tools (BMT) team expands to include **text messages (SMS)** and **in-app notifications**, and as we broaden the types of updates Veterans receive, we must ensure these channels work together in a way that is clear, consistent, and trustworthy.

We don’t yet know how Veterans perceive or act on these new digital notifications, particularly how they distinguish between **informational messages** (like decision letters) and **action-required messages** (like evidence requests). Without shared standards for content, tone, and sequencing, there is a risk of confusion, missed actions, or reduced trust.

This study will focus on **decision letter** and **evidence request notifications** to understand how Veterans prefer to receive, interpret, and act on these communications across **email**, **text**, and **in-app** channels.  
The findings will guide VA in creating a cohesive, actionable, and accessible notification experience that helps Veterans quickly understand what happened, what to do, and by when.

### Where Is Your Product Situated on VA.gov?
The notification system (**VA Notify**) is integrated across VA.gov’s benefits management ecosystem and the **VA Health and Benefits mobile app**, primarily supporting the **Claim Status Tool (CST)** and related benefits management features.  

CST is an authenticated tool that Veterans use to check the status of their claims and appeals, view and respond to evidence requests, and access claim letters.

### What Is Veterans’ Familiarity with This Tool?
Veterans are already familiar with receiving benefit notifications through **paper mail** and, more recently, through **email**. The new notification system expands on existing VA digital tools to make communications clearer, more consistent, and more accessible.  

It introduces **in-app alerts** and **notification settings** that give Veterans more control over how they receive updates.

---

## Product Brief

### OCTO-DE Priorities Supported

**Objective 1:** VA’s digital experiences are the easiest and most efficient way to access VA health care and benefits.

- **Key Result 1:** Improve satisfaction with web and mobile products by 5 points.  
- **Key Result 2:** Reduce the total time Veterans spend waiting for responses by 50%.  
- **Key Result 3:** Ensure Veterans receive clear, timely notifications when an issue occurs.

**Objective 4:** OCTO positively influences VA's ability to deliver software products and services faster, safer, and with higher quality.

- **Key Result 1:** Deliver notification design standards and content guidelines that raise usability and consistency across VA products.  
- **Key Result 2:** Provide actionable research insights to reduce confusion and improve Veterans’ trust in digital communications.

---

## Veteran Journey
This research primarily supports Veterans during:

- **Taking Care of Myself** – managing ongoing disability compensation and appeals  
- **Putting Down Roots** – maintaining access to benefits and records for financial stability  

---

## Research Scope
This study will explore and evaluate how Veterans interpret and act on **decision letter** and **evidence request** notifications across channels (**email**, **text**, and **in-app**) — focusing on **clarity, tone, and preferred sequencing**.  

We will **not** test **message delivery mechanics** (e.g., backend timing or system routing) or **interface usability** at this time.  
Accessibility testing with assistive devices will occur in a separate study.

---

## Research Goals

### Goals
1. Identify what information Veterans expect and find most useful in **decision letter** vs. **evidence request** notifications.  
2. Explore which channels (email, text, in-app) Veterans prefer for receiving each type of notification and why.  
3. Assess how content structure, tone, and sequencing influence understanding, trust, and task completion.  
4. Explore barriers, trust, and accessibility issues across Veteran segments (e.g., older adults, low-vision users, paper-first users, cognitive deficits).

### Outcome
This research will generate **evidence-based insights** to refine and strengthen VA’s notification and design guidance by focusing on how Veterans receive, understand, and act on decision letter and evidence request notifications across digital channels.

Specifically, this study will:

- Provide **directional insight and recommendations** for digital notifications that communicate claim decisions and evidence requests, defining what information belongs in each channel and how much detail is appropriate.  
- Fill gaps in **tone, structure, and sequencing guidance** to ensure Veterans clearly understand what happened, what to do, and by when, particularly for time-sensitive requests.  
- Identify **design and interaction patterns** that support task completion, build trust, and reduce confusion when Veterans receive official updates through digital channels.  
- Surface **accessibility needs and preferences** to ensure decision letter and evidence request notifications are usable and inclusive for Veterans across devices, abilities, and comfort levels with technology.

Findings from this study will directly inform the next iteration of the **Benefits Management Tools (BMT)** notification experience, guiding the rollout of digital notifications that are **clear, accessible, and trustworthy** for all Veterans.

---

## Research Questions
1. How do Veterans interpret the purpose and importance of decision letter and evidence request notifications?  
2. What level of detail and tone feels appropriate for each channel (text, email, in-app) for both notification types?  
3. What elements (e.g., subject line, sender name, preview text) most affect trust and engagement?  
4. Through which channels do Veterans prefer to receive decision letter vs. evidence request notifications, and why?  
5. How do Veterans decide which channel to act on first when receiving notifications across multiple channels?  
6. What types of messages feel too sensitive or too urgent for certain channels (e.g., SMS)?  
7. How do Veterans perceive differences in tone, urgency, and next steps between decision letter and evidence request notifications?  
8. What sequencing (e.g., text → email → in-app) best supports timely understanding and action for evidence requests?  
9. How can future notification design patterns differentiate “informational” vs. “action-required” messages clearly and consistently?

---

## Hypotheses
- Veterans prefer **email** for official, detailed updates and **text messages** for urgent or time-sensitive alerts.  
- The clarity of the **call-to-action** (what happened, what to do, and by when) will significantly impact task completion.  
- **Friendly and plain language** builds trust, while legal or bureaucratic tones create confusion and anxiety.  
- **Privacy concerns** about text messages vary depending on content sensitivity (e.g., health vs. compensation updates).

---

## Methodology

### Method
**Semi-structured interviews** with scenario-based evaluations of sample notifications will explore how Veterans interpret and react to **decision letter** and **evidence request** messages across channels (email, text, and in-app).

Discussions will focus on **clarity**, **tone**, **trust**, and **next-step understanding** to identify how well each notification communicates what happened and what action is expected.  

Participants will **not perform tasks** within VA.gov or the VA Health and Benefits app.  
Findings will inform **content and design improvements**, not usability flows or task performance.

### Why This Method
Semi-structured interviews allow participants to explain their reactions in context, uncovering **mental models**, **trust signals**, and **tone perceptions** that wouldn’t surface in a standard interview.

---

## Session Structure

Each 60-minute session will include:

1. **Introduction:** Explore how participants currently receive and respond to VA notifications.  
2. **Scenario 1 – Decision Letter:** Review and react to email + text/in-app mockups; discuss tone, clarity, and next steps.  
3. **Scenario 2 – Evidence Request:** Review and react to sample notifications; probe urgency, trust, and preferred sequencing.  
4. **Comparative Reflection:** Ask Veterans to contrast the two experiences — what feels clear, trustworthy, or overwhelming, and how they’d prefer to receive future updates.

### Location
Remote (via **Zoom** with screen share to view examples).

---

## Research Materials
- [Link to Conversation Guide]  
- [Link to Notification Mockups / Prototypes]

---

## Recruitment

### Recruitment Approach
Recruit through **Perigean**, targeting a diverse sample of Veterans representing a range of ages, devices, and digital literacy levels.  
Sampling will focus on Veterans with experience managing **disability compensation claims or appeals** on VA.gov or the VAHB app.

### Recruitment Criteria

#### Primary Criteria
- U.S. Veteran actively using VA.gov or the VA Health and Benefits mobile app  
- Has submitted or tracked a disability compensation claim or appeal in the past year  
- Has received a VA notification within the last 6 months  

#### Secondary Criteria
- Mix of device use (mobile-only, desktop, both)  
- 2+ paper-first Veterans transitioning to digital experiences  

### Sample Size
- **Veterans:** 15 total recruited  
- **Ideal Completed Sessions:** 10–12  

---

## Timeline

- **Session Length:** 60 minutes  
- **Debrief with Observers:** 15 minutes  
- **Buffer Time Between Sessions:** 30 minutes  
- **Max Sessions per Day:** 3  
- **Recruitment Start:** TBD  
- **Research Review Submission:** TBD  
- **Study Duration:** 3–4 weeks (including synthesis and shareout)
