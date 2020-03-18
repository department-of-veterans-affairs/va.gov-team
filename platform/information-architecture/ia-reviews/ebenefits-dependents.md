# IA Review and Recommendations
**Status: COMPLETE**

**Team:** eBenefits

**Product/Featue:** Add/Remove Dependents Form 686c + View dependents tool

**Background/Context:** This is the next phase of work for the eBenefits functionality of viewing and adding dependents.  IA work for viewing dependents was complete, however this work changes the original IA work.  This is the documentation that should be referenced for both the View dependents & the Add/Remove dependents capabilities. 

**Date IA Completed:** 3/13/2020

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
Static content page | www.va.gov/view-change-dependents  | Home > View or change your dependents  | - The was previously proposed for the View Dependents tool as www.va.gov/view-dependents/. <br> - The URL and breadcrumb are being modified as part of this work.  <br> - This page will need to include a sign-in CTA module for the view dependents tool. <br> - This page will not have left hand navigation.
Online form | www.va.gov/view-change-dependents/add-remove-form-686c/ | Home > View or change your dependents > Add or remove dependents form 686c | - Authentication is not required to access this form, and therefore users can directly access it through direct links or bookmarks. <br> - This page will not have left hand navigation.
View dependents tool | www.va.gov/view-change-dependents/view | Home > View or change your dependents > View your dependents | - This was previously proposed for the View Dependents tool as www.va.gov/view-dependents/dependents. <br> - The URL and breadcrumb are being modified as part of this work. <br> - If an unauthenticated tries to access this tool directly via direct links or bookmarks, they should be redirected to the static page. <br> - This page will not have left hand navigation.

*Please connect with your writer/editor on the proper verbiage and capitalization of the last element of the breadcrumb*
 

**Visual representation of pages in the site map:** 

Pages shown in site map here: https://app.moqups.com/Rnc4BDEKrA/view/page/abd763ecc

<hr>

### Navigation, Entry Points and Crosslinking
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Entry point and crosslinking placement**

Priority | Placement | Link to | Description
--- | --- | --- | ---
Must | [Disability hub page](https://www.va.gov/disability/) |  www.va.gov/view-change-dependents |The existing "Add or remove dependents" link should be updated to point to the new static page to "View or change dependents".  Update the link label and teaser text as appropriate. Placement is the same as it currently is. 
Must | Disability left nav |  www.va.gov/view-change-dependents | The existing "Add or remove dependents" link should be updated to point to the new static page to "View or change dependents".  Update the link label as appropriate. Placement is the same as it currently is. 
Must | [View dependents tool](www.va.gov/view-change-dependents/view) |  www.va.gov/view-change-dependents/add-remove-form-686c/ |The tool should include a link to Add or Remove dependents and take the user directly to the form. 
Should | https://www.va.gov/search/?page=1&query=add+dependent | www.va.gov/view-change-dependents | Change item in top recommendations section for "add dependents" query to point to new page
Consider | https://www.va.gov/search/?query=disability+dependents | www.va.gov/view-change-dependents | Add to top recommendations section for additional key searches such as: "disability dependents", "my dependents", "remove dependents".
Consider/Future | Profile  | www.va.gov/view-change-dependents/view | Look at future opportunities to test user response to placement within the profile experience. 

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The existing page in the Disability hub - www.va.gov/disability/add-remove-dependent/ - will need to be redirected to  www.va.gov/view-change-dependents
- It is assumed that the technical team for eBenefits will handle the redirect of the legacy tool URLs when the tool is sunset.  The VA.gov team is unable to implement redirects for ebenefits.va.gov domain. 

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 

*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*

<hr>

### Additional Recommendations

<hr>

### Questions/Open Issues


