---
name: Accessibility Audit
about: Create an epic for an a11y audit outside of the collaboration cycle
title: ''
labels: 508/Accessibility, epic
assignees: ''

---

# [A11y (Type of Audit Here e.g. Maintenance)] (Name of what you're auditing here)

## Audit Coverage

<!-- Delete anything you won't test here -->

### Automated 
 - [ ] Run axe checks on every page or unique state (required)
 - [ ] Run axe-coconut on every page. Coconut is a leading-edge tool, and identifies more WCAG2.1 success criteria that will eventually become the law of the land.
 - [ ] Run WAVE on every page if time allows. WAVE is more visual than axe or axe-coconut, but offers some excellent ways to identify nested headings and HTML5 landmark tags.

### Manual 
 - [ ] Color contrast checks
 - [ ] Color blindness checks
 - [ ] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
 - [ ] Keyboard navigation for the happy path

### Screenreader 
 - [ ] IE11 + JAWS
 - [ ] Chrome + JAWS
 - [ ] NVDA + Firefox
 - [ ] Safari + VoiceOver
 - [ ] iOS Safari + VoiceOver

## Staging URL and Credentials
- [Staging link](Insert link here)
- [Prototypes](Insert link to prototypes here)
- vets.gov.user+245@gmail.com
- vets.gov.user+228@gmail.com
- [Passwords](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)

## Feedback framework

- **❗️ Must** for if the feedback must be applied 
- **⚠️ Should** if the feedback is best practice 
- **✔️ Consider** for suggestions/enhancements 

## Definition of done

1. Review and acknowledge all issues added to this audit epic.
1. Fix and/or document decisions made for all issues.
1. Accessibility specialist will close epic after reviewing documented decisions or validating fixes for all tickets.
