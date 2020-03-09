# Resolving Latency Issues around Clinics and PACT team CDW Queries.

On or around January 31st, during UAT of VAOS Redesign, it was discovered that several of the API calls being made for direct scheduling an appointment were resulting in very high latency. These challenges were not known to the VAOS redesign effort until user acceptance testing commenced as the challenges simply do not manifest themselves in lower environments. We soon learned that this latency was the result of indexing changes made to CDW in the past year. The technical challenges will be discussed more thoroughly below.

## Technical Details

[Complete detailed technical summary]

## Possible Solutions and Temporary Workarounds

[Complete list of various ideas proposed]

* Increasing the Timeout temporarily to support UAT efforts.
  - The timeout is currently set to 55 seconds to make it through UAT, but this latency is not viable for launch.
* CDW Stored Procedure Optimizations
  - These were briefly investigated and it was quickly discovered they would provide negligible improvement.
* Not using PACT team call in redesign
  - Jeff Balboni led discovery efforts on this and that is documented in [PACT Service Discovery](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/pact_service_discovery.md)
* Asynchronous requests
  - Would satisfy VSP concerns, but latency would still continue to be an issue from a user experience standpoint.
* PCMM API integration
  - Efforts will continue to investigate this as a long term strategy as we look to move away from CDW dependency.
* CDW database optimization, row based indexes.
  - Ideal for short to medium term discussed below.

## Ideal and Viable Solutions.

Of the possible solutions CDW database optimization with row based indexing seems to be the most promising and lowest level of effort, short to medium term solution.

CDW is how the (legacy) VAOS application currently works and as a result it would require minimal changes by the BE Shared Services team to support this change. It provides us with an immediate drop-in replacement for the existing "column-based" CDW querying currently resulting in high latency.

While the ideal long term solution would be to get this data direct from PCMM, the authoritative source (for a number of reasons some of which are documented [here](https://github.com/department-of-veterans-affairs/va.gov-team/blob/master/products/health-care/appointments/va-online-scheduling/engineering/discovery/pact_service_discovery.md)), it's not clear how well their web services have been vetted or if they could support the load and strain of bringing on additional API consumers at this time. Currently the web service is consumed solely by MyHealtheVet (MHV) with several other partners working to integrate. On a call with the group earlier in the week they were very open and transparent about stability challenges that they've run into. They do not yet know the root cause but are actively working to address this and other challenges. It is advised that we continue to engage with PCMM and work towards a long term solution as their web services become stable and more mature. At present, this solution would come with added risk and a much higher level of effort to the BE Shared Services team.

The optimized row-indexed CDW indexing improvements address the latency challenges with the least amount of development effort. Asuming everything goes to plan and this solution can be delivered in a timely manner, this solution would allow both the VAOS redesign and legacy VAOS application to immediately benefit from improved response time, a complaint and issue raised by veterans throughout user research discovery.

## Final Decision

TBD
