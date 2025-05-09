# va-tabs Design Decisions
Last updated: 2025-05-07

- [ADR: 001 - Behavior when tabs overflow off the screen

## ADR: 001 - Behavior when tabs overflow off the screen

### Status: Accepted
- Date Raised: 2023-12-08
- Decision Date: 2025-04-15 ([Design Weekly Chat](https://vfs.atlassian.net/wiki/spaces/DST/pages/2699886742/Design+Weekly+Chat+Meeting+Notes#%5Bdate%5D.2)

### Context
- When the experimental design was originally presented, three options were proposed as solutions to handle the bahavior of tabs when the screen size is too small to accomodate all the tabs. 

The three options were:
1. Stacked on Mobile
2. Horizontal Scrolling on Mobile
3. Consolidating the tabs into a dropdown that adjust to the screen size. 

Each option has pros and cons you can read more about in the [original experimental design request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346#issuecomment-2200772543). 

### Decision
- Tab overflow behavior: The tabs will use option 3 to consolidate the tabs into a dropdown when the tabs do not fit on the screen size. 
  - We looks at the options recommended by DK in the original experimental design submission and thought that the the dropdown option would create a cleaner interface.
- Menu name: We will name to the dropdown for the tabs "More". 
  - There are few different options for what to call the dropdown name. We looked at "menu" or "more" and did an audit of other design systems that implement a similar behavior and the word "more" was used more frequently than other terms.
  - [Design audit of tabs and dropdown components](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?wid=0-1745614150592) in design systems.
- Tab overflow count in dropdown: Adding a numeric count to the dropdown button to indicate how many tab options are in the dropdown. You can see a example of this design in [this screenshot in the Dropdown Audit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?wid=0-1745614501331).
  - One of the issues with this approach discovered in past research is users not being able to find links in the dropdown. We will add a count to the dropdown title to show how many tabs are in the dropdown if you click it. The assumption is that the tab count in the dropdown will help users understand there are more tabs to click on.
- Custom dropdown or browser select: We will be creating a custom dropdown for this component.
  - We were originally considering using a browser select component for the menu dropdown but this ran into some issues. 
    - The first was the select dropdown design. There is little customization options you can do for the browser select component so the design we wanted wasn't possible with the browser select component. 
    - The second issue is with accessibility. We have guidance in the [design system for when to use a link vs. a button](https://design.va.gov/components/link/#links-vs-buttons). These tabs will be URL based which qualifies as a link design. The browser select component would prevent links being used in the dropdown. So we decided a custom component would be the best option so we can style the links in the dropdown to look like links. 

### Consequences
- This tab overflow behavior has not been tested and we aren't sure if users will understand to click on the dropdown to see more tabs. We will need to more research to know if this was the correct option to choose for the tab component. 
