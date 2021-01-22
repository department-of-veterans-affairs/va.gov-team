# IA Review and Recommendations
**STATUS: IN PROGRESS** 

**Team:**  eBenefits/VSA dBenefits migration <br>
**Product/Featue:** View/select representative/POA <br>
**IA Review Issue:** 

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

- Experience will require an unauthenticated landing page for users that will then provide access to 3 functions: 
  - Find a representative - a search tool that allows users to find a representative
  - Appoint a representative - an online form to submit a request for a specific representative
  - View current representative - an tool that requires authentication and displays the user's currently appointed representative if they have one


Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Static landing page | www.va.gov/[static-page-name] |  Home > [Static page name] |
Rep search tool | www.va.gov/[static-page-name]/[tool-name]/ | Home > [Static page name] > [Tool name] |
Appoint a rep form | www.va.gov/[static-page-name]/[tool-name]/ | Home > [Static page name] > [Tool name]  |
View current rep tool | www.va.gov/[static-page-name]/[tool-name]/ | Home > [Static page name] > [Tool name]  |


<hr>

### Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Link Destination | Description
--- | --- | --- | ---
 | Disability hub | | 
 | Decision reviews hub | |
 | | |
 


***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- the eBenefits team will be responsible for retiring and redirecting the legacy tool(s) at ebenefits.va.gov
- The existing "Get help filing a claim" content page in Disability?

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**Design intent - 12-23-2020**
- Need to review terminology - POA versus representative - review SEO and user research; Per Peggy there are some forms that refer to this, so we should ensure we sync on terminology across the site.
- During meeting we discussed the need for broader research regarding whether this info should be part of the profile experience; I mentioned the need for deeper research on many of these stand alone tools to identify better IA.  This team will discuss with auth exp team whether this should be part of the profile in the short term, or if we leave it as stand alone until more user research can be completed. 
- IA feedback:https://github.com/department-of-veterans-affairs/va.gov-team/issues/17845


**Kick-off - 3/24/2020**
- Electing a Power of Attorney (POA)
- view yours, make a selection by searching db of accredited reps and electing one
- Similarities to facility locator in that you put in location and find someone near you, will be looking at those patterns
- Form 21-22 is for VSO appointment; form 21-22a is for the appointment of individuals
- Will be doing usability testing
- to do business with VA you have to be an accredited with OGC (accreditation database)
- Existing content pages: 
  - https://www.va.gov/disability/get-help-filing-claim/
  - https://www.va.gov/decision-reviews/get-help-with-review-request/
- Timeline
  - Dependancy claims
  - View payments
  - POA
  - Chapt 36 (Career counseling) - this may be moved ahead of POA
