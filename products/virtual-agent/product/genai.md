# Integration of GenAI into VA Chatbot

## Status
Below is a proposal for how best to approach integrating GenAI into the current VA chatbot (virtual agent). It does not specify technologies, models nor is it a blueprint that must be adhered to. It is an approach based on the VA's need for transparency, security and governance.

## Context
### White paper
Previous to this ADR there was a white paper titled: [AI Use in the VA.gov Chatbot](https://docs.google.com/document/d/155e0K2yBj16g3Dc6j_qgEDqgw8I480totoqt0C7a7F4/edit?usp=sharing) which reported, in detail and amongst other things, the current capabilities and limitations of the VA.gov chatbot and went on to produce a proof of concept RAG-based GenAI agent. This PoC was evaluated and found to be insufficient to replace the current framework. 

### Hallucinations and unwanted behavior
The simple RAG-based PoC was found to produce too many hallucinations to be fit for purpose. Although GenAI models have progressed at an increasing pace since the white paper, the architectural approach below goes beyond the singular RAG-based model in order to address the VA's need for transparency and governance whilst reducing the risks of hallucinations and unwanted behavior towards veterans.

### Working with the current architecture
We believe it is advisable to work within the current framework (i.e. build upon PVA/rootbot rather than do a complete GenAI first rewrite), improving and evolving functionality leveraging GenAI/LLMs, because:
1. It is deterministic
2. The content is limited and so can be fully evaluated
3. It can act as a yard stick for the impact and performance of a GenAI responder

In using an evolutionary approach we can hedge two bets at the same time. GenAI as an intelligent responder to veterans questions versus using GenAI to generate chatbot content and guide user utterances to the correct content pathway.

## Decision
Instead of replacing the current framework with a single AI agent, as was the case with the White Paper PoC, we recommend a much more controlled, governance-focused approach which builds upon the current infrastructure. This will be made of multiple AI components.

The first and most important component will be a conversation classifier and scorer. This will not respond to the users question. The goal of this AI component will be to rate the question according to topics and subjects specified by the VA Chatbot team. It should provide scores for each of the specified areas in the range of 0-100. For the first iteration we will need to do some supervised training using the transcripts of previous conversations. We will need to use humans to create training data.

Once the conversation is classified, a routing layer will receive the scores. This is a decision layer - crafted, controlled and curated by the VA Chatbot team - will ingest the scores from the classifier and take actions based on the scores. These could be one of many outcomes. It could call a skill, summarize and pass the conversation transcript onto a live agent, call an AI agent, etc.

<img width="849" alt="Screenshot 2025-01-13 at 3 57 52 PM" src="https://github.com/user-attachments/assets/800a1de0-9ab2-44fa-a415-e7c3f9e8cf4a" />

This change in architecture will be reflected in a change in team dynamics and ways of working. The team becomes a data, analytics and AI Ops team as the application becomes data driven. Live analytics become key to the iterative improvement of the VA Chatbot as it becomes more "intelligent".  Monitoring the scoring of the classifier becomes a key part of analytics dashboards but will also serve to help train and improve newer models as well as improve user experience. The analytics engine and the application engine should be the same GenAI component. This will be the most complex and expensive (people and money) component but will serve two major functions.

<img width="847" alt="Screenshot 2025-01-13 at 4 05 43 PM" src="https://github.com/user-attachments/assets/ef3ed317-d847-4431-bd23-2a3001510af0" />

The upshot to this multi-model system (with a high-use, highly-monitored classifier and several smaller, more focused AI agents) is that the agent providing the response to the user can have limited and specific knowledge plus a well defined role so as to avoid hallucinations. These simpler agents can also be monitored such that frequently asked questions can be cached, reducing the costs and adding additional layers of control. 

## Phased Approach

### Analytics

We plan to work on LLM tooling for analytics and the chatbot application in parallel. We would start the analytics phase first so that we have fine tuning learnings via the historical transcript to apply to chatbot. We also want to generate a testing framework which can be used for the core application. Our approach is to learn and test for our analytics purposes before exposing Veterans to LLM technology. 

#### Phase 1
Connecting historical transcripts to Azure OpenAI. Here is an architectural diagram for connecting Azure AI Studio to the transcript data. We would add obfuscation at two points, one directly on the transcript data as an ETL pipeline using Azure Data Factory and then a second pass in Databricks once we have shaped the data. Our goal at this phase is to determine CQA topic using an LLM.

<img width="857" alt="Screenshot 2025-02-13 at 3 21 51 PM" src="https://github.com/user-attachments/assets/3336495c-a2ae-41f8-8e7b-68d7efca2ef4" />


#### Phase 2
Investigating LLM use for transcript analytics and further classifications. Here we leverage an LLM for qualitative data analysis as well as classifying utterances into the traffic light categorization. Red are scenarios where we want an GenAI to stop and pass to a live agent or provide a predefined script. Examples of these are suicidal ideation and eligibility inquiries. Yellow scenarios are complex and personal questions which require reasoning. Green scenarios are simple search queries whose answers can be found directly on VA.gov.

<img width="1065" alt="Screenshot 2025-02-13 at 3 22 03 PM" src="https://github.com/user-attachments/assets/061d3fd2-b1b2-4d9b-b31c-784f4c6df19b" />

#### Phase 3
AI analytics assistant as a product. This is optional if the qualitative analysis proves very fruitful for decision makers to use for content generation, user insights and future direction of the chatbot. We could make an internally hosted instance of an analytics chatbot which has access to transcript data and provide predefined questions to the data within data ranges.

<img width="892" alt="Screenshot 2025-02-13 at 3 23 39 PM" src="https://github.com/user-attachments/assets/f05191eb-f5a2-4b10-b07c-54448433e9cf" />

### Chatbot Application

#### Phase 1
LLM moderation for VA.gov chatbot. We need to isolate suicidal ideation and provide a curated reply to Veterans. We need to log these specific instances to watch for surges. All other bad actor instances should be handled with scripted replies and the user journey should end. We should also log these instances.

<img width="639" alt="Screenshot 2025-03-26 at 10 59 00 AM" src="https://github.com/user-attachments/assets/23efcf4c-2f18-44bd-a770-d66128e69c72" />

#### Phase 2

LLM classification engine integration into application. Post completion of Phase 1 in analytics we should use an LLM to decide on the chatbot topic. We should use this alongside the current application to compare and should the LLM prove superior we should switch to using it to navigate users to the correct chatbot conversation route.

<img width="623" alt="Screenshot 2025-03-26 at 10 59 12 AM" src="https://github.com/user-attachments/assets/c506e779-69c2-4660-852f-12cfbb87cfa5" />

#### Phase 3

Routing layer being introduced into application. Post completion of Phase 2 in analytics we should reuse the LLM structure to start classifying conversations according to the traffic light system and add any other classification categories we have discovered from the analytics phase to be useful.

<img width="627" alt="Screenshot 2025-03-26 at 10 59 25 AM" src="https://github.com/user-attachments/assets/2bbc5229-0564-46bd-8699-d319b2fe29fe" />

#### Phase 4

RAG system integration for testing GenAI responses alongside application. Here we get the LLM to generate responses but do not surface them to the user. We need to test user queries to measure under what circumstances the LLM responses are superior (most likely yellow light scenarios) and determine at what level of classification we start using the LLM to respond via analytics.

<img width="690" alt="Screenshot 2025-02-13 at 3 24 17 PM" src="https://github.com/user-attachments/assets/127de2bb-bf72-4496-b5ed-55eb919bb503" />

#### Phase 5

Agentic RAG based system for GenAI driven application. Here we build a multi-model agentic system (should the previous phase prove safe, secure and transparent) to incrementally roll out LLM based responses to veterans.

<img width="724" alt="Screenshot 2025-02-13 at 3 24 59 PM" src="https://github.com/user-attachments/assets/b9c2f948-7f73-4668-bb05-9c9c152ba6a7" />


## Governance
This proposed integration of GenAI is more involved and complex than would be just using a RAG based GPT (like the PoC in the whitepaper), however, we do believe that this approach is necessary to satisfy the VA need for governance, security and transparency. There will be many places where human decisions will lead the GenAI interactions and where monitoring can be put in place before a GenAI responds to the user:
- Deciding what categories the classifier uses and preparing the training data for scoring will all be decided by the VA team
- Routing layer decision process (under what thresholds do we take actions) will be programmed by the VA team
- Actions from decisions (whether a skill, live agent or GenAI agent should be called) will be decided by the VA
- With live monitoring and analytics the VA team can review the chatbot performance and put in place processes for deciding:
  - When new actions are needed
  - When actions need to be altered (live agent to GenAI agent or vice versa)
  - When new categories need to be added
  - When unexpected questions and behavior arises
  - How often to review flagged (difficult to categorize) transcripts
  - How often to review GenAI analytics and evals
  - When to switch to newer models

## Moderation
There are specific model endpoints created for moderation such as [OpenAI's moderation](https://platform.openai.com/docs/guides/moderation/overview) api. We suggest using this as a first step to identify suicidal ideation and direct veterans to resources and then providing text for the remaining categories we feel need to be flagged. Work should be done to identify the boundaries of the model and what thresholds work best for the VA. For example, violence and violence/graphic could be flagged for descriptions of injuries whilst on active duty and so a numeric threshold may be needed for this category or it may not be used for moderation purposes.

## Categorization
Currently the application uses Microsoft's Copilots platform to categorize utterances into topics and the user journey is determined by this categorization. The platform uses Natural Language Understanding (NLU). We believe an LLM would be more effective at categorization and better at interpreting synonyms and misspellings correctly. As such we suggest using an LLM to categorize utterances into topics. LLM's by their nature understand context and so should be better than an algorithmic solution.

## Content Management
With categorization we posit that an LLM can be used to assist in content creation for the chatbot. We can compare utterances that were categorized as miscellaneous by the Microsoft platform and compare it to the category assigned by the LLM. For those that were not assigned as miscellaneous we can ask the LLM to summarize the content into utterances and phrases and add these to the chatbot utterances for the topics. For those that were assigned miscellaneous we can ask the LLM for generate potential new topics and utterances.

## Downsides
Here are the drawbacks we can think of compared to the current model or a single GenAI GPT:
- Building out the GenAI driven analytics before making major changes to user facing application
- Using a multi-model framework (rather than a single model) means more risk of drift and security concerns
- PII and PHI become part of the running and improving the application 
- May need disambiguation GenAI as part of classifier
- More technology for approved use
- Constant monitoring of AI landscape
- Teams cannot be siloed

