# Forms Library Documentation User Research Notes 

## MR2 Interview - engineer on a BAH team 6/12/20

E: Intro. This entire session will take about an hour. I might occasionally prompt you for time’ sake. We want to hear your honest opinions and won’t be offended by any opinions and welcome your feedback. There are no right or wrong answers. We just want your input to improve your experience and help ensure we’re making good documentation for people who are working on VA.gov. If for any reason you want to stop the session just let me know. Are you comfortable if we record this session?

MR: Yes, that’s fine.

E: Part of the session we’ll do includes an activity that we’ll ask you to complete in the middle. Are you familiar with our forms documentation?

MR: Kind of limited. We’ve used some of it - mostly the design system docs. They have the CSS classes and we try to use that as much as possible.

E: When did you last reference it?

MR: Last week. Looking for help with the margins.

E:  Did you find what you were looking for?

MR: Yes, looking up pixel numbers. I don’t have them memorized.

E: Are there other docs you also reference?

MR: We use the feature flags documentation. Also, if we ever ask a question, product support will send us links and we’ll read that documentation. Also, the documentation in GitHub. We’ll read the docs in the sections we’re working on.

E: Any other feedback about forms docs?

MR: Seems pretty good and product support is very responsive about updating docs if we have any feedback.

E: How do you get to the forms documentation?

MR: I google CSS classes and it’ll take me there - design system forms docs are usually one of the first links.

E: We’ll now move into the activity. Let me pull up my screen. We are considering this to be a quick reference guide for developers. We’re hoping this will be paired with other documentation. But today we’re trying to get your perspective on this type of documentation. In addition to what you see here, there are comments in the sidebar asking for your perspective and feedback. Use the instructions in the blue box to complete the activity. If you get stuck or finish early, just send a message to the DM. There are 3 scenarios in this doc. Answer the questions and comments related to the scenarios. Do you have any questions?

MR: Nope, seems pretty self explanatory. Just respond in the doc with questions or feedback?

E: Yes, feel free to mark up this doc. It will only be used for this session.

MR: I’ll start a timer for 30 minutes and will ping the DM when it’s time to come back.

—— BREAK FOR ASYNC ACTIVITY ——

E: What is your reaction to this documentation?

MR: It looks useful. I didn't look far enough down to read the docs until the end. They look very similar to the US Forms System docuementation: https://github.com/usds/us-forms-system/blob/master/docs/README.md I’ve worked on forms so long that I already know how to do this type of thing. In the US Forms implementation they use common definitions. There’s a lot of common stuff in /src/platform: https://github.com/department-of-veterans-affairs/vets-website/tree/master/src/platform Normally I just copy and paste code from other sources and go from there. They have prebuilt schemas you can pull in and don’t have to link to it. So, looking at the code I know how to make it work. Where there’s a checkbox I know that it’s a boolean and on the pension form it won’t be passed down. Where the uischemas and schemas are. I see you have options and widgets. There is some useful information. There might be a common date definition that already exists. There’s a decent amount of information and I went to places I already knew.

E: I’m not sure how the US forms system is integrated with our forms system. Knowing that documentation is useful is good to know. 

MR: I have links to the repo pulled down locally. We pull it into vets-repo. We are definitely based on it. I just don’t know to what extent. I don’t know if the docs should be specific to what’s in this repo and then point to the US forms system.

E: Did the scenarios you looked at seem clear and useful?

MR: I’m familiar with working with designers, so am familiar with this kind of thing. There backend information that is missing. For a full form, you’d need more information, including permissions. Often there’s someone who can tell you where there are existing bank forms you can go look for and you can get started from there. These scenarios were pretty self explanatory.

E: Do you have other feedback about this type of example?

MR: It looks good to me. Google docs are a good place to have this info.

E: The docs are just in Google docs temporarily. Eventually we’ll be rolling them in with the other forms documentation. We know all the teams are really busy, so thanks for taking the time to help us evaluate documentation. We really appreciate it!


## MR Interview - engineer on a VSA team 6/10/20

E: Thanks for taking the time to participate, etc

M: No problem, I know that there’s been a big initiative so I’m happy to help. 

E: [instructions, start recording, etc.] Our forms library documentation! You are familiar with it, I imagine? When was the last time you referenced it? 

MR: Just yesterday, I was looking at how to arrange certain elements on a page. I forgot how that worked and I looked at that and found it. 

E: Did you find the answer to your question? 

MR: Yes, I did. I had read through it already. I’ve always been referencing it since joining the team, but I had to go through it several times to fill in the gaps and really get it. 

E: So it was useful yesterday. Has there been a time when you couldn’t find the answer you were looking for? 

MR: Yes I was looking for something to do with the review page. I wanted to display a widget on the review page but I didn’t see that listed on the documentation so I had to look in the actual codebase to see how other people were going about that and then trial and error on my side to see if it worked. 

E: had people done that before? 

MR: yeah, I found a few people who had done it so I coped their style. I’m happy that was there in the codebase.

E: Is that your next step, to look at the codebase? 

MR: I tend to look at the codebase first. THere’s more things in the codebase that aren’t in the documentation. 

E: Aside from the codebase, are there any other documents or documentation sources that you reference to supplement what’s provided in the forms library? 

MR: Yeah, I know we’ve taken the forms project out of a different project — the RJFS — to look at what’s going on in the background and see what’s going on behind the scenes. They go into more depth and have more verbiage. 

E: Anything else you want to say about existing documentation? 

MR: I’ve bene making my own notes and am excited to contribute to it. And just talking with other devs that have worked with it longer than I have has been really helpful. RG has been really helpful and helped me get started, he’s a great resource. 

E: Is there anyone else you’ve talked to that you think we should include that has been really helpful for you? 

MR: MC was really helpful for the address portions of the form. I usually post a question in platform support and Chris V has been really helpful. Mainly those guys would be my go to. 

E: We’re going to transition to the activity portion. Google doc … explain scenarios and async activity … 

——— async activity!!! ——— 

E: What is your general reaction to this style of documentation that you just interacted with? The type of code examples and how they were described and things? 

MR: Overall it was good to have a quick reference to all of the options inside the form config object. I never saw the technical description of the form config before like how you had a key for each particular property like that. I kind of like that, but I think it would be better to have that as a code block rather than key — expand under, because it can be a little kind of distracting. But I do like the fact that you have the types. For me I was wondering, can this property accept boolean, function, I think that was really great to have. The code blocks that were there, I think those were good too. Overall it was a good experience. 

E: Were code blocks accurate and complete for the ones you looked at? 

MR: I know for the first scenario that was pretty accurate. I’ve used depends for a test, never had it officially implementing. I didn’t know it could accept an array or an object, I’ve only tried it with a boolean value. For expand under, that was pretty accurate, I didn’t know it could accept class names. Overall it gave some good context and described the problems pretty accurately I think. 

E: Did this type of documentation read as different to you than what’s currently on the forms library? 

MR: I think it dod. On the forms library it’s not as in depth with the links — this property goes here. I like how we had those quick links so if you had a question about any of the properties you could easily jump to that section. On the forms library it’s like “here’s the whole object, you’ll figure it out.” 

E: Have you run into any tasks that could use examples in this type of structure? Are there any tasks or problems or challenges that you’ve run into that could use some documentation like this? 

MR: Yeah I think overall it would be helpful to have the links to each section like you have here. I’ve run into links in the past — how does this work, is it still relevant or is it outdated. If we kept it up to date and listed all the types and all that, it makes the learning process a lot smaller and I can work faster. 

E: Are there any other thoughts or feedback you’d like to share? 

MR: If we had those quick links it would be a great plus. If we can capture every single thing in the codebase that would be amazing because there’s so much. I’m working on something that will provide some new functionality. The key is to have everything centralized and in one spot so that everyone can take a look. 

E: For the new functionality that you’re working on, how would you expect to contribute to the documentation so that other people can use it? What would the process be? 

MR: I would start off in a PR bc that’s where the change happens. Here’s the things I”m adding, here’s an example of how you use it. Then on the forms library documentation, have a section talking about the formconfig option and add in the how it works. I’ve never contributed to the documentation, hopefully it’s simple. 

E: The only other things before we wrap up — can you send a link to the docs site you mentioned? And can you share the notes that you’ve been writing and the documentation you’ve been capturing, we’d love to incorporate anything you’ve learned that has been useful. 

MR: Sure definitely I wouldn’t mind

E: We can wrap up, if you ever have other feedback please reach out, always open 

MR: I hope to see the site implemented soon! This is definitely a step up from what’s already in the forms library. 

--------------

## JC - Interview 6/9/20

Moderator: E 
Notetaker: K

E: Intro notes … Thank you for joining us. We appreciate your help and feedback.

JC: We’re really excited about the changes you all are working on.

E: This entire session will take about an hour. I might occasionally prompt you for time’ sake. We want to hear your honest opinions and won’t be offended by any opinions and welcome your feedback. There are no right or wrong answers. We just want your input to improve your experience and help ensure we’re making good documentation for people who are working on VA.gov. If for any reason you want to stop the session just let me know. Are you comfortable if we record the screen and audio as we talk today?

E: Are you familiar with forms library documentation?

JC: I am.

E: When did you last reference it?

JC: Earlier today. 

E: What were you looking for?

JC: I was looking at the widgets library. 

E: Did you find what you were looking for?

JC: I did.

E: Have there been times when you couldn’t find what you were looking for?

JC: Finding the answer in the documentation is usually the exception, not the rule. That is mostly because the forms documentation is relatively small, so it doesn’t cover the full breadth of the forms system.

E: Do you reference other docs? 

JC: Yes, the forms system we have was forked from a different/3rd party library that someone else built. We needed more things, so we forked it. That original system has docs as well. 

E: Would you mind posting a link to it? 

JC: Here it is: https://react-jsonschema-form.readthedocs.io/en/latest/ Their docs are pretty decent, but because we copied it and changed it, oftentimes what we’re looking for is specific to ours and not referenced in theirs. They also have a playground/sandbox that you can use so you can see live what happens as you change the configuration. The other main tool I use is VSP product platform support. That has become the first place I have gone since you can usually get a direct response to your question more quickly. Usually they’ll point me to someone else who has done it and usually I can find the answer from there.

E: Do you usually ask the question or use the search function to see if someone else has answered it?

JC: It depends. Most questions are specific to our product, so I’ll just ask the question, but if it’s more general I’ll search first. It’s easy to find similar questions, but the 10% difference is important.

E: Do you have other feedback to share?

JC: I think the forms docs are the kind of thing that started out on the right foot, but as the team has grown it’s almost impossible for the docs to grow at the same rate and the docs can’t keep up with all the people pushing code. One thing that worked well in a previous job was that we started using a documentation generation tool that creates docs from comments in the code, which allows the docs to grow at the same rate. I’m sure all the issues I’ve had you’ve heard from other places and I’m sure you’re trying to push through and fix. I’m sure you’ve heard the docs are great for basics, but fall off as you work on more advanced concepts.

E: We’re going to transition into the activity. I’ll share my screen. This is a google doc that has a series of instructions. It’s a quick reference guide for common tasks developers need to perform. Today we’re trying to get your feedback on this quick reference guide format. Follow the instructions in the blue boxes and leave your feedback in the comments throughout the doc. We’ll let you work for 30 minutes then we’ll come back together to discuss. I’ll send you a link to the doc through Slack and make sure you can see and edit it. I’ll scroll down and you can see 3 tasks, 2 scenarios and one set of follow up questions. Do you have any questions?

JC: It seems straightforward.

E: Feel free to mock up the doc any way you like. We’ll reconvene in 30 minutes and wrap up.

—— BREAK FOR ASYNC ACTIVITY ——

E: We just have a couple of wrapup questions. Can you give us a couple of thoughts about your reaction to this style of documentation?
 
JC: A quick reference like this works well if the types of things you’re looking for are simple things. For example, you’re looking for a couple of permutations of how to write the code, if the options are known. The problem is that with more advanced stuff the number of permutations and combinations becomes exponentially larger and more complicated. Being able to identify them and write about them is probably not possible. Usually when you’re working on simple stuff you usually don’t need the documentation that much. This is probably helpful for beginners, but it will fall off after that. The problem we’re running into is the complicated stuff the forms system isn’t designed to do, so the scenarios wouldn’t have been written about before. In most quick reference guides there are articles about certain tasks, but there aren’t use cases or reasons documented for why you’re doing what you’re doing. In the first scenario I wasn’t able to find a subsection that perfectly described what I would do and ended up putting two together. So, I think documenting how things could be combined would be helpful. 
 
E: From your perspective, do you have an example of a complex interaction that you’d document?
 
JC: If people need to build a custom component that is not included in the design system. For example, we were working on a form where we needed to show the Veteran’s basic contact information, but the Veteran couldn’t edit it in the form. The designers didn’t want to give  them the impression they could change it, so we had to build a static card that listed the Veteran’s information. That component doesn’t exist, so we had to figure out how to build that. We’re working with something that isn’t in the forms system and we also needed to access data that isn’t given to the forms system, so we had to figure out how to connect it. This is an example of more advanced stuff. I don't know if  it’s possible to think through these scenarios in advance. Another example would be the BAM 2 team’s implementation to show information that isn’t readily available in the forms system and using custom components. How can you even think of these advanced scenarios in advance? There were other problems like design issues and multiple designs for the same problem. It’s different from documenting design stuff. With the forms system, you can only do this thing three ways. Being able to write articles is going to be a Herculean task. The playground from the other docs would be helpful, but might not even have been enough for BAM 2’s scenario. 
 
E: Thank you so much for participating and we’re excited to dive into your feedback!
 
JC: Let me know if I can help. I’m really passionate about documentation and would be happy to help in any way.


## RG - Pilot Interview 6/5/20

Moderator: E
Notetaker: M

E: Intro notes … we won’t be on video for some of this. We want to hear your honest opinions. We are not testing your ability, we just want your input to help ensure we’re making good documentation for people who are working on VA.gov. I won’t be offended by any opinions and we welcome your feedback. If for any reason you want to stop the session just let me know. Are you comfortable if we record the 

E: Are you familiar with forms library documentation? 

RG: Intimately.

E: Tell me more, when did you last reference it? 

RG: Today. Most of the time if I need a pattern or something I’ll go straight there. Today I … I should say I use the deisgn pages a lot more to check class names and things like that bc it’s in the design docs. Other than that I don’t spend a lot of time looking at react components. I did initially when I was first learning the system. When I need a patten say a group of radio buttons … and if I try to do it any other way it’s very difficult. It’s mostly for reference now. Initially it was reading everything and trying to figure out how the system worked, now it’s for reference. 

E: what were you looking at today? 

RG: Class names and flex box, how the naming system worked. I should know the system but it always seems like I get one letter off, it’s just easier to have a reference handy. 

E: Is that info on the design site or the react site? 

RG: Design site. Sometimes I have a difficult time figuring out/remembering which site it’s on and going to one or the other. One has an “additional info” link that jumps to the right docs, I refer to that a lot. I have a huge list of all these links — the bookmarks are kind of difficult to use. They all start out VA.gov …… design system. And then you have to figure out which of your bookmarks actually apply. When you bookmark a page it uses the title. 

E: So the docs you were reading today about flex box, did that help? Was that useful? 

RG: Yes. The design system has examples for everything so it’s really helpful, it makes it really easy. 

E: Do you ever reference any supplemental docs or websites? 

RG: Sometimes if I forget how to set up a hook, etc, I have to go to react website. Once you have a form in place you don’t have to do a lot of referencing. If you’re doing maintenance you don’t need to reference a lot of stuff, but if you’re trying to add something new you may forget. 

E: Do you have any other thoughts or does anything stand out about the current forms library documentation? 

RG: I think it would be nice to have a link between the client app docs and the design docs handy at the top of the screen. Like I said there are so many links that I have saved in my browser. It might be nice with on boarding if someone already had something organized if someone already had something organized and could share their saved bookmarks and you could boom import them all. 

E: That’s super helpful for us to hear! And we welcome any other thoughts along the same lines any time. I’m going to transition into the activity that we want to do next. I’ll start by sharing my screen and going over some instructions. 

What we’re looking at here is a google doc that has a series of common examples of form components and instructions on how to fit all the parts together. You’ll notice that throughout this google doc, there are comments on the sidebar providing an additional layer of instructions providing tasks and asking for feedback. 

For the next 30ish minutes, you’ll follow the instructions in this document in the blue box and use the sidebar to add your comments throughout the document. This document is specific to you, we’ll make a copy for each new participant. Feel free to mark up the document in any way that is helpful to you. We’ll end this video call, start a timer for 30 minutes, and get us all back together when that time passes. 

There’s nothing you can do wrong here, anything you experience is helpful for us to improve these documents. 

E explains the logistics of the async activity. 

RG: Am I actually doing the thing? 

E: Read and absorb the info. 

—— BREAK FOR ASYNC ACTIVITY —— 

RG: That was quite a block of text to work through! It might have been nice to give it to me in advance so you didn’t have to take a 30 minute break. 

E: We considered giving folks a week or so continue using this and reference it in their work. What do you think about that idea? 

RG: I think a week is too long. If you say “give it a week” I’d wait until the last minute. If you say, “hey we’re going to meet in an hour and go over this” … I did get a little lost in the middle, and I scrolled down and saw that you had more comments and that was helpful. 

E: Want to get your thoughts on general reactions to this new style of documentation. Do you have any initial reactions, thoughts about it? 

RG: It seems awkward to say here, take this, take 30 minutes and then we’ll meet up again. I got lost in the middle. On the first task, I got through it and I knew how far down the page I was and all the comments ran out. Where does the first task end, and where does the second task start? That made it a little awkward. 

E: That’s really helpful. 

RG: Other than that, it seemed like it probably would’ve taken me a lot more than half an hour. I was almost at the end, just glancing over stuff. I’m familiar with some of these patterns, but then there’s others that I’m like oh I haven’t used that. I added a comment to one where the example was confusing when I first tried to use it but then once I knew how to use it I understood. 

E: That’s helpful! We’ll take a look at the comments and things that you left in the document. Is there … in your quick skim through the rest of it, did it seem like there were comprehensive examples? Is there anything that jumped out at you as a gap or that was missing? Not in the activity part but in the code examples, the recipe style examples. 

RG: I think this would’ve helped a lot better if you said “here’s your design, what would you do to implement this” I could have a general idea of where to look and what to look for. Maybe it would’ve been better to have the code first. I don’t know, it was weird and awkward. The example, I was like … if it’s an array, why is validator a key? I don’t know. Some of the code examples just threw me off too. 

Other than that, I guess … it all made … I’ve seen all these patterns before and it makes sense with the way we have it set up. Some things could be different, but I don’t know. 

E: Does this read as different than the documentation that’s currently on the react site? 

RG: It is different because … I think in the document it actually says … it’s all organized like, these are all radio buttons, ok what can I do with radio buttons, I can group them, I can create my own custom one. It all fits together that way, it’s kind of nice to have it organized like that. I guess because you’re just cutting out little sections it kind of threw me off, but you know, I understand. You’ll see that I got confused on the one where you asked me about radio buttons fading in. Do you want me to use expand under or a custom animation thing? But I don’t think we have any documentation on custom animation. 

E: I like the idea of having a design to help reference and to give that as a prompt. 

RG: That’s more of a day to day scenario - here’s your design, what are you going to do? It makes more sense to me that way, but others might disagree. 

E: Does anyone else on the call have questions or anything before we wrap up? 

C: How was the organization? There’s a bunch of random things thrown in there … would you organize it differently? 

RG: I wasn’t sure when I was done with the first task. It just continues on with validation and then using the update schema — which I actually haven’t ever used but I know they use it in the military address component. It seemed like it went off course from validation, all of the sudden you had update schema in there. Maybe there’s too many examples in there for this study? 

Yeah I guess that’s about it. I mean, I don’t know. [chuckles] Conditionally hide groups and pages and components … I don’t know, I think separating it out into tasks and saying “this is task 1-2” would have been helpful. 

E: Thank you so much for helping out and trying out this new style of documentation and this new style of user research! 
