# 508 Checklist

This checklist is a work-in-progress. Currently, this is a rather high-level overview of general practices and considerations. Line items were pulled from various team sources and a few personal additions.

### Resources
* [VSP 508 Best Practices (GH)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)
* [VSP 508 Audit Pre-Launch Request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
* [VSP 508 Team: Product Issue Backlog](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md)
* [18F Technology Transformation Services Site](https://accessibility.18f.gov/)
* [Department of Veterans Affairs 508 Site](https://www.section508.va.gov/)

### Section 508 Compliance
* Use headings appropriately & consistently
* Apply autofocus to initial functional element on screen (This may change to focusing on this initial H1)
* Keep layout as simple and concise as possible to reduce tab-travel
* Keep functional groups together; avoid tabbing in and out of group (e.g. forms, navigation)
* Dynamic elements that reveal content (tooltips/alerts) must be keyboard accessible; allow screen readers to read dynamic content

### Vision
- [ ] Adhere to appropriate color combinations (maintain acceptable contrast)
- [ ] Accommodate browser zoom function to 400% with no scroll or reflow
- [ ] Ensure all elements are ‘colorblind visible’
- [ ] When displaying charts and diagrams, include visible or hidden tabular data
- [ ] Avoid CSS background images if image is meaningful (vs. decorative) or presented as content
- [ ] Avoid using color as the sole conveyance of information (e.g. red for error)
- [ ] Generally, text should be presented no smaller than 13px on-screen (guideline)

### Screen Readers
- [ ] Use HTML 5 semantic markup
- [ ] Use native HTML elements where possible (e.g. buttons and form elements)
- [ ] Use appropriate ALT tags for images
- [ ] Ensure label `FOR` attributes exist for form inputs
- [ ] Accommodate UI state changes (e.g. sorted table)
- [ ] Use properly formed HTML tables for tabular data
- [ ] Ensure dynamic elements have proper ARIA tagging
- [ ] Ensure elements read on focus

### Motor/Keyboard
- [ ] Ensure all functional elements are keyboard accessible (minimum: tab/enter)
- [ ] Implement tab-trapping for modals and other imperative elements
- [ ] Include content skips for areas with large lightly-accessed elements (e.g. navigation)
- [ ] Ensure consistent, logical tab flow across screen; avoid trapped tabbing (ex. modals and other imperative content)
- [ ] Consider ‘target size’ of mouse-clickable elements

### 508 Review Process
* Self-evaluation
* Request Peer Review
* [Request initial 508 Audit when code is stable](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
* Schedule final audit approximately four weeks out from release
* VA 508 Office will review post-release

### 508 Review Process for Self-Eval & Peer Review
1. Properly structured semantic HTML
     1. Headings presented in descending order
     2. Semantic tags used correctly & consistently with VA.gov conventions
     3. Keep page layout simple & concise
2. Employ properly contrasting color combinations
     1. Contrast must be 4.5:1 or higher | [WEBAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
     2. Check for colorblind viewing
3. Check screen for browser zoom support (to at least 400%)
     1. Confirm there is no reflow
     2. Check for burdensome scrolling
4. Avoid using color as the sole conveyance of information (e.g. red for error state)
5. Check for keyboard accessibility of all funtional elements
     1. Confirm that all functional elements are reachable and can be activated via keyboard
     2. Eliminated tab-traps within screen
     3. Confirm tab-trapping on modals and other imperitive elements
     4. Implement keyboard accessibility for dynamic elements (e.g. tooltip hovers)
     5. Employ consistent, logical tab order (typically top-left to bottom-right)
6. Check pages using browser-specific screen readers
     1. Confirm proper use of ARIA roles & tags
     2. Ensure all IMGs have meaningful ALT tags
     3. Check that elements are read on focus

### Tools
**Mandatory**
* [axe Chrome/Firefox Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
* [NVDA Screen Reader](https://www.nvaccess.org/) (for Firefox, Chrome on Windows 10)
* [Apple VoiceOver Screen Reader](https://www.apple.com/voiceover/info/guide/_1121.html) (for Mac)
* [ChromeLens Chrome Plugin](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd?hl=en)

**Recommended**
* [Colorblinding Chrome Plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)
* [Color Contrast Analyzer for Sketch](http://sketchapp.rocks/plugins/color-contrast-analyser/)
* [Web Accessibility VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility)

**VSP Test Tools**
* axe browser plugin
* JAWS screen reader with IE11, Chrome on Windows 10
* NVDA screen reader with Firefox, Chrome on Windows 10
* VoiceOver screen reader with Safari on MacOS

[More on 18F Site...](https://accessibility.18f.gov/tools/)
