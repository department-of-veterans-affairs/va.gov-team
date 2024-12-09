# VAMC features

VAMCs are comprised of many features, mostly deriving from Drupal. Major features include: 
* [Editor Knowledge Base](https://prod.cms.va.gov/help/vamc)
* [Centralized Content](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#centralized-content)
* [VAMC System](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-system)
  * [Lovell](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#lovell)
  * [VA Manila](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#va-manila)
* [Services](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#services)
* [Top tasks](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#top-tasks)
* [VAMC System Operating status](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-operating-status)
* [VAMC banners with situation updates](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-banners-with-situation-updates-including-govdelivery-integration)
  * [VAMC real-time banners](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-real-time-banners)
* [VAMC Facilities](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-facility)
* [VAMC Locations List](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-locations-list)
* [VAMC VA Police](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-police)
* [Leadership / Staff profiles](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#leadership-list)
* [Events](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#events)
* [News releases](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#news-releases)
* [Stories](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#stories)
* [VAMC Detail Pages](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/features/README.md#vamc-detail-pages)

## Editor Knowledge Base
https://prod.cms.va.gov/help/vamc

## Centralized Content
https://prod.cms.va.gov/admin/content?title=&type=centralized_content&moderation_state=published&owner=All

Centralized Content is a Drupal content-type that is used to allow administrative leadership to set some text, policy, content, etc. that will apply to a set of similar content at a lower level. For example, VHA leadership uses Centralized Content to apply some language to all VAMC pages of the same type (Medical Records, Billing & Insurance, etc). 

National Editors create and manage the content. 
Drupal then embeds that content on the related nodes in a way that shows local Editors what the centralized content says, but does not allow them to edit it. 

Centralized Content is used on all modernized Facility types. (As of Nov 2024: VAMCs, Vet Centers, VBA Regional Offices.)

## VAMC System
VA Medical Care (VAMC) facilities are organized into Systems. A VAMC System is also a Drupal entity that includes a standard information architecture (in all but 2 cases). 

The VAMC System node from Drupal acts as the System landing page on VA.gov (with the exception of Manila), and includes a left side navigation bar to find other content. Other data entities described in more detail below are effectively children of VAMC Systems: 
* VAMC System
  * operating status
  * VAMC System Location lists
  * VAMC Facilities
* Top task pages
  * Medical Records
  * VAMC Billing & Insurance
  * VAMC Medical Records office
* Events
* Leadership Lists & Staff profiles
* Stories
* News releases
* VAMC Programs pages
* VAMC Policy pages
* VAMC Police pages

For more flexible content that is not strictly defined by VAMC System IA, editors can use VAMC Detail pages.

In addition, VAMC Systems can display "Other VA Locations" that are nearby or related but not within the system.

**Related KBs:**
* [How to edit a VAMC Healthcare System homepage](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-system-homepage)
* [How to add Other VA locations](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-add-other-va-locations)
* [How to edit the locations list for my VAMC](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-locations-content-for-vamcs/how-to-edit-a-locations-list)
* [How to edit a facility map](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-edit-a-facility-map)
* [How do I add a facility to my health care system?](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-do-i-add-a-facility-to-my-health-care-system)

**Electronic Health Records (EHR) Systems**
The VAMC System entity in Drupal has a setting, "VA Health Connect and Health Records System." This setting indicates which Electronic health records system is in use at this System. For more information on EHR: https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/content/cerner-vista-ehr

**Unique Systems**
There are two unique VAMC Systems that do not follow the standard IA: Lovell, and Manila.

### Lovell
Lovell is a VAMC System that is a single facility that accepts both VA and DOD benefits. Any given page within the Lovell System can be viewed as a VA beneficiary or a Tricare beneficiary, using a toggle on the page. URLs are manipulated to achieve this. 

In some cases, if the content needs to vary for the beneficiary audience, that is achieved with two separate nodes and manipulating the navigation to present the correct page for the audience.

TODO: Get DaveP to say more. 

Tricare: https://www.va.gov/lovell-federal-health-care-tricare/
VA: https://www.va.gov/lovell-federal-health-care-va/
[Lovell Drupal content
](https://prod.cms.va.gov/admin/content?title=&type=All&moderation_state=All&owner=347)

### VA Manila
https://www.va.gov/manila-va-clinic/

VA Manila is a custom VAMC System that is composed of ONLY the Manila VA clinic. The [VA Manila VAMC System node](https://prod.cms.va.gov/manila-va-system) is Archived, by design.  

The architecture of this System relies on the archived node being present in Drupal for breadcrumbs and menus to work correctly. 

## Services
### VA Services taxonomy
The VA Services taxonomy is a governed set of Service terms that describe services offered at VA facilities. VAMCs harness this taxonomy. (So do Vet Centers and VBA Regional Offices.)

### VAMC System Health Services
VAMC System Health Service is a Drupal node type that establishes a relationship between a VA Services taxonomy term, and a VAMC System, and indicates that the given Service can be / is offered within that System. 

System Health Services appear on a VAMC's health services page, within accordions.
  * **Example:** https://www.va.gov/minneapolis-health-care/health-services/
  * [All VAMC System Health Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=regional_health_care_service_des&moderation_state=All&owner=All)

**Related KBs:**
[How to add or edit a VAMC system health service](https://prod.cms.va.gov/help/vamc/how-to-add-or-edit-a-vamc-system-health-service)

### Health Services list[
[All published Health Services lists](https://prod.cms.va.gov/admin/content?title=&type=health_services_listing&moderation_state=published&owner=All)

Health Services lists are pages at the System level that list all of the available VAMC System Health Services for the current System, as well as optional featured content that can be specified in Drupal.

**Related KBs:**
[How to edit a health services List](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-health-services/how-to-edit-a-health-services-list)


### VAMC Facility Health services
VAMC Facility Health service is a Drupal node that establishes a relationship between a VAMC System Health Service, and a VAMC Facility, and indicates that the given Service can be / is offered within that Facility. Facility Health Services appear on a VAMC Facility page, within accordions.
  * **Example:** https://www.va.gov/minneapolis-health-care/locations/minneapolis-va-medical-center/#complementary-and-integrative-health
  *  [All VAMC Facility Health Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=health_care_local_health_service&moderation_state=All&owner=All)

Drupal is the source of truth about Services offered at a Facility.
Service data is migrated to Lighthouse as a consumer via the [Drupal facilities migration](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-facility.md#data-flow) overlay.

**Related KBs:**
[How to add, edit, or remove a VAMC facility health service](https://prod.cms.va.gov/help/vamc/how-to-add-edit-or-remove-a-vamc-facility-health-service)

### VAMC Facility Non-clinical Services
[All VAMC Facility Non-Clinical Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=vha_facility_nonclinical_service&moderation_state=All&owner=All)

For VAMCs, Non-clinical services are not related to the VA Services taxonomy. Options for non-clinical services are: 
* Medical Records
* Billing & Insurance
* Register for Care

When an Editor creates a Facility non-clinical service, that will generate a record of the availability of that service at the given location, on the System-level Top Task page. 

More detail on Top Tasks below. 


## Top tasks
For the tasks that Veterans and Caregivers have to perform most frequently within a Healthcare system, four structured content types have been created: 
1. VAMC Billing & Insurance
2. VAMC Medical Records
3. VAMC Register for care
4. VAMC System Policies page

These content types provide a structured way to present national policy information or consistent language via Centralized Content. The first 3 (Medical Records, Billing & Insurance, and Register for care) are also corelated with Non-clinical services, and Top Task pages list the Facilities where that Non-clinical service is available, within the system.

### VAMC Billing & Insurance
[All published VAMC Billing & Insurance pages](https://prod.cms.va.gov/admin/content?title=&type=vamc_system_billing_insurance&moderation_state=published&owner=All)

In Drupal, Billing & Insurance nodes display:
* Centralized Content for Billing & Insurance
* Contact information
* Hours / availability 
* A generated list of facilities that have create the Billing & Insurance Facility non-clinical service
* A link to create a NEW Billing & Insurance Facility non-clinical service

**Related KBs:**
[How to create or edit a VAMC billing and insurance page](https://prod.cms.va.gov/help/vamc/how-to-create-or-edit-a-vamc-billing-and-insurance-page)

### VAMC Medical Records office
[All published VAMC Medical Records office pages](https://prod.cms.va.gov/admin/content?title=&type=vamc_system_medical_records_offi&moderation_state=published&owner=All)

In Drupal, Medical Records Office nodes display:
* Centralized Content for Medical Records
* A generated list of facilities that have create the Medical Records Facility non-clinical service
* A link to create a NEW Medical Records Facility non-clinical service

**Related KBs:**
[How to create or edit a VAMC System Medical Records Office page](https://prod.cms.va.gov/help/vamc/how-to-create-or-edit-a-vamc-system-medical-records-office-page)

### VAMC Register for Care
[All published VAMC Register for Care pages](https://prod.cms.va.gov/admin/content?title=&type=vamc_system_register_for_care&moderation_state=published&owner=All)

In Drupal, Register for Care Office nodes display:
* Centralized Content for Register for Care
* A generated list of facilities that have create the Register for Care Facility non-clinical service
* A link to create a NEW Register for Care Facility non-clinical service

**Related KBs:**
[How to create or edit a VAMC System Register for Care Page](https://prod.cms.va.gov/help/vamc/how-to-create-or-edit-a-vamc-system-register-for-care-page)

### VAMC System Policies
[All published VAMC System Policies pages](https://prod.cms.va.gov/admin/content?title=&type=vamc_system_policies_page&moderation_state=published&owner=All)

Policies Top Task pages display:
* Centralized Content for Policies
* Visitation policy from a rich text field
* Other policies as rich text

**Related KB:**
[How to edit a VAMC policies page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-system-policies-page)

## VAMC System Operating status
The System Operating Status page is a structured content type in Drupal that generates a System page on VA.gov. It contains three primary types of information: 

1. In Drupal: A list of all VAMC Banner with Situation Update content published within the given System.
2. In Drupal and on VA.gov: A list of all Facility operating statuses, for Facilities in the System
3. In Drupal and on VA.gov: Local emergency resources directory for the system, as a rich text field.

[All VAMC System Operating Status pages.
](https://prod.cms.va.gov/admin/content?title=&type=vamc_operating_status_and_alerts&moderation_state=published&owner=All)

[ALl VAMC System Operating Statuses](https://prod.cms.va.gov/admin/content/vamc-alerts-and-statuses?field_alert_type_value=All&type=vamc_operating_status_and_alerts&moderation_state=All&status=1&field_administration_target_id=All) -- Statuses that appear on the pages above

Example: 
* Drupal: https://prod.cms.va.gov/birmingham-health-care/operating-status
* https://www.va.gov/birmingham-health-care/operating-status

**Related KB articles:**
[About alerts and operating statuses](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses)
[How to edit a facility operating status](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses)

## VAMC System banners with situation updates
VAMC System Banners with situation updates (SBwSU) are a complex Drupal content type used to make VA.gov visitors aware of urgent issues such as inclement weather, unexpected closures, or patient safety issues. They can consist of three components: 
1. System banner
2. Email alert
3. Situation update

[All published VAMC System Banners with Situation Updates](https://prod.cms.va.gov/admin/content/vamc-alerts-and-statuses?field_alert_type_value=All&type=full_width_banner_alert&moderation_state=All&status=1&field_administration_target_id=All)

### System banner
Visually, VAMC System Banners appear in VA.gov identical to [Full-width alerts](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/full-width-alert).

When creating a VAMC SBwSU, Editors specify within which System the banner should appear. The banner will appear on every page within that System, unless the "Limit banner display to the home and the Operating Status page(s)" option is selected.

Editors may also opt to set the System banner to be dismissable. Once a user dismissed the banner, it will not appear to that user again, based on a cookie value. For this reason, Editors are encouraged to archive old banners and create new, rather than editing / re-using existing banners.

Historically, this banner template is managed in content-build. The content-build > content-release publishing time exceeded 1 hour in 2024, and led to the VAMC real-time banners project, to enable faster publishing for this patient-safety-related content.

### Email Updates with GovDelivery
Editors may opt to "Send email update on this situation". Anyone subscribed to emergency updates for VAMCs associated with this situation update will receive an email via GovDelivery.

### Situation Update
Situation updates consist of a rich-text Update, a date & time stamp, and an option to send the Update via email  to subscribers of emergency emails for that VAMC System. This allows Editors to create a one-time banner, but follow up with evolving updates as a situation develops. 

Situation updates appear on each VAMCs' Operating status page. 

**Related KB articles:**
[How to create a situation update](https://prod.cms.va.gov/help/vamc/how-to-create-a-situation-update)

### VAMC Real-time banners
VAMC Real-time banners is an alternate publishing method for VAMC System Banners with Situation Updates. VAMC SBwSU content from Drupal is pulled via a sidekiq job every 10mins, stored in vets-api datastore, and published via a vets-api endpoint. A vets-website React application polls that API endpoint for new data, and allow VAMC SBwSU content to publish ~every 10 minutes. 

Real-time banners do not currently support Situation Updates or Email updates via GovDelivery. Those both go through content-build / standard publishing pipeline, and will take the time required via that pipeline.

## VAMC Facility
All published VAMC Facilities](https://prod.cms.va.gov/admin/content?title=&type=health_care_local_facility&moderation_state=published&owner=All)

A VAMC Facility is single facility within a VAMC System. This can be a:
* VA Medical Center (hospital)
* VA Clinic
* Mobile VA Clinic

The Facility API ID is a unique identifier for a Facility used across Drupal, Lighthouse, and VAST.

VAMC Facilities contain:
* Facility Hours, location, and address data imported from Lighthouse. This data is maintained upstream in VAST and imported into Drupal via the [Drupal Facilities migration](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-facility.md#data-flow) from Lighthouse.
* a Mental Health Phone Number that must be maintained for patient safety
* Operating Status information. Data entered here will be presented in the Facility Locator, and on the VAMC System operating status page.
* Some metadata / general copy fields
* "Prepare for your visit" information

VAMC Facilities have associated Facility Health Services, or Facility Non-clinical services. 

**Related KBs:**
[How to edit a VAMC facility](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-locations-content-for-vamcs/how-to-edit-a-vamc-facility)
[How do I update my VAMC Facility's Basic Location Data?](https://prod.cms.va.gov/help/vamc/how-do-i-update-my-vamc-facilitys-basic-location-data)
[How to add a VAMC facility image](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-add-a-vamc-facility-image)
[How to add or edit a VAMC facility mental health phone number](https://prod.cms.va.gov/help/vamc/how-to-add-or-edit-a-vamc-facility-mental-health-phone-number)

## VAMC System Locations List
[All VAMC System Locations lists](https://prod.cms.va.gov/admin/content?title=&type=locations_listing&moderation_state=published&owner=All)

A listing of VA facilities, within a System. Locations lists are created in Drupal to ensure consistent paths, menus, and section use, but the content entry is limited. 

The actual front-end content of Facilities in a System is determined programmatically by the Section used on a VAMC Facility.

Example: 
* Drupal locations list: https://prod.cms.va.gov/eastern-kansas-health-care/locations
* VA.gov page: https://www.va.gov/eastern-kansas-health-care/locations/

## VAMC System VA Police
[All published VAMC System VA Police pages](https://prod.cms.va.gov/admin/content?title=&type=vamc_system_va_police&moderation_state=published&owner=All)

VAMC System VA Police pages were created in 2023, in compliance with a federal requirement. More details are available in the [initiative brief](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/initiatives/2023-police-transparency).

Police pages display: 
* Contact information from Drupal
* Centralized Content for VA Police info

**Future state:**
Eventually these pages should display VA Police incident data.
VA Police data is provided to a third-party system called Axon. 
Axon has a project underway 2023-2024 to make it possible to share incident data that could then be imported to Drupal and displayed on VA.gov.
Future state epic: https://github.com/department-of-veterans-affairs/va.gov-cms/issues/14327

**Related KB:**
[About VA Police](https://prod.cms.va.gov/help/vamc/about-va-police)

## Leadership List
[All published Leadership Lists](https://prod.cms.va.gov/admin/content?title=&type=leadership_listing&moderation_state=published&owner=All)

Each VAMC System has a Leadership list page, that displays Staff Profiles. To appear in the list, each Staff Profile should be entered in the Leadership team list as a node reference.

**Related KB:** [How to edit a leadership list](https://prod.cms.va.gov/help/vamc/how-to-edit-a-leadership-list)

### Staff profiles
[All published Staff profiles](https://prod.cms.va.gov/admin/content?title=&type=person_profile&moderation_state=published&owner=All)

Staff Profiles include bio information about individuals and can include a photo. 
Staff profiles may have their own page if "Create profile page with biography" is selected on the Drupal form.

**Related KB:** [How to edit or add a staff profile](https://prod.cms.va.gov/help/vamc/how-to-edit-or-add-a-staff-profile)


## News Releases


## Stories


## Events



## VAMC Detail Pages
VAMC Detail Pages are a flexible, unstructured content type ("junk drawer") that Editors can use to create additional pages for content within a VAMC Facility or System.

Detail pages use Drupal paragraph types to allow flexible content creation. 

Historically, if a certain type of Detail Page becomes consistently needed / used across VAMCs, VHA Digital Media and the Sitewide team have worked together to convert that into a structured content type, to facilitate consistency across VAMCs. Examples of this evolution include VAMC Top Task pages, and VAMC Policies pages.

Top task pages currently created using VAMC Detail pages:
* Contact Us
* Make an Appointment
* Pharmacy

**Related KBs:**
* [How to edit or add a VAMC detail page](https://prod.cms.va.gov/help/vamc/how-to-edit-or-add-a-vamc-detail-page)
* [How to edit a VAMC contact us top task detail page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-top-task-detail-page)
* [How to edit a VAMC make an appointment top task detail page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-top-task-detail-page)
* [How to edit a VAMC Pharmacy top task detail page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-top-task-detail-page
* [How to edit a VAMC "Health Service Caregiver Page" using a detail page](https://prod.cms.va.gov/help/vamc/about-health-services/how-to-edit-a-vamc-health-service-caregiver-page-using-a-detail-page)


TODO:
- News release listing & news releases
- Stories
- Events
- Related KBs where missing
- Example URLs
