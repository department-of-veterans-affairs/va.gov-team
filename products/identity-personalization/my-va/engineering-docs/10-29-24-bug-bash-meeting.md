# My VA bug bash 

**Date**: Tuesday, October 29th, 2024

**Participants**: [Allison Lu](https://github.com/allisonlu), [Daniel Miller](https://github.com/DanielMiller-agile6)

**Goal**: identify parts of the My VA codebase that we can improve when there is a slow down during our main initiatives, brainstorm dev tasks to refine (outside of team refinement)

## 📝 Meeting notes

### General notes
- we have [a list of flaky tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen%20label%3Ae2e-flaky-test%20label%3Aauthenticated-experience%20) that were automatically created by `va-vsp-bot`
  - most are from 2023, so may not be applicable to our current code
  - so we should **go through this list and close tickets, if not applicable**
- "Benefit Payments" Card heading
    * May already have a ticket
    * Maybe already resolved?
- how do we get rid of just _stuff_?

### 🧠 Initiative brainstorm

**Phase 1: Remove** 

- Onsite notifications - [Notification center](https://github.com/department-of-veterans-affairs/vets-website/tree/main/src/applications/personalization/notification-center)
  - [the Notification center MVP initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/identity-personalization/onsite-notifications/notification-center-mvp) has been decommissioned as of fall 2023
  - so we should **discuss with Chante to see if we should remove this unused code**
  - (the code will be in the history if we need it re-implement it)

**Phase 2: Refactor** 

- find and remove duplicate code

**Phase 3: Retain** 

(maintaining 90% code coverage)

- update tests in lowest coverage areas
- also ties in with removing duplication

**Phase 4: Reorganize** 

- see what big files/components can be split into smaller pieces
  - e.g. our root [Dashboard component](https://github.com/department-of-veterans-affairs/vets-website/blob/main/src/applications/personalization/dashboard/components/Dashboard.jsx)  
- advocate for time to do this with product 

**Phase 5: Revisit**

- create an evergreen epic/document for internal dev “improvements”
- jot down notes for what we accomplish 

## ✅ Action items
- [ ] go through [list of flaky tests](https://github.com/department-of-veterans-affairs/va.gov-team/issues?q=is%3Aopen%20label%3Ae2e-flaky-test%20label%3Aauthenticated-experience%20) and close tickets, if not applicable
- [ ] set up meeting with Chante to see if we should remove Notification center code 

## :writing_hand: To refine 
- coming soon
