# va-accordion Design Decisions
Last updated: 2025-10-17

- [ADR: 001 - Separate 'expand all' and 'collapse all' buttons](#ADR-001---Separate-expand-all-and-collapse-all-buttons)
- [ADR: 002 - Button design](#ADR-002---Button-design)

## ADR: 001 - Separate 'expand all' and 'collapse all' buttons

### Status: APPROVED
- Date issue raised: 2025-09-15
- Decision date: 2025-09-15

### Context
Originally, the accordion 'expand all' and 'collapse all' buttons were a single toggle option. They were seperated into two buttons that are visible all the time. You can read more about the change in this PR. 

[va-accordion: Create separate buttons for "expand all" and "collapse all" #1772](https://github.com/department-of-veterans-affairs/component-library/pull/1772#top)

### Consequences
The new pattern introduces a potential null button state where clicking a button doesn't create a action. Here is a review of different government designs systems and how they handle the 'expand all' and 'collapse all' buttons. 

[Accordion expand all / collapseaall control discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-accordion/accordion-expand-all-collapse-all-control-discovery.md)

### Open Questions
No open questions

## ADR: 002 - Button design

### Status: APPROVED
- Date issue raised: 2025-09-15
- Decision date: 2025-10-22

### Context
As part of updating the accordion component to display both “Expand all” and “Collapse all” actions simultaneously, we reviewed the design and visual treatment of these buttons.

Currently, the buttons resemble links but these elements perform actions on the page. They should be visually represented as buttons, not links. This change will improve clarity and accessibility by reinforcing their interactive nature.

Within our current design system, we identified two possible options for the accordion control buttons:

1. [Secondary button](https://design.va.gov/components/button/) - The outlined button style aligns with the system’s hierarchy but may visually compete with more prominent actions elsewhere on the page.
2. [Icon button](https://design.va.gov/components/button/button-icon#examples) - The icon button, used as a tertiary action in specific contexts, may be a better fit. This would treat the “Expand all / Collapse all” actions as tertiary interactions.

Implementing this approach would require designing a new variation of the tertiary icon button.
A proposed design can be reviewed in this [Figma branch](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/rhpw0SFyU8xzLm6dmMymj8/VADS-Component-Library?m=auto&node-id=40131-22422&t=qfWkoZXCtt5KNUuG-1). 

### Decision
* **Component choice:** We decided to move forward with the Icon button component since the accordion expand all or collapse all actions are considered teritiary in ranking. 
* **Button placement:** We will keep the button's right aligned to maintain consistency with the icon below.
* **Icon:** We will use the same plus and minus icons that the accordions use for continued consistency.

### Consequences
Either option will give the buttons more presence on the page and the accordions are used often through out VA.gov. This change will have a impact on other teams designs and the prominence of the buttons.

### Open Questions

---
