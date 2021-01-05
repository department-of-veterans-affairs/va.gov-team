   <!-- Document created by Jennifer Strickland. Modified and maintained by Josh Kim and/or current VSA accessibility specialist. -->

# VSA Accessibility Review Process 


<hr/>

**[Rate this documentation](https://forms.gle/gszTXJMuZdegc4k38)**

We'd like to know if the documentation is meeting your needs, and welcome your feedback!

<hr/>


For reference: [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)


## Table of contents

* [Small projects](#small-projects)

    * [Feature workflow](#feature-workflow)
    
* [Product reviews](#product-reviews)

* [Design reviews](#design-reviews)

    * [Addressing design issues](#addressing-design-issues)
    
    * [What is the accessibility specialist looking for during design reviews](#what-is-the-accessibility-specialist-looking-for-during-design-reviews)
    
    * [Accessibility design collaboration](#accessibility-design-collaboration)
    
* [Development reviews](#development-reviews)

    * [Available resources](#available-resources)
    
    * [Development intent review](#development-intent-review)

    * [Spot check](#spot-check)

    * [Staging review](#staging-review)
    
    * [VA 508 Office review](#va-508-office-review)
    
    * [Post-launch audit](#post-launch-audit)

* [QA](#qa)

<!-- This review process is a conversation. Please contact Josh Kim with suggestions, challenges, or any other questions/concerns. 

<!-- ## Table of Contents

<!-- - [References by Team](#references-by-team)
- [Small Projects](#small-projects)
- [Design Reviews](#design-reviews)
  - Design Intent Checkpoint
  - Pre-usability Testing Design Review
  - Design QA Review Checkpoint
  - [Design Issues Documentation](#design-issues-documentation)
  - [What is the accessibility specialist looking for during design](#what-is-the-accessibility-specialist-looking-for-during-design)
  - [Accessibility Design Collaboration](#accessibility-design-collaboration)
- [Development Reviews](#development-reviews)
  - Design-Development Intent Checkpoint
  - 508 Pre-launch Review Checkpoint
 
 <!-- ## References by Team

<!-- * [VSP Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md)

<!-- * [VSA Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/review-process.md#design-review)

<!-- * [VSP Content Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-review-process.md)

<!-- * [VSP IA Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/working-with-ia.md)

<!-- * [VSP Research Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md)

<!-- * [VSP Accessibility Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/89faefbdb1e7ce1c783a8cda1aafe9bf7cb0a3b5/platform/accessibility/vsp-508-review-process.md)
 -->
 
 ## Small projects
 For small projects that are only a few days of work, there's no need to go through the whole review process. Instead, message the VSA accessibility specialist (Josh Kim) in Slack to arrange a review / collaboration. Be sure to reach out to the VSP practice areas in [#vfs-platform-support](https://dsva.slack.com/channels/vfs-platform-support) to see what else your project may need given your circumstances.
 
 ### Feature workflow
 
* **Design & research** - Once design or research plan is ready, request an accessibility review by messaging Josh. Together we'll discuss any recommendations, concerns, and next steps. This may be async or a meeting, depending on the needs.
 
 * **Front-end development** - Before coding any designs, check with accessibility for semantic markup guidance and any known concerns. Conduct manual and automated testing as documented in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md). Larger accessibility audits, such as Staging Review and Full Accessibility & 508 Office Audit, are part of the VSP Collab Cycle. When bandwidth allows, the accessibility specialist may provide spot checks of work ahead of these audits.

<hr>

## Product reviews

While the team is crafting their product outline at the start of a project, this is a good time to collaborate with the VSA accessibility specialist. There area couple of templates, the [accessibility testing plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/product/test-plan.md) and [use cases ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md#product-use-cases-template) that are recommended to pair with each product outline. This is when it's a good time to discuss potential inclusive design needs and providing guidance for the team to ensure the outcome is accessible.

<hr>

## Design reviews

See [VSP Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md) official checkpoints for medium-to-large projects.

Designers are encouraged to collaborate with the VSA accessibility specialist throughout the design work to ensure designs and plans are inclusive and accessible. Feel free to tag them in your team's Slack channel, Github issues and PRs, or DM for guidance. Teams are also encouraged to request design collaboration reviews. These may happen asynchronously or in a scheduled meeting.

**[>> Request a design collaboration review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+joshkimux&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME)** 

<!-- ~~For medium to large projects, there are **three required checkpoints**. These reviews are integrated with [VSP's Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#whentorequest) and align with [VSA's Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/vsa-design-review-process.md). Accessibility, Content, IA, and Design practice reviews happen in the same checkpoint. VSA team members are also welcome to additional, casual checks with accessibility specialists.

<!-- ~~1. **Design Intent Checkpoint** — *Integrated with VSP design check-ins*  <br/> **[>> Schedule a design intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+VSA+design+review+for+ENTER_PRODUCT_NAME)**

<!-- ~~2. **Pre-Usability Testing Design Review**, integrated with VSP, is conducted when the designs are built on static screens or prototypes and provides more specific feedback like relevant design system components and patterns, VA.gov URLS of relevant patterns in production, and staging server information and test user accounts. Accessibility provides inclusive feedback on recruiting diverse participants and considering additional testing scenarios.  <br/> **[>> Schedule a pre-usability testing review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+VSA+design+review+for+ENTER_PRODUCT_NAME)**

<!-- ~~3. **Design QA Review Checkpoint** — *Integrated with VSP*, when design is final.<br/>
**[>> Schedule a design QA review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+VSA+design+review+for+ENTER_PRODUCT_NAME)**


<!-- ### Design Issues Documentation

<!-- When a design review is requested using the issue ticket templates linked above, it will be assigned to the reviewing individuals. VSP will then schedule the design review including those reviewers. The issue ticket itemizes what to include so that reviewers may assess the materials ahead of the meeting. After the design review, feedback will be collected in comments on the issue ticket, and assignees set to include the designer, PM, and accessibility specialist to use as working reference.
-->

### Addressing design issues

Once the designer and PM review feedback, please add a new comment on the issue with decisions made, then CC each of the reviewers in the comment for visibility. Once all issues are addressed, the ticket is closed with a final comment indicating that the accessibility specialist validated the issue is remedied, @-comment designer who opened issue, and close ticket/issue.


 ### What is the accessibility specialist looking for during design reviews?
 
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
      
### Accessibility design collaboration

* For VSA projects, involve the VSA accessibility specialist in early discussions about needs, priorities, concepts, research planning, and direction to ensure potential accessibility concerns are nipped in the bud. This could look like an initial kickoff with all team members, plus shared resources, in attendance, or if it is for a smaller component scheduling a call to review the work together. 
* Include the VSA accessibility specialist in standups and reviews to ensure inclusive design is woven through the efforts.
* Review initial design sketches, mockups, and research plans with the accessibility specialist for inclusion and accessibility considerations.
* Please consider the accessibility specialist as a collaborative partner as work continues. 
* For guidance during design, [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/WCAG-Checklist.md)

<hr>

## Development reviews

<!-- There are **four required checkpoints**. For reviews, the VSA accessibility specialist will open a development 508 review epic in Zenhub, and assign findings to the responsible project manager. Project teams should include the accessibility specialist in pull request reviews. Teams should @-comment the accessibility specialist in a Zenhub issue comment when code fixes are ready. The accessibility specialist will verify issues are fixed and close the issue or offer guidance if the issue is not fixed. Open issues are surfaced in the [508 Product Review List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).
-->

Teams are encouraged to reach out for casual check-ins. Feel free to message Josh Kim. 

 ### Available resources:

- Review [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/WCAG-Checklist.md)

- Review and follow the development relevant steps in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) - especially conducting manual and automated tests as part of your dev process.



### Development intent review

This collaboration point happens _before beginning development_. The accessibility specialist(s) will review the design with the developer(s) to:

    a. Discuss approach to take with development, for WCAG compliance

    b. Identify what components and semantic HTML would be appropriate

    c. Identify any accessibility issues and how to address

**[>> Schedule a dev intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+jenstrickland&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME)** 

### Spot check

PMs or developers may [request a spot check accessibility review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+joshkimux&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME) for an early accessibility review of work in-progress. The ability to offer this review depends on the VSA accessibility specialists' workload.

**[>> Schedule a spot check review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+joshkimux&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME)** 



### Staging Review 
(previously the pre-launch 508 review, now coordinated with VSP practice areas) 

  - Review and follow the steps in the [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md). 
  - Review the guidance in the [VSP accessibility staging review documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/de7ab3f6310b46569ff48d0796338fc50863f03c/platform/accessibility/guidance/staging-review-processes.md).

    
### Full Accessibility & VA 508 Office Audit

The VSP and VSA accessibility specialists will forward teams' webpages and applications to the VA 508 office after production launch. Accessibility specialists meet with the 508 office representative every month, and will notify them of new products to test during that meeting, or via email as needed.

While the Staging Review and Full Accessibility Audit look similar, they are separate. The Full A11y & 508 Office Audit will consist of the VSA a11y specialist running through the work again, then sending to the VA 508 Office for their audit. Hopefully issues caught during the Staging Review could be remediated. Any known issues need to be itemized and linked in the Full A11y Audit request. We send those to the VA 508 Office, so they know we're aware of those.


### Post-launch Audit 

Review the guidance in the [VSP Accessibility Post-Launch Audit Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/de7ab3f6310b46569ff48d0796338fc50863f03c/platform/accessibility/guidance/post-launch-audit-processes.md).

<!-- * **508 Post-launch Audit**
  Applications still need a full accessibility audit. This audit was previously done during the pre-launch phase, but will now be done immediately post-launch to support speed and agility. Any findings during the post-launch audit will be forwarded to the VA 508 office as known items. This should prevent duplicate logging when the VA 508 office conducts their own smoke test.

<!--   Post-launch audits will be beneficial for finding usability issues that would not otherwise appear on a scan report. These findings will drive future innovation and research sessions. Findings will also drive improvements to the design system and overall accessibility guidance.

<!--   The VSP post-launch audit will focus on manual testing with mobile and assistive technology:
  
 <!--  - Windows 7/10 IE11 + JAWS
  - Windows 7/10 Chrome + JAWS
  - Windows 7/10 NVDA + Firefox
  - MacOS Safari + VoiceOver
  - iOS and Android mobile devices as available
  - Additional browsers such as AVG, Waterfox
-->

<hr>

## QA    
Here's a link to the [QA Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/teams/qa/vsa-qa-process.md), for your convenience.
