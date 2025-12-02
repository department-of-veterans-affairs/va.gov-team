---
# Research Plan Metadata
title: "Research Plan for Notifications Study – Decision Letters and Evidence Requests"
date: 2025-10-26
last_updated: 2025-12-02
team: "Benefits Management Tools (BMT)"
product: "VA Benefits Management Notifications"
product_area: "authenticated"

# Background Context
background:
  problem_statement: "Today, Veterans primarily receive benefits notifications by paper mail, with decision letters also sent via email. Other notifications, such as evidence requests, are still paper-only. While these channels provide official documentation, they offer limited flexibility for timely or interactive communication. As BMT expands to include text messages and in-app notifications, we need to understand how Veterans interpret, trust, and act on messages across these channels. This study focuses on decision letter and evidence request notifications to ensure Veterans receive clear, consistent, and trustworthy communications about their benefits."
  product_location: "The notification system (VA Notify) is integrated across VA.gov’s benefits management ecosystem and the VA Health and Benefits mobile app, primarily supporting the Claim Status Tool and related benefits management features."
  user_familiarity: "Veterans are already familiar with receiving benefit updates by email and paper mail. This study builds on that experience by exploring preferences for text and in-app notifications."
  product_brief_url: "[Product Brief](#product-brief)"

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
  veterans: 18
  caregivers: 0
  dependents: 0
  total_recruited: 18
  completed_sessions_goal: 10-12
  
# Timeline & Sessions
timeline:
  pilot_date: "2025-12-9"
  pilot_participant: "Steven Straily"
  research_dates: "2025-11-11 to 2026-1-02"
  research_review_submission: "2025-12-01"
  
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

---

## Background

### Briefly Describe the Background of Your Product
The **Benefits Management Tools (BMT)** support Veterans in managing their benefits through tools on **VA.gov** and the **VA Health and Benefits (VAHB)** mobile app. The tools include:

- **Claim Status Tool (CST):** Track disability compensation claims and appeals  
- **VA Letters and Documents:** Access official benefit correspondence  
- **Payment History:** Review compensation payments  
- **Disability Rating:** Understand benefit amounts and eligibility  

BMT provides claimants with clear, accessible, and timely updates about their benefits, helping them stay informed and act when needed.

### What Problem Is Your Product Trying to Solve?
Today, Veterans and other claimants primarily receive benefits notifications by **paper mail**. Currently, **decision letter notifications** are the only type sent digitally via email, while all other notifications, including **evidence requests**, are still delivered by paper.

As BMT expands to include **text messages (SMS)** and **in-app notifications**, and as the number of notification types grows, we need to ensure these new channels work together in a way that is **clear, consistent, and trustworthy** — while protecting **PHI/PII**.

We do not yet know how claimants understand or act on digital notifications, especially how they interpret **informational** messages compared to those that **require action**. Without shared standards for **content, tone, and sequencing**, Veterans may:

- Be unclear about information or requests  
- Miss key actions  
- Lose trust in VA communications  

Strict privacy regulations limit the amount of detail allowed in unsecured channels, creating tension between what claimants need and what can be provided:

- Claimants need clear information about what happened, what is needed, and by when.  
- We can only send limited information that prompts them to authenticate for full details.  

**Evidence requests** have variable deadlines, and conveying urgency while navigating this complexity is a challenge.  

This study will explore how claimants prefer to receive and act on **decision letters** and **evidence requests** across digital channels.  
Findings will help VA create a cohesive, accessible notification experience that enables claimants to quickly understand what happened, what to do, and by when.

### Where Is Your Product Situated on VA.gov?
The **VA Notify** system is integrated across VA.gov’s benefits management ecosystem and the **VA Health and Benefits mobile app**, primarily supporting the **Claim Status Tool (CST)** and related benefits management features.

CST is an authenticated tool that Veterans use to check the status of their claims and appeals, view and respond to evidence requests, and access claim letters.

### What Is Veterans’ Familiarity with This Tool?
Veterans and other claimants are already familiar with receiving benefit notifications through **paper mail** and, in some cases, **email**.  
Upcoming notification enhancements will expand these tools to make communications clearer, more consistent, and more accessible.  
This will include **in-app alerts** and **notification settings** that give claimants more control over how they receive updates.

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

- **Taking Care of Myself:** Managing ongoing disability compensation and appeals  
- **Putting Down Roots:** Maintaining access to benefits and records for financial stability  

---

## Research Scope

This study will explore and evaluate how Veterans and other claimants interpret and act on **privacy-constrained decision letter and evidence request notifications** across channels (**email, text, and in-app**) — focusing on **clarity, tone, and preferred sequencing**.

We will **not** test **message delivery mechanics** or **interface usability** at this time.  
Testing with accessible devices and assistive technologies will occur in a separate study.

---

## Research Goals

### Goals
1. Identify what information Veterans expect and find most useful in **decision letter** vs. **evidence request** notifications.  
2. Explore which channels (email, text, in-app) Veterans prefer for receiving each type of notification and why.  
3. Assess how **content structure, tone, and sequencing** influence understanding, trust, and task completion.  
4. Explore barriers, trust, and accessibility issues across Veteran segments (e.g., older adults, paper-first users, cognitive deficits).

### Outcome
This research will generate **evidence-based insights** to refine and strengthen VA’s notification and design guidance by focusing on how claimants **receive, understand, and act** on decision letter and evidence request notifications across email, text, and in-app channels.

Specifically, this study will:

- Provide **directional insight and recommendations** for digital notifications that communicate claim decisions and evidence requests, defining what information belongs in each channel and how much detail is appropriate.  
- Fill gaps in **tone, structure, and sequencing guidance** to ensure claimants clearly understand what happened, what to do, and by when — particularly for time-sensitive requests, even when content is limited due to PHI/PII restrictions.  
- Identify **design and interaction patterns** that support task completion, build trust, and reduce confusion when Veterans receive official updates through digital channels.  

Findings from this study will inform the next iteration of the **Benefits Management Tools (BMT)** notification experience, guiding the rollout of digital notifications that are clear, accessible, and trustworthy for all claimants.

---

## Research Questions

### Goal 1: Identify what information Veterans expect and find most useful
1. How do claimants interpret the purpose and importance of decision letter and evidence request notifications?  
2. How can future notification design patterns differentiate **“informational”** vs. **“action-required”** messages clearly and consistently?  
3. What is claimant interest in receiving regular notifications about claim status?  

### Goal 2: Explore which channels Veterans prefer and why
1. Through which channels do claimants prefer to receive decision-letter vs. evidence-request notifications, and what factors influence which channel they act on first when messages arrive across multiple channels?  
2. What perceived risks or harms arise when sensitive, urgent, or complex claim information is sent through different channels (e.g., SMS, email, in-app)?  

### Goal 3: Assess how content structure, tone, and sequencing influence understanding, trust, and task completion
1. How do claimants perceive the appropriate level of detail, tone, urgency, and next-step guidance across different channels?  
2. What sequencing (e.g., text → email → in-app) best supports timely understanding and action for evidence requests?  
3. How do message elements (e.g., subject line, sender name, preview text) affect trust and engagement?  

### Goal 4: Explore barriers, trust, and accessibility issues
1. How do claimants perceive the trade-off between privacy protection and notification specificity?  
2. How do device usage patterns and digital literacy levels across Veteran segments influence their ability to engage with notifications?

---

## Hypotheses

- Claimants vary in their channel preference, with many preferring **email** for official, detailed updates and **text messages** for urgent or time-sensitive alerts.  
- The clarity of the **call-to-action** (what happened, what to do, and by when) will significantly impact task completion.  
- **Friendly and plain language** builds trust, while legal or bureaucratic tones create confusion and anxiety.  
- **Privacy concerns** about text messages vary depending on content sensitivity (e.g., health vs. compensation updates).

---

## Methodology

### Method
**Semi-structured interviews** with scenario-based evaluations of sample notifications will explore how Veterans interpret and react to **decision letter** and **evidence request** messages across channels (**email, text, and in-app**).

Discussions will focus on **clarity, tone, trust, and next-step understanding** to identify how well each notification communicates what happened and what action is expected.  

Participants will not perform tasks within VA.gov or the VA Health and Benefits app.  
Findings will inform **content and design improvements**, not usability flows or task performance.

### Why This Method
Semi-structured interviews enable participants to explain their reactions in context, uncovering **mental models**, **trust signals**, and **tone perceptions** that would not surface in a standard interview.

---

## Session Structure

Each **60-minute session** will include:

1. **Introduction:** Explore how participants currently receive and respond to VA notifications.  
2. **Scenario 1 – Decision Letter:** Review and react to email + text/in-app mockups; discuss tone, clarity, and next steps.  
3. **Scenario 2 – Evidence Request:** Review and react to sample notifications; probe urgency, trust, and preferred sequencing.  
4. **Comparative Reflection:** Ask participants to contrast the two experiences — what feels clear, trustworthy, or overwhelming, and how they’d prefer to receive updates.

---

## Location
**Remote (via Zoom)**, with screen sharing to view examples.

---

## Research Materials

- [Notifications Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/claim-appeal-status/research/2025-10-Notifications-Research/Notifications-Conversation-guide.md)
 
- [Notifications BMT Figma File](https://www.figma.com/design/db26JCYXJtaakOdG4TiNXN/Notifications-BMT?node-id=2688-356&t=gkeRli85LqLj6qAy-1)


---

## Recruitment

### Recruitment Approach
Recruit through **Perigean**, targeting a diverse sample of Veterans representing a range of ages, devices, and digital literacy levels.  
Sampling will focus on Veterans with experience managing disability compensation claims or appeals on **VA.gov** or the **VAHB** app.

### Recruitment Criteria

**Primary Criteria**
- U.S. claimant actively using VA.gov or the VA Health and Benefits mobile app  
- Has submitted or tracked a disability compensation or other benefits claim or decision review in the past year  
- Has received a VA benefits notification within the last 2 years  

**Secondary Criteria**
- Mix of device use (mobile-only, desktop, both)  
- 4+ participants with low digital literacy

### Sample Size
- **Veterans:** 18 total recruited  
- **Ideal Completed Sessions:** 10–12  

- **Kick Off Call Request:**  12/3-12/5 12pm-2pm ET, 330-430pm ET
---

## Timeline

- **Session Length:** 60 minutes  
- **Debrief with Observers:** 15 minutes  
- **Buffer Time Between Sessions:** 30 minutes  
- **Max Sessions per Day:** 3
- **Kick Off Call Request:**  30 min block, Availability: 12/3-12/5, 12pm-2pm ET, 330-430pm ET
- **Recruitment Start:** 12/2/2025  
- **Research Review Submission:** 12/1/2025  
- **Study Duration:** 12/10/2025 - 1/2/2026 (including synthesis and shareout)
- **Contigency Timeline:** Due to holidays 12/10/2025 - 1/9/2026
   
  ### Availability
When would you like sessions scheduled? Please list exact dates and times in **EASTERN Standard Time**. 

> [!NOTE]
> We recommend providing availability outside of work hours, as many Veterans are only available before and after working times, and live across the U.S. 

> [!TIP]
> Please request enough dates and at ***least double the amount of time slots for the number of requested participants***. **(e.g. 3/17, Monday 9:00AM-1:00PM, 3:00PM-6:00PM EST; 3/18, Tuesday 9:00AM-6:00PM EST)**
>
> **Place time slots between `hash marks` when in edit mode.**

- `12/10, Wed, 10:00 AM EST`
- `12/10, Wed, 12:00 PM EST`
- `12/10, Wed, 2:00 PM EST`
- `12/10, Wed, 4:00 PM EST`
- `12/11, Thu, 10:00 AM EST`
- `12/11, Thu, 12:00 PM EST`
- `12/11, Thu, 2:00 PM EST`
- `12/12, Fri, 10:00 AM EST`
- `12/12, Fri, 12:00 PM EST`
- `12/12, Fri, 2:00 PM EST`
- `12/12, Fri, 4:00 PM EST`
- `12/15, Mon, 10:00 AM EST`
- `12/15, Mon, 12:00 PM EST`
- `12/15, Mon, 2:00 PM EST`
- `12/15, Mon, 4:00 PM EST`
- `12/16, Tue, 10:00 AM EST`
- `12/16, Tue, 12:00 PM EST`
- `12/16, Tue, 2:00 PM EST`
- `12/16, Tue, 4:00 PM EST`
- `12/17, Wed, 10:00 AM EST`
- `12/17, Wed, 12:00 PM EST`
- `12/17, Wed, 2:00 PM EST`
- `12/17, Wed, 4:00 PM EST`
- `12/18, Thu, 10:00 AM EST`
- `12/18, Thu, 12:00 PM EST`
- `12/18, Thu, 2:00 PM EST`
- `12/19, Fri, 10:00 AM EST`
- `12/19, Fri, 12:00 PM EST`
- `12/19, Fri, 2:00 PM EST`
- `12/19, Fri, 4:00 PM EST`
- `12/22, Fri, 10:00 AM EST`
- `12/22, Fri, 12:00 PM EST`
- `12/22, Fri, 2:00 PM EST`
- `12/22, Fri, 4:00 PM EST`
- `12/23, Fri, 10:00 AM EST`
- `12/23, Fri, 12:00 PM EST`
- `12/23, Fri, 2:00 PM EST`
- `12/23, Fri, 4:00 PM EST`

  ## Team Roles  🕵️👩‍💻👩‍🔬

> [!NOTE]
> **Please do not include email addresses in this section.** We previously required email addresses. VA's GitHub policy ([see announcement](https://github.com/orgs/department-of-veterans-affairs/discussions/13)) has changed. VA.gov email addresses cannot be in public repositories.
>
> **Please list the names of people in each role.** In the Slack study channel, send an email and primary phone number for the moderator. Also send emails for the notetaker, accessibility specialist, and observers. If you need Perigean to take notes for you, indicate that next to Notetaker.

- `Moderator:` **Naomi Howe**	
- `Research guide writing and task development (usually but not always same as moderator):` **Naomi Howe**		
- `Participant recruiting & screening:`	**Naomi Howe**	
- `Project point of contact:` **Naomi Howe**		
- `Accessibility specialist (for sessions where support for assistive technology may be needed):` **[N/A]**	
- `Note-takers:` **Melissa Lefevre** 	
- `Observers: List the names of people observing the sessions. This includes VA stakeholders, engineering team members, design team members, and any other people who might find this research relevant to their work. Spread observers across sessions. There should be no more than 5 to 6 total attendees (moderator, notetaker(s), observer(s)) per session on the VA side.`

- **[Enter full name]**
- **[Enter full name]**
- **[Enter full name]**

## Approvals ✅
- `Reviewed by [OCTO Product Owner, Team Lead] on [MM-DD-YYYY]`
- `Reviewed by OCTO Research-Ops Lead on [MM-DD-YYYY]`

