# Product Outline: Chatbot - POC
---
## Overview

Originally created in 2021, the VA Chatbot is a well-developed and maintained virtual agent that helps users solve problems and complete tasks on their own with little to no human involvement at any time of day, resulting in decreased time Veterans spend waiting for an outcome, and ultimately decreased call center calls – especially for calls involving simple questions and/or solutions.

Ultimately, the problem we solve with our virtual agent is to help the Veteran self-serve and find information more easily. While the ultimate goal is to reduce call volumes, due to the amount of content that is available and needs to be rewritten in conversational format, the Chatbot began by targeting smaller targeted content.

The areas we address:
* Giving the Veteran more direct access to the dense content available at va.gov
* Providing the Veteran with another channel to interact with the VA that is available 24 hours
* Providing other VA teams with microservices (this has since been deprecated) 

Recently the Chatbot’s usage has decreased, potentially due to the following reasons: 
* The chatbot is not visible throughout the VA.gov site
* Increased adoption of GenAI with sites like ChatGPT, GeminiAI, etc. Veterans may be using these sites instead of the VA Chatbot. 
* The chatbot does not handle synonyms and misspellings well, drawing concerns that the product is not usable or not answering the Veteran’s questions in a swift manner as intended. 

Given this, we are looking to create a proof of concept that incorporates LLM into the bot specifically for sign on support. With the ultimate goal being to build a better chatbot that meets Veterans needs. 

---

## Objective & Purpose:

Develop and test a PoC of an LLM-assisted intent-level-only chatbot focused on login support to:
* Examine potential improvements to the accuracy of intent recognition for login-related issues (as an example study).
* Examine the PoC’s ability to understand and respond to semantic and synonym-based queries related to login support.
* Examine confidence-score changes in the responses provided for login issues while ensuring appropriate fallback mechanisms.
* Examine the PoC's ability to correctly troubleshoot login problems while avoiding hallucinations.

The purpose is to evaluate whether the integration of an LLM (at the intent classification point or otherwise) can significantly enhance the chatbot’s performance in understanding user intents and providing relevant, trustworthy information for login support, thereby improving the user experience and making it a reliable self-service tool for Veterans. Also, can we reduce human resources in creating and curating content whilst minimizing risk to the Veteran and the VA. This PoC will be used to assess scalability to VA.gov as a whole.

## Problem
> What is the problem and who is affected?

The current VA.gov Chatbot is losing users, partly because it fails to provide answers to a wide range of generally asked questions by Veterans. It struggles with accurately interpreting user queries as conversational text and does not effectively direct users to relevant information.

> What evidence do we have of the problem?

Total messages decreased from:​​
* Q1 2024 = 53,617
* Q1 2025 = 19,541

> Why do you think the problem is occurring?

The chatbot currently struggles with synonyms which causes it to not understand the users intent with the question. This causes it to have to follow up to understand what topic to direct the user to leading to longer user journeys, especially when the question is personalized. With GenAI sites that are able to not only understand the intent of the question, but also provide answers to questions by sourcing data from not only the VA site, but other sites across the internet. Veterans are more likely to use them instead of the VA Chatbot to ask questions that are more personalized to their needs.  

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

* **Intent Recognition Accuracy:** 
  * The percentage of correctly identified login-related user intents. 
  * Improved matching of user queries specific to login support.  
* **Response Accuracy:**
  * The correctness and relevance of the responses provided by the chatbot for login issues. 
* **User Satisfaction:** 
  * Feedback from Veterans on the usability and effectiveness of the chatbot for login-related support in comparison to existing flows. 
  * Perceived value to the business-end that handles troubleshooting tickets. 
* **Semantic and Synonym Search Effectiveness**
  * Improvement in the Chatbot’s ability to understand and respond to login-related queries using semantic search and synonyms.
  * Enhanced ability to surface relevant answers based on varied user language (and audience) related to login issues. 
* **Fallback and Redirect Efficiency:**
  * Reduction in occurrences where the Chatbot fails to provide a direct answer for login-related issues.
  * Improved accuracy in redirecting users to the correct VA.gov pages or resources for further login support information.

---
## Deliverables
> What are we delivering by the end of the "Sprint"?
* Demo of Chatbot PoCs
* PoCs available to test in an enviornment (staging or another method) 
* Technical evaluation report - to include estimated cost, ease of build, testing results/grading criteria, etc.
  * Note: owing to the nature of it being a PoC the evaluation will not include time and resources for building testing, CI/CD, analytics and governance frameworks all required for a working application to go to market
* User feedback summary
* Recommendations for next steps and PoC to working application roadmap including: 
  * The cost of scaling (not just compute but human power) versus the risk involved with letting an LLM interact with Veteran

---

## Assumptions/Risks
> *Identify risks related to usability, value to users, feasibility/implementation, and viability given organizational constraints<sup>2</sup>. 
> Indicate how you'll validate/test against these risks. Inspired by [SVPG's Four Big Risks](https://www.svpg.com/four-big-risks/).*

- **Value Risks**: 
  - Does not meet accuracy requirements
  - Model creator trust and liability 
  - Maintainability 
    
- **Usability Risks**:
  - Is accessibility a concern?
  - Can the chatbot eventually be surfaced on all pages while 508 compliant?
  - Are there language limitations? 

- **[Technical] Feasibility Risks**:
  - ATO limits to infrastructure
  - Cost
  - Security/Privacy
    - Will need edge case testing & eventually CI/CD testing to be production ready
    - Will need to be self hosted so we are not sending veteran PII/PHI to third party servers
    - Do we trust LLM with read or write access to VA databases?

- **Organizational Viability Risks/Constraints: Will there be a positive organizational impact?**:
  - Legal, Political, VA Authority & Medical help concerns exist if misinformation or personal information is provided by the chatbot.
  - May increase volume to call centers - especially with call back mechanism

## What're you building
> *What's in scope for you to build with this initiative? (Describe key features/flows) 
- Bot can identify & transfer - Provide helpful links/phone numbers to any of the following topics recognized: 
  - Self harm/Mental health
  - Sexual Assault
  - Homelessness
  - Violence/Graphic violence
    - Including adequate disclaimers around mental health & diagnosis
- Bot does not handle mental health concerns or provide medical advice
- Bot can provide content - helpful links & resources as well as quote the sources when answering questions related to: 
  - Login support
- Bot can ask if the question was answered or not
- Bot can explain when it does not have an answer to a users question 
  - While maintaining VA.gov voice, tone, and style guidelines
  - Does not lie or make up a response
- Bot does not chit chat/banter or sway from professional voice & tone
- Bot can handle bad actors
  - Identify and filter harmful content from input and output (moderation, input/output guard rails)
- Bot does not provide recommendations on any eligibility
- Bot has a feedback system 

> *What have you explicitly decided to **not** include and why?*
- Being 508 compliant (for PoC) 
- Store/Transfer transcripts to CXI & dataleaks
- Have moderation/monitoring alerts
- Be a part of an ATO that should have GenAI parameters
- Encrypt, as best as possible, PII/PHI
- Authenticated paths

> *How does this solution address your Assumptions & Risks?
- Focusing on one topic for the PoC to respond to as well as ensuring there is no summarization included in the build will limit the potential for misinformation. 
- Removing authentication from the build will also limit any potential PII/PHI concerns. 

## Go-to-market
> *What marketing, outreach, or communications are necessary for this product to be successful? Which groups/orgs are necessary to make this happen?*

* OCTO - Collaborating on utterance planning, testing, & evaluation

--- 

## Launch Planning

### Timeline
> *Describe any major milestones for this initiative including organizational, legislative, etc. constraints.*
1. Resource Onboarding: May 12th, 2025
2. Kickoff: May 19th, 2025 
3. Build Start: June 02, 2025
4. Build End: July 18, 2025


### Key Decisions
- 

---
   
## Screenshots

### Before



### After

---

#### Communications
> *Where will you discuss this initiative?*

- **Team Name:** VA Chatbot
- **GitHub Label(s):** va-virtual-agent
- **Slack channel:** #chatbot-llm-sprint
- **Product POCs:** Luciana Morais, Nathalie Rayter
    - Nathalie Rayter / Luciana Morais (Product Owner)
    - Selia Strauss (Project Manager)
    - Ann-Marie Raposo (Product Manager)
    - Anita Dewitt (Tech Lead) 

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
- ** Office/Department: OCTO, VES
- ** Contact(s): Luciana Morais (OCTO), Nathalie Rayter (VES), Danielle Thierry (OCTO)

 
</details>
