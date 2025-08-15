# `va-tabs` Design Decisions  
_Last updated: 2025-07-14_

## Index
- [ADR 001: Tab definitions](#adr-001-tab-definitions)
- [ADR 002: Behavior When Tabs Overflow Off the Screen](#adr-002-behavior-when-tabs-overflow-off-the-screen)  
- [ADR 003: Tab Style Choices](#adr-003-tab-style-choices)
- [ADR 004: Consistent popover styles](#adr-004-consistent-popover-styles)
- [ADR 005: Focus styles](#adr-005-focus-styles)
- [ADR 006: Limiting tabs to 3 or less](#adr-006-limiting-tabs-to-3-or-less)
- [ADR 007: Adding horizontal scrolling for tab overflow](#adr-007-Adding-horizontal-scrolling-for-tab-overflow)
- [ADR 008: Switching from URL navigation to on-page navigation](#adr-008-Switching-from-URL-navigation-to-on-page-navigation)

---

## ADR 001: Tab Definitions  

### Status: Accepted  
- **Date Raised:** 2023-12-08  
- **Decision Date:** 2025-04-15  

### Context
These definitions are based on the original submissions and informed by terminology used in other design systems. They clarify the structure and elements within a tab component.

### Decision

### Tabs Anatomy
- **Tabs:** The entire component consisting of multiple tab items, typically used to navigate between sections of content.
- **Tab (Horizontal or Vertical Tab):** An individual tab within the tabs component, arranged horizontally or vertically within the popover.
- **Selected Tab:** The currently active tab, either clicked or navigated to via keyboard.
- **Unselected Tab:** A tab that is not currently active.
- **Divider:** A horizontal line running beneath the tabs, typically full-width, that visually separates the tab row from the content below.
- **Dropdown Button:** A button within the tab row that triggers the display of additional tab items not shown in the primary row.
- **Open:** When the dropdown is open.
- **Closed:** When the dropdown is closed.
- **Popover:** A floating panel that appears when the dropdown button is activated, containing overflow tab items.
- **Tab Count:** The number displayed on the dropdown button indicating how many additional tab items are hidden in the popover.

### Consequences
Clear and consistent naming reduces future design debt. Establishing terminology early helps streamline communication and decision-making across design and development teams.

## ADR 002: Behavior When Tabs Overflow Off the Screen  

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
- [Option 1: Stacked on mobile](https://codepen.io/babsdenney/pen/yyyBbYY)  
- [Option 2: Horizontal scrolling](https://codepen.io/babsdenney/pen/yyyBbYY)  
- [Option 3: Dropdown](https://codepen.io/babsdenney/pen/EaaYvQV)  

### Decision  

- **Tab Overflow Behavior:** Option 3 (Dropdown) was selected.  
  - This option offers a cleaner interface and supports future expandability.  
  - While research indicates dropdowns may limit discoverability, the team believes the specific use case here mitigates that risk.  
  - Reference: [MHV on VA.gov secondary navigation comparison research - Topline Summary](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/design-decisions.md)

- **Dropdown Text:** The dropdown will be labeled **"More"**.  
  - Alternatives like "Menu" were considered, but a design system audit showed "More" is more common.  
  - [Design audit of tabs and dropdown components](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1745526301433/147ef4e2490afbb999981a3cd80452f3a4871e4f?wid=0-1745614150592)
 
- **Dropdown button:** The dropdown button will use a ghost version the [VADS button with a trailing icon](https://design.va.gov/components/button/#continue) that will toggle directions when clicked. Similar to the [Additional Info](https://design.va.gov/components/additional-info#default) VADS component.  

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
 
- **Minimum dropdown tab count:** The dropdown should only be used if there are more than two overflow tabs. Avoid using a dropdown to replace a single tab.

### Consequences  
- This solution has not yet been tested with users.  
- Further usability research will be needed to validate whether users understand and use the dropdown effectively.

---

## ADR 003: Tab Style Choices  

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

### Tabs component 

1. **Divider:** Gray line that spans all tabs in the same outline color as [cards](https://design.va.gov/components/card#with-drop-shadow)
2. **Space Between Tabs:** 24px of space when a dropdown isn't used. If the dropdown is used, the layout changes to a flex layout with space-between.
3. **Indention:** The tabs component should have no left, right, or top and bottom margin, remaining flush with the edges of the page container.

#### General Tab Styles

1. **Unselected Tab:** No underline. Tabs are treated as navigation elements like side nav or main menu. The VA primary link color will be used with a normal font weight.
2. **Hover State:** Same gray background and hover style as VA side nav and [VA links](https://design.va.gov/components/link/#default).
3. **Selected Tab:** 4px border on bottom for horizontal tabs and on the left side for vertical tabs in the VA primary color. The text styles will be bold text in the base text color.
4. **Focus State:** Matches standard VA focus state for buttons and links.  
5. **Text Overflow:** Wraps to two lines if necessary.  
6. **Line Height:** Matches line height used in buttons.

#### Tabs - Horizontal Styles

1. **Padding:** 8px horizontal, 16px vertical (minimum 44px height and width).
2. **Max Width:** 144px (ensures two tabs fit on 320px screens).  
3. **Min Width:** 64px (meets accessibility standards and optimal size for touch targets). 

#### Tabs - Vertical Styles

1. **Spacing:** 16px padding on all sides.  
2. **Divider:** No divider is used between the tabs within the popover.  
3. **Text Overflow:** Wraps to two lines if needed.
4. **Max Width:** 288px (minimum width of VADS components).  
3. **Min Width:** 128px (width of dropdown button).

#### Dropdown Button  

1. **Icon:** Uses the `expand_less/expand_more` icons from the [VADS](https://design.va.gov/components/icon), consistent with expandable alerts.
2. **Spacing:** Uses the VADS button to match spacing and design.
3. **Text:** Uses the word **"More"** (based on audit findings).  
4. **Hover/Active/Focus States:** Use the same states as the tabs.  
5. **Dropdown Count:** Numeric count shown in parentheses (e.g., "More (3)"). Badge design was considered but deferred for MVP.
6. **Width:** The width is set to 128px since the text within the button is fixed. This will allow us to figure out how many tabs can fit at different screen sizes. 

#### Popover  

1. **Padding:** 8px (top and bottom).  
2. **Margin:** 0px (top).  
3. **Border Radius:** 8px on all corners.  
4. **Border & Shadow:** Matches [card component](https://design.va.gov/components/card#with-drop-shadow) styles.  
5. **Max Width:** 288px (standard VA minimum component width).
6. **Min Width:** 128px (The max width of the dropdown button. This will ensure the component feels connected to the button and the popover isn't smaller than the button.)  

### Consequences  
The tab component has many interactive and visual elements. This decision document outlines the rationale behind each choice. However, given the complexity, inconsistencies or unforeseen use cases may arise, and the design may need future refinement to remain consistent with future design system components.

---

## ADR 004: Consistent popover styles  

### Status: Accepted  
- **Date Raised:** 2025-05-12  
- **Decision Date:** 2025-05-23  

### Context 
We currently have 3 components now that have a popover component. 
- [Combo box](https://design.va.gov/components/form/combo-box)
- [Search input with typeahead](https://design.va.gov/components/search-input#with-typeahead)
- [Tabs](https://design.va.gov/components/tabs)

With a growing list of popover components we decided to align to a single popover design so that we can create consistentcy between the components. 

### Decision 
We will use the combobox popver design for the Popover in the tab component. 

The style changes to the popover will be: 
1. **Border color:** vads-color-base-dark token
2. **Border radius:** No border radius is used
3. **Shadow:** No shadow is used

### Consequences
We created a ticket to add a popover component to the Design System so that we can use it for future components and move all the current components like the search input and the combo box to the popover component. 

Once the popover component is completed, we will need to revisit the tabs and move the tabs popover to the popover component which might create additional work later on. 

[Popover - Design (phase 1) #4151](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4151)

---

## ADR 005: Focus styles  

### Status: Accepted  
- **Date Raised:** 2025-04-01  
- **Decision Date:** 2025-06-02  

### Context

We’re updating focus styles across the VA to match the new design in this [Figma file](https://www.figma.com/design/l7VRNfLewK8W6mcPDtrc1S/Focus-styles?node-id=108-10551&t=h4TaCpzayAMErp4X-1). The new style uses a 4px bottom border for sufficient contrast on both light and dark backgrounds. However, tabs also use a 4px bottom border to indicate selection, making the focus and selected states too similar.

To differentiate focus from selection, we explored three options:

- **Option 1:** Increase the selected tab’s bottom border to 6px, keeping focus at 4px.
- **Option 2:** Add a 2px dark border around the tab on focus.
- **Option 3:** Use the USWDS blue outline for focus.

### Decision

We chose **Option 2**: adding a 2px dark border around focused tabs. This provides clear differentiation while maintaining consistency with the overall design.

### Consequences

This change introduces a new focus style for tabs, diverging from other components, which do not currently use an outer border for focus. 

---

## ADR 006: Limiting tabs to 3 or less 

### Status: Accepted  
- **Date Raised:** 2025-07-02  
- **Decision Date:** 2025-07-14  

## Context

Following an accessibility review of the tabs component, concerns were raised about the overflow behavior—specifically the use of a `more` button to handle excess tabs. You can read more in the [accessibility review](https://vfs.atlassian.net/wiki/spaces/DST/pages/4194730001/Accessibility+Review+-+New+Tabs+Design).  

In response, we initiated a [tabs discussion thread](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/discussions/4443), where teams shared their current use cases. Findings from this effort are documented in the [tabs audit](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tabs/tabs-audit.md).

## Decision

Based on the audit, there are currently no strong use cases requiring more than three tabs. Therefore, we will limit the initial implementation of the `va-tabs` component to **three or fewer tabs**. We will **not implement** a tab overflow solution (e.g., a `more` dropdown) in version 1.

However, we will still address accessibility and usability concerns for limited tabs at 400% zoom or in constrained viewports.

## Consequences

There will most likely be a need to solve for more than 3 tabs in future. This could cause more time to develop and implement this interaction in the future. 

---

## ADR 007: Adding horizontal scrolling for tab overflow
### Status: Accepted  
- **Date Raised:** 2025-07-24  
- **Decision Date:** 2025-07-24

## Context
At times, the tabs list will be wider than the viewport. This usually happens when users zoom in, resize text, or when teams create tab lists that are longer than recommended. To keep the component accessible, we needed to make sure users can always see and navigate to every tab item in the list.

## Decision
After considering a mix of options including a collapsible menu, we chose horizontal scrolling to manage tab overflow. This solution is straightforward, accessible and works well with screen readers and keyboard navigation. If users follow our guidance to limit tab count and keep labels short, horizontal scrolling will only be needed at high zoom levels or in constrained viewports.

## Consequences
If teams need a tabs component that supports more tabs or longer labels, we may need to revisit this functionality.

---

## ADR 008: Switching from URL navigation to on-page navigation
### Status: Accepted  
- **Date Raised:** 2025-07-13
- **Decision Date:** 2025-07-22

## Context
While defining accessibility requirements for the tabs component, we found important differences in how assistive technologies interact with different tabs implementations. We identified two main interpretations:
- In one, tabs act as horizontal navigation. Tab items load new pages, are navigated using the `tab` key, update the url, and are not programmatically linked to their content. 
- In the other, tabs organize page content. These tabs are part of the main content, use arrow keys for keyboard navigation, and show or hide content without refreshing the page. The content panels are directly associated with the active tab.

## Decision
We reviewed guidance from MDN and W3C/APG and decided to treat tabs as content rather than navigation. Tabs have specific accessibility expectations, including keyboard navigation, focus management, and the type of content shown. Because we chose not to build a navigation component, we did not add URL management to the tabs component. This follows common patterns we saw in other implementations and prevents the complexity of recreating and maintaining native browser page load behavior.
  
## Consequences
This approach makes our tabs component more accessible and easier to use. It avoids the complexity of managing URLs and page refreshes, and sets clear expectations for teams. Teams who need navigation features can use other components designed for that purpose. 

---
