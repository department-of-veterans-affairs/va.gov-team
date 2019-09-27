# Facility Locator

All about VA.gov's über product: <https://www.va.gov/find-locations>

**Product owner:** David Conlon - <David.Conlon@va.gov>

**Supporting product owner:** Andy Lewandowski - <Andrew.Lewandowski2@va.gov>

## What to know abut the product

- It is VA's single source of truth for customers to find VA facilities and location details about all VA facilities, across VHA, VBA, and NCA
- It is the newer version of VA's old facility locator: <https://www.va.gov/directory/guide/home.asp>
- It is powered by the VA Facility API
- It serves many purposes, from finding basic facility address and phone information to preparing for a visit to determining eligiblity for community care

## Documentation about the product

- Facility Locator 1.0 work can be found in this old repo: <https://github.com/department-of-veterans-affairs/vets.gov-team/tree/master/Products/Global/Facilities_Locator>
- Facility API information: <https://developer.va.gov/explore/facilities/docs/facilities>

## Other useful POCs

- VA.gov Lead: Chris Johnston - <Christopher.Johnston2@va.gov>
- Facility API Product Owner: Dave Mazik - <David.Mazik@va.gov>
- VSSC Analyst/Engineer: Chad Holmes - <Chad.Holmes@va.gov>

-----
# Facility Locator 2.0

All about the 2019-2020 roadmap to make the next version of the product even better for users.

## Product goals
- Integrate urgent care facility and urgency care pharmacy facilities into the product
  - Here is VA's current product: <https://vaurgentcarelocator.triwest.com/>
- Update the product's information architecture to organize facilities based on users' mental models (e.g., mental health care vs. Vet Center)
- Update the product's UI and interaction design so users can get to facility results in just a few clicks/taps
- Update facility detail page to match new VAMC facility page design
  - Here is a health facility detail page design: <https://www.va.gov/pittsburgh-health-care/locations/pittsburgh-va-medical-center-university-drive/>
- Surface basic Veteran-benefit eligibility information for each facility type (e.g., health care facility, community care provider, etc.)
- Use the VHA health service taxonomy for health facilities
- Fix bugs

## Design problems
- Users don't have a way to get to urgency care facilities
  - See the following research study documentation:
    1. Main research repo: <https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Health%20care/UrgentCare/Research/June-2019/findings.md>
    2. Research readout: <https://github.com/department-of-veterans-affairs/vets.gov-team/blob/master/Products/Health%20care/UrgentCare/Research/June-2019/DSVA-UrgentCareUsabilityStudy-KevinMHoffman-V001.pdf>
    3. User flows Mural board: <https://app.mural.co/t/adhocvetsgov9623/m/adhocvetsgov9623/1560946920965/4bb321f266f232e3e1d91559b168a0f3c11fe84f>

## What to research
- Pain points and bright spots with the current product (i.e., evaluative usability testing)
- How users 
- How/if we should integrate content editing of facility details pages using the Drupal CMS (more here: 

## Engineering goals
- Make the product work faster for users
- Rearchitect how we call data from the community care database
