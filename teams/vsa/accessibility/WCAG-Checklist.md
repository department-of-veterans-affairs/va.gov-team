```diff
! Work-in-Progress
```

# WCAG Checklist 

The W3C's Web Content Accessibility Guidelines (WCAG) are the worldwide standard for accessibility compliance, and the WCAG 2.0 criteria are the requirements for Section 508. This checklist offers organized guidance to meet Section 508 and accessibility compliance. 

For an overview of WCAG, and distinctions between 2.0, 2.1, and 2.2, please see the [W3C WCAG documentation](https://www.w3.org/WAI/standards-guidelines/wcag/).

## Section 508 (WCAG 2.0) and the 508-defect severity rubric

The Section 508 criteria listed here **do not** map directly to the VSP 508-defect severity rubric. 

- 508-defect-0 means the issue is **harmful**, _such as_, bullet #7 under Sight & Sound regarding strobing effects ([WCAG 2.3.1](https://www.wuhcag.com/three-flashes-or-below/)). Making a determination that an issue is harmful relies on the experienced expertise of an accessibility professional.

- 508-defect-1 means the experience is **broken**. A user is unable to proceed, access, or understand the content. The severity rubric provides examples, such as keyboard traps, content not available for assistive technology users, etc.

A direct mapping of severity to WCAG success criteria is **not possible**, as it varies by implementation and the degree of human impact.

<hr/>

> > **For Veteran Facing Services teams, if there are 508-defect-0, 1, 2, 3, and some 4 issues logged for work it is not 508 compliant, according to the VA 508 Office.** Source: [VSP Accessibility Defect Severity Rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#accessibility-defect-severity-rubric)


<hr/>


## What is Section 508?

* Section 508 is the U.S. federal mandate for accessibility compliance. 

    * Section 508 is not part of the Americans with Disabilities Act of 1990 (ADA). That is a different law. 
    
    * Section 508 is an amendment to the Rehabilitation Act of 1973. 
    
    * In 1998 the US Congress amended the Rehabilitation Act to require Federal agencies to make their electronic and information technology accessible to people with disabilities. Section 508 was enacted to eliminate barriers in information technology, to make available new opportunities for people with disabilities, and to encourage development of technologies that will help achieve these goals. Source: [The ADA and Section 508](https://508compliantdocumentconversion.com/americans-with-disabilities-act/)
    
    * **All products and services purchased or created with federal money MUST be 508-compliant.** 
    
    * **Section 508 = WCAG 2.0**

* The [Plain Writing Act of 2010](https://plainlanguage.gov/law/) includes requirements to ensure **content is accessible**.
    
* **Since 2017, Section 508 references WCAG 2.0 Level A and Level AA Success Criteria and Conformance Requirements.** The Access Board, who oversees Section 508, indicated they will wait for WCAG 3.0 (expected in 2021–2022) to update Section 508. WCAG 2.0 was published on December 11, 2008.

<hr/>

>> **Section 508 = WCAG 2.0**

<hr/>

* On June 5, 2018, WCAG 2.1 was released and is the current worldwide standard for accessibility compliance. Half of U.S. Veterans have an identified cognitive disability, and it's likely even more do. VA.gov mobile traffic continues to increase and accounts for half of the arrivals. WCAG 2.1's focus on cognitive and mobile design success criteria are useful for supporting these needs. Building on that, there are additional draft criteria in WCAG 2.2 that are not yet part of the standard, and continue to ensure accessibility for people with cognitive disabilities and those on mobile. 


## Section 508 success criteria can be organized into four areas: 

1. [Semantic Structure](#semantic-structure)

2. [Sight & Sound](#sight--sound)

3. [Interactivity & Dynamic Content](#interactivity--dynamic-content)

4. [Understandability/Cognition](#understandabilitycognition)


**This list is based on WCAG 2.0 AA Requirements (marked with “MUST”) and best practices (marked with “*SHOULD*”).** 

The VA 508 Office expectation is that both requirements and best practices are met in our work to deliver an experience that is accessible to all. 

This checklist evolved from the [Deque WCAG 2.0 Checklist](https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf). Another useful reference is this W3C [How to Meet WCAG, Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/).

<hr/>

> > **For Veteran Facing Services teams, if there are 508-defect-0, 1, 2, 3, and some 4 issues logged for work it is not 508 compliant, according to the VA 508 Office.** Source: [VSP Accessibility Defect Severity Rubric](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/guidance/defect-severity-rubric.md#accessibility-defect-severity-rubric)

<hr/>

<details><summary>Review WCAG 2.0 footnotes</summary>
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

### Semantic Structure

  
#### 1. Page title	
The page <strong>&#42;&#42;MUST&#42;&#42;</strong> have a meaningful title (e.g. About us), even when included via iframe. [WCAG 2.4.2](https://www.wuhcag.com/page-titled/)

<ol type="a">
   <li>Unique information *SHOULD* go first (e.g. “WCAG Checklist”).</li>
   <li>Result pages *SHOULD* describe the result (e.g. “Error on form” or “Search results loaded”).</li>
   <li>Single-page applications and AJAX scripts *SHOULD* update the title when the URL changes or, when the page content changes significantly.</li>
</ol>

#### 2. Language	

<ol type="a">
   <li>The page <strong>**MUST**</strong> specify the language (&lt;html lang="en"&gt;). <a href="https://www.wuhcag.com/language-of-page/">WCAG 3.1.1</a></li>
   <li>Changes in the language within the page <strong>**MUST**</strong> be specified (e.g. &lt;span lang="es"&gt;Hola&lt;/span&gt;).	<a href="https://www.wuhcag.com/language-of-parts/">WCAG 3.1.2</a></li>
</ol>

#### 3. Landmarks	

<ol type="a">
   <li>Pages *SHOULD* have accurate, logical landmark structure (e.g. &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;aside&gt;, &lt;footer&gt;), so screen reader users can navigate by landmark, and all content *SHOULD* be inside a landmark. <a href="https://www.wuhcag.com/headings-and-labels/">WCAG 2.4.6</a></li>
</ol>

#### 4. Headings	

The page **MUST** have meaningful headings to label each major section, which *SHOULD* start with `<h1>` (at the beginning of the main content, or at the beginning of every section of aggregated content, or at the beginning of modal dialogs), and *SHOULD NOT* skip heading levels, to allow screen reader users to navigate the tree structure of the heading hierarchy. [WCAG 2.4.6](https://www.wuhcag.com/headings-and-labels/)

<details><summary>Review WCAG 2.4.6 example</summary>

The image below will be replaced with a corrected version, with the 'dt' followed by a 'dd'. 
<img src="https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/accessibility/resources/images/dodont-headers.png" alt="annotation of a webpage showing proper use of semantic headings and styling" width="70%" />

</details>

#### 5. Links and Navigation
(See also Custom Widgets in Part 3 for dynamic menus (drop-down accordion, etc.)

<ol type="a">
   <li>Links <strong>**MUST**</strong> have readable text. Be especially careful with links that contain only images (which need alt text) and background images/icon fonts (which need text via aria-label on the link or text within the link, hidden via CSS).	<a href="https://www.wuhcag.com/name-role-value/">WCAG 4.1.2</a>, <a href="https://www.wuhcag.com/link-purpose-link-only/">2.4.9</a></li>
   <li>The link text <strong>**MUST**</strong> make sense in context, and should make sense when taken out of context (problematic phrases include: “click here,” “learn more,” “more,” “read more,” etc.).	<a href="https://www.wuhcag.com/link-purpose-link-only/">WCAG 2.4.9</a>, <a href="https://www.wuhcag.com/link-purpose-in-context/">WCAG 2.4.4</a></li>
   <li>Linked content *SHOULD* be grouped in a single link where appropriate. For example: an icon and its adjacent text *SHOULD NOT* be two separate links if they go to the same location.	<a href="https://www.wuhcag.com/consistent-identification/">WCAG 3.2.4</a></li>
   <li>Navigation features (e.g. main menu) <strong>**MUST**</strong> be placed in a consistent location across pages.	<a href="https://www.wuhcag.com/consistent-navigation/">WCAG 3.2.3</a></li>
   <li>Navigation features <strong>**MUST**</strong> be identified in a consistent way across pages.	<a href="https://www.wuhcag.com/consistent-identification/">WCAG 3.2.4</a></li>
   <li>A “skip navigation” or “skip to main content” *SHOULD* be provided as the first link in the design, to allow sighted keyboard users to quickly arrive at the main content (Note: the link can be invisible until the user tabs to it, but it **MUST NOT** remain invisible when it receives keyboard focus).	<a href="https://www.wuhcag.com/multiple-ways/">WCAG 2.4.5</a></li>
</ol>

#### 6. Tables	

a. Header cells `<th>` **MUST** be associated with their respective data cells (via scope or headers + id). [WCAG 1.3.1](https://www.wuhcag.com/info-and-relationships/)

<details><summary>Review WCAG 1.3.1 example</summary>

**Do:**

```diff
<thead>
  <tr>
    <th scope="col">Heading for a column</th>
    <th scope="colgroup" colspan="3">Heading for a group of columns</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th scope="row">First column of the first row heading</th>
    <td>Table cell data</td>
    <td>Table cell data</td>
    <td>Table cell data</td>
  </tr>
</tbody>
```

**Don't:**

```diff
<thead>
  <tr>
!   <th>Heading for a column</th>
!   <thcolspan="3">Heading for a group of columns</th>
  </tr>
</thead>
<tbody>
  <tr>
!   <th>First column of the first row heading</th>
    <td>Table cell data</td>
    <td>Table cell data</td>
    <td>Table cell data</td>
  </tr>
</tbody>
```
</details>

b. Tables *SHOULD* have an accessible name (e.g. `<caption>`, aria-label, or aria-labelledby).[4.1.2](https://www.wuhcag.com/name-role-value/)



c. Layout tables (no header/data associations) **MUST NOT** contain `<th>` or other header markup.	[WCAG 1.3.1](https://www.wuhcag.com/info-and-relationships/)


#### 7. Lists	

<ol type="a">
   <li>Lists <strong>**MUST**</strong> be marked up appropriately according to the semantics of the list (e.g. &lt;ul&gt;, &lt;ol&gt;, &lt;dl&gt;`). <a href="https://www.wuhcag.com/info-and-relationships/">WCAG 1.3.1</a></li>
</ol>


#### 8. iframes	

<ol type="a">
   <li>Frame title attribute <strong>**MUST**</strong> be specified (&lt;iframe title="Video about..."`). <a href="https://www.wuhcag.com/name-role-value/">WCAG 4.1.2</a></li>
   <li>The page within the iframe <strong>**MUST**</strong> have an accurate, meaningful &lt;title&gt;.	<a href="">WCAG 2.4.2</a></li>
   <li>iframes with no readable content (e.g. only JavaScript) *SHOULD* be set to aria-hidden="true".	<a href="https://www.wuhcag.com/name-role-value/">WCAG 4.1.2</a></li>
</ol>


#### 9. Form Markup
(See also Form Validation and Feedback in Part 3)	

<ol type="a">
   <li>Inputs, buttons, and controls <strong>**MUST**</strong> have labels which are programmatically-associated** (e.g. via &lt;label&gt;, aria-label, or aria-labelledby) and always visible on the screen** (they don’t disappear when the user starts typing). <a href="https://www.wuhcag.com/info-and-relationships/">WCAG 1.3.1</a>, <a href="https://www.wuhcag.com/labels-or-instructions/">WCAG 3.3.2</a></li>
   <li>Required fields *SHOULD* be marked as such, e.g. via aria-required="true" (on the input, not on the label), or have the word “required” in the &lt;label&gt; text.	<a href="https://www.wuhcag.com/labels-or-instructions/">WCAG 3.3.2</a></li>
   <li>Form field instructions *SHOULD* be associated with inputs or buttons using techniques such as: Putting the instructions in the &lt;label&gt;. Associating the instructions with the field using aria-describedby (Note: text associated via aria-describedby *SHOULD* be relatively brief). Putting the instructions in a &lt;fieldset&gt; with &lt;legend&gt; <a href="https://www.wuhcag.com/labels-or-instructions/">WCAG 3.3.2</a></li>
   <li>Groups of form elements <strong>**MUST**</strong> have group labels (e.g. &lt;fieldset&gt; and &lt;legend&gt;, or referenced from the inputs via aria-labelledby="id-of-group-label id-of-self-label" ). <a href="https://www.wuhcag.com/info-and-relationships/">WCAG 1.3.1</a>, <a href="https://www.wuhcag.com/labels-or-instructions/">WCAG 3.3.2</a></li>
</ol>


#### 10. Parsing and Validity	

<ol type="a">
   <li>The page <strong>**MUST**</strong> NOT contain duplicate IDs because accessibility features frequently reference IDs. <a href="https://www.wuhcag.com/parsing/">WCAG 4.1.1</a></li>
   <li>Attributes (e.g. ARIA) <strong>**MUST**</strong> contain only allowable values, in the proper parent-child hierarchy.	<a href="https://www.wuhcag.com/parsing/">WCAG 4.1.1</a></li>
   <li>Parent-child relationships of elements & attributes (e.g. ARIA roles) <strong>**MUST**</strong> follow the specification.	<a href="https://www.wuhcag.com/parsing/">WCAG 4.1.1</a></li>
   <li>The page **MUST NOT** contain syntax errors that affect semantic meaning (e.g. elements or attributes that don’t close properly, either explicitly or implicitly).	<a href="https://www.wuhcag.com/parsing/">WCAG 4.1.1</a></li>
</ol>


### Sight & Sound


#### 1. Color and Other Sensory Characteristics	

<ol type="a">
   <li>Sensory characteristics (e.g. color, size, shape, visual placement, visual orientation, sound, etc.) **MUST NOT** be the only way to convey information.	1.1.1, 1.3.3</li>
   <li>Color **MUST NOT** be used as the only way to distinguish links from regular text.	1.4.1</li>
</ol>


#### 2. Contrast	

<ol type="a">
   <li>Contrast of text against the background <strong>**MUST**</strong> meet the minimum threshold (use automated tools to determine if the contrast passes or fails).	1.4.3</li>
</ol>


#### 3. Images 

<ol type="a">
   <li>Informative images <strong>**MUST**</strong> have brief, meaningful alt text describing the purpose of the image.<sup>1</sup> 1.1.1</li>
   <li>Actionable images (images used as links, buttons or controls) <strong>**MUST**</strong> have brief, meaningful alt text describing the destination or result of the action. 1.1.1</li>
   <li>CAPTCHAs <strong>**MUST**</strong> have alternatives that do not rely on sensory experiences (i.e. vision, sound). 1.1.1</li>
   <li>Complex images (images requiring more than about 200 characters to describe them) <strong>**MUST**</strong> be given extended text descriptions. Provide the text below (or above) the image, or on a separate page (via a link), or in a dialog (via a button), or similar technique. 1.1.1</li>
   <li>Non-informative decorative or redundant Images <strong>**MUST**</strong> be coded to be ignored by screen readers by using alt="" on the <img> or Putting the image in the background with CSS. 1.1.1</li>
   <li>Images **MUST NOT** be used to convey text, except in logos and other essential situations (use real text instead, so users can magnify it, change contrast, change colors, etc.). 1.4.5

#### 4. Videos and Audio

<ol type="a">
   <li>Videos (prerecorded or live) <strong>**MUST**</strong> have synchronized captions for the deaf. 1.2.2, 1.2.4</li>
   <li>Videos <strong>**MUST**</strong> have narrated audio descriptions for the blind, if the audio track (dialog, narration, sounds) of the video does not convey all important visual information.<sup>2</sup> 1.2.3, 1.2.5</li>
   <li>Videos and audio (prerecorded) <strong>**MUST**</strong> have a text transcript for the deaf and deafblind, on the page, available via a link, available via a dialog (activated by a button), or similar technique. 1.2.1</li>
   <li>Videos and audio *SHOULD* not auto-play to avoid interfering with screen reader speech. (1.4.2)</li>
   <li>Volume level <strong>**MUST**</strong> be adjustable via a control in the media player. 1.4.2</li>
</ol>


#### 5. Zoom and Reflow

<ol type="a">
   <li>Users <strong>**MUST**</strong> be able to use pinch-to-zoom on touch devices. 1.4.4</li>
   <li>A responsive design (with text reflow relative to the viewport width) *SHOULD* be available on desktop as well as mobile designs for the benefit of people with low vision who zoom in. 1.4.4</li>
</ol>


#### 6. Visual Proximity

<ol type="a">
   <li>Related information (labels, descriptions, feedback, controls, etc.) *SHOULD* be close in visual proximity so that screen magnifier users can see the related parts on the screen at the same time.LV3</li>
</ol>


#### 7. Flashing Effects

<ol type="a">
   <li>**508-defect-0 :exclamation: Launchblocker – Harmful** There **MUST NOT* be any flashing or blinking effects faster than 3 times in any one-second period, to avoid causing a seizure in people susceptible to them. 2.3.1</li>
</ol>


#### 8.Typographic Design

<ol type="a">
   <li>Fonts *SHOULD* be easy to read (avoid cursive fonts, overly decorative fonts, etc.). n/</li>
   <li>Text *SHOULD NOT* be full-justified, to improve readability. 1.4.8</li>
   <li>Within paragraphs, line spacing *SHOULD* be at least 1.5 whenever possible. 1.4.8*</li>
   <li>Between paragraphs, spacing *SHOULD* be at least 1.5 times larger than the line spacing. 1.4.8*</li>
   <li>The design *SHOULD* use standard font face wherever possible (eliminate or minimize phrases written in all capitals, long sections of italic or bold text, etc.).n/a</li>
   <li>If emphasis is critical to understand the text, it <strong>**MUST**</strong> be written in words (e.g. “important” or “warning”) in the text or in alternative text. Text variants (bold, italic, all capitals) aren’t enough. 1.1.1</li>
</ol>

#### 9. Screen Orientation

<ol type="a">
   <li>Designs *SHOULD* support both vertical (portrait) and horizontal (landscape) orientation, so that the design displays correctly for users who cannot switch orientation (e.g. if they have the device attached to a wheelchair). n/a</li>
</ol>

#### 10. Hidden Content

<ol type="a">
   <li>Content that is hidden from sighted users *SHOULD* also be hidden from screen reader users (e.g. using CSS display:none), except where the hidden content is intended only for screen reader users. 1.3.2</li>
</ol>

#### 11. CSS Generated Content (e.g. font icons, etc.)

<ol type="a">
   <li>Designs *SHOULD NOT* rely on CSS-generated content to convey information, due to incomplete support across screen reader/browser combinations (especially IE). Supplement with CSS clipped content in the HTML4, aria-label/aria-labelledby (on focusable elements), or similar technique. 1.1.1</li>
</ol>


### Interactivity & Dynamic Content

  
#### 1. Keyboard Input

<ol type="a">
   <li>All features <strong>**MUST**</strong> be fully functional when using only the keyboard (drop-down menus, etc.) 2.1.1</li>
   <li>Keyboard tab order <strong>**MUST**</strong> be logical, and *SHOULD* match the order of the visual design (Note: Achieve this via proper order in the DOM. Avoid tabindex of positive values). 2.4.3</li>
   <li>Keyboard focus <strong>**MUST**</strong> follow the action (e.g. the focus goes to a dialog when the dialog is activated, and when the dialog is dismissed, the focus returns to the button that activated the dialog). 2.4.3</li>
   <li>Visual focus indicator <strong>**MUST**</strong> always be visible when tabbing through the page. 2.4.7</li>
   <li>The page **MUST NOT** have a keyboard trap. Users <strong>**MUST**</strong> be able to navigate to and past all links, buttons, inputs, and controls, both forward (using the tab key) and backward (using shift + tab). 2.1.2</li>
   <li>Keyboard shortcuts **MUST NOT** interfere with shortcuts in the browser, screen reader, or OS. 2.1.1</li>
   <li>Touch Input All features *SHOULD* be fully functional when using only touch. M</li>
   <li>All features *SHOULD* be fully functional by touch with the screen reader turned on. Click actions are required, because JavaScript swipe events, and similar, are disabled when the screen reader is on. M</li>
   <li>Whenever possible, the clickable target *SHOULD* be at least 9mm high and 9mm wide, so that users can activate them with their finger, without having to zoom in. M</li>
</ol>

#### 2. Form Validation and Feedback
(See also Form Markup in Part 1)

<ol type="a">
   <li>Screen reader users <strong>**MUST**</strong> receive either a confirmation message or error message immediately after the form is submitted (silence is bad) through methods such as [3.3.1, 3.3.3]():
    <ul>
       <li>Focus is sent to the confirmation/error message OR</li>
       <li>Focus is sent to the first field with an error (and the error is associated with the field) OR</li>
       <li>The page &lt;title&gt; contains the confirmation/error message (if the user is sent to a new page or if the page reloads when the form is submitted).</li>
      </ul></li>
   <li>Error messages about an input (as opposed to the form as a whole) <strong>**MUST**</strong> be associated with that input (e.g. via <label> or aria-describedby). 3.3.3</li>
   <li>Error messages <strong>**MUST**</strong> describe the error in enough detail to allow users to fix the error. 3.3.3</li>
   <li>Forms with legal, financial, or data functions <strong>**MUST**</strong> protect users from errors by one of the following: 1) allow actions to be reversible, 2) automatically check and correct errors, or 3) allow users to review/confirm/correct submissions. 3.3.4</li>
</ol>

#### Custom Widgets

<ol type="a">
   <li>Labels <strong>**MUST**</strong> be specified on all controls and buttons (e.g. via <label>, aria-label, or aria-labelledby) 3.3.2</li>
   <li>Roles <strong>**MUST**</strong> be specified, where appropriate via HTML or ARIA (e.g. <button> or role="button", role="slider", role="dialog", role="tablist", etc.). See https://www.w3.org/TR/wai-aria/roles 4.1.2</li>
   <li>Property states and values (and changes to states and values) <strong>**MUST**</strong> be specified and updated on controls where appropriate (e.g. aria-expanded="false", aria-selected="true", aria-valuenow="100"). 4.1.2</li>
   <li>Relationships <strong>**MUST**</strong> be specified, where appropriate (aria-controls, aria-owns, aria-activedescendant). 4.1.2</li>
   <li>Keyboard behaviors *SHOULD* follow ARIA conventions specific to the type of widget. ARIA5</li>
</ol>


#### Manage Focus

<ol type="a">
   <li>Scripts <strong>**MUST**</strong> manage keyboard focus when necessary (but only when necessary) (e.g. clicking on a button sends the focus to a dialog; closing the dialog sends the focus back to the original button). 2.4.3</li>
   <li>Timing Users <strong>**MUST**</strong> be allowed to turn off, adjust, or extend time limits (e.g. timed scripts, session timeout, page reload) unless the fundamental nature of the activity requires otherwise (e.g. real-time events). 2.2.1</li>
</ol>


#### Motion and Animation

<ol type="a">
   <li>Users <strong>**MUST**</strong> be able to pause, stop, hide, or control the timing of content that blinks, moves, autoscrolls, or auto-updates. 2.2.2</li>
</ol>


#### Dynamic Updates
(including in a singlepage application framework)

<ol type="a">
   <li>Screen reader users <strong>**MUST**</strong> be made aware of important updates or changes to the content (e.g. content loaded by AJAX or changed by JavaScript, etc.) by methods such as the following [1.3.2]():
    <ul>
       <li>aria-live announcement (appropriate when the keyboard focus should not move) OR</li>
       <li>move the keyboard focus to the new content (only applicable if the user performs an action to request the content change, e.g. by clicking a button or link).</li>
      </ul></li>
   <li>Updates/additions *SHOULD* be loaded near (preferably below) the user’s current position. (1.3.2)</li>
   <li>“On focus” **MUST NOT** trigger a change of context (e.g. user agent, focus, viewport, or content). 3.2.1</li>
   <li>“On input” **MUST NOT** trigger a change of context unless the user is advised in advance. 3.2.2</li>
</ol>

#### Objects and Plugins

<ol type="a">
   <li>All &lt;object&gt; elements <strong>**MUST**</strong> have alternative text. 1.1.1</li>
   <li>An object or plugin *SHOULD* conform to the best practices of the accessibility API of that object or plugin, if available (e.g. the PDF format has an accessibility API). n/a</li>
   <li>If an object or plugin is not compatible with assistive technologies, an alternative representation <strong>**MUST**</strong> be available in an accessible format. 1.1.1</li>
</ol>





### Understandability/Cognition

#### Content 

<ol type="a">
   <li>The text *SHOULD* be written in the simplest and clearest language possible, appropriate to the content. COG<sup>6</sup></li>
   <li>Uncommon words and phrases – including technical terms, idioms, jargon, foreign phrases, etc. – *SHOULD* be defined or explained in the text. 3.1.3<sup>*</sup></li>
   <li>Abbreviations and acronyms *SHOULD* be expanded or explained in the text. 3.1.4<sup>*</sup></li>
   <li>The page *SHOULD* provide supplemental versions of the content (e.g. illustrations, videos, audio, simplified text version, etc.) to enhance comprehension, if the reading level is more advanced than a lower secondary education level. 3.1.5<sup>*</sup></li>
</ol>

#### User Experience

<ol type="a">
   <li>The information architecture of the site and design *SHOULD* be intuitive, allowing the user to easily find, navigate, read, and interact with the content. COG</li>
   <li>The design *SHOULD* eliminate or minimize visual distractions. COG</li>
   <li>The site *SHOULD* minimize the number of steps required for users to complete actions. COG</li>
   <li>The site *SHOULD* provide ways for users to find or request help (e.g. context-sensitive help, tutorials, online chat with a customer service representative, discussion forum, a form to submit a question, contact information to call or write for assistance, etc.). 3.3.5<sup>*</sup></li>
   <li>Functionality *SHOULD* be easily discoverable (e.g. a menu that can be revealed only by a finger gesture swiping across the screen from the left to the right would not be easily discoverable). COG</li>
   <li>The design *SHOULD* follow common conventions for design and user interaction, unless there is a compelling (e.g. research-validated) reason to break from convention. COG</li>
   <li>Users *SHOULD NOT* be required to react quickly to information or user interface features. 2.1.1</li>
   <li>Users *SHOULD NOT* be interrupted by scripted events, or *SHOULD* be able to suppress or postpone interruptions, except in the case of emergencies. (2.2.4*)</li>
   <li>Users *SHOULD NOT* be required to perform mathematical calculations, unless the fundamental purpose of the page requires them to do so. COG</li>
   <li>Users *SHOULD NOT* be required to remember data from one page (or view, or step of a process) to another, unless the fundamental purpose of the content requires them to do so. COG</li>
</ol>


<hr/>


## WCAG 2.1 Success Criteria

### What is WCAG 2.1?

Published on June 5, 2018, WCAG 2.1 was released and **is the current standard for accessibility compliance.** It includes all the WCAG 2.0 success criteria and adds:

### Understandability/Cognition, continued

### Mobile Design


## WCAG 2.2 Draft Criteria

### What is WCAG 2.2?

WCAG 2.2 is scheduled to be published in early 2021.




