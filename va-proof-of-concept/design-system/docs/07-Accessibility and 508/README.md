# Accessibility and 508

This directory contains anything related to accessibility including
  * accessibility audit reports
  * plans for manual QA and automated testing
  * anything else that comes up! Blog posts? User research studies with users with disabilities? The sky's the limit!

### Manual testing
To manually test or reproduce a reported error on Mac OS X, you can try out NVDA or Voice Over (and gain an understanding of how users with screenreaders navigate) by following these instructions
  * [Accessibility Testing with the NVDA Screenreader](https://www.deque.com/blog/accessibility-testing-nvda-screenreader/)
  * [Quick Guide to Using VoiceOver on Mac OS X](http://www.victortsaran.net/quick-guide-to-using-voiceover-on-mac-os-x/): written by Victor Tsaran, who works on making Google products accessible
 
 
### Automated testing:
  * All applicable unit tests require keyboard navigation testing.
  * All components require unit tests that run aXe against all visual states, via calls to this [axeCheck script](https://github.com/department-of-veterans-affairs/design-system/blob/master/lib/testing/helpers.js) which uses the [aXe API](https://github.com/dequelabs/axe-core/blob/develop/README.md), so we can catch and fix issues and regressions before deploying to production.
  * To debug an issue, it's useful to use the aXe dev tools [Chrome extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US) or [Firefox plugin](https://addons.mozilla.org/en-us/firefox/addon/axe-devtools/).

### Other stuff:
 *  Current open 508/accessibility tickets
 *  Testing Plan
 *  [Accessibility Tracking Document](./AccessibilityReviewList.md): list of reviewed/signed-off products; products in review and pending sign-off; products in queue to be tested
