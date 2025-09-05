# Accessibility recommendations \- Colored tag design

---

Purpose: Provide a list of accessibility recommendations, questions, and concerns about new component development. This document follows the [“Must, should, consider” framework](https://depo-platform-documentation.scrollhelp.site/collaboration-cycle/must-should-and-consider-framework-for-feedback) to make recommendations for the component design. 

Note: To see the full accessibility notes and discussion, view the other tabs in this document

Related links:

* [Accessibility review issue](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/4407)  
* [Figma file](https://www.figma.com/design/afurtw4iqQe6y4gXfNfkkk/branch/As3gh7VNu3IcCFQ6hg5nMu/VADS-Component-Library?t=ET3DWgqL3FEGoEsp-0)  
* [Product Outline](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tags-colored/product-outline.md) ([Google Doc version](https://docs.google.com/document/d/1RxR6bDxnPRPkCNvqg8Hs_qONIuqKG3R83-JH41pXVTM/edit?tab=t.0))  
* [Experimental design issue](https://github.com/department-of-veterans-affairs/vets-design-system-documentation/issues/2993#top)  
* [Design Decision Log](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-tags-colored/design-decisions.md#ADR-002---Tag-styles)  

---

## **Visual design** 

### Recommendations

* MUST: The tag text must meet 4.5:1 color contrast against its background  
* MUST: The tag background must meet 3:1 color contrast against the page background  
  * Reasoning:  
    * The colored background of the tag carries semantic meaning (warning, error, success) and is not decorative, so it functions as a “graphical object” under WCAG.   
    * [WCAG 1.4.11 (non-text contrast)](https://www.w3.org/TR/WCAG21/#non-text-contrast) sets a minimum 3:1 contrast between any meaningful graphical element and its adjacent background so that users with low vision can reliably perceive the shape and color cue.   
    * [USWDS also recommends 3:1 contrast on tags](https://designsystem.digital.gov/components/tag/accessibility-tests/)  
* MUST: The tag icon, text, and outline should be visible in high-contrast/forced-color modes  
* MUST NOT: The tag must not look like buttons, links, or give other visual cues that suggest interactivity

### Open questions

- [x] ~~Do colored tags always have icons?~~  
      * Decision log indicates yes. Just wanting to confirm.  
      * If so, are they hard-coded to match the alert icons? Or can they be customized?  
      * Decision: At this time, colored tags must match alert colors and icons. They will not be customizable at this time.   
- [ ] Do non-colored tags (default) ever have icons?  
- [x] ~~Do tag icons need alt text?~~   
      * I am thinking yes, but it looks like existing components with icons do not  
      * Decision: Probably. Screen reader users need to get the context that sighted users are getting through the icon and background color. The icon is likely the best way to deliver this state information.   
- [x] ~~Are any other colors or meanings or icons allowed besides the alert status types?~~  
      * Decision log indicates that they will only align with alerts, but wanting to confirm  
      * Decision: Not at this time.  
- [ ] Can we add the following items to the decision log:  
      * Why we chose to have uppercase in the tag (it does match USWDS, but USWDS also doesn’t document why uppercase \- teams have already been asking why all caps)  
      * Why were are expanding on / deviating from the options in USWDS


## **Interaction design**

### Recommendations

* MUST NOT: Be interactive. If you need user interaction, use a button. 

### Open questions

- [ ] Should we add guidance about aria-live when the tag is used to indicate updated content?  
- [ ] Are there ever times when we’d want the tag to receive focus?   
- [ ] Can tags be paired with other content, for example, inside a heading. If it’s inside a heading, should there be hidden text indicating that this is a “status” or some other marker that might be more visibly understood? 


## **Content design**

### Recommendations

* MUST: Include descriptive text in the tag. Make sure the text clearly conveys the tag’s purpose without requiring additional visual context. Do not use the tag with only an icon.   
* MUST: Keep text content concise. Uppercase text can harm readability.  
  * Less than 20 characters is ideal  
* MUST: Status types must be implemented consistently across the site.  
  * Meaning for the colors and icons should be consistent across pages. 

### Open questions

- [ ] Should we offer default text content strings for each status type?   
      * For example “Warning”, “Error”, etc  
      * If so, should text also be customizable?  
        * If so, will we have recommended string length for custom text? Uppercase text can reduce readability, so want to keep text length to a few words


## **Testing requirements**

The final component should meet the applicable WCAG criteria outlined in the [critical checklist spreadsheet](https://docs.google.com/spreadsheets/d/1Iz2j0HLEna_2z6uaMqSwzBsKymmbRFwtVVdFOrM_KH4/edit?gid=97481116#gid=97481116).

