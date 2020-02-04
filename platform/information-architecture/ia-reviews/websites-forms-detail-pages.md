# IA Review and Recommendations - DRAFT

**Team:** Public Websites

**Product/Featue:** Forms Detail Pages

**Background/Context:**
<br>These pages will provide a SEO landing page for core form number searches.  This is a redesign of existing legacy landing pages. The top forms/online tools will be customized/high-touch while all others will be dynamically generated content via an API. 

**Review Date:**  *In progress, see open questions/issues at bottom*

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/3836


### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

**Structure**
- All form detail pages will be root level pages, they will not be related to the forms search tool in terms of IA


**URLs**
- All landing pages will have a consistent structured URL that can be easily dynamically generated. 
- The form number will be pulled from the forms data and used as the URL along with the word "form" 
- Spaces in a form number will be replaced by a dash
- All alpha characters will be lower case
- Structure: www.va.gov/about-form-[form-nbr]
- For example: www.va.gov/about-form-10-10ez,  va.gov/about-form-21-526ez

**Breadcrumb** 
Home > VA form 21-526ez 
*need to determine where this data comes from to formulate the URL and the breadcrumb*


### Navigation/Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

No navigational links will be added to these pages, users will access these pages directly through external search and va.gov search.

**User Flows:**  

![va-forms-user-flows](https://user-images.githubusercontent.com/20994159/73305106-155ab500-41df-11ea-9edc-88d63c940399.png)

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

All existing legacy form detail pages will need to be redirected. 
We will do server-side redirects of legacy form detail landing pages with the following approach:
- For X number of high search value form detail landing pages, we will do 1:1 redirect mapping from the current legacy form detail landing page to the new.
- For the remaining (562-X) landing pages, we will do a default redirect to the new main search page URL (va.gov/find-forms)
  
 
For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).


### Additional Notes/Recommendations


### Open Questions/Issues

- Need technical conversation with Drupal team on Drupal auto-URL generation.  How are URLs generated?  Based on what content/data? This information will help inform:
  - The standard URL structure for every landing page (custom and dynamic)
  - We will need to know exact URL of new landing pages so we can map the legacy redirects accurately
