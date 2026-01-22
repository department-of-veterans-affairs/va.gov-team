# Card Status - Design Decisions
Last updated: 10/16/2025

This document outlines the key design decisions made for implementing error states in the VA Design System Card component. These Architecture Decision Records (ADRs) capture the context, decisions, and consequences of our design choices to ensure consistency and provide guidance for future development.


- [ADR: 001 - Cards will not support success, warning, or info states](#ADR-001---Cards-will-not-support-success-warning-or-info-states)
- [ADR: 002 - User must be able to resolve the error](#ADR-002---User-must-be-able-to-resolve-the-error)
- [ADR: 003 - New Status tag will be used for launch](#ADR-003---Default-tag-will-be-used-for-launch)
- [ADR: 004 - The error message will be attached to the link when in error mode](#ADR-004---The-error-message-will-be-attached-to-the-link-when-in-error-mode)
- [ADR: 005 - Existing card will be moved to legacy state in Figma](#ADR-005---Existing-card-will-be-moved-to-legacy-state-in-Figma)
- [ADR: 006 - Card error state component will become Card status](#ADR-006---Card-error-state-component-will-become-card-status)
- [ADR: 007 - Card status MVP](#ADR-007---Card-status-MVP)
- [ADR: 008 - Card status will use the action link](#ADR-008---Card-status-will-use-the-action-link)
- [ADR: 009 - Card status links will be verbose](#ADR-009---Card-status-links-will-be-verbose)


## ADR 001 - Cards will not support success, warning, or info states

### Status: Accepted

- Date issue raised: 07/17/2025
- Decision date: 07/17/2025

### Context
Many design system components support multiple status states (warning, error, success, and info) that operate similarly to communicate various conditions to users.

### Decision
We have decided to limit card status indicators to only the error state. Other status states are not being considered at this time and are not planned for the immediate future.

### Consequences
- Teams that want to communicate success, warning, or info states will need to use alternative approaches
- When error states are resolved, teams cannot show a success state directly on the card
- Teams are encouraged to use other alert components in combination with cards to communicate non-error states

### Open Questions
N/A

## ADR 002 - User must be able to resolve the error

### Status: Accepted

- Date issue raised: 07/17/2025
- Decision date: 08/04/2025

### Context
Cards sometimes represent errors caused by API failures or system issues that users cannot directly correct. We want to reserve the card error state specifically for errors that users can take action to resolve.

### Decision
Cards displaying an error state must include a visible secondary action link that allows users to correct the error. This action link must be present in all card states (missing, error, and default). The link text may change contextually (for example, from `Add` to `Edit`).

### Consequences
- Error state cards will always provide users with a clear path to resolution
- Since users need to navigate to a different page to fix the error, the corrective action uses a link element rather than a button
- System-generated errors that users cannot resolve should use different UI patterns

### Open Questions
N/A


## ADR 003 - New Status tag will be used for launch

### Status: Accepted

- Date issue raised: 07/31/2025
- Decision date: 08/04/2025
- Decision changes: 10/16/2025

### Context
The experimental design request specified using a colored tag for the error state. However, colored tags are now available in the VA Design System.

### Decision
We will implement the card status using the new status tag style. O

### Consequences
The status tag is a new component not used by teams at this point. There could be some regressions in the card due to the new tag.

### Open Questions
N/A


## ADR 004 - The error message will be attached to the link when in error mode

### Status: Accepted

- Date issue raised: 07/31/2025
- Decision date: 08/04/2025
- Decision revised date: 9/12/2025

### Context
When users tab away from a card in an error state and then return to it via keyboard navigation, we want to ensure they're still aware that an error needs to be resolved.

### Decision
Users will be able to know that there's an error when they encounter the link.

#### Accessibility Implementation
Pages containing cards typically do not include form fields (such as text inputs, select menus, or checkboxes).

To ensure error states remain discoverable and perceivable in Browse Mode:

- **Error announcements:** Error messages use `role="alert"` to trigger immediate screen reader announcements
- **Programmatic associations:** Cards use `aria-labelledby` and `aria-describedby` to connect headings with error messages
- **Semantic structure:** Headings inside cards use semantic `<h2>` tags, enabling navigation via heading shortcuts

This approach ensures screen reader users receive the same information and interaction cues as visual users.

### Consequences
N/A

### Open Questions
N/A

## ADR 005 - Existing card will be moved to legacy state in Figma

### Status: ~~Accepted~~ Changed

- Date issue raised: 08/04/2025
- Decision date: 08/06/2025
- Decision changed: 10/16/2025

### Context
To add an error state to the Figma card component, we have two options:
1. Duplicate the existing component structure (preserving legacy design patterns)
2. Issue a new version that improves the component's construction for future maintenance
   
### Decision
We will issue a new version of the card component to better align with the coded implementation. This involves:

1. **Separated concerns:** The new card component will have four visual style variants (default border, default error, background, drop shadow) 
2. **Flexible content:** Card content will be either prebuilt options or a flexible option for teams to add custom content

Currently, the component combines content and visual style into single variants. We are separating these concerns to create a more maintainable structure.

~~We will maintain and support the current card component by renaming it to "Card - Legacy".~~

### Implementation Plan
~~- **Legacy preservation:** The current card component will be renamed to "Card - Legacy"~~
- **New default:** The improved card component will use the standard "Card" name
- **Opt-in adoption:** Teams can choose when to migrate to the new design structure
- **Error state requirement:** Teams wanting to use error states must adopt the new component design
  
### Consequences
- **Breaking changes:** Teams updating to the new component structure will lose any existing customizations
- **Migration effort:** Teams will need to plan for updating their card implementations
- **Improved maintainability:** The separated structure will be easier to maintain and extend
- **Communication needed:** We need to determine how and when to communicate this change to teams

### Open Questions
- How should we communicate this change to affected teams? We are providing a new card that provides an error state and is more aligned with the web component. But, if it is swapped with the legacy card, teams will lose any customizations they have made. Plan accordingly. The current card will be renamed to Card - Legacy.
- Do we want to then eventually deprecate the legacy version.


## ADR 006 - Card error state component will become Card status

### Status: In process

- Date issue raised: 8/31/2025
- Decision date: 10/16/2025

### Context
After discussions with DST Engineers, we realized we should just build the card status as a variant that supports an error state. We have many card statuses across VA.gov.

### Decision
We can build a card status variant based on the work done here. Card statuses need a headline and body copy, at a minimum. Items supporting an error state need a tag, an error message, and a link to resolve the error.

A [discussion board](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4535) was started and teams were invited to contribute. As of 9/12/25 no one has.

### Consequences
- A consequence could be building a status card component that is too restrictive for teams. 

### Open Questions


## ADR 007 - Card status MVP

### Status: Accepted

- Date issue raised: 09/25/2025
- Decision date: 09/25/2025

### Context
In the teams attempt to make sure any and all possible card status variants could be handled by the first version of this card status, we started churning a bit, and feeling like we would need to account for every possibility. 

### Decision
Much like the service list item component was created for a specific and limited use case, we can create the new card status variant to meet our initial needs here. To help with this, wireframes were created to help us focus on the elements of a status card.

[Figma link to branch](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/dmfSX2RQxlMwDHe20vt64t/VADS-Component-Library?m=auto&node-id=38925-799&t=VA0cWeAHNrpwxfMa-1)

<img width="1240" height="640" alt="wireframes for card status" src="https://github.com/user-attachments/assets/3b334691-71dc-4608-b22b-c64bc4977b9d" />


### Consequences
- A consequence could be building a status card component that is too restrictive for teams. But, as we can tell for now, this should meet most current use cases. We can expand later.

### Open Questions

## ADR 008 - Card status will use the action link

### Status: Accepted

- Date issue raised: 01/12/2026
- Decision date: 01/12/2026

### Context
The original design of the card status from the AEDP team used the active link. It was updated to use the action link.

### Decision
We will use the [action link](https://design.va.gov/components/link/action#when-to-use-an-action-link), not the active link. The link is a call to action, or the primary action the user needs to take. Because we may have multiple cards with primary action links in it, we will use the secondary action link. The [active link](https://design.va.gov/components/link/#when-to-use-an-active-link) is used in a collection of links (in this case it's a collection of cards, not links). We will use the primary action link.

### Consequences
- Need to make sure we update screenshots in figma to make sure they reflect the new design

### Open Questions

## ADR 009 - Card status links will be verbose

### Status: Accepted

- Date issue raised: 01/12/2026
- Decision date: 01/12/2026

### Context
For accessibility reasons, we want to not use as much hidden sr-text, and make sure our link text is as visibly descriptive as we make it for screen reader users. This means that the text links will not just display "Add" or "Edit", but instead it will say "Add [the thing]" or "Edit [the thing]".

### Decision
We will do this, and it will be written into guidance.  

### Consequences
- The component will not support adding an accessible name to the link. `aria-describedby` however will be used to manage the error message announcement when the card goes into an error state

### Open Questions
