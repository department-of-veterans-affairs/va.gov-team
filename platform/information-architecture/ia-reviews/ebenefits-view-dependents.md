# IA Review and Recommendations - DRAFT

**Team:** eBenefits

**Product/Featue:** View Dependents

**Background/Context:**
- One of the most used features on EBN is View and Update Dependents. It is the only self-service place in the VA ecosystem that a Veteran can quickly view the dependents on their compensation award, as well as add, remove, or modify those dependents by electronically submitting the 686c. 
 - Initial functionality being built will be to view dependents only, with the intent that the ability to add and modify dependents will come later. 
 - There is no current plans for this capability to impact benefits beyond disability, but this should not necessarily be ruled out.
 - The tool will require authentication to utilize. 

**Review Date:** In Progress

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/4545

<hr>

### IA Structure, Flow, URLs and Breadcrumbs <br>  
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

**Approach:**
- Given this tool is behind authentication, our standard approach is to create a static page available to unauthenticated users that allows stakeholders to manage content and messaging and provides an SEO landing page. 
- Although the tool content is primarily related to disability benefits, the tool will live independent of the benefit hubs to allow for any future growth/expansion of the tool and to support a future streamlined authenticated user experience. 

Visual representation of pages in the site map: https://app.moqups.com/Rnc4BDEKrA/view/page/abd763ecc

Page | URL | Breadcrumb
--- | --- | ---
View Dependents static page | www.va.gov/view-dependents | Home > View your dependents
Vew Dependents tool | www.va.gov/view-dependents/dependents | Home > Your VA dependents
 
**General Details**
- Label used in breadcrumb should closely match H1, work with your writer to finalize. 
- Because these pages are outside of the benefit hubs, there is no left nav on either static page or the tool.
- The static page will need to include a sign-in CTA module. 
- If an authenticated user lands on the static page URL, they will bypass the static the page and be taken directly to the tool
- If an unauthenticated user lands directly on the tool URL, they should be redirected to the static page.
- Breadcrumb for the tool does not need to represent the static page in the hierarchy since that page is a pass-through for authenticated users.  
- Label used in breadcrumb should closely match H1, work with your writer to finalize. 
  

<hr>

### Navigation. Entry Points and Crosslinking
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Entry point and crosslinking placement**

Priority | Placement | Description
--- | --- | ---
High | https://www.va.gov/disability/add-remove-dependent/ | Add link within content for users to view dependents currently on their disability compensation
Medium | Disability hub left nav | An option can be added to the left nav just below the Add dependents option.  Since this tool does not live in Disability this is not required. 
Medium | https://www.va.gov/disability/ | A link to View dependents could be added to the Manage benefits section of the disability hub page.  However, the standard max links on this page per section is 10 and this page is already at 11. Links in the list should be prioritized in terms of usage and this additional link should only be added if 2 other links can be removed.  Placement would be immediately after the Add dependent option.  
Medium | https://www.va.gov/search/?query=disability+dependents | Add to top recommendations section for " disability dependents" query
Low | https://www.va.gov/search/?page=1&query=dependents | Add to top recommendation section for "dependents" query. This is a very broad term

The above linking opportunities rated "medium" or "low" are purely recommendations and can be utilized at your team's discretion.

<hr>

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- It is assumed that the technical team for eBenefits will handle the redirect of the legacy tool URLs when the tool is sunset.  The VA.gov team is unable to implement redirects for ebenefits.va.gov URLs. 

<hr>

### Additional Recommendations

<hr>

### Questions/Open Issues


