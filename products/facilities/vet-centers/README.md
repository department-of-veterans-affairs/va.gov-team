# VA Vet Center Facility Product

Product owner: David Conlon

This is the new VA.gov facility product for VA's Vet Centers.

- VHA runs ~300 Vet Centers
- Vet Centers are stand-alone facilities; they are not integrated into VAMC health care systems
- Vet Centers may have an Outstation (included in VAST)
- Vet Centers may have one or more Community Access Points (not in VAST)
- Veterans do not need to be enrolled in VA health care to receive care from a Vet Center
- Vet Centers also serve Veterans not eligible for other VA services (e.g. less than honorable discharge) and may serve the families of existing, active-duty service men and women who are deployed
- Services that Vet Centers offer can be similar to those offered at a Medical Center but the way in which the service is provided may be very different (e.g. Group therapy, Equestrian Therapy, no ability to prescribe medication)

**Business partner:**

- Jessica Schiefer, VHA Vet Center Communications Officer (Jessica.Schiefer@va.gov)

## What we need to do

- Understand the relationship between Vet Center, Outstation, and Community Access Point and convey this "catchment area" relationship
- Capture the hours and location of Community Access Points and integrate into Faciltiies API (do we worry about services for MVP?)
- Research, design, and write new content for "Prepare for your visit" section
- Research, design, and write Vet Center services taxonomy
- Research, design, and write (first draft/pilot) local facility content for each Vet Center service
- Build Vet Center facilities in Drupal
- Build VHA Vet Center services taxonomy in Drupal, and integrate into the Facilities API
- Build and publish new front-end VA Vet Center facility product
- Research, design, and write new content for new facility products
- Develop national and local content maintenance capabilities
- Train VA local and national content maintainers

## Old/legacy Vet Center websites

Eventually, we need to reach parity with our new Vet Center products so we can turn off all the old sites. There is not much on these pages so this can likely be achieved through MVP.

- Facility Locator facility detail page: https://www.va.gov/find-locations/facility/vc_0201V
- Facilities and Leadership directory page https://www.va.gov/directory/guide/facility.asp?ID=619

We need to consider what to do with the Vet Center program site: https://www.vetcenter.va.gov/ as this site may be partially offices site, partially veteran-facing

Vet Centers do not have their own facility detail pages outside the Faciltiy Locator tool, however the pages from Facilities and Leadership directory are publicly available and can act as these pages.

## Assumptions and early discussions

- Critical that we convey the Community Access Point and Outstation locations and hours (services?) so that Veterans are aware that locations may be closer to him/her than previously thought through products like Facility Locator
- Use schema.org and markup on Front-end to ensure that google/bing location cards are utilized in search results.
- Vet Centers are an under-utilized and -promoted benefit/service for Veterans, so we will need to find a way to explain the value proposition of a Vet Center and link to this from the Vet Center facility product and/or indicate this as part of the facility product (more research needed)
- ~~We need to design a Make An Appointment page that applies to all Vet Centers (not MVP)~~
- We need to design a Connect With A Counselor Now page that applies to all Vet Centers (not MVP)
- Vet Centers form a lot of partnerships with local community groups, so they need an Events section to highlight and promote events (not MVP)
