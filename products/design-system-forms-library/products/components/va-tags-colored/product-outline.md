## va-tag-colored

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Barb Denney
- Accessibility Specialists: Jeana Clark, Amy Leadem
- Web Dev: Ryan Munsch, Kerry Powell

  
## Artifacts
- [Semantic color discovery](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3846#issuecomment-2787713373) 
- [Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/As3gh7VNu3IcCFQ6hg5nMu/VADS-Component-Library?m=auto)
- [Experimental Design [Colored tags]](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2993#top)

# Overview

Colored tags originates from an experimental design request from a team working on a staff-facing application to help users dealing with a lot of data regularly to quickly identify key pieces of information. We will be bringing in colors that align with the [VADS Alerts](https://design.va.gov/components/alert/#examples---standard) that are already being used. The colored tags will have the same semantic meaning that aligns with the alerts.

## Problem Statement
Staff-facing applications require users to process large amounts of data regularly. Current tagging solutions lack visual hierarchy and semantic meaning, making it difficult for users to quickly identify and prioritize key information.

## Solution Summary
Introduce colored tags to the design system that align with existing VADS Alert color conventions, providing consistent semantic meaning across the platform while improving data scanning efficiency.

## Objectives
- Primary: Enable rapid visual identification of information priority and status through semantic color coding
- Secondary: Maintain design system consistency by leveraging existing alert color patterns
- Tertiary: Improve user productivity when processing data-heavy interfaces

## Key Features
### Visual Design
- Four semantic color variants aligned with VADS Alerts:
- Information (Blue): Helpful information and general notifications
- Warning (Yellow/Orange): Caution items requiring attention
- Success (Green): Completed actions and positive status
- Error (Red): Critical issues and failure states
- Consistent styling with existing tag components (typography, spacing, borders)

### Functionality
- Semantic color coding for immediate visual recognition
- Compatible with existing tag behaviors (clickable, dismissible, etc.)
- Stackable/groupable for complex data scenarios


### Accessibility
- WCAG 2.1 AA compliance for color contrast ratios
- Color-blind friendly palette selection
- Screen reader compatible with proper ARIA labels

## Target Users
- Primary: Internal staff using data-heavy applications
- Secondary: Any users of applications built with the design system

## Success Metrics
- Reduced time to identify priority information (measurable through user testing)
- Increased design system adoption of colored tags vs. custom solutions
- Maintained accessibility compliance scores
- Positive user feedback on information hierarchy clarity

## Implementation Considerations
- Ensure consistency with existing VADS Alert component specifications
- Document clear usage guidelines to prevent color misuse
- Provide migration path for teams currently using custom colored solutions
- Consider theming implications for different application contexts

