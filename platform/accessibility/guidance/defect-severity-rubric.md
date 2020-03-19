# Accessibility Defect Severity Rubric

This document will provide a common language for determining accessibility defect seriousness. It will capture the following things:

1. Defect severity
2. Timeline to fix the defect. Please note,  `508-defect-0` and `508-defect-1` are launch blockers.
3. Potential users impacted by the defect

The severity rubric aligns to both the [axe-core rule descriptions](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md) severity descriptions and human impact.

## Table of Contents

* [Launch Blocking Issues](#launch-blocking-issues)
  * [Defect 0: Potentially Harmful](#508-defect-0)
  * [Defect 1: Critical](#508-defect-1)
* [Post-launch Issues](#post-launch-issues)
  * [Defect 2: Serious](#508-defect-2)
  * [Defect 3: Minor](#508-defect-3)
  * [Defect 4: Trivial](#508-defect-4)

## Launch Blocking Issues

**❗️ Must be fixed before production launch.**

`508-defect-0` and `508-defect-1` issues have the potential to make an application unusable for a significant group of users.

---
### 508-defect-0

**❗️ Potentially Harmful. Must be fixed immediately.**

These issues have the potential to cause life-threatening situations and should be be remediated before work starts or continues on `508-defect-1` issues. Our audience has a higher incidence of traumatic brain injury (TBI) and post-traumatic stress disorder (PTSD), so we need to correct these issues immediately.

#### Types of issues:

* Applications must not have [high flicker rates](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) (could trigger epileptic seizures)
  * [Three Flashes or Below Threshold: Understanding SC 2.3.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html)
* Motion or movement should not cover a high percentage of the screen. This could lead to possible [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/).
  * [WCAG2.1 Understanding Success Criterion 2.2.2: Pause, Stop, Hide](https://www.w3.org/WAI/WCAG21/Understanding/pause-stop-hide.html)

#### Potential impact:

* Users who have photosensitivity or seizure disorders
* Users who have [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/) like motion sickness

---
### 508-defect-1

**❗️ Critical. Must be fixed before launch.**

These issues have the potential to severly disrupt the user experience and must be fixed before VSP will certify a staging accessibility review.

#### Types of issues:

* [Focus must be managed for single-page applications](https://adhocteam.us/2018/02/20/developer-driven-focus-management-for-single-page-applications/)
  * [Name, Role, Value: Understanding SC 4.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html)
* Keyboard must not trap focus
  * [No Keyboard Trap: Understanding SC 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)
  * [Examples of Success Criterion 2.1.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html#keyboard-operation-trapping-examples-head)
  * Content must be reachable without a pointer device like a mouse:
  * UI or form controls must be reachable by `TAB` or `SHIFT + TAB`
  * UI or form controls must be reachable by screen reader shortcuts or menu options
* Errors in automated tools like [aXe browser plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT) must be fixed
* [Videos must have captioning](https://www.w3.org/WAI/perspective-videos/captions/)
  * [Captions (Prerecorded): Understanding SC 1.2.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/media-equiv-captions.html)
* [Color contrast issues](https://webaim.org/articles/contrast/) must be corrected
  * [Contrast (Minimum): Understanding SC 1.4.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
* [Form inputs must have semantic labels](https://www.w3.org/WAI/tutorials/forms/labels/)
  * [Labels or Instructions: Understanding SC 3.3.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html)
* [Content being added or removed from the page must announce a change to assistive devices](https://fae.disability.illinois.edu/rulesets/WIDGET_14/)
* Improper `aria` attributes or missing IDs must be corrected. See the [rules of ARIA use](https://www.w3.org/TR/using-aria/#NOTES).
* Elements that can receive focus must have a yellow focus halo. This includes buttons, links, form inputs, textareas, and custom components. The following CSS rule should be present on the element that has keyboard focus. See [WCAG2.1 Understanding Success Criteria 2.4.7: Focus Visible](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)
  
  ```css
  outline: 2px solid #f9c642;
  ```

#### Potential impact:

* Users who navigate by keyboard
* Users who navigate by screen reader, magnification software, or other assistive device
* Users who have low-vision, partial vision, or are blind
* Users who are hard of hearing or deaf
* Users with short-term memory or other cognitive issues

## Post-launch Issues

**⚠️ Should be fixed as soon as possible**

`508-defect-2` and `508-defect-3` issues have the potential to degrade the user experience and should be fixed as soon as possible. These issues may have a short or long time horizon; some are violations, others are suggested improvements.

---
### 508-defect-2

**⚠️ Serious. Should be fixed in 1-2 sprints post-launch.**

These issues have the potential to disrupt the user experience and should be fixed before production launch if possible, or prioritized in the first 1-2 sprints post-launch. These issues will not delay your product launch.

#### Types of issues:

* Page `<title>` tags should update on every route (URL) change. This includes single-page apps (SPAs).
  * `<h1>` should match the `<title>` or be included in the `<title>`
    * Example title: Check your appeals status | VA.gov
    * Example heading: Check your appeals status
  * [Page Titled: Understanding SC 2.4.2](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html)
* [Zoomed layouts](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) must support use without horizontal scrolling, or have difficult to read text. Horizontal scrolling is allowed for data tables, images, or other rich media.

* Color blindness issues must be corrected. A common example is color being used to distinguish links from plain text.
* Labels or calls to action must be descriptive to assistive devices. Some examples include:

  * A button to edit a form in place. The button says "Edit", but doesn't answer "Edit...what?" to a screen reader. The user is asked to work back through the page and listen for a heading or key text to identify what this button might do.

  * A button labeled "Learn more" that expands an accordion. Again, screen reader users are left to figure out what they might be learning more about.

  * This issue is listed as a `508-defect-2` because non-descript labels can reduce the overall experience for screen reader users. These labels usually appear in repeated UI controls, increasing the cognitive load on users.

  * This issue can be remediated in a couple of ways:

    ```html
    /*
     * Best if you need to support language translation
     */
    <button>
      <span aria-hidden="true">Edit</span>
      <span class="sr-only">Edit street address</span>
    </button>
    ```

    ```html
    /*
     * Less markup, but does not support language translation
     * https://adrianroselli.com/2019/11/aria-label-does-not-translate.html
     */
    <button aria-label="Edit street address">Edit</button>
    ```
  * Accessible labels must be included in visual labels
  * [WCAG2.1 Understanding Success Criterion 2.5.3: Label in Name](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html)

* Applications must have a [logical source order](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

* HTML should use meaningful landmarks. These include:

  * `<banner>`
  * `<navigation>`
  * `<main>`
  * `<aside>`
  * `<footer>`
  * divs with `role` attributes.

* HTML must have properly nested headings. Adding an `<h4>` as the first heading underneath an `<h2>` is an example of improper nesting. The [WebAIM WAVE](https://wave.webaim.org/) or [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en) browser plugins  provide visual representations of heading nesting.

#### Potential impact:

* Users who navigate by keyboard
* Users who navigate by screen reader, magnification software, or other assistive device
* Users who have low-vision, partial vision, or are blind
* Users who are hard of hearing or deaf
* Users with short-term memory or other cognitive issues

---
### 508-defect-3

**⚠️ Minor. Should be fixed in 1-3 sprints post-launch.**

These issues have the potential to disrupt the user experience and should be fixed as time allows in the first 1-3 sprints post-launch.

#### Types of issues:

* [Invalid HTML](https://validator.w3.org/) (non-semantic, badly formed) must be fixed
  * [Parsing: Understanding SC 4.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)
* Errors in early release tools like [axe-coconut](https://www.deque.com/axe/axe-for-web/early-release/) should be fixed
* Best practice warnings in automated scanning tools like [aXe browser plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT) should be fixed

#### Potential impact:

* Users who navigate by screen reader, magnification software, or other assistive device
* Users who have low-vision, partial vision, or are blind
* Users who navigate by keyboard

---
### 508-defect-4

**✔️ Trivial. Consider fixing or exploring in 2-4 sprints post-launch.**

These issues and items to consider can improve the experience for assistive technology users and those with other challenges. These issues might include research and design iteration, so they have a longer timeline for entering production.

#### Types of issues:

* Best practice warnings in early release tools like [axe-coconut](https://www.deque.com/axe/axe-for-web/early-release/) should be fixed
* Less semantic HTML (using `<ul>` instead of `<ol>` for sequential instructions, for instance) should be fixed
  * [Parsing: Understanding SC 4.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html)

#### Potential impact:

* Users who navigate by keyboard
* Users who navigate by screen reader, magnification software, or other assistive device
* Users who have low-vision, partial vision, or are blind
* Users who are hard of hearing or deaf
* Users with short-term memory or other cognitive issues
