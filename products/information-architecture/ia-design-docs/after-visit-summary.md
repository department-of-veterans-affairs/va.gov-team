# IA Design for After Visit Summary
**STATUS: In Progress**

**Team:** Appointments and Medical Records Joint initiative
- appointments will be writing and releasing the code
- the ultimate destination for the AVS is in Medical Records

**IA Request:** [Link to Sitewide Content and IA intake request]

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>
![AVS before Medical Records is available](https://user-images.githubusercontent.com/122126772/236344155-58f0e702-c9de-4268-ae8e-7df2d4457ab8.png)
- before medical records is available to the user, the medical records breadcrumbs and left nav could be suppressed. This would allow us to still put the page in medical records (and use a medical records URL), but the user wouldn't be distracted by that mis-matched architecture.

![AVS after Medical Records is available](https://user-images.githubusercontent.com/122126772/236344059-5006e22c-d190-465d-a7e5-30b2ad48837b.png)
- after medical records is available to the user, the medical records breadcrumbs and left nav will show up

## <a name="map"></a>Page structure<br>
- The After Visit Summary (AVS) will live in Medical Records as a type of Care Note and Summary

![Left Nav with Care Notes and Summary circled](https://user-images.githubusercontent.com/122126772/236344407-b2045ed4-72ac-48d8-944f-a530c3df4967.png)


## <a name="url"></a>URLs and breadcrumbs

**1) After Visit Summary - New**
- URL: www.va.gov/my-health/health-history/care-notes/visit-summary/detail?id=[value]
- Breadcrumb: The breadcrumb could be suppressed if the user cannot also see Medical Records. If they can see medical records, the breadcrumbs would be: --Desktop: VA.gov home > My Health > Health History > Care Notes and Summaries > [H1 of AVS Detail Page]
--Mobile: < Care Notes and Summaries
- Note: I think adding a link back to the Appointment on the AVS itself could be really helpful in 1) helping the user get back to their appointment while we are in mismatched phases between appointsments and medical records and 2) making it clear which appointment this summary refers to.



## <a name="nav"></a>Entry points <br>


1. **Care Notes and Summaries list** - Add
  - Placement description: The AVS will be a type of care note/summary in Medical Records.
  - Link label: TBD by content
  - Notes: Only after Medical Records is available for a user

2. **Appointment Detail** - Add
  - Placement description: TBD by the appointments team where they put a link to the AVS within the appointment detail
  - Link label: TBD by content
  - Link destination: AVS
  - Notes: This should be available from the first phase
 

## <a name="redirects"></a>Redirects <br>
No redirects needed now.
 


<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info
