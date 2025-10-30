# Accordion Expand / Collapse control discovery

This document summarizes government design systems that **support global “Expand All / Collapse All”** functionality for accordion components, focusing on **differences in implementation and accessibility reasoning**.  
Systems without this functionality (e.g., Canada.ca, NHS, NZ) are excluded.

---

## 📊 Comparison Table

| **Design System** | **Control Type & Behavior** | **Accessibility Implementation** | **Notes / Philosophy** |
|--------------------|-----------------------------|----------------------------------|-------------------------|
| 🇺🇸 **USWDS (USA.gov)** | Optional per accordion — Two buttons (“Expand all”, “Collapse all”) or single toggle configurable per accordion. Each accordion manages its own state independently. | Accordion headers use `<button>` with `aria-expanded` and `aria-controls`. Expand/collapse all controls are regular `<button>` elements. Keyboard: Space/Enter toggles. | Designed for flexibility; developers decide whether to include controls. |
| 🇬🇧 **GOV.UK Design System** | Built-in single toggle — One dynamic button switches between “Show all sections” / “Hide all sections.” Updates automatically based on state. | Section headers use `<button>` with `aria-expanded` and `aria-controls`. Global toggle has visible text + screen reader (SR-only) enhancements. Fully keyboard accessible. | Dynamic label communicates current action to users; avoids redundant or inactive controls. |
| 🇦🇺 **Australian Government / NSW / QLD** | Optional — Two visible buttons (“Expand all” / “Collapse all”) or a toggle version. Always shown; affects all sections in the group. | Headers use `<button>` with `aria-expanded` and `aria-controls`. Global buttons are standard accessible `<button>`s. Includes focus/keyboard navigation. | Emphasizes clarity through always-visible controls; both actions remain explicit to the user. |

---

## 🧩 Detailed Descriptions

### 🇺🇸 U.S. Web Design System (USWDS)

**Implementation:**  
- Each accordion can optionally include global expand/collapse buttons.
- Controls can be two static buttons or a single toggle button.

**Accessibility Reasoning:**  
- Each header uses `aria-expanded` and `aria-controls`.
- Keyboard support: **Enter** and **Space**.
- Global controls are standard buttons with visible text, providing clear actions to assistive technology.
- Focus remains on the triggering button to avoid unexpected shifts.

**Notes:**  
- The focus is on developer flexibility, allowing implementers to decide whether to include expand/collapse all functionality.

**References:**  
- [Accordion Component Documentation](https://designsystem.digital.gov/components/accordion/)
- [Accordion Accessibility Tests](https://designsystem.digital.gov/components/accordion/accessibility-tests/)

---

### 🇬🇧 GOV.UK Design System

**Implementation:**  
- Includes a single dynamic global toggle.
- Button label updates between “Show all sections” and “Hide all sections” depending on current state.

**Accessibility Reasoning:**  
- Header buttons use `aria-expanded` and `aria-controls`.
- Screen reader users hear the label of the global button, which communicates the current action.
- Dynamic label changes serve as an explicit announcement of the action.
- Keyboard accessible: Tab to navigate headers; Enter/Space to toggle.

**Notes:**  
- Avoids presenting “dead” controls; the single button communicates the valid action at all times.
- Hidden SR-only text further clarifies the purpose of the action to screen reader users.

**References:**  
- [GOV.UK Accordion Component](https://design-system.service.gov.uk/components/accordion/)
- [Improving Accordion Accessibility](https://insidegovuk.blog.gov.uk/2021/10/29/how-we-made-the-gov-uk-accordion-component-more-accessible/)

---

### 🇦🇺 Australian Government (AGDS / NSW / QLD)

**Implementation:**  
- Optional global control with two visible buttons: “Expand all” and “Collapse all.”
- Both buttons are always displayed, affecting all sections in the accordion group.

**Accessibility Reasoning:**  
- Header buttons use `aria-expanded` and `aria-controls`.
- Global buttons are standard `<button>` elements with visible text.
- All actions remain explicit and predictable to screen reader users.
- Keyboard navigation and focus handling follow standard best practices.

**Notes:**  
- Showing both buttons simultaneously provides a consistent, explicit representation of all available actions.
- This pattern can enhance comprehension for users of older assistive technologies or users who benefit from stable layouts.

**References:**  
- [NSW Digital Design System Accordion](https://designsystem.nsw.gov.au/components/accordion/index.html)
- [Queensland Government Accordion](https://www.designsystem.qld.gov.au/components/accordion)

---

## 🎯 Accessibility Considerations Across Approaches

### Single Toggle Button
- Communicates one valid action at a time.
- Requires dynamic label updates to be announced to assistive technologies.
- Reduces visual clutter but may require ARIA/live region handling to ensure screen reader users perceive changes.

### Dual Buttons (Expand / Collapse)
- Both actions are always visible, giving a clear state readout.
- Provides explicit, predictable controls for screen reader users.
- Can create “null actions” if a user activates a button when all panels are already in that state; can be mitigated with announcements or `aria-disabled`.

### Key Differences Highlighted by Accessibility Experts
- Single toggles rely on **dynamic label updates** to communicate current state.
- Dual buttons prioritize **persistent, explicit actions** for all users.
- Both patterns meet WCAG requirements if implemented correctly:
  - Clear labels describing actions.
  - State changes programmatically conveyed (`aria-expanded`, optional `aria-live` updates).
  - Focus does not move unexpectedly.
- Choice often depends on audience needs:
  - Dynamic toggle works well with modern AT and cognitive load minimization.
  - Dual buttons may be preferred in environments with older assistive technologies or when explicit visibility of all actions is critical.

**References:**  
- [W3C WAI-ARIA Authoring Practices Guide – Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [Equalize Digital – How to Code Accessible Accordions](https://equalizedigital.com/how-to-code-accessible-accordions/)
- [TPGi – Best Practices for Inclusive Design](https://www.tpgi.com/best-practices-for-inclusive-design/)

---

