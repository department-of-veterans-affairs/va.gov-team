# Feb 12, 2024 | 10-10 team<>Product Lead - Bi-weekly touchbase


- Notes
     - **Patrick**
          - Update on VES
               - No update
               - Waiting for confirmation from VES on receiving a flag/indicator to trigger a manual workflow - April 1st?
          - Reached out to see if this is statutory thing, or if we can push out to April
          - People are starting to talk about how expanded eligibility starts March 5th
               - Dots did not connect between policy & implementation groups until a few weeks ago
          - Main concern is expansion of eligibility is the first time there is a very clear path to apply for health care without getting a disability rating
               - Usually the process is to file, get rating, apply to VHA, get PG, get care
               - This expansion allows Veterans to skip compensation and just get care
               - If not available online, then the announcement goes out but they can’t apply
               - Not a good look to store and not actually go anywhere yet, but it is the only best option to at least make it available online
               - Could guide Veterans to file paper forms if they want to indicate TERA
     - **Kristen**
          - Eventually will be in VISTA in Environmental factors
               - Does it impact TES reminder, etc
               - Meeting with Toxic group on Friday
     - **Patrick**
          - We may be able to send a True/false flag in April
               - Deliver April (actual date TBD)
               - Send flag that TERA question is Yes or No
               - Figure out a way to get the data to the processor (JSON, PDF, etc)
               - Possibly follow up via HEC call to Veteran if data cant go to VES
          - HEC/VES
               - Needs to figure out how to make this a digital option
               - HEC needs to put pressure on VES
                    - If they want Delivery 3/5
               - Let’s check in on Wednesday morning to see where we are on this
                    - Determine what to discuss with 
          - Decision made to deliver this in March
               - White House directed - decided we are doing this in March
          - 60-day limitation
               - Don’t spend too much time on this
               - A week/couple weeks is the thought here
               - Definitely do not want to make this a longer solution
     - **Hieu**
          - Presented screen number impacts to the Veteran for EZR and EZ
     - **Patrick**
          - Submitting the application
               - Store only 
               - Then submit with TERA data when VES is ready
                    - Need to determine how we can do this
          - March 5th 
               - If VES does not have a plan, we will not release as we do not/can not want to hold data indefinitely
               - We do not want to store the data for more than a couple weeks
               - If someone comes out with a plan to get data to VES in a shorter timeframe, we will not be ready by 3/5 and will communicate that
           - Future state expectation - Prefill
               - Prefill from 526ez
               - There is appetite for making this more seamless between VBA and VHA

               
- **Next Steps**:
     - Keep working on VA.Gov DB solution. The chances of a 60+ day hold in a VA.Gov DB seem slim to none so we don't need to worry about that at this point.
     - Stay agile and await further instructions on implementation (VA.Gov DB, VES TERA flag, launch date, etc.)
     - Follow up with VES team on
          - A) Figuring out how to get data from VA.Gov DB to VES,
          - B) Sending over TERA/No TERA Flag,
          - C) Sending over Tera/No TERA Flag and TERA question data
     - Come up with workflow that directs Veteran to filling our EZ PDF (as discussed above)
     - Continue investigating ways to push/pull data to/from VBA (this is part of the longer term solution)
     - Come up with HEC Agenda (we'll know more about what they know tomorrow)
 
<details>
     <Summary>Transcript of the PO Sync call with Patrick Bateman and Kristen McConnell</Summary>
[Alex Seelig] 15:30:46
Okay.

[Keith Cheung aka Matt Kerns] 15:30:46
Oh gosh, again. Out. I'm kind of embarrassed to admit this, but I would the first to join and because it said that name, I thought that I was the second to join.

[Alex Seelig] 15:30:49
That's okay. I did that on Friday I thought Keith was just like like observing or something like that because again he is a real person that works at our company.

[Keith Cheung aka Matt Kerns] 15:30:50
I was like, Yeah. Good.

[Keith Cheung aka Matt Kerns] 15:30:56
Okay.

[Keith Cheung aka Matt Kerns] 15:31:01
Okay.

[Chapley Watson] 15:31:04
You didn't spend minutes like talking to yourself being like this guy, talking back.

[Alex Seelig] 15:31:07
Thank you. Patrick, we're having some, temporary computer hiccups.

[Alex Seelig] 15:31:15
So, he, Matt Kerns will be playing the role of Keith Chung today.

[Alex Seelig] 15:31:20
So apologies for the confusion.

[Alex Seelig] 15:31:26
Okay. Sorry, I didn't know that conversation I lost my agenda window.

[Alex Seelig] 15:31:41
Okay. Are we expecting? Kristen? And say anything you know about knocking here.

[Patrick] 15:31:51
I think so, but let's, how do we give it 1 min? And, if not, we could get started.

[Alex Seelig] 15:31:57
Perfect.

[Alex Seelig] 15:32:01
Okay.

[Alex Seelig] 15:32:24
Okay. Hey, Kristin. Okay, hey everyone, welcome to PO Sink.

[Alex Seelig] 15:32:39
Unsurprisingly, A lot of questions and thoughts around the terror stuff. And then also just I mean, kind of want to talk about where we are.

[Alex Seelig] 15:32:51
Any updates that are coming in the last 3 h. And then a little bit on where we would like to be at some point.

[Alex Seelig] 15:33:00
And then also talk about our head call on Wednesday. But Patrick, I think maybe I'll start with you.

[Alex Seelig] 15:33:06
I told the team about potentially. Sending this stuff to the ES as a JSON or whatever.

[Alex Seelig] 15:33:12
Start file any updates on that in the last whatever 2 h, 3 h since we talked.

[Patrick] 15:33:19
No. We're waiting for like actual confirmation that VS would be able to at least deliver a the ability for us to set that has terror data or is applying under Terra.

[Patrick] 15:33:36
The indicator. And when that gets set on the enrollment system side, it then kicks off a manual workflow.

[Patrick] 15:33:44
So like that all. The indicator exists, but basically I connect it into the API and then connecting it to a manual workflow is the work that needs to happen as I understand it.

[Alex Seelig] 15:33:51
Got it.

[Patrick] 15:33:52
So I'm just waiting to hear if that's something they can get done by April first and then I've reached out to a couple of other people on like the policy.

[Patrick] 15:34:00
Politics side to see like is March fifth a statutory thing or is it the kind of thing where it's like maybe it could be like March, 20 eighth or I don't know, April first.

[Alex Seelig] 15:34:09
Okay.

[Patrick] 15:34:12
If it would make a, if it would. You know, greatly improve implementation. So we'll say.

[Alex Seelig] 15:34:18
Okay, cool. Yeah, obviously keep us, posted. So we just had some questions kind of about how things like came to be.

[Alex Seelig] 15:34:29
In terms of this push back, like. Can we ask like where were these conversations happening? Patrick, where you were sort of getting this impression that we were going to get pushed for March fifth.

[Alex Seelig] 15:34:39
Like how how did that kind of make its way down to us.

[Patrick] 15:34:47
Like how did. I mean, I guess I just like, I know the way VA works and it's gonna.

[Patrick] 15:34:55
Connect and it has started connect in everyone's minds that. They're gonna make this announcement on February, 26 that expanded eligibility starts on March fifth.

[Patrick] 15:35:04
And then somebody asked, okay, how do veterans apply for this? And someone said, oh, they use the new.

[Patrick] 15:35:11
Toxic exposure section of the 1010 EZ and then someone else said great is that live yet and then someone else said oh no that's not happening until the summer and then like you know, ever kinda looked at each other for a while.

[Alex Seelig] 15:35:21
Gotcha.

[Patrick] 15:35:25
And so I mean at this point they basically. The hack is resigned to the fact it's not going to be available online.

[Patrick] 15:35:35
I suspect their minds will be told to change about that. Once somebody further up the chain understands the consequences of that.

[Patrick] 15:35:46
But Maybe not, maybe everyone's just okay with it. I'm not okay with it, but.

[Alex Seelig] 15:35:54
Gotcha. Okay, thank you. That's yeah, that's really helpful. I think that's kind of what we were trying to figure out which is like how did those pieces not get put together beforehand.

[Alex Seelig] 15:36:05
Like, has anyone put those pieces together? Because when heck said like we're still going live on March fifth, I think a lot of us have the same reaction, which was you know, how is that gonna?

[Patrick] 15:36:06
Good.

[Alex Seelig] 15:36:14
How's it gonna look? How's it gonna feel?

[Patrick] 15:36:14
Yeah, I mean our understanding is it's also not just the va.com 10 like the while they have been working forever to get the terror questions approved and submitted to OMB for their review, like they didn't actually get them submitted until like a couple of weeks ago and they like created they basically filed some kind of emergency request with OMB to get it done by March fifth.

[Patrick] 15:36:39
So like. As far as I can tell, the dots didn't connect between like the policy people and the implementation people until like 3 weeks ago, even though this has been a known thing.

[Patrick] 15:36:52
For probably 6 months or longer. Which like the sad state of affairs for our government, but it's also totally business as usual.

[Alex Seelig] 15:36:55
Okay.

[Alex Seelig] 15:37:06
Okay. Yeah, that's. Again, these, those are kind of I think the. Assumptions we are working under but like I was sort of curious and you know.

[Patrick] 15:37:18
Yeah, I mean I will say like I I wish I had put the pieces together sooner than that. I think we had all the pieces.

[Patrick] 15:37:25
I just don't think I put them together. Or ever pushed on the like, why, do you all need this by March?

[Patrick] 15:37:34
Or what's happening in March kind of thing which maybe would have gotten us a little more information and then we could have been the ones insisting like, do you guys really have a handle on this, which they may have just ignored us, but at least ask the question.

[Alex Seelig] 15:37:45
We could have, yeah, I had that kind of thought too, and I think. Like when we met with them, whatever, like a week and a half ago, and I think Stacey Eccles was like, alright, if it happens in June, it happens in June.

[Alex Seelig] 15:37:57
I was like, That is not that is not the response I was expecting. But yeah, I kinda honestly sort of felt a little bit the same way, which is.

[Alex Seelig] 15:38:07
Does every I think I maybe made a silly assumption which was oh everybody knows and is cool with this and not.

[Alex Seelig] 15:38:13
Oh, this information has not caught up to. Billing, you know, fill in the blank of political appointee or.

[Alex Seelig] 15:38:21
You know, executive level or whatever like that. Maybe. Like data travel slow, or information.

[Patrick] 15:38:27
Yeah. I mean, my main concern is

[Patrick] 15:38:35
This expansion of eligibility I think is really the first time. There is a very clear pathway to apply for VA healthcare without first getting a disability rating.

[Patrick] 15:38:51
So normally as we all know, what happens is like, you know, somebody gets, you know, somebody separates.

[Patrick] 15:38:58
They're seeking VA, disability compensation, VA care. The first step is they file for disability compensation.

[Patrick] 15:39:04
They get a disability rating. They can then take that disability rating over to VHA and if it's high enough they can automatically get you know priority group one or 3 1 2 or 3.

[Patrick] 15:39:13
Get care. This expansion allows veterans to skip the compensation process and go right to VHA care.

[Patrick] 15:39:26
It doesn't mean that they're not going to do the compensation process, but like. They basically allows them to apply directly.

[Patrick] 15:39:32
So if we're telling people you can apply directly for care without a disability. Rating, but then we're not giving them in a way to actually tell us that they have this.

[Patrick] 15:39:46
Toxic exposure history. Then they're just gonna get rejected. It's kind of like, not a great look for the VA.

[Alex Seelig] 15:39:51
Right.

[Patrick] 15:39:57
If we're saying, Hey, we've got this. Expanded eligibility. However, you can't actually tell us that you're eligible, but go ahead and apply.

[Alex Seelig] 15:40:02
This, yeah, no, that was the conversation we had on Friday and also. You know, hey if they tell us this but it doesn't go anywhere nobody ever sees it then that doesn't you know, hey, you can apply, but like.

[Alex Seelig] 15:40:18
Good luck hearing back from us or, you know, don't call us, we'll call you kind of, you know, like all of these are not.

[Alex Seelig] 15:40:24
Good luck. I can see. As you said.

[Patrick] 15:40:25
Yeah. Anyway, we'll see what shakes out. I mean, I would say just keep progressing as ever generously has with.

[Patrick] 15:40:34
This ambiguity. Maybe it may become a thing where like We get the word from very far up the chain that it's like, no, it's fine.

[Patrick] 15:40:43
We'll just use content to direct people to. The paper form in the paper form will be approved.

[Patrick] 15:40:51
By then and released and post on a VA. Gov and lots of people will just file paper forms, or people that are interested in violate or obtaining care under the toxic exposure.

[Patrick] 15:41:05
Expansion will file paper, feel like we can do better.

[Alex Seelig] 15:41:09
Okay, alright, it feels Again, sorry, the other thing we talked about as a team, but it would feel weird if.

[Alex Seelig] 15:41:15
The paper. Forum, which I feel like it's notoriously slower, was able to go live on March fifth.

[Alex Seelig] 15:41:20
And Yeah, the online version couldn't like that to me feels like a about like something we want to discuss is like.

[Patrick] 15:41:27
Yup.

[Alex Seelig] 15:41:27
For us. I mean, obviously the First, you know, they may not understand like there's things that have to go into that, but still.

[Alex Seelig] 15:41:33
I think. Okay. Yeah.

[Patrick] 15:41:36
Does.

[Kristen] 15:41:39
So, I'm trying to track out we have a conversation about. We found out from Hack that they do plan to put it in VISTA and the environmental factors eventually.

[Kristen] 15:41:52
So now I'm trying to figure out, cause we want to put on the 10, and it's actually gonna be going into the record some wording in there to let you let them know that this is gonna filter down.

[Kristen] 15:42:02
Into the record and have some other impact. So with the health questionnaires work I'm doing talking to them.

[Kristen] 15:42:09
To find out when it goes into the environmental factors area of VISTA, does that impact the TES navigator, the clinical reminder?

[Kristen] 15:42:18
What actually happens there. So I'm trying to track that down working with them just so you know, got to talk to OCC and I could.

[Kristen] 15:42:27
I have a meeting with the toxic exposure VHA group on Friday. Good to bring it up, but I don't know if that would.

[Kristen] 15:42:32
Open up they can't wear.

[Patrick] 15:42:36
Yeah, I don't know.

[Alex Seelig] 15:42:41
Yeah, and Kristen, as we discussed in design sync, like if you just could keep us posted on that too, I think that like.

[Alex Seelig] 15:42:48
How this ends up in. This to certain all those kinds of things and like what that looks like. Obviously can kind of dictate how we frame.

[Alex Seelig] 15:42:57
Like I think, just general wanting to understand the better and like I think it'd be good for us just to understand like this is this goes into the medical record and this is what it appears as and you know all those kinds of.

[Alex Seelig] 15:43:08
Like downstream effects that at least in my time here I don't feel like we always say insights.

[Alex Seelig] 15:43:12
That would always be appreciated. So. Yeah, just let us know how that goes.

[Kristen] 15:43:18
Watch you know what I find out of anything.

[Alex Seelig] 15:43:19
Good, yeah, good luck. Also, good luck. Okay, and so, Patrick.

[Alex Seelig] 15:43:27
You said that heck are are still under the impression that this goes in the summer, right, that the online piece goes in the summer.

[Patrick] 15:43:35
Yeah. So Tommy and, the VS team were Checking with heck to see if they wanted to try to bring forward that just little true false.

[Alex Seelig] 15:43:36
Okay.

[Patrick] 15:43:50
Thing to April first if they had the option. I don't know why heck would say no, but Who knows?

[Alex Seelig] 15:43:54
Okay.

[Patrick] 15:43:56
So it's certainly. Ideal state is.

[Patrick] 15:44:04
Well. Ideal state, even though it's probably impossible, is there's a lot of pressure put on hack from high up the food chain that they basically need to figure out how to make this a digital option for this work by March fifth that then put the pressure on enrollment service or the yes and the, you know, enrollment system to figure out a way, even if it's like.

[Patrick] 15:44:27
We send them a filled out PDF and it gets printed at a processing center and somebody takes it off the printer and puts it physically in someone's in box which stinks but like, you know.

[Patrick] 15:44:36
We could use paper for a long time. and we can actually deliver something workable for veterans by March fifth.

[Patrick] 15:44:44
I think next best is, we don't deliver anything by March fifth, but they do get that true false.

[Patrick] 15:44:52
Ter data thing available at the beginning of April and then we can launch then at least with something on the 1010 that says, like, are you apply or you, you know, do you have evidence of Toxicas or something like that?

[Patrick] 15:45:07
Yes or no? And you could say yes or no. And if you say yes, then it goes in a manual or view and a human follows up with you to get your information.

[Patrick] 15:45:14
I think that's Probably, you know, that's the second best state.

[Alex Seelig] 15:45:15
Yes.

[Alex Seelig] 15:45:20
So in that workflow, we wouldn't even have them filling out. The terror questions online it would just be a manual follow-up or

[Patrick] 15:45:30
I ideally we would and we would figure out a way to get their data and then get that data available.

[Alex Seelig] 15:45:32
Yeah.

[Patrick] 15:45:38
To a processor for them to review it. But if we can't if for whatever reason the enrollment system just like they just don't have a place for us to give them the data and link it to an application.

[Alex Seelig] 15:45:43
But that's

[Patrick] 15:45:50
Then yeah, then then the sort of. Something like, yes, I have Tara, you know, information.

[Alex Seelig] 15:45:51
Okay, gotcha.

[Patrick] 15:45:58
Please follow up with me and then the phone call happens.

[Alex Seelig] 15:46:01
Okay, cool. Yeah, obviously kinda We'd love to talk to the to the US folks as soon as.

[Alex Seelig] 15:46:10
Like they figured out I think they're road forward and all pressures have been exerted so kind of devils in the detail.

[Patrick] 15:46:11
Yeah.

[Alex Seelig] 15:46:17
I think from our end, but I think we're, I mean, we're moving forward.

[Alex Seelig] 15:46:21
Well, at the moment we're moving forward as this will go on, until we hear otherwise and that you know includes like the veterans will fill out the whatever they are 5 or 6 terror questions.

[Alex Seelig] 15:46:34
Obviously we've discussed. The risks for that. You know, the 60 day explanation and stuff like that.

[Alex Seelig] 15:46:40
You know, it's some like I'm working on finding places that like making sure that that data goes somewhere after 60 days or that we get an extension.

[Alex Seelig] 15:46:51
Or can get an extension on those 60 days, just to kind of get for risk, but.

[Patrick] 15:46:52
I I mean, you can look at I wouldn't spend too much time looking at it like the chances that we would wanna actually keep data for that period of time without sending it somewhere or like I just, it just doesn't make sense, right?

[Patrick] 15:47:07
Like that's then we're just putting on data for 2 months that. Isn't getting processed.

[Alex Seelig] 15:47:09
Right.

[Patrick] 15:47:10
So I mean, I think at most it would be like we could keep it for a week or a couple of weeks or something until.

[Patrick] 15:47:16
Like there is a path forward. It basically is a little bit of wiggle room, but I don't think we would do like I just don't think we would.

[Alex Seelig] 15:47:20
Okay.

[Patrick] 15:47:25
Anyone would be interested in us holding on to the data for that long.

[Alex Seelig] 15:47:29
Cool. Yeah, no, that's what we were hoping for too, like that this is a exercise in buying time more so then.

[Patrick] 15:47:36
Yeah.

[Alex Seelig] 15:47:37
Any sort of needing to long term solution. Okay. And then, yeah, and so then obviously kind of the next in our sort of.

[Alex Seelig] 15:47:51
Like process flow of solutions. Next most bare bones would be just the yes no the one after that would be actually something figuring out a way to send.

[Alex Seelig] 15:48:01
Send that terror information that they fill out in the 1010 to be yes itself and the US has a way to.

[Alex Seelig] 15:48:07
That information, we will work that out with them once we get there and then obviously there is still the whole like you know ideally at some point this is just a API kind of data transfer to the US that is process and handle.

[Alex Seelig] 15:48:21
Like any of the other information on. Things. Or whatever as intended, I guess, so.

[Alex Seelig] 15:48:31
That's kind of the. That's kind of like the processor. That's the fear of options we're kind of working through.

[Alex Seelig] 15:48:39
So. Just wanted to call that out and And then yeah, just kind of keeping us. You know, keeping us posted.

[Alex Seelig] 15:48:47
Sorry, wanted to double back on something. So for the heck folks. For Wednesday calls, should we?

[Alex Seelig] 15:48:56
Kind of throw this out there, play close to the chest. You can also answer this tomorrow or Wednesday morning.

[Alex Seelig] 15:49:03
If you think the situation is going to evolve.

[Patrick] 15:49:03
Yeah, let's. Let's see where we're at. On Wednesday morning.

[Alex Seelig] 15:49:07
Okay. Okay. Sounds good. I'm good with that.

[Alex Seelig] 15:49:18
And then just something that I wanted to sort of call out really explicitly, but something we've talked a lot about as a team is.

[Alex Seelig] 15:49:27
Patrick in your mind and Erin and Kristen too like what is the benefit to the veteran of doing this in March instead of.

[Patrick] 15:49:37
As I was just told this afternoon, apparently the president decided that they wanted to do it in March.

[Alex Seelig] 15:49:40
Okay.

[Patrick] 15:49:44
So we're gonna do it in March. So we're gonna do it in March.

[Alex Seelig] 15:49:46
Yeah.

[Patrick] 15:49:48
I don't think anyone's gonna tell them differently, so. But I'm sure he didn't make a decision, but someone in the White House decided that this was gonna happen in March, so.

[Alex Seelig] 15:49:52
I mean.

[Alex Seelig] 15:49:56
But you're telling me I can't push back on that.

[Patrick] 15:49:59
I mean, that was my first question was like, hey, can we just get like 3 more weeks?

[Patrick] 15:50:04
And then maybe we can have a more workable solution. Right. That was one person told me that I'm I've asked somebody else, the same question to see if I get the same answer.

[Alex Seelig] 15:50:05
Okay. That's a pretty good answer.

[Patrick] 15:50:16
So we'll save.

[Alex Seelig] 15:50:16
Okay. Okay. And the other thing from the veterans perspective, I mean the other one that we've been working on is obviously some of these folks both been waiting potentially years.

[Alex Seelig] 15:50:27
To find out for health care and. Hopefully now finally have the chance to do that. So. That's been our kind of veteran centric approach.

[Alex Seelig] 15:50:36
Added to most of the base level of the the president. Is also pretty good one. Any, other things to kind of add to that?

[Alex Seelig] 15:50:45
Let's see.

[Patrick] 15:50:47
Okay.

[Alex Seelig] 15:50:49
Okay, cool. All right. We've we've covered a lot of the things I had to go over.

[Alex Seelig] 15:51:01
I've got one other thing, Hugh. If you want to kind of talk through some of the work we were doing around this, I think what would be best for the veterans and sort of the bigger picture.

[Alex Seelig] 15:51:15
And this kind of goes to not having them feel the same thing out multiple times. You, am I turning it over to you?

[Hieu Vo] 15:51:24
You can if you want. Still preliminary, but maybe.

[Alex Seelig] 15:51:27
Okay.

[Hieu Vo] 15:51:30
Let me see if I can share screen.

[Hieu Vo] 15:51:41
Share this

[Hieu Vo] 15:51:50
So I did this exercise last week of just. Mapping out the screens essentially. Red is the required screen.

[Hieu Vo] 15:51:59
Blue is the optional, but you still see it as you're going through the flow. And green is conditional.

[Hieu Vo] 15:52:04
So I just mapped it for our current flow, unauthenticated, easy. And it shows that we have essentially 30 32 can be quiet screen but with the optional screen it goes up to 38.

[Hieu Vo] 15:52:18
And then with the terror questions so the full terror questions it goes up to 47 And then we looked at like the possibility of.

[Hieu Vo] 15:52:27
Having them opting out if they don't want to answer it. So it goes down to 39.

[Hieu Vo] 15:52:32
And then kind of applying that same rule set to the our EZR MVP as well. Just seeing it with the Terra, so it goes from 17.

[Hieu Vo] 15:52:43
To 29 if i'm doing that correctly and then with the opt out is 21 And then this is where this is where it's going back and forth of like Is there a way where we can?

[Hieu Vo] 15:52:54
Essentially making it easier for them to go through especially the easy arc because it's just an update.

[Hieu Vo] 15:53:01
And then me really gravitating back to the confirmation flow. We talked about it right before we started.

[Hieu Vo] 15:53:07
MVP, which is the one where they can review their information if it exists and then they can click Yeah, if it's if it's correct, then can just continue.

[Hieu Vo] 15:53:19
So that means they don't have to go through all the screens. It's more like the confirmation screen and then jumping next to the section.

[Hieu Vo] 15:53:26
And with that, you know, the tariff full terror, it goes from 12 to 24. But if we have the up our option, it goes to.

[Hieu Vo] 15:53:34
16. So it's just something to consider in terms of the bigger picture if We want to explore this.

[Hieu Vo] 15:53:41
Confirmation flow. This is a experimental flow as well. So it's not done by any of that team.

[Hieu Vo] 15:53:48
Just something to consider. And then I haven't mapped out you know all the other EZR flow in terms of like the short the short flow and whatnot, but it gives you a good idea of.

[Hieu Vo] 15:53:59
Of the burden that we are putting the veteran crewist there filling this stuff out.

[Patrick] 15:54:09
Got it. Thank you.

[Alex Seelig] 15:54:10
And yeah, obviously, but like one of the things that would underpin this and it's something we talk to heck about, it's something we talked to.

[Alex Seelig] 15:54:18
The 5 2 6 team about is. A world in which VBA and VHA share information with each other.

[Alex Seelig] 15:54:24
Or at least we. Tell them to go talk to each other in some capacity so that he veteran is not filling out something.

[Alex Seelig] 15:54:31
On the 1010 easy that they literally just filled out. Whatever it is, the 10 or the 15, EZ, 5, 2, 6, 5, 2, 6, maybe that's high in the sky, but

[Patrick] 15:54:41
I mean, I do like every time. Every time this conversation comes up, like I don't want to minimize like the benefit of like pre-filled information or maybe I'm overstating the benefit of pre-filled information like The idea is that we would be pre-filling, at least on the ease, most certainly on the easyR, but definitely on the EZ, like we potentially are reusing data that

[Patrick] 15:55:03
they just entered on the 5 26 or they previously entered on the 5 26

[Alex Seelig] 15:55:10
Oh, yeah, that's our dream. I mean, that's our dream state. I think.

[Alex Seelig] 15:55:15
After talking to heck on Friday. I think we're also like Even if there's a way that you we can just tell you 2 to talk to each other like that's better than them just.

[Alex Seelig] 15:55:24
Filling it all out for a second time, but yeah, absolutely the dream state is this pre-fales from there.

[Patrick] 15:55:32
Yeah, sorry, you're speaking specifically about the Ter data or you're just a general comment about 5 26 and 1010 easy working together.

[Alex Seelig] 15:55:40
Oh, specifically about terror data, but. Bigger, bigger picture. Yeah, no.

[Patrick] 15:55:43
Okay. Okay.

[Alex Seelig] 15:55:47
Let's break down barriers.

[Alex Seelig] 15:55:52
Let's make VBA and See, I, we're coming at this from.

[Patrick] 15:55:58
Yeah, no, I don't think.

[Patrick] 15:56:03
Hey. I think there is plenty of interest in making. Making it a more seamless. Application for both health and disability compensation.

[Alex Seelig] 15:56:04
Sorry.

[Patrick] 15:56:18
I mean.

[Alex Seelig] 15:56:24
Well, obviously we'll get to. Arch Fifth or whatever. And, but then after that, start to kind of make this out.

[Alex Seelig] 15:56:36
I think that's something that we absolutely love to do because it's I think could be hugely sort of beneficial to the veteran.

[Alex Seelig] 15:56:42
And. Yeah. And Kristen, I know like we talked about this too.

[Alex Seelig] 15:56:47
So like you said that there were a bunch of groups that were also kind of looking into this. So.

[Alex Seelig] 15:56:51
If you need us to. Talk to them. I don't like testify before them. I don't know like what this severity of those groups are but like basically any any animal we can provide for you.

[Alex Seelig] 15:57:02
Anything that says. Veterans don't like filling out the same form or the same information twice, especially if they're doing it early on the same day, you know, like.

[Alex Seelig] 15:57:10
Whatever we can provide, you know, please let us know. Cause I think we've got a pretty good use case here.

[Kristen] 15:57:17
Yeah, no, thank you. I don't think there's anything right now, but like Patrick said, there's Interest in this general concept.

[Alex Seelig] 15:57:19
Okay.

[Alex Seelig] 15:57:22
Yes.

[Alex Seelig] 15:57:27
Okay. Alright, so we've got 3, minutes. So real quick, we're gonna just kinda continue with.

[Alex Seelig] 15:57:39
A VBA database. We are gonna need I think Leon is we need permission to access the VVA date or sorry, the VHA database.

[Alex Seelig] 15:57:49
Is that what we need?

[Alex Seelig] 15:57:51
Take that right.

[lihan] 15:57:52
No, anything about the VHH.

[Heather] 15:57:55
Now. Yeah.

[Alex Seelig] 15:57:56
Or sorry, no, sorry, V. Okay.

[lihan] 15:58:02
What is this in reference to?

[Heather] 15:58:05
Oh, remember we were talking this morning about needing to confirm that we can store on the VA.

[Heather] 15:58:15
Dunk of dB and we want to make sure that we can store the PII there is and So I guess we need to just confirm.

[Heather] 15:58:21
That. I'm guessing platform, but I didn't know if we had any other thoughts on that.

[lihan] 15:58:28
We need to confirm that. The enrollment system wants us to do this. Submit the application twice.

[Alex Seelig] 15:58:48
So basically kinda just we need to talk to. Josh and Kenny and those and that group saying like, hey, we're gonna.

[Alex Seelig] 15:58:56
Basically have to resend you all of this information if we go forward with the V. Is that right?

[lihan] 15:59:02
Maybe we can't.

[Alex Seelig] 15:59:04
Okay. So there's a technical like. We still have to overcome a technical, sorry, technical hurdle just with the.

[Alex Seelig] 15:59:16
With the enrollment system.

[Patrick] 15:59:18
Sorry, can you describe, could you describe the problem again?

[lihan] 15:59:19
With the

[lihan] 15:59:24
Maybe they don't want us to submit the application twice.

[Patrick] 15:59:29
So you're saying. This is application comes in that has terror data in it. We store the application.

[Patrick] 15:59:38
Are, are you saying we would send them the application initially and then we would send them the application again once they can accept the terror data.

[lihan] 15:59:49
What You were thinking not to send it. Until the terror was ready.

[Patrick] 15:59:56
Yeah, I mean I would I again if we were talking about like a couple of days or something like that like basically again the idea would be we store it local or restore it on our end.

[Patrick] 16:00:06
For the period of time it takes to actually get.

[Patrick] 16:00:10
Their system set up to receive it. Obviously not for weeks and weeks at a time. But yeah, yeah, it would be we only send it once.

[Chapley Watson] 16:00:19
So we're not going to. Veterans are going to come on, they're going to fill out this form.

[Chapley Watson] 16:00:26
Fill out fill out this data and then it's gonna sit in Lindo until VS is 100% ready.

[Chapley Watson] 16:00:33
Is that? The way that it's looking.

[Patrick] 16:00:39
Yeah, I don't sorry. Just being clear. I mean, I'm, again, I'm not talking about it sitting quote in limbo for weeks at a time.

[Patrick] 16:00:51
The idea is I wanted to see what kind of options we have if we need a few days for VS to finish doing whatever it's doing.

[Alex Seelig] 16:01:01
I think that makes sense. So I think the assumption I think we will like working under was storing this for the 3 months or whatever it takes for the ES to get the whole thing.

[Alex Seelig] 16:01:13
Stood up and you're talking about days rather than months potentially. So. Instead of sending them the application twice, which is what we had, Leon was saying, like they're gonna submit an application.

[Alex Seelig] 16:01:27
We're gonna send it on to the ES. Then once they can receive the terror data, we're gonna resubmit that data.

[Alex Seelig] 16:01:33
It sounds like maybe the best way if this is just a temporary kind of, you know, stopgap or resting place for the data, don't send it to the ES.

[Alex Seelig] 16:01:41
The first time. If they have terror data, just park it and be like a database and then send it to them once they once VEs can receive the the terror gain.

[Alex Seelig] 16:01:50
Once the US can receive the terror data, articulating that team and Patrick.

[Patrick] 16:01:55
Yeah, I mean that's that was certainly my thought was we if we know the yes can't do anything with the data we're not we don't send them anything.

[Patrick] 16:02:05
Ideally, again, this is like a short term thing, buys us a little bit of time.

[Patrick] 16:02:10
But also enables the veteran to actually submit the data that they need to submit. Once we can actually send it, we send it.

[Patrick] 16:02:18
I obviously it would be unconscionable to hold onto an application for months at a time.

[Patrick] 16:02:22
So I don't even appreciate the suggestion.

[Alex Seelig] 16:02:26
No, it's not something we wanted. Okay.

[lihan] 16:02:27
And

[Kristen] 16:02:29
I thought our timelines were not that close. Like potentially so then what What do you do when it's past that couple of days?

[Kristen] 16:02:40
Early.

[Patrick] 16:02:40
Yeah, I mean, we wouldn't turn it on until we had some. You know, pretty high degree of certainty that this was going to be a couple of day kind of thing.

[Patrick] 16:02:49
And that's like, again, that's what we're trying to figure out right now is if.

[Patrick] 16:02:53
There is any fudge in the March fifth date, which it sounds like maybe there isn't.

[Patrick] 16:02:58
Like, and we could get it closer to the April first date when VS maybe can make this initial change.

[Patrick] 16:03:06
That would allow us to at least signal to them that this person has terror data. And then put it in a manual process and then potentially that processor actually goes and gets the data or that's when we submit it or something like that.

[lihan] 16:03:23
Or if they can't do it. What if we have to release on March? Fifth and they can't updo the update.

[lihan] 16:03:31
If for a long time.

[Patrick] 16:03:31
If we're not going to do what we were not gonna put the terror question out there or anything terror related on the 1010 easy unless we're very certain that we will be able to get the data.

[Patrick] 16:03:43
The data will actually be able to be used and we'll be able to get that data or some indicator that there is data.

[Patrick] 16:03:50
So the, I mean, just to be very blunt about it, the most likely scenario is We do the work on our side.

[Patrick] 16:04:01
We get to March fifth. There's nothing that can be done and the 1010 stays exactly the same and we direct veterans to a paper form.

[Patrick] 16:04:09
If they have toxic exposure information that they need to submit to VA. As part of their application.

[Patrick] 16:04:16
Which is not great, but. We're not gonna put ourselves in a situation where we're collecting exposure data.

[Patrick] 16:04:22
And all of their other application data and then sitting on it for any extended period of time.

[Patrick] 16:04:35
But what we can't do is get ourselves in a situation where It's February 20 seventh. And all of a sudden someone has a bright idea of how to.

[Patrick] 16:04:47
Get the data over to VES or something like that. And we say, oh shit, we. We just figured we couldn't do it, so we aren't ready.

[Patrick] 16:04:59
So this is all contingency.

[Alex Seelig] 16:05:06
Yeah, I think that'll make sense. And I think.

[Alex Seelig] 16:05:10
That in some ways alleviates I think some of our like biggest concerns and risks. Whole what holding onto that data look like for any sort of extended

[Patrick] 16:05:21
Yeah. And again, Alex, that's why I would say like the idea of.

[Alex Seelig] 16:05:22
I thought that put some of our pictures.

[Patrick] 16:05:27
Investigating that like can we keep this longer than 60 days doesn't really make it to us up to me because I don't think we would be keeping it anywhere near that amount of time.

[Alex Seelig] 16:05:36
Cool. That works for all of us. That makes sense. Hopefully it helps other sleep better.

[Alex Seelig] 16:05:42
That sounds good. Team. Thoughts, questions, comments. You know, I know, sorry, we're running a little long here.

[Alex Seelig] 16:05:56
But we can also always jump on a call. We can throw things in slack, you know, like this is I'm sure gonna be an evolving situation so.

[Alex Seelig] 16:06:03
Yeah, just over communicate wherever possible. But anything else before we break?

[Alex Seelig] 16:06:13
Alright, cool. Patrick, thank you so much. You know, I'm sure we'll talk a lot.

[Alex Seelig] 16:06:18
I mean, days and weeks and Team, thank you so much for your flexibility on this. Yeah.

[Alex Seelig] 16:06:22
Yes. This will help veterans get health care. You know, this is this is why we do this.

[Alex Seelig] 16:06:27
It's just obviously this is not the ideal state, but we'll get that.

[Alex Seelig] 16:06:32
Alright, everyone. Enjoy your afternoon. Thank you

[Patrick] 16:06:32
For sure. Thank you


</details>
