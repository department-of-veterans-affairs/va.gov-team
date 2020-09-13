# WCAG Checklist _(Work-in-Progress)_


## Section 508 = WCAG 2.0
Section 508 Compliance references WCAG 2.0 Level A and Level AA Success Criteria and Conformance Requirements. WCAG 2.0 is the standard teams have used since January of 2017. In 2019, WCAG 2.1 was released and is expected to become the standard for compliance. This checklist below offers organized guidance to meet Section 508 Compliance. Another reference that may be useful is [How to Meet WCAG, Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/).

Note: Based on WCAG 2.0 AA Requirements (marked with “MUST”) and best practices (marked with “*SHOULD*”)
*(Based on the [Deque WCAG 2.0 Checklist](https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf))*

### Part 1: Semantic Structure

<details>
  
#### Page title	
The page MUST have a meaningful title (e.g. About us), even when included via iframe. [2.4.2]()
  * Unique information *SHOULD* go first (e.g. “WCAG Checklist”).
  * Result pages SHOULD describe the result (e.g. “Error on form” or “Search results loaded”).
  * Single-page applications and AJAX scripts SHOULD update the title when the URL changes or, when the page content changes significantly.

#### Language	
  * The page MUST specify the language (`<html lang="en">`).	[3.1.1]()
  * Changes in the language within the page MUST be specified (e.g. <span lang="es">Hola</span>).	[3.1.2]()

#### Landmarks	
  * Pages SHOULD have accurate, logical landmark structure [2.4.6]() (e.g. <header>, <nav>, <main>, <aside>, <footer>), so screen reader users can navigate by landmark, and all content SHOULD be inside a landmark.	

#### Headings	
  * The page MUST have meaningful headings to label each major section, which SHOULD start with `<h1>` (at the beginning of the main content, or at the beginning of every section of aggregated content, or at the beginning of modal dialogs), and SHOULD NOT skip heading levels, to allow screen reader users to navigate the tree structure of the heading hierarchy.	[2.4.6]()

#### Links and Navigation
(See also Custom Widgets in Part 3 for dynamic menus (drop-down accordion, etc.)
  * Links MUST have readable text. Be especially careful with links that contain only images (which need alt text) and background images/icon fonts (which need text via aria-label on the link or text within the link, hidden via CSS).	[4.1.2](), [2.4.9]()
  * The link text MUST make sense in context, and should make sense when taken out of context (problematic phrases include: “click here,” “learn more,” “more,” “read more,” etc.).	[2.4.9](), [2.4.4]()
  * Linked content SHOULD be grouped in a single link where appropriate. For example: an icon and its adjacent text SHOULD NOT be two separate links if they go to the same location.	3.2.4
  * Navigation features (e.g. main menu) MUST be placed in a consistent location across pages.	3.2.3
  * Navigation features MUST be identified in a consistent way across pages.	3.2.4
  * A “skip navigation” or “skip to main content” SHOULD be provided as the first link in the design, to allow sighted keyboard users to quickly arrive at the main content (Note: the link can be invisible until the user tabs to it, but it MUST NOT remain invisible when it receives keyboard focus).	2.4.5

#### Tables	
  * Header cells (`<th>`) MUST be associated with their respective data cells (via scope or headers + id).	1.3.1
  * Tables SHOULD have an accessible name (e.g. <caption>, aria-label, or aria-labelledby).	4.1.2
  * Layout tables (no header/data associations) MUST NOT contain <th> or other header markup.	1.3.1

#### Lists	
  * Lists MUST be marked up appropriately according to the semantics of the list (e.g. <ul>, <ol>, <dl>).	1.3.1

#### iframes	
  * Frame title attribute MUST be specified (<iframe title="Video about...").	4.1.2
  * The page within the iframe MUST have an accurate, meaningful <title>.	2.4.2
  * iframes with no readable content (e.g. only JavaScript) SHOULD be set to aria-hidden="true".	4.1.2

#### Form Markup
(See also Form Validation and Feedback in Part 3)	
  * Inputs, buttons, and controls MUST have labels which are programmatically-associated** (e.g. via `<label>`, aria-label, or aria-labelledby) and always visible on the screen** (they don’t disappear when the user starts typing).	1.3.1, 3.3.2
  * Required fields SHOULD be marked as such, e.g. via aria-required="true" (on the input, not on the label), or have the word “required” in the `<label>` text.	3.3.2
  * Form field instructions SHOULD be associated with inputs or buttons using techniques such as: Putting the instructions in the `<label>`. Associating the instructions with the field using aria-describedby (Note: text associated via aria-describedby *SHOULD* be relatively brief). Putting the instructions in a `<fieldset>` with `<legend>`	3.3.2
  * Groups of form elements MUST have group labels (e.g. `` and ``, or referenced from the inputs via aria-labelledby="id-of-group-label id-of-self-label" ).	1.3.1, 3.3.2

#### Parsing and Validity	
  * The page MUST NOT contain duplicate IDs because accessibility features frequently reference IDs.	4.1.1
  * Attributes (e.g. ARIA) MUST contain only allowable values, in the proper parent-child hierarchy.	4.1.1
  * Parent-child relationships of elements & attributes (e.g. ARIA roles) MUST follow the specification.	4.1.1
  * The page MUST NOT contain syntax errors that affect semantic meaning (e.g. elements or attributes that don’t close properly, either explicitly or implicitly).	4.1.1
    
</details>

### Part 2: Sight & Sound

<details>

#### Color and Other Sensory Characteristics	
* Sensory characteristics (e.g. color, size, shape, visual placement, visual orientation, sound, etc.) MUST NOT be the only way to convey information.	1.1.1, 1.3.3
* Color MUST NOT be used as the only way to distinguish links from regular text.	1.4.1

#### Contrast	
* Contrast of text against the background MUST meet the minimum threshold (use automated tools to determine if the contrast passes or fails).	1.4.3

#### Images 
* Informative images MUST have brief, meaningful alt text describing the purpose of the image.<sup>1</sup> 1.1.1
* Actionable images (images used as links, buttons or controls) MUST have brief, meaningful alt text describing the destination or result of the action. 1.1.1
* CAPTCHAs MUST have alternatives that do not rely on sensory experiences (i.e. vision, sound). 1.1.1
* Complex images (images requiring more than about 200 characters to describe them) MUST be given extended text descriptions. Provide the text below (or above) the image, or on a separate page (via a link), or in a dialog (via a button), or similar technique. 1.1.1
* Non-informative decorative or redundant Images MUST be coded to be ignored by screen readers by using alt="" on the <img> or Putting the image in the background with CSS. 1.1.1
* Images MUST NOT be used to convey text, except in logos and other essential situations (use real text instead, so users can magnify it, change contrast, change colors, etc.). 1.4.5

#### Videos and Audio
* Videos (prerecorded or live) MUST have synchronized captions for the deaf. 1.2.2, 1.2.4
* Videos MUST have narrated audio descriptions for the blind, if the audio track (dialog, narration, sounds) of the video does not convey all important visual information.<sup>2</sup> 1.2.3, 1.2.5
* Videos and audio (prerecorded) MUST have a text transcript for the deaf and deafblind, on the page, available via a link, available via a dialog (activated by a button), or similar technique. 1.2.1
* Videos and audio SHOULD not auto-play to avoid interfering with screen reader speech. (1.4.2)
* Volume level MUST be adjustable via a control in the media player. 1.4.2

#### Zoom and Reflow
* Users MUST be able to use pinch-to-zoom on touch devices. 1.4.4
* A responsive design (with text reflow relative to the viewport width) SHOULD be available on desktop as well as mobile designs for the benefit of people with low vision who zoom in. 1.4.4

#### Visual Proximity
*  Related information (labels, descriptions, feedback, controls, etc.) SHOULD be close in visual proximity so that screen magnifier users can see the related parts on the screen at the same time.

LV3

#### Flashing Effects
* There MUST NOT be any flashing or blinking effects faster than 3 times in any one-second period, to avoid causing a seizure in people susceptible to them. 2.3.1

#### Typographic Design
* Fonts SHOULD be easy to read (avoid cursive fonts, overly decorative fonts, etc.). n/a
* Text SHOULD NOT be full-justified, to improve readability. 1.4.8
* Within paragraphs, line spacing SHOULD be at least 1.5 whenever possible. 1.4.8*
* Between paragraphs, spacing SHOULD be at least 1.5 times larger than the line spacing. 1.4.8*
* The design SHOULD use standard font face wherever possible (eliminate or minimize phrases written in all capitals, long sections of italic or bold text, etc.).
n/a
* If emphasis is critical to understand the text, it MUST be written in words (e.g. “important” or “warning”) in the text or in alternative text. Text variants (bold, italic, all capitals) aren’t enough. 1.1.1

#### Screen Orientation
* Designs SHOULD support both vertical (portrait) and horizontal (landscape) orientation, so that the design displays correctly for users who cannot switch orientation (e.g. if they have the device attached to a wheelchair). n/a

#### Hidden Content
* Content that is hidden from sighted users SHOULD also be hidden from screen reader users (e.g. using CSS display:none), except where the hidden content is intended only for screen reader users. 1.3.2

#### CSS Generated Content (e.g. font icons, etc.)
* Designs SHOULD NOT rely on CSS-generated content to convey information, due to incomplete support across screen reader/browser combinations (especially IE). Supplement with CSS clipped content in the HTML4, aria-label/aria-labelledby (on focusable elements), or similar technique. 1.1.1

</details>



### Part 3: Interactivity & Dynamic Content

<details>

</details>


### Part 4: Understandability

<details>

</details>

<hr/>

### Notes
<details>
  * Items marked with asterisk are required at the WCAG AAA level (not at the A or AA level, but are still best practices at all levels).

  1. Note that the purpose of the image depends on the context, and may not be a literal description of what is in the image. The text is usually provided via the alt attribute, but may also be provided via aria-label, aria-labelledby or, in less straightforward scenarios, via hidden text clipped by CSS.
  2. The audio descriptions can be on a separate version of the video, with a link provided to that version.
  3. Refers to information published by the W3C task force on low vision https://www.w3.org/TR/2016/WD-low-vision-needs20160317/
  4. Example in the HTML:
    `<span class="facebookFontIcon" aria-hidden=”true”></span><span class="visually-hidden">Our Facebook page</span>`
    The CSS clip method:
    `.visually-hidden {position:absolute; clip:rect(0 0 0 0); border:0; height:1px; margin:-1px; overflow:hidden; padding:0; width:1px;}`
  5. Refers to the WAI-ARIA documentation (https://www.w3.org/TR/wai-aria-practices)
  6. Refers to the information published by the W3C task force on cognitive disabilities https://www.w3.org/TR/coga-user-research/ 
</details>


## WCAG 2.1 

## WCAG 2.2

