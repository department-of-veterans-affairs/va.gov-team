# IA Design for Enrollment verification
**STATUS:  IN PROGRESS**

**Team:** Educaton

**Product/Featue:** Enrollment verification

**IA Request:** https://github.com/department-of-veterans-affairs/va.gov-team/issues/33863

**On this page:**
- [User flows](#flows)
- [IA structure, URLs and breadcrumbs](#ia)
- [Navigation and entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/Page Flows <br>
*Description of how users will flow through the experience*

![image](https://user-images.githubusercontent.com/20994159/151576059-1fd0e483-e855-4ebb-8a59-9b24b43a343b.png)

## <a name="ia"></a>IA Structure, URLs and Breadcrumbs <br>
*Description of IA or link to site map documentation, the final URLs to be used and breadcrumb requirements.*

- This new products consists of 
  - a static landing page that is SEO optimized, and includes a sign on prompt (unauth users) or link to the school verifications page (auth users with Post-9/11 benefits), as well as a link to an external site (WAVE) for users that do not have Post-9/11 benefits.  
  -  a dynamic page showing needed and completed school verifications (authenticated Post-9/11 bill recipients)
  -  a multi-page form flow that allows the user to verify their school enrollments
- These new pages will all live in the Education benefits hub as a task within the "Manage benefits" spoke. 

![image](https://user-images.githubusercontent.com/20994159/151597273-08568283-61c4-40c9-a8e7-b6eca2190b0a.png)


**Page** | **URL** | **Desktop Breadcrumb** | **Mobile breadcrumb** | **Notes**
--- | --- | --- | --- | ---
Verify school enrollment static landing page   | www.va.gov/education/verify-school-enrollment/  | [Home](www.va.gov/) > [Education and training](www.va.gov/education/) > **[H1 of static page]**   |  < [Education and training](www.va.gov/education/) | 
Enrollment verifications list (authenticated) page | www.va.gov/education/verify-school-enrollment/enrollment-verifications/  | [Home](www.va.gov/) > [Education and training](www.va.gov/education/) > [H1 of static page](www.va.gov/education/verify-school-enrollment/) > **[H1 of verification list page]** | < [H1 of static page](www.va.gov/education/verify-school-enrollment/) | 
Verify enrollments form | www.va.gov/education/verify-school-enrollment/enrollment-verifications/verify (Correction: changed from /verity on 12/14/22 by Joni Chan) | [Home](www.va.gov/) > [Education and training](www.va.gov/education/) > [H1 of static page](www.va.gov/education/verify-school-enrollment/) > [H1 of verification list page](www.va.gov/education/verify-school-enrollment/enrollment-verifications/) > **[H1 of verify enrollments form initial page]**  | < [H1 of static page](www.va.gov/education/verify-school-enrollment/) |  For form flows, the breadcrumb remains consistent throughout all pages of the form flow, it does not track the user through each page of the form.  

**NOTE** The mobile experience breadcrumb only shows 1 link to the immediate parent page of the current page.  Please see the breadcrumb standards 

## <a name="nav"></a>Navigation and Primary Entry Points <br>
*The primary entry points and changes to global navigation, as well as any potential crosslinking opportunities*

**A/R/M** | **Page/component** | **Link destination** | **Placement/description of change**
--- | --- | --- | ---
Modify | Education hub page   | www.va.gov/education/verify-school-enrollment/   | Replace the existing WAVE link and teaser text AND move the option to be the 3rd option in the "Manage benefits" section to live after the "Check your Post-9/11 GI Bill benefits". 
Modify | Education left nav  |  www.va.gov/education/verify-school-enrollment/   | Replace the existing WAVE link AND move the option to be the 3rd option in the "Manage benefits" section to live after the "Check your Post-9/11 GI Bill benefits".
Modify | [VA.gov search best bet for "verify school enrollment"](https://www.va.gov/search/?query=verify%20school%20enrollments&t=false) | www.va.gov/education/verify-school-enrollment/   | Replace the existing WAVE link and teaser text. 
Add | [Verify payments static page](https://staging.va.gov/va-payment-history/) |  www.va.gov/education/verify-school-enrollment/ | Add link and teaser text to the "More information" box at the bottom of the page


## <a name="redirects"></a>Redirects <br>
*Identify if any redirects are needed.  This is not intended to be a complete and final list of redirect needs, but directional information only.*  

-  

Please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance. 
*For more information, see the [Redirect Request Process](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/platform/information-architecture/request-redirect.md).*


<hr>
<hr>

## <a name="notes"></a>Meetings Notes and Background Info

