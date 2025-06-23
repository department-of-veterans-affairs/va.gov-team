# Research findings for Ask VA: Automation concept testing

Office of the CTO - Digital Experience (OCTO-DE), Ask VA, Ask VA VA.gov Team

Last updated by @tygindraux: March 13, 2025

Tyler Gindraux [tyler@bluetiger.digital]

**Jump to:**

- [Hypotheses and conclusions](#hypotheses-and-conclusions)
- [Key findings](#key-findings)
- [Recommendations](#recommendations)
- [Further research needed](#further-research-needed)
- [Who we talked to](#who-we-talked-to)

## Research goals

The key goals of this study were to:

* understand how submitters expect to interact with and benefit from automation when asking VA a question online
* understand whether providing recommendations using automation will make it easier to ask a question or receive help

## Research questions

Understand how submitters expect to interact with and benefit from automation when asking VA a question online:
* Do submitters recognize when something is automated? How does this change their experience either way?
* What are submitters key hopes and fears when it comes to automation?
* Is it important for submitters to know when a recommendation has been made using a data model?
* Are there other ways, besides these concepts, that submitters expect Ask VA to be automated?

Understand whether providing recommendations using automation will make it easier to ask a question or receive help:
* How do these concepts make it easier or more difficult for Veterans to submit a question?
* How do these concepts make it faster or slower for Veterans to submit a question?
* How do these concepts make Veterans likely to send a more or less accurate submission to VA?
* Do people prefer to receive a recommended category, topic or resource list and why?
* Is it helpful to abstract the idea of a category and topic (eg. "We think your question is about ... and relates to ...") or insignificant?
* Will people choose to stop asking their question in favor of accessing other helpful resources when they're suggested?
* Which issues do we foresee with implementing these concepts based on submitters' experiences during testing?

## Methodology 

This was a moderated study conducted remotely over Zoom. We used Figma prototypes with limited interactivity and tested on mobile only.

We presented 3 concepts to submitters in varying order to understand how they use and react to them.

- **Concept A: Recommend a category and topic based on a question:** Submitter inputs a question, system recommends a category, submitter edits category or continues with recommendation, system recommends a topic, submitter edits topic or continues with recommendation.
- **Concept B: Ask for a more detailed question to determine category and topic:** Submitter inputs a question, system describes which category and topic it thinks are a good fit, submitter can edit their question if they feel the recommendation should be different, if they don’t reach a successful recommendation, submitter can choose category and topic themselves.
- **Concept C: Provide helpful links so someone can decide whether to continue asking a question:** Submitter inputs a question, system uses question to provide helpful links to other information on VA.gov that may answer their question, submitter can choose to navigate away from asking a question or to continue by selecting their category.

## Hypotheses and conclusions

|Hypothesis|Conclusion|Explanation|
|:--|:--|:--|
|Inputting your question to begin 'asking a question' through Ask VA is intuitive.|Definitely True|All participants were clear on how to start the form. One participant mentioned being surprised they didn't have to provide personal information first.|
|It's helpful to be aware of the other options when you confirm if a category or topic suggestion is correct.|Definitely True|When people lack the context of the which other options exist, it's harder to tell whether your selection is correct.|
|Figuring out how to use the edit button to update a category, topic or question is clear.|Likely False|Although people were able to determine where to click, 'Edit' made some people think they would have the opportunity to type, which is not always the case. For example, sometimes you select an option after clicking, 'Edit.'|
|If you need to edit the category or topic that's been suggested, it's difficult to choose from a long list of options.|Definitely True|All participants struggle to choose from a long list. Although many do end up choosing the correct category, topics are more difficult to understand.|
|It needs to be clear how much information you need to add to your question in order to get a more accurate suggestion.|Likely True|Many participants would choose to rephrase their question. However, some people would write phrases to deter the tool from thinking their question is about something, which would confuse the data model. It's not clear whether people would type too much information or not.|
|Knowing that a suggestion has been generated using automation can impact how much you trust the suggestion.|Likely True|Many people were surprised that the tool suddenly jumped to selecting a category. And were pleased when they "finally" were able to make a choice themselves. However, some people will let the tool guide them and second guess their own judgment.|
|Data models are not familiar to most people, however, receiving a recommendation based on past questions people have asked is understandable.|Definitely True|Most people are unfamiliar with the term 'data model' but do understand what it means when we say we're making a recommendation based on other similar questions asked in the past.|
|People will choose to abandon Ask VA in favor of clicking a helpful link to get more information.|Likely True and False|While most people will choose to explore helpful links when presented, some people will choose to continue with the form if they don't receive the answer they need from a link.|

## Key findings

1. Receiving help or information quickly is the key to a good support experience.
2. If helpful links don't answer your question, you should be able to continue and send your question to VA.
3. Part of a secure support experience is knowing who you're contacting.
4. People second guess themselves and let the tool take them down the wrong path.
5. It's reasonable to suggest categories based on other similar questions that Veterans have asked in the past.
6. People prefer choosing from a list of narrow options, rather than the tool jumping to a conclusion right away.
7. While people are good at identifying if a suggestion is wrong, it's difficult to choose the correct category or topic from a list.
8. When you're asked to update your question, it changes your understanding of what Ask VA is and how it works.

## Details of findings 

### Finding 1: Receiving help or information quickly is the key to a good support experience.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

Most people feel that the key to a good support experience is timeliness.

And 7 business days is too long for most people to wait for information.

People associate automation with efficiency or making tasks easier. 

So if Ask VA provides automated suggestions of helpful links, then people expect to receive an answer more quickly.

Even if you don't get the answer you need, at least you feel like the VA is trying it's best to listen and support you. 

> "[I'm hoping for] an immediate answer or one as soon as possible. I see most of the time it'll take up to 7 days. Well you get impatient, especially as you get older, like I am." P7

> "As soon as I clicked [concept A and B], I immediately got the negative sense of, I’m going to have to go down a loop. Whereas with [concept C], even though it [didn’t give me] what I thought it would, it was knowing that it tried. The positive language, like, ‘this might be helpful, but, you can let us know if this is wrong.” P4

> "Being able to read this would be faster than sending a question to the VA. And even if in the end, I still had to send a question in, I would know a little bit more about what I need to ask and what I need to provide." P4

> "Most of these people have already experienced a great level of frustration. And they have a great level of humility in just asking for help to begin with." P8

### Finding 2: If helpful links don't answer your question, you should be able to continue and send your question to VA.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

When interacting with a digital tool, people need the option to contact someone if they're confused or stuck.

When offered a list of helpful links, it wasn't clear that you could continue the form if you still want to submit your question to VA.

Instead of thinking that choosing a category is to continue with the form, most people thought the category would refine the helpful links on the page.

People welcome the option to continue with the form if they don't receive the help they need in real-time. 

> "I don't like the idea of not being able to choose. I'd like to be able to choose if I don't want to go through these links and I just want to submit my question. I'd want that to be an option." P2

> "If there's resources on every page, that means I don't have to go further. This is as deep as I need to go [until] I've got my answer. So even if it wasn't the right answer, knowing that it's trying to get me the answer, and get me out of the loop as quickly as possible, that in and of itself made me feel better." P4

> "This was the flow I really enjoyed, because of the helpful resources section. Although, I feel like that was a little out of order. I wish the helpful resources would have been [first] after I click continue and [I didn't] have to do the required category, especially since the helpful resources [were] spot on." P13

### Finding 3: Part of a secure support experience is knowing who you're contacting.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

It's important for Veterans to know who they're contacting when they use secure messaging or other tools, like Ask VA.

Knowing makes people feel safe to share certain information. And it reassures them that their question will be answered by somone with expertise.

With Ask VA, people rarely realize that the category and topic define who your question will be sent to.

Understanding this would be clarifying and reassuring. Even if it's not as specific as they would hope.

> "Who's getting the question? Is it somebody with specialized knowledge?" P8

> "[The most important thing when it comes to a good support experience is] making sure that I feel secure with sending those messages. Because I am sending sensitive [information]." P13

> "[There's a category] so that it points you to the right resources." P2

### Finding 4: People second guess themselves and let the tool take them down the wrong path.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

Even when people have a good sense for when a suggestion is wrong, they  convince themselves the tool knows best.

Many people choose to continue, even if they clearly don't agree with the suggestion. Mostly because they want to see what happens next.

This makes the tool feel like a loop, where people expect to continue forward to see what happens. And turn back if they don’t receive the information they’re looking for.

> "I think sometimes AI knows what it's talking about, and I'm the one that's confused." P2

> "[It doesn't] necessarily [matter if it makes the wrong suggestion] because I would still click continue to see what's at the end of the trail. [I'm hoping for] a list of resources." P4

> "I'd rather go down the rabbit hole, climb back out then have to worry, are they going to call me on the home phone [or] cell phone?" P8

> "[I expect] some trial and error. So I would probably continue first, do a scroll, see if anything's there and then hit back and get more specific if I had to." P2

### Finding 5: It's reasonable to suggest categories based on other similar questions that Veterans have asked in the past.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

It's usually clear that a suggestion is based on the text in your question.

But sometimes people think the category has been suggested because it's what Veterans often ask about. For example, 'it's about disability compensation because that's what Veterans always ask about.'

Reading a suggestion is 'based on similar questions other Veterans have asked' is clarifying and can be reassuring. It usually does not raise any concerns.

And it's as technical as we need to be, with most people being unfamiliar with the term 'data model'.

> "It made me feel positive that other people were asking similar questions, honestly. That somebody else had gone down this path." P2

> "Where it said, 'based on your question, this is what we think.' I think it was a pool from other Veterans. [...] It was like picking from a hat. But the hat was the Veterans questions that they generally ask. [That's] how I understand a 'data model?" P13

> "I think it's a reasonable approach [to use other similar questions to suggest a category]. You see it all the time now. Does anybody else have the same question?" P1

### Finding 6: People prefer choosing from a list of narrow options, rather than the tool jumping to a conclusion right away.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

Many people were surprised that the tool suddenly jumped to selecting a category. And were pleased when they "finally" were able to make a choice themselves. 

Partly, because people may not trust the suggestion. And also because when you're given one optoin, you don't have the context to say this is the 'most' like what I'm asking about, given the other options.

When people finally choose for themselves, they expect the list to be narrower, given what the tool already knows about their question.

Most people give the tool one or two chances to get it wrong, before they prefer to choose for themselves or get help another way.

> "When I ask the question it's just boom, we're going here. I didn't want to go there. It took me where I didn't want to go." P1

> "This could become frustrating. If I put this question back in and I get the same result. [...] I would probably call or go in person." P12

> "It would be better if I made the choice [myself]. And then once the AI get perfected, it would be far better to use just ask the question." P10

> "If I was a new Veteran [...] and I didn't know anything about specific departments [...] It [would be] helpful to lean into a tool that is automated to help guide me to the right [place]." P13

### Finding 7: While people are good at identifying if a suggestion is wrong, it's difficult to choose the correct category or topic from a list.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

Most people quickly identify an incorrect suggestion.

However, categories and topics often don't match what people expect or they require further description.

In general, people expect to start by choosing a label that's more specific than a category.

In contrast to the list of categories, people gravitate towards the helpful links because they're specific and include detailed descriptions.

> "It says, we think your question is about disability compensation and relates to how to file a claim. But that's not the question. So that will be incorrect." P13

> "I look at this like it's an onion. You peel the first layer and you peel the second. When all you want to do is cut it in half and go to the core. Like, the choice was health care. My god, that's everything. It's too broad." P1

> "If I did not find my explicit category, I would be a little more inclined to say, okay, can I add a section? [...] Because I would be so worried that even that category that I select, is it specific enough? Is it too general?" P13

> "With these areas like prosthetics or what not, I think there should be a slightly definition as to what that means." P12

### Finding 8: When you're asked to update your question, it changes your understanding of what Ask VA is and how it works

_Labels: `AUD: Veterans`, `PRDT: AVA`_

People's mental model of the tool changes after it asks them to refine their question to provide a different category suggestion. It starts to feel like a chatbot or Chat GPT.

They assume it will use keywords to provide specific help, so they choose to rephrase their question to make it more specific.

People also try to sway the tool away from an incorrect suggestion. Editing their question to say, for example, 'this is not about disability compensation.'

> "I think I would have recognized the flow a lot better [...] if it was more of a conversational layout. [...] I'm rearranging my expectations. Prior to that, I thought I was sending a question, like an email." P13

> "Maybe it's not exactly what you need, so right here, you can add more information. Maybe if you wanted a list, I would put the keyword, 'list' in there. Or if I wanted contact information, I would put 'contact information.'" P4

> "I would click edit and then I would add to it to clarify. I would probably respond with, 'this is not about disability or compensation.' I would proceed hoping that the tool now knows  they don't need to give me that kind of suggestion." P1

## Additional insights

- Most people are familiar with some automated tools, such as Grammarly or even spell check.
- Some people expect Ask VA to know more about them than it does. For example, to make recommendations of benefits they should apply for.
- 'Edit' makes people think they can type something themselves, not choose an option from a list.
- 'Save' and 'update' confused some people, who weren't sure what would happen after they clicked the button(s).
- Some people didn't recognize that their question was repeated on page 2, and assume it's an FAQ instead.

## Recommendations

1. Recommend a shorter list of category, topic and subtopic options based on a question.
- Offer a narrower list of categories to choose from, rather than jumping straight to one suggestion.
- Help people understand labels by providing descriptions, so there's less guessing involved.
- Include content about a suggestion being 'based on other similar questions Veterans have asked' without getting any more technical.
- Let people know which team will answer their question.
  
2. Offer helpful links in the form based on information people share.
- Determine the right moment(s) to offer helpful links based on information people share.
- Make it clear you can still continue with the form if you don't want to click a link or don't find an answer on your own.

## Next steps

1. Recommend a shorter list of category, topic and subtopic options based on a question.
- [x] Develop a [design strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/2025-03%20Design%20strategy:%20Categories,%20topics%20and%20subtopics%20in%20Phase%202.md) to recommend a shorter list of category, topic and subtopic options based on a question.
- [ ] Determine a technical approach to surfacing category, topic and subtopic options above a certain confidence threshold.

2. Offer helpful links in the form based on information people share.
- [x] Develop a [design strategy](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Strategy/Phase%202/2025-03%20Design%20strategy%3A%20Recommend%20helpful%20links%20in%20Phase%202.md) to offer helpful information in the form.
- [ ] Determine a technical approach to offering helpful information in the form.

## Further research needed

We need to do further research as we develop design and technical approaches to category and topic determination and helpful links.

## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Research%20plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Conversation%20guide.md)
- [Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/User%20research/01-2025%20Automation%20concept%20testing/Transcripts)

## Tools used for synthesis

- [Mural: Research sessions](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1739557966526/4ef5e2b0218e17f8d0d315786a36371b0891140e)
- [Mural: Research synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741019038272/da423d820741f3bfa2d830aeea40253cb97e69b8)

## Pages and applications used

- [Prototype A: Recommend a category and topic](https://www.figma.com/proto/ifZqIdl3YRZ7rk3riz7MZN/AVA-Phase-2---Exploration?node-id=117-8174&t=zZCiEN70ehoO9Epu-1&scaling=scale-down&content-scaling=fixed&page-id=117%3A7572&starting-point-node-id=117%3A8174)
- [Prototype B: Ask for a more detailed question](https://www.figma.com/proto/ifZqIdl3YRZ7rk3riz7MZN/AVA-Phase-2---Exploration?node-id=139-2957&t=Znc7llXZ2zSJhRXO-0&scaling=min-zoom&content-scaling=fixed&page-id=134%3A4903)
- [Prototype C: Provide helpful links](https://www.figma.com/proto/ifZqIdl3YRZ7rk3riz7MZN/AVA-Phase-2---Exploration?node-id=73-14487&t=Znc7llXZ2zSJhRXO-0&scaling=scale-down&content-scaling=fixed&page-id=73%3A14484&starting-point-node-id=73%3A14487)

## Other supporting documents created

- [Mural: Start the form](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741702340480/288cfc4797e474c383fb24421fa7a6588f2d7779)

## Secondary research

All of our research can be found [in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/User%20research).

## Who we talked to 

**Recruitment criteria**

We talked to **8 participants.**

Audience segment:
* Veterans: 8
* Caregivers: 0 
* Family members of a Veteran: 0

Gender:
* Male: 8
* Female: 2

LGBTQ+: 0

Devices used during study: 
* Desktop: 1
* Tablet: 0
* Smart phone: 7
* Assistive Technology: 2
  
Age:
* 25-34: 2
* 35-44: 1
* 45-54: 0
* 55-64: 0
* 65+: 4
* Unknown: 1

Education:
* High school degree or equivalent: 1
* Some college (no degree): 2
* Associate's degree, trade certificate or vocational training: 2
* Bachelor's degree: 2
* Master's degree: 1
* Doctorate degree: 0
* Unknown: 0

Geographic location:
* Urban: 6
* Rural: 2
* Unknown: 0
  
Race:
* White: 3
* Black: 2
* Hispanic: 1
* Biracial: 1
* Asian: 0
* Native: 0
* Unknown: 2

Disability and Assistive Technology (AT):
* Cognitive: 0
* AT beginner: 0
* AT advanced user: 0
* Desktop screen reader: 0
* Mobile screen reader: 0
* Magnification/Zoom: 0
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: 0
* Hearing aids: 1
* Sighted keyboard: 0
* Captions: 1

## Underserved groups we haven’t talked to 

This research does not include the perspectives of the following marginalized Veteran groups:
* Other than honorable
* Immigrant origin
* Asian, Native Hawaiian or other Pacific Islander, First Nations (Canada), Native, American Indian or Alaska Native
* LGBTQ+
* Most assistive technology users

![VA-recruitment-checker](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/Images/02-2025-Research-Equality-Checker.png)
