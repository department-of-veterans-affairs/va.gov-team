# IA Design for MHV on VA.gov: Medical Records
**STATUS: Moving to Phase 0 part 5 (of 5)** 

Last updated 9/4/2024

**Team:** My HealtheVet - Medical Records

**On this page:**
- [Medical Records launch plan](#launch-plan)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Secondary nav](#nav)
- [Meeting notes and open items](#notes)
- [Archived information](#archived)

## <a name="launch-plan"></a>Medical Records launch plan<br>
Medical Records has several subdomains that will be launching incrementally to Phase 0 throughout Fall 2023-Fall 2024. The proposed launch order is as follows: 
1. Allergies (October 2023) - DONE
2. Vaccines (December 2023) - DONE
3. Care summaries & notes, Vitals (March 2024) - DONE
4. Health conditions (May 2024) - DONE
5. Lab and test results & settings - **In-process**

## <a name="map"></a>Page structure<br>
Most up-to-date [sitemap can be found here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705462711175/25f9ef7b28ee707498d29d4a4d168304a33c0527?sender=uf94a77a19aaf687331c09367)

We are moving toward launching **labs & tests, settings** to Phase 0 (shown in green below):
<img width="740" alt="Screenshot 2024-08-23 at 2 10 19 PM" src="https://github.com/user-attachments/assets/f288ccdd-361a-4834-9c83-e12dc522fd68">

## <a name="url"></a>URLs and breadcrumbs

**Note: A current audit process is evaluating any IA components where PHI/PII may be identified within My HealtheVet. While this will only be meaningful when Medical Records launches into Phases 1+ it is something we are closely monitoring. At present, title tags present a known risk and we may have to break VADS standards in this element in order to eliminate the potential safety risk posed by information in these elements leaking into GA4.**


| Page                      | URLs                                                           | P0 breadcrumbs                           | P1+ mobile breadcrumbs     | P1+ desktop breadcrumbs                          | Title tags                                 |
|---------------------------|----------------------------------------------------------------|------------------------------------------|----------------------------|--------------------------------------------------|--------------------------------------------|
| Landing page              | /my-health/medical-records/                                    | None                                     | < My HealtheVet            | VA.gov home > My HealtheVet > Medical records | Medical Records \| Veterans Affairs        |
| Lab and test results list | /my-health/medical-records/labs-and-tests/                     | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Lab and test results  | Lab and test results - Medical Records \| Veterans Affairs |
| >Test detail              | /my-health/medical-records/labs-and-tests/123456/              | < Back To Lab and Test Results            | < Back To Lab and Test Results    | < Back To Lab and Test Results  | Lab And Test Results Details - Medical Records \| Veterans Affairs |
| >>Image listing           | /my-health/medical-records/labs-and-tests/123456/images/       | N/A (not in P0)                                | < Back                     | < Back  | Images - Lab And Test Results Details - Medical Records \| Veterans Affairs |
| >>>Image zoom             | /my-health/medical-records/labs-and-tests/123456/images/67890/ | N/A (not in P0)                                   | < Back                     | < Back | Image [#] - Lab And Test Results - Medical Records \| Veterans Affairs |
| Care summaries and notes  | /my-health/medical-records/summaries-and-notes/                | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Care summaries and notes  | Care Summaries And Notes - Medical Records \| Veterans Affairs |
| >Note details             | /my-health/medical-records/summaries-and-notes/1234/           | < Back to Care summaries and notes       | < Back to care summaries and notes | < Back to care summaries and notes | Care Summaries And Notes Details - Medical Records \| Veterans Affairs |
| Vaccines list             | /my-health/medical-records/vaccines/                           | < Back to Medical records                | < Medical records          | VA.gov > My HealtheVet > Medical records > Vaccines | Vaccines - Medical Records \| Veterans Affairs |
| >Vaccine detail           | /my-health/medical-records/vaccines/1234/                      | < Back to Vaccines                       | < Back to vaccines                 | < Back to vaccines | Vaccine Details - Medical Records \| Veterans Affairs |
| Allergy listing           | /my-health/medical-records/allergies/                          | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Allergies and reactions | Allergies And Reactions - Medical Records \| Veterans Affairs |
| >Allergy detail           | /my-health/medical-records/allergies/1234/                     | < Back to Allergies                      | < Back to allergies                | < Back to allergies | Allergies And Reactions Details - Medical Records \| Veterans Affairs |
| Health conditions list    | /my-health/medical-records/conditions/                         | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Health conditions | Health Conditions - Medical Records \| Veterans Affairs |
| > Health conditions detail   | /my-health/medical-records/conditions/1234/                 | < Back to Health conditions              | < Back to health conditions         | < Back to health conditions | Health Condition Details - Medical Records \| Veterans Affairs |
| Vitals list                | /my-health/medical-records/vitals/                             | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Vitals | Vitals - Medical Records \| Veterans Affairs |
| >Vital history            | /my-health/medical-records/vitals/[vital-name]-history/      | < Back to Vitals                         | < Back to vitals                   | < Back to vitals  | [Vital name] Details - Medical Records \| Veterans Affairs |
| Medical Records Settings  | /my-health/medical-records/settings                            | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Settings | Settings - Medical Records \| Veterans Affairs |

### Vitals types
Details pages for historical records of each vital type are linked from the Vitals list view page. Each of these vitals should have a corresponding URL keyword that matches the H1 of the page: 
* Blood pressure
* Heart rate
* Breathing rate
* Blood oxygen level (pulse-oximetry)
* Temperature
* Weight
* Height

## <a name="nav"></a>Secondary navigation <br>

* Phase 0 initial launch (Allergies only) will not have a secondary navigation. Navigation will only be exposed once 2+ subdomains are launched. 

* Full phase 0 secondary/left navigation order below. Secondary navigation will be removed before Medical Records reaches phase 1, and will rely on the landing page to serve as a the navigation means for child domain experiences.

  - Medical Records
    - Lab and test results
    - Care summaries and notes
    - Vaccines
    - Allergies
    - Health conditions
    - Vitals
    - Settings

## <a name="notes"></a>Meetings notes and background info

**Decision log:**
- identify phase when entry points should be implemented
  - In phase 0, the user will only be linked from a url in an email invite to the VA Medical Records landing page
  - In phase 0.5 (ETA September 2024), the experience will be accessible to 1% of Veterans on VA.gov, and we will incrementally increase this number over time, with the goal of 100% around late November 2024. We will not consider Medical Records to be in Phase 1 until 100% of Veterans can access the experience on VA.gov, and "try me" banners have been published in the Classic (National Portal) site directing users to try out the new experience.
  - In phase 1, Users will be linked from legacy MHV directly to these pages via "try me out" messaging. Veterans who start on VA.gov will also be able to access MHV on VA.gov through the "MyHealtheVet" link in the global header, or via cross-links within the portal. At this time, we are still having conversations about whether or not the links on MyVA will route to the new experience, or continue to funnel users to the National Portal. 
  - By phase 1, the in-tool secondary navigation will be removed (with the implementation of the My HealtheVet portal-wide secondary navigation, we don't want to have tertiary navigation in tools).
- "Download all" (Blue button) will not be available on VA.gov until Phase 1. It may no longer be a child of medical records since it touches lots of tools. This "download all" could become its own page at the root level of the portal (va.gov/my-health/download-all) and be cross-linked from medical records. This is still under discussion.

**Notes:**
- If you've been treated at a VA health facility at any point for any thing, you would have something for a Blue Button report, regardless of whether you are currently enrolled in VA healthcare.
- BUT, it's possible you had VA healthcare so long ago that it isn't showing up. Still working out user scenarios of who gets to see what past Phase 0 when we open up to more users.
- Veterans enrolled in Foreign Medical Program who had VA healthcare in the past might need to access records here (note: still determining if they are included in user base)
- Also not sure what CHAMPVA users have access too yet (TBD).
- Healthcare records from during military service CANNOT be found here.
- Veterans might go to /health-history by accident looking for medical records, so we should add a way for them to recover from that error and get in the right place (Once we reach Phase 1). 

**FAQ:**
1. If a user doesn't have data to show, will they not have it for all the reports, or could it just be for one report?
   **Answer**: If the user doesn't have data for that particular domain, they can still view data in other domains. We have an informational alert for pages that explains why the page is empty.
2. Users will most likely need help figuring out how to share the VA Health Summary with their provider. What's the right spot to give them that guidance?
   **Answer**: We aren't including the VA Health Summary (at least in Phase 0)

 
## <a name="archived"></a>Archived information (Out of date)<br>

Updated 7/21/23 -- KO finalizing after medical records research -- ready to develop Phase 0
* **IA Request (Previous IA work by CAIA):** [Epic for medical records work](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/52997)
