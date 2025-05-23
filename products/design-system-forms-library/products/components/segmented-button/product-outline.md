# Segmented Button Product Outline

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Dan Brady
- Web Dev: ???
- Mobile Dev: Tim Roettger 

## Artifacts
- [Design Decision Log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/segmented-button/design-decision-log.md) 
- Link to Figma flle (TBD)
- Link to properties / architecture document

## Summary

The Segmented Button component is designed to help users easily switch between different views of information that are all related to the same topic or context. Our approach is based on the existing and successful Segmented Control component used in the VA Mobile Design System.

* [Mobile segmented control design](https://department-of-veterans-affairs.github.io/va-mobile-app/design/Components/Navigation/Secondary/SegmentedControl/)
* [Mobile segmented control storybook](https://design.va.gov/storybook/?path=/docs/va-mobile_segmented-control--docs)

## Objectives

The component should create a clear and intuitive navigation component that allows users to seamlessly access related content sections without leaving their current context.

## Key Features of the Component

- Supports multiple segments (2-4) with clear visual indication of the active segment.
- Allows for customization of segment content (text only).
- Includes multiple states for individual segments.
- Ensures responsiveness across various screen sizes.
- Provides clear accessibility support, ensuring compliance with WCAG standards and maintaining ease of use for all users, including keyboard navigation and screen reader support.
- Easily connected with common events product teams use to manage application state or navigation routing.

## Timeline 

- Sprint 3 (May 12 to 25)
        - Design 
- Sprint 4 (May 26 to June 8) 
	- Web component development
- Sprint 5 (June 9 to 22)
	- Accessibility review
	- Documentation 
- Sprint 6 (June 23 to July 6) if needed
        - A11y bug fixes 
- Staging review to be scheduled for late June or early July

## Success Criteria

- Used by product teams across web.
- Successful implementation in a variety of use cases.
- Minimal bug reports or issues related to the component post-release.

## Risks and Mitigations

### Risks

- Keeping the look and feel, and functionality, exactly the same on both web and mobile could be a challenge.
- Teams might use the component in ways it wasn't intended, perhaps with too many options or as an alternative to Tabs, which could confuse users.

### Mitigations

- Clear documentation that shows how to use the component correctly, along with guidance on when it's not the best fit.
- Provide straightforward examples and advice for integrating the component with common patterns.
