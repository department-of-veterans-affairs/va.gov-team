# Drawer PRD (Product Requirements Document)
- **Version:** MVP 
- **Start Date:** April 16, 2025 
- **End Date:** July 8, 2025 
- **Status:** Completed 

## Overview
The Drawer is a container UI pattern that slides in from the edge of the screen to display contextual content or actions without navigating away from the current page. It is used for tasks like detailed views, forms, or quick settings, and overlays the existing interface with a dimmed background to retain user context.

## Background
Drawers are commonly used in modern applications to support multitasking and minimize disruptions. This component will provide a reusable implementation aligned with our design system’s accessibility, theming, and interaction patterns. It is expected to be used in web and responsive contexts across multiple product surfaces.

## Goals
- Provide a standardized drawer component that supports consistent, responsive design
- Ensure accessible keyboard and screen reader behavior
- Support right side entry 
- Enable smooth transitions and intuitive dismissal behavior
- Allow implementing any component or content inside the drawer

## Out of Scope
- Support left, bottom, top side entry

## User Stories
- As a clinician, I want to view more details in a drawer so that I don’t lose my place on the main page
- As a designer, I want a re-usable drawer with guidance so that I can maintain a consistent user experience
- As a developer, I want to implement custom content inside the drawer so I can reuse it across workflows
- As a keyboard user, I want to navigate and dismiss the drawer without needing a mouse
- As a screen reader and Voice Control user, I want clear labels so that I can interact with the drawer

## Requirements

- **P1:** Must have. Prioritized into scope.  
- **P2:** not in scope. Can be a post-MVP enhancement or contributed back by product teams.
- **P3:** not in scope. May not be a candidate for the pattern design and more appropriate as an enhancement in the consumer's product UX instead.

| Requirements  | Priority Level  |
| :------------- | ------------- |
| Support drawer opening from the right edge  | P1  |
| Drawer should overlay content with a dimmed background (scrim)  | P1  |
| Support open/close animations  | P1  |
| Clicking outside the drawer (on scrim) should close it  | P1  |
| Enable keyboard-based closing (e.g., Esc key)  | P1  |
| Enable keyboard-based navigation  | P1  |
| Enable header and optional sub-header  | P1  |
| Enable customizing of body content including implementing components  | P1  |
| Enable user to specify width of drawer  | P1  |
| Support up to 400x responsiveness  | P1  |
| Support drawer opening from left, bottom, or top  | P2  |

## Epic
[#1264 Drawer pattern](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/1264)

## Research
[Design Exploratory of Use Cases](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1743786498636/de75cdd4711fe4a8d8a5bc76cb8c56c1fdd3ebc3)

## Artifacts for Users
1. [Drawer in the CDS Figma UI Kit Library](https://www.figma.com/design/f2zr6Zvf9ssGgfBnBan1sY/Clinical-Design-System---V-5.3.1?node-id=14774-108&p=f&t=tH1A869UFdn8aMAl-0)
2. [Drawer in Storybook for developers](https://crispy-succotash-9k23jen.pages.github.io/?path=/docs/components-drawer--docs)
3. [Drawer in VA CDS Documentation for product teams](https://department-of-veterans-affairs.github.io/clinical-design/components/drawer)

