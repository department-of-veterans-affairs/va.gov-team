# IA Design for Montgomery GI Bill Benefits - Verify Your Enrollment
**STATUS: In progress**

**Team:** Verify Your Enrollment (VYE)

**IA Request:** [Link to Sitewide Content and IA intake request](https://github.com/department-of-veterans-affairs/va.gov-team/issues/68205)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Best bets](#bestbets)
- [Staged rollout](#stagedrollout)


## <a name="flows"></a>User/page flows <br>
*Illustration and/or description of how users will flow through the experience. The user flow helps illustrate how visitors will navigate to and through your product/feature, ensures all types of visitors and scenarios are accounted for, and aids in identifying all content and messaging needs.*

[Team's Miro](https://miro.com/app/board/uXjVMt6pMHo=/)

IA created a [VYE flow Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1711750816135/b561b61b07b246ced1462aa92265079d26571034?sender=u79ee90295fdb006d7f463212) to document what the flow could like if both tools are integrated in www.va.gov/education/verify-school-enrollment/enrollment-verifications/ 

In addition, current user flow is the tool landing page > verification step > back to tool landing page. Users will see a green successful submission message. What would this look like if verification isn't successful?

## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*


![Sitemap for Verify School Enrollment](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122128479/d706d45e-5326-408e-a4d0-f54182bcc7a8)


The tool to verify enrollment for Montgomery GI Bill Benefits will live on the same static page as Post-9/11 VYE (outlined in black), but will have it's own URL (outlined in an orange dotted line at level 3). We recommend having both tools on the same page. Ideally, this page would only show the relevant benefit to the Veteran so folks don't have to choose between benefits. Due to where the team is at development, it's out of scope at this time to coordinate with the other VYE team about integrating MGIB tool on the same URL, but the team is open to adding this to the backlog for a later version.

## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*


**1) H1 of page (authenticated landing page with list of enrollment verification) - New**
- URL: www.va.gov/education/verify-school-enrollment/mgib-enrollments/
- Breadcrumb: TBD by Sitewide Content
- Notes: Ensure that the breadcrumb matches the H1

**2) H1 of page (form flow to verify enrollment) - New**
- URL: www.va.gov/education/verify-school-enrollment/mgib-enrollments/verify-information/
- Breadcrumb: TBD by Sitewide Content
- Notes: Breadcrumb will not change as folks go through the form flow, but the sub-URL should. This form flow only has one page so this might not apply, but something to think about if additional screens are ever added. Here is our guidance on creating sub-URLs for future reference:

  > Teams can choose their own sub-urls, or get help from CAIA in choosing them or vetting them.
    Note some standard sub-urls:
  >
  > - /introduction: use on the first page of the actual form (not the static page in drupal)
  > - /review OR /review-and-submit: use for review steps in forms or tools
  > - /results: use to display the results of a tool (not usually used in a form)
  > - /confirmation: use for the confirmation page after form submission
  >
  > Subtask URL slugs should be short, plain language, and drawn from the H1 if possible. 
    Reminder: Don’t create unnecessary or empty subdirectories when creating sub-URLs!

From Ryan in Figma: 

> With BDN, we can only update all or none, unfortunately. Gladly, this will change in the future when we're away from BDN.


## <a name="nav"></a>Entry points <br>
*A list of new internal entry points, as well as changes to any existing entry points. This list focuses on the primary entry points and does not include all possible crosslinking opportunities. Consider whether a Search Best Bet might be useful if this product enhances a Top Task for veterans.*

### Primary entry point - this is the main entry point where folks can access the tool
1. **[Verify your school enrollment](https://www.va.gov/education/verify-school-enrollment/)** - Add
  - Placement description: In section titled "For Montgomery GI Bill benefits "
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/education/verify-school-enrollment/mgib-enrollments/
  - Notes: Connect with Sitewide Content to update language referencing WAVE. Since there will be green sign-in modals, ensure that it is clear which benefit is the one for a Veteran.

~~2. **[About VA Form 22-8979](https://staging.va.gov/find-forms/about-form-va-form-22-8979/)** - Add~~
  ~~- Placement description: Below "Downloadable PDF"~~
  ~~- Link label: TBD by Sitewide Content~~
  ~~- Link destination: www.va.gov/education/verify-school-enrollment/~~
  ~~- Notes: As mentioned in Figma, we are proposing that there is an entry point to the static page instead of just to MGIB in case it applies to Post-9/11 VYE, then folks are directed to the static page where they can choose which VYE tool applies to them. Team confirmed that this form applies to Post-9/11 as well~~

**Form 22-8979 is only available for folks who are enrolled in CH35 (Survivors’ and Dependents’ Educational Assistance (DEA) program) so we are removing this as an entry point**

### Crosslinks
*List of additional crosslinking opportunities across VA.gov. This requires stakeholder approval and collaboration with Sitewide Content so this list will be iterative as we get feedback.*

1. **[Montgomery GI Bill Active Duty (MGIB-AD)](https://www.va.gov/education/about-gi-bill-benefits/montgomery-active-duty/)** - Modify
  - Placement description: Under section titled "How do I get these benefits?" step 3
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/education/verify-school-enrollment/mgib-enrollments/
  - Notes: Replace link destination to the new VYE tool.

2. **[Montgomery GI Bill Selected Reserve (MGIB-SR)](https://www.va.gov/education/about-gi-bill-benefits/montgomery-selected-reserve/)** - Modify
  - Placement description: Under section titled "Ask your school or training program to certify your enrollment" step 4
  - Link label: TBD by Sitewide Content
  - Link destination: www.va.gov/education/verify-school-enrollment/mgib-enrollments/
  - Notes: Replace link destination to the new VYE tool.



## <a name="redirects"></a>Redirects <br>
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=jennymayoco%2C+kristinoletmuskat%2C+strelichl%2C+FranECross&labels=sitewide+CAIA%2C+Sitewide+IA%2C+Public+Websites%2C+VA.gov+frontend%2C+Redirect+request&projects=&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
https://www.gibill.va.gov/wave/index.do | www.va.gov/education/verify-school-enrollment/mgib-enrollments/ | Work with stakeholders and WAVE team so the WAVE redirects to the new tool.
https://www.va.gov/resources/gi-bill-wave-faqs/ | www.va.gov/education/verify-school-enrollment/ - redirecting to static page as per feedback from Beth and Randi | IA can create a redirect ticket for this



## <a name="bestbets"></a>Best Bets<br>
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. These suggestions are selected for specific terms and are intended to help veterans and their beneficiaries find relevant results quickly. We want to make sure that best bets are not linking to the deprecated page.*

Update existing best bet for [static page](https://www.va.gov/education/verify-school-enrollment/) so it no longer references WAVE - this has been updated 5/15/24

## <a name="stagedrollout"></a>Staged Rollout<br>
*Is the team planning a staged rollout? Pages/sections that can't have a widget: find a form pages, within accordions, hub pages*

**[Which static page has the widget, ie the main entry point?]**

This will be a staged rollout

<hr>
<hr>
