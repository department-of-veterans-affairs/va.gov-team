---
name: ARF Engineering Feature Issue - Front End
about: Feature issue template for the ARF Engineering team
title: ''
labels: accredited-rep-facing, engineering, frontend
assignees: ''

---

### Description

#### User Story or Problem Statement
<!-- Outline the user story or the problem being addressed -->

#### Implementation Details
<!-- Describe how the feature or solution should be implemented -->

#### Mockups/Designs
<!-- Include any available mockups or design elements -->
- [ Component ](link)

#### Blockers
<!-- Identify any potential obstacles -->

### Acceptance Criteria/Conditions of Satisfaction
<!-- Specify criteria for ticket completion -->
- [ ] 

#### Accessibility (A11y) Testing 
- Refer to existing [VA design system](https://design.va.gov/components/form/)
- Test with either [WAVE](https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US&utm_source=ext_sidebar) or [AXE](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US&utm_source=ext_sidebar) extension
- As you manually test, look for the following:
   - color contrast errors
   - keyboard navigation
     - When navigating with a keyboard, content should flow from left to right
   - heading order 
     - Headings should be in order, so h1, then h2, h3. This is so the screen reader can let the user know the natural order of the elements in page. The WAVE tool has a headings tab that will display the order.
   - proper tag elements
     - Since we are working with forms, make sure components have the proper tags, i.e.:
 <label for="lastName"...>Last Name</label> <input id="lastName"... />
- test with a screen reader 
  - Voiceover is built in with mac, use NVDA for windows
