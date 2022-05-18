

# How to meet DEPO Platform quality standards

The DEPO Platform quality standards ensure a secure, consistent, and quality digital experience for Veterans. The standards are a combination of best practice principles, policies and legal requirements for designing and delivering digital services. The lists below connect you to resources to help you meet these standards.


## Research

Develop a deep understanding of your users, how they behave, and what that means for the design of your service. Engage users for research and feedback throughout the life cycle of your product.


### How to meet research standards

#### Research planning

*   Follow DEPO Platform guidelines for [research process and recruiting](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-process.md).
*   Have your [research plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-plan-template.md) and research [conversation guide](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/conversation-guide-template.md) reviewed and approved by DEPO’s research expert in a [Research Plan Review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#research-plan-review). 
*   Follow DEPO Platform guidelines for [scheduling and running research sessions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/during-research/README.md).

#### Usability testing

*   Test the service with real users and document what you learned. Identify the parts users found difficult and plan to adjust your designs to make those parts easier to understand. 

#### Conducting research

*   Follow DEPO Platform guidance for [research session recordings](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/synthesis/what-to-do-with-research-session-recordings.md).

#### Synthesizing research

*   Document your research synthesis in your team’s product folder in the `va.gov-team` repo.
*   Update [History of research projects on Veteran-facing tools](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/research-history.md) with information about your research.

#### Validating functionality

*   Participate in [UAT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/research/planning/what-is-uat.md) when your tool, service, or feature is in production to validate everything works as intended.

## Design

The user experience of your service must be consistent with other VA digital services. Use existing VA.gov Design System components and patterns to a cohesive experience. Instill confidence in your users by creating a service that feels familiar to other Veteran-facing services they already use. 

### How to meet design standards

*   Use the [VA.gov Design System](https://design.va.gov/) for your designs.
*   Use the [VSP design review checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/design/design-checklist-for-usability-testing-and-staging-revi.md) to ensure that important design considerations are not missed or forgotten.
*   If existing VA.gov Design System options do not meet your needs and you need to create a modified or new component/pattern, [submit an issue ticket](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/new/choose). The Design System Council will review your request and determine whether to add it to the [Design System Governance Process Board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/projects/3).


## Accessibility 

Accessibility is about making sure your service is usable by everyone. Thinking about this from the beginning will help you make sure that no one is excluded. Designing for accessibility, we’re not just talking about designing for people with disabilities. We mean designing for people in the widest variety of real-life circumstances.

All users will have different needs at different times and in different circumstances. For example, a person’s ability to use your service can be affected by their:

*   Health - they may be recovering from a stroke or traumatic brain injury, or they may have a broken arm and be unable to use their mouse
*   Location - they may be in a noisy cafe or an area with slow wifi
*   Equipment - they may be on a mobile phone or using an older browser
*   Digital experience - they may need phone (or in-person) assistance while using your service


### How to meet accessibility standards

*   Involve an accessibility specialist early in your product development.
*   Follow [Section 508 accessibility and inclusive design best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md).
*   Before launching your service, [complete all required accessibility tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md#required-accessibility-tests) and resolve any 508-defect-0 and 508-defect-1 issues. (See the [Accessibility issue severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md) for more details on how we determine what issues are launch-blocking.)
*   After launch, prioritize work on 508-defect-2 through 508-defect-4 accessibility issues.
*   After launch, complete a [Full Accessibility & 508 Office Audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/vsp-collaboration-cycle/vsp-collaboration-cycle.md#full-accessibility-and-508-office-audit).


## Content

Ensure that all content created across VA digital services is consistent, clear, and adheres to plain-language standards and VA.gov voice and tone. 

### How to meet content standards
*   Use the [VA.gov content style guide](https://design.va.gov/content-style-guide/index).
*   Adhere to DEPO Platform [content and plain language best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/content-best-practices.md).
*   Use standardized [form labels](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-labels.md).
*   Follow content guidance for writing [error messages](https://design.va.gov/patterns/messaging-error-messages).
*   When creating a form or tool, be sure to involve a content writer early in the process (at project kickoff) and [follow content process for forms ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/content/form-content-process.md)


## Information Architecture (IA)

Ensure all content is easily findable and maintain a consistent navigation experience for VA.gov site visitors. 

### How you can meet IA standards
*   Involve an Information Architect early in your product development.
*   Follow [general best practices for IA on VA.gov](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/ia-best-practices.md).
*   Incorporate [SEO best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/seo-best-practices.md) throughout the experience.
*   Implement [redirects](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md) (if necessary) from legacy tools/pages.


## Quality Assurance (QA)

Ensure that visitors to VA.gov have a uniform and consistent experience, free from defects.

### How to meet QA standards

*   Ensure that feature can handle anticipated load and traffic spikes, with a [completed load test](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/load-testing).
*   Test your code after it has been merged to main and is on staging.
    *   Conduct [Manual Functional Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/manual-testing/manual-functional-testing.md)
    *   Conduct [Cross-browser Manual Testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/manual-testing/cross-browser-manual-testing.md).
*   Create required [Quality Assurance artifacts](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md).
    *   Cover the baseline functionality of your product prior to changes from your current development effort in a [Regression test plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#regression-test-plan).
    *   Define scope of an exploratory test session and record the results of that session in an [Exploratory Test Charter](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#exploratory-test-charter).
    *   Map functional changes to test cases that verify expected behavior based on user stories and acceptance criteria in a [Test Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#test-plan).
    *   Describe actions taken within the product and verify the changes made during development achieve the acceptance criteria defined in user stories with [Test Cases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#test-cases).
    *   Describe the outcome of the execution of the test cases to help project participants understand the successes and failures in a [Test Results](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#test-results) document.
    *   Provide an overview of which user stories are covered by your test plan as well as what percentage of your test cases are linked to a user story in a [Reference Test Coverage Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#reference-test-coverage-report).
    *   Summarize the defects uncovered during test case execution as well as a percentage of defects that were resolved vs. unresolved in a [Summary(Defects) Report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/quality-assurance/qa-artifacts.md#summarydefects-report).


## Engineering
_Coming soon..._


## Analytics and Insights

Measure the performance of your service so you can make data-informed decisions for better Veteran outcomes. Analytics, alongside user research and testing, helps you evaluate the performance of your service. 


### How you can meet analytics and insights standards

*   Implement [analytics tracking](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/google-analytics/analytics-request-guide.md#requesting-google-analytics-implementation-and-qa).
*   Implement [end-user survey tool](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/foresee-request-survey.md).
*   [Define and track KPIs](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsp/teams/insights-analytics/kpi-tracking/kpi-process.md).
*   [Request a KPI dashboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/analytics/kpi-dashboard-request.md).


## Product Management

Your service should be adaptable so it can respond both to changes in policies that affect the service and to changing needs of your users. Design and build your service so it can be improved on a frequent basis, and make sure that you have the capacity, resources, and technical flexibility to do so.

### How to meet product management standards

*   Create a [Product Development Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/Product%20Development%20Checklist.md) for your initiative to help guide you through the requirements of launching your initiative.  
*   Create a [product outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/product-outline-template.md).
*   Organize product documentation according to the [va.gov-team repo guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/working-with-vsp/orientation/repo-guidelines.md).
*   Create and continually update a [release plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/product-management/release-plan-template.md).
*   Share staged rollout metrics in Team of Teams.
*   Inform the Contact Center with details on how to help users who request help with your service or feature. (Learn more about the [Contact center review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/contact-center/request-contact-center-review.md) process.)
*   Document your progress through the VSP Collaboration Cycle in the [Platform Collaboration Point Tracker](https://docs.google.com/spreadsheets/d/1d219oL1zCvCvnv1Bx-dI-GMzwgbarLv9_bzMSa3ULjA/edit?usp=sharing) 


## How to get help


### VSP Collaboration Cycle

The [VSP Collaboration Cycle](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/working-with-vsp/vsp-collaboration-cycle) connects you to resources, tools, documentation, and support to help you meet platform quality standards. If you actively participate in the Collaboration Cycle, you will be introduced to each requirement at the appropriate time and have opportunities to ask questions and understand how each requirement relates to your work.


### Engineering support

If you need help from platform engineers at any point in the development cycle, post your question in [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1). The channel description lists the names of the oncall frontend engineer, backend engineer, ops engineer, and forms library/design system engineer. `@mention` the engineer(s) appropriate for your question.

To request a code review, follow the [platform code review guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/engineering/code_review_guidelines.md).
