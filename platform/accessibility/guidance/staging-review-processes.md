# Accessibility Staging Review Processes
Accessibility staging reviews are part of the wider [VSP staging review](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=andreahewitt-odd%2C+meganhkelley&labels=product+support%2C+content-ia-team&template=staging-review.md&title=Staging+Review+%5BFeature-Name%5D) process. The accessibility review is a bit unique because it involves a number of automated and manual tests, and may include a simple code review.

All staging reviews will test the [happy path](https://en.wikipedia.org/wiki/Happy_path) through the application or content page(s). Staging reviews **may not catch all accessibility issues**, but will ensure basic functionality is accessible. Accessibility specialists will conduct a more thorough audit when your application is relatively code-stable in production.

## Before You Request a Review
Staging accessibility reviews will be turned around in two days, provided the following items are done ahead of time:

* 1-2 sprints before the review needs to be completed, provide a "heads up" in Slack to the accessibility specialists that the staging review request will be coming soon
* [Provide test user credentials](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-credentials-template.md#accessibility-test-credentials-template)
* Conduct low-level accessibility tests ahead of the staging review:
  * [Run axe checks using the Chrome or Firefox browser plugin(s)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#getting-started-with-automation)
  * [Write end-to-end (e2e) tests with good axe checks, including hidden content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#build-pipeline-requirements)
  * [Zoom layouts to 400% at 1280px width](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#zoom-to-400)
  * [Navigate using the keyboard only](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation)
  * [Test for color contrast and color blindness issues](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-tests)
  * [Test with 1 or 2 screen readers](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation) _(VoiceOver or NVDA)_
* Provide documentation for your test cases using one of the templates:
  * [TestRail accessibility test plan template](https://dsvavsp.testrail.io/index.php?/suites/view/14&group_by=cases:section_id&group_order=asc) **OR** 
  * [Github accessibility test cases template](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/accessibility-test-cases-template.md)
* Log any known issues using the [508 issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=&labels=508%2FAccessibility&template=508-issue.md&title=)

## Staging Review for Applications
Accessibility specialist(s) will run through the the following automated and manual tests for rich applications. These include  React applications, forms, and anything else that isn't static HTML.

* Axe browser plugin checks on a subset of pages or app states to ensure coverage
* Zooming layouts to 400% on a subset of pages
* Once-through keyboard navigation
* 3 preferred screen reader and browser pairings. Pairings will be determined by analytics data and WebAIM’s [most recent screen reader survey](https://webaim.org/projects/screenreadersurvey8/#primary). The favored browser and screen reader pairings may evolve as Edge Chromium and Chrome assume more market share, but the current pairings include:
  * JAWS on Windows7/10 using IE11 _(This is the VA 508 office's preferred test pairing)_
  * NVDA on Windows 7/10 using Firefox
  * VoiceOver on MacOS
* End-to-end tests will be reviewed to ensure axe checks are run for primary and secondary (hidden) content

## Staging Review for Static Content
Accessibility specialist(s) will run through the the following automated and manual tests for static content. Static content includes pages generated from the content management system (CMS) or Markdown files.

* Axe browser plugin checks on a subset of pages to ensure coverage
* Zooming layouts to 400% on a subset of pages
* Once-through keyboard navigation
* 3 preferred screen reader and browser pairings. Pairings will be determined by analytics data and WebAIM’s [most recent screen reader survey](https://webaim.org/projects/screenreadersurvey8/#primary). The favored browser and screen reader pairings may evolve as Edge Chromium and Chrome assume more market share, but the current pairings include:
  * JAWS on Windows7/10 using IE11 _(This is the VA 508 office's preferred test pairing)_
  * NVDA on Windows 7/10 using Firefox
  * VoiceOver on MacOS

## Issue Gathering and Triage
* Validate code early and often to help identify issues sooner than later
* Request a spot check 1-2 sprints before your anticipated staging review
* Issues will be collected as issues in a new ZenHub epic. The accessibility specialist will assign this epic to the person who requested the staging review.
* Issues will be triaged according to their severity. Some issues will be launch blockers. Others can be fixed post-launch. Teams should review the [accessibility defect severity rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md) if they have questions about issue severity or impact.
* Accessibility specialists will work with stakeholders as issues are ready to be re-tested. When an issue has been resolved, the specialist or project manager should close it with a brief comment like _"Issue has been tested, and success criteria met. Moving to close."_
