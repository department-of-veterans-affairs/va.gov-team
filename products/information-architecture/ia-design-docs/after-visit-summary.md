# IA Design for After Visit Summary
**STATUS: In Progress**
Most recently updated: 3/18/2024 by SS; previously updated on 8/16/23 by KO after AVS study findings finalized

**Team:** Appointments and Medical Records Joint initiative
- appointments will be writing and releasing the code
- the AVS will technically live in medical records under care summaries and notes, but will be crosslinked from appointments

**IA Request:** [Link to Sitewide Content and IA intake request]

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>

<img width="944" alt="Screenshot 2023-07-21 at 10 43 31 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/65ca2d44-809e-4ba3-8580-1b084d64e41c">

Users can access the AVS from both the Appointments and Medical records sections. From appointment detail, users can click the AVS link to go to the AVS detail. From medical records, users can select the AVS from care summaries and notes. 

## <a name="map"></a>Page structure<br>
- The After Visit Summary (AVS) will live in Medical Records as a type of care note/summary
- Note in the redirect section below, we show how to handle redirects from empty directories.
- When we start showing AVSs in the list of past care notes, do the work to integrate the application's functionality into the MHV medical records application and get rid of the /visit-summary/ subdirectory altogether.


## <a name="url"></a>URLs and breadcrumbs

**1) After Visit Summary - New**
- URL: www.va.gov/my-health/medical-records/summaries-and-notes/visit-summary/detail?id=[value]
- Breadcrumb: The breadcrumbs will behave like mobile breadcrumbs on desktop and mobile. If a user came from an appointment, the breadcrumb will say "< Back to past appointments". If the user came from care notes, the breadcrumb will say "< Back to care summaries and notes". 


## <a name="nav"></a>Entry points <br>

1. **Care Notes and Summaries list** - Add
  - Placement description: The AVS will be a type of care note/summary in Medical Records.
  - Link label: TBD by content
  - Notes: Only after Medical Records is available for a user

2. **Appointment Detail** - Add
  - Placement description: Below the H1 and before "type of care"
  - Link label: View after-visit summary
  - Link destination: AVS
  - Notes: This should be available from the first phase
 <img width="162" alt="Screenshot 2023-07-21 at 10 48 51 AM" src="https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/6e7eec47-0312-4fc6-88e1-eeb5c603f05f">


## <a name="redirects"></a>Redirects <br>
| URL with empty directory                                                  | Redirect to                                                                                                                                   | Notes                                                                                                                                                                                                                                                                                                                                            |
|--------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| www.va.gov/my-health/medical-records/summaries-and-notes/visit-summary | www.va.gov/my-health/medical-records/summaries-and-notes | The purpose of this redirect is to make sure users don't land on empty directories.                                                                                                                                                                                                                                                              |

<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info
