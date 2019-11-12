# VSA Accessibility Design & Development Review Process 

For reference: [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)

## Table of Contents

- [Small projects](#small-projects)
- [Milestones](#milestones)
- [Design Review](#design-review)
  - Design Intent Checkpoint
  - Design Review Checkpoint
- [Development Review](#development-review)
  - Design-Development Intent Checkpoint
  - Pre-launch 508 Review Checkpoint
 
 ## Small Projects
 For small projects that are only a few days of work, there's no need to go through the whole review process. Instead, message the VSA accessibility specialist (Jennifer Strickland) in Slack to arrange a review.
 
## Milestones
*Will be updated to align with the forthcoming VSP Design Rules of Engagement*
- Assigned to project
- Project kickoff
- Design Intent Review
- Design Review
- Design-Development Intent Review
- Pre-launch 508 Review

## Design Review

For medium to large projects, there are two checkpoints. 
1. **Design Intent Checkpoint** — *Integrated with VSP design check-ins:* [Schedule a design intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+CrystabelReiter%2Cjenstrickland&labels=508%2FAccessibility%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)

    a. For VSA projects, involve the VSA accessibility specialist in early discussions about needs, priorities, concepts, research planning, and direction to ensure potential accessibility concerns are nipped in the bud. This could look like an initial kickoff with all team members, plus shared resources, in attendance, or if it is for a smaller component scheduling a call to review the work together. 

    b. Include the VSA accessibility specialist in standups and reviews to ensure inclusive design is woven through the efforts.

    c. Review initial design sketches, mockups, and research plans with the accessibility specialist for inclusion and accessibility considerations.

    d. Please consider the accessibility specialist as a collaborative partner as work continues. 

    e. For guidance during design, [Future State] review WCAG 2.1 Checklist (similar: https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf)

2. **Design Review Checkpoint** — *Integrated with VSP* — [Schedule a design review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+CrystabelReiter%2Cjenstrickland&labels=508%2FAccessibility%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)

    The accessibility special will review the following items to align with WCAG:

    a. Mobile design - including performance implications for assistive technology and impact on the diverse audience (such as those with challenging connectivity or limited data plans)
    
    b. Laptop/desktop design
        
    c. Semantic heading order

    d. Spacing of interactive items – for example, is the spacing sufficient to ensure people don't accidentally select something other than what they meant to?
        
    e. Cognitive impact – in the words of [Steve Krug](http://sensible.com/), *don't make me think!* Design should be clear, not overwhelming.
        
    f. Plain language - supplementing the content review, accessibility will ensure compliance with WCAG.
        
    g. Consistency & best practices to align with the [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)
        
    h. Mobile-only interactions
        
    i. Touch interactions
        
    j. Performance budget consideration
  
    Team will coordinate another design review after designs are updated by @-comment in Zenhub in the Github issue.
  
    Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment designer who opened issue, and close ticket/issue.

## Development Review

There are two checkpoints:

1. **Design-Development Intent Checkpoint** — [Schedule a design-dev intent review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/request_dev_review_vsa.md) - This review happens as the design is passed to development, before beginning development. The accessibility specialist(s) will review the design with the developer(s) to:

    a. Discuss approach to take with development, for WCAG compliance

    b. Identify what components and semantic HTML would be appropriate

    c. Identify any accessibility issues and how to address

    d. During engineering, here are some available resources:
  
        i. [Future State]  Review WCAG 2.1 Checklist (similar: [https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf](https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf)
  
        ii. Review and follow the development relevant steps in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)
  
        iii. Developers may request a casual accessibility audit, akin to the design intent review
  
        iv. [Sample of early review, issues noted in Github](https://github.com/department-of-veterans-affairs/va.gov-team/issues/2553)
  
        v. [VSA Audit Ticket Template (draft)](https://docs.google.com/document/d/1O6r5WSjpI2jDvgPkNNCCFmUYS8PJpUqf6nP55tEKISo/edit?ts=5db8af69#)
    
2. **Pre-launch 508 Review Checkpoint** - This would happen well before launch, to allow the 508 office time to review, and then address any issues uncovered.

    a. Review and follow the steps in the [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)
    
    b. If you'd like, you may request an spot check accessibility review ahead of the Pre-launch 508 Review: [Schedule an accessibility review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/.github/ISSUE_TEMPLATE/request_dev_review_vsa.md)

    b. If your project is code stable in Staging, [request a Pre-launch 508 Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)

    c. Accessibility specialist review will check the following:
  
        i. axe browser scan
        
        ii. Lighthouse scan
        
        iii. JAWS, NVDA, and VoiceOver read-through
        
        iv. Keyboard navigation
        
        v. Color contrast & blindness
        
        vi. In-app Browser Check
        
        vii. Zoom to 400% at 1280px

    d. During review, issues will be noted by the accessibility specialist:
  
        i. Accessibility specialist will create an epic in Zenhub to capture issues.
  
        ii. [Sample of backlog](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2670)
  
        iii. [Sample of epic](https://app.zenhub.com/workspaces/vsp-5cedc9cce6e3335dc5a49fc4/issues/department-of-veterans-affairs/va.gov-team/2843)
  
        iv. Team will coordinate another review after work is updated by @-comment in Zenhub in the Github issue.

        v. Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment developer who opened issue, and close ticket/issue.
