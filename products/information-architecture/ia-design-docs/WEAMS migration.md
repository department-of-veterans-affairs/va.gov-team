# IA Design for WEAMS Migration of National Tests and Licenses & Certifications data
**STATUS: [In progress]**

- Team: EDM Team - Cassidy Beach (PM), Theresa Simone (PM), Sneha Kulkarni (UX) Jenn Drahota (BA)
- CAIA IA: Sam Walker

- CAIA Intake ticket: [92369](https://github.com/department-of-veterans-affairs/va.gov-team/issues/92369); IA Tracker: [95208](https://github.com/department-of-veterans-affairs/va.gov-team/issues/95208); CC Intake: [90889](https://github.com/department-of-veterans-affairs/va.gov-team/issues/90889); Figma design files: [Desktop](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=72-1228&node-type=canvas&t=etnWBEfJkurm6JoP-0), [Licenses & certifications on mobile](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=1122-38781&node-type=canvas&t=JDAGEOPE8D1fFZwJ-0), [Search results on mobile
](https://www.figma.com/design/xAydfsAlVVmhnFQA9MkeYw/Design-for-WEAMS-Public-in-CT-%26-SOB?node-id=2273-321672&node-type=canvas&t=XqMTcBSnWK9UgZfB-0)


**On this page:**
- [Overall Guidelines](#guidelines)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launchstuff)


## <a name="ruidelines"></a>Overall guidelines<br>
- All content, data, new functionality, and child pages related to migrating data from WEAMS and creating homes for it in the Comparison Tool must be built in or under the parent url of https://www.va.gov/education/gi-bill-comparison-tool.
- How sub-pages under that parent URL are structured is up to the product team.
- Follow VADS standards for all [URLs](https://design.va.gov/components/url-standards/), [breadcrumbs](https://design.va.gov/components/breadcrumbs), [page titles](https://design.va.gov/content-style-guide/page-titles-and-section-titles).
- Any pages created must have a clear entry point - a way for visitors to navigate to the page through links and navigation components. Pages cannot be reachable only via search.
- Key SEO elements - page titles and intro text - should be differentiated from other pages in the Education hub. For example, do not create a sub-page of the comparison tool named "Education benefits management".
  

## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*
Up-to-date diagrams can be found on [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729183095781/13879f018516bd9dd354f278919b5a9c101a0f1f?wid=136-1729183109815).

All data and flows migrated into the Comparison Tool must be located at the current https://www.va.gov/education/gi-bill-comparison-tool or on sub-pages of that URL.
![weams 1](https://github.com/user-attachments/assets/6184e991-63d2-4963-be4a-793368b62c20)


## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site. This section will also document form or tool flow URLs, titled sub-URLs.*


**1) GI Bill Comparison Tool - Existing**
- URL: va.gov/education/gi-bill-comparison-tool
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool
- H1: TBD by product team
- Notes: This URL currently holds the first screen in the Compare Schools search workflow. This same URL should now be used for the new 'landing page' screen. The H1 may be updated to reflect the added information in the tool.

### Sub-URLs

**1) School Comparison search - Existing screen in new location**
- URL: va.gov/education/gi-bill-comparison-tool/[TBD by product team]
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > [TBD by product team]
- H1: TBD by product team
- Notes: This will be the current start screen of the School Comparision tool search flow. It will be moved down one level in the sitemap heirarchy, and will have a new URL and breadcrumb showing it a sub-page of va.gov/education/gi-bill-comparison-tool

**2) Certifications and Licenses search - new**
- URL: va.gov/education/gi-bill-comparison-tool/[TBD by product team]
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > [TBD by product team]
- H1: TBD by product team
- Notes: This will be a new page, for the start of a new search flow. It will be a sub-page of va.gov/education/gi-bill-comparison-tool

**3) National Tests data list - new**
- URL: va.gov/education/gi-bill-comparison-tool/[TBD by product team]
- Breadcrumb: VA.gov home > Education and training  > GI Bill Comparison Tool > [TBD by product team]
- H1: TBD by product team
- Notes: This will be a new page. It will be a sub-page of va.gov/education/gi-bill-comparison-tool


## <a name="nav"></a>Entry points <br>

### Navigation pathways and entry point for launch
See more about [navigation pathways and entry points](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/information-architecture/process/entry-points.md). Teams must launch with at least one navigation pathway.

**1) [Education benefit hub page](https://www.va.gov/education/) - Modify**
- Placement description: Keep the entry point's current location. Update the header and descriptive text to reflect the additional content added into the Comparison Tool.
- Link label: [TBD by CAIA Content]
- Link destination: va.gov/education/gi-bill-comparison-tool
- Implementation Notes: CAIA IA will update the Education Hub page, on go-live of the changes to the tool
![weams 2](https://github.com/user-attachments/assets/a48c651f-6459-4a82-8c4e-3307e58026cf)

### Secondary entry points
_Any additional locations that the page should be navigable from such as the "About a form" page, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc.   These are secondary, and while they are still very important, are not required for launch._

**1. Mega menu - Modifications TBD** - 
- Placement description: Mega Menu link card
- Link label: Keep current header text and descriptive text, or update to reflect additional data available in the tool. (Changes TBD by CAIA Content)
- Link destination: va.gov/education/gi-bill-comparison-tool
- Who will update (IA, content, product team): CAIA IA
- When will this entry point go live (at launch? After staged rollout? after some designated time?): At launch
- Notes: Finalize whether this should link to the new Landing Page, or to the School Comparison

**2. Left Nav - Retain** - 
- Placement description: Education hub left nav 
- Notes: Including here to be thorough - no changes needed at this point. Left nav navigation link should stay in its current location, should still display the name of the tool, and should direct to the highest-level url va.gov/education/gi-bill-comparison-tool

### Crosslinks
CAIA content will identify all places that link to the Yellow Ribbon tool and will modify the link to direct visitors to the new location of the information or remove the link if its no longer applicable in that context.


## <a name="launchstuff"></a>Launch coordination activities <br>

### Redirects
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?template=redirect-request.md) at least 2 weeks in advance.*  

Current URL | Redirect to | Notes
--- | --- | ---
 va.gov/education/gi-bill-comparison-tool/search= | va.gov/education/gi-bill-comparison-tool/[TBD school comparison search] | In case users have search results bookmarked, set up a plan where any previous search URL redirects to either the new landing page, or the first screen of the School Comparison search flow.


### Best bets
*Search “best bets” are suggested pages that appear in the “Our top recommendations for you” section when you perform a search on VA.gov. Best bets are not implemented for every page, and not intended to be permanent.  They can aid in helping visitors find content and features that are not easily found or not ranking well in search. Existing best bets must be removed or updated when links/URLs change.*

**1. GI Bill School Comparison Tool - Modify best bet** - 
- CAIA IA will **update** the current Best Bet, and add description and/or keywords that highlight that National Tests and C&L data is now available in the tool.

### Staged rollout
No

<hr>

