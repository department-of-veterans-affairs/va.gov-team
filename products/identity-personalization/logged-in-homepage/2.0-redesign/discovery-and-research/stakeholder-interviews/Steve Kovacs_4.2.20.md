# Stakeholder interview with Steve Kovacs 4.2.20

### Tell me about your role and what you do in your work on va.gov

I am leading a team dedicate to eBenefits transformation… do you know about eBenefits? It was really the first unified place that veterans could go and do transactional stuff. The first code was shipped about 15 years ago. It’s showing its age. One way it’s not great is it relies on DS Logon, which is down constantly. It’s a huge blocker for veterans getting in and doing transactional things. SO getting tools on VA.gov so it’s the front door. We are taking tools off of eBenefits, working with veterans to see if those tools wok correctly, then moving them to VA.gov. We are working on dependency claims right now. We are expecting to have a shot of moving everything from eBenefits by the end of this year.

I also just took on trying to shepherd SSO over the finish line, so that’s the other thing I have been doing.

### How long have you been in this role?

In September 2019, we spun up the eBenefits team. But I’ve been at the VA since October 2017. USDS since December 2016. Went from Dept of Ed  White house  VA.

### Who are the people and teams you work most closely with?

The identity team is probably someone you’ll want to track along with. My understanding is that they are not just going to look at identity per se, but also roles and relationships. I think it’s safe to say that a dependent child or POA or caregiver logs in, it’ll be different than a veteran.

### How were you involved with the vets.gov to va.gov transition, as it pertains to the logged in homepage/myVA experience?

We did some things like site search and other supporting roles for the Vets.gov  VA.gov transition.

Basically, Samara and I were running the personalization team that launched the first version of the personalized experience. What we launched was the dashboard, profile, and account page. They didn’t exist before. The idea was the profile was the place where we show you everything the VA knows about you, the Dashboard is where we show you everything in flight, and the account page is where we show you different relationships.

### What problems have you noticed about the current logged in homepage and myVA experiences?

Well I don’t interact with those products too much these days, but I think the My VA page has sort of become or has the capacity to become a dumping ground for loosely connecting features and don’t tell a cogent story of what the veterans are doing at the VA. At initial role out, it was just “we have access to these things” and we worried about telling the story later. When you have a 360 view of what people have in flight at the VA, it could be 0 things for someone who just left the service, or 50 things for a Vietnam veteran.

### Can you share eBenefits road map?

In our repo, we have a document that’s “roadmap impact on personalization.” There have been some updates lately, but I think it’s a good enough outline.

https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/ebenefits/roadmap-impact-on-authd-exp.md

The thing that has been shipped recently is their rated disability and total disability rating. At the VA, your total rating is something some many benefits key off of. If we know your cohort and your rating, we can determine eligibility for a lot of things.

(Described Your Dependents feature that’s coming up) All veteran benefits descend from DoD, so if your dependents aren’t in DoD systems, it can complicate things down the line. You have to let the VA know about your dependents so they can get on your awards. Our research show veterans get that this isn’t all their dependents and only the ones the VA needs to know about.

After that, payment history — all payments VA has made to you. After that is POA, so your representative. Again, POA has a special meaning at the VA. It’s someone who helps you do claims and appeals.

Between this and next quarter, 1) disability rating, 2) list of dependents, 3) payment history, and 4) whoever is your current POA.

Is this list comprehensive of what we’d need to accommodate for a dashboard/logged in UX?

Idk, that feels like a more over-arching service design question. There is no shortage of information we could provide. It’s a matter of what they need to get to. I could see that if someone has a lot o payments/dependents/etc, it may not make sense to put them all together.

How would an update to the logged in homepage experience impact your work?

I think for us it’s kind of inverse — the more stuff we ship, the more it impacts your work. We’re moving these tools over. As we understand what kind of info is available through these tools, they will need to be consumed by personalized experience and other teams.

### What are your goals for a new logged in homepage experience?

Yeah, my goals are the veterans goals — amplify the veterans goals. If we have a sense of veteran top tasks, we should anchor their experience in those top tasks. This mix of showing this veteran what they are eligible for with what they know about them, and as close to “single button pushes” to get those benefits, is one of the most important things that we can do. 

Even though the VA thinks of itself as lines of business and admins, the veterans don’t think of it that way at all. One of our jobs in the personalized experience space is to eviscerate these divisions. The VA tries to push those divisions out onto the veterans. The personalized experience should be to do away with those affordances because they are fake affordances.

Veterans — “I need to get the benefit to live my life so I can live my life and my family can do the things we need to do”

### What does success look like to you? How would you know this project has succeeded?

The real great thing about. A logged in homepage is where people can really begin tasks is that it becomes top of funnel. “I’ve arrived on this homepage — what do I do next” think all the metrics around application starts through application completion through benefit delivery… I would love to see something like a session leads to benefit discovery which leads to application which leads to receiving these benefits. It’s about improving benefit discovery or workflow of some kind. 

### Can you say more about measuring benefit delivery?

We don’t handle that process. We’re the front door, we don’t deliver the benefit. We help them understand it. Very often, an application will just go into a mailbox and then someone will type it into their database and then that leads to snail mail. That thing where someone learns about a benefit and then gets it is something we don’t know because the lines of business don’t have good metrics and we don’t have access to (what they do have). 

But you know, 20% projects where we can build up relationships to find out these things would be super helpful.

### What metrics would you be interested in seeing around a logged in homepage?

We’ll move dependency claims over to VA.gov and it’ll exist on its own as part of the disability hub. As all our tools do, they exist as these tools in these hubs. How this unified and personalized experience dries people to spokes, or how it triages benefit discovery… again I think it’s usual top of funnel metrics. “I have a person here, what are they doing?” if they are not doing anything meaningful, what can we do to get through to them?

### Can you talk more about eligibility/logged in flow?

Specifically, around eligibility at the VA, which is such a white whale and it’s so hard to get enough info to really determine eligibility. This is why we ask for so many of the same information in different forms. An ideal state for me would be one click applications to every critical benefit. Like VBA has this handbook that details all the benefits on the benefits side of the house. There are 120 possible benefits. If we could make real eligibility determinations and say “hey, here are the top 30 things” and the veteran can say “I want that and that and that.” We should get as close to automatic enrollment as possible. We should never ask the veteran for anything. This should be about helping the veteran finish tasks. 

Sometimes, the act of showing the veteran the truth of their thing is helping them to complete something better. The status is part of a task workflow. No one is logging in to see that their middle name is correct. They’re doing it because they were (denied something and need to resolve it).

### What logged in homepage/dashboard experiences have you come across that work well, and not so well? How about notifications?

There are essentially two internets — one is the logged in one and one is the not logged in one. I think things move out of best in class pretty rapidly, so I’ll have to think about that.

### What might make this project easier or harder in any specific ways, as it relates to your role on va.gov, or your team?

### What concerns do you have about this project? What do you imagine going wrong?

Taking an iterative. I’m sure that one of the states we are currently in is that we will show veterans incorrect information as long as we interface with legacy information. Across government, we are storing different versions of people. The VA is no exception — we have the wrong name, DoB, etc. As long as we trust partner systems, we will show the veteran the wrong thing. I’ve always said this was a good thing, to show the veteran the lie (because then they can go on a path to fix it).
