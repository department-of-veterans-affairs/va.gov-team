# Accordion Expand / Collapse control discovery

# 🧭 Accordion Systems *with* Expand / Collapse All Controls

This document summarizes government design systems that **support global “Expand All / Collapse All”** functionality for accordion components.  
Systems without this functionality (e.g., Canada.ca, NHS, NZ) are excluded for clarity.

---

## 📊 Comparison Table

| **Design System** | **Control Type & Behavior** | **Accessibility Implementation** | **Notes / Philosophy** |
|--------------------|-----------------------------|----------------------------------|-------------------------|
| 🇺🇸 **USWDS (USA.gov)** | ✅ *Optional per accordion* — Two buttons (“Expand all”, “Collapse all”) or single toggle configurable per accordion. Each accordion manages its own state independently. | Accordion headers use `<button>` with `aria-expanded` and `aria-controls`. Expand/collapse all controls are regular `<button>` elements. Keyboard: Space/Enter toggles. | Intended for large or content-heavy accordions; no page-wide toggle. Developers can choose whether to include it. |
| 🇬🇧 **GOV.UK Design System** | ✅ *Built-in single toggle* — One dynamic button switches between “Show all sections” / “Hide all sections.” Updates automatically based on state (no null actions). | Section headers use `<button>` with `aria-expanded` and `aria-controls`. Global toggle has visible text + screen reader (SR-only) enhancements. Fully keyboard accessible. | Most accessible implementation. Avoids redundant buttons, updates text dynamically, clear feedback for all users. |
| 🇦🇺 **Australian Government / NSW / QLD** | ✅ *Optional* — Two visible buttons (“Expand all” / “Collapse all”) or a toggle version. Always shown; affects all sections in the group. | Headers use `<button>` with `aria-expanded` and `aria-controls`. Global buttons are standard accessible `<button>`s. Includes focus/keyboard navigation. | Optional feature recommended for 3+ sections. Slightly less polished UX (both buttons visible), but clear and consistent. |

---

## 🔍 Summary

| **Best Overall Implementation** | **Simplest Optional Implementation** | **Most Flexible for Developers** |
|---------------------------------|-------------------------------------|----------------------------------|
| 🇬🇧 **GOV.UK Design System** — Single dynamic toggle with smart labeling and robust accessibility. | 🇦🇺 **Australian Government DS** — Straightforward dual-button model, easy to implement. | 🇺🇸 **USWDS** — Configurable per accordion; flexible but not globally unified. |

---

## 🧩 Detailed Descriptions

### 🇺🇸 U.S. Web Design System (USWDS)

**Expand/Collapse Controls:**  
The USWDS accordion allows developers to include optional “Expand all” and “Collapse all” buttons *within each accordion component*.  
There is no global, page-level toggle — each accordion manages its own state.

**Behavior:**
- Each panel toggles individually via a header `<button>`.
- Global expand/collapse buttons toggle all panels within that accordion.
- No disabled or hidden states are used; buttons simply perform no action if the state is already uniform.

**Accessibility:**
- Each header button uses `aria-expanded="true|false"` and `aria-controls` linking to the content region.
- Keyboard interaction supports **Enter** and **Space**.
- Expand/Collapse all buttons are plain `<button>` elements with clear visible text.
- Focus remains on the triggering button; no unexpected focus movement.

**Design Philosophy:**
USWDS prioritizes **developer flexibility** over prescriptive UI.  
It provides a foundation that agencies can adapt for their content volume and needs.

---

### 🇬🇧 GOV.UK Design System

**Expand/Collapse Controls:**  
GOV.UK includes a **built-in global toggle** as part of its accordion component.  
A single button at the top switches dynamically between “Show all sections” and “Hide all sections.”

**Behavior:**
- When any section is collapsed, the button reads **“Show all sections.”**
- When all sections are expanded, the button updates to **“Hide all sections.”**
- The label and icon update instantly — users never encounter inactive or redundant buttons.
- Each accordion section can still be opened individually.

**Accessibility:**
- Each section header is a `<button>` with `aria-expanded` and `aria-controls`.
- Hidden screen reader text clarifies actions (e.g., “Show this section,” “Hide this section”).
- The global control is a `<button>` with visible text and no hidden ARIA overrides.
- Keyboard accessible: **Tab** to navigate headers, **Space/Enter** to toggle.

**Design Philosophy:**
GOV.UK’s approach aims for **clarity and accessibility** — only one valid action is ever presented.  
The global control adapts dynamically to the content’s state, providing clear feedback to all users.

---

### 🇦🇺 Australian Government (AGDS / NSW / QLD)

**Expand/Collapse Controls:**  
The Australian and several state-level design systems (notably **NSW** and **QLD**) include an **optional global control**.  
Developers may use either:
- Two static buttons (“Expand all” / “Collapse all”) shown side by side, or
- A single toggle button that switches label dynamically.

**Behavior:**
- Both buttons are always visible (by default).
- Clicking “Expand all” opens every section; “Collapse all” closes them.
- No automatic disabling or hiding of buttons even if the action has no effect.
- Recommended for accordions with **three or more** panels.

**Accessibility:**
- Headers use `<button>` elements with `aria-expanded` and `aria-controls`.
- Global buttons are plain `<button>` elements with clear text.
- Keyboard navigation follows best practices: Tab through headings, Enter/Space to toggle.
- Focus indicators and color contrast meet WCAG requirements.

**Design Philosophy:**
Australian systems value **transparency and consistency** over dynamic adaptation.  
The always-visible buttons ensure users can always see both options, even if they’re redundant in certain states.

---

## 🎯 Design Rationale & Accessibility Trade-offs

### Single Toggle Button
- One button switches between “Expand all” and “Collapse all” dynamically.
- **Pros:**
  - Reduces clutter and cognitive load.
  - Always one valid action — avoids “dead” buttons.
  - Works well if labels update properly and are announced to screen readers.
- **Cons:**
  - Requires robust ARIA management.
  - Some screen reader users may miss label changes if not implemented carefully.
- **Example:** GOV.UK pattern.

### Dual Buttons (Expand / Collapse)
- Two buttons always visible, one for each action.
- **Pros:**
  - Each action is explicit and persistent.
  - Clear state readout for screen reader users.
  - Predictable for cognitive accessibility and older assistive tech.
- **Cons:**
  - One button may be “null” (pressing Expand All when all sections open).
  - Slightly more visual and cognitive clutter.
- **Example:** Australian Government (AGDS / NSW / QLD).

**Accessibility Summary:**
- Both patterns are valid if implemented correctly:
  - Clear labels describing action.
  - State changes programmatically conveyed (`aria-expanded`, `aria-live` if needed).
  - Focus does not jump unexpectedly.
- **Recommendation:**  
  - Single toggle for general audiences with modern assistive tech.  
  - Dual buttons when maximum explicitness and state visibility are desired, particularly for government/enterprise environments.

---

## 📚 Overall Takeaways

| Priority | Recommended Design System | Why |
|-----------|---------------------------|-----|
| **Accessibility-first, no redundant states** | 🇬🇧 **GOV.UK** | Dynamic single button avoids null actions and uses SR-friendly labeling. |
| **Straightforward implementation** | 🇦🇺 **Australian Government** | Easy to build, always-visible controls for quick use. |
| **Flexible / Developer-driven** | 🇺🇸 **USWDS** | Optional and configurable per accordion, ideal for modular sites. |

---

**Author:** Design System Audit  
**Last Updated:** October 2025

---

## 📚 Overall Takeaways

| Priority | Recommended Design System | Why |
|-----------|---------------------------|-----|
| **Accessibility-first, no redundant states** | 🇬🇧 **GOV.UK** | Dynamic single button avoids null actions and uses SR-friendly labeling. |
| **Straightforward implementation** | 🇦🇺 **Australian Government** | Easy to build, always-visible controls for quick use. |
| **Flexible / Developer-driven** | 🇺🇸 **USWDS** | Optional and configurable per accordion, ideal for modular sites. |

---
