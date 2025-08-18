# IA Design for MHV on VA.gov: Medical Records
**STATUS: Fully launched and active for all users with VistA facilities. My HealtheVet Classic has been sunset.**

Last updated 8/14/2025

**Team:** My HealtheVet - Medical Records

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Product updates and notes](#notes)
- [Archived information](#archived)

## <a name="map"></a>Page structure<br>
Most up-to-date [sitemap can be found here](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1705462711175/25f9ef7b28ee707498d29d4a4d168304a33c0527?sender=uf94a77a19aaf687331c09367)

<img width="1154" height="559" alt="Screenshot 2025-08-14 at 10 48 48 AM" src="https://github.com/user-attachments/assets/bc82d838-ba13-4262-b08e-84275cb81321" />

## <a name="url"></a>URLs and breadcrumbs

**Note: A current audit process is evaluating any IA components where PHI/PII may be identified within My HealtheVet. While this will only be meaningful when Medical Records launches into Phases 1+ it is something we are closely monitoring. At present, title tags present a known risk and we may have to break VADS standards in this element in order to eliminate the potential safety risk posed by information in these elements leaking into GA4.**


| Page                      | URLs                                                           | P0 breadcrumbs                           | P1+ mobile breadcrumbs     | P1+ desktop breadcrumbs                          | Title tags                                 |
|---------------------------|----------------------------------------------------------------|------------------------------------------|----------------------------|--------------------------------------------------|--------------------------------------------|
| Landing page              | /my-health/medical-records/                                    | None                                     | < My HealtheVet            | VA.gov home > My HealtheVet > Medical records | Medical Records \| Veterans Affairs        |
| Lab and test results list | /my-health/medical-records/labs-and-tests/                     | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Lab and test results  | Lab and test results - Medical Records \| Veterans Affairs |
| >Test detail              | /my-health/medical-records/labs-and-tests/123456/              | < Back To Lab and Test Results            | <- Back    | <- Back  | Lab And Test Results Details - Medical Records \| Veterans Affairs |
| **DIRECTORY HAS BEEN MOVED** ~>>Radiology images~            | ~/my-health/medical-records/labs-and-tests/123456/images/~       | ~N/A (not in P0)~  | ~<- Back~    | ~<- Back~  | ~Images - Lab And Test Results Details - Medical Records~ \| ~Veterans Affairs~ |
| **NEW** Medical imaging results  | /my-health/medical-records/imaging-results/                | N/A                | <- Medical records          | VA.gov home > My HealtheVet > Medical records > Medical imaging results  | Imaging results - Medical Records \| Veterans Affairs |
| **NEW** >>Imaging results details  | /my-health/medical-records/imaging-results/1234                | N/A   | <- Back     | <- Back  | Imaging Results Details - Medical Records \| Veterans Affairs |
| Care summaries and notes  | /my-health/medical-records/summaries-and-notes/                | < Back to Medical records                | <- Medical records          | VA.gov home > My HealtheVet > Medical records > Care summaries and notes  | Care Summaries And Notes - Medical Records \| Veterans Affairs |
| >Note details             | /my-health/medical-records/summaries-and-notes/1234/           | < Back to Care summaries and notes       | <- Back | <- Back | Care Summaries And Notes Details - Medical Records \| Veterans Affairs |
| Vaccines list             | /my-health/medical-records/vaccines/                           | < Back to Medical records                | <-Medical records          | VA.gov > My HealtheVet > Medical records > Vaccines | Vaccines - Medical Records \| Veterans Affairs |
| >Vaccine detail           | /my-health/medical-records/vaccines/1234/                      | < Back to Vaccines                       | <- Back                 | <- Back | Vaccine Details - Medical Records \| Veterans Affairs |
| Allergy listing           | /my-health/medical-records/allergies/                          | < Back to Medical records                | <- Medical records          | VA.gov home > My HealtheVet > Medical records > Allergies and reactions | Allergies And Reactions - Medical Records \| Veterans Affairs |
| >Allergy detail           | /my-health/medical-records/allergies/1234/                     | < Back to Allergies                      | <- Back                | <- Back | Allergies And Reactions Details - Medical Records \| Veterans Affairs |
| Health conditions list    | /my-health/medical-records/conditions/                         | < Back to Medical records                | <- Medical records          | VA.gov home > My HealtheVet > Medical records > Health conditions | Health Conditions - Medical Records \| Veterans Affairs |
| > Health conditions detail   | /my-health/medical-records/conditions/1234/                 | < Back to Health conditions              | <- Back         | <- Back | Health Condition Details - Medical Records \| Veterans Affairs |
| Vitals list                | /my-health/medical-records/vitals/                             | < Back to Medical records                | < Medical records          | VA.gov home > My HealtheVet > Medical records > Vitals | Vitals - Medical Records \| Veterans Affairs |
| >Vital history            | /my-health/medical-records/vitals/[vital-name]-history/      | < Back to Vitals                         | <- Back                   | <- Back  | [Vital name] Details - Medical Records \| Veterans Affairs |
| Medical records settings  | /my-health/medical-records/settings/                            | N/A                | <- Medical records          | VA.gov home > My HealtheVet > Medical records > Medical records settings | Medical Records Settings - Medical Records \| Veterans Affairs |
| Download your medical records reports  | /my-health/medical-records/download/                            | N/A                | <- Medical records          | VA.gov home > My HealtheVet > Medical records > Download medical records reports | Download Medical Records Reports - Medical Records \| Veterans Affairs |
| Form / child pages under Download your medical records reports  | /my-health/medical-records/download/date-range ; /my-health/medical-records/download/record-type ; /my-health/medical-records/download/file-type                            | N/A                | <- Download medical records reports **(first page)** - successive pages of form should use <- Back       | VA.gov home > My HealtheVet > Medical records > Download medical records reports > Select records and download report **(first page)** - successive pages of form should use <- Back | Select Records And Download Report - Medical Records \| Veterans Affairs |

### Vitals types
Details pages for historical records of each vital type are linked from the Vitals list view page. Each of these vitals should have a corresponding URL keyword that matches the H1 of the page: 
* Blood pressure
* Heart rate
* Breathing rate
* Blood oxygen level (pulse-oximetry)
* Temperature
* Weight
* Height

## <a name="notes"></a>Product updates and notes <br>

**August 2025** - Veteran feedback and research has led us to understand that users do not expect images from some types of radiology tests to be nested under "Lab and test results." Many Veterans are struggling to find their images. The team has decided to move "images" out from under the Lab & Test results section into its own domain, which will be accessible from the Medical Records landing page and referred to as "Medical imaging results." This is going through PO sync in August 2025 - TBD on launch date. 

**June 2025** - Medical records on My HealtheVet Classic were sunset, and all VistA facility users now must access their Medical Records via My HealtheVet on VA.gov. This is a significant change from how medical records were previously structured in the legacy site (could only be downloaded via a very large Blue Button download report), and now we have sub-divided records into multiple subdomains (see URLs and breadcrumbs section below). 

**Fall 2024**
- Download all (Blue Button) will have the URL: va.gov/my-health/medical-records/download/ once it is ready on staging
- URLs that are any deeper than a details page must comply with PHI/PII concerns & anonymize/randomize any identification numbers that are exposed in the URL. These cannot reference actual drug, lab, pharmaceutical, or personalized data that can be deciphered easily.
- Back breadcrumbs deeper than details pages must say <- Back only to prevent exposure of PHI in link text that could be captured by analytics tools 
- Title tags on details pages or deeper must be generalized to prevent exposure of PHI in the text that could be captured by analytics tools

**June 2024**
As of June 2024, medical records has been included in the secondary navigation bar. However, because the tool is not fully ready for launch, the destination URL under "records" in that navigation bar  is for a temporary page that explains what is coming and provides a link back to the previous version of My HealtheVet for users who want their records.

In December 2024, when medical records is projected to be ready to move to Phase 1, we will update that link to point to the real medical records on VA.gov experience, and update links on the My HealtheVet landing page to do the same. 

**February 2024**
* Phase 0 initial launch (Allergies only) will not have a secondary navigation. Navigation will only be exposed once 2+ subdomains are launched. 

* Full phase 0 secondary/left navigation order below. Secondary navigation will be removed before Medical Records reaches phase 1, and will rely on the landing page to serve as a the navigation means for child domain experiences.

  - Medical Records
    - Lab and test results
    - Care summaries and notes
    - Vaccines
    - Allergies
    - Health conditions
    - Vitals
    - Medical records settings

**Notes:**
- If you've been treated at a VA health facility at any point for any thing, you would have something for a Blue Button report, regardless of whether you are currently enrolled in VA healthcare.
- BUT, it's possible you had VA healthcare so long ago that it isn't showing up. Still working out user scenarios of who gets to see what past Phase 0 when we open up to more users.
- Veterans enrolled in Foreign Medical Program who had VA healthcare in the past might need to access records here (note: still determining if they are included in user base)
- Also not sure what CHAMPVA users have access too yet (TBD).
- Healthcare records from during military service CANNOT be found here.

**FAQ:**
1. If a user doesn't have data to show, will they not have it for all the reports, or could it just be for one report?
   **Answer**: If the user doesn't have data for that particular domain, they can still view data in other domains. We have an informational alert for pages that explains why the page is empty.
2. Users will most likely need help figuring out how to share the VA Health Summary with their provider. What's the right spot to give them that guidance?
   **Answer**: We aren't including the VA Health Summary (at least in Phase 0)

 
## <a name="archived"></a>Archived information (Out of date)<br>

## <a name="launch-plan"></a>Medical Records launch plan<br>
Medical Records has several subdomains that will be launching incrementally to Phase 0 throughout Fall 2023-Fall 2024. The proposed launch order is as follows: 
1. Allergies (October 2023) - DONE
2. Vaccines (December 2023) - DONE
3. Care summaries & notes, Vitals (March 2024) - DONE
4. Health conditions (May 2024) - DONE
5. Lab and test results (October 2024) - DONE 
6. Medical records settings, Download medical reports, and lab & test result radiology images (December 2024) - DONE

**Decision log related to earlier phases (prior to sunsetting of MR on MHV Classic) - Phases 0-2 and 2025 Milestones 1 & 2:**
- identify phase when entry points should be implemented
  - In phase 0, the user will only be linked from a url in an email invite to the VA Medical Records landing page
  - In phase 0.5 (ETA September 2024), the experience will be accessible to 1% of Veterans on VA.gov, and we will incrementally increase this number over time, with the goal of 100% around late November 2024. We will not consider Medical Records to be in Phase 1 until 100% of Veterans can access the experience on VA.gov, and "try me" banners have been published in the Classic (National Portal) site directing users to try out the new experience.
  - In phase 1, Users will be linked from legacy MHV directly to these pages via "try me out" messaging. Veterans who start on VA.gov will also be able to access MHV on VA.gov through the "MyHealtheVet" link in the global header, or via cross-links within the portal. At this time, we are still having conversations about whether or not the links on MyVA will route to the new experience, or continue to funnel users to the National Portal. 
  - By phase 1, the in-tool secondary navigation will be removed (with the implementation of the My HealtheVet portal-wide secondary navigation, we don't want to have tertiary navigation in tools).
- "Download all" (Blue button) will not be available on VA.gov until Phase 1. It may no longer be a child of medical records since it touches lots of tools. This "download all" could become its own page at the root level of the portal (va.gov/my-health/download-all) and be cross-linked from medical records. This is still under discussion.

**Updated 7/21/23 -- KO finalizing after medical records research -- ready to develop Phase 0**
* **IA Request (Previous IA work by CAIA):** [Epic for medical records work](https://app.zenhub.com/workspaces/sitewide-content-accessibility-and-ia-63a1d63232beba0011a7833f/issues/gh/department-of-veterans-affairs/va.gov-team/52997)
