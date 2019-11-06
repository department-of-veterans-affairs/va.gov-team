## Choosing a design system for Vets.gov

### Goals

#### Where are we now?

We've tried to develop design systems for Vets.gov in the past [see the existing Pattern Lab pattern library](https://department-of-veterans-affairs.github.io/vets.gov-designpattrns/), but due to a how fast we move and what resources we have, those systems tend to quickly fall out of date. Our existing Pattern Lab instance hasn't been updated in six months or longer, rendering it all but useless to our designers and developers. The existing system also doesn't provide context about what constitutes an appropriate use for any given pattern, which makes it difficult for new design and content team members to ramp up quickly.

We also have a second [pattern library repository](https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Work%20Practices/Design/Design%20Resources/Pattern%20Library), which is as close to a single source of truth as we can get. This pattern library is a compilation of files and documentation, including a master [Sketch file](https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Work%20Practices/Design/Design%20Resources/Pattern%20Library/vets-gov-pattern-library.sketch) that contains color palettes and design patterns. These files, while contained in the same repository, must be updated individually when design patterns change. The repo also provides limited context as to why decisions were made, or how patterns should be used.

Vets.gov, at the time of this writing, comprises at least three separate systems/apps: the core of Vets.gov, GI Bill, and the Veterans' Employment Center (VEC). GI Bill and VEC are both Rails apps that pull at least some of their UI components from the [va-common gem](https://github.com/department-of-veterans-affairs/va_common), which is now out of date. The end result is that there are UI/UX inconsistencies on Vets.gov. The assumption is also that due to multiple designers and developers working across projects, that we necessarily compound inconsistencies that arise when there's not a single, up-to-date code or design base.

#### Where do we want to be?

There are some potential problems that we're trying to get ahead of:
1. How much time are we spending catching inconsistencies, both in design and implementation?
2. Is there a single source of truth from a codebase perspective, or are people copying and pasting?
3. Is there a single source of truth from a design/content perspective?

The longest-term goal is a design system that adheres to the principles of atomic design and serves all user groups (detailed below) evenly. Ideally, the system would also act as a single source of truth for design, and for the Vets.gov front-end codebase, if it doesn't outright become the codebase via an API that Vets.gov can plug in to.

**On atomic design**

Atomic design refers to the idea, perpetuated by Brad Frost, of a design system comprised of smaller components (atoms) that successively build into larger molecules, organisms, templates, and pages. Read more about it [here](http://bradfrost.com/blog/post/atomic-web-design/). Extended to a design system, a change to an atom would perpetuate upward into the larger component groups so that for example you only have to change a button in _one_ place for that to be reflected throughout every piece of design or code that uses that button.

**On a design system (as opposed to a style guide)**

Traditionally, most teams will follow a process that's pretty waterfall -- a relatively linear process from design to development and eventually to a styleguide -- documentation. Documentation is usually the first thing that falls to the bottom of the priority list when push comes to shove. Designing for and modifying production products almost inevitably takes precedence over maintaining a style guide. The end result is usually a document that is out of date almost as soon as it's complete, and is not useful to to designers or developers as design canon.

A design system, as opposed to a static or even a living style guide, changes the process by moving design documentation more to the forefront of what becomes a much more cyclical, iterative process. The idea is to make the design system an integral part of the overall product lifecycle. Ideally, updating the design system then automagically updates any and all products in the pipeline. In this manner, the design system is both documentation of design and code implementation, as well as a literal source of both for all subsequent products to draw from. The system is the single source of truth for all designers and developers.

The use of a design system, instead of a style guide, does require a shift in workflow and work culture. The system must be prioritized equally with all other products, as opposed to a "nice to have" or a post-production product. It needs to be given room in every sprint in order to stay up-to-date.

### Stakeholders and their respective needs

So who uses this system? We've identified three major user groups, each with slightly different needs.

* Front-end developers

As features get implemented, it'd be nice to have a codebase to start from that embodies best practices and proven methods. As it stands, the assumption is that most front end developers will eventually develop unique file libraries that they each draw from; the design system would serve as that core code library. Existing developers as well as new team members would have a global reference for features on production products, to draw from as needed when developing new features.

* Designers

Designers are the obvious stakeholders for any design system. As with developers, designers often develop their own sets of files and assets from which to work when developing new designs. For Vets.gov, we have a single Sketch file courtesy Mel that most of us work (or should work) from. This system could in theory produce that Sketch file. Even if it couldn't, it would provide the same source of information for new and existing designers as it would for developers.

* Content writers

A current challenge is that our Vets.gov content team isn't entirely familiar with the various UI patterns and their ideal uses available to them. This makes creating content a greater challenge.

A potential fourth user group, should the system be open-sourced, is anyone else who wants to work off of Vets.gov visual and code standards. They would find our entire design system and its implementations documented in a single location.

### Caseflow as a success story

There is another team within DSVA that is working from a centralized design system, though not quite in the same manner as we're proposing here. The Appeals team, led by Gina and Marian, have rolled their own design system to use with [Caseflow](https://standards.usa.gov/whats-new/updates/2017/04/26/fractal-federalist/).

Caseflow's design system is implemented differently from how we would ideally implement a Vets.gov system, but their processes for getting started and maintaining the system have some good lessons for Vets.gov.

The Caseflow team rolled their own platform, building a custom-tailored system in Rails. The team dedicated a sprint to determining their needs, spinning the technology up, and seeding it with basic design patterns in use on the Caseflow app. The dedicated cycle meant that the design system had a very solid start, but because it's meant to be a living system, it by no means meant that the system was _finished._

#### Maintenance
The Caseflow team is a on a two-week sprint cycle. Each sprint, maintaining and adding to the design system is given some level of priority. Any team member who has cycles is encouraged to add to the system, either by maintaining existing patterns or by documenting new ones. If during the sprint, new design patterns are created, it falls to the creator to document the new pattern on their system. This amounts to distributed team maintenance of the system, as opposed to a single point of responsibility or failure.

### Choosing a tool for the Vets.gov design system

There are a few possible choices we could make for a Vets.gov design system, including rolling our own. However, there are two standouts in the broader atomic design world -- Fractal and Pattern Lab -- both of which could conceivably serve our purpose. Both systems do a number of things similarly, and there are pros and cons to either one.

Our recommendation, however, is to use Fractal. When we first started looking at design systems, there was still an open argument as to which system would better suit Vets.gov needs -- but in the few months since, 18F [Caseflow](https://standards.usa.gov/whats-new/updates/2017/04/26/fractal-federalist/) for the US Web Design Standards own pattern library. Since Vets.gov's style is based on the USWDS, their use of Fractal is a powerful argument for our own use of the same system.

Fractal has other features that make it a compelling tool for Vets.gov:

1. It adheres to the concepts of Atomic Design, though the terminology differs.
2. Fractal has the potential to be a "live" system, in that a change to our Fractal could then propagate to staging and production automatically. This will require a little finagling with our development team, but Fractal has an existing API that exposes your design system’s components. It is very likely that Vets.gov could consume this API directly, meaning that the design system would be the only place we'd have to code components.
3. It exposes CSS, html, hbs, notes -- all of the documentation around a pattern, including why a pattern exists and how it might be used or limited.
4. From an organization standpoint, Fractal has a seeimngly intuitive file system that keeps related files in a single directory -- this could make it easier for less technical team members to help use and maintain the system.

### Open questions

1. Of our stakeholder groups, should one or another take precedence as we develop our Fractal instance?
2. Do we have the institutional will to change workflows? Who are our stakeholders?
3. How does this play with the long-game CMS?
4. Can this actually be a live system, in the sense that Vets.gov pulls components from it directly via API?

### Next steps

1. Answer those open questions via conversation with Nebula + Vets.gov leadership
2. Come up with a timeline for MVP release, MVP+1, etc., and a schedule for iteration
3. Assemble the team for the first sprint, and decide how we'll staff maintaining Fractal. Who owns this?
4. Complete a dedicated discovery and prototype sprint 0 (Sophia)

### Timeline

#### Sprint 0 - Prototype

##### Team:
* **Design:** Sophia

##### Work:

* Assess pain levels re: consistency of visuals, code, content
* Assess design needs, development needs, content needs based on people instead of perception
* Spin up simple React app to consume API?
* Deliverable: Complete prototype of our Fractal instance
* Deliverable: Presentation to stakeholders/leads for guidance, buy-in, feedback

#### Sprint 1 - Visual MVP

##### Team:
* **Design:** Mel and Sophia
* **Content:** Amy
* **Development:** Robbie and/or ???

##### Work:

* Goal: have all major design patterns included visually and with rationale (code complete is Sprint 2)
* Continue to assess the ability for this system to output an API consumable by Vets.gov
* Establish routine check-in meetings with appropriate stakeholders
* Deliverable: MVP of visual system

#### Sprint 2 - Code/API MVP

##### Team:
* **Design:** Mel and Sophia
* **Content:** Amy
* **Development:** Robbie and/or ???

##### Work:

* Goal: baseline API established
(This is where Sophia's engineering skills hit their wall: has no idea what would be involved here and needs help figuring it out!)


### Documentation

1. [On Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)
2. [Fractal documentation](http://fractal.build/guide)
3. [Rizzo system](http://ianfeather.co.uk/a-maintainable-style-guide/) - Lonely Planet's design system/API
4. [USWDS Fractal + Federalist](https://standards.usa.gov/whats-new/updates/2017/04/26/fractal-federalist/)
5. [Caseflow](http://dsva-appeals-certification-demo-1715715888.us-gov-west-1.elb.amazonaws.com/styleguide)
6. [Fractal API](http://fractal.build/api)
7. [Fractal API + prod](http://fractal.build/guide/integration/production)
8. [GDS' Design System](https://gds.blog.gov.uk/2017/10/30/building-the-gov-uk-design-system/)

### Stuff to look into further

1. [Fractal + Sketch](https://vimeo.com/209467146)
2. [Blog post: set up a design system](https://blog.prototypr.io/design-system-ac88c6740f53)
