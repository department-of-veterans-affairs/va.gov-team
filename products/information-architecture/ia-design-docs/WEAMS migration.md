# IA Design for [Product/page name]
**STATUS: [In progress/In review/Complete]**

**Team:** [Team name]

**CAIA Intake ticket:**

**IA Tracker:** 

**On this page:**
- [Overall Guidelines](#guidelines)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Launch coordination activities](#launchstuff)


## <a name="ruidelines"></a>Overall guidelines<br>
- All content, data, new functionality, and child pages related to migrating data from WEAMS and creating homes for it in the Comparison Tool must be built in or under the parent url of https://www.va.gov/education/gi-bill-comparison-tool.
- How pages under that section are structured is up to the team building the section.
- Follow VADS standards for all URLs, breadcrumbs, page titles, and navigational components such as side nav and links.
- Any pages created must have a clear entry point - a way for visitors to navigate to the page through links and navigation components. Pages cannot be reachable only via search.
- Key SEO elements - page titles and intro text - should be differentiated from other pages in the Education hub. For example, do not create a sub-page of the comparison tool named "Education benefits management".
- If you want a link added to the online form added to the "Find a form" search tool, please submit a ticket to CAIA.

## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*
Up-to-date diagrams can be found on [Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1729183095781/13879f018516bd9dd354f278919b5a9c101a0f1f?wid=136-1729183109815).
- All data and flows migrated into the Comparison Tool must be located at the current https://www.va.gov/education/gi-bill-comparison-tool or on sub-pages of that URL.
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

**1) Education benefit hub page - Modify**
- Placement description: Keep the entry point's current location. Update the header and descriptive text to reflect the additional content added into the Comparison Tool.
- Link label: [TBD by CAIA Content]
- Link destination: va.gov/education/gi-bill-comparison-tool
- Implementation Notes: CAIA IA will update the Education Hub page, on go-live of the changes to the tool

### Secondary entry points
_Any additional locations that the page should be navigable from such as the "About a form" page, additional navigation component (top, left) placements, additional static pages where its prominently linked from, etc.   These are secondary, and while they are still very important, are not required for launch._

**1. Add/Modify/Remove page/menu name** - 
- Placement description: Mega Menu, 
- Link label:
- Link destination:
- Who will update (IA, content, product team):
- When will this entry point go live (at launch? After staged rollout? after some designated time?):
- Notes:

### Crosslinks
_Not required. Links in content or in related links sections of other pages that point to this feature. This includes places where an existing crosslink may need to be updated. This section is not intended to capture every crosslinking placement, it is only to capture placements identified during the IA design process for reference.  Crosslinks are primarily identified by the content team and stakeholders.  The content team will be responsible for finding all existing referring links that may need to be updated._

**1. Add/Modify/Remove link on a specific page** - 
- Placement description: 
- Link label:
- Link destination:
- Who will update (IA, content, product team):
- When will this entry point go live (at launch? After staged rollout? after some designated time?):
- Notes: 

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

