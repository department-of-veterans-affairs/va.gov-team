*Last updated: October 29, 2020*

*Owned by: Platform Accessibility SMEs*

# Accessibility

Accessibility is crucial to design and development because it ensures no one is excluded from using products on VA.gov. The DEPO Platform assesses VA.gov products to ensure they're meeting DEPO accessibility standards, and provides guidance and tools to make it easier for VFS teams to meet those standards.

## Table of contents
* [DEPO Platform accessibility standards](#depo-platform-accessibility-standards)
* [DEPO Platform and VFS accessibility roles and responsibilities](#DEPO-Platform-and-VFS-accessibility-roles-and-responsibilities)
* [Working with us](#working-with-us)
* [Resources and guides](#resources-and-guides)

## DEPO Platform accessibility standards

All VA.gov products must legally comply with Section 508, and as such VFS teams need to fix all 508-defect issues.

**Launch requirements:**<br/>
VFS teams must fix[ 508-defect-0](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-0) and[ 508-defect-1](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#508-defect-1) issues before launching a Veteran-facing service. The DEPO Platform will enforce this minimum standard. <sup id="footnote1">[[1]](#f1)</sup>

**Post-launch requirements:**<br/>
VFS teams must iterate to resolve open[ 508-defect-2 through 508-defect-4 issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#post-launch-issues) to keep VA legally compliant. The DEPO Platform sends a public, weekly report to inform DEPO leadership of teams’ progress towards resolving issues.

**Read more about DEPO Platform accessibility standards**
* [Defect Severity Rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md)

## DEPO Platform and VFS accessibility roles and responsibilities

Veteran-facing services (VFS) teams are responsible for ensuring the accessibility of the products. The Digital Experience and Product Office (DEPO) platform supports their work at scale by creating and maintaining VA.gov accessibility standards required for production and by providing guidance as VFS teams work to meet those standards. Code quality -- including meeting [Section 508](https://www.section508.gov/) compliance ([WCAG 2.0](https://www.w3.org/TR/WCAG20/) Level A and AA) -- is the responsibility of each individual VFS team.

**Read more about roles and responsibilities**

- [Accessibility roles and responsibilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/roles-and-responsibilities/accessibility.md)

## Working with us

Documentation about accessibility best practices is always available to VFS teams, as are various automated and manual tools for accessibility testing.

VFS teams also receive guidance and assessments from the DEPO Platform as a part of the [Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle), which is the process for interacting with DEPO Platform personnel to ensure your [VA.gov](https://www.va.gov/) product meets or exceeds DEPO's standards.

As a part of the collaboration cycle, VFS teams must do [foundational accessibility testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#foundational-accessibility-tests-required) and resolve or document any resulting issues prior to the staging review.  Teams with their own accessibility experts may be expected to do [advanced accessibility testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#advanced-accessibility-tests-recommended) prior to the staging review. The DEPO Platform will spot check products to catch major issues prior to launch, and will assign issues to the VFS team for resolution. Post-launch is when the VA 508 Office will do a more robust review of the product, and you'll be responsible for resolving any additional issues that are found.

**Read more about best practices, testing tools, and the collaboration cycle**

* [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md) This checklist provides a good overview of accessibility requirements and tools that will help you in early-stage testing.
* [Accessibility Best Practices:](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) Learn about what areas of your product will be evaluated for accessibility and inclusivity.
* [Accessible Links and Buttons Research](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/research/links-and-buttons.md)
* [Screen Reader Fieldset Plus Legend Findings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/research/screenreader-fieldset-legend-label.md)
* [Examples of Assistive Tech](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/examples-of-assistive-tech.md)
* [Inclusive Design Guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/research/readMe.md)
* [Collaboration cycle](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md)
  * [Staging Review Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md)
  * [Post-launch Audit Processes](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/post-launch-audit-processes.md)
* [Accessibility Dev Review Step-by-Step](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-dev-review-step-by-step.md)
* [TestRail Test Case Template](https://dsvavsp.testrail.io/index.php?/projects/overview/13)
   
**Questions? Here's how to contact the DEPO Accessibility folks**
@ mention Trevor Pierce, `@Trevor Pierce` in the #vfs-platform-support Slack channel, or `1Copenut` in Github.

## Footnotes
* <b id="f1">Footnote 1:</b> DEPO Platform acknowledges that some services must be launched into production before they can be reviewed for accessibility. Teams should coordinate a staging review with DEPO Platform as soon as possible post-launch. [↩](#footnote1)

---
##### Revision History

Date | Revisions Made | Author
-----|----------------|--------
Mar 20, 2020 | Reformatted using new template. | Gretchen Maciolek
Oct 22, 2020 | Added DEPO 508 mandate. | Trevor Pierce
Oct 29, 2020 | Cleaning up flow through to deeper a11y docs | Rachael Roueche
