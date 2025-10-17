# Line Chart PRD (Product Requirements Document)
- **Version:** MVP 
- **Start Date:** March 5, 2025
- **End Date:** September 30, 2025
- **Status:** Complete

## Overview
The Chart Library is a collection of reusable, standardized data visualization components. The line graph will be the first in the collection. It will provide a flexible and accessible way to visualize data with lines. 

## Background
Data visualization is a growing need across our products. Currently, teams rely on disparate charting solutions that result in inconsistent user experiences, accessibility gaps, and duplicated efforts. A centralized chart library will ensure visual cohesion and technical efficiency.

## Pattern Outcome 
The outcome of this project is to deliver a robust, accessible, and reusable line graph pattern that serves as the foundation for a comprehensive chart library within the Clinical Design System. This pattern will ensure visual consistency, ease of integration, and support for future chart types.
<br>

## Goals
- Provide a reusable and accessible line graph component
- Ensure responsive behavior
- Enable easy integration for both designers (via Figma UI Kit) and developers (via code and Storybook)

## Out of Scope
- more than four lines
- showing data for the same X-axis value in one tooltip
- export or download functionality

## User Stories
As a designer, I want a flexible Line Graph pattern in Figma so that I can visually represent data
As a developer, I want a reusable Line Graph pattern so that I can support dynamic data inputs
As a product team, we want to customize colors, labels, axis formats, and legends so that we can match our use-case needs
As a mobile user, I want the Line Graph to adapt gracefully to smaller screens so that I won't lose context of information
As a contributor, I want clear documentation and examples so that I can implement and extend the Bar Graph pattern confidently
Accessibility & Usability:
As a user with a screen reader, I want the Line Graph to provide semantic context and value labels so that I can synthesize the information
As a user using Voice Control, I want the Line Graph to provide semantic context and value labels so that I can navigate and interact with the line graph
As a keyboard-only user, I want to navigate to and through the Line Graph using standard keyboard controls so that I can access all relevant chart information (e.g. line labels, values, groupings) without relying on a mouse

## Pilot Partners
### 1. Medical Calculators


### 2. My Work Week

## Epics
1. [#1119 Chart Library - Line Graph](https://github.com/department-of-veterans-affairs/clinical-design-system/issues/1119)

## Research
1. Research on clinician experience
    - V0 (Version 0) [What was learned](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1741706604562/d7dd39483048e39623dc2d1f293cabfe74c24b52)
2. Exploratory Discovery for line graph as a pattern
    - [Line Graph workshop](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1742488984031/2915fe9530ecc5cbc2b85f1aebe3c7fc5d43e8db)
    - [Technical workshop for developer's experience](https://app.mural.co/t/coformaco8066/m/coformaco8066/1744646844614/1950ef107ea7879e1e5d718cc9c1d074a1aa0398)
3. [ADR 0010: Charting Library](https://github.com/department-of-veterans-affairs/clinical-design-system/blob/main/doc/adr/0010-charting-library.md)

## Artifacts
1. [UI Kit](https://www.figma.com/design/f2zr6Zvf9ssGgfBnBan1sY/Clinical-Design-System---V-5.3.1?node-id=16482-26&p=f&t=rk7QsDkOVhMpoN6I-0)
2. [Storybook](https://crispy-succotash-9k23jen.pages.github.io/?path=/docs/components-chart--docs)
3. [VA Clinical Design System Documentation](https://department-of-veterans-affairs.github.io/clinical-design/components/chart)
4. [ADR 013: Chart Component Folder Architecture](https://github.com/department-of-veterans-affairs/clinical-design-system/blob/main/doc/adr/0014-line-chart-component-folder-structure.md)
5. [ADR 0015: Chart Component Data Structure](https://github.com/department-of-veterans-affairs/clinical-design-system/blob/main/doc/adr/0015-line-chart-component-data-structure.md)
