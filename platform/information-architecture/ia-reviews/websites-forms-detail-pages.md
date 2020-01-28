# IA Review and Recommendations

**Team:** Public Websites

**Product/Featue:** Forms Detail Pages

**Background/Context:**
- These pages will provide a SEO landing page for core form number searches.  This is a redesign of existing legacy landing pages. The top forms/online tools will be customized/high-touch while all others will be dynamically generated content via an API. 

**Review Date:** 

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
- Structure: www.va.gov/form-[form-nbr]
- For example: www.va.gov/form-10-10ez,  va.gov/form-21-526ez

**Breadcrumb** 
Home > VA form 21-526ez


### Navigation/Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

No navigational links will be added to these pages, users will access these pages directly through external search and va.gov search.

**User Flows:**  https://app.moqups.com/Rnc4BDEKrA/view/page/a85b476d9

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

All existing legacy form detail pages will need to be redirected. 
Options for redirects:
- Option 1
  - Select key legacy landing pages will be redirected to a specific new form detail page (the top 25 custom pages)
  - All other legacy landing pages will be redirected to the VA Forms search tool
  - Considerations: Key page redirects will ensure we maintain/transfer SEO value to the new detail page, while the general redirect to VA forms search tool will mean SEO value on legacy landing pages will be lost/not transferred to the new form detail page.  If SEO value on many of the landing pages is very low, this is a more simplistic redirect approach. The general redirect approach will also mean that users who click through old links will have to execute their search again in the forms search tool to get to a result. 
- Option 2
  - All legacy landing pages are individually redirected to a corresponding new form detail page
  - Considerations: We maintain all SEO value on all legacy landing pages without adding additional steps for our users. This is an more extensive mapping exercise. 
  
  
For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).


### Additional Notes/Recommendations
