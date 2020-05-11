# Overview

### Background

Based on the personalization team's initial benefits recommendations [user research](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/User%20Research/Research%20Summary.md) and [technical discovery](https://github.com/department-of-veterans-affairs/vets.gov-team/issues/9590), we have decided that the most viable avenue for surfacing benefit recommendations is to ask people what benefits they're interested in. However, since this idea wasn't something we had initially explored in our research, we wanted to to learn more about users' pereceptions and expectations around this flow.

### Goals

This research aimed to understand the following things:

* Whether asking people about what benefits they are interested in is a useful and worthwhile approach to benefit recommendations.
* User expectations around a question like "What benefits are you interested in?", and whether these expectations are something we can support based on Vets.gov functionality and other VA-related constraints.
* Whether people would behave differently or have different expectations around the benefits recommendation prompt depending on its wording.

# Methods

### Dates

This research took place on **August 2, 2018**.

### Participants

We talked to **6 participants**:

* Four active-duty military
  * All men in their 20s and 30s.
  * 1 Marine.
  * 1 Air Force.
  * 2 Army, one of whom is offboarding soon and has been through TAP.
* Two veterans.
  * Both men.
  * Age range more likely 40s – 50s.

### What We Did

We asked people their thoughts and expectations around [this screen](https://adhoc.invisionapp.com/share/P2GB6ZNYTWE#/screens/284508531) from Mel's blue-sky prototype:

!["What are you interested in?_Concept 1](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Sketches/%22What%20are%20you%20interested%20in%3F_Concept%201.png)

...as well as this screen:

!["What are you interested in?_Concept 2](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Sketches/%22What%20are%20you%20interested%20in%3F_Concept%202.png)

# Results & Takeaways

### Overall, our proposed approach for the benefits recommendation MVP is a viable direction.

All of the participants we talked to understood how to respond to the prompts we showed them and had clear, reasonable, and technically viable expectations of what would happen next. They understood that this approach intended to guide them through the application process.

**Conclusion**: Our team should feel comfortable moving forward in this direction.

### "What benefits are you interested in?" is a confusing question, though it's more confusing to service members than veterans.

Service members have no familiarity with VA benefits, or only have a very high-level understanding of them from TAP, which means they don't quite know how to answer a question like this. All of the service members we talked to said that they would need to click the "Read more about benefit options" link before they could respond accurately to this prompt. 

Veterans have more familiarity and experience with the VA and expressed less confusion over this prompt, but one of them did say that he would also click the "Read more about benefit options" prompt to get a better understanding of each category.

**Conclusion**: If we show people a prompt that says "What benefits are you interested in?", we may want to include a single sentence to describe each benefit.

### We need to set clearer expectations about what will happen after answering "What benefits are you interested in?"

Multiple people said that they didn't know how to answer this prompt because they didn't know what was going to happen next. They didn't want to potentially elicit a response from the website that would either be unhelpful or unwanted.

**Conclusion**: Let people know how we'll respond to any benefits recommendation-related prompt we might show.

### After being asked "What benefits are you interested in?", people expect to see content that outlines how to enroll in benefits.

Common expectations include (1) seeing an overview of each benefit, (2) contact information for someone who can help with the application proess, and (3) a link to the application itself.

**Conclusion**: We should consider all of these as pieces of content to elevate in a flow where we are trying to help people get enrolled in a benefit.

### People want the ability to modify the list of benefits they are interested in.

A couple of people felt conflicted about how to answer both the "What benefits are you interested in?" and "Which of these circumstances apply to you?" prompts because they weren't sure if they should include circumstances that might apply to them in the future, or if they could change their answers later.

**Conclusion**: Allow people to modify their preferences on what benefits they are interested in and how we surface content related to this.

### The more conversational — "Which of these circumstances apply to you?" prompt was very popular with service members. Veterans liked it but had a more neutral reaction.

The service members we talked to lit up when they were presented with this more conversational prompt. They felt like it set a friendlier tone from the VA than they were expecting, and they also felt like it was easier to answer this question because the answer prompts were either clearly applicable or clearly not applicable to their lives.

Veterans liked this prompt but didn't feel especially strongly about this. This is potentially because they already have an established relationship with the VA.

**Conclusion**: Consider a more conversational prompt when trying to help people determine the benefits they might be interested in learning about.

### The answer options for the "Which of these circumstances apply to you?" prompt need to shorter and more scannable.

While people responded well to the conversational tone of this prompt, they thought the answer options were too long and required them to read too much. They preferred the shorter, scannable responses in the "What benefits are you interested in?" prompt (even though they didn't understand what they were!).

**Conclusion**: If we take a more conversational approach with this prompt, we should tighten up the copy and make sure it's succinct and scannable.

### "Which of these circumstances apply to you?" made people feel like they were at the beginning of a "TurboTax"-like flow where they'd be able to refine their results beyond what they would get from the original prompt.

This felt like the most unexpected finding of the research. Almost all the service members we chatted with assumed "Which of these circumstances apply to you?" was the beginning of a longer conversation, and they liked that this approach seemed like it would be more conversational and provide them greater guidance than the "What benefits are you interested in?" prompt.

**Conclusion**: If we do take a more conversational tone, figure out how we can persist that through the experience. Also, set clear expectations about what will happen next so people aren't left feeling disappointed if we don't take a fully "TurboTax"-like approach.

### Service members mentioned that it would be helpful for someone to contact them to help them apply for benefits, or that a live-chat feature could serve a similar purpose.

It's not surprising that service members with little VA insight would want more tailored and personalized help to navigate the benefit application process. Though we can't provide a person to help each veteran, we should try to make the UI feel as much like a personal guide as we can.

Also, eBenefits has LiveChat help and I want to know how we get that for Vets.gov / VA.gov.

**Conclusion**: Include contact information to the Help Desk or VSOs or anywhere veterans can get help with the benefit application process. Also, explore live chat functionality. And finally, design in a way that hopefull eliminates some of the need for one-on-one guidance.

### We need to consider how we can make benefit recommendations work for both first time users and more seasoned customers of the VA.

Service members who have no experience with the VA may need more guidance and help when learning about benefits than veterans who are already familiar with the lingo and structure of the organization. We either need to reconcile these differences or find areas in which we can tailor benefit recommendations appropriately to each audience.

**Conclusion**: Consider different user types and their level of familiarity with the VA in design.
