# Design.va.gov
Design.va.gov was constructed as a single source of truth to help designers and developers quickly build web projects for the VA that provide Veterans with a consistent, accessible user experience using any technology stack using Formation, VA.gov's front-end framework built on top of the U.S. Web Design System. It not only offers live code examples of components, but it also documents how to combine those components with content strategy, plain language, and design best practices to solve Veterans' needs.

## Goals
- Improve Formation's codebase and installation requirements so it can be quickly installed on any project without dependencies
- Detailed documentation of components and design patterns so teams can deliver a consistent user experience
- Ensure entire system is documented for its maintainers to facilitate future development

## About the project
To build a design system for VA.gov, we had separate the project into a three different parts:

1. **Formation:** the front end code base for VA.gov, which is  based on the U.S. Web Design System
2. **Content style guide**
3. **Documentation site:** Contains documentation for both Formation and the content style guide, as well as information design patterns, page layouts, and other material to help designs focus more of their efforts on the VA's constituents. This is design.va.gov 

### History
Work on bringing VA.gov's design to what it is today began in November of 2018. At the time, there was repository and Fractal site for a design system, but upon inspection, there numerous issues that would have made that iteration extremely difficult for any design or developer working on the platform without direct institutional knowledge, among many other problems. Those issues served as an indication that the VA.gov design system was in too early of a stage to be considered a working design system.  The following describes how those problems were solved:

---

**Problem:**
Formation could not be easily installed on a new project. The build and implementation process was constructed solely around the way vets.gov, which later became va.gov, was set up. In addition, Formation did not include fonts or images, both of which were only available in the `vets-website` repository, which is the main repository for VA.gov.  

**Solution:**
- Move all fonts and images to the repository that  hosts the Formation codebase
- Create a `/dist` as part of the build process that includes compiled CSS and JS, as wells as the images an fonts
- Replace absolute links in CSS with relative links, so teams using formation can host their assets in a directory that works best for the project
- Minimize dependencies

---

**Problem:**
- Interactive components were built only with React, locking teams into a technology stack. If a project could not use React, those components could not be used. If React ever fell out of favor to another framework, it would be difficult to migrate, siphoning time, energy, and money from the VA's ability to adapt to new legislation, build new features, and handle certain emergencies.

**Solution:**
- Move React components in separate package within `veteran-facing-services-tools` repo, which is now a mono-repo
- Create vanilla-JavaScript versions of React components using ES6, which should also help teams create versions of those components with other frameworks if necessary
 
---

**Problem**
U.S. Web design System was required as a dependency to run Formation. However, if the user did not install a specific version of the code, some components would break or note display consistently with what appears on VA.gov. 

**Solution:**
- Install the U.S. Web Design System into the Formation code package directly.

---

**Problem:**
The Fractal site did not include any documentation for designers, and was frequently broken. When the site was working, components were displayed in a single frame without any context.

**Solution:**
- Create design.va.gov using Jekyll because of its support for both markdown and HTML.
- Build separate site for React component documentation
- Improve how components present and provide clarity around how modifying classes are used

---

**Problem:**
Many CSS selectors were split between two different repositories. So if a team installs Formation, some properties might be missing resulting in inconsistencies.

**Solution:**
- Move selectors into Formation, then, once the Formation version is updated on VA.gov, remove the now duplicate selectors from `vets-website`.

**Notes:**
This is still an ongoing process. Some selectors can be removed from `vets-website` and replaced with utility classes instead. 

---

**Problem:**
 No consistent coding standards. In most design systems, it's common to use a fixed naming convention so developers can easily identify what pertains to the design system and what pertains to the project files.

**Solution:**
- Establish naming convention using [BEM — Block Element Modifier](http://getbem.com/naming/). [VA.gov's naming convention](https://design.va.gov/documentation/naming)
- Rename all existing components under the new guidance

**Notes:**
This work is delayed, and the lift is heavy because it involves a lot of potential breaking changes. It should be approached carefully. It was not determined essential to having a _working_ design system, and teams would benefit more from having documentation of the current state rather than having documentation withheld until components can be migrated. This work should still be done, but in support of ongoing maintenance of the design system.

---

## Design.va.gov website
The design.va.gov site runs on Jekyll for several reasons:

- Support for markdown and HTML
- Easy templating
- Runs on GitHub pages, which was used early in the project to host the site

There is a lot of documentation about how design.va.gov is configured and how to work on it.  [Updating design.va.gov](https://design.va.gov/documentation/updating-this-site) .  The [Wiki](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/wiki) contains useful information about how to write content for the site, including information about: 
- How the left navigation works
- How to upload and add images to content
- HTML snippets for the things markdown cannot do
- How the drafting feature works
- How to add search keywords for the site search

The [README](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/blob/master/README.md) contains information about how to run a local instance.

### Research

The work on updating Formation and building Design.va.gov was completed during two crucial periods for VA.gov. Much of the initial work and decision making  about this project was done in the final phases of launching the new VA.gov. Then, much of the work in finalizing the project was done as contracts were renegotiated. Suffice to say, there was not much bandwidth to pull folks out of working on critical services for Veterans to conduct rigorous research. 

Many elements of design.va.gov are pulled from [USWDS: The United States Web Design System](http://designsystem.digital.gov/), so design.va.gov was able to leverage research conducted by 18F.

The platform received substantial feedback from Formation users, and much of that has been incorporated. Here's a list of work on the site the resulted directly from user feedback:

- **Site search feature**
- **Bifurcating feedback systems between content creators and everyone else**  Content creators did not want to have to sign up for GitHub accounts just make suggestions, while designers and developers already have accounts.
- **Sticky navigation** Many designers requested this, and it's difficult to see context when reading the middle of a long page.
- **Anchor links on headers** Pages are long, so deep linking is very useful for sharing specific content.
- **Cross linking where necessary** Helps improve find-ability and gain additional context
- **Drafting the component lifecycle**  The team collectively felt that allowing beta components will pose a burden on the platform team, so components are either rejected or built & supported
- **Developing a feature making draft pages** Raw markdown can be difficult to read when evaluating content. The draft features allows pages to be published, but only viewable if you have the link. Draft pages also include link to edit the page in GitHub.
- **Being specific about how modifiers are applied** From the example on the old Fractal site, there was confusion on which alert boxes can be expanded. The site, which had no usage guidelines, showed only the warning box with expandable content, and one designer assumed that only that box can be expanded, which was not the case.

### Deployments and environments

The develops team developed a deployment process that mirrors VA.gov. Commits to the `main` branch trigger a build to both dev-design.va.gov and staging-design.va.gov.  On weekdays at 2pm, design.va.gov automatically builds from `main`. 

#### Note about getting the subdomains
The VA requires separate processes for external DNS resolution (outside the VA network) and internal DNS resolution (inside the VA network).  

---

## Formation
Formation is VA.gov's front-end framework. Formation's core includes Sass, images, fonts, and vanilla JavaScript components. The React components are in a [separate package](https://github.com/department-of-veterans-affairs/veteran-facing-services-tools/tree/master/packages/formation-react). 

### Adding utilities

Utilities are high-specificity (using `!important` rule) classes that, for the most part, contain a single rule. Utilities are used to override default styles of existing components, build one-off components, or just to use in lieu of writing new selectors with limited purpose.

### Adding design tokens

Design tokens are Sass functions and variables to keep VA.gov's styling consistent. There are lots of tokens that are 

### Research
Even though Formation is a codebase, we involved users to help us with:

- Prioritizing which utilities to build first
- What the naming conventions should be

### Not using USWDS v2

Formation is built upon a fork of USWDS 1.6.10. Formation will not be upgrading USWDS to v2 or anything after unless there is strong justification. The reasons behind this decision:

- Changes in the class naming system for USWDS components would mean that most components, react and non-react, would need to refactored. This is much more than a find and replace.
- The VA.gov team modified some components based on specific needs of VA.gov. 
- USWDS v2 did not introduce new components
- Formation already includes a suite of utility classes, which was one of the main additions in USWDS v2. 
- USWDS v2 introduced a lot of complexity in effort to support design system theming, which is not necessary for VA.gov.

#### What about when USWDS introduces new components?

The platform team will evaluate the new components to determine if they are useful on VA.gov. If they are useful, those components will be created added on an individual basis and modified to fit the needs of VA.gov. The components should use Formation's [naming convention](https://design.va.gov/documentation/naming).

---

## Content style guide
The content style guide is maintained by the content team. It is documentation that does not necessarily pertain to the front-end codebase, but contains information about how to use certain components as part of a content strategy. 

---
## What's left?
A design system is a product, in that there is a dedicated team focused on iteration in response to user needs. Formation right now serves VA.gov, but it can potentially grow to support the entire Department. Some potential work on the design system may include:

- Getting everything under the same naming convention (this should definitely get done)
- Formation could perhaps support tiers as more parts of the VA adopt the system. [Design System Tiers - EightShapes - Medium](https://medium.com/eightshapes-llc/design-system-tiers-2c827b67eae1)
	- Utilities can become a tier
	- Maybe hover and focus utilities can become a tier
	- Internal tools, components used where there is more information density
- The documentation site may need to evolve as the system matures. 

