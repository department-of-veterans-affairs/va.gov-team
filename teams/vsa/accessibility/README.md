# VSA Accessibility 

In this folder, you'll find information specific to how 508 Accessibility works on VA.gov.

<hr/>

**[Rate this documentation](https://forms.gle/D3urPe2VbLqVd5pcA)**

We'd like to know if the documentation is meeting your needs, and welcome your feedback!

<hr/>

## Table of Contents

* [Communication channels](#communication-channels)

* [How does accessibility fit into our product lifecycle?](#how-does-accessibility-fit-into-our-product-lifecycle)

* [VSA accessibility on-boarding](#vsa-accessibility-on-boarding)

* [VSA accessibility reviews](#vsa-accessibility-reviews)

* [Accessibility resources](#accessibility-resources)

* [VSA Accessibility Dashboard](#vsa-accessibility-dashboard)


### Communication channels
- Slack channels: [#vetsgov-accessibility](https://dsva.slack.com/channels/vetsgov-accessibility)
- Github labels: `508/Accessibility`

#### VSA Accessibility Specialist Contacts
- Josh Kim, @Josh in Slack, @joshkimux in Github, josh.kim@adhocteam.us

### How does accessibility fit into our product lifecycle?

#### [Product](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/product)
* Define accessibility as a business requirement from the start.
* Ensure the team has sufficient accessibility expertise.
* Plan for inclusive research.
* Meaningfully measure, monitor, and evaluate success goals, including accessibility and Section 508 compliance.


#### [Research](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/research)
* Define inclusive research strategies ([review inclusive research guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/inclusive-research-recommendations.md)).
* Define goals and strategies for including people with disabilities (consider specific KPIs).
* Document gaps as potential risks to inform future research.


#### [Design](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/design)
* Define how to help teams develop empathy for the diverse range of users, such as race, socio-economics, technology challenged, and people with disabilities.
* Document interaction behavior, and ensure it is accessible.
* Define criteria to evaluate the accessibility of designs, such as mobile-first, defining states, heading order, and focus management.
* Annotate semantic markup, reading order, focus management in designs to ensure development understands the fully designed experience.
* Use inclusive, accessible prototyping tools, such as Adobe XD and coded prototypes.


#### [Development](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/development)
* Establish e2e tests that include the axe checks.
* Ensure engineers know how to customize tests to ensure hidden and dynamic content is also evaluated.
* Define workflow processes to evaluate 508 compliance and accessibility throughout development.
* Ensure foundational accessibility testing is complete ahead of reviews. | [Read about VSP-required foundational accessibility testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md).


#### [QA](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/qa)
* Use QA techniques to evaluate accessibility and usability: manual processes, Web Vitals, CrUX dashboard.
* Define accessibility and 508 compliance QA processes for both before and after deployment.


### VSA accessibility on-boarding

Information coming soon!


### VSA accessibility reviews

In addition to the VSP Collaboration Cycle, VSA offers extra collaboration points for research, design, and development. [Check out the VSA accessibility review process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-review-process.md).

### Accessibility resources
The following list is a set of resources to help you do your work and answer questions you might have. Some of the links may take you to other sites and resources outside this repo. If you need a hand with anything, don't hesitate to ping the [dsva.slack.com](https://dsva.slack.com/#vetsgov-accessibility) channel or your VSA accessibility POC directly.

* Learn about [accessibility best practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md) for research, design, product, and engineering

* To request a VSP Collaboration Cycle Staging Review, this [accessibility test cases checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-test-cases-checklist.md) may make the request process easier for your team.

* [Accessibility Best Practices](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)

* [VSA Accessibility Review Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-review-process.md)

* [508 Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-checklist.md)

* [WCAG Checklist](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/WCAG-Checklist.md#wcag-checklist) - Section 508 (WCAG 2.0) plus 2.1, 2.2, etc.

* [Dev Accessibility Audit Review Step-by-Step](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/accessibility-dev-review-step-by-step.md)

* [VSA A11yChamps Training Program](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/a11y-champs#vsa-a11ychamps-program)

* [Accessibility Beyond Compliance Learning Sessions](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility/learning-sessions#learning-sessions)

* [Disability Considerations](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/disability-considerations.md)

* [Inclusive Design Guidelines](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/inclusive-design-guidelines.md)

* [Examples of Assistive Tech](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/examples-of-assistive-tech.md_)

* [Additional VSA Accessibility Resources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/teams/vsa/accessibility)

* [Additional VSP Accessibility Resources](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/accessibility)

### Screen reader resources

* [WebAIM - Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/)

* [WebAIM - Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)

* [WebAIM - Using JAWS to Evaluate Web Accessibility](https://webaim.org/articles/jaws/)


### Additional accessibility resources

* [Apple Human Interface Guidelines, Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility/overview/best-practices/)

* [Android - accessibility guidelines](https://developer.android.com/guide/topics/ui/accessibility/apps)

* [W3C Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)

* [WUHCAG WCAG Checklist - a plain language interpretation of the W3C guidelines](https://www.wuhcag.com/wcag-checklist/)


## VSA Accessibility Dashboard

The VSA accessibility specialist is measuring and monitoring a number of metrics to evaluate if processes and resources are improving the quality of accessibility in our work. The [VSA Accessibility Dashboard](https://sites.google.com/d/1TaKZ5-By8oAv9M-HBhyylpw14-3UXDdp/p/1doeOzfSq_zSeBl7_iBzezsaNJWqUgsDy/edit) is available for anyone who has access to GCIO's Google Drive. Please contact Josh if you don't have access and would like to review.

