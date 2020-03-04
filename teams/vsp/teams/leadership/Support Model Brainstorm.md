# Support model brainstorm

## Problem statement
In our original vision of VSP, the Prod Dev Support team was responsible for all VFS team support and reviews. In reality, the volume of code reviews is exceeding this team's ability to handle and ends up taking about 20-30% of **all** VSP engineers' time (not just Prod Dev Support engineer's time). Additionally, we're benefiting from the expertise of senior team members in these reviews, but spending time on reviews decreases their capacity to move forward on Platform development. 

**How might we structure a Support model on VSP that enables us to support VFS teams in the most effective and scalable way?**

## Goals
- Keep work moving ahead for VFS teams (i.e. don't be a bottleneck they have to wait on)
- Notice red flags and recommend adjustments (i.e. leverage expertise of senior members)
- Don't burn people out
- Don't impede VSP's ability to have time and mental energy to work on the Platform itself
- Allow for easy scaling to support more teams

---

## Rotate reviews across VSP program
_what does this look like?_

- Idea: what if extend the review model we've been using for code reviews Engineering? For design reviews, analytics reviews, etc? That way the Prod Dev Support team wouldn't really have to grow as VFS Teams increase, they can stay focused on building the Platform UX and answering questions in Slack...

- Like idea of involving more ppl in reviews outside of just engineering. We have a set of Design criteria, so that can help normalize how design reviews are done. We could iterate on those criteria to make sure they're solid, and protect against the risk of getting wide variance in review quality, if we go with this approach.

- Meeting Notes
  - Code reviews are easiest to think aouot, but it's really a lot of the other competencies that make really good product. Content, overall integration of global experience, that kind of stuff. It's not just about code reviews
  - The idea of "reviews" was 
  - Expect design reviews (and potentially future product-related reviews) to be part of the product support, and rotating across program makes sense.
  - Implementatino-wise, does this mean ppl would rotate onto the support team? Or just people are expected to take on x amount of reviews per time period? Pulling people off teams to rotate could be disruptive. Or maybe quarterly rotations, longerr rotations.
  - Can different practice areas use different models?
  
### Decisions:
  - Distribute reviews across the program, by practice area, but don't rotate people on and off of teams.
  - Discuss this approach with teams: we're kind of already doing a version of this on engineering at least, what's working and what's not? So we can see what the best way to iterate/codify into an official process might be.
  - Think through importance of "mentor" role still having an eye on things overall (Rian and Anna seem to kind of de facto do this)
  - Do we need a "traffic controller" (i.e. triage for support asks) type of role? How might this overlap w/the Prod Dev Support PM role? Would this be helpful for the team? Does it have to be manual (probably if requests come in through Slack)?

---

## Define robust Prod Dev Support Team mission
_what does this look like?_

Current: *Provide prod, eng, research, design, ato, accessibility support*
New: *Build and implement process and frameworks to facilitate an excellent VFS Team user experience*
New: *Tracking and capturing UX of the VFS Teams*
New: *Owning findability / self-service experience*


- Something beyond just onboarding and answering quesetions in Slack. Something more like creating a delightful e2e user journey for VFS Teams building things w/Platform.

- Meeting notes
  - How can we have it so that others don't feel they *can't* answer questions? Like if a VFS Team asks where xyz design doc is, and the designer who wrote that doc knows best but they're not on the Prod Dev Support team, tehy should still feel able to jump in real quick.
  - This team maybe shouldn't be responsible for writing every ROE, but perhaps responsible for identifying where there are gaps and then collaborating w/other teams to fill them?

### Decisions:
- Eventually want to collab w/the teams under the Experience umbrella to define missions and responsibilities (Charters?!?!?!) that make it clear these teams are not just responsible for doing reviews and answering questions in Slack, but we can't have those convos until we decide how to structure the teams.
  - Add a teeny e2e experience team?
  - Combine some practice areas from existing 3 teams? We'll see based on scheduled upcoming meetings.
  - What has (non-review) support been like across the diffeerent practice areas? Who will become overwhelmed as we onboarding and support more and more VFS Teams? Where do we thus need to add more people?

## Scale through full VSP team augmentation 
_what does this look like?_

- Add Eng talent to other existing teams to help w/code review burden
- Add Design talent to other existing teams to help w/design review burden???
- What about ATO? Analytics? 508? QA?
- Prod Dev Support individuals:
  - Product
  - Design
  - Eng
  - QA
  - 508
  - ATO
  - Content
  - IA
  - Analytics
  - Contact center
- Invest in e2e VFS Team Experience team to design end-to-end user journey
  - Improvements to the user journey to be identified through research

- Meeting notes
  - If we want to be able to support 3 more VFS teams, and we want to improve the UX of building on VSP, and we want to engage in long running continuous improvement of products after initial launch, what are the areas we need to lean into?
  
### Decisions

## Reduce per capita support needs
_what does this look like?_
- Invest in automation
  - Prioritize iterative checks automated tests so teams can catch their own stuff as they go
  - Would love to incorporate content plain language and other practice area checks into automated testing, right now it's mostly focused on code cleanliness.
- Invest in expectation setting
  - Want to see impact of new code review guidelines
  - Should continue evaluating quality of other ROEs and Onboarding
 
- Meeting notes:
  - May need to augment Tools and Ops so that they are able to make more headway on creating tooling and automation to increase Support efficiency.

