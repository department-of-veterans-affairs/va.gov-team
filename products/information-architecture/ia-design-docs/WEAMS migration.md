# IA Design for WEAMS Migration
**STATUS: [In progress]**
3/14/2025 - MN: Updated to include Yellow Ribbon integration


**Project info:**
- Team: EDM Team - Cassidy Beach (PM), Theresa Simone (PM), Sneha Kulkarni (UX) Jenn Drahota (BA)
- CAIA IA: Sam Walker
- Tickets:
  - CAIA Intake ticket: [92369](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92369)
  - IA Tracker: [95208](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95208);
- [IA Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729183095781/13879f018516bd9dd354f278919b5a9c101a0f1f?wid=136-1729183109815).
- Figma design files: [Desktop](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=72-1228&node-type=canvas&t=etnWBEfJkurm6JoP-0), [Licensing & Certification on mobile](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=1122-38781&node-type=canvas&t=JDAGEOPE8D1fFZwJ-0), [Search results on mobile
](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=2273-321672&node-type=canvas&t=XqMTcBSnWK9UgZfB-0)


IA support will be focused on the connections between the Comparison Tool and the rest of va.gov, but will not be providing feedback on IA within the tool or sub-pages. Please reference the following guidelines for design/content/IA decisions inside the tool:
- All content, data, new functionality, and child pages holding WEAMS data must be built on, or as sub-pages of, the current Comparison Tool parent url of https://www.va.gov/education/gi-bill-comparison-tool.
- How sub-pages under that parent URL are structured is up to the product team.
- Follow VADS standards for all [URLs](https://design.va.gov/components/url-standards/), [breadcrumbs](https://design.va.gov/components/breadcrumbs), [page titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles).
- Every page created must have a clear entry point - a way for visitors to navigate to the page through links and navigation components. Pages cannot be reachable only via search.
- Key SEO elements - page titles and intro text - should be differentiated from other pages in the Education hub. For example, do not create a sub-page of the comparison tool named "Education benefits management".

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launchstuff)


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map).*

- The team will maintain the existing URL - https://www.va.gov/education/gi-bill-comparison-tool/ - as the primary landing page for the expanded comparison tool.
- The existing comparison tool will move down a level in the hieararchy to nest under the landing page
- New pages to support licensing and certifications and the national test data will also be sub-pages under the landing page

![image](https://github.com/user-attachments/assets/ffe219cf-ffc8-45ee-be6e-60a95360c000)


## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


**1) GI Bill Comparison Tool - Existing URL, will hold a different screen**
- URL: va.gov/education/gi-bill-comparison-tool
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool
- Notes: This URL currently holds the first screen in the Compare Schools search workflow. This same URL should now be used for the new 'landing page' screen. The H1 may be updated to reflect the added information in the tool.

**2) School Comparison search - Existing screen at a new URL**
- URL: va.gov/education/gi-bill-comparison-tool/[TBD by product team]
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > [TBD by product team]
- Notes: This will be the current start screen of the School Comparision tool search flow. It will be moved down one level in the sitemap heirarchy, and will have a new URL and breadcrumb showing it a sub-page of va.gov/education/gi-bill-comparison-tool

**3) Licensing & Certification search - new**
- URL: va.gov/education/gi-bill-comparison-tool/[TBD by product team]
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > [TBD by product team]
- Notes: New page, for the start of a new search flow. It should be a sub-page of va.gov/education/gi-bill-comparison-tool

**4) National Tests data list - new**
- URL: va.gov/education/gi-bill-comparison-tool/[TBD by product team]
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > [TBD by product team]
- Notes: New page holding list data. It should be a sub-page of va.gov/education/gi-bill-comparison-tool


## <a name="nav"></a>Entry points <br>

### Primary entry point for launch

**1) [Education benefit hub page](https://www.va.gov/education/) - Modify**
- Placement description: Keep the entry point's current placement on the Education hub page. Update the descriptive text to reflect the additional content added into the Comparison Tool.
- Link label: [TBD by CAIA Content]
- Link destination: va.gov/education/gi-bill-comparison-tool
- Who will update (IA, content, product team): CAIA Content
- When will this entry point go live (after launch? After staged rollout? after some designated time?): After launch
![weams 2](https://github.com/user-attachments/assets/a48c651f-6459-4a82-8c4e-3307e58026cf)

### Secondary entry points
_Any additional locations that the page should be navigable from such as the "About a form" page, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc.   These are secondary, and while they are still very important, are not required for launch._

**1. Left Nav - Modifications TBD** - 
- Placement description: Education left nav, 'More' section
- Link label: Retain the current location of the left nav item. Text updates TBD if content/meaning of the H1 on va.gov/education/gi-bill-comparison-tool changes significantly. (Updates TBD by CAIA Content). 
- Link destination: va.gov/education/gi-bill-comparison-tool
- Who will update (IA, content, product team): CAIA IA
- When will this entry point go live (after launch? After staged rollout? after some designated time?): After launch
- Notes: Existing nav item should now link to the Landing page, rather than the School Comparison tool
![weams 8](https://github.com/user-attachments/assets/b7f236d3-96e8-4465-b0e8-ee7957a5986d)


## <a name="launchstuff"></a>Launch coordination activities <br>

### Redirects
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. Redirects listed are the responsibility of the product team, please submit a [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) at least 2 weeks in advance, so that CAIA IA can verify that the redirects are successful on launch.*  

- Who implements the redirect: EDM team
- When does the redirect go live: After launch

Current URL | Redirect to | Notes
--- | --- | ---
 va.gov/education/gi-bill-comparison-tool/search= | va.gov/education/gi-bill-comparison-tool/[TBD school comparison search] | Set up a redirect that sends former search result URLs to either the new landing page, or the first screen of the School Comparison search flow. This supports users who have previously bookmarked search results.


### Best bets
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov.*

**1. GI Bill School Comparison Tool - Modify best bet**  
CAIA IA will update the current Best Bet, and add description and/or keywords that highlight that National Tests and Licensing & Certification data is now available in the Comparison Tool.
- Who implements the redirect: CAIA IA
- When does the Best Bet get updated: After launch

<hr>

