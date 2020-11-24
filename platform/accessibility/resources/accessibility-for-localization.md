# Accessibility for localization
Adding a placeholder to collect notes from early discussion with DEPO Content Lead

## Points to consider
* Google Translate (and other machine translations) won't automatically translate hidden content that's only for screen readers. And if human translators are only reviewing the visible content on a page, they'll miss it as well. Therefore, we need to incorporate into our translation process a step to check the template/source content and update `aria-label` and screen reader only content.
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
  
* We'll also want to make sure that `aria-labels` contain full phrases so that the text translates accurately. For example, if a button's visible text is "Enroll now," the aria label text should include "Enroll now in VA health care."
* Accessibility experts can provide more guidance for how to make translated content successful for screen readers.
* We can also wrap individual pieces of translated content in `"lang-es"` so that screen readers will use the right pronunciation to read the translated text. We are going to try this in a test environment for the block of helper text on [va.gov/health-care/how-to-apply](va.gov/health-care/how-to-apply).
  * https://codepen.io/tpierce_402/full/wvWZJdB offers two "How to apply" content blocks
    * The first expandable section has `lang="es"` on the container. This causes screen readers to change their pronunciation and inflection to better localize the Spanish content.
    * The second content block will be read as Spanish, but the screen reader will attempt to pronounce words as English.
  * We should be using the `lang` attribute on containers when we change languages for part of a page
  * We should be using the `lang` attribute on the HTML tag when an entire page is in a single language. Examples:
    * Default: `<html lang="en">` for pages in English
    * Español: `<html lang="es">` when entire pages are in Spanish
