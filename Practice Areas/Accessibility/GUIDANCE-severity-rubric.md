# Accessibility Defect Rubric
This document will provide a common language for determining accessibility defect seriousness. It will capture the following things:

1. Defect severity
2. Potential users impacted by the defect
3. Timeframe in which the defect should be fixed

## Severity: Show Stopper (Level 0)

### Type of issue:
* Keyboard traps
* Content is unreachable without a pointer device like a mouse (custom or native elements)
* [High flicker rates](https://www.w3.org/TR/UNDERSTANDING-WCAG20/seizure-does-not-violate.html) (could trigger epileptic seizures)
* Motion or movement that covers a high percentage of the screen (possible [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/))

### Potential Users Impacted
* Keyboard
* Screen reader, assistive devices
* Those who have [vestibular issues](https://a11yproject.com/posts/understanding-vestibular-disorders/) like motion sickness
* Those who are have photosensitivity

### Time to Fix
* Issue must be fixed before launch

## Severity: Critical (Level 1)

### Type of issue:
* Critical errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Inaccessible rich content like video without captioning
* Color contrast issues
* Missing form labels, explanations
* Dynamic content being added or removed from the page without announcing a change to assistive devices
* UI or form controls unreachable by `TAB` or `SHIFT + TAB`
* Content without a good, clear focus halo

### Potential Users Impacted
* Keyboard
* Screen reader, assistive devices
* Low vision users
* Users who are deaf, hard of hearing

### Time to Fix
* Issue should be prioritized for next sprint fix if possible

## Severity: Serious (Level 2)

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
* Screen reader, assistive devices
* Low vision users
* Users who have an identified issue seeing or more colors
* Keyboard users
* Users with identified short-term memory, other cognitive issues

### Time to Fix
* Issue should be prioritized for next 1-3 sprint fix

## Severity: Minor (Level 3)

### Type of issue:
* Minor errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Invalid HTML (non-semantic, badly formed)

### Potential Users Impacted
* Screen reader, assistive devices
* Low vision users
* Keyboard users

### Time to Fix
* Issue should be prioritized for next iteration (often 3 sprints in length)
* These issues are often good items when engineers have a few extra hours at the end of a sprint

## Severity: Trivial (Level 4)

### Type of issue:
* Trivial, best practices errors in automated testers like [aXe plugin](https://www.deque.com/axe), [SortSite](https://www.powermapper.com/products/sortsite/), [AATT](https://github.com/paypal/AATT)
* Invalid HTML (non-semantic, badly formed)
* Less semantic HTML (using `<ul>` instead of `<ol>` for sequential instructions, for instance

### Potential Users Impacted
* Screen reader, assistive devices
* Low vision users
* Keyboard users
* Users with identified short-term memory, other cognitive issues

### Time to Fix
* Issue should be prioritized for next iteration (often 3 sprints in length)
* These issues are often good items when engineers have a few extra hours at the end of a sprint
