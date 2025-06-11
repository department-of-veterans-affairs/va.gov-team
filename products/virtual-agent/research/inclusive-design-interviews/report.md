 ```yaml
 ---
product: virtual-agent
type: research-findings
date: 2022-07-12
authors: ["Shane Strassberg", "Rachel M. Murray"]
tags: [
  "inclusive design",
  "accessibility",
  "chatbot",
  "508 compliance",
  "virtual agent",
  "VA.gov",
  "screen readers",
  "user research",
  "Veterans"
]
---
  ```

# Chatbot Inclusive Design Research Report   

#### Shane Strassberg and Rachel M. Murray, [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/inclusive-design-interviews/research-plan.md)

## Introduction

A well-developed and maintained virtual agent will help users solve problems and complete tasks on their own with little to no human involvement at any time of day. Ultimately, the problem we want to solve with our virtual agent is to help the Veteran self-serve and find information more easily as part of a larger Omnichannel strategy (led by VEO) to provide veterans with seamless access to information. A proof of value (POV) was created with a preliminary set of features and content but during development we encountered a number of Section 508 accessibility issues identified during Staging Review by the VA accessibility SME and by the Virtual Agent development team.  We conducted interviews with blind Veterans to validate if these issues occurred and how they affected the user experience.

## Research Goals

We understand that a large percentage of Veterans live with disabilities, and that certain disabilities - in particular vision or visually impaired/blind users or those with cognitive challenges - can prevent Veterans from using a chatbot. In order to prevent biases in our research, we want to include the perspective from disabled Veterans to better understand the following aspects:

- Background: Understand if participants have experience with chatbots
- Prevalence: Understand if participants experienced the accessibility challenges we previously identified
- Product use: Understand if participants want to use a VA chatbot, and if so, what would they use it for
- Satisfaction: Understand if participants would not use the VA chatbot because the accessibility issues

In particular we focused on the two issues classified as [508 Defect 1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-1) (i.e. the most severe, ‘must fix’ issue). These issues prevent product launch on VA.gov because they severely disrupt the user experience for those who use assistive technology.

- [’Links in the chat log must be keyboard focusable’](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25156)
- [‘Links must be announced to screen readers as links’](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25160)

We were also interested in goals of self service among Veterans, such as: 

- How the Veteran normally find information on VA.gov - channels, why do they choose that channel and how often they use it
  - Does the Veteran sign into va.gov (using Veteran’s info) - why or why not
  - What do they do when they can’t find the information they need on VA.gov
- How often the Veteran speaks with a VA help desk/contact center
- Have the Veteran ever used a chatbot or virtual agent online
- Did the Veteran use the coronavirus chatbot on VA.gov - why or why not
- What functionality would the Veteran find valuable in a chatbot
- What content (questions and topics) would the Veteran find valuable in a chatbot and what language would the expect

## Research Methodology

We recruited a number of visually impaired/blind Veterans who use screen readers on VA.gov. They were invited by Perigean to participate in the research study.  We conducted direct interviews and moderated observation of them using the virtual agent prototype. We asked them to enter text into the chatbot in the form of a question or phrase and screen recorded their interactions.   

## Hypotheses 

We identified a number of hypotheses we wanted to validate or refute using data which were tied to our goals

- Participants will encounter the same problems we identified during development
- Veterans with visual disabilities may still be interested in using a chatbot rather than other channels such as the main VA.gov site or speaking to a contact center agent.

## Participants

- Geographically diverse: 
  - NM, MD, MO
- Gender: 
  - Men: 3
- Age range:
  - 55-64: 2
  - over 65: 1
- Race:
  - Black or African American: 2
  - White or Caucasian: 1
- Education:
  - High school diploma or equivalent (ex: GED): 1
  - Some college (no degree): 1
  - Associate’s degree / trade certificate / vocational training: 1

## Key Findings

We identified 5 key findings tied to the goals and hypotheses:

- Links in the chat log were not keyboard focused.

- Links were being announced as "messages" or just text and not links.

- Many of the additional accessibility issues which were less urgent than defect 1 in severity were observed, including the challenge of finding the chatbot on the page in the first place.

- Blind Veterans can differ in how they use technology, including assistive technology

- Despite the accessibility challenges participants were eager to use the chatbot and indicated they would want the same feature set (such as authentication) as the non-blind population.

## Details of Findings

- Links in the chat log were not keyboard focused.
  - We validated that this issue occurred and that the links added to the VA chatbot's responses are not reachable by keyboard when navigating through the page with the TAB key. 
  - This is a defect 1 status (i.e. the most severe, ‘must fix’ issue) according to Section 508, meaning it needs to be fixed before launching on VA.gov

- Links were being announced as "messages" or just text and not links.
  - We validated that JAWS and VoiceOver are reading out links in the chatbot responses as "LINK TEXT, message" or just reading out the link text and never saying "link".
  - This is a defect 1 status (i.e. the most severe, ‘must fix’ issue) according to Section 508, meaning it needs to be fixed before launching on VA.gov

- Many of the additional accessibility issues which were less urgent than defect 1 in severity were observed, including the challenge of finding the chatbot on the page in the first place.
  - This is in reference to the issue of [‘navigation through the chat log must be easy and intuitive’](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25164).  If one navigates off the chatbot, it is difficult to navigate back onto it, and depends on the participant using VoiceOver’s Form Control menu navigator.
  - For the [‘chatbot text input must have a yellow focus halo when it receives keyboard focus’](https://github.com/department-of-veterans-affairs/va.gov-team/issues/25161), we noted the halo appears for the ‘send message’ icon but not for the message input box itself.
  - (In reference to how many more times would you type before you gave up engaging with the bot)? “With me, I have a sharp patience with these bots. You would have gotten 2 shots. Normally it would have given me some kind of answer. If you get on the wrong place on the screen, you have to go to the right place on the page. I was scrolling up and down just to see an answer. Also if there’s a timeout, there needs to be one for screenreaders for us to type or find something.  I’ve seen it before and it’ll time out, or say ‘are you still there’.” (Participant 4)

- Blind Veterans can differ in how they use technology, including assistive technoloyg
  - “I have to remember to turn off automatic form fields, because the VA website doesn’t say that.  It can be inconvenient - used to be the only way to navigate that. [Now] I use the element navigation on a web page [not buttons]. I like to use that, it’s easier for me. Some other vets use the tab key but that gets me nowhere” (Participant 1)
  - I have not - my spelling is terrible - if i could dictate into it.  Anything complicated for words.  Typically if i want to use a chatbox, I type it up in MS Word first, spell check it and then copy it into the chatbox. (Participant 1)

- Despite the accessibility challenges participants were eager to use the chatbot and indicated they would want the same feature set (such as authentication) as the non-blind population.
  - Participants validated many of the same challenges such as appointment management. “It would be nice if i could schedule an appointment and it launched and so better off if you were signed in and check my appointments… pretty much like a calendar app on iphone.  I would prefer it on my iphone, no question about it.”  (Participant #1)
  - “I’m pretty excited about these types of products. [...] Being a blind consumer, I don’t deal very well with paper. A form that could be pre-populated with my information would be helpful. You have all my information already, so there’s no reason you couldn’t just populate it already” (Participant #1)
  - “Now that I did it [tried the chatbot], I’m curious and fascinated at the same time and like I said, something that doesn’t use resources or use a whole lot of time. Resources being sometimes call the VA and that person doesn’t have the answer, and they transfer you to the department, and it’s not the department you should be talking to.  You can get transferred two or three times and that can be frustrating. (Participant #2)

    **To view transcripts and video clips from this research, you can go to this Github [folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research/inclusive-design-interviews/transcripts-and-video-clips).** 

## Results of hypotheses

The results our work for the hypotheses included:
- Participants will encounter the same problems we identified during development
  - Results: we validated some of the problems existed but not all of them, and would require additional research and partnership with Microsoft to ensure these are solved.

- Veterans with visual disabilities may still be interested in using a chatbot rather than other channels such as the main VA.gov site or speaking to a contact center agent.
  - Results: we validated that Veterans would still be interested in a chatbot and seemed excited at how it might help them.

## Next Steps

Please see the final report for the Virtual Agent project for next steps, including actions to be taken for the product roadmap and additional research areas.The team recommends a [full 508 audit] (https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md) for future iterations of the chatbot, and recommends continued evaluations through iterations utilizing testing with screen readers, for example, during development.

## Appendix

### Conversation guide
[Conversation Guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/virtual-agent/research/inclusive-design-interviews/conversation-guide.md)

### Interview transcripts
[Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/virtual-agent/research/inclusive-design-interviews)

### Pages and applications used
Pages tested: https://staging.va.gov/virtual-agent-study/ 



