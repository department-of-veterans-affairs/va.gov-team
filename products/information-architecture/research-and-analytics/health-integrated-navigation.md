# Health Portal Integrated Navigation

## Overview:

When all MHV on VA.gov tools (Secure Messaging, Appointments, Medications, and Medical Records) reach Phase 1, they will be fully integrated into the VA.gov experience. This means they will need to navigate users to to and from the tools to the health portal landing page. As we remove FAQs from the tools themselves and redistribute that content to pages in the Resources & Support section on VA.gov, tool-level landing pages will also be eliminated, requiring some navigation restructuring that needs to be considered and factored into the overall integrated secondary navigation design that will tie the tools together.

Secondary navigation that will support these tools well, and allow them to be seamlessly integrated will push beyond the limits of existing navigation components on VA.gov. The problems (and needs) posed are articulated for various modalities as follows: 

## Current navigation components
### Desktop:



### Mobile: 
<img width="1634" alt="Screenshot 2023-09-19 at 9 55 53 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/acaae486-74c3-4694-8b5f-54e5198d4493">




## Problems with current secondary navigation options
The existing sidenav component is not fully supported by the Design System, and implementations are likely inconsistent across VA.gov. The component was created to mimic the sidenavigation native to VA.gov's content management system (CMS), Drupal. Most pages across VA.gov display the Drupal version. 

### Problem 1: Inconsistent on mobile v. desktop
* Color scheme different
* Open/close interaction
* Mobile does not show all options persistently (narrows based on user's location), but desktop does
* 

### Problem 2: Inconsistent with primary mega menu navigation 

### Problem 3: Research suggests that users aren't finding it on mobile

### Problem 4: Mobile version is floating in space without context

### Problem 5: Mobile version adds confusion by conflating other navigation components 
* Nested breadcrumbs

### Problem 6: Mobile behavior narrows what is visible based on how deeply a link is nested

### Problem 7: Secondary navigation carries the weight of displaying the user's sense of place on the site
* A common pattern revealed by the competitive analysis was that many sites do this in the header, allowing navigation components to be more lightweight. 


## Needs for secondary navigation
* Must allow users to move from one tool to another seamlessly
* Must be placed consistently on the page (across all modalities), with all health tools persistently available and visible to the user
* Must be visually louder than primary site navigation
* Must consider its relationship to the primary site navigation (mega menu)
* Must be situated in the context of what section of the site the user is in
