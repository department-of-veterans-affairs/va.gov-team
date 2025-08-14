
Session 4

**Participant 1**   2:26

Good afternoon.

 

**Facilitator**   2:28

Hi, Matt.

How are you?

 

**Participant 1**   2:30

Good. Thanks.

 

**Facilitator**   2:32

Good. My name is Elissa and my colleague Sam is on observing today.

 

**Participant 1**   2:39

OK.

Nice to meet you both.

 

**Facilitator**   2:42

Nice to meet you too.

 

**Observer**   2:43

Nice to meet you.

 

**Facilitator**   2:46

I know that there is a slew of other users that wanted to be added to this meeting.

Do you know?

I guess we can give them a couple minutes to see if anyone else is going to join, but if not, I know it's a short session so.

I wanna jump in.

 

**Participant 1**   3:06

Yeah, I think Rocky and Kayla had said they would attend.

 

**Facilitator**   3:11

That sounds great.

 

**Participant 1**   3:12

So for my team.

Oh, there's Kayla.

 

**Facilitator**   3:32

Hi, Kayla.

 

**Participant 2**   3:36

Hello.

 

**Participant 1**   3:39

Kayla, do you know if Rocky had planned to attend?

 

**Participant 2**   3:42

I think Rocky is gonna skip Jeff. I think was gonna attend.

I think Jeff and I were just gonna observe.

But you don't have to wait for him.

 

**Facilitator**   3:49

OK.

All right then.

I'll go ahead and jump right in then.

Like I said, my name's Elissa and my colleague Sam is on the line observing and taking notes.

And just as a quick heads up, VA notify has two things going on in tandem right now related to API keys.

So the UX team.

We're working on the self-service API key management feature for VA notify.

And the platform team is reaching out to services to get their keys rotated for security purposes.

So if you hear from the other team, just know that it's all part of the same effort to improve the security and make things easier for you all to manage your API keys.

So the efforts are connected, but they are two separate things as well.

So as a quick reminder, we're not testing you, we're testing the design.

So if something is confusing or it doesn't work the way you'd expect it to, that's actually like super helpful for us to hear. And your honest feedback, positive or negative, will really help us improve the experience.

Do you have any questions for me before we dive in?

 

**Participant 1**   5:04

I think you answered my first question. Like there'll be a requirement for key rotation in future, correct?

 

**Facilitator**   5:10

Yes, that's correct.

 

**Participant 1**   5:11

Yeah. OK.

 

**Facilitator**   5:14

OK.

Well, just a few like intro questions just to get an understanding of baseline understanding of things.

How familiar are you with working in the VA notify portal?

 

**Participant 1**   5:29

I guess somewhat familiar.

That's just to clarify, that's where you create the notify templates and such.

 

**Facilitator**   5:36

Yep, that's correct.

 

**Participant 1**   5:37

Yep.

Yeah. So I've. I've been in there.

Just a, you know create, you know, notify emails and stuff like that.

 

**Facilitator**   5:45

OK.

 

**Participant 1**   5:46

So somewhat familiar.

 

**Facilitator**   5:48

That's great.

Love to hear it.

How familiar are you with API keys or managing them at the VA?

 

**Participant 1**   5:59

I mean, I've had occasion to use them.

You know, like obviously to connect to VA notify and such, but not really much experience with managing them.

You know most of the the keys that we have haven't really. We haven't really had to rotate those yet, so.

 

**Facilitator**   6:08

OK.

OK.

So if you had to rotate your API keys tomorrow, where would you?

Where would you look first for help?

 

**Participant 1**   6:27

Ah.

I would guess probably whatever.

You know, whatever service is, you know, access is controlled by send API key.

Reach out to the team that owns that service.

 

**Facilitator**   6:38

OK. And is there any specific kind of help or resources that you'd want to be available when it's time to rotate your keys?

 

**Participant 1**   6:48

Not particularly.

Just like a.

You know, I mean, as long as it's clear how to, you know how the process works.

I think that would be sufficient.

 

**Facilitator**   6:58

OK.

So is there a format that you think would work best for that help material or?

Just as long as something's available.

 

**Participant 1**   7:09

Yeah, as long as something's available.

You know any any kind of documentation would suffice.

 

**Facilitator**   7:15

OK.

And in your keys are about to expire.

Is there any way that you might expect to be made aware of that?

Like when they need to be rotated.

 

**Participant 1**   7:29

Probably some kind of notification e-mail or.

 

**Facilitator**   7:33

An e-mail.

 

**Participant 1**   7:33

You know, I know. I know some. Yeah. Probably e-mail.

I know in some instances we get slack alerts, but you know.

 

**Facilitator**   7:40

Do you have a preference?

 

**Participant 1**   7:43

Not particularly, no, as long as it's, you know, I mean, I guess sometimes the slack alerts can be overwhelming, you know, might get lost in the.

In the maelstrom.

 

**Facilitator**   7:54

That's totally fair.

Well, let's say that you receive an e-mail that one of your API keys is about to expire.

And you need to rotate it.

That means that you'll need to create a new key, update your integrations, and then disable the old key once everything is working again.

So I'm gonna share my screen.

Unfortunately, I don't have the permissions to allow you to.

Take remote control for the prototype.

So you'll have to just kind of talk me through what you're seeing and where you'd like me to click.

So let me get that pulled up here.

All right.

Are you seeing the prototype?

 

**Participant 1**   8:40

Yes.

 

**Facilitator**   8:41

OK.

So let's pretend that you've just logged into VA notify portal and you've navigated.

To your service and you've gone to the settings page and that's where.

We're gonna start.

So walk me through how you would generate a new API key.

 

**Participant 1**   9:06

I would probably click on the API key management.

 

**Facilitator**   9:11

OK, when I click on that, what do what do you expect to find there?

 

**Participant 1**   9:19

Umm.

Maybe like?

You know, like a a presentation of the what the current key is and then you know some action button or something to generate a new one.

 

**Facilitator**   9:35

OK.

Let's go ahead and click and go in there.

And I'll give you a second and let me know if you want me to scroll or anything.

 

**Participant 1**   9:56

OK.

 

**Facilitator**   10:07

Talk me through what? What you see and what you think you can do on this page.

 

**Participant 1**   10:15

So looks like a chilling, you know, past and present are active and inactive API keys.

Yeah, we.

Yeah, I guess we had that distinction.

Environment distinction.

So production and staging that makes sense.

I guess.

My only question would be like OK, if you know Project V, the staging one is expiring.

Would I need to revoke it first and then generate the new API key or?

 

**Facilitator**   10:57

How would how do you think you'd figure it find information on how to figure out that process?

 

**Participant 1**   11:06

Have been right above it.

I missed it.

Dear kids expire.

Yeah, I guess it's it's not really clear to me.

Like what? The steps would be to to rotate.

You know, I would, I would assume.

Either you just click generate API key or.

Revoke the old one first.

I'm not really sure.

 

**Facilitator**   11:50

OK.

What would you like me to do?

 

**Participant 1**   11:57

I guess try to generate APR key.

 

**Facilitator**   12:00

Alright.

 

**Participant 1**   12:04

And then for staging.

 

**Facilitator**   12:06

OK.

 

**Participant 1**   12:08

Continue.

And then yeah, I'm not sure what the normal naming convention is like.

 

**Facilitator**   12:19

I made-up one for you, but you would follow whatever that naming convention is, right?

 

**Participant 1**   12:24

Right.

 

**Facilitator**   12:25

OK.

And do you happen to know if?

Your service has specific naming conventions for API keys.

The reason?

I ask.

Is.

We're adding.

I don't know if you noticed, but when you selected staging on the previous.

Step it now added that as a suffix in here.

And I'm curious if that will, if that's beneficial, or if that is something that might mess up a naming convention you already have.

 

**Participant 1**   13:08

I'm just trying to dig up what we currently have.

Bear with me for a second.

Yeah.

I would say that's probably not needed in our case.

Well.

I mean generally like the you know we we store these settings securely.

There's like a, you know, a settings or parameter set up for vets API.

I think.

I mean, I guess actually that's probably a good thing.

'Cause it would you know more clearly distinguish, you know, keys across the various environments.

 

**Facilitator**   14:12

OK.

That that's, I think what we were hoping for. But I think we also just want to get an understanding of any potential internal naming conventions and make sure that it it wouldn't conflict with anything you know.

 

**Participant 1**   14:30

Greg.

 

**Facilitator**   14:30

So OK.

Well, let's pretend that we're naming it this super clear, amazing name.

To that point.

Do you think?

I think it would be helpful to have suggestions or recommendations from like naming patterns. Or do you think that every team sort of has their own?

End.

Maybe that's not necessary.

 

**Participant 1**   14:57

Probably not necessary.

I think you know, most teams have their own naming scheme.

 

**Facilitator**   15:01

OK.

Cool.

All right.

Well, what would you do from here?

 

**Participant 1**   15:09

Name is defined, so continue.

 

**Facilitator**   15:11

OK.

 

**Participant 1**   15:16

And then I guess I'd click, you know on the plus for environment.

Key name just to confirm.

Staging and the name that we added continue.

 

**Facilitator**   15:26

OK.

 

**Participant 1**   15:34

And yeah, you know, obviously that's the API key.

I would just copy that to my clipboard.

 

**Facilitator**   15:41

OK.

 

**Participant 1**   15:42

And.

You know, in our our case, we add these two Amazon Web Services parameter store.

So that's helpful to have the copy to clipboard functionality.

 

**Facilitator**   15:55

OK, great.

And.

Question how obvious is it that this is the only opportunity that you have to copy that key?

 

**Participant 1**   16:15

I mean it is pretty prominent for a sentence.

This is the only time you'll be able to view your full API key.

So I think that's probably maybe might be good to like make that.

Bold as well.

 

**Facilitator**   16:29

OK.

 

**Participant 1**   16:30

Just for emphasis.

But you know, I mean I I caught that right off the bat.

 

**Facilitator**   16:35

OK.

Great.

So from here, what would you do?

 

**Participant 1**   16:46

I guess after copying the clipboard and making sure I squirled that away somewhere.

I would go back to API key management.

 

**Facilitator**   16:55

OK.

So we're gonna pretend that you've gone and done your due diligence and the new key is in place and everything's been tested and you're ready to revoke the old one.

How would you go about doing that?

 

**Participant 1**   17:18

Just go to the you know that old project 1V2 staging.

Box and click revoke.

 

**Facilitator**   17:27

OK. And when you click on that, what do you what would you expect to have happen?

 

**Participant 1**   17:33

I would expect that box to appear under the list of inactive API keys.

 

**Facilitator**   17:39

OK.

Let's go ahead and click on that.

What do you think about this intermediate step?

 

**Participant 1**   17:55

I think that's good.

I mean, you know, I think an inadvertent revocation would be bad, so.

Probably good to to confirm.

 

**Facilitator**   18:06

OK.

Would you feel confident in taking this step in in production after all the things, the steps you've already gone through?

 

**Participant 1**   18:21

Umm.

Yes, I guess I'm just not sure like it.

It is, yeah.

I guess if it's listed in the other active.

Umm.

Like the, you know, the new key is listed under the active you know list of keys. I I think it'd be safe to revoke.

 

**Facilitator**   18:51

So that looked good.

I just went back.

Just OK.

 

**Participant 1**   18:54

Yeah.

 

**Facilitator**   18:54

All right.

So you would type in revoke here, OK.

 

**Participant 1**   18:57

Yep.

 

**Facilitator**   19:04

OK.

So let's take a look.

Down here and see what's happened.

And you know, talk me through anything that might stand out to you.

 

**Participant 1**   19:25

Umm.

I.

I guess it says expected. Umm.

I could see the new key in the list of active keys and deal one in the inactive list.

Umm.

Seems pretty straightforward.

 

**Facilitator**   19:40

OK. And do you have any expectations around?

How many historical?

Listing should be kept for the inactive keys. Or do you think just the most recently inactive is sufficient for each environment?

 

**Participant 1**   20:04

Probably just the most recent.

You know, I, you know, it'd be more for like I guess.

Is there a way to unrevoke a key or that's just a permanent action?

 

**Facilitator**   20:21

That is a permanent action.

 

**Participant 1**   20:23

OK.

Yeah, I was just thinking like a scenario where like the new key.

I guess that wouldn't really come up though.

I was just trying to think of like a a line. The ointment here. Like if the new key didn't work for some reason, would it be possible to go back to the old key?

But assuming you did do diligence and tested previously, you wouldn't.

Probably encounter that.

So yeah, I think it's good.

 

**Facilitator**   20:48

OK.

All right.

And then I don't know if you noticed, but this is this management is only going to be allowed under like for certain user types with certain permissions.

And I'm curious.

About what you might think if you didn't have the right level of permissions and you landed on this page but saw no option to generate or revoke keys like, let's say you had an editor or viewer permission and would it be beneficial to see the information on this?

Page without being able to perform any functionality.

Or would that be more confusing?

Do you think?

 

**Participant 1**   21:42

It might be good for informational purposes.

You know, maybe just with the note that you, oh, it does say that only is with appropriate permissions.

Umm.

Yeah, I I think you know presenting the information will be fine for for users without edit permissions. But.

 

**Facilitator**   22:05

OK.

Cool.

Well, that's those are all the scenarios I have.

I wanted to know if there was anything that felt unclear or confusing for this process, or maybe seemed like something was missing, or if it felt comprehensive.

 

**Participant 1**   22:26

Yeah, I think so.

Yeah, I guess just, you know, I I get nervous about the fact that it's only the key is only available that one time to copy, but.

I understand the the decision behind that.

Yeah, I think it's it's good.

It's pretty, you know, pretty straightforward and clear.

 

**Facilitator**   22:50

OK. And do you feel like it met your expectations for something as sensitive as API key management?

 

**Participant 1**   23:00

S.

 

**Facilitator**   23:01

OK.

And.

If you had a magic wand and could change anything about it doesn't have to just be API key management.

But like VA notify in general.

It it can just be API key management.

But would there be anything you would change?

 

**Participant 1**   23:21

Not particularly, no.

I think it's, you know, you know, I only just have limited experience, you know creating the templates and such for for our notifications, but that that was also a straightforward process and clear and.

So yeah.

 

**Facilitator**   23:40

Great.

Any other any questions for me before we go or any final thoughts?

 

**Participant 1**   23:48

You had mentioned that.

Platform staff I guess would be reaching out to individual users to rotate their keys.

Is that coming sooner or or later?

 

**Facilitator**   24:01

It will be…

Sam do you happen to know the cadence that they have on that I I know it.

I was thinking in the next quarter, but I don't know for certain.

 

**Observer**   24:16

So I think it it will be well this quarter some point in time, I don't have that rollout timeline.

Once we have that, we can we can reach out to you guys who who would be the point.

Of contact that we would share that with.

****.

 

**Participant 1**   24:36

Probably myself and Kayla and Jeff.

 

**Observer**   24:40

OK.

Yep, as soon as Elissa or myself hear anything on that, it would be the the other team of VA notify that would be reaching out to you all about that.

 

**Participant 1**   24:55

OK.

Yeah, I was just looking for like a general, you know, time frame for when we need to rotate.

 

**Observer**   24:57

S.

Yeah, this quarter.

 

**Facilitator**   25:00

Yeah.

 

**Participant 1**   25:03

OK.

Sounds good.

 

**Facilitator**   25:06

Yep. And I think once you have the new key, you'll have 30 days to get it all tested and integrated, so.

 

**Participant 1**   25:17

OK, nice.

 

**Facilitator**   25:18

All right.

OK.

Well, thank you so much for your time.

I really appreciate all of your valuable insights. This has been wonderful.

 

**Participant 1**   25:28

Thank you.

 

**Facilitator**   25:29

So all right.

 

**Participant 1**   25:29

I question my value sometimes, but.

 

**Facilitator**   25:31

Hey, don't do that. Very valuable.

I really appreciate it.

 

**Participant 1**   25:36

All right. Thanks.

 

**Facilitator**   25:37

Thank you so much.

Have a good rest of your day.

 

**Participant 1**   25:40

Alright, take care.

 

**Facilitator**   25:41

OK, bye.

 

**Participant 2**   25:42

Thank you.

 

**Facilitator**   25:43

Bye.

 

**Participant 2**   25:43

Bye.

