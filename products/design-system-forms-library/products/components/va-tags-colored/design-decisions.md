# va-tags-colored Design Decisions
Last updated: 2025-05-08

- [ADR: 001 - Define the meaning for colored tags](#ADR-001---Define-the-meaning-for-colored-tags)
- [ADR: 002 - Tag styles](#ADR-002---Tag-styles)
- [ADR: 003 - Accessibile Colors](#ADR-003---Accessible-Colors)
- [ADR: 004 - Uppercase text](#ADR-004---Uppercase-text)

## ADR: 001 - Define the meaning for colored tags

### Status: Accepted
- Date Raised: 2025-02-25
- Decision Date: 2025-04-08

### Context
We had a experimental design request submitted and approved by the Design System Council to add different color variations for the tag component. One of the main concerns the Design System Council raised was addressing the colors that would be added so that each color has specific meaning and intent. We did a discovery to audit the exisiting use of color in the design system, review how other design systems were using color, and make sure the colors aligned to our current use of color in the design system. 
- [Design System Council meeting notes](https://docs.google.com/document/d/1H8B989-PbHIqdrNZppsEGE-Oyxriuou3jryD0YRpJzA/edit?usp=sharing)
- [Discovery: Define the meaning for colored tags #3846](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3846)
- [Color discovery audit in Figma File](https://www.figma.com/design/5y1gpQBX0zZ83i8vsX9xCE/Colored-tags?node-id=0-1)

## Decision
We will be only applying colors to the tags that align with the current alerts in the VA Design System.
- Status (Default) - Used to show the status of a process.
- Informational - Used to provide helpful information or something that warrants a user’s attention. Not used for negative consequences.
- Success - Used to indicate success.
- Warning - Used to warn a user, such as when there are negative consequences, or when something has gone wrong.
- Error - Used when there is a problem or something destructive is about to occur.

### Consequences
Applying colors to tags can introduce a few different interaction issues that we will need to test for. 
- Colors can make tags look more like buttons.
- Making sure the colors are applied appropriately can be challenging. We will need to make sure guidance is added and tied to alerts.
- Color can communicate a priority when we don't mean it to. 

## ADR: 002 - Tag styles

### Status: Accepted

- Date Raised: 2025-12-05
- Decision Date: 2025-05-25

### Context

Tags can come in a variety of styles and we needed to finalize a final design for the colored tag options. There were a few different routes we could take for the design. 

**Design options that were researched**

- [Colored tag use cases](https://www.figma.com/design/5y1gpQBX0zZ83i8vsX9xCE/Colored-tags?node-id=1-323)
- [Design options considered](https://www.figma.com/design/5y1gpQBX0zZ83i8vsX9xCE/Colored-tags?node-id=50-367)
- [Mockups with tag design options](https://www.figma.com/design/5y1gpQBX0zZ83i8vsX9xCE/Colored-tags?node-id=58-391)
- [Design System audit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1747766690440/cc2b1b4eb7c707954968bac635886fbb34129c27?sender=uc445c662daeb45814b8d8356) - An audit of tags in other design systems was completed

1. **Experimental design:** The original experimental design submitted has a variety of color options and a border around the tags. The tags are slightly bigger than the original USWDS/VADS tags. The alert tag versions included a icon that matches the icons used for the alerts.
2. **Mobile design:** The mobile design uses the same colors as the alert backgrounds and has a large border radius with a border.

### Decision
1. **Colors:** The tag color options will match semantic color meanings with alerts decided in ADR 001.
2. **Spacing and size:** The size and the spacing of the tags will remain the same as the current tag already added in the VADS.
~~3. **Border:** Both the mobile and the experimental design included borders with the design but looking that the mockups with the tags used with the tags, we decided that the border makes the tags look more like buttons. So to avoid any confusion with buttons we will be removing the border.~~
4. **Icon:** To make the tags accessible we need to make sure that color is not the only way that the tag is conveying the status. We will include the same icon that is used in the alert to convey the meaning the of the tag beyond color.

### Consequences
Currently, we only have a single tag color. Going forward we will have a variety of options for teams to choose depending on the status of the tag. It is challenging to forsee the different ways the tags will be used. This could have consequences if the colored tags options are used in ways we did not account for. 


## ADR: 003 - Accessible Colors

### Status: Pending

- Date Raised: 2025-05-25
- Decision Date: 

### Context
The tag background must meet 3:1 color contrast against the page background

**Reasoning:** 
- The colored background of the tag carries semantic meaning (warning, error, success) and is not decorative, so it functions as a “graphical object” under WCAG. 
- [WCAG 1.4.11 (non-text contrast)](https://www.w3.org/TR/WCAG21/#non-text-contrast) sets a minimum 3:1 contrast between any meaningful graphical element and its adjacent background so that users with low vision can reliably perceive the shape and color cue. 
- [USWDS also recommends 3:1 contrast on tags](https://designsystem.digital.gov/components/tag/accessibility-tests/)

### Decision
- The team recommends adding the border to the tag. This marks a 3:1 ratio contrast. The other option is to use a solid color that creates the 3:1 ratio.

### Consequences
It may make the tags look like buttons. Usability testing would help us understand if users think these are buttons.

## ADR: 004 - Uppercase text

### Status: Pending

- Date Raised: 2025-05-25
- Decision Date: 

### Context
During the [tag usage audit](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1755032896804/d24a5a32988c08139ddf73a67e589c7fa9e9f22d?wid=0-1755893916029), we identified teams using tags with sentence case instead of the standard uppercase format. Teams cited improved readability and accessibility as their primary motivations for this deviation. We evaluated the pros and cons of uppercase text vs. sentence case for tags. 

Tags with uppercase is a **good choice** for:
- Visually distinguishing tags from buttons
- Drawing attention to the tag to make them more noticeable and easily scannable

Tags with uppercase is **not a good choice** for:
- Long strings of text because it reduces readability and can harm accessibility
- When the tone should be conversational or friendly

### Decision
**Recommendation:** Maintain alignment with [USWDS tag component](https://designsystem.digital.gov/components/tag/) standards by continuing to use uppercase text for tags.

**Rationale:** This approach preserves design system consistency and alignment with the USWDS tag component while leveraging the functional benefits of uppercase formatting for short-form, categorical content.  

### Consequences
- Current tag implementation may not accommodate all existing use cases optimally
- Some teams may need to evaluate whether tags are the appropriate component for their specific content needs
