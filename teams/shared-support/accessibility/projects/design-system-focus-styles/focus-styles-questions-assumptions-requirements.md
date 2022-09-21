# VA Design System Focus Styles: Questions and Assumptions

## Questions

- Do teams use custom components outside of the design system that may require a more custom approach to focus styles?
- With the move to v3 of the USWDS Design System, would our link colors or other prominent colors change on the site in a way that would make us rethink focus style colors?

## Assumptions

- We'll need to use another focus style method other than the double box shadow for:
  - wrapping text links 
  - And some other possible use cases:
    - Checkbox component
    - Combo box (focus within selection items)
    - E.g. Search
    - Radio buttons
- We're designing for the whole site, not just the design system components.

## Requirements

- We're working from using the double box shadow as a starting point.
-  We'll need to select colors from the USWDS Design System, V3.
- We need to consider the following states in combination with the focus state:
  - Resting
  - Hover
  - Active
  - Disabled
  - On both light and dark backgrounds

## Supporting documentation

Use double box-shadow for focus styling #654
A11y maturity plan [DRAFT] Double box-shadow focus styling
