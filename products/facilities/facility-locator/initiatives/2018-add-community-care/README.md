# Community Care Overview

## What is the Facilities & Services Locator?
It is the Veteran Administrations (VA) online tool that allows veterans to find VA locations near
them. They can search for the nearest VA medical center as well as other health facilities,
benefit offices, cemeteries, and Vet Centers. They can also filter their results by service type to
find locations that offer the specific services they are looking for in their desired area.

## What are VA Community Care Providers?
Through VA Community Care (and the Veterans Choice Program), Veterans, under certain
circumstances, can receive care from providers in their community instead of using VA hospitals
and clinics
The Veterans Choice Program is one of several programs through which a Veteran can receive
care from a community provider, paid for by the Department of Veterans Affairs (VA). For
example, if a Veteran needs an appointment for a specific type of care, and VA cannot provide
the care in a timely manner or the nearest VA medical facility is too far away or too difficult to
get to, then a Veteran may be eligible for care through the Veterans Choice Program.
To use the Veterans Choice Program, Veterans must receive prior authorization from VA to
receive care from a provider that is part of VA’s VCP network of community providers. The
authorization is based on specific eligibility requirements and discussions with the Veteran’s VA
provider. VA must authorize care that is needed beyond the scope of the first authorization.

**Original Community Care team suggested changing**
- The H1 to "Find Facilities and Services" to better encapsulate the non-VA services
- The global nav link to "Find Facilities and Services" to better encapsulate the non-VA services

**Performance**
- There are a few fields that do not get returned in the first call to PPMS, such as phone number, address and services. In order to get that information, a second call is made for every result they get up to 20. The second call gets the additional information and adds it to the record before returning it to the front end.

**Provider data elements for Facility Locator**
- Providers in Community Care need three data elements: 
  - provider (who)
  - their specialty (what)
  - care site (where) to be available to the Facility Locator

[Link to summary of changes and decisions](https://github.com/department-of-veterans-affairs/vets-website/pull/8651)

![Diagram](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/facilities/facility-locator/images/PPMS%203Ws.pdf)



