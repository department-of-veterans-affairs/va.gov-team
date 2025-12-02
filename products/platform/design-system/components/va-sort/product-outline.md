
# va-sort Outline

## Design System Team
- Product Managers: Carol Wong, Tricia Baker
- Designer: Derke Wang, Jeana Clark
- Web Dev: ???
  
## Artifacts
- link to Design Decision log 
- Link to discovery research ticket or findings
- Link to Figma flle
- Link to Experimental design request if applicable
- Link to properties / architecture document

## Summary
The Sort Component is a reusable UI element that enables users to organize and reorderinformation such as search results, long lists (ie. facilities, providers), and data sets so that a user can find relevant information quickly and easily within web and mobile applications. It streamlines the user experience by providing intuitive controls and visual feedback for sorting operations.


- The Filter action allows a user to narrow down results using multiple attributes.
- The Sort action allows a user to reorder a fixed list of information. The Sort action does not change any information, it simply reorders it based on the users preference.


  
## Purpose & Context
- Provide users with an efficient way to sort data by one or more fields.
- Support ascending/descending order toggling.
- Offer seamless integration and customization for various application needs.
- Ensure accessibility and responsive design.

### 1. What problem does this component solve?
The Sort Component addresses the common need for users to efficiently organize and view data in lists, tables, and grids. By enabling sorting by one or more fields, toggling between ascending/descending order, and providing clear UI controls, it helps users quickly find and prioritize relevant information. It also streamlines developer workflows by offering a reusable, customizable, and performant solution for sorting needs.

### 2. Where and how will it be used in the product?
The Sort Component will appear wherever users interact with sortable data such as facilities and providers. 

### 3. Is this a new component or an enhancement to an existing one?
This is a new component that will be part of the search filter pattern. 

### 4. Who are the primary users of this component?
- **End users**: Individuals interacting with application data, who need to sort and view information easily.
- **Developers**: Product and engineering teams who require a configurable, reusable solution for implementing sorting logic in UI components.
- **VFS teams**: Teams building digital applications on VA.gov to ensure that usability and accessibility standards are met.

## Tasks / Things to consider
### Research
- [Accessibility recommendations](https://docs.google.com/document/d/1kNLPUKnwr-k0sIogzc7MdpUqk4vF4mL3hIEg_qqmZuI/edit?usp=sharing)


### Design & UX
- Label must say “Sort by
- For sorting, the pre-selected selection on page load should reflect the way sort is happening on page load
- When sorting accompanies filtering or other results, the “Sort” description can be added to a “results description”. For example, “Showing 1–10 of 999 results for "2020" with 5 filters applied. Sorted by [Sort method].”
- The sort control must use a native <select> element for predictable keyboard and AT behavior.  
- Changing a sort value must not cause unexpected navigation; only the relevant results region updates.  
- Focus must remain stable and visible after sorting.  
- Live region must announce sorting changes with dataset and page context.  
- The sort must re-sort the entire data set, not just the data available in a paginated view. 
- When navigating through paginated results, the sort criteria must be maintained
- Following Loading state rules for sorting that may take awhile.
- Focus stay on sort component after a selection is made
- When sorting paginated results, the dataset resets the user to page 1.


### Content Considerations
- Is there new content that needs to be run by CIA?
- Error states, hint text?

### Structure & Content
- What are the required and optional props/inputs?
- Are there any interactive states?
- What variations or configurations are needed (e.g., size, layout, icon options)?
- Are there edge cases to consider?

### Accessibility
- What are the ARIA roles, properties, or patterns needed?
- How will it be usable with keyboard navigation and screen readers?
- Are there any color contrast or focus management considerations?

### Technical Requirements
### Testing & Documentation
- What test coverage is required (unit, integration, visual regression)?
- How will usage examples be documented?
- What controls and props will be exposed in tools like Storybook?


## Key Features of the Component:
- description 
- description
- Accessibility: Ensures compliance with WCAG standards and maintains ease of use for all users.



## Success Criteria
- Adoption, Usability?
- Positive feedback from users and stakeholders regarding usability and accessibility.

## Risks and Mitigations

[product outline]
