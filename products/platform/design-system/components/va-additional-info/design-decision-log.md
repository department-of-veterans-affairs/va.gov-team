# va-additional-info Design Decisions
Last updated: 01-20-2026

- [ADR: 001 - Structural updates](#ADR-001---Structural-updates)
- [ADR: 002 - Design Updates](#ADR-002---Design-Updates)
- [ADR: 003 - Sizes](#ADR-003---Sizes)
- [ADR: 004 - Remove border](#ADR-004---Remove-border)
- [ADR: 005 - Indenting details text](#ADR-005---Indenting-details-text)
- [ADR: 006 - Icon vertical alignment](#ADR-006---Icon-vertical-alignment)

## ADR 001 - Structural updates

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

## ADR 002 - Design updates

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

## ADR 003 - Sizes

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

---

## ADR 004 - Remove border

### Status: APPROVED

- Date issue raised: 01-20-2026  
- Decision date: 01-20-2026  

### Context
The existing additional info component has a prop to hide/show left a left border. 

### Decision
In the redesign we are not allowing teams to toggle the border. We will need to remove the prop from the code

### Consequences

### Open Questions

---

## ADR 005 - Indenting details text

### Status: APPROVED

- Date issue raised: 01-17-2026  
- Decision date: 01-21-2026  

### Context
The original Additional Info component does not indent content within the details area because the icon has historically been placed on the right side of the summary text. We are moving the icon to the left side, which has created an alignment issue between the summary text and the details text. The summary text is indented due to the new icon, while the details text is not.

### Decision
We decided to indent the details text by 24px so that it aligns with the summary text above. This helps create a clearer visual hierarchy and improves understanding of the relationship between the summary text and the details text.

### Consequences
There is already an issue with text becoming too condensed on mobile, and this change will add an extra 24px of empty space to the content, which could cause readability issues—especially if the Additional Info component already contains a large amount of content. In some cases, the Additional Info component may already be indented, and this change could exacerbate spacing issues on mobile. We will need to reevaluate this design choice if we encounter use cases where the content requires more space.

### Open Questions

---

## ADR 006 - Icon vertical alignment

### Status: APPROVED

- Date issue raised: 01-17-2026  
- Decision date: 01-21-2026  

### Context
The Additional Info icon was originally intended to be vertically centered to align with the Accordion icon. However, after reviewing the design, we determined that this could cause confusion about where the summary text begins. While the Accordion uses a centered icon, it includes visual differences that support this alignment. The Accordion has a gray background that creates visual separation, whereas the Additional Info component will have no divider or visual separation between the summary and the details.

### Decision
We will vertically align the icon in the summary text to the top of the summary so that it more closely matches how HTML bullets are designed, where bullets align to the top of the text. This helps users quickly identify where the summary text begins.

### Consequences

### Open Questions
