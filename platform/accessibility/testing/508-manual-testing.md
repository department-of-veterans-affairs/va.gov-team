# Manual Testing for Accessibility Audits

## Current Testing

* Run axe checks on every page or unique state (required)
* Run axe-coconut on every page
* Run WAVE on every page (if time)
* Color contrast and colorblindness checking
* Zoom layouts to 200, 300, 400% and inspect them for readability, usability
* Keyboard navigation for the happy path
* Screen readers:
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
