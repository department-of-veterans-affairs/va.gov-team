# Primary header and footer

These components are the primary way users navigate VA.gov. The primary harder and footer are designed to center the global UX on VA.gov around benefits content and tools.

## Design principles and rules for when a user is on a VA website that is not VA.gov
* Users should get to all content and tools in just 1-2 clicks/taps
* Users should have a way to get to the Veterans Crisis Line
* Users should have access to federally required links in the footer

## Design and development
* The primary header and footer is maintained by the VA.gov Platform team
* The primary header and footer is dynamically applied/updated to select legacy subdomains (benefits.va.gov and cem.va.gov (i.e., if we update something in the source file, then it automatically updates on all VA websites that are using the secondary header and footer) 

---

## 2019 Work
Here is something to start with. The below content should get moved into an epic and expanded on (and then deleted from this page).

### Design problems for users on VA.gov
* Users do no notice/don't clikc on the "Find a VA Location" menu item (on desktop)
* Users do not notice when they are signed in and the account menu replaces the sign in button
* Users heavily rely on search to get to everything
* Users do not notices the Veterans Crisis Line utility (i.e., banner blindness)

### Design goals for new VA.gov header, footer, and navigation
* Get users to all content and tools in just 1-2 clicks/taps
* Increase visual emphasis/affordance on Facility Locator and Sign In/Account menu items
  * The design for both should be adjusted for when a user is signed out vs. signed in
* Optimize Facility Locator and Sign In/Account design for mobile
* Add Tier 2 content menu
* Further iterate or flesh out Tier 3 content menu (should this move to the footer?)
* Remove visual and UX differentiation between main menus (e.g, "VA Benefits and Health Care") and global utilities (e.g., "Search")

### Implementation notes
* We need to continue to apply the primary header and footer to these two subdomains: benefits.va.gov and cem.va.gov
* We need to create or update design guidelines on all elements in the primary VA.gov header and footer on design.va.gov
