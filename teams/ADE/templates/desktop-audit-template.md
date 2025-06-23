> [!IMPORTANT]  
> The ADE team created this template to conduct design reviews. Teams should feel free to copy this template and use it as needed for their own testing.

# Desktop Accessibility Audit - \[team name]: \[product name]

## **General Information**

* **Product Name:** \[Insert name\]  
* **Ticket:** \[Insert GitHub ticket and link\]  
* **Team Slack Channel:** \[Insert Slack channel\]  
* **ADE auditors:** \[name\], \[name\]  
* **Date completed:** \[insert date\]

## **Product to be Tested** 

* Link  
* Link

## **Testing environment** 

**Select all that will be tested:** 

- [ ] CodePen  
- [ ] Staging  
- [ ] Production

## **User Journey** 

1. \[define what you’re testing here.\]  
2. \[each step of the user journey.\]  
3. \[keep going\!\]


## **Review checklists**

### Dry Run (No AT, keyboard navigation)

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]

***Instructions:** Use default device settings, no assistive tech, and a keyboard to complete the following tests.* 

* Can complete entire user journey using default device settings  
* All form inputs have a visually associated label  
* All interactive elements are selectable (Click into fields, select buttons, highlight text, click links)  
  * Proper use of links vs buttons (links are for navigation, buttons are for behavior and state changes)  
  * Focus indicators present and visible  
  * Focus order is correct (logical and matches source)  
  * Appropriate keypresses (ENTER to activate a link, for example)  
* Dynamic content is visible, placed correctly, gives context:  
  * Error messages  
  * Other status messages (i.e. successful submission, add to cart)  
  * Conditional fields  
  * (anything else?)  
* Proper use of headings  
* Color contrast meets WCAG 2.2 AA standards  
* Colors are distinguishable in colorblind / grayscale modes  
* Device-based text scaling is supported (increasing text size in device settings)  
* Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
* Skip link present and correctly jumps to main content  
* VA Design System (VADS) components are used where possible  
* If a modal is present:  
  * focus should move to the modal when its opened  
  * the modal should trap focus  
  * pressing the escape key should close the modal and move focus back to the button that triggered the modal  
* Run Axe

### Using magnification, keyboard navigation 

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]

***Instructions:** Resize your browser to 1280px wide, then zoom to 200%, 300%, and 400% to complete the following tests.* 

* Browser-based zoom (at 200%, 300%, and 400%) doesn’t break the layout  
  * Content reflows correctly  
  * All form inputs have a visually associated label  
  * All interactive elements are selectable (Click into fields, select buttons, highlight text, click links)  
  * Dynamic content is visible, placed correctly, gives context:  
    * Error messages  
    * Other status messages (i.e. successful submission, add to cart)  
    * Conditional fields  
    * (Anything else?)  
  * Device-based text scaling is supported (increasing text size in device settings)  
  * Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
  * Run Axe at each zoom level

### Using a screen reader

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]

***Instructions**: Turn on a screen reader, use a keyboard, and run the following tests. Use one of these combinations: Mac \+ Safari \+ VoiceOver; Windows \+ Chrome \+ NVDA; Windows \+ Edge \+ JAWS*.

* Able to complete entire flow using default screen reader settings  
* Ensure that screen reader accurately announces the content on the screen   
* All interactive elements have accessible labels  
  * Form labels are associated with their corresponding input fields  
* All interactive elements are announced and selectable (Tab into fields, select buttons, highlight text, select links)  
* All links and buttons use descriptive text and can be understood out of context  
* Graphics contain appropriate and concise alternate text  
  * Decorative images and icons are hidden to the user  
* Dynamic content is announced with appropriate timing and context (see [SC 4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)):  
  * Error messages  
  * Other status messages (i.e. successful submission, add to cart)  
  * Conditional fields  
  * Progress and loading indicators  
  * (anything else?)  
* Browser-based zoom (at 200%, 300%, and max %) doesn’t break the layout  
* Device-based text scaling is supported (increasing text size in device settings)  
* Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
* If a modal is present:   
  * the modal should have an accessible name,  
  * content outside the modal shouldn’t be accessible to screen reader users when the modal is open

### Using voice command / speech recognition software

* **Auditor:** \[Name\]  
* **Browser version:** \[Version\]  
* **Operating system and version:** \[Version\]

***Instructions**: Turn on voice command or speech recognition software \- ideally Dragon NaturallySpeaking, but substitute with the Windows or Mac defaults if you need to \- and go through the user journey.*

* Able to complete entire flow using default voice command settings  
* All interactive elements meet Label in Name requirements (accName and visual label begin with the same string)


## **Results and recommendations** 

Write up your findings by issue or by page, your choice. 

### Option 1: Reporting by issue 

#### Issue: \[short description\]

* **Page:** \[name and link to page\]  
* **Device:** \[iPhone, Android\]  
* **Orientation:** \[portrait, landscape, both\]  
* **Expected severity level:** \[a number between 0 and 4; reference the [severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)\]  
* **Expected experience standard:** \[reference and link to standard from [the experience standards page](https://design.va.gov/about/experience-standards/) or [Experience Standards, Plus Google Doc](https://docs.google.com/document/d/1h-k4huqIsCMjiMKKINRW0RgiNJQevRJOaGuBgzCS2UI/edit?usp=sharing) (recommended)\]  
* **Description:** type here  
  * Or break it up into sub-items  
  * Add screenshots if helpful   
* **How to recreate:** type here  
  * Or break it up into sub-items  
* **Recommendation:** type here  
  * Or break it up into sub-items

### Option 2: Reporting issues by page

#### Page: \[Name and link to page\]

##### **Issue 1:** \[short description\]

* **Browser and version:** \[Version\]  
* **Operating system and version:** \[Version\]  
* **Assistive Tech used:** \[None, Magnification (200%, 300%, max), Keyboard, Screen reader (VoiceOver, NVDA, JAWS)\]  
* **Expected severity level:** \[a number between 0 and 4; reference the [severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)\]  
* **Expected experience standard:** \[reference and link to standard from [the experience standards page](https://design.va.gov/about/experience-standards/) or [Experience Standards, Plus Google Doc](https://docs.google.com/document/d/1h-k4huqIsCMjiMKKINRW0RgiNJQevRJOaGuBgzCS2UI/edit?usp=sharing) (recommended)\]  
* **Description:** type here  
  * Or break it up into sub-items  
  * Add screenshots if helpful   
* **How to recreate:** type here  
  * Or break it up into sub-items  
* **Recommendation:** type here  
  * Or break it up into sub-items

##### **Issue 2:** \[short description\]

* **Browser and version:** \[Version\]  
* **Operating system and version:** \[Version\]  
* **Assistive Tech used:** \[None, Magnification (200%, 300%, max), Keyboard, Screen reader (VoiceOver, NVDA, JAWS)\]  
* **Expected severity level:** \[a number between 0 and 4; reference the [severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric)\]  
* **Expected experience standard:** \[reference and link to standard from [the experience standards page](https://design.va.gov/about/experience-standards/) or [Experience Standards, Plus Google Doc](https://docs.google.com/document/d/1h-k4huqIsCMjiMKKINRW0RgiNJQevRJOaGuBgzCS2UI/edit?usp=sharing) (recommended)\]  
* **Description:** type here  
  * Or break it up into sub-items  
  * Add screenshots if helpful   
* **How to recreate:** type here  
  * Or break it up into sub-items  
* **Recommendation:** type here  
  * Or break it up into sub-items
