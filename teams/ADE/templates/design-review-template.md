> [!IMPORTANT]  
> The ADE team created this template to conduct design reviews. Teams should feel free to copy this template and use it as needed for their own testing.

# ADE Figma Prototype Accessibility Review - [Team]: [Product]

## **General information**

* **Product Name:** \[Insert name\]  
* **Ticket:** \[Insert GitHub ticket and link\]  
* **Team Slack Channel:** \[Insert Slack channel\]  
* **ADE reviewers:** \[name\], \[name\]  
* **Date completed:** \[insert date\]

## **Prototypes**

* Link  
* Link

## **Review checklist**

**Auditor instructions:** Check off each item as you review them. Add your name next to each item in case there are any follow-up questions after the audit is completed. 

**Note**: Not every item in the checklist is applicable to every design. Only audit the items that make sense for the design being reviewed. 

### General

* Designs exist for different viewports
* Sufficient color contrast (including in grayscale and common colorblindness modes)
* Color alone isn’t used to convey meaning
* [Touch targets meet minimum size or have sufficient spacing](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
* Interactive elements are easy to identify 
* Appropriate use of links versus buttons
* Descriptive link and/or button text
* Related content is grouped by headings and spacing
* **Forms:** Form elements include clearly associated labels
* **Forms:** State changes such as errors, alerts, and dynamic fields are identifiable
* **Forms:** Forms don’t require duplicate entry (i.e. does someone need to enter the same information twice?)
* [Annotations](https://design.va.gov/about/accessibility/accessibility-annotations) are included
  * [Heading levels](https://design.va.gov/about/accessibility/accessibility-annotations#heading-levels) are appropriate
  * **Forms:** [Fieldsets and labels](https://design.va.gov/about/accessibility/accessibility-annotations#fieldsets--legends) are appropriately identified
  * Focus order (if necessary)
  * Focus management (if applicable)
  * H1 provides enough context to determine page's purpose 
  * Alt / aria text included (if necessary)
* Clear and consistent navigation options provided (consistent naming, styling, and positioning)
* Image and media alternatives (subtitles, transcripts, long descriptions) included in the design (if applicable)
* Controls for content that starts automatically are provided (carousels, image sliders, video, etc.) 
* Does the Figma prototype load efficiently without delay \- if so remove unused layers in layer panel  
* Are images and linked pdfs optimized for quick loading without compromising quality? Check the dimensions and resolution of the image. Make sure it’s appropriate for its use case (e.g., 1x for standard displays, 2x for Retina displays). 
* Is the tone and style consistent throughout the prototype?  `specialist's name`

### Additional feedback to consider

* Is the tab order defined for any custom components or complex designs?
* Is there any complicated language that we think might pose an issue?
* Is there anything weird about the flow that might confuse folks?
* Is anything strange happening with the prototype’s interactions that would be helpful for the team to know ahead of testing? `specialist's name`

## **Results and recommendations**

**Note:** Title issues as succinctly, and as close to their checklist counterparts, as possible.  
Example: If something failed the “Forms don’t require duplicate entry” check, you can title your issue “Issue: Form requires duplicate entry”.

### Issue: \[short description\]

* **Screen:** \[name of screen, link to the screen\]  
* **Version:** \[Mobile, Desktop, Tablet\]  
* **Experience standard:** \[reference and link to standard from [the experience standards page](https://design.va.gov/about/experience-standards/) or [Google Doc](https://docs.google.com/document/d/1h-k4huqIsCMjiMKKINRW0RgiNJQevRJOaGuBgzCS2UI/edit?usp=sharing)\]  
* **Description:** type here  
  * Or break it up into sub-items  
  * Add screenshots if helpful   
* **Recommendation:** type here  
  * Or break it up into sub-items
