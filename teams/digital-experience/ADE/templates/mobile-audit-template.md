> [!IMPORTANT]  
> The ADE team created this template to conduct design reviews. Teams should feel free to copy this template and use it as needed for their own testing.
> 
# Mobile Accessibility Audit - \[team name]: \[product name]

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

**Select all that will be tested:**

- [ ] iPhone  
- [ ] Android

### iPhone

* **Auditor:** \[Name\]  
* **Device operating system version:** \[Version\]  
* **Browser:** Safari  
* **Orientation:** \[Landscape, Portrait, Both\]

#### Dry Run iPhone (No AT)

***Instructions:** Use default device settings, no assistive tech, to complete the following tests.* 

* Can complete entire user journey using default device settings  
* All form inputs have a visually associated label  
* All interactive elements are selectable (Tap into fields, select buttons, highlight text, click links)  
* Proper use of links vs buttons (links are for navigation, buttons are for behavior and state changes)  
* Dynamic content is visible, placed correctly, gives context:  
  * Error messages  
  * Other status messages (i.e. successful submission, add to cart)  
  * Conditional fields  
  * (anything else?)  
* Device-based text scaling is supported (increasing text size in device settings)  
* Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
* Touch targets are at least 44x44 dp (density-independent pixels). (see [SC 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))  
* *If native mobile app, untestable on desktop:* Colors are distinguishable in colorblind / grayscale modes

 **⚠️ Note**: If there are issues during the dry run, stop the audit and report back to the VFS team.

#### Using Zoom Magnification on iPhone

***Instructions:** 200%, then 300% or max to complete the following tests.* 

* Browser-based zoom (at 200%, 300%, and max %) doesn’t break the layout  
  * All form inputs have a visually associated label  
  * All interactive elements are selectable (Tap into fields, select buttons, highlight text, click links)  
  * Dynamic content is visible, placed correctly, gives context:  
    * Error messages  
    * Other status messages (i.e. successful submission, add to cart)  
    * Conditional fields  
    * (anything else?)  
  * Device-based text scaling is supported (increasing text size in device settings)  
  * Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
  * Touch targets are at least 44x44 dp (density-independent pixels). (see [SC 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))

#### Using VoiceOver

***Instructions**: For iOS testing only test in Safari. ([See note for rationale](#⚠️-note).)*

* Able to complete entire flow using default VoiceOver settings  
* Ensure that VoiceOver accurately announces the content on the screen (turn on captions in the dev settings)  
* All interactive elements have accessible labels  
  * Form labels are associated with their corresponding input fields  
* All interactive elements are announced and selectable (Tap into fields, select buttons, highlight text, click links)  
* Appropriate focus order  
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
* Touch targets are at least 44x44 dp (density-independent pixels). (see [SC 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))
* If a modal is present: 
  * focus should move to the modal when its opened
  * the modal should have an accessible name, the modal should trap focus
  * content outside the modal shouldn’t be accessible to screen reader users when the modal is open
  * pressing the close button should close the modal and move focus back to the button that triggered the modal

#### Using Voice Control

***Instructions**: Turn on Voice Control and go through the user journey.*

* Able to complete entire flow using default settings  
* All interactive elements meet Label in Name requirements (accName and visual label begin with the same string)

**⚠️ Note**: As of January 2024, at least in the US, iOS devices only support a single browser engine \-- the technology used to compute and render a webpage \-- regardless of the name of the browser downloaded, this means that on iOS testing can be safely confined to only Safari.

### Android

* **Auditor:** \[Name\]  
* **Device operating system version:** \[Version\]  
* **Browser:**   
* **Orientation:** \[Landscape, Portrait, Both\]

#### Dry Run Android (No AT)

***Instructions:** Use default device settings, no assistive tech, to complete the following tests.* 

* Can complete entire user journey using default device settings  
* All form inputs have a visually associated label  
* All interactive elements are selectable (Tap into fields, select buttons, highlight text, click links)  
* Proper use of links vs buttons (links are for navigation, buttons are for behavior and state changes)  
* Dynamic content is visible, placed correctly, gives context:  
  * Error messages  
  * Other status messages (i.e. successful submission, add to cart)  
  * Conditional fields  
  * (anything else?)  
* Device-based text scaling is supported (increasing text size in device settings)  
* Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
* Touch targets are at least 44x44 dp (density-independent pixels). (see [SC 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))  
* *If native mobile app, untestable on desktop:* Colors are distinguishable in colorblind / grayscale modes

#### Using Zoom Magnification on Android

***Instructions:** 200%, then 300% or max to complete the following tests.* 

* Browser-based zoom (at 200%, 300%, and max %) doesn’t break the layout  
  * All form inputs have a visually associated label  
  * All interactive elements are selectable (Tap into fields, select buttons, highlight text, click links)  
  * Dynamic content is visible, placed correctly, gives context:  
    * Error messages  
    * Other status messages (i.e. successful submission, add to cart)  
    * Conditional fields  
    * Progress and loading indicators  
    * (anything else?)  
  * Device-based text scaling is supported (increasing text size in device settings)  
  * Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
  * Touch targets are at least 44x44 dp (density-independent pixels). (see [SC 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))

#### Using TalkBack

***Instructions**: TalkBack can be tested in multiple browsers. Repeat these checklists for every browser you test with. ([Refer to list of browsers note](#note).)* 

* Able to complete entire flow using default TalkBack settings  
* Ensure that TalkBack accurately announces the content on the screen (turn on captions in the dev settings)  
* All interactive elements have accessible labels  
  * Form labels are associated with their corresponding input fields  
* All interactive elements are announced and selectable (Tap into fields, select buttons, highlight text, click links)  
* Appropriate focus order  
* Graphics contain appropriate and concise alternate text  
  * Decorative images and icons are hidden to the user  
* Visually implied headings are programmatically implemented as headings  
* Dynamic content is announced with appropriate timing and context (see [SC 4.1.3](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)):  
  * Error messages  
  * Other status messages (i.e. successful submission, add to cart)  
  * Conditional fields  
  * Progress and loading indicators  
* Browser-based zoom (at 200%, 300%, and max %) doesn’t break the layout  
* Device-based text scaling is supported (increasing text size in device settings)  
* Nothing is obscured, running off viewport edges, or unreachable. (Horizontal scrolling is permitted for content like images, maps, diagrams, presentations, and data tables.) ([see SC 1.4.10: Reflow](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html))   
* Touch targets are at least 44x44 dp (density-independent pixels). (see [SC 2.5.5](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html))
* If a modal is present: 
  * focus should move to the modal when its opened
  * the modal should have an accessible name, the modal should trap focus
  * content outside the modal shouldn’t be accessible to screen reader users when the modal is open
  * pressing the close button should close the modal and move focus back to the button that triggered the modal

#### Using Voice Access

***Instructions**: Turn on Voice Access and go through the user journey.*

* Able to complete entire flow using default settings  
* All interactive elements meet Label in Name requirements (accName and visual label begin with the same string)

##### *Note*

Android devices, like more general purpose computers, support a wide plethora of browsers and browser engines, therefore it will be important to target a number of them. Recommended browsers for testing:

* [Google Chrome](https://play.google.com/store/search?q=Google%20Chrome&c=apps&hl=en_US&gl=US)  
* [Firefox](https://play.google.com/store/search?q=Firefox&c=apps&hl=en_US&gl=US)  
* [Microsoft Edge](https://play.google.com/store/search?q=Microsoft%20Edge&c=apps&hl=en_US&gl=US)  
* [Samsung Internet Browser](https://play.google.com/store/search?q=Samsung%20Browser&c=apps&hl=en_US&gl=US)

Repeat these checklists for every browser you test with.

## **Results and recommendations**

Title issues as succinctly, and as close to their checklist counterparts, as possible.

Write up your findings by issue or by page, your choice. 

Use the [Accessibility defect severity rubric](https://depo-platform-documentation.scrollhelp.site/developer-docs/accessibility-defect-severity-rubric) to determine severity level.

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

##### **Issue 2:** \[short description\]

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
