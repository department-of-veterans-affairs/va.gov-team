# 508 Checklist

This checklist is a work-in-progress. Currently, this is a rather high-level overview of general practices and considerations. Line items were pulled from various team sources and a few personal additions.

### Resources
* [18F Technology Transformation Services Site](https://accessibility.18f.gov/)
* [VSP 508 Best Practices (GH)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-accessibility-best-practices.md)
* [Request a 508 Compliance Review (GH)](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
* [Department of Veterans Affairs 508 Site](https://www.section508.va.gov/)
* [VSP 508 Audit Request](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-request-prelaunch-review.md)
* [VSP 508 Team: Status List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/508-product-review-list.md)

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
- [ ] Ensure FOR attributes exist for form inputs
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
     1. Contrast must be 4.5:1 or higher | [Quick Check Here](https://www.section508.va.gov/)
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
Mandatory
* [Axe Chrome/Firefox Plugin](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US)
* [JAWS Screen Reader](https://www.freedomscientific.com/products/software/jaws/?utm_term=jaws%20screen%20reader&utm_source=adwords&utm_campaign=All+Products&utm_medium=ppc&hsa_tgt=kwd-394361346638&hsa_cam=200218713&hsa_ad=296201131673&hsa_kw=jaws%20screen%20reader&hsa_grp=52663682111&hsa_net=adwords&hsa_mt=e&hsa_src=g&hsa_acc=1684996396&hsa_ver=3&gclid=EAIaIQobChMI5NOXtIvY5AIVGcDICh3seweZEAAYASAAEgLwr_D_BwE) (for IE 11; requires license)
* [NVDA Screen Reader](https://www.nvaccess.org/) (for other browsers)
* Apple VoiceOver Screen Reader (for Mac)
* [ChromeLens Chrome Plugin](https://chrome.google.com/webstore/detail/chromelens/idikgljglpfilbhaboonnpnnincjhjkd?hl=en)

Recommended
* [Colorblinding Chrome Plugin](https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en)
* [Color Contrast Analyzer for Sketch](http://sketchapp.rocks/plugins/color-contrast-analyser/)
* [Web Accessibility VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility)

[More on 18F Site...](https://accessibility.18f.gov/tools/)

