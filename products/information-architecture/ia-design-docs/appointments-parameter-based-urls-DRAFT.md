# IA Design for Appointments
**STATUS: DRAFT of future idea**

**Team:** Appointments

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

![IA of appointments](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/4bc9b61e-3e9f-45e8-bce6-a2274751118b)

Note: the URL for the after-visit summary is still TBD. It could be just an ID based URL like /123456, or it could have a label on it, like /visit-summary-123456. 


## <a name="main urls"></a>URLs and breadcrumbs - Main Pages
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Appointments Landing Page | www.va.gov/my-health/appointments | VA.gov home > My HealtheVet> H1 of Page | The different views (pending, past, upcoming) should be handled as filters on the appointment list - i.e. utilize parameters to dynamically filter to the view - rather than creating child pages.
Appointments Detail View | www.va.gov/my-health/appointments/[Unique Appointment ID] | < Back to [parameter] appointments  | NOTE: on 5/22 we decided that we want the url to contain the unique ID for the appointment, but TBD what that will look like pending engineering convo.
Cancel Appointment | www.va.gov/my-health/appointments/cancel | VA.gov home > My HealtheVet> Appointments> H1 of Page | we are recommending that this functionality moves from a modal to a page to improve a11y
Schedule Appointment | www.va.gov/my-health/appointments/schedule | VA.gov home > My HealtheVet> Appointments> H1 of Page | Subsequent steps of the flow can follow normal url building guidelines

## <a name="scheduling urls"></a>URLs and breadcrumbs - Scheduling Pages
Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Schedule Appointment - Select Location | www.va.gov/my-health/appointments/schedule/facility | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page]
Schedule Appointment - Select Date | www.va.gov/my-health/appointments/schedule/date | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page] | 
Schedule Appointment - Select Reason | www.va.gov/my-health/appointments/schedule/reason | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page] | 
Schedule Appointment - Select Visit Type | www.va.gov/my-health/appointments/schedule/visit-type | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page]> | 
Schedule Appointment - Contact Info | www.va.gov/my-health/appointments/schedule/contact-info | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page]> | 
Schedule Appointment - Review | www.va.gov/my-health/appointments/schedule/review | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page] | 
Schedule Appointment - Confirmation | www.va.gov/my-health/appointments/schedule/confirmation | VA.gov home > My HealtheVet> [H1 of Appointments page]> [H1 of Schedule Appointment page]  | 



## <a name="nav"></a>Entry points <br>
These will be documented and updated according to the Phased Rollout Plan.
 

## <a name="redirects"></a>Redirects <br>
We will need to redirect all of the existing appointments and scheduling URLs to the new assigned URLs

Page | Current URL | Redirect to | Notes
----| --- | --- | ---
Appointments landing page| https://va.gov/health-care/schedule-view-va-appointments/appointments/ | www.va.gov/my-health/appointments | ---
Appointments landing page - filtered to PENDING| https://va.gov/health-care/schedule-view-va-appointments/appointments/pending | www.va.gov/my-health/appointments | ---
Appointments landing page filtered to PAST| https://va.gov/health-care/schedule-view-va-appointments/appointments/past | www.va.gov/my-health/appointments | ---
Schedule appointment| https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment | www.va.gov/my-health/appointments/schedule | ---
Requested appointment - detail view| https://va.gov/health-care/schedule-view-va-appointments/appointments/requests/[ID]| www.va.gov/my-health/appointments/[H1 of Page] | ---
Confirmed/upcoming/cancelled appointment - detail view| https://va.gov/health-care/schedule-view-va-appointments/appointments/va/[ID]| www.va.gov/my-health/appointments/[H1 of Page] | ---
