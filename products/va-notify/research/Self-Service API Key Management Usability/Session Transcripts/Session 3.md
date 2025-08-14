
Session 3

**Facilitator**   8:48
I appreciate you guys making time to chat with me today.
I'm Elissa and I do UX for VA notify.
And.
We're testing a new self-service feature today that'll let teams manage their own API key, their own VA, notify API keys directly within the VA notify portal.
And also as a quick heads up, our VA notify team has two things going on in tandem right now related to API keys.
So what I'm working on for like the UX side of things with the new self-service feature and then the platform team is also reaching out to all of our services.
To get their keys rotated for security purposes.
So if you hear from either team, it's all part of the same effort, just to improve our security and make things easier for our services.
So I just want to make sure that you knew that these were connected efforts.
Yeah. And just as a quick reminder before we jump into the session.
But not testing you.
We're testing the design, so if something's confusing or it doesn't work the way you expect it to, that's actually really helpful for me to hear.
And your honest feedback, positive or negative, will really help improve the experience.
So any questions before I dive in?


**Participant 1**   10:28
I have a question but it's it might be outside of this what we're about to do.


**Facilitator**   10:32
OK.
Well, shoot, we'll see.


**Participant 1**   10:34
So **Participant 2** and I got a e-mail about the VA notify portal access and that we will lose I guess.
User access or it become view only?
I never what is that portal 'cause? I never knew I had. We had access.


**Facilitator**   10:52
Oh, OK.
Well, that actually answers my my next question, which was gonna be how familiar you are with working in the VA notify portal.


**Participant 2**   10:54
Thank you, Eddie.


**Participant 1**   10:56
OK.


**Facilitator**   11:01
So I'm gonna say probably not at all.


**Participant 1**   11:01
Oh.
No.


**Facilitator**   11:06
Basically.
That message that just came around is tied to a 90 day access policy for security that we're kind of being held to to make sure like any users.
Are current.
It's almost like when you have to like log into mural or any other tool that you have access to within a certain span of time, just to show that you're an active user.
So that way we know who we can off board.
But basically it's the portal is where you go in and you actually type in the content for your templates and the messages that get sent out.
Umm.
So I'm wondering.
If you guys have not seen that.
I think the only thing you need to do to make sure that your access doesn't get downgraded is just to log in, but I will get the.
The link sent to you.
Give me one second here.
You do have to be on the network.
And then you just pivot.
All right, I put it in the chat.
Well, so we'll we'll probably be seeing a few things in this prototype.
Well, everything in the prototype is gonna be new, so if you have any questions that aren't related to the API key rotations and generation and stuff, just feel free to like interrupt me and and I'm happy to like go over things. So as we go through stuff so.
Well, my first question was gonna be how familiar you are with working with VA notify, but how about just how familiar are you working with API keys and managing them at VA?


**Participant 2**   13:05
I have no familiarity at all.


**Participant 1**   13:09
I did a little bit in OBI, but it's been a couple years back.


**Facilitator**   13:14
Little bit in where?


**Participant 1**   13:15
Oh, baby, it was. Oh, baby at the time. But it's Obi now.


**Facilitator**   13:19
Oh, OK.
Alright, all the acronyms, right?
When you did work in that Eddy, did you request or rotate any of the keys before?


**Participant 1**   13:32
I have not.


**Facilitator**   13:33
OK.


**Participant 1**   13:33
Somebody else did that?
So yeah.


**Facilitator**   13:35
OK.
Do you know if you would be the contact on your team that would be doing that for VBA education or would that be?
Another user perhaps?


**Participant 1**   13:54
That I don't know.


**Participant 2**   13:55
I think the contractors are doing that part, Eddie.


**Facilitator**   13:56
OK.


**Participant 1**   13:58
OK.
OK.


**Facilitator**   14:01
OK.


**Participant 2**   14:01
*** yeah.


**Facilitator**   14:03
OK.
Well.
Let's say for this scenario like.
You have gotten an alert that one of your API keys is about to expire and you need to rotate it.
And that means you'll need to create a new key and update your integration, and then disable the old key once everything is working.
I'm going to share a prototype with you.
And we'll just talk through some things.
OK.
So when you first log in to VA, notify.
Sorry, this top part is covering that up. When you first log in. If you're assigned to more than one service, you'll have to select the service that you're assigned to. If, and I believe VBA education has multiple services in VA notify.
Which might be something you want to talk about amongst yourselves about maybe consolidating.
I don't know.
What your workflow is like these days, I know when I spoke to somebody from your team before, I know that it was something that was being discussed as not maybe needed anymore, but.
Anyway, then you would get to your workspace page, which is here and that would show you all the list of your templates.
But for our purposes, we're going to be working in the settings section and this is just a prototype, so not everything is working.
But from here, if you were coming in and you needed to generate a new API key, where would you go?


**Participant 2**   15:57
To the API key management box right there in the middle.


**Facilitator**   16:01
OK. And if I click, I'm gonna go ahead and just navigate 'cause. I have yet to figure out how to give remote access on teams.
When I click on that, is there anything that you expect to find once you get there?


**Participant 2**   16:19
No, I don't know what API key is.


**Participant 1**   16:21
Probably the the current or previous API keys that was used.


**Participant 2**   16:21
That.


**Participant 1**   16:25
So we don't utilize the same ones.
Moving forward.


**Facilitator**   16:30
OK.
I'm gonna go ahead and click and we'll see what's there.
I'll give you a second.
Let me know when you want me to scroll.


**Participant 1**   17:21
I'm good.


**Facilitator**   17:30
Smithy, are you good as well?


**Participant 2**   17:35
Oh, I'm sorry.
I was talking about me. Yes, I'm yeah.


**Facilitator**   17:37
OK, OK.
All right, Scroll down a little bit.
Just kind of talk me through.
What you're seeing, if any of it seems to make sense, or if anything kind of gives you pause or you have a question about it.


**Participant 1**   18:08
Does it? OK? Never mind. See.


**Facilitator**   18:21
So from here, if you needed to rotate your key so you would need to create a new key and then update the integrations and then disable the old key, what would be your first step from this this page?


**Participant 1**   18:41
Alright, generate the APR key.


**Facilitator**   18:44
OK, when I click on that, what would you expect to find there?


**Participant 1**   18:50
Umm.
The option to.
Assign the API key to either. Since we only have productionistaging, assign it to an environment and I guess until the end generating new key.


**Facilitator**   19:07
OK.


**Participant 1**   19:07
And I get set that it your new life cycle date or expiration date for it.


**Facilitator**   19:16
OK.
You would.
You would think that you'd get to set that with once you go in there.


**Participant 2**   19:21
I would think it would be expect.
I mean, it would have a expected expiration date based on the date you you put it in.
I don't know much but.


**Participant 1**   19:33
And maybe access.


**Facilitator**   19:34
OK.


**Participant 1**   19:36
Maybe.
Access control.
Or restrictions within it within that?
Project.


**Facilitator**   19:47
So restrictions on like who can use it or see it or.


**Participant 1**   19:50
Use it.
How can you use it?


**Facilitator**   19:53
OK.
So if this is already specific to VBA education, would you want further restriction?


**Participant 1**   20:11
Yeah, because I mean definitely if it's the station, we wouldn't want everybody in VBA education.
You just seeing what we have in our stadium space, 'cause Technic wasn't staging.
It's something that we're working on or developing or testing.
We don't want everybody to have full access to that.


**Facilitator**   20:28
OK.


**Participant 1**   20:28
So you wanna restrict that?


**Facilitator**   20:31
OK.
And knowing that not everyone in VBA education that's like on your service is assigned to VA notify, it's just a handful of people.
Does that change that at all, or is it still?
Would it still require more restriction?
I'm just trying to understand like 'cause this is there's a lot of things I don't quite understand.
I wanna make sure I'm getting it right, you know.


**Participant 1**   21:10
Could you repeat that so?


**Facilitator**   21:13
Yeah, I guess I was just wondering, so in VA notify you, there's only a set group of users who are assigned to VBA education that can manage and do things, and there's different user statuses.
So there's viewer editor, technical contact and Business Contact and.
So each of those come with different permissions so.
There's.
I guess what I'm saying already, like some parameters around who can do certain things.
With that, I guess what I'm wondering is if if it would be beneficial to have further customization around those restrictions.


**Participant 2**   22:02
No, I think it's it's good if it's this.


**Facilitator**   22:04
Or does that covers that?


**Participant 2**   22:05
Yeah, that covers that. If the system already comes with restrictions and users and only a limited group has access, I think it's fine.


**Facilitator**   22:07
OK.
OK.


**Participant 1**   22:16
Agree. Agree.


**Facilitator**   22:17
OK, cool. Cool.
Like I said, there's I've. I've been learning along the way, so I'm just trying to understand if I there's maybe some use case that I'm not aware of and but I also understand that you're not as familiar with the tool, so just letting trying to all get us.
On the same page.
So, well, let's go ahead and click the generate API key and see what's behind there.
And so.
This is the first thing that shows. Once you click that.
Any thoughts?
It's.


**Participant 1**   22:53
No, I know.


**Facilitator**   22:56
OK, what would you do from here?


**Participant 1**   22:57
Report.
Stack one depend on the environment we're looking to.
Generate a new API key for.


**Facilitator**   23:07
OK.
Let's say we're doing to replace the staging 1.
So we'll go ahead and click that. We'll go continue.
And then this is the next step.
What would you do from here?


**Participant 2**   23:41
Go ahead and.
Whatever I wanna name my API key, put it in.


**Facilitator**   23:47
OK.
And any thoughts on the fact that it automatically added the environment as a suffix to the name?
Do you find that helpful or?


**Participant 2**   23:58
Yeah, I think it's helpful because it it confirms which environment you're using, which which environment you set it for.


**Facilitator**   24:06
OK, cool.


**Participant 1**   24:06
OK.
I'm ready.


**Facilitator**   24:12
Just wondering if there's any.
I guess the reason I was asking, I know all the teams have different ways of naming things and I wanted to make sure that having a suffix like that on there won't interfere with any like naming convention that you all have already in place. So.
So let's go ahead and just pretend like this is the exact perfect name that you were going to name it because it's a prototype.
And then.
Would you click continue or is there anything else that you'd wanna do here before you did that step?


**Participant 2**   24:49
Hit continue.


**Facilitator**   24:50
OK.
And then what would you do from here?


**Participant 2**   24:58
Hit the plus sign.
Oh, I'm sorry I didn't. Yeah.


**Participant 1**   25:00
Yeah.
No, no.


**Facilitator**   25:01
Right.


**Participant 1**   25:02
You good? You're good.


**Facilitator**   25:10
Sort of talk me through what you're seeing here and if anything is confusing or if everything makes sense, or if there's any other steps you do here.


**Participant 1**   25:22
Things right for this ability to go back and make any edits to any of the previous changes that we just made to either an environment or a key name.


**Facilitator**   25:30
OK.


**Participant 1**   25:31
So just a snapshot of everything you've done so far.


**Facilitator**   25:34
OK.


**Participant 2**   25:36
And that's helpful.
Just in case you made any mistakes and meant to put it in a different environment or the name and convention is wrong.


**Facilitator**   25:48
Yeah, for sure or typo.
All been guilty of that, right?


**Participant 2**   25:54
Absolutely.


**Facilitator**   25:56
And then so would you feel confident?
Let's say everything is named the way you want it to be named, and it's the right environment.
Would you feel confident in hitting continue and moving forward?


**Participant 2**   26:09
Yes.


**Facilitator**   26:10
OK.
So from this screen, what would be your next steps?


**Participant 2**   26:52
Copy that API key to the clipboard.
Put it in my notes.
Do something with it.


**Participant 1**   26:59
Yeah.


**Facilitator**   26:59
OK.


**Participant 2**   27:00
Then sure I capture it.


**Facilitator**   27:02
Is it clear from this screen that you this is your only chance to copy the key?


**Participant 2**   27:09
Yes, very clear I think.


**Facilitator**   27:11
OK.


**Participant 2**   27:13
Umm.
I think an additional like some kind of highlight somewhere cause.
As we know, a lot of people don't read 1st and they'll just click.
But I think there needs to be like some type of warnings, something that just drag your attention.


**Facilitator**   27:36
And.


**Participant 2**   27:36
Across the part that you'll never to copy it 'cause you won't be able to access it again.


**Facilitator**   27:42
Do you?
Do you feel like it should be something?
Do you have a specific? I'd like place in mind that you feel like it would be better shown.


**Participant 2**   27:56
I don't know.


**Facilitator**   27:56
Because. Because you're right, it's not.


**Participant 2**   27:56
Something across the top, yeah.


**Facilitator**   27:58
It's not bolded there.
It's absolutely correct. So.


**Participant 1**   28:00
Yeah.


**Facilitator**   28:04
And you're right, people don't read so.


**Participant 1**   28:07
If you if you're not.


**Facilitator**   28:07
Is there?


**Participant 1**   28:09
If it's not gonna be bolded, then a pop up or a like a tool tip that pops up where the user has to click OK or.
Or, you know, like a warning saying, hey, make sure you copy this API key and you click OK on that pop up.
I mean, just it kind of forces you to read.
It forces you to make a interaction on this page.


**Facilitator**   28:33
Yeah.


**Participant 1**   28:33
To close out that one or something like that.


**Facilitator**   28:36
Yeah, yeah, that's great.


**Participant 1**   28:36
So like.


**Facilitator**   28:38
Some some extra step, just like hey, make sure you do this right. Like something like that, OK.


**Participant 2**   28:44
Right.


**Participant 1**   28:45
Yeah, yeah.


**Facilitator**   28:47
Yeah, I like that.
Let's say that we're gonna just copy it and send. It is gonna put in her notes somewhere safe and.
We're for the sake of this. We're gonna protect that, that she's now taken.
And sent it on to like the right people and it's getting integrated and replacing the old one and things have been tested and everything is like golden and we're ready to go.
So now you need to come and revoke the old one.
How would you go about doing that?


**Participant 2**   29:28
It'll hit the link on the side API key management or the one at the bottom.


**Facilitator**   29:35
Oh, I guess I didn't. OK.


**Participant 2**   29:36
Go back to API key management.
And then you say revoke the old one, correct?


**Facilitator**   29:51
Mm-hmm.


**Participant 2**   29:54
So.
The old one version 2 staging.


**Facilitator**   29:57
OK, this one.


**Participant 2**   29:58
There's a revoke down at the bottom with the trash can.


**Facilitator**   30:03
Mm-hmm.


**Participant 2**   30:03
Oh, I would click on that one.


**Facilitator**   30:05
OK. And when you click on it, what would you expect to see?


**Participant 2**   30:12
On the next screen popping up.
Oh.
Just information saying I chose to revoke it.
To validate that that is an action that I want to take.


**Facilitator**   30:28
OK.


**Participant 2**   30:29
An effective day.


**Facilitator**   30:29
Let's go ahead.
OK.
I hope so.


**Participant 2**   30:38
Oh, look at there.


**Participant 1**   30:40
Yeah.


**Facilitator**   30:43
It's like we read your mind.
It's great.
I love when that happens, though, yeah.


**Participant 2**   30:52
See something like this needs to pop up for that.
Did you copy this API key?


**Participant 1**   30:57
Yeah.


**Facilitator**   30:59
Yes, absolutely.
So it's not baked into the prototype, but the plan is if the user tries to navigate away from that page before clicking the copy to clipboard button, a warning will show up that says you have not copied this button this key. So it's a little different, but I.
Wondering if.
If it needs to show regardless, any thoughts on that?


**Participant 2**   31:30
Yeah.


**Participant 1**   31:30
'Cause. What if they don't navigate back?
What if they just leave it on that page and go do something else?
Then you're not getting that warning.


**Facilitator**   31:37
Hmm.
OK.
Right. Like they think that it's just there and then if it times out.


**Participant 1**   31:44
Is there correct?


**Facilitator**   31:47
It's OK.
Yeah, that's a good point.
All right, I'm gonna go ahead and pretend like you typed revoke and from this step, would you feel confident in taking this action?
Knowing all the steps and due diligence you've already done.


**Participant 1**   32:06
Yeah.


**Participant 2**   32:07
Yes.


**Facilitator**   32:07
OK. All right.
So from here we're going to Scroll down and we're going to just look and see.
And it does show that it's been moved to the inactive.
But.
Just talk me through anything that might stand out to you from the inactive keys.
Section.


**Participant 1**   32:45
So it does like that.
It only show the last revote or it shows the of history.
Of all the previous revoked, or if it's just the last two or just the last one, guess is my question.


**Facilitator**   32:59
So that's a great question. And I I guess my question to you is what would you want?
Would it just be fine to see the last for each environment? Or is there a time frame that you would want or and, and if so, why?
Any use cases for showing more history.


**Participant 1**   33:32
So.
Census revoke can you click on it to maybe see the previous?
Do you? If it just it's not clickable to show any.


**Participant 2**   33:43
History, like your last used date.


**Participant 1**   33:44
Data for.
Yeah.


**Facilitator**   33:50
You'd like to see the last used date included on.


**Participant 2**   33:53
Yeah, some type of history on it.
For tracking purposes.


**Facilitator**   33:59
OK.
And.
That's. Yeah, that's good.
That makes sense.
So more than just like what date it was revoked on.
When it was last used, before it was revoked.


**Participant 2**   34:14
Yes.


**Participant 1**   34:14
Yeah.


**Facilitator**   34:16
Would it be beneficial to see the generated date?
Or is that overkill?


**Participant 2**   34:24
No, I think that would be good too.


**Facilitator**   34:27
OK.
Umm.
And then what about the number of, like historical records here like there's?
Do you think that it's sufficient just to show the last one, or would you need more than that?


**Participant 2**   34:52
I think that question for Eddie.


**Participant 1**   34:56
That's why I was asking.
So it's only show revoke but you can't click on it or anything like. So I was I was leading towards saying would you be able to do you?
Do you have data on all the individuals who have access?


**Participant 2**   35:13
Put an answer in there I I.


**Participant 1**   35:14
On how often or when was the last time they used the access key to access the system.
If that data collected.


**Facilitator**   35:24
To access which system? VA notify.


**Participant 1**   35:28
Right.


**Facilitator**   35:30
Or.


**Participant 1**   35:30
So if if Sunitha.
If I want to see when was the last time sneak the access project V2 for staging. If that data collected, do you guys house that data?
So we can control if a user who has access is asked to utilize. Well, I guess you guys wanna make them inactive anyway, so never mind.


**Facilitator**   35:54
So, right.
Well, that's true too.


**Participant 2**   35:59
OK.
No problem.


**Facilitator**   36:00
But I think.


**Participant 2**   36:00
Do you wanna play?
But I I don't. I'm sorry.


**Facilitator**   36:02
Oh, no, go ahead. Go ahead.


**Participant 2**   36:04
So it has the remote vibe, but.
Would you also have a history of who generated the? Is it always the same person that generated will revoke it or can somebody else come in?


**Facilitator**   36:19
So.


**Participant 2**   36:20
And revoke something that you generate.


**Facilitator**   36:23
So as long as they have the permissions.
On your service.


**Participant 2**   36:30
Mm-hmm.


**Facilitator**   36:32
They can do that, so if.
It there's like another technical contact or Business Contact and.
They come in and they're like, oh shoot like or like, I don't know, maybe somebody spun it up and got the new one.
It's already tested.
And you need to revoke the old one to get it off of the list.
Like just, you know, like they can come and do that.


**Participant 2**   36:56
OK.


**Facilitator**   37:00
So I think it's sort of a governance thing.
As well, making sure that you have the right people assigned.


**Participant 2**   37:08
So if you can't click click on these to see any type of history.


**Facilitator**   37:09
That you trust.
Right.


**Participant 2**   37:15
Why can't you have like who initially generated?
That that inactive key on the remote key.


**Facilitator**   37:26
Yeah, I think we totally could. I think that's what we're just trying to validate, you know, like like and try and understand use cases for that.


**Participant 2**   37:32
OK.


**Facilitator**   37:37
So if that is something that would be beneficial to see.
You know.


**Participant 2**   37:44
Now if it'll be beneficial, I don't work with them, but.


**Facilitator**   37:48
I don't know either.


**Participant 1**   37:50
I would.
I would think I I like listening to sand though, so if hypothetically sneaky created.
A a new a API key, let's say last week and I come in and revoke hers because I couldn't remember the the API key.
Wouldn't I?
Wouldn't we wanna know that?
And when it snat, they wanna know that I revoked her.
Active status, the status that she created.
Because you're right, we.
We we should know who all have access to each environment, but we don't lot of developers is in this environment.
We don't communicate with them so they can. They can revoke one of our statuses, but we don't know the API key because they didn't share it.


**Participant 2**   38:27
Mm.


**Facilitator**   38:36
OK.


**Participant 1**   38:37
So you just gonna have people coming in, revoking, revoking just to get the key?
I just like. I feel like the person who generated should be notified.


**Facilitator**   38:48
Hmm.
So I think.


**Participant 2**   38:53
Well, oh, OK.
So before it was revoked, it was in a active status.
So they know who who it was generated by before they even do the revoke.


**Participant 1**   39:03
Right.


**Participant 2**   39:04
Because that information is up there. But just for history purposes, it's just not shown for somebody else, I guess coming in to look at it.


**Facilitator**   39:16
So another use case could be, let's say that somebody leaves the team before.
Before the expiration comes up like in the middle of the the active period for the key.
That's one of the use cases to get that key rotated right just for security purposes.
So if you did that, there wouldn't be a benefit to notifying the person who created it.
I and I think each service really only has.
An API key for staging and one for production.
A maximum of of one for each active, so.
Unless.
Addie. Help me out.
Is there a reason why that you need more than like one for your for like VBA education?


**Participant 1**   40:17
I mean, I will hope we only need one for stage anyone for production but.


**Facilitator**   40:21
OK.


**Participant 1**   40:22
The issue is.
It's we're we're on the we're the business and then a lot of developers gonna have access. So we can't we can't guarantee the developer will share that with us if they come in and change it.


**Facilitator**   40:31
So.
Your Business Contact, so the person who is assigned as the Business Contact and honestly I think let me double check.
Because I have a little list.
I believe it is just the two of you that are listed as business contacts on VBA education.
So you have the responsibility and the role of assigning technical contacts.
And right now you don't have any technical contacts on your on BBA education. So literally no one else can do it. But the two of you.


**Participant 1**   41:15
Oh, OK.


**Facilitator**   41:16
If that helps at all.


**Participant 1**   41:17
Well, it's.


**Facilitator**   41:17
Like as far as like the the permissions, does that make you feel a little bit more comfy or like?


**Participant 1**   41:24
Yeah, it is possible though. And snick I could be wrong.


**Facilitator**   41:26
OK.


**Participant 1**   41:28
I thought developers would eventually developers would need access to this, correct?
Definitely for the stage in.


**Facilitator**   41:36
I think that.


**Participant 2**   41:38
'Cause I see all my EB emails and stuff in here, Eddie.


**Facilitator**   41:39
Is.


**Participant 1**   41:42
Yeah, yeah. That's why I saw all yours in there. And then we're about to.
We about to start using VA notify even more once we go to electronic notification.
So it's gonna be a lot of notification.


**Facilitator**   41:53
Mm-hmm.


**Participant 1**   41:55
Well, we should be doing notification emails now anyway.
For original but for supplemental, we gonna add population.
Gonna grow tremendously.


**Facilitator**   42:06
OK.
So.
I think.
You probably want to just make like. I don't know, I think that it's a a limited number of people that you want to be able to have that kind of power, you know, like and it's would have to be somebody that you trust to like. And yeah, I.


**Participant 1**   42:25
OK.


**Facilitator**   42:33
Think in more cases.
I would see.
More of a need for viewer and editor access for like the bulk of people on your service rather than like the Business Contact would almost more like an like an admin kind of role for service.


**Participant 1**   42:53
OK.


**Facilitator**   42:53
And so you wouldn't want to give out the keys to the castle to so many people.


**Participant 1**   43:00
Understand.
So something to when your team did the connection to the VA notifier for those enrollment verifications, did your team do the the development work or did VA notify do the development work?


**Participant 2**   43:14
Yeah.


**Participant 1**   43:16
I guess that's what I'm trying to figure out.


**Participant 2**   43:18
VA notified.
Well, they provided the data over to VA notify, so we they work with the VA notified team, it was it was like 3 individuals we work with over there.


**Participant 1**   43:30
OK. OK. 'cause, that's what we did for the e-mail.
So then now I see why it would just be me and Sunita with the access then.
So it it makes sense now.


**Facilitator**   43:40
OK.
I'm gonna try and.
Pull up.
Excuse me, I'm pat.
See if I can share.
The portal with you guys? Just.
Give you an idea.
But as far as what we've seen for the API key management portion, while I'm pulling this up.
Does everything seem to make sense?
Is there anything other than what we've already discussed that?
Feels like it's missing or confusing.


**Participant 2**   44:27
No, everything looks good.
It makes sense.
It's it's easy to navigate and and flow through.


**Facilitator**   44:34
OK, great.
Alright, let's see here. I'm gonna.
It's just authenticating.
Oops.
Their fingers crossed, OK.
So you wouldn't see this when you log in, but.
You would probably see this.
And it would.
You'd actually land on the services page you would see.
Probably all of the VBA education.
But I think this is the only one that that actually pushes to production.
And those are the ones I was kind of mentioning at the beginning about possibly cleaning up if they're not necessary anymore.
So in here this is the workspace page and this is where all of your templates are.
There's the dashboard that has.
Oh, OK.
Nice.
Yep, OK.
So you do have an extra 1 in there. I didn't account for.
So dashboard which you know gives you some performance indicators. It lets you know what's being triggered and sent at different times.
Delivery performance overtime.
Just running through this 'cause just in case you haven't been in here for a minute.
Some error monitoring metrics so you know if something is failing to send.
You can see why.
And what are those reasons are?
You can also see it by template.
We recently updated some things and so stuff is gone.
A little off the rails here.
Sorry about that alignment.
Umm.
There's the user hub and so this is where you can see all of the users that are assigned to your service and their and their role, and so.
So here, oops, there's Eddie.
There's neither, but everyone else is either an editor or a viewer.
So you, you two are the ones that have like the the highest level of access. And so if you ever want to see what that entails.
Like if you're considering assigning somebody as a technical contact, you don't have to.
You both are able to do everything that a technical contact editor can do.
But if for some reason.
Reason the workload becomes such where you're like, I think somebody needs to be specifically this this role. You know, that's something that you can decide on, but it's got descriptions as to, you know like a.
Whole key responsibilities and then same as like the technical contact, the editor and the viewer. And then like a little chart that shows just like a quick visual of like what you're able to do.
API key management is not on here yet because it's a feature that we haven't even built yet. That's why we're testing it out and just seeing like what is working and what's you know.
Activity log is coming soon.
But this'll be like if.
Basically, any user activity that happens with this in this service.
Will be shown here.
So like if somebody.
Does revoke an API key. You can see that activity here. If a template is edited or deleted or things like that, a new user's added or a user permission has changed.
In settings.
You have your settings details where.
You know, I don't know.
I am admin so I don't try to think what.
OK.
So you'd be able to go and make changes to your reply to inboxes, your testing list status.
You can see your your service ID for staging and production and this is where the API key management would live right in here.
Is that help?
Put some context to what we talked about.


**Participant 1**   49:55
Yeah, yeah, it's definitely helpful.


**Participant 2**   49:55
Yeah, it did a lot.


**Facilitator**   49:58
Awesome. Good.


**Participant 1**   50:00
I have.
Have a question for you?


**Facilitator**   50:03
Yeah.


**Participant 1**   50:04
So on the under the VBA education workspace.


**Facilitator**   50:08
Mm-hmm.


**Participant 1**   50:09
If if we're missing a template, who do I go to?


**Facilitator**   50:15
Missing an entire template.


**Participant 1**   50:17
Yeah, a couple a quite a few of them.


**Facilitator**   50:21
Really.
Um.
I.
I guess you would come to us.
You would go, I think reach out in the slack channel.


**Participant 1**   50:33
OK.


**Facilitator**   50:33
Do you?


**Participant 1**   50:36
It's about 3:00.


**Facilitator**   50:36
Yeah.


**Participant 1**   50:40
About 6 templates.


**Facilitator**   50:42
Oh.
Wow, OK.
Yeah, I would.
Are they showing in the other services for VBA?


**Participant 1**   50:53
No.


**Facilitator**   50:55
And none of them.


**Participant 1**   50:57
You said the other one's. Let me check.
No, they're not.


**Facilitator**   51:15
Yeah, I would reach out in a slack in our VA notify public channel.


**Participant 1**   51:23
OK.


**Facilitator**   51:24
And our engineers and our our PO, our PM.
Everyone jumps in and the right person.
Will be able to identify and and help you out. I I don't have access to because I'm UX. I don't. I don't have, you know, access to the archives and all that stuff.
Stuff.


**Participant 2**   51:47
I appreciate it.


**Facilitator**   51:50
Yeah. I'm sorry about that though, that's.


**Participant 1**   51:55
I wonder if they just got it somewhere else, but yeah, we we have we send emails to individuals who apply viava.gov for education benefits.
We send them a confirmation e-mail.
At least we supposed to be 'cause. We tested it and passed it so.


**Facilitator**   52:17
OK.
Yeah, I I would definitely reach out in slack.


**Participant 1**   52:22
OK.


**Facilitator**   52:23
And if you want me to help facilitate any of that, I'm happy to do that as well.
But I don't also wanna keep.
Like being I don't wanna be a middleman to hold up the process either, so.
Well, hopefully they can figure that out.
That's crazy, yeah.


**Participant 1**   52:44
Yeah, yeah, I worked with BA, not I worked with.
Yeah, it should be on.
It should be six of them.
Different templates.


**Facilitator**   52:53
Yikes. OK.
Yeah, definitely.
Shoot them a message very, very fast.


**Participant 1**   52:59
OK.
I'll do that now.


**Facilitator**   53:00
Yeah, yeah.
Well before.
We drop. Is there any other questions or anything that you might do to improve or make the process smoother or more clear?


**Participant 2**   53:23
I don't have anything.
Everything seems to flow great.


**Participant 1**   53:28
Yeah.


**Participant 2**   53:29
No issues.
Except for that warning on that page to save that API key.


**Facilitator**   53:34
Yes.
No, I love that. That's fantastic. OK.


**Participant 1**   53:37
I agree.


**Participant 2**   53:37
That that's it.


**Facilitator**   53:41
All right.
That's great.
Thank you guys so much for your time.
I really appreciate it.
I'll probably be in touch if you guys are free to to run more things by as they come up.
It's not all the time, but you've been really helpful.


**Participant 2**   53:58
No anytime.
Thank you so much and please feel free to reach out.


**Participant 1**   54:01
Yeah.
Yeah. Thank you for the demo.


**Facilitator**   54:03
Thank you so much.
Yeah. All right, Eddie.
I hope they find the templates.


**Participant 1**   54:09
So I just can you give me the slack net?


**Facilitator**   54:10
OK.


**Participant 1**   54:12
Is it the BA notify public?
That's the slack name. OK, OK.


**Facilitator**   54:14
Yeah.
Mm-hmm.


**Participant 1**   54:17
Thank you.


**Facilitator**   54:18
Yeah. You're welcome.


**Participant 2**   54:24
All right.
Thank you so much, Alyssa.


**Facilitator**   54:26
OK.
All right.


**Participant 1**   54:26
Yeah.


**Facilitator**   54:26
Thank you. Bye.


**Participant 1**   54:27
Thank you.


**Participant 2**   54:28
Alright, bye bye.


**Participant 1**   54:29
Bye.
