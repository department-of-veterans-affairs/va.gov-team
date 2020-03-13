# IA Review and Recommendations

**Team:** eBenefits

**Product/Featue:** Add/Remove Dependents Form 686c

**Background/Context:** This is the next phase of work for the eBenefits functionality of viewing and adding dependents.  IA work for viewing dependents is already complete. 

**Review Date:** 3/10/2020

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/6636

<hr>

### IA Structure, Flow, URLs and Breadcrumbs <br>  
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

**Approach:**
- This form will be accessible from the View Dependents tool (requires authentication), but will also need to be directly available to unauthenticated users without passing through the tool.
- This form will have its own static content page to explain what the form is for and how to complete it. This will be separate from the static page for the View Dependents tool. This is due to the amount of content needed for both tools at this time, as well as the fact that one requires authentication and one does not - this means the user flow through pages is different (see user flow diagram). 
- Research did not show a strong desire to look for this capability within disability.  There was a draw to Family member benefits and Records.  The task asked was generic in nature (not specific to adding for disability), which may have resulted in a generic response rather than a benefit-specific response. For this reason, my recommendation is for this form to exist independently of a benefit (i.e. disability), and rather links can be added from specific benefits where appropriate (i.e. disability, family member hub, records hub, etc.). This will allow future use cases to be added as necessary (i.e. managing dependents or beneficiaries for all types of benefits). 


![image](https://user-images.githubusercontent.com/20994159/76347075-01bd6680-62d4-11ea-8a0c-194b00aa490f.png)



Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Static content page | **Current:** <br> www.va.gov/disability/add-remove-dependent/ <br> **New:** <br>  www.va.gov/dependents  | **Current:** <br> Home > Disability benefits > Add or remove a dependent <br> **New:** <br> Home > Add or remove dependents  | This is an existing static content page managed in Drupal.  It will need to be moved out of Disability and the URL and breadcrumb updated.  The left nav will also need to be removed form this page. 
Online form | www.va.gov/dependents/add-remove-form-686c/ | Home > Add or remove dependents form 686c
 
**General Details**
- Label used in breadcrumb should closely match H1, work with your writer to finalize. 

**Visual representation of pages in the site map:** 

![image](https://user-images.githubusercontent.com/20994159/76347286-5cef5900-62d4-11ea-8e0a-df194e14c5a5.png)

<hr>

### Navigation, Entry Points and Crosslinking
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Entry point and crosslinking placement**

Priority | Placement | Description
--- | --- | ---
High | View dependents static page www.va.gov/view-dependents  | Provide link to 
Medium |  |  
Medium | https://www.va.gov/disability/ | A link to View dependents could be added to the Manage benefits section of the disability hub page.  However, the standard max links on this page per section is 10 and this page is already at 11. Links in the list should be prioritized in terms of usage and this additional link should only be added if 2 other links can be removed.  Placement would be immediately after the Add dependent option.  Link label and teaser text will be required. 
Medium | https://www.va.gov/search/?query=disability+dependents | Add to top recommendations section for "disability dependents" query.
Low | https://www.va.gov/search/?page=1&query=dependents | Add to top recommendation section for "dependents" query. This is a very broad term and there is already 2 items in the top recommendations. 

The above linking opportunities rated "medium" or "low" are purely recommendations and can be utilized at your team's discretion.

<hr>

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The proposed structure above requires moving an existing content page in the IA.  A redirect will need to be requested to send traffic to the new updated URL for the static page.
- www.va.gov/disability/add-remove-dependent/ will need to be redirected to  www.va.gov/add-remove-dependents
- The eBenefits team will be responsible for retiring and redirecting the old tool within the `ebenefits.va.gov` domain. 

For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).

<hr>

### Additional Recommendations

<hr>

### Questions/Open Issues


