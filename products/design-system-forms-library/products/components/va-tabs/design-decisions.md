# va-tabs Design Decisions
Last updated: 2025-05-07

- [ADR: 001 - Behavior when tabs overflow off the screen](#ADR-001---Behavior-when-tabs-overflow-off-the-screen)
- [ADR: 002 - Behavior when tabs overflow off the screen](#ADR-002---Tabs-style-choices)

## ADR: 001 - Behavior when tabs overflow off the screen

### Status: Accepted
- Date Raised: 2023-12-08
- Decision Date: 2025-04-15 ([Design Weekly Chat](https://vfs.atlassian.net/wiki/spaces/DST/pages/2699886742/Design+Weekly+Chat+Meeting+Notes#%5Bdate%5D.2))

### Context
- When the experimental design was originally presented, three options were proposed as solutions to handle the bahavior of tabs when the screen size is too small to accomodate all the tabs. 

The three options were:
1. Stacked on Mobile
2. Horizontal Scrolling on Mobile
3. Consolidating the tabs into a dropdown that adjust to the screen size. 

Each option has pros and cons you can read more about in the [original experimental design request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346#issuecomment-2200772543). 

### Decision
- Tab overflow behavior: The tabs will use option 3 to consolidate the tabs into a dropdown when the tabs do not fit on the screen size. 
  - We looked at the options recommended by DK in the original experimental design submission and decided that the dropdown option would create a cleaner interface.
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

---

## ADR: 002 - Tabs style choices

### Status: Accepted
- Date Raised: 2023-12-08
- Decision Date: 2025-05-09

### Context
When the experimental design was originally presented a tabs design was proposed with the experimental design that aligns with current component designs for side navigation. The DST did a design discovery and an audit to make sure the tabs design is consistent with our current component designs and also following best practices of tab design on the web. The tabs submitted in the experimental design process were adjusted based on the discovery process. 

### Decision
#### Tab
1. Tab underline - We debated on adding an underline to the tab but decided that the tab is a menu element much like the main menu and the side nav that have other elements to indicate they are navigational elements. 
2. Tab padding - 8px padding on each side and 16px on the top and bottom to make sure the tab will be a minimum width and height of 44px.
3. Tab margin - A 24px margin between tabs is applied to ensure enough space between the tabs.
4. Tab inactive state - All tabs will span across the page with a solid gray line below the tabs. The tab links will be the VADS link color and have a normal font weight. 
5. Tab hover state - We followed the design of the side nav and link styles for the hover over design and applied the same gray background, color text, and transition for tabs on hover.
6. Tab active state - The tab active design has a 4px line below the tab link that matches the same width as the focus state underline. The tab text changes to a bold weight and the base color to indicate that the current tab.
7. Tab focus state - The tab will have the same focus state as all the buttons and links in VA.
8. Tab max width - The tab will have a max width of 128px so that two tabs can still fit on a 320px screen size.
9. Tab min width - The tab minimum width will be 44px to meet accessibility requirements.
10. Tab text overflow - If the tab text cannot fit on one line within the 128px max height then the text will overflow to two lines within tab.
11. Tab line height - The line height will use the same line height used for buttons. 
#### 'More' dropdown button
1. Dropdown icon - An audit was completed to determine the correct icon to use. The down cheveron icon is use for the additional info and the expandable alert and can be used to indicate a dropdown option for this drodpown component.
2. Dropdown text - We will use the word "More" when additional tabs are moved to a dropdown. After reviewing other design systems for tabs with tab overflow interaction with a dropdown being use. The word 'More' was used in all instances.
3. Button hover - TBD
4. Button active - TBD
5. Button focus - TBD
6. Button dropdown count - When tabs are moved to a dropdown a count of the options within the dropdown are counted and added to the 'More' button. This would look like "More (3)". A badge design was considered but a MVP design to test this feature is easiest option for the first tab component iteration.
#### Dropdown popover
The popover is the container the holds all the dropdown options.
1. Popover padding - There is a 8px padding applied to the top and bottom of the popover.
2. Popover margin - There is a 4px margin added to the top of the popover to create some space between the dropdown button and the popover.
3. Popover border radius - There is a 8px border radius applied to each corner.
4. Popover border and shadow - The popover uses the same border and shadow as the card component.
5. Popover max width - A max width of 288px is used to match the minimum 288px width that we use to design components for the VA. 
### Dropdown options
The dropdown options were designed to align with tabs but as a vertical design. 
1. Option states - The option states match the tab states above with the only difference being that the active and focus state underline is instead a 4px border on the left side of the option.
3. Option spacing - 16px spacing is used on all sides of the option.
4. Option divider - A light gray border is used between the options to add more distinction between the options.
5. Option overflow - If the option does overflow, the text will overflow to a second line.
   
### Consequences
There are alot of moving parts with the tab component. This list shows a overview of why certain design styles were chosen with the goal for the tab component is to make a design that is consistent with the current components and is most accessibile. As we try to consider all scenarios there is most likely a scenario that was missed or a inconcistent design style choice made. The design will most likely have to be reevaluated to consider other design updates in the future. 
