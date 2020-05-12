# IA Review and Recommendations

**STATUS: ~COMPLETE 3/20/2020~ REVISED 5/11/2020**

**Team:** Public Websites

**Product/Featue:** Forms Search Detail Pages

**Background/Context:**
- The primary users are Veterans, family members, caregivers, VSOs, and others who need to submit a form to VA. The primary task they are trying to accomplish is to find a form and download it, so they can complete it and submit it.
- Many users are unaware that some of these tasks are now available as online tools. The new MVP page should provide them the same access to paper VA forms while also making users aware of digital alternatives, if one is available.

*The original approach to the form detail pages, was to have them as standalone search landing pages.  The approach has since been altered to have these become detail landing from the Forms search tool (aka Find a Form).*

**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/3836

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

**Structure**
- All form detail pages will be child pages of the Forms search tool.

**URLs**
- All landing pages will have a consistent structured URL that will be dynamically generated from form data. 
  - The form number will be pulled from the forms data and used in the URL preceeded by "/about-form-"  - exact data field TBD
  - Spaces in form numbers will be replaced by dashes
  - All alpha characters will be lower case

***URL Structure: www.va.gov/find-forms/about-form-[form-nbr]***

**Breadcrumb** 
- The breadcrumb will have a consistent structured label that is dynamically generated from form data
  - The form number will be pulled from the forms data and used in the breadcrumb preceeded by "About form"
  - Spacing and capitalization will be displayed as it is in the data
  
***Breadcrumb Structure:  Home > Find forms > About form [form number]***


Example Form data | Example URL  | Example Breadcrumb
--- | --- | ---
10-10ez | www.va.gov/find-forms/about-form-10-10ez | Home > Find forms > About form 10-10ez
21-526EZ | www.va.gov/find-forms/about-form-21-526ez | Home > Find forms > About form 21-526EZ 
VA 4107 VHA | www.va.gov/find-forms/about-form-va-4107-vha | Home > Find forms > About form VA 4107 VHA 


**Drupal URL Requirements**
- Drupal will auto-generate the URL based on the specified form data to complete the URL structure above. 
- The URL, once established, should be locked down so it is not changed if the data is changed - this is to ensure we do not have random URL changes that will impact SEO.
- The auto-generated URL can only be changed by being manually overwritten by the Public Websites team if they choose to do so - changing the URL will likely require redirects to be put in place to transfer SEO juice.

<hr>

### Navigation, Entry Points and Crosslinking <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

No navigational links will be added to these pages, users will access these pages directly through external search, va.gov search, and VA find forms search only.

**User Flows:**  

![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/5b75f40f-84ab-4933-96e9-4a00b5952b79)

- External search, VA.gov search, and VA.gov Find form tool results will all include 
  - a direct link to the online form (preferred)
  - a link to the How to Apply page
  - a direct link to the pdf (least preferred).
  - a link to these form detail pages.
- This model should be watched to ensure we do not negatively impact SEO for any of the above options and optimize for the best user experience. 

<hr>

### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- All existing legacy form detail pages will need to be redirected so users do not receive a 404 when trying to visit an old URL from search or old link. 
- We will do server-side redirects of legacy form detail landing pages with the following approach:
  - For X number of high search value form detail landing pages, we will do 1:1 redirect mapping from the current legacy form detail landing page to the new.
  - Non-VA forms that rank high will be redirected to their appropriate destination on the corresponding site (i.e. OPM). 
  - For the remaining (562-X) landing pages, we will do a default redirect to the new main search page URL (va.gov/find-forms)
- Specific redirects will be documented in a redirect request ticket.  
- We will need to identify the data source that will be used to generate the URLs for those legacy detail pages that we need to 1:1 redirect.
 
For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).

<hr>

### Additional Notes/Recommendations

<hr>

### Open Questions/Issues

- Facebook currently appends a "fbclid" parameter to URLs when accessed through a link in a FB post.
  - If a specific form page is redirected, will the redirect recognize the request with the additional parameter and redirect appropriately?
  - This can be resolved as part of the redirect process. 
  
