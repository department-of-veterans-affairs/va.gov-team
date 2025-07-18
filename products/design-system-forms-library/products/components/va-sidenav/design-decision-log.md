
## Side Nav Design Decisions - MVP Version 1 (DRAFT)


[TOC]


## **001- Mobile Component / Considerations**


* Status:Accepted
* Decision date: 6/18/2025

**Context**

* We are building a navigation component intended for use on the web. During early planning, we evaluated whether we should also create a corresponding native mobile component to support consistency across platforms.

**Decision**

* After discussions with the mobile team, it was determined that a native mobile navigation component is not required for the MVP. The mobile team confirmed that they do not have an immediate need for it, so we will focus efforts solely on the web implementation.

**Responsive Behavior**

* For responsive web experiences, we are proposing that the side navigation will transition into a top-level accordion-style menu on smaller screen sizes, instead of a drawer.  This will allow the component to remain accessible and functional.  We chose this because the design system has this as an established interaction pattern.


## **002 - USWDS considerations**

* Status: Accepted
* Decision date:  6/18/2025

**Context**

* The VA.gov Design System typically leverages components and patterns provided by the U.S. Web Design System (USWDS) to maintain consistency with federal design standards and reduce duplication of effort.

**Decision**

* We reviewed the USWDS side navigation component but decided not to fully adopt their implementation. VA.gov’s existing design and user experience for side navigation already diverge from USWDS patterns. The component has the same structure and the design is influenced by USWDS but the colors are different on the links and we added the addition of categories (spokes) 
* **Markup change from USWDS:**
* We used ‎`&lt;div>` elements with list roles instead of standard semantic HTML list elements because of technical limitations in how the navigation component is built as a web component. 
* Since the component is made up of multiple sub-components, each with its own shadow root, the child ‎`&lt;li>` elements are unable to reference or communicate with a parent ‎`&lt;ul>`. 
* This means the typical semantic relationship between list items and their parent list cannot be established, so we applied appropriate ARIA roles to ‎`&lt;div>` elements to maintain accessibility.


## **003 Side Nav linking to an anchor on the same page**

- Status: Accepted
* Date issue raised: 6/11/2025

**Context**

*  During the architecture review, a question was raised about whether the side navigation component should support menu options that link to anchors within the same page (i.e., in-page navigation).

**Decision**

*  We decided not to support anchor link functionality in V1 of the component. This decision was based on the absence of a clear use case for in-page navigation within the MVP scope. All expected use cases for V1 involve navigating between distinct pages, not within a single page.

**Rationale**

* No known MVP use cases require in-page anchor links. 

* Reducing complexity for the initial release. 

* Keeps the component focused on page-to-page navigation for now, with the option to revisit this feature in future iterations if a n**eed arises.**


## **004 - The Nav region needs an accessible name**

* The side navigation needs an accessible name to help users who rely on screen readers or other assistive technologies understand what the navigation is for. 
* To ensure a consistent and recognizable experience for all users, we decided to use the name “Related pages menu" across all implementations of the side navigation.
* This text is applied as both visible and invisible text, helping all users identify the navigation’s purpose no matter where they encounter it on the website.


## **005 - Two levels deep**


* Status: Accepted
* Decision date:  6/23/2025

**Context**


* The initial version of the side navigation component is being created to support a new category in Profile: **Communication Settings**, which includes two child links.
* Currently, the VA.gov side navigation supports up to five levels of nesting. However, the Profile use case only requires one level of depth at this time.

**Decision**

* For this implementation, the side navigation will support **up to two level deep**. This approach aligns with the immediate needs of the Profile use case and avoids complexity in the MVP. 
* We may expand support for deeper nesting in a future iteration based on broader requirements. If future enhancements change the design or structure of the component, the Profile team will be responsible for adopting those updates as needed.


## **006 - Focus style**


## **007 - Categories / Spokes**

- Status:Accepted 
- Date:6/14/2025

**Context**


* In the current structure of VA.gov facility pages, we utilize what we’ve referred to as **categories** or **spokes** to organize links and content. These items are **not treated as headings** because they **do not have a corresponding parent page**—they are simply used to group related links or sections for ease of navigation and scanning.
* This design is intentional and distinguishes category/spoke items from traditional navigation items that are nested under a parent route or page. It allows flexibility in organizing links without requiring additional content creation or page hierarchy.

**Decision**

We will **using categories/spokes** as an option, in the Side Navigation component for Profile and will continue having it as an option for facility pages which have similar layouts.

* There is **no parent page** for these groupings. 

* These are **visual and organizational aids** 

* This pattern is **already in use on facility pages** and supports user understanding without breaking accessibility or hierarchy rules. 


**Consequences**

* This decision maintains **consistency across VA.gov** facility pages.

## **008 - Will not implement accordion expand / collapse in navigation**

**Status:** Accepted 
**Date:** 6/14/2025

**Context**


* During development of the new side navigation component, a question was raised about whether the navigation should support **accordion-style expand/collapse behavior** for nested links.For the MVP version of the side navigation, this functionality is **not required**.

**Decision**

We will **not implement accordion-style expand/collapse behavior** in the side navigation for the MVP release.

**Rationale:**

* **Not needed for MVP use cases** — current navigation structures are flat

* **Unclear behavior expectations** — especially around keyboard navigation, focus management, and screen reader handling. 

* **Accessibility concerns** — expandable/collapsible regions introduce complexity and risk unless implemented with careful ARIA and focus patterns. 

* **Usability concerns** — accordion patterns in navigation can create confusion and require extra interactions for users to discover content. 


**Consequences**

* The MVP will have a **simple, static side navigation** with all links shown 

* Future enhancements can revisit accordion behavior if a strong use case arises


## **09 - Composability implementation API**

Context -[ SEE ARCHITECTURE DOCUMENT](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/design-system-forms-library/products/components/va-sidenav/properties-architecture.md)


## **010 – Automatically Adding <code>#content</code> Anchor to URLs**

**Status:** Accepted 
**Date:** 6/14/2025

**Context**

* When navigating to a new page or reloading content on VA.gov, the URL automatically includes the anchor `#content`. This behavior ensures that **keyboard and screen reader users** are directed immediately to the **main content area**, skipping repetitive navigation and banner elements.
---

**Decision**

We will **automatically add <code>#content</code> to the URL** when routing or updating the page. 
 This ensures consistency with VA.gov behavior and improves accessibility by: 

* Maintaining a consistent experience across VA.gov applications 
