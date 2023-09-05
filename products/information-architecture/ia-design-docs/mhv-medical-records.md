# IA Design for MHV on VA.gov: Medical Records
**STATUS: Moving to phase 0 in October**

Last updated 9/5/23 -- SS finalizing decisions for staging review
Updated 7/21/23 -- KO finalizing after medical records research -- ready to develop Phase 0

**Team:** Health apps - Medical Records

**IA Request (Previous IA work by CAIA):** [Epic for medical records work](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/52997)

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Secondary nav](#nav)
- [Meeting notes and open items](#notes)


## <a name="flows"></a>User/page flows <br>
Most up-to-date user flow can be found on VA public mural: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1671138122441/c6eae887e8c0467e616d61002f14085580dfb59c?wid=0-1686659937807

Notes:
- If you've been treated at a VA health facility at any point for any thing, you would have something in blue button, regardless of if you are currently enrolled in VA healthcare
- BUT, it's possible you had VA healthcare so long ago that it isn't showing up
- Veterans enrolled in foreign medical program who had VA healthcare in the past might need to access records here (note: still determining if they are included in user base)
- Healthcare records from during military service CANNOT be found here
- Veterans might go to /health-history by accident looking for medical records, so we should add a way for them to recover from that error and get in the right place

User Flow Open Quetions:
1. If a user doesn't have data to show, will they not have it for all the reports, or could it just be for one report?
   Answer: If the user doesn't have data for that particular domain, they can still view data in other domains. We have an informational alert for pages that explains why the page is empty.
2. Does VHIE apply to ppl who never got VA healthcare? If so, do we still want to show it to them?
   Answer: VHIE will not apply to people who have never had healthcare.
3. Users will most likely need help figuring out how to share the VA Health Summary with their provider. What's the right spot to give them that guidance?
   Answer: We aren't including the VA Health Summary (at least in Phase 0)
4. How can we make the experience seamless for Veterans who come here from the unauth pages? How can we ensure the content isn't duplicative or contradictory?


## <a name="map"></a>Page structure<br>
Most up-to-date page structure can be found in VA public mural: https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1671138122441/c6eae887e8c0467e616d61002f14085580dfb59c?wid=65-1686344795557

<img width="926" alt="Screenshot 2023-07-21 at 10 20 34 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/a6f578fd-5b8f-485e-a21d-50c593dd0f40">

## <a name="url"></a>URLs and breadcrumbs

**Note: The breadcrumbs for these pages may need to be suppressed until the "My health" landing page is live to avoide having an inactive segment in the breadcrumb.  If the "My health" landing page is live by the time these features go live, the breadcrumb can exist as noted.**

Page | URL | Breadcrumb | Notes
| Page                      | URLs                                                           | P0 breadcrumbs                           | P1+ mobile breadcrumbs     | P1+ desktop breadcrumbs                          | Title tags                                 |
|---------------------------|----------------------------------------------------------------|------------------------------------------|----------------------------|--------------------------------------------------|--------------------------------------------|
| Landing page              | /my-health/medical-records/                                    | None                                     | < My HealtheVet            | My HealtheVet > [H1]                             | Medical Records \| Veterans Affairs        |
| Lab and test results list | /my-health/medical-records/labs-and-tests/                     | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| >Test detail              | /my-health/medical-records/labs-and-tests/123456/              | < Back to Lab and test results           | < Lab and test results     | My HealtheVet > [H1] > [H1] > [H1]               | [H1] - Medical Records \| Veterans Affairs |
| >>Image listing           | /my-health/medical-records/labs-and-tests/123456/images/       | < Back to [H1 of test detail page]       | < Test detail              | My HealtheVet > [H1] > [H1] > [H1] > [H1]        | [H1] - Medical Records \| Veterans Affairs |
| >>>Image zoom             | /my-health/medical-records/labs-and-tests/123456/images/67890/ | < Back to Images: H1 of test detail page | < Image listing            | My HealtheVet > [H1] > [H1] > [H1] > [H1] > [H1] | [H1] - Medical Records \| Veterans Affairs |
| Care summaries and notes  | /my-health/medical-records/summaries-and-notes/                | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| >Note details             | /my-health/medical-records/summaries-and-notes/1234/           | < Back to Care summaries and notes       | < Care summaries and notes | My HealtheVet > [H1] > [H1] > [H1]               | [H1] - Medical Records \| Veterans Affairs |
| Vaccines list             | /my-health/medical-records/vaccines/                           | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| >Vaccine detail           | /my-health/medical-records/vaccines/1234/                      | < Back to Vaccines                       | < Vaccines                 | My HealtheVet > [H1] > [H1] > [H1]               | [H1] - Medical Records \| Veterans Affairs |
| Allergy listing           | /my-health/medical-records/allergies/                          | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| >Allergy detail           | /my-health/medical-records/allergies/1234/                     | < Back to Allergies                      | < Allergies                | My HealtheVet > [H1] > [H1] > [H1]               | [H1] - Medical Records \| Veterans Affairs |
| Health conditions list    | /my-health/medical-records/conditions/                         | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| >Condition summary        | /my-health/medical-records/conditions/1234/                    | < Back to Conditions                     | < Conditions               | My HealtheVet > [H1] > [H1] > [H1]               | [H1] - Medical Records \| Veterans Affairs |
| Vital list                | /my-health/medical-records/vitals/                             | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| >Vital history            | /my-health/medical-records/vitals/blood-pressure-history/      | < Back to Vitals                         | < Vitals                   | My HealtheVet > [H1] > [H1] > [H1]               | [H1] - Medical Records \| Veterans Affairs |
| Medical Records Settings  | /my-health/medical-records/settings                            | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |
| Download all records      | /my-health/medical-records/download-all                        | < Back to Medical records                | < Medical records          | My HealtheVet > [H1] > [H1]                      | [H1] - Medical Records \| Veterans Affairs |



## <a name="nav"></a>Secondary navigation <br>

Secondary/left navigation order

  - Medical Records
    - Lab and test results
    - Care summaries and notes
    - Vaccines
    - Allergies
    - Health conditions
    - Vitals
    - Medical records settings
    - Download all records
 
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
