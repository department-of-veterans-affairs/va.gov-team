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
*Illustration and/or description of how users will flow through the experience. The user flow helps illustrate how visitors will navigate to and through your product/feature, ensures all types of visitors and scenarios are accounted for, and aids in identifying all content and messaging needs.*


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

![IA changes to Appointments Screenshot](https://user-images.githubusercontent.com/122126772/235266584-d36f5a71-9a97-4dd7-8f93-b1bb5460f2a8.png)


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
*A list of any critical redirects needed as part of this product/feature launch. Redirects are required for any URL changes to ensure visitors do not receive a 404 - Page not found error in the experience. For any redirects listed, please submit a request for the redirect using the [Redirect Request Issue Template](https://github.com/department-of-veterans-affairs/va.gov-team/issues/new?assignees=mnorthuis&labels=content-ia-team%2C+ia&template=redirect-request.md&title=Redirect+Request) at least 2 weeks in advance.*  


Current URL | Redirect to | Notes
--- | --- | ---
 |  | I don't think we need any redirects?
 




<hr>
<hr>

## <a name="notes"></a>Meetings notes and background info
