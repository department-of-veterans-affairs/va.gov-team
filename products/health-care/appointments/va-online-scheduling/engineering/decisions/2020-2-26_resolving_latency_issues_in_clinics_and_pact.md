# Resolving Latency Issues around Clinics and PACT team CDW Queries.

On or around January 31st, during UAT of VAOS Redesign, it was discovered that several of the API calls being made for direct scheduling an appointment were resulting in very high latency. These challenges were not known to the VAOS redesign effort until user acceptance testing commenced as the challenges simply do not manifest themselves in lower environments. We soon learned that this latency was the result of indexing changes made to CDW in the past year. The technical challenges will be discussed more thoroughly below.

## Technical Details

[Complete detailed technical summary]

## Possible Solutions and Temporary Workarounds

[Complete list of various ideas proposed]

- Increasing the Timeout temporarily to support UAT efforts.
- CDW Stored Procedure Optimizations
- Not using PACT team call in redesign
- Asynchronous requests
- PCMM API integration
- CDW database optimization, row based indexes.

## Ideal and Viable Solutions.

Of the possible solutions CDW database optimization with row based indexing seems to be the most promising and lowest level of effort, short to medium term solution.

CDW is how the current (legacy) VAOS application currently works and as a result it would require minimal changes by the BE Shared Services team to support this change. It provides us with an immediate drop-in replacement for the existing "column-based" CDW querying currently resulting in high latency.

While the ideal long term solution would be to get this data direct from the authoritative source, PCMM, it's not clear how well the web services they have available have been adequately vetted or if they could support the load and strain of bringing on additional API consumers at this time. Currently the web service is consumed solely by MyHealtheVet (MHV) with several other partners working to integrate. It is advised that we continue to engage with PCMM and work towards a long term solution as the web services available become more mature. At present, the optimized row-indexed CDW indexing addresses the latency challenges with the least amount of development needed to support. Asuming everything goes to plan and this solution can be delivered, it should be be v
On or around January 31st, during UAT, it was discovered that several of the API calls being made for direct scheduling an appointment were resulting in very high latency. These challenges were not known to the VAOS redesign effort until user acceptance testing commenced as the challenges simply do not manifest themselves in lower environments. We soon learned that this latency was the result of indexing changes made to CDW in the past yeiable solution for the short term (launch) and medium-term iteration goals of the VAOS redesign and retirement of legacy VAOS.

This solution should allow both the Redesign and Legacy VAOS application to immediately benefit from improved latency and response times, a complaint and issue raised by veterans throughout user research discovery.
