
# Card Component Status State Outline

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Jeana Clark
- Web Dev: Eddie Otero
- Accessibility Specialist: Amy Leadem
  
## Artifacts
- [Design Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/platform/design-system/components/card-status-state/design-decision-log.md)
- [Discovery research ticket or findings](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4516)
- Link to Figma flle
- [Experimental design request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4276)
- [Properties / architecture document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/card-error-state/properties-architecture.md)

## Summary
The card error state variant communicates that the information displayed inside a card is missing or invalid and must be corrected before the user can proceed. This variant builds on the standard card component and error pattern used in the VA Design System.

In the primary use case, the card displays prefilled information (per the [“Know When Their Information is Prefilled” pattern](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled)). When required prefilled data is missing, this error variant prompts users to supply the missing information.

  
## Purpose & Context
1. **What problem does this component solve?**
   - Provides a consistent, accessible visual and programmatic way to alert users when information in a card is missing or invalid.
1. **Where and how will it be used in the product?**
   - Primarily in forms where prefilled data is displayed in cards. If required data is missing or incomplete, the error state is triggered to prompt user action.
1. **Is this a new component or an enhancement to an existing one?**
   - This is a **variant** of the existing [Card component](https://design.va.gov/components/card), not a new component.

**Who are the primary users of this component?**
VA.gov product teams building forms that include prefilled data
- Examples:
- 	First & Last Name
- 	SSN #
- 	Mailing Address
- 	Email
- 	Phone Number
- 	Service History Information

## Is this a variation of existing component or new compontent?
- Existing component of Card
- Name: va-card--error
- Story Book Name: Card error state
- Figma Name:
- Design System Name: 

## Requirements
- Must be able to be used by any team that needs to display an error on a card
- Must be able to accept unique error text
- Must be able to maintain a unique card-id and error-id where appropriate
- Must be able to have an active link in the card that maintains a unique accessible name
- Must be able to disable error state
- Must be able to display a colored tag to represent error state
- Will not support card with icon variant
- Will not support other states such as warning, info, or success

## Storybook User stories
- View error on card
- Add custom error text
- 

## Tasks / Things to consider

### Design & UX
1. **What are the different states (default, hover, active, disabled, loading)?**
   - Only the error state. (Warning, info and success are not in scope for this variant.)
1. **Are there existing design patterns this should follow or extend?**
   - Card component
   - Alert/Error styling patterns (e.g., red border, left red bar)
1. **Does it need to support themes (e.g., light/dark mode)?**
   - Not currently supported.
1. **How should it behave responsively (mobile, tablet, desktop)?**
   - Card layout and spacing should follow standard responsive card behavior  
   - Card width should not grow to accommodate error state. Instead, space for the left red border is carved from within the card width.

### Content Considerations
1. **New content required?**
   - Yes. Error message content must be clear and actionable.  Example: _“Home phone number is required. Select ‘Add’ to enter it.”_
1. **Does content need to go through Content and IA (CIA)?** 
   - Yes, coordinate with content team to review error message patterns.


### Structure & Content
1. **What are the required and optional props/inputs?**
1. **Are there any interactive states?**
1. **What variations or configurations are needed (e.g., size, layout, icon options)?**
   - This variant is error-only.

### Edge cases to consider:  
1. Multiple cards in error state.
   - IDs will need to be unique.  
1. Cards with no interactive element inside
   - All cards using this component must have an actionable item/link within the card design 
1. Error text for long labels

### Accessibility
1. **What are the ARIA roles, properties, or patterns needed?**
   - Uses `aria-labelledby` to associate card heading  
   - Uses `aria-describedby` to associate error message with the card  
   - Error message uses `role="alert"`   
   - Focus and scroll behavior ensure error is announced and visible  
1. **How will it be usable with keyboard navigation and screen readers?**
   - Error card is made keyboard-focusable only during error state via `tabindex="0"` 
1. **Are there any color contrast or focus management considerations?**
   - Yellow focus indicator (`outline: 2px solid #ffbe2e`) improves keyboard visibility  
   - Contrast and spacing follow existing DS standards  


## Technical Requirements
### Testing & Documentation
1. What test coverage is required (unit, integration, visual regression)?
1. How will usage examples be documented?
1. What controls and props will be exposed in tools like Storybook?

### Versioning & Lifecycle
1. **How might this component evolve over time?**
   - Future component variations may include an error summry statement above the cards
1. **Are there plans for deprecation of similar components?**
   - There are no similar components
1. How will backward compatibility be handled?
   - This is a net-new variant, teams will opt-in to its use

## Key Features of the Component:
- Clearly communicates when all content within a card is invalid or missing  
- Built as an accessible Web Component  
- Can be used with one or many cards  
- Error message is keyboard- and screen-reader accessible  
- Accessibility: Ensures compliance with WCAG standards and maintains ease of use for all users.



## Risks and Mitigations
| Risk                                               | Mitigation                                             |
|----------------------------------------------------|--------------------------------------------------------|
| Teams may misuse the card error pattern            | Provide clear Storybook guidance and example usage     |
| Overuse of focus management could confuse users    | Limit focus only to first error; review UX in context  |
| Screen reader variation in announcing error group  | Use standard ARIA patterns + test with JAWS, NVDA, VO  |


