---
name: Disability Benefits Team A11y Review Template
about: A11y review template for Disability Benefits Team 
title: ''
labels: disability-experience, needs-a11y-refinement
assignees: etanb
---

## Accessibility Testing Summary Checklist

Accessibility is a foundational part of delivering equitable, inclusive services. This checklist helps teams verify that their product meets core accessibility expectations.. It's adapted from the [VA.gov Accessibility Testing issue template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=briandeconinck&labels=a11y-testing&template=a11y-testing.yaml&title=Accessibility+Testing+for+%5BTeam+Name%2C+Product+Name%2C+Feature+Name%5D), which provides detailed guidance and best practices.


### ✅ Accessibility Testing Steps
- [ ] **Color and color contrast testing**
  - [ ] All text meets required contrast ratios
  - [ ] Non-text elements meet required contrast ratios
  - [ ] Color is not the sole method for conveying information
  - [ ] Charts/maps/tables don't rely solely on color
  - [ ] Mobile app color modes verified (if applicable)  

- [ ] **Automated testing with axe**
  - [ ] Scan each page or screen with axe
  - [ ] Integrate axe into end-to-end testing
  - [ ] Document unresolved issues with URLs or screen names  

- [ ] **Content zoom and reflow**
  - [ ] Verify usability at 200%, 300%, and 400% zoom (web)
  - [ ] Verify readability at max text size (mobile app)  

- [ ] **Keyboard navigation**
  - [ ] All interactive elements can be reached and activated with keyboard
  - [ ] Focus indicators are visible
  - [ ] Tab order is logical and appropriate  

- [ ] **Additional findings**
