# Storybook for Design System and REACT Component Documentation
Storybook Implementation Product Outline

## Overview
Storybook is an open source tool for developing UI components for React, Vue and Angular. Storybook provides a sandbox so that engineers and designers can build, design and update UI components in a developer-friendly environment.

## Problem Statement
The Design System Team believes that improving consistency by identifying and communication of a “source of truth” version for components and patterns will increase the number of new or variant components which will benefit all teams. 

Currently, VFS Designers  are confused by inconsistencies across design system documentation, tools, and production applications. Documentation for the component library is in two locations: Gatsby and design.va.gov which can be confusing for VFS teams.  When a component is updated, it is likely that the documentation of the component update is not reflected in both sites. 

Storybook will allow frontend developers to build UI components in isolation and to document UI component usage and props in one place.  

--- 

## Assumptions
- The VFS team experience of adding and testing components is quite bad resulting in fewer improvements and additions to the design system component library
- The overhead in publishing and using the updated package results in changes not being made to vets-website for a while which in turn results in things breaking unexpectedly. 
- Having component library documentation in two places is confusing and  is exacerbated when the documentation of a component on the two sites don't match.
- The current documentation isn't interactive making it difficult to test the behavior of components.
- There isn't an easily-accessible source of truth for what components have already been built by other teams which aren't in the official design system component library. This causes the same component to be designed and built multiple times (i.e. direct deposit).
- There isn't an easy way to track the usage of components not coming from the design system component library so we cannot track adoption and have an incomplete picture of what should be added to the  design system component library.

## Solution Approach

- We selected Storybook because it is a full featured, extensible, well-supported, widely-adopted industry-standard platform. Storybook solves the all the same needs that our current documentation site does with many quality-of-life improvements.
- Storybook helps to document components for reuse and automatically visually test your components to prevent bugs.
- Storybook makes development faster and easier by isolating components. This allows developers to work on one component at a time. 
- Storybook could be adapted in the future to stitch stories together to demonstrate patterns. 
- Storybook has additional add-ons that could accommodate other future use cases. 

_For non-trivial technical solutions, an [engineering design doc](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/platform/engineering/design-docs) should be written to deeply explain **How** this product will be built._

--- 

## Personas
VFS Engineers
VFS Designers
Design System Team 

## Measuring Success

### Key Performance Indicators (KPIs)
- Improved usability for both engineers and designers (qualitative)
- Testing any changes to components will be easier resulting in
   -- Reduced defect rate
   -- Reduced time to make the changes
   -- Reduced time to review the changes 


#### Baseline KPI Values
- Send out a satisfaction survey to engineers and designers to get some sort of a baseline

---

## Launch Dates
- Pilot for evaluation: Mid-November
- Launch Date: TBD

---

## Reference Material

_Link to the following materials as relevant._

- VFS-facing Product README (in `/platform`)
- Release Plan
- Any product health or success dashboards

### Communications
- Team Name: Design System Team
- GitHub Label: design-system-team
- Slack channel: vsp-design-system (for general communications) and vfs-platform-support (for support)
- Product POCs: Carol Wong

### Stakeholders
 - DEPO leads
 - VFS teams using the platform to build on VA.gov
 

