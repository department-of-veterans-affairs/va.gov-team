# Transcript of a KT with Brandon Cooper
- 09/29/2025

## AI summary
- This document is a transcript of a Knowledge Transfer (KT) session with Brandon Cooper. The session covers several topics, with a particular focus on PDF generation, the PDF download retry mechanism, CSRF token handling, and a form PDF change detection job.
- Key takeaways from the discussion:
     - **PDF Generation**: Heather wants to document information about PDF generation for an upcoming project (IVC). Brandon mentions that Derrick did much of the work for EZR PDF generation, while Josh finished it. Brandon refactored the shared PDF fill module, which is used for about 20 forms, and has a PR open with more documentation and a rake task to help fill out PDFs from data.
     - **PDF Download Retry Mechanism**: Brandon explains a simple retry mechanism implemented as a "with retries" concern. This addresses issues where PDF generation sometimes fails due to the underlying library and the varied nature of PDFs. It defaults to 3 retries and uses a retryable gem. This process is synchronous.
     - **CSRF**: Matt Long asks about the implementation of CSRF on API requests. Brandon states it's used in their forms with a backend endpoint that refreshes the token, but it was never rolled out globally because he had difficulty confirming it was actually helping to reduce invalid CSRF token errors, despite an initial reduction in occurrences.
     - **Form PDF Change Detection Job**: Brandon discusses a Sidekiq job designed to monitor for changes in PDF versions (uploaded by business teams to VA.gov for user downloading) from the Lighthouse Forms API. It runs daily in staging and pings the API for a form PDF revision hash, storing it in Redis to check for changes. If a change is detected, a Datadog monitor can notify the team via Slack. This job is currently behind a toggle, turned off in production, but available for teams to hook into. The motivation for this was a past issue where a caregivers PDF had not been updated for several changes.
     - **Caregivers Application**: Derrick asks about the caregivers application. Brandon highlights that it sends form data and attachments, including a filled-out PDF version of the form, to the downstream Carma system via the MuleSoft API. It uses OAuth 2.0 authentication (via Okta) and has been stable.
     - **Challenges**: Brandon considers the most challenging aspect of his work to be the PDF fill module, specifically mapping fields due to inconsistent naming conventions in PDFs from various sources. He has tried to add extensive documentation and comments, especially for Sidekiq jobs, to explain business logic.

---

**Brandon Cooper 12:34:02**
Tell me what you want to know.

**Heather 12:34:03**
It's totally casual, um, it's really just, like, if there's anything, like, that people have questions about, there's been a lot of stuff that you've worked on. Specifically, I'd like to see if there's anything we want to document around PDF generation, because we'll be doing a lot of that for IVC coming up.
so if there's anything that occurs to you that we should remember and keep in mind.

**Brandon Cooper 12:34:47**
Yeah, I was gonna say, I know for the PDF stuff, I know, I think, Derrick, you did a lot of the stuff for the EZR.

I think I did the last bits of it, but I know you did the bulk of it.

I thought, so I know you're pretty familiar with some of that process.

**Derrick Ellerbie 12:35:01**
Yeah, yeah, I started it, Josh finished it, so I'm familiar with the PDF work.

**Brandon Cooper 12:35:05**
Okay. Yeah, and I was… because I had… I had done some kind of refactoring around
some ways we were doing that in the PDF fill module.
Uh, because that's a shared one, but I think, like, 20 forms.
Um, and I do actually have a PR open that kind of added some more documentation around it.
Because I wrote a little rake task that basically can go…
It can get you a really good start for…filling out a PDF.
From a… from data, so I added that. That should be slightly helpful.

**Derrick Ellerbie 12:35:34**
Sweet

**Brandon Cooper 12:35:36**
So, I wanted to call that out.
Um, and then, I guess the other thing is in the va.gov team, I guess I could share my screen?
I do remember when we weren't sure of the status of the contract.
Um, I spent some time there.
updating… specifically, I added some stuff around, like, our Datadog, like, stuff that I kind of keep an eye on and is helpful.

So, there should be links in there for stuff that we Uh, not really monitored, but, well, kind of monitor, but when, you know, when we're looking for stuff, that's where we go.

Uh, there's stuff for the caregivers, and then I think I… yeah, there's one for the easy, I know.

I don't remember if we have one for the EZR, but they're pretty similar.
where stuff is, so… I thought that could be helpful. And again, that's in the… that's in the docs already.
So, it should be pretty easy to find.

**Heather 12:36:29**
For the PDF download thing, the retry thing.
Can you go over that a little bit?

**Brandon Cooper 12:36:49**
Yeah, um, yeah, so I can show… so it's… it's actually really simple.
Um, so we, um, we ran into an issue, so the PDF fill,
uses a gem that uses a library.
that just sometimes when you're filling out a PDF, it just doesn't work.
For various reasons, because PDFs.
are kind of all over the place, and a pain to work with.
So, what we did was, and what we were having is,
Right, because we… for ours at least, you basically… we send the form data,
And then to our endpoint, it takes it in, it generates the PDF, and it returns it.
once in a while, it would do that, it would just die, and then it would be stuck, and they wouldn't get their PDF.
So we were like, well, let's just let it retry a couple times, and then usually, like, I think, because we do log it, and basically every time on the second try, it always works.
So, but… but… so what I did was I made this little concern.
Uh, that we use that is…
Yeah, so you can use it, it's called with retries, and then you can pass in a string, and that's just for the logging, so you kind of know where it is.
And then… and you could actually use it for whatever you want to do, because it just takes…
you know, you can pass in whatever you want to do and say, just do this with retries.
Um, and I think it has an optional
Uh, spot where it's, like,
Yeah, for how many tries you want to do, it's…
It defaults to 3, and that's… we use this for all 3 of our forms for our PDF.
downloads, and it basically just tries it. If it fails, it just catches it, you know, it rescues it, and then tries it again, and then after
If it does it 3 times, then it fails, then it.
It logs the error, and then it actually raises it.

Um, so we do that, and so it's pretty, you know, you just wrap it in here, you pass it whatever block you want, and then it does the thing.
So, and I think… I think you have to import it…
Yeah, just this… include this retryable concern.
So, that's for the… we use it on the 10-10EZ CG.
kind of easier.
So, and that actually uses… I think we originally had our own, but it… er, we used our own logic, but it… we found there's actually a gem called retryable.
So it's basically just a little wrapper for that that just has some… some logging that is kind of handy.
Um, especially as we were debugging it, because we were able to tell when it actually was retrying.
And we basically just found it was totally random.
But yeah, especially with PDFs, that's super helpful. Um, and that's all synchronous.
So it is, like, a little slower.
If it fails, but we figured, you know, I'd rather wait an extra second and actually get my PDF than…
not, wait a second, and then not get my PDF?
So…
That's… that's it.
Or if anyone has any questions on that.

**Matt Long 12:39:41**
Not on that, but I got a question on another thing.

**Brandon Cooper 12:39:42**
Go for it.

**Matt Long 12:39:44**
Uh… CSRF, did you… did we ever get to a point where we actually implemented that on the API retry?
or API request, um…
method, or if that's still local?

**Brandon Cooper 12:39:56**
[Here is the platform api csrf PR I closed in case you ever want to come back to it](https://github.com/department-of-veterans-affairs/vets-website/pull/37573)

It's… so, we… we use it in our form still, and there's a backend
endpoint, so it's not hitting… I think we were hitting the…
what was it called? Like the…
the warning banner or something, but there is a…
So we were trying… yeah, basically we added this controller that just… it doesn't really do much, it just gets… it refreshes the token.
Um, and then this was on the front end.
I'm trying to remember where all that was, but uh…

Yeah, so it's currently being used by ours.

**Matt Long 12:40:29**
But we never got it… we never got it to the global.
Okay.

**Brandon Cooper 12:40:32**
No, I do have… I can find that. I have a PR that was kind of sitting there, because I was having a hard time
confirming it was actually helping.

**Matt Long 12:40:39**
Right.

**Brandon Cooper 12:40:39**
Because we were seeing it, because it was basically, like, right, like…
hey, I'm gonna try this request if it looks like… if it gets, like, an invalid CSURF token, let's try to see if we can just go get a new one.
And see if it works then. But I was finding the only… because I was monitoring our new endpoint when we added it,
This one, and the only one I saw that was ever actually hitting it was one of our…
like, uptime monitors that just hits all the endpoints, and so I don't think it ever actually got called.

**Matt Long 12:41:03**
Gotcha.
Okay.

**Brandon Cooper 12:41:05**
So, I didn't want to roll it out until… but that's also could be that… it could be tech debt if we don't actually use it.
I mean, this is… this is currently could be called from the…
easy, easy RCG code on the front end.

**Matt Long 12:41:17**
Yeah.

**Brandon Cooper 12:41:18**
So there… if there is potential there, it could help, but…
So, I was having a hard time proving it was actually helping it
get better, although I do remember when we first added it with the original, like, way we were doing it, like,
It did seem to cut down on the occurrences of those.

**Matt Long 12:41:32**
Yeah.

**Brandon Cooper 12:41:33**
But I don't know if that was some other change that was doing it, so I wasn't…

**Matt Long 12:41:36**
Okay.

**Brandon Cooper 12:41:37**
I wasn't 100% convinced it was doing what I thought it was.

**Matt Long 12:41:40**
Okay, that's fair enough.

**Brandon Cooper 12:41:41**
So, that's… yeah. So that's where that's at.

**Heather 12:41:47**
We got a big chunk of those on the CG this morning, too, so…
those 403s.

**Brandon Cooper 12:41:53**
And then probably the other thing that's kind of, like, in a not-fully-done state was that…

The form PDFchange detection job.
Um, which was basically, you know, where you can get a monitor for when a PDF version has changed.
Um, so that has a sidekick job.
And it… we validated it, and it seems to work as we would expect.
Um, and it does run daily in staging right now.
And there are monitors set up for staging for forms, which…
The staging data is kind of dated, but I didn't want to turn it on in prod yet.
Um, just because I had been kind of waiting to validate that.

So, I would say…
I guess you guys can decide if this is something that you wanted to try to continue on, or if it's…
Like, because it seemed like there was probably some value there.
But also, I know there was talk of the lighthouse… of, like, the Lighthouse API kind of adding their own
way of doing this, like, basically a callback.
But… but it does have a description.
Depend on what it does for…
the IV's, you know, for the other people who hadn't really seen any of it, basically it…
the… the Lighthouse Forms API, like, so…

To take it to the beginning, right? We wanted a way to notify our team when a PDF
has changed from, you know, Lighthouse.
Um, because we kind of ran into a couple issues. I know when I started, like,
we… we did a change. There was some change in the caregivers PDF, and, like, we were going to update it.
And then we found out that it basically hadn't been updated the last couple times it had changed.
Um, and so when the PDF was being filled out to send on to Karma,
Which is the downstream system it goes to, um, it…
it was a pretty old PDF, which…
I mean, I guess no one had really noticed or done anything with, but…
we were like, it would be nice to have a way for us to know when
those changes happen, right? And…
for whatever reasons those happen. Um, and so this basically was a way that could do that, where
It pretty much just runs every day, and it pings the Lighthouse API.
And they have a thing called a… it's the form PDF Revision.
It's got just a, like, a hash.
That's set for it, and then the idea was to store it in Redis, and then it would check it every day to see if it changes, and when it changes, then you could
You could add a monitor and data dog off of it to notify your team in Slack.
To be like, oh, hey, there's a change here.

So, um, it's currently behind a toggle that is turned off in production, but it does run daily.
and staging, but, like, right now, anyone could hook up into it for a form if they wanted.
And then they would get notified if it got changed.
Um, but if you don't hook up into it, you're never gonna see anything from it, and the only downside right now is it just hits the API once a day.
And it is just one call, because it gets them all at once, and then it loops over them. It's not like…
hitting them for each form, because I think there's about 4,000 forms that it returns.
Um, so, yeah, you guys can decide.
what you want to do with that, if you want to keep it around and try to do something with it, or if it's just extra overhead that…
Isn't that valuable?
But it is not currently running in production.
That's all I'll say.

Any questions on that, or concerns?

**Brandon Cooper 12:45:13**
Anything else?

**Derrick Ellerbie 12:45:18**
I know, um, the caregivers application,
I've never looked at that. Is there anything in there that we should…
look for, um… sorry, I don't have any specific question for you.

**Brandon Cooper 12:45:31**
Yeah, um…
I mean, Mitch probably knows the… like, Mitch and I know the most about that on our team, obviously, because we worked on… as far as the back end.
Uh, yeah, that… probably the one difference between, like, VES is that we… we do… we…
We send the form data,
and the attachments, and…
as one of the attachments, we actually fill out the PDF version.
of that form and send it.
that it's always done that, as long as that's been around, as far as I know, and…
And I don't totally know what all they do with it downstream, but they… they care about it.
So that's maybe the one thing that varies. I don't know how many places do that.
And it uses the MuleSoft API.
There's, like, a step, so we have a psychic job that calls them, and then they also…
have retries to, like, the Carma system.
So there's kind of an extra step that I would say is probably unnecessary, but…
looking at the documentation, it was basically… I think it sounded like
we were told to edit at some point.

**Derrick Ellerbie 12:46:35**
Okay, cool. Yeah, I remember you doing some work with, like,
the tokens, the auth token.

**Brandon Cooper 12:46:40**
Yeah, that uses OAuth 2.0.
authentication. It used to just have, like, a password.
Like, a username and password, but it does that. Um, if you look in the…
There's, like, a MuleSoft, uh…
client code that handles all of that.
Um, but that's in… yeah, the LibCarma directory has some stuff around that, and that's…
Kind of like for the 1010EZ and EZR, where we, like,
we format all the data, that's kind of the models there handle that, getting the attack… it's a lot simpler, I'll say.
Because it basically gets your, yeah, your caregiver, your veteran,
And your attachment data.
Um, and then I think the…
Yeah, because it has these… there's the token client,
Um, and it uses Okta, I think?
To get it, and I think it just caused that in… yeah, and this perform post is the main bulk of that.
But, yeah.
I think it's fairly simple, and it's been pretty…

not had a lot of issues, knock on wood, with it for a while since we…
Did it? Um, I know occasion… I think… when was that?
a few months ago, they wanted to update…
They wanted… what was it?
There was something there we had to update, and we had to do some testing, and I remember I wrote up some documentation, I think Mitch might know where some of that is.
But around this process.
to validate it. Uh, so if it's not in here, it's in the vagov.team.
Or the team-sensitive one.
So, I know I added some helpers in there.
So…

**Derrick Ellerbie 12:48:20**
Sweet, thanks for showing up.

**Brandon Cooper 12:48:21**
Yeah.

**Heather 12:48:28**
If it comes to it, I've got the history on the…why for MuleSoft and all that.
And believe me, it's not. That's not technical at all.

**Brandon Cooper 12:48:43**
Anything else?

**Heather 12:49:04**
What would you say has been probably, like, the most challenging thing that you've worked on since you've been here?
Aside from getting to know everything.

**Brandon Cooper 12:49:15**
Yeah, and then… I must check…
I don't know if there's been one thing that's been most challenging.
Yeah, because a lot of… I feel like…
a lot of the blockers have been the other
our… kind of our stakeholders we're working with.
And the block's there. Like, I don't remember with this, like, OAuth changes, like…
This was one of the earlier things I worked on, and like, we were… they were like, we need to do this soon, and, like, I got it done.
And then we didn't even do it till, like, the end of last year.
There's, like, 6-8 months later.
That felt like a long time to me, but…
Yeah, that's… but I mean, it's really not that complicated. It's a pretty common…

way of authenticating, um…

**Brandon Cooper 12:49:53**
The PDF stuff, I will say the PDF fill, like,
uh… module was… is really confusing at first, but once you kind of get into it, it is…
has a lot of logic in there that is helpful.
Because I know I've seen…
I know some of the… the CHAMP VA, I don't know all the names around that, but I know you guys do some PDF fill stuff.
And it looks like you kind of have some of your… you've kind of… you're using the same underlying engine a little bit, but like…
There might be something to look at to… to use.
the module could be helpful.
But ultimately, it's using the same GEM underneath, I think, so…
So that, that part, just mapping all the fields, is tricky.
Because a lot of times, the…
Whoever is making these PDFs,
wherever they are, like, I mean, they're all probably made different places.
But you can very much tell. They're all generated from different places.
Because all the fields are not consistent for what they're named, like the metadata for them. So that was probably one of the more challenging pieces.
Like, when we added the easy and then the EZR, like, it's… they're…
kind of the same form, right? Like, a little bit.
And yet, some of the fields are totally different.
But that was more just, like…
I hadn't figured out a good way to do it.
Other than just kind of manually figuring it out. Um, I mean, I was trying to, like…
Some of the LLMs have helped with some of that, but I haven't quite figured out a way to really use them.
the best. But…
Yeah.

**Brandon Cooper 12:51:43**
And I did, yeah, I've tried to add documentation for different stuff I've done, or just in the code, like, add comments, um…
I do remember for all of our psychic jobs, I tried to add a big, like, description for what this does, because
Some, like, you want your code to be self-documenting, but sometimes…
It's just hard to do. There's just a lot of business logic in there, so…
I think that's hopefully helpful.
So if you look at any of the sidekick jobs that…
You have, like, they have some pretty big descriptions of, like,
what it's doing, why it's doing it, and how it works.
So, hopefully that should all be all you really need.

**Heather 12:52:21**
Alright, we've got a few more minutes. Anything else, gang?

**Brandon Cooper 12:52:29**
Cool.

**Heather 12:52:33**
Um, okay, well, I mean, you'll be here through Wednesday.
Right? So if there's anything that occurs to the group, um, please feel free to reach out to Brandon until through Wednesday afternoon.

**Brandon Cooper 12:52:37**
Yep.

**Heather 12:52:45**
And then after that, we'll just have to figure it out.

**Brandon Cooper 12:52:49**
Yeah.

**Derrick Ellerbie 12:52:50**
Thanks, Brandon.

**Brandon Cooper 12:52:51**
Yep.

**Heather 12:52:52**
Yeah, thank you so much for your time.

**Heather 12:52:54**
Thanks, gang. See you later! I'll, um, save the transcript and everything for you.

**Brandon Cooper 12:52:55**
Thanks. See you guys.

**Brandon Cooper  1:07 PM**
I also forgot to mention I use this run.sh script locally to run vets-website and vets-api in case anyone finds it helpful. You can pass params to load different applications, but by default it builds the ez/ezr/cg
