# VSA Accessibility Design & Development Review Process 

For reference: [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)

**Please note:**  <br/>This review process is a conversation. Please contact Jennifer Strickland in Slack with suggestions, challenges, or any other questions/concerns. 

## Table of Contents

- [Small projects](#small-projects)
- [Milestones](#milestones)
- [Design Reviews](#design-reviews)
  - Design Intent Checkpoint
  - Pre-usability Testing Design Review
  - Design QA Review Checkpoint
  - [What is the Accessibility Specialist looking for](#what-is-the-accessibility-specialist-looking-for)
  - [Accessibility Design Collaboration](#accessibility-design-collaboration)
  - [References by Team](#references-by-team)
- [Development Reviews](#development-reviews)
  - Design-Development Intent Checkpoint
  - 508 Pre-launch Review Checkpoint
 
 ## Small Projects
 For small projects that are only a few days of work, there's no need to go through the whole review process. Instead, message the VSA accessibility specialist (Jennifer Strickland) in Slack to arrange a review.
 
 ### Feature Workflow
 
* **Design & Research** - Once design or research plan is ready, request an accessibility design check by messaging Jennifer. Together we'll discuss any concerns and next steps.
 
 * **Front-end Development** - Conduct manual and automated testing as documented in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md). Proceed to [Development Review](#development-review) Step 2. 
 
## Milestones
*Will be updated to ensure alignment with the forthcoming VSP Design and Development Rules of Engagement*
- Assigned to project
- Project kickoff
- Design
  - Design Intent Review
  - Pre-usability Testing Design Review
  - Design QA Review
- Development
  - Design-Development Intent Review
  - 508 Pre-launch Review
- QA
- Launch to Production

## Design Reviews

For medium to large projects, there are **three required checkpoints**. These reviews are integrated with [VSP's Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#whentorequest) and align with [VSA's Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/vsa-design-review-process.md). Accessibility, Content, IA, and Design practice reviews happen in the same checkpoint. VSA team members are also welcome to additional, casual checks with accessibility specialists.

When a design review is scheduled by VSP, it will open a design 508 review epic in Zenhub, and assign findings to the responsible project manager. Project teams should coordinate another review after designs are updated. Please add a new comment in the Zenhub issue and @-comment Jennifer Strickland, and CC Emily Waggoner and Crystabel Reiter in the comment for visibility. Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment designer who opened issue, and close ticket/issue.

1. **Design Intent Checkpoint** — *Integrated with VSP design check-ins*  <br/> **[>> Schedule a design intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+CrystabelReiter%2Cjenstrickland&labels=508%2FAccessibility%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)**

2. **Pre-usability Testing Design Review**, integrated with VSP, is conducted when the designs are built on static screens or prototypes and provides more specific feedback like relevant design system components and patterns, VA.gov URLS of relevant patterns in production, and staging server information and test user accounts. Accessibility provides inclusive feedback on recruiting diverse participants and considering additional testing scenarios.  <br/> **[>> Schedule a pre-usability testing review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+CrystabelReiter%2Cjenstrickland&labels=508%2FAccessibility%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)**

3. **Design QA Review Checkpoint** — *Integrated with VSP*, when design is final.<br/>
**[>> Schedule a design QA review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+CrystabelReiter%2Cjenstrickland&labels=508%2FAccessibility%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)**

 ### What is the Accessibility Specialist looking for?
 
 The accessibility specialist will review for the following items to align with WCAG:

* Mobile design - including performance implications for assistive technology and impact on the diverse audience (such as those with challenging connectivity or limited data plans)
    
* Laptop/desktop design
        
* Semantic heading order

* Spacing of interactive items – for example, is the spacing sufficient to ensure people don't accidentally select something other than what they meant to?
        
* Cognitive Considerations – in the words of [Steve Krug](http://sensible.com/), *don't make me think!* Design should be clear, not overloaded, and not trigger any vestibular conditions.
        
* Plain language - supplementing the content review, accessibility will ensure compliance with WCAG.
        
* Consistency & best practices to align with the [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)
        
* Mobile-only interactions
        
* Touch interactions
        
* Performance budget consideration
  
* Team will coordinate another design review after designs are updated by @-comment in Zenhub in the Github issue.
  
* Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment designer who opened issue, and close ticket/issue.
    
### Accessibility Design Collaboration

* For VSA projects, involve the VSA accessibility specialist in early discussions about needs, priorities, concepts, research planning, and direction to ensure potential accessibility concerns are nipped in the bud. This could look like an initial kickoff with all team members, plus shared resources, in attendance, or if it is for a smaller component scheduling a call to review the work together. 
* Include the VSA accessibility specialist in standups and reviews to ensure inclusive design is woven through the efforts.
* Review initial design sketches, mockups, and research plans with the accessibility specialist for inclusion and accessibility considerations.
* Please consider the accessibility specialist as a collaborative partner as work continues. 
* For guidance during design, [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)

### References by Team

* **VSP** - [VSP Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md)

* **VSA** - [VSA Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/review-process.md#design-review)

* **Content** - [VSP Content Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)

* **IA** - [VSP IA Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md)

* **Research** - [VSP Research Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md)

## Development Reviews

There are **two required checkpoints**. Teams are welcome to reach out for casual check-ins.

1. **Design-Development Intent Checkpoint** <br/>
**[>> Schedule a design-dev intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=request_dev_review_vsa.md&title=Request+development+review+for+ENTER_PRODUCT_NAME)** <br/>
This review happens as the design is passed to development, _before beginning development_. The accessibility specialist(s) will review the design with the developer(s) to:

    a. Discuss approach to take with development, for WCAG compliance

    b. Identify what components and semantic HTML would be appropriate

    c. Identify any accessibility issues and how to address

    d. During engineering, here are some available resources:
      * Review [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)
      * Review and follow the development relevant steps in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) - especially conducting manual and automated tests as part of your dev process.
      * Developers may request a spot check accessibility review.  <br/> **[>> Schedule an accessibility review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=request_dev_review_vsa.md&title=Request+development+review+for+ENTER_PRODUCT_NAME)**
    
2. **508 Pre-launch Review Checkpoint** - This would happen well before launch, to allow the 508 office time to review, and then address any issues uncovered.

    a. Review and follow the steps in the [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)
    
    b. If you'd like, you may request a spot check accessibility review ahead of the official Pre-launch 508 Review, to have earlier insight.  <br/> **[>> Schedule a spot check accessibility review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=request_dev_review_vsa.md&title=Request+development+review+for+ENTER_PRODUCT_NAME)**

    b. If your project is code stable in Staging, _**[request a 508 Pre-launch Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut&labels=508%2FAccessibility%2C+launch+review%2C+product+support&template=508-pre-launch-review-template.md&title=Request+accessibility%2F508+review+for+ENTER_PRODUCT_NAME)**_

    c. Accessibility specialist will conduct an [accessibility audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-dev-review-step-by-step.md).

    d. Issues will be noted by the accessibility specialist in issues within an epic. Team will coordinate another review after work is updated by @-comment in Zenhub in the Github issue. Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment developer who opened issue, and close ticket/issue.
    
Here's a link to the [QA Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/qa/vsa-qa-process.md), for your convenience.
