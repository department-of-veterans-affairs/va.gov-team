# _VAMC Left Navigation Enhancement Feature Brief_ (WIP)

This document will focus on the VAMC Left Navigation enhancement project, part of the redesign of VAMC websites, beginning with Pittsburgh’s VAMC system of websites. 

User Journey

User Stories

Project Rationale

Project Scope and Scale

Not in Scope

Measuring Success

Dependencies

Risk factors

Rejected Solutions

Definition of Done

Key Links

### User Journey


### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- Veteran users of VA.gov should be able to navigate to their desired content or functionality without the need to navigate deep (2 levels or more) within one section of the site to understand its contents.

### Project Rationale
_Why should this project be a priority?_ 
As a VA, but not VA.gov, website, the following design principles and rules apply to this project
- Users should get to all content and tools in just 1-2 clicks/taps
- Users should know what page they are on and what section that are in
With current functionality: 
- Users forget what page they are on after scrolling past the page heading (H1)
- Users do not know (i.e., no visual affordance or ability to preview) there are children or grandchildren pages in a section of content using the current left-hand page menu
- Users are distracted by the menu item selected state (and often interpret it as their call to action, instead of focusing on the call to action on the content page)

**Stakeholder/Business drivers**

**[Findings from research conducted in January 2020](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/left-nav/research-findings.md#findings-by-hypothesis)**

- When asked to find content, users of the existing site navigation element would make a “best guess” given the elements in the left navigation. The only way they could confirm their guess was by going to the page in question.
- Although the new element provides more options for lateral, or “child to child” navigation, the back button and breadcrumbs were more commonly used to move within a section than the local navigation element.
- Users of the new site navigation element would scan the left menu after expanding a subsection to inform navigation decisions.
- Users frequently used the back button and breadcrumbs to move throughout the site, rather than deep lateral moves across parent-level sections. 
- Users were confused by the difference in behavior between the “carat” button indicating children and clicking on the label itself.
- Users expressed confusion or made false assumptions about parent child relationships based on the design of the page.
- The new design has increased support for “satisficing” behaviors. Lateral movement across the site using the new design element was observed in multiple users, without the user being led through any specific click path.
- The levels of hierarchy and ownership of pages were unclear to multiple users.
- Breadcrumbs are rendered inconsistently, with the “Home” link displaying and disappearing throughout different levels of the Pittsburgh VAMC pages.
- Breadcrumbs and primary or “site-wide” navigation elements were confused when the “Home” breadcrumb is removed.
- Users did not detect a change when opening and/or closing menus.
- Double clicking on this menu design creates confusion for users who are likely to double click.
- When certain items are not in the left hand navigation, it can be confusing and feel arbitrary. (Specific to specialized content, such as reports)

### Project Scope and Scale
_What's in and what's out?_
- A new local navigation component for Pittsburgh’s VAMC system of websites

**Goals of the enhancement project**
- Get users to all content and tools in just 1-2 clicks/taps
- Allow users to "preview" all content pages in a section of content

Specifically, 
- Create a more discernible difference between levels in the hierarchy. 
- Address inconsistency of "Home" breadcrumb
- Implement four levels of menu/page publishing (Spoke -> Parent -> Child -> Grandchild)
- Optimize for mobile navigation and scrolling
- Improve wayfinding support (such as sticky headers)
- Address usability issues 
- Animate menu opening/closing processes 
- Improve visibility for third level pages in the local navigation (except those which are chronologically listed)

**Future Iterations**

- Implement the new navigation to the 9 benefit hubs

### Measuring Success
_How will we know if we are successful?_
- Users can access all content and tools in just 1-2 clicks/taps
- Users can "preview" all content pages in a section of content

### Dependencies
_Are other features dependent on this one? What do we need from partners? What do we need outside of engineering?_

**Team/Internal dependencies**
- Stack and language knowledge
- Competing priorities
- Availability of engineers to pair-code
  
**Partner dependencies**
  
  ### Risk factors
- Stack and language knowledge
- Competing priorities
- Availability of engineers to pair-code  

### Rejected Solutions
*What other approaches did we consider and why were they rejected?*


### Definition of Done


### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

[Current website](https://www.va.gov/pittsburgh-health-care)
[Prototype of new design](https://staging.va.gov/pittsburgh-health-care)
[Page navigation, see also folder called left-nav](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/left-nav)
