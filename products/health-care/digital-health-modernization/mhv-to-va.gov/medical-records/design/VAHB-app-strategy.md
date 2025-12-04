# UX Strategy: Medical Records in VA Health Benefits (VAHB) app and VA.gov

**Date: 12/1/25**

_Note: This work is ongoing and will be updated as needed._ 

This document sets out to clarify and document the UX strategy for medical records within the VAHB app and VA.gov website. 

## Background 

**The current VAHB app includes:** 
- Lab and test results 
- Allergies
- Vaccines

**Missing from app:** 
- Vitals
- Care summaries and notes 
- Health conditions 

**Additional missing from the VAHB app:** 

The Blue Button (BB) and Continuity of Care Document (CCD) will permanently be excluded from the VAHB app. 

**Other considerations:** 

The VAHB app will include the radiology report/interpretation. However, images will not be available on the VAHB app as some results involve many images that need to be downloaded as a zip file. 

## Goals/Questions 

**Should we pull these remaining domains into VAHB?**  
- Vitals
- Care summaries and notes
- Health conditions

**If so, what form should that take? (Types of VAHB mobile UX modalities)**
- Native
- WebView
- Authenticated browser experience via SSO
- External link

## Summary of recommendations 

**Lab and test results**, **Allergies**, and **Vaccines** should be retained within the app.

**Medical imaging results** should be separated from **Lab and test results** as a distinct category.

**Care summaries and notes** should be added. 

**_Open questions_** 

- Do we include Vitals and Health conditions?
- Will these bring value to Veterans to include within the VAHB app?  

## Details of recommendations 

### Currently included within the VAHB app

___

### Lab and test results 

**Recommendation:** Continue to include 

**Rationale:** Access to lab and test results on the app is essential for keeping the Veteran up to date/tracking their healthcare journey, as well as communicating with providers. It is the most popular domain Veterans access (quarterly metrics report Oct 11-31). 
 
**Current modality:** 

Native: For the report/interpretation 

External link: Medical imaging results 
- Images will not be available on the VAHB app as some results involve many images that need to be downloaded as a zip file. 

**Future state modality:** 

Native: For the report/interpretation 

WebView: For medical imaging results 
- WebView: Users can be passed from the VAHB app (via WebView) to VA.gov URLs while remaining fully authenticated. However, if users are directed outside the VAHB app to their native browser, their authenticated status cannot be transferred. SSO authentication is restricted to the WebView.

Further exploration: 
- Engineering will explore the LOE to include the images natively. 
- Engineering will explore how WebView works within the app 
___

### Allergies 

**Recommendation:** Continue to include 

**Rationale:** Allergy information is essential for patient safety, and we should continue to link to Allergies and reactions from the Medications tool. 

This could help the Veteran in the moment, and inclusion in the app can serve as a quick reference for them.
 
**Current modality:** Native

**Future considerations:** Introducing a date range, sort, filter, and sort functionality to make Allergies more findable
___

### Vaccines 

**Recommendation:** Continue to include 

**Rationale:** Despite the low click-through rate to the Vaccine domain, the availability of vaccines within the app functions as a psychological safety net for some Veterans, mitigating anxieties and addressing concerns such as, "Am I protected from this?"
 
**Current modality:** Native

**Future considerations:** Introducing a date range, sort, filter, and sort functionality to make vaccines more findable
___

### Remaining domains 
___

### Care summaries and notes 

**Recommendation:** Include 

**Rationale:** Second most accessed domain. Quick access is important for coordinating care. 
 
**Modality:** Native

**Future considerations:** Introducing a date range, sort, filter, and sort functionality to make Care summaries and notes more findable
___

### Vitals 

**Recommendation:** Include? 

**Rationale:** 
- This data is important to self-monitoring and self-management. 
   - Condition monitoring/Trend monitoring 
Hypertension, etc 
Appointment preparation and communication 

However, along with Vaccines, Vitals is not utilized often by Veterans. In its current design, what is the utility of including in the app?  

Will this bring value to Veterans to include within the VAHB app? 

**Current modality:** Native

**Future considerations:** Introducing a date range, sort, filter, and sort functionality to make Care summaries and notes more findable

___

### Health conditions

**Recommendation:** Uncertain 

**Rationale:** The third most popular domain. But there's a fairly large gap between _Health conditions_ and _Care summaries and notes _
Uncertain if Veterans rely on (compared to other domains when tracking health/communicating with providers)

 Will this bring value to Veterans to include within the VAHB app? 
 
**Current modality:** Native

**Future considerations:** Introducing a date range, sort, filter, and sort functionality to make Care summaries and notes more findable

## Potential implementation general paths:

**If there is urgency, we can follow this path** 

We already have responsive designs. So, we can do a WebView (understanding there is technical discovery, etc) as soon as possible for the domains we choose to include (Care summaries and notes, potentially Vitals, potentially Health conditions). Then work to build them in the native app for a better experience. 

   Or

**Recommended:** 

Build each domain natively (and message or point Veterans to VA.gov for their full MR, in whatever way we see best). 

## General content strategy 

- We should only add content that brings value to the Veterans.  
- We should not message about features/elements that are not available (and never were) within the app. 
  - Could create frustration and tease the user
  - Continue to keep app simple 
  - More content can clutter the interface
  - Every element included must serve a purpose

### Continuity of care and Blue Button

**Continuity of Care Document (CCD):** Will not be in the app. 

How do we want to communicate around this? 

- It does not seem to bring value to the user to surface CCD and specifically call out CCD within the VAHB app
- Our strategy should be to not message about features/elements that are not available (and never were available) 
- The app currently points Veterans to VA.gov (i.e, Go to VA.gov to view your complete medical record) where a Veteran can access CCD. 
- Low traffic

**Recommendation:** We should avoid surfacing or specifically calling out CCD (Continuity of Care Document) within the VAHB app, as it adds unnecessary complexity. Veterans will still be able to access the CCD via VA.gov (i.e., Go to VA.gov to view your complete medical record). 

**Blue Button:** Will not be in the app. 

How do we want to communicate around this? 

- I don’t see evidence that Veterans are looking for Blue Button within the app. However, we know that it is the third most accessed feature on MR. 
- There could be some value in creating content and linking Veterans to the download page. 
- With that being said, I continue to lean towards pointing users back to VA.gov with high level, simple messaging until we have more evidence that different content is needed as we have to balance the simplicity and real-estate of the app 

Go to VA.gov to view your complete medical record: 
[Link] View medical records on VA.gov

_Note: There is some general disagreement around this approach._

- "I disagree- when I read this, it makes me wonder what is missing from the app. This suggests the app is not complete record, so I want to understand what "extra" things will be there if I go to the web."

- "Veterans don't fully understand that they can do more on VA.gov then in the app." 

<img width="343" height="685" alt="Screenshot 2025-11-24 at 10 33 08 AM" src="https://github.com/user-attachments/assets/8c4a82e0-fca2-41bb-a6ca-134e342d80bc" />

## Future design exploration: 

- Sort
- Filter
- Search  
A combination of the three - To make the domains more findable and improve navigation. 

- Print/download 

What are the issues we are seeing with it? The interaction? The placement? Things out of our control or within our control? 

- Push notifications 
How can we utilize push notifications on VAHB for MRs on the app?



