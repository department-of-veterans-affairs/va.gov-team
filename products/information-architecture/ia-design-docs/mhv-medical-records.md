# IA Design for MHV on VA.gov: Medical Records
**STATUS: In progress**

Last Updated 3/23/23 -- KO edits

**Team:** Health apps - medical records

**IA Request:** [Epic for medical records work](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/52997)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Secondary nav](#nav)
- [Meeting notes and open items](#notes)


## <a name="flows"></a>User/page flows <br>
*Illustration and/or description of how users will flow through the experience. The user flow helps illustrate how visitors will navigate to and through your product/feature, ensures all types of visitors and scenarios are accounted for, and aids in identifying all content and messaging needs.*

![Workflow for sharing medical records](https://user-images.githubusercontent.com/122126772/227365555-5c623289-fa7c-45d9-9cf1-c2094b467840.png)


User Flow Notes:

- If you'e been treated at a VA health facility at any point for any thing, you would have something in blue button, regardless of if you are currently enrolled in VA healthcare
- BUT, it's possible you had VA healthcare so long ago that it isn't showing up
- Veterans enrolled in foreign medical program who had VA healthcare in the past might need to access records here
- Healthcare records for military service CANNOT be found here
- Veterans might go to /health-history by accident looking for medical records, so we should add a way for them to recover from that error and get in the right place
- 

User Flow Open Quetions:
1. If a user doesn't have data to show, will they not have it for all the reports, or could it just be for one report?
2. Does VHIE apply to ppl who never got VA healthcare? If so, do we still want to show it to them? 
3. Users will most likely need help figuring out how to share the VA Health Summary with their provider. What's the right spot to give them that guidance?
4. How can we make the experience seamless for Veterans who come here from the unauth pages? How can we ensure the content isn't duplicative or contradictory?


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*
<br>
- The medical records features will be organized into 3 separate groups within the MHV on VA.gov experience: lab and test resutls, health history, and medical records - represented by the oranged dashed outlines in the below diagram

![Medical Records on MyHealth on VA.gov sitemap](https://user-images.githubusercontent.com/122126772/227365672-b4f97010-8783-49f4-a07f-e017f9e3fe60.png)


## <a name="url"></a>URLs and breadcrumbs
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*

**Note: The breadcrumbs for these pages may need to be suppressed until the "My health" landing page is live to avoide having an inactive segment in the breadcrumb.  If the "My health" landing page is live by the time these features go live, the breadcrumb can exist as noted.**

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
About VA Medical Records landing page | www.va.gov/my-health/about-records | Desktop:  VA.gov home > My Health > [H1 of tests listing page] <br> Mobile: < My health |  This page will start in P0 at the top fo the left nav. In P1 it will move to last position in left nav. In P2 it will move to R+S.
Lab and test results listing page | www.va.gov/my-health/labs-tests | Desktop:  VA.gov home > My Health > [H1 of tests listing page] <br> Mobile: < My health |  
Lab and test result detail page | Builds on URL for listing page | Desktop: VA.gov home > My Health > [H1 of tests listing page] > [H1 of tests detail page]  <br> Mobile: < [H1 of test listing page]  |  
Health history landing page | www.va.gov/my-health/health-history | Desktop: VA.gov home > My Health > [H1 of health history landing page] <br> Mobile: < My health | 
Allergies listing page | www.va.gov/my-health/health-history/allergies | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of allergies listing page] <br> Mobile: < [H1 of health history landing page] |
Allergies detail page | Builds on URL for listing page  | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of allergies listing page] > [H1 of allergies detail page] <br> Mobile: < [H1 of allergies listing page] |
Notes listing page  | www.va.gov/my-health/health-history/care-notes | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of notes listing page] <br> Mobile: < [H1 of health history landing page] |
Notes detail page  | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of notes listing page] > [H1 of notes detail page] <br> Mobile: < [H1 of notes listing page] |
Health conditions listing page  | www.va.gov/my-health/health-history/conditions | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of conditions listing page] <br> Mobile: < [H1 of health history landing page] |
Health conditions detail page | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of conditions listing page] > [H1 of conditions detail page] <br> Mobile: < [H1 of conditions listing page] |
Vaccines listing page  | www.va.gov/my-health/health-history/vaccines | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vaccines listing page] <br> Mobile: < [H1 of health history landing page] |
Vaccines detail page  | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vaccines listing page] > [H1 of vaccines detail page] <br> Mobile: < [H1 of vaccines listing page] |
Vitals listing page  | www.va.gov/my-health/health-history/vitals | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vitals listing page] <br> Mobile: < [H1 of health history landing page] |
Vitals detail page  | Builds on URL for listing page | Desktop:  VA.gov home > My Health > [H1 of health history landing page] > [H1 of vitals listing page] > [H1 of vitals detail page] <br> Mobile: < [H1 of vitals listing page] |
Share Medical records page  | www.va.gov/my-health/medical-records | Desktop:  VA.gov home > My Health > [H1 of records listing page] <br> Mobile: < My health |



## <a name="nav"></a>Secondary navigation <br>
*Secondary navigation needs within this feature.*

- Secondary/left navigation order
  - About VA medical records
  - Lab and test results
  - Health history
    - Care notes and summaries
    - Vaccines
    - Allergies
    - Health conditions
    - Vitals
  - Share medical records

<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info

Open issues:
- Need to determine if secondary nav is needed in initial phases for health history, or possibly a combo secondary left nav that brings these sections together
  - Decision: We will create a combined secondary/left nav that will include a landing page (for phase 0), Lab and test results, Health history, and Share medical records - no other portal features will be included in the left nav
- identify what phases breadcrumb needs to be suppressed for - until it is linked to from the va.gov landing page
  - Decision: Breadcrumb to be suppressed only until new MyHealth portal landing page is live
- identify phase when entry points should be implemented
  - In phase 0, the user will only be linked from a url in an email invite to the VA Medical Records landing page
  - In phase 1, the email invites will stop. Users will be linked from legacy MHV directly to these pages. The landing page will get moved to the bottom spot in the left nav.
  - In phase 2, the landing page will move to R+S.
  - Other changes to the left nav are pending user research and syncing with other MHV tools.
- identify where existing medical records and lab and test results link on My VA links to
  - ![Destination of medical recods link on va.gov](https://user-images.githubusercontent.com/122126772/227366022-7095ff05-a69f-421c-b919-ea67b42ffde3.png)
- identify what changes are needed to health care hub, inlcuding the existing get medical records page and lab an tests results page
  - Currently, we have a static page for lab and tests and for getting medical records, but not for health history. 
  - Do we need to broaden page to include access to lab and tests as well as health history, or do we keep individual pages (health history page does not exist)
  - Pull analytics and SEO data on existing pages and keywords for reference
- redirects
  - timing is based on different phases
  - need to identify who will redirect myhealth.va.gov URLs
- User flow changes 
  - can we bypass the static page for authenticated users?
