# IA Review and Recommendations

**Team:** Public Websites

**Product/Featue:** VA Forms Search Tool Modernization

**Background/Context:**
- The primary users are Veterans, family members, caregivers, VSOs, and others who need to submit a form to VA. The primary task they are trying to accomplish is to find a form and download it, so they can complete it and submit it.
- Many users are unaware that some of these tasks are now available as online tools. The new MVP page should provide them the same access to paper VA forms while also making users aware of digital alternatives, if one is available.

**Review Date:** Jan 14, 2020

**IA Review Issue:**  https://github.com/department-of-veterans-affairs/va.gov-team/issues/3887
*Lots of good technical convo in issue.*

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

Pages shown in site map under the “Veteran Tools ” group: https://app.moqups.com/Rnc4BDEKrA/view/page/a4dc7a719

**PAGE 1:** “Find a VA form” tool landing page
- URL: www.va.gov/find-forms
  - *Please see notes below under “Redirects” regarding this URL recommendation*
- Breadcrumb: Home > Find VA forms

**PAGE 2:** "Find a VA form" API Landing page
- URL: www.va.gov/find-form-data
  - *Please see notes below under "Redirects" regarding this URL recommendations
  - This page must have a "noindex" tag and be excluded from the xml sitemap. 

### Navigation/Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**Top Nav, Header and Footer**
-	Keep existing “Find a VA Form” link within footer
-	No additional options to be added to the top nav, header or footer. Update footer link.

**Crosslinking**
- VA.gov Search Results page right rail “More VA Search Tools” module - https://www.va.gov/search/?page=1&query=example+search
	- Add an option to “Find a VA Form”, or replace the current “Find VA Forms and publications” option. 
	- Recommend placing this as the first option in the list if it is one of the most frequently used search tools on the site


### Redirects/Canonical <br>
*Identify if any redirect or canonical tags are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

The existing tool has strong SEO value and **WILL BE** permanently redirected (301) to the **new URL: www.va.gov/find-forms/**
- https://www.va.gov/vaforms/
- https://www.va.gov/vaforms/default.asp
- https://www.va.gov/vaforms/search_action.asp and all parameter variations of this URL
- https://www.va.gov/viewer.htm 
- https://www.va.gov/vaforms/help.asp 
- https://www.va.gov/vaforms/contact.asp 

The many child URLs that act as search landing pages for specific **SHOULD NOT BE REDIRECTED** at this time
- https://www.va.gov/vaforms/form_detail.asp and all parameter variations of this URL (i.e. www.va.gov/vaforms/form_detail.asp?FormNo=22-1990)
- Each individual variation/URL will be redirected to a specific new URL as part of a separate work effort (Form search detail pages). 

**Additional investigation should be done to identify any other content/sub-URLs that may be impacted - this is not an all-inclusive list.**


To support the technical implementation/API work, a duplicate version https://www.va.gov/vaforms/search_action.asp will be created for the API to hit and collect data.  
- New URL: www.va.gov/find-form-data
- This new duplicate page must have a "noindex" tag and be excluded from the xml sitemap. 
- This duplicate page can likely be removed once the API can point directly to the forms database.


For redirects, please submit a Redirect Request at least 2 weeks in advance per the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).


### Additional Notes/Recommendations

