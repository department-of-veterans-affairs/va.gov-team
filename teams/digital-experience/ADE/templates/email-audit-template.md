> [!IMPORTANT]  
> The ADE team created this template to conduct email audits. Teams should feel free to copy this template and use it as needed for their own testing.

# ADE Email Accessibility Audit - [Team]: [Product]

## **General information**

* **Product Name:** \[Insert name\]  
* **Ticket:** \[Insert GitHub ticket and link\]  
* **Team Slack Channel:** \[Insert Slack channel\]  
* **ADE reviewers:** \[name\], \[name\]  
* **Date completed:** \[insert date\]


## **Review checklist**

**Auditor instructions:** Check off each item as you review them. Add your name next to each item in case there are any follow-up questions after the audit is completed. 

**Note**: Not every item in the checklist is applicable to every design. Only audit the items that make sense for the design being reviewed. 

## **PART 1: Code check**

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]

- All interactive elements are selectable (Click into fields, select buttons, highlight text, click links)  
      - Proper use of links vs buttons (links are for navigation, buttons are for behavior and state changes)  
      - Focus indicators present and visible  
      - Focus order is correct (logical and matches source)  
      - Appropriate keypresses (ENTER to activate a link, for example)  
- Headings: correct structure, no empty headings, H1 is present  
- Color:  
      - Meets 1.4.3 Contrast (Minimum) (text)  
      - Meets 1.4.11 Non-text contrast (UI elements)  
      - Colors are distinguishable in colorblind / grayscale modes  
      - No meaning through color alone  
- Device-based text scaling is supported (increasing text size in device settings)  
- Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
- HTML and ARIA are structured properly
- The following have alt text or are marked decorative:  
      - `Area`   
      - `Img`   
      - `Object`  
- `Title` is present and relevant to email body  
- All landmarks have unique role or are labeled  
- `Html` and `body` have `lang` attributes (email clients often remove `html` element)  
- `Body` has `dir` attribute (issues if not specified and different than email client)  
- Non-tabular tables have `role=”presentation”`  
- Link and button text is descriptive  
- The following semantic tags instead use div \+ role (HTML5 semantic tags aren’t reliable):  
      - `Section` should be `div role=”region”`  
      - `Nav` should be `div role=”navigation”`  
      - `Article` should be `div role=”navigation”`  
- The following landmarks shouldn’t be used (the email client webpage likely contains these landmarks):  
      - `Header` / `banner`  
      - `Contentinfo`  
      - `Main`  
      - `Aside` / `complementary`  
- Run Axe

## **PART 2: Using magnification, keyboard navigation**

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]


***INSTRUCTIONS:** Resize your browser to 1280px wide, then complete these tests:*

- Browser zoom: Set font size to “Very Large” or equivalent via browser settings  
      - Content isn’t obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
      - Focus is always at least partially visible ([SC 2.4.1: Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html))

- Text zoom: Use cmd/ctrl \+ to set text to 200%, 300%, and 400%  
      - Content isn’t obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
      - Focus is always at least partially visible ([SC 2.4.1: Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html))

## 

## **PART 3: Using screen readers \- desktop and mobile**

### **Desktop**

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]

***INSTRUCTIONS:** Turn on a screen reader, use a keyboard, and run the following tests. Use one of these combinations: Mac \+ Safari \+ VoiceOver; Windows \+ Chrome \+ NVDA; Windows \+ Edge \+ JAWS*.

- Able to complete entire flow using default screen reader settings  
- Ensure that screen reader accurately announces the content on the screen   
- All interactive elements have accessible labels  
      - Form labels are associated with their corresponding input fields  
- All interactive elements are announced and selectable (Tab into fields, select buttons, highlight text, select links)  
- All links and buttons use descriptive text and can be understood out of context  
- Graphics contain appropriate and concise alternate text  
      - Decorative images and icons are hidden to the user

## **Results and recommendations**

**Note:** Title issues as succinctly, and as close to their checklist counterparts, as possible.  
Example: If something failed the “Forms don’t require duplicate entry” check, you can title your issue “Issue: Form requires duplicate entry”.

### **Issue: \[short description\]**

#### **Issue Description**

* Device:  
* AT:

\[Description\]

#### **Issue Severity**

* **Expected WCAG failure**:  
* **Expected 508 audit severity:** \[based on severity level grading criteria from [VA Section 508 Web Content Accessibility Checklist](https://digital.va.gov/section-508/checklists/web-content-accessibility/)\]  
* **Expected CC severity level:** \[a number between 0 and 4; reference the [severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)\]  
* **Expected experience standard:** \[reference and link to standard from [the experience standards page](https://design.va.gov/about/experience-standards/) or [Experience Standards, Plus oogle Doc](https://docs.google.com/document/d/1h-k4huqIsCMjiMKKINRW0RgiNJQevRJOaGuBgzCS2UI/edit?usp=sharing) (recommended)\]

#### **How to recreate:**

* Steps  
  * Steps 

#### **Recommendation:** 

Reco goes here
