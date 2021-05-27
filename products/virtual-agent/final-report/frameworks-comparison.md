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

|Property|MSFT Bot Framework|Rasa|
|---|---|---|
|Ease of hosting| 👍   | 👎   |
|Frontend customizability | 👍   | 😐  |
|Frontend 508 compliance| 😐 | 👎 |
|Frontend support | 👍  | 👎  |
|Content Management | 👍  | 👍  |
|Testability | 👍  | 👍  |
|Learning curve| 👎  | 👍  |
|Understandable by non-developers | 👎 | 👍 |
|Reporting | 👎👍 | 👎👍 |

# Microsoft Bot Framework
- Pro: Code-based, so you can theoretically do anything
- Con: Framework is low-level, so big learning curve to make changes to it.
- Pro: Built-in hosting options with Microsoft Bot Service. Upload your bot, you're done.
- Pro: Mature, highly-customizable frontend client.
- Pro: Could reuse the frontend we already have.
- Con: Frontend client does have some "advanced" accessibility problems
- Pro: clear escalation path when you want something changed/fixed
- Pro: Frontend is very actively maintained.
- Pro: Microsoft would be responsible for data management / encryption, etc.

# Rasa
- Pro: Design *conversations* so it's more of a domain-specific language than plain old coding.
  - Much of the "code" will be readable by a non-techie!
- Pro: But you can still drop down into custom python code to do things like API calls
- Pro: The whole bot is in one application - you dont need something extra like LUIS. QnA Maker or something equivalent would probably still be useful.
- Pro: Built in high-level testing framework so we could test that certain phrases triggered certain intents, etc
- Con: More DIY of hosting - need somewhere you can put a docker container. This is a big lift in the VA.
  - We have to do all of the hosting-level things too - protect against DDOS, performance test, figure out how and when to scale.
  - Secret management to set up the JWT credentials
 - Con: We haven't found a mature frontend client yet. Accessibility problems seem _very_ high in the ones we have seen. 
   - The frontends don't seem as customizable as the microsoft provided frontend
   - No escalation path when we need/want something changed about the frontend. The frontends are open-source and not backed by a major corporation, so we are at the mercy of the open-source maintainers. The frontends do not seem to be very actively maintained.
