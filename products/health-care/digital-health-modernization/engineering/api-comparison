# Background
In order to better understand which API would be a better approach for the MHV-to-VA.gov migration, interviews with SMEs and team members that work on each API were conducted. These interviews helped to provide a more complete understanding of each API as well as their capabilities and limitations, both technically and in terms of business need.

There were a handful of areas where PHR and Lighthouse differ, which will be explained in greater detail:

| PHR | Lighthouse | 
| --- | --- | 
| Data retrieved from VistA through VIA/VDIF | Data retrieved from CDW |
| Includes PGHD by-way-of OCC's PGHD API | Does not include PGHD yet |
| Does not currently integrate with Cerner | Work currently underway to return Cerner data |
| Does not de-duplicate data between VAMCs | De-duplicates data between VAMCs (will also de-duplicate between VAMCs + Cerner, once that integration is complete)|
| Returns all (?) data from VistA | Only a subset of data categories from VistA/Cerner is returned |
| Domains, generally, are refreshed at-most once per 24 hours | Because of CDW, data can be 1 to 2 days old |
| No practical limit on medical record history | 2009 is the earliest date that medical record data is available from |
| Does not currently return data in standardized format, like FHIR | Returns data in FHIR R4 or DSTU2 formats |
| Medical record refresh queries take 20-30 seconds on average | Medical record queries are sub-second |
| Unknown state of developer documentation | Public developer portal houses [documentation](https://developer.va.gov/explore/health/docs/fhir?version=current) |

# Overview
## Data sources
PHR and Lighthouse ultimately retrieve their information from the same source: VistA. However, PHR is querying VistA instances using VIA/VDIF for medical record information which afford PHR access to the complete medical record while Lighthouse is pulling a subset of the available medical record data from CDW (specifically structured CDW data that has been processed by the BISL team) into their own datastore. In interviews with a PO for the Lighthouse Patient Health API, he stressed that all the current limitations in terms of data points, history, etc are open for discussion and that the expectation is that they will need to add to the completeness of medical record data as the Lighthouse Patient Health API is used more.

With regards to Cerner, the PHR team had discussed integrating with Cerner's APIs to provide that data in MHV but didn't get much traction with Cerner and that effort eventually stalled. Lighthouse is currently in active development on integrating with Cerner and will provide de-duplicated VistA and Cerner data in a single endpoint.

PHR supports self-entered data from a Veteran on MHV and also integrates with OCC's PGHD API for interacting with patient-generated health data. Lighthouse does not currently support patient-generated or self-entered health data, but have plans to develop their own flavor of a PGHD API like OCC's.

Another point to think about is that if Lighthouse is selected as the source of medical record data on VA.gov, is there any concern that the sources of VA.gov and MHV could present different data or histories at different levels of detail? This could certainly create questions and uncertainty for Veterans as the phased Health Apartment rollout allows Veterans to access related services on both VA.gov and MHV.

### CDW
Throughout many interviews with many different parties, the topic of CDW being an appropriate data source for patient-facing applications has been a hot one. There is an inconsistent opinion within VHA on the suitability of CDW for patient-facing applications. The PBM team _vehemently_ opposes the use of CDW (and Lighthouse Patient Health API, by proxy) for patient-facing applications, specifically with regard to medications and allergies. The BISL team, who is responsible for structuring and processing CDW data that Lighthouse uses, is also of the opinion that the data is not suitable for patient-facing applications.

That being said, there have been other groups and individuals who endorse CDW as an acceptable source of data for patient-facing applications. In a conversation with Dave Mazik and Adam Foster from the Lighthouse team, they stressed that a majority of the issues that the PBM team had were actually issues in the way that Apple rendered health data in the Health app on iOS. They also mentioned that some doctors (like Dr. Evans) have endorsed the use of CDW for patient-facing applications and that some have even endorsed the use of CDW in limited clinical applications.

## Data format
PHR does not currently provide medical record data in any sort of standardized format, while Lighthouse (and the Cerner Millenium API) provide data in a FHIR format allowing much greater interoperability. The PHR team is working on the first steps of "FHIRizing" their API, with an estimated completion of this work in the first quarter of 2023. There were a number of limitations identified in the end result of this process as a result of attempting to massage the existing data, model, and systems to fit within the FHIR specification.

Since data refreshes are not additive, a domain refresh causes existing data to be removed and replaced with the latest response which prevents maintaining a consistent FHIR resource identifier for things like Immunizations or Encounters. Things like Immunization codes are not stored in a format that is fully compliant with the FHIR specification for that field. These limitations aren't necessarily dealbreakers, but lead to the possibility of developing against a FHIR-like specification specific to PHR, which could cause problems in the future if the data source ever changes or needs to be fully FHIR-compliant.

Lighthouse supports the FHIR R4 and DSTU standards (which are the formats Cerner Millenium also supports).

## Data freshness
PHR uses VIA/VDIF to access VistA records, which should provide the most up-to-date data. There is also no limit on how far back a Veteran's history can be queried, though the age and complexity of those records can greatly impact the API's response time. However, this is a very expensive operation and this refresh has been limited to generally occur once per day, though that limit is configurable. For example, appointment information can be updated by a user every 10 minutes.

Lighthouse has their own datastore (similar in practice to eVault), which queries CDW for medical record data. CDW receives data dumps from VistA instances daily. Because of this, data provided by Lighthouse can be anywhere from 1 to 2 days old (including appointment information, but the team is working on an endpoint to provide realtime appointment data). Lighthouse's data store also includes only a subset of information available in CDW, which is done to keep Lighthouse's API response times under a second. This subset of data is not representative of a Veteran's complete medical record with regard to data points/categories/domains or history. Lighthouse's earliest medical records only go back to 2009.

# API performance
The amount of data that PHR has access to impacts its response times - while the PHR team stressed that they have no concerns about performance and are able to easily scale to meet load, the average response time for domain refreshes is 20 to 30 seconds, with those times creeping even higher for Veterans with complex or lengthy medical histories in VistA. Once the data has been refreshed and stored in eVault, subsequent requests only take a few seconds to return a response.

One of Lighthouse's goals is performance which is reflected in their speedy sub-second response times. The Lighthouse team also expressed no concerns with regard to uptime or availability and have explicit uptime expectations of 99.9% in their Production environment (which equates to ~8 hours of downtime per year).

# Analysis
1. ✅ **PHR Benefits**
    - Having access to the complete medical record from VistA
    - No data availability delay like in the case of CDW
        - Though there's generally a self-enforced restriction of querying once per day, due to the expensive nature of the query
    - No limit to how far back in time a record can be accessed
        - The caveat being that there are technical drawbacks when accessing medical history that spans decades
    - Supports PGHD
    - Can provide everything for VA.gov that is present on MHV today
2. 🚫 **PHR Drawbacks**
    - Data refreshes take 20-30 seconds on average to return data
        - Can get much higher for complex medical histories
    - Veteran data between VAMCs is not de-duplicated
    - Does not integrate with VAMCs operating on Cerner
    - FHIR implementation comes with some caveats that seem to prevent it from being fully FHIR-compliant
3. ✅ **Lighthouse Benefits**
    - Queries take less than a second to return data
    - Data is de-duplicated between VAMCs
        - Data will also be de-duplicated between VAMCs and Cerner once that integration is completed
    - Integration with Cerner is underway
        - Will be one endpoint that returns de-duplicated Cerner and Vista data
4. 🚫 **Lighthouse Drawbacks**
    - Lighthouse stores a subset of CDW data in their own datastore for performance reasons, which results in an "incomplete" medical record history
    - Reliance on CDW imposes a delay of 1 to 2 days until new data may be available
    - Data only goes back to 2009
    - No PGHD support
        - The team has plans to work on their own version of a PGHD API
    - A lot of strong opinions on whether or not CDW is an acceptable data source

# Additional notes & thoughts
- PHR has 10-15 years of development and business logic baked in
    - It has set an expectation for how Veterans and others expect their data to look and function
    - It has also almost certainly accrued some level of cruft and arcane business rules over the years - there's no good inventory or idea of what some of these business rules are which might make a transition to Lighthouse bumpy
- Lighthouse drives Apple Health data which Veterans could have familiarity with
- Lighthouse PO stressed that limitations, either on medical data point, history of data, etc are all open for discussion
- Lighthouse's data for medical records on VA.gov might differ from what is present in an existing Blue Button report, which could cause confusion
- Cerner's HealtheIntent platform is being explored as well
    - There are concerns around security clearances being required for integration
