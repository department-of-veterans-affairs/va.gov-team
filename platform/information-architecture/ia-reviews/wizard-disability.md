# IA Design and Recommendations
**STATUS: IN PROGRESS**

**Product/Featue:** Disability file a claim wizard

**IA Request:** 

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>



![image.png](https://images.zenhubusercontent.com/59ca6a73b0222d5de4792f1d/5c007d33-eaac-4fba-a088-22a09ed9c46e)


1. Skip/ignore wizard - This is an optional feature of the wizard pattern.  
    - On the wizard page, an option may be provided that allows the user to skip the wizard or ignore's its recommendation if they want to continue forward on the current application/from.
    - Team to determine if this feature should be allowed for the 526. 
2. Shared wizards - This feature does not apply to the 526. 
~The same wizard may be shared across multiple related applications - i.e. the wizard on each of the education applications will be the same wizard, however the wizards on the chapter 31 and 36 wizards are different.~
    - ~If a wizard routes a user to a different application that shares the same wizard, the user will not need to complete the wizard again.~
    - ~If a wizard routes a user to a different application with a different wizard, the user will need to complete that application's wizard.~ 
3. Start over - This is an optional feature of the wizard pattern.  
    - On the /introduction page when the subway map is displayed, an option may be provided that allows the user to start over/go back complete the wizard again. 
    - This option only appears on the /introduction page
    - ~For wizards used within a application or form "family (i.e. education applications)~ Not applicable to the 526 
      - ~If the user did the wizard on application A, continued to application A, clicking "start over" would return them to the default state of application A~
      - ~If the user did the wizard on application A, was routed to application B, clicking "start over" would return them to the default state of application A~
4. Navigate away/abandon application 
    - If a user navigates away from their application by either navigating away from an unsaved form, choosing to start a new application, or their saved application has expired,  they will need to start over when they return to the application  - in other words, they will need to complete the wizard again. 
6. Resume saved application 
    - If an authenticated user resumes a saved application, they would not need to complete the wizard again.  The saved in progress application will return them to the appropriate place within the application form flow. 

## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*


Page | URL | Breadcrumb | Description
--- | --- | --- | ---
 526 Application - wizard chapter | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | n/a  |  The wizard should live on its own chapter of the application.  This chapter will come before /introduction.   | 


## <a name="nav"></a>Navigation and Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*
<br>***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

**Priority** | **Placement** | **Update existing or New?** |**Destination** | **Description**
--- | --- | --- | --- | ---
Must  | Home page - Disability top tasks | Update  | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Update destination of existing link to file a claim
Must  | Home page - Disability top tasks | Update  | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Update destination for existing "File for increased disability compensation" link.
Must  | Top Nav - Disability fly-out | New  | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Add link to the left column of the Disability fly-out.  Exact verbiate TBD by writer.  Place as last option in the left column. 
Must  | Top Nav - Disability fly-out | Update | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Existing link to file a claim
Must  | [Hub page - Disability](www.va.gov/disability/) | New  | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Add link and teaser text to the "Get benefits" spoke, place after "How to apply".    Exact verbiate TBD by writer.  
Must  | [Hub page - Disability](www.va.gov/disability/) | Update | www.va.gov/disability/file-disability-claim-form-21-526ez/start  |  Update destination of "File for increased disability" link in the "Manage benefits" spoke. Currently links to the "How to apply" page, should now go directly to the 526 application. 
Must  | Left Nav - Disability | New | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Add link the left nav in the Disability hub.  Exact verbiage TBD by writer - should be close or exact match to H1.  Place as 3rd option in the "Get Benefits" spoke, just after "How to apply". 
Must  | Left Nav - Disability | Update | www.va.gov/disability/file-disability-claim-form-21-526ez/start  | Update destination of "File for increased disability" link in the "Manage benefits" spoke. Currently links to the "How to apply" page, should now go directly to the 526 application. 
Must | [Disability - How to apply page](www.va.gov/disability/how-to-apply) | Update | www.va.gov/disability/file-disability-claim-form-21-526ez/start | Remove wizard from static page, link directly to application, revise content as needed


### Entry point updates

The following pages have links with labels that indicate they are going directly to file a claim, but link to the "How to apply" page instead.  Link labels should be modified to clearly indicate where they are taking the user (i.e. How to apply page versus the actual application).** 

Other sibling pages have a link label of "Find out how to file a claim for disability compensation."  Recommend using the same verbiage.  If different verbiage is used, all other pages should also be updated for consistency. 

- https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/
- https://www.va.gov/disability/eligibility/hazardous-materials-exposure/camp-lejeune-water-contamination/
  - This page includes a link to eBenefits, need to determine if this is still an accurate destination. 
- https://www.va.gov/disability/how-to-file-claim/additional-forms/





## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

