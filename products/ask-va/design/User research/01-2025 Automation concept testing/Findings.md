# Research findings for Ask VA: Automation concept testing

Office of the CTO - Digital Experience (OCTO-DE), Ask VA, Ask VA VA.gov Team

Last updated by @tygindraux: March 12, 2025

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

1. Inputting your question to begin 'asking a question' through Ask VA is intuitive.
2. It's helpful to be aware of the other options when you confirm if a category or topic suggestion is correct.
3. Figuring out how to use the edit button to update a category, topic or question is clear.
4. If you need to edit the category or topic that's been suggested, it's difficult to choose from a long list of options.
5. It needs to be clear how much information you need to add to your question in order to get a more accurate suggestion.
6. Knowing that a suggestion has been generated using automation can impact how much you trust the suggestion.
7. Data models are not familiar to most people, however, receiving a recommendation based on past questions people have asked is understandable.
8. People will choose to abandon Ask VA in favor of clicking a helpful link to get more information.

**Update**

|Hypothesis|Conclusion|Explanation|
|:--|:--|:--|
|Participants won't notice or point out the progress indicator without prompting.|Definitely False|Many participants noticed and pointed out the progress bar from the first page in the form, without prompting.|
|Participants won't notice or point out the lack of a progress indicator without prompting.|Likely False|2 of 3 participants who didn't see the progress indicator mentioned that something showing your progress would have helped.|
|Percentage will be enough information to motivate participants that they're making progress.|Likely True|At the beginning, percentage was daunting but later on, it was motivating. It helped people, at least, know they were progressing.|
|Participants will be able to start a new question from the authenticated dashboard without issue.|Definitely True|All participants were able to start a new question from the dashboard.|
|Participants will understand not to use Ask VA in emergencies.|Definitely True|Many participants noticed and appreciated content about emergencies. It's clear Ask VA is for non-urgent questions.|
|If participants don't understand that they need to sign in at first, it will be clear once they're prompted to sign in.|Definitely True|Even though some participants chose not to sign in at first, they could tell the VA may ask them to. They weren't surprised by the modal.|

## Key findings

**Update**

1. It's not clear what you can ask about and how to start asking, until after you sign in.
2. People are motivated to sign in for a more personalized response, not necessarily because it's more secure.
3. Although the percentage is daunting at first, it's later motivating and helps you know when you're done.
4. School information fields are interpreted inconsistently without more details.
5. It's clear why information is pre-filled, but there's uncertainty about what's impacted if you edit pre-fill.
6. Most people notice their progress being saved and expect to find their unfinished question in their dashboard.

## Details of findings 

### Finding 1: It's not clear what you can ask about and how to start asking, until after you sign in.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

People expect a quick way to ask a question, so they look for an input field right away.

They also look for information about what to use the tool for. So, content about emergencies is noticed and appreciated.

After sign in, they will click on the 'Ask a new question' link which is a clear call-to-action.

When they read the list of category options, they're more clear on what subjects you can ask about. Still, some people reach the end of the form surprised to not have an answer yet.

> "So first, I would definitely read through this to find out if this is where I should submit my question."

> "It says all questions about education benefits, work study and debt [...] Would this be a venue that I would be asking questions about disability as well?"

> "I do wonder whether it might be beneficial to [describe] the types of information that you might be able to get from this type of platform."

> "That is the most important thing [...] Because, it's gonna take a while to get an answer. And if you're in an emergency situation, you need help immediately."

### Finding 2: People are motivated to sign in for a more personalized response, not necessarily because it's more secure.

_Labels: `AUD: Veterans`, `PRDT: AVA`, `PRDT: Login`, `PRDT: VA.gov Profile`_

People are unlikely to read the details about why to sign in, and no one mentions security.

Instead, most people are motivated to sign in because they believe they'll get a more personalized response. Some mention pre-fill.

Those who choose not to sign in are aware VA recommends they do. They want to avoid the hurdle, or, are unclear that Ask VA isn't a list of FAQs or search function.

So, although it's not surprising being told to sign in later on,  it still feels like a "gotcha." Why'd you let me not sign in, in the first place?

> "[In] my experience, it's usually better if you have an account [...] you're going to get more specific response usually. And that way you have a place that you can go to, should you wanna see that same response again."

> "[It] notes personal questions about your benefits or someone else's benefits. And to me, that indicates that it's going to be a response more tailored to my experience."

> "I would probably come back to signing in or creating an account, if I didn't find my answer readily available."

> "I feel like it was a little bit of trickery going on [...] I knew I had to sign in, it was just a matter of time."

### Finding 3: Although the percentage is daunting at first, it's later motivating and helps you know when you're done.

_Labels: `AUD: Veterans`, `PRDT: AVA`, `DSC: Progress bars`_

Excluding a progress indicator ensures people won't be frustrated or distracted by it.

However, without it, people are unsure of when they're finished submitting their question. Particularly, if the number of questions feels surprising.

Those who were initially deterred by the progress indicator found it motivating as they progressed in the form. The orange seemed to help it stand out. And it became less noticeable as people went along.

And, although they didn't get a perfect idea of how long they had left, it showed them they were making progress.

> "My first reaction to this [is], 'Oh my god! I'm only 5% complete with this process.' [...] I have a long way to get an answer to this question."

> "[At the end] I would be congratulating myself on actually following through and clicking all of the buttons afterwards. Otherwise I likely wouldn't have submitted it, [but would have] thought that I submitted it."

> "It's kind of surprising in the beginning, but in hindsight I guess it's good to know how far along you are."

> "I think if there's no indication, I'm going to get frustrated, because it was already more screens than I was expecting to go through. [... I need to] know that I'm moving towards the end."

### Finding 4: School information fields are interpreted inconsistently without more details.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

There's various ways to interpret whether you're a GI bill beneficiary. 'Yes' could mean you're receiving benefits, you're eligible, or, you think you may be eligible.

People think school state is required and residency state isn't.

School state is confusing if you're not already in school. And residency state is complex for many Veterans who think it needs to match their DD24.

Although people know files aren't required, they try to think of things that could be helpful, but may not be necessary.

> "I'm not sure how to answer this, because beneficiary, to me, means I'm taking advantage of it. [But] another meaning could be, I can potentially receive it."

> "I guess the school state is required and residency state is not necessarily. But I feel like I should give it, even if it's not required."

> "Sometimes they still want [your hometown state] from your DD214 to make sure it matches."

> "What am I supposed to upload? Why would I upload something? My natural thought says it would be my DD214."

### Finding 5: It's clear why information is pre-filled, but there's uncertainty about what's impacted if you edit pre-fill.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

It's clear that personal information is pre-filled because you signed in.

People expect to edit pre-filled details by clicking into the field and making changes.

But, there's uncertainty about whether those changes will be reflected across VA.gov or just the form they're working on.

Many people continue to expect personal information to be come first after they sign in, before they get into the bulk of the form.

> "That's pretty helpful that I wouldn't have to go through and input all this stuff, especially since I had already logged in.

> "That's my assumption. That if I fix it here, it's gonna reflect [everywhere]."

> "I would honestly have no idea what to think [...] There's nothing indicating to me that if I update my information here, it will update anywhere else."

> "This would have been good after I signed in. So I signed in and VA says, okay, this is who we think you are. Are we right? [...] You're [Hector James], right? And you were born on [...] That's all accurate, and then go into the process of asking the question."

### Finding 6: Most people notice their progress being saved and expect to find their unfinished question in their dashboard.

_Labels: `AUD: Veterans`, `PRDT: AVA`_

People tend to notice their question being saved and find it reassuring.

However, the text, 'Finish this question later' is confusing if you interpret 'question' as the page, rather than the entire submission.

Most people expect to find their unfinished question under 'Your questions' when they sign in to their dashboard.

But some people expect a prompt or aren't sure how to get back to an unfinished question, if they leave the form.

> "So if you get disconnected and you'll sign back in [and] it will allow you to start where you stopped."

> "Finish this question later – does that mean that I could [click] that on all of them, and just get to the end and submit my question?"

> "I would hope that I would be able to go to that initial page sign in, and then I should be able to find questions in progress..."

> "I guess you would click that green box there, we saved your progress [...] I don't know if you can click on that part and it would bring you back [here]?"

## Additional insights

- Overall, the process was simple enough that people consistently get themselves through each question.
- People could find the category and topic in this scenario, despite mention of the number of options to choose from.
- 'I'm the Veteran' is a very clear choice, but it may not be the case if you're also in a business role.
- 'Reason you contacted us' is consistently redundant, confusing and unrelated.
- People want to review their question on the review page, not just their personal information.
- It's expected that the form start at 0% and end at 100% upon submission.
- The difference between My HealtheVet Secure Messaging and Ask VA is more clear after you finish.
- Being able to ask about all different subjects in one place, may be Ask VA's unique selling point.
- When people aren't sure what to expect from Ask VA, they hope for a way to ask their question in free-text and receive an immediate response. They describe tools similar to chatbots, or "interactive FAQ's."
- One person's experience was shaped by their feeling that VA websites  come off unfriendly and monotone.

## Recommendations

1. Make the call-to-action on the home page more clear and focus on type of response.
2. Include the progress bar and set general expectations for length of time to complete the form.
3. Ask submitters to review non-editable personal information up front when authenticated.
4. Let people make temporary, local updates to their contact information.
5. Revisit saved progress feature in future.
6. Review school information fields to assess need and add clarifying content.
7. Move 'Your question' to be the last page and make it easy to review before you submit.

## Next steps

- Draft and handover homepage content and flow –– [#990](https://github.com/department-of-veterans-affairs/ask-va/issues/990)
- Submit an experimental design ticket for the progress bar –– [#1002](https://github.com/department-of-veterans-affairs/ask-va/issues/1002)
- Update designs for pre-filled information – [#989](https://app.zenhub.com/workspaces/ask-va-647a476551689d06655cc815/issues/gh/department-of-veterans-affairs/ask-va/989)
- Put the saved question feature on hold.
- Plan a review with the GI Bill team – [#862](https://app.zenhub.com/workspaces/ask-va-647a476551689d06655cc815/issues/gh/department-of-veterans-affairs/ask-va/989)
- Move 'Your question' to the end of the form – [#992](https://app.zenhub.com/workspaces/ask-va-647a476551689d06655cc815/issues/gh/department-of-veterans-affairs/ask-va/992)

## Further research needed

We are planning research with assistive technology users in the near future. We'll reassess changes we've made to the user experience at that point, and also understand how they work for people who use assistive technology.

## Appendix

- [Research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/04-2024%20Progress%20bar/Research%20plan.md)
- [Conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/ask-va/design/User%20research/04-2024%20Progress%20bar/Conversation%20guide.md)
- [Transcripts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/design/User%20research/04-2024%20Progress%20bar/Transcripts)

## Tools used for synthesis

- [Mural: Research sessions](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713465168695/328ea79e2098927e649e6abad368eeeacd9b2c03?sender=u65f0a75fc7c68f2a5a2a9545)
- [Mural: Research synthesis](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1714494925416/f7a8adacb9722a1a1e93c0770e44553894b15b99?sender=u65f0a75fc7c68f2a5a2a9545)

## Pages and applications used

* Mobile prototypes
  * [Mobile - Includes progress bar](https://www.figma.com/proto/SYvmqLiAKaGtIcePSRRimB/Ask-VA-Prototype-R2?type=design&node-id=4-3012&t=nsOCIdTPCNYYsL6Y-0&scaling=min-zoom&page-id=3%3A2&starting-point-node-id=4%3A3012)
  * [Mobile - No progress bar](https://www.figma.com/proto/SYvmqLiAKaGtIcePSRRimB/Ask-VA-Prototype-R2?type=design&node-id=180-18485&t=YxXJ8ZvaAqwdrCA0-1&scaling=min-zoom&page-id=98%3A4639&starting-point-node-id=180%3A18485&mode=design)
* Desktop prototypes
  * [Desktop – Includes progress bar](https://www.figma.com/proto/SYvmqLiAKaGtIcePSRRimB/Ask-VA-Prototype-R2?type=design&node-id=203-15692&t=PtpWil4syRj0SOTI-1&scaling=min-zoom&page-id=3%3A3&starting-point-node-id=203%3A15692&mode=design)
  * [Desktop - No progress bar](https://www.figma.com/proto/SYvmqLiAKaGtIcePSRRimB/Ask-VA-Prototype-R2?type=design&node-id=304-34611&t=4wr008jJKitxPWX9-1&scaling=min-zoom&page-id=304%3A34270&starting-point-node-id=304%3A34611&mode=design)

## Other supporting documents created

## Secondary research

All of our research can be found [in this folder](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/ask-va/research).

## Who we talked to 
_Complete the demographic info below using information from the Perigean recruitment survey. For those items where you didn't have participants, please mark with "0". You can use "unknown" if you aren't sure if your participants had a characteristic._ 
_[See an example](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/find-a-va-form/initiatives/2021-post-mvp-releases/research/research-findings.md#who-we-talked-to)_

**Recruitment criteria**

_If you had specific criteria that you recruited for, use this space to explain what those were along with other information you feel would be important to understanding your participants._

We talked to **x participants.**

Audience segment:
* Veterans: x 
* Caregivers: x 
* Family members of a Veteran: x  


Gender:
* Male: x 
* Female: x 


LGBTQ+:
* Transgender: x 
* Nonbinary, gender fluid, gender queer, Two-Spirit (Indigenous only), or another gender beyond man or woman: x
* Gay, lesbian, or bisexual: x


Devices used during study: 
* Desktop: x 
* Tablet: x 
* Smart phone: x 
* Assistive Technology: x


Age:
* 25-34: x
* 35-44: x
* 45-54: x
* 55-64: x
* 65+: x
* Unknown: x


Education:
* High school degree or equivalent: x
* Some college (no degree): x
* Associate's degree, trade certificate or vocational training: x
* Bachelor's degree: x
* Master's degree: x
* Doctorate degree: x
* Unknown: x


Geographic location:
* Urban: x
* Rural: x
* Unknown: x


Race:
* White: x
* Black: x
* Hispanic: x
* Biracial: x
* Asian: x
* Native: x


Disability and Assistive Technology (AT):
* Cognitive: x
* AT beginner: x
* AT advanced user: x
* Desktop screen reader: x
* Mobile screen reader: x
* Magnification/Zoom: x
* [Speech Input Technology](https://www.w3.org/WAI/perspective-videos/voice/) like Siri/Dragon Naturally Speaking: x
* Hearing aids: x
* Sighted keyboard: x
* Captions: x


## Underserved groups we haven’t talked to 

_[Complete the VA recruitment checker for marginalized Veteran groups](https://docs.google.com/spreadsheets/d/1pq7TSHZonfpzAQBJj6B2geGHlNUwZEs4DzEvxcRgu0o/edit#gid=1221033726)_

This research does not include the perspectives of the following marginalized Veteran groups:
_List all groups in red from the spreadsheet_
* Group 1
* Group 2
* Group 3

_[insert screenshot of completed recruitment checker]_
![VA-recruitment-checker](link - add image to github folder and link here with .png)
