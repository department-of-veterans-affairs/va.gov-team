# Single Value Visualization PRD (Product Requirements Document)
- **Version:** MVP or "V1"
- **Start Date:** June 11, 2025
- **End Date:** 
- **Status:** In Progress

## Overview
The Single Value Visualization pattern highlights a single, key-value metric in a clear, visually distinct format. It enables users to quickly understand critical information and often serves as a springboard to deeper data or actions elsewhere in the product.

## Background
Clinicians work in data-dense environments where key information can easily be overlooked. They need quick access to critical metrics—such as vitals, lab results, or task counts—without having to sift through complex interfaces. A Single Value Visualization helps surface these essential values clearly and prominently, enabling faster decision-making and reducing cognitive load.

## Goals
- Provide a clear, standardized pattern for displaying a key value prominently
- Ensure visual hierarchy, responsiveness, and accessibility across platforms
- Enable easy integration for both designers (via Figma UI Kit) and developers (via code and Storybook)

## Out of Scope
- Allow for flexible integration with additional contextual elements (e.g., labels, trend indicators, icons, actions)

## User Stories
- As a clinician, I want the most important value to be visually distinct and easy to locate at a glance so that I can determine if I need to take further action on a patient
- As a designer, I want to use a standardized single value pattern so that I can present a critical metric consistently across different views
- As a developer, I want a reusable component that accepts a label and value so that I can consistently enable this component
- As a product team, we want to customize the style or contextualize the value so that we can match our product's use case
- As a mobile user, I want the Single Value Visualization to adapt gracefully to smaller screens so that I won't lose context of information
- As a contributor, I want clear documentation and examples so that I can implement and extend the Single Value Visualization pattern confidently
- **Accessibility & Usability:**
   - As a screen reader user, I want the value and its context (e.g. label, units, trend) to be announced together, so I can understand the value fully
   - As a user using Voice Control, I want the Single Value Visualization to provide a label so that I can navigate to the Single Value Visualization
   - As a keyboard-only user, I want to navigate to the Single Value Visualization using standard keyboard controls so that I can navigate without relying on a mouse

## Requirements

- **P1:** Must have. Prioritized into scope.  
- **P2:** not in scope. Can be a post-MVP enhancement or contributed back by product teams.
- **P3:** not in scope. May not be a candidate for the pattern design and more appropriate as an enhancement in the consumer's product UX instead.

| Requirements  | Priority Level  |
| :------------- | ------------- |
| The component has three sections including the title, value, and an optional section  | P1  |
| Create UI Kit for designers to use in their product designs  | P1  |
| Written guidance for managing text such as character length  | P1  |
| Written guidance for color palette  | P1  |
| Enabling contextual indicators with text in the optional section  | P2  |

## Epic
[#1539 Single Value Visualization](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/1539)

## Research
[Design Exploratory of Use Cases](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1750195625799/0c581495d7a8f555326039f8adcd5c2f9d06eb3d)

## Artifacts for Users


