F
# USWDS AEDP Final Presentation Meeting

### Date: June 5, 2025

## Attendees:
- Matt Henry - USWDS
- Anne Petersen - USWDS
- Kevin Hoffman - VA
- Matt Dingee - VA
- Becky Phung - VA
- Christine Rose Steiffer: - Agile Six
- Kristen Faiferlick - Ad Hoc
- Belle Poopongpanit - Agile Six
- Alex Taker - Ad Hoc
- Fran Cross - Agile Six

## Artifacts
- Clickable [Figma prototype](https://www.figma.com/proto/Ie3VE755qGlK7ONjKGQpNd/AE-Design-Patterns---Marital-Status?page-id=1%3A128&node-id=213-30444&p=f&viewport=67%2C1598%2C0.08&t=4BGyi4jwO9ERPEmP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=213%3A30444)
- Figma [design file](https://www.figma.com/design/Ie3VE755qGlK7ONjKGQpNd/AE-Design-Patterns---Marital-Status?node-id=1013-62957&t=4hhwEOCtjvrVRuqU-0)
- [Proposal for “Ask users for…Marital status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/authenticated-patterns/Patterns/marital-status/VADS%20documentation%20for%20marital%20status%20pattern.md)
- [Meeting slides](https://dvagov.sharepoint.com/:p:/r/sites/TMFAuthenticatedExperienceDesignPatterns/Shared%20Documents/General/USWDS%20slides/AEDP%20USWDS%20Meeting%20-%20Marital%20Status.pptx?d=wda504c72170948faa98b0739b61679c0&csf=1&web=1&e=s9jZ8d)
  _- Unfortunately, we're unable to share the link to the slides outside of the VA organization. I'm happy to email if anyone would like to see them._

_(Note from Fran: The notes below are not verbatim. They have been edited to improve readability, and ellipses added where it seems that text is missing.)_

**Fran**: Opening statements… I've been privileged to come on at the end to work with them. And they're a great team, so I'm looking forward to them showing you what they've done here. And for the team here [Slide 3, Our Team], I want to point out honorable mentions at the bottom. Lynn, who was a rock star product manager on the team and then Adam Whitlock, same rock star lead engineer. We have Alex coming in, who is also excellent at what he does and the rest of the team who is still here, also excellent. And I'm pinch hitting and to get them to the end until the contract ends. And then I think that you folks have probably seen this before [ 4, Our Mission] The mission is creating 4 to 8 reusable patterns and components for personalized, authenticated experiences, making it as easy as possible to implement across products and teams and creating documentation for personalization patterns ready for integration into both the VA design system and the US web design system. I won’t go through the info right under this. Thank you, Christine.


**Christine**: OK, great. So thank you so much for setting us up, Fran, so, for our last pattern for this contract, we took a look at the question of marital status and how the VA asks that question and sort of related questions that are dependent on the answer to that across different forms. We saw it used in a lot of different ways and we saw feedback that users are not always clear on why the VA needs this information.
It has been a source of frustration and pain for folks. As some of these questions can be quite perceived to be quite invasive regarding previous relationships and things like that. So we wanted to create a design pattern to help asking for marital information so that we can create a consistent experience across the VA, avoid any kind of reach traumatization as much as possible, or at least creating more understanding. For folks to know more about why the VA needs this information and just in general again kind of be able to move through any kind of application process more smoothly. So, just as an example of some of the different ways that we are currently showing this across a couple of different forms, both digitized forms and forms that are still just used in the paper. So you can see we are using both the radio button as well as a drop down feature. We have variations in the ways that we're asking, “What's your marital status versus what's your current marital status?” We also have variations in the options there and the ways that we allow people to respond to that question, and in particular you can really see with the non-digitized forms, sometimes we're really jamming a lot of information into the responses that we're providing. So it definitely was an interesting process that we'll take a look at when we get to the research side, how we got to what we are putting forth as our pattern now.  So for the actual required pattern content, we again wanted to streamline this into one standard question and set of responses. And like I mentioned earlier, there are a lot of other types of information that can get asked related to marital status. So one of the important things that we are encouraging teams in our documentation is to only collect the sort of the least amount of data that they absolutely need. In our example at the VA, we're only requiring this particular question [Are you married], and there are two variations of the question—along the same thinking as far as only collecting that minimum amount of data. One of the things that we saw in our forms was that most forms are asking some variation of the standard question [Are you married]. Here that provides a detailed response where they're saying either they're married or they're divorced, annulled, separated, widowed—things like that. There are some forms, however, that just require a simple yes or no. And they don't need any more information than that.
So in order to accommodate those simpler forms and to adhere to that design principle that we set forth of only collecting that minimum amount of data, we have two variations in the questions here. So basically the  standard variation which most forms of the VA would need that gives that detailed list of potential statuses. And then a simple variation, just asking yes or no. And of course then at the bottom we also have the additional info component of why we ask this information and we chose not to create a standard explanation because it is form dependent. We do provide example text for one of the forms but encourage our individual product teams to make the decision as far as work with the content people to make the decision as far as what kind of content should be put in that additional info component. So we'll also take a look at some of the optional pattern content, but this is I think one of the areas that. that USWDS might actually have different use cases that we don't see at the VA. There's a lot of different kinds of information that the VA does need on specific forms related to both their current spouse and then previous spouses, identity information, contact information. You know, details around living arrangements. Of course, the marriage details themselves as far as when and where those happened. And then of course, if there are divorces we sometimes require some information related to the divorces, and there are even some forms where we require information about your current spouse's previous spouses. So this has to do with benefits and how the whole pie is split up, so to speak, when it comes to benefit payments. But yeah, there are some instances when we have to get down to that level of detail. So we're gonna have Kristen walk through here in a bit, an actual clickable prototype to walk through the whole example and the whole set of potential questions that are available to VA designers to pick and choose from. They use that required first question in the pattern, but you know the USWDS might want to consider if there are other kinds of questions that agencies might have that aren't falling into these same brackets that applies to the the VA use case, and whether or not that is the best way to implement it on your side or whether it's better to just implement the required part of the pattern and allow folks to take it from there, so to speak. I did mention before the sort of principle that we took regarding only asking what is absolutely required, and so that's why we're only requiring that first question and anything else is optional. Another important principle for us as we were working through this pattern was to really take a sensitive and trauma informed kind of  approach to creating the pattern and creating the guidance. So we're very lucky at the VA to have a trauma informed design community within our organization. We worked with both the content team members as well as that [trauma informed] community to make sure that the pattern in all of the right places allows for explanation as to why sensitive questions are being asked so that the veteran kind of understands a little bit, or why they need to provide that information. The team was able to do some research as we built this out, which really built from some work that another team had done to start to audit our different forms. We put together an audit of 23 different forms in Mural and exactly how all of those questions were asked—the wording and the variation and the and the flows—all of that. And that was really what helped us to put together the pattern as it is. And we also have, of course, our research repository where we were able to look through previous research, although no one had specifically studied this on purpose. However, we did find that one study had a finding that was so strong, that they surfaced it. Regarding how painful it can be for users to really provide information about past marriages. There you can see a very strongly worded quote there from a participant just about how difficult that is. And so that really helped to shape that approach to the trauma-informed design principles that we followed, and you're welcome to take a look at the Discovery report that is linked there as well if you like [Slide 12, Method and Findings]. We have encouraged the VA researchers to do some additional research, and we do have a team that is completing a study shortly [1010EZ with Renata Keck] that will include our updated pattern designs. So we're hoping to get a little bit more information about reactions to that trauma-informed language and of how we're asking for information about those previous spouse’s partners. As well as trying to understand if we need to ask for any kind of file uploads, where that makes sense to put it within the flow of providing that information. We're hoping that this is kicking off the greater portfolio to be able to study some of these things and improve the pattern from there. I'm going to stop sharing and send it over to Kristen to give us a walkthrough of this.

**Kristen**: Thanks so much. Give me a moment to get figma up here. We'll do a little demo of what the pattern looks like in the VA ecosystem. Someone give me a verbal confirmation if we're seeing Figma [Clicable Figma prototype](https://www.figma.com/proto/Ie3VE755qGlK7ONjKGQpNd/AE-Design-Patterns---Marital-Status?page-id=1%3A128&node-id=213-30444&p=f&viewport=67%2C1598%2C0.08&t=4BGyi4jwO9ERPEmP-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=213%3A30444). [Yes] Thanks so much.All right. So as Christine mentioned, we start the pattern with a question asking for their marital status. Now some forms do need this kind of more nuanced, more detailed response. Others might need to just know, “Are you married?” Yes/No. And so we do have a simplified version that simply asks that we do explain why we're asking for this information and we have some suggested texts, but we do think it should be specific to the form and at least in VA-land, we expect that product teams will work with their POs, and potentially even form assessors, to understand how they can best present both an accurate and clear description of why that info is needed and what will help will help the veteran do with that information. So we'll jump back to the standard version of this and for our walkthrough today, I will select married. We have here then standard info about the spouse's name and date of birth, and as Christine said, not all forms will collect all of this. We're showing the most robust, most detailed version of this that a form might collect, but some forms will only pick and choose specific pages or even specific questions on pages depending on their needs. So name, date of birth for those that require Social Security.
That's here on this information or identity information page. In some cases, forms need a VA file number or maybe even a military service number, in which case those two conditionals would pop over to the next page, because we don't like to show too conditionally appearing fields per page. Some forms need to know about the living situation, and there are other questions that could be asked about someone's living situation, but these are ones related to both living and marital status, and so teams might [display or not] depending on their needs and the sorts of questions they're asking. There might be some overlap that they could integrate here, or they might be asking about [?] separate from the spousal situation, in which case this wouldn't appear in this part of the flow. We will assume that the individual does not currently live with their spouse, in which case there may be a follow up question asking why and there is an option, if you don't have one of these reasons, it's relevant to you, you can write about why you happen to live separately. In the case that you are separate, there's a space to add their address and phone number. And a good number of forms do want to know when and/or where the user got married. So some teams might just state, some might ask area and some might ask both. In most of the VA forms, if it is in the US, we ask for city, state. If this box is checked, then it would be city and country. Some forms also want to know how you got married, and so we have looked across the forms and aligned on some standard answers here, but you do have an option to indicate some other way. If none of these apply to you. And some forms, 
if you select this option, might want additional documentation. So we have a note saying that based on that, we're gonna ask for a bit more documentation, a file upload on the next screen, which we'll go to now. You can upload those using the standard upload component and there are some notes in the documentation that say for optional documents, optional file uploads. We suggest including that upload page here in the context of the flow of this chapter, but there are some teams that ask for a good number of required forms and for them it might make sense to upload all of the forms at the end of the flow so that the user doesn't have to pause here, find that document that would be in this hypothetical case required, and thus, barring them from continuing on. So we do try to be comprehensive in our documentation and note that if you're a team, your form has a situation in which you think it would be best to upload the documents at the end of the form. There's flexibility for that.
Some forms also want to know if your current spouse has been married before, and so this would kick off what we call a multiple response pattern or a list and loop in the VA land. If you indicate yes here, this will ask you to enter the name of your spouse's previous spouse, and we do give them a heads up that we're not going to reach out to this person without contacting you first. That was some feedback we got from a product team that they had found in their research to help kind of ease some anxiety that your spouse's ex wouldn't get called up by VA at some point without your knowledge. So we have an alert there about that. The when and where they were married, similar to what we saw previously for you yourself. How did the marriage end? So we have some standard reasons here, but if that's not the case, you can tell us how the marriage ended. When and where did the marriage end?
So again date and place. And that is typically all of the information, or as much as VA typically asks about our current spouses. A current spouse is divorced, their previous partner, their previous spouse. So here you can review your current spouse's ex. You can click to edit it if you need to, and you'll indicate if they have any other previous marriages. In this case, we'll say no and continue. And then we'll say, “Do you have any previous marriages?” If you indicate yes, then you'll answer a very similar set of questions to what we just saw. So your ex's name, when and where you got married.
How you got married and when the marriage ended? Why it ended? In some cases, there's a place to upload divorce documents, and we can walk through all that if you're interested. But I'll just show you. I think we're actually coming up to the end here. If you indicate no. That does bring you to the end of the marital information pattern. There is, as you can see, a lot of flexibility in that, and some teams will experience in some forms a much shorter flow, just depending on their needs.
So happy to jump through any of that, jump back to specific pages or answer things, and Christine has a few more slides to share as well. So happy to answer any questions now or jump back to Christine and do all questions at the end. Whatever works best.

**Kevin**: Why don't we do questions at the end?

**Christine**: OK.

**Kristen**: Christine, back to you.

**Christine**: So next steps as I was mentioning at the beginning of the call. Our contract end is coming up—not the next Tuesday, but the following. So we are working on our side to zip up all the last remaining pieces with the marital status pattern. So like I mentioned, our contract ends June 17th. So we're wrapping up things both with the marital status and any other loose ends from some of our previous patterns, making sure that all of our documentation is looking good to go. So that teams will be well prepared to pick up any of these patterns after we leave. But if there is any way that we can support USWDS before the end of our contract, please let us know. And it's been great to get to chat with you all every quarter. So opening up now for questions.

**Anne**: I think I have a note and a question. The note is basically just that I appreciate the accessibility consideration of not asking for those multiple conditionals due to the messiness of the JavaScript, which we've kind of seen discussed. Actually I have two questions, but one is super minor. The other is, is this. pattern now documented in a way that can be introduced to the VA design system. s that page ready to go or where are you in that? Or it's more research necessary?

Kristen: Now we've got—Belle let me know if I'm misspeaking or if anyone can—we have got a documentation page copy all written down. Maybe someone could share a link to that [link]. It may still be in draft state, but it's been reviewed by the platform content team and does include some screenshots which, if we have any modifications to make after this call, those screenshots will get updated and popped into our figma files. But we have a final ticket in our last few weeks to move all of that into the design system. So that will be accessible for any team within the VA ecosystem looking to use it. And also if USD S needs it, it will be accessible there as well.

**Anne**: I can bring back my super minor question at any time, but I feel like other people should get it.

**Becky**: I guess I had a question for for you on where you might see this fitting into current patterns since I don't think it's very common on USWDS right now to have a very specific pattern like this. Like, here's how you ask for this specific information.

**Anne**: We do. Actually it's… I mean right now it's all kind of bulked under how to create a user profile, but there's a whole bunch of fairly specific things that are fairly comparable.

**Becky**: Oh. Mm hmm.

**Anne**: Here's the link to that if that's helpful. The way it's organized is not ideal, and we recognize that and we've been wanting to kind of break that out a little bit better, but. There are a few, yeah. So it could very well just sit in here. Pretty easily, but there are other use cases other than for a user profile that this might be used, so it might be its own thing.

**Matt**: It's OK, your IA is not our concern. [Context: joke/laughter]

**Becky**: Yeah.

**Matt**: But we have our own IA problems where things don't necessarily fit.

**Anne**: I mean, don't we all? Naming is hard and organization is, you know, like…

**Matt**: Yeah, I've got . . . I'm going to put some empathy out here. A few that like, sometimes these things just get created in the order of which they were created. And there's very little control. Yeah. That is good to know. That's where it might go.
I have a similar question which is just less related to this pattern and more just you know, given that you're now a much smaller team than you were when we engaged and TMF has finally gotten back to us and said hey, we remember you exist and we'd like a presentation in September of all the fine work you have done. Is there a chance that that first pattern we submitted would be merged by September? Is that maybe a good goal for us to have? Because it would be great to be able to say that things are moving forward and the process that we've used here worked and so on and so forth. You know, we're partners in this. So I just want to make that transparent to you all.

**Anne**: I think, yeah. Totally and very much appreciate the need to to talk to TMF about these things.

**Matt**: That's what's happening.

**Anne**: I think the long and short is that there's absolutely something we can do there in terms of either presenting with you to say this process worked and the hold-up is on our side, or putting it up as experimental more quickly or getting it properly in some of . . . That does depend on some kind of moving pieces at the current moment that might help us in terms of expanding time available from people. That's all in motion, so I can't really say anything more about that, but it's at least a little ray of light that we got fairly recently. So these have more possibility than you know. They did literally yesterday . . . before yesterday.

**Matt**: That's good.

**Anne**: This meeting was yesterday. So yeah, right. So ongoing changes.

**Matt**: That's encouraging, yeah.

**Anne**: We'll try to do the best we can, but we can. I don't want to commit to something that we might not be able to deliver.

**Matt**: OK. Yeah. Let me know how things move on. I mean, this team . . . their contract is done, but the design and form system team is in place and is picking  these patterns up and supporting them. So, if we have an ace in our pocket now.    And Amy, so thank you. Amy turned up on our team, so I think she's familiar with your process and might be able to help us. So the offer I wanted to make was that if you need us to make PRs or make additional changes . . . or do additional testing of that pattern or anything that would help move it up forward, don't hesitate to ask because you know we wanna see it.

**Anne**: Yeah, that very much makes it actually more possible.

**Matt**: Get merged in.

**Anne**: Like now, knowing Amy is over there and knows the insurance and outs of our site in ways that other people would have trouble decoding, to be honest.

**Matt**: Yeah.

**Anne**: Really changed the game, yeah.

**Matt**: Yeah, I thought that might help. Yeah, yeah.

**Anne**: So yeah, let's talk further about that. That makes it . . . that honestly, like changes the entire schema in my head.

**Matt**: OK.

**Anne**: So I wasn't. I didn't wanna count on that availability, right?

**Matt**: No, no, I mean that's why I wanted to offer.

**Anne**: So.

**Matt**: This is why I wanted to raise it because . . .

**Anne**: Appreciate it.

**Matt**: I just would feel much better going into that meeting with them saying like, look, we did it . . . Then, well, we tried.

**Anne**: Totally.

**Matt**: It's close, but you all you know did these things that got in the way.

**Anne**: There are dependencies.

**Matt**: I mean, I just don't even want to have to have that conversation. So we'd like to be able to . . .

**Anne**: Totally, yeah.

**Matt**: We did it. It's done. Leave us alone. 

**Anne**: Yep, yeah.

**Matt**: Great.

**Anne**: And if you can provide some time for maybe to enable that, I think we're right there with you and frankly the one that is closest is that 1 so it's . . .

**Matt**: Yeah, yeah. Yeah.

**Anne**: You know, like kind of inches away. I would have to go double check its current status, but because it got it put. Got a pin in it when Amy Cole left our team. So that's part of the complication here.

**Matt**: OK. Yeah. OK. Well, I'll circle back around as time moves on here just to check in and see what we can do.

**Anne**: Absolutely, actually circling back around like more quickly than not is also welcome. I'm happy to connect personally with Amy Leadom and start seeing what can be done to prep that for publication. Whenever.

**Matt**:  OK. Great. Awesome.

**Fran**: Any other questions, comments? We do appreciate everyone's time today. The team is awesome. They’ve done such good work.

**Matt**: Yeah, I mean, I guess one comment I would make is that.

**Anne**: You really have.

**Matt**: I just listed out a slack message all the forms that ask for this information and the extent to which they go. So I will say we're just documenting the extent to which the VA goes to find this information that is not exactly. We have not pushed back on any part of the VA to say like, why are you asking for this and what do you need it for and what are you doing with it? Like we don't have a question protocol for this for these particular sets of questions. This was more like we did an audit. We could see these questions come up quite a bit in a lot of forms and we wanna make it easy for our teams to handle and to know what to do. That doesn't mean that it is correct that we ask for all this information, and I wonder what the motivation is behind some of it. I mean, you can tell from some of those forms that I shared like what it might be, but I think that's something we might wanna cover in the pattern in the USWDS version at least, is to say, you know, Virginia does it this way.
That doesn't mean that's what you need to be doing. If you don't see the stuff on your paper form, not what we would recommend you adding this level of detail.

**Anne**: For sure.

**Matt**: Cause yeah, I mean it's, you know this team did a great job of making this kind of trauma informed design decisions and trying to mitigate what's being asked here. But I think this is one of those where it's kind of getting into really government . . . why do you need to know this exactly and what does it? What calculus is it changing on the back end? In terms of whether dependent is covered or not or what have you.

**Anne**: Yeah, that's a really good point. The question that then comes to mind is this a very, very good example of the experimental label that we might put on it to say, here's how it's being used? Now we can foresee other use cases, but what can we put out there in terms of what you have done to assess these things . . . do the form assessors come into this at all in terms of questioning what you're asking for and when?

**Matt**: Less form assessors, more like kind of program officers and form owners, yeah.

**Anne**: PO.

**Matt**: Though you know, they'll often just be like what? What's on the paper form? You know, I mean, I think you already have some stuff in the system that says you should ask why these things act, like why we're asking these questions. So maybe just a reminder or a little warning at the top . . . your mileage may vary. You may not need all this or maybe just a big preference for the default of just yes, no should really be enough. In most cases.

**Anne**: Yeah, but as I said, like even if the one that we're just providing kinda by default is the simple one for memory. Having the more complex one, the standard as an experimental variant may make it really clear that, this is out here in this way because it is used in this fashion in this example, but we're not standardizing it that way because in most cases it's not necessary.

**Matt**: Yeah.

**Anne**: Right. As one way to go about it, yeah.

**Matt**: Yeah. That's Yep. Yeah. We haven't pushed down into . . . I keep talking about it. We should probably just do it, but we haven't quite pushed down like our maturity level's all at the top level right now. Either the whole pattern or not. We haven't pushed it down into, like, OK, this variation of it is like less mature than the rest of it. I think it's intimated in the guidance usually right that, hey, yeah, progressive enhancement. But I'd like to get to that point where it would be clear in the system that this is less stable than the rest of it. But I mean in this case, I think the pattern covers what the paper forms cover. I mean, that's not to say that these are . . . the pattern is not lacking. It's just, it's just I think the process you know around to kind of pushing back on the org to be like, why are why do we really need this and . . .

**Anne**: Yeah. Mm hmm.

**Matt**: Think about the burden to the user of having to gather all this information . . . I gotta imagine, not everybody knows off the top of their head where their ex-spouse was married. You know, like this is getting into like kinda . . .

**Anne**: And may not want to know.

**Matt**: It's like a . . . It's like a quiz.

**Anne**: Right. Well, not only a quiz, but yeah, fairly personal.

**Matt**: Right.

**Anne**: But it came to mind because we just published something kind of similar in publishing the 1st the web component variant of the banner, because we had to caveat this has not had the rigorous usability and accessibility testing that we do normally because it's younger, right.

**Matt**: Yeah.

**Anne**: Because we haven't had it as long. So test it yourself please. You know, kind of thing. Different use case, but similar, you know, caveats.

**Matt**: Yeah, yeah. . . . seems like a natural growth of maturity of the system to be like, not everything in here can be like the Gothel we have to have some things that are emergent and that's OK.

**Anne**: Actually, Amy L designed a kind of chart to see where things were on our component maturity scale. Which I think is published so you could go take a look at it if you want to let me go look for it. But yeah, we are finding we need this also.

**Matt**: Cool.

**Anne**: The other really super minor question was why? Why is required capitalized? Surreal content detail. Is this the standard thing over there?

**Christine**: It is.

**Fran**: I think it is, isn't it? Yeah, go ahead.

**Christine**: It is. I don't have knowledge as to why it is that it is the standard to capitalize it.

**Anne**: I think on the Internet I tend to see it the other way, but.

**Kevin**: Is there any guidance in the US system?

**Anne**: Not for that in particular.

**Kevin**: On. OK. Well, let's make the decision right here today not capitalized for all government sites including ours.

**Anne**: I'll go publish that right now and not test it, yes.

**Kevin**: Just tell me what button to hit. Can AI do that?

**Matt**: Yeah. Thanks Kevin. Thanks for the backlog. You just gave me. It's only like 1500 to replace now.

**Anne**: I can imagine.

**Kevin**: I mean capitalized, I mean capitalized.

**Matt**: They’ll love me. I'll be like great, I have a task for you. Hey I think copilot is excellent for this. This is a great copilot test. I'm sure it won't change any other lines of code change.

**Kevin**: A very quick anecdote. I was talking to another designer about using copilot to make this kind of change recently and they couldn't get it to work because it kept being creative.

**Kevin**:  Like it would, it would interpret parts of the prompts that weren't meant to be interpreted. So it would say like find all instances of this URL and replace it with this URL. And it would interpret the word URL in different ways. So sometimes it wouldn't know it as an HTML element and sometimes it would actually find it in like it couldn't do a simple thing like that. Or at least in that instance, I didn't see the prompt, but. I wouldn't trust it to like yet to capitalize or uncapitalize anything 'cause. I feel like it would. It would try to get creative.

Ke****vin: But while I have the mic, I definitely wanna say thank you to the team. 
Everybody involved on the vendor side or vendors side and on the VA side, and especially to the USWDS folks. I know we have . . . We still have our data visualization patterns work that we're doing through October. But you know this team wrapping up in our forms work wrapping up in its current incarnation. It is my hope and my intention to continue collaborating across government to make things better, and I'm really grateful to you, Anne, and to Dan before you. And to the team for helping us pilot working as one government in service of one experience. Because it certainly hasn't been easy in the past, you know, decade-ish of time that I've been involved in this stuff a little less than a decade and it doesn't seem like it's gonna get easier. So you know, our door is always open, slack or otherwise. And I definitely wanna make sure you know we keep in touch past this particular investment.

**Anne**: Completely agreed. And we very much appreciate the ability to collaborate with you all and have some input and talk through some of the issues that we all face in various ways, whether that's your product team, you know, product teams or us trying to figure out what should. Be standardized or shouldn't be standardized?
Kind of across the system. And thus scaling outward to other agencies. Having a very specific use case with a mature team is really, really helpful. So we very much appreciate the ability to work with both you and your contractors to get these presentations, have these conversations . . . all of it has been really valuable to us as we try to continue pushing the system forward.

**Kevin**: Cool. And I may take it as an action item if it's OK with you to schedule a post.
Well, let's wait till we get through October and the presentation Matt mentioned and then maybe we'll schedule like a post. What about this? Should we operationalize retro conversation?

**Anne**: Sounds good. I do also notice sometimes I'm getting different kind of questions from different teams at different times in different venues and that's totally fine. And I appreciate having those conversations, because it also tells me kind of what's top of mind to different teams working on different things. So please do continue to do that even if we're a little slow.

**Kevin**: Well, Becky: or Frances or Kristen or Christine? Anything else you want to share today?

**Fran**: I don't have anything else but Kristen or Christine. Please feel free if you do.

**Christine**: No, this has been great. Thank you all so much. We really appreciate the opportunity to work together and collaborate and help this important work happen, so thank you.

**Becky**: Thank you.

**Anne**: Thank you.

**Becky**: All right.

**Matt**: Everybody thanks.

**Fran**: That's great. Thank you for your time. Bye bye.

