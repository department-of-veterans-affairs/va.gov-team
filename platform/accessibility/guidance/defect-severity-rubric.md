# Accessibility Defect Severity Rubric

This document will provide a common language for determining accessibility defect seriousness. It will capture the following things:

1. Defect severity
2. Timeline to fix the defect. Please note,  `508-defect-0` and `508-defect-1` are launch blockers.
3. Potential users impacted by the defect

## Table of Contents

* [Defect 0: Showstopper](#508-defect-0)
* [Defect 1: Critical](#508-defect-1)
* [Defect 2: Serious](#508-defect-2)
* [Defect 3: Minor](#508-defect-3)
* [Defect 4: Trivial](#508-defect-4)

## 508-defect-0

**❗️ Showstopper. Must be fixed immediately.**
These issues have the potential to cause life-threatening situations and should be be remediated before work starts or continues on `508-defect-1` issues.

### Types of issues:

* [High flicker rates](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) (could trigger epileptic seizures)
* Motion or movement that covers a high percentage of the screen (possible [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/))

### Potential impact:

* Users who have photosensitivity
* Users who have [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/) like motion sickness

## 508-defect-1

**❗️ Critical. Must be fixed before production launch.**
These issues have the potential to severly disrupt the user experience and must be fixed before VSP will certify a staging accessibility review.

### Types of issues:

* [Not managing focus for single-page applications](https://adhocteam.us/2018/02/20/developer-driven-focus-management-for-single-page-applications/)

* [Keyboard traps](https://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation-trapping.html)

* Content is unreachable without a pointer device like a mouse (custom or native elements)

  * UI or form controls unreachable by `TAB` or `SHIFT + TAB`
  * UI or form controls that cannot be reached by screen reader shortcuts or menu options

* Critical errors in automated scanning tools like [aXe browser plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)

* [Videos without captioning](https://www.w3.org/WAI/perspective-videos/captions/)

* [Color contrast issues](https://webaim.org/articles/contrast/)

* [Missing form labels or badly structured form inputs](https://www.w3.org/WAI/tutorials/forms/labels/)

* [Content being added or removed from the page without announcing a change to assistive devices](https://fae.disability.illinois.edu/rulesets/WIDGET_14/)

* Improper `aria` attributes or missing IDs

* Elements that can receive focus that do not include a yellow focus halo. This includes buttons, links, form inputs, textareas, and custom components. The following CSS rule should be present on the element that has keyboard focus.

  ```css
  outline: 2px solid #f9c642;
  ```

### Potential impact:

* Users who navigate by keyboard
* Users who navigate by screen reader or other assistive device
* Users who have partial vision or are blind
* Users who are hard of hearing or deaf
* Users with identified short-term memory or other cognitive issues

## 508-defect-2

**⚠️ Serious. Should be fixed before production launch.**
These issues have the potential to disrupt the user experience and should be fixed before production launch if possible, or prioritized for near-term fix post-launch.

### Types of issues:

* Serious errors in automated scanning tools like [aXe browser plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* [Zoomed layouts](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) do not support use without horizontal scrolling, or have difficult to read text. Horizontal scrolling is allowed for data tables, images, or other rich media.
* Color blindness issues (color is the only way to determine links from plain text, for instance)
* Labels or calls to action that are not descriptive enough for assistive devices ("Edit...what?")
* Unusual source order or click path
* Content that is too far removed from an explanation, or with no explanation at all
* Missing landmark HTML. This includes:
  * `<banner>`
  * `<navigation>`
  * `<main>`
  * `<aside>`
  * `<footer>`
  * divs with `role` attributes.
* Improper heading nesting. Adding an `<h4>` as the first heading underneath an `<h2>` is an example of improper nesting. The [WebAIM WAVE](https://wave.webaim.org/) or [headingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en) browser plugins  provide visual representations of heading nesting.

### Potential impact:

* Users who navigate by keyboard
* Users who navigate by screen reader or other assistive device
* Users who have partial vision or are blind
* Users who are hard of hearing or deaf
* Users with identified short-term memory or other cognitive issues

## 508-defect-3

**⚠️ Minor. Should be fixed in 1-3 sprints post-launch.**
These issues have the potential to disrupt the user experience and should be fixed as time allows in the first 1-3 sprints post-launch.

### Types of issues:

* Errors in early release tools like [axe-coconut](https://www.deque.com/axe/axe-for-web/early-release/)
* Best practice warnings in automated scanning tools like [aXe browser plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* [Invalid HTML](https://validator.w3.org/) (non-semantic, badly formed)

### Potential impact:

* Users who navigate by screen reader or other assistive device
* Users who have partial or low vision
* Users who navigate by keyboard

## 508-defect-4

**✔️ Trivial. Consider fixing or exploring in 2-4 sprints post-launch.**
These issues and items to consider can improve the experience for assistive technology users and those with other challenges. These issues might include research and design iteration, so they have a longer timeline for entering production.

### Types of issues:

* Best practice warnings in early release tools like [axe-coconut](https://www.deque.com/axe/axe-for-web/early-release/)
* Less semantic HTML (using `<ul>` instead of `<ol>` for sequential instructions, for instance)

### Potential impact:

* Users who navigate by keyboard
* Users who navigate by screen reader or other assistive device
* Users who have partial vision or are blind
* Users who are hard of hearing or deaf
* Users with identified short-term memory or other cognitive issues
