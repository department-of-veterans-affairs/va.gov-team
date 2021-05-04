   <!-- Document created by Jennifer Strickland. Modified and maintained by Josh Kim and/or current VSA accessibility specialist. -->

# VSA Accessibility Review Process 


<hr/>

**[Rate this documentation](https://forms.gle/g7PDaQrNScjiKwsK9)**

We'd like to know if the documentation is meeting your needs, and welcome your feedback!

<hr/>


For reference: [508, Accessibility, and Inclusive Design Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)


## Table of contents
    
* [Product reviews](#product-reviews)

* [Design reviews](#design-reviews)

    * [Addressing design issues](#addressing-design-issues)
    
    * [What do we look for during a design review?](#what-do-we-look-for-during-a-design-review?)
    
    * [Accessibility design collaboration](#accessibility-design-collaboration)
    
* [Development reviews](#development-reviews)

    * [Available resources](#available-resources)
    
    * [Development intent review](#development-intent-review)

    * [Spot check](#spot-check)

    * [Staging review](#staging-review)
    
    * [VA 508 Office review](#va-508-office-review)

* [Small projects](#small-projects)

<hr>

## Product reviews

Collaborate with us when crafting your product outline at the start of the project to ensure accessibility is baked in from the start of the process. Doing so will likely reduce the amount of defect tickets and remediation work later in the collaboration cycle.

[Pair the product outline with written use cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/product-use-cases-template.md#product-use-cases-template).

If you have the bandwidth, please [reference the accessibility testing plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/product/test-plan.md).

<hr>

## Design reviews

[See VSP Collaboration Cycle official checkpoints](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md) for medium-to-large projects.

Collaborate with us early and often to ensure research plans and designs are inclusive and accessible to Veterans. Feel free to informally reach out to us in your team's Slack channel, by direct message, or tagging us in any relevant github issues and PRs. 

For wireframes or mockups that are _not_ coded in staging, please reach out to Josh @joshkimux for review as they will not be accessible to a screen reader. We strongly recommend reviewing a live version of your design with Angela @angelafowler82 as well during her office hours on Friday.

For a more thorough review outside of the collaboration cycle, create a spot check ticket for your design. We'll provide tickets that are prioritized by defect level within an epic for you to work through.

**[>> Request a spot check for your design](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joshkimux%2C+angelafowler82&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME)** 

<!-- ~~For medium to large projects, there are **three required checkpoints**. These reviews are integrated with [VSP's Design Rules of Engagement](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/working-with-platform-design-team.md#whentorequest) and align with [VSA's Design Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/design/vsa-design-review-process.md). Accessibility, Content, IA, and Design practice reviews happen in the same checkpoint. VSA team members are also welcome to additional, casual checks with accessibility specialists.

<!-- ~~1. **Design Intent Checkpoint** — *Integrated with VSP design check-ins*  <br/> **[>> Schedule a design intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+VSA+design+review+for+ENTER_PRODUCT_NAME)**

<!-- ~~2. **Pre-Usability Testing Design Review**, integrated with VSP, is conducted when the designs are built on static screens or prototypes and provides more specific feedback like relevant design system components and patterns, VA.gov URLS of relevant patterns in production, and staging server information and test user accounts. Accessibility provides inclusive feedback on recruiting diverse participants and considering additional testing scenarios.  <br/> **[>> Schedule a pre-usability testing review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+VSA+design+review+for+ENTER_PRODUCT_NAME)**

<!-- ~~3. **Design QA Review Checkpoint** — *Integrated with VSP*, when design is final.<br/>
**[>> Schedule a design QA review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=emilywaggoner%2C+sshein%2C+CrystabelReiter%2Cjenstrickland%2C+1copenut%2C+tzelei123%2C+meganhkelley%2C+peggygannon&labels=508%2FAccessibility%2C+design%2C+design+review%2C+product+support&template=request_design_review_vsa.md&title=Request+VSA+design+review+for+ENTER_PRODUCT_NAME)**


<!-- ### Design Issues Documentation

<!-- When a design review is requested using the issue ticket templates linked above, it will be assigned to the reviewing individuals. VSP will then schedule the design review including those reviewers. The issue ticket itemizes what to include so that reviewers may assess the materials ahead of the meeting. After the design review, feedback will be collected in comments on the issue ticket, and assignees set to include the designer, PM, and accessibility specialist to use as working reference.
-->

### Addressing design issues

Once the designer and PM review feedback:
- add a new comment on the issue with decisions made, 
- tag each of the reviewers in the comment for visibility

Once all issues are addressed:
- validate with an accessiblity specialist that the issue was remediated (can be informal via dm or a slack thread)
- comment on the ticket the accessibility specialist who validated the fix and the designer who opened the issue
- close the ticket


 ### What do we look for during a design review?
 
We'll review for the following items to align with WCAG:

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

We don't expect anyone to be an expert in inclusive research, design, or development. That's why we're here to help!

Reach out to us early and often about needs, priorities, and research planning to ensure potential accessibility concerns are nipped in the bud. This may involve:
- Including us in standups and team meetings
- Sending us your design sketches, mockups, and research plans for review
- Joining Angela's office hours (message us for an invite on slack)

<hr>

## Development reviews

<!-- There are **four required checkpoints**. For reviews, the VSA accessibility specialist will open a development 508 review epic in Zenhub, and assign findings to the responsible project manager. Project teams should include the accessibility specialist in pull request reviews. Teams should @-comment the accessibility specialist in a Zenhub issue comment when code fixes are ready. The accessibility specialist will verify issues are fixed and close the issue or offer guidance if the issue is not fixed. Open issues are surfaced in the [508 Product Review List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md).
-->

Reach out to us early and often through slack or github for casual or formal check ins. We recommend reaching out to:
- Josh for catching potential defects in your code and for remediating defect tickets
- Angela for screen reader expectations, testing, and guidance

 ### Available resources:

- Review and follow the development relevant steps in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) - especially conducting manual and automated tests as part of your dev process.
- Join Angela's office hours to demo your live code with a screen reader on Fridays (message us for an invite)


### Development intent review

We're available to help developers interpret designs through a dev intent review:

    a. Discuss approach to take with development, for WCAG compliance

    b. Identify what components and semantic HTML would be appropriate

    c. Identify any accessibility issues and how to address

**[>> Request a dev intent review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=joshkimux%2C+angelafowler82&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME)** 


### Spot check

PMs or developers may also request for an early accessibility review of a work in-progress. Doing so can help flag any potential launchblockers ahead of the staging review.

**[>> Schedule a spot check review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=1Copenut%2C+joshkimux&labels=508%2FAccessibility%2C+development+review%2C+product+support&template=vsa_request_dev_review.md&title=Request+a+VSA+dev+intent+or+spot+check+review+for+ENTER_PRODUCT_NAME)** 


### Staging Review 

  - Review and follow the steps in the [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md). 
  - Review the guidance in the [VSP accessibility staging review documentation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/de7ab3f6310b46569ff48d0796338fc50863f03c/platform/accessibility/guidance/staging-review-processes.md).

    
### Full Accessibility & VA 508 Office Audit

VSP and VSA accessibility specialists will forward teams' webpages and applications to the VA 508 office after production launch. Accessibility specialists meet with the 508 office representative every month, and will notify them of new products to test during that meeting, or via email as needed.

#### Difference between the Staging Review and Full Accessibility Audit
While the Staging Review and Full Accessibility Audit look similar, they are separate. The full audit includes:
- Confirming issues caught in the staging review have been remediated
- Testing with more screen reader and device combinations
- Reviewing any new additions since the staging review
- Sending any known unresolved issues to the VA 508 office

 <hr/>
 
 ## Small projects
For small projects that are only a few days of work, there's no need to go through the whole review process. Instead, message your VSA accessibility specialist (Josh or Angela) in Slack to set up an informal async or call review.
 
 ### Feature workflow
 
* **Design & research** - Once your design or research plan is ready, request an informal review by slacking Josh or Angela. We'll provide recommendations for inclusive research and flag any potential concerns. This will reduce defect tickets later in the workflow.
 
* **Front-end development** - Before coding any designs, check with accessibility for semantic markup guidance and any known concerns. Conduct manual and automated testing as documented in the [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md). Larger accessibility audits, such as Staging Review and Full Accessibility & 508 Office Audit, are part of the VSP Collab Cycle. You can also reach out to your accessibility specialist for a spot check of work ahead of these audits which can give an early jump at solving any potential launchblocking tickets.
