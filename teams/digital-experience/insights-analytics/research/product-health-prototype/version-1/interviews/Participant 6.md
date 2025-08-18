# Participant 6 Thursday, June 20, 2019 2:00pm EST

[Intro and logistics setup]

- Before we start, I want to take a few minutes to ask you some questions.

- Can you tell me a little bit about yourself? (Role at DSVA, what product do they focus on)

  - Yeah I'm sort of a product owner, we all are here. I guess with… I'm half UX and half Product. I'm sometimes the person who has to maek a final decision or make a vision, but sometimes someone else does those things. Lisa is a new team member, she is a product/acct manager for the personalization stuff. So now she is in charge of that, but when we didn't have a PM, or even when we did, we worked together to set the vision and oversee things.
  - I was less the PO last year for personalization. When Mina was here and then wasn't, for the health care work I was definitely the person overseeing that stuff doing design and producty stuff.

- Were there any metrics you wanted access to?
    - Yes there were probably metrics I should've checked if I'm being honest. I'm glad Analytics are a thing but I can't navigate GA at all. I'm happy to work with someone who can but it would be nice if I didn't have to do that stuff. Should we have metrics? Yes. Do I know how to go to them? No. I feel like that didn't really answer your question.

- Layla: I'll just show you the prototype and you can give me your interpretation of it. I'm going to give you control of my mouse. There's kind of a delay but it should ask you to take it over.

- [Screenshare and mouse control set up]

## First task: React to Education Product Health Analytics dashboard

Okay, I am going to ask you to open the Education Product Health Analytics dashboard by clicking the other tab.

- Take a moment to scan this page, and tell me what you're looking at here.

  - [Scrolling up and down the page]

- What is the purpose of this page?
- What do you think you can do here?
  - I like that there is a live status. I think that's kind fo cool but I'm not sure, unless there is some kind of notification built in, I don't know how useful that would be here. It's like… before you saw this you would know if something was down.

- How would you expect to find that out?
  - I have no idea. We get a complaint or something, but I have no idea. Thinking of a product compnay like google that has a massive status page… I would hope that if Gmail goes down, their engineers are getting pinged about that. I would hope that an application or theEDU form at the VA, it would be importnat that there be some sort of email that lets you konw there is a problem so you can handle it ina  timely fashion. From a technical perspective I don't know how that would work.

- As a PO, how would you prerfer to find out?
  - Quickly. Anything. Smoke signals as long as it is fast to my face. Slack could be good, especially in a channel where other peole who can fix it, it's visible to them.

- What about these diffeent statuses? What do they mean? (The Current status col)
    - Active means there are no current problems, its lie on the site, apps are going where they are supposed to go.
    - I'm not sure what Warning is. Potentially because I"m not familiar enough with the space to say. That may be language that might make sense to a developer or something, but for this case I'm not really sure wha ta warning is.
    - For maintenance, there is known work going on. Stuff is down but it was planned. An upgrade to Rails 5. We've posted about it on our site, we don't need to be concerne,d this is an expected down time.
    - Down I would assume it is offline and we didn't know it was happening. Oru site is down and you can't access the app. Depending on asynch or synch is possible, maybe there is something down between FE and BE. Maybe FE is up and they can access VA.gov but they can't submit, or it would be lost if submitted.
    - Disabled I would assume it meant something was initially down but indefinitely. For some period of time longer than doing maintenance. We've disabled this tool - we had to take down the pension application for some reason I can't remember. It will go back up someday but it's not a temproary outage.

- And then… So just by looking at the page, can you tell which product might need the most attention?
    - Yes I would assume the one that's down, form 5494 since it is down. This sounds like it's not planned. The 1990 might be the next one since there is some sort of warning. But it might lead to soemthing that goes down.

- As far as looking at weekly product health, which one has done the best or worst?
    - Sure let me take a look. [Scrolls]
    - Ok there are a lot of numers… If I had to go by just the success… I guess I have to balance the Success and Error rate. It says GIB Tool is disabled but there is a success rate. I guess it depends what you mean what di dthe best. Does success vs error… Oh there is a conversion column, is that what you mean by best?

- I just mean best from your perspective. 
    - I would imagine… I guess it depends on the angle. A 50% conversion for the 1995 form would be huge. That would be the best. Everything in terms of success rate, besides the stuff that said zero percent… Profile viewed, form 0993. I don't know what that is. Maybe no one used it that week? Do I really need to choose between the 0.99% differences? That seems like a wash.
    - I will be straght up, I don't get the difference between total and unique events. It's all confusing. Really, I'm not an analytics person. [Talks it out]
    - I think if you mouse over the label it gives you a definition.
    - [Mouses over]
    - Oh! Okay. [Mouses over all of them]
    - If there was a massive success rate for something like 50%, that would be good. I would start looking at conversion and total events...

- What do the symbols mean to you?
    - I have no idea at this glance. Maybe that is part of the key. [Scrolls down]
    - I do not know what those symbols mean.
    - Maybe the stars mean this is an especially good thing to take note of. 
    - Maybe the hexagons mean… Are they octogons? Maybe this is a problem area.
    - The diamonds… I don't know.

- If you scroll up to the top, there is a legend.
    - Ohhh! 

- How would you guess those are being set? Or how would you want them to be set?
    - I would hope that… This is coming from someone who is not an analytics expert. I would imagine you would want to set the metrics yourself. Maybe for some things, a 10% conversion is really good and high. I don't know how it works with our forms, you see that in the private sector. For something else, 10% might be a terrible conversion. I would imagine you would set them yourself.

- What do you think aout the other metrics across the top? If you scan over to the right? What do those mean to you?
    - Let's start at the beginning. Call volume… maybe people calling into the call center about it with questions, i'm not sure.
    - That probably isn;t what that means. I have no idea what it means.
    - Time to completion… The average time it takes people from start to finish to fill out the form and submit it.
    - Offline vs online to benefits receipt… Is that something like, "Okay maybe it takes me literally 20 min to fill out the application but it's been a year of putting together disability paperwork" so balancing that out?

- The time that it takes to receive the benefit. Submitting it online to doing it the paper route.
    - CSAT… [Mouses over] Oh cool! I didn't know what that was until I moused over it.
    - Point of entry… [mouses over], yep okay.
    - Deploys, maybe that's the last deploy? Yeah. I guess I don't know… this makes it sound like there could be multiple deploys. Having just wondered if it was the most recent one. I know this is mock data so maybe that wouldn't be the case.

- What are the top 5 things you're interested in seeing?
    - I'm going to caveat this that I'm probably not the person who would be actively manage this stuff. I would recommend you talk to Lisa, a new product manager who could give you better insight.
    - From a UX perspective, I would be interested in some of the stuff that is filled out like success and error rate, conversion, unique events
    - Someone else more in the weeds would have other priorities.

- Would you ever feel like you'd want to see more detail about any of these and be able to drill in?
    - Probably, but as someone who is not super savvy with analytics, I would have trouble telling you how.

- Do you know what you would expect to see?
    - No… I think I would want it but I'm not sure how it would work.

- I am going to switch over to a color coded version.
    - [Switches tabs]
    - [P6 scrolls]
    - I don't think the colors are necessary in the status area. The symbols are fine. I don't really need symbol and word and color.
    - Down here though, [weekly and monthly] I find it to be a little bit clearer. Just because my brain is saying that's clearer to me than the symbols. Mostly with the stuff that is red. With the blue, I wonder if I would feel the same way if I didn't know what it meant.
    - The red feels more clear.
    - I perfer the highlight, it's not the most scientific.

- Just for kicks I want to show you our emoji version
    - YES! All the millennials are like, "Launch this one!"
    - It's adorable. I would be so confused but I'm obsessed with it.
    - This would make GA so much more fun.
    - I actually really like them here.
    - I legitimately like them for this!
    - I feel like it's kind of mroe clear than some of the other ones. I'm not sure I feel the same way abou tthese guys (status), like what is happening here? The ghost?
    - What is that?
    - Can I zoom in?
    - I guess this is the size it would be. Stuff is a little small. It's less clear up here in the status… it's so great.
    - It really works for the keys. I don't know what other people say but I'm into it.

- What do you like?
    - It most clearly communicates what the things mean. It's a little biased because we've talked about it already but I get that thumbs up is good. 
    - The warning face is good, the neutral face is the one in the middle

- Do you feel like you would have to look at the key?
    - No. Maybe you woul dhave to the first time, I don't think you would have to because there aren't that many symbols or colors. So low barrier to entry/learning curve.

- My last question is, if you had a question about something on here, who would you ask or what would you do?
    - I would ask whoever designed this.

- Did you notice a way to contact anyone?
    - I had not yet noticed, but my movement of the cursor has been all over the place
    - Ohhh the slack channel! I rpobably would've noticed that. I maybe would put that up top to syay if you have questions.

- Do you have thoughts about where you would access this? It prob wouldn't be google sheets, but curio sif you had ideas of where it might live in light of all the tools you use.
    - Yeah we don't have access to Google sheets which is annoying and really dumb
    - If there is stuff where I could drill down, I guess it would be more of a web tool. The content, maybe… a hyper link to a form. If you can't do much with it except get the raw data, an excel output once a week would be fine.

- What do you think about this being public-facing?
    - I have no idea. I don't know enough. More what I'm concerned about is less.. Veterans and more internal VA. Is there someone who would go crazy over this? I don't know how that would play out.
    - People in this org are all over the place, so it could go over well or it might not.
    - I don't know either way. I would keep asking that question.
    - I don't do a ton with analytics, which isnt good. Talk with someone like Lisa Koening and she will have thoughts on this because she has probably dived into analytics more than I have.
    - Having access to it without going into GA would be cool.

[Wrap up]
