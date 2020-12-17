# Accessibility for localization
This document is the DEPO Platform reference for localization accessibility best practices. This guidance is written with an emphasis on Spanish as of December 2020.

## Points to consider
* Google Translate (and other machine translations) won't automatically translate hidden content that's only for screen readers. And if human translators are only reviewing the visible content on a page, they'll miss it as well. Therefore, we need to incorporate into our translation process a step to check the template/source content and update **aria-label** and screen reader only content.
  ```diff
  ! aria-label will be announced instead of the visual text
  
  <a
  - aria-label="Submit my application for education benefits"
  + aria-label="Presentar mi solicitud de beneficios educativos"
    href="#"
  >Presentar mi solicitud</a>
  ```
  
  ```diff
  ! Screen reader only text must be updated with the visual text to ensure good localization
  
  <a href="#">
    Presentar mi solicitud
  - <span class="vads-u-visibility--screen-reader"> for education benefits</span>
  + <span class="vads-u-visibility--screen-reader"> de beneficios educativos</span>
  </a>
  ```
  
* We'll also want to make sure that **aria-labels** contain full phrases so that the text translates accurately. For example, if a button's visible text is "Submit my application", the aria-label text might be "Submit my application for education benefits".
* Accessibility experts can provide more guidance for how to make translated content successful for screen readers.
* We can also wrap content in localized containers: 
  ```html
  <!-- This content will be read in Spanish -->
  <div lang="es">
    Localized Spanish content
  </div>
  ````
  We are going to try this in a test environment for the block of helper text on [va.gov/health-care/how-to-apply](va.gov/health-care/how-to-apply).
  * https://codepen.io/tpierce_402/full/wvWZJdB offers two **"How to apply"** content blocks
    * The first expandable section has `<div lang="es">` declared on the container. This causes screen readers to change their pronunciation and inflection to  localize the Spanish content.
    * The second content block will be read as Spanish, but the screen reader will attempt to pronounce words in English.
  * We should be using the **lang** attribute on containers when we change languages for part of a page
  * We should be using the **lang** attribute on the HTML tag when an entire page is in a single language. Examples:
    * Default: `<html lang="en">` for pages in English
    * Español: `<html lang="es">` when entire pages are in Spanish
