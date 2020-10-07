# Problem

Veterans have trouble navigating the VA to discover the full scope of services and benefits that might be available to them, which can result in veterans going without benefits they need, want, and deserve for months, years, or indefinitely.

This is due to:

* The VA not providing adequate benefit education to veterans.
* Veterans not knowing where/how to start research. They don't know what they don't know.
* The sheer volume of benefit information out there, which makes it hard to identify what's signal vs noise.
* Benefit information written in the VA's internal business language,

# Solution

Simply, we want to make benefits more discoverable on Vets.gov (and then VA.gov after the merger).

## The "dumb" way to to do it

The easiest and simplest solution would be to put a list of benefits on the logged in homepage for Vets.gov, or to highlight the most popular benefits on the homepage (ie. disability, healthcare, education). It's worth noting that the logged out homepage for Vets.gov already lists benefits base on popularity, and this list of benefits carries over to the Vets.gov navigation regardless of whether people are logged in/logged out. On the logged in homepage for LOA1 users, we already show the most popular benefits.

![LOA1 dashboard](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Dashboard/Design/Dashboard-05-LOA1.png)

## Making it personal

Of course, showing a list of benefits with no other mechanism by which to "filter" them lacks **personalization**, which is why we're all here. How can we elevate benefits in a way that feels personalized to the veteran who is logged in to Vets.gov?

Based on our conversations as a team, we've come up with three different ways we could personalize results:

1. **Interest** — What is a veteran interested in learning more about?
2. **Enrollment** — What can we elevate to a veteran because we know they don't currently take advantage of that benefit? And what can we elevate to people *because* they are enrolled in a particular benefit (eg. maybe someone should apply for an increase in disability compensation because their symptoms have worsened)?
3. **Eligibility** – What can we suggest to people based on what we know they are eligible for?
  * **Expiration** — Calling this out since this specific piece of eligibility has consequences that other criteria don't. What should we elevate to a veteran because a particular benefit has a finite window during which they can apply? 

### Sidebar: Why eligibility and enrollment matter

Given that the biggest problem seems to be people knowing — or rather, not knowing — about benefits, why do eligibility and enrollment matter?

The TL;DR is that showing enrollment and eligibility information (at least, some level of eligibility) are elements that are part of a fully personalized logged-in experience. Regardless of whether we tackle enrollment or eligibility as part of benefits recommendations or not, our tool shoould be able to show people what benefits they use, important metrics around those benefits, and make meaningful suggestions about what you might do next — just like your bank shows you what credit cards you have, your monthly bills, allows you to pay them, and might suggest other credit cards or offers for you based on what they know about you.

So, while eligibility and enrollment don't *have* to be the starting point for a benefits recommendation MVP, they are part of a larger holistic personalized experience and they *could* be metrics that help communicate benefits people might be interested in.

## Idea 1: Make suggestions based on people's interest

**How this might work**

When someone logs into Vets.gov, we ask them what benefits they are interested in learning more about. Then, we elevate information on those benefits.

![Interest sketch](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Sketches/Benefit%20recommendations%20sketch_interest.jpg)

**Pros & Cons**

PROS:

* Technology — We wouldn't need to access any new information in the VA-sphere to do this.
* Users – This is a meaningful way to help elevate information, give users a meaningful place to start research, and help reduce signal vs. noise issues. Furthermore, I'd hypothesize this would help build trust/good feelings because it communicates we care what people want, which the VA basically always operates in a way that is the exact opposite of that.
* Timeline — Since we wouldn't need to get access to new systems, there shouldn't be any blockers.

CONS:

* Technology — Vets.gov is not a system of record, so we'd have to figure out how to store people's preferences. To be fair, though, this is something we'll have to work on anyway as part of personalization at some point for things like notification settings or any other preferences.
* Users — I don't see any big downside for users. The only thing I can think is that this information would become meaningless if it sat for too long, but that shouldn't be an issue if we continue to develop this tool. Possible risk, though.
* Timeline — It may take us some time to figure out how to store preferences. Or not. I don't know.

**Questions**

1. How easy/hard would it be to store people's preferences on what they are interested in learning more about? Do we think this would be a significant blocker re: timeline?
2. What kind of information would we should if users told us they were interested about XYZ benefits?

## Idea 2: Make suggestions based on people's current enrollment

**How this might work**

When someone logs into Vets.gov, we show them what benefits they are enrolled in and which ones they aren't, and ask if they have any interest in learning more about/applying for benefits they don't have.

-OR, even simpler-

When someone logs into Vets.gov, we show them one or more benefits they don't have and ask if they have any interest in learning more about/applying for them. 

![Enrollment sketch](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Sketches/Benefit%20recommendations%20sketch_enrollment.jpg)

**Pros & Cons**

PROS:

* Technology — To the best of our knowledge based on our tech discovery so far, we CAN figure out what people are enrolled in, at least for some of the benefits in the VA universe. Also, this is something we'll want as part of a holistic personalized experience at some point, so this could be a good opportunity for exploration.
* Users – This is a meaningful way to help elevate information, give users a meaningful place to start research, and help reduce signal vs. noise issues. Furthermore, I'd hypothesize this would meet user expectations for what a personalized experience should be. You SHOULD be able to see what you are already enrolled in and comparing that to what you don't have could be a meaningful place for people to start research.
* Timeline — Design-wise, this is pretty straightforward and design could happen quickly.

CONS: 

* Technology — We don't currently have access to the enrollment systems we need to have access to pull this information.
* Users — I don't think this has a big user downside.
* Timeline — We don't know how long it will take to get access to enrollment systems.

**Questions**

1. How easy/hard would it be to get access to enrollment systems (even for just one benefit)? Do we think this would be a significant blocker re: timeline?

## Idea 3: Make suggestions based on people's eligibility

**How this might work**

When someone logs into Vets.gov, we show them benefits for which they may be eligible based on what we know about them from various VA databases.

-OR-

Through a combination of user-answered questions (like on ExploreVA) and data we know about people from various VA databases, we suggest benefits based on what people might be eligible for.

![Eligibility sketch](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Sketches/Benefit%20recommendations%20sketch_eligibility.jpg)

**Pros & Cons**

PROS:

* Technology — Based on technical discovery, we do have access to some eligibility-related information.
* Users — Like the other options we've listed, I think this solves for some of the high-level problems listed above. I would also hypothesize that this kind of functionality would communicate to users that the VA is trying to do some of the work for them, instead of putting all the work on the user.
* Timeline — Design-wise, this is pretty straightforward.

CONS:

* Technology — We don't have access to enough information to definitively say people are eligible for benefits, and we would require some user input. 
* Users — We would need to be careful not to imply that our eligibility results are the be-all-end-all since people could potentially be eligible for more than what we're showing them.
* Timeline — We don't know how long it will take to get access to eligibility-related data.

**Questions**

1. How easy/hard would it be to get access to eligibility data (even for just one benefit)? Do we think this would be a significant blocker re: timeline?

## Idea 4: The ideal state: Combining interest, enrollment, and eligibility into one

**NOTE**: This is a future state, and not where we'd start with the MVP. But it seemed worth it to take a look at where we could go as an exercise to make sure we're starting from the right starting point.

**How this might work**

When someone logs into Vets.gov, we provide a fully personalized experience. As part of this, you can see what you are enrolled in, what you are not enrolled in, and different eligibility criteria you meet that might qualify you for that benefit. Furthermore, you can customize what you see by getting reminders to apply for benefits you are interested in or hiding benefits you're not interested in.

![Ideal state sketch](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Identity/Personalization/Recommendations/Discovery/Sketches/Benefit%20recommendation%20sketch_future%20state.jpg)

**Pros & Cons**

PROS:

* Technology — We should be able to figure a lot of these tech problems out over time.
* Users — This would be the foundation for a fully personalized dashboard for veterans.
* Timeline — ???

CONS:

* Technology — Obviously complicated and combines all of our tech-related problems into one scenario.
* Users — None, this would be a magical experience (but one that we should test and verify thoroughly).
* Timeline – Might take a million years (jk jk but this is a long term vision and we need to be realistic about that).

**Questions**

1. Is there any way we could include elements of all three personalization areas (interest, enrollment, eligiility) into an MVP that wouldn't take forever to build? Should we even entertain that idea?

# MVP Proposal

Given all of the above, here's where I think we should start:

1. Pursue the "tell us what you're interested in" route.
  * Meets user goals/needs.
  * Meaningful place to start with this feature, since future iterations would likely have an "I'm interested/not interested" component.
  * Great way to start researching how to handle user preferences
  * Lowest technical lift.
2. Given that this proposal ends up being much more frontend heavy, backend could use this time to further explore enrollment information that we have/could get and related data points.
  * If we were to do this, we may want to have some preliminary high-level conversations about where personalization is going in V2 and how we might use enrollment information long term.

# Next Steps

1. Put together some higher-fidelity paper sketches and show these to veterans to verify direction and get some insights into how we should handle user preferences.
2. From there, start refining direction and start figuring out technical implementation.
