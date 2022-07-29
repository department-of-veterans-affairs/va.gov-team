# VBA Facility Sites

This is the new VA.gov facility product for VA's Facilities that offer Benefits Services

- VBA runs 58 Regional Offices, with hundreds of child facilities (i.e., intake sites, VocRehab sites, Vet Success on Campus sites, and others?)
- Like VAMCs, ROs are a network of facilities; the Regional Office is the parent facility, and other benefits facilities are children
- VBA's facilities are unique because they provide VA benefits help for all three administrations (i.e., they will help you apply for health care and get burial benefits)

**Business partners:**
- J.R. Arce, Chief, Digital Media and Design, VBA Strategic Engagement (jeku.arce@va.gov)
- Tanekwa Bournes, VBA Strategic Engagement & VBA facilities lead (tanekwa.bournes@va.gov) 
- Kenyonna Power, VBA Strategic Engagement
- Derek Hommema, VBA Office of Field Operations (Derek.Hommema@va.gov)
- Brigette Murray, VBA Office of Field Operations (Brigette.Murray@va.gov)

** VBA Stakeholders:**
- Laura O'Shea, Office of Policy Overview at VBA
- Jamie Statton, Office of Policy Overview at VBA
- 

## What we need to do
- Research, design, and define the facilities hierarchical structure as it relates to Veteran needs and understanding
- Research, design, and write new content/create content guidelines for field editors for location-specific content, for example "prepare for your visit" section and others
- Research, design, and write new content/create content guidelines for national editors for national COPE content
- Research, design, and extend the VA services taxonomy to include VBA services; write as-necessary
- Research, design, and write (first draft/pilot) local facility content for each benefit service
- Build pilot VBA facilities in Drupal
- Build and publish new front-end VBA facilities product(s)
- Sunset legacy sites
- Integrate VBA facilities from Drupal into the Facilities API as source of truth
- Identify current users of VBA_facilities CDW database, create sunset plan and deprecate VBA database

## Old/legacy Regional Office/benefits websites

We need to reach parity with our new Regional Office/benefits products so we can turn off all the old sites.

- Regional Office website: https://www.benefits.va.gov/ROWINSTONSALEM/index.asp
- Facility Locator RO facility detail page: https://www.va.gov/find-locations/facility/vba_318
- Facility Locator benefits facility detail page: https://www.va.gov/find-locations/facility/vba_318c


## Assumptions and early discussions

- VBA want to adopt the same facility system product template as the new VAMC product
  - Like VAMCs, ROs are a network of facilities; the Regional Office is the parent facility, and other benefits facilities are children *and this structure is important for the Veteran* (if this is the case, then it needs to be represented hierarchically in the Facilities API and Drupal)
- We need to design a Make An Appointment page that applies to all ROs
- VBA has "Satellite" Regional Office sites often located at VAMCs or Vet Centers
  - We need to figure out the user flows into VocRehab facilies and services, since users will be able to get to them from a VAMC site, RO sites, and Facility Locator
- VBA's Veteran Readiness and Employment sites are both stand-alone but also often times located at VAMCs or Vet Centers(VocRehab is built into the VHA health services taxonomy for this reason)
  - We need to figure out the user flows into VocRehab facilies and services, since users will be able to get to them from a VAMC site, RO sites, and Facility Locator

## VBA Facility types

The data call in August 2021 defined these as the different types of VBA Facilities:

| VBA Facility type | Definition  |
| --- | --- |
| Regional Benefit Office | This is the main VBA facility of jurisdiction that provide a listing of all VA regional offices (RO), an email address for contacting the regional office director, and a listing of additional VA facilities located in each state. VA regional offices assist Veterans, Service Members and dependents with applying for benefits, compensation, education and training, Veteran readiness and employment, home loans, life insurance, pension, appeals, and other services. |
| Satellite Office  | This is a facility not within an RO that may primarily provide VR&E services, but also includes other services and VBA representatives from other business lines. |
| VetSuccess On Campus  | This facility is primarily a space where VBA staff is located on college and university campuses. The VSOC program provides a VA Vocational Rehabilitation Counselor (VRC) to each VSOC school. These VRCs are called VetSuccess on Campus (VSOC) Counselors. A VA Vet Center Outreach Coordinator is also provided, and co‐located on many campuses, to provide peer‐to‐peer counseling and referral services. |
| Veteran Readiness and Employment Office | This is a facility not within an RO that only provides Vocational Rehabilitation and Employment (VR&E) services that helps Veterans with service‐connected disabilities and an employment handicap prepare for, find and maintain suitable careers. |
| IDES Site | This facility works together with the Department of Defense (DoD) to make disability evaluation seamless with VA if a servicemember is found to be medically unfit for duty. IDES will provide a Veteran a proposed VA disability rating before they leave the service. |
| Pre‐Discharge Site  | This facility is a joint VA and DOD location to file a claim for disability compensation up to 180 days prior to separation or retirement from active duty or full time National Guard or Reserve duty (Titles 10 and 32).  |
| Seamless Transition Integrated Care Clinic (STICC)  | This facility is a transition clinic located in VHA facilities, there are VHA and VBA Rehab counselors as well as VBA Compensation and Benefits (Comp & Pen) personnel that assist transitioning servicemembers with benefit-related information. |

