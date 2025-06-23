## va-input-telepone: Support international phone number 

### [Design Decisions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-input-telephone/design-decisions.md)

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Jeana Clark
- Web Dev: Ian Harrison
- Mobile Dev: Tim Roettger
## Artifacts
- [Web Designs](https://www.figma.com/design/SzBiTsdFPDXHyuSJLqo5nm/WIP---International-Phone-Exploration?node-id=0-1&p=f&t=BZALaWdTj5dzJUuC-0)
- [Mobile Designs](https://www.figma.com/design/bFdl7MEIda4ExZIQuot84r/Profile---Contact-Information?node-id=2119-2783&t=litTRdAgMiaN29Tr-0)
- [StoryBook](https://design.va.gov/storybook/?path=/story/components-va-input-telephone--docs)
- [Mobile design for combo box](https://www.figma.com/design/Zzt8z60hCtdEzXx2GFWghH/branch/vzQ2rqkg0F5rHDxPmFLHFL/VA-Mobile---Component-Library?node-id=1414-454&p=f&t=tpXj2lI20Y8lEfMn-0) 
## Summary
- The va-input-telephone component is being developed to enable support for international phone numbers across the VA.gov ecosystem.
- This enhancement is critical to improving accessibility and usability for veterans and users residing outside the United States.
- The updated component will ensure consistency, flexibility, and compliance across all platforms, including My VA Profile, VA.gov forms, and VA mobile applications.

##  When to use International Phone Number
- If the PDF, online form and the API can support an International Phone Number
- If using prefill, ensure there is error messaging when a form can't accept an international phone number explaining why need to change to a domestic number. 

## Context
- As part of the migration of My HealtheVet (MHV) to VA.gov, it was identified that the current My VA Profile does not support international phone numbers.
- This limitation presents a significant blocker for the migration of My HealtheVet
  - Prefill-enabled online forms: Many forms rely on user profile data and currently cannot accept international phone numbers. This will be handled either with the new component or in a new pattern coming out later, but for the interim the user will receive an error message that the phone number can only be 10 digits before they can continue
  - PDF-based forms: Many forms do not accept international phone formats, will need to work with form owners to update the PDF.

## Objectives
- Create a Shared Component: A single, reusable va-input-telephone component will support international phone numbers and be integrated across all VA.gov platforms.
- Enhance Input Flexibility: Customize formatting to support both domestic and international phone numbers, based on specific form requirements.
- Streamline Adoption: Ensure integration with My VA Profile, VA.gov online forms, and mobile applications.

## Key Features of the Component:
- Customizable Formatting: Allows flexible display and validation for phone numbers.
- International Support: Handles international formats alongside domestic numbers.
- Accessibility: Ensures compliance with WCAG standards and maintains ease of use for all users.

## Integration Plan
- My VA Profile: Replace the existing domestic-only phone input field with the shared component.
- VA.gov Forms: Audit and update all forms using prefill or standalone fields to adopt the va-input-telephone component.
- Mobile Apps: Provide a React Native-compatible version of the component for seamless integration.

## Timeline (TBD)
April 
- Sprint 1 (April 14 to 27)
	- Conduct an audit of all prefill-enabled and PDF-based forms to identify necessary updates.
	- Component design initiated 

May
- Sprint 2 (April 28 to May 11)
	- Document design decision log 
	- Design: created designs in Figma,  reviewed with PO, designers and developers and finalized designs for web and mobile
	- Development initiated: Properties and architecture documented  
- Sprint 3 (May 12 to 25)
	- Web component development 
	- Mobile component development

June
- Sprint 4 (May 26 to June 8)
	- Accessibility review
	- Documentation: Guidance written up, reviewed, finalized
- Sprint 5 (June 9 to 22) (if needed)
	- Accessibility issues addressed
	- Component library, guidance and Figma are published. 
- Staging review scheduled 
- Begin integration across My VA Profile, VA.gov forms, and mobile applications
- Complete full integration.  
- Target deadline for adoption is August 2025.


## Success Criteria
- Prefill forms and applications accept international phone numbers without errors.
- Reduction in the rejection rate of forms due to invalid phone numbers.
- Positive feedback from users and stakeholders regarding usability and accessibility.

## Risks and Mitigations

