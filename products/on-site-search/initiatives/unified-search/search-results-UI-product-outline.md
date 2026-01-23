
# Product Outline 

## Important links
- [Figma](https://www.figma.com/design/VWmC3OragQWtJX4zYJGrkU/Search-Results-Page?node-id=0-1&t=OGjWrWdEdmo1bumw-1)
- [Initiative Brief](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/on-site-search/initiatives/unified-search/initiative-brief.md)

## Overview
The search results UI has been updated in the design system, and we wish to update the current search.gov search results page to use the latest design.


## Goals

- Update UI for search results with the latest patterns and components before switching search platforms so we can focus on research, integration, and testing when search moves to this phase.
- Move search results out of the 'use with caution: candidate' phase.

## Solution approach (What we changed)

### Search input field changes

- Removed the gray background container around the search input
  - RESULT: Cleaner, simpler appearance and implementation, less visual noise
- Replaced the small search input with the big search input on the desktop
  - RESULT: Improved target and interaction size for Veterans on desktop

### Search results

- Changed the layout order of the search result
  - Original: Title → URL (green) → Description
  - Updated version: Title → Description → URL (gray)
  - RESULT: Improved reading flow for screen readers

### More VA search tools

- Moved from the right column to below the search results and pagination

<img width="1704" height="854" alt="Image" src="https://github.com/user-attachments/assets/eecb7172-3285-48b8-84ab-4864ba3e4222" />

<img width="1638" height="756" alt="Image" src="https://github.com/user-attachments/assets/4849d5c3-29d0-444d-b02f-0cda93c5e9a0" />

<img width="800" alt="CleanShot 2026-01-23 at 11 02 28@2x" src="https://github.com/user-attachments/assets/da6b676b-f9c2-4fd7-8d88-483a8bbb2f57" />

## Measuring success

### Metrics to consider

- Click-through rate (CTR) - Are users clicking on results more often?
- Time to first click - Are users finding relevant results faster?
- Search abandonment rate - Do users give up searching?

### Accessibility considerations

- [ ]  Screen reader announces content in logical order (title, description, URL)
- [ ]  Keyboard navigation unchanged
- [ ]  Color contrast meets WCAG AA standards for gray URL text

## Launch strategy
- This is primarily a UI change with components that already exist within the design system, so our plan is to do internal testing on staging and then release on production.

## Launch dates
- *Target Launch Date*
  - End of February, 2026



#### Communications

<details>

- Team Name: Onsite search
- GitHub Label: search
- Slack channel: #onsite-search
- Product POCs: Shawn Collins, Megan Siddle
- Stakeholders: Mikki Northuis, Jennifer Kramer 

</details>

#### Team members

<details>
 
 - PM: Megan Siddle
 - Engineering: Colin O'Sullivan
 - Design/Research: Shawn Collins
 
</details>


#### Stakeholders
*What offices/departments are critical to make this initiative successful?*

<details>
  
- Office/Department:  Office of the CTO
- Contact(s): Chris Johnston
 
</details>
