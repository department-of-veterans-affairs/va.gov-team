
**Facilitator**   0:04
Yes.
One second.


**Participant 1**   0:15
I did forward the meeting to to my PM configure just in case you know, just in case he was interested as well, so might have more joining the party.


**Facilitator**   0:26
OK, I saw a few people.
Had responded no.
I'm gonna try and leave from my other connection and see if it'll still record.
OK.
Can you guys hear me?


**Participant 1**   0:56
Yep.


**Facilitator**   1:01
Intelligently mutual teams.
So bear with me a little, but I think we'll we'll get through this just fine.
OK, looks like we've got Greg here. Hi, Greg.


**Participant 2**   1:17
Hello.
How's it going?


**Facilitator**   1:22
Good. How are you?


**Participant 2**   1:24
Good.


**Facilitator**   1:26
Good.
I'm going to go ahead and get started because it's a small window of time.
Just a quick heads up that VA notify has two things going on in tandem right now related to API keys.
So the platform team will be reaching out to services to help them rotate their API keys for security purposes.
So once you get your new API key.
You'll have 30 days to replace the old one, and they'll work with you on that.
This right now is for the UX side of things.
And we're working on making API key management a part of the self-service feature in the portal.
So that's our usability session today, so if you hear from either team, it's all part of the same effort, but just two different tracks if that helps.


**Participant 1**   2:15
Yep.


**Participant 2**   2:17
If I may ask for a point of contact with regards to lighthouse, who, who are the names that you have that we can give them a heads up and make sure they're looking out for that 30 day notification rotation?


**Facilitator**   2:32
Four contacts.


**Participant 2**   2:36
I think it's probably Peter Tevinhoff.


**Facilitator**   2:39
Yep. We have Peter and David.


**Participant 2**   2:42
Dave mazek.


**Facilitator**   2:43
And. Mm-hmm. And I'm probably going to really butcher this name, but Dema, Lola. Demi. Lola.


**Participant 2**   2:44
OK.


**Participant 1**   2:52
Yeah, I I I know here, Tommy.


**Participant 2**   2:54
Oh, dummy, dummy. OK, OK, OK.


**Participant 1**   2:57
Real quick.


**Participant 2**   2:58
You're good.
We're good with Peter and we're good with Dave for sure that it'll trickle down to us and we'll be the ones that actually do the rotation. OK, we're good.
Cool. Thank you.


**Facilitator**   3:08
All right, cool. Thanks.
All right.
Well, I am recording today's session.
I if that's OK, just so I can go back and review and I don't have to try and take notes while I'm having a conversation. I also have a colleague on the line who's observing as well.
But yeah, so Larry, do you currently work in the portal?


**Participant 1**   3:36
Nope. To give you an idea of what sort of the context in which we interact with VA notify.
We there, there's a couple of so. So I don't know how familiar you are with the total chain of of a veteran coming on and authenticating against a third party application.
Uh, so some cases, example health, but it could be something else.
So what happens when they go through that process?
We actually will take what's required of them to actually authorize against an application is they they actually have to consent to if they're coming in for the first time on an application.
So one of the things that we do is we take that.
Yeah. We will actually utilize that consent as an event.
And turn that into a notification.
We actually will call the notify the VA notify service in order that will result in the veteran getting the e-mail about the consent that they just did.
And then the inverse of that with the revocations occurs as well.
So that's sort of like our place.
Yeah, we handle, say, an event coming from.
From those those consents or those revocations that could sense?
And then we.
Turned that into a notification to via via notify, which results in the emails being disseminated.


**Facilitator**   5:11
OK.
Nice. So would you say that your you would be the person that would be responsible for rotating the API keys with the integration with VA notify?


**Participant 1**   5:25
Yes, but I couldn't help but to peep in our current configuration and I don't know if we have a VA notify specific API key that we have to set that I could see.


**Participant 2**   5:26
Yes.


**Participant 1**   5:36
Does that I think I have a theory on that.
The the API keys are usually through the API gateway. I think we're not traversing.
Let me go review the URL for a second that we're hitting.
But I wanna say I think we're actually going straight to the well.
Yes, it's va.gov slash.
Profile slash oh.
That's to notify your role.
API VA Gov.
VA notify.
No, that looks like something that would require an API key. Hmm.
You know what? Maybe maybe that's.
I think maybe that's what we're calling notify secret.
Might might be the key so.
Might be just the way we named our own. OK, but yeah, I'm the one.


**Facilitator**   6:37
OK.


**Participant 1**   6:40
Well, I'm the I'm your point of contact.
I'll find others to make that change.


**Participant 2**   6:44
So, Larry, we're. Yeah. Yeah, we'll definitely.


**Facilitator**   6:46
Yeah.


**Participant 2**   6:47
We'll we'll have the team.
We have a I'm a product manager by the way, for our authorization team, hence the consent piece of how we fit in with VA notify.
So yeah, we'll make sure.
I think a couple things here.
Is that what I heard? Was that VA secret or the notify secret is actually maps to the true API key?
Well, we'll get that nailed down for sure, but we'll also, if needed, get the right names, I guess to reach out to for the update.
So we'll be good.
But again, if you got Peter, it'll trickle down to us.


**Facilitator**   7:15
OK.
OK.


**Participant 2**   7:17
But Larry, I'm just taking that as an action item for us and just a little background.


**Participant 1**   7:18
Hmm.


**Participant 2**   7:23
Our our our VA notify expert has recently left us, so it has left a bit of a hole in the gap in for Larry, myself and other team members to kind of fill that gap and get a little more in on how we're processing and working with V.


**Facilitator**   7:29
OK.


**Participant 2**   7:39
Notify.
Makes sense, OK.


**Facilitator**   7:41
All right.
Yeah, absolutely.
Thank you for the context.


**Participant 2**   7:44
Yep.


**Facilitator**   7:46
Well, let's, let's just hypothetically say that, you know, you had to rotate your API keys tomorrow.
Where would you first look for?
Look for help for that.


**Participant 1**   8:00
Usually I would send.
No, no, so, so we we actually have the. We're actually fortunate enough to already have a closing close working relationship with Team Quaka.
So for anything API queue related, it usually starts with.
Actually notifying them on their slack channel.


**Facilitator**   8:25
OK. All right.


**Participant 1**   8:25
And then from there things seem to happen. If they ask us to generate a support ticket, they'll they'll send a link maybe, or send us a link to that to follow a convention or, you know, things like that.
But usually it starts with, you know, like, like if it's, let's say actually for us, right?
We've leaked an API key and we need to rotate it.
So that that I'll usually initiate a request on Team quokka and then that that'll start.
You know, they'll they'll help us generate the necessary.
Support tickets for them to manage.


**Participant 2**   8:58
And do you understand Team Coop?


**Facilitator**   8:59
OK.


**Participant 2**   9:00
Team kuoka.
No, I didn't think so. Yeah, yeah, yeah, it's an it's it's a gateway team.


**Facilitator**   9:02
I'm assuming it's an internal name on your product.


**Participant 2**   9:07
It's a gateway team here for lighthouse.


**Facilitator**   9:07
OK.


**Participant 2**   9:09
So the Gateway team we call team quokka, they'll take that action and they basically work with API keys across our program and and and hence when that kicks us off, that's our our kickoff point is our Gateway team.


**Facilitator**   9:10
All right.
We have.
We have Team Nova and Team Llama.
So yeah, I just assumed it was something like that.


**Participant 2**   9:27
OK.
Yeah. Yeah, yeah, yeah, yeah.
And we're we're a team pivot, so yeah, OK.


**Facilitator**   9:32
Oh yeah, there we go. Yeah.
That's perfect.
OK so.
Your first step would.
Not be to go to the portal and look for documentation. You would go straight to slack and reach out there.


**Participant 1**   9:49
Well, well, let me. Well, let me give more context around that.
Let's say if if we needed to onboard for the first time in a nondeveloper environment that required an API key to, some to and it doesn't have to be, Virginia notify could be to any API key.
Backed API if you will.
Then I would go to the developer portal and then put in.
From there you could interact with it to to put a request in.
It'll auto generate an API key that we could use for the non prod stuff.
And then that way we can get started as a developer on using that API.
That would require an API key.
So if I were, let's say I'll develop, if I was developing a new application that that that needed its own separate API key for VA notify, then I would go to the developer portal for that.


**Facilitator**   10:48
OK, so I think one of the things that we're trying to do.


**Participant 1**   10:49
In the case where I'm yeah 'cause, we need to make a change. Like, oh, yeah, we we already got something out here and and oops, we gotta rotate it. That that's where I would go to quaka or the, you know, the the Gateway team.


**Facilitator**   11:04
OK.
So for the sake of like what we're trying to do is specifically for VA notify API keys is to bring that generation and management just for the our specific keys for staging and production as a self-service feature within the portal so.
If we kind of frame yes, go ahead Greg.


**Participant 2**   11:29
What portal can you send that link?


**Facilitator**   11:31
Oh, VA notify portal.


**Participant 2**   11:34
OK.


**Participant 1**   11:34
Oh.


**Participant 2**   11:35
I don't even know how to get there.


**Participant 1**   11:36
Oh yeah.
Oh, yeah, let me. Yeah, that's. Oh, you were already, like, we're already lost in translation. When you were saying portal, I was.


**Facilitator**   11:37
Hello.


**Participant 2**   11:39
Yeah. Chat that to us, please.
Yes, we are.
Yes, you're thinking dev portal.


**Participant 1**   11:44
So we actually have a.


**Participant 2**   11:46
You're thinking our lighthouse program Dev Portal and I had a feeling that is not what Alyssa was speaking about at all.
And I'm the disconnected. That's why I was like, OK.


**Facilitator**   11:56
Oh, Greg, thank you for connecting us there.
Yes, OK. I was like, well, I think, yeah.


**Participant 2**   12:02
I know I saw it in your face.
It's like hmm, wait a minute.
This and something wasn't connecting for you.


**Facilitator**   12:06
OK.


**Participant 2**   12:07
I'm like, OK.
This is not the dev portal.


**Facilitator**   12:11
I'm so sorry.


**Participant 2**   12:11
So this is a specific thing.


**Facilitator**   12:13
And that's actually a really good, good context to have as far as, like, there's lots of different things that are referenced as a portal and yeah.


**Participant 2**   12:13
No, no, you're good.


**Facilitator**   12:23
Good to know.


**Participant 1**   12:25
Oh, and you have to be on the VA network for that one, right?


**Participant 2**   12:28
Oh, OK.


**Facilitator**   12:28
You sure do, yes.


**Participant 1**   12:29
OK. Yep.


**Participant 2**   12:30
So then we're gonna do that later.
'Cause I'm not cagged in right now, OK?


**Facilitator**   12:34
OK.
Well, this will be super interesting then, because I'm gonna guess that you've not been on the VI notify portal before.


**Participant 2**   12:42
No.


**Facilitator**   12:43
So OK alright.


**Participant 1**   12:43
John John probably has.


**Participant 2**   12:45
John has the representative.
That is our missing hole.
Now if you will, he probably has been many a times.


**Facilitator**   12:52
John oh, I feel like I've met with John.
What's his last name?


**Participant 2**   12:55
Weiss.


**Participant 1**   12:58
Yeah, is my is my brother in arms.


**Facilitator**   12:58
Hmm I I feel like I'm. I feel like I must have met with him in the past for some other usability session.


**Participant 2**   12:58
Weis.
I'm sure because he was.
He was our lead for VA notify.
Yeah. And we made a couple. We made numerous template changes about, I'd say maybe a year ago.


**Facilitator**   13:08
OK.


**Participant 2**   13:14
One to be 5 O compliant, 2 to just change the content that it's a little clearer for our veterans understanding the consent process and really the revocation process and how to connect the connected apps via VA Gov.


**Facilitator**   13:15
OK.
OK. All right.
Yeah, well, this will be illuminating. I think for everyone.


**Participant 2**   13:31
OK.
Yep.


**Participant 1**   13:34
Mm-hmm.
Mm-hmm.


**Facilitator**   13:35
So ask questions along the way. If if something comes up and also just as a forward question, are we all at a hard stop at 2:30?
I don't wanna take up too much time, but I just kinda wanna know how.


**Participant 1**   13:51
Oh, our hard stop is at three, I think, yeah.


**Participant 2**   13:53
Yeah, we're good. We're good.


**Facilitator**   13:54
OK.
All right, I'll still try and keep us on track, but I I know that like we, we've covered a lot of additional things that very helpful context.
But didn't know we were gonna have on our plates, so.


**Participant 1**   14:09
Yeah.


**Facilitator**   14:12
OK, well in if I was there anything about the questions that I'd ask that might frame your answers a little differently like or maybe you don't have enough context right now.
About rotating your VA notify API keys.


**Participant 1**   14:28
Well, yeah.
Well, I guess we could.
Let's get the mechanics of the notification.
How will that notification come by through Slack e-mail?
Well, I mean, yeah, we'll start with that.


**Facilitator**   14:39
How how would you you mean that that it needed to be rotated?
Is that what you're asking?


**Participant 1**   14:43
Yes. Yeah.


**Participant 2**   14:43
Notification yet?


**Facilitator**   14:43
How would you expect it to come through?


**Participant 1**   14:47
I think there's less friction if it comes by way of one of our official lighthouse channels.


**Participant 2**   14:56
And I would expect it from an e-mail.


**Participant 1**   14:58
Yeah, I expected from an e-mail.
Less friction, yeah.


**Participant 2**   15:00
On theva.gov site, either from Peter or product owner or directly to myself and a tech lead.
And perhaps if there was a channel out on the say like office of CTO, Someplace there for VA notify channel, I would expect some notification there maybe as well, but for sure an e-mail.


**Facilitator**   15:26
For sure.
An e-mail, OK.


**Participant 2**   15:28
That's my opinion.


**Facilitator**   15:30
And how often or how early would you expect to be notified that something was going to be?
Expiring and needing to be rotated.


**Participant 2**   15:43
The sooner the better.


**Facilitator**   15:44
Because.


**Participant 2**   15:44
But 30 days is a very nicely head way, yeah.


**Facilitator**   15:49
OK.


**Participant 2**   15:50
Yeah. Yeah, that's very nice.
There are other teams within the VA that give us literally sometimes two to three business days and really it's not very cool.


**Facilitator**   16:01
Yeah, that's fast. OK.


**Participant 2**   16:03
Yeah, yeah, we'll scramble around. Yeah, yeah.


**Participant 1**   16:07
Yeah, some of the same teams that expect us, the 222 in a few days to turn around give us you know.
Ask us to wait six months.


**Participant 2**   16:16
Tell us it's three weeks.


**Participant 1**   16:19
Six or six months, right?


**Participant 2**   16:20
They don't play by the same rules. Basically, that's OK.


**Participant 1**   16:22
Yeah.


**Participant 2**   16:23
Sorry, we're venting a little bit.
Not not your UX session, I apologize.


**Facilitator**   16:28
You're totally fine.
Oh my gosh, you're totally fine.
I get it absolutely.


**Participant 2**   16:33
I'm.


**Facilitator**   16:35
OK.
So I'm gonna share my screen. I have yet to find a way to give control like remote control in a prototype on teams yet so.


**Participant 2**   16:40
OK.
OK.


**Facilitator**   16:48
What I'll do is I'll just give you guys a prompt and and then you can kind of just talk to me about what you're seeing and what you would do.
And what you'd like me to click on? Does that sound good?


**Participant 2**   16:59
Sure.


**Participant 1**   17:00
Yep.


**Facilitator**   17:01
OK.
So for this first bit, let's say that you received an alert, so an e-mail that one of your API keys is about to expire and you need to rotate it.
So that means you need to create a new one, update the integrations, test it and disable the old key once everything is working.
So.
Let's say you've gotten that message and you're gonna go into the portal to get that.
Ball rolling.
And you've already logged in and you're in your service for Lighthouse and you've navigated to the Settings tab.
Walk me through how you would generate a new key from here.


**Participant 1**   17:50
OK.
Well, I would.
Let's so I'm already so obviously this is a portal that I have my own credentials on.
So the 1st place I would go is I would click on a link that says API key management in the center. Look that one Yep.


**Facilitator**   18:05
Right here.
OK.


**Participant 2**   18:07
Me too.


**Participant 1**   18:07
Based that.
Yes, that's probably where I would go or or the left pane where it says API queue management both get my attention and I guess it depends on my mood which I would click on that would I would go to either.


**Facilitator**   18:09
And.
And when you click on it, what do you what would you expect to see?


**Participant 1**   18:24
I would respect to see a like I would expect to see a list a list as my immediate prompt like you know or or some kind.
Yeah, some kind of presentation of potentially multiple keys I might have against different.
Maybe against, we'll call it different if I'm if I happen to be managing different applications or consumers of VA notify, I would expect a list of those.
In our case, we would have one.
Because you know. But maybe there's other teams that have multiple applications that would be consumers of virgin notify.


**Facilitator**   19:03
OK.
I'm gonna go ahead and click on it and then we can view the page.
Let me know when you'd like me to scroll.


**Participant 1**   19:11
Uh, Yep, go ahead and Scroll down a little bit.


**Participant 2**   19:13
You.


**Participant 1**   19:15
OK. And let me see here.
So I see.
Ah, well, I think the one that says expiring is probably the one I do address.


**Participant 2**   19:21
That's it.


**Facilitator**   19:26
OK.


**Participant 1**   19:26
So so.
Interestingly, right, I see the generate API key. That's kind of out across all of them, so versus.
Versus a separate generate API key in each pane like like it's a separate button for each environment.
So I'm presuming if I were to hit generate API key it would tell me which environment to associate it with and which project.


**Facilitator**   19:59
OK. Would you like me to go ahead and click it?


**Participant 1**   20:00
That's my.


**Participant 2**   20:00
That's what I would assumed, yeah.


**Participant 1**   20:01
That's my assumption, yes.


**Facilitator**   20:04
Is that what you would do from? That would be your next step once you came here, you would click the button.


**Participant 1**   20:08
Yeah, cuz I wouldn't want to revoke a token before I had a new one to replace it with.


**Participant 2**   20:09
Yes.


**Facilitator**   20:10
OK.


**Participant 2**   20:13
And test it and validate it, yeah.


**Facilitator**   20:13
Yep.


**Participant 1**   20:14
Yeah.


**Facilitator**   20:15
OK.
I'll go ahead and click.


**Participant 1**   20:19
OK. Ah, there we go.


**Participant 2**   20:20
There you go. Still a change.


**Participant 1**   20:20
So here I get to select.
But now how do I know which application that I'm going to designate this for based on this?
Or I guess I. Well, let's say staging.


**Facilitator**   20:32
So this.


**Participant 1**   20:34
We'll go ahead and pick staging.
Yeah. And then I'll hit continue.


**Facilitator**   20:36
OK.
OK.


**Participant 1**   20:43
API Keyname oh and I'll give it a name of.
We'll call it.
I would guess whatever the project was it Project 2 or yeah, whatever the.


**Facilitator**   20:53
I.
Yeah. Honestly, I I just made one up, but I am curious.
What?
What you would name it?


**Participant 1**   21:04
So I would name it.
I would name it to include at least what what the application you know, we'll call it, you know.
So in our case, right, we'll say Lighthouse authorization.
And then I'd like to.
For me, I'd like to include.
You know something? Something of the of the of the time period as well.
Just or a version, but because versions you know don't really, you know, so I might give it something like lighthouse.
Authorization 2025.
You know 25/07/16 or something like that?


**Facilitator**   21:46
OK.


**Participant 2**   21:47
I got that OK.


**Participant 1**   21:48
And then dash staging.
So that would be, yeah.
So that would that would be the name that I would give it.
Normally, right.


**Facilitator**   21:56
And question.


**Participant 1**   21:57
The idea is that I would be replacing the one that's about to be. That's about to expire.


**Facilitator**   22:03
Yes. So for this purpose, since you selected staging in the previous step, it's added it as a suffix here.
Does that make sense to you? OK.


**Participant 1**   22:15
Yes. Yep.
Otherwise, otherwise right?


**Facilitator**   22:18
And.


**Participant 1**   22:19
I I I would add it.


**Facilitator**   22:21
Yourself.


**Participant 1**   22:21
I would have added it myself here.


**Facilitator**   22:24
OK.
And do you have any internal naming conventions that the suffix approach might conflict with?
Or it sounds like it's pretty on par with exactly what you would have done, but I just want to make sure.


**Participant 2**   22:36
We we would want to double check that. I think with our API standards and our cast team, I think we'd wanna check with Castro a Larry to make sure that we're aligned.


**Participant 1**   22:36
If I.
Yeah, and there is.
There's there is one other comment cuz it looks like you have a staging and a production and that's your. So in our environment we actually have a total of four. In our case it's Dev, QA, staging, obviously Dev, QA and Sandbox.
As well as production.
So in this case, right?
Like like we you know, if we were going to do.
An assignment for each one of our environments where they have their own API keys. We might have a situation of still sticking in something like LHDI sandbox that would go with your staging over here.


**Facilitator**   23:31
OK. Yeah.


**Participant 1**   23:31
But I'm OK with it to stick with staging because that tells me.
That tells me that you have an environment called staging, and that's what it's assigned to.
So I would still support.


**Participant 2**   23:41
Yeah, that's their mapping.
We do our own mapping by putting something in the title based on Castro's standards, right?


**Participant 1**   23:49
Yeah, yeah, yeah, yeah.


**Participant 2**   23:49
Is what you're saying.
Yeah, got it.


**Participant 1**   23:51
But I support I support the the suffix of their environment still being there, because that that calls out their environment for, for our, for our knowledge.


**Participant 2**   23:56
Yep, because that calls out.
Yeah. Yep, I got it.
It's the lower environment, right? Yeah.


**Participant 1**   24:03
Yeah.


**Facilitator**   24:04
Yep, exactly.


**Participant 2**   24:05
Got it. OK.


**Facilitator**   24:07
Yeah. So for the sake of this, I just made-up a name because it's a prototype and we can't.
I don't have anything that you can actually type into.


**Participant 1**   24:15
That. Oh, that's fine. Yep.


**Facilitator**   24:17
So I just named it project 1V3.


**Participant 1**   24:19
Mm-hmm.


**Facilitator**   24:22
And then you'd hit continue from here.
Or is there anything else that you'd? Yep. OK.


**Participant 1**   24:26
Yes. Yeah, yeah. Oh, yeah. Yep.


**Participant 2**   24:26
Oh yeah.
Yeah.


**Facilitator**   24:29
And then what would you do here?


**Participant 1**   24:32
Well, I probably click on both plus buttons.


**Participant 2**   24:33
I click on those pluses.
Yeah. How come that didn't come up? Yeah.


**Participant 1**   24:37
And yeah, I think.


**Participant 2**   24:41
Environment staging your API key name.


**Participant 1**   24:41
I think I I think I would say Yep, looks good to me.


**Participant 2**   24:47
But that your API key name would actually be what you entered there, the project 1V3 or whatever it was, right?


**Facilitator**   24:54
Yeah, well, yeah, right down here.


**Participant 2**   24:55
OK. Yeah.
Oh, there it is.
There it is. Sorry. OK.


**Facilitator**   24:59
Oh, were you expecting to see it up here?


**Participant 2**   25:01
Oh Yep, Yep.


**Facilitator**   25:02
Oh, OK.


**Participant 1**   25:03
Nope, I I Nope, I've seen.
I've seen this before, so yeah.


**Participant 2**   25:07
OK.


**Participant 1**   25:10
So far it's in line with what I was expecting.


**Participant 2**   25:12
See my first for me, in my opinion, after submitting that I would think it would be there and now that is my key and for some reason if someone came to me and said, oh, Greg, you can't put project one, you have to put Project 4.
Oh, OK then I'd come here and edit my API key, which I would say that be that name. But anyways that you see the the mental process.


**Participant 1**   25:40
Yeah, but, but, but the good news is you can go and edit either.


**Participant 2**   25:41
OK.
Well, yeah, I just expected the name I expected, not your API name.
I expected project one.
That's what I expected.
This is a UX session. I'm telling her what I expected, yeah.


**Facilitator**   25:51
Yeah, yeah, absolutely. There's no wrong answers.


**Participant 2**   25:56
There's no wrong answer.
I love UX sessions, yes.


**Facilitator**   25:57
There's no wrong answers.
Yeah, I I love em too.
It's I love seeing like how like people navigate things, so I think it's really awesome.
Awesome, yeah.


**Participant 2**   26:08
OK, cool.


**Facilitator**   26:08
So, like, it's fascinating actually hearing both of you with different expectations, right? So that's really cool.
And you said you might want to come back and edit this in the future.


**Participant 2**   26:23
If I for some reason named the naming convention was off.
I don't know. Maybe so, right.


**Participant 1**   26:31
Yeah, there's there's any number of different reasons why we want to come back like.


**Participant 2**   26:35
Maybe we don't want to call the date out. I don't know. Right, we'll go ahead.


**Participant 1**   26:39
Yeah.


**Participant 2**   26:39
Go ahead, Larry.
What else?


**Participant 1**   26:42
Yeah.
It might be that.
That we want to.
Yeah, that's fine.


**Participant 2**   26:51
I just think it's the name.


**Participant 1**   26:52
Maybe, yeah. Maybe somebody might tell. Tell us.


**Participant 2**   26:53
Or maybe there was a leak?
And would we?
Then we'd have to generate a whole new one.
So we'd have to generate a whole new one.


**Participant 1**   27:00
Yeah. No, no, there could be.
There could be, yeah.
Like we just didn't get, you know, like we typoed the first name.
I I typo all the time.


**Participant 2**   27:08
Me too.


**Facilitator**   27:09
So user entry but like what about after you've already generated it and it's been.


**Participant 1**   27:10
Yeah.


**Facilitator**   27:16
Created. Would you ever want to come back?
Would you need to ever come back and change that key name?


**Participant 1**   27:23
Hmm.


**Participant 2**   27:24
Olathe were leaked, right?


**Participant 1**   27:25
I me. Well. Well, no, no, no.
You talk about just the name of the key versus the token itself is actually what we physically use.


**Facilitator**   27:29
Yeah.
Right.


**Participant 1**   27:33
So so this is just a way.
This is just part of its management.
I would say it's very, very unlikely that we would need have a real need to come back here to modify the name.


**Facilitator**   27:38
Mm-hmm.


**Participant 1**   27:48
Once we're past this stage.


**Facilitator**   27:51
OK.


**Participant 1**   27:52
Because the token I mean because it.
I mean, it's just a way for us to basically.
Remember something that we are going to we need to revoke if we need to rotate ourselves or something. So.


**Participant 2**   28:03
I agree.


**Facilitator**   28:03
OK.
Cool. That checks out.
So from here you would say. Either edit it if something looked wrong or go all right ready to go.


**Participant 1**   28:14
Yeah.


**Participant 2**   28:15
Just to see what it looks like, but that's me.


**Participant 1**   28:17
Hmm.


**Participant 2**   28:21
Yeah. OK.
Yeah, that's it. OK, next.


**Participant 1**   28:24
Yeah.


**Facilitator**   28:27
OK, let me go ahead and continue, OK.


**Participant 2**   28:27
And then continue, yeah.


**Participant 1**   28:33
Yep, copy a clipboard and this is where we this is where we grab and stash.


**Participant 2**   28:34
Copy or repair like outlay copy.
Copy. Copy pasta. Yeah.
Encrypt it. OK, OK.


**Facilitator**   28:45
So you go ahead and copy here.


**Participant 1**   28:46
Yep, a copy here and put it in a safe place.


**Participant 2**   28:47
Yes.


**Facilitator**   28:50
OK. And then would you go, what would you do from here?


**Participant 1**   28:57
Umm.


**Participant 2**   29:00
I guess go back to key. I would go back there because it doesn't say really continue.


**Participant 1**   29:00
Prop.


**Participant 2**   29:05
It implies that I have to go back to API key management.
So I go back there.
That would be me.


**Participant 1**   29:12
That makes sense.
Or I probably switch and start OK.
Let's open up the vault now.


**Participant 2**   29:18
You would just go on and do it, yeah.


**Facilitator**   29:21
Yeah, for sure.


**Participant 2**   29:22
You'd go on to make the update.


**Participant 1**   29:24
I don't even know if I have closed the screen at that point.
I would just like.


**Participant 2**   29:28
But I'm not technical, so I'm gonna be.
I'm gonna follow and do what I'm told.


**Participant 1**   29:33
Yeah.


**Facilitator**   29:35
Before we move on, how obvious is it that this is your only time that you'll see this?
This is the only time you'll have to copy it.


**Participant 1**   29:45
Oh, it's.
I mean, to be honest with you.


**Participant 2**   29:46
It's API key.
I mean, come on.
Yeah, no.


**Facilitator**   29:48
It's just it's a known fact.


**Participant 1**   29:48
I I, yeah, I'll, I'll, I'll, I'll that way.
So at this point, yeah.


**Participant 2**   29:52
Yeah, exactly.
It's like if you don't get this right or if it's leaked, you're gonna have to revoke and get a new one.


**Facilitator**   29:55
OK.


**Participant 2**   29:59
Start over again, right?


**Facilitator**   30:01
So it's pretty much table stakes like everyone knows that this is just how this works.


**Participant 2**   30:06
We know because we work with API keys all the time.


**Facilitator**   30:06
I.
Yeah.


**Participant 2**   30:09
I don't know of anyone else would, to be honest with you, Larry, right, I mean.


**Participant 1**   30:16
Yeah, I mean.
Yeah, I mean at this point and The thing is too, if whatever reason you lose it back here, it looks like it's easy enough to go and generate a new one that you won't lose and just revoke, revoke the old one.


**Participant 2**   30:22
Triggering.


**Participant 1**   30:32
So I from my perspective, I yeah, I mean this is working.


**Facilitator**   30:34
OK.


**Participant 1**   30:38
It's it jives with what I'm used to.


**Participant 2**   30:41
I'll be fine.


**Facilitator**   30:43
OK.
Cool. That's that's awesome. OK.
So let's go back with that link and we're going to pretend that you have done all of the due diligence and your new key is in place.
Everything's been tested and you're ready to revoke the old one.
How would you go about doing that?


**Participant 1**   31:07
Well, look at look at our list again.


**Participant 2**   31:09
Stay tuned.


**Participant 1**   31:09
I think you have a revoke associated with one of them.
I would go into.
I would go into the one that we know that we replaced.
We'll assume if we get assume it's the one expiring too.
I just hit the red revoke button.


**Facilitator**   31:24
OK.
What do you expect to happen once we click the red revoke button?


**Participant 2**   31:28
Umm.


**Participant 1**   31:30
A prompt saying Are you sure you really want to?
You know.
You know.


**Participant 2**   31:37
Agree I got a prompt.
Are you sure this is really what you want?


**Participant 1**   31:39
Yeah.
Type provoked to confirm.
Yep, Yep. That's what I would expect actually by yeah, type.


**Facilitator**   31:48
OK.


**Participant 1**   31:49
So I would type in the word revoke and then revoke API key.


**Participant 2**   31:54
Ditto.


**Facilitator**   31:55
All right.
And would you, after all the steps that you've already done, would you feel confident in taking this step to revoke the API key?


**Participant 1**   32:03
Yes.


**Facilitator**   32:04
OK.


**Participant 2**   32:06
Check out dates and make sure that I have everything in order, but that's me.
I'd probably cancel out of that.


**Participant 1**   32:12
Yeah, but.


**Participant 2**   32:13
Go back to the other one.
Look at my dates and look at my naming conventions.
Because that's what it's all about, right?
That's why I have that naming convention with the date OK.


**Facilitator**   32:22
Yep.


**Participant 2**   32:23
Now I'm OK.
Let's do it again.
OK, revoke. Yes, but.


**Participant 1**   32:27
Yeah. When you get that.


**Facilitator**   32:28
Yeah, double checking. Yeah, measure.


**Participant 2**   32:28
You're asking. I'm telling you, that's Yep.


**Participant 1**   32:30
Well.


**Facilitator**   32:32
Yeah, measure twice, cut once.


**Participant 1**   32:32
I'll say this.
I'll say this, Greg, but you know, every time we add a new consumer, we actually go through the stage of revoking.
An Octa key every time too.


**Participant 2**   32:43
And This is why I always say take our time, we want to make sure it's all clean.


**Participant 1**   32:47
Yeah.


**Participant 2**   32:48
We don't want to rush right quality, not quantity and speed.


**Participant 1**   32:51
Yep.


**Participant 2**   32:54
So anyways, that's my that's my mental process thinking.
That's all I think anyways.
Carry on. Sorry.


**Facilitator**   33:01
All right, let's go ahead and revoke this key then.


**Participant 2**   33:04
We were about it's for sure the right one, OK.


**Facilitator**   33:09
And.
What would you do from here?


**Participant 2**   33:12
Scroll down.


**Participant 1**   33:19
I figure.


**Participant 2**   33:19
I would expect it to see it would revoke.
It was revoked.


**Participant 1**   33:22
Yep. I mean, when I see this, I would probably just close the.
Close this, close the browser and.
Move on.


**Facilitator**   33:34
OK.
And.


**Participant 2**   33:37
That's great.


**Facilitator**   33:38
Does the layout make sense to you?
Is like there anything missing?


**Participant 1**   33:45
No, it looks like.


**Participant 2**   33:48
ID we have the title.


**Participant 1**   33:49
No, it looks it looks.
So so in my mind.


**Participant 2**   33:52
I'm curious to understand the last used date and expire date. If I can just interrupt you, Larry.
Sorry buddy.


**Participant 1**   33:57
No, go go ahead.


**Participant 2**   33:59
I'm I'm how are you tracking those or where are you getting? And this is just now that I'm looking at it closer.
What is the metric that you're hitting that indicates or that call that fulfills the last used and expires date?
Does that make sense?


**Facilitator**   34:17
So.
So we have.
I believe that we are calling these to be expired like and having to be changed out every six months so.


**Participant 2**   34:28
OK.


**Facilitator**   34:29
They are set.


**Participant 2**   34:29
Oh, and there it is. It says rotate every six months.
Sorry RTDT, read the darn thing OK.


**Facilitator**   34:33
No, you're OK.
Yeah, read the darn thing.


**Participant 2**   34:38
Yeah.


**Facilitator**   34:39
So yeah, so we it just when the day that you create it, it obviously my dates are a little behind here.


**Participant 2**   34:47
I see.


**Facilitator**   34:47
Sorry guys.


**Participant 2**   34:48
I see. I see.


**Facilitator**   34:48
Yeah, that's my, my bad there.


**Participant 2**   34:48
You know, I got you. OK, OK, OK.


**Facilitator**   34:52
And then the last used would be the last time it was called, like the last time the API key, yeah.


**Participant 2**   34:57
OK, OK.
So we should expect, OK seeing something that that last used would truly map to, it would be today.
VA notify right 'cause. We're getting consent. I'm sure at least one or you know many.
All right, all right.
OK, just was curious.


**Facilitator**   35:16
Yeah, yeah.
All good. I I learned a lot putting this together as well so.
Question. I don't know if you noticed but.
When we revoked that before we revoked it, there were two inactive API keys and. Now there's still 2 inactive API keys.
Does that make sense to just see them like last two for each environment? Or would you expect something else there?


**Participant 1**   35:52
No, I think that's fine.


**Participant 2**   35:54
I agree.


**Participant 1**   35:55
Yep, we know that.


**Participant 2**   35:56
I agree.


**Participant 1**   35:56
We know they've been.
We have a history of I mean it. We could if for whatever reason something if we forget to do a configuration and we do a revoke ahead of time and we're wondering why we could go back and troubleshoot and see how a token's been revoked.


**Participant 2**   36:11
That's a good point.


**Participant 1**   36:12
Yeah.


**Participant 2**   36:12
That's a good point.
Like do we have access to the previously revoked with maybe more than a year?
So like say for example something did get leaked and we were within the 60 days.
We're like, oh, you know what?
We have to revoke that. Oh, which almost makes you kind of want to think. Oh, can we add a note of why we're revoking?
But anyways.


**Facilitator**   36:36
Yeah.


**Participant 2**   36:36
You know, if you're outside of the expiry date or the the the period of validity of that.
Key API key.


**Facilitator**   36:49
Yeah.


**Participant 2**   36:49
Because then that would be on us to have that list.
I'm like, hmm, well, why did we do project V2?
Why we all of a sudden on V3 and it's only two months I forget.
You never know.


**Facilitator**   37:02
Yeah. Or somebody leaves the team, right? Things like that.


**Participant 2**   37:02
I mean, it's a nice to have.
Like John and.


**Facilitator**   37:08
Darn it, John.


**Participant 1**   37:11
Hmm.


**Participant 2**   37:12
His ears are burning, I'm sure.


**Facilitator**   37:18
OK.
I have another question.
This will only be permissioned to technical contacts and business contacts for a service to do.
If you were not a technical or Business Contact and you landed on this page but saw no option to generate or evoke, what would you think?
OK.


**Participant 1**   37:48
Yeah, you must not have the right role.


**Participant 2**   37:49
It wasn't worth much, yeah.


**Facilitator**   37:53
Would it be more helpful to not see the page at all if you can't take an action?


**Participant 1**   37:53
What?
Oh, so let's say so you don't have the privilege.


**Facilitator**   38:06
Yeah, like you're a viewer or editor.


**Participant 1**   38:06
Anyways.


**Facilitator**   38:09
Would this provide value to see if? If you couldn't do any actions on it, or would it be more confusing to see this?


**Participant 2**   38:20
I think it depends, you know.


**Participant 1**   38:20
No, but you, you, you.


**Facilitator**   38:21
I know we're wearing slightly different hats here, but.


**Participant 1**   38:22
Oh, you'll be able to see the list, but not be able to do.


**Participant 2**   38:24
Yeah, yeah, yeah.
I think you're you're breaking for me.
You're breaking it down to a use case of and who the actor is, and for me as a product manager, I'd be the business side.
I could see I could potentially maybe execute this on behalf of Larry send it.
Who's our tech lead?
Send over the key encrypted and then have folks take action.
I can also see a use case where.
I have say an associate PM or a scrum master.
Saying hey C, hey buddy, can you go check to see if we have any expired tokens coming up soon with VA notify? You know you can't generate anything but go check it out.
Go check the portal and let me know when our next date is so we can plan for that and put it in the backlog.
You know that kind of maybe administrative use case, if you will, and planning for the the actual work to be executed.


**Facilitator**   39:06
Yeah.
OK.
So in that case there is value to have it visible without the function OK.


**Participant 2**   39:17
There is value there, yeah.
Yeah, yeah, yeah. I would think that in that particular use case, depends on the role.


**Facilitator**   39:23
That.


**Participant 1**   39:23
Yeah.
Yeah, me too.


**Facilitator**   39:26
OK.
That's that's really good. That's helpful.
Thank you.
I I I genuinely was trying to think of.
You know, should we make this visible to those users or not?
And I think that's a very valid use case, so.


**Participant 2**   39:42
Yeah.


**Facilitator**   39:44
So just to wrap.


**Participant 2**   39:44
Or even a junior engineer that you don't want to really execute the work, but to do some of the legwork right?


**Facilitator**   39:50
Yeah.


**Participant 2**   39:51
Anyways, yeah.


**Facilitator**   39:52
Yeah, like just to go.
Hey, you check this out. I got you. Yeah. OK.


**Participant 2**   39:56
Yep.


**Facilitator**   40:00
Well, just a few wrap up questions.
Was there anything unclear confusing in the process?


**Participant 2**   40:09
No, I think it was pretty good.


**Participant 1**   40:10
No. Yeah, I think it's a straight forward, yeah.


**Participant 2**   40:11
Yeah, you know, very straightforward. Yeah.


**Facilitator**   40:15
And it so would you say it met your experience or your expectations for something as sensitive as API key management?


**Participant 1**   40:23
Yeah, yeah.


**Participant 2**   40:24
Yes.


**Facilitator**   40:26
OK.


**Participant 2**   40:27
No. May I add something?


**Facilitator**   40:29
Yeah. I was gonna ask if there's anything you'd improve or do different or if you had a magic wand.


**Participant 2**   40:31
Like.
If if we have, if we receive the e-mail, I'd like a link directly to this a deep link just boom.
There I am. Get her done.


**Facilitator**   40:42
Yeah.
Love it.
How about you, Larry? Anything else?


**Participant 2**   40:46
That's the only thing I can think of. Yeah, sorry.


**Participant 1**   40:49
Yeah. No. Yeah, yeah.


**Facilitator**   40:49
No. Why?
That's excellent.
I I think that's a very good, yeah.


**Participant 1**   40:55
Yeah.


**Facilitator**   40:56
Especially since we're building, we haven't built it yet, so we can.


**Participant 2**   40:58
Oh yeah. Good.


**Participant 1**   41:02
Yep. So I guess. Umm.
I mean this. Yeah, this.
Easy to work with from my perspective.


**Participant 2**   41:09
Me too, I mean.


**Participant 1**   41:09
Pretty pretty self help.
Yeah, I guess the only big thing.


**Participant 2**   41:12
If I could do it as APM, it's it's pretty straightforward then that's a good thing.


**Facilitator**   41:21
Perfect.


**Participant 1**   41:22
Yeah, the big the big thing is that.


**Facilitator**   41:23
All right.


**Participant 1**   41:27
I know why.
Now we might have named because in our in our ecosystem we have.
We also have this concept of API key as well.
That goes through our lighthouse gateway.
And so there are. There's a separate dev portal there of which you could also get an assigned API key as well. So so there's a bit of like API key.
Nomenclature confusion, I guess.
That we just have to manage ourselves, I guess. You know our lighthouse API keys aren't the only API keys in town I guess.


**Participant 2**   42:05
I wonder.
And this might be an action for us.
Really, Larry?
'Cause maybe we touch base with Alex from Kassou area and see if there is some way or if OK, so since we do have an API key for VA notify, do we need to ensure that the naming convention of that API key?
Across the program is in and utilizing the same convention across the board.
Or because we are unique with auth and it's a single VA notify use case that we have on our program, we're OK just to keep, you know, status quo.


**Participant 1**   42:49
I would say yeah, I would say let's keep.
I don't.
There's a wide I I think it's self-contained for us with.


**Participant 2**   42:53
I don't think so either.
I.
I think so too.
OK.
All right, all right.
Good. Then no, no, castle worry.
And that was an internal conversation.
I apologize all of a sudden.


**Facilitator**   43:03
You're OK? No, I think it's all good.


**Participant 1**   43:04
Yeah, not least least not yet.


**Facilitator**   43:06
Gotta have it.
Well, it's topical, right?


**Participant 2**   43:07
Right, exactly.


**Facilitator**   43:09
Yep, Yep.
Well, and kind of to to that point, I know that you mentioned Larry is a tech lead, but the technical contact role within Virginia notify is a new role we have. We added business contacts and technical contacts and I will, I'm still sharing. So I I this is.
Just a prototype, so I can't go in here, but when you log in.


**Participant 2**   43:33
Yeah. Uh-huh. These are both.


**Participant 1**   43:33
Mm-hmm.


**Facilitator**   43:34
If you go to user hub under user hub in the side NAV, there's users and that'll tell you all of the users assigned to your service along with their roles.


**Participant 1**   43:46
Oh cool.


**Facilitator**   43:46
There's also another link in that NAV that's called roles and permissions, and if you click on that it'll it has descriptions for all the roles as well as like a like a chart of you know what all applies to each role.
And.
And because it is a newer role, I don't know if you guys have somebody that's a technical lead assigned to your service yet.
I you might.


**Participant 2**   44:10
OK.


**Facilitator**   44:11
I.
I didn't.
I don't believe I saw it. Looked like it looked like you had three business contacts and they were the three that outlined with David and Peter and.


**Participant 2**   44:21
And that's fine.
Yeah, yeah.
Dummy. Yeah.


**Facilitator**   44:26
Yeah, and Yami, thank you.


**Participant 1**   44:26
Oh, you didn't? Didn't have. You didn't have John Weiss as a technical.


**Facilitator**   44:32
He may have already been well, so technical contact like I said is is relatively new. So and and the reason we are rolling it out is because of functionality like this that didn't exist before and now we need somebody specific to be responsible for this stuff. So it.


**Participant 2**   44:36
Neil Taneo, so.


**Participant 1**   44:38
OK.


**Participant 2**   44:47
I mean.


**Participant 1**   44:50
OK.


**Facilitator**   44:51
It opens up a broader conversation for you guys to have with your business contacts to identify who those key people are.


**Participant 1**   44:59
Well, yeah, but, well, it's gonna be me.


**Participant 2**   44:59
Yeah.


**Participant 1**   45:03
It's.


**Facilitator**   45:03
So.


**Participant 2**   45:04
I was gonna say I think it should probably be both myself and Larry, but we can what we should do is go back to Peter, who was our main business product owner.
Say, hey, we understand there's a new role coming up.
We really recommend that myself and Larry, maybe even a third person, Derrick, be put on this technical contact list and just we're always in the loop.
So yeah, yeah we can.


**Facilitator**   45:27
Perfect.


**Participant 2**   45:28
Is that something?
And we do that by taking action, by going to the user hub, correct?


**Facilitator**   45:34
Yeah. Well, you look so, Peter, because he's Business Contact, he can go in and change your designation.


**Participant 2**   45:37
Or Peter would have to, yeah.


**Facilitator**   45:43
You can change your role.


**Participant 2**   45:43
OK, OK. OK, cool. Rock'n'roll. Good deal.


**Facilitator**   45:45
Yep.
Yep, yeah.


**Participant 2**   45:50
All right, we learned something today.


**Facilitator**   45:50
Hey guys. If you have any questions also just like as us navigate it like since it's kind of new for you.
Oh, please feel free to reach out. I'm happy to help.


**Participant 2**   45:59
I was going to say I've got your name now, so.


**Facilitator**   46:04
Great, I love it.
Definitely so awesome.


**Participant 2**   46:11
Absolutely.


**Facilitator**   46:12
Time today, and I know that you're going on vacation, Larry.
So thank you for fitting this in before you're leaving.
But yeah, thanks guys so much.
I really appreciate it.


**Participant 2**   46:22
Thank you.
Have a good one. Bye.


**Facilitator**   46:24
All right.
Thanks you too. Bye.
