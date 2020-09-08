# WCAG 2.0 (Section 508) Checklist _(Work-in-Progress)_

Section 508 Compliance references WCAG 2.0 Level A and Level AA Success Criteria and Conformance Requirements. WCAG 2.0 is the standard teams have used since January of 2017. In 2019, WCAG 2.1 was released and is expected to become the standard for compliance. This checklist below offers organized guidance to meet Section 508 Compliance. Another reference that may be useful is [How to Meet WCAG, Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/).

Note: Based on WCAG 2.0 AA Requirements (marked with “MUST”) and best practices (marked with “*SHOULD*”)
*(Based on the [Deque WCAG 2.0 Checklist](https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf))*

## Part 1: Semantic Structure

*Rebuilding the table in HTML to use rowspan*

<table>
  <!-- <caption></caption> -->
  <thead>
    <tr>
      <th align="left">Topic</th>
      <th>Accessibility Requirements </th>
      <th>WCAG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th valign="top" align="left">
        Page title
      </th>
      <td valign="top" align="left">
        <strong>The page MUST have a meaningful title</strong> (e.g. About us), even when included via iframe. 
        <ul>
          <li>Unique information *SHOULD* go first (e.g. “WCAG Checklist”).</li> 
          <li>Result pages <em>SHOULD</em> describe the result (e.g. “Error on form” or “Search results loaded”).</li> 
          <li>Single-page applications and AJAX scripts <em>SHOULD</em> update the title when the URL changes or, when the page content changes significantly.</li>
        </ul>
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html">2.4.2</a>
      </td>
    </tr>
    <tr>
      <th rowspan="2" valign="top" align="left">
        Language
      </th>
      <td valign="top" align="left">
        <strong>The page MUST specify the language</strong> (&#60;html lang="en"&#62;).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html">3.1.1</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>Changes in the language within the page MUST be specified</strong> (e.g. &#60;span lang="es"&#62;Hola&#60;/span&#62;).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html">3.1.2</a>
      </td>
    </tr>
    <tr>
      <th valign="top" align="left">Landmarks</th>
      <td valign="top" align="left">
        <strong>Pages <em>SHOULD</em> have accurate, logical landmark structure</strong> (e.g. &#60;header&#62;, &#60;nav&#62;, &#60;main&#62;, &#60;aside&#62;, &#60;footer&#62;), so screen reader users can navigate by landmark, and all content SHOULD be inside a landmark.
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">2.4.6</a>
      </td>
    </tr>
    <tr>
      <th valign="top" align="left">Headings</th>
      <td valign="top" align="left">
        <strong>The page MUST have meaningful headings to label each major section</strong>, which <em>SHOULD</em> start with &#60;h1&#62; (at the beginning of the main content, or at the beginning of every section of aggregated content, or at the beginning of modal dialogs), and <em>SHOULD NOT</em> skip heading levels, to allow screen reader users to navigate the tree structure of the heading hierarchy.
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">2.4.6</a>
      </td>
    </tr>
    <tr>
      <th rowspan="6" valign="top" align="left">
        Links and Navigation<br/>
        <p style="font-weight:300;">(See also Custom Widgets in Part 3 for dynamic menus (drop-down accordion, etc.)</p>
      </th>
      <td valign="top" align="left">
        <strong>Links MUST have readable text</strong>. Be especially careful with links that contain only images (which need alt text) and background images/icon fonts (which need text via aria-label on the link or text within the link, hidden via CSS).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2</a>, <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html">2.4.9</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>The link text MUST make sense in context, and should make sense when taken out of context</strong> (problematic phrases include: &ldquo;click here,&rdquo; &ldquo;learn more,&rdquo; &ldquo;more,&rdquo; &ldquo;read more,&rdquo; etc.).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html">2.4.9</a>, <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html">2.4.4</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>Linked content SHOULD be grouped in a single link where appropriate</strong>. For example: an icon and its adjacent text SHOULD NOT be two separate links if they go to the same location.
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html">3.2.4</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>Navigation features (e.g. main menu) MUST be placed in a consistent location across pages</strong>.
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html">3.2.3</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>Navigation features MUST be identified in a consistent way across pages</strong>.
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html">3.2.4</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>A &ldquo;skip navigation&rdquo; or &ldquo;skip to main content&rdquo; SHOULD be provided as the first link in the design</strong>, to allow sighted keyboard users to quickly arrive at the main content (Note: the link can be invisible until the user tabs to it, but it MUST NOT remain invisible when it receives keyboard focus).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html">2.4.5</a>
      </td>
    </tr>
    <tr>
      <th rowspan="3" valign="top" align="left">Tables</th>
      <td valign="top" align="left">
        <strong>Header cells (&#60;th&#62;) MUST be associated with their respective data cells</strong> (via scope or headers + id).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
        <strong>Tables SHOULD have an accessible name</strong> (e.g. &#60;caption&#62;, aria-label, or aria-labelledby).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2</a>
      </td>
    </tr>
    <tr>
      <td valign="top" align="left">
         <strong>Layout tables (no header/data associations) MUST NOT contain &#60;th&#62; or other header markup.</strong>
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>
      </td>
    </tr>
    <tr>
      <th valign="top" align="left">Lists</th>
      <td valign="top" align="left">
        <strong>Lists MUST be marked up appropriately</strong> according to the semantics of the list (e.g. &#60;ul&#62;, &#60;ol&#62;, &#60;dl&#62;).
      </td>
      <td valign="top" align="left">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>
      </td>
    </tr>
    <tr>
      <th rowspan="3" valign="top" align="left">iframes</th>
      <td valign="top" align="left"><strong>Frame title attribute MUST be specified</strong> (&#60;iframe title="Video about...").</td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>The page within the iframe MUST have an accurate, meaningful &#60;title&#62;.</strong></td>
      <td valign="top" align="left"><a href="https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html">2.4.2</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>iframes with no readable content (e.g. only JavaScript) SHOULD be set to aria-hidden="true".</strong></td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2</a></td>
    </tr>
    <tr>
      <th rowspan="4" valign="top" align="left">Form Markup<br/> (See also Form Validation and Feedback in Part 3)</th>
      <td valign="top" align="left"><strong>Inputs, buttons, and controls MUST have labels which are programmatically-associated** (e.g. via &#60;label&#62;, aria-label, or aria-labelledby)</strong> and always visible on the screen** (they don’t disappear when the user starts typing).</td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>, <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html">3.3.2</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>Required fields SHOULD be marked as such</strong>, e.g. via aria-required="true" (on the input, not on the label), or have the word “required” in the &#60;label&#62; text.</td>
      <td valign="top" align="left"><a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html">3.3.2</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>Form field instructions SHOULD be associated with inputs or buttons</strong> using techniques such as: Putting the instructions in the &#60;label&#62;. Associating the instructions with the field using aria-describedby (Note: text associated via aria-describedby *SHOULD* be relatively brief). Putting the instructions in a &#60;fieldset&#62; with &#60;legend&#62;</td>
      <td valign="top" align="left"><a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html">3.3.2</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>Groups of form elements MUST have group labels</strong> (e.g. `<fieldset>` and `<legend>`, or referenced from the inputs via aria-labelledby="id-of-group-label id-of-self-label" ). </td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>, <a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html">3.3.2</a></td>
    </tr>
    <tr>
      <th rowspan="4" valign="top" align="left">Parsing and Validity</th>
      <td valign="top" align="left"><strong>The page MUST NOT contain duplicate IDs</strong> because accessibility features frequently reference IDs.</td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html#:~:text=Specific%20Benefits%20of%20Success%20Criterion,content%20accurately%20and%20without%20crashing.">4.1.1</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>Attributes (e.g. ARIA) MUST contain only allowable values, in the proper parent-child hierarchy.</strong></td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html#:~:text=Specific%20Benefits%20of%20Success%20Criterion,content%20accurately%20and%20without%20crashing.">4.1.1</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>Parent-child relationships of elements & attributes (e.g. ARIA roles) MUST follow the specification.</strong></td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html#:~:text=Specific%20Benefits%20of%20Success%20Criterion,content%20accurately%20and%20without%20crashing.">4.1.1</a></td>
    </tr>
    <tr>
      <td valign="top" align="left"><strong>The page MUST NOT contain syntax errors that affect semantic meaning</strong> (e.g. elements or attributes that don’t close properly, either explicitly or implicitly).</td>
      <td valign="top" align="left"><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html#:~:text=Specific%20Benefits%20of%20Success%20Criterion,content%20accurately%20and%20without%20crashing.">4.1.1</a></td>
</tbody>
</table>


## Part 2: Sight & Sound

<table>
  <!-- <caption></caption> -->
  <thead>
    <tr>
      <th valign="top" align="left">Topic</th>
      <th valign="top" align="left">Accessibility Requirements </th>
      <th valign="top" align="left">WCAG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top" align="left">Color and Other Sensory Characteristics</th>
      <td valign="top" align="left">Sensory characteristics (e.g. color, size, shape, visual placement, visual orientation, sound, etc.) MUST NOT be the only way to convey information.</td>
      <td valign="top" align="left">1.1.1, 1.3.3</td>
    </tr>
    <tr>
      <td valign="top" align="left">Color MUST NOT be used as the only way to distinguish links from regular text.</td>
      <td valign="top" align="left">1.4.1</td>
    </tr>
    <tr>
      <th valign="top" align="left">Contrast</th>
      <td valign="top" align="left">Contrast of text against the background MUST meet the minimum threshold (use automated tools to determine if the contrast passes or fails).</td>
      <td valign="top" align="left">1.4.3</td>
    </tr>
    <tr>
      <th rowspan="6" valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr><!-- end of images rows -->
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
</tbody>
</table>


Images Informative images MUST have brief, meaningful alt text describing the purpose of the image.1 1.1.1
Actionable images (images used as links, buttons or controls) MUST have brief, meaningful alt
text describing the destination or result of the action.
1.1.1
CAPTCHAs MUST have alternatives that do not rely on sensory experiences (i.e. vision, sound). 1.1.1
Complex images (images requiring more than about 200 characters to describe them) MUST be
given extended text descriptions. Provide the text below (or above) the image, or on a separate
page (via a link), or in a dialog (via a button), or similar technique.
1.1.1
Non-informative decorative or redundant Images MUST be coded to be ignored by screen
readers by using alt="" on the <img> or Putting the image in the background with CSS.
1.1.1
Images MUST NOT be used to convey text, except in logos and other essential situations (use real
text instead, so users can magnify it, change contrast, change colors, etc.).
1.4.5
Videos and
Audio
Videos (prerecorded or live) MUST have synchronized captions for the deaf. 1.2.2,
1.2.4
Videos MUST have narrated audio descriptions for the blind, if the audio track (dialog, narration,
sounds) of the video does not convey all important visual information.
2
1.2.3,
1.2.5
Videos and audio (prerecorded) MUST have a text transcript for the deaf and deafblind, on the
page, available via a link, available via a dialog (activated by a button), or similar technique.
1.2.1
Videos and audio SHOULD not auto-play to avoid interfering with screen reader speech. (1.4.2)
Volume level MUST be adjustable via a control in the media player. 1.4.2
Zoom and
Reflow
Users MUST be able to use pinch-to-zoom on touch devices. 1.4.4
A responsive design (with text reflow relative to the viewport width) SHOULD be available on
desktop as well as mobile designs for the benefit of people with low vision who zoom in.
(1.4.4)
Visual
Proximity
Related information (labels, descriptions, feedback, controls, etc.) SHOULD be close in visual
proximity so that screen magnifier users can see the related parts on the screen at the same time.
LV3
Flashing
Effects
There MUST NOT be any flashing or blinking effects faster than 3 times in any one-second period,
to avoid causing a seizure in people susceptible to them.
2.3.1
Typographic
Design
Fonts SHOULD be easy to read (avoid cursive fonts, overly decorative fonts, etc.). n/a
Text SHOULD NOT be full-justified, to improve readability. (1.4.8)
Within paragraphs, line spacing SHOULD be at least 1.5 whenever possible. (1.4.8*)
Between paragraphs, spacing SHOULD be at least 1.5 times larger than the line spacing. (1.4.8*)
The design SHOULD use standard font face wherever possible (eliminate or minimize phrases
written in all capitals, long sections of italic or bold text, etc.).
n/a
If emphasis is critical to understand the text, it MUST be written in words (e.g. “important” or
“warning”) in the text or in alternative text. Text variants (bold, italic, all capitals) aren’t enough.
(1.1.1)
Screen
Orientation
Designs SHOULD support both vertical (portrait) and horizontal (landscape) orientation, so that
the design displays correctly for users who cannot switch orientation (e.g. if they have the device
attached to a wheelchair).
n/a
Hidden
Content
Content that is hidden from sighted users SHOULD also be hidden from screen reader users (e.g.
using CSS display:none), except where the hidden content is intended only for screen reader users.
(1.3.2)
CSS Generated
Content (e.g.
font icons, etc.)
Designs SHOULD NOT rely on CSS-generated content to convey information, due to incomplete
support across screen reader/browser combinations (especially IE). Supplement with CSS clipped
content in the HTML4
, aria-label/aria-labelledby (on focusable elements), or similar technique.
1.1.1









## Part 3: Interactivity & Dynamic Content

<table>
  <!-- <caption></caption> -->
  <thead>
    <tr>
      <th valign="top" align="left">Topic</th>
      <th valign="top" align="left">Accessibility Requirements </th>
      <th valign="top" align="left">WCAG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top" align="left">Heading</th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
  </tbody>
</table>


## Part 4: Understandability

<table>
  <!-- <caption></caption> -->
  <thead>
    <tr>
      <th valign="top" align="left">Topic</th>
      <th valign="top" align="left">Accessibility Requirements </th>
      <th valign="top" align="left">WCAG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top" align="left">Heading</th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
    <tr>
      <th valign="top" align="left"></th>
      <td valign="top" align="left"></td>
      <td valign="top" align="left"></td>
    </tr>
  </tbody>
</table>


<hr/>

Notes:
* Items marked with asterisk are required at the WCAG AAA level (not at the A or AA level, but are still best practices at all levels).
1 Note that the purpose of the image depends on the context, and may not be a literal description of what is in the image. The text
is usually provided via the alt attribute, but may also be provided via aria-label, aria-labelledby or, in less straightforward scenarios,
via hidden text clipped by CSS.
2 The audio descriptions can be on a separate version of the video, with a link provided to that version.
3 Refers to information published by the W3C task force on low vision https://www.w3.org/TR/2016/WD-low-vision-needs20160317/
4 Example in the HTML:
<span class="facebookFontIcon" aria-hidden=”true”></span><span class="visually-hidden">Our Facebook page</span>.
The CSS clip method:
.visually-hidden {position:absolute; clip:rect(0 0 0 0); border:0; height:1px; margin:-1px; overflow:hidden; padding:0; width:1px;}
5 Refers to the WAI-ARIA documentation (https://www.w3.org/TR/wai-aria-practices)
6 Refers to the information published by the W3C task force on cognitive disabilities https://www.w3.org/TR/coga-user-research/ 
