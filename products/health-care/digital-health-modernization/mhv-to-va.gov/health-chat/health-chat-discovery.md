# VA Health Chat Discovery

## Executive Summary

## Resources

* [VA Health Chat website](https://mobile.va.gov/app/va-health-chat)(Not to be confused with the [Virtual Agent Web Chat](https://www.va.gov/contact-us/virtual-agent/))
* [Health chat training material](https://mobile.va.gov/sites/default/files/documents/hopat1994-va-health-chat-at-a-glance-508_final-1.pdf)
* [VA Health Chat discovery Mural](https://app.mural.co/t/departmentofveteransaffairs9999/m/departmentofveteransaffairs9999/1718075410575/0f29fdbccc61d21bbf524d4769de17a2173e37cd)


## UX Discovery
People: 
* Kaitlin Fink (OCTO)

### Features of VA Health Chat: 
* Find your closest VA facility
* Schedule an appointment
* Refill a VA prescription
* Send a non-urgent message to your health care team - VA Health Chat does not connect the user directly to their VA care team, instead it is generic help from a staff member at the broader VISN that the facility bubbles up to.

### Support for VA Health Chat across facilities
VA Health Chat is support based on VISN (not at child facility level). There are 18 VISNs at the VA. As of June 2024, all VISNs support VA Health Chat at some level, but not all have 100% coverage on the 4 support areas. 




## Technical Discovery
People: 
* Carlos Felix (Cartography Team)
* Hugo Padilla (OCC)
* Patrick Bateman (OCTO)

### Questions to answer:
**Who is POC for CirrusMD API integration?**
* Hugo Padilla (OCC) who is best reached on Teams or via email. Copy Patrick Bateman on comms.

**How to determine a user is eligible for Health Chat?**
* Per Hugo Padilla on an email to Patrick June 14, 2024: The VA Health Chat/CirrusMD API can be used to return a list of VA Chat services/plans that are currently available to a particular patient.
* Kaitlin Fink - Unknown what the true definition of a "plan" is. Kaitlin Fink thinks the "plans" are the types a user has access to: Virtual Clinic Visit (Urgent Care), Clinical Triage, Scheduling and Administration, and Pharmacy. The plans are based on what Veterans Integrated Services Network (VISN) they are associated with. The goal is for all VISNs to support all 4 but they aren't there yet. All VISNs have at least one healthchat plan available. It is specific support per VISN not by facility.

**What is the link we will use in the Landing Page to the chat tool?**
* @carlosfelix2 - Link to browser based chat: https://veteran.apps.va.gov/users/v2/login?redirect_uri=/cirrusmd from public website.

**How to determine at what times the chat is supported?**
* Potentially use the VA Health Chat/CirrusMD API for this.
* Potentially each service/plan has different hours. Which service/plan are we linking to? @carlosfelix2 - I am thinking the user needs to choose which one as per how the chat works today.

**What is the authentication for the VA Health Chat/CirrusMD API?**
* Per Hugo Padilla on an email to Patrick June 14, 2024: Believe it is Oauth authentication.
* Per Hugo Padilla on an email to Patrick June 14, 2024: the authentication IDs the veteran and hence no ID needs to be passed in to the API to get data.
* @carlosfelix2 - Looks like the browser based chat uses the same VA authentication from a quick try on the public website.
* @carlosfelix2 - Per the Health Chat training doc: To use VA Health Chat, the user must be enrolled in VA health care in a location that supports VA Health Chat and have Login.gov, ID.me, DS Logon Level 2 (Premium), or My HealtheVet Premium account credentials. There is no mention of LOA1 or LOA3.

**Is there an existing vets-api service for Health Chat?**
* @carlosfelix2 - NO! A search of the baseline only shows web chat is available.

**Can we get sample response(s) for the VA Health Chat/CirrusMD API?**
TBD

### Cartography team discovery tickets
* [Ticket 86753](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86573)
* [Ticket 86756](https://github.com/department-of-veterans-affairs/va.gov-team/issues/86576)
  
