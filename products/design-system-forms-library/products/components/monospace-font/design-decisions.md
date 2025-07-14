# `Monospace font` Design Decisions  
_Last updated: 2025-07-14_

## Index
- [ADR 001: Font options](#adr-001-font-options)

---

## ADR 001: Font Options  

### Status: Accepted  
- **Date Raised:** 2024-05-20  
- **Decision Date:** 2024-07-29  

### Context
There are many options for monospace fonts. We reviewed different monospace fonts and considered download size, popular monospace options, and what the USWDS is implementing. 

- Here are some [examples of monospace fonts used in USWDS tables](https://codepen.io/babsdenney/pen/zYVKmzO).
- Some things considered was native fonts vs. web fonts and the pros and cons of using each option.
- When making this decision we were also very involved in [font normalization](https://designsystem.digital.gov/design-tokens/typesetting/overview/#fonts-with-normalization-applied-2) of other fonts being used in the Design System which contributed to the final decision.

Ticket - Add monospace font to Figma and Table component [#2847](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2847)

### Decision
After reviewing pros and cons of all font options, we decided to move forward with the same monospace font option that the USWDS has which is **`Roboto Mono`**. The primary decision to use Roboto Mono is to keep the VADS aligned with the USWDS and ease of implementation would have the less friction. Font normalization has already been [applied to the Roboto Mono font](https://designsystem.digital.gov/design-tokens/typesetting/overview/#fonts-with-normalization-applied-2), so very little development effort would be required.

You can see the [Slack thread](https://dsva.slack.com/archives/G01BJ3ESXL4/p1721846113763379?thread_ts=1721767299.262339&cid=G01BJ3ESXL4) where options are discussed. 

#### Roboto Mono font used in Figma:
- [Table example with monospace font](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?m=auto&node-id=24074-2150&t=ophYuWunqzlGbwhz-1)
- [Typography page in Figma](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/VADS-Component-Library?node-id=199-1182)

### Consequences
Clear and consistent naming reduces future design debt. Establishing terminology early helps streamline communication and decision-making across design and development teams.
