# va-additional-info Design Decisions
Last updated: 11-21-2025

- [ADR: 001 - STRUCTURAL UPDATES](#ADR-001---CODE-UPDATES)
- [ADR: 002 - DESIGN UPDATES](#ADR-002---DESIGN-UPDATES)
- [ADR: 003 - SIZES](#ADR-003---SIZES)

## ADR 001 - STRUCTURAL UPDATES

### Status: APPROVED

- Date issue raised: 1-7-25
- Decision date: 8-21-25

### Context
We had an [bug filed to update the Additional Info design to be more accessible and match the role of button](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/3657) that is should resemble as it currently looks like a link. 

While investigating this issue we discovered that the Additional Info component could be improved by updating the HTML component to use the summary and details html tags. You can read more about it on [MDN - <details> tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details). While in the past these tags had some accessibility issues, those have been resolved and updating the HTML structure would be a improvement for accessibility and also create a javascript free component. 

An experimental issue was created to look more into this.

Experimental Design Update Additional Info & Expandable Alert [#4817](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4817#top)

### Decision
Updating this component from a javascript component to a HTML will have many benefits. 
- More accessibile component
- No javascript required

### Consequences
Changing the structure and HTML can create issues as with anything you are making big changes to. This component is used in many places through VA.gov. This change could have unexpected impacts that we are unaware of.

### Open Questions

---

## ADR 002 - DESIGN UPDATES

### Status: APPROVED

- Date issue raised: 10-1-25
- Decision date: 11-18-25

### Context
The original bug request was to update the component to look more like a button since it is a button. While investigating the component we determined we could move the component to use the datails tag. While the component is not a button anymore it still isn't a link and should not look like a link. It was determined that we should still update the component to look more like a button. 

We looked at many of the current button designs like Accordion, Primary Buttons, and Secondary Button. We decided that a new style should be used to differientate it from the Accordion and the Button since the interaction is different than a Button or Accordion.

Height - The original design was to make the Additional Info component 44px in height to be WCAG compliant but after reviewing all the use cases for component and the many applications. We decided that we should keep it at a 26px height to keep it as a option for showing text in a way that doesn't overwhelm the other priorities on the page. 

Border - A 1px border was added to make it look more like a button. The border uses the medium gray color token which is the minimum contrast required to stay AA compliant. We were want to focus on keep the Additional Info component more minimum and not to compete for focus on the page. 

Icon - The icon was moved to the beginning due to accessibility concerns at high zoom levels. Similar to the issue filed with the USWDS for the Accordion. The icon becomes invisible at high zoom levels. When the icon is on the left there is no issue with Zoom levels.

### Decision
THe new design improves accessibility and follows our guidance of links looking like links and buttons looking like buttons. 


### Consequences
While trying to keep the additional info compeont design updates minimal they are still much more apparent than the previous design. THis might cause issues with the current implementations as it does create more emphasis on the additional info component. We plan on updating the guidance to provide more help on how to navigate this issue. Teams will most likely have to convert some of the Additional Info component to other components. 

### Open Questions

---

## ADR 003 - SIZES

### Status: APPROVED

- Date issue raised: 9-12-25
- Decision date: 11-18-25

### Context
While the general design was established, it still created too much focus on the page. This was challenging to create a design solution that could prevent this. One way we are tryting to create less emphasis is more control over the width of the component. While the original component had a full-width option that we wanted to carry over we looked to the text input to provide more width options. For the select and text input we have pre determined widths that can be used to customize the width. 

### Decision
We will have options for this component to use a custom width, XL, and 2XL width so the Additional Info component doesn't have to be so wide in some instances. 

We were thinking of creating a minimum width option for the Additional Info Component but decided against that as there are situations the Additional Info component is used in indented situations that would cause the Additional Info to overflow off screen. 

### Consequences
This component is used in so many instances. It is challenging to determine if these new options will introduct more complications for teams down the road or if this was the right solution to create more emphasis. 


### Open Questions
_Include any open questions that may still be lingering_
