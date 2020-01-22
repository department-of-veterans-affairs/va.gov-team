# Page navigation (See also folder called left-nav: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/left-nav )

These components are the primary way users navigate static content pages on VA.gov.

## Design principles and rules for when a user is on a VA website that is not VA.gov
* Users should get to all content and tools in just 1-2 clicks/taps
* Users should know what page they are on and what section that are in

## Design and development
* Page navigation components are only built for VA.gov, for the global UX on VA.gov

---

## 2019 Work
Here is something to start with. The below content should get moved into an epic and expanded on (and then deleted from this page).

### Design problems for users on VA.gov
* Users forget what page they are on after scrolling past the page heading (H1)
* Users do not know (i.e., no visual affordance or ability to preview) there are children or grandchildren pages in a section of content using the current left-hand page menu
* Users are distracted by the menu item selected state (and often interpret it as their call to action, instead of focusing on the call to action on the content page)

### Design goals for new VA.gov header, footer, and navigation
* Get users to all content and tools in just 1-2 clicks/taps
* Allow users to "preview" all content pages in a section of content
* Only allow for four levels of menu/page publishing:
  1. Spoke (no content; use as a label, and do not publish in URL)
  2. Parent
  3. Child
  4. Grandchild
* Optimize for mobile navigation and scrolling
* Consider making headings, subheadings, and sections sticky for better wayfinding

### Implementation notes
* We will initially desing and build the new navigation for va.gov/pitssburgh-health-care
* we will then figure out how to apply the new navigation to the 9 benefit hubs
  * When this work happens, we will need to make an enhancement in Drupal that limits menus from being built deeper than 4 levels
