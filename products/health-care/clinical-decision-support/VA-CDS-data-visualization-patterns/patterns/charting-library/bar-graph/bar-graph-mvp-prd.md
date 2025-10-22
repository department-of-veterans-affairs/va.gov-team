# Bar Graph PRD (Product Requirements Document)
- **Version:** MVP 
- **Start Date:** July 9, 2025
- **End Date:** 
- **Status:** in progress

## Overview
The Bar Graph is the second chart type to be implemented within our chart library. It will provide a flexible and accessible way to visualize categorical data with rectangular bars. The component will build on the existing chart library architecture and adhere to our design system’s guidelines, emphasizing usability, accessibility, and theming.

## Background
Clinicians operate in data-dense environments where they must quickly interpret trends and make decisions based on discrete, categorical metrics—such as patient volume by department, adherence rates, or diagnostic distributions. A bar graph supports this need by offering a familiar and easily scannable visual format to compare values across categories. Incorporating this pattern into the chart library enables designers and developers to present structured data with clarity, supporting critical clinical insight while preserving contextual awareness within complex workflows.

## Goals
- Provide a reusable and accessible bar graph component
- Support vertical orientation
- Ensure responsive behavior
- Enable easy integration for both designers (via Figma UI Kit) and developers (via code and Storybook)

## Out of Scope
- Stacked bars
- more than two bars
   - Reasoning: More than two bars increases data density. Considering how to display this should open up the option for stacked bars or other ideas. Considering the bar chart is currently experimental and without pilot partners, the MVP should keep the solution simple and allow user feedback when a product team considers this pattern.
- Horizontal orientation
- 3D bar charts

## User Stories
- As a designer, I want a flexible Bar Graph pattern in Figma so that I can visually represent category-based data
- As a developer, I want a reusable Bar Graph pattern so that I can support dynamic data inputs
- As a product team, we want to customize colors, labels, axis formats, and legends so that we can match our use-case needs
- As a mobile user, I want the Bar Graph to adapt gracefully to smaller screens so that I won't lose context of information
- As a contributor, I want clear documentation and examples so that I can implement and extend the Bar Graph pattern confidently
- **Accessibility & Usability:** 
   - As a user with a screen reader, I want the Bar Graph to provide semantic context and value labels so that I can synthesize the information
   - As a user using Voice Control, I want the Bar Graph to provide semantic context and value labels so that I can navigate and interact with the bar graph
   - As a keyboard-only user, I want to navigate to and through the Bar Graph using standard keyboard controls so that I can access all relevant chart information (e.g. bar labels, values, groupings) without relying on a mouse



## Epic
[#1540 Chart Library: Bar Graph](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/1540)

## Discovery
[Design Exploratory of Use Cases](https://www.figma.com/design/y2tH8ZpfcFQEekwbTB1WB8/Clinical-Design-System---Sandbox?node-id=14688-266&p=f&t=Rig0KBszAE5oCJVY-0)

## Artifacts for Users
1. [UI Kit](https://www.figma.com/design/f2zr6Zvf9ssGgfBnBan1sY/Clinical-Design-System---V-5.3.1?node-id=16482-26&p=f&t=rk7QsDkOVhMpoN6I-0)
2. [Storybook](https://crispy-succotash-9k23jen.pages.github.io/?path=/story/components-chart--bar-chart-single)
3. [VA Clinical Design System Documentation](https://department-of-veterans-affairs.github.io/clinical-design/components/chart)

