# VAMC features

VAMCs are comprised of many features, mostly deriving from Drupal. Major features include: 
* Centralized Content
* VAMC System
  * Lovell
  * Manila
* VAMC Facility
* VAMC Health Services
* VAMC Facility Health Service
* VAMC banners with situation updates (including GovDelivery integration)
* VAMC real-time banners
* VAMC Detail Pages
* VAMC Locations List
* VAMC Operating status
* VAMC Billing & Insurance
* VAMC Medical Records office
* VAMC Register for Care
* VAMC Policies
* VAMC Police


## Centralized Content
https://prod.cms.va.gov/admin/content?title=&type=centralized_content&moderation_state=published&owner=All

Centralized Content is a Drupal content-type that is used to allow administrative leadership to set some text, policy, content, etc. that will apply to a set of similar content at a lower level. For example, VHA leadership uses Centralized Content to apply some language to all VAMC pages of the same type (Medical Records, Billing & Insurance, etc). 

National Editors create and manage the content. 
Drupal then embeds that content on the related nodes in a way that shows local Editors what the centralized content says, but does not allow them to edit it. 

Centralized Content is used on all modernized Facility types. (As of Nov 2024: VAMCs, Vet Centers, VBA Regional Offices.)

## VAMC System
VA Medical Care (VAMC) facilities are organized into Systems. A VAMC System is also a Drupal entity that includes a standard information architecture (in all but 2 cases). 

The VAMC System node from Drupal acts as the System landing page on VA.gov (with the exception of Manila), and includes a left side navigation bar to find other content. Other data entities described in more detail below are effectively children of VAMC Systems: 
* VAMC System Location lists
  * VAMC Facilities
* Top task pages
  * Medical Records
  * Billing & Insurance
  * Register for Care
* Event listing
  * Events
* Leadership Lists
  * Staff profiles
* Story listings
  * Stories
* News release listings
  * News releases
* VAMC Programs pages
* VAMC Policy pages
* VAMC Police pages
* VAMC System operating status

For more flexible content that is not strictly defined by VAMC System IA, editors can use VAMC Detail pages.

There are two unique VAMC Systems that do not follow the standard IA:

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

### VAMC Facility Health services
VAMC Facility Health service is a Drupal node that establishes a relationship between a VAMC System Health Service, and a VAMC Facility, and indicates that the given Service can be / is offered within that Facility. Facility Health Services appear on a VAMC Facility page, within accordions.
  * **Example:** https://www.va.gov/minneapolis-health-care/locations/minneapolis-va-medical-center/#complementary-and-integrative-health
  *  [All VAMC Facility Health Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=health_care_local_health_service&moderation_state=All&owner=All)

### Non-clinical Services
For VAMCs, Non-clinical services are not related to the VA Services taxonomy. Options include: 
* Medical Records
* Billing & Insurance
* Register for Care

  *  [All VAMC Facility Non-Clinical Services in Drupal](https://prod.cms.va.gov/admin/content?title=&type=vha_facility_nonclinical_service&moderation_state=All&owner=All)
 
TODO: 
1. Why would an Editor create a non-clinical service page for these, instead of a MR / B&I / RfC node? How are those different? Need to check the Drupal UI & describe.

## VAMC Facility
A VAMC Facility is single facility within a VAMC System. This can be a:
* VA Medical Center (hospital)
* VA Clinic
* Mobile VA Clinic

VAMC Facilities have associated Facility Health Services, or Facility Non-clinical services. 

## VAMC banners with situation updates (including GovDelivery integration)


## VAMC real-time banners


## VAMC Detail Pages


## VAMC Locations List


## VAMC Operating status


## VAMC Billing & Insurance
Top task


## VAMC Medical Records office
Top task


## VAMC Register for Care
Top task


## VAMC Policies


## VAMC Police



