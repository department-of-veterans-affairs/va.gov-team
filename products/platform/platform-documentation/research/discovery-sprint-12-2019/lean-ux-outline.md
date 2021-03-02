# Lean UX Outline: Documentation Site

## 1. Problem Statement
We created a myriad of documentation that was designed to help our customers (i.e. VFS teams building things on VA.gov) find what they need to work seamlessly and iteratively, and build great products on VA.gov. We have observed that the resources as they exist today aren’t effectively enabling that, which is causing a large support burden for VSP, is frustrating our customers, and is potentially resulting in products on VA.gov that don't meet VSP standards. *How might we improve our documentation resources so that our customers are more successful?*

### What are our desired outcomes of this solution?
- People can find what they need without having to ask
- Documentation is always up to date and canonical (and thus is trusted)
- VA.gov products meet VSP standards
- People can start working quickly on their VA.gov products without huge ramp-up time

### More outcomes
- People are able to easily contribute to the documentation w/o much ramp-up (i.e. easy process for updating docs)
- People feel comfortable editing outdated docs, and/or recommending deletion of OBE docs.
- More dispersed ownership of files and/or process for keeping things up to date
- People are updating as they go (i.e. not waiting until the end of their contract to think about transition readiness or getting their product documentation in order)
- People know what our standards are
- People know who to ask for what
- There's a way for people to say "hey this makes no sense" or "hey this is old" - i.e. communicating feedback to file owners

### In what ways are those outcomes not being met?

## 2. Proto-Personas

#### VFS and VSP Team Members, both technical and non-technical, are the top priority for the next iteration of the documentation site. These teams are the most frequent users of documentation and are also frequent maintainers of documentation, much of which is frequently evolving*. By meeting the needs of VFS and VSP Team Members in using and maintaining documentation, we may also provide benefit to some of the other personas that we have identified here.

*_Under the assumption that VFS teams are responsible for keeping their own product documentation up to date_

Technical and Non Technical VFS Team Members are the top priority for the next iteration of this solution. Because if we meet their needs, we are inherently meeting VSP team member needs bc it will reduce the support burden. It will also inherently meet the needs of any DEPO team members who are embedded on teams since their traits are very similar to VFS teams, and non-embedded DEPO team members are not a priority... why? 

We should prioritize the personas who will be most actively using the documentation, which are VFS teams, VA Content Writers and maybe DEPO..... will daily/weekly/sprintly use these docs, so they are the top priority for the next iteration of this solution. DEPO might also use it just as much nbc they're integrated into the VFS team. We don't know how much owners, prospective teams would use the documentation.

"How" documentation and product-specific documentation have to be updated way more often than "why" documentation, so we should prioritize ease of maintenance for the VFS and VSP teams responsible for that kind of documentation.

Highest priority persona should be the persona who's ultimately responsible for maintaining the documentation. Keeping it accurate and up to date is the absolute key to incentivizing adoption, and if we make it really easy for the owner to maintain, then it will be better and more trustworthy and VFS teams will adopt.

OR

VA Content Writers aree the top priority for the next iteration of this solution, because they're such a large and diverse group, that if they don't have clear documentation, we won't get them to adopt the CMS which will create more work for the VFS Teams (Public Websites Team) and might result in new content not getting written "fast enough".

OR 

Onboarding documentation is the most important bc it sets ppl up for success.

----

Persona 1: Technical VFS team member (engineer)
- Behavioral traits
  - Already have their own existing documentation methods (cultural differences) and thus sometimes store documentation elsewhere (such as Confluence or Gatsby or Lighthouse's Github Wiki)
  - Tend to not focus on keeping documentation up to date
  - Don't want to fix outdated documentation bc don't want to step on toes.
  - Write simple code (i.e. self-documenting code, source code) which engineers can read and understand, but don't focus on making it accessible for non-technical people
  - Source code = source of truth (over documentation)
- Pain points and needs
  - Information overload
  - Didn't fully understand how ROEs applied / would work in action when they first started
  - Documentation too spread out
  - Decisions documented in issues and PRs are disconnected from the work. Once they're closed, or if use different tools in the future, difficult/impossible to find those notes in the future.
  - The way we have technical documentation structured in GitHub isn't what people are used to
  - Product documentation isn't next to the code
  - Documentation is out of date or conflicting
  - No product specific technical documentation exists (or unsure where it is)
  - Don't have Access early (can't access CMS documentation bc of no-PIV, can't access sensitive repo bc of private repo in-access)
  - Don't know what all is available in the ecosystem (a "map of the world") (examples: trying to run one repo, but learned it's dependent on a sibling repo, that dependency isn't well-documented, didn't know that we have a component library or documentation around it)
  - Need to be able to search for whether a solution already exists to the challenge they're facing
  - Hard to pick up something started by another team bc of poor / spread out documentation
  - People use unsactioned examples of patterns / truth (perpetuates use of bad things we're trying to retire)
  - Hard to go back to get it right, people just ship and plan to fix later
  

- Solutions today
  - Gatsby FE docs
  - Formation React stuff (for forms stuff)
  - Design.va.gov (for component docs)
  - Swagger
  - Developer.va.gov ???
  - Pull requests (context for why changes happen)
  - Source code
  - Onboarding FE video in a Google slide (sent via Slack or Zoom)
  - Search in Slack
- Possible solutions
  - Keep documentation where the work is (from Google recs)
  - Auto-assign PR updates to the team that owns the docs for review, so anyone can update but only owner can approve
  - Leverage traditional open source README.md documentation styles, bc developers often look to GitHub for documentation
  - Single command in front of all the things to initialize everything
  - Standardized terminology (opportunity areas, key themes, recommendations, takeaways)
  - Documentation styleguide


Persona 2: Non-technical VFS team member
- Behavioral traits
  - Ask team members or in Slack for someone to point them to the right doc, vs looking for docs themselves
  - Google docs is constant go-to for collaboration
- Pain points and needs
  - Information overload
  - May not know how to use GitHub or Markdown
  - Decisions documented in issues and PRs are disconnected from the work. Once they're closed, or if use different tools in the future, difficult/impossible to find those notes in the future.
  - No product specific technical documentation exists (or unsure where it is)
  - Can't decipher self-documenting code (i.e. current technical documentation method)
  - Don't have PIV Access very early (can't access CMS documentation)
  - Documentation is out of date or conflicting (VSA vs VSP documentation)
  - Don't know how to add/change/ask for approval to change documentation when owned by another team
  - Hard to pick up something started by another team bc of poor / spread out documentation
  - People use unsactioned examples of patterns / truth (perpetuates use of bad things we're trying to retire)
  - Hard to go back to get it right, people just ship and plan to fix later
  - Broken links (or incorrect reference links) are frustrating / slow down progress 
  - Dispersed documentation causes findability issues (where do I go for the source of truth for this?)
  - Not aware when something has changed (i.e. updates to patterns in design system)
  - Didn't fully understand how ROEs applied / would work in action when they first started
  - By the time you need the docs as a part of workflow, you can't remember where they are
  - Unclear what practice area deliverables are

- Solutions today
  - Shawna's google doc of Design resources
  - va.gov-team repo
  - Design System
  - Confluence (Agile 6)
  - Live VA.gov products (i.e. current functionality, patterns, etc)
  - Search in Slack
- Possible solutions
  - Standardized terminology (opportunity areas, key themes, recommendations, takeaways)

Persona 3: VA content owners
- Behavioral traits
- Pain points and needs
  - May not know how to use GitHub or Markdown
- Solutions today
- Possible solutions

Persona 4: Technical VSP team member
- Behavioral traits
  - Still point people to old documentation bc don't know where anything is in the repo
- Pain points and needs
  - Don't know where anything is in the repo
  - No product specific technical documentation exists (or unsure where it is) and thus no context for reviews
  - Don't have a "map of the world" (i.e. trying to run one repo, but learned it's dependent on a sibling repo, that 
 dependency isn't well-documented, didn't know that we have a component library or documentation around it)
  - Publishing docs (in Gatsby) isn't automatic / easy to update after initial publish / requires engineer to udpate
  - Updating documentation isn't a priority
  - Don't know what documentation exists
  - Don't know if documentation is being used by VFS teams
  - New repo isn't familiar, so go back to old versions a lot (even knowing the old stuff might be out of date)
  - Broken links
  - Hard to search, can't find it when you need it
  - Not enough examples of "good" / best in class work to point ppl to
- Solutions today
  - Link to an important doc in Slack w/good searchable keyword
- Possible solutions

Persona 5: Non-technical VSP team member
- Behavioral traits
- Pain points and needs
  - (Potential) May not know how to use GitHub or Markdown
  - Design reviews - what do I check against? Design system, and/or live apps?
  - Design reviews - checking against current options is hard.
  - Hard to hold ppl to standards that are often change...
  - People are writing their own "How to..." documentation when they feel we don't have enough for them (i.e. How to Use GitHub, and whatever the VSA Designers are writing up)
  - Don't know what documentation exists
  - Don't know if documentation is being used by VFS teams
  - Have to get a lot of reviews for new documentation before can publish, takes a long time to get it live
  - No flow/cohesion, no terminology standards, no formatting standards
  - No feedback loop, so never know about gaps or what's working vs not working vs missing

- Solutions today
- Possible solutions

Persona 6: DEPO team member
- Behavioral traits
- Pain points and needs
  - Can't decipher self-documenting code (i.e. current technical documentation method)
- Solutions today
- Possible solutions

Persona 7: Prospective VFS team
- Behavioral traits
- Pain points and needs
  - No product specific technical documentation exists (or unsure where it is)
- Solutions today
- Possible solutions

Persona 8: Prospective VA business owner
- Behavioral traits
- Pain points and needs
- Solutions today
- Possible solutions

Persona 9: Other bureaucracies (long term)
- Behavioral traits
- Pain points and needs
- Solutions today
- Possible solutions

## 3. Assumptions

### Business Assumptions

I believe VSP / VA business has a need to:
- Dictate standard tooling and workflow for project management across VFS teams
- Be responsible for all documentation, except for product-specific documentation which should come from VFS Teams
 
I believe VSP / VA business is (or will be):

I believe the #1 value VSP / VA business wants to get out of a documentation site is:

I believe VSP / VA business can also get these additional benefits:

I believe we will acquire the majority of our customers through:

I believe the biggest product risk is:

We will solve this through:

What other assumptions do we have that, if proven false, will cause our project to fail?

### User Assumptions

Who is the user and what do they need? 
- Cultural differences make it hard to adopt one standard documentation across all teams
- They need to be able to collaborate and access usage documentation in the same space
- They don't capture technical product documentation at all today
- They use Lighthouse documentation to understand how to integrate with our APIs
- Having technical and non-technical documentation in the same spot will make it too hard to find technical stuff
- Does DEPO (and thus the VFS Teams they lead) know that they are responsible for their own product documentation? And are thus responsible for keeping it up to date?

I believe the #1 value a customer wants to get out of my service is:

What problems does our product solve?

When and how is our product used?

What features are important?

How should our product look and behave?

### 4. Based on pain points, user stories, and assumptions, select hypotheses for MVP:

We believe that: [creating this capability/solving for these pain points] for [these people/personas] will result in: [this outcome]. We will know we are right when traffic and contributions to new documentation solution rise steadily and documentation-related support requests decrease.

*We believe that **creating a single, searchable, public documentation site that is easy and understandable for VFS and VSP team members to use and maintain** will result in **a single source of truth for building on VA.gov that is robust and well maintained.** We will know we are successful when **we see contributions and traffic to the new documentation site rise, and documentation support requests decrease.***

We believe that **implementing a searchable public documentation site for VFS/VSP team members** will result in people **knowing what the documentation source of truth is, contributing to it, and sharing it**. We will know we are right when **traffic and contributions to new documentation solution rise steadily**.

We believe that **creating a documentation repo that is easy to publish and maintain** for **VSP teams** will result in **more robust and timely documentation**. We will know we are right when **we see VFS teams using the repo more frequently for self-service and fewer questions of VSP teams**.

We believe that by **publishing a single documentation site that is easy for VFS and VSP members to contribute to**, we will create a **single source of truth for how to work with platform and build on VA.gov**. We will know we are right when **documentation support requests decrease**.


---

_This is a skeleton template to use if you’re following the Lean UX process, based off the book & Nick Brethauer’s Lean UX Crash Course. I’m sure there’s more structure that can be added to the later sections, but this is a start._
