# Appointments Accessibility Testing Checklist

See the resources at the bottom of this page for more information on how to test and install tools.

## Page works as expected at all breakpoints
- [ ] Page works at 360px
- [ ] Page works at 769px
- [ ] Page works at 1200px

## Page functions with CSS turned off
- [ ] Use the [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm) extension to turn off CSS. Check that the feature is readable and functional

## Page loads when throttled
- [ ] Throttle page in Chrome dev tools and note the elements that take longest to load.

## Headings are in logical order

- [ ] Use [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi) extension to check heading order

## Use of color and color contrast checks

- [ ] All text of 20px or smaller has a 4.5:1 contrast ratio to its background (or better)
- [ ] All text of 20px or larger has a 3:1 contrast ratio to its background (or better)
- [ ] Non-text elements have a 3:1 contrast ratio to their background and to neighboring elements (or better)
- [ ] Color is not the only way to distinguish links from other text (eg. links are underlined)
- [ ] Any charts, maps, infographics, and tables convey all information without only relying on color
- [ ] Content does not refer to color, especially when providing user instructions (eg. "Click the blue button")

## axe checks
- [ ] Each page has been scanned using axe 


## Content zoom and reflow checks

- [ ]  All page elements are readable and usable at 200% zoom
- [ ]  All page elements are readable and usable at 300% zoom
- [ ]  All page elements are readable and usable at 400% zoom


## Keyboard navigation checks
- [ ]  Each link, button, form input, checkbox, radio button, select menu, and custom element can receive keyboard focus
- [ ]  Each link, button, form input, checkbox, radio button, select menu, and custom element responds to expected keys
- [ ]  All elements under focus have a visible focus indicator
- [ ]  The order of `Tab` stops makes sense and is appropriate for completing tasks

## Screenreader test
- [ ] Spot check feature with VoiceOver on mac
- [ ] Spot check feature with VoiceOver on phone
- [ ] Spot check feature with TalkBack on phone

## Resources
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Web Developer](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
- [WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en)
- [HeadingsMap Extension](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
- [How to install Axe](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/prepare-for-an-accessibility-staging-review#Prepareforanaccessibilitystagingreview-AutomatedtestingwithaxebyDequeaxe)
