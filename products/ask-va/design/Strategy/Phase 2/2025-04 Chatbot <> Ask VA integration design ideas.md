# Chatbot <> Ask VA integration design ideas

Last updated by @tygindraux: April 21, 2025

We've started to discuss the potential for integrating Ask VA with VA chatbot. This document describes initial design ideas and includes an example of one approach.

## How Ask VA and chatbot connect

### Ask VA and chatbot link to one another

There are currently two ways that Ask VA and chatbot connect:

- Ask VA suggests using VA chatbot if you have a general question in order to get help more quickly
- VA chatbot suggests using Ask VA if you can't get help through chatbot

### Potential integrations between Ask VA and chatbot

There are additional ways these tools could integrate and/or support seamless transitions between one another, with varying levels of complexity.

#### Start from chatbot
- Automatically populate Ask VA forms with a user's conversation history from chatbot
- Allow users to complete Ask VA forms directly within the chatbot interface
- Enable users to check the status of their Ask VA inquiry through either Ask VA or chatbot

#### Start from Ask VA
- Detect a simpler question and suggest someone uses chatbot instead
- Show which types of questions chatbot can answer immediately
- Recommend chatbot for certain categories in Ask VA

## Potential MVP

We've prototyped a potential integration MVP.

> [!NOTE]
> This [Figma file](https://www.figma.com/design/YoeGJtWzHEH2bX2S4EGyBG/Ask-VA-Form---Phase-II-exploration?node-id=763-6807) illustrates an authenticated and unauthenticated example.

1. User opens VA chatbot on VA.gov.
2. User asks a question about sign in issues.
3. User learns that chatbot is unable to answer their question and is offered the option to send their question to a VA representative instead.
4. User chooses to continue and (remaining in the chatbot interface) answers 1-3 follow-up questions before their question is submitted.
5. User receive an Ask VA reference number through chatbot.

If the user is signed in, we would pull their first and last name from VA Profile. So, they'd simply confirm their email address before sending their question to Ask VA.

While the user completes these actions, the system(s) will (at a high-level):

- Determine the category, topic and subtopic (and therefore, routing queue) based on which chatbot skill is triggered.
- Ask follow up questions to fill in required Ask VA fields, unless they can prefill them from VA Profile.
- Send an Ask VA inquiry to Ask VA's CRM.
- Create a new inquiry in CRM and generate an inquiry number.
- Share an inquiry number back to the user.

### Key considerations

When designing this example, we did not closely consider CRM integration or constraints. We also intentionally picked a scenario that is simpler: a general question that relates to an existing chatbot skill. And we have pre-determined the category, topic and subtopic in order to pre-determine and link a routing queue to a specific chatbot skill.

In the future, we need to consider things like:
- Would the Ask VA representative from the sign in team have all the information they need to answer this (type of) question?
- How does the sign in chatbot skill need to evolve in order to support this MVP?
- How would this idea scale to different types of general sign in questions? For example, if they need to go to a different routing queue?
- How would this idea scale to different categories and/or business lines in Ask VA?
- How would this idea scale beyond general questions? Most critically, is it possible to send PII through chatbot without security concerns? Even if this is possible, how would users feel about doing so?
