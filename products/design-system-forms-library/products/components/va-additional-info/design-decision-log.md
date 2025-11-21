# va-additional-info Design Decisions
Last updated: 11-21-2025

- [ADR: 001 - STRUCTURAL UPDATES](#ADR-001---STRUCTURAL-UPDATES)
- [ADR: 002 - DESIGN UPDATES](#ADR-002---DESIGN-UPDATES)
- [ADR: 003 - SIZES](#ADR-003---SIZES)

## ADR 001 - STRUCTURAL UPDATES

va-additional-info & va-alert-expandable has a link with role=button to expand content  [#3657](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3657)

### Status: APPROVED

- Date issue raised: 1-7-25  
- Decision date: 8-21-25  

### Context
A bug was filed requesting updates to the Additional Info design to improve accessibility and better reflect its button-like behavior. The current design resembles a link, which is misleading.

During investigation, we found that the Additional Info component could be further improved by restructuring it to use the native `<summary>` and `<details>` HTML elements. More information on these elements can be found at [MDN - `<details>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details). While these tags previously raised accessibility concerns, those issues have since been resolved. Using them would provide a more accessible structure and eliminate the need for JavaScript, resulting in a simpler, more robust component.

An experimental issue was created to explore this further:

Experimental Design Update Additional Info & Expandable Alert [#4817](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4817#top)

### Decision
Transitioning this component from a JavaScript-based implementation to a native HTML approach provides clear benefits:
- Improved accessibility  
- No JavaScript required

### Consequences
Changing the component’s structure and markup comes with risks. Because this component is used widely across VA.gov, these updates may introduce unexpected impacts in existing implementations.

### Open Questions

---

## ADR 002 - DESIGN UPDATES

Create a slim version of additional info - Design (phase 1) [#4916](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4916)

### Status: APPROVED

- Date issue raised: 10-1-25  
- Decision date: 11-18-25  

### Context
The initial bug request asked that the component more clearly resemble a button, reflecting its intended behavior. During review, we determined that shifting the component to use the `<details>` element meant it would no longer function as a button—but it still should not appear as a link. We concluded that it should retain a button-like visual identity to avoid user confusion.

We reviewed several existing button patterns—including Accordions, Primary Buttons, and Secondary Buttons—and determined that the Additional Info component required its own style to distinguish it from both buttons and accordions, as its interaction pattern differs from each.

**Height:** Although early explorations proposed a 44px height to meet WCAG touch target guidance, reviewing real use cases showed that a 26px height better supports the component’s role in contexts where space and visual hierarchy are important.

**Border:** A 1px border using the medium gray token was added to reinforce its button-like appearance. This provides the minimum AA-compliant contrast while keeping the component visually subtle and preventing it from competing with higher-priority content.

**Icon:** The icon was moved to the beginning for accessibility reasons related to high zoom levels. Similar to findings in issues filed with USWDS regarding accordions, right-aligned icons may disappear at high zoom. Left-aligning the icon eliminates this risk.

### Decision
The new design improves accessibility and adheres to our guidelines: links should look like links, and buttons should look like buttons.

### Consequences
Although we aimed to keep the visual updates minimal, the new design is still more prominent than the previous version. This may introduce challenges in current implementations, as the component may draw more attention than intended. We plan to update guidance to help teams navigate these changes. Some teams may need to transition certain uses of the Additional Info component to different components.

### Open Questions

---

## ADR 003 - SIZES

### Status: APPROVED

- Date issue raised: 9-12-25  
- Decision date: 11-18-25  

### Context
Creating a solution for the new Additional Info component that reduced emphasis across various use cases proved challenging. One approach was to offer more control over the component’s width. The original component uses a full-width option, which we wanted to preserve, but we also looked to text inputs for inspiration. Like select and text input components, we determined that predefined width options could help teams better match the component to its context.

### Decision
The component will support custom width, XL, and 2XL options so that the Additional Info component doesn’t appear excessively wide when not appropriate.

We considered adding a minimum width but decided against it. In many contexts—such as indented layouts—a minimum width could lead to overflow issues.

### Consequences
Because this component is used extensively, it’s difficult to predict whether these additional sizing options will introduce new challenges or ultimately provide the right balance of flexibility and visual control.

### Open Questions
