
**Facilitator**
Perfect.
All right.
So how familiar are you with API keys or managing them at the VA?


**Participant** 0:16
Somewhat familiar, I think.


**Facilitator**
OK, have you ever requested or rotated API key before?


**Participant** 0:24
I haven't, personally.
That's typically something that we.
Give to our system team and they handle the the rotation.
We just kind of obtain them and maybe put in a request if needed specifically for new keys. I think if there's a rotation they'll kind of the system team works with any expiring keys or any type of notification usually goes to that side of the house.


**Facilitator**
OK.
So.
This next question may or may not pertain to you then, but you know, if you had to rotate your API keys tomorrow, where would you first look for help to do that?


**Participant** 1:02
Given like in this situation, I have an API key on hand that I need to to swap out.
OK. I mean for us that that's typically we we have all of our keys in in cred stash.


**Facilitator**
Yeah.


**Participant** 1:15
So we have a a variable that is existing in points to that cred stash entry.
So I'd be looking to the system team 'cause. I don't believe I have permissions to actually make that update in Cred stash, but I would be looking to them to update that entry and I would give them the correct entry.
You know we have a name for it and I would just make sure to let them know what entry to update and what value to update it with.


**Facilitator**
OK.
Would there be any sort of? Like if we're talking specifically about VA notify and?
That rotation and getting new keys, would there be any specific type of help or resources that you'd want available to you?


**Participant** 2:00
Nothing that I can think of. I think that pretty much covers it as long as we can test it. That key works and we could do that, you know pretty much any way with a curl requester, you know Bruno anything that that would allow us to actually hit.
Some type of an endpoint and just verify that we can get in and get past that 403 error.
I think we would.
I'd be pretty good after that.


**Facilitator** (Guest) 2:22
OK. And let's say that your key is about to expire.
Is there any way that you would expect to be made aware of that or is that something that you keep track of on your own?


**Participant** 2:37
I don't know if the system team tracks that. That might be something that they track, but I would hope that, you know, we would get probably something like X amount of days notice.
Hey this this key is expiring.
Whether it's as far as like something that's going to expire this this quarter, this π, or whether it's at the 30 day or 90 day notice, I'm not sure what the intervals that they would look for, but I would normally that's what I would expect.


**Facilitator** (Guest) 3:02
OK. And where would you expect to get that notice?


**Participant** 3:06
I would expect it probably on an e-mail.
That seems like the most appropriate, and like I said, it's probably to a system team distro that I I may not be on, so that may be happening, but that is how I would assume that it would come through.


**Facilitator** (Guest) 3:22
OK.
Great. That's very helpful.
All right. So I'm gonna give you a little scenario.
So let's say that you received an alert that one of your API keys is about to expire and you need to rotate it, and that means you'll need to create a new key and update the integration, and then disable the old key once everything is working again. I.
Gonna show you an interface and I am relatively new to teams so.
Fingers crossed.
Let's see here.
Share content.
OK.
I don't know.
Oh my goodness. OK, I'm so sorry.
I have to I apologize for this.
I need to drop and then reopen.
I'll be right back.


**Participant** 4:45
Oh, I know the exact error you're getting no problem.


**Facilitator** (Guest) 4:47
Yes, OK.
I'm so sorry. Thank you.


FOLK, ELISSA A. (ODDBALL INC) 5:48
I'm actually gonna just try and.
Do this.
On Citrix because.
My my other connection just did not want to participate.
Can you hear me OK?


**Participant** 6:05
I can, yeah.


FOLK, ELISSA A. (ODDBALL INC) 6:07
OK.
I'm gonna share.
The prototype with you.
In the chat here.
Can you try and access that for me?


**Participant** 6:42
Let me reconnect to the VPN. I think I lost connection recently and that may I'm getting a a sign up or log in interface.
So I wonder if I'd connect that might change things.


FOLK, ELISSA A. (ODDBALL INC) 6:54
OK.


**Participant** 7:37
Hmm.
Yeah, it's asking me to create an account to view them.


FOLK, ELISSA A. (ODDBALL INC) 7:54
OK.
Hmm.
Oh.
OK.


**Participant** 9:32
Yeah, I can see that now.
But I did lose your audio.


**Facilitator** 9:40
Oh, is that better?


**Participant** 9:42
Better, yeah.


**Facilitator** 9:44
OK.
Oh, there we go.
So sorry about the technical difficulties there, I apologize.
Are you?
Are you seeing my entire screen or just the?
It doesn't show me what I'm sharing.


**Participant** 10:04
It looks like the was it a Chrome window.


**Facilitator** 10:08
Yes. Yep.
And with the portal prototype in it. Oh, perfect. OK, good.


**Participant** 10:12
Yes.


**Facilitator** 10:16
OK. Whoo. I wonder if I can give you.
Remote control access. That might be too fancy.
How about I just ask you what you would do and I can click for you 'cause. I think that I'm trying to get too fancy here with the what I am able to do in teams so.


**Participant** 10:31
OK.


**Facilitator** 10:38
So like I said, let's say that you have received an alert via e-mail and you know one of your API keys is about to expire and you need to rotate it.
So you need to come into the portal and you need to create a new key.
And then you'll need to update your integration and disable the old key.
The integration will just pretend like happened.
So.
You're come in and you're in your service and you go to the settings page. And where would you go from here?


**Participant** 11:13
I mean, I see the option there for API key management.
So I I mean there's I see two of them.
I see the one underneath the main body of the page and I see the other one in the the side menu, so it looks like they all match up.
So either one of those I would probably click on.


**Facilitator** 11:29
OK.
And when you click in there, what would you expect to see?


**Participant** 11:35
Umm.
Probably a like a list of well read in the descriptions of the kind of like a list of of keys that are that exist and maybe a key generation button and then maybe the ability to disable a certain key.


**Facilitator** 11:53
OK.
All right, go ahead and click in there.
And this is the page that you're taken to.
Give you a minute to to read if you need me to scroll or something, just let me know.
And let me know like just kind of take a look and let me know if this is kind of what you expected.


**Participant** 12:23
Yeah, that looks pretty good.
And then if if you Scroll down, just how much more is there?
Is Steve active and inactive.
That looks pretty standard to me like. I guess what I would kind of expect to see.


**Facilitator** 12:52
OK.
So what would you do from here in order to start the ball rolling with?
Getting a new API key.


**Participant** 13:05
A new one I would.
I would hit that generate button.


**Facilitator** 13:09
OK.


**Participant** 13:10
Or I mean, I guess if I was confused, I might hit the see how to manage kind of going to the instructions a little bit first.
I see that one there.
So I guess we could probably start there before I unnecessarily generate extra keys.


**Facilitator** 13:24
OK.
It's a prototype, so it's not exactly I would have it anchor linked to the 'cause.
It's a lot of text but.


**Participant** 13:32
OK.
Yeah.
Yeah. If I was gonna click, I would.
I would have this open in a separate tab and be reading along as I'm doing everything once I hit that generate API key button.


**Facilitator** 14:01
OK.


**Participant** 14:08
Just because I I like to go kind of slow, especially when creating something that's potentially sensitive like this.
And making sure that I'm selecting all the settings that I need and nothing, nothing more. But at a quick glance it looked like we're probably gonna need for the application.
Just your normal key. That option one I think it was higher up.


**Facilitator** 14:31
Oh, oops. I'm sorry. Yep.


**Participant** 14:34
Yeah, that, that, that normal API key one for.
I'm assuming that we're rotating for, you know, our staging environment and our production environment.
So that's kind of where we would be.
The how to rotate keys is probably useful.
Yeah. And that's that's kind of the the process that I was thinking of in my head how how it would go about doing it. So good to see that it's confirmed here.
Is there more for this section?


**Facilitator** 15:25
I think.


**Participant** 15:25
OK.
OK.
OK.


**Facilitator** 15:41
OK.


**Participant** 15:41
That looks good, yeah.


**Facilitator** 15:45
So after reviewing it, I know you said that you would have it in a different window, but would you go like in this scenario right now? Go back to where we just were or would you need to do something else or?


**Participant** 15:59
No, I would.
I would feel good to go back and kind of start the process and you know, just kind of flip between tabs as I needed to to reference the instructions. But for now that that feels pretty good. If I needed to to go, I would probably go ahead and.
Hit that generate API key button.


**Facilitator** 16:14
OK.
And once I click this for you, what do you think will happen?


**Participant** 16:24
Curious if there's gonna be any extra information that's needed to actually generate that API key or since since we're logged in.
You know, knowing how the portal works a little bit, since we log into a staging environment, I'm guessing that I would be creating a, you know, church trying to determine if it if it's, if it knows exactly which environment I'm trying to create.
A key for wondering if there's gonna be.
Some drop downs, maybe a form of like if I was the manager of multiple different integrations, what I have to select the correct integration?
But I'm I'm expecting some type of small form and then maybe a a confirm button.


**Facilitator** 17:07
OK.
All right, go ahead and click.
Whoops.


**Participant** 17:14
There it is.
So for me, I would I would, you know, obviously start with staging, make sure that whole process goes smooth and then go forward from there.


**Facilitator** 17:24
OK.


**Participant** 17:36
And then yeah, I would.
I don't know.
Come up with a a good a good name for it.


**Facilitator** 17:42
Oh, I I picked one for you.


**Participant** 17:45
Perfect. I kind of figured that was coming in the design.
I've I've played with Figma a little bit, so I know that typically that next one is a pre populated name.


**Facilitator** 17:56
Yeah, the the getting the being able to type something in is is something that's not quite baked in yet, so.


**Participant** 18:03
All good.


**Facilitator** 18:05
All right.
So.


**Participant** 18:12
From here I would expand.


**Facilitator** 18:12
Is there anything you want me to put you OK.


**Participant** 18:14
Yeah, I would expand both of these just to make sure that everything looks like how I would want it to.
And that all matches what we did, so I would go ahead and continue.


**Facilitator** 18:26
OK.


**Participant** 18:32
OK. And then I would definitely copy that.
To a clipboard.
You know, for me, I'm. I honestly don't trust the copy buttons as much as as your average person does, so I would probably highlight and copy it.
But you know, getting the same effect and make sure that I have that key saved somewhere.
And you weren't able to access that again.
So that's something that if you don't get it right, you need to just revoke this and and start the whole process over again, OK.
Yeah. Then I think I would be good to go back to API key management and I would expect to see.
That new.
You know, one of those new boxes for this new key that we just generated. So what?
Project V3 I believe, right?


**Facilitator** 19:25
Yep.
All right.
So let's say we're going to pretend that now that you got your new key, you've copied it.
You've run all the testing and then everything looks golden and you're ready to revoke the old one.
How would you go about doing that?


**Participant** 19:50
I would go down to project 1V2 staging and and just click on that red revoke.


**Facilitator** 19:56
OK.


**Participant** 19:57
After we've, you know, done all the other things and all the other systems that we need to do.


**Facilitator** 20:02
Right, right.
You're like for sure. Ready to go, right?


**Participant** 20:04
Yeah.


**Facilitator** 20:07
OK.
So what?
What do you expect will happen once we click on this?


**Participant** 20:14
I would expect just a confirmation modal.
Are you sure you want to revoke and then?


**Facilitator** 20:17
No.


**Participant** 20:23
OK.
Yeah, and an extra layer of security with the typing so that that's cool.


**Facilitator** 20:29
OK.
And would you feel confident doing this with these steps in place?
Like or, is there anything that?
Might give you pause.


**Participant** 20:48
Nothing outside the, you know, the fact that you can't get access to something after you do this.
That's the only that's obviously the biggest concern, but once you've tested and you've.
Completely done a weight shift from the old key to the new key. I would feel pretty good about doing this.


**Facilitator** 21:02
OK.
Go ahead and click revoke.


**Participant** 21:09
OK.
And then that gets moved to the bottom section.


**Facilitator** 21:20
Yeah. Can you talk me through anything that might stand out to you?


**Participant** 21:25
I noticed that we had two inactive keys before, but now we also only have two.
Is that just a a design thing or is that a limitation that we only show the two most recent ones?


**Facilitator** 21:36
What would you expect to see there?


**Participant** 21:40
I would expect a list of all of the ones that have been act inactive, but I understand that that can get pretty long over time.
So you probably wanna wait to to truncate that list to a short, you know shorter version of it.


**Facilitator** 21:57
Out of curiosity, what?
How would you use the list if it had, you know the whole like?
Historical.
Inactive keys.


**Participant** 22:14
The only information that's really available on the inactive list there is that revoked on and revoked by date.
So the only way that I could see that being beneficial is looking at it and seeing why things may have been removed. You know, we may look at this and see that Childish Gambino here left the company and you know we we knew his his date of ex.
And.
And that was one way that we could track it versus.
You know, all the other ones had been on a a 5 1/2 month interval and then we had one that was all of a sudden two months and and and I noticed in some of the docs earlier we said you know if if somebody with access.
Leaves the company.
We recommend rotating that API key immediately.
So that's the only thing that I would really look through and and use for historical purposes is to figure out when things might have been done and why.


**Facilitator** 23:11
OK. How how far back would you would that be valuable?
It's OK if you don't have an answer, I'm just curious.


**Participant** 23:26
I think I would say maybe I don't. For some reason I want to say two years, right?
You have.
A six month expiration period on these keys from what it looks like.
I would think that two years would probably be enough history to see, OK, we're doing.
We've done it four times over the past two years. On every six months or.
Just something more than one because it may give a false hope, a false sense of when they should be done without having the history to say, OK, every other time we've done it on a six month rotation. But this one time was an anomaly.
Why you go back and look at the HR records and see that that that.
That point of contact left the company at a certain time and we needed to update a key because it was associated to their name.


**Facilitator** 24:19
OK.
No, that's that's helpful.
OK, cool.
Just a few wrap up questions. I know we're a couple minutes over time, so if you need to drop, I totally understand.
Are you OK? Just for the couple wrap up questions.


**Participant** 24:40
Yeah.


**Facilitator** 24:41
OK, cool.
So after walking through this experience, did it meet your expectations for something as sensitive as API key management?


**Participant** 24:54
I think so, yeah.
I you know, with something like API key management, you don't want too many options.
It's it's nice to have the system being the one creating all these things, especially like a sensitive string like like you have. If if you have a way of creating a secure string, it's probably better than having somebody put the name of their cat as the the A.
Key for something as sensitive as this, so it's nice to have that it.
It's nice that it it knows who you are.
So what it is able to associate your name without.
Having any input there really the only options were which?
Which environment and?
What was that second option?


**Facilitator** 25:36
The name.


**Participant** 25:38
Yes. Yeah. The name of the key, I guess the the one question I do have is what if you were and is there a case that you have where you are the manager or you have potentially access to generate keys for multiple? Is that just the project name?
Is how you're you would plan on associating those things. So we would say one is for you know, the product A and one's for product B.


**Facilitator** 26:00
Yep, Yep.


**Participant** 26:01
OK.
That makes sense then.


**Facilitator** 26:07
Is there anything that aside from like, you know, the things that we covered like, you know, wishing that there was about two years worth of historical data there for the inactive keys?
Is there anything that you would improve on or do differently here?


**Participant** 26:29
I guess another, I don't know if it's an improvement, but I guess the question may lead to an answer and improvement.
Is it says only users with the appropriate permissions can manage API keys?
Do you have different levels of users and like, do you have different names of so like we're dealing with a with abox.com integration at the same time and and we have levels there where it's like editor contributor.
Coowner admin like there's different levels.
Scopes and permissions.
Do you have anything like that?
That is useful and maybe can tell a user what scope of permission they have for a certain integration.


**Facilitator** 27:06
Yes, so.
We have viewer like starting at the lowest level up to like the highest. We have viewer level editor, technical contact, Business Contact and then there's platform admins.
So this feature would be available to a technical or a Business Contact.


**Participant** 27:32
And not an admin and admin would be someone like on on the notify side.


**Facilitator** 27:35
Well.
Yeah. Yeah, that'd be more like platform side, like adding users, making new services and things like that.


**Participant** 27:43
OK.
And and is there a way that it's viewable?
What what my current status is right now.


**Facilitator** 27:54
Yes.
Like this is AI was going to navigate there.
It's a prototype.
I don't have it in here in user hub.
It's got the there's like a list or like an item over here that says users and if you click on it it'll give you all of the users in your service and they're assigned role.


**Participant** 28:15
And and where was that again?
Can you just flash the mouse one more time?
User hub OK 'cause I was navigating as you were saying that so I was in the user hub OK users.


**Facilitator** 28:20
Yep, right. Mm-hmm.


**Participant** 28:29
And I see those OK.


**Facilitator** 28:33
Yeah. So if.
If it makes sense, you know, I think the business contacts are the users who are identifying appropriate technical contacts.
So might be a good team conversation, you know, so.


**Participant** 28:49
Yeah, that might be something I have to ask shanee about because I am listed as Assistant Viewer right now, so I don't see any technical contacts in our staging environment.
So that may be something that we want to address for, you know.


**Facilitator** 29:03
It this is if it makes you feel any better, very new.
Like the the technical contact, it's a newer role. So yeah. Yeah, we've recently rolled that out.


**Participant** 29:11
OK.
That makes sense then.
And this is completely unrelated, but I've in the past I've been able to update templates.
Is that something that's now limited to the technical contact role, or is that still available to the viewer?


**Facilitator** 29:28
That is editor.


**Participant** 29:31
OK.
I and that is the role that I have, OK.


**Facilitator** 29:35
Yep.


**Participant** 29:36
Just trying to get a, you know, kind of a grand picture here of of who can do what and how?


**Facilitator** 29:41
Yeah, sure.
Actually also in user hub, I believe there's an option on the side that also says roles and permissions.


**Participant** 29:53
Yes, that was where I clicked initially and that tells you what you can do, right?


**Facilitator** 29:57
Yes. Mm-hmm.


**Participant** 30:00
OK, template management.
User management.
So I'm guessing there's gonna be another section under the role permissions.
To talk about API keys.


**Facilitator** 30:12
Yep, exactly.


**Participant** 30:13
OK.
I see it.


**Facilitator** 30:20
Awesome.


**Participant** 30:20
I see it now under the the technical contact role.
But I don't see it underneath the the role permissions just because it's not released yet. Is that correct?


**Facilitator** 30:32
Yeah. Yep.


**Participant** 30:33
OK.
It's.


**Facilitator** 30:40
Any other questions or final thoughts you might have?


**Participant** 30:47
No, it seems pretty straightforward.
Not a whole lot of.
You know extra input needed for for form or anything so that that's always good. And obviously the the technical side of it is is where the the heavy lifting comes in to test it and make sure that it works well.
But I think everything on this side looks pretty good.


**Facilitator** 31:07
Awesome.
Well, thank you so much for your feedback and for your time and staying over a little bit. I I really appreciate it.
And for your willingness to help out so.


**Participant** 31:21
No problem.
Thank you.


**Facilitator** 31:22
Alright, thanks so much.
Have a good one.

