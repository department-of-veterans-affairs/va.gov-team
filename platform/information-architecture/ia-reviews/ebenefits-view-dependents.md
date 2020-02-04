# IA Review and Recommendations - DRAFT

**Team:** eBenefits

**Product/Featue:** View Dependents

**Background/Context:**
- One of the most used features on EBN is View and Update Dependents. It is the only self-service place in the VA ecosystem that a Veteran can quickly view the dependents on their compensation award, as well as add, remove, or modify those dependents by electronically submitting the 686c. 
 - Initial functionality being built will be to view dependents only, with the intent that the ability to add and modify dependents will come later. 
 - There is no current plans for this capability to impact benefits beyond disability. 
 - The tool will require authentication to utilize. 

**Review Date:** In Progress

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/4545

### IA Structure, Flow, URLs and Breadcrumbs <br>  
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- Given this tool is behind authentication, our standard approach is to create a static page available to unauthenticated users and optimized for search
- The static page will live at the root level of the site and the View Depedendents tool will be nested below the static page
- This page will need to include a sign-in CTA module.  If a user visits this page and is already authenticated, they should be automatically directed to the tool. 
- If the user tires to access the tool URL directly and is not authenticated, they should be automatically redirected to the static page.


**Page 1:** Static view dependents page <br>
URL: www.va.gov/view-dependents/
Breadcrumb:  Home > View dependents

**Page 2:** View dependents tool <br>
URL: www.va.gov/view-dependents/dependents/
Breadcrumb:  Home > View dependents > Your VA dependents


### Navigation/Entry Points

**Primary** <br>
*The primary entry points and changes to global navigation*

- Primary entry points will be within the Disability hub given this information is primarily for disability benefits. 


**Crosslinking** <br>
*Recommendations for potential cross-linking opportunities.  This can be reviewed and modified/added to by the working team.*



### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  


### Additional Recommendations


### Questions/Open Issues
- Does this tool share a single static page with the add/remove dependents form?  Will need to clarify to determine if this option needs to be added to the disability hub
- Determine if link should be added to left nav in Disability
- Review breadcrumb labels against final copy/H1s
- Confirm if eBen team is handling redirect process from old tool on eBen to new page

