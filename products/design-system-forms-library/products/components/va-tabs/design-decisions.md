# `va-tabs` Design Decisions  
_Last updated: 2025-05-07_

## Index  
- [ADR 001: Behavior When Tabs Overflow Off the Screen](#adr-001-behavior-when-tabs-overflow-off-the-screen)  
- [ADR 002: Tab Style Choices](#adr-002-tab-style-choices)  

---

## ADR 001: Behavior When Tabs Overflow Off the Screen  

### Status: Accepted  
- **Date Raised:** 2023-12-08  
- **Decision Date:** 2025-04-15 ([Design Weekly Chat](https://vfs.atlassian.net/wiki/spaces/DST/pages/2699886742/Design+Weekly+Chat+Meeting+Notes#%5Bdate%5D.2))

### Context  
When the experimental design was originally presented, three options were proposed to handle tab overflow on smaller screens:  

1. Stack tabs vertically  
2. Enable horizontal scrolling  
3. Move excess tabs into a dropdown  

Each approach had pros and cons, documented in the [original experimental design request](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2346#issuecomment-2200772543).

Prototypes were created for each approach:  
- [Option 1: Stacked on mobile](https://codepen.io/babsdenney/pen/EaaYvQV)  
- [Option 2: Horizontal scrolling](https://codepen.io/babsdenney/pen/yyyBbYY)  
- [Option 3: Dropdown](https://codepen.io/babsdenney/pen/GgRVoZQ)  

### Decision  

- **Tab Overflow Behavior:** Option 3 (Dropdown) was selected.  
  - This option offers a cleaner interface and supports future expandability.  
  - While research indicates dropdowns may limit discoverability, the team believes the specific use case here mitigates that risk.  
  - Reference: [MHV on VA.gov secondary navigation comparison research - Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md)

- **Dropdown Name:** The dropdown will be labeled **"More"**.  
  - Alternatives like "Menu" were considered, but a design system audit showed "More" is more common.  
  - [Design audit of tabs and dropdown components](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?wid=0-1745614150592)

- **Dropdown Count:** A numeric count will be added to the "More" button to show how many tabs are hidden (e.g., "More (3)").  
  - This helps users understand that additional tabs exist.  
  - [Screenshot reference](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?wid=0-1745614501331)

- **Custom Dropdown vs. Browser Select:** A **custom dropdown** will be implemented.  
  - The browser’s native select component limits styling and accessibility.  
  - Tabs require styling for active, hover, focus, and link states which are not supported in native dropdowns.  
  - VA design system guidance recommends links for URL-based navigation; native selects do not support links.  
  - Reference: [Design system guidance: Links vs. Buttons](https://design.va.gov/components/link/#links-vs-buttons)

- **Flex layout:** The tabs layout will switch from a left aligned margin layout to a flex layout when dropdown is used**
  - The dropdown is only used when there is limited space on the screen. When there is more space on the screen we have room to spread the tabs out so they have more space between the tabs. When the dropdown is used we know that space is limited so we can use the flex layout to show more tabs on screen when there is less space. 

### Consequences  
- This solution has not yet been tested with users.  
- Further usability research will be needed to validate whether users understand and use the dropdown effectively.

---

## ADR 002: Tab Style Choices  

### Status: Accepted  
- **Date Raised:** 2023-12-08  
- **Decision Date:** 2025-05-09  

### Context  
The proposed experimental design included tabs already in production. A design discovery and audit were conducted to ensure alignment with the VA Design System and web best practices. Adjustments were made based on these findings.  

- [Design audit conducted in Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?wid=0-1745613483003)

Tabs with similar overflow interactions were also reviewed from other design systems:  
- [Primer DS](https://primer.style/react/storybook/?path=/story/components-underlinenav-features--overflow-on-narrow-screen&globals=viewport:narrowScreen)  
- [Workday DS](https://canvas.workday.com/components/containers/tabs/#tab=web&heading=overflow-tabs)  
- [Dell DS](https://vanilla.delldesignsystem.com/2.46.2/index.html?path=/docs/components-tabs--basic)  
- [Microsoft DS](https://developer.microsoft.com/en-us/fluentui#/controls/web/pivot)  
- [Lightning 2 DS](https://sds-site-docs-1fea39e7763a.herokuapp.com/index.html?path=/story/components-tabs--scoped-with-overflow)

### Decision  

#### Tab Styles  

1. **Underline:** No underline. Tabs are treated as navigation elements like side nav or main menu.  
2. **Padding:** 8px horizontal, 16px vertical (minimum 44px height).  
3. **Margin Between Tabs:** 24px.  
4. **Inactive State:** Gray line below tabs; link color text; normal font weight.  
5. **Hover State:** Same gray background and hover style as side nav and links.  
6. **Active State:** 4px underline, bold text, base color.  
7. **Focus State:** Matches standard VA focus state for buttons and links.  
8. **Max Width:** 128px (ensures two tabs fit on 320px screens).  
9. **Min Width:** 44px (meets accessibility standards).  
10. **Text Overflow:** Wraps to two lines if necessary.  
11. **Line Height:** Matches line height used in buttons.

#### “More” Dropdown Button  

1. **Icon:** Uses the down chevron icon, consistent with expandable alerts.  
2. **Text:** Uses the word **"More"** (based on audit findings).  
3. **Hover/Active/Focus States:** *TBD*  
4. **Dropdown Count:** Numeric count shown in parentheses (e.g., "More (3)"). Badge design was considered but deferred for MVP.

#### Dropdown Popover  

1. **Padding:** 8px (top and bottom).  
2. **Margin:** 4px (top).  
3. **Border Radius:** 8px on all corners.  
4. **Border & Shadow:** Matches card component styles.  
5. **Max Width:** 288px (standard VA minimum component width).

#### Dropdown Options  

1. **States:** Mirror tab states, with a 4px **left border** (instead of bottom underline) for active/focused options.  
2. **Spacing:** 16px padding on all sides.  
3. **Divider:** Light gray border between options.  
4. **Text Overflow:** Wraps to two lines if needed.

### Consequences  
The tab component has many interactive and visual elements. This decision document outlines the rationale behind each choice. However, given the complexity, inconsistencies or unforeseen use cases may arise, and the design may need future refinement.
