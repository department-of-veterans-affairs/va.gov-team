# Headings Project
## Problems to Solve
* We have one set of headings that was initially build for content pages. These headings are often amended with utility classes for pages that are more that solely content. Ideally, we would have heading stacks that worked for the contexts we have, and use limited utility classes.
* Our headings are not "linked back" to the design system documentation, so what's showing in the documentation does not necessarily reflect what's currently on the site
* There are certain design system elements that are not very accessible and often break up the hierarchy of headings (e.g. the anchor link section, notifications, and featured content).  

## Team
* Shawna Hein
* Jim Adams
* Carolyn Williams
* Liz Lantz
* Jennifer Strickland

## Content Header Stack
### Current
* [Design system typography documentation](https://design.va.gov/design/typography) defines heading stack with `h1` and `h5` in Bitter font, with all other heading sizes using Source Sans Pro.  
* Sketch file has `h1-h6` available in Bitter, and a Source Sans Pro variation for `h4-h6`; multiple sizes available for `h1` 
* The hub pages display an "On This Page" block using at `h3` heading immediately after the `h1` and intro text.
* Many spoke pages display a featured content box immediately after the `h1` and intro text.
* Sometimes `h3` heading elements are linked (e.g. in a list at the bottom of a content page)
* Apply For pages skip the `h2` heading element
#### Issues with current
* Inconsistency between Sketch file, documentation site, and va.gov
* Using the `on this page` and `featured content` blocks on the hub and spoke pages are creating an invalid heading order.
* Utility classes are being used on a one-off manner 
* Sketch library file has two sizes `h1` headings but doesn't differentiate between mobile + desktop, so it seems to have 2 competing options
* va.gov has different size headings for mobile + desktop but sizes are not specified in design system documentation, nor included Sketch file (e.g. Sketch file has only one size for `h2`)
* Linked heading elements are only underlined on focus or hover, which leaves some room for ambiguity as to whether or not it is a link.
### Proposed
* Consider heading stacks for different page types (e.g. content, tool, etc); if this is not appropriate, optimize heading stack to work across all page types
* Explore different element types/ mark up structures for components that are currently interrupting heading hierarchy
* Give those linked heading elements an underline

## Authenticated / Tool Stack
### Current

* When the [My Health](https://staging.va.gov/health-care/my-health-account-validation/error/needs-va-patient) page can't find patient information, `h3` and `h2` elements are skipped, and the **What You Can Do** heading is an `h4` element
* In the Dashboard alert components, the heading is an `h3` followed by a `div` with the class `.vads-u-font-size--h3` applied to it.
* [Find Benefits](https://staging.va.gov/my-va/find-benefits) page skips even numbered heading elements
* We've Signed You Out page skips `h2` heading element, and jumps straight to the **What You Can Do** heading as an `h3`

### Proposed
* In the Dashboard alert components, use an h4 after the h3
* **What You Can Do** heading should be used consistently across pages - `h3` makes the most sense from examples seen so far

## Featured Content
### Current
* On content pages, these boxes are typically used immediately after the `h1` and contain a heading
* Heading for the promo box lives inside the promo box as an `h3`
* In many cases, the bulk of the primary content in the page is contained in a featured content box
* Featured content boxes also appear within forms, and don't have headings
#### Issues with current
* Since they're so commonly used immediately after the `h1`, the boxes create an invalid heading order.
* Featured content is presented inconsistently in terms of heading or no heading.
* If most of the content on the page is in a box, is it diluting the impact of a "feature"?
### Proposed
* Move the heading outside of the promo box

## Notifications
### Current
* Alert component uses `h3` element for heading

#### Issues with current
* When an alert appears at the top of the page, interrupting the heading hierarchy

### Proposed

## Anchor Link Section (On This Page)
### Current
* Used on Hub pages, Pittsburg pages, and Profile pages
#### Issues with current
* Inconsistent usage of heading elements; sometimes On This Page is an `h2` with a h3 utility class, other times it's an h3
* Interrupts heading hierarchy creating an invalid heading order
### Proposed
* Is this a candidate for a definition list? Yes.
* Recommend using a `description list' semantic structure to contain this component:
```html
<dl>
  <dt>On this page</dt>
  <dd><a href="#link1">Link1</a></dd>
  <dd><a href="#link2">Link2</a></dd>
  <dd><a href="#link3">Link3</a></dd>
  <dd><a href="#link4">Link4</a></dd>
</dl>
```
* Related: https://github.com/department-of-veterans-affairs/va.gov-team/issues/4067, https://github.com/department-of-veterans-affairs/va.gov-team/issues/5125

## Alert boxes

### Current
[VA design system, alert boxes](https://design.va.gov/components/alertboxes) - used throughout VA.gov, for systemwide notices, page-level introductory content, errors.

#### Issues with curren
* May be injected anywhere in page structure, and often follows an H1 and lede, but since it is constructed with an H3 it introduces a heading level issue when there isn't an H2 before it.
* This can be confusing for screen reader and keyboard users because it doesn't follow proper semantic structure.

### Proposed
* Description list markup (wouldn't interfere with heading order, while providing semantic structure)
* Possibly use `<dialog>` , `role="alert"`, or other methods of adding semantic context and notification, as appropriate
