# Chatbot <> Ask VA integration design ideas

Last updated by @tygindraux: May 6, 2025

We've started to discuss the potential for integrating Ask VA with VA chatbot. This document describes initial design ideas and includes an example of one approach.

## How Ask VA and chatbot connect

### Ask VA and chatbot link to one another

There are currently two ways that Ask VA and chatbot connect:

- The Ask VA landing page suggests using VA chatbot for general questions in order to get help more quickly.
- The VA chatbot landing page suggests using Ask VA for questions about VA benefits and services that the chatbot can’t answer itself.
- The VA chatbot suggests using Ask VA, at the end of a conversation, if it can't help answer your question itself.

### Potential integrations between Ask VA and chatbot

There are additional ways these tools could integrate and/or support seamless transitions between one another, with varying levels of complexity.

#### A user starting from chatbot
- Automatically populate Ask VA forms with a user's conversation history from chatbot
- Allow users to complete Ask VA forms directly within the chatbot interface
- Enable users to check the status of their Ask VA inquiry through either Ask VA or chatbot

#### A user starting from Ask VA
- Detect a simpler question and suggest someone uses chatbot instead
- Show which types of questions chatbot can answer immediately
- Recommend chatbot for certain categories in Ask VA

## Potential MVP

We've prototyped a potential integration MVP.

> [!NOTE]
> This [Figma file](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=763-6807) illustrates this potential MVP we're proposing.

1. Authenticated user opens VA chatbot on VA.gov.
2. User asks a question about sign in issues.
3. User learns that chatbot is unable to answer their question and is offered the option to send their question to a VA representative instead.
4. User chooses to continue and (remaining in the chatbot interface) and reviews their question it's submitted.
5. User receive an Ask VA reference number through chatbot.

This MVP requires a user to be authenticated, so we can pull their first and last name and contact email from VA Profile.

While the user completes these actions, the system(s) will (at a high-level):

- Determine the category, topic and subtopic (and therefore, routing queue) based on which chatbot skill is triggered.
- Prefill required fields from VA Profile.
- Send an Ask VA inquiry to Ask VA's CRM.
- Create a new inquiry in CRM and generate an inquiry number.
- Share an inquiry number back to the user.

### Key considerations

When designing this example, we did not closely consider CRM integration or constraints. We also intentionally picked a scenario that is simpler: a general question that relates to an existing chatbot skill. And we have pre-determined the category, topic and subtopic in order to pre-determine and link a routing queue to a specific chatbot skill.

#### On pause as of May 2025

This initiative is in on pause as of May 2025, due to competing priorities.

In the future, we will:

- **Regroup on scope.** Chante and Chris mentioned concerns that there will be less sign in related inquiries through chatbot if MVP is only available to authenticated users. And because many sign in issues need to be re-routed to credential service providers (CSPs), this would be a circuitous user flow. We think it's worth re-grouping on the MVP focus: either focus on unauthenticated sign in questions, or authenticated questions about another topic.

We also plan to consider things like:
- Would the Ask VA representative from the sign in team have all the information they need to answer this (type of) question?
- How does the sign in chatbot skill need to evolve in order to support this MVP?
- How would this idea scale to different types of general sign in questions? For example, if they need to go to a different routing queue?
- How would this idea scale to different categories and/or business lines in Ask VA?
- How would this idea scale beyond general questions?
- How would this idea scale to unauthenticated users?
- Is it safe to require user's to send PII through chatbot? And how would users feel about doing so?
