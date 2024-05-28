# IA Design for MHV on VA.gov - Medications
**STATUS: Phase 0, Moving to Phase 1**

**Team:** MHV on VA.gov Medications

**On this page:**
- [Decision log](#decision-log)
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)

## <a name="decision-log"></a>Decision Log
* December 2023: Moved to Phase 0
* January 2024: Began designing new page for the eventual phase 1: a multi-refill flow that allows users to select and request many refills at once (if desired). This page will live at: `va.gov/my-health/medications/refill` 
* February-March 2024: User research sessions
* May 2024: Go/No-Go for Medications, delayed to May 31st
* May 2024: Staging review for Phase 1 scheduled for May 30th, 2024
  
## <a name="flows"></a>User flow<br>
Routes into My HealtheVet tools (in Phase 1 or higher) at point of integration: 
<img width="780" alt="Screenshot 2024-05-28 at 9 00 37 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/72bc7ab9-2b9d-450a-8ab8-5afc011cd2ac">

## <a name="map"></a>Sitemap<br>
<img width="838" alt="Screenshot 2024-05-28 at 8 59 12 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/115033532/cf4a9e00-eaae-4ccf-9a6d-af1523b06841">

## <a name="url"></a>URLs and breadcrumbs

The launch of medications to Phase 1 will coincide with all tools that are in Phase 1+ being integrated onto VA.gov (discoverable and linkable from other My HealtheVet tools). 
* [Full integration breadcrumb plan](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713558793852/31aadcbae7070a6f0f4cfea4f63e568721f1480d?sender=uf94a77a19aaf687331c09367)
* [My HealtheVet sitemap](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1713450017254/6daf1f320cba1054fdfd840e4a7c881dda87120c), showing current + future (integration) state

**1)About medications (forced entry point/landing page)**
- URL: www.va.gov/my-health/medications/about
- Breadcrumb: 
  - desktop: VA.gov home > My HealtheVet > About Medications
  - mobile: < My HealtheVet
- Title tag: About Medications | Veterans Affairs

**2) Medications list view - NEW**
- URL: www.va.gov/my-health/medications/
- Breadcrumb: 
  - desktop: VA.gov home > My HealtheVet > About Medications > Medications
  - mobile: < My HealtheVet
- Title tag: Medications | Veterans Affairs
- Notes: [On 6/30 in Slack](https://dsva.slack.com/archives/C04DRS3L9NV/p1688070170040299) we decided that the breadcrumbs will act as if the 'about' landing page page is a parent of medications list, but the page will not be an official parent of medications from a URL standpoint. 

**3) Medication details pages**
- URL: www.va.gov/my-health/medications/prescription/[ID]/
- Breadcrumb:
Opening a details page is considered a mini subtask, and will take on <- Back to[name of page] breadcrumbs:
  - desktop: <- Back to Medications
  - mobile: <- Back to Medications
- Title tag: [H1] - Medications | Veterans Affairs
- Notes: 
  - URL will be based on unique ID for the individual's specific medication.  It will not be the name of the medication.

 **4) Refill prescriptions - NEW**
- URL: www.va.gov/my-health/medications/refill
- Breadcrumb:
  - desktop: VA.gov home > My HealtheVet > Medications > Refill prescriptions
  - mobile: < Medications
- Title tag: Refill prescriptions - Medications | Veterans Affairs

## <a name="nav"></a>Entry points <br>

* My HealtheVet link in global sitewide header > My HealtheVet home page > Medications tool
* My HealtheVet link in global sitewide header > My HealtheVet home page > Medications link in secondary navigation
* MHV National Portal > Medications tool > "Try me" Banner alert 

Future additional entry points (not possible in Phase 1):
* Links to medications from MyVA page (will route users back to National Portal for now)
* Links to medications from Googling keywords & landing on /health-care benefit hub pages (will route users back to national portal for now)

## <a name="redirects"></a>Redirects <br>
N/A 
 

## Archived:
**IA Request:** [[Link to Sitewide Content and IA intake request]](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/59159)

**For Phase 0:**
- Users will only be able to access this product via an email invitation with a direct link.  After clicking on the link, the user will be presented with the VA.gov home page with the sign in modal displayed. Once signed in they will be immediately routed to the medications landing page
- The Medication landing page will include messaging and a link to send feedback about the tool. 
- The Medication landing page will include messaging and a link to allow visitors to return to the MHV classic pharmacy experience, that will take them to the MHV classic pharmacy landing page
- The Medication landing page will include messaging and a link to the MHV classic Allergies page within the Health History section
- The Medication detail page will include messaging and a link to the MHV classic compose a message page

![User Flow of Medications Phase 0](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/b304a819-311c-40d6-a3fb-8ea5287562bb)

The user flow provided depicts the flow for Phase 0 of this product only.  The entry points, links, and overall flow of the product will evolve as the product progresses through the phased roll-out.  Those flows will eventually be fully documented in the (phased roll-out Mural)[https://app.mural.co/invitation/mural/departmentofveteransaffairs9999/1667322271773?sender=u2aba00c97ab77c6ec1573123&key=4ffaed99-2032-4f0b-bbce-bbe7ef27595c]. 

![Screenshot 2023-06-28 at 4 35 42 PM](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/9aa7af6a-78c7-46b1-9b61-577987b7579f)


Decision log: 
* ~As of 6/30/23, the H1 of the Medication page may change to 'Medication and Supplies'. If we do make that change, we may change URLs.
- also note that the url is a sibling structure, but the breadcrumbs will represent a parent strucuture.~ Decided against this
  

