*Last updated: October 22, 2020*
*Owned by: VSP Accessibility*

# Accessibility

VSP Accessibility supports teams building on VA.gov to ensure that nobody is excluded from using products on VA.gov. We provide best practice guidance throughout the development cycle, build and recommend automated testing tools to flag accessibility issues, reducing the manual effort required to fix issues immediately before launch and post-la

## Table of contents
* [DEPO Platform accessibility standards](#depo-platform-accessibility-standards)
* [How to contact us](#how-to-contact-us)
* [What we do](#what-we-do)
* [Working with us](#working-with-us)
* [Resources and guides](#resources-and-guides)

## DEPO Platform accessibility standards

**Teams need to fix all severity defect 0-4 accessibility issues**.

**Launch requirements:**<br/>
VFS teams must fix[ 508-defect-0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-0) and[ 508-defect-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-1) issues before launching a Veteran-facing service. The DEPO Platform will enforce this minimum standard. <sup id="footnote1">[[1]](#f1)</sup>

**Post-launch requirements:**<br/>
VFS teams must iterate to resolve open[ 508-defect-2 through 508-defect-4 issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#post-launch-issues) to keep VA legally compliant. The DEPO Platform sends a public, weekly report to inform DEPO leadership of teams’ progress towards resolving issues.

**So, what will VSP do to help you meet these requirements, and what are you expected to do?**<br/>
Before requesting a staging review, VFS teams must do [foundational accessibility testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md) and resolve or document any resulting issues. Be prepared to discuss your plan for when the unresolved issues might be addressed in the staging review meeting. 

Teams with their own accessibility experts may be expected to do more robust testing beyond foundational accessibility tests. VSP will coordinate additional testing requirements on a case-by-case basis.

VSP will do a final check to review testing findings and comment on issues where additional guidance is helpful.

## How to contact us
* VSP Accessibility contact: Trevor Pierce, `@Trevor Pierce` in Slack, `1Copenut` in Github
* Slack channels: [#vetsgov-accessibility](https://dsva.slack.com/channels/vetsgov-accessibility)
* Github labels: `508/Accessibility`

## What we do
VSP Accessibility ensures that accessibility and inclusive design are an integral part of product design and development on VA.gov.

* Accessibility is an outcome, generally linked to compliance, ensuring solutions are usable by everyone.
* Inclusive design is a human-centered process considering user diversity, by including and learning from a range of perspectives.

## Working with us
### VSP Collaboration Cycle
The [VSP Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle) defines the process for VSP support of VFS teams to ensure that products and services on [VA.gov](https://www.va.gov/) are human-centered, reliable, and continually improving

Accessibility guidance is included in the following phases of the VSP Collaboration Cycle:

* **Project Kickoff:** Incorporating accessibility into the early phases of a project minimizes the need for rework later. Relevant resources:
 * [508 checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)
 * [508, accessibility, and inclusive design best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md).
* **Define:** We help in early project discussions to make sure inclusive design is woven into your work. Main areas to consider at this phase include:
   * challenges with user flows
   * color contrast
   * color blindness
   * accessible interactions
   * design for various device sizes
   * cognitive impact
   * considerations for including diverse research participants
* **Discover:** We provide more specific feedback at this phase, including:
   * relevant design system components and patterns
   * feedback on recruiting diverse research participants
   * additional testing scenarios
* **Build:** We conduct the following accessibility checks:
   * Review your completed test plan and automated end-to-end test results
   * Manually test the [happy path](https://en.wikipedia.org/wiki/Happy_path)
   * Triage issues for severity and whether they must be fixed pre- or post-launch. This testing is done as part of the VSP staging review.
* **Validate:** Post launch, we do a full accessibility audit and ask the VA 508 office to conduct a review:
   * Post-launch audits uncover usability issues that might not otherwise appear on an automated report.
   * These findings drive future innovation, updates to the design system, and improve research sessions. (Note: This audit was previously done prior to launch, but is now done post-launch to emphasize speed and agility.)

## Resources and guides
**General Guidance**
* [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md) This checklist provides a good overview of accessibility requirements and tools that will help you in early-stage testing.
* [Accessibility Best Practices:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) Learn about what areas of your product will be evaluated for accessibility and inclusivity.
* [Accessibility Dev Review Step-by-Step](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-dev-review-step-by-step.md)
* [Examples of Assistive Tech](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/examples-of-assistive-tech.md)
* [Inclusive Design Guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/inclusive-design-guidelines.md)
* [User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/user-stories.md)

**Testing Processes and Issue Definitions**
* [Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)
* [Post-launch Audit Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md)
* [Test Credentials Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-credentials-template.md)
* [Markdown Test Case Template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-credentials-template.md)
* [TestRail Test Case Template](https://dsvavsp.testrail.io/index.php?/projects/overview/13)
* [Defect Severity Rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)

**Getting Started with Screen Readers**
* [VoiceOver on MacOS](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/mac-voiceover-guide.md)
* [Cross-platform Testing with NVDA or VoiceOver](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/screenreader-testing-cross-platform.md)

**Accessibility Research**
* [Links and Buttons](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/research/links-and-buttons.md)
* [Screen Reader Fieldset Plus Legend Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/research/screenreader-fieldset-legend-label.md)

## Footnotes
* <b id="f1">Footnote 1:</b> DEPO Platform acknowledges that some services must be launched into production before they can be reviewed for accessibility. Teams should coordinate a staging review with the DEPO Platform as soon as possible post-launch. [↩](#footnote1)

---
##### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Mar 20, 2020 | Reformatted using new template. | Gretchen Maciolek
Oct 22, 2020 | Added DEPO 508 mandate. | Trevor Pierce
