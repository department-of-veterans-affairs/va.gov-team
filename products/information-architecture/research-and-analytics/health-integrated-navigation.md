# Health Portal Integrated Navigation

## Overview:

When all MHV on VA.gov tools (Secure Messaging, Appointments, Medications, and Medical Records) reach Phase 2, they will be fully integrated into the VA.gov experience. At that point, we need to design navigation that helps users navigate between the tools and the MHV on VA.gov landing page, so that they experience it as a seamless portal. 

**Obstacles:**
As we enter the "try me" phase and beyond, FAQ content within the tools themselves can be migrated to pages in the Resources & Support section on VA.gov, where most FAQ-type content lives across VA.gov. Without that content, most tool-level landing pages will be bare & less helpful, so they will be eliminated. This will require some navigation restructuring within the tools. Those changes need to be considered and factored into the overall integrated secondary navigation design that will tie the tools together.

Secondary navigation that will support these tools well, and allow them to be seamlessly integrated, will push beyond the limits of existing secondary navigation designs on VA.gov. The current designs and the problems they pose are articulated below.

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
* Color scheme different
* Open/close interaction
* Mobile does not show all options persistently (narrows based on user's location), but desktop does
* 

### Problem 2: Inconsistent versions (general vs. facilites template version)


### Problem 3: Inconsistent compared to primary mega menu navigation  

### Problem 3: Research suggests that users aren't finding it on mobile

### Problem 4: Mobile version placement is "floating in space"
In both versions of the mobile component, the "in this section" button appears before the page title (H1) which removes its context, and makes it "float in space." The loudest text on the page is the title, and most users would expect to see options beneath or alongside this title text, not above it. 

### Problem 5: Mobile version adds confusion by conflating other navigation components 
The general version of the sidenav mobile component (does not occur in facilities version) nests breadcrumbs inside the navigation menu. While it has not been formally researched (from digging into the research repo), it is likely that users do not understand the distinction between the breadcrumb and nav menu options on display when this component is expanded.

When users do click the nested breadcrumbs, which are hyperlinks, they will navigate to a new page, which will close out the "in this section" component. This could cause confusion or frustration. 

### Problem 6: Mobile behavior narrows what is visible based on how deeply a link is nested

### Problem 7: Secondary navigation carries the weight of displaying the user's sense of place on the site
* A common pattern revealed by the competitive analysis was that many sites do this in the header, allowing navigation components to be more lightweight.

### Problem 8: History of accessibility issues with these components

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
* Must consider its relationship to the primary site navigation (mega menu)

## Resources for navigation accessibility
* [Gov.uk | Sticky elements: functionality and accessibility testing](https://technology.blog.gov.uk/2018/05/21/sticky-elements-functionality-and-accessibility-testing/)


