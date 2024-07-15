# Release Plan: VAMC Left Navigation update  (WIP)

## Phase I: moderated production testing (also known as User Acceptance Testing, or UAT)
The left navigation component was initially designed as a part of the redesign of VAMC website which was soft launched in September 2019, beginning with the Pittsburgh health care system. 

A usability study was conducted in November/December 2019 to evaluate how the user experience of VA.gov could be improved with a redesign of the existing left navigation component. The [existing site](https://www.va.gov/pittsburgh-health-care) was tested to establish a baseline of behaviors and a live protype of the new design was testing in the [staging environment](https://staging.va.gov/pittsburgh-health-care). 

### Results:
- [Research report](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/global/left-nav/research-findings.md#local-nav-research-report)
- Number of users: 5 Veterans with Pittsburgh VAMC experience were recruited to ensure familiarity with the content. 
- Bugs identified 
  - Breadcrumbs displayed inconsistently throughout the staging site, with the “Home” breadcrumb appearing and disappearing.
  - Accessibility defects within the staging prototype were identified and are documented in [#3411](https://github.com/department-of-veterans-affairs/va.gov-team/issues/3411)
- Recommendations for UX changes based on user feedback included:
   - Creation of a more discernible difference between levels in the hierarchy. 
   - Closer integration of breadcrumbs with the page title 
   - Keep opened accordions open and display all third level pages in the local navigation, except when they are chronologically listed 
  

## Go Live!

These changes will be available to 100% of the Veterans and Veteran Caregivers accessing the Pittsburgh health care system website.  Between March 29 and April 29, there were 24,784 pageviews for pittsburgh-health-care pages. 

### Planning:
- Desired date: 05/08/2020
- Post-launch KPI 1: By April 30, Veterans can access Pittsburgh VAMC top task content from Left Navigation menu within 4 clicks or less. 
- Post-launch KPI 2: By June 30, Veterans can access Pittsburgh VAMC’s most frequently viewed content using the Left Nav menu. 
  - This to ensure that the Pittsburgh VAMC Left Navigation menu supports efficient navigation to the pages Veterans view as most meaningful/relevant. 
- [Go / No Go: (ready / not ready)](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/initiatives/2020-fe-templates/left-nav)

### 1-week results: 6/8 -> 6/15/2020
**- Number of unique users** 
  - 755 unique interactions with the Left Nav (out of 818 total interactions)
**- Post-launch KPI 1: By April 30, Veterans can access Pittsburgh VAMC top task content from Left Navigation menu within 4 clicks or less.**
  - Post-launch KPI 1 actual: At launch on 6/8/2020, all content could be accessed within 4 clicks or less and most content within 3 clicks. 
**- Post-launch KPI 2: By June 30, Veterans can access Pittsburgh VAMC’s most frequently viewed content using the Left Nav menu.**
  - Post-launch KPI 2 actual: An analysis of most commonly visited pages to date indicates the Left Nav surfaces the appropriate pages. 

- Any issues with VA handling/processing?: no
- Types of errors logged: no
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes
  - Level 3 Defects identified during the Staging Review remain open in the Icebox
    - [#8964](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8964) [SCREENREADER]: For the current page CONSIDER adding 'aria-current="page"` attribute to the sidenav link  
    - [#8977](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8977) [SCREENREADER]: CONSIDER removing aria-label from the individual menu links  
    - [#8975](https://github.com/department-of-veterans-affairs/va.gov-team/issues/8975) [FOCUS MANAGEMENT]: Focus outline SHOULD be consistent - individual nav links 

### 1-month results: 6/8 -> 7/15/2020
**- Number of unique users** 
  - 2,948 unique interactions with the Left Nav (out of 2,941 total interactions

- Any issues with VA handling/processing?: no
- Types of errors logged: no
- Any UX changes necessary based on the logs, or feedback on user challenges, or VA challenges? yes/no 
  - On July 8, 2020 a ❗ Launchblocker issue was logged:[SCREENREADER, KEYBOARD, ZOOM]: The collapse/expand implementation MUST not trap users](https://github.com/department-of-veterans-affairs/va.gov-team/issues/10997). This issue was prioritized for resolution in Sprint 26 (beginning July 15). 


## Post-launch Questions 

_To be completed once you have gathered your initial set of data, as outlined above._ 

**1. How do the KPIs you gathered compare to your pre-launch definition(s) of "success"?** 
     - We have met our pre-launch success metrics. 

**2. What qualitative feedback have you gathered from users or other stakeholders, if any?** 
     - Pittsburgh VAMC Public Affairs Officers were not viewed as primary end users by our team, although they were impacted by the defects in the original design. This oversight caused them to feel unheard during this project. We're attempting to repair the relationship by opening dialogue and getting their usability feedback and ideas for enhancement. 

**3. Which of the assumptions you listed in your product outline were/were not validated?** 
     - We still need to conduct usability tests to assess improvement of “pogo-sticking” behavior and validate current navigational support.

**4. How might your product evolve now or in the future based on these results?**
     -  We will monitor the success of upgrade as additional VISNs come online with new content to ensure the Left navigation menu still meets Veteran needs for wayfinding. 

## VSA Initiative Impact Review 
[Link](https://docs.google.com/presentation/d/19Gb3Gu8yHtCVTUak-s-ydCK6pauTnSgtgbu8aAsXVt4/edit#slide=id.g72c7463e88_0_21)
