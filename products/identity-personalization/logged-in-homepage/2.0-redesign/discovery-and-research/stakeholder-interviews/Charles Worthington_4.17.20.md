# Stakeholder interview with Charles Worthington 4.17.20

### Tell me about your role and what you do in your work on va.gov.

I’m the CTO and I lead the digital modernization council, which is the group of senior VA executives that set the agency’s strategy. As part of that, I helped create the strategy for the VA.gov re-launch. I’ve carved out this space or our team to own the customer-facing (experience/tools).

### How long have you been in this role?

I’ve been at VA since May of 2017. In the CTO role. Prior to that, I was at USDS leading the Product & Strategy community of practice and the acting deputy director of USDS for a few months.

### Who are the people and teams you work most closely with?

A little bit of everybody, I work most commonly with various portfolio leaders: Chris J, Jeff B, Lauren, Andrea, Kevin and Patrick on platform.

### How were you involved with the vets.gov to va.gov transition, as it pertains to the logged in homepage/myVA experience?

When I got to VA, Vets.gov had been around for a little over 2 years and had grown and added products, so it had proved successful in a number of ways — in the concept that the VA could have plain-language focused digital tools that use modern practices. All that was proved out by Vets.gov. What it failed to do was that Vets.gov was supposed to be the one tool veterans would use and it would unite products and be a one-stop shop. Practically speaking, it had not done that. There were very few things that had been deprecated – it was just a new thing instead of Vets.gov replacing [all the VA tools]. One of the problems we saw was that Vets.gov had a good version of the tools, especially applying for benefits. But for every 1 person that saw the Vets.gov version, 5 people saw the bad VA.gov version. So we weren’t winning that. We were adding features to Vets.gov but we weren’t adding users. We didn’t make a lot of progress on the “one” part of the goal.

Also, by talking to veterans we learned that the Vets.gov brand wasn’t really resonating with people. But everyone said “yeah, VA.gov” — they expected that would be the one place to go. So we said why don’t we rebrand Vets.gov as VA.gov, so we took it over.

### The current homepage has top tasks. Did you find that helped with traffic?

Well I think the main goals we had was to increase the use of self-service tools, so I think orienting the page towards top tasks makes sense. People are coming to VA to do a thing, and so many of things they are coming to do, the top tasks are a way to get them quickly to that.

But the original designs for the relaunch, we had login front and center. If you look at any fortune 500 company, they are trying to get their existing customers to login and trying to sell services to new customers. But we’ve never had a logged in experience that’s warranted putting login front and center.

### What problems have you noticed about the current logged in homepage and myVA experiences?

I think one of the challenges is that the VA.gov doesn’t have enough of the backend integrations to be able to put together a comprehensive thing. Like when you log into your bank, you see a summary of your stuff. VA.gov dind’t have enough of the backend integrations to show you all your stuff when we launched. But now we’re getting closer. Disability rating, did their check get deposited? (We no longer have health care tools), so some of those things we don’t have yet.

Also, the design system itself was mostly designed for forms and also for content, and it doesn’t lend itself super well to a more information-dense interface when you see a dashboard, IMO. I don’t exactly know what to do with that, but that may be something we are struggling with, too. We are trying to work within our design system and trying to make a complex form/content feel simply, where as if you are trying to see (an overview of your VA stuff) you want to see something more information dense.

### Can you tell me more about what you mean by information dense?

I think it’s more the typography and the design. If we were to say here are (a bunch of tools) in our current design system, that would imply a super long scrolling page. In most logged in dashboards, you’d see more in a smaller amount of space.

The trade off there is that implies a lot more complexity, so we’d have to balance those things, but idk that we have done the hard design work to (make the design system work for authenticated tools).

### What are your goals for a new logged in homepage experience?

There is some number of people that come to VA.gov a lot, a couple times a month or once a month. IMO, the goal of the logged in experience is that those people are having a really awesome experience. Idk all the things they are doing. Once we get RX and secure messaging, they’ll be doing a lot of that. Making it awesome for those people is what I think the goal would be,

There are interest product areas we could explore around recommending benefits to people. So the concept of onboarding somebody new, heling them figure out “this is the info we have on you, is this right?” I think this is an interesting product area to explore with the logged in experience. We may be getting close enough with the backend integrations where we could put an interesting blurb of JSON in the profile. Even now, we don’t have all the backend integrations we want, but now we have a lot of information, if we could pull all the info on who they are and go to town and have a design sprint, it would be interesting to see what we could come up with.

Rated disabilities is pretty new. VA Profile, some of it is new and some of it we had.

### What does success look like to you? How would you know this project has succeeded?

I would say the north star goals are more self service usage, more satisfaction, and faster use of services. You’d look to see it doing more of those. In some ways, checking your dashboard might be a service that is a transaction we could start measuring. It’s not exactly like checking your claim status. If we saw a behavior of a lot of people came to VA.gov, logged in, and looked at this thing, and we saw that growing, I think that would be a pretty good indication that this is working.

### What metrics would you be interested in seeing around a logged in homepage?

Mostly boils down to those three. More self service interactions. Maybe someone comes to this page and it encourages them to send more messages to their doctor or engage in the Annie app protocol. 

I have become pretty convinced that a native mobile experience to at least some number of veterans. Just thinking of my own life, I use the BoA app instead of going there on my phone. So if you imaging that’s true for users who are coming to VA.gov a lot, I think the main features of a native app would be the same features as this dashboard. If we had this dashboard, it would be the same features as the mobile app.

### What is the relationship between the dashboard and mobile app?

I think most likely, the logged in homepage and the first screen of the mobile app would be similar. (Example: BoA).

### What logged in homepage/dashboard experiences have you come across that work well, and not so well? How about notifications?

BoA, GEICO, USAA.

### What other impacts to the logged in homepage have to your work?

You would create a new property that I would fight to maintain. There would definitely be a lot of ideas coming out of the woodwork of “oh, I need this new thing on the logged-in homepage.”

I think it would make the mobile thing more feasible. Maybe it would make it less important to have a good mobile experience, but I think they could be very complimentary.

I guess we didn’t talk about this, but the concept of this… not a newsfeed but there are notifications that imply you should take some action. Right now, we don’t really have a good place to put those on VA.gov.

There is another category of “your mail.” We could have a copy of everything that the VA sends to you. That feels like another personalized feature you’d get to by logging in to the website.

Another success metric would be that people log in first and then go to the tool instead of going through the top tasks would be an indicator that that pattern was more successful.

### What concerns do you have about this project? What do you imagine going wrong? 

The difference between profile and dashboard… they are two different things and it doesn’t make a lot of sense. 

I would also be really keen to just see us try some stuff. It’s possible we could make a very awesome dashboard based on what we have today. I would love to do something fast just to get people excited. I would love to see a design sprint with different designs that people have come up with. I think it would be fun. I would love to see more fast iterations and the willingness to push out something and then tweak it.

### Would it be safe to say one concern you have is one of speed, and that things wouldn’t happen quickly?

Yeah I guess so.
