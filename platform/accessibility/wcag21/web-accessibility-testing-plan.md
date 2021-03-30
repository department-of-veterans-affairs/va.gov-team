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
| Navigation & Relationships | Heading levels<br/>[(1.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | • Each page or view should have one H1.<br/>• Headings are not improperly nested or skipped.<br/>• Bold text that starts a section should be a heading. | |
| Navigation & Relationships | Lists<br/>[(1.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | Leverage valid HTML markup so lists can be programmatically determined. | |
| Navigation & Relationships | Tables<br/>[(1.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#info-and-relationships) | Leverage valid HTML markup so table headings, rows, and columns can be programmatically determined. | |
| Navigation & Relationships | Sensory Characteristics<br/>[(1.3.3_A)](https://www.w3.org/WAI/WCAG21/quickref/#sensory-characteristics) | Pages should not require sensory characteristics such as shape, color, size, visual location, orientation, or sound to be understood or operable. | |
| Navigation & Relationships | Bypass Blocks (Skip Nav)<br/>[(2.4.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#page-titled) | Pages that have repeated content such as global navigation or header graphics must have a way to skip to primary content. | |
| Navigation & Relationships | Page Title<br/>[(2.4.2_A)](https://www.w3.org/WAI/WCAG21/quickref/#bypass-blocks) | • Each page or view should have a unique, meaningful title.<br/>• H1 text should be included in the page title. | |
| Navigation & Relationships | Link Purpose (In Context)<br/>[(2.4.4_A)](https://www.w3.org/WAI/WCAG21/quickref/#link-purpose-in-context) | The purpose of each link can be determined by its text (e.g. **"Schedule your appointment now"**) or the context it's surrounded by. (e.g. **"There are ways to stay active during the pandemic."**) | |
| Navigation & Relationships | Multiple Ways<br/>[(2.4.5_AA)](https://www.w3.org/WAI/WCAG21/quickref/#multiple-ways) | Users should be able to locate pages or views in more than one way. These could include global navigation, in-page links and a search feature. Pages or views that are part of a linear user flow may only be accessible at teh completion of a task such as a form submission. | |
| Navigation & Relationships | Headings and Labels<br/>[(2.4.6_AA)](https://www.w3.org/WAI/WCAG21/quickref/#headings-and-labels) | Headings and labels should describe topic or purpose and be programmatically determined. | |
| Navigation & Relationships | Label in Name<br/>[(2.5.3_A)](https://www.w3.org/WAI/WCAG21/quickref/#label-in-name) | For UI components with a visual label, make sure the label is programmatically available in the name. | |
| Navigation & Relationships | Consistent Navigation<br/>[(3.2.3_AA)](https://www.w3.org/WAI/WCAG21/quickref/#consistent-navigation) | Navigation mechanisms that are repeated across pages should be consistent. This includes color, icons, text, location, source order, etc. | |
| Non-text Content & Media | Non-text Content<br/>[(1.1.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#non-text-content) | All non-text content (images, vector graphics, audio, video) that is presented to users must have a text alternative that provides an equivalent experience. There are some exceptions to this success criteria. [Learn more about Success Criteria 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html). | |
| Non-text Content & Media | Audio-only and Video-only (Prerecorded)<br/>[(1.2.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded) | A text alternative must be provided for prerecorded audio and video files unless the audio or video is a [clearly labeled alternative for text](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded.html#dfn-media-alternative-for-text). | |
| Non-text Content & Media | Captions (Prerecorded)<br/>[(1.2.2_A)](https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded) | A synchronized caption must be provided for all prerecorded audio content. This includes prerecorded video content with an audio track. | |
| Non-text Content & Media | Captions (Live)<br/>[(1.2.4_A)](https://www.w3.org/WAI/WCAG21/quickref/#captions-live) | A synchronized caption must be provided for all live audio content. This includes live video content with an audio track. | |
| Non-text Content & Media | Audio Control<br/>[(1.4.2_A)](https://www.w3.org/WAI/WCAG21/quickref/#audio-control) | All audio content has a mechanism to start, stop and adjust volume independent of the system. | |
| Non-text Content & Media | Pause, Stop, Hide<br/>[(2.2.2_A)](https://www.w3.org/WAI/WCAG21/quickref/#pause-stop-hide) | All media content (audio and video) has a mechanism to start, stop and hide. | |
| Non-text Content & Media | Three Flashes or Below Threshold<br/>[(2.3.1_A)](https://www.w3.org/WAI/WCAG21/quickref/#three-flashes-or-below-threshold) | Pages must not contain anything that flashes more than three times in one second. Avoid flashing content if possible. | |
