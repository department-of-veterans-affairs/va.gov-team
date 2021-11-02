# IA Review and Recommendations
**STATUS: IN PROGRESS** 

**Team:**  eBenefits/VSA dBenefits migration <br>
**Product/Featue:** View/select representative/POA <br>
**IA Review Issue:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/23490

<hr>

### IA Structure, URLs and breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

Experience will include an unauthenticated landing page that will include CTAs for 2 tools/functions: 
1. Find a representative - a search tool that allows users to find a representative; flow may also include submission of form 21-22/21-22a to request rep
2. View current representative - a tool that requires authentication and displays the user's currently appointed representative(s) if one is on file; This information may be added to profile in future, but will exist as it's own separate page initially. 

 
![image](https://user-images.githubusercontent.com/20994159/139327667-f4543160-3b46-4f00-a129-114b035f6780.png)


Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Static landing page | www.va.gov/find-manage-accredited-representative |  Home > [Static page H1] |  
Find rep tool | www.va.gov/find-manage-accredited-representative/find-rep | Home > [Static page H1]  > [Tool H1] |
View current rep tool |  www.va.gov/find-manage-accredited-representative/your-rep | Home > [Static page H1]  > [Tool H1]  | This page will require authentication


<hr>

### Primary navigation and entry points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

A/R/M | Placement | Link Destination | Description
--- | --- | --- | ---
Remove | Disability hub page | --- | Remove the existing "Get help filing a claim link" and teaser text
Add | Disability hub page | www.va.gov/find-manage-accredited-representative | Add link and teaser as last option under "More information and resources"
Remove | Disability left nav | --- | Remove the existing "Get help filing a claim link"
Remove | Decision reviews hub page | --- | Remove the existing "Get help requesting a decision review" and teaser text
Add | Decision reviews hub page | www.va.gov/find-manage-accredited-representative | Add link and teaser as second option under "More information and resources"
Remove | Decision reviews left nav | --- | Remove the existing "Get help requesting a decision review"



<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

Page | URL | Notes
--- | --- | ---
Disability "Get help" page | https://www.va.gov/disability/get-help-filing-claim | Retire and redirect
Decision reviews "Get help" page | https://www.va.gov/decision-reviews/get-help-with-review-request | Retire and redirect 
eBenefits VSO search | https://www.ebenefits.va.gov/ebenefits/vso-search | eBenefits.va.gov team will be responsible for retiring and redirecting


Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**Regroup with product team - 10/27/2021**
- Primary terminology to be used is "accredited representative" - this refers to all types of individuals/organizations that can be accredited reps (VSOs, attorneys, etc.)
- Mikki to discuss placement of appointment rep within profile with Profile team
  - 10/27 - discuss with Samara, agreed to keep this content on its own page outside of profile right now.  Profile does not have resources to assign to work, and there is no user feedback to drive placing it there.  This also follows how disability ratings were handled, where primary content/tool lives outside of profile, and profile just shows brief info.  Can loop back around in future for display of content in profile as we learn more. 
- We have 2 legacy content pages around getting help from accredited reps that will need to be retired and redirected
  - we will need to determine if content will go on new landing page or be moved to a R&S article
  - will need to discuss with decisions review team, Beth to assist
- VSOs/stakeholder discussions - feedback was that reps primarily help with disability and health care benefits; external articles and other legacy content refer to them being able to help with all types of benefits
  - we will need to explore this a bit more to determine if there are other key entry points from benefits other than disability. 

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
