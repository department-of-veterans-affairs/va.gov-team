# VA.gov Web and Content Accessibility Testing Plan
This document extends, and was created with permission from the VA Mobile Team's [Mobile Accessibility Testing Plan](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/va-mobile-app/testing/Accessibility%20Test%20Plan.md).

Accessibility is a VSP Platform core requirement for all web applications and static content. The purpose of this document is to outline:

1.	The requirements that will guide web application and content builds
1.	The accessibility tools and materials that will be used during testing
1.	The testing protocol and steps that will be taken when reviewing the accessibility capabilities in the app

## Section 1: Accessibility Requirements & Approach
The following items are based on [WCAG 2.1](https://www.w3.org/TR/WCAG21/) Level A and AA success criteria, organized by product function. Each item description reflects the requirement type, the relevant success criteria and implementation requirements. 

- Items that have “Design”/ “Designs” bolded reflect standards that must be facilitated by the design workstream 
- Items that have “Programmatically” bolded reflect standards that focus on technical implementation 
- Applicable WCAG 2.1 requirements are also included to reference best practice and may be followed in cases where added implementation scope is minimal.
- Accessibility standards that relate to non-existent functionality in the app are marked N/A. In the event that the app’s design changes to include relevant functionality, these standards will be candidates to prioritize as requirements. 

| Category | WCAG Success Criteria | Criteria Checklist | Implementation Approach |
| --------------- | ---------- | --------------- | ------------------------------ |
| Color | Color Contrast<br/>[(1.4.3_AA)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-minimum)<br/>[(1.4.6_AAA)](https://www.w3.org/WAI/WCAG21/quickref/#contrast-enhanced) | All text must meet AA compliance:<br/><br/>**Normal fonts (less than 19px)**<br/>• AA compliant: 4.5:1<br/>• AAA compliant: 7:1<br/><br/>**Large fonts (19px+)**<br/>• AA compliant: 3:1<br/>• AAA compliant: 4.5:1 | Enter your plan to implement this success criteria |
| Color | Color<br/>[(1.4.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#use-of-color) | Designs must not use color as the sole conveyance of information. | |
| Color | Non-text Contrast<br/>[(1.4.11_AA)](https://www.w3.org/WAI/WCAG21/quickref/#non-text-contrast) | UI components and graphical objects in the app designs that are used to understand the content should have a contrast ratio of at least 3:1. | |
| Semantics & Relationships | Heading levels<br/>[(1.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | • Each page or view should have one H1.<br/>• Headings are not improperly nested or skipped.<br/>• Bold text that starts a section should be a heading. | |
| Semantics & Relationships | Lists<br/>[(1.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | Leverage valid HTML markup so lists can be programmatically determined. | |
| Semantics & Relationships | Tables<br/>[(1.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | Leverage valid HTML markup so table headings, rows, and columns can be programmatically determined. | |
| Semantics & Relationships | Page Title<br/>[(2.4.2_A)](https://www.w3.org/WAI/WCAG21/quickref/#page-titled) | • Each page or view should have a unique, meaningful title.<br/>• H1 text should be included in the page title. | |
| Semantics & Relationships | Headings and Labels<br/>[(2.4.6_AA)](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) | Headings and labels should describe topic or purpose and be programmatically determined. | |
| Semantics & Relationships | Consistent Navigation<br/>[(3.2.3_AA)](https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation) | Designs for navigation mechanisms that are repeated across several pages should be consistent. This includes color, icons, text, location, source order, etc. | |
