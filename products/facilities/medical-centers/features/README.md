# VAMC features

VAMCs are comprised of many features, mostly deriving from Drupal. 

## Structure overview
[**VAMC Structure Overview** (Mural)](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1735240054295/6544293bd5824a39b7d041227275c301aa967146) - Updated Dec 2024


Major features include: 
* [Editor Knowledge Base](https://prod.cms.va.gov/help/vamc)
* [Centralized Content](#centralized-content)
* [VAMC System](#vamc-system)
  * [Lovell](#lovell)
  * [VA Manila](#va-manila)
* [Services](#services)
* [Top tasks](#top-tasks)
* [VAMC System Operating status](#vamc-system-operating-status)
* [VAMC banners with situation updates](#vamc-system-banners-with-situation-updates)
  * [VAMC real-time banners](#vamc-real-time-banners)
* [VAMC Facilities](#vamc-facility)
* [VAMC Locations List](#vamc-system-locations-list)
* [VAMC VA Police](#vamc-system-va-police)
* [Leadership / Staff profiles](#leadership-list)
* [News releases](#news-release-listings--news-releases)
* [Stories](#stories)
* [Events](#events)
* [VAMC Detail Pages](#vamc-detail-pages)
* CTA Widget

## Editor Knowledge Base
https://prod.cms.va.gov/help/vamc

## Centralized Content
https://prod.cms.va.gov/admin/content?title=&type=centralized_content&moderation_state=published&owner=All

Centralized Content is a Drupal content-type that is used to allow administrative leadership to set some text, policy, content, etc. that will apply to a set of similar content at a lower level. For example, VHA leadership uses Centralized Content to apply some language to all VAMC pages of the same type (Medical Records, Billing & Insurance, etc). 

National Editors create and manage the content. 
Drupal then embeds that content on the related nodes in a way that shows local Editors what the centralized content says, but does not allow them to edit it. 

Centralized Content is used on all modernized Facility types. (As of Nov 2024: VAMCs, Vet Centers, VBA Regional Offices.)

**Related KBs**
* [VAMC Centralized content](https://prod.cms.va.gov/help/vamc/vamc-centralized-content)


## VAMC System
VA Medical Care (VAMC) facilities are organized into Systems. There are currently (Dec 2024) 140 existing VAMC Systems. A VAMC System is also a Drupal entity that includes a standard information architecture (in all but 2 cases). 

The VAMC System node from Drupal acts as the System landing page on VA.gov (with the exception of Manila), and includes a left side navigation bar to find other content. Other data entities described in more detail below are effectively children or facets of VAMC Systems: 
* VAMC System
  * Operating status page
  * VAMC System Location lists
  * VAMC Facilities
* Top task pages
  * VAMC Billing & Insurance
  * VAMC Medical Records office
* Events
* Leadership Lists & Staff profiles
* Story listings & Stories
* News release listing & News release pages
* VAMC Programs pages
* VAMC Policy pages
* VAMC Police pages
* Services

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
Lovell is a unique VAMC health care system. Other VAMC Systems only service Veterans. Lovell includes some facilities which serve both Veterans and active duty personnel, and other facilities which serve only Veterans OR active duty personnel OR enlisted recruits. Veterans may use VA benefits; active duty or enlisted recruits may use DoD benefits, also referred to as TRICARE. VA and TRICARE benefits offer different information and separate portals for completing top tasks (e.g. scheduling appts, Rx, accessing medical records, etc).

**Related KBs**
* [Creating content for Lovell Federal health care](https://prod.cms.va.gov/help/vamc/creating-content-for-lovell-federal-health-care)
* [Assigning Lovell Federal health care content to a section](https://prod.cms.va.gov/help/vamc/assigning-lovell-federal-health-care-content-to-a-section)
* [Understanding the Lovell menu structure](https://prod.cms.va.gov/help/vamc/understanding-the-lovell-menu-structure)

#### Drupal Sections 
[Lovell Drupal content](https://prod.cms.va.gov/admin/content?title=&type=All&moderation_state=All&owner=347)

* Lovell Federal health care - Used if Lovell content applies to both beneficiary audiences
  * Lovell - TRICARE -- used for content that is active-duty/enlisted facing
  * Lovell - VA -- used for content that is Veteran facing

Tricare: https://www.va.gov/lovell-federal-health-care-tricare/
VA: https://www.va.gov/lovell-federal-health-care-va/

#### Front-end content
Any given page within the Lovell System can be viewed as a VA beneficiary or a TRICARE beneficiary, using a toggle on the page. 

**Federal level content includes:**
* VAMC System
* VAMC Detail pages
* Event Listings & Events
* News release listings and nodes
* Story listings and Stories
* Leadership Listing and Staff profiles

When an individual node (e.g. News Story) is assigned to the Federal level, the content needs to be bifurcated (divided into two new ones) during build, with one being assigned to VA and the other being assigned to TRICARE. Titles and other things (e.g. breadcrumbs) need to be adjusted according to the variant (VA/TRICARE).

The new individual nodes resulting from bifurcation need to have switch links added to each page.
A listing page is built for each variant (VA and TRICARE), and in both cases the individual nodes assigned to each variant need to be merged with the individual nodes assigned to Lovell Federal. Paging counts need to be adjusted accordingly.

Top task links are handled in a similar way, and links from those tasks will vary, depending on which benefiary experience you are in. 

<details><summary>Lovell screenshot</summary>
 
 ![image (51)](https://github.com/user-attachments/assets/20873e41-fee6-4ba9-bac4-750de8d0e578)
</details>


### VA Manila
https://www.va.gov/manila-va-clinic/

VA Manila is a custom VAMC System that is composed of ONLY the Manila VA clinic. The [VA Manila VAMC System node](https://prod.cms.va.gov/manila-va-system) is Archived, by design.  

The architecture of this System relies on the archived node being present in Drupal for breadcrumbs and menus to work correctly. 

* [Manila initiative information](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/initiatives/2024-manila) and [Epic #9419](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/9419)
* [Mural diagrams](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1723593558224/a30b84ebae1d10930081e03f6bc8789ae00a0022?sender=u9c899abc4fe36c9a698b1647)
* [Manila IA Sitemap on Sharepoint](https://dvagov.sharepoint.com/:x:/s/SitewideContract/EdEKl_6X5vRDs7uTjg5tMNUBfXEsWuK834vmp7Hs4FZXZQ?e=b7juyL)

## Services
### VA Services taxonomy
The [VA Services taxonomy](https://prod.cms.va.gov/admin/structure/taxonomy/manage/health_care_service_taxonomy/overview) is a governed set of Service terms that describe services offered at VA facilities. VAMCs harness this taxonomy. (So do Vet Centers and VBA Regional Offices.)

* Service taxonomy product documentation: [products/facilities/va-service-taxonomy](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/va-service-taxonomy)
* [New taxonomy term Issuetemplate](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?template=taxonomy-add-term.yml)
* [Update taxonomy term issuetemplate](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/new?template=taxonomy-update-term.yml)

**KBs**
* [How do I change the name of a health service?](https://prod.cms.va.gov/help/vamc/how-do-i-change-the-name-of-a-health-service)

### VAMC System Health Services
VAMC System Health Service is a Drupal node type that establishes a relationship between a VA Services taxonomy term, and a VAMC System, and indicates that the given Service can be / is offered within that System. 

System Health Services appear on a VAMC's health services page, within accordions.
  * **Example:** https://www.va.gov/minneapolis-health-care/health-services/
  * [All VAMC System Health Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=regional_health_care_service_des&moderation_state=All&owner=All)

**Related KBs:**
[How to add or edit a VAMC system health service](https://prod.cms.va.gov/help/vamc/how-to-add-or-edit-a-vamc-system-health-service)

### Health Services list
[All published Health Services lists](https://prod.cms.va.gov/admin/content?title=&type=health_services_listing&moderation_state=published&owner=All)

Health Services lists are pages at the System level that list all of the available VAMC System Health Services for the current System, and link to Facilities at which the Service is offered, as well as optional featured content that can be specified in Drupal.

**Related KBs:**
[How to edit a health services List](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-health-services/how-to-edit-a-health-services-list)


### VAMC Facility Health services
VAMC Facility Health service is a Drupal node that establishes a relationship between a VAMC System Health Service and a VAMC Facility, and indicates that the given Service can be / is offered within that Facility. Facility Health Services appear on a VAMC Facility page, within accordions.
  * **Example:** https://www.va.gov/minneapolis-health-care/locations/minneapolis-va-medical-center/#complementary-and-integrative-health
  *  [All VAMC Facility Health Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=health_care_local_health_service&moderation_state=All&owner=All)

Drupal is the source of truth about Services offered at a Facility.
Service data is migrated to Lighthouse as a consumer via the [Drupal facilities migration](https://github.com/department-of-veterans-affairs/va.gov-cms/blob/main/READMES/migrations-facility.md#data-flow) overlay.

**Related KBs:**
* [How to add, edit, or remove a VAMC facility health service](https://prod.cms.va.gov/help/vamc/how-to-add-edit-or-remove-a-vamc-facility-health-service)
* [Remove a health service from a facility page](https://prod.cms.va.gov/help/vamc/remove-a-health-service-from-a-facility-page)

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

**KBs**
* [How to edit a VAMC "Top Task" detail page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-top-task-detail-page)

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
Veterans and VA employees need up-to-date information about the operating status of VHA facilities.

Whether it’s inclement weather or road closures, the VA.gov content management system allows VAMC editors to update facility operating status and add banner alerts and situation updates to VAMC pages, all in one streamlined editorial experience.

Editors of VAMC banner alerts can optionally trigger email bulletins via each VAMC system’s emergency updates email list, either when creating the initial alert, or with additional situation updates that editors add as new information becomes available.

For situations affecting multiple VAMCs, such as a hurricane, VISN or VHA editors can create one banner alert to display across a region.

The System Operating Status page is a structured content type in Drupal that generates a System page on VA.gov. It contains three primary types of information: 

1. In Drupal: A list of all VAMC Banner with Situation Update content published within the given System.
2. In Drupal and on VA.gov: A list of all Facility operating statuses, for Facilities in the System
3. In Drupal and on VA.gov: Local emergency resources directory for the system, as a rich text field.

[All VAMC System Operating Status pages.
](https://prod.cms.va.gov/admin/content?title=&type=vamc_operating_status_and_alerts&moderation_state=published&owner=All)

[All VAMC System Operating Statuses](https://prod.cms.va.gov/admin/content/vamc-alerts-and-statuses?field_alert_type_value=All&type=vamc_operating_status_and_alerts&moderation_state=All&status=1&field_administration_target_id=All) -- Statuses that appear on the pages above

Example: 
* Drupal: https://prod.cms.va.gov/birmingham-health-care/operating-status
* https://www.va.gov/birmingham-health-care/operating-status

**Related KB articles:**
* [About alerts and operating statuses](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses)
* [How to edit a facility operating status](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses)
* [How to edit a VAMC facility operating status](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses/how-to-edit-a-vamc-facility-operating-status)
* [Resources for emergency situations](https://prod.cms.va.gov/help/cms-basics/resources-for-emergency-situations)

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

Historically, this banner template is managed in content-build. The content-build > content-release publishing time exceeded 1 hour in 2024, and led to the [VAMC real-time banners initiative](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/initiatives/2024-real-time-banners), to enable faster publishing for this patient-safety-related content.

**Related KBs**
* [How to add a system banner alert](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses/how-to-add-a-system-banner-alert)
* [Best practices for VAMC system banner alerts](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/about-alerts-and-operating-statuses/best-practices-for-vamc-system-banner-alerts)

### Email Updates with GovDelivery
Editors may opt to "Send email update on this situation". Anyone subscribed to emergency updates for VAMCs associated with this situation update will receive an email via GovDelivery.

### Situation Update
Situation updates consist of a rich-text Update, a date & time stamp, and an option to send the Update via email  to subscribers of emergency emails for that VAMC System. This allows Editors to create a one-time banner, but follow up with evolving updates as a situation develops. 

Situation updates appear on each VAMC System Operating status page. 

**Related KB articles:**
[How to create a situation update](https://prod.cms.va.gov/help/vamc/how-to-create-a-situation-update)

### VAMC Real-time banners
VAMC Real-time banners is an alternate publishing method for VAMC System Banners with Situation Updates. VAMC SBwSU content from Drupal is pulled via a sidekiq job every 10mins, stored in vets-api datastore, and published via a vets-api endpoint. A vets-website React application polls that API endpoint for new data, and allow VAMC SBwSU content to publish ~every 10 minutes. 

Real-time banners do not currently (Dec 2024) support Situation Updates or Email updates via GovDelivery. Those both go through content-build / standard publishing pipeline, and will take the time required via that pipeline.

* [Product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/facilities/medical-centers/initiatives/2024-real-time-banners)
* [Technical architecture overview](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/medical-centers/initiatives/2024-real-time-banners/engineering/technical-architecture.md)

## VAMC Facility
[All published VAMC Facilities](https://prod.cms.va.gov/admin/content?title=&type=health_care_local_facility&moderation_state=published&owner=All)

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
* [How to edit a VAMC facility](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-locations-content-for-vamcs/how-to-edit-a-vamc-facility)
* [How do I update my VAMC Facility's Basic Location Data?](https://prod.cms.va.gov/help/vamc/how-do-i-update-my-vamc-facilitys-basic-location-data)
* [How to add a VAMC facility image](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-add-a-vamc-facility-image)
* [How to add or edit a VAMC facility mental health phone number](https://prod.cms.va.gov/help/vamc/how-to-add-or-edit-a-vamc-facility-mental-health-phone-number)

## VAMC System Locations List
[All VAMC System Locations lists](https://prod.cms.va.gov/admin/content?title=&type=locations_listing&moderation_state=published&owner=All)

A listing of VA facilities, within a System. Locations lists are created in Drupal to ensure consistent paths, menus, and section use, but the content entry is limited. 

The actual front-end content of Facilities in a System is determined programmatically by the Section used on a VAMC Facility.

Example: 
* Drupal locations list: https://prod.cms.va.gov/eastern-kansas-health-care/locations
* VA.gov page: https://www.va.gov/eastern-kansas-health-care/locations/

**Related KBs**
* [How to edit a Locations List](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-locations-content-for-vamcs/how-to-edit-a-locations-list)
* [About locations content — for VAMCs](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs)
* [How to add Other VA locations](https://prod.cms.va.gov/help/vamc/about-locations-content-for-vamcs/how-to-add-other-va-locations)
* [How do I update my VAMC Facility's Basic Location Data?](https://prod.cms.va.gov/help/vamc/how-do-i-update-my-vamc-facilitys-basic-location-data)

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

**Related KB:** 
[How to edit a leadership list](https://prod.cms.va.gov/help/vamc/how-to-edit-a-leadership-list)

### Staff profiles
[All published Staff profiles](https://prod.cms.va.gov/admin/content?title=&type=person_profile&moderation_state=published&owner=All)

Staff Profiles include bio information about individuals and can include a photo. 

Staff profiles may have their own page if "Create profile page with biography" is selected on the Drupal form.

**Related KB:** 
[How to edit or add a staff profile](https://prod.cms.va.gov/help/vamc/how-to-edit-or-add-a-staff-profile)


## News Release listings & News Releases
Each VAMC System has a  News Releases page, that displays News published news releases for that system, newest to oldest.

**Related KB:** 
* [What is a News Releases List](https://prod.cms.va.gov/help/vamc/about-news-release-content-for-vamcs/what-is-a-news-releases-list)
* [How to add a news release](https://prod.cms.va.gov/help/vamc/about-news-release-content-for-vamcs/how-to-add-a-news-release)
* [About news release content - for VAMCs](https://prod.cms.va.gov/help/vamc/about-news-release-content-for-vamcs/what-is-a-news-releases-list)

## Stories
Community stories highlight the role of a VA facility, program, or healthcare system in a Veteran's journey. They may be a case study of a specific patient, a description of a new or successful program, or a community-interest story.

**Featuring**: A story can be "Featured" on a VAMC System homepage. Featuring is buggy, and has some work outlined for a future state to better manage: [[EPIC] Rethink approach to VAMC Featured Stories #11401](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11401).

**Related KB:** 
* [What is the Stories list](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-stories-content-for-vamcs/how-to-edit-a-stories-list)
* [How to add or edit a Story](https://prod.cms.va.gov/help/va-medical-centers-vamcs/about-stories-content-for-vamcs/how-to-add-a-story)
* [How do I feature a Story on my site's homepage](https://prod.cms.va.gov/help/vamc/how-do-i-feature-a-story-on-my-sites-homepage)

## Events
Events are technically owned by the Public Websites team, but VAMC Events represents the vast majority of all Events. 

[Public Websites: Events product documentation](https://github.com/department-of-veterans-affairs/va.gov-team/tree/master/products/public-websites#event-detail-page)

**Featuring**: Events can be "Featured" on a VAMC System homepage. Featuring is buggy. When featuring is reworked for Stories ([[EPIC] Rethink approach to VAMC Featured Stories #11401](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/11401)), it will be removed from Events ([Epic: Deprecate "featured" UX and combined workflow for stories and events #1318](https://github.com/department-of-veterans-affairs/va.gov-cms/issues/1318).

**Related KB:** 
* [How to edit an event](https://prod.cms.va.gov/help/cms-basics/how-to-edit-an-event)
* [About Events content - for VAMCs](https://prod.cms.va.gov/help/vamc/about-events-content-for-vamcs)


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
* [How to edit a VAMC Pharmacy top task detail page](https://prod.cms.va.gov/help/vamc/how-to-edit-a-vamc-top-task-detail-page)
* [How to edit a VAMC "Health Service Caregiver Page" using a detail page](https://prod.cms.va.gov/help/vamc/about-health-services/how-to-edit-a-vamc-health-service-caregiver-page-using-a-detail-page)


## CTA widget
The CTA widget is a vets-website application that allows users to log in from the VA.gov page where the CTA widget is placed, and be directed to a specific location within the authed experience. 

Within VAMC pages, there are 5 pages that include a CTA widget. 
* The Health Apps group, MHV Cartography team is responsible (in partnership with CAIA) for the content in those widgets, and may make code changes.
* The React widget is then loaded into Drupal, and referenced from those 5 pages that appear on each VAMC.

The Health Apps team does not have Drupal access, so may need support from the Facilities team for any future Drupal updates. 

Widget | Benefits Page (CAIA + MHV Cartography / Identity teams own) | Example VAMC page (Identity owns the widget, may need Facilities support on Drupal side)
--- | --- | ---
HEALTH_RECORDS | https://www.va.gov/health-care/get-medical-records/ | https://www.va.gov/lovell-federal-health-care-va/medical-records-office/
LAB_AND_TEST_RESULTS | https://www.va.gov/health-care/view-test-and-lab-results/ |
MESSAGING | https://www.va.gov/health-care/secure-messaging/ |
RX | https://www.va.gov/health-care/refill-track-prescriptions/ | https://www.va.gov/minneapolis-health-care/pharmacy/
SCHEDULE_APPOINTMENTS | https://www.va.gov/health-care/schedule-view-va-appointments/ | https://www.va.gov/minneapolis-health-care/make-an-appointment/
