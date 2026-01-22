# Initiative Brief: Chatbot - Claims & Appeals RAG 
---
## Overview

The Claims & Appeals Retreival-Augmented Generation (RAG) agent will be a domain-specific conversational and informational assistant for Veterans and their families, focused on helping users understad, initiate, and track VA claims and appeals processes. It will answer general questions and guide users through processes.

## Objective & Purpose:

Enable Veterans to easily navigate the VA claims and appeals processes, improve their ability to take action, and increase trust in VA's digital experience by providing fast, accurate, and clearly sourced information. 

The purpose is to: 
  - Reduce friction and confusion in understanding and managing claims/appeals.
  - Minimize unnecessary human escalation by providing easy to understand responses.

## Problem
> What is the problem and who is affected?

Due to the personalization of questions related to claims and the Chatbot's struggle in understanding the intent of some of these questions, Veterans and their families often struggle to find clear, actionable, and trustworthy information about VA claims and appeals.

> How does this initiative help further OCTO-DE's mission and goals?

As part of the One-Bot approach. 

---
## Measuring Success
> 💡 *VA.gov products measure success against Ease of use, Service Completion, Trust/Satisfaction, Health.*<sup>1</sup> *Identify balancing metrics to ensure you're not bringing about undesired outcomes.*

* **Ease of Use:**
  * Users successfully receive a relevant response or are routed to the best-fit topic with minimal friction.
* **Service Completion:**
  * Percentage of users to provide a positive user response to "Did that answer your question?" excluding non-responses. 
* **Trust/Satisfaction:**
  * User satisfaction scores (CSAT) excluding non-responses.
* **Fallback and Redirect Efficiency:**
  * Reduction in occurrences where the Chatbot fails to provide a direct answer for claims/appeals questions. 
  * Improved accuracy in redirecting users to the correct VA.gov pages or resources for further claims/appeals support information.

---
## Deliverables
> What are we delivering?
* RAG (Retrieval-Augmented Generation) pipeline for claims and appeals queries, utilizing VA.gov documentation content.
* Analytics for product health and user metrics.

---

## Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**: 
  - **Risk:** Users may find value if answers are generic or don't help them complete tasks. 
  - **Validation/Test Approach:** User interviews, task completion analytics
    
- **Usability Risks**:
  - **Risk:** 
  - **Validation/Test Approach:** 

- **[Technical] Feasibility Risks**:
  - **Risk:** RAG attempts to respond to authenticated experience questions. 
  - **Validation/Test Approach:** Dogfooding & usability testing

- **Organizational Viability Risks/Constraints: Will there be a positive organizational impact?**:
  - **Risk:** 
  - **Validation/Test Approach:** 

## What're you building
> *What's in scope for you to build with this initiative? (Describe key features/flows)
- RAG pipeline for claims/appeals queries, retrieving up-to-date and authoritative answer content from VA.gov knowledge sources.
  - Does not lie or make up a response
  - Can dismbiguate (clarify with user) if it cannot understand the users intent
  - Provides helpful links & resources when responding to claims/appels related queries
- Analytics/Monitoring for system performance and user engagement.
- Secure handoff for personal claim/appeal status and PII requests. 

> *What have you explicitly decided to **not** include and why?*
- Providing user-specific claim/appeal status or PII directly via RAG.
- Handling appeals or escalation outside of documented VA processes.
- Legal or medical advice.

> *How does this solution address your Assumptions & Risks?
- **Usability:** Clear, contextual messaging differentiating between public information and actions requiring authentication. Iterative user testing for RAG responses to ensure user understanding.
- **Value:** Monitoring of feedback and to confirm that users are receiving relevant, helpful responses, especially for claims/appeals. Regular review of unanswered or low-satisfaction queries. 
- **Viability:** No PII handled by RAG; all such requests are routed through secure methods.
- **Feasibility:** Secure intent routing and modular knowledge base allow incrememntal rollout and rapid adjustment as edge cases are discovered. 

## Go-to-market
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

* VA organizations (VES, OCTO, VEO, VRM, Unified Communications Team) - Collaborating on testing & evaluation
* 
--- 

## Launch Planning

### Timeline
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
1. Build Start: TBD
2. Build End: TBD
3. Bug Bashing: TBD
4. Dogfooding & Usability Testing: TBD
6. Launch: TBD


### Key Decisions
- Not including Claims Status to RAG as claims status is an authenticated experience. 

---
   
## Screenshots

### Before



### After

---

#### Communications
> *Where will you discuss this initiative?*

- **Team Name:** VA Chatbot
- **GitHub Label(s):** va-virtual-agent
- **Slack channel:** #va-chatbot-team
- **Product POCs:** Luciana Morais
    - Luciana Morais (Product Owner)
    - Selia Straus (Project Manager)
    - Ann-Marie Raposo (Product Manager)
    - Anita DeWitt (Tech Lead) 

</details>

#### Team Members

<details>
 
 - DEPO Lead: Luciana Morais
 - PM: Ann-Marie Raposo
 - Engineering: Anita DeWitt
 - Research/Design: Lucas Wright
 
</details>


#### Stakeholders

<details>
 
_What offices/departments are critical to make this initiative successful?_
- ** Office/Department: OCTO
- ** Contact(s): Luciana Morais (OCTO), Danielle Thierry (OCTO)

 
</details>
