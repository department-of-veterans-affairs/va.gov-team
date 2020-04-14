# Manual Testing for Accessibility Audits
Automated testing will catch 40% (conservatively) of all accessibility issues. This type of testing is well-suited to find and flag issues like invalid markup, [improper use of ARIA](https://www.w3.org/TR/using-aria/) and duplicated IDs. 

Automated testing cannot, and will not, have a human tester's subjectivity. Many accessibility issues are "more art than science" and need a subjective opinion. For instance, an automated testing tool would not know to flag focus management as an issue. A human tester would be able to identify this as a potential problem for screen readers, and log it accordingly.

## Current Testing

### Web Applications

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

### Documents (PDF, Word, etc.)
Teams can request accessibility reviews for their PDF and Word files. This includes several manual checks:
  * Acrobat Pro [accessibility checker](https://www.adobe.com/accessibility/products/acrobat/using-acrobat-pro-accessibility-checker.html)
  * Review with one or more screen readers. Usually this is JAWS.
  * Evaluating [Common Look](https://commonlook.com/accessibility-software/pdf-validator/) as another option for quick PDF scans.

### General Responsibilities
* Write issue tickets for findings
* Consult on code to fix tickets
* Review pull requests for accessibility fixes
* Help teams QA and close tickets
* Research new tools and interfaces

## WCAG 2.1 and Future Testing
WCAG 2.1 offers [17 new success criteria](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/) that are likely to be included in Section 508 requirements in the future. Many of these new success criteria are focused on typography, cognition (understanding), and usability. They will require additional time in manual testing. 

* Windows [high-contast mode](https://support.microsoft.com/en-us/help/13862/windows-10-use-high-contrast-mode)
* [Inverse or "dark" mode](https://css-tricks.com/dark-modes-with-css/) testing
* Text to speech using tools like [Dragon Speaking](https://www.nuance.com/dragon/business-solutions/dragon-professional-individual.html)
* Zoom magnifier tools like [Zoom Text](https://www.zoomtext.com/)
* WCAG 2.1 mobile usability
  * [SC 1.3.4 Orientation](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#134-orientation-aa)
  * [SC 2.5.1 Pointer Gestures](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#251-pointer-gestures-a)
  * [SC 2.5.2 Pointer Cancellation](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#252-pointer-cancellation-a)
  * [SC 2.5.4 Motion Actuation](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#254-motion-actuation-a)
  * [SC 2.5.5 Target Size](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#255-target-size-aaa)
* WCAG 2.1 typography
  * [SC 1.3.4 Orientation](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#134-orientation-aa)
  * [1.4.10 Reflow](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#1410-reflow-aa)
  * [1.4.11 Non-text Contrast](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#1411-non-text-contrast-aa)
  * [1.4.12 Text Spacing](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-21/#1412-text-spacing-aa)
