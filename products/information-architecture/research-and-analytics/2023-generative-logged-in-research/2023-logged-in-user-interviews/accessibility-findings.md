# Accessibility Findings
`ZoomText` `JAWs` `iOS-VO`

## Coverage
This research fufilled 50% (3/6) of its original request. Given the limited amount and variety of types of screen readers, no conclusive behavioral patterns can be determined locally in this study alone. However, we can draw future research considerations and document caught accessibility issues.

**Original study request: 6**

> 6 participants should use a screenreader on a desktop or mobile device

**Participants who successfully completed sessions: 3**

- [1 desktop JAWS user (screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p2.md)
- [1 iOS VoiceOver user (screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p15.md)
- [1 desktop zoom text reader user (magnification, screen reader)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/session-notes/p1.md)

## Key findings and recommendations

### [Conduct more research on ZoomText with VSOs, Rehab Centers, and Veterans to be...](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/accessibility-findings.md#conduct-more-research-on-zoomtext-usage-with-vsos-rehab-centers-and-veterans)
 - More strategic about inclusive research and design decisions (e.g. What zoom levels are most prevalent or have the most pain points? What compounded disabilities should we be accounting for?)
 - Mitigate and identify exclusion by scale in design system patterns and components (e.g. what patterns have/haven't been tested with ZoomText users?)
 - The new homepage _may_ benefit from testing with ZoomText users (see below)

### [Opening links in a new tab/window without a warning is a known usability issue with WCAG documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/accessibility-findings.md#opening-links-in-a-new-tabwindow-without-a-warning-is-a-known-usability-issue-with-wcag-documentation-1)
- Design system and platform guidance improvements can mitigate future issues
- A strategy is needed to identify and mitigate remaining issues in production

### [Unprompted modals should be further stress tested with Veterans using assistive technologies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2023-generative-logged-in-research/2023-logged-in-user-interviews/accessibility-findings.md#unprompted-modals-should-be-further-stress-tested-with-veterans-especially-those-using-screen-readers-and-zoomtext)
- Anecdotes in our study with P1 and P2 hinted at pop ups being a pain point
- While we don't have enough data to have full confidence on this issue, we should consider it as a risk to prioritize further research into


## Details of findings and recommendations

### Conduct more research on ZoomText usage with VSOs, Rehab Centers, and Veterans
> [ZoomText Magnifier/Reader](https://www.freedomscientific.com/products/software/zoomtext/) is a fully integrated magnification and reading program tailored for low-vision users. Magnifier/Reader enlarges and enhances everything on your computer screen, echoes your typing and essential program activity, and automatically reads documents, web pages, email.

#### ZoomText is standardized as a provided technology by blind rehab centers
- In follow up conversations with a BVA (Blinded Veteran Association) rep, blind rehab centers provide training and equipment for JAWS and ZoomText which is the "standard issue."
- This _shouldn't_ be used to negate the need to test with other assistive technologies, which may still be utilized by caregivers, family members, or Veterans who have not gone through blind rehab center training.

**Further discovery research could save time for and better empower future research efforts**
In this study, the Veteran mentioned their own preferences being between 4-7x magnification and the preferences of other Veterans they knew being among higher magnitudes.

#### Simulation of potential ZoomText issues

To illustrate potential issues, we've created a simulation of what a ZoomText user might see while navigating to the VA.gov homepage based on behaviors observed in P1's session.

https://user-images.githubusercontent.com/14154792/234052795-e567569b-7cc5-48bd-9dc9-48551e7ac2e9.mov

- It _may_ be unclear that a modal has appeared on this page and is blocking immediate actions (needs more testing)
- P1's caregiver, in reference to the navigation's right aligned elements, noted that "if you have one screen with so many different areas to look at... with him and his vision loss.. it's difficult for him"
  - Note how in this simulation, it's not immediately clear that there are elements to the right side of the page e.g. MyVA
  - Further research may uncover if this is a repeat issue (or an outlier), and better inform actionable next steps for the future

This simulation does not address the following anecdote, which was stated in reference to pop up behavior on all websites.

> Those [modals], for him, are really distracting, because he has the screen enlarged and if an ad pops up, the screen will moves over to the ad. The screen is constantly changing for him. - P1’s caregiver

#### We don't have enough data or research to know...
- If there are trends in usage between Veterans (e.g. common magnification levels or behaviors when switching between magnification levels)
- What are the upper limits/extremities of magnification usage ([ZoomText supports up to 60x zoom in Windows 8)](https://www.freedomscientific.com/products/software/zoomtext/)
- At what zoomtext magnification level(s) should we be testing components and patterns with
- What we don't know

#### Possible next steps could include...
- Conducting key informant interviews with BVA representatives and Blind Rehabiliation Center staff (e.g. this would be the equivalent of interviewing customer support to better understand where to dig deeper next)
- Tasking a11y specialists to conduct desk research on ZoomText on how to standardize it as a part of accessibility audits
  - While we currently support in browser magnification testing (which increases the size of all items on the screen), we do not support testing with ZoomText (which magnifies only a select portion of the screen)
- Collaborating with `research-ops` to track studies that include ZoomText users over time, this may include:
  - Encouraging usability testing to include a mix of screen reader users and ZoomText users
  - Write guidance on how to track data for ZoomText sessions (e.g. magnification levels, defects identified)
  - Create AT specific labels e.g. `ZoomText` to better track sessions over time
  - Hiring an a11y specialist specifically for research-ops to conduct generative research studies and/or analysis across multiple studies
- Updating the accessibility dashboard to segment usability testing by AT types (e.g. instead of one column, having seperate columns for different types of AT)
- Proactively identifying design system patterns and components that may be undiscoverable or cause pain points for ZoomText users including
  - Multi-column layouts with enough padding that can obfuscate navigation at 7x magnification on ZoomText (based off of this particular study)
  - Unexpected modals and pop ups
  - Navigating to a new window or tab without warning

#### Depending on what we learn in future research, we may...
- Update how we conduct accessibility testing in platform and CAIA documentation
- Update testing standards for DST components and patterns
- Conduct remediative testing on existing DST components and patterns
- Update research strategy and recruitment guidelines for ZoomText users

### Opening links in a new tab/window without a warning is a known usability issue with WCAG documentation

#### In session findings
Multiple participants were unexpectedly presented with links opening in new tabs during their session, causing them to become flustered or make mistakes.

> Can he X out of all these tabs, so he doesn’t have so many open? - P1’s caregiver

A screenreader participant accidentally closed out of the tab where they were logged in, and had to restart the browser to start over.
Sighted participants were caught off guard when links opened in new tabs, and and had to revisit multiple open tabs to figure out how to get back to where they wanted to be.

#### Design system and platform improvements can mitigate future issues
[While prior conversations on this topic have existed](https://docs.google.com/document/d/1KCPSXmCyh2D9UfCloffjSjyRiivTH0vY7ZHxTwj5WeA/edit?usp=sharing), they have often excluded the sighted ZoomText user experience.

**Possible next steps may include:**
- [Submit a design system documentation request ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new?assignees=&labels=vsp-design-system-team&template=2_documentation_request_form.yml) to improve guidance on opening links in a new tab/window.
  - Reference [WCAG G200 guidance (Opening new windows and tabs from a link only when necessary)](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
  - Provide `like this` and `not this` examples
  - Require including `(opens in new tab)` within the link text in the rare scenario a link must open in a new tab or window based on G200 exceptions
  - When including `(opens in new tab)` is too redundant or causes usability issues, provide alternative content or design fixes (as opposed to attempting to solve the local link itself in isolation)-- this will likely require more conversation and a specialist (which can be requested through CAIA)
- [Submit a platform issue ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=vbellissimo%2C+ssimmorins%2C+amygoldman&labels=documentation-support%2C+pw-footer-feedback&template=platform-website-footer-feedback.md&title=) to [update foundation testing to include checking and/or annotating link behavior](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-Foundationalaccessibilitytests(required)foundational-testing)

#### A strategy is needed to identify and mitigate remaining issues in production
While we are fairly confident we can catch and remediate this issue through the collaboration cycle, we don't have an existing strategy or method to do the following at scale:
- detect existing issues of links opening in new tabs
- determine what fix best applies to each issue's respective context
- apply the fix

Some possibilities may include:
- Implementing the design system and platform recommendations above
- Conducting maintenance audits on products that were audited before the most recent platform experience standards using the a11y dashboard
- [Conducting an interface inventory of link variations across VA.gov](https://bradfrost.com/blog/post/interface-inventory/)-- unsure if this could be automatically collected?

### Unprompted modals should be further stress tested with Veterans, especially those using screen readers and ZoomText

We don't have enough data to have full confidence on this issue, but we may want to consider it as a risk to prioritize further research into given the following anecdotes:

> Ok y’all need to get rid of that stupid pop up thingy. I don’t want to go to the new homepage. - P2, after dismissing the “try the new homepage” modal multiple times

> Those [modals], for him, are really distracting, because he has the screen enlarged and if an ad pops up, the screen will moves over to the ad. The screen is constantly changing for him. - P1’s caregiver

https://user-images.githubusercontent.com/14154792/234065565-dd3524d7-6a70-4d2a-abd0-2bc18fa540f1.mov

> A possible case to test is how long it takes for ZoomText users to (a) notice a modal has appeared on the page and (b) find said modal and take action on it.

<img width="1108" alt="Screenshot 2023-04-24 at 1 03 10 PM" src="https://user-images.githubusercontent.com/14154792/234066284-4aff8a74-8615-435a-9e63-dd8d173edabd.png">

> Setting vertical-align to "top" as opposed to "middle" could potentially improve usability, but would require more research (and updates to USWDS, which also centers the modal)


## Other considerations and findings 

### The new VA.gov homepage _may_ benefit from being stress tested with ZoomText users

![image](https://user-images.githubusercontent.com/14154792/234062209-df5a9405-301d-4fb6-8392-abff29bdcf97.png)

https://user-images.githubusercontent.com/14154792/234063847-611f07e6-58a0-4236-b389-fddc61c8af06.mov

### More inclusive research with disabled Veterans using assistive technology is needed for the logged in IA and navigation experience (and in all studies)

- To be more confident on behavioral patterns and common issues, we should aim to test with at least 4 per user group (or test until saturation) [[1]](#1)
- Inclusive research guidance and strategy should be updated to reflect this as we become more capable of recruiting Veterans who use assistive technologies

## Action items
- Plan for or prioritize research with ZoomText users for upcoming studies
  - Experiment with survey questions to get a mix of zoom levels, preferably at higher magnification levels (you can work with a11y specialists here or we could collaborate with Tim from BVA)
- Inform Julie Strothman of ZoomText usability considerations for Design System accessibility component review
- Inform Robyn Singleton of future inclusive research considerations
- Encourage further testing or research with modals with Veterans who use ZoomText and screen readers in your research readout

## References
<a id="1">[1]</a> 
Goodwin, K. (2009). Planning User Research. In Designing for the digital age: How to create human-centered products and services (pp. 87–91). essay, Wiley. 
