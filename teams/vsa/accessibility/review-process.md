# Accessibility Design & Development Review Process 

For reference: [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)

## Table of Contents

- [Milestones](#milestones)
- [Design Review](#design-review)
  - Design Intent Checkpoint
  - Design Review Checkpoint
- [Development Review](#development-review)
  - Design-Development Intent Checkpoint
  - Pre-launch 508 Review Checkpoint
  
## Milestones
*Will be updated to align with the forthcoming VSP Design Rules of Engagement*
- Assigned to project
- Project kickoff
- Design Intent Review
- Design Review
- Design-Development Intent Review
- Pre-launch 508 Review

## Accessibility Design Review Process

There are two checkpoints
1. **Design Intent Checkpoint** — Integrated with VSP design check-ins: To schedule an intent review, use the Github issue template (to be created!)

    a. For VSA projects, involve the VSA accessibility specialist in early discussions about needs, priorities, concepts, research planning, and direction to ensure potential accessibility concerns are nipped in the bud. This could look like an initial kickoff with all team members, plus shared resources, in attendance, or if it is for a smaller component scheduling a call to review the work together. 

    b. Include the VSA accessibility specialist in standups and reviews to ensure inclusive design is woven through the efforts.

    c. Review initial design sketches, mockups, and research plans with the accessibility specialist for inclusion and accessibility considerations.

    d. Please consider the accessibility specialist as a collaborative partner as work continues. 

    e. For guidance during design, [Future State] review WCAG 2.1 Checklist (similar: https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf)

2. **Design Review Checkpoint** — Integrated with VSP:

  a. To schedule a review, use the Github issue template (compassionate one to be created!)

  b. Include what project it’s for

  c. Where in the process is this? Initial concept, initial mockup, final mockup

  d. Point of contact

  e. Preferred times, if applicable

  f. _Automagically_ creates a Zenhub ticket (assign to Emily, Crystabel, and VSA Accessibility Specialist)

  g. VSP / Accessibility Specialist will schedule design review

  h. Accessibility design review entails [Accessibility Design Review Checklist](https://docs.google.com/spreadsheets/d/19ZH_1imuTKHQfyMbOU5IKHwPDb_LGUqnnwoeMbKXH9I/edit#gid=2089055656) *Google sheets temporarily, for use by reviewers*

    i. Mobile design first, then ‘laptop’/’desktop’
    
    ii. Semantic heading order, spacing of interactive items, cognitive impact, use of plain language, consistency, best practices, mobile-only interactions, touch interactions, performance budget
  
    iii. During design review, issues will be noted. 
  
    iv. Accessibility specialist will create an epic in Zenhub to capture issues. 
  
    v. Team will coordinate another design review after designs are updated by @-comment in Zenhub in the Github issue.
  
    vi. Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment designer who opened issue, and close ticket/issue.

## Development Accessibility Review Checkpoints

There are two checkpoints:

1. **Design-Development Intent Checkpoint**

  a. Review design with the VSP/VSA to discuss approach to take with development

  b. Identify what components and semantic HTML would be appropriate

  c. Identify any accessibility issues and how to address

  d. During engineering, here are some available resources:
  
    i. [Future State]  Review WCAG 2.1 Checklist (similar: [https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf](https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf)
  
    ii. Review and follow the development relevant steps in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)
  
    iii. Developers may request a casual accessibility audit, akin to the design intent review
  
    iv. [Sample of early review, issues noted in Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2553)
  
    v. [VSA Audit Ticket Template (draft)](https://docs.google.com/document/d/1O6r5WSjpI2jDvgPkNNCCFmUYS8PJpUqf6nP55tEKISo/edit?ts=5db8af69#)
    
2. **Pre-launch 508 Review Checkpoint**

  a. Review and follow the steps in the [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)

  b. [Request a Pre-launch 508 Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)

  c. Accessibility specialist review [Dev Review Checklist](https://docs.google.com/spreadsheets/d/19ZH_1imuTKHQfyMbOU5IKHwPDb_LGUqnnwoeMbKXH9I/edit#gid=0), *Google Sheet, for use by reviewer*

  d. During review, issues will be noted by the accessibility specialist:
  
    i. Accessibility specialist will create an epic in Zenhub to capture issues.
  
    ii. [Sample of backlog](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2670)
  
    iii. [Sample of epic](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2843)
  
    iv. Team will coordinate another review after work is updated by @-comment in Zenhub in the Github issue.

    v. Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment developer who opened issue, and close ticket/issue.
