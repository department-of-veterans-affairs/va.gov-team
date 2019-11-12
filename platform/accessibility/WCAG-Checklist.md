# WCAG Checklist - In Progress

Note: Based on WCAG 2.0 AA Requirements (marked with “MUST”) and best practices (marked with “*SHOULD*”)

## Part 1: Semantic Structure

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
      <th>Page title</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2"></th>
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
| **Page title** | **The page MUST have a meaningful title** (e.g. About us), even when included via iframe. <ul><li>Unique information *SHOULD* go first (e.g. “WCAG Checklist”).</li> <li>Result pages *SHOULD* describe the result (e.g. “Error on form” or “Search results loaded”).</li> <li>Single-page applications and AJAX scripts *SHOULD* update the title when the URL changes or, when the page content changes significantly.</li></ul> | [2.4.2](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html) |
| **Language** | **The page MUST specify the language** (`<html lang="en">`). | 3.1.1 |
| **Language** | **Changes in the language within the page MUST be specified** (e.g. `<span lang="es">Hola</span>`). | 3.1.2 |
| **Landmarks** | **Pages *SHOULD* have accurate, logical landmark structure** (e.g. `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`), so screen reader users can navigate by landmark, and all content SHOULD be inside a landmark. | (2.4.6) |
| **Headings** | **The page MUST have meaningful headings to label each major section**, which *SHOULD* start with `<h1>` (at the beginning of the main content, or at the beginning of every section of aggregated content, or at the beginning of modal dialogs), and *SHOULD NOT* skip heading levels, to allow screen reader users to navigate the tree structure of the heading hierarchy. | 2.4.6 |
| **Links and Navigation** <br/> (See also Custom Widgets in Part 3 for dynamic menus (drop-down accordion, etc.) | **Links MUST have readable text**. Be especially careful with links that contain only images (which need alt text) and background images/icon fonts (which need text via aria-label on the link or text within the link, hidden via CSS). | 2.4.9, 4.1.2 |
| **Links and Navigation** | **The link text MUST make sense in context, and should make sense when taken out of context** (problematic phrases include: “click here,” “learn more,” “more,” “read more,” etc.). | 2.4.4, 2.4.9 |
| **Links and Navigation** | **Linked content SHOULD be grouped in a single link where appropriate.** For example: an icon and its adjacent text SHOULD NOT be two separate links if they go to the same location. | 3.2.4 |
| **Links and Navigation**  | **Navigation features (e.g. main menu) MUST be placed in a consistent location across pages.** | 3.2.3 |
| **Links and Navigation**  | **Navigation features MUST be identified in a consistent way across pages.** | 3.2.4 |
| **Links and Navigation**  | **A “skip navigation” or “skip to main content” SHOULD be provided as the first link in the design**, to allow sighted keyboard users to quickly arrive at the main content (Note: the link can be invisible until the user tabs to it, but it MUST NOT remain invisible when it receives keyboard focus). | 2.4.5 |
| **Tables** | **Header cells (`<th>`) MUST be associated with their respective data cells** (via scope or headers + id). | 1.3.1 |
| **Tables** | **Tables SHOULD have an accessible name** (e.g. `<caption>`, aria-label, or aria-labelledby). | (4.1.2) |
| **Tables** | **Layout tables (no header/data associations) MUST NOT contain `<th>` or other header markup.** | 1.3.1 |
| **Lists** | **Lists MUST be marked up appropriately** according to the semantics of the list (e.g. `<ul>`, `<ol>`, `<dl>`). | 1.3.1 |
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
