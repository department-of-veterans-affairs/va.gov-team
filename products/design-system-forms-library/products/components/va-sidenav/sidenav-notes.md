## DO:
1. Focus on supporting the IIR/AE teams Profile request for their near-term launch, noting they:
  - Have a need for a sidenav that includes a 'category' field for **some**, not all of the Level 2 links
  - Do not currently have a need for a level 3 (but AE indicated this may change in future)

2. Lean on USWDS implementation/design as much as we can, noting that:
  - It does not show non-linkable "category" labels
  - It does not use accordions
  - It does not show level 4+ links

## DO NOT:
  1. Build something that has very limited future use
  2. Build something that breaks existing navigation patterns
  3. Build something that needs to be "undone" later
  4. Allow new features & requests introduce scope creep for the initial release, but keep a record of these requests for future releases
  
## Sidenav patterns known to exist in production today:

### "Common"
- Supports diving down into *n* levels
- This pattern is sometimes referred to as "site" or "main" navigation and is most common on va.gov    
- Can be found while navigating most hub pages/sections
- Sidenav is NOT located on Level 1 page
- ALL and ONLY level 2 links have a category **accordions**
- "Grandchild" links are NOT shown until its "parent" page is the active page
- Once a user selects a parent link that has children pages, the sidenav adjusts to:
  - Highlight that parent link to be active
  - Display the children page links in that section
  - Provide a Back link to the parent page
  - Does NOT display links to parent sibling pages
  - Examples:
    - [Disability](https://www.va.gov/disability/) (Level 1 - NO sidenav)
    - [How to file a claim](https://www.va.gov/disability/how-to-file-claim/) (Level 2 - within Get Benefits category)
    - [File a discharge claim](https://www.va.gov/disability/how-to-file-claim/when-to-file/pre-discharge-claim/file-while-overseas/) (Level 5)

### "Facilities"
- Supports diving down *n* levels
- Can be found on most facility pages
- Sidenav IS located on Level 1 page    
- ALL and ONLY level 2 links have a category **labels** (not accordions)
- "Grandchild" links ARE shown when the grandparent page is the active page
- Once a user selects a parent link that has children pages, the sidenav adjusts to:
  - Highlight that parent link to be active
  - Display the children page links in that section
  - DOES display links to parent sibling pages
  - Examples:
    - [VA Pittsburg health care](https://www.va.gov/pittsburgh-health-care/) (Level 1)
    - [Locations](https://www.va.gov/pittsburgh-health-care/locations/) (Level 2 - child nav visible) 
    - [Work with Us](https://staging.va.gov/pittsburgh-health-care/work-with-us/) (Level 2 w/children & grandchildren visible) - 
    - [Nursing careers](https://www.va.gov/pittsburgh-health-care/work-with-us/jobs-and-careers/nursing-careers/) (Level 4 - "Grandchild" w/ all Level 2 links visible)

## Related Research

### [Local Nav Research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/2019-vamc-navigation/left-nav/research/research-findings.md) (Feb 2024)
  - "This usability study was meant to evaluate how the user experience of VA.gov could be improved with a redesign of the local, or “left column” navigation component. A new local navigation component was designed as a part of the redesign of VAMC websites, beginning with Pittsburgh’s VAMC system of websites."
  - Appears to focus only on desktop view
  - This user test led to the "Facilities" sidenav
  - A reduced set of features from this design was launched, notably:
    - No category accordions (chevron-style)
    - Grandchildren (level 4+) appears to not have been considered in this user test while production has them (See [Nursing careers](https://www.va.gov/pittsburgh-health-care/work-with-us/jobs-and-careers/nursing-careers/))

#### Copilot Takeaways:

##### Current Navigation Issues:
 - Users struggle to find deeper content without “pogo-sticking” (clicking in and out of sections).
 - Lateral movement across parent-level sections is difficult.
 - Users often rely on the back button and breadcrumbs rather than the left navigation for navigation.
 - The hierarchy and ownership of pages in the navigation are unclear, leading to misunderstanding of what pages are children or siblings.

##### Redesigned Navigation Pros:
 - The new left navigation design helps users browse subsections more efficiently.
 - Supports “satisficing” behavior—users choose easily found links that closely match what they seek.
 - Some users were able to move laterally within a section using the new navigation, especially when asked to find related but separate content (e.g., volunteering vs. paid work).
 - Allows deeper navigation without reliance on the left nav, by using breadcrumbs.

##### Redesigned Navigation Cons:
 - Users were confused by the interaction between “parent” and “child” items, especially when the parent was replicated as a child.
 - The distinction between expanding a section and navigating to a page was unclear; some expected to go to a page, others didn’t notice menus opening.
 - Double-clicking caused confusion, especially among older users.
 - Changes in the menu state (open/close) were not always noticeable.
 - Inconsistent breadcrumb behavior (e.g., the "Home" link appearing/disappearing) caused confusion.
 - When items were omitted from the navigation (like Events or News), users found this arbitrary and confusing.

##### Recommendations
- Make hierarchy and containment of navigation levels more visually clear.
- Fix breadcrumb bugs and consider renaming the "Home" breadcrumb to something more descriptive.
- Integrate breadcrumbs more closely with the page title and global navigation.
- Use animation and scroll resets to make menu state changes more visible.
- Treat double-clicks as single clicks to reduce confusion.
- Ensure all third-level pages (except chronologically listed items like Events or News) appear in the navigation.
- When filtering events, ensure “See all events” returns users to the correct list (e.g., all past events if they were filtering on past events).

##### General Observations
 - Most users do not depend solely on the left navigation and often use other elements (breadcrumbs, back button, footer).
 - Clear, consistent navigation patterns and labels are crucial for reducing confusion, especially among less tech-savvy or older users.
 - Navigation should be predictable and reflect the site’s information architecture transparently.


### [Health Portal Secondary Navigation](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/research-and-analytics/health-secondary-navigation.md) (Mar 2024)
  - "When all MHV on VA.gov tools (Secure Messaging, Appointments, Medications, and Medical Records) reach Phase 2, they will be fully integrated into the VA.gov experience. At that point, we need to implement a secondary navigation strategy that helps users navigate between the tools and the MHV on VA.gov landing page, so that they experience it as a seamless portal."
  - Appears to use the launched/production version of the "Facilities" sidenav
  - Does consider issues on both mobile/desktop designs
  - Touches on other navigation elements (i.e. breadcrumb, "In this section", "On this page", etc.)

#### Copilot Takeaways:

- **Current secondary navigation on VA.gov is inadequate** for integrating health tools (like Secure Messaging, Appointments, Medications, Medical Records) in a seamless and accessible way.
- **A successful navigation solution must**:
  - Allow users to switch between tools easily.
  - Be simple, with minimal subpages.
  - Be consistent across all platforms and pages.
  - Be accessible and clearly labeled.
  - Keep all health tools visible at all times, regardless of navigation depth.
- **Problems with current designs include**:
  - Inconsistent experiences between desktop and mobile.
  - Design and layout differences between the "benefit hub" and "facilities" templates.
  - Issues with findability, especially on mobile (collapsed navigation is harder for users to find and use).
  - Inconsistent navigation compared to the primary site’s mega menu.
  - Lack of a strong "sense of place" for users—users can get lost or not know where they are.
  - History of accessibility issues, including sticky nav problems and poor focus management.
  - Breadcrumbs are sometimes confusingly placed within the navigation menu.
  - Dynamic narrowing of visible pages (in the benefit hub template) is problematic for persistent access to all health tools.
- **Quantitative analytics show** users do not engage with secondary navigation on mobile at the same rate as on desktop, despite similar traffic shares.
- **Next steps include** competitive analysis and user research, particularly with the benefit hub template, to test navigation with Veterans.

In summary, the report recommends significant redesign and research to ensure health tool navigation is accessible, consistent, and user-friendly, especially on mobile.