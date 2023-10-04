# VA Chatbot

## Problem Statement

Created in 2021, the VA Chatbot is a well-developed and maintained virtual agent that helps users solve problems and complete tasks on their own with little to no human involvement at any time of day, resulting in decreased time Veterans spend waiting for an outcome, and ultimately decreased call center calls – especially for calls involving simple questions and/or solutions. 

Ultimately, the problem we solve with our virtual agent is to help the Veteran self-serve and find information more easily. While the ultimate goal is to reduce call volumes, due to the amount of content that is available and needs to be rewritten in conversational format, the Chatbot began by targetting smaller targetted content.

The areas we address:

1. Giving the Veteran more direct access to the dense content available at va.gov 
2. Providing the Veteran with another channel to interact with the VA that is available all day

## Existing Features

Up until now, the bot has been trained in the following pages for general knowledge questions: 

* Healthcare
* Disability
* PACT
* Authentication
* Compensation claims and appeals
* Decision Letters
* Sign-in Support

Our current feature in progress is the [Prescriptions Skill](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/product/rx-initiative-brief.md) in partnership with OCC with the goal of allowing Veterans to list, track and refill their prescriptions through the Chatbot. This feature is set to have a preliminary launch in October of 2023 and a full Prescriptions platform integration MVP launch by January 2024.

## Assumptions

- We will have access to the Government instance of the cloud and will be using a commercial instance till it is ready- We are assuming the GCC will be ready by June
- We will build the Virtual Agent learning model using PVA, but we acknowledge there are some technical limitations in regards to version control and automated testing
- We will launch to a small subset of users for a limited study


##  Measuring Success

KPIs depend on the roll-out plan. In an ideal scenario, we would release the POV to about 5% of Va.gov users, and measure the following: 

- Engagement rates
  - How many users interact with the new virtual agent?
  - How many left without interaction?
  - How many users ask multiple questions in one session? 
  - How many ask the same question (in variations)  during one session? 

- Satisfaction rates
  - How many times was the virtual agent able to answer a question? 
  - How many times was it not able to answer a question?
  - How do veterans feel about the interaction?  (feedback)
  - What could be improved? 
  - Are they likely to use this again? 

- Perceived human-requirements
  - How many users directly ask to speak with a human (e.g., phone number) ?
  - How many still want to speak with a human after an interaction? 
  - How many posed a crisis-related statement/question? 

- Content requests
  - What are the most asked about topics by users?
  - What types of tasks did users ask the bot to do?


## Things we’ve learned

_PVA Technical Analysis_

- What do we lose if we go PVA over custom development?
  - Expect that long-term maintainability of the core bot will be significantly harder if it keeps getting more complex.

- What do we gain if we go PVA over custom development?
  - Probably very smooth integration with omnichannel later
  - Probably very smooth integration with any of the out-of-the-box capabilities that Microsoft already offers
  - Less/no dev effort required for some core dialogue sequences (i.e. welcome, start over, escalate)
  - Expect a quicker working version of the final product
  - Expect more analytics stuff out of the box - transcripts, etc

- What do we think won't change much either way?
  - We expect that we still have to potentially write software to get FAQ content into QnAMaker
  - Complicated multi-turn steps will have to be code (i.e. checking claim status)
  - We expect we still have to do a custom frontend to be sure accessibility concerns are met
  - We expect a need to draft content directly (instead of automation)

- Why does maintainability suffer with PVA if complexity keeps going up?
  - Version control is severely hampered
  - Harder to analyze differences between two versions of the bot (i.e. answering questions like "why did this bug occur?")
  - Maybe difficult to release with unfinished work inside it (i.e. topic A is ready but topic B is not)
  - We should invest some dev effort in giving us the ability to roll back / restore from older versions
  - Unit testing is just not possible

    A unit tests are traditionally the most cost-effective testing tool.
  
    B May be able to write higher-level / more expensive tests using power automate?
  
    C expensive and may require dedicated dev effort
  
    D Downsides to no/few tests:
  
    E refactoring becomes very difficult and risky.
  
    F "Simple" bugs can leak through.
  
    G We might become reliant on manual testing which is expensive and can slow down release cycles.
  
    H Chances of regression are high.

## Release Plan

Current Launch: June 2021

## Key Decisions

- Using PVA to build and train our bot
- Release early in order to monitor/test in June
- PVA in preview mode in May, fully in GCC by June 
