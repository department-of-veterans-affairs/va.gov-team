# IA Design for School Administrator Forms
**STATUS: IN REVIEW**

This spec covers the general approach for digitized SCO forms that will be placed within the /school-administrators/ sub-directory of VA.gov. Information about each form will be added as it is worked on. 

**Team:** [Team name]
- Team name: govcio-vebt
- Slack: #govcio-vebt-team

**Related tickets/docs/files**
- Content and IA tickets:
  - Form 22-1919 - https://github.com/department-of-veterans-affairs/va.gov-team/issues/103835
  - Form 22-8794 - https://github.com/department-of-veterans-affairs/va.gov-team/issues/103841
- Design files:
  - [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1728420465790/8c90120e504744ecb3db02068818df573ddab93b)
  - [VEBT Figma file for 22-1919](https://www.figma.com/design/9dlTPeLY6kUq19m4YrjyF7/VEBT-Form-22-1919%3A-Conflicting-Interests?node-id=2529-24298&t=14gA2vCBa4YrkuJz-1)
  - [VEBT Figma file for 22-8794](https://www.figma.com/design/SYloiyh5mf1RjjZnkPiJH9/VEBT-Form-22-8794%3A-Certifying-Officials?node-id=170-13869&p=f&t=p4AFgOWqNe89Po3b-0)
  - [VEBT team's user flow](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718211888145/62b605a599fa763fd3a91f46fb89b74f0748d1bb)

**On this page:**
- [User/page flows](#user-page-flows)
- [IA placement](#map)
- [URL and title guidance](#non-veteran-experience-url)
- [URL, H1, title tag and breadcrumb guidance](#veteran-experience-url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Product team responsibiities](#responsibilities)


## <a name="flows"></a>User/page flows <br>
_Illustration of of page flow._

- Visitors will primarily access these forms through the "Resources for schools" page. As the parent page of these forms, the page must contain a link to each of the forms digitized. This page is maintained by the VEBT team.
- Each form will also have an "About form" page published within the "Find a VA form" search tool on VA.gov which will include a link to both the PDF and the online form.  These pages are published and maintained by the OCTO Content and IA team.
- These forms will also be findable via internal and external search engines. 

<img width="608" alt="image" src="https://github.com/user-attachments/assets/827e2732-9383-428e-a1e2-17d4b88be5e4" />


## <a name="map"></a>IA placement<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map).*

<img width="493" alt="image" src="https://github.com/user-attachments/assets/1b423a48-4ec0-4966-a453-682e4549cc39" />



## <a name="non-veteran-experience-url"></a>URL, breadcrumb, and title guidance

Follow the VA Design System guidance for URLs, breadcrumbs, and page titles.  
- [URLs](https://design.va.gov/components/url-standards/)
- [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles)
- [Breadcrumbs](https://design.va.gov/components/breadcrumbs)
- [Title tags](https://design.va.gov/content-style-guide/title-tags)*

Additional guidance:
- The following suggestions and guidance are provided to help you determine your final URLs and page titles. Only the main page of your experience/feature - typically the top or parent page - is provided. Beyond this top level page, you can create additional supporting pages as needed for your feature.  

1) [Page name/description] **COPY AS NEEDED**
- General guidance and rationale
  - *Example: Even though your form title includes the phrase "85% Rule", search data shows that individuals are often searching for the term "85/15 rule". For this reason we suggest using that in your page title, and your URL.  Keep in mind that special characters cannot be used in URLs, so this would translate to "85-15-rule" when included in a URL slug.*
  - *Example: Consider how familiar your audience is with the form number.  For Veterans, we often include the form number in the page titles and URLs to improve findability. An example of this pattern can be seen with this [disability compensation application](https://www.va.gov/disability/file-disability-claim-form-21-526ez/).* 


## <a name="veteran-experience-url"></a>URL, H1, title tag, and breadcrumb guidance - USE IF BUILT WITHIN THE VETERAN-FACING EXPERIENCE
*H1 and breadcrumb requirements for each modified or new page within the experience. Teams must follow established standards as documented in the [VA Design System](https://design.va.gov/).*
*Related standards: [URLs](https://design.va.gov/components/url-standards/), [H1s (Page titles and section titles)](https://design.va.gov/content-style-guide/page-titles-and-section-titles), [Breadcrumbs](https://design.va.gov/components/breadcrumbs), [Title tags](https://design.va.gov/content-style-guide/title-tags)*

The following URLs, H1s, and breadcrumbs are final.  If any changes are needed to these elements, please work with IA to review and finalize. 

1) [Page name/description] **COPY AS NEEDED**
- URL:
- H1: 
- Breadcrumb: 
  - Per standards for the breadcrumb component, the breadcrumb must match the IA of the page and current page segment must exactly match the H1 of the current page. Your breadcrumb should look like:
  - VA.gov home > [Insert page hierarchy]
- Title tag:
  - Per standards for title tags, the initial section of the title tag should match the H1 of the current page presented in initial caps formatting. Your title tag should look like:
  - [Insert Page H1] | Veterans Affairs
- Notes: 



## <a name="nav"></a>Entry points supported by centralized content and IA team <br>
*Entry points are the main CTAs provided in navigation or page content that provide access for users to your feature or content page.*

The centralized content and IA team will support you in implementing entry points that live within the Veteran and beneficiary experience of VA.gov.  These entry points are listed below and will be implemented after your feature is live to 100% of users. 

1) Placement: [Name/description of placment] **COPY AS NEEDED**
- Description: 
- Where this will link to:
- Notes:


## <a name="redirects"></a>Redirects
*Redirects should be implemented when a page is moved or archived to ensure visitors do not receive a "404 - Page not found" error.*

The product team is responsible for identifying, requesting, and implementing any redirects. 

The standard process for redirects can be found on the Platform website. Please note that ALL redirects require you to submit a [Redirect Request Issue](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) to be reviewed and approved before implementing. Please submit at least 2 weeks in advance.*  


 
## <a name="responsibilities"></a>Summary of Product team responsibilities

- Follow guidance provided in document as closely as possible.
- Report your final URLs back to the IA and team that provided this guidance so they have awareness of overall VA.gov IA.
- Submit a centralized content and IA ticket for support in implementing the entry points recommended above
- Submit a redirect request ticket for approval on any redirects at least 2 weeks prior to implementing them

  <hr>

  ## Supporting information

**Search data for: www.va.gov/school-administrators/**
Summary: These forms are not currently available in a digital format or through search, so data is for related search terms resulting in traffic/clicks to the /school administrators page. 
- 12 month period
- Total clicks from Google search results: 7,953
- Queries and resulting clicks (all queries including the term)
  - official - 172 clicks, 33.9% CTR
  - sco - 1k, 12.7% CTR
  - certify - 172, 33.9% CTR
  - There were no searches containing variations of the following words resulting in a click to this page
    - conflict
    - proprietary
    - designate





