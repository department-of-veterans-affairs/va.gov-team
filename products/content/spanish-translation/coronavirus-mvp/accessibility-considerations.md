# Accessibility considerations for translation

## Meeting notes 11.12.20

**Attendees:** Fareez Ahmed, Trevor Pierce, Danielle Thierry

- Google Translate (and other machine translations) won't automatically translate hidden content that's only for screen readers. And if translators are only reviewing the visible content on a page, they'll miss it as well. Therfore, we need to incorporate into our translation process a step to check the template/source content and update all aria label and sr-only content.
- We'll also want to make sure that aria labels contain full context so that it translates accurately. For example, if a button's visible text is "Enroll now," the aria label text should include "Enroll now in VA health care."
- Accessibility experts can provide more guidance for how to make translated content successful for screen readers.
- We can also wrap individual pieces of translated content in "lang-es" so that screen readers will use the right pronunciation to read the translated text. We are going to try this in a test environment for the block of helper text on va.gov/health-care/how-to-apply.
