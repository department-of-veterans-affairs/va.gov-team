# Health Portal Integrated Navigation
Secondary Navigation Research Report

## Overview:

When all MHV on VA.gov tools (Secure Messaging, Appointments, Medications, and Medical Records) reach Phase 2, they will be fully integrated into the VA.gov experience. At that point, we need to implement a secondary navigation strategy that helps users navigate between the tools and the MHV on VA.gov landing page, so that they experience it as a seamless portal. 

Navigation that will support these tools well and afford for seamless integration will push beyond the limits of existing secondary navigation designs on VA.gov. The current designs and the problems they pose are articulated below.

### We posit that a successful navigation solution must:
* Allow users to move from one tool to another seamlessly
* Be simple (have subpages minimized so that the menu can stay focused)
* Be consistently designed and located on **all** pages of the health experience (across all modalities)
* Be situated in proximity to My HealtheVet labeling for clarity (not above or outside of this context)
* Persistently display all health tools to the user
* Should explore and test whether being visually louder than primary site navigation is more useful to Veterans and VA.gov users

### Obstacles:
In the "try me" phase and beyond, FAQ content within the tools themselves can be migrated to pages in the Resources & Support section on VA.gov, where most FAQ-type content lives across VA.gov. Without that content, most tool-level landing pages will be bare & less helpful, so they can and should be eliminated. This will require some navigation restructuring within the tools. Those changes need to be considered and factored into the overall integrated secondary navigation design that will tie the tools together.

## Desktop - current secondary navigation designs
### General:
<img width="1147" alt="Screenshot 2023-09-20 at 10 49 46 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/a7970d62-88d2-4094-b6f1-03e4b182e97d">

### Facilities template:
<img width="1153" alt="Screenshot 2023-09-20 at 10 38 19 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/97981bbe-2433-4f52-9f64-16662133ca10">


## Mobile - current secondary navigation designs
### General:
<img width="1115" alt="Screenshot 2023-09-20 at 10 04 04 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/777c6258-3b56-4c28-95bc-d5cbe89578e8">

### Facilities template:
<p align="center">
  <img width="706" alt="Screenshot 2023-09-20 at 10 27 16 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/aba6c9be-05a6-44f6-971b-0f0a40a4b013">
</p>

## Mock-ups of health portal secondary navigation using current designs 
We mocked-up what the MHV on VA.gov planned secondary navigation structure would look like using the two secondary navigation designs in use on VA.gov. There are some important differences between the two designs. 

### Desktop
<img width="1196" alt="Screenshot 2023-09-22 at 9 12 10 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/4f62c79c-ddc4-4635-993d-f38c7873c942">

### Mobile
<p align="center">
  <img width="765" alt="Screenshot 2023-09-22 at 9 46 25 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/64f2e2e6-1958-44fb-87c4-d81fa101724b">
</p>

## Problems with current secondary navigation options
The existing sidenav component is not fully supported by the Design System, and implementations are likely inconsistent across VA.gov. The component was created to mimic the sidenavigation native to VA.gov's content management system (CMS), Drupal. Most pages across VA.gov display the Drupal version. 


### Problem 1: Inconsistent on mobile v. desktop
On Desktop, the side navigation is persistently visible and available; on mobile these options are collapsed into the "in this section" sidenav component, which is a second menu option (in addition to the primary mega menu). When a user expands the mobile component, they will see a fly-out menu (which varies depending on which template type they see - more in Problem #2 below). Once a selection is made, the user's touch can expand a menu parent page (if applicable) or it can click a link that will close the menu and navigate the user to that page. 

### Problem 2: Inconsistent versions (general vs. facilites template version)
There are several differences between the two secondary navigation designs on VA.gov today. 
* **Design differences:**
  * Link text: the two templates use different blues
  * Indicator for current page (& hover page): different colors, different vertical rule thickness, different background color, distinct treatments
  * Different styling for section name/parent page
<p align="center">
  <img width="426" alt="Screenshot 2023-09-24 at 9 24 56 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/51d80b56-e8cd-4b08-8b92-03a3e06dc087">
</p>

* **Layout difference:** facilities template displays all sections and subpages at once, at all times and does not have a way to collapse or expand irrelevant sections. The general template does have functionality to collapse and expand.
* **Mobile differences:**
  * Clicking "in this section" button - on facilities template, the component expands under the button, pushing page content further down the screen, and is full-width; in general version, the menu component opens partial-width in front of the "in this section" component from the upper right corner of the screen and can be closed with an "x".
<p align="center">
  <img width="609" alt="Screenshot 2023-09-24 at 9 36 05 PM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/b8254f53-4a07-4253-a5dc-03d2dbeb24c6">
</p>
  
### Problem 3: Inconsistent compared to primary mega menu navigation  

### Problem 4: Research shows that users aren't finding it on mobile
Quantitative data suggests that despite users being mostly split between desktop and mobile/tablet usage, that the usage of the secondary navigation on these devices does not follow that breakdown whatsoever. Compared to desktop engagement with the side navigation menu, only 14% of almost the same number of mobile users are clicking it. 
<img width="1244" alt="Screenshot 2023-09-25 at 11 18 09 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/9ca36d08-8f2d-4beb-a13c-34099c0c5bcb">

### Problem 5: Mobile version placement is "floating in space"
In both versions of the mobile component, the "in this section" button appears before the page title (H1) which removes its context, and makes it "float in space." The loudest text on the page is the title, and most users would expect to see options beneath or alongside this title text, not above it. 

### Problem 6: Mobile version adds confusion by conflating other navigation components 
The general version of the sidenav mobile component (does not occur in facilities version) nests breadcrumbs inside the navigation menu. While it has not been formally researched (from digging into the research repo), it is likely that users do not understand the distinction between the breadcrumb and nav menu options on display when this component is expanded.

When users do click the nested breadcrumbs, which are hyperlinks, they will navigate to a new page, which will close out the "in this section" component. This could cause confusion or frustration. 

### Problem 7: General template behavior narrows what is visible based on how deeply a link is nested
The general template dynamically updates and narrows what pages are visible to the user as they continue to click more deeply into the site. On both desktop and mobile, the only way to go back to a previous view is to use the breadcrumb to navigate back up the tree. However, on mobile this is a confusing and unexpected experience, as it is much less visually clear that the breadcrumb is a different component than other text within the component. 

More than any other problem, this in particular **will not work** for the health portal on VA.gov, which needs all the health tools to be accessible in any solution in order to provide seamless, constant, and consistent navigation to the end-user. For any tool with child pages, such as medical records or secure messaging, the user's sidenav view will dynamically change when they click into a child page, such as "inbox" or "drafts." They will no longer see the wider tools beyond the section they have drilled down into. 

### Problem 8: Secondary navigation carries the weight of displaying the user's sense of place on the site
* VA.gov has only the breadcrumb to indicate a user's sense of place. A pattern revealed by the competitive analysis was that many sites use a block header to establish the user's place on the site, allowing navigation components to be more lightweight. Examples below:
<p align="center">
  <img width="828" alt="Screenshot 2023-09-25 at 9 55 47 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/a4e22d32-a03b-4b51-8131-8ed13b49a87d">
</p>

### Problem 9: History of accessibility issues with these components
Past issue tickets have captured problems with the secondary navigation design. While several of these have been solved, they point fingers to the fact that the component was not design with an a11y-first mindest.

#### Secondary nav menu being sticky:
* [#22824](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22824)
* [#19779](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19779)
* [#19784](https://github.com/department-of-veterans-affairs/va.gov-team/issues/19784)

#### Focus management
* [#22826](https://github.com/department-of-veterans-affairs/va.gov-team/issues/22826)
* [#30603](https://github.com/department-of-veterans-affairs/va.gov-team/issues/30603)

#### Lack of context for accessibility
* Naming convention not unique for this component: [#59760](https://github.com/department-of-veterans-affairs/va.gov-team/issues/59760)
* Button lacks context to communicate that it will open a menu: [#28698](https://github.com/department-of-veterans-affairs/va.gov-team/issues/28698)

## Needs for health portal secondary navigation
* Must allow users to move from one tool to another seamlessly
* Must be placed consistently on the page (across all modalities), with all health tools persistently available and visible to the user
* Should be visually louder than primary site navigation

## Resources for navigation accessibility
* [Gov.uk | Sticky elements: functionality and accessibility testing](https://technology.blog.gov.uk/2018/05/21/sticky-elements-functionality-and-accessibility-testing/)


