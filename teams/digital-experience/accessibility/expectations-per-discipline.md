VSA Accessibility Expectations & Resources Per Discipline (DRAFT)
==============================

Why these processes, now?
-------------------------

Our contracts require us to release accessibility compliant code. Until now, we relied on Trevor and Jennifer to run accessibility scans near the end of our feature cycles. This has resulted in the following problems:

-   "Launch blocker" accessibility items discovered at the last minute, resulting in tension between team members

-   Overload on accessibility specialists all at once, often unexpectedly

-   Features occasionally being launched that have accessibility concerns

Therefore, VSP has put new processes in place, which require VSF teams to write test plans and run early scans on their own features, so by the time teams reach the staging review point, ideally there are no critical accessibility issues, and launch goes smoothly. 

A new skill...
------------

We recognize that designing and developing in an accessible manner is a new skill that requires some ramp-up.  We see it in a similar way to if you were learning a new programming language or trying your hand at user research when you hadn't done research before.  Building accessible products is becoming more and more on folks' radars, and having these skills on your resume will help you dramatically in the long run :)

Expectations per Discipline
---------------------------

### Product Managers

If a feature reaches the Staging Review, and has [508-defect-0 or 508-defect-1 accessibility issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md), the feature will be blocked from launching. To avoid this, product managers should:

* Read the [VSP accessibility staging review requirements](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/staging-review-processes.md). 

* Ensure that there is acceptance criteria in tickets for running the below early scans

   * Make sure developers [schedule dev intent check-ins](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-review-process.md#development-intent-review) before beginning development.

   * Make sure developers are running axe browser scans and certifying they ran the axe browser scans in the staging review request artifacts, list any known issues.

   * Document [Markdown](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md) or [TestRail](https://dsvavsp.testrail.io/index.php?/projects/overview/13) test cases.

   * Make sure developers are creating [end-to-end tests](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/e2e-testing) that include the axeCore ruleset, opening hidden content to have it validated, as well.

   * Work with your team to make sure:

      * Features meet [color contrast standards](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#color-comparisons-required)

      * Layouts support readability and usability when[ zoomed up to 400% at 1280px](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#zoom-to-400) browser width, which can be checked when code is in Staging

      * All pages are [navigable by keyboard](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#keyboard-navigation-required) 

* Consider scheduling weekly or biweekly consults with your VSA accessibility specialist to review project status and understand areas of concern.

* Review issues early and discuss with the accessibility specialist, so issues can be evaluated for impact and remediation. 

### Designers

Designers should make sure they are designing with accessibility best practices in mind. 

* The VSP collab cycle should for the most part ensure this is happening.

* Designers are also expected to make sure the colors they choose meet color contrast standards. Resources below: 

   * [Color testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-tests)

   * [Color comparisons for staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#color-comparisons-required)

   * Information [about color blindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#colorblindness)

* Designers help developers determine [where keyboard focus should go](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation).

* Apply accessibility best practices for UX and interaction design (Resources: [UXPin](https://www.uxpin.com/studio/blog/8-website-accessibility-best-practices-to-improve-ux/), [Interaction Design Foundation](https://www.interaction-design.org/literature/article/accessibility-usability-for-all), and [Inclusive Design Best Practices in VA.gov repo](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/inclusive-design-guidelines.md))

* Try using [these cool accessibility annotations in your Sketch files](https://www.sketchappsources.com/resource/download-3929.html) if it's helpful!

* (Optional) Support your team by validating work using browser extensions (see the Developer section for more information).

   * [axe browser extension for Chrome and Firefox](https://www.deque.com/axe/axe-for-web/)

   * [axe-coconut browser extension for Chrome](https://www.deque.com/axe/axe-for-web/early-release/)

   * [Landmarks browser extension](http://matatk.agrip.org.uk/landmarks/) for a variety of browsers, to validate landmark conformance, ensuring assistive tech users can navigate your page

   * [ChromeLens browser ](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd?hl=en)extension for Chrome, to simulate a variety of sighted impairments, inspect and validate focus management, for your work

   * [Lighthouse browser extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=en) for Chrome, for an overview of your work (other tools are more precise, but this is good for a quick view)

* Collaborate with your accessibility specialist throughout your work.

### Front-end Developers

Developers are expected to:

1.  Get familiar with [VSP's severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md) (508-defect-0 & 508-defect-1 are launch blockers).

2.  Before beginning development for  a new initiative, [schedule a developer intent check-in](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-review-process.md#development-intent-review) with your VSA accessibility specialist to make sure you're starting on the right foot.

3.  Install the axe and axe-coconut browser plugins on your development system, per the [software list](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/VSA%20Technical%20Orientation.md#software-list) in [VSA Developer Orientation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/onboarding/VSA%20Technical%20Orientation.md).

4.  Run scans using [axe browser plugins](https://deque.com/axe) regularly during development to make sure the code has no [WCAG 2.0 Level A or AA violations](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md#wcag-20-level-a--aa-rules) reported in the browser plugin.

   * [Getting started with automation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation)

   * [Scan with axe plugin for staging review](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#scan-with-axe-browser-plugin-required)

      * Walkthrough for axe: <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#scan-with-axe-browser-plugin-required>

5.  To be extra sure accessibility issues are caught, It is also recommended (but not required) to run [axe-coconut](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/) browser scans to test for Shadow DOM and Web Components.

   * Walkthrough for axe-coconut: <https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md#scan-with-axe-coconut-recommended>

6.  Create end-to-end tests for client-side applications.  

   * All pages and applications must have axe checks that run on every continuous integration/continuous deployment (CI/CD) build. React applications require these tests to be added as part of the end-to-end test suite. Tests should open modal windows, accordions, hidden content, and re-run the axe check for high test coverage. Ensure end-to-end tests include axeCore and hidden content is unhidden so that it is scanned, as well.

   * Steps to test

      * Read the [basic end-to-end test setup](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/quality-assurance/e2e-testing) document

      * Add [axe checks](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/platform/testing/e2e/nightwatch-commands/axeCheck.js) to all of your end-to-end tests

      * Run tests on  localhost  to confirm proper functionality

   * Expected result:

      * End-to-end tests should show 0 violations. axe checks that result in 1 or more violations will break branch builds and prevent merging into the main  branch until they are resolved.

What kind of help is available to get up to speed?
--------------------------------------------------

### Learning Sessions / Brown bags

* Paul Short (VSA engineering lead) hosted a brown bag where accessibility specialists helped engineers get up to speed on expected scans and how they work. 

   * [Recording HERE](https://docs.google.com/document/d/1Eh3ImnVwfrioKhR62Xn-B3oTJyL1Cp-MJHSwHMttFGQ/edit#)

* Shawna and Mickin will discuss expectations and field questions in their weekly meetings.

### Request Templates

-   Dev intent reviews and accessibility spot checks can be requested using [this template ](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/teams/vsa/accessibility/vsa-accessibility-review-process.md#development-reviews)

### Slack Channel

There is a [#vetsgov-accessibility](https://dsva.slack.com/channels/vetsgov-accessibility) channel in Slack. Use this channel to:

-   ask any accessibility related questions

-   get support setting up and running scans

-   follow up on a spot check or intent request

-   share learnings
