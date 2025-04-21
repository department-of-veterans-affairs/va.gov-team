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

## Sign in question example

We've prototyped one example, which could potentially serve as an MVP for a integration between Ask VA and chatbot.

1. User opens VA chatbot while unauthenticated on VA.gov.
2. User asks a question about sign in issues.
3. User learns that chatbot is unable to answer their question and is offered the option to send their question to a VA representative instead.
4. User chooses to continue and, while remaining in the chatbot interface, answers a few follow-up questions before their question is submitted.
5. User receive an Ask VA reference number through chatbot.

If the user is authenticated, we would
