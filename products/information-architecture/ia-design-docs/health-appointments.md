# IA Design for Appointments
**STATUS: In Progress**

**Team:** Appointments

**On this page:**
- [User/page flows](#flows)
- [Page structure](#map)
- [URLs and breadcrumbs](#url)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="flows"></a>User/page flows <br>
![Appointments user flow and page access](https://user-images.githubusercontent.com/122126772/235779810-7314b929-4357-4d41-b349-432672aa8b97.png)


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

![IA Changes to Appointments](https://user-images.githubusercontent.com/122126772/236029509-3cfd9713-4d10-4ee6-ac66-ef51b0dce157.png)


## <a name="main urls"></a>URLs and breadcrumbs - Main Pages
*URL and breadcrumb requirements for each modified or new page within the experience. URLs and breadcrumbs must follow established patterns and standards of the existing site.*

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Appointments Landing Page | www.va.gov/my-health/appointments?view=[View type] | Home > My HealtheVet> Appointments | We propose that all 3 appointment views (pending, cancelled, past, etc.) be at the same breadcrumb, instead of different ones. The selected filter would change the url parameters, but not the breadcrumb. For example, urls might be www.va.gov/my-health/appointments?view=upcoming ; www.va.gov/my-health/appointments?view=pending ; www.va.gov/my-health/appointments?view=past
Appointments Detail View | www.va.gov/my-health/appointments/detail?id=[ID Number]&view=[View type] | Home > My HealtheVet > Appointments > [Appointment Title] | The ID is dynamic and pulled in for each unique appointment. The view depends on the appointment type, whether it's upcoming, pending, past, or cancelled. For example, www.va.gov/my-health/appointments/detail?id=123456&view=upcoming
Cancel Appointment |  |  | None needed, since the cancellation flows are in a modal

## <a name="scheduling urls"></a>URLs and breadcrumbs - Scheduling Pages
Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
Schedule Appointment | www.va.gov/my-health/appointments/schedule | Home > My HealtheVet> Appointments> Schedule Appointment | 
Schedule Appointment - Select Location | www.va.gov/my-health/appointments/schedule/facility | Home > My HealtheVet> Appointments> Schedule Appointment> Choose Location | 
Schedule Appointment - Select Date | www.va.gov/my-health/appointments/schedule/date | Home > My HealtheVet> Appointments> Schedule Appointment> Choose Date | 
Schedule Appointment - Select Reason | www.va.gov/my-health/appointments/schedule/reason | Home > My HealtheVet> Appointments> Schedule Appointment> Choose Reason | 
Schedule Appointment - Select Visit Type | www.va.gov/my-health/appointments/schedule/visit-type | Home > My HealtheVet> Appointments> Schedule Appointment> Choose Visit Type | 
Schedule Appointment - Contact Info | www.va.gov/my-health/appointments/schedule/contact-info | Home > My HealtheVet> Appointments> Schedule Appointment> Choose Visit Type | 
Schedule Appointment - Review | www.va.gov/my-health/appointments/schedule/review | Home > My HealtheVet> Appointments> Schedule Appointment> Review | 
Schedule Appointment - Confirmation | www.va.gov/my-health/appointments/schedule/confirmation | Home > My HealtheVet> Appointments> Schedule Appointment> Confirmation | Do we need this?



## <a name="nav"></a>Entry points <br>
These aren't changing.
 

## <a name="redirects"></a>Redirects <br>
I don't think we need any redirects?
 
