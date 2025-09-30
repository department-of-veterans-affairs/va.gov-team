# Product Outline: Chatbot - Query Routing with LLMs (Phase 1 MVP) 
---
## Overview

This initiative is the first phase of a multi-phase program to implement an LLM-driven conversational platform that intelligently handles user queries. The Phase 1 MVP will focus on building foundational capabilities: identifying user intent, routing queries to the right support topics (including sign-on), leveraging Retrieval-Augmented Generation (RAG) for sign-on queries, ensuring safe interactions through moderation endpoints, and monitoring system integrity.

## Objective & Purpose:

To launch an LLM-powered query intake and routing system that accurately identifies user intent, directs queries to the appropriate CQA (custom question answering) or RAG pipeline, and ensures Veteran safety and system integrity.

The purpose is to: 
  - Provide Veterans with rapid, relevant, and trustworthy support by routing their queries to the appropriate topic accurately, including sign-on via RAG.
  - Establish safety mechanisms for detecting and responding to sensitive or harmful content (suicidal ideation, harrasment).  
  - Enhance the Chatbot's performance in understanding user intents. 
  - Potentially reduce the volume of authentication-related support tickets handled by live agents.
  - Improve user satisfaction with clear, actionable guidance.
  - Collect insights on pain points to drive continuous improvement.

## Problem
> What is the problem and who is affected?

Currently, the Chatbot struggles with accurately interpreting user queries as conversational text and does not effectively direct users to relevant information. This is causing a decrease in the Chatbot's usage. While addressing this problem, we also have to ensure the Chatbot is able to address safety concerns and the potential for users to express suicidal ideation, violence, harrassment, or attempting to jailbreak/misuse the chatbot which must be detected and responded to appropriately. 

> What evidence do we have of the problem?

Total messages decreased from:​​
* Q1 2024 = 53,617
* Q1 2025 = 19,541

> Why do you think the problem is occurring?

The chatbot currently struggles with synonyms which causes it to not understand the users intent with the question. This causes it to have to follow up to understand what topic to direct the user to leading to longer user journeys. It also has difficulty understanding complex user questions for example questions that are personalized. With GenAI sites that are able to not only understand the intent of the question, but also provide answers to questions by sourcing data from not only the VA site, but other sites across the internet. Veterans are more likely to use them instead of the VA Chatbot to ask questions that are more personalized to their needs.  

> Why was this topic prioritized?

* Currently a common support use case for support teams at the VA. 
* Content availability - there is currently a robust troubleshooting guide available on VA.gov that the chatbot can surface as well as be trained on. 
* Can be a part of the ground floor for integrating Ask VA. 
* Does not contain user specific or sensitive data which allows us to move fast and explore more technologies in a short period of time

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
  * Reduction in occurrences where the Chatbot fails to provide a direct answer for login-related issues.
  * Improved accuracy in redirecting users to the correct VA.gov pages or resources for further login support information.
* **Jailbreak/Breach Attempts:**
  * Tracking and responding to attempted misuse of the system.
* **User Drop-off:**
  * Monitoring if safety prompts, RAG/CQA responses, or routing logic cause users to abandon help-seeking.

---
## Deliverables
> What are we delivering?
* LLM-based intent classification and topic routing engine.
* Integration with existing CQA pipelines for topic-specific responses.
* RAG (Retrieval-Augmented Generation) pipeline for sign-on related queries, utilizing VA.gov documentation content.
* Moderation endpoint capable of detecting and responding to queries indicating suicidal ideation, harassment, or violence.
* Monitoring system for jailbreaking and bad actor activity.
* User engagement analytics via Google Analytics
* Backend logging and tracking via Datadog

---

## Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**: 
  - **Risk:** Users may not perceive the chatbot as helpful or may prefer human support.
  - **Validation:** Monitor service completion, satisfaction scores, and chat abandonment rates. 
    
- **Usability Risks**:
  - **Risk:** Users may not understand or trust the chatbot’s responses.
  - **Validation:** Usability testing, direct user observation, VA Dogfooding (feedback and satisfaction surveys.)

- **[Technical] Feasibility Risks**:
  - ATO limits to infrastructure
  - Cost
  - Security/Privacy
  - Getting resources added to all environments 

- **Organizational Viability Risks/Constraints: Will there be a positive organizational impact?**:
  - **Risk:** Organizational policies or budget constraints may limit deployment or ongoing support.
  - **Validation:** Ongoing stakeholder engagement.

## What're you building
> *What's in scope for you to build with this initiative? (Describe key features/flows)
- LLM-powered intent detection for incoming user queries.
- Topic selection and routing to either CQA or RAG pipelines as appropriate (RAG specifically for sign-on queries).
- AI disclaimer visible in the Chatbot.
- RAG pipeline for sign-on queries, retrieving up-to-date and authoritative answer content from VA.gov knowledge sources.
  - Does not lie or make up a response
  - Can dismbiguate (clarify with user) if it cannot understand the users intent
  - Provides helpful links & resources when responding to sign on related queries
- Moderation endpoint for detection of suicidal ideation, harassment, or violence, with responses for appropriate resources.
- Monitoring for detecting jailbreaking and misuse attempts.
- Analytics/Monitoring for system performance and user engagement. 

> *What have you explicitly decided to **not** include and why?*
- Automated scraping of transcripts & adding DeepEval to Databrix (manual scraping & runs through DeepEval will still occur.)
- Voice & Tone will be a fast follow as it requires guidance from the OCTO Content team. 

> *How does this solution address your Assumptions & Risks?
- **Usability:** Iterative user testing and VA Dogfooding for safety prompts, RAG responses, and routing ensure user understanding.
- **Value:** Monitoring of feedback and to confirm that users are receiving relevant, helpful responses, especially for sign-on.
- **Viability:** Demonstrating safety, efficiency, and improved user experience in Phase 1 builds momentum for future FAQ topics. 

## Go-to-market
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

* VA organizations (VES, OCTO, VEO, VRM, Unified Communications Team) - Collaborating on testing & evaluation
* 
--- 

## Launch Planning

### Timeline
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
1. Build Start: August 19, 2025
2. Build End: October 10, 2025
3. Bug Bashing: Week of October 13, 2025
4. Dogfooding & Usability Testing: October 20 - 31st, 2025
5. Final Presentation for Go/No Go: Week of November 10th, 2025
6. Launch: TBD (Dependent on Azure Resources in PREPROD & PROD


### Key Decisions
- AI model - Azure Open AI 4.0 model (gpt-4o, 2024-11-20)
- For a better user experience it was decided to keep Chatbot conversation even if the page is refreshed. Chatbot conversations will only be cleared if the page is closed out. 

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
