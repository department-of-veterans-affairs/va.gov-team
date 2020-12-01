Mural from initial connections discussion: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1604425871513/f507ccb413e15144028d2563d91b75b7a8a5f92a

# CMS

- Any plans for Q1 planning?
  - Not on CMS side
- I don't see any OKRs around around ensuring the quality of content produced via the CMS. Is that a part of the mission? (That necessary friction for editors that we've discussed in the past?)
- Does the vision for the evolution of the CMS product include modularizing content so the same source content can be served up in multiple locations? (mobile, FAQs, chatbots, etc)
- If you look at the proposed DEPO Platform mission, how do you think the CMS does/doesn't align? What parts of the proposed mission feel off given the mission of the CMS product?
- What is LC? It's Learning Center, which is now Resources and Support
- Who does CMS define as a "user"? Do you use the word "customer" for anything?
  - customer = VFS Team (like public websites team for example)
  - user = editor
  - customer framing is tough bc customers are usually entities that pay for a good or service, it's an imperfect term
- How might we create a streamlined process between a single source of truth for a design component and changes or additions brought about by content model changes in that component?
  - In Q1 could we look at a content model change that resulted in a design change?
  - Sounds like as VFS teams have new needs, the editing experience is built around that. The VFS updates drive decisions about what design components are used to present those, and they differ from the designs for the same components in the Design System.
  - Design System is always in motion, as content needs are defined by CMS team they're eval'ed and worked in.
  - At min need awareness so if something is happening in a content model that would affect a design component, we're aware of that
  - In order for CMS and content model and components in CMS to be effective, it needs less flexibility at the design system implementation level. Need to re-use this thing, and if we need to enhance it for some reason we can, but everyone's using the same thing. But the Design System isn't built that way, it's not like "I need an FAQ page, or a search result box" but it's the elements for that thing that are available. Design System is meant to be intentless and stateless.
  - VSP folks have defined governance around variance, CMS has done a thing called Child Systems (child design system based on healthcare.gov based on CMS design system). Maybe we could use the child system model to create a CMS Design System and technical solution is if we use web components w/highest level def of component, we could create sub-variants and it wouldn't be react specific or anything like that.
  - Could we explore having a child system / web components idea (or other idea to same problem) to value matrix and discuss in both CMS and VSP Q1 planning
  - Have Design System team do a regression audit on tables on public content
  - Explore how to "ship it to everywhere at once" idea for new/updated Design System components
  - "Greatest hits list" to coordinate across VA.gov experience (incl public content)
  - Invite Oksana and David into planning rituals for teams who'd be most 
  - CMS team has communicated that it's a challenge that the govt isn't telling them what the priorities are
  - How can we agree on the priorities?
- Collab cycle: how do we treat that for unauth teams?
  - Collab cycle (for PW eg) makes them caught in a position of doing collab cycle w/2 different teams. One for CMS and one for code, design, etc. Need content model updated, transformer updated. If we want CMS and VSP closer, need collab cycle for unauth teams to have steps for CMS needs.
  - Platform owns the relationship of teams trying to build things on VA.gov, and CMS team is almost in the way sometimes of Jen shipping something.
  - Kev Walsh + Kev Hoff have mapped out collab cycle and slot in where CMS might fit in, also KH has segmentation research
- How can we better coordinate? It shouldn't be up to eng on the 2 teams to determine priorities

## Action items
- [ ] Get that mapp from KW and KH to the Collab Cycle team, and schedule follow up meeting about CMS collab cycle steps we want to try out
- [ ] Align on consistent terms/language across teams (user, customer, editor, end-user, VFS Team, etc)
- [ ] Rachael meet with Jeff Barnes, Oksana Cyrwus, and David Addison to coordinate Q1 planning
- [ ] Rachael schedule follow up with Kevin H and Jeff B to better define possible CMS/Design System/FE Tool initiatives prior to roadmapping

## Initiatives that would need cross-collaboration
1. Web components
1. Parent and child design system model
1. A “ship it to everywhere at once” feature for new design system components
1. A “greatest hits” audit + revision initiative to make content and react experiences consistent for top priority parts of VA.gov 
1. Full site preview functionality for content editors
1. Broken link prevention and resolution
1. Redirect strategy
1. CMS-related VFS interactions in collab cycle

# Chatbot

- Is Chatbot in fact a VSP product?
  - It's something that just sort of happened, was there an evaluation as to why it's VSP vs VFS?
  - It's a Veteran-facing tool
  - We would want VFS teams contributing to it (as in as they launch products, if it makes sense to have support for theirproduct through the chatbot)
  - We don't know yet how it's going to grow and eveolve, and in what situations it'll be the most helpful
  - Contact Center work has been mostly platform, bc the delivery of contact center data and that coordination is more helpful through the platform hub
  - Chatbot may not fall into that place
  - This may be a platform produc if the chatbot will be trained in a specific way to answer things if it's on the Health Care Application vs the Home Loan page for example, because then it would be more of a component that VFS teams may want to use in their solutions.
  - Dennis would think of this as a platform product "here's a feature, you can use this bot wherever you need to on your page"
  - DEPO looks at it as in: we have ONE chatbot you can interact with when you're on VA.gov, and VFS teams can say "it would be nice if this function were a part of the chatbot" and then the Chatbot team can decide whether that's something they could train the chatbot to be hepful for.
  - If you have a bunch of separate bots, you can't control the trainability.
  - A chatbot that anyone can pick up and use anywhere could result in chaos
  - Maybe this is more of a VFS product than a platform product...
  - At the end of the day, the chatbot's main user is a Veteran
  - This doesn't mean it wouldn't be a part of the collab cycle, like we can point VFS teams to the chatbot intake form if they need to get it trained for their product's needs or something

- Any plans for Q1 planning?

- Do you currently use terminology like "user" or "customer"?

- How might we agree on priorities?

- How might chatbot fit in (or not) to the collaboration cycle?

- What's happening w/chatbot rightnow?
  - VEO believes bot ought to open up to questions. Can ask a Q to it.
  - Architect of BE wants first iteration which takes you to a live chat, real human component. So 3 prongs: IVR team, live chat, chatbot AI (which will also send you to a human but will attempt to answer your Qs first).
  - DEPO wants to have more influence on the AI part of the chatbot.

- Can we connect analytics from Microsoft into DOMO
  - Current covid chatbot info measured in DOMO
  - Future, at some point Azure for machine learning and PowerBI

## Action items
- Schedule follow-up convos in the new year about whether Chatbot is a Global Experience thing or a DEPO Platform thing, and whether those two things are in fact different or the sammmmmmme.

## Initiatives that would need cross-collaboration
- n/a

# VA Digital Notifications

- Tech stack?
  - Application: Python, Flask, Celery, Granicus GovDelivery;
  - Infrastructure: Terraform, GitHub Actions, AWS Fargate; Monitoring & Security: Datadog, Grafana, PagerDuty, Twistlock, Bandit].
  - Picked a lot of those with hope/expectation that would merge into DEPO Platform in the future.
- VANotify staffed by 2.5 pairs – 4.5 devs total, so small team and not a lot of bandwidth, things take a little longer, and MPI related stuff is complicated.
- Larger strategy is focused on trying to accomplish the identified business needs
- VA Digital Notification Ecosystem
- 2 products: VetText and VANotify
  - Future state: VANotify is the centralized notifications engine where VetText will turn into a workflow engine that feeds VANotify and VANotify actually sends out the messages
- In Q1 starting to make VANotify self service
  - Opportunity: how can we make the VFS experience using notifications common w/the rest of the platform touchpoints?
  - Governance / necessary friction, how handling in self service work?
  - Working on 1 or 2 at a time use cases, so easy to manage that universe and experience for now
  - Audit and checkpoints, will there be an approval process?
  - Can we plan this into Q1 for product support?
  - As we get close to the self service work, would love to do a workshop around the governance needs. So we can brainstorm together and help inform our features and requirements around the self service epic. Making sure we have the right ppl from DEPO in the room.

## Action items
- [ ] Workshop / inception around governance needs

## Initiatives that would need cross-collaboration
- Making VANotify governance a part of the Collaboration Cycle
- Making VANotify customer support a part of the larger DEPO Platform customer support experience
- Housing VANotify "how to" guides in same experience as other platform product "how to" guides
- Future: bringing VANotify onto the DEPO Platform delivery infrastructure
