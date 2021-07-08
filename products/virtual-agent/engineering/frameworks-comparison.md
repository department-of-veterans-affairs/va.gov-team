# Comparison Matrix

|Property|PVA|MS Bot Framework|Rasa|Salesforce Einstein|Google Dialogflow
|---|---|---|---|---|---|
|Ease of hosting |✔️|✔️|❌|✔️|✔️|
|Frontend customizability |✔️|✔️|〰️|❌|✔️|
|Frontend 508 compliance |〰️|〰️|❌|❓|❓|
|Content Management |❌|✔️|✔️|❌|❌|
|Frontend support & maintenance |✔️|✔️|❌|✔️|❌|
|Testability |❌|✔️|✔️|〰️|〰️|
|Learning curve for developers |✔️|❌|✔️|〰️|✔️|
|Understandable by non-developers |✔️|❌|✔️|〰️|✔️|
|Salesforce Integrations |〰️|〰️|〰️|✔️|〰️|
|Version Control |❌|✔️|✔️|❌|❌|
|Automatic Deployments |❌|✔️|✔️|❌|✔️|

## Legend

|Symbol| |
|---|---|
|✔️|Framework provides this feature or is conducive to this cross-functional requirement (CFR)
|❌|Framework does not support this functionality or CFR
|〰️|Framework may support this feature or CFR but it is not a strong differentiating factor
|❓|Unknown if the framework supports

## Property definitions

|Property| |
|---|---|
|Ease of hosting | Ease of standing up the tool in the supported hosting solutions and moving a bot between environments.
|Frontend customizability | Ability to customize and style the bot frontend beyond the out-of-the-box vanilla user interface
|Frontend 508 compliance | Both out-of-the-box Section 508 compliance and the ability to modify the tool to address accessibility issues
|Content Management | The existence of built-in content mangement tools and the ability to integrate with a third-party content management system
|Frontend support & maintenance | The extent that the framework provides resources or community help for frontend development within the tool, as well as a frontend that is actively maintained
|Testability | Capacity for the framework to support automated testing and testing of intents and flows
|Learning curve for developers | How quickly it takes for developers to get up to speed on the framework
|Understandable by non-developers | The ability for non-technical users to interact with the tool and publish content
|Salesforce Integrations | 
|Version Control | Whether the tool has functionality that allows the tracking of the history of published content
|Automatic Deployments | Ability to publish content to production without any manual intervention

# PVA

Main issues with PVA:
- Moving between environments is difficult and error-prone. Import/export is currently a preview feature and we have repeatedly seen surprising results (#118 , #94)
- Content management: as a low-code tool, PVA lacks version control and the amount of content we have is difficult to maintain within the UI
- PVA has some opinionated behavior that we can't change (eg. can't edit trigger phrases for system topics like greeting and escalate)

Although PVA allows for a quick start, we don't think it offers enough long-term advantages to outweigh these issues. These are some of the advantages and why we don't think they're so important:
- PVA comes with prebuilt system topics that allow you to get started quickly, but replicating the same system topics and trigger phrases in code is not a big effort
- Chat transcripts are out-of-the-box, but we also don't think this would be a big effort assuming it's built into the framework
- PVA is hosted for you. This is helpful in getting started quickly, but hosting a service is a very common early step for projects
- Non-engineers can directly edit content within the PVA portal. Because of the content management issues at our scale, we don't think this is a big advantage, and something nearly as good could be created with some upfront engineering effort

# Microsoft Bot Framework

Pros:
- Code-based, so you can theoretically do anything
- Built-in hosting options with Microsoft Bot Service. Upload your bot, you're done.
- Mature, highly-customizable frontend client.
- Could reuse the frontend we already have.
- Clear escalation path when you want something changed/fixed
- Frontend is very actively maintained.
- Microsoft would be responsible for data management / encryption, etc.

Cons:
- Framework is low-level, so big learning curve to make changes to it.
- Frontend client does have some "advanced" accessibility problems

# Rasa

Pros:
- Design *conversations* so it's more of a domain-specific language than plain old coding.
  - Much of the "code" will be readable by a non-techie!
- But you can still drop down into custom python code to do things like API calls
- The whole bot is in one application - you dont need something extra like LUIS. QnA Maker or something equivalent would probably still be useful.
- Built in high-level framework so we could test that certain phrases triggered certain intents, etc

Cons:
- More DIY of hosting - need somewhere you can put a docker container. This is a big lift in the VA.
  - We have to do all of the hosting-level things too - protect against DDOS, performance test, figure out how and when to scale.
  - Secret management to set up the JWT credentials
 - We haven't found a mature frontend client yet. Accessibility problems seem _very_ high in the ones we have seen. 
   - The frontends don't seem as customizable as the microsoft provided frontend
   - No escalation path when we need/want something changed about the frontend. The frontends are open-source and not backed by a major corporation, so we are at the mercy of the open-source maintainers. The frontends do not seem to be very actively maintained.

# Salesforce Einstein

Einstein would be a great tool to use if you need tight Salesforce integration, but it suffers from the same problems as PVA because it is also a low-code tool. We assume the deployments would work better than PVA but we do not know that for a fact.

Pros:
- Apex Actions allow developers to write code to handle bot functionality
- Access to detailed conversation logs
- Apex Actions can be managed through standard software development practices
- Apex Actions are testable

Cons:
- Very tightly coupled to Salesforce
- Deactivate bot required to edit
- Have not found any ways of doing UI customization yet
- Seems to need a lot more training utterances
- Unclear how to deploy bot
- Usual low code problems

# Google Dialogflow

Dialogflow is the bot offering from Google. It can do many things but there isn't anything to set it distinctly apart from other virtual agents.

Pros:
- Comes with API which seems to allow some form of automation
- Virtual Agents come with support for many languages
  - Make the bot more accessible for someone who's first language is not English
- Tests can be written to test the bot responses 
- Comes with different environments to make deploying from development to production easier

Cons:
- Dialogflow Messenger (Frontend library) is in preview and means it has limited support for the time
- Manual Exports of the bot must be made
  - If the bot is deleted then all data is lost since time of last export
- Long term support is unknown. Google is known for [discontinuing projects](https://killedbygoogle.com/)
- Usual low code problems
