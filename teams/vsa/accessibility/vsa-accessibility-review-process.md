# VSA Accessibility Design & Development Review Process 

For reference: [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)

<hr>

**Please note: VSP is iterating on their review process. We expect the next iteration at the beginning of February.** 

<hr>

This review process is a conversation. Please contact Jennifer Strickland in Slack with suggestions, challenges, or any other questions/concerns. 

## Table of Contents

- [References by Team](#references-by-team)
- [Small Projects](#small-projects)
- [Design Reviews](#design-reviews)
  - Design Intent Checkpoint
  - Pre-usability Testing Design Review
  - Design QA Review Checkpoint
  - [Design Issues Documentation](#design-issues-documentation)
  - [What is the accessibility specialist looking for](#what-is-the-accessibility-specialist-looking-for)
  - [Accessibility Design Collaboration](#accessibility-design-collaboration)
- [Development Reviews](#development-reviews)
  - Design-Development Intent Checkpoint
  - 508 Pre-launch Review Checkpoint
 
 ## References by Team

* [VSP Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md)

* [VSA Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/review-process.md#design-review)

* [VSP Content Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)

* [VSP IA Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md)

* [VSP Research Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md)

* [VSP Accessibility Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/89faefbdb1e7ce1c783a8cda1aafe9bf7cb0a3b5/platform/accessibility/vsp-508-review-process.md)
 
 ## Small Projects
 For small projects that are only a few days of work, there's no need to go through the whole review process. Instead, message the VSA accessibility specialist (Jennifer Strickland) in Slack to arrange a review.
 
 ### Feature Workflow
 
* **Design & Research** - Once design or research plan is ready, request an accessibility design check by messaging Jennifer. Together we'll discuss any concerns and next steps.
 
 * **Front-end Development** - Conduct manual and automated testing as documented in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md). Proceed to [Development Review](#development-review) Step 2. 

## Design Reviews

For medium to large projects, there are **three required checkpoints**. These reviews are integrated with [VSP's Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#whentorequest) and align with [VSA's Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/vsa-design-review-process.md). Accessibility, Content, IA, and Design practice reviews happen in the same checkpoint. VSA team members are also welcome to additional, casual checks with accessibility specialists.

1. **Design Intent Checkpoint** — *Integrated with VSP design check-ins*  <br/> **[>> Schedule a design intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)**

2. **Pre-usability Testing Design Review**, integrated with VSP, is conducted when the designs are built on static screens or prototypes and provides more specific feedback like relevant design system components and patterns, VA.gov URLS of relevant patterns in production, and staging server information and test user accounts. Accessibility provides inclusive feedback on recruiting diverse participants and considering additional testing scenarios.  <br/> **[>> Schedule a pre-usability testing review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)**

3. **Design QA Review Checkpoint** — *Integrated with VSP*, when design is final.<br/>
**[>> Schedule a design QA review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review.md&title=Request+design+review+for+ENTER_PRODUCT_NAME)**

### Design Issues Documentation

When a design review is requested using the issue ticket templates linked above, it will be assigned to the reviewing individuals. VSP will then schedule the design review including those reviewers. The issue ticket itemizes what to include so that reviewers may assess the materials ahead of the meeting. After the design review, feedback will be collected in comments on the issue ticket, and assignees set to include the designer, PM, and accessibility specialist to use as working reference.

Once the designer and PM review feedback, please add a new comment on the issue with decisions made, then CC each of the reviewers in the comment for visibility. Once all issues are addressed, the ticket is closed with a final comment, “All issues are addressed”, @-comment designer who opened issue, and close ticket/issue.


 ### What is the accessibility specialist looking for?
 
 The accessibility specialist will review for the following items to align with WCAG:

* Mobile design - including performance implications for assistive technology, touch interactions, and impact on diverse audience (such as those with challenging connectivity or limited data plans)
    
* Laptop/desktop design
        
* Semantic heading order

* Spacing of interactive items – for example, is the spacing sufficient to ensure people don't accidentally select something other than what they meant to?
        
* Cognitive Considerations – in the words of [Steve Krug](http://sensible.com/), *don't make me think!* Design should be clear, not overloaded, and not trigger any vestibular conditions.
        
* Plain language - supplementing the content review, accessibility will ensure compliance with WCAG.
        
* Consistency & best practices to align with the [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)
        
* Mobile-only interactions
        
* Touch interactions
        
* Performance budget consideration
      
### Accessibility Design Collaboration

* For VSA projects, involve the VSA accessibility specialist in early discussions about needs, priorities, concepts, research planning, and direction to ensure potential accessibility concerns are nipped in the bud. This could look like an initial kickoff with all team members, plus shared resources, in attendance, or if it is for a smaller component scheduling a call to review the work together. 
* Include the VSA accessibility specialist in standups and reviews to ensure inclusive design is woven through the efforts.
* Review initial design sketches, mockups, and research plans with the accessibility specialist for inclusion and accessibility considerations.
* Please consider the accessibility specialist as a collaborative partner as work continues. 
* For guidance during design, [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)

## Development Reviews

There are **four required checkpoints**. For reviews, the VSA accessibility specialist will open a development 508 review epic in Zenhub, and assign findings to the responsible project manager. Project teams should include the accessibility specialist in pull request reviews. Teams should @-comment the accessibility specialist in a Zenhub issue comment when code fixes are ready. The accessibility specialist will verify issues are fixed and close the issue or offer guidance if the issue is not fixed. Open issues are surfaced in the [508 Product Review List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).

Teams are welcome to reach out for casual check-ins. Feel free to message Jennifer Strickland. If you'd like, you may request a spot check accessibility review for earlier insight. <br/> **[>> Schedule a spot check accessibility review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=request_dev_review_vsa.md&title=Request+development+review+for+ENTER_PRODUCT_NAME)**

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
    
2. **508 Pre-launch Review Checkpoint** 

    a. Review and follow the steps in the [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)
    b. If your project is code stable in Staging, _**[request a 508 Pre-launch Review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=request_dev_review_vsa.md&title=Request+development+review+for+ENTER_PRODUCT_NAME)**_

    c. Accessibility specialist will conduct an [accessibility audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-dev-review-step-by-step.md), and note issues in an epic, assigning the relevant product manager.
    
3. **508 Office Review**<br/>
  The VSP and VSA accessibility specialists will forward teams' webpages and applications to the VA 508 office after production launch. Accessibility specialists meet with the 508 office representative every month, and will notify them of new products to test during that meeting, or via email as needed.

4. **508 Post-launch Audit**
  Applications still need a full accessibility audit. This audit was previously done during the pre-launch phase, but will now be done immediately post-launch to support speed and agility. Any findings during the post-launch audit will be forwarded to the VA 508 office as known items. This should prevent duplicate logging when the VA 508 office conducts their own smoke test.

  Post-launch audits will be beneficial for finding usability issues that would not otherwise appear on a scan report. These findings will drive future innovation and research sessions. Findings will also drive improvements to the design system and overall accessibility guidance.

  The VSP post-launch audit will focus on manual testing with mobile and assistive technology:
  
  - Windows 7/10 IE11 + JAWS
  - Windows 7/10 Chrome + JAWS
  - Windows 7/10 NVDA + Firefox
  - MacOS Safari + VoiceOver
  - iOS and Android mobile devices as available
  - Additional browsers such as AVG, Waterfox

## QA    
Here's a link to the [QA Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/qa/vsa-qa-process.md), for your convenience.
