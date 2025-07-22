
Session 6
FOLK, ELISSA A. (ODDBALL INC) started transcription
 
**Facilitator**   0:04
Hi.
One second.
OK.
Sorry about that.
Just getting something set up.
 
**Participant**   0:18
No problem.
 
**Facilitator**   0:20
How are you doing this morning?
 
**Participant**   0:21
Fine, fine.
Thank you.
 
**Facilitator**   0:23
Good, good.
All right, I think I have somebody on my team that might be joining to observe and take notes, but in the.
Like with just time and everything on our side with a short meeting, we'll go ahead and jump in, OK?
 
**Participant**   0:41
OK.
 
**Facilitator**   0:43
All right. Well, first of all, thank you for making time to chat with me today.
My name's Alyssa and I work on the VI notify experience team.
And are you familiar with working in VA notify?
Have you poked around in there?
 
**Participant**   0:59
I think, yeah, we recently came on board on the VA notify because of the our our product vendor recently added a new functionality which was related to e-mail sending an e-mail or SMS messages or the QR code. Those type of the things.
So we were looking some solution around different vendors and we notifies the.
In in House kind of like a solution to the VA, so we were.
Looking outside of the VA and we were looking from Microsoft Platform services, including the commercial side. So many thing but anyway.
Finally, we ended up with the VA and notify and it was very streamlined in a sense that because it's already in in the same kind of like a environment for us, because we are also in the IVA environment and V notify was running inside it, right, so it.
Was quite, quite a pleasant experience and it was smoothly integrated with the VN notify services.
 
**Facilitator**   2:02
Wonderful. Well, I'm glad that you've got a little experience in there and you have a bit of an idea of how things work and that it's been a good experience so far today.
I we're testing a new self-service feature.
 
**Participant**   2:18
Hmm.
 
**Facilitator**   2:19
To let teams manage their own API keys directly in the portal.
 
**Participant**   2:21
OK.
OK.
 
**Facilitator**   2:24
So and just a heads up and I'm I think that your your teammate might have reached out to you about this already?
The VA has the VA notify has two things going on right now related to API keys.
 
**Participant**   2:36
Mm-hmm.
 
**Facilitator**   2:37
So the UX team on the experience side is working on this self-service API key management feature and then the platform side of VA notify is just reaching out to teams to get their keys rotated for security purposes.
 
**Participant**   2:41
That's right.
 
**Facilitator**   2:52
So yeah, OK.
 
**Participant**   2:52
Right. That's right.
Yeah. And I think it's a very interesting that you are saying about rotation of the password or key or API keys, right?
We had a similar scenario with Active Directory service accounts, right?
So for our application we have some service accounts and in in in in managing the service account user ID and password was part of the Active Directory team responsibility and they had like a 1500 different V application.
To manage those service account. So they fed up on those management request where they have to reset the password and all those things. But from the scenario they had to offload the work of managing the API or keys they were using Cyber Ark tool, right, Cyber Ark is.
Another tool where only the people who has access to it can log in into the account and then they can rotate the user ID or pass not user ID but the passwords or there is?
Feature over there, where the system will automatically, uh reset the password every three months based on the rotation period and those type of the things. So automation is the second part. OK, so having a new key is one thing where you could just have to get the new.
API key.
Sure, no problem.
Go get there and reset the key.
You will get a new key.
That's the one thing I think.
What scared me when you were bringing up to this attention about the rotation word? The word that you say rotation.
The currently we are using the API keys in order to communicate with the V system, right?
So sure, we provide this I keys to our vendor vendor use that keys in in their product configuration.
Product has a hard coded configuration, not hard coded. I will say hard coded.
Usually refer to the code code side of it, right?
Is a configuration value which they kept into the configuration files and every is running 24 hours application, so it's always have that key in hand communicate with the VA. The word that you we were in the emails when we saw the rotation. If it's resetting the key.
Say for instance, the validity of API key is 3 months only, right?
And it will automatically reset behind the scene the moment that it will reset the product will no longer use the old key and it's mean the product somebody has to pay attention to it in order to get the new key.
In order to update the key. So the only way that I can see if it's automatic has a rotation on it, then it's mean we should have some automated tool in order to get the new API keys in order to keep working all the time anyway, so that.
A side topic to it, but having as you are saying that you're working on the portal where whoever is the customer can go and inside the portal and if need to reset some keys or get the new keys or something they can manage through the portal.
That's perfect.
Vendor can go or we have access to the VIA notified dashboards and if the API key is also part of it. Right now we are using only the templates where we have a service ID and and all those customer related information to use that one and we create.
 
**Facilitator**   5:48
OK.
 
**Participant**   6:03
Some SMS sample text messages based on our template design. Those type of thing I think you're extending that platform.
Or a dashboard to add the API or API key.
Management as well, right?
 
**Facilitator**   6:17
Yes, that's correct.
 
**Participant**   6:18
OK.
 
**Facilitator**   6:20
And if it puts your mind at ease a bit, there's nothing automatic.
It all has to be manually done.
 
**Participant**   6:27
OK, OK.
 
**Facilitator**   6:29
So so there is that.
 
**Participant**   6:32
Perfect.
 
**Facilitator**   6:33
Yeah, no.
But that's really helpful context.
And yeah, I'm, I'm glad that maybe we've mitigated that that concern or issue with the fact that it's not just gonna automatically happen and and then you guys are left in the lurch.
You know, so.
 
**Participant**   6:50
Yeah, for the service accounts, the expiry for the past user service account and password is three years.
So we were very happy that we do not have to automate on a monthly basis or per 15 days or two weeks, three years, OK.
No problem. We will come again.
And then get that new password and then update our configuration frequency's also a key for having an automate process.
For for the updates, right?
So good. OK, let's jump in into the real UX related question then.
 
**Facilitator**   7:16
OK.
So.
Yes. Well, if you had to rotate the VA notify API key for your service tomorrow, where would you first look for help on how to do that?
 
**Participant**   7:22
Mm-hmm.
Mm-hmm. Mm-hmm. Mm-hmm. Mm-h.
It's it's kind of like a, let's call it is. Basically we have a point of contact for the team. Sania and other team members, our first step will be say for instance, our vendor is complaining.
 
**Facilitator**   7:35
OK.
 
**Participant**   7:40
Oh, my system is not talking to the V notify because we are getting an exception or error when we are using a key and error is API key is failed right?
So anyway, if that type of the reports because it's a vendor caught's product which is commercial off the shelf product within the VA.
So when they report it to us that oh.
 
**Facilitator**   7:57
Mm-hmm.
 
**Participant**   7:59
System is failing because of invalid key or something. OK fine, no problem because we are part of the VA in as a as a team project management side of it, right?
So we escalate to the basically reach out to the point of contact from the end.
We ask about this thing that OK?
Do you have a snow system?
And we came on board on the venode. If I do, you have a snow group where we can create a SAV 1 ticket or SAV 2 ticket or something like that.
I think at the time they were saying that they are not as a group on the snow system instead is like we will have to reach out to Sania or some other dev team in order to get the support for it.
So that was the responsibility.
Not sure if it's if it's still valid, maybe they already have some new group into the snow system, but we do not use a ticketing system or snow system in order to get the help from the group.
 
**Facilitator**   8:51
OK.
So you would use your point of contact basically OK.
 
**Participant**   8:54
Yep.
 
**Facilitator**   8:56
Alright.
And if or when your API key is expected to be expiring, would you be like would?
Is there a way that you'd want to be made aware that it needs to be rotated and it's about to expire?
 
**Participant**   9:12
OK.
So basically we do not decide based on what we wanted, right?
So in a sense.
And what I wish it right, this is not working in a way that what my wish is if you ask me something.
I can just express my feelings right this might want and this what? It's not based on that one is basically rely on the VA policies.
 
**Facilitator**   9:25
Yeah.
 
**Participant**   9:29
So anything that we do is has to support from the VA policy perspective, if the VA policy is that every password need to be rotated on a weekly basis or something, that's a policy decision on it, right? We follow that thing.
 
**Facilitator**   9:41
Yes.
 
**Participant**   9:43
So if we are asking our vendor to go and rotate the key every week, he is going to ask us a question which Virginia policy that.
Is backing off on this particular request and based on this I don't think so.
We have a policy that we like or, first of all, not even policy. Let's about.
Our first when we came on board when we implemented this thing, we never had a discussion about this API key is gonna expire.
First of all, that's an important question because we never plan for this activity. OK, So what?
We thought that, oh, is a implementation detail or configuration, such as suppose you are putting some system into some cloud environment.
You, once you have that server or service available, you just implement it right?
You forget about it right after.
But this particular like API keys or service keys when we came on board we never had a discussion about, OK.
 
**Facilitator**   10:39
Mm-hmm.
 
**Participant**   10:43
Should we follow some best practices or policy that OK the vendor should not use this key after three months of usage or some to avoid some misuse or abuse or security issues?
So we never had a discussion about Project team ever in general.
Were in the impression that this is kind of never expire, kind of like a Pickles.
It's it's kind of like a never expire.
So that was the first impressions. So. So we did never ask this question that how we get the new keys every three months or a year or six months or something like that. And for expiry, things such as service principle accounts, service accounts, certificates.
 
**Facilitator**   11:12
OK.
 
**Participant**   11:28
Our project team manage repository where we keep all those things where when it's going to be expired with the expiry date.
It because we have to keep eye on before it happen.
We have to create a work against it, right? OK.
Who's gonna do this and that in order to complete the task?
So this particular service via notify Project team has no clue that need this key will ever be going to be expired, which is good or bad. I do not know if you ask me about the best practices. Yes we should rotate this thing as a best practices PERS.
 
**Facilitator**   12:03
Mm-hmm.
Yeah.
So.
Having said all of that.
If if VHA, Imed that specific service within VA, notify.
If they're like, have a key that needs to be rotated because it's gonna expire, is there a way that you would expect to be alerted from VA notify?
That that would be coming up or would that just be something that you would add to your list that you already have that you mentioned?
 
**Participant**   12:30
There, there, there.
 
**Facilitator**   12:35
And your repository.
 
**Participant**   12:35
So The thing is that The thing is that which one is much better, like doing eyeballing versus the notification system, right?
So if suppose and we have so many stakeholders here, keep in mind this way via notify is a service 1 project management like office which is part of different like me, architect and project managers and others right as a supporting to the sustaining that product that's 1/2.
 
**Facilitator**   12:59
Mm-hmm.
 
**Participant**   13:02
2nd stakeholder the third thing is.
Yes, the vendor itself, right, so the the is in this particular game if suppose we run into a production issue, oh SMS has start stopped working then the game.
 
**Facilitator**   13:06
Yeah.
 
**Participant**   13:17
Oh, somebody will analyze what's happening.
OK.
Oh, his error is because of the key is expired.
Then somebody will blame the game.
That OK.
Why we didn't have any alert for it or why do we not maintain it OK?
Instead of avoiding any human error, I think the best rule of the use of the dashboard, some sort of notification.
In advance.
In advance so.
 
**Facilitator**   13:42
And and what kind of notification would be best?
 
**Participant**   13:44
Or just some e-mail e-mail. Why that e-mail?
 
**Facilitator**   13:46
An e-mail.
Be good. OK. Perfect.
 
**Participant**   13:47
Yep, the reason why I'm saying the reason why I'm saying that if you put some name into it.
Suppose you put my name and tomorrow I move to another project.
I left the VA or something like that.
Name is not good, right?
So the way that Azure our not only VA notify, we also have a a VR on the Microsoft Azure cloud platform.
So luckily you are asking me this thing and.
 
**Facilitator**   14:07
OK.
 
**Participant**   14:10
I was working on the Ato authorized to operate for this this product and I had to provide an evidence that how we communicate with the VAC and let me show you an image that we use as evidence that the VAC basically provided an communication to us about any.
Any like things? Let me put it on the chat.
So then you will enjoy that thing too.
So V AC communication. How about this?
 
**Facilitator**   14:34
OK.
 
**Participant**   14:39
No, I need. Too bad. OK, let me add. OK, attach a file from this device and I will go.
VSC.
Where is the VSC?
Oh yeah, VSC.
This one. This is a communication message, an e-mail.
There's that goes to a group of the users.
No, I haven't sent it to you yet, sorry.
 
**Facilitator**   15:07
Oh, that's OK.
I was looking for it.
 
**Participant**   15:08
Yeah, sorry.
 
**Facilitator**   15:09
There we go.
 
**Participant**   15:10
Yeah, this is.
 
**Facilitator**   15:11
No, you're all right.
 
**Participant**   15:12
Yeah, this is an example communication notice where the Azure service principal expiration notice.
So look at the how many days of advance the system is telling us.
 
**Facilitator**   15:18
OK.
Mm-hmm.
 
**Participant**   15:24
Cert will expire in next 45 days or less.
 
**Facilitator**   15:28
Got it.
 
**Participant**   15:29
Yeah, so is giving a chance for us to pay attention if this service principal need to either discard first of all, maybe prod. It's not use anymore, right?
It's still in the system, but it's not used anymore, so vendor will review. OK, this service principle. Abcd. Oh, we are using OK.
Sure, if you're using reset that password credential, you can see credential type is a password credential for this one. So this type of the thing and.
Now the problem with this particular VSC or Azure platform or Microsoft platform.
Is that the problem?
Is that they cannot send an e-mail notification to group, they have to use the like a e-mail IDs specific e-mail IDs.
So that's one of the issue with the Microsoft Azure platform and what they have decided.
 
**Facilitator**   16:14
Yeah.
 
**Participant**   16:18
Whoever the primary contact, you can see different name like Elsbeth, Andrea, myself, Steven Mars and those are the name.
But what is the best way to?
Because we also on the snow system, we we have our e-mail group ID, the benefit of the e-mail group ID is that if I'm away or somebody else is away then somebody will get it because there is a route.
 
**Facilitator**   16:37
Mm.
OK.
 
**Participant**   16:44
There are more people in that group than only few names on it, right?
So those those thing is important. So e-mail communication will work best.
 
**Facilitator**   16:49
Yeah.
 
**Participant**   16:54
We keep eye on all the notification that we receive or business any communication that we receive.
We work our act on those one very quickly because that's has to be so best to do that one. So otherwise if otherwise what is gonna happen? If suppose you will not do the e-mail notification which I showed you Azure or Microsoft e-mail notification so then it will.
 
**Facilitator**   17:07
OK.
 
**Participant**   17:16
Be a group communication or or like a Via notified team is sending a communication to us or like in journal. Let me give you another example for that one.
So that can also work.
I'm not dictating the rules.
That you should implement an e-mail IDs like precisely to the group no. But in case if suppose your team via notify team right decided to have a group project level of via notify level communication to across all all all customers then this is an example for it so.
I'm just attaching to this one, so this will this can work too.
See. See this one. I'm just giving you an example of so. So there is a consider like a step finger as a via notify person.
 
**Facilitator**   17:57
OK. Yeah.
 
**Participant**   18:03
Sunny or somebody right is sending an e-mail to iMac consent web application group. If you see that's a bold.
In e-mail in the e-mail, if you see two like you can see several name and there is a group name for us.
 
**Facilitator**   18:14
Yes.
 
**Participant**   18:17
I am at consent web application.
 
**Facilitator**   18:18
OK.
 
**Participant**   18:20
This is our group.
This mean at least 10 to 15 people behind the scene.
 
**Facilitator**   18:26
Got it. OK.
 
**Participant**   18:27
So if if not automation by the platform, that's fine, but from the group this type of the e-mail will work because immediately we say OK, they are making some changes.
They are impacting this and that and we act accordingly.
And the other thing is that suppose you send a notification, what will happen next, right?
The work involved why you need to be in advance, right?
Why you have to send in 1015 or 30 or 40 days in advance.
Because we are not VA development house.
We are not coding or development house here like we are not software house here, right?
 
**Facilitator**   19:05
Yes, right.
 
**Participant**   19:05
We are using a vendor product, right?
So if suppose you are asking to change new API key, what does it mean?
It's mean we will have to reach out to the vendor, engage their resources, put that activity into their change management plan or development plan and based on that availability and time.
Market kind of like a situation where they have to bring that thing in to change, then they will schedule that activity and when we comes to scheduling an activity such as changing an API key in production, say for instance, right, we will have to work in our C.
System which is change a request system and that will take take mean cab review where they will review the change and they will accept that our change request and then we can make the activity on the night so.
It's not something that you will send an e-mail notification 15 minutes before it expire.
 
**Facilitator**   20:01
Sure.
 
**Participant**   20:01
Yes, yes.
 
**Facilitator**   20:05
Mm-hmm.
 
**Participant**   20:05
Repeat such a lengthy process, although it's just an API key. It's just like a 40 digit or something like that, but the work involved in order to make those 40 character change is extensive in Virginia.
 
**Facilitator**   20:20
Yes, it is for sure.
 
**Participant**   20:21
So so yeah.
 
**Facilitator**   20:26
Well, I'm gonna go ahead and share my screen and show you and how you walk through.
So I I can click for you.
I don't have permission to like, give you remote control access unfortunately, but that would be cool.
 
**Participant**   20:39
No problem.
That no problem.
No. You can share and then based on the question then we will go.
 
**Facilitator**   20:44
Alright.
Yeah.
So let's say that you've received an e-mail from VA notify.
 
**Participant**   20:53
Hmm.
Mm-hmm.
 
**Facilitator**   20:56
With the appropriate grace period and that one of your API keys is about to expire and you need to rotate it. So you need to go in and create a new one, update your integrations and then come back and disable the old key.
 
**Participant**   20:59
Mm-hmm.
Right.
Yeah.
Right.
 
**Facilitator**   21:11
So.
Nva notify, let's say you've logged in and you're in your the IMED consent.
Service. Where would you go from here to generate a new key?
 
**Participant**   21:27
From this particular screen.
 
**Facilitator**   21:28
Mm-hmm.
 
**Participant**   21:31
I will go into the second box which is the API key management, right?
 
**Facilitator**   21:35
And when I click on that, what would you expect to see there?
 
**Participant**   21:38
Environment because the API key.
Now, how do I? So the first question as a customer will come to my mind because the key is based on the environments, right? First of all, in this particular screen I have no clue that I'm working for the production API key or pre prod or dev box.
Or vendor API key even, right?
So there's a vendor API keys too.
So as a user I because I'm just starting from home page to VHA imet consent.
That's a perfect nothing wrong.
And the second step, which mean I'm going to.
Work start working on API management.
I will click this one and my next exectation or I'm expecting is that it should at least give me a clue that the API key that I'm about to manage is belongs to which environment.
 
**Facilitator**   22:23
OK.
 
**Participant**   22:24
Right. So if I will click this, I'm expecting it will say pre prod or prod or vendor specific something like that.
 
**Facilitator**   22:30
All right, go ahead and click and see.
 
**Participant**   22:33
Yep.
 
**Facilitator**   22:36
Let me know when you want me to scroll.
 
**Participant**   22:36
Here I am.
OK.
Create, rename, revoke and track API keys for the service. OK key recently there.
View all active keys and the last inactive keys OK, generate new queue. My Scroll down before I will I've I will press this generate API key honestly.
Yes, now I can see production in staging. That's perfect.
That's that's exactly I was expecting this, this particular scheme, the reason why before I will I will press the generate API key I have to make sure that I'm generating to the right environment because if I'm if I will touch production key, what is gonna happen it will.
 
**Facilitator**   23:04
OK.
 
**Participant**   23:17
Generate a new one.
It will deactivate the old API key and that's mean the people will be dead in the water, right?
At the time when they were using the old API key.
So I this is good.
The only challenge is that from this screen.
When I'm pressing the generate API key button, does it mean that it's going to generate for right hand side which is project 1V2 staging? Or is it going to generate for project 1V2 production?
All I have, I have a difficulty to map this function generate API key function to.
If it's suppose this button under each box that is very clear to me as a user.
 
**Facilitator**   24:02
OK.
 
**Participant**   24:03
Right. You understand what my pain is here?
 
**Facilitator**   24:05
I do.
I do.
 
**Participant**   24:07
Yeah. So.
 
**Facilitator**   24:07
I wonder if maybe walking through the flow could alleviate it, but I I do.
 
**Participant**   24:11
Sure, sure.
 
**Facilitator**   24:12
I do appreciate and understand that, like just out of the gate first time experience that you know you're saying it's not exactly clear if you push that you you're expecting it to create one that maps directly to.
Either staging or production.
 
**Participant**   24:32
Right. That's right.
Yeah, yeah. Because if you see the button under the button, the entire umbrella is there like a production and the staging, right?
 
**Facilitator**   24:33
OK.
Mm-hmm.
 
**Participant**   24:41
So I will be hesitate to press this button to be honest with you to be. Although I'm having a lot of experience, I'm I'm not scared of, but because I'm very cautious about it. I will not press it.
 
**Facilitator**   24:41
Mm-hmm.
OK.
OK. All right.
 
**Participant**   24:53
Because of the sensitivity of the information, right?
Because I don't want to play around with the production at all. When you are doing a production, it's mean that you are be very careful for it.
That's a sensitivity of the environment, right?
 
**Facilitator**   25:04
Mm-hmm.
 
**Participant**   25:06
So if it's if it's, I'm not sure, because maybe your screen.
I do not know if you press the button, what is going to happen next is we're going to ask about staging a production or something.
I do not know.
But I'm talking about the current screenshot that you're showing me, and what question come to my mind is that I will be hesitate to press the generate API key.
 
**Facilitator**   25:20
Yeah.
Is there anywhere that you would go to get information?
 
**Participant**   25:26
That's my fear.
 
**Facilitator**   25:31
From from here.
 
**Participant**   25:35
OK so.
So help is relevant for me now, OK.
You are right.
There is a help available on the C How how to manage the V keys in the VA notify that's a help if somebody's like a somebody who's basically not sure about what they can go and get the help from here, right.
How to manage the keys in the VA notified?
That's another clue that can help the user, right?
 
**Facilitator**   25:59
Is that something that you would do?
 
**Participant**   26:02
Yes, if I'm instead of. If suppose somebody not available as a very handy in a sense that ask the question or something. Yes, I will go with the of course going to see the the things first, but instead of relying on the help why we are not making.
Something more obvious.
That's my my my feedback to you.
I understand what you mean, I think.
 
**Facilitator**   26:20
Yeah, yeah.
I think does it help that when you work in VA notify that you only?
All staging and production activities are done in a single environment.
 
**Participant**   26:35
Is this is not the way like OK, so we have.
 
**Facilitator**   26:38
Well, no, that's what I'm saying is when you log into VA notify you're logging into the staging environment, but you don't need to ever log into production because all things are managed within one single environment.
 
**Participant**   26:41
Mm-hmm.
Mm-hmm.
 
**Facilitator**   26:51
So you can push to production, you can view your stuff that's in production, but all in one like one front door basically so.
 
**Participant**   26:53
Mm-hmm.
Mm-hmm. Mm-hmm.
Right. So is is a is a deployment workflow, right?
So you're talking about first you test in the staging and then you validate those thing and then you push and publish to the production environment.
 
**Facilitator**   27:02
Mm-hmm.
Yes.
 
**Participant**   27:09
My understanding about the keys is I'm talking about the template site.
Yes, you are absolutely right.
That's a deployment workflow, right?
So you're testing the prod and then you go? Is it wise applicable to the same thing to key API keys?
 
**Facilitator**   27:16
Yeah.
 
**Participant**   27:25
Why the API keys work in the same fashion as the deployment of the presentation of the templates?
Same like that.
 
**Facilitator**   27:32
OK.
 
**Participant**   27:32
Because in generally talk about API keys.
You're talking about IT, folks, right?
You're talking about, not the business users, right?
So these are not for the business users you're talking about?
The your audience, is IT people, right?
So the people who are basically working in the technical side of it, right?
So we are not talking about that for their perspective.
 
**Facilitator**   27:50
Well, I I will say that the users who are going to be able to do this now, I know that believe you and Jackie, let me look and just make sure I'm saying the right thing here.
 
**Participant**   27:58
Mm-h.
Mm-h.
Mm-hmm.
 
**Facilitator**   28:04
Yeah. You and Jackie are both listed as technical contacts, and as far as the roles go on this service.
 
**Participant**   28:07
That's right.
Mm.
 
**Facilitator**   28:13
Only business contacts and technical contacts will be able to manage API keys. So yes. So yes and no.
 
**Participant**   28:15
Mm-hmm.
Right.
 
**Facilitator**   28:22
It is like the Business Contact will also have that ability.
 
**Participant**   28:23
Yeah. So there is a.
 
**Facilitator**   28:29
So yeah, does that help a little?
 
**Participant**   28:30
I understand.
No, no, you're right.
So if the business users we all are also part of this particular process, such as business owner or like any other business, not that nontechnical roles, then yes, you're right, absolutely.
 
**Facilitator**   28:37
Mm-hmm.
 
**Participant**   28:46
But I never seen a workflow for the key management where it goes through from staging to production. To be honest with you like I always have like a keys standalone keys like it's not going through with the workflow where it goes from.
 
**Facilitator**   28:54
OK.
 
**Participant**   29:00
Prod to prod but the nothing wrong with it. I'm not saying that this is a wrong. I'm not saying that, but I'm saying I'm saying that.
 
**Facilitator**   29:01
No.
Yeah.
 
**Participant**   29:07
I never seen this before.
 
**Facilitator**   29:09
OK.
 
**Participant**   29:09
That's a different thing, right?
So OK, if you want to use as a content API key as a content to publish from staging to prod, then yes, sure. No problem. You start with the staging, then you promote into the production. OK, fine this this screen only my feedback is that if it says.
Generate API key and then if I if I I'm sure that it's gonna ask you some more question about it then I'm happy with that.
 
**Facilitator**   29:35
Mm-hmm.
 
**Participant**   29:36
Otherwise, if you ask my first reaction to this page, I have a difficulty difficulty to press this button.
 
**Facilitator**   29:39
Yeah. Make you nervous?
OK.
 
**Participant**   29:45
Make sense?
 
**Facilitator**   29:46
Yep, it does, absolutely for sure.
Well, let's go ahead and and press it.
You said you expect or no.
 
**Participant**   29:52
Uh oh, can I ask you one question? No, no.
 
**Facilitator**   29:54
Absolutely, yeah.
 
**Participant**   29:56
OK, OK. So workflow perspective as a user to be honest, I just want to give you the honest statement on this one.
 
**Facilitator**   30:03
Yeah.
 
**Participant**   30:03
There is a red link or button I don't want to call that button, but because the blue is looks like to me a button, but look at the each expiring and active boxes revoke. So revoke refer to in a different type of the workflow. To be honest with.
Right. Somebody like let's say we don't.
 
**Facilitator**   30:21
Yeah.
 
**Participant**   30:24
We want to shut down our SMS service.
Say for instance, we can revoke API keys, right?
 
**Facilitator**   30:30
Yeah.
 
**Participant**   30:30
So we can stop the services right away.
That's a one way of workflow is a link.
What you expect that somebody will use this workflow when somebody is managing this one? Why?
What is?
What is the workflow for the revoke from from system perspective?
 
**Facilitator**   30:51
So normally I would tell you to tell me what you expect, but you know.
 
**Participant**   30:54
OK. Yeah.
 
**Facilitator**   30:58
In this situation, the idea is that you create a new key. You then go through and add it to all of your integrations, and then once everything has been tested and you come back in and revoke or disable the old.
 
**Participant**   31:03
Mm-hmm.
Mm-hmm.
Mm-hmm.
Yeah. OK.
So because of the reason why I ask this question, we never talk about the revoke. When we were talking to the VA notify team, right?
So we always have the OK generate a new one, generate a new one. In this context, generate a new one, mean it's going implicitly going to be revoked first, and creating a new one.
This particular revoke one is basically you're giving me another option.
On the table as an as a flexibility.
 
**Facilitator**   31:36
Yeah.
 
**Participant**   31:39
Let's call it this way, right?
But it was never discussed before.
That's why I asked the question that why you have this revoke? Because as a team as a customer, when we were talking to via notify team when we talking OK we need some API keys, vendor keys, service provider KEY and this and that. So our all the time.
 
**Facilitator**   31:50
Mm-hmm.
 
**Participant**   31:58
Was we need a valid key. OK, fine, no problem.
Now we talk about generate a new key. That's fine too.
Revoke refer to from my my feedback on this one.
Revoke mean if you we want to shut down the service right away.
We can revoke the key right away, so it's.
 
**Facilitator**   32:12
I I think clicking that wood would shut it down right away.
 
**Participant**   32:16
Right. That's right.
So OK, fine. So and this is very clear about I love this icon to be honest with you, that is basically staging has its own revoke production has its own revoke very clear and precise action on this screen.
 
**Facilitator**   32:17
Yep.
Mm-hmm.
 
**Participant**   32:33
So if I I have to revoke my staging, I can come immediately and press this this one to revoke the staging API. Perfect.
But you were explaining me the process for generating an API.
Does it mean that I have to revoke first in order to generate new one or is or going to be automatically?
 
**Facilitator**   32:50
There's no automatic and the idea is.
 
**Participant**   32:52
OK.
 
**Facilitator**   32:57
So like in the help text here, it does outline, but also like there's.
The idea is you generate a new key, you take the new key and you add it to your integrations.
 
**Participant**   33:06
Mm-hmm.
 
**Facilitator**   33:10
Test it and make sure that it's working first and then once everything is good and working then you come back and revoke the old one.
 
**Participant**   33:10
Mm-hmm.
Oh, that's interesting. OK.
So it's mean generating an API key does not invalidating the old one.
So if I will generate for staging, I'm not talking about the production, let's say staging, right?
So I have a staging API key a right?
So now I come to this place to generate API key B.
So it still is valid, right?
 
**Facilitator**   33:39
Mm-hmm.
 
**Participant**   33:41
It stays valid, right?
 
**Facilitator**   33:41
Yes.
Yeah.
 
**Participant**   33:42
And then I go in my configuration, go into my product configuration, change it to B.
We will also work, so if I want to not to use the B if I want to go back to a it will also work with the A.
Because the both keys are valid, right?
 
**Facilitator**   33:54
Correct.
 
**Participant**   33:56
OK, fine. When I'm happy with my API key B very happy with that one, then I may start using in my staging.
 
**Facilitator**   33:56
Yes.
 
**Participant**   34:04
Perfect. Now next step is to.
Get rid of the old one.
 
**Facilitator**   34:10
Yeah.
 
**Participant**   34:11
Revoke, revoke a. OK, fine. Revoke a without revoking a. Is that possible from the flow perspective as a customer?
 
**Facilitator**   34:12
Yep.
 
**Participant**   34:22
I'm asking this question.
That the new key that I have it be, which is AP IBAKIAPI key BI can publish it to production.
 
**Facilitator**   34:32
Mm-hmm.
 
**Participant**   34:33
Without revoking a still I have two API key valid in the staging environment.
 
**Facilitator**   34:39
What would you expect?
 
**Participant**   34:41
I was expecting that API key should be only one should be otherwise you will not be have a track to different API key that which how many API keys are valid in the market.
So that will be a bizarre experience for the customer if multiple API keys are required, can be exist coexist together.
My expectation it should be one.
 
**Facilitator**   35:00
I think I think the idea is that it should be one, but.
 
**Participant**   35:03
Mm-hmm.
Mm-hmm.
 
**Facilitator**   35:06
In order to prevent any like integration errors because it's not happening automatically, that would require a lot of like.
 
**Participant**   35:10
Mm-hmm.
Safeguards.
 
**Facilitator**   35:17
Yes. So basically it's it's making sure that like the due diligence has been done by testing and making sure that everything has been integrated properly and tested. And then once that has been like.
 
**Participant**   35:18
It's right to admit you.
Mm.
Mm-hmm. Mm-hmm.
 
**Facilitator**   35:29
Like those boxes have been checked.
 
**Participant**   35:31
Mm-hmm.
 
**Facilitator**   35:32
Then you can shut down the old one.
 
**Participant**   35:34
Old one, OK, so.
 
**Facilitator**   35:35
Before yeah.
So then there's no interruption in notifications.
 
**Participant**   35:39
Perfect. Nothing wrong with it.
OK.
Let me ask you one question, if the if. If I have two staging API keys is your screen is going to show another box for that key?
 
**Facilitator**   35:46
Mm-hmm.
What do you expect?
 
**Participant**   35:52
I'm expecting either like it should rip because nobody's gonna mess around to create 500 keys, right?
So it has to be limited, right?
So it's obvious.
It's like a one or two or three Max winafe or different platform which offer you all the certs they create another. I will say one box should be one API key. Refer to one unique API key that will be easy for me to identify in this case like.
A Project IV 2 staging.
ID is.
Tak tag blah blah blah blah blah.
Suppose if I have a two second API key like A which I generated right?
 
**Facilitator**   36:24
Yeah.
 
**Participant**   36:29
Which is valid.
So it should show another box for me for that key so that I can clearly if I want to revoke the old key then I can press this button.
 
**Facilitator**   36:39
Yep, OK.
Yeah, I think that makes total sense.
Yeah.
All right. Should we go ahead and click the button or all right.
 
**Participant**   36:51
Please.
 
**Facilitator**   36:55
Yeah.
 
**Participant**   36:55
OK.
This is the great question that I was referring to, right?
Which environment is this kiski for right perfect staging.
 
**Facilitator**   36:59
Mm-hmm.
 
**Participant**   37:02
That's obvious.
So what is your question about this one?
That is the confusion around this page or something.
 
**Facilitator**   37:07
Nope, I'm just.
 
**Participant**   37:08
No, very obvious, very obvious screen. I am very happy because that's exactly I was referring to. Perfect.
 
**Facilitator**   37:12
OK.
Yes, for sure.
 
**Participant**   37:16
Yes.
 
**Facilitator**   37:17
But but just that nervousness around clicking it to begin with.
 
**Participant**   37:20
Mm-hmm.
 
**Facilitator**   37:21
So maybe it's just having a familiarity.
Or maybe that does need to be more clear there.
There's, you know, some questions, right.
 
**Participant**   37:28
So.
Can I suggest for labeling like a generate API key, generate new API key because you already have an API key, so I will say through give more confidence to the user or customers I will be using generate new API key because new the the moment the brain will.
 
**Facilitator**   37:32
Yeah.
New API.
 
**Participant**   37:45
Read the new I will understand that I'm having a new API key. I that's right, yeah.
 
**Facilitator**   37:49
Adding a new one in.
OK.
I love that. That's great.
OK. That's helpful.
So this is pretty straightforward. Would you feel you'd go ahead and continue from here?
OK.
 
**Participant**   38:07
OK.
Or do you want to name this key?
Yeah, sure.
No problem.
API Nick like it's kind of like a nickname, right?
So API key name. Yeah. Say for instance. Yeah, I will put something like yes, exactly. Or Taylor dev testing or something like that.
 
**Facilitator**   38:15
Yep, I just made one up, yeah.
 
**Participant**   38:23
Something, yeah.
 
**Facilitator**   38:25
And does this make sense?
Why this would be added on there OK.
 
**Participant**   38:27
Oh yeah.
Oh yeah.
I will even not go on the suffix level.
I will go on the prefix level.
You know why?
Because when the technical people see, they can easily sort because of the prefix, not the suffix.
Suffix is end right?
 
**Facilitator**   38:43
Hmm.
 
**Participant**   38:43
So you if you try to sort it then it's not sort accordingly because it does not sort the last character first. I will suggest this staging as a prefix, not the suffix.
 
**Facilitator**   38:44
Yeah.
And when you're sorting it, are you talking about on your end?
 
**Participant**   38:56
Hmm.
 
**Facilitator**   38:58
Like where you have.
 
**Participant**   38:59
Anywhere, yeah.
And let's say I exported all the information to excel sheet and my project manager is basically keeping eye on those API keys.
 
**Facilitator**   39:03
Yeah.
 
**Participant**   39:07
Say for instance, right?
 
**Facilitator**   39:07
Yeah.
 
**Participant**   39:08
So when they put as a name, OK, we created an staging API key on this day and it's going to appear expiring but.
 
**Facilitator**   39:09
Yeah.
 
**Participant**   39:15
So and they also have blah blah blah. So anywhere it helps.
It's very simple thing.
 
**Facilitator**   39:20
OK.
 
**Participant**   39:20
As a rule.
 
**Facilitator**   39:21
Yeah, got it. Yeah.
That's really good.
All right, so from here, would you feel confident going forward?
 
**Participant**   39:31
Name your API key perfect.
 
**Facilitator**   39:33
OK.
 
**Participant**   39:34
Very nice.
Yeah. Is it making completely no ambiguity around it, right?
So I know that I'm creating a name for it. Yep.
 
**Facilitator**   39:41
OK.
What would you do from here?
 
**Participant**   39:46
OK, API key details, environment and APN.
Yeah. Expand, because I know that I selected for a staging. I'm expecting that it should have an environment staging.
And here I provide my name perfect.
Nothing wrong with it.
Yeah, it's still like, hold on.
So if I will let me ask you something, if I'm going to edit from here because I oh I I sorry. I instead of staging I had to create the production.
So if I will go and edit this environment first key.
Does it mean that this prefix or suffix will also change?
Oh, thank you.
 
**Facilitator**   40:15
Yes.
 
**Participant**   40:18
Otherwise, I will report a bug.
 
**Facilitator**   40:20
Yes, for sure.
 
**Participant**   40:23
OK.
That's makes sense. Yeah. Perfect.
 
**Facilitator**   40:24
Yes.
 
**Participant**   40:25
Yeah, no confusion around.
 
**Facilitator**   40:27
OK.
 
**Participant**   40:28
How about this one instead of this, look at the labeling around it.
 
**Facilitator**   40:29
And.
 
**Participant**   40:32
Generate APK still on the same location.
This is not generate.
It's like reviewing the API key. This is a review before you press the button.
I believe, right?
This is usually when when it you reach to a point where provide all the imports and you give an opportunity to make sure you submit or generate.
These are the information is going to be used.
You review that thing.
So I think this should be API key details or something review.
Oh, I think you have a word.
Review your API details perfect which is #3 perfect.
 
**Facilitator**   41:05
OK.
All right, continue.
 
**Participant**   41:10
Yep. Perfect.
 
**Facilitator**   41:12
All right.
 
**Participant**   41:13
Yep.
And copy your API key blah blah blah.
This is the only time you will be able to view your full API key.
This is the only time hmm is not going to store anywhere.
 
**Facilitator**   41:27
Nope.
 
**Participant**   41:28
So you you once you create fly on the fly and then you're done.
 
**Facilitator**   41:32
Yep.
 
**Participant**   41:34
OK.
And you can. OK, so OK.
Hold on, OK?
Be sure to copy and securely store it in. OK, perfect.
Nothing wrong with it, because that's a standard process for API keys.
Treat your like a password.
Do not share or store in a public court about the trees. Perfect.
If you lose this key, you will need to generate a new one and update your integration.
I think this makes sense.
 
**Facilitator**   42:02
OK.
 
**Participant**   42:03
So.
OK.
So let me ask you some questions.
This is 40 digit code, right?
So copy to the clipboard and then we will store OK to API generating API key and I think this is it.
Yeah, that's pretty much a standard way for this.
So OK, go back to the API key mean I'm expecting this new API key which I created as a new name, right?
Will be listed on that one.
 
**Facilitator**   42:34
Yes.
 
**Participant**   42:35
OK. And I will not have any reference in my if I've OK, how about this?
Let me give you any feedback because this place you are just copying through the clipboard, it will copy the 40 digit code into the clipboard OK.
 
**Facilitator**   42:48
Mm-hmm.
 
**Participant**   42:49
OK. And if you go to the key management side of it, can you go back to the API key management page, the first screen of that scroll, the 1st?
Yeah. Here. No. Yeah, this one.
So this is this expiring where you say project 1V2 staging, right?
Right and ID is that here there will be no API key reference to it. Instead is the. It will be a name to it.
Suppose if I'm a developer.
Consider as a multi tier multi user scenario like where there's so many development work is happening right?
Multiple groups. So my buddy created a key and he gave it ABCD as a as a name and I created myself XYZ as a key because I was testing my environment and I just needed staging API key for myself so that I will keep track of all the.
 
**Facilitator**   43:33
OK.
 
**Participant**   43:39
Requests that I generate to the VA system OK, perfect.
So created created a me, created B here it will be showing A&B.
Right, right.
 
**Facilitator**   43:49
Yes.
 
**Participant**   43:50
A&B and we'll have no clue that a belong to which 40 digit GUID, right?
Right. If you see the GUID GUID mean the last key API key value, the API key value is a 40 digit, right?
 
**Facilitator**   44:08
OK.
 
**Participant**   44:09
Right, which is the last page I'm referring to the last page where you say that.
 
**Facilitator**   44:11
Sure. Yes, yes.
 
**Participant**   44:12
So the last.
The last page has 40 digit key, right?
And here is the name.
So multi users are working together.
The good part is that they will have a name to it, right?
So if I will have a name reference such as I created myself A and he created B, he can go and revoke or whatever they want to do and the only drawback to this thing is if somebody has GUID only GUID means the API key itself I cannot.
 
**Facilitator**   44:25
Mm.
 
**Participant**   44:42
Map back to the name.
Did you follow me like?
 
**Facilitator**   44:49
Yes.
 
**Participant**   44:50
So my point is, suppose as a user a user a created a key.
ABC.
And has.
4 digit like a key assigned to it, right?
Whatever that whatever, I'm just putting just right.
 
**Facilitator**   45:09
Yeah, yeah.
 
**Participant**   45:10
So this is just an example.
So user a me who created a key called ABC and which generated an API key 123455 blah blah blah. OK so my another team member user B created B user B created.
Key XY zed.
Right has an API key value for 09876 dash. This this this something like that. OK so.
 
**Facilitator**   45:29
Mm-hmm.
OK.
 
**Participant**   45:41
Make sense this based on this workflow, right?
 
**Facilitator**   45:43
Yes.
 
**Participant**   45:44
If I have just a key number which is 12345 blah blah blah or 09876 blah blah blah blah, I cannot relate to which key belongs to in the system.
Is it belong to ABC or is it belong to XYZ?
 
**Facilitator**   46:03
So you would need to copy the name along with the key.
 
**Participant**   46:07
Not no on like a first key first. What is the unique part of the grid?
So it's, let's say you are referring to ABC key refer to 1st 4 digit of the key which is 1234 right?
And a key XYZ refer to 0987 like only first four digit can give you the clue that will be very helpful the end user but it's optional need.
Is optional.
I'm not saying it has to be in a sense that user wants to know about which key belong to which name.
 
**Facilitator**   46:36
Oh, are we talking about the ID here?
 
**Participant**   46:40
Yes, the name.
 
**Facilitator**   46:41
Yeah. And it typically picks up the first couple numbers of the API key. Is that correct?
 
**Participant**   46:47
I yeah, that's I'm expecting it should, but I do not know.
 
**Facilitator**   46:50
Yeah. OK.
I don't know either I this is just I.
 
**Participant**   46:54
A mock up, yeah.
 
**Facilitator**   46:55
Yeah, I. But that is helpful. And I I will definitely like.
I'll look into that to see best practices.
Does that seem like best practices to you? Yeah.
 
**Participant**   47:04
That's right.
Exactly. So based on the best practices, yes, I highly recommend that one.
 
**Facilitator**   47:08
Yeah.
Yeah, I honestly.
And very clearly just typed in a bunch of crazy numbers, but.
 
**Participant**   47:17
No, no, no, no.
I'm not talking about this question.
I'm not having no issue, but I'm thinking about how we you are satisfying the user experience.
 
**Facilitator**   47:22
Yeah, how to map to each other.
 
**Participant**   47:24
Yeah, exactly as a user.
 
**Facilitator**   47:25
I agree, and I do think that that is how that works.
I I think that it does pick up some chunk of that, which is why it's like you won't be able to see the full API key in the instructions.
 
**Participant**   47:28
OK. OK. OK.
Mm-hmm.
Right. OK.
Yep, yeah.
 
**Facilitator**   47:37
So yeah, yeah. OK.
 
**Participant**   47:39
Because before I will press the button revoke say for instance use case my use case as a user before I will press the button revoke I have to make sure that I'm expiring or invalidating the right API key.
That's a whole goal, right?
 
**Facilitator**   47:53
Yeah.
 
**Participant**   47:54
If it's not meeting that requirement, then is a useless function.
 
**Facilitator**   47:54
Exactly.
Yeah.
 
**Participant**   47:59
So that's one of the reason. OK, cool.
 
**Facilitator**   48:00
Yep, I think that they will map and I will make sure that they do.
 
**Participant**   48:04
OK, perfect.
 
**Facilitator**   48:05
Let's go back through here.
 
**Participant**   48:07
Mm-hmm.
 
**Facilitator**   48:09
And generate the key. So so from here.
 
**Participant**   48:10
Mm-hmm.
 
**Facilitator**   48:16
You'd copy the clipboard OK.
And then.
Would you go back to API key management or what would you do?
 
**Participant**   48:27
So because depending on who is using, right?
So if I'm I'm the project management side where the business side of it. So maybe somebody from the business user perspective like business owner or project manager saying OK, copy the clipboard will open an e-mail, right, encrypt the e-mail, paste that API key and send it to the.
 
**Facilitator**   48:30
Mm-hmm.
 
**Participant**   48:50
Right, people, because it's a business side of it. So it's not going to use for itself his or herself, right?
 
**Facilitator**   48:51
Yes.
Exactly, yes.
 
**Participant**   48:55
So the next step is they will.
Usually it happens with so many places like not only for API key certs. Is the same example.
 
**Facilitator**   49:04
Mm-hmm.
 
**Participant**   49:04
And other places where the project manager, they know as a VA like a training, they know how to create some secure data or e-mail.
 
**Facilitator**   49:11
Mm-hmm.
 
**Participant**   49:13
So they create, encrypt that e-mail.
Will address to the right people such as Del. Per A developer B need that keys right?
So so they will.
The PM will send an e-mail. The next job is to send this information to the developer. Which BPM are completely have full sufficient training in order to achieve that thing so.
 
**Facilitator**   49:33
It's.
 
**Participant**   49:36
That's I think it's we do not like there is no need IC in on this dashboard to see that you emphasize this process.
There is no need for it.
It has to be obvious that the whoever is using the system, if it's technical person, no question asked.
 
**Facilitator**   49:45
OK.
 
**Participant**   49:51
Right, they knows that.
What to do next, right?
And if it's PM or some other business side of it.
They know that they have to send this key to the developer or development team, so it's copy to the clipboard, open an e-mail, secure the e-mail sent, paste this thing, send it.
 
**Facilitator**   50:02
OK.
OK. Yep.
 
**Participant**   50:09
And how about this?
Let me ask you something.
 
**Facilitator**   50:11
Yeah.
 
**Participant**   50:13
So my trust to you, honestly, when you say copy to the clipboard, it will copy all this 40 digit GUID.
 
**Facilitator**   50:19
Mm-hmm.
 
**Participant**   50:20
Who? Who?
And from this screen I have no clue that I created for staging environment. If you see this screen particular screen because I suppose I forgot I'm just putting a human error right perspective, right?
I'm on this screen although I generated this key, I I selected the staging, I selected the right name of it right, but the by the time I'm about to send an e-mail, the business owner for oh did I press the staging or did I press the production OK?
So the moment that somebody.
Business owner has to send an e-mail to the development.
Has to tell them this is for.
Staging environment right? So.
 
**Facilitator**   51:01
Maybe this part should have the API key name that you named it, which well the name will have the environment, right?
 
**Participant**   51:03
Some label or a staging environment or environment.
Oh, that great. Yep, Yep.
 
**Facilitator**   51:10
And then it can be connected and then maybe the copy to clipboard it copies the name and the key.
 
**Participant**   51:16
The name.
I agree with you.
The reason why?
Because it will reduce the work overhead.
Because I'm I'm thinking about Elizabeth or PM or business owner, who basically very careful.
 
**Facilitator**   51:21
Yeah.
 
**Participant**   51:26
Oh, did I selected this or that?
They they're not techie, techie people, right?
For me is.
 
**Facilitator**   51:31
Gosh, if I'm so glad you decided to meet with me today.
This is so helpful.
And to think, we almost missed this opportunity, this is fantastic.
 
**Participant**   51:40
Yeah.
 
**Facilitator**   51:41
You're gonna. You're gonna save so many headaches from other people. I'm telling you, this is great.
 
**Participant**   51:44
Yeah. Oh, yeah.
So let's reduce their overhead.
Not to worry too much.
 
**Facilitator**   51:49
Yeah. No, that that's brilliant.
 
**Participant**   51:51
And.
 
**Facilitator**   51:52
Call out.
And yeah, I love that. Very good.
 
**Participant**   51:55
OK, at the moment.
Is this then done?
Then it become the life cycle of the ecosystem where you will have a dashboard to show the API. Think we go back to the square one again on that one. OK, perfect.
 
**Facilitator**   52:02
Yeah.
OK.
So let's say that the new key is in place.
Everything's been tested and you're ready to revoke the old one.
 
**Participant**   52:12
Mm-hmm.
Uh-huh.
Mm-hmm.
 
**Facilitator**   52:16
How would you go about doing that?
 
**Participant**   52:19
Oh, you are about to revoke. OK, so.
 
**Facilitator**   52:23
So everything's been tested and integrated and you're like, yes, this is it's go time.
 
**Participant**   52:23
Depend. OK, so say for instance on the right hand side which is staging not right hand side. Save. Oh, there are two. Oh, the screen is changed. OK.
So you got two active.
One is staging active, one is production and one is about to expire.
I'm considering the scenario that the old one is the yellow one which is expiring staging key, right?
The bottom box.
I'm referring to this one.
This is the old key and the top one is active and OK.
 
**Facilitator**   52:50
Mm-hmm.
 
**Participant**   52:55
Let me ask you something interesting question to you.
Expiring mean is not expired yet, right?
So it's about to expire.
 
**Facilitator**   53:02
Correct.
Yes.
 
**Participant**   53:05
And you have a first box card which is a newly generated key on the left hand side. The first top box right is staging.
 
**Facilitator**   53:11
Mm-hmm.
 
**Participant**   53:11
Right. So technically speaking Bora, both are active.
 
**Facilitator**   53:17
Yes, correct.
 
**Participant**   53:17
Correct.
Right, so you're misleading the user that is about expiring.
Mean not showing as a green active although it's active, but it should have a label called active and about to expire.
My feedback to you.
Honestly, this is misleading. Why?
Misleading in a sense that from the user perspective from user experience.
So look at the label on the top of the each box.
First one is called active, although has an expiry for the future future date such as July like like six months from now on or whatever that like expiry date on 2026 right?
 
**Facilitator**   53:44
Mm-hmm.
 
**Participant**   53:54
So I'm talking.
Let's focus on one by one, OK, first box.
This key is called active.
Will expire in next year, January.
OK.
I got it.
No problem with that.
Nothing wrong with it.
This box on the right hand side is called production key.
Is active and is expired in maybe five months, October five one.
Not next year, but five months or something is considered as active.
What criteria is that you in the system?
I do not know why it's not be the third box which is the bottom box.
Is not inactive, which is misleading because it's active.
Has to be active.
Has to be active because you have a two state of like either zero or one.
You cannot have a in between, right?
So is either is expired or active.
Expiring is a feeling or alerting system, so I will keep active green on this box and as well as expiring, both labeled together. Why?
Active is mean.
The key is still inactive.
That's one condition, right?
Because this case is still active.
So technically speaking, this key is active, so I will.
I want to see active expiring is based on the rule. Say for instance the key is about to expire in two weeks.
So this particular label should show on the UX side that this key is about to expire.
Should have expiring.
Label the yellow label I'm talking about.
Revoke is a grey.
 
**Facilitator**   55:25
Yeah.
 
**Participant**   55:26
I agree with that.
One should not have an active.
Active, deactivated. Revoked. That's perfect.
Only I'm I'm struggling with expiring.
So expiring is not in a state, is a feeling, or letting you or alert which letting the user that this key is going to be expired.
In two weeks, 3 weeks, whatever the criteria is right.
But it's still active, so I think active label I want to see on this third box.
 
**Facilitator**   55:48
Yes.
OK.
 
**Participant**   55:54
Right. And based on about to expire, say for instance, my top used or new one is on the top and the third box which is the bottom row, second row is about to expire, which I'm not going to use anymore.
So I will press the, press the button, revoke here.
 
**Facilitator**   56:12
OK. And what we expect to have happen when we press revoke?
 
**Participant**   56:16
That simple confirmation by dialog box.
 
**Facilitator**   56:19
OK.
 
**Participant**   56:20
Yep, that's what the confirmation is.
And how about this?
Ask for the PIN card, user ID and password just to make sure the user is on the VA.
 
**Facilitator**   56:33
I you have to be on the network to access VA notify.
 
**Participant**   56:35
Oh, I agree.
 
**Facilitator**   56:37
So I think we're good.
 
**Participant**   56:40
No, I agree with you.
I'm just teasing about that one, yeah.
 
**Facilitator**   56:42
Oh.
 
**Participant**   56:45
OK, so type revoke to confirm.
I agree with that one. Yeah, yeah.
 
**Facilitator**   56:50
OK.
 
**Participant**   56:55
Can I go back to that screen? Can I?
Yeah, just to give you feedback.
 
**Facilitator**   56:59
Sure.
 
**Participant**   57:00
Very like before, the evoke the label or a KPI keyname which is project 1V2 dash staging.
Very small for the eyeballing perspective, because this is a screen.
A screen that somebody has to pay attention to it, right?
The the the font that is used for this project 1V2. This has to be prominent.
Why? Nope. Honestly, to be honest with you, nobody will read these paragraphs. What they are paying attention to it. OK. The question which is type revoke into the confirm. Agree. I will read this message. But what I am as a user I will be making sure I will.
Be making sure to revoking the right one.
That's my key objective here on this dialogue box.
So what I want to see first, I want to see make sure the project my key name should be prominent enough to validate this thing. But I see the project 1V2, it was ignored.
That's why I came back again.
That's why I ask.
You can you go back to the screen one.
Because I was I my, my, my brain didn't trigger that I entered the revoke word. But I recalled, oh, did I press the right one?
Did I revoke the right key?
So my feedback on this is screen.
All, all constant label is irrelevant.
Like it's confirm API key revocation blah blah blah.
This is constant label or text irrelevant to the user.
What is the most important valuable thing on this screen?
API key name so the user make sure that revoking the right one and of course the custom message to make sure revoke and then revoke API key.
But I missed the part that I did.
I selected the right one or not, so I asked the question can I go back to the screen to see how they labeled my API key name right?
 
**Facilitator**   58:52
Mm-hmm.
OK.
 
**Participant**   58:55
So.
Just a font like a cosmetic thing.
 
**Facilitator**   58:59
Yeah. So you think it just needs, we need to make it a little bit more prominent.
 
**Participant**   59:03
Prominent to make sure the user is pressing the right one, yeah.
 
**Facilitator**   59:07
OK.
 
**Participant**   59:08
Why? Because if you see the top most label or title confirm API key revocation is more bigger font then the API key name itself.
So my eyes are going into, first of all, the question which was asked as a type the word revoke which I'm focusing on that one. But my key name is blurry on the side of it, right.
So it's kind of like, oh, omit from my brain to condition.
So anyway.
It's up to you, but I'm just giving you my feedback on it.
 
**Facilitator**   59:42
Yeah, maybe.
I don't know, just spitballing.
But perhaps instead of typing revoke, they have to type in the name of the API key.
 
**Participant**   59:52
Hmm.
 
**Facilitator**   59:54
That could be very tedious depending on how long that name is.
 
**Participant**   59:54
But right.
Yeah.
 
**Facilitator**   59:59
No.
 
**Participant**   1:00:00
Somehow somehow very close to the word revoke and like a label or on the top some label of the API key name.
That's the best thing to you can do with the customer.
Yeah.
 
**Facilitator**   1:00:12
OK.
Great.
Well, I think that is that we are seriously over time.
I appreciate you being willing to stay over.
Other than the things we covered, did this meet your expectations as something for as sensitive as API key management?
 
**Participant**   1:00:38
Yeah. One thing I have a question about. The first screen or dashboard.
Can you go back to the oh, yeah, this is Scroll down a little bit.
 
**Facilitator**   1:00:44
Mm-hmm.
 
**Participant**   1:00:45
My my question is that because it's keeping all the active right and about to expire.
Keys and revoke one. How is recycling going to recycle the old keys?
Is it going to show last two or all revoked keys in the past?
What is the retention period of it? Yeah.
 
**Facilitator**   1:01:03
So right now the idea is to just show the most the the last active for each environment.
 
**Participant**   1:01:10
Oh, OK, OK.
 
**Facilitator**   1:01:11
But is there anything?
Does that make does that helpful? Does that make sense, or is there something else you'd expect there?
 
**Participant**   1:01:19
First of all.
The historical perspective audit perspective in retention policy perspective, there are a couple of things right we cannot.
Like rule out one thing, OK, keep only or show last revoked one and get rid of the old one.
How about this from audit perspective?
Requirement perspective right?
So let's say you're not showing the old key name or some IDs that I in the past we were using, right?
Am I able to get the historical data of my old API keys?
From this screen or dashboard where I'm managing this? Yeah. Because you're calling this one as a dashboard or managing the API keys.
And my question to you say for instance for for any audit requirement perspective, we have to investigate that, OK, who was using this key or which environment was used this key in order to make those calls or something, some investigation going on, right?
Right. So if we have to make sure if we want to find out that OK, this key was used in the blah blah blah transaction, right?
Or some communication or web transactions and and and then here I want to see that OK when we created or initiated this key and when it was expired.
 
**Facilitator**   1:02:29
Yeah.
 
**Participant**   1:02:37
So then I will have a period or used utilization time, right?
I'm not sure if we need that information from the dashboard.
Because if you have any kind of like a reporting for all the past keys, that's great. As a user I I feel there is maybe a need for it.
 
**Facilitator**   1:02:56
Over how many years, like all years?
 
**Participant**   1:02:56
As a report.
Like, no, not all.
So so let's say like a couple of years or so because we talked to the record management system in the past for other reason and their intention was that it defined by the business owners, right. But in generally what we learn from them is that 2 years of.
 
**Facilitator**   1:03:05
OK.
 
**Participant**   1:03:18
The data for representing any information that's sufficient for it.
 
**Facilitator**   1:03:22
OK.
Yeah, that sounds good.
 
**Participant**   1:03:26
Although it's not a need or like a policy requirement to have, all the historical data to keep track on those things.
But you know the VA has very, very strict environment to it, right?
We have to keep track of all the things that we do and API keys are not a joke or something that we can ignore it right? Because the reason why I'm saying that the reason why I'm saying that this particular interface via notify.
 
**Facilitator**   1:03:40
Yeah.
Right.
 
**Participant**   1:03:51
Provide us an opportunity to go beyond the Virginia.
Crossing the boundary like we are going outside of the public and that sometimes scared me, right?
Because you're sending a message to outside world, and because outside world get the message coming to that door to our VA environment.
And so that's a scary part of it, right?
 
**Facilitator**   1:04:11
Yeah.
 
**Participant**   1:04:13
From architectural design perspective, so for any incident happen.
In security incident or anything happen badly.
And let's say it.
So then if somebody has to audit.
That how we use that keys and all those thing and if somebody has to produce a report that OK, we basically created a key for vendor, we created a key for our development team or something at least a report will help.
 
**Facilitator**   1:04:39
OK. Yeah.
And also just so you know for like a new feature that we have coming up soon is an activity log where you'll be able to see.
 
**Participant**   1:04:51
OK.
 
**Facilitator**   1:04:55
Any activity that's happened like like on your service.
 
**Participant**   1:04:59
How how we utilize those keys?
 
**Facilitator**   1:04:59
So yeah, well, not just for keys, but it could be like this template was created or this was deleted, or this user on your service was.
 
**Participant**   1:05:00
Yeah. How we utilize keys? Yeah.
Mm-hmm.
Oh, audit side of it. OK, cool.
 
**Facilitator**   1:05:10
Changed.
From this role to this role and yeah, so yes, all those things and that way you can just kind of keep a pulse on what's going on.
 
**Participant**   1:05:15
Oh yeah.
Keep tracking.
Yes, that's.
 
**Facilitator**   1:05:20
Yep, but it wouldn't hold all of this information for like API keys, right?
 
**Participant**   1:05:21
I think that's a wonderful thing.
Mm-hmm.
 
**Facilitator**   1:05:28
It would probably just say.
This API key name was added. This API key was revoked and and then who did it.
 
**Participant**   1:05:39
I think, yeah.
 
**Facilitator**   1:05:39
And when so, but at least that that's something, right?
 
**Participant**   1:05:43
Audit trail? Yeah, at least some activity can can be audited. And. And this is more than enough to be honest with you. If suppose you're tracking who came on on the dash or the system and then generated a API key or evoke a key. That's perfect, because if.
 
**Facilitator**   1:05:46
Yeah.
 
**Participant**   1:05:59
Suppose suddenly we receive that OAP I key become invalid and now we have to investigate who revoked that key and now we will have a track.
 
**Facilitator**   1:06:06
Yeah.
 
**Participant**   1:06:07
It's not us.
Instead some some mistake on the software upgrade.
From the notify side, right, I don't want to blame myself. Just kidding.
 
**Facilitator**   1:06:12
Right.
Before we drop, is this enough information for the revoked key?
Or would you want all of this information added in here? Would there ever be any need to see when it was generated and who generated it and?
 
**Participant**   1:06:21
Yeah.
OK.
So there are two parameters I would like to have on this one. The first thing you mentioned about revoked on which mean my activity when I press the button but it does not dictate me that this key this key was valid from till this point. Revoke could be.
 
**Facilitator**   1:06:35
OK.
Yeah.
 
**Participant**   1:06:49
In the middle as well, right?
Suppose you generated a key from January 1st and you an expiry for that key was December 31st. But you revoke in October.
 
**Facilitator**   1:06:51
Yeah.
 
**Participant**   1:06:59
So you're showing October only, but you're not showing January or December dates?
Sorry, it's generated an expiry date will help as well.
 
**Facilitator**   1:07:08
OK, perfect.
Do you think is it helpful to know who generated it for the revoked keys or is that kind of?
 
**Participant**   1:07:16
I think this is good because you already have that in revoked by this.
So it's mean revoked by. This is enough because.
 
**Facilitator**   1:07:24
You don't need to know who generated. OK, OK.
 
**Participant**   1:07:24
Who generated?
Yeah, exactly.
Yeah, so revoke revoked by is Gunner because that's act. Somebody did it right. And if suppose needed more detail. As you were saying that. OK, go back and then check the, like, historical report on it and then you will have all the keys. OK, cool.
 
**Facilitator**   1:07:32
Yeah, yeah.
Perfect.
Awesome. Oh my gosh.
Well.
Thank you so much.
Is there before we drop.
Is there anything else that you want to share or ask me?
 
**Participant**   1:07:58
But I was expecting that you may go like a design review A and B option. OK. Instead of this let's do this.
Which one is much better?
But this is great.
Nothing has surprised me.
This is wonderful work and no shock and surprises on the screen.
Little confusion I already mentioned you the generate API key is not giving me enough information before I will press the button.
Right. So that's one one thing and.
 
**Facilitator**   1:08:22
Yeah.
 
**Participant**   1:08:26
One thing I'd love to see.
That anywhere when we have to go through some workflow in order to achieve some task.
To track the expectation that generating a key mean you will.
Review key generate you will select the environment.
You will review the before you will generate and finally you will get the key.
So set the expectation is this is a threestep workflow, so some some places where I have some other experience before I nobody wants. Like I'm jumping into something.
Which never gonna end.
Nobody wants it.
Right, right.
 
**Facilitator**   1:09:01
No one wants that, no.
 
**Participant**   1:09:02
Nobody wants it.
So before I will start, I will know exactly that I will be going to deal three-step or five step or ten step whatever.
So. So then I will allocate my time accordingly. Say for instance if your steps related to.
 
**Facilitator**   1:09:12
Yeah.
 
**Participant**   1:09:21
And I need at least 40 minutes to even achieve those things, so maybe I'm busy with some other work, so I will not touch that process until I have a 40 minutes available in order to start that work.
Setting an expectation will help the user to go know exactly that you for the generating an API steps mean you will be going through with three steps.
One is select environment.
Review the provided information and generate the key. Something that's pretty good for any like, especially for not technical people, but from the business side or or or or.
The project management side, people who who's scared to touch this type of the things.
Basically, they're not very friendly.
They feel OK. They're doing something for development team, something goes South or something.
So helping them OK.
 
**Facilitator**   1:10:10
That's a real feeling, for sure.
 
**Participant**   1:10:11
Yeah, but one thing was helping me.
Do you know why I didn't ask you that the 1st place?
If you remember the each screen that you showed me has the three blue bar on the top.
 
**Facilitator**   1:10:21
Yeah.
 
**Participant**   1:10:22
I immediately realized that I'm going through with the workflow for the three steps.
 
**Facilitator**   1:10:26
Yep.
 
**Participant**   1:10:26
Right. So it give me a clue.
That's why I didn't ask you, but I don't think so.
Every manager will notice that three bar as a step, correct?
That was not very obvious in a sense.
I notice if you, if I remember correctly, I'm not sure it was a blue bar on the each page, right?
 
**Facilitator**   1:10:45
Yes.
 
**Participant**   1:10:46
And there were three bars on the top.
I think if you yeah screen. If you see this one. Yes, these three I think sufficient.
It's OK.
Ignore my question feedback, that's why.
 
**Facilitator**   1:10:59
OK. Yeah.
 
**Participant**   1:10:59
Yeah, because this represent three-step to me and I think people will get the sense.
 
**Facilitator**   1:11:06
All right, perfect.
 
**Participant**   1:11:06
Yeah, yeah. Just just to ignore my question.
 
**Facilitator**   1:11:07
But just mentioning something initially like on this page like what what this entails.
 
**Participant**   1:11:11
Yes. What is the expectation?
Yeah, yeah, yeah, yeah.
 
**Facilitator**   1:11:15
Yeah. OK. Perfect.
All right.
I love that.
 
**Participant**   1:11:20
Cool.
So if you have any other question or anything, let me know and based on the availability then we can talk again if you like to, yeah.
 
**Facilitator**   1:11:29
Wonderful. Thank you. I really appreciate that.
 
**Participant**   1:11:31
You're welcome.
Thank you.
Have a nice day. Bye bye.
 
FOLK, ELISSA A. (ODDBALL INC) stopped transcription

