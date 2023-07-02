# IA Design for Appointments
**STATUS: In Progress**

**Team:** Appointments

**On this page:**
- [Page structure](#map)
- [URLs and breadcrumbs](#urls)
- [Entry points](#nav)
- [Redirects](#redirects)
- [Meeting notes](#notes)


## <a name="map"></a>Page structure<br>
*Illustration and/or description of where this product/feature will live within the overall IA of VA.gov (i.e. a site map). The placement of your product/feature determines the URL structure, breadcrumb, and navigational needs of the product/feature, and provides search engines with relationship information that impacts overall SEO and findability. Placement of a product/feature must follow established patterns and standards of the existing site.*

![IA of appointments](https://github.com/department-of-veterans-affairs/va.gov-team/assets/122126772/4bc9b61e-3e9f-45e8-bce6-a2274751118b)

Note: the URL for the after-visit summary is still TBD. It could be just an ID based URL like /123456, or it could have a label on it, like /after-visit-summary-123456. 


## <a name="urls"></a>URLs and breadcrumbs

Page | URL | Breadcrumb | Notes
--- | --- | --- | ---
|1. Appointments landing page | https://va.gov/my-health/appointments | VA.gov home > My HealtheVet > Appointments |
|2. Past appointments list | https://va.gov/my-health/appointments/past | VA.gov home > My HealtheVet > Appointments > Past |
|3. Requested appointments list | https://va.gov/my-health/appointments/requests | VA.gov home > My HealtheVet > Appointments > Requests  | 
|4. Upcoming and cancelled appointments detail pages | https://va.gov/my-health/appointments/[ID] | < Back to appointments  | 
|5. Past appointments detail pages | https://va.gov/my-health/appointments/past/[ID] | < Back to past appointments |
|6. Requested appointments detail pages | https://va.gov/my-health/appointments/requests/[Request-ID] | < Back to requests |
|7. Root scheduling URL | https://va.gov/my-health/appointments/schedule/[H1-related-title] | VA.gov home > My HealtheVet > Appointments > [H1 Page Title] |

Additional URLs can be found on Sharepoint in this [excel file](https://dvagov.sharepoint.com/:x:/r/sites/HealthApartment/Shared%20Documents/Appointments/Projects/2023%20Appointments%20move%20to%20MHV%20on%20VA.gov/MVP%20-%20Appointments-FE%20IA%20update.xlsx?d=w069ea28fa90140bd9a0dbca85f8c9cf1&csf=1&web=1&e=dFUVgE).
Reach out to Peter Russo for access.


## <a name="nav"></a>Entry points <br>
These will be documented and updated according to the Phased Rollout Plan.

## <a name="redirects"></a>Redirects <br>
We will need to redirect all of the existing appointments and scheduling URLs to the new assigned URLs

| Flow                                                   | Internal name                           | H1 Page Title                                  | Current URL                                                                                                           | New URL                                                                       |
| ------------------------------------------------------ | --------------------------------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| All                                                    | Type of care                            | Choose the type of care you need               | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment                                         | https://va.gov/my-health/appointments/schedule/type-of-care                   |
| VA direct schedule<br><br>VA request<br><br>CC request | Choose sleep care                       | Choose the type of sleep care you need         | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-sleep-care                       | https://va.gov/my-health/appointments/schedule/sleep-care                     |
| VA direct schedule<br><br>VA request<br><br>CC request | Choose eye care                         | Choose the type of eye care you need           | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-eye-care                         | https://va.gov/my-health/appointments/schedule/eye-care                       |
| VA direct schedule<br><br>VA request<br><br>CC request | Choose category of care                 | Choose where you want to receive your care     | https://staging.va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-facility-type            | https://va.gov/my-health/appointments/schedule/facility-type                  |
| CC request                                             | Choose audiology care                   | Choose the type of audiology care you need     | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/audiology                               | https://va.gov/my-health/appointments/schedule/audiology-care                 |
| VA direct schedule<br><br>VA request                   | Choose a location                       | Choose a VA location                           | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/va-facility-2                           | https://va.gov/my-health/appointments/schedule/location                       |
| VA direct schedule                                     | Choose a clinic                         | Choose a VA clinic                             | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/clinics                                 | https://va.gov/my-health/appointments/schedule/clinic                         |
| VA direct schedule                                     | Patient-indicated date                  | When do you want to schedule this appointment? | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/preferred-date                          | https://va.gov/my-health/appointments/schedule/preferred-date                 |
| VA direct schedule                                     | Choose a date                           | Choose a date and time                         | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/select-date                             | https://va.gov/my-health/appointments/schedule/date-time                      |
| VA direct schedule                                     | Reason for appointment                  | Choose a reason for this appointment           | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/reason-appointment                      | https://va.gov/my-health/appointments/schedule/reason                         |
| VA direct schedule                                     | Contact information                     | Confirm your contact information               | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/contact-info                            | https://va.gov/my-health/appointments/schedule/contact-information            |
| VA direct schedule                                     | Review                                  | Review your appointment details                | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review                                  | https://va.gov/my-health/appointments/schedule/review                         |
| COVID vaccine                                          | COVID instructions                      | COVID-19 vaccine appointment                   | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment                        | https://va.gov/my-health/appointments/schedule/covid-vaccine                  |
| COVID vaccine                                          | COVID vaccine screener                  | Have you received a COVID-19 vaccine?          | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/confirm-doses-received | https://va.gov/my-health/appointments/schedule/confirm-covid-doses-received   |
| COVID vaccine                                          | COVID doses received - contact facility | We can’t schedule your second dose online      | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/contact-facility       | https://va.gov/my-health/appointments/schedule/covid-contact-facility         |
| COVID vaccine                                          | Choose a location                       | Choose a location                              | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/choose-facility        | https://va.gov/my-health/appointments/schedule/covid-location                 |
| COVID vaccine                                          | Choose a clinic                         | Choose a clinic                                | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/choose-clinic          | https://va.gov/my-health/appointments/schedule/covid-clinic                   |
| COVID vaccine                                          | Choose a date                           | Choose a date                                  | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/select-date            | https://va.gov/my-health/appointments/schedule/covid-date-time                |
| COVID vaccine                                          | Second dose info                        | When to plan for a second dose                 | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/second-dose-info       | https://va.gov/my-health/appointments/schedule/second-dose-info               |
| COVID vaccine                                          | Contact info                            | Confirm your contact information               | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/contact-info           | https://va.gov/my-health/appointments/schedule/covid-contact-information      |
| COVID vaccine                                          | Review                                  | Review your appointment details                | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-covid-19-vaccine-appointment/review                 | https://va.gov/my-health/appointments/schedule/covid-review                   |
| VA request                                             | Preferred date                          | Choose an appointment day and time             | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/request-date                            | https://va.gov/my-health/appointments/schedule/preferred-date-va-request      |
| VA request                                             | Reason for appointment                  | Choose a reason for this appointment           | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/reason-appointment                      | https://va.gov/my-health/appointments/schedule/reason-va-request              |
| VA request                                             | Preferred modality                      | Choose a type of appointment                   | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-visit-type                       | https://va.gov/my-health/appointments/schedule/preferred-method-va-request    |
| VA request                                             | Contact information                     | Confirm your contact information               | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/contact-info                            | https://va.gov/my-health/appointments/schedule/contact-information-va-request |
| VA request                                             | Review                                  | Review your appointment details                | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review                                  | https://va.gov/my-health/appointments/schedule/review-va-request              |
| CC request                                             | Preferred date                          | Choose an appointment day and time             | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/request-date                            | https://va.gov/my-health/appointments/schedule/preferred-date-cc-request      |
| CC request                                             | Closest city                            | What’s the closest city to you?                | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/choose-closest-city                     | https://va.gov/my-health/appointments/schedule/closest-city-cc-request        |
| CC request                                             | Request a provider                      | Request a [type of care] provider              | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/community-care-preferences              | https://va.gov/my-health/appointments/schedule/preferred-provider-cc-request  |
| CC request                                             | Preferred language                      | Choose a preferred language                    | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/community-care-language                 | https://va.gov/my-health/appointments/schedule/preferred-language-cc-request  |
| CC request                                             | Reason for appointment                  | Tell us the reason for this appointment        | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/reason-appointment                      | https://va.gov/my-health/appointments/schedule/reason-cc-request              |
| CC request                                             | Contact information                     | Confirm your contact information               | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/contact-info                            | https://va.gov/my-health/appointments/schedule/contact-information-cc-request |
| CC request                                             | Review                                  | Review your appointment details                | https://va.gov/health-care/schedule-view-va-appointments/appointments/new-appointment/review                                  | https://va.gov/my-health/appointments/schedule/review-cc-request              |

