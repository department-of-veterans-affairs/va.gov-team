---
name: Accessibility Audit
about: Create an epic for an a11y audit outside of the collaboration cycle
title: ''
labels: Epic, 508/accessibility
assignees: ''

---

# [A11y (Type of Audit Here e.g. Maintenance)] (Name of what you're auditing here)

## Feedback framework

- **❗️ Must** for if the feedback must be applied 
- **⚠️ Should** if the feedback is best practice 
- **✔️ Consider** for suggestions/enhancements 

## Definition of done

1. Review and acknowledge all issues added to this audit epic.
1. Fix and/or document decisions made for all issues.
1. A11y specialist will review documented decisions or validating fixes for all tickets.
1. [A11y specialist will update the product page on the VA a11y dashboard.](https://docs.google.com/spreadsheets/d/1lgzMiZZ-0rBPDuB2gRupBAjsyF0WTe005VvEHYrMxww/edit?usp=sharing)
1. A11y specialist will close this ticket.

## Auditor 
<!-- Change the below name with your name and github ID if you're the a11y specialist working on this ticket. Don't forget to assign this to yourself -->
Josh Kim @joshkimux

## Audit Coverage

<!-- Delete anything you won't test here -->

### Automated 
 - [ ] Run axe checks on every page or unique state (required)
 - [ ] Run WAVE on every page if time allows. WAVE is more visual than axe or axe-coconut, but offers some excellent ways to identify nested headings and HTML5 landmark tags.

### Manual 
 - [ ] Color contrast checks ([recommend using whocanuse.com for beyond compliance reports](https://whocanuse.com/))
 - [ ] Color blindness checks
 - [ ] Zoom layouts to 400% and inspect them for readability. If layouts break at 400%, I will start reducing them until they become stable, and log the zoom ratio when things started breaking.
 - [ ] Keyboard navigation 

### Screenreader 
 - [ ] IE11 + JAWS
 - [ ] Chrome + JAWS
 - [ ] NVDA + Firefox
 - [ ] Safari + VoiceOver
 - [ ] iOS Safari + VoiceOver

## Staging URL and Credentials
- [Staging link](Insert link here)
- [Prototypes](Insert link to prototypes here)
- Test users
  - vets.gov.user+??@gmail.com <!-- List your test users here -->
- [Passwords](https://github.com/department-of-veterans-affairs/va.gov-team-sensitive/blob/master/Administrative/vagov-users/mvi-staging-users.csv)
