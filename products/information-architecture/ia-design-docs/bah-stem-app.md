# IA Review and Recommendations
**STATUS: COMPLETE 8/6/2020** 

**Team:** BAH

**Product/Feature:** STEM Scholarship Application

**Background/Context:**  Ability for users to complete a separate online application for the STEM scholarship

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/11284

<hr>

### IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements. *

**Approach:**

- Work will include a static content page - migrated from legacy va.gov - as well as an online application.  
- The existing form wizard on the education How to apply page will be modified to direct users to this application when applicable.  Users can also access the form directly through direct link or navigating through the education structure to the application. 
- The content page and application will live under "other education benefits" within the 'Get benefits' spoke of the education hub.  

**URLs and Breadcrumbs**

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
STEM static content page | www.va.gov/education/other-va-education-benefits/stem-scholarship  | Home > Education and training > Other VA education benefits > Edith Nourse Rogers STEM Scholarship  | This is a new static content page that will include an overview of the scholarship, eligibility info and an "Apply now" button that will link to the online application
STEM application | www.va.gov/education/other-va-education-benefits/stem-scholarship/apply-for-scholarship-form-22-10203  | Home > Education and training > Other VA education benefits > Edith Nourse Rogers STEM Scholarship > Apply for the Rogers STEM Scholarship <br> *Interim breadcrumb: Home > Education and training > How to apply > Apply for the Edith Nourse Rogers STEM Scholarship* | This is the online application for the scholarship. <br> The interim breadcrumb will be used for initial launch due to the static page launching at a later time.  Since the primary entry point will be from the How to apply page until the static page launches, this interim breadcrumb will allow users to easily get back to that page.  



<hr>

### Navigation Changes and Entry and Exit Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

Priority | Placement | Label | Description
--- | --- | --- | ---
Must | [Other VA education benefits page](https://www.va.gov/education/other-va-education-benefits/) | To be determined by PW team | This content page should be revised to properly link to all child pages within the section, including this new STEM scholarship application. It should also be revised to remove the reference to "if you don't qualify for Post-9/11" as the content of the section is now growing to include any other benefits outside of GI Bill. 
Must | Education hub left nav | Edith Nourse STEM Scholarship | Under 'Get benefits' spoke, as a child of "Other VA education benefits" - order would be VEAP, National Call to Service, Edith Nourse STEM Scholarship, REAP
Must | [Education hub page](https://www.va.gov/education) | Existing "Other education assistance programs" | Should review teaser text to ensure it correctly reflects the addition of a scholarship as additional options. 
Should | [Post-9/11 GI Bill benefits page](https://www.va.gov/education/about-gi-bill-benefits/post-9-11/) | TBD by PW team | Could be a related link or a link inline with other content to reference the ability to apply for STEM scholarship
Consider | [Undergraduate and graduate programs page](https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/undergraduate-graduate-programs/) | TBD by PW team | Could be a related link or a link inline with other content to reference the ability to apply for STEM scholarship
Consider | Consider REMOVING from the form wizard on How to apply and Eligibility pages in Education | n/a | Consider removing the question from the form wizard and treating this similar to other "fringe" benefits like  Yellow Ribbon - this would leave the wizard to focus on the core education benefit.   

***Priority:** Must = Required; Should = Strongly encouraged/best practice; Consider = Suggestion/at your discretion/possible enhancement* 

<hr>

### Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

- The Edith Nourse STEM page will be rewritten and brought into the modernized va.gov experience under the Education benefits hub.  Therefore the legacy page, created within Team site, should be redirected to the new page to eliminate duplicate content and transfer SEO juice.  

Current URL | Redirect to
--- | ---
https://benefits.va.gov/gibill/fgib/stem.asp | wwww.va.gov/education/other-va-education-benefits/stem-scholarship

**Please submit a request for the redirect** using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>

### Additional Details/Recommendations

<hr>
<hr>

### Meetings Notes and Background Info

**6/1/20 - Usability testing prep**
- Include findability task within research
- the breadcrumbs and URLs on the existing education forms were never modernized/updated as part of WBC, this new application should be launched with correct IA
- Legacy page on STEM still exists, should this be moved over?
- Feedback documented here: https://github.com/department-of-veterans-affairs/va.gov-team/issues/9699


**4/21/20 - kick-off**
- breaking out the STEM application into its own stand alone application
- currently part of the 1995, will be the 22-10203
- how to apply wizard will be modified to direct users appropriately
- hoping to reduce/eliminate submissions for this scholarship from  users that are not eligible
- this is a lower priority on the education list, timing is tbd but possibly early July
- Open questions:
  - Existing legacy page wasn't migrated during WBC: https://benefits.va.gov/gibill/fgib/stem.asp; need to determine if this content should be migrated over, it currently links directly to the 1995
 

  

