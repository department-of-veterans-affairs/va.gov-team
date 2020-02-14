# Accessibility Defect Severity Rubric
This document will provide a common language for determining accessibility defect seriousness. It will capture the following things:

1. Defect severity
2. Potential users impacted by the defect
3. Timeframe in which the defect should be fixed

## 508-defect-0 (Showstopper)

### Type of issue:
* Keyboard traps
* Content is unreachable without a pointer device like a mouse (custom or native elements)
* [High flicker rates](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) (could trigger epileptic seizures)
* Motion or movement that covers a high percentage of the screen (possible [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/))

### Potential Users Impacted
* Keyboard navigation
* Screen reader or other assistive device
* Users who have partial vision or are blind
* Users who are hard of hearing or deaf
* Those who have [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/) like motion sickness
* Those who have photosensitivity

### Time to Fix
* Issue **must be fixed before launch**

## 508-defect-1 (Critical)

### Type of issue:
* Critical errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Inaccessible rich content like video without captioning
* Color contrast issues
* Missing form labels and explanations
* Dynamic content being added or removed from the page without announcing a change to assistive devices
* UI or form controls unreachable by `TAB` or `SHIFT + TAB`
* Content without a good, clear focus halo

### Potential Users Impacted
* Keyboard navigation
* Screen reader or other assistive device
* Users who have partial vision or are blind
* Users who are hard of hearing or deaf

### Time to Fix
* Issue **must be fixed before launch**

## 508-defect-2 (Serious)

### Type of issue:
* Serious errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Zoomed layouts do not support use without horizontal scrolling, difficult to read text
* Color blindness issues (color the only distinguishing element, for instance)
* Labels or calls to action that are not descriptive enough for assistive devices ("Edit...what?")
* Unusual source order or click path
* Dynamic content being added or removed from the page without announcing a change to assistive devices
* Content that is too far removed from an explanation, or with no explanation at all
* Missing landmark HTML. This includes banner, navigation, main, aside, footer elements, or divs with role attributes.
* Improper headings, nesting
* Improper ARIA attributes, missing IDs
* [Not managing focus for single-page applications](https://adhocteam.us/2018/02/20/developer-driven-focus-management-for-single-page-applications/)

### Potential Users Impacted
* Keyboard navigation
* Screen reader or other assistive device
* Users who have partial vision or are blind
* Users who are hard of hearing or deaf
* Users with identified short-term memory or other cognitive issues

### Time to Fix
* Issue should be prioritized for fix 1-2 sprints post-production launch

## 508-defect-3 (Minor)

### Type of issue:
* Minor errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Invalid HTML (non-semantic, badly formed)

### Potential Users Impacted
* Screen reader, assistive devices
* Low vision users
* Keyboard users

### Time to Fix
* Issue should be prioritized for next iteration (often 3 sprints in length) or sooner if time allows
* These issues are often good items for engineers to pick up when they have a few extra hours at the end of a sprint

## 508-defect-4 (Trivial)

### Type of issue:
* Trivial, best practices errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Invalid HTML (non-semantic, badly formed)
* Less semantic HTML (using `<ul>` instead of `<ol>` for sequential instructions, for instance

### Potential Users Impacted
* Keyboard navigation
* Screen reader or other assistive device
* Users who have partial vision or are blind
* Users with identified short-term memory or other cognitive issues

### Time to Fix
* Issue should be prioritized for next iteration (often 3 sprints in length) or sooner if time allows
* These issues are often good items for engineers to pick up when they have a few extra hours at the end of a sprint
