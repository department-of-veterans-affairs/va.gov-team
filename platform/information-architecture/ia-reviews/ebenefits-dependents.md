# IA Review and Recommendations

**Team:** eBenefits

**Product/Featue:** Add/Remove Dependents Form 686c

**Background/Context:** This is the next phase of work for the eBenefits functionality of viewing and adding dependents.  IA work for viewing dependents is complete, however this work may impact or change original IA work.  

**Review Date:** 3/10/2020

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/6636

<hr>

### IA Structure, Flow, URLs and Breadcrumbs <br>  
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

**Background/Approach:**
- Research did not show a strong desire to look for this capability within disability.  There was a draw to Family member benefits and Records.  Recommendation is for this form to exist independently of a benefit hub, and rather links can be added from specific benefits where appropriate (i.e. disability, family member hub, records hub, etc.). This will allow future use cases to be added as necessary (i.e. managing dependents or beneficiaries for all types of benefits). 
- Given the above, this allows us to bring this form together with the View Dependents tool.  The form and tool will share a single static page,  but users will not need to be authenticated to complete the form (authentication is required for the view tool). This means we cannot automatically bypass the static page for authenticated users as we usually do, unless they are directly linking to the tool. (see user flow diagram). 

**User Flow**

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/04316e24-409e-4257-9439-c259a95fd5ec)


**Pages**

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Static content page | **Current:** <br> www.va.gov/view-dependents/ <br> **New:** <br>  www.va.gov/view-change-dependents  | **Current:** <br> Home > View your dependents <br> **New:** <br> Home > View or change your dependents  | The "current" page was proposed for the View Dependents tool, and the URL and breadcrumb is being slightly modified as part of this work.   
Online form | www.va.gov/view-change-dependents/add-remove-form-686c/ | Home > View or change your dependents > Add or remove dependents form 686c | Authentication is not required to access this form, and therefore users can directly access it through direct links or bookmarks. 
View dependents tool | **Current:** <br> www.va.gov/view-dependents/dependents <br> **New:** <br>  www.va.gov/view-change-dependents/view | **Current:** <br> Home > Your VA dependents <br> **New:** <br> Home > View or change your dependents > View your dependents | The "current" page URL and breadcrumb was proposed for the View Dependents tool work, but should be modified based on this addition. 
 

**Visual representation of pages in the site map:** 

Pages shown in site map here: https://app.moqups.com/Rnc4BDEKrA/view/page/abd763ecc

<hr>

### Navigation, Entry Points and Crosslinking
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Entry point and crosslinking placement**

Priority | Placement | Description
--- | --- | ---
High | [Disability hub page](https://www.va.gov/disability/) |The existing "Add or remove dependents" link should be updated to point to the new static page to "View or change dependents".  Update the link label and teaser text as appropriate. Placement is the same as it currently is. 
High | Disability left nav |The existing "Add or remove dependents" link should be updated to point to the new static page to "View or change dependents".  Update the link label as appropriate. Placement is the same as it currently is. 
Medium | https://www.va.gov/search/?query=disability+dependents | Add to top recommendations section for "disability dependents" query.
Low | https://www.va.gov/search/?page=1&query=dependents | Add to top recommendation section for "dependents" query. This is a very broad term and there is already 2 items in the top recommendations, but could be reviewed for priority over the other 2 options. 
Low/Future | Profile  | Look at future opportunities to test user response to placement within the profile experience. 

The above linking opportunities rated "medium" or "low" are purely recommendations and can be utilized at your team's discretion.

<hr>

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The existing page in the Disability hub - www.va.gov/disability/add-remove-dependent/ - will need to be redirected to  www.va.gov/view-change-dependents
- The eBenefits team will be responsible for retiring and redirecting the old tool within the `ebenefits.va.gov` domain. 

For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).

<hr>

### Additional Recommendations

<hr>

### Questions/Open Issues


