# IA Design for MHV on VA.gov - Medications
**STATUS: Launched to all Veterans with VistA facilities in their profiles**

**Team:** MHV on VA.gov Medications

**On this page:**
- [Decision log](#decision-log)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)

## <a name="decision-log"></a>Decision Log
* **Winter 2025: Removing the "About medications" page from the product sitemap. This will remove some funky IA where we were forcing this page to be the front-door of the application even though it's structurally positioned as a child page. Information that was previously on this page will now be distributed throughout the project, and some will move to the static `/health-care` informational page about medications.**
* Fall 2024: Moving forward with two product improvements that are currently going through collab cycle: 
  * Grouping medications - _still in progress / design iterations_
  * Adding filters to the medications list - _planned to ship by EOY. Go/no-go is scheduled for mid-December._
* August 2024: Learned about possible PHI/PII issues in some elements getting passed to GA4 analytics, which include title tags (were revealing specific medications in the H1, and using that in title tag) and possibly link text in list-veiw pages if the click analytics on those links are captured (would collect same medication name). Title tags were revised on 8/31/2024 to avoid PHI/PII collection, and requests to track click analytics on list-view pages were rescinded. 
* May 2024: Moved to Phase 1
* December 2023: Moved to Phase 0
* January 2024: Began designing new page for the eventual phase 1: a multi-refill flow that allows users to select and request many refills at once (if desired). This page will live at: `va.gov/my-health/medications/refill` 
* February-March 2024: User research sessions
* May 2024: Go/No-Go for Medications, delayed to May 31st
* May 2024: Staging review for Phase 1 scheduled for May 30th, 2024

## <a name="map"></a>Page structure<br>
<img width="444" alt="Screenshot 2025-02-28 at 10 11 54 AM" src="https://github.com/user-attachments/assets/de191c35-9bb6-428e-836c-f9bb6c1d3733" />

## <a name="url"></a>URLs and breadcrumbs

~**1)About medications (forced entry point/landing page)**~ REMOVED
- ~URL: www.va.gov/my-health/medications/about~
- ~Breadcrumb:~ 
  - ~desktop: VA.gov home > My HealtheVet > About medications~
  - ~mobile: < My HealtheVet~
- ~Title tag: About Medications | Veterans Affairs~

**2) Medications list - NOW THE MAIN ENTRY POINT**

- URL: www.va.gov/my-health/medications/
- Breadcrumb: 
  - desktop: VA.gov home > My HealtheVet > Medications
  - mobile: < My HealtheVet
- Title tag: Medications | Veterans Affairs

**3) Medication details pages**
- URL: www.va.gov/my-health/medications/prescription/[ID]/
- Breadcrumb:
Opening a details page is considered a mini subtask, and will take on <- Back breadcrumbs:
  - desktop: <- Back
  - mobile: <- Back
- ~Title tag: [H1] - Medications | Veterans Affairs~ (this solution, which matches VADS standards, violates PII/PHI. We had to institute a looser more generalized title tag in order to protect security of Veterans & not risk leaking data).
- Revised title tag: Medication details | Veterans Affairs
- Notes: 
  - URL will include a randomized ID for medications details pages. No actual medication name or health record identifiers will ever be passed into the URL.

 **4) Refill prescriptions**
- URL: www.va.gov/my-health/medications/refill
- Breadcrumb:
  - desktop: VA.gov home > My HealtheVet > Medications > Refill prescriptions
  - mobile: < Medications
- Title tag: Refill prescriptions - Medications | Veterans Affairs

**5) More about this medication**
The medications team is working on pulling information about medications via an external API and linking to that information via the medications details page. 
- URL: www.va.gov/my-health/medications/prescription/{%ID%}/documentation?={%code%}
- Breadcrumb:
Opening the more information page from a details page is considered a mini subtask, and will take on the <- Back breadcrumbs style. We cannot reveal back to [name of previous page] due to PHI/PII risk mitigation, so it will be a simple back breadcrumb. 
  - Desktop: <- Back
  - Mobile: <- Back
 Title tag: More about this medication | Veterans Affairs

** **NOTE**: Out of concern of this URL parameter passing a known National Drug Code (NDC) code, it has been amended to remove any reference to the NDC code.

## <a name="nav"></a>Entry points <br>
_See also user flow and breadcrumb documents linked above in this document_

As of March 12, 2025, the My HealtheVet portal is moving toward "Milestone 1" for this calendar year, which will include tying up all of VA.gov with the new My HealtheVet experiences on VA.gov. We will no longer link backward to the MHV Classic portal. Now, My VA and the health-care benefit hub will all direct users to the new tools: 

* My HealtheVet link in global sitewide header > My HealtheVet home page > Medications tool
* My HealtheVet link in global sitewide header > My HealtheVet home page > Medications link in secondary navigation
* MHV National Portal > Medications tool > "Try me" Banner alert > My HealtheVet home page > Medications tool
* My VA page > Healthcare section > Refill prescriptions link > Medications tool
* Health care hub > Manage health > Refill prescriptions page > Sign-in > Link to medications > Medications tool

## <a name="redirects"></a>Redirects <br>
* Redirect: `va.gov/my-health/medications/about` to `va.gov/my-health/medications`

## Archived:
**IA Request:** [[Link to Sitewide Content and IA intake request]](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/59159)

**For Phase 1:**
- Breadcrumbs will be updated to connect the experience with the My HealtheVet landing page
- Cross-links will be updated to connect the experience wtih other tools already in Phase 1 (secure messages and appointments)
- Secondary navigation will be implemented on this product (and others already in Phase 1)
- Try me banners will launch in the national portal experience for users who want to try out the new version

**For Phase 0:**
- Users will only be able to access this product via an email invitation with a direct link.  After clicking on the link, the user will be presented with the VA.gov home page with the sign in modal displayed. Once signed in they will be immediately routed to the medications landing page
- The Medication landing page will include messaging and a link to send feedback about the tool. 
- The Medication landing page will include messaging and a link to allow visitors to return to the MHV classic pharmacy experience, that will take them to the MHV classic pharmacy landing page
- The Medication landing page will include messaging and a link to the MHV classic Allergies page within the Health History section
- The Medication detail page will include messaging and a link to the MHV classic compose a message page

![User Flow of Medications Phase 0](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/b304a819-311c-40d6-a3fb-8ea5287562bb)

The user flow provided depicts the flow for Phase 0 of this product only.  The entry points, links, and overall flow of the product will evolve as the product progresses through the phased roll-out.  Those flows will eventually be fully documented in the (phased roll-out Mural)[https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1667322271773?sender=u2aba00c97ab77c6ec1573123&key=4ffaed99-2032-4f0b-bbce-bbe7ef27595c]. 

![Screenshot 2023-06-28 at 4 35 42 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/9aa7af6a-78c7-46b1-9b61-577987b7579f)


Notes: 
* ~As of 6/30/23, the H1 of the Medication page may change to 'Medication and Supplies'. If we do make that change, we may change URLs.
- also note that the url is a sibling structure, but the breadcrumbs will represent a parent strucuture.~ Decided against this
  

