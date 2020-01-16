# WCAG Checklist _(Work-in-Progress)_

Section 508 Compliance references WCAG 2.0 Level A and Level AA Success Criteria and Conformance Requirements. WCAG 2.0 is the standard teams have used since January of 2017. In 2019, WCAG 2.1 was released and is expected to become the standard for compliance.

Note: Based on WCAG 2.0 AA Requirements (marked with “MUST”) and best practices (marked with “*SHOULD*”)
*(Based on https://www.jenstrickland.design/talks/design4performance-a11y/resources/WCAG_Checklist.pdf)*

## Part 1: Semantic Structure

*Rebuilding the table in HTML to use rowspan*

<table>
  <!-- <caption></caption> -->
  <thead>
    <tr>
      <th>Topic</th>
      <th>Accessibility Requirements </th>
      <th>WCAG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th valign="top">
        Page title
      </th>
      <td>
        <strong>The page MUST have a meaningful title</strong> (e.g. About us), even when included via iframe. 
        <ul>
          <li>Unique information *SHOULD* go first (e.g. “WCAG Checklist”).</li> 
          <li>Result pages <em>SHOULD</em> describe the result (e.g. “Error on form” or “Search results loaded”).</li> 
          <li>Single-page applications and AJAX scripts <em>SHOULD</em> update the title when the URL changes or, when the page content changes significantly.</li>
        </ul>
      </td>
      <td valign="top">
        <a href="https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html">2.4.2</a>
      </td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">
        Language
      </th>
      <td>
        <strong>The page MUST specify the language</strong> (&#60;html lang="en"&#62;).
      </td>
      <td valign="top">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html">3.1.1</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Changes in the language within the page MUST be specified</strong> (e.g. &#60;span lang="es"&#62;Hola&#60;/span&#62;).
      </td>
      <td valign="top">
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-other-lang-id.html">3.1.2</a>
      </td>
    </tr>
    <tr>
      <th>Landmarks</th>
      <td>
        <strong>Pages <em>SHOULD</em> have accurate, logical landmark structure</strong> (e.g. &#60;header&#62;, &#60;nav&#62;, &#60;main&#62;, &#60;aside&#62;, &#60;footer&#62;), so screen reader users can navigate by landmark, and all content SHOULD be inside a landmark.
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">2.4.6</a>
      </td>
    </tr>
    <tr>
      <th>Headings</th>
      <td>
        <strong>The page MUST have meaningful headings to label each major section</strong>, which <em>SHOULD</em> start with &#60;h1&#62; (at the beginning of the main content, or at the beginning of every section of aggregated content, or at the beginning of modal dialogs), and <em>SHOULD NOT</em> skip heading levels, to allow screen reader users to navigate the tree structure of the heading hierarchy.
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-descriptive.html">2.4.6</a>
      </td>
    </tr>
    <tr>
      <th rowspan="6" valign="top">
        Links and Navigation<br/>
        <p style="font-weight:300;">(See also Custom Widgets in Part 3 for dynamic menus (drop-down accordion, etc.)</p>
      </th>
      <td>
        <strong>Links MUST have readable text</strong>. Be especially careful with links that contain only images (which need alt text) and background images/icon fonts (which need text via aria-label on the link or text within the link, hidden via CSS).
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2</a>, <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html">2.4.9</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>The link text MUST make sense in context, and should make sense when taken out of context</strong> (problematic phrases include: &ldquo;click here,&rdquo; &ldquo;learn more,&rdquo; &ldquo;more,&rdquo; &ldquo;read more,&rdquo; etc.).
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-link.html">2.4.9</a>, <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html">2.4.4</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Linked content SHOULD be grouped in a single link where appropriate</strong>. For example: an icon and its adjacent text SHOULD NOT be two separate links if they go to the same location.
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html">3.2.4</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Navigation features (e.g. main menu) MUST be placed in a consistent location across pages</strong>.
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-locations.html">3.2.3</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Navigation features MUST be identified in a consistent way across pages</strong>.
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-consistent-functionality.html">3.2.4</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>A &ldquo;skip navigation&rdquo; or &ldquo;skip to main content&rdquo; SHOULD be provided as the first link in the design</strong>, to allow sighted keyboard users to quickly arrive at the main content (Note: the link can be invisible until the user tabs to it, but it MUST NOT remain invisible when it receives keyboard focus).
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-mult-loc.html">2.4.5</a>
      </td>
    </tr>
    <tr>
      <th rowspan="3" valign="top">Tables</th>
      <td>
        <strong>Header cells (&#60;th&#62;) MUST be associated with their respective data cells</strong> (via scope or headers + id).
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>
      </td>
    </tr>
    <tr>
      <td>
        <strong>Tables SHOULD have an accessible name</strong> (e.g. &#60;caption&#62;, aria-label, or aria-labelledby).
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2</a>
      </td>
    </tr>
    <tr>
      <td>
         <strong>Layout tables (no header/data associations) MUST NOT contain &#60;th&#62; or other header markup.</strong>
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>
      </td>
    </tr>
    <tr>
      <th>Lists</th>
      <td>
        <strong>Lists MUST be marked up appropriately</strong> according to the semantics of the list (e.g. &#60;ul&#62;, &#60;ol&#62;, &#60;dl&#62;).
      </td>
      <td>
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1</a>
      </td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
</tbody>
</table>


| Topic      | Accessibility Requirements                                                                                                                                                                                                                                                                                                                                                                       | WCAG  |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| **iframes** | **Frame title attribute MUST be specified** (`<iframe title="Video about..."`). | 4.1.2 |
| **iframes** | **The page within the iframe MUST have an accurate, meaningful 1`<title>`1.** | 2.4.2 |
| **iframes** | **Iframes with no readable content (e.g. only JavaScript) SHOULD be set to aria-hidden="true".** | (4.1.2) |
| **Form Markup** <br/> (See also Form Validation and Feedback in Part 3) | **Inputs, buttons, and controls MUST have labels which are programmatically-associated** (e.g. via `<label>`, aria-label, or aria-labelledby) **and always visible on the screen** (they don’t disappear when the user starts typing). | 1.3.1, 3.3.2 |
| **Form Markup** <br/> (See also Form Validation and Feedback in Part 3) | **Required fields SHOULD be marked as such**, e.g. via aria-required="true" (on the input, not on the label), or have the word “required” in the `<label>` text. | 3.3.2 |
| **Form Markup** <br/> (See also Form Validation and Feedback in Part 3) | **Form field instructions SHOULD be associated with inputs or buttons** using techniques such as: Putting the instructions in the `<label>`. Associating the instructions with the field using aria-describedby (Note: text associated via aria-describedby *SHOULD* be relatively brief). Putting the instructions in a `<fieldset>` with `<legend>` | 3.3.2 |
| **Form Markup** <br/> (See also Form Validation and Feedback in Part 3) | **Groups of form elements MUST have group labels** (e.g. `<fieldset>` and `<legend>`, or referenced from the inputs via aria-labelledby="id-of-group-label id-of-self-label" ). | 1.3.1 |
| **Parsing and Validity** | **The page MUST NOT contain duplicate IDs** because accessibility features frequently reference IDs. | 4.1.1 |
| **Parsing and Validity** | **Attributes (e.g. ARIA) MUST contain only allowable values, in the proper parent-child hierarchy.** | 4.1.1 |
| **Parsing and Validity** | **Parent-child relationships of elements & attributes (e.g. ARIA roles) MUST follow the specification.** | 4.1.1 |
| **Parsing and Validity** | **The page MUST NOT contain syntax errors that affect semantic meaning** (e.g. elements or attributes that don’t close properly, either explicitly or implicitly). | 4.1.1 |

## Part 2: Sight & Sound

<table>
  <!-- <caption></caption> -->
  <thead>
    <tr>
      <th>Topic</th>
      <th>Accessibility Requirements </th>
      <th>WCAG</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2">Heading</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>

| Topic      | Accessibility Requirements                                                                                                                                                                                                                                                                                                                                                                       | WCAG  |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
| **Word** | Word | Numbers |
