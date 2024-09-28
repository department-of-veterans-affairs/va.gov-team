# _VAMC Left Navigation Enhancement Feature Brief_ (WIP)

This document will focus on the VA Medical Center (VAMC) Left Navigation enhancement project, part of the redesign of VAMC websites, that began with the soft launch of the new Pittsburgh health care in September 2019. This enhancement implements a revised design based upon initial veteran feedback and further veteran research and the associated findings. The research was conducted on the Pittsburgh health system site in November/December 2019.

Note: Originally considered for a global revision, DEPO has decided to implement on VAMCs-only at this time as further analysis of content and user-expectations should be done before executing a site-wide change. Following this decision, the ownership of this work has been transferred from the Public Websites team to the Facilities team. 

## Table of Contents


[User Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#user-stories--use-cases)

[Project Rationale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#project-rationale)

[Project Scope and Scale](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#project-scope-and-scale)

[Measuring Success](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#measuring-success)

[Dependencies](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#dependencies)

[Risk factors](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#risk-factors)

[Rejected Solutions](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#rejected-solutions)

[Definition of Done](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#definition-of-done)

[Key Links](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav/vamc-left-nav-enhancement-feature-brief.md#key-links)


### User Stories / Use Cases
*What two or three core use cases do we believe should cover ~80% of users?*
- As a Veteran, I need to quickly find and navigate to the content or functionality I need on a VAMC website so I can complete my online task.

### Project Rationale
_Why should this project be a priority?_ 

As a VA, but not VA.gov, website, the following **design principles and rules** apply to this project
- Users should get to all content and tools in just 1-2 clicks/taps
- Users should know what page they are on and what section that are in

**Research Findings:**
- Veterans use the left menu (parent/children views) to help make informed navigation decisions

The sub pages within a section — also known as the page’s “children” — provide additional context that helps a Veteran way find to the right information or services. By introducing a new design for local navigation that exposes these children, it will provide valuable additional context without requiring a user to leave the parent page.

**However** with current functionality: 
- The Pittsburgh heath care site is confusing to navigate. Users forget what page they are on after scrolling past the page heading, do not understand the hierarchial content structure and find the menu to be distracting rather than helpful. 
- Users of the existing site navigation make a “best guess” given the elements in the left navigation. The only way they could confirm their guess was by going to the page in question creating a "pogo-stick" behavior

**Stakeholder/Business drivers**
- This project is a commitment to the business to resolve identified accessibility and usability defects and is one of the issues blocking the Pittsburgh announcement. 

**[Findings from research conducted in November/December 2019](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/left-nav/research-findings.md#findings-by-hypothesis)**

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

**Impact to other VAMC roll outs**

### Project Scope and Scale
_What's in and what's out?_
- An upgrade to the local navigation component for Pittsburgh’s VAMC system of websites, beginning with the functionality available in staging and informed by the user research conducted in November/December 2019 

**Status of the project when ownership was transferred**

Improvements to the Left Nav were initiated by engineers on the Public Websites team. 
To date, the following work is complete and available on staging: 

- New sidebar navigation was implemented on Pittsburgh health care, including 
- Abstraction of complexities in SideNav into functional components 
- Addition of unit tests 
- Updated SideNav `expanded` logic to not rely on original data source
- Rotated expand/collapse buttons with arrows to be consistent with the main navigation
- Resolved duplicate label and line issue 
- Removed "Home" from breadcrumbs
- Changes to focus of selected nav items 
- Removed SideNav on `Events`, `News Releases`,`Research` and `Stories` subpages
- Removed warning banner on Pittsburgh Health Care (due to non-prod environment)

Pending development work (within scope)
- Issues created during the SideNav Accessibility Audit 
- Port SideNav to Design System
- Need to update the sidenav to be 1/3 instead of 1/4 width on each page that uses it
- _Other issues to be identified based on user research findings (TBD)_


**Goals of the enhancement project**
- Provide a straight to the point navigation that will allow the Veteran to quickly find and complete their journey on the VAMC website 

Specifically, 
- Create a more discernible difference between levels in the hierarchy. 
- Address inconsistency of "Home" breadcrumb
- Implement four levels of menu/page publishing (Spoke -> Parent -> Child -> Grandchild)
- Optimize for mobile navigation and scrolling
- Improve wayfinding support (such as sticky headers)
- Address usability issues and 508 accessibility defects 
- Improve visibility for third level pages in the local navigation (except those which are chronologically listed)

**Future Iterations**

- Implement the new navigation to the 9 benefit hubs

### Measuring Success
_How will we know if we are successful?_

OBJECTIVE 3: Deliver a usable and accessible experience on any device

Key result: Users will not need to use “pogo-sticking” behavior to find content deeper within the site. (This will be evaluated during usability tests.) 

Key result: By June 30, Veterans can access Pittsburgh VAMC’s most frequently viewed content using the Left Nav menu. 

Key result: By April 30, Veterans can access Pittsburgh VAMC top task content from Left Nav menu within 4 clicks or less. 

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
TBD

--- 

## Go-to-market Strategy
- *How are Veterans and others using this product going to know it exists?*
- *What marketing, outreach, or communications are necessary for this product to be successful?*

## Target Launch Date
- *What is your target launch date of your MVP/iteration?*
  - May 2020
- *What is your date for when you'll evaluate impact after launch?*

---

### Key Links
_Links to requirements documentation, wireframes/mock-ups, research, etc._

[Current website](https://www.va.gov/pittsburgh-health-care)

[Prototype of new design](https://staging.va.gov/pittsburgh-health-care)

[Page navigation, see also folder called left-nav](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/global/left-nav)

[Design](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/header-footer-and-navigation/page-nav/design/VA-gov-on-page-nav-MASTER.pdf)
