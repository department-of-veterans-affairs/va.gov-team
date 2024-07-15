Tests are being conducted primarily against [About VA Form 21P-534EZ](http://preview-prod.vfs.va.gov/preview?nodeId=5820) as it serves as it contains many of the template elements.

## Required accessibility tests

- [x] Axe scans in daily development - [read more about the axe browser plugin](#axe-scans-in-daily-development)
    - In the preview I am conducting tests against, I see a minor issue - `Ensure that links with the same accessible name serve a similar purpose` because the breadcrumb that reads `Find a VA form` points to `/preview` while there is also a link in the footer that reads `Find a VA form` but points to `/find-forms/`. This is unique to the preview and will be fixed once the page is published.
    - The other issues I see are just with the CMS edit link and the site-wide MegaMenu.
- [x] Axe scans included in end-to-end (e2e) tests - [read more about e2e tests with axe checks](#axe-scans-in-end-to-end-tests)
    - This is true for every page that Drupal provides as part of the accessibility step of the vets-website CI.
- [x] Color tests for proper contrast and colorblindness - [read more about contrast and colorblindness](#color-tests)
    - Elements used on this page are CMS components. Nothing new was built for this template type.
- [x] Content zoomed to 200%, 300%, 400% - [read more about zoomed layouts](#content-resize-check)
    - No scroll issues at 400%
- [x] Keyboard navigation - [read more about navigating with the keyboard](#keyboard-navigation-check)
    - All links including PDF download links are navigable by tab key
- [x] Screen reader tests (VoiceOver + Safari or NVDA + Firefox) - [read more about getting started with screen readers](#screen-reader-tests)
    - VoiceOver worked as expected but we may need to ensure the alert box that shows when there is an invalid PDF spotted.

## Recommended accessibility tests

- [x] Axe-coconut scans in daily development - [read more about the axe-coconut experimental plugin](https://www.deque.com/blog/test-leading-edge-accessibility-axe-coconut-axe-core-3-0/)
- [x] WAVE tool spot checks - [read more about the WebAIM WAVE tool](https://wave.webaim.org/)
    - Only explored this briefly but I don't think this will help me on localhost or on the VA intranet.
- [ ] Keyboard end-to-end tests. These tests are currently written in Nightwatch.js, and will be ported to Cypress.io in the future. [Read more about the legacy Nightwatch tests](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/testing/508-automated-testing.md)
