# Accessibility Staging Review Processes
Accessibility staging reviews are part of the wider [VSP staging review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley&labels=product+support%2C+content-ia-team&template=staging-review.md&title=Staging+Review+%5BFeature-Name%5D) process. The accessibility review is a bit unique because it involves a number of automated and manual tests, and may include a simple code review.

All staging reviews will test the [happy path](https://en.wikipedia.org/wiki/Happy_path) through the application or content page(s). Staging reviews **may not catch all accessibility issues**, but will ensure the basic app functionality is accessible. Accessibility experts will conduct a more thorough audit when your application is relatively code-stable in production.

## Before You Request a Review
Staging accessibility reviews will be turned around in two days, provided the following items are done ahead of time:

* Provide a 1-2 sprint "heads up" when the review needs to be completed
* [Provide test user credentials](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-credentials-template.md#accessibility-test-credentials-template)
* Use the templates to document your accessibility test cases
  * **TestRail:** [TestRail VSP accessibility test plan template](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc) **OR**
  * **Markdown:** [Github accessibility test cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md)
* Log any known issues using the [508 issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)

## Staging Review for Applications
Accessibility specialist(s) will run through the the following automated and manual tests for rich applications. These include  React applications, forms, and anything else that isn't static HTML.

* Axe browser plugin checks on a handful of pages or app states to ensure coverage
* Zooming layouts to 400% at 1280px width
* Once-through keyboard navigation
* 3 preferred screen reader and browser pairings. Pairings will be determined by analytics data and WebAIM’s [most recent screen reader survey](https://webaim.org/projects/screenreadersurvey8/#primary). This will most likely be JAWS and NVDA on Windows 7/10, and VoiceOver on MacOS.
* End-to-end tests will be reviewed to ensure axe checks are run for primary and secondary (hidden) content

## Staging Review for Static Content
Accessibility specialist(s) will run through the the following automated and manual tests for static content. Static content includes pages generated from the content management system (CMS) or Markdown files.

* Axe browser plugin checks on a handful of pages or app states to ensure coverage
* Zooming layouts to 400% at 1280px width
* Once-through keyboard navigation
* 3 preferred screen reader and browser pairings. Pairings will be determined by analytics data and WebAIM’s [most recent screen reader survey](https://webaim.org/projects/screenreadersurvey8/#primary). This will most likely be JAWS and NVDA on Windows 7/10, and VoiceOver on MacOS.

## Issue Gathering and Triage
* Issues will be collected as issues in a new ZenHub epic. The accessibility specialist will assign this epic to the person who requested the staging review.
* Issues will be triaged according to their severity. Some issues will be launch blockers. Others can be fixed post-launch. Teams should review the [accessibility defect severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md) if they have questions about issue severity or impact.
