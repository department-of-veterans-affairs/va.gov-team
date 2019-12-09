# VA Regional Office (RO) Facility System Sites

This is the new VA.gov facility product for VA's Regional Offices and benefits facilities.

- VBA runs 60 Regional Offices, with hundreds of child facilities (i.e., intake sites, VocRehab sites, Vet Success on Campus sites, and others?)
- Like VAMCs, ROs are a network of facilities; the Regional Office is the parent facility, and other benefits facilities are children
- VBA's facilities are unique because they provide VA benefits help for all three administrations (i.e., they will help you apply for health care and get burial benefits)

**Business partners:**

- Misty Sweet, VBA Communications Officer (Misty.Sweet@va.gov)
- Sandy Tadeo, VBA Communications (Sandy.Tadeo@va.gov)
- Adrianne Hooten, VBA Communications (Adrianne.Hooten@va.gov)

## What we need to do

- Research, design, and write new content for "Prepare for your visit" section
- Research, design, and write new VBA benefit services taxonomy
- Research, design, and write (first draft/pilot) local facility content for each benefit service
- Build Regional Office/benefits facilities in Drupal
- Build VBA benefits services taxonomy in Drupal, and integrate into the Facilities API
- Build and publish new front-end VA Regional Office facility product
- Research, design, and write new content for new facility products

## Old/legacy Regional Office/benefits websites

We need to reach parity with our new Regional Office/benefits products so we can turn off all the old sites.

- Regional Office website: https://www.benefits.va.gov/ROWINSTONSALEM/index.asp
- Facility Locator RO facility detail page: https://www.va.gov/find-locations/facility/vc_0201V
- Facility Locator benefits facility detail page: https://www.va.gov/find-locations/facility/vba_318c

Vet Centers do not have their own facility detail pages outside the Faciltiy Locator tool.

## Assumptions and early discussions

- VBA (Misty, Sandy, and Adrianne) want to adopt the same facility system product template as the new VAMC product
  - Like VAMCs, ROs are a network of facilities; the Regional Office is the parent facility, and other benefits facilities are children (if this is the case, then it needs to be represented hierarchically in the Facilities API and Drupal)
- We need to design a Make An Appointment page that applies to all ROs
- VBA's VocRehab sites are oftentimes located at VAMCs (VocRehab is built into the VHA health services taxonomy for this reason)
  - We need to figure out the user flows into VocRehab facilies and services, since users will be able to get to them from a VAMC site, RO sites, and Facility Locator
