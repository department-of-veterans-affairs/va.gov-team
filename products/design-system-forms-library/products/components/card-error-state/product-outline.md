
# Card Component Error State Outline

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Jeana Clark
- Web Dev: Jami Gibbs, Eddie Otero
- Accessibility Specialist: Jeana Clark, Amy Leadem
  
## Artifacts
- [Design Decision log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/card-error-state/design-decision-log.md)
- [Discovery research ticket or findings](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4516)
- Link to Figma flle
- [Experimental design request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4276)
- [Properties / architecture document](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/card-error-state/properties-architecture.md)

## Summary
The error state indicates that something is wrong with the information in card that the user needs to fix before proceeding. In this particular use case, there are required fields displayed within a card that the user needs to enter information for. The error state on a card indicates that the information displayed within the card is invalid or missing.
  
## Purpose & Context
1. What problem does this component solve?
   1. The error state indicates that the all of the data within the card is invalid or missing. The user needs to update the data before proceeding. 
1. Where and how will it be used in the product?
   1. The primary use case for the card in error state is when the user is viewing prefilled information (which is displayed in cards, per the "[Help Users to... Know When Their Information is Prefilled](https://design.va.gov/patterns/help-users-to/know-when-their-information-is-prefilled)" pattern) and some of their prefilled information is missing and required for the form.
1. Is this a new component or an enhancement to an existing one?
   1. It will be a variant of the [Card component](https://design.va.gov/components/card)

**Who are the primary users of this component?**
Teams that build forms


## Tasks / Things to consider

### Design & UX
1. What are the different states (default, hover, active, disabled, loading)?
   1. We are only building the error state on a card. The other states do not need to be considered
1. Are there existing design patterns this should follow or extend?
   1. Leverage the existing card design and error state design
1. Does it need to support themes (e.g., light/dark mode)?
   1. We currently don't support light/dark mode
1. How should it behave responsively (mobile, tablet, desktop)?
   1. The error card will behave similarly to existing card design. When the error state is triggered, the card will not shift to the right or grow wider. It will be narrower to make space for the padding on the left.

### Content Considerations
1. Is there new content that needs to be run by CIA?
   1. We need to work with the content team to determine if these error messages are enough `Select “Add” to enter your [missing information].`

### Structure & Content
- What are the required and optional props/inputs?
- Are there any interactive states?
- What variations or configurations are needed (e.g., size, layout, icon options)?
- Are there edge cases to consider?

### Accessibility
- What are the ARIA roles, properties, or patterns needed?
- How will it be usable with keyboard navigation and screen readers?
- Are there any color contrast or focus management considerations?

## Technical Requirements
### Testing & Documentation
- What test coverage is required (unit, integration, visual regression)?
- How will usage examples be documented?
- What controls and props will be exposed in tools like Storybook?

### Versioning & Lifecycle
- How might this component evolve over time?
- Are there plans for deprecation of similar components?
- How will backward compatibility be handled?

## Key Features of the Component:
- description 
- description
- Accessibility: Ensures compliance with WCAG standards and maintains ease of use for all users.


## Timeline 

- Sprint 8
	- Research / Discovery
	- Design: 
- Sprint XX
	- Design:  
- Sprint XX 
	- Web component development
	- Mobile component development
- Sprint XX
	- Accessibility review
	- Documentation 
- Staging review scheduled 


## Success Criteria
- Adoption, Usability?
- Positive feedback from users and stakeholders regarding usability and accessibility.

## Risks and Mitigations


