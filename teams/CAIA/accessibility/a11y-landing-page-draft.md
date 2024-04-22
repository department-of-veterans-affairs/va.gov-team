# [WIP] Accessibility Landing Page

The goal of this page is to provide a well-organized clearinghouse of information about VA's accessibility practices. Our mission - to point VFS teams to the information, tools, and people they need to make VA.gov accessible, beyond compliance.

The structure and content of this page is based on:
- [CAIA's documentation content inventory](https://docs.google.com/spreadsheets/d/1YsMFmvgD4hEc93KTaTPJwvR5heHsCNgC3cwj53Eu3Ys/edit#gid=737007164)  
- [CAIA's modeling exercise](https://airtable.com/app0xn5tf3PzkmRgN/tblRWeBHtjv1iaJbf/viwXbamm2X62BkHL5?blocks=hide)

Page draft starts below:

*****

# Accessibility on VA.gov

`version 1.0.0` `last updated 2/5/24`

This page is meant to help researchers, designers, and developers working within OCTO understand how VA approaches accessibility. It’s also a useful evolving resource for new (and existing) VA accessibility specialists in order to understand the context of their work.

**This page contains guidelines, not mandates.** Following these steps will help ensure your team launches products that meet [VA’s vision](https://depo-platform-documentation.scrollhelp.site/getting-started/modernized-va-gov-accessibility-strategy#ModernizedVA.govAccessibilityStrategy-Vision): "that every disabled Veteran and caregiver has guaranteed access to equitable, easy to use, self-service tools without needing to request accommodations."

## On this page

<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

   - [Our mission](#our-mission)
   - [Strategy and standards](#strategy-and-standards)
   - [Accessibility resources by discipline](#accessibility-resources-by-discipline)
   - [Get help from accessibility specialists](#get-help-from-accessibility-specialists)
   - [Ensure that your work is Section 508 compliant](#ensure-that-your-work-is-section-508-compliant)
   - [Improve your skills](#improve-your-skills)

<!-- TOC end -->

## Our mission
VA is here to serve American Veterans, and [approximately 40% of of them have an identified disability](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/disability-statistics-veterans.md). 

Our mission is to empower product teams to collaborate with disabled Veterans and caregivers by enhancing the culture and tools used to co-create and maintain services that are accessible beyond compliance. 

Our vision is for every disabled Veteran and caregiver to have guaranteed access to equitable, easy to use, self-service tools without needing to request accommodations.


## Strategy and standards
- Learn more about our [accessibility strategy](https://depo-platform-documentation.scrollhelp.site/getting-started/modernized-va-gov-accessibility-strategy).
- Find out what [experience standards](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards) a VA.gov product needs to meet before it launches.
    - Our standards are informed by the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/glance/) (WCAG).
    - Components in the [VA Design System](https://design.va.gov/components/) document accessibility considerations. 
- The [accessibility defect severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric) is our common language for determining the seriousness of an accessibility issue.

We aim to:
- Follow [inclusive design best practices](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/learning-sessions/abc01-inclusive-design-best-practices/) in all of our work.
- Do more than pass a Section 508 audit. While we need to meet the official [federal government accessibility baseline](https://ictbaseline.access-board.gov/), we focus on **usability**, not just compliance.
- "Shift left," integrating accessibility practices across research, design, and development disciplines, starting as early in the product cycle as possible.

## Accessibility resources by discipline
All of us are responsible for the accessibility of our products. And every discipline has a role:

<details><summary>Researchers</summary>

### Resources for researchers

The best way to ensure that a product is accessible is to test it with users of assistive technology. Designing for complex needs first - like aging Veterans above the age of 55 or Veterans with disabilities - means designing for the future of **all** Veterans who age or acquire disabilities later in life. (Learn about [inclusive research practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/introduction.md).)

#### Get help
The CAIA team can support your inclusive research sessions by:
- Reviewing your research plan
- Providing technical support during sessions with assistive technology (AT) users
- Observing sessions with AT users from an accessibility point of view, and provide findings

Put in an [AT Research Support Ticket](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=coforma-terry&labels=508%2FAccessibility%2C+sitewide+CAIA%2C+sitewide+accessibility%2C+CAIA-a11y-research&projects=&template=caia-a11y-research.yaml&title=%5BCAIA+A11y+Research%5D%3A+Team+name%2C+product+name) with CAIA to get started.

#### Recruiting participants
- Use the [MVS sampling method](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md#maximum-variation-sampling) to recruit participants that use assistive technology
- Include mobile participants, or have a separate study for mobile usability testing
- Read more about [inclusive recruitment strategies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/research/recruitment.md)

#### Preparing prototypes for assistive technology users
- Review [types of assitive technologies and how to modify your prototypes](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u)
- Consider [creating your prototype in CodePen](https://depo-platform-documentation.scrollhelp.site/research-design/accessible-prototyping-with-codepen) for the most accurate results

#### Research sessions
- Read VA's guide to [research with assistive technology users](https://depo-platform-documentation.scrollhelp.site/research-design/research-with-assistive-technology-users)
- Follow the [screen reader checklist](https://depo-platform-documentation.scrollhelp.site/research-design/screen-reader-checklist)
- Learn [how to be respectful of participants with disabilities](https://depo-platform-documentation.scrollhelp.site/research-design/disability-etiquette)


</details>

<details><summary>Designers</summary>

### Resources for designers

Creating visual designs with accessibility in mind will go a long way in making your end product accessible to all Veterans.

#### Apply accessibility best practices
When designing an interface, follow these best practices:
- [Provide sufficient contrast between foreground and background](https://www.w3.org/WAI/tips/designing/#provide-sufficient-contrast-between-foreground-and-background)
- [Don’t use color alone to convey information](https://www.w3.org/WAI/tips/designing/#dont-use-color-alone-to-convey-information)
- [Ensure that interactive elements are easy to identify](https://www.w3.org/WAI/tips/designing/#ensure-that-interactive-elements-are-easy-to-identify)
- [Provide clear and consistent navigation options](https://www.w3.org/WAI/tips/designing/#provide-clear-and-consistent-navigation-options)
- [Ensure that form elements include clearly associated labels](https://www.w3.org/WAI/tips/designing/#ensure-that-form-elements-include-clearly-associated-labels)
- [Provide easily identifiable feedback](https://www.w3.org/WAI/tips/designing/#provide-easily-identifiable-feedback)
- [Use headings and spacing to group related content](https://www.w3.org/WAI/tips/designing/#use-headings-and-spacing-to-group-related-content)
- [Create designs for different viewport sizes](https://www.w3.org/WAI/tips/designing/#create-designs-for-different-viewport-sizes)
- [Include image and media alternatives in your design](https://www.w3.org/WAI/tips/designing/#include-image-and-media-alternatives-in-your-design)
- [Provide controls for content that starts automatically](https://www.w3.org/WAI/tips/designing/#provide-controls-for-content-that-starts-automatically)

#### Use VA Design System components
Don't re-create the wheel! The [VA Design System ](https://design.va.gov/)(VADS) is here to help. VADS Components are well-documented and have been reviewed for accessibility issues. Whenever possible, default to using an existing component or pattern in your designs.
- [VA Design System components Sketch library](https://www.sketch.com/s/610156b6-f281-4497-81f3-64454fc72156/symbols)
- [VA Design System components Figma library](https://www.figma.com/file/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?type=design&mode=design&t=Ld7dhuyaPcerrnPF-0)

Designing a form? Use [VA's common form pattern templates](https://www.figma.com/file/ht0ih1JzdyRGZYvvvN8jxQ/Form-templates---BETA---Veteran-Facing-Forms-team?type=design&node-id=112-13359&mode=design&t=GTU8TV4ONFLifJCs-0) (Figma).

#### Use accessibility annotations
A lot can be lost in translation when handing off your designs to a developer. Use accessibility annotations to make your intentions clear. It's especially important to annotate information that is semantically important, but not obvious on visual inspection:
- Heading levels (`H1`, `H2`, etc.)
- Anything that's using non-default styling (for example, an `H3` that's styled to look like an `H2`)
- Text that's only accessible via assistive technology - alt text, aria-labels (for example, an "Edit" link with the `aria-label` "Edit address")
- Focus management between pages or screens
- Reading order
- Tab/focus order (for interactive elements)
- Any elements requiring `aria`
- Alt text for images/icons
- `Legend` and `fieldset`, if you're creating a form

Use these kits to make your annotations:
- [VA Annotations Sketch library](https://www.sketch.com/s/aaa5c25f-6991-4aac-a6ed-d378bdff7727)
- [VA Annotations Figma library](https://www.figma.com/file/CZcnWfQOwtLqPm4WA5paYG/VADS-Annotation-Kit?type=design&node-id=415-1135&mode=design&t=Ld7dhuyaPcerrnPF-0)

#### Consider prototyping in CodePen
You'll eventually test with users of assistive technology (AT). In general, AT works best with coded prototypes. Before research begins, you should consider [creating your prototype in CodePen](https://depo-platform-documentation.scrollhelp.site/research-design/accessible-prototyping-with-codepen) for the most accurate research results.



</details>

<details><summary>Developers</summary>

### Resources for developers

Following accessibility best practices and VA's guidelines will result in more accessible products for all Veterans.

#### Apply accessibility best practices
- [Associate a label with every form control](https://www.w3.org/WAI/tips/developing/#associate-a-label-with-every-form-control)
- [Include alternative text for images](https://www.w3.org/WAI/tips/developing/#include-alternative-text-for-images)
- [Identify page language and language changes](https://www.w3.org/WAI/tips/developing/#identify-page-language-and-language-changes)
- [Use mark-up to convey meaning and structure](https://www.w3.org/WAI/tips/developing/#use-mark-up-to-convey-meaning-and-structure)
- [Help users avoid and correct mistakes](https://www.w3.org/WAI/tips/developing/#help-users-avoid-and-correct-mistakes)
- [Reflect the reading order in the code order](https://www.w3.org/WAI/tips/developing/#reflect-the-reading-order-in-the-code-order)
- [Write code that adapts to the user’s technology](https://www.w3.org/WAI/tips/developing/#write-code-that-adapts-to-the-users-technology)
- [Provide meaning for non-standard interactive elements](https://www.w3.org/WAI/tips/developing/#provide-meaning-for-non-standard-interactive-elements)
- [Ensure that all interactive elements are keyboard accessible](https://www.w3.org/WAI/tips/developing/#ensure-that-all-interactive-elements-are-keyboard-accessible)

#### Use VA Design System components
Don't re-create the wheel! If you're looking for a specific component, turn to the [VA Design System ](https://design.va.gov/) before you create something new.
- [Components](https://design.va.gov/components/): Components are interactive and non-interactive UI elements that can be grouped together or presented individually.
- [Patterns](https://design.va.gov/patterns/): Patterns are solutions and researched best practices for solving user-focused tasks and recurring user interface design problems, like multi-part web forms and progressive disclosure.
- [Templates](https://design.va.gov/templates/): Templates, or page layouts, compose components within a single page. A layout can contain multiple variations of a component depending on the context.
- [Foundational elements](https://design.va.gov/foundation/): These include colors, breakpoints, icons, typography, spacing units, and utility classes.

#### Test as you develop your product
Review the [accessibility section of VA Platform](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-testing) for information about TestRail, end-to-end testing with Cypress, screen reader testing, and more.

</details>

<details><summary>Product managers</summary>

### Resources for product managers

Product managers at VA play a key role in “shifting left” - putting accessibility at the heart of the entire product lifecycle. 

#### Onboard team members
- Ensure that all new team members go through [accessibility onboarding
](https://depo-platform-documentation.scrollhelp.site/getting-started/calendly-orientation-sessions#OrientationSessions-AccessibilityOrientation)
#### Organize your sprints and meetings
- Invite accessibility specialists to relevant meetings, from the beginning of the project
- Prioritize and advocate for accessibility reviews, audits, and testing
- Help the team meet accessibility requirements as part of the Collaboration Cycle

#### Write accessibility-minded tickets
- Work accessibility into team and scrum ceremonies, e.g., add accessibility into acceptance criteria
- Pull accessibility defects into sprints, when necessary (learn about the [defect severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric) and [how to write accessibility defect tickets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/how-to-write-good-accessibility-tickets.md))

#### Get support for your team
- Reach out to the <a href="#CAIA">CAIA team</a> for any needed accessibility-related support

</details>


## Get help from accessibility specialists


There are two routes to access support from accessibility specialists:
1. During the Collaboration Cycle, from the Governance team
2. At any point in your product's lifecycle, from CAIA and other accessibility specialists


### Route 1: Collaboration Cycle support from Governance
Teams **creating new features or products** are required to go through the Collaboration Cycle, which includes accessibility reviews. Teams **iterating on existing features or products** are encouraged to get feedback through the Cycle as well. 

The Collaboration Cycle is managed by the Governance team.

<details><summary>Learn about the Collaboration Cycle</summary>


 <br>The Collaboration Cycle, managed by the **Platform Governance** team, is where teams who are building products/features on VA.gov get feedback and guidance on their product/feature to ensure it meets VA.gov experience standards for design, content, information architecture, quality assurance, accessibility, and research. 
 
Teams engage with the Collaboration Cycle throughout their product’s/feature’s lifecycle via three separate touchpoint meetings (Design Intent, Midpoint Review and Staging).

[Learn how the Collaboration Cycle works](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/), and [contact the Governance team](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/contact-us) with your questions.

</details>

<h3 id="CAIA">Route 2: General accessiblity support from CAIA</h3>
Teams **at any point in the product/feature lifecycle** can get general accessibility support from the Sitewide Content, Accessibility, and Information Architecture (CAIA) team. They can also reach out to specialists on Slack.

⚠️**Note**: Any ticket(s) given, on either route, will drive your team towards a more accessible product.

<details><summary>Get help from CAIA and VA's accessibility specialists</summary>
 <br>

The **Sitewide Content, Accessibility, and Information Architecture (CAIA)** team is here support your accessibility needs, _no matter how far along you are in the product/feature lifecycle_. 

You can reach out to CAIA whether you're in the Collaboration Cycle or not.

#### How CAIA can help
- **Evaluate** your product at any stage - from wireframe to developed code - and provide feedback and recommendations
- **Provide** screen reader tech support and accessibility-focused observations during user research sessions with users of assistive technology
- **Answer** general questions about accessibility best practices

[Check out the menu of offerings that CAIA provides](https://github.com/department-of-veterans-affairs/va.gov-team/tree/2e5a0a08bd51ae3258de4c9f37754f907e938586/teams/CAIA/accessibility#services-we-offer)

#### Get started with CAIA 🎫
- To start working with CAIA, [submit a CAIA ticket](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/sitewide-content-and-ia-intake-request) 
- Contact the team on Slack via [#sitewide-content-accessibility-ia](https://dsva.slack.com/archives/C01K37HRUAH). 

#### Other ways to contact accessibility specialists
- **Embedded accessibility specialists:** Several product teams have embedded accessibility specialists.
    - If you're on one of those teams, reach out to your specialist for help and advice.
    - If your team does not have a dedicated accessibility specialist, please submit a ticket with CAIA for support.
- **Slack**: VA accessibility specialists are available on Slack the [#accessibility-help](https://dsva.slack.com/archives/C8E985R32) channel.
    - No worries if you don't know what exactly you need.
    - Ask your question and a specialist will help you as soon as possible.
- **Office Hours**: You can also reach CAIA by attending their weekly office hours.
    - As of 12/21/2023 Office Hours are on Tuesdays at 4 PM Eastern.
    - Join via [Zoom](https://coformaco.zoom.us/j/83992174780?pwd=Tk1jZ0o3MWxLcHFMWTM1S3ZrcytqUT09).
</details>


### How accessibility specialists provide feedback

Accessibility specialists may engage with you in Slack, leave comments on your Figma mockups, write up their findings, or create formal GitHub issue tickets.

<details><summary>Feedback from the CAIA team</summary>

#### Feedback from the CAIA team
Depending on the VFS team's needs, the content, accessibility, and information architecture CAIA workstreams will work together to review products.
  
  CAIA will adjust to your needs. Depending on the product and team in question, CAIA may opt to provide feedback in the team's Slack channel, or as comments in a mockup.

For more detailed, thorough reviews, CAIA accessibility specialists will write up their findings and add them to GitHub. They'll share a link to the findings with the team via Slack and any related GitHub issue tickets. 
- **Product reviews** include existing and potential accessibility issues, and proposed solutions. In general, this is [what CAIA looks for](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/how-we-audit.md) and [what tools CAIA uses](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/what-accessibility-tools-we-use.md) to audit a product.
- **User research findings** include accessibility issues found during testing, participant quotes, and research synthesis from the CAIA team.

Examples:
- [Design review deliverable](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/Deliverables/Benefits%20Disability%20Experience%20526EZ/202312-design-review.md)
- [Midpoint review deliverable](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/Deliverables/Benefits%20Representation%20Management/2023Nov-accreditedRepAppointWidget-midpointReview.md)
- [User research findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/Deliverables/Core%20Identity%20Team/2023-Aug-accessibility-findings-Identity-Core.md)
</details>

<details><summary>Collaboration Cycle tickets</summary>

#### Collaboration Cycle Design Intent and Midpoint Review Tickets

The Governance team will provide suggestions for how to develop an accessible product based on your user flows, wireframes, and mockups.

Accessibility specialists will document their feedback on the VFS-provided artifacts following the [Must, Should, and Consider Framework](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/must-should-and-consider-framework-for-feedback). They may also provide additional notes that don’t comment on the artifacts themselves but are important for implementation (eg. engineering/coding notes).

#### Collaboration Cycle Staging Review tickets

During a Collaboration Cycle Staging Review, accessibility specialists will review your product. If they find any accessibility issues, they’ll write a ticket for each issue that outlines:
- The issue (often with screenshots or video examples)
- A proposed solution
- The [VA experience standard](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/va-gov-experience-standards) related to the issue
- The [defect severity level](https://depo-platform-documentation.scrollhelp.site/developer-docs/Accessibility-defect-severity-rubric)

Learn more about [Staging Review Issue tickets](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/anatomy-of-a-staging-review-issue-ticket).
</details>

<details><summary>Writing your own tickets</summary>

#### Writing your own tickets

If you’re reviewing your product for accessibility issues, you can write your own tickets to keep track of your findings and close them upon completion. 

[Learn how to write good accessibility tickets](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/shared-support/accessibility/documentation/how-to-write-good-accessibility-tickets.md). And here are [tickets for common accessibility issues](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility/common-issues) to help you get started.

</details>

## Ensure that your work is Section 508 compliant

The VA Section 508 Office validates compliance with federal law mandating accessible information and communication technology. 
- Product teams working on authenticated pages and applications are **required** to submit a VA Section 508 Office Audit Request. We prefer that you submit your request **before launch**, if possible. But you may still launch before you receive the audit.
- The Section 508 Office can also **review your non-HTML documents** (PDF, DOCX) for accessibility issues.
   - [Learn when and how to create accessible non-HTML documents](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/CAIA/accessibility/create-accessible-PDF.md).

[Request support from the VA Section 508 office](https://depo-platform-documentation.scrollhelp.site/developer-docs/request-support-from-the-va-508-office).

## Improve your skills
<details><summary>Join a community</summary>

### A11y Champs
Accessibility Champtions ("a11y champs") is a grassroots, volunteer-led educational program. Anyone working at the VA, with access to the DSVA slack channel, can become an accessibility champion through this curriculum! [Start your A11y Champs journey.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/a11y-champs)

### VA Trauma Community
Rhe VA trauma community is a grassroots, volunteer led multi-disciplinary community focused on maturing our approach to trauma from facilitating research to caring for practitioners. [Learn more about the Trauma Community.](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/shared-support/trauma)

</details>
<details><summary>Learn more about accessibility</summary>

### Accessibility overview
- [18F’s accessibility guide](https://guides.18f.gov/accessibility/)
- [Accessibility roles in government](https://www.section508.gov/manage/roles/)
- 
### Cognitive issues / Traumatic Brain Injury (TBI)
- [Cognitive considerations](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/learning-sessions/abc03-cognitive-considerations)
- How to design for Veterans with [Traumatic Brain Injuries](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2177892586/Traumatic+Brain+Injury+TBI)

### Technical considerations
- [Buttons vs links and action links](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2167832577/Educational+Materials#Buttons-and-Links-and-Action-Links)
- [Focus management](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2167832577/Educational+Materials#Focus-Management) and [focus tracking](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2206531715/Focus+Tracking) `these might be too duplicative??`
- [Headings](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2167832577/Educational+Materials#Headings)
- [Links](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2167832577/Educational+Materials#Links)
- [Live regions](https://vfs.atlassian.net/wiki/spaces/ACP/pages/2167832577/Educational+Materials#Live-Regions)

### Assistive technology
- [Tips for usability testing with people with disabilities](https://www.section508.gov/test/usability-testing-with-people-with-disabilities/)
- [Getting started with keyboard navigation and screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/learning-sessions/abc02-getting-started-with-keyboard-navigation-and-screen-readers)
- [Testing with assistive technology users](https://depo-platform-documentation.scrollhelp.site/research-design/testing-your-prototype-with-assistive-technology-u)
</details>
