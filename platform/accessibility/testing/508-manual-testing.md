# Manual Testing for Accessibility Audits
Automated testing will catch 40% (conservatively) of all accessibility issues. This type of testing is well-suited to find and flag issues like invalid markup, [improper use of ARIA](https://www.w3.org/TR/using-aria/) and duplicated IDs. 

Automated testing cannot, and will not, have a human tester's subjectivity. Many accessibility issues are "more art than science" and need a subjective opinion. For instance, an automated testing tool would not know to flag focus management as an issue. A human tester would be able to identify this as a potential problem for screen readers, and log it accordingly.

## Current Testing

* Run [axe checks](https://deque.com/axe) on every page or unique state (required)
* Run [axe-coconut](https://www.deque.com/axe/axe-for-web/early-release/) on every page. Coconut is a leading-edge tool, and identifies more WCAG2.1 success criteria that will eventually become the law of the land.
* Run [WAVE](https://wave.webaim.org/) on every page if time allows. WAVE is more visual than axe or axe-coconut, but offers some excellent ways to identify nested headings and HTML5 landmark tags.
* [Color contrast](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#color-contrast) checks
* [Color blindness](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#colorblindness) checks
* [Zoom layouts to 400%](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#zoom-to-400) and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
* [Keyboard navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation) for the happy path
* [Screen reader testing](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md#keyboard-navigation) using these preferred pairings:
  * IE11 + JAWS
  * Chrome + JAWS
  * NVDA + Firefox
  * Safari + VoiceOver
  * iOS Safari + VoiceOver
* Document checking
  * Accessibility checks using Acrobat Pro
  * Review with one or more screen readers
* Write issue tickets for findings
* Write code to fix tickets
* Review code in pull request reviews
* Help teams QA and close issue tickets
* Research new tools and interfaces

## WCAG 2.1 and Future

* High-contast mode checking, inverse mode checking
* Mobile-first usability
* Typography
